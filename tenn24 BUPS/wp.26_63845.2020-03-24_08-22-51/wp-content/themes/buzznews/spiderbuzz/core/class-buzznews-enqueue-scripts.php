<?php
/**
 * Loader Functions
 *
 * @package     BuzzNews
 * @author     spiderbuzz
 * @copyright   Copyright (c) 2019, spiderbuzz
 * @link        http://spiderbuzz.com
 * @since       BuzzNews 1.0.0
 * */


if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Theme Enqueue Scripts
 */
if ( ! class_exists( 'BuzzNews_Enqueue_Scripts' ) ) {

	/**
	 * Theme Enqueue Scripts
	 */
	class BuzzNews_Enqueue_Scripts {

        
		/**
		 * Constructor
		 */
		public function __construct() {

			add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ), 1 );

		}


		/**
		 * Enqueue Scripts
		 */
		public function enqueue_scripts() {

			/**
			 * Enqueue Google Fonts
			 */
			$buzznews_google_fonts_list = array('Montserrat','Open+Sans');
			foreach(  $buzznews_google_fonts_list as $google_font ){
				wp_enqueue_style( 'buzznews-google-fonts-'.$google_font, '//fonts.googleapis.com/css?family='.$google_font.':200,300,400,500,600,700,800', false ); 
			}



            /**
             * Enqueue Style
             */
			wp_enqueue_style( 'slick', BUZZNEWS_THEME_URI . '/assets/library/slick/slick.css', array(), BUZZNEWS_THEME_VERSION, false );
			wp_enqueue_style( 'slick-theme', BUZZNEWS_THEME_URI . '/assets/library/slick/slick-theme.css', array(), BUZZNEWS_THEME_VERSION, false );
			wp_enqueue_style( 'bootstrap', BUZZNEWS_THEME_URI . '/assets/library/bootstrap/css/bootstrap.css', array(), BUZZNEWS_THEME_VERSION, false );
			wp_enqueue_style( 'font-awesome', BUZZNEWS_THEME_URI . '/assets/library/font-awesome/css/font-awesome.css', array(), BUZZNEWS_THEME_VERSION, false );
			wp_enqueue_style( 'buzznews-color', BUZZNEWS_THEME_URI . '/assets/css/color.css', array(), BUZZNEWS_THEME_VERSION, false );
			wp_enqueue_style( 'buzznews-style', get_stylesheet_uri() );
			wp_enqueue_style( 'buzznews-custom', BUZZNEWS_THEME_URI . '/assets/css/buzznews-custom.css', BUZZNEWS_THEME_VERSION, false );
			



            /**
             * Enqueue Script
             */
			wp_enqueue_script( 'theia-sticky-sidebar', BUZZNEWS_THEME_URI . '/assets/library/theia-sticky-sidebar/theia-sticky-sidebar.js', array('jquery'), BUZZNEWS_THEME_VERSION, true );
			wp_enqueue_script( 'matchheight', BUZZNEWS_THEME_URI . '/assets/library/matchheight/jquery.matchHeight.js', array('jquery'), BUZZNEWS_THEME_VERSION, true );
			wp_enqueue_script( 'slick', BUZZNEWS_THEME_URI . '/assets/library/slick/slick.js', array('jquery'), BUZZNEWS_THEME_VERSION, true );
			wp_enqueue_script( 'bootstrap', BUZZNEWS_THEME_URI . '/assets/library/bootstrap/js/bootstrap.js', array(), BUZZNEWS_THEME_VERSION, true );
			wp_enqueue_script( 'buzznews-navigation', BUZZNEWS_THEME_URI . '/assets/js/navigation.js', array(), BUZZNEWS_THEME_VERSION, true );
            wp_enqueue_script( 'buzznews-skip-link-focus-fix', BUZZNEWS_THEME_URI . '/assets/js/skip-link-focus-fix.js', array(), BUZZNEWS_THEME_VERSION, true );
			

			//Buzznews Ajax Call
			wp_register_script('buzznews-custom', get_template_directory_uri() . '/assets/js/buzznews-custom.js', array('jquery'), BUZZNEWS_THEME_VERSION, true );
			$localize = array(
				'ajaxurl' => admin_url('admin-ajax.php'),
				'sticky_enable' => get_theme_mod('buzznews_header_sticky_enable', 0) 
			);
			wp_localize_script('buzznews-custom', 'BUZZNEWS', $localize);
			wp_enqueue_script('buzznews-custom');

			
			//ajax load
			if( is_home()  || is_archive() || is_search() ){
				global $wp_query;
				$args = array(
					'nonce' => wp_create_nonce( 'buzznews-load-more-nonce' ),
					'url'   => admin_url( 'admin-ajax.php' ),
					'query' => $wp_query->query,
				);

				if(get_theme_mod('buzznews_infinite_scrolling')){
					wp_enqueue_script( 'buzznews-load-more', get_template_directory_uri(). '/assets/js/load-more.js', array( 'jquery' ), BUZZNEWS_THEME_VERSION, true );
					wp_localize_script( 'buzznews-load-more', 'buzznewsLoadMore', $args );
				}
			}
			
		
			/**
			 * comments replay js
			 */
            if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
                wp_enqueue_script( 'comment-reply' );
			}
			
            // RTL support.
			wp_style_add_data( 'buzznews-trl-css', 'rtl', 'replace' );
		}



	}

	new BuzzNews_Enqueue_Scripts();
}
