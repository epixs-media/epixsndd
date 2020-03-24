<?php
namespace MaxButtons;
exit('XXIT');

defined('ABSPATH') or die('No direct access permitted');

if (isset($_GET['action']) && $_GET['action'] != '') {
		// extra safety.
		$action = sanitize_text_field($_GET['action']);

		switch ($action) {
			case 'button':
			case 'edit':
					//include_once 'maxbuttons-button.php';
          $_GET['page'] = 'maxbuttons-button';
          MB()->loadAdminPage();
			break;
			default:
				//include_once 'maxbuttons-list.php';
        $_GET['page'] = 'maxbuttons-list';
        MB()->loadAdminPage();
			break;

		}

} else {
  $_GET['page'] = 'maxbuttons-list';
  MB()->loadAdminPage();
}
