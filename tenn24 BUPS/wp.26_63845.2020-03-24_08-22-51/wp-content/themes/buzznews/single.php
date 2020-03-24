<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
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
				<?php buzznews_content_top(); ?>

				<?php buzznews_content_loop(); ?>

				<?php buzznews_content_bottom(); ?>
			</div><!-- #primary -->

			<?php  if ( buzznews_page_layout() == 'buzznews-right-sidebar' ) : ?>

			<?php get_sidebar(); ?>

			<?php endif ?>
	<?php buzznews_after_mainsec(); ?>
<?php
get_footer();
