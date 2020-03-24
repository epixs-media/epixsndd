<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package     BuzzNews
 * @author     spiderbuzz
 * @copyright   Copyright (c) 2019, spiderbuzz
 * @link        http://spiderbuzz.com
 * @since       BuzzNews 1.0.0
 * */

get_header();
?>
	<?php buzznews_before_mainsec(); ?>

	<?php if ( buzznews_page_layout() == 'buzznews-left-sidebar' ) : ?>

	<?php get_sidebar(); ?>

	<?php endif ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php buzznews_content_top(); ?>

		<?php buzznews_content_page_loop(); ?>

		<?php buzznews_content_bottom(); ?>

		</main><!-- #main -->
	</div><!-- #primary -->

	<?php if ( buzznews_page_layout() == 'buzznews-right-sidebar' ) : ?>

	<?php get_sidebar(); ?>

	<?php endif ?>
	
	<?php buzznews_after_mainsec(); ?>
<?php
get_footer();
