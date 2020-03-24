<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package     BuzzNews
 * @author     spiderbuzz
 * @copyright   Copyright (c) 2019, spiderbuzz
 * @link        http://spiderbuzz.com
 * @since       BuzzNews 1.0.0
 * */

get_header(); ?>

<?php buzznews_main_slider(); ?>
	
<?php buzznews_homepage_featured(); ?>

<?php buzznews_before_mainsec(); ?>

<?php if ( buzznews_page_layout() == 'buzznews-left-sidebar' ) : ?>

	<?php get_sidebar(); ?>

<?php endif ?>

	<div id="primary" class="content-area" >

		<?php buzznews_content_top(); ?>

		<?php buzznews_content_loop(); ?>

		<?php 
			the_posts_pagination( array(
				'mid_size' => 2,
				'prev_text' => __( '<', 'buzznews' ),
				'next_text' => __( '>', 'buzznews' ),
			) );
		?>

		<?php buzznews_content_bottom(); ?>

	</div><!-- #primary -->

<?php if ( buzznews_page_layout() == 'buzznews-right-sidebar' ) : ?>

	<?php get_sidebar(); ?>

<?php endif ?>
<?php buzznews_after_mainsec(); ?>

<?php get_footer(); ?>