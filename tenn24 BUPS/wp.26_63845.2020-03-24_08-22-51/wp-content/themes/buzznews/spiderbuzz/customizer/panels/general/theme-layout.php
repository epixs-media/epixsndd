<?php
/**
 * Theme Layout Hear
 *
 * @package buzznews
 */

function buzznews_theme_layout_settings( $wp_customize ) {
	
    //Products Category
    $wp_customize->add_section( 'buzznews_theme_layout_section', array(
        'title'    => esc_html__( 'Theme Layout', 'buzznews' ),
        'priority' => 3,
        'panel'    =>'general_setting'
	) );

   //Enable  Slider
    $wp_customize->add_setting( 
        'buzznews_theme_layout_settings', 
        array(
            'sanitize_callback' => 'buzznews_sanitize_select',
            'default'           => esc_html__('buzznews-theme-fullwidth','buzznews'),
        )
    );
    $wp_customize->add_control( 
        'buzznews_theme_layout_settings', 
        array(
            'label' => esc_html__( 'Theme Layout', 'buzznews' ),
            'section' => 'buzznews_theme_layout_section',
            'type' => 'select',
            'choices' => array(
                            'buzznews-theme-fullwidth'      => esc_html__( 'Full Width', 'buzznews' ),
                            'buzznews-theme-boxlayot'       => esc_html__( 'Box Layout', 'buzznews' ),
            ),
            'priority'          => 3,
        )
    );

}
add_action( 'customize_register', 'buzznews_theme_layout_settings' );