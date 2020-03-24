<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package     buzznews
 * @author      Spiderbuzz
 * @copyright   Copyright (c) 2019, Spiderbuzz
 * @link        http://spiderbuzz.com
 * @since       buzznews 1.0.0
 * */

?>
<?php buzznews_entry_before(); ?>
	<article itemtype="https://schema.org/CreativeWork" itemscope="itemscope"  id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<?php buzznews_entry_top(); ?>

			<header class="entry-header">
				<?php
					the_title( '<h1 class="entry-title">', '</h1>' );
				if ( 'post' === get_post_type() ) :
					?>
					<div class="entry-meta">
						<?php
						buzznews_posted_on();
						buzznews_posted_by();
						?>
					</div><!-- .entry-meta -->
				<?php endif; ?>
			</header><!-- .entry-header -->

			<?php buzznews_post_thumbnail(); ?>

			<div class="entry-content">
				<?php buzznews_entry_content_before(); ?>
				<?php
					the_content( sprintf(
						wp_kses(
							/* translators: %s: Name of current post. Only visible to screen readers */
							__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'buzznews' ),
							array(
								'span' => array(
									'class' => array(),
								),
							)
						),
						get_the_title()
					) );
				
				?>
				<?php buzznews_entry_content_after(); ?>

				<?php
				wp_link_pages( array(
					'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'buzznews' ),
					'after'  => '</div>',
				) );
				?>

			</div><!-- .entry-content -->

			<footer class="entry-footer">
				<?php buzznews_entry_footer(); ?>
			</footer><!-- .entry-footer -->

			<?php 
				//next and previes
				//next and prev single page section
				the_post_navigation(array(
					'prev_text'                  => wp_kses_post( '<span>Previous article</span> %title','buzznews' ),
					'next_text'                  => wp_kses_post( '<span>Next article</span> %title','buzznews' ),
				));
			?>
		<?php buzznews_entry_bottom(); ?>
	</article><!-- #post-<?php the_ID(); ?> -->
<?php buzznews_entry_after(); ?>