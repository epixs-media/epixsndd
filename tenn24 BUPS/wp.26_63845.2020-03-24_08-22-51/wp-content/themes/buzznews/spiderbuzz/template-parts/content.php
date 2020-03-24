<?php
/**
 * Template part for displaying posts
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
	<article class="buzznews-article post hentry">
		<?php buzznews_entry_top(); ?>
			<h2 class="post-title entry-title">
				<a href="<?php the_permalink(); ?>">
					<?php the_title(); ?>
				</a>
			</h2>
			<div class="post-info">
				<span class="author-info">
					<span class="authoer-images">
						<?php echo wp_kses_post(  buzznews_meta_author_image() ); ?>
					</span>
					<?php echo esc_html__('  Posted By:','buzznews'); ?>
					<span class="vcard" itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person">
						<span class="fn">
							<a class="g-profile" href="">
								<span><?php the_author(); ?></span>
							</a>
						</span>
					</span>
				</span>
				<span class="time-info">
					<i class="fa fa-clock-o"></i>
					<a class="timestamp-link" href="" rel="bookmark" title="permanent link">
						<abbr class="published updated"><?php the_time(get_option('date_format')); ?></abbr>
					</a>
				</span>
				<span class="comment-info">
					<i class="fa fa-comment"></i>
					<?php echo esc_html(  get_comments_number() ); 
					?>
				</span>
			</div>
			<a href="<?php the_permalink(); ?>">
				<div class="post-image fade-in one"><span class="overlay"></span>
					<?php the_post_thumbnail(); ?>
				</div>
			</a>
			<div class="post-body entry-content" >
				<div>
					<div class="snippets">
						<?php the_excerpt(); ?>
					</div>
				</div>
			</div>
			<div class="post-info2">
				<span class="label-info"> 
					<?php 
						echo esc_html__('Categories:','buzznews');
						the_category(); 
					?>
				</span>
				<span class="readmore">
				<a class="readmore2" href="<?php the_permalink(); ?>"><?php echo esc_html__('Continue reading ','buzznews'); ?><i class="fa fa-long-arrow-right"></i></a>
				</span>
			</div>
			
		<?php buzznews_entry_bottom(); ?>
	</article><!-- #post-<?php the_ID(); ?> -->
<?php buzznews_entry_after(); ?>