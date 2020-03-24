<?php
/**
 * The template for displaying home page.
 * Template Name: Front Page Template
 * @package Buzznews
 */

get_header();
if ( 'posts' == get_option( 'show_on_front' ) ) {
    load_template( get_home_template());
} else {
    buzznews_homepage_widgets();
}
get_footer();