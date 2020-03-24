<?php
/**
 * Homepage  Settings
 *
 * @package BuzzNews
 */

function buzznews_customize_register_frontpage( $wp_customize ) {
    
    $wp_customize->add_panel( 'frontpage_setting', array(
        'title'      => esc_html__( 'Frontpage Settings', 'buzznews' ),
        'priority'   => 1
    ) );
        
}
add_action( 'customize_register', 'buzznews_customize_register_frontpage' );