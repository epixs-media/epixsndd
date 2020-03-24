<?php
/**
 * Register Custom Controls
 * 
 * @since 1.0.0
*/
function buzznews_controls( $wp_customize ){

    
    //Customizer Settings
    load_template( BUZZNEWS_THEME_DIR . 'spiderbuzz/customizer/custom-controls/toggle/class-toggle-control.php' );
    load_template( BUZZNEWS_THEME_DIR . 'spiderbuzz/customizer/custom-controls/multicheck/class-multicheck-control.php' );
    
    $wp_customize->register_control_type( 'BuzzNews_MultiCheck_Control' );
    $wp_customize->register_control_type( 'BuzzNews_Toggle_Control' );

}
add_action( 'customize_register', 'buzznews_controls' );