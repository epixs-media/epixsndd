<?php
/**
 * select the buzznews
 *
 ** @package Buzznews
 */

function buzznews_frontpage_slider( $wp_customize ) {
    
    //Products Category
    $wp_customize->add_section( 'buzznews_blog_section', array(
        'title'    => esc_html__( 'Frontpage Slider', 'buzznews' ),
        'priority' => 12,
        'panel'    =>'frontpage_setting'
    ) );

    //slider section disable
    $wp_customize->add_setting(
        'buzznews_slider_slider_section_enable',
        array(
            'default'           => true,
            'sanitize_callback' => 'buzznews_sanitize_checkbox',
        )
    );
    $wp_customize->add_control(
		new BuzzNews_Toggle_Control( 
			$wp_customize,
			'buzznews_slider_slider_section_enable',
			array(
				'section'	  => 'buzznews_blog_section',
				'label'		  => esc_html__( 'Disable Slider', 'buzznews' ),
                'description' => esc_html__( 'Enable/Disable Slider Section.', 'buzznews' ),
                'priority'    => 1
			)
		)
    );

    //slider section disable
    $wp_customize->add_setting(
        'buzznews_homepage_slider_post_exclusive',
        array(
            'default'           => true,
            'sanitize_callback' => 'buzznews_sanitize_checkbox',
        )
    );
    $wp_customize->add_control(
		new BuzzNews_Toggle_Control( 
			$wp_customize,
			'buzznews_homepage_slider_post_exclusive',
			array(
				'section'	  => 'buzznews_blog_section',
				'label'		  => esc_html__( 'Post Exclusive', 'buzznews' ),
                'description' => esc_html__( 'Enable/Disable slider post post exclusive.', 'buzznews' ),
                'priority'    => 1
			)
		)
    );

    /** Select Blog Section Hear */
	$wp_customize->add_setting( 
        'buzznews_main_slider_cat_id', 
        array(
			'default' => esc_html__('all','buzznews'),
            'sanitize_callback' => 'buzznews_sanitize_select'
        )
    );
    
    $wp_customize->add_control( 
        'buzznews_main_slider_cat_id', 
        array(
			'label'         => esc_html__( 'Select Category', 'buzznews' ),
            'section'       => 'buzznews_blog_section',
            'type'          => 'select',
            'choices'       => buzznews_get_post_categories( ),
            'priority'      => 2,
        )
	); 
	

	//Number of Homepage Blog
	$wp_customize->add_setting(
        'buzznews_main_slider_numberofpost',
        array(
            'default'           => 6,
            'sanitize_callback' => 'absint',
        )
    );
    
    $wp_customize->add_control(
		'buzznews_main_slider_numberofpost',
		array(
			'section'	  => 'buzznews_blog_section',
			'label'		  => esc_html__( 'Slider Number of Post', 'buzznews' ),
            'type'        => 'number',
            'priority'      => 3,
		)		
    );


    /**************** */
    //buzznews tranding section display
    $wp_customize->add_setting(
        'buzznews_slider_tranding_enable',
        array(
            'default'           => true,
            'sanitize_callback' => 'buzznews_sanitize_checkbox',
        )
    );
    $wp_customize->add_control(
		new BuzzNews_Toggle_Control( 
			$wp_customize,
			'buzznews_slider_tranding_enable',
			array(
				'section'	  => 'buzznews_blog_section',
				'label'		  => esc_html__( 'Disable Tranding News', 'buzznews' ),
                'priority'    => 4
			)
		)
    );

    //buzznews slider section
	$wp_customize->add_setting(
        'buzznews_blog_header_title',
        array(
            'default'           => esc_html__('Latest News','buzznews'),
            'sanitize_callback' => 'sanitize_text_field',
        )
    );
    
    $wp_customize->add_control(
		'buzznews_blog_header_title',
		array(
			'section'	  => 'buzznews_blog_section',
            'label'		  => esc_html__( 'Tranding News Title', 'buzznews' ),
            'type'        => 'text',
            'priority'    => 5,
		)		
    );

    
	/** Select Blog Section Hear */
	$wp_customize->add_setting( 
        'buzznews_tranding_news_cat_id', 
        array(
			'default' => esc_html__('all','buzznews'),
            'sanitize_callback' => 'buzznews_sanitize_select'
        )
    );
    
    $wp_customize->add_control( 
        'buzznews_tranding_news_cat_id', 
        array(
			'label'         => esc_html__( 'Tranding News Category', 'buzznews' ),
            'section'       => 'buzznews_blog_section',
            'type'          => 'select',
            'choices'       => buzznews_get_post_categories( ),
            'priority'      => 6,
        )
	); 
	

	//Number of Homepage Blog
	$wp_customize->add_setting(
        'buzznews_tranding_news_numberofpost',
        array(
            'default'           => 6,
            'sanitize_callback' => 'absint',
        )
    );
    
    $wp_customize->add_control(
		'buzznews_tranding_news_numberofpost',
		array(
			'section'	  => 'buzznews_blog_section',
			'label'		  => esc_html__( 'Tranding News Number of Post', 'buzznews' ),
            'type'        => 'number',
            'priority'      => 7,
		)		
    );

    /******** */
    //buzznews tranding section display
    $wp_customize->add_setting(
        'buzznews_slider_right_enable',
        array(
            'default'           => true,
            'sanitize_callback' => 'buzznews_sanitize_checkbox',
        )
    );
    $wp_customize->add_control(
		new BuzzNews_Toggle_Control( 
			$wp_customize,
			'buzznews_slider_right_enable',
			array(
				'section'	  => 'buzznews_blog_section',
				'label'		  => esc_html__( 'Disable Slider Right Post', 'buzznews' ),
                'description' => esc_html__( 'Enable/Disable Slider Right Post Section.', 'buzznews' ),
                'priority'    => 8
			)
		)
    );


    /** Select Blog Section Hear */
	$wp_customize->add_setting( 
        'buzznews_slider_right_news_cat_id', 
        array(
			'default' => esc_html__('all','buzznews'),
            'sanitize_callback' => 'buzznews_sanitize_select'
        )
    );
     
    $wp_customize->add_control( 
        'buzznews_slider_right_news_cat_id', 
        array(
			'label'         => esc_html__( 'Select Category', 'buzznews' ),
            'section'       => 'buzznews_blog_section',
            'type'          => 'select',
            'choices'       => buzznews_get_post_categories( ),
            'priority'      => 9,
        )
	); 
	

	//Number of Homepage Blog
	$wp_customize->add_setting(
        'buzznews_slider_right_numberofpost',
        array(
            'default'           => 6,
            'sanitize_callback' => 'absint',
        )
    );
    
    $wp_customize->add_control(
		'buzznews_slider_right_numberofpost',
		array(
			'section'	  => 'buzznews_blog_section',
			'label'		  => esc_html__( 'Tranding News Number of Post', 'buzznews' ),
            'type'        => 'number',
            'priority'      => 10,
		)		
    );

}
add_action( 'customize_register', 'buzznews_frontpage_slider' );