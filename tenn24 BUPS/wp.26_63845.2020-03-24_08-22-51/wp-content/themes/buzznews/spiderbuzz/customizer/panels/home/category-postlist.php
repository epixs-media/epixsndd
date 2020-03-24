<?php
/**
 * select the buzznews
 *
 ** @package Buzznews
 */
function buzznews_frontpage_category_post( $wp_customize ) {
    
    //Products Category
    $wp_customize->add_section( 'buzznews_category_post', array(
        'title'    => esc_html__( 'Category Postlist', 'buzznews' ),
        'priority' => 12,
        'panel'    =>'frontpage_setting'
    ) );

    

    //buzznews tranding section display
    $wp_customize->add_setting(
        'buzznews_frontpage_category_postlist_enable',
        array(
            'default'           => false,
            'sanitize_callback' => 'buzznews_sanitize_checkbox',
        )
    );
    $wp_customize->add_control(
		new BuzzNews_Toggle_Control( 
			$wp_customize,
			'buzznews_frontpage_category_postlist_enable',
			array(
				'section'	  => 'buzznews_category_post',
				'label'		  => esc_html__( 'Disable Category Postlist', 'buzznews' ),
                'priority'    => 1
			)
		)
    );

    
    
	/** Select Blog Section Hear */
    $wp_customize->add_setting(
		'buzznews_frontpage_category_postlist_categoryid', 
		array(
			'default' 			=> buzznews_get_post_categories(),
			'sanitize_callback' => 'buzznews_sanitize_multiple_check',				
		)
	);
	$wp_customize->add_control(
		new Buzznews_MultiCheck_Control(
			$wp_customize,
			'buzznews_frontpage_category_postlist_categoryid',
			array(
				'section'     => 'buzznews_category_post',
				'label'       => esc_html__( 'Select the post category', 'buzznews' ),
                'choices'     => buzznews_get_post_categories( ),
                'priority'      => 2,
			)
		)
	);
	

	//Number of Homepage Blog
	$wp_customize->add_setting(
        'buzznews_frontpage_category_postlist_numberofpost',
        array(
            'default'           => 6,
            'sanitize_callback' => 'absint',
        )
    );
    $wp_customize->add_control(
		'buzznews_frontpage_category_postlist_numberofpost',
		array(
			'section'	  => 'buzznews_category_post',
			'label'		  => esc_html__( 'Category Postlist Number of Post', 'buzznews' ),
            'type'        => 'number',
            'priority'      => 7,
		)		
    );


}
add_action( 'customize_register', 'buzznews_frontpage_category_post' );