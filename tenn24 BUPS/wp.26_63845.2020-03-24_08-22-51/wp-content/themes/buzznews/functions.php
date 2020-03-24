<?php
/**
 * buzznews functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package     BuzzNews
 * @author     spiderbuzz
 * @copyright   Copyright (c) 2019, spiderbuzz
 * @link        http://spiderbuzz.com
 * @since       BuzzNews 1.0.0
 * */


/**
 * Define Constants
 */
define( 'BUZZNEWS_THEME_VERSION', '1.0.0' );
define( 'BUZZNEWS_THEME_DIR', trailingslashit ( get_template_directory() ) );
define( 'BUZZNEWS_THEME_URI', trailingslashit ( get_template_directory_uri() ));
define( 'BUZZNEWS_THEME_IMG', trailingslashit ( get_template_directory_uri() ). 'assets/images/' );

/**
 * require class file
 */
require_once BUZZNEWS_THEME_DIR . 'spiderbuzz/core/class-buzznews-after-setup-theme.php';
require_once BUZZNEWS_THEME_DIR . 'spiderbuzz/core/class-register-widget.php';
require_once BUZZNEWS_THEME_DIR . 'spiderbuzz/core/class-buzznews-enqueue-scripts.php';
require_once BUZZNEWS_THEME_DIR . 'spiderbuzz/core/theme-hooks.php';
require_once BUZZNEWS_THEME_DIR . 'spiderbuzz/core/extras.php';
require_once BUZZNEWS_THEME_DIR . 'spiderbuzz/core/class-buzznews-loop.php';
require_once BUZZNEWS_THEME_DIR . 'spiderbuzz/core/common-functions.php';
require_once BUZZNEWS_THEME_DIR . 'spiderbuzz/core/class-tgm-plugin-activation.php';


require_once BUZZNEWS_THEME_DIR . 'spiderbuzz/core/class-tgm-plugin-activation.php';

//demo-import.php
require_once BUZZNEWS_THEME_DIR . 'spiderbuzz/demo-import/demo-import.php';


/**
 * Default Require File
 */
require BUZZNEWS_THEME_DIR . 'spiderbuzz/inc/custom-header.php';
require BUZZNEWS_THEME_DIR . 'spiderbuzz/inc/template-tags.php';
require BUZZNEWS_THEME_DIR . 'spiderbuzz/inc/template-functions.php';
require BUZZNEWS_THEME_DIR . 'spiderbuzz/inc/customizer.php';
if ( defined( 'JETPACK__VERSION' ) ) {
	require BUZZNEWS_THEME_DIR . 'spiderbuzz/inc/jetpack.php';
}


/**
 * Customizer Settings
 */
require BUZZNEWS_THEME_DIR . '/spiderbuzz/customizer/custom-controls/custom-control.php';
require BUZZNEWS_THEME_DIR . '/spiderbuzz/customizer/customizer.php';


/**
 * Hoempage Custom Widget
 */
require BUZZNEWS_THEME_DIR . '/spiderbuzz/widgets/buzznews-gridpost.php';
require BUZZNEWS_THEME_DIR . '/spiderbuzz/widgets/buzznews-listpost.php';
require BUZZNEWS_THEME_DIR . '/spiderbuzz/widgets/buzznews-bigpost-list.php';
require BUZZNEWS_THEME_DIR . '/spiderbuzz/widgets/buzznews-sidebar-list.php';
require BUZZNEWS_THEME_DIR . '/spiderbuzz/widgets/buzznews-sidebar-mostread-list.php';
require BUZZNEWS_THEME_DIR . '/spiderbuzz/widgets/buzznews-sidebar-gridpost.php';