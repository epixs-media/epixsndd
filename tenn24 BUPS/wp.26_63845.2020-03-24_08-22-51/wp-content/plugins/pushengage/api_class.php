<?php

class Api_class
{
	public static function remote_request( $remote_data )
	{
		$remote_url = 'https://api.pushengage.com/apiv1/' . $remote_data['action'];

		$headers = array(
			'api_key'		=> $remote_data['api_key'],
			"Content-Type"	=> 'application/x-www-form-urlencoded',
		);

		//Adding source for api calls
		$remote_data['remoteContent']['source'] =  'Wordpress '.get_bloginfo('version');
		$remote_data['remoteContent']['plugin_version'] = pushengage::$pushengage_version;
		$remote_array = array(
			'method'    => $remote_data['method'],
			'headers'   => $headers,
			'body'      => $remote_data['remoteContent'],
		);
		$response = wp_remote_request( esc_url_raw( $remote_url ), $remote_array );

		return $response;
	}

	public static function decode_request( $remote_data )
	{
		$xfer = self::remote_request( $remote_data );
		$nxfer = wp_remote_retrieve_body( $xfer );
		$lxfer = json_decode( $nxfer, true );
		return $lxfer;
	}

	public static function verifyUser($appid)
	{
		$request_data = array("api_key"=>$appid,
								"action"=>'info?type=verify_user',
								"method"=>"GET",
								"remoteContent"=>"",
								);
		$verify_usr_info = self::decode_request($request_data);
		return $verify_usr_info;
	}

