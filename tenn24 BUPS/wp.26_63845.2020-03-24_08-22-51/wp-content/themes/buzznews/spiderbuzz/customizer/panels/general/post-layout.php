<?php
/**
 * General Settings Hear
 *
 * @package buzznews
 */

function buzznews_layout_settings( $wp_customize ) {
	
    //Products Category
    $wp_customize->add_section( 'buzznews_layout_section', array(
        'title'    => esc_html__( 'Sidebar Layout', 'buzznews' ),
        'priority' => 3,
        'panel'    =>'general_setting'
	) );

   //Enable  Slider
    $wp_customize->add_setting( 
        'buzznews_post_sidebar_layout_settings', 
        array(
            'sanitize_callback' => 'buzznews_sanitize_select',
            'default'           => esc_html__('buzznews-right-sidebar','buzznews'),
        )
    );
    $wp_customize->add_control( 
        'buzznews_post_sidebar_layout_settings', 
        array(
            'label' => esc_html__( 'Post Sidebar Layout', 'buzznews' ),
            'section' => 'buzznews_layout_section',
            'type' => 'select',
            'choices' => array(
                            'buzznews-left-sidebar'      => esc_html__( 'Left Sidebar', 'buzznews' ),
                            'buzznews-right-sidebar'     => esc_html__( 'Right Sidebar', 'buzznews' ),
                            'buzznews-full-width'        => esc_html__( 'Full Width', 'buzznews' ),
            ),
            'priority'          => 3,
        )
    ); 

    //infinite-scrolling
    $wp_customize->add_setting(
        'buzznews_infinite_scrolling',
        array(
            'default'           => false,
            'sanitize_callback' => 'buzznews_sanitize_checkbox',
        )
    );
    $wp_customize->add_control(
		new BuzzNews_Toggle_Control( 
			$wp_customize,
			'buzznews_infinite_scrolling',
			array(
				'section'	  => 'buzznews_layout_section',
				'label'		  => esc_html__( 'Disable Infinite Scrolling Sections', 'buzznews' ),
                'description' => esc_html__( 'Enable/Disable Infinite Scrolling Sections.', 'buzznews' ),
                'priority'    => 1
			)
		)
    );

}
add_action( 'customize_register', 'buzznews_layout_settings' );