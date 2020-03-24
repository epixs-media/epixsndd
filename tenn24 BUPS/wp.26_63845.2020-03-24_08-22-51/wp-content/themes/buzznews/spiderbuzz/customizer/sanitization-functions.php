<?php
/**
 * Sanitization Functions
 * 
 * @package     BuzzNews
 * @author     spiderbuzz
 * @copyright   Copyright (c) 2019, spiderbuzz
 * @link        http://spiderbuzz.com
 * @since       BuzzNews 1.0.0
 * */
 

/**
 * Sanitize callback for checkbox
 *  @since 1.0.0
*/
function buzznews_sanitize_checkbox( $checked ){
    // Boolean check.
    return ( ( isset( $checked ) && true == $checked ) ? true : false );
}


 //select sanitization function
function buzznews_sanitize_select( $input, $setting ){
	
	//input must be a slug: lowercase alphanumeric characters, dashes and underscores are allowed only
	$input = sanitize_key($input);

	//get the list of possible select options 
	$choices = $setting->manager->get_control( $setting->id )->choices;
						
	//return input if valid or return default option
	return ( array_key_exists( $input, $choices ) ? $input : $setting->default );                
		
}


function buzznews_sanitize_multiple_check( $value ) {                        
    $value = ( ! is_array( $value ) ) ? explode( ',', $value ) : $value;
    return ( ! empty( $value ) ) ? array_map( 'sanitize_text_field', $value ) : array();    
}
