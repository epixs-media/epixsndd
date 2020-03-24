<?php
/**
 * Widget and sidebars related functions
 *
 * @package     BuzzNews
 * @author     spiderbuzz
 * @copyright   Copyright (c) 2019, spiderbuzz
 * @link        http://spiderbuzz.com
 * @since       BuzzNews 1.0.0
 * */

/**
 * Register widget area.
 */
if ( ! function_exists( 'buzznews_widgets_init' ) ) :

	/**
	 * Register widget area.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
    */
	function buzznews_widgets_init() {

		
		/**
         * Register left sidebar widget area.
         *  @since 1.0.0
          */
        register_sidebar( array(
            'name'          => esc_html__( 'Right Sidebar', 'buzznews' ),
            'id'            => 'sidebar-1',
            'description'   => esc_html__( 'Add widgets here.', 'buzznews' ),
            'before_widget' => '<section id="%1$s" class=" widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title">',
            'after_title'   => '</h2>',
        ) );


        /**
         * Register home sidebar widget area.
         *  @since 1.0.0
          */
          register_sidebar( array(
            'name'          => esc_html__( 'Homepage Sidebar', 'buzznews' ),
            'id'            => 'homepage-sidebar',
            'description'   => esc_html__( 'Add widgets here.', 'buzznews' ),
            'before_widget' => '<section id="%1$s" class=" widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title">',
            'after_title'   => '</h2>',
        ) );


        /**
         * Register homepage widget area.
         *  @since 1.0.0
          */
          register_sidebar( array(
            'name'          => esc_html__( 'Homepage Content', 'buzznews' ),
            'id'            => 'buzznews-homepage-widget',
            'description'   => esc_html__( 'Add widgets here.', 'buzznews' ),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title">',
            'after_title'   => '</h2>',
        ) );

        

        /**
         * Register Footer Sidebar
         * @since 1.0.0
         */
        register_sidebar( array(
            'name'          => esc_html__( 'Footer First', 'buzznews' ),
            'id'            => 'footer-1',
            'description'   => esc_html__( 'Add widgets here.', 'buzznews' ),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title"><span>',
            'after_title'   => '</span></h2>',
        ) );


        
        /**
         * Register Footer Second widget
         * @since 1.0.0
         */
        register_sidebar( array(
            'name'          => esc_html__( 'Footer Second', 'buzznews' ),
            'id'            => 'footer-2',
            'description'   => esc_html__( 'Add widgets here.', 'buzznews' ),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title"><span>',
            'after_title'   => '</span></h2>',
        ) );

        
        /**
         * Register Footer Third widget
         * @since 1.0.0
         */
        register_sidebar( array(
            'name'          => esc_html__( 'Footer Third', 'buzznews' ),
            'id'            => 'footer-3',
            'description'   => esc_html__( 'Add widgets here.', 'buzznews' ),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title"><span>',
            'after_title'   => '</span></h2>',
        ) );


        /**
         * Register Footer Third widget
         * @since 1.0.0
         */
        register_sidebar( array(
            'name'          => esc_html__( 'Footer Four', 'buzznews' ),
            'id'            => 'footer-4',
            'description'   => esc_html__( 'Add widgets here.', 'buzznews' ),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title"><span>',
            'after_title'   => '</span></h2>',
        ) );
		
	}
	add_action( 'widgets_init', 'buzznews_widgets_init' );

endif;
