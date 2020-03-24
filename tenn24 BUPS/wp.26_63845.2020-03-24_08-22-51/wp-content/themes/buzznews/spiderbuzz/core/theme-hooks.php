<?php
/**
 * Theme Hook Alliance hook stub list.
 *
 * @see  https://github.com/zamoose/themehookalliance
 *
 * @package     BuzzNews
 * @author     spiderbuzz
 * @copyright   Copyright (c) 2019, spiderbuzz
 * @link        http://spiderbuzz.com
 * @since       BuzzNews 1.0.0
 * */


/**
 * Define the version of THA support, in case that becomes useful down the road.
 */
define( 'BUZZNEWS_HOOKS_VERSION', '1.0-draft' );

/**
 * Themes and Plugins can check for buzznews_hooks using current_theme_supports( 'buzznews_hooks', $hook )
 * to determine whether a theme declares itself to support this specific hook type.
 *
 * Example:
 * <code>
 * 		// Declare support for all hook types
 * 		add_theme_support( 'buzznews_hooks', array( 'all' ) );
 *
 * 		// Declare support for certain hook types only
 * 		add_theme_support( 'buzznews_hooks', array( 'header', 'content', 'footer' ) );
 * </code>
 */
add_theme_support( 'buzznews_hooks', array(

	/**
	 * As a Theme developer, use the 'all' parameter, to declare support for all
	 * hook types.
	 * Please make sure you then actually reference all the hooks in this file,
	 * Plugin developers depend on it!
	 */
	'all',

	/**
	 * Themes can also choose to only support certain hook types.
	 * Please make sure you then actually reference all the hooks in this type
	 * family.
	 *
	 * When the 'all' parameter was set, specific hook types do not need to be
	 * added explicitly.
	 */
	'html',
	'body',
	'head',
	'header',
	'content',
	'entry',
	'comments',
	'sidebars',
	'sidebar',
	'footer',

	/**
	 * If/when WordPress Core implements similar methodology, Themes and Plugins
	 * will be able to check whether the version of THA supplied by the theme
	 * supports Core hooks.
	 */
	//'core',
) );

/**
 * Determines, whether the specific hook type is actually supported.
 *
 * Plugin developers should always check for the support of a <strong>specific</strong>
 * hook type before hooking a callback function to a hook of this type.
 *
 * Example:
 * <code>
 * 		if ( current_theme_supports( 'buzznews_hooks', 'header' ) )
 * 	  		add_action( 'buzznews_head_top', 'prefix_header_top' );
 * </code>
 *
 * @param bool $bool true
 * @param array $args The hook type being checked
 * @param array $registered All registered hook types
 *
 * @return bool
 */
function buzznews_current_theme_supports( $bool, $args, $registered ) {
	return in_array( $args[0], $registered[0] ) || in_array( 'all', $registered[0] );
}
add_filter( 'current_theme_supports-buzznews_hooks', 'buzznews_current_theme_supports', 10, 3 );

/**
 * HTML <html> hook
 * Special case, useful for <DOCTYPE>, etc.
 * $buzznews_supports[] = 'html;
 */
function buzznews_html_before() {
	do_action( 'buzznews_html_before' );
}
/**
 * HTML <body> hooks
 * $buzznews_supports[] = 'body';
 */
function buzznews_body_top() {
	do_action( 'buzznews_body_top' );
}

function buzznews_body_bottom() {
	do_action( 'buzznews_body_bottom' );
}

/**
 * HTML <head> hooks
 *
 * $buzznews_supports[] = 'head';
 */
function buzznews_head_top() {
	do_action( 'buzznews_head_top' );
}

function buzznews_head_bottom() {
	do_action( 'buzznews_head_bottom' );
}

/**
 * Semantic <header> hooks
 *
 * $buzznews_supports[] = 'header';
 */
function buzznews_header_before() {
	do_action( 'buzznews_header_before' );
}

function buzznews_header() {
	do_action( 'buzznews_header' );
}

function buzznews_site_branding() {
	do_action( 'buzznews_site_branding' );
}

function buzznews_menu() {
	do_action( 'buzznews_menu' );
}


function buzznews_header_after() {
	do_action( 'buzznews_header_after' );
}




