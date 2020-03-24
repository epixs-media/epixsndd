<?php
/**
 * Breadcrumb Settings
 *
 * @package BuzzNews
 */
function buzznews_customize_breadcrumb_settings( $wp_customize ) {

    //Breadcrumb Panel
    $wp_customize->add_section( 'buzznews_breadcrumb_sections', array(
        'title'    => esc_html__( 'Breadcrumb Settings', 'buzznews' ),
        'priority' => 81,
        'panel'    =>'general_setting'
    ) );

    //Breadcrumb Enable
    $wp_customize->add_setting(
        'buzznews_breadcrumb_enable',
        array(
            'default'           => true,
            'sanitize_callback' => 'buzznews_sanitize_checkbox',
        )
    );
    $wp_customize->add_control(
		new BuzzNews_Toggle_Control( 
			$wp_customize,
			'buzznews_breadcrumb_enable',
			array(
				'section'	  => 'buzznews_breadcrumb_sections',
				'label'		  => esc_html__( 'Disable Breadcrumb Sections', 'buzznews' ),
                'description' => esc_html__( 'Enable/Disable Breadcrumb Sections.', 'buzznews' ),
                'priority'    => 1
			)
		)
    );

}
add_action( 'customize_register', 'buzznews_customize_breadcrumb_settings' );