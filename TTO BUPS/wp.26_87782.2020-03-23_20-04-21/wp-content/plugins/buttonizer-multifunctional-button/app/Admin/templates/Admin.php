<?php
if (!defined('WP_ADMIN')) {
    exit('What a great buttonizer day!');
}
?>
<!DOCTYPE html>
<!--[if IE 8]>
<html xmlns="http://www.w3.org/1999/xhtml" class="ie8 ">
<![endif]-->
<!--[if !(IE 8) ]><!-->
<html xmlns="http://www.w3.org/1999/xhtml" class="">
<!--<![endif]-->
<head>
    <title>Buttonizer settings</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport' />
    <?php do_action('admin_print_styles') ?>
</head>
<body class="wp-core-ui">
    <div class="buttonizer-admin-overlay"></div>
    <div class="buttonizer-frame" style="display: none"><iframe src="" id="buttonizer-iframe" frameborder="0" width="100%" height="100%">Your browser does not support iframes.</iframe></div>

    <?php
        do_action('admin_print_scripts');
        do_action('admin_print_footer_scripts');
    ?>
</body>
</html>