/**
 * Semantic <content> hooks
 *
 * $buzznews_supports[] = 'content';
 */
function buzznews_content_before() {
	do_action( 'buzznews_content_before' );
}

function buzznews_content_after() {
	do_action( 'buzznews_content_after' );
}

function buzznews_content_top() {
	do_action( 'buzznews_content_top' );
}

function buzznews_content_bottom() {
	do_action( 'buzznews_content_bottom' );
}

function buzznews_content_while_before() {
	do_action( 'buzznews_content_while_before' );
}

function buzznews_content_while_after() {
	do_action( 'buzznews_content_while_after' );
}

function buzznews_content_loop(){
	do_action('buzznews_content_loop');
}

/**
 * Semantic <entry> hooks
 *
 * $buzznews_supports[] = 'entry';
 */
function buzznews_entry_before() {
	do_action( 'buzznews_entry_before' );
}

function buzznews_entry_after() {
	do_action( 'buzznews_entry_after' );
}

function buzznews_entry_content_before() {
	do_action( 'buzznews_entry_content_before' );
}

function buzznews_entry_content_after() {
	do_action( 'buzznews_entry_content_after' );
}

function buzznews_entry_top() {
	do_action( 'buzznews_entry_top' );
}

function buzznews_entry_bottom() {
	do_action( 'buzznews_entry_bottom' );
}

/**
 * Comments block hooks
 *
 * $buzznews_supports[] = 'comments';
 */
function buzznews_comments_before() {
	do_action( 'buzznews_comments_before' );
}

function buzznews_comments_after() {
	do_action( 'buzznews_comments_after' );
}

/**
 * Semantic <sidebar> hooks
 *
 * $buzznews_supports[] = 'sidebar';
 */
function buzznews_sidebars_before() {
	do_action( 'buzznews_sidebars_before' );
}

function buzznews_sidebars_after() {
	do_action( 'buzznews_sidebars_after' );
}



/**
 * Semantic <footer> hooks
 *
 * $buzznews_supports[] = 'footer';
 */
function buzznews_footer_before() {
	do_action( 'buzznews_footer_before' );
}

function buzznews_footer() {
	do_action( 'buzznews_footer' );
}

function buzznews_footer_widgets() {
	do_action( 'buzznews_footer_widgets' );
}

function buzznews_footer_copyright() {
	do_action( 'buzznews_footer_copyright' );
}

function buzznews_footer_after() {
	do_action( 'buzznews_footer_after' );
}


function buzznews_pagination(){
	do_action('buzznews_number_pagination');
}






/**
 * Archive header
 */
function buzznews_archive_header() {
	do_action( 'buzznews_archive_header' );
}


/**
 * 404 Page content template action.
 */
function buzznews_404_content_template() {
	do_action( 'buzznews_404_content_template' );
}



/**
 * Conten Page Loop.
 *
 * Called from page.php
 */
function buzznews_content_page_loop() {
	do_action( 'buzznews_content_page_loop' );
}




/**
 * Homepage Blog Before main
 */
function buzznews_before_mainsec() {
	do_action( 'buzznews_before_mainsec' );
}


/**
 * Homepage Blog After main
 */
function buzznews_after_mainsec() {
	do_action( 'buzznews_after_mainsec' );
}

/**
 * Homepage Slider
 */
function buzznews_main_slider() {
	do_action( 'buzznews_main_slider' );
}


/**
 * Homepage buzznews_tranding
 */
function buzznews_tranding() {
	do_action( 'buzznews_tranding' );
}


/**
 * Homepage buzznews_homepage_featured
 */
function buzznews_homepage_featured() {
	do_action( 'buzznews_homepage_featured' );
}


/**
 * Homepage 
 */
function buzznews_post_format_icon() {
	do_action( 'buzznews_post_format_icon' );
}

/**
 * Homepage custom widget area
 */
function buzznews_homepage_widgets() {
	do_action( 'buzznews_homepage_widgets' );
}


/**
 * Homepage category postlist
 */
function buzznews_home_category_postlist(){
	do_action('buzznews_home_category_postlist');
}


/**
 * Homepage category postlist
 */
function buzznews_breadcrumb_trail(){
	do_action('buzznews_breadcrumb_trail');
}