	public static function removeSpecialCharacters($string)
	{
		return preg_replace('/[^A-Za-z0-9\- ]/', '', $string); // Removes special chars.
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

	//get segment information
	public static function getSegments($appid)
	{
		$request_data = array("api_key"=>$appid,
								"action"=>'segments',
								"method"=>"GET",
								"remoteContent"=>"",
							);
		$segment_data = self::decode_request($request_data);
		//echo "<pre>";print_r($segment_data);echo "</pre>";exit;
		return $segment_data;
	}


	/* New api's for improve performance of the wordpress plugin */

	//Get general settings data
	public static function getGeneralSettings($appid)
	{
		$request_data = array("api_key"=>$appid,
								"action"=>'users/get_general_settings',
								"method"=>"GET",
								"remoteContent"=>"",
								);
		$get_general_settings_data = self::decode_request($request_data);
		//echo "<pre>";print_r($get_general_settings_data);exit;
		return $get_general_settings_data;
	}

	//Get subscription popup settings data
	public static function getSubscriptionPoupSettings($appid)
	{
		$request_data = array("api_key"=>$appid,
								"action"=>'users/get_subscription_poup_settings',
								"method"=>"GET",
								"remoteContent"=>"",
								);
		$get_subscription_poup_settings_data = self::decode_request($request_data);
		return $get_subscription_poup_settings_data;
	}

	//Get subscription popup settings data
	public static function getWelcomeNotificationSettings($appid)
	{
		$request_data = array("api_key"=>$appid,
								"action"=>'users/get_welcome_notification_settings',
								"method"=>"GET",
								"remoteContent"=>"",
								);
		$get_welcome_notification_data = self::decode_request($request_data);
		return $get_welcome_notification_data;
	}

	//Get FCM settings data
	public static function getFCMSettings($appid)
	{
		$request_data = array("api_key"=>$appid,
								"action"=>'users/get_fcm_settings',
								"method"=>"GET",
								"remoteContent"=>"",
								);
		$get_fcm_data = self::decode_request($request_data);
		return $get_fcm_data;
	}

	//Get site information
	public static function getSiteinfo($appid)
	{
		$request_data = array("api_key"=>$appid,
								"action"=>'info?type=siteinfo',
								"method"=>"GET",
								"remoteContent"=>"",
								);
		$site_data = self::decode_request($request_data);
		//echo "<pre>";print_r($site_data);exit;
		return $site_data;
	}

	//Verify FCM Server Key
	public static function verifyFCM($appid, $data)
	{
		$remote_array = $data;

		$request_data = array("api_key"=>$appid,
								"action"=>'users',
								"method"=>"POST",
								"remoteContent"=>$remote_array,
								);

		$verify_gcm_result = self::decode_request($request_data);
		//echo "<pre>";print_r($verify_gcm_result);exit;
		return $verify_gcm_result;
	}

	//Send notification
	public static function send_notification( $note_text, $note_link, $app_key, $note_title, $segments=false, $image_url=false, $adv_options=false )
	{

		$request_data = array();
		$remoteContent = array();

		if (!empty($note_title) )
		$remoteContent['notification_title'] = self::filter_string($note_title);
		
		if (!empty($note_text) )
		$remoteContent['notification_message'] = self::filter_string($note_text);

		if ( !empty($note_link) ){
			$remoteContent['notification_url'] = $note_link;
		}
		if ( !empty($segments) ) {
			$remoteContent['include_segments'] = $segments;
		}
		if ( !empty($image_url) ) {
			$remoteContent['image_url'] = $image_url;
		}

		if ( !empty($adv_options['segments']) ) {
			$remoteContent['include_segments'] = $adv_options['segments'];
		}

		if ( !empty($adv_options['require_interaction']) ) {
			$remoteContent['require_interaction'] = $adv_options['require_interaction'];
		}
		else
		{
			$remoteContent['require_interaction'] = '0';
		}

		if ( !empty($adv_options['notification_type']) ) {
			$remoteContent['notification_type'] = $adv_options['notification_type'];
		}

		if ( !empty($adv_options['notification_expiry']) ) {
			$remoteContent['notification_expiry'] = $adv_options['notification_expiry'];
		}

		if ( !empty($adv_options['valid_from']) ) {
			$remoteContent['valid_from_utc'] = $adv_options['valid_from'];
		}

		if( !empty($adv_options['big_image_url']) ) {
			$remoteContent['big_image_url'] = $adv_options['big_image_url'];
		}

		//echo "<pre>".$remoteContent['notification_message'].'<br>'.$note_link.'<br>'.$remoteContent['notification_title'];print_r($segments);
		$request_data['action'] = "notifications";
		$request_data['method'] = "POST";
		$request_data['api_key'] = $app_key;
		$request_data['remoteContent'] = !empty($remoteContent)?$remoteContent:array();
		//echo "<pre>";print_r($adv_options);print_r($request_data);exit;
		$response = self::decode_request( $request_data );
		return $response;
	}


	//Update site settings
	public static function updateSiteSettings($appid, $data)
	{
		$remote_array = $data;

		$request_data = array("api_key"=>$appid,
								"action"=>'users',
								"method"=>"POST",
								"remoteContent"=>$remote_array,
								);
		$result = self::decode_request($request_data);

		return $result;
	}

	//Update user profile settings
	public static function updateProfileSettings($appid, $data)
	{
		$remote_array = $data;

		$request_data = array("api_key"=>$appid,
								"action"=>'users',
								"method"=>"POST",
								"remoteContent"=>$remote_array,
								);

		$result = self::decode_request($request_data);
		//echo "<pre>";print_r($result);exit;
		return $result;
	}

	//Updated subscription dailog box settings
	public static function updateSubscriptionboxSettings($appid, $data)
	{
		$remote_array = $data;

		$request_data = array("api_key"=>$appid,
								"action"=>'users/update_subscriptionbox_settings',
								"method"=>"POST",
								"remoteContent"=>$remote_array,
								);
		//echo "<pre>";print_r($request_data);exit;
		$result = self::decode_request($request_data);
		return $result;
	}	

	//Updated FCM settings
	public static function updateFCMSettings($appid, $data)
	{
		$remote_array = $data;	

		$request_data = array("api_key"=>$appid,
								"action"=>'users/update_fcm_settings',
								"method"=>"POST",
								"remoteContent"=>$remote_array,
								);
		//echo "<pre>";print_r($request_data);exit;
		$result = self::decode_request($request_data);
		return $result;
	}

	//Update welcome notification settings
	public static function updateWelcomeNotification($appid, $data)
	{
		$remote_array = $data;

		$request_data = array("api_key"=>$appid,
								"action"=>'users',
								"method"=>"POST",
								"remoteContent"=>$remote_array,
								);
		//echo "<pre>";print_r($request_data);exit;
		$gcm_data = self::decode_request($request_data);

		return $gcm_data;
	}

	//Update intermediate page settings
	public static function updateOptinSettings($appid, $data)
	{
		$remote_array = $data;

		$request_data = array("api_key"=>$appid,
								"action"=>'users',
								"method"=>"POST",
								"remoteContent"=>$remote_array,
								);
		//echo "<pre>";print_r($request_data);exit;
		$result = self::decode_request($request_data);
		//
		return $result;
	}



	/* New api's for improve performance of the wordpress plugin */
}
?>
