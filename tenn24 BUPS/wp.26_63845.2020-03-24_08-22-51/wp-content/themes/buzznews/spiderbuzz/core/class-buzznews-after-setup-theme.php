<?php
/**
 * BuzzNews functions and definitions.
 * Text Domain: buzznews
 * When using a child theme (see http://codex.wordpress.org/Theme_Development
 * and http://codex.wordpress.org/Child_Themes), you can override certain
 * functions (those wrapped in a function_exists() call) by defining them first
 * in your child theme's functions.php file. The child theme's functions.php
 * file is included before the parent theme's file, so the child theme
 * functions would be used.
 *
 * For more information on hooks, actions, and filters,
 * see http://codex.wordpress.org/Plugin_API
 *
 *
 * @package     BuzzNews
 * @author     spiderbuzz
 * @copyright   Copyright (c) 2019, spiderbuzz
 * @link        http://spiderbuzz.com
 * @since       BuzzNews 1.0.0
 * */


/**
 * BuzzNews_After_Setup_Theme initial setup
 *
 * @since 1.0.0
 */
if ( ! class_exists( 'BuzzNews_After_Setup_Theme' ) ) {

	/**
	 * BuzzNews_After_Setup_Theme initial setup
	 */
	class BuzzNews_After_Setup_Theme {

		/**
		 * Instance
		 *
		 * @var $instance
		 */
		private static $instance;

		/**
		 * Initiator
		 *
		 * @since 1.0.0
		 * @return object
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self;
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct() {
			add_action( 'after_setup_theme', array( $this, 'setup_theme' ), 2 );
            add_filter( 'excerpt_length',array($this,'buzznews_excerpt_length') , 999 );
            add_filter( 'nav_menu_submenu_css_class',array($this,'buzznews_nav_menu_submenu_css_class') );
            add_action( 'admin_init',array($this,'buzznews_add_editor_styles')  );
            add_action( 'after_setup_theme',array($this,'buzznews_content_width') , 0 );
        }

		/**
		 * Setup theme
		 *
		 * @since 1.0.0
		 */
		function setup_theme() {



			/*
            * Make theme available for translation.
            * Translations can be filed in the /languages/ directory.
            * If you're building a theme based on buzznews, use a find and replace
            * to change 'buzznews' to the name of your theme in all the template files.
            */
            load_theme_textdomain( 'buzznews', get_template_directory() . '/languages' );



            // Add default posts and comments RSS feed links to head.
            add_theme_support( 'automatic-feed-links' );



            /*
            * Let WordPress manage the document title.
            * By adding theme support, we declare that this theme does not use a
            * hard-coded <title> tag in the document head, and expect WordPress to
            * provide it for us.
            */
            add_theme_support( 'title-tag' );


            // Add theme support for selective refresh for widgets.
            add_image_size( 'buzznews-postlist', 370, 225, true );
            add_image_size( 'buzznews-main-slider', 570, 380, true );
            add_image_size( 'buzznews-thumb', 120, 100, true );
            add_image_size( 'buzznews-grid', 170, 110, true );
            add_image_size( 'buzznews-big', 470, 400, true );


            /*
            * Enable support for Post Thumbnails on posts and pages.
            *
            * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
            */
            add_theme_support( 'post-thumbnails' );

            
            /**
             * Note that you can add default arguments using:
             */
            $defaults = array(
                'default-color'          => '',
                'default-image'          => '',
                'default-repeat'         => 'repeat',
                'default-position-x'     => 'left',
                    'default-position-y'     => 'top',
                    'default-size'           => 'auto',
                'default-attachment'     => 'scroll',
                'wp-head-callback'       => '_custom_background_cb',
                'admin-head-callback'    => '',
                'admin-preview-callback' => ''
            );
            add_theme_support( 'custom-background', $defaults );


            /**
             * This theme uses wp_nav_menu() in one location.
             */
            register_nav_menus( array(
                'menu-1' => esc_html__( 'Primary', 'buzznews' ),
            ) );


            /*
            * Switch default core markup for search form, comment form, and comments
            * to output valid HTML5.
            */
            add_theme_support( 'html5', array(
                'search-form',
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
            ) );

            

            /**
             * Add theme support for selective refresh for widgets.
             */
            add_theme_support( 'customize-selective-refresh-widgets' );


            /**
             * Add support for core custom logo.
             */
            add_theme_support( 'custom-logo', array(
                'height'      => 250,
                'width'       => 250,
                'flex-width'  => true,
                'flex-height' => true,
            ) );

            
            /**
             * Post formats.
             */
			add_theme_support(
				'post-formats',
				array(
					'gallery',
					'image',
					'link',
					'quote',
					'video',
					'audio',
					'status',
					'aside',
				)
            );

            //Set a default header image 980px width and 60px height:
            $args = array(
                'width'         => 1000,
                'height'        => 250,
            );
            add_theme_support( 'custom-header', $args );
            


        }


        /**
         * Limite the excerpt
         * 
         * @since 1.0.4
         */
        function buzznews_excerpt_length( $length ) {

            if(is_admin() && !defined('DOING_AJAX') ){
                return $length;
            }
    
            return get_theme_mod('buzznews_the_excerpt_word_limit',45);
        }


        /**
         * BuzzNews submenu css class sub menu item add
         *
         * @param string $class file
         * @return void
         */
        function buzznews_nav_menu_submenu_css_class( $classes ) {
            $classes[] = 'buzznews-sidenav-dropdown';
            return $classes;
        }

        /**
		 * Registers an editor stylesheet for the theme.
         * 
         * @since 1.0.0
		 */
		function buzznews_add_editor_styles() {
			add_editor_style( 'buzznews-custom' );
        }


        /**
         * Set the content width in pixels, based on the theme's design and stylesheet.
         *
         * Priority 0 to make it available to lower priority callbacks.
         *
         * @global int $content_width
         */
        function buzznews_content_width() {
            // This variable is intended to be overruled from themes.
            // Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
            // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
            $GLOBALS['content_width'] = apply_filters( 'buzznews_content_width', 640 );
        }
        
    }


}

/**
 * cicking this off by calling 'get_instance()' method
 */
BuzzNews_After_Setup_Theme::get_instance();