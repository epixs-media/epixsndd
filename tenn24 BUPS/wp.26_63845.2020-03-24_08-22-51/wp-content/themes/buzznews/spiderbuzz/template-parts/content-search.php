<?php
/**
 * Template part for displaying results in search pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package     BuzzNews
 * @author     spiderbuzz
 * @copyright   Copyright (c) 2019, spiderbuzz
 * @link        http://spiderbuzz.com
 * @since       BuzzNews 1.0.0
 * */

?>
<?php buzznews_entry_before(); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php buzznews_entry_top(); ?>
	<header class="entry-header">
		<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>

		<?php if ( 'post' === get_post_type() ) : ?>
			<div class="entry-meta">
				<?php
				buzznews_posted_on();
				buzznews_posted_by();
				?>
			</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->

	<?php buzznews_post_thumbnail(); ?>

	<div class="entry-summary">
		<?php buzznews_entry_content_before(); ?>
		<?php the_excerpt(); ?>
		<?php buzznews_entry_content_after(); ?>
	</div><!-- .entry-summary -->

	<footer class="entry-footer">
		<?php buzznews_entry_footer(); ?>
	</footer><!-- .entry-footer -->
	<?php buzznews_entry_bottom(); ?>
</article><!-- #post-<?php the_ID(); ?> -->
<?php buzznews_entry_after(); ?>