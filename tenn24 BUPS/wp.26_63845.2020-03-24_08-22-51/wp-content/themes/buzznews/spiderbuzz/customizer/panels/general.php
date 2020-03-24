<?php
/**
 * General  Settings
 *
 * @package BuzzNews
 */

function buzznews_customize_register_general( $wp_customize ) {
    
    $wp_customize->add_panel( 'general_setting', array(
        'title'      => esc_html__( 'General Settings', 'buzznews' ),
        'priority'   => 1
    ) );
        
}
add_action( 'customize_register', 'buzznews_customize_register_general' );