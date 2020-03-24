<?php
/**
 * Archive page Settings
 *
 * @package BuzzNews
 */
function buzznews_customize_archive_page_settings( $wp_customize ) {

    //Main Heaer Panel 
    $wp_customize->add_section( 'buzznews_archive_page_settings', array(
        'title'    => esc_html__( 'Archive & Blog Page', 'buzznews' ),
        'priority' => 82,
        'panel'    =>'general_setting'
    ) );

    /**
     * Archive Post Excerpt Word Limit
     */
    $wp_customize->add_setting(
        'buzznews_the_excerpt_word_limit',
        array(
            'default'           => 20,
            'sanitize_callback' => 'absint',
        )
    );
    $wp_customize->add_control(
		'buzznews_the_excerpt_word_limit',
		array(
			'section'	  => 'buzznews_archive_page_settings',
			'label'		  => esc_html__( 'Word Limit Excerpt', 'buzznews' ),
			'description' => esc_html__( 'Number of excerpt limit word.', 'buzznews' ),
            'type'        => 'number',
            'priority'    => 2
		)		
    );


}
add_action( 'customize_register', 'buzznews_customize_archive_page_settings' );