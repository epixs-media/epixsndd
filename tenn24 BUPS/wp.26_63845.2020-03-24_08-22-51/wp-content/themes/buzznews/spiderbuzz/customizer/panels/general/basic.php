<?php
/**
 * General Settings Hear
 *
 * @package BuzzNews
 */

function buzznews_customize_general_settings( $wp_customize ) {
	
    /**
    * General Settings Panel
    */
    /** Enable/Disable Top Header Settings */
    $wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
    $wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
    $wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

    /** BuzzNews Logo Customizer */
    if ( isset( $wp_customize->selective_refresh ) ) {
        $wp_customize->selective_refresh->add_partial( 'blogname', array(
            'selector'        => '.site-title a',
            'render_callback' => 'buzznews_customize_partial_blogname',
        ) );
        $wp_customize->selective_refresh->add_partial( 'blogdescription', array(
            'selector'        => '.site-description',
            'render_callback' => 'buzznews_customize_partial_blogdescription',
        ) );
    }

    //BuzzNews Logo Setting
    $wp_customize->get_section('title_tagline')->panel = 'general_setting';
    $wp_customize->get_section('title_tagline' )->priority = 1;


    $wp_customize->get_section('header_image')->panel = 'general_setting';
    $wp_customize->get_section('header_image' )->priority = 2;

    $wp_customize->get_section('title_tagline' )->priority = 3;


    
    /**
    * General Settings Panel
    */
    $wp_customize->get_section('colors')->panel = 'general_setting';
    $wp_customize->get_control('header_textcolor' )->priority = 6;
    $wp_customize->get_control('background_color' )->priority = 7;
    $wp_customize->get_section('background_image')->panel = 'general_setting';
    

    /**
     * Time and Date display
     */
    $wp_customize->add_section( 'buzznews_timeanddate', array(
        'title'    => esc_html__( 'Date Format', 'buzznews' ),
        'priority' => 3,
        'panel'    =>'general_setting'
	) );

   //Enable  Slider
    $wp_customize->add_setting( 
        'buzznews_post_timedate', 
        array(
            'sanitize_callback' => 'buzznews_sanitize_select',
            'default'           => esc_html__('human-readable','buzznews'),
        )
    );
    $wp_customize->add_control( 
        'buzznews_post_timedate', 
        array(
            'label' => esc_html__( 'Human Readable', 'buzznews' ),
            'section' => 'buzznews_timeanddate',
            'type' => 'select',
            'choices' => array(
                            'human-readable'      => esc_html__( 'Human Readable', 'buzznews' ),
                            'default'             => esc_html__( 'Default', 'buzznews' ),
            ),
            'priority'          => 3,
        )
    );



    //Header Sticky Enable/ Disable
    $wp_customize->add_setting(
        'buzznews_header_sticky_enable',
        array(
            'default'           => false,
            'sanitize_callback' => 'buzznews_sanitize_checkbox',
        )
    );
    $wp_customize->add_control(
		new BuzzNews_Toggle_Control( 
			$wp_customize,
			'buzznews_header_sticky_enable',
			array(
				'section'	  => 'title_tagline',
				'label'		  => esc_html__( 'Disable Header Sticky', 'buzznews' ),
                'description' => esc_html__( 'Enable/Disable Header Sticky', 'buzznews' ),
                'priority'    => 1
			)
		)
    );

}
add_action( 'customize_register', 'buzznews_customize_general_settings' );