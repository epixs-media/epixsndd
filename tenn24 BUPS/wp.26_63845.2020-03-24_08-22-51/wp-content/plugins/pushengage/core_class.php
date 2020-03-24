<?php

	class Pushengage
	{
		private static $pushengage;
		public static $pushengage_version = '1.5.7';
		public static $database_version = '12-08-2019';
		//Constructor Function
		public function __construct()
		{
			//blank
			global $wp_session;
		}

		//Init Function
		public static function init()
		{
			if ( is_null( self::$pushengage ) )
			{
				self::$pushengage = new self();
				$pushengage_settings = self::pushengage_settings();

				if(!empty($pushengage_settings['appKey']))
				$app_key = $pushengage_settings['appKey'];
				else if(!empty($_POST['appid']))
				$app_key = $_POST['appid'];

				//check user authentication
				$wp_session['check_auth'] = self::checkUserAuthenticaiton($app_key);

				if(!empty($app_key) && empty($wp_session['check_auth']['error_code']))
				{
					$wp_session['menu_active_key'] = true;
				}
				else 
				{
					$wp_session['menu_active_key'] = false;
				}

				self::add_actions();


				if ( empty( $pushengage_settings ) || ( self::$pushengage_version !== $pushengage_settings['version'] ) )
				{
					self::install( $pushengage_settings );
				}
			}
			return self::$pushengage;
		}

		public function checkUserAuthenticaiton($app_key)
		{
			if(!empty($app_key) && !empty($_GET['page']) && $_GET['page']=='pushengage-admin' && empty($wp_session['check_auth']))
			{
				$wp_session['check_auth'] = Api_class::verifyUser($app_key);
				return $wp_session['check_auth'];
			}
			else
				return false;
		}

		public static function print_my_inline_script()
		{
			echo "<script> window._peq = window._peq || []; window._peq.push(['init']); </script>";
		}

		//Actions Function
		public static function add_actions()
		{
			$pushengage_settings = self::pushengage_settings();
			add_action( 'wp_enqueue_scripts', array( __CLASS__, 'pushengageDomainScripts') );
			add_action( 'transition_post_status', array( __CLASS__, 'sendPostNotifications' ), 10, 3 );
			
			//If subscription popup is not blocked then only we add async to core script
			if($pushengage_settings['disable_subscription_popup']!=true)
			{
				//Include subscritpion popup async function
				add_action( 'wp_head', array( __CLASS__, 'print_my_inline_script') );
				//Include subscripiton popup core script with async mode
				add_filter( 'script_loader_tag', function ( $tag, $handle ) {

					if ( 'core' !== $handle )
						return $tag;
				
					return str_replace( ' src', ' async src', $tag );
				}, 10, 2 );
			}

			if ( is_admin() )
			{
				// add segment based post box in sidebar
				add_action( 'add_meta_boxes', array( __CLASS__, 'note_override_add_meta_box' ) );
				
				add_action( 'add_meta_boxes', array( __CLASS__, 'custom_note_text' ), 10, 2 );
				add_action( 'admin_init', array( __CLASS__, 'pushengage_save_settings' ) );
				add_action( 'admin_menu', array( __CLASS__, 'admin_menu_add' ) );
				add_action( 'save_post', array( __CLASS__, 'save_post_meta_data' ) );
			}
		}

		public static function pushengage_settings()
		{
			return get_option( 'pushengage_settings' );
		}

		public static function pushengage_active()
		{
			$pushengage_settings = self::pushengage_settings();
			$app_key = $pushengage_settings['appKey'];
			if ( ! empty( $app_key ) ) {
				return true;
			} else {
				return false;
			}
		}

		public static function note_override_add_meta_box() {
			$pushengage_settings = self::pushengage_settings();
			//echo "<pre>";print_r($pushengage_settings);exit;
			if(!empty($pushengage_settings['all_post_types']))
			$screens = get_post_types();
			else
			$screens = array('post');	
			foreach ( $screens as $screen ) 
			{
				add_meta_box(
					'pushengage_notif_on_post',
					'PushEngage Push Notification',
					array( __CLASS__, 'note_override' ),
					$screen,
					'side',
					'high'
				);
			}	
		}



		public static function note_override()
		{
			if(empty($wp_session['pushengage_settings']))
			{
				$pushengage_settings = self::pushengage_settings();
				$wp_session['pushengage_settings'] = $pushengage_settings;
			}			
			else
			$pushengage_settings = $wp_session['pushengage_settings'];

			$app_key = $pushengage_settings['appKey'];

			$auto_push = $pushengage_settings['autoPush'];
			$all_post_types = $pushengage_settings['all_post_types'];
			global $post;
			$check_auth = !empty($wp_session['check_auth'])?$wp_session['check_auth']:'';
			if(!empty($check_auth['block_user']))
				return false;

			if ( 'post' === $post->post_type || true === $all_post_types )
			{
				printf('<div style="padding-left:10px;padding-bottom:15px" id="pushengage-post-checkboxes">');
				//var_dump($post->post_status);var_dump(get_post_meta( $post->ID, '_pe_override', true ));print_r($post->ID);exit;
				$display_segments_div = " display:none; ";
				if ( 'auto-draft' === $post->post_status )
				{
					//We need to check send notification check box if auto_push is true otherwise we should uncheck this./
					if ( true === $auto_push ) {
						printf( '<label><input type="checkbox" value="1" checked id="pushengage-override-checkbox" name="pushengage-override" style="margin: -3px 9px 0 1px;" checked onclick="selectSubscriberSegments()"/>');
						echo 'Send PushEngage Notification</label>';
						$display_segments_div = "style='display:block'";
					} else {
						printf( '<label><input type="checkbox" value="1" id="pushengage-override-checkbox" name="pushengage-override" style="margin: -3px 9px 0 1px;" onclick="selectSubscriberSegments()"/>');
						echo 'Send PushEngage Notification</label>';
					}
				}
				else
				{
					//check for over ride and scheduled options.
					$pe_override = get_post_meta( $post->ID, '_pe_override', true );
					$pe_scheduled = get_post_meta( $post->ID, 'pe_override_scheduled', true );
					//By default we are unchecking published posts. That means when ever user edits send notification check box unchecked.
					if(($pe_override == '1' || $pe_scheduled == '1') && $post->post_status!='publish')
					{
						$upd_chk_box = 'checked';
						$display_segments_div = " display:block; ";
					}
					else
					$upd_chk_box = '';

					printf('<label><input type="checkbox" value="1" id="pushengage-override-checkbox" name="pushengage-override" style="margin: -3px 9px 0 1px;" '.$upd_chk_box.'  onclick="selectSubscriberSegments()"/>');
					echo 'Send PushEngage Notification on Update</label>';
				}
				//check all subscribers when click on send notification
				$draft_segments = get_post_meta( $post->ID, '_pe_draft_segments', true );
				if(!empty($draft_segments))
				{
					$draft_segments = explode(' ', $draft_segments);
				}
				echo "<script>
						function selectSubscriberSegments()
						{
							if(document.getElementById('pushengage-override-checkbox').checked == true)
							{
								var drft_seg ='".$draft_segments."';
								if(!drft_seg && document.getElementById('selectall'))
								document.getElementById('selectall').checked=true;
								if(document.getElementById('pushengage-post-categories'))
								document.getElementById('pushengage-post-categories').style.display = 'block';
							}
							else
							{
								if(document.getElementById('selectall'))
								document.getElementById('selectall').checked=false;
								if(document.getElementById('pushengage-post-categories'))
								document.getElementById('pushengage-post-categories').style.display = 'none';
							}
						}
					  </script>
					 ";
				wp_nonce_field( 'pushengage_save_post', 'hidden_pe' );
				echo '</div>';

					if(empty($wp_session['segmets_data']))
					$segmets_data = Api_class::getSegments($app_key);
					else
					$segmets_data = $wp_session['segmets_data'];

					if(!empty($segmets_data["segments"]))
					{
						$pe_override = get_post_meta( $post->ID, '_pe_override', true );

						if($auto_push || $all_post_types || empty($draft_segments))
							$check ="checked";
						else
							$check ="";

						if($post->post_status == 'auto-draft' && ($auto_push || $all_post_types))
						$check ='checked';

						printf('<div style="padding-left:37px;padding-top:0px;padding-bottom:10px;'.$display_segments_div.'" id="pushengage-post-categories"><span style="font-weight:bold;">Select PushEngage Segments</span>');
						//echo "<pre>";print_r($segmets_data);echo "</pre>";exit;
						echo '<br><input type="checkbox" id="selectall" '. $check.' onclick="selectAll();"><span  style="margin-left:10px;">All Subscribers</span>';
						foreach($segmets_data["segments"] as $segment)
						{
							if(!empty($draft_segments) && in_array($segment["segment_id"], $draft_segments))
							$seg_chk_box = ' checked ';
							else
							$seg_chk_box = '';

							if(!empty($segment["segment_name"]))
							{
								echo '<div style="margin:5px 10px 5px 0px !important;"><input type="checkbox"   '.$seg_chk_box.'class="pushengage-segments" onclick="selectAllSubscribers()" name="pushengage-categories[]" value="'.$segment["segment_id"].'" ><span style="margin-left:10px;">'.$segment["segment_name"].'</span></div>';
							}
						}
						echo '</div>';
						echo '<script>
						function selectAll()
						{
							var all_cb = document.getElementById("selectall").checked;
							var pe_segments = document.getElementsByClassName("pushengage-segments");

							for (var key in pe_segments)
							{
							  if (pe_segments.hasOwnProperty(key))
							  {
								if(all_cb)
								{
									pe_segments[key].checked = false;
								}
								else
								{
									pe_segments[key].checked = true;
								}
							  }
							}
						}

						function selectAllSubscribers()
						{
							var pe_segments = document.getElementsByClassName("pushengage-segments");
							var check_flag = false;
							for (var key in pe_segments)
							{
								if(pe_segments[key].checked == true)
								check_flag = true;
							}
							if(check_flag==false)
							{
								document.getElementById("selectall").checked = true;
							}
							else
							{
								document.getElementById("selectall").checked = false;
							}
						}

						</script>';
					}

			}
		}

		public static function custom_note_text( $post_type, $post )
		{
			$pushengage_settings = self::pushengage_settings();
			$all_post_types = $pushengage_settings['all_post_types'];
			if ( 'post' === $post_type || true === $all_post_types ) {
				if ( 'attachment' !== $post_type && 'comment' !== $post_type && 'dashboard' !== $post_type && 'link' !== $post_type ) {
					add_meta_box(
						'pushengage_meta',
						'Custom Notification Title',
						array( __CLASS__, 'pushengage_custom_headline_content' ),
						'',
						'normal',
						'high'
					);
				}
			}
		}

		public static function pushengage_custom_headline_content( $post )
		{
			$custom_note_text = get_post_meta( $post->ID, '_pushengage_custom_text', true );
			?>
			<div id="pushengage-custom-note" class="form-field form-required">
				<input type="text" id="pushengage-custom-note-text" maxlength="73" placeholder="Enter Custom Headline For Your Notification" name="pushengage-custom-msg" value="<?php echo ! empty( $custom_note_text ) ? esc_attr( $custom_note_text ) : ''; ?>" /><br>
				<span id="pushengage-custom-note-text-description" >Custom headline limit 73 characters.<br/>When using a custom headline, this text will be used in place of the default blog post title for your push notification.</span>
			</div>
		<?php
		}

		public static function pushengage_save_settings()
		{

			if ( isset( $_POST['action']) && $_POST['action'] == 'update_wordpress_settings')
			{
				$pushengage_settings = self::pushengage_settings();
				$app_key = $pushengage_settings['appKey'];
				$auto_push = false;
				$bbPress = false;
				$prompt_min = false;
				$prompt_visits = 2;
				$prompt_event = false;
				$non_pushengage_categories = array();
				$segment_send = false;
				$use_custom_script = false;
				$custom_script = '';
				$use_featured_image = true;
				$all_post_types = false;
				$utmcheckbox= false;
				$utm_medium = '';
				$utm_campaign =	'';
				$utm_source	= '';
				$disable_subscription_popup = false;

				if((empty($app_key) && !empty($_POST['pushengage-apikey'])) && $app_key!=$_POST['pushengage-apikey'])
				{
					if(!empty($_POST['pushengage-apikey']))
					{
						$app_key = $_POST['pushengage-apikey'];
					}
				}

				if (isset( $_POST['action_settings'] ) && $_POST['action_settings']=='post') {
                    if(isset( $_POST['pushengage-auto-push'] ))
				    $auto_push = true;
				}
				else{
					$auto_push = $pushengage_settings['autoPush'];
				}
				if ( isset( $_POST['bbPress'] ) ) {
					$bbPress = true;
				}
				if ( isset( $_POST['pushengage-prompt-min'] ) ) {
					$prompt_min = true;
				}
				if ( isset( $_POST['pushengage-prompt-visits'] ) ) {
					if ( '0' === $_POST['pushengage-prompt-visits'] || '1' === $_POST['pushengage-prompt-visits'] ) {
						$prompt_visits = 2;
					} else {
						$prompt_visits = sanitize_text_field( $_POST['pushengage-prompt-visits'] );
					}
				}
				if ( isset( $_POST['pushengage-prompt-event'] ) ) {
					$prompt_event = true;
				}
				if ( isset( $_POST['pushengage-categories'] ) ) {
					$non_pushengage_categories = array_map( sanitize_text_field, $_POST['pushengage-categories'] );
				}
				if ( isset( $_POST['pushengage-segment-send'] ) ) {
					$segment_send = true;
				}
				if (isset( $_POST['action_settings'] ) && $_POST['action_settings']=='post') {
					if(isset( $_POST['pushengage-custom-image'] ) && $_POST['pushengage-custom-image']==1)
					$use_featured_image = true;
					else
					$use_featured_image = 0;
				}
				else{
					$use_featured_image = $pushengage_settings['use_featured_image'];
				}
				if (isset( $_POST['action_settings'] ) && $_POST['action_settings']=='post') {
					if(isset( $_POST['pushengage-all-post-types'] ))
				    $all_post_types = true;
				}
				else{
					$all_post_types = $pushengage_settings['all_post_types'];
				}
				if (isset( $_POST['action_settings'] ) && $_POST['action_settings']=='post') {
					if(isset( $_POST['disable_subscription_popup'] ))
				    $disable_subscription_popup = true;
				}
				else{
					$disable_subscription_popup = $pushengage_settings['disable_subscription_popup'];
				}
				if (isset( $_POST['action_settings'] ) && $_POST['action_settings']=='utm')
				{
				    if(isset( $_POST['utmcheckbox'] ))
                    {
                        $utmcheckbox = true;
                        if ( isset( $_POST['utm_source'] ) ) {
                            $utm_source = $_POST['utm_source'];
                        }
                        if ( isset( $_POST['utm_medium'] ) ) {
                            $utm_medium = $_POST['utm_medium'];
                        }
                        if ( isset( $_POST['utm_campaign'] ) ) {
                            $utm_campaign = $_POST['utm_campaign'];
                        }
                    }
				    else
                    {
                        $utm_source = $utm_medium = $utm_campaign = '';
                    }
				}
				else{
					$utmcheckbox = !empty($pushengage_settings['utmcheckbox'])?$pushengage_settings['utmcheckbox']:'';
					$utm_source = !empty($pushengage_settings['utm_source'])?$pushengage_settings['utm_source']:'';
					$utm_medium = !empty($pushengage_settings['utm_medium'])?$pushengage_settings['utm_medium']:'';
					$utm_campaign = !empty($pushengage_settings['utm_campaign'])?$pushengage_settings['utm_campaign']:'';
				}

				$custom_script = !empty($_POST['pushengage-custom-script'])?esc_html( $_POST['pushengage-custom-script'] ):'';

				$form_data = array(
					'app_key' => $app_key,
					'auto_push' => $auto_push,
					'bbPress' => $bbPress,
					'prompt_min' => $prompt_min,
					'prompt_visits' => $prompt_visits,
					'prompt_event' => $prompt_event,
					'categories' => $non_pushengage_categories,
					'segment_send' => $segment_send,
					'use_custom_script' => $use_custom_script,
					'custom_script' => $custom_script,
					'use_featured_image' => $use_featured_image,
					'utmcheckbox' => $utmcheckbox,
					'utm_source' => $utm_source,
					'utm_medium' => $utm_medium,
					'utm_campaign' => $utm_campaign,
					'all_post_types' => $all_post_types,
					'disable_subscription_popup' => $disable_subscription_popup
				);

				//update site info
				$site_data = array();
				if(!empty($_POST['site_name']))
				$site_data['site_name'] = sanitize_text_field(esc_html($_POST['site_name']));
				if(!empty($_POST['site_url']))
				$site_data['site_url'] = sanitize_text_field(esc_html($_POST['site_url']));
				if(!empty($_POST['site_image']))
				$site_data['site_image'] = sanitize_text_field($_POST['site_image']);

				if(!empty($site_data))
				$result = Api_class::updateSiteSettings($app_key, $site_data);
				//Site Info
				$appdata = self::getSiteData($app_key);
				$appdata = $appdata[0];
				$wp_session['appdata'] = $appdata;

				$status = base64_encode('success');
				$status = urlencode( $status );

				self::update_settings( $form_data );
				wp_redirect( esc_url_raw( admin_url( 'admin.php?page=pushengage-admin&tab=gSettings' ) . '&status=' . $status ));
				exit;
			}
		}

		public static function install( $pushengage_settings )
		{
			if ( empty( $pushengage_settings ) )
			{
				$pushengage_settings = array(
					'appKey' => '',
					'appSecret' => '',
					'version' => self::$pushengage_version,
					'autoPush' => true,
					'bbPress' => true,
					'database_version' => self::$database_version,
					'prompt_min' => false,
					'prompt_visits' => 2,
					'prompt_event' => false,
					'categories' => array(),
					'segment_send' => false,
					'use_custom_script' => false,
					'custom_script' => '',
					'chrome_error_dismiss' => false,
					'gcm_token' => '',
					'use_featured_image' => true,
					'use_require_interaction' => true,
					'all_post_types' => true,
				);
				add_option( 'pushengage_settings', $pushengage_settings );
			}
			if ( !empty($pushengage_version['version']) && self::$pushengage_version !== $pushengage_version['version'] )
			{
				self::update( $pushengage_settings );
			}
		}

		public static function update( $pushengage_settings )
		{
			$pushengage_settings['version'] = self::$pushengage_version;
			if(empty($pushengage_settings['site_name']))
			{
				if(!empty($wp_session['appdata']['site_name']))
				$pushengage_settings['site_name'] = $wp_session['appdata']['site_name'];
				else
				{
					if(!empty($_POST['appid']))
					{
						$appdata = self::getSiteData($_POST['appid']);
						$appdata = $appdata[0];

						if(isset($appdata['site_name']) && !empty($appdata['site_name']))
						$pushengage_settings['site_name'] = $appdata['site_name'];
					}
				}
			}
			update_option( 'pushengage_settings', $pushengage_settings );
		}

		public static function admin_menu_add()
		{
			$pushengage_settings = self::pushengage_settings();
			$app_key = $pushengage_settings['appKey'];

			add_menu_page(
				'Pushengage',
				'PushEngage',
				'manage_options',
				'pushengage-admin',
				array( __CLASS__, 'admin_menu_page' ),
				PUSHENGAGE_URL . 'images/pe_logo.png'
			);
		}

		public static function admin_menu_page()
		{
			//WP Plugin check
			$wp_version_check = self::checkWPVersion();

			$pushengage_settings = self::pushengage_settings();
			$app_key = $pushengage_settings['appKey'];
			$cat_args = array(
				'hide_empty' => 0,
				'order' => 'ASC'
			);
			$cats = get_categories( $cat_args );

			if(empty($app_key))
			{
				$wp_session['menu_active_key'] = false;
				$status = "";
			}
			if(isset($_POST['appid']) && $_POST['appid'])
			{	$tab_start="setup";
				$appdata = self::getSiteData($_POST['appid']);
				$appdata = $appdata[0];
				$wp_session['appdata'] = $appdata;

				$wp_session['menu_active_key'] = true;

				if(!empty($appdata))
				{
					$pushengage_settings['appKey'] = $_POST['appid'];

					if($appdata['site_name'])
					$pushengage_settings['site_name'] = $appdata['site_name'];

					if($appdata['site_key'])
					$pushengage_settings['site_key'] = $appdata['site_key'];

					self::update($pushengage_settings);
					$pushengage_settings = self::pushengage_settings();
					$app_key = $pushengage_settings['appKey'];

				}
				else
				{
					$wp_session['menu_active_key'] = false;
					$status = "faild";
				}
			}

			if(!empty($app_key))
			{
					//check user authentication
					$wp_session['check_auth'] = self::checkUserAuthenticaiton($app_key);

					if(!empty($app_key) && empty($wp_session['check_auth']['error_code']))
					{
						$wp_session['menu_active_key'] = true;
					}
					else 
					{
						$wp_session['menu_active_key'] = false;
					}
					//Site Info
					if(empty($wp_session['appdata']))
					{
						$appdata = self::getSiteData($app_key);
						if(!empty($appdata[0]))
						{
							$appdata = $appdata[0];
							$wp_session['appdata'] = $appdata;
						}
					}

				//Get general settings
				if(empty($_GET['tab']) || ($_GET['tab'] == 'gSettings') && $_GET['page']=='pushengage-admin')
				{
					// Get general settings
					if(empty($wp_session['tabdata']))
					{
						$general_settings = Api_class::getGeneralSettings($app_key);
						$wp_session['tabdata'] = $general_settings;
					}
				}

				//Get subscription popup settings
				if(!empty($_GET['tab']) && $_GET['tab'] == 'subDialogbox' && empty($wp_session['optin_settings_data']))
				{
					if(empty($wp_session['tabdata']))
					{
						
						$optin_settings_data = Api_class::getSubscriptionPoupSettings($app_key);
						//var_dump($optin_settings_data);exit;
						$wp_session['tabdata'] = $optin_settings_data;
						if(!empty($optin_settings_data['site_info']['optin_settings']))
						{
							$optin_settings = json_decode($optin_settings_data['site_info']['optin_settings']);
							$wp_session['tabdata']['optin_settings_data'] = $optin_settings;
						}

						if(!empty($optin_settings_data['segments']))
						{
							$wp_session['tabdata']['segments_data'] = $optin_settings_data['segments'];
						}

						if(!empty($optin_settings_data['site_type']))
						{
							$wp_session['tabdata']['site_type'] = $optin_settings_data['site_type'];
						}
					}
				}

				//echo "<pre>";print_r($wp_session['optin_settings_data']);	exit;
				if (!empty($_POST['action']) && $_POST['action']=="update_optin_settings")
				{
					$tab = "subDialogbox";

					//XSS Fix
					foreach ($_POST as $key => $value) 
					{
						if( gettype($_POST[$key])=="array")
						{
						$_POST[$key]= array_map(function($v){
									return trim(strip_tags($v));
						}, $_POST[$key]);
						}else
						$_POST[$key] = strip_tags($_POST[$key]);
				 	}

					$optin_segments = !empty($_POST['segments'])?json_encode($_POST['segments']):'{}';
					if(isset($_POST['plan-switch']) && $_POST['plan-switch'] == "on")
					{
						if(isset($_POST['optin_sw_support']) && $_POST['optin_sw_support'] == "on" && !in_array($_POST['optin_type'], array(4,5)))
						{
							$quick_install = false;
						}
						else
						{
							$quick_install = true;
						}

						$optindata = array(
							'desktop'=> array(
								'http' =>$wp_session['tabdata']['optin_settings_data']->desktop->http,
								'https' =>array( 'optin_delay' => $_POST['optin_delay'],'optin_type' => $_POST['optin_type'],'optin_title' => $_POST['optin_title'],'optin_allow_btn_txt' => $_POST['optin_allow_btn_txt'],'optin_close_btn_txt' => $_POST['optin_close_btn_txt'],'optin_font' =>'', 'optin_sw_support'=>$quick_install, 'optin_segments'=>json_encode($_POST['segments'])
					 		)
								),'mobile' =>'','intermediate'=>$wp_session['tabdata']['optin_settings_data']->intermediate
							);
					}
					else{
						$optindata = array(
							'desktop'=> array(
								'http' =>array( 'optin_delay' => $_POST['optin_delay'],'optin_type' => $_POST['optin_type'],'optin_title' => $_POST['optin_title'],'optin_allow_btn_txt' => $_POST['optin_allow_btn_txt'],'optin_close_btn_txt' => $_POST['optin_close_btn_txt'],'optin_font' =>'','optin_segments'=>json_encode($_POST['segments'])
					 		),
								'https' => $wp_session['tabdata']['optin_settings_data']->desktop->https
								),'mobile' =>'','intermediate'=>$wp_session['tabdata']['optin_settings_data']->intermediate
							);
					}

					if(isset($_POST['plan-switch']) && $_POST['plan-switch'] == "on")
					{
						$site_type = 'https';
					}
					else{
						$site_type = 'http';
					}

					$data = array(
									'option_data'	=>	$optindata,
									'site_type' => $site_type
								);					

					//update optin settings
					$result = Api_class::updateSubscriptionboxSettings($app_key, $data);

					$wp_session['tabdata']['optin_settings'] = json_encode($optindata);
					$wp_session['tabdata']['optin_settings_data'] = json_decode(json_encode($optindata));
					$wp_session['tabdata']['site_type'] = $site_type;
				}

				if (!empty($_POST['action']) && $_POST['action']=="update_optin_page_settings")
				{
					$tab = "subDialogbox";

					//XSS Fix
					$_POST = array_map(function($v){
								    return trim(strip_tags($v));
								}, $_POST);

					$optindata = array('desktop' => $wp_session['tabdata']['optin_settings_data']->desktop,'mobile'=>$wp_session['tabdata']['optin_settings_data']->mobile,'intermediate'=> array('page_heading' => $_POST['page_heading'], 'page_tagline'=>$_POST['page_tagline']));

					$data = array(
									'site_id'		=>	$wp_session['appdata']['site_id'],
									'type'			=>	'update_optin_settings',
									'option_data'	=>	$optindata
								);
					$result = Api_class::updateOptinSettings($app_key, $data);
					//echo "<pre>";print_r($result);exit;
					$wp_session['tabdata']['optin_settings'] = json_encode($optindata);
					$wp_session['tabdata']['optin_settings_data'] = json_decode(json_encode($optindata));
				}

				// Update welcome notification settings
				if (!empty($_POST['action']) && $_POST['action']=="save_welcome_notification")
				{
					$tab = "welcome_notification";
					if(isset($_POST['welcome_enabled']))
					{	if($_POST['welcome_enabled']=="true")
						$welcome_enabled = "true";
						else
						$welcome_enabled = "false";
					}
					$data = array(
									'site_id'	=> $wp_session['appdata']['site_id'],
									'type'		=> 'update_welcome_notification',
									'notification_title'	=> $_POST['notification_title'],
									'notification_message'	=> $_POST['notification_message'],
									'notification_url'	=> $_POST['display_notification_url'],
									'welcome_enabled'	=> $welcome_enabled
								);
					$welcome_note_data = Api_class::updateWelcomeNotification($app_key, $data);
					$wc_data = array(
										'notification_title' => $_POST['notification_title'],
										'notification_message' => $_POST['notification_message'],
										'notification_url' => $_POST['display_notification_url'],
										'welcome_enabled' => $welcome_enabled
									);
					//$wp_session['tabdata']['welcome_note_data'] = (object)$wc_data;
				 }
				
				//Get welcome notification settings
				if(!empty($_GET['tab']) && $_GET['tab'] == 'welcome_notification' && empty($wp_session['welcome_note_data']))
				{
					if(empty($wp_session['tabdata']))
					{
						$welcome_note_data = Api_class::getWelcomeNotificationSettings($app_key);
						$wp_session['tabdata'] = $welcome_note_data;
						//echo "<pre>";print_r($welcome_note_data);exit;
						if(!empty($welcome_note_data['welcome_notification_info']))
						$wp_session['tabdata']['welcome_note_data'] = json_decode($welcome_note_data['welcome_notification_info']['option_value']);
					}
				}

				//Update general settings
				if (!empty($_POST['action']) && $_POST['action']=="update_site_settings")
				{
					$tab = "gSettings";
					//echo "<pre>";print_r($wp_session);exit;
					$data = array(
									'site_id'                 => $wp_session['appdata']['site_id'],
									'type'	                  => 'update_site_settings',
									'site_name'	          => $_POST['site_name'],
									'site_url'	          => $_POST['site_url'],
									'site_image'	          => $_POST['site_image'],
									'max_notifications'	  => !empty($_POST['max_notifications'])?:2
								);
					//echo "<pre>";print_r($_POST);print_r($data);exit;
					$result = Api_class::updateSiteSettings($app_key, $data);
					//echo "<pre>".$app_key;print_r($result);exit;
					$wp_session['tabdata']['site_info']['site_name'] = !empty($_POST['site_name'])?$_POST['site_name']:'';
					$wp_session['tabdata']['site_info']['site_url'] = !empty($_POST['site_url'])?$_POST['site_url']:'';
					$wp_session['tabdata']['site_info']['site_image'] = !empty($_POST['site_image'])?$_POST['site_image']:'';
					$wp_session['tabdata']['site_info']['max_notifications'] = !empty($_POST['max_notifications'])?$_POST['max_notifications']:2;

					if(!empty($wp_session['tabdata']['site_info']['site_name']))
					{
						$pushengage_settings['site_name'] = $wp_session['tabdata']['site_info']['site_name'];

						self::update($pushengage_settings);
					}
					wp_redirect( esc_url_raw( admin_url( 'admin.php?page=pushengage-admin&tab='.$tab )));
				}

				if (!empty($_POST['action']) && $_POST['action']=="update_profile")
				{
					$tab = "insSettings";
					$data = array(
									'site_id' => $wp_session['appdata']['site_id'],
									'type'	  => 'update_profile_settings',
									'user_name'	  => $_POST['user_name'],
									'timezones'	  => $_POST['timezones']
								);

					$result = Api_class::updateProfileSettings($app_key, $data);
					//print_r($result);exit;
					$wp_session['tabdata']['user_info']['user_name'] = $_POST['user_name'];
					$wp_session['tabdata']['timezone_info']['option_value'] = $_POST['timezones'];
				}

				//Get FCM settings
				if(!empty($_GET['tab']) && $_GET['tab'] == 'gcmSettings' && empty($wp_session['gcmdata']))
				{
					if(empty($wp_session['tab']))
					{
						//fcm settings
						$fcmdata = Api_class::getFCMSettings($app_key);
						$wp_session['tabdata'] = $fcmdata;
						//echo "<pre>";print_r($fcmdata['gcm_info']);exit;
						if(!empty($fcmdata['gcm_info']))
						$wp_session['tabdata']['gcmdata'] = json_decode($fcmdata['gcm_info']['option_value']);
						else 
						{
							$fcmdata['gcm_api_key'] = !empty($_POST['gcm_api_key'])?$_POST['gcm_api_key']:'';
							$fcmdata['gcm_project_key'] = !empty($_POST['gcm_project_key'])?$_POST['gcm_project_key']:'';
							$wp_session['tabdata']['gcmdata'] = (object)$fcmdata;
						}
					}
				}

				if(isset($_POST['verify_gcm']))
				{
					$tab = "gcmSettings";
					$data = array('gcm_api_key'=>$_POST['gcm_api_key'],'type'=>'verify_gcm');
					$verify_gcm_result = Api_class::verifyFCM($app_key, $data);
				}
				else if (!empty($_POST['action']) && $_POST['action']=="update_gcm_settings")
				{
					$tab = "gcmSettings";
					$error_message = "";

					//verify GCM Key
					$verify_gcm_data = array('gcm_api_key'=>$_POST['gcm_api_key'],'type'=>'verify_gcm');
					$verify_gcm_result = Api_class::verifyFCM($app_key, $verify_gcm_data);
					
					if(is_numeric($_POST['gcm_project_key']))
					{
						
						if($verify_gcm_result['verified'])
						{
							//Update GCM/FCM 
							$data = array('gcm_project_key'=>$_POST['gcm_project_key'],'gcm_api_key'=>$_POST['gcm_api_key']);

							$result = Api_class::updateFCMSettings($app_key, $data);

							$verify_gcm_result['banner'] = 'FCM settings updated successfully';
							 $gcmdata = array(
												'gcm_project_key' => $_POST['gcm_project_key'],
												'gcm_api_key'	=> $_POST['gcm_api_key']
											);
							$wp_session['gcmdata'] = (object)$gcmdata;
						}
						else
						{
							echo $error_message = $verify_gcm_data['banner'];
						}
					}
					else
					{
						echo $error_message = "FCM Sender ID should be a number.";
					}
				}

				$menu_active_key=true;
			}
			//echo "<pre>";print_r($wp_session['check_auth']);
			if(!empty($wp_session) && isset($wp_session['check_auth']['success']))
				$menu_active_key =false;
			require_once( PUSHENGAGE_PLUGIN_DIR . '/views/admin.php' );
		}

		public static function getSiteData($app_key)
		{
			if(empty($wp_session['sitedata']))
			{
				$sitedata = Api_class::getSiteinfo($app_key);
			}
			else
			$sitedata = $wp_session['sitedata'];

			return $sitedata;
		}

		public static function update_settings($form_data)
		{
			if(!empty($form_data))
			{
				$pushengage_settings = self::pushengage_settings();
				$pushengage_settings['appKey'] = $form_data['app_key'];
				$pushengage_settings['autoPush'] = !empty($form_data['auto_push'])?$form_data['auto_push']:'';
				$pushengage_settings['prompt_min'] = !empty($form_data['prompt_min'])?$form_data['prompt_min']:'';
				$pushengage_settings['prompt_visits'] = !empty($form_data['prompt_visits'])?$form_data['prompt_visits']:'';
				$pushengage_settings['prompt_event'] = !empty($form_data['prompt_event'])?$form_data['prompt_event']:'';
				$pushengage_settings['categories'] = !empty($form_data['categories'])?$form_data['categories']:'';
				$pushengage_settings['segment_send'] = !empty($form_data['segment_send'])?$form_data['segment_send']:'';
				$pushengage_settings['use_custom_script'] = !empty($form_data['use_custom_script'])?$form_data['use_custom_script']:'';
				$pushengage_settings['custom_script'] = !empty($form_data['custom_script'])?$form_data['custom_script']:'';
				$pushengage_settings['use_featured_image'] = !empty($form_data['use_featured_image'])?:'';
				$pushengage_settings['use_require_interaction'] = !empty($form_data['use_require_interaction'])?$form_data['use_require_interaction']:'';
				$pushengage_settings['utmcheckbox'] = !empty($form_data['utmcheckbox'])?$form_data['utmcheckbox']:'';
				$pushengage_settings['use_require_interaction'] = !empty($form_data['use_require_interaction'])?$form_data['use_require_interaction']:'';
				$pushengage_settings['utm_source'] = !empty($form_data['utm_source'])?$form_data['utm_source']:'';
				$pushengage_settings['utm_medium'] = !empty($form_data['utm_medium'])?$form_data['utm_medium']:'';
				$pushengage_settings['utm_campaign'] = !empty($form_data['utm_campaign'])?$form_data['utm_campaign']:'';
				$pushengage_settings['all_post_types'] = !empty($form_data['all_post_types'])?$form_data['all_post_types']:'';
				$pushengage_settings['disable_subscription_popup'] = !empty($form_data['disable_subscription_popup'])?$form_data['disable_subscription_popup']:'';
				update_option('pushengage_settings', $pushengage_settings);
			}
		}

		public static function pushengageDomainScripts()
		{
			$pushengage_settings = self::pushengage_settings();
			$app_key = $pushengage_settings['appKey'];

			$appdata = self::getSiteData($app_key);
			$appdata = $appdata[0];

			if(!empty($pushengage_settings['site_key']))
			$site_key = $pushengage_settings['site_key'];
			else
			$site_key = $appdata['site_key'];

			$pe_dynemic_js = 'https://clientcdn.pushengage.com/core/'.$site_key.'.js';

			if($app_key && isset($site_key))
			{
				wp_enqueue_script('core', $pe_dynemic_js, false, false, true);
			}
		}
		
		function pe_corescript_tag( $tag, $handle, $src ) {
			if ( $handle !== 'core' ) {
				return $tag;
			}

			return "<script src='$src' async></script>";
		}


		 public static function save_post_meta_data( $post_id )
		 {

			if (! current_user_can( 'edit_posts' ) )
			{
				return false;
			}
			else
			{
				$no_note = get_post_meta( $post_id, '_pe_override', true );
				if ( isset( $_POST['pushengage-override'] ) && ! $no_note )
				{
					$override_setting = sanitize_text_field( $_POST['pushengage-override'] );
					add_post_meta( $post_id, '_pe_override', $override_setting, true );
				}
				elseif ( ! isset( $_POST['pushengage-override'] ) && $no_note )
				{
					delete_post_meta( $post_id, '_pe_override' );
				}
				if ( isset( $_POST['pushengage-custom-msg'] ) ) {
					update_post_meta( $post_id, '_pushengage_custom_text', sanitize_text_field( $_POST['pushengage-custom-msg'] ) );
				}
				if(isset($_POST['pushengage-override']))
				{
					if(!empty( $_POST['pushengage-categories'] ))
					{
						$draft_segments = implode(" ",$_POST['pushengage-categories']);
						$prev_segments = get_post_meta( $post_id, '_pe_draft_segments', true );
						update_post_meta( $post_id, '_pe_draft_segments', $draft_segments, $prev_segments );
					}
					else
					{
						delete_post_meta($post_id, '_pe_draft_segments');
					}


					$str = "";
					if ( isset($_POST['pushengage-categories']) && !empty( $_POST['pushengage-categories'] ) && (get_post_status( $post_id ) == 'future' || get_post_status( $post_id ) == 'inherit') )
					{
						$str = implode(" ",$_POST['pushengage-categories']);
						add_post_meta( $post_id, '_sedule_notification', $str, true );
					}
					add_post_meta( $post_id, 'pe_override_scheduled', 1, true );
				}
				else
				{
					delete_post_meta($post_id, '_pe_draft_segments');
					delete_post_meta($post_id, '_sedule_notification');
					delete_post_meta($post_id, 'pe_override_scheduled');
				}
			}
		}

		public static function sendPostNotifications( $new_status, $old_status, $post )
		{
			if ( false === self::pushengage_active() ) {
				return;
			}
			if ( empty( $post ) ) {
				return;
			}
			if ( ! current_user_can( 'publish_posts' ) && ! DOING_CRON  ) {
				return;
			}

			$pushengage_settings = self::pushengage_settings();
			$app_key = $pushengage_settings['appKey'];
			$all_post_types = $pushengage_settings['all_post_types'];

			$appdata = !empty($wp_session['appdata'])?$wp_session['appdata']:'';
			$site_name = !empty($appdata['site_name'])?$appdata['site_name']:$pushengage_settings['site_name'];
			$post_id = $post->ID;
			$post_type = get_post_type( $post );

			if ( false === $all_post_types )
			{
				if ( 'post' !== $post_type ) {
					return;
				}
			}
//echo 'new status: '.$new_status.'<br> old status: '.$old_status;exit;
			if ( 'publish' === $new_status  )
			{
				if ( isset( $_POST['pushengage-override'] ) ) {
					$send_note = true;
				}
			}
			if('publish' === $new_status && 'future' === $old_status)
			{
				if(get_post_meta( $post_id, 'pe_override_scheduled', true ))
					$send_note = true;
			}
			if ( $new_status !== $old_status || ! empty( $send_note ) )
			{
				if ( 'publish' === $new_status )
				{
					$categories = get_the_category( $post_id );
					$auto_push = $pushengage_settings['autoPush'];
					$non_pe_categories = $pushengage_settings['categories'];
					$segment_send = $pushengage_settings['segment_send'];
					$use_featured_image = $pushengage_settings['use_featured_image'];
					$segments = null;
					$image_url = null;

					if ( ( 'publish' === $new_status && 'future' === $old_status ))
					{
						$override = get_post_meta( $post_id, '_pe_override', true );
						$custom_headline = get_post_meta( $post_id, '_pushengage_custom_text', true );
						$segments=explode(" ",get_post_meta( $post_id, '_sedule_notification', true ));
						$seg_array = array_filter($segments);
						if(empty($seg_array))
						$segments=false;
					}
					else
					{
						if ( isset( $_POST['pushengage-override'] ) ) {
							$override = sanitize_text_field( $_POST['pushengage-override'] );
						}
						if ( isset( $_POST['pushengage-custom-msg'] ) && ! empty( $_POST['pushengage-custom-msg'] ) ) {
							$custom_headline = sanitize_text_field( $_POST['pushengage-custom-msg'] );
						}
					}
					if ( $send_note )
					{
						$adv_options = array();
						if ( !empty( $override ) )
						{
							if ( isset($_POST['pushengage-categories']) && !empty( $_POST['pushengage-categories'] ) )
							{
								$segments = $_POST['pushengage-categories'];
							}
							if ( ! empty( $custom_headline ) ) {
								$note_text = stripslashes( $custom_headline ) ;
							} else {
								$note_text = sanitize_text_field(substr(get_the_title( $post_id ),0,72));
							}
							$note_link = get_permalink( $post_id );
							if ( has_post_thumbnail( $post_id ) ) {
								$raw_image = wp_get_attachment_image_src( get_post_thumbnail_id( $post_id ) );
								$featured_image_url = $raw_image[0];
							}
							if ( !empty($use_featured_image) ) {
								$image_url = !empty($featured_image_url)?$featured_image_url:'';
							}
							else
							{
								$image_url = !empty($appdata['site_image'])?$appdata['site_image']:'';
							}
							if(empty($use_featured_image)){
								$adv_options['big_image_url'] = $featured_image_url;
							}

							//add UTM params for link
							if(isset($pushengage_settings['utmcheckbox'])&& !empty($pushengage_settings['utmcheckbox']) && isset($pushengage_settings['utm_source']) && isset($pushengage_settings['utm_medium']) && isset($pushengage_settings['utm_campaign'])){

								$note_link_temp = '?utm_source='.$pushengage_settings['utm_source'].'&utm_medium='.$pushengage_settings['utm_medium'].'&utm_campaign='.$pushengage_settings['utm_campaign'];
								$note_link .= $note_link_temp;
							}
							else
							$note_link .= '?utm_source=pushengage&utm_medium=push_notification&utm_campaign=pushengage';


							if(empty($appdata['site_name']))
							$appdata['site_name'] = $pushengage_settings['site_name'];

						//echo "<pre>".$note_text.'<br>'.$note_link.'<br>'.$appdata['site_name'].$send_note;print_r($segments);die;
							$result = Api_class::send_notification( $note_text, $note_link, $app_key, $site_name, $segments, $image_url, $adv_options );
						}
					}
				}
			}
		}

		public static function filter_string( $string )
		{
			$string = str_replace( '&#8220;', '&quot;', $string );
			$string = str_replace( '&#8221;', '&quot;', $string );
			$string = str_replace( '&#8216;', '&#39;', $string );
			$string = str_replace( '&#8217;', '&#39;', $string );
			$string = str_replace( '&#8211;', '-', $string );
			$string = str_replace( '&#8212;', '-', $string );
			$string = str_replace( '&#8242;', '&#39;', $string );
			$string = str_replace( '&#8230;', '...', $string );
			$string = str_replace( '&prime;', '&#39;', $string );

			return html_entity_decode( $string, ENT_QUOTES );
		}

		public static function chekAPIKey()
		{
			$pushengage_settings = self::pushengage_settings();
			$app_key = $pushengage_settings['appKey'];
			if($app_key)
			return true;
			else
			return false;
		}

		public function register_session()
		{
			if(!session_id())
			{
				session_start();
			}
		}

		public static function checkWPVersion()
		{
			$user_version = self::$pushengage_version;

			//Get current wordpres information
			$args = (object) array( 'slug' => 'pushengage' );

		    $request = array( 'action' => 'plugin_information', 'timeout' => 15, 'request' => serialize( $args) );

		    $url = 'http://api.wordpress.org/plugins/info/1.0/';

		    $response = wp_remote_post( $url, array( 'body' => $request ) );

		    if(is_array($response) && !empty($response['body']))
		    $plugin_info = unserialize( $response['body'] );
		 	//Get current wordpres information

		    $current_version = !empty($plugin_info->version)?$plugin_info->version:'';

		    if(!empty($user_version)&& !empty($current_version) && $user_version != $current_version)
		    {
		    	return false;
		    }
		    else
		    {
		    	return true;
		    }
		}
	}
?>
