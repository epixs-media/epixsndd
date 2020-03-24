<?php
/**
 * select the buzznews
 *
 ** @package Buzznews
 */
function buzznews_frontpage_featured_post( $wp_customize ) {
    
    //Products Category
    $wp_customize->add_section( 'buzznews_featured_post', array(
        'title'    => esc_html__( 'Featured Post', 'buzznews' ),
        'priority' => 13,
        'panel'    =>'frontpage_setting'
    ) );

    


    /**************** */
    //buzznews tranding section display
    $wp_customize->add_setting(
        'buzznews_frontpage_featured_enable',
        array(
            'default'           => true,
            'sanitize_callback' => 'buzznews_sanitize_checkbox',
        )
    );
    $wp_customize->add_control(
		new BuzzNews_Toggle_Control( 
			$wp_customize,
			'buzznews_frontpage_featured_enable',
			array(
				'section'	  => 'buzznews_featured_post',
				'label'		  => esc_html__( 'Disable Featured Post', 'buzznews' ),
                'priority'    => 1
			)
		)
    );

    //buzznews slider section
	$wp_customize->add_setting(
        'buzznews_frontpage_featured_post_header_title',
        array(
            'default'           => esc_html__('Most Viewed','buzznews'),
            'sanitize_callback' => 'sanitize_text_field',
        )
    );
    
    $wp_customize->add_control(
		'buzznews_frontpage_featured_post_header_title',
		array(
			'section'	  => 'buzznews_featured_post',
            'label'		  => esc_html__( 'Most viewed Post', 'buzznews' ),
            'type'        => 'text',
            'priority'    => 5,
		)		
    );
   
    
	/** Select Blog Section Hear */
	$wp_customize->add_setting( 
        'buzznews_frontpage_featured_post_cat_id', 
        array(
			'default' => esc_html__( 'all', 'buzznews' ),
            'sanitize_callback' => 'buzznews_sanitize_select'
        )
    );
     
    $wp_customize->add_control( 
        'buzznews_frontpage_featured_post_cat_id', 
        array(
			'label'         => esc_html__( 'Select Category', 'buzznews' ),
            'section'       => 'buzznews_featured_post',
            'type'          => 'select',
            'choices'       => buzznews_get_post_categories( ),
            'priority'      => 6,
        )
	); 
	

	//Number of Homepage Blog
	$wp_customize->add_setting(
        'buzznews_frontpage_featured_numberofpost',
        array(
            'default'           => 6,
            'sanitize_callback' => 'absint',
        )
    );
    
    $wp_customize->add_control(
		'buzznews_frontpage_featured_numberofpost',
		array(
			'section'	  => 'buzznews_featured_post',
			'label'		  => esc_html__( 'Featured Number of Post', 'buzznews' ),
            'type'        => 'number',
            'priority'      => 7,
		)		
    );


}
add_action( 'customize_register', 'buzznews_frontpage_featured_post' );