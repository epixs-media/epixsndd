<?php
		wp_enqueue_style( 'bootstrap', PUSHENGAGE_URL . 'css/bootstrap.css', array(), "", "all" );

		wp_enqueue_style( 'style', PUSHENGAGE_URL . 'css/style.css', array(), "", "all" );
		wp_enqueue_style( 'shortcuts', PUSHENGAGE_URL . 'css/shortcuts.css', array(), "", "all" );
		wp_enqueue_style( 'responsive', PUSHENGAGE_URL . 'css/responsive.css', array(), "", "all" );
		wp_enqueue_style( 'font-awesome.min', PUSHENGAGE_URL . 'css/font-awesome.min.css', array(), "", "all" );
		wp_enqueue_style( 'style1', PUSHENGAGE_URL . 'css/pe-style.css', array(), "", "all" );
		wp_enqueue_script('jquery', PUSHENGAGE_URL . 'js/jquery.min.js');
		wp_enqueue_script('bootstrap1', PUSHENGAGE_URL . 'js/bootstrap.min.js');

		if(!empty($wp_session['tabdata']['site_info']))
		$appdata = $wp_session['tabdata']['site_info'];

		if(!empty($wp_session['tabdata']['subscription_plans']))
		$sub_data = $wp_session['tabdata']['subscription_plans'];

		if(!empty($wp_session['tabdata']['active_subscribers']))
		{
			$active_subscriber = json_decode($wp_session['tabdata']['active_subscribers']);
			$active_subscriber = $active_subscriber->data->count;
			$wp_session['active_subscriber'] = $active_subscriber;
		}
?>
<script type="text/javascript">var $ = jQuery.noConflict();</script>

<style>
@media only screen and (min-width: 1260px) {
#pe-responsive{
padding-left:28% !important;
}
}

#toggle-dashboard-link{position: fixed;
    top: 40%;
       width: 155px;
    height: 43px;
    text-align: center;
    line-height: 43px;
    cursor: pointer;
    right: -117px;
    z-index: 998 !important;
    background: #fff;
	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)}
#toggle-dashboard-link .toggle-icon {
    vertical-align: middle;
    font-size: 20px;
    color:#0565c7;
    margin-right: 10px;
    margin-bottom: 4px;
}
#toggle-dashboard-link a{color:#000;}
#toggle-dashboard-link a:hover{opacity: 0.7;}

#toggle-dashboard-link a:focus, #toggle-dashboard-link a:visited {
outline-style: none !important;
    outline-color: transparent !important !important;
    outline:none !important;
    border: none !important;
    box-shadow: none !important;
}
</style>

<div id="toggle-dashboard-link"><a href="https://www.pushengage.com/dashboard/user/login" target="_blank">
	<i class="fa fa-home toggle-icon" aria-hidden="true"></i><span>Goto PushEngage</span></a>
</div>

<div class="row">
			<div class="col-md-12 content-header" style="">
				<div class="pe-logo">
					<span>PushEngage</span>
				</div>

				<div class="pe-site-div" style="width: auto;">
					  <?php
						  $date1= new DateTime($appdata['expiry_date']);
						  $date2= new DateTime(date("Y-m-d"));
						  $diff=date_diff($date1,$date2);
						  $daysleft=$diff->days;
						  $trial_text = " | <span style='color:blue'>Trial period will expire in $daysleft days</span>";
						?>

					  <p>Plan : <?php echo !empty($sub_data['name'])?$sub_data['name']:'';?> <span style="color:blue">|</span>  Active Subscribers (<?php echo !empty($active_subscriber)?$active_subscriber:0;?>) / Limit (<?php echo !empty($sub_data['subscribers_limit'])?$sub_data['subscribers_limit']:'';?>)<?php if(!empty($appdata['is_trial'])) echo $trial_text;?></p>

				</div>

				<div style="float: left;padding: 7px;width: auto; padding-left: 50px !important;" id="pe-responsive">
					<?php if(!empty($appdata['site_image'])){?>
					<img src="<?php echo $appdata['site_image'];?>" style="width:30px;height:25px;">
					<?php }?>
					<span style="color:#fff;font-weight:bold;padding-left:5px;"> <?php echo !empty($appdata['site_name'])?$appdata['site_name']:'';?></span>
				</div>
			</div>
</div>

<script>

/* right sidebar */

$('#toggle-dashboard-link').hover(function() {

        $(this).animate({
            right: 0
        }, "slow");

});

$('#toggle-dashboard-link').mouseleave(function() {

        $(this).animate({
            right: "-117px"
        }, "slow");

});
</script>
