<?php
/**
 * BuzzNews Loop
 *
 * @package     BuzzNews
 * @author     spiderbuzz
 * @copyright   Copyright (c) 2019, spiderbuzz
 * @link        http://spiderbuzz.com
 * @since       BuzzNews 1.0.0
 * */


if ( ! class_exists( 'BuzzNews_Loop' ) ) :

	/**
	 * BuzzNews_Loop
	 *
	 * @since 1.0.0
	 */
	class BuzzNews_Loop {

		/**
		 * Instance
		 *
		 * @since 1.0.0
		 *
		 * @access private
		 * @var object Class object.
		 */
		private static $instance;

		/**
		 * Initiator
		 *
		 * @since 1.0.0
		 *
		 * @return object initialized object of class.
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self;
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			// Loop.
			add_action( 'buzznews_content_loop', array( $this, 'loop_markup' ) );
			add_action( 'buzznews_content_page_loop', array( $this, 'loop_markup_page' ) );

			// Template Parts.
			add_action( 'buzznews_page_template_parts_content', array( $this, 'template_parts_page' ) );
			add_action( 'buzznews_page_template_parts_content', array( $this, 'template_parts_comments' ), 15 );
			add_action( 'buzznews_template_parts_content', array( $this, 'template_parts_post' ) );
			add_action( 'buzznews_template_parts_content', array( $this, 'template_parts_search' ) );
			add_action( 'buzznews_template_parts_content', array( $this, 'template_parts_default' ) );
			add_action( 'buzznews_template_parts_content', array( $this, 'template_parts_comments' ), 15 );

			// Template None.
			add_action( 'buzznews_template_parts_content_none', array( $this, 'template_parts_none' ) );
			add_action( 'buzznews_template_parts_content_none', array( $this, 'template_parts_404' ) );
			add_action( 'buzznews_404_content_template', array( $this, 'template_parts_404' ) );

			// Content top and bottom.
			add_action( 'buzznews_template_parts_content_top', array( $this, 'template_parts_content_top' ) );
			add_action( 'buzznews_template_parts_content_bottom', array( $this, 'template_parts_content_bottom' ) );

			// Add closing and ending div 'buzznews-row'.
			add_action( 'buzznews_template_parts_content_top', array( $this, 'buzznews_templat_part_wrap_open' ), 25 );
			add_action( 'buzznews_template_parts_content_bottom', array( $this, 'buzznews_templat_part_wrap_close' ), 5 );
		
			//buzznews_breadcrumb_trail
			add_action( 'buzznews_breadcrumb_trail', array( $this, 'buzznews_breadcrumb_trail_sec' ), 5 );
		
		}

		/**
		 * Template part none
		 *
		 * @since 1.0.0
		 * @return void
		 */
		public function template_parts_none() {
			if ( is_archive() || is_search() ) {
				get_template_part( 'spiderbuzz/template-parts/content', 'none' );
			}
		}

		/**
		 * Template part 404
		 *
		 * @since 1.0.0
		 * @return void
		 */
		public function template_parts_404() {
			if ( is_404() ) {
				get_template_part( 'spiderbuzz/template-parts/content', '404' );
			}
		}

		/**
		 * Template part page
		 *
		 * @since 1.0.0
		 * @return void
		 */
		public function template_parts_page() {
			get_template_part( 'spiderbuzz/template-parts/content', 'page' );
		}

		/**
		 * Template part single
		 *
		 * @since 1.0.0
		 * @return void
		 */
		public function template_parts_post() {
			if ( is_single() ) {
				get_template_part( 'spiderbuzz/template-parts/content', 'single' );
			}
		}

		/**
		 * Breadcrumb Section
		 * @since 1.0.0
		 */
		public function buzznews_breadcrumb_trail_sec() {
			if(get_theme_mod('buzznews_breadcrumb_enable',true))
				get_template_part( 'spiderbuzz/template-parts/breadcrumb/breadcrumb', 'trail' );
		}



		/**
		 * Template part search
		 *
		 * @since 1.0.0
		 * @return void
		 */
		public function template_parts_search() {
			if ( is_search() ) {
				get_template_part( 'spiderbuzz/template-parts/content', 'search' );
			}
		}

		/**
		 * Template part comments
		 *
		 * @since 1.0.0
		 * @return void
		 */
		public function template_parts_comments() {
			if ( is_single() || is_page() ) {
				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;
			}
		}

		/**
		 * Template part default
		 *
		 * @since 1.0.0
		 * @return void
		 */
		public function template_parts_default() {
			if ( ! is_page() && ! is_single() && ! is_search() && ! is_404() ) {
				/*
				 * Include the Post-Format-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
				 */
				get_template_part( 'spiderbuzz/template-parts/content', get_post_format() );
			}
		}

		/**
		 * Loop Markup for content page
		 *
		 * @since 1.0.0
		 */
		public function loop_markup_page() {
			$this->loop_markup( true );
		}

		/**
		 * Template part loop
		 *
		 * @param  boolean $is_page Loop outputs different content action for content page and default content.
		 *         if is_page is set to true - do_action( 'buzznews_page_template_parts_content' ); is added
		 *         if is_page is false - do_action( 'buzznews_template_parts_content' ); is added.
		 * @since 1.0.0
		 * @return void
		 */
		public function loop_markup( $is_page = false ) {
			?>
			<main id="main" class="site-main">
				<div class="buzznews-trendingnews">
					<div class="buzznews-trendingnews-outer-wrapper">
						<div class="buzznews-trendingnews-inner-wrapper">
							<div class="buzznews-trendingnews-left">
								<?php if ( have_posts() ) : ?>

									<?php do_action( 'buzznews_template_parts_content_top' ); ?>

									<?php
									while ( have_posts() ) :
										the_post();

										if ( is_singular() ) :
											get_template_part( 'spiderbuzz/template-parts/content', 'single' );
											
											//is single page then
											if( is_single() ){
												$this->buzznews_related_post();
											}

											//is comment part
											$this->template_parts_comments();
										else:
											if ( true == $is_page ) {
												do_action( 'buzznews_page_template_parts_content' );
											} else {
												do_action( 'buzznews_template_parts_content' );
											}
										endif;

										?>

									<?php endwhile; ?>

									<?php 
										if(get_theme_mod('buzznews_infinite_scrolling')){
											?>
												<div class="buzznews-infinite-scrolling-post"></div>
											<?php
										}
									?>
									

									<?php do_action( 'buzznews_template_parts_content_bottom' ); ?>

								<?php else : ?>

									<?php do_action( 'buzznews_template_parts_content_none' ); ?>

								<?php endif; ?>
							</div>
						</div>
					</div>
				</div>
			</main><!-- #main -->
			<?php
		}

		/**
		 * Display Related Post
		 *
		 * @since 1.0.0
		 * @return void
		 */
		public function buzznews_related_post() {

			/**
			 * Get the category id
			 * @since 1.0.0
			 */
			$post_id = get_the_ID();
			$cat_ids = array();
			$categories = get_the_category( $post_id );

			if(!empty($categories) && is_wp_error($categories)):
				foreach ($categories as $category):
					array_push($cat_ids, $category->term_id);
				endforeach;
			endif;
		
			$current_post_type = get_post_type($post_id);
			$query_args = array( 
		
				'category__in'   => $cat_ids,
				'post_type'      => $current_post_type,
				'post_not_in'    => array($post_id),
				'posts_per_page'  => '6'
			 );
		
			$related_cats_post = new WP_Query( $query_args );
			?>
			<!------ Latest News full Section -------->
			<div class="buzznews-newsfeed buzznews-related-post">
				<div class="buzznews-newsfeed-outer-wrapper">
					<div class="buzznews-newsfeed-inner-wrapper">
						<div class="buzznews-header-title">
							<h5><?php echo esc_html__('RELATED ARTICLES','buzznews'); ?></h5>
						</div>
						<div class="middle-bottom">
							<div class="row">
								<?php 
									if($related_cats_post->have_posts()):
										while($related_cats_post->have_posts()): $related_cats_post->the_post();
								?>
									<div class="col-lg-4 col-md-4 buzznews-matchheight-article">
										<div class="middle-bottom-wrapper">
											<div class="middle-bottom-wrapper-image">
												<?php the_post_thumbnail('buzznews-postlist'); ?>
											</div>
											<?php buzznews_post_format_icon();//#post format  ?>
											<div class="buzznews-article-content">
												<div class="desert-eating">
													<?php the_title( '<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a>' );  ?>
												</div>
												<div class="image">
													<?php echo wp_kses_post( buzznews_meta_authorlink(get_the_ID()) ); ?>
													<?php get_buzznews_post_timedate(); ?>
												</div>
											</div>
										</div>
									</div>
									<?php endwhile;

								// Restore original Post Data
								wp_reset_postdata();
								endif;

							?>
							</div>
						</div>
					</div>
				</div>
			</div>
			<?php
		}


		/**
		 * Template part content top
		 *
		 * @since 1.0.0
		 * @return void
		 */
		public function template_parts_content_top() {
			if ( is_archive() ) {
				buzznews_content_while_before();
			}
		}

		/**
		 * Template part content bottom
		 *
		 * @since 1.0.0
		 * @return void
		 */
		public function template_parts_content_bottom() {
			if ( is_archive() ) {
				buzznews_content_while_after();
			}
		}

		/**
		 * Add wrapper div 'buzznews-row' for BuzzNews template part.
		 *
		 * @since  1.0.0
		 * @return void
		 */
		public function buzznews_templat_part_wrap_open() {
			if ( is_archive() || is_search() || is_home() ) {
				echo '<div class="buzznews-row">';
			}
		}

		/**
		 * Add closing wrapper div for 'buzznews-row' after BuzzNews template part.
		 *
		 * @since  1.0.0
		 * @return void
		 */
		public function buzznews_templat_part_wrap_close() {
			if ( is_archive() || is_search() || is_home() ) {
				echo '</div>';
			}
		}

	}

	/**
	 * Initialize class object with 'get_instance()' method
	 */
	BuzzNews_Loop::get_instance();

endif;
