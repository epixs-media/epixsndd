<?php
/**
 * BuzzNews Theme Customizer
 *
 * @package     BuzzNews
 * @author     spiderbuzz
 * @copyright   Copyright (c) 2019, spiderbuzz
 * @link        http:/spiderbuzz.com
 * @since       BuzzNews 1.0.0
 * */

 /**
  * Customizer file section
  */
  class BuzzNewsCustomizer{

        /**
         * Instance
         *
         * @var $instance
         * @since 1.0.0
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
         * BuzzNews Customizer construct functins
         *
         * @access public
         */
        public function __construct(){

            /**
             * BuzzNews Customizer panel call
             *
             * @access public
             * @var    array
             * @since 1.0.0
             */
            $buzznews_panels   = array( 'general','home');
        

            /**
             * BuzzNews Customizer section array
             *
             * @access public
             * @var    array
             * @since 1.0.0
             */
            $buzznews_sub_sections   = array( 
                'general'    => array( 'basic','post-layout','theme-layout','breadcrumb','archive'),
                'home'      =>  array('slider','featured-story','before_footer_post','category-postlist'),
            );
            
            //call the functions
            $this->buzznews_customizer_panel( $buzznews_panels , $buzznews_sub_sections );


            
            /**
             * Sanitize callback for checkbox
             * 
             * sanitization-functions.php | senitization the custoizer function
             * 
             * @since 1.0.0
            */
            load_template( BUZZNEWS_THEME_DIR . 'spiderbuzz/customizer/sanitization-functions.php' );
            
            
            /**
             * Customizer Preview Js
             * 
             * 
             * @since 1.0.0
            */
            add_action( 'customize_preview_init',array( $this,'buzznews_customize_preview_js' )  );
            add_action( 'customize_controls_enqueue_scripts',array( $this,'buzznews_customizer_scripts' ) );

        }


        /**
         * BuzzNews Customizer load the all panel and section
         *
         * @access public
         * @since 1.0.0
         */
        public function buzznews_customizer_panel( $buzznews_panels , $buzznews_sub_sections ){
            /**
             * Call the panel 
             * 
             * Register the all buzznews customizer panel
             * 
             * @since 1.0.0
             */
            foreach( $buzznews_panels as $panel ){
                load_template( BUZZNEWS_THEME_DIR . '/spiderbuzz/customizer/panels/' . $panel . '.php' );
            }

            
            /**
             * Call the section
             * 
             * Register the all buzznews customizer section,
             * and conrol.
             * 
             * @since 1.0.0
             */
            foreach( $buzznews_sub_sections as $k => $v ){
                foreach( $v as $w ){        
                    load_template( BUZZNEWS_THEME_DIR . 'spiderbuzz/customizer/panels/' . $k . '/' . $w . '.php' );

                    //require BUZZNEWS_THEME_DIR . 'spiderbuzz/customizer/panels/' . $k . '/' . $w . '.php';
                }
            }
        }


        
        /**
         * Basic Js File enqueue Section
         * 
         * @access public 
         * @since 1.0.0
         */
        public function buzznews_customize_preview_js() {
            wp_enqueue_style( 'buzznews-customizer-preview', BUZZNEWS_THEME_URI . 'spiderbuzz/customizer/css/customizer.css', array(), BUZZNEWS_THEME_VERSION );
            wp_enqueue_script( 'buzznews-customizer-preview', BUZZNEWS_THEME_URI . 'spiderbuzz/customizer/js/customizer.js', array( 'customize-preview', 'customize-selective-refresh' ), BUZZNEWS_THEME_VERSION, true );
        }
    

        /**
         * Basic Js File enqueue Section
         * 
         * @access public
         * @since 1.0.0
         */
        public function buzznews_customizer_scripts() {
            wp_enqueue_style( 'buzznews-customize',BUZZNEWS_THEME_URI.'spiderbuzz/customizer/css/customize.css', BUZZNEWS_THEME_VERSION, 'screen' );
            wp_enqueue_script( 'buzznews-customize', BUZZNEWS_THEME_URI . 'spiderbuzz/customizer/js/customize-homepage.js', array( 'jquery' ), BUZZNEWS_THEME_VERSION, true );
        }
        
}

/**
 * customizer file this off by calling 'get_instance()' method
 */
BuzzNewsCustomizer::get_instance();