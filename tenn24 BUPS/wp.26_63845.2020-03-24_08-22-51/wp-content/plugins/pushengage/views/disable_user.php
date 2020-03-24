<style>
 @media (min-width:1024px)
 {
.tooltip-inner {
           max-width: none;
           white-space: nowrap;
       }
 }
 @media (min-width:600px) and (max-width:761px)
 {
  .tooltip-inner {
           max-width: none;
           white-space: nowrap;
       }
 }
 .topstats li{border: 1px solid #eeeeee;
   padding: 15px;
   margin: 0px 0px !important;
  }
  .topstats  li h3{color:#674508}
  .topstats  li span i{color:green !important}
.topstats{padding:0 0px !important}
@media (min-width:660px) and (max-width:1024px)
 {
  .topstats li{border-right: 0px !important;
  }
 }
</style>
	<div class="container-widget">
		
		<?php include_once('header.php');?>
		
		<div class="kode-alert kode-alert-icon alert6-light">
			<span style="text-align:center"><i class="fa fa-info"></i> <?php if(isset($_SESSION['check_auth']['block_user_message'])) echo $_SESSION['check_auth']['block_user_message'];?></span>
			<div style="text-align:center;margin-top: 20px;">
				<form id="form-upgrade" method="post" action='https://www.pushengage.com/dashboard/users/payment_info'>
				<input type="submit" class="btn btn-primary btn-responsive" value="Upgrade Plan">
				</form>
			</div>
		</div>
		
	</div>
	
	