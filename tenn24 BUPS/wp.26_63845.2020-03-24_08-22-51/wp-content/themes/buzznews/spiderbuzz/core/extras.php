<?php
/**
 * Custom functions that act independently of the theme templates.
 *
 * @package     BuzzNews
 * @author     spiderbuzz
 * @copyright   Copyright (c) 2019, spiderbuzz
 * @link        http://spiderbuzz.com
 * @since       BuzzNews 1.0.0
 * */


 /*************************************Header****************************** */
/**
 * BuzzNews Header
*/
if ( ! function_exists( 'buzznews_header_section' ) ) {

	/**
	 * BuzzNews Header
	 *
	 * @since 1.0.0
	 * @return void            
	 */
	function buzznews_header_section(){
		$buzznews_header_image = get_header_image();
		
		?>
			<!-- sb-mobile-menu -->
			<div class="sb-mobile-menu">
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<?php buzznews_site_branding(); ?>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="<?php echo esc_attr__(' Toggle navigation','buzznews');  ?>">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<?php
							wp_nav_menu( array(
								'theme_location' => 'menu-1',
								'menu_id'        => 'primary-menu',
								'container'		 =>	 'ul',
								'menu_class'	 =>  'navbar-nav mr-auto'
							) );
						?>
					</div>
				</nav>
			</div>
			<!-- end sb-mobile-menu -->

			
			<header class="sb-header" <?php if(!empty($buzznews_header_image)): ?> style="background:url(<?php echo esc_url($buzznews_header_image); ?>)" <?php endif; ?> >
				<div class="sb-header-logo">
					<div class="container">
						<?php buzznews_site_branding(); ?>
					</div>
				</div>
				<div class="sb-navmenu">
					<div class="container">
						<?php buzznews_menu(); ?>
					</div>
				</div>
			</header>
		<?php
	}
}

add_action( 'buzznews_header', 'buzznews_header_section' );


/**
 * BuzzNews Site Branding
*/
if ( ! function_exists( 'buzznews_site_branding_sec' ) ) {

	/**
	 * BuzzNews Site Branding
	 *
	 * @since 1.0.0
	 * @return void            
	 */
	function buzznews_site_branding_sec(){
		?>
		<strong class="sb-logo">
			<div class="site-branding">
				<?php the_custom_logo(); ?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
				$buzznews_description = get_bloginfo( 'description', 'display' );
				if ( $buzznews_description || is_customize_preview() ) :
					?>
					<p class="site-description"><?php echo esc_html( $buzznews_description ); /* WPCS: xss ok. */ ?></p>
				<?php endif; ?>
			</div><!-- .site-branding -->
		</strong>
		<?php
	}
}

add_action( 'buzznews_site_branding', 'buzznews_site_branding_sec' );



/**
 * BuzzNews Menu
*/
if ( ! function_exists( 'buzznews_menu_settings' ) ) {

	/**
	 * BuzzNews Menu
	 *
	 * @since 1.0.0
	 * @return void            
	 */
	function buzznews_menu_settings(){
		?>
		<div class="sb-navigation">
			<!-- nav menu -->
			<nav class="sidenav" data-sidenav data-sidenav-toggle="#sidenav-toggle">
				<?php
					wp_nav_menu( array(
						'theme_location' => 'menu-1',
						'menu_id'        => 'primary-menu',
						'container'		 =>	 'ul',
						'menu_class'	 =>  'sidenav-menu'
					) );
				?>
			</nav>
			<!-- end nav menu -->


		</div><!-- #site-navigation -->
		<?php
	}
}

add_action( 'buzznews_menu', 'buzznews_menu_settings' );




/*************************************Footer****************************** */

/**
 * BuzzNews Footer 
*/
if ( ! function_exists( 'buzznews_footer_section' ) ) {

	/**
	 * BuzzNews Footer
	 *
	 * @since 1.0.0
	 * @return void            
	 */
	function buzznews_footer_section(){
		?>
		<footer id="colophon" class="site-footer sb-bottom-footer">
			<div class="container">
				<?php buzznews_footer_widgets();//footer widget area. ?>
				<div class="sb-footer-copyright">
					<?php buzznews_footer_copyright();//footer copyright section. ?>
				</div>
			</div>
		</footer><!-- #colophon -->
		<?php
	}
}

add_action( 'buzznews_footer', 'buzznews_footer_section' );


/**
 * BuzzNews Footer Widget 
*/
if ( ! function_exists( 'buzznews_footer_widget_section' ) ) {

	/**
	 * BuzzNews Footer Widget 
	 *
	 * @since 1.0.0
	 * @return void            
	 */
	function buzznews_footer_widget_section(){
		?>
		<?php if ( is_active_sidebar( 'footer-1' ) ||  is_active_sidebar( 'footer-2' )  || is_active_sidebar( 'footer-3' ) ) : ?>
			<div class="buzznews-footer-widget">
				<div class="row">
					<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
						<?php dynamic_sidebar( 'footer-1' ); ?>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
						<?php dynamic_sidebar( 'footer-2' ); ?>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
						<?php dynamic_sidebar( 'footer-3' ); ?>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
						<?php dynamic_sidebar( 'footer-4' ); ?>
					</div>
				</div>
			</div><!-- .site-info -->
		<?php endif; ?>
		<?php
	}
}

add_action( 'buzznews_footer_widgets', 'buzznews_footer_widget_section' );


/**
 * BuzzNews Footer Copyright 
*/
if ( ! function_exists( 'buzznews_footer_copyright_section' ) ) {

	/**
	 * BuzzNews Footer Copyright 
	 *
	 * @since 1.0.0
	 * @return void            
	 */
	function buzznews_footer_copyright_section(){
		?>
		<div class="site-info">
			<a target="_blank" href="<?php echo esc_url( __( 'https://wordpress.org/', 'buzznews' ) ); ?>">
				<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'buzznews' ), 'WordPress' );
				?>
			</a>
			<span class="sep">|</span>
			<a target="_blank" href="<?php echo esc_url('https://spiderbuzz.com','buzznews'); ?>">
				<?php
					/* translators: 1: Theme name, 2: Theme author. */
					printf( esc_html__( 'Theme: %1$s by %2$s.', 'buzznews' ), 'BuzzNews', 'spiderbuzz' );
				?>
			<!-- .site-info -->
			</a>
		</div>

		<?php
	}
}

add_action( 'buzznews_footer_copyright', 'buzznews_footer_copyright_section' );




/*************************************Content****************************** */





/**
 * BuzzNews Pagination
 */
if ( ! function_exists( 'buzznews_number_pagination' ) ) {

	/**
	 * BuzzNews Pagination
	 *
	 * @since 1.0.0
	 * @return void            
	 */
	function buzznews_number_pagination() {
		
		ob_start();
		echo "<div class='buzznews_pagination'>";
		the_posts_pagination( array(
			'mid_size' => 2,
			'prev_text' => __( '<', 'buzznews' ),
			'next_text' => __( '>', 'buzznews' ),
		) );
		echo '</div>';
		$output = ob_get_clean();
		echo apply_filters( 'buzznews_pagination_markup', wp_kses_post( $output ) ); // WPCS: XSS OK.
	
	}
}

add_action( 'buzznews_pagination', 'buzznews_number_pagination' );



/*************************************Sidebar****************************** */

/**
 * BuzzNews before the main content
 * 
 * @since 1.0.0
 * @param int $post_id get the post id 
 * 
 * @return string
 */
if ( ! function_exists( 'buzznews_before_main_wrapper_main_sec' ) ) {

	/**
	 * BuzzNews Sidebar layout
	 *
	 * @since 1.0.0
	 * @return void            
	 */
	function buzznews_before_main_wrapper_main_sec() {
		
		echo '<div class="sb-main-container-wrapper clearfix"><div class="container">';
		
	}
}

add_action( 'buzznews_before_mainsec', 'buzznews_before_main_wrapper_main_sec' );


/**
 * BuzzNews before the main content
 * 
 * @since 1.0.0
 * @param int $post_id get the post id 
 * 
 * @return string
 */
if ( ! function_exists( 'buzznews_before_main_wrapper_sec' ) ) {

	/**
	 * BuzzNews Sidebar layout
	 *
	 * @since 1.0.0
	 * @return void            
	 */
	function buzznews_before_main_wrapper_sec() {
		
		echo '</div></div>';
		
	}
}

add_action( 'buzznews_after_mainsec', 'buzznews_before_main_wrapper_sec' );


/******************************** Homepage ************************** */


/**
 * Sidebar functions
 * 
 * @since 1.0.0
 * @return string
 */
if( ! function_exists( 'buzznews_page_layout' ) ) {
	function buzznews_page_layout(){
		/**
		 * get the value form customizer
		 * 
		 * @since 1.0.0
		 * @return string
		 */
		return  esc_html( get_theme_mod( 'buzznews_post_sidebar_layout_settings','buzznews-right-sidebar' ) );

	}
}



/**
* Buzznews
* author image ,link and name display
*@since 1.0.0
*/

if( ! function_exists('buzznews_meta_authorlink') ) {
	function buzznews_meta_authorlink(){
		return '<div class="post-author"><a rel="bookmark" href="'. esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) .'">'. buzznews_meta_author_image()  .'</a></div>';
	}
}
if( ! function_exists('buzznews_meta_author_image') ) {
	function buzznews_meta_author_image(){
		return get_avatar( get_the_author_meta( 'ID' ), 25, null, null, array( 'class' => 'img-circle' ) );
	}
}


/**
 * Buzznews get the category
 * 
 * @since 1.0.0
 */
if( ! function_exists( 'buzznews_get_post_categories' ) ) {
	/**
	 * Get Post Category
	 *
	 * @return array
	 * @since 1.0.0
	 */
	function buzznews_get_post_categories(){
		
		
		$all_categories = get_categories( );
		
		//default value
		$categories['all'] = 'all';  
		
		foreach( $all_categories as $category ){
			$categories[$category->term_id] = $category->name;    
		}
		
		return $categories;
	}

}


/**
 * BuzzNews main slider options
 * 
 * @since 1.0.0
 * @param int $post_id get the post id 
 * 
 * @return string
 */
if ( ! function_exists( 'buzznews_main_slider_section' ) ) {

	/**
	 * BuzzNews Main sldier section
	 *
	 * @since 1.0.0
	 * @return void            
	 */
	function buzznews_main_slider_section() {
		/**
		 * get the all customizer control data
		 * 
		 * @since 1.0.0
		 */
		$buzznews_homepage_slider = get_theme_mod('buzznews_slider_slider_section_enable',true);
		$buzznews_slider_tranding_enable = get_theme_mod('buzznews_slider_tranding_enable',true);
		$buzznews_slider_right_enable = get_theme_mod('buzznews_slider_right_enable',true);
		
		

		/**
		 * Homepage Sldier Section
		 * 
		 * @since 1.0.0
		 */
		if( $buzznews_homepage_slider != true ): return; endif;


		//layout settings
		$buzznews_slider_class = 'col-lg-6 col-md-8 col-sm-12 col-12';
		if( $buzznews_slider_tranding_enable == false || $buzznews_slider_right_enable  == false ){
			if( $buzznews_slider_tranding_enable == false && $buzznews_slider_right_enable  == false ){
				$buzznews_slider_class = 'col-lg-12 col-md-12 col-sm-12 col-12';
			}else{
				$buzznews_slider_class = 'col-lg-9 col-md-9 col-sm-12 col-12';
			}
		}else{
			$buzznews_slider_class = 'col-lg-6 col-md-8 col-sm-12 col-12';
		}
		?>
		<!------ Latest News full Section -------->
		<div class="buzznews-newsfeed buzznews-slider-section">
			<div class="buzznews-newsfeed-outer-wrapper">
				<div class="container">
					<div class="buzznews-newsfeed-inner-wrapper">
						<div class="row">

							<?php if( $buzznews_slider_tranding_enable == true ): ?>
								<?php 
								/**
								 * Buzznews Tranding news
								 * @since 1.0.0
								 */
								$buzznews_slider_latest_title = esc_html( get_theme_mod('buzznews_blog_header_title',esc_html__('Latest News','buzznews')) );
								$buzznews_count = get_theme_mod('buzznews_tranding_news_numberofpost',10);
								$buzznews_category_post_id = get_theme_mod('buzznews_tranding_news_cat_id');

								?>
								<div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
									<div class="vertical-slider">
										<?php if( $buzznews_slider_latest_title ){ echo '<h5>'.esc_html( $buzznews_slider_latest_title ).'</h5>'; } ?>
										<div class="slider  ">
											<div class="buzznews-vertical">
												<?php
												/**
												 * latest post args
												 * 
												 * @since 1.0.0
												 */
												$args = array('post_type'=>'post','posts_per_page'=>$buzznews_count,'cat'=>$buzznews_category_post_id);
												$query = new WP_Query( $args ); 
												
												while($query->have_posts()): $query->the_post(); 
												?>
												<div>
													<div class="item">
														<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
														<div class="image">
															<?php echo wp_kses_post( buzznews_meta_authorlink(get_the_ID()) ); ?>
															<?php get_buzznews_post_timedate(); ?>
														</div>
													</div>
												</div>
												<?php endwhile; wp_reset_postdata(); ?>
											</div>
										</div>
									</div>
								</div>
							<?php endif; ?>


							<div class="<?php echo esc_attr( $buzznews_slider_class ); ?>">
								<div class="middle-slider buzznews-main-slider-wrap main-slider-sec	">
									<div class=" buzznews-main-slider">
										<?php
											/**
											 * latest post args
											 * 
											 * @since 1.0.0
											 */
											$buzznews_slider_count = get_theme_mod('buzznews_main_slider_numberofpost',7);
											$buzznews_slider_category_post_id = get_theme_mod('buzznews_main_slider_cat_id','all');

											//Conctions for the post display
											$post_list = array();
											$first_post = array();
											$count = 0 ;
											$buzznews_post_is_exclusive  = get_theme_mod('buzznews_homepage_slider_post_exclusive',true);

											
											//Start While Loop
											$args = array('post_type'=>'post','posts_per_page'=>$buzznews_slider_count,'cat'=>$buzznews_slider_category_post_id);
            								$q = new WP_Query( $args ); 
											while($q->have_posts()): $q->the_post(); 
												$post_list[] = $q->post;
												if( $count < 4 and has_post_thumbnail( $q->post ) ):
													if( $buzznews_post_is_exclusive ):
														$first_post[] = array_shift($post_list);
													elseif( has_post_thumbnail( $q->post ) ):
														$first_post[] = $q->post;
													endif;
												endif;
												$count++;//increment the file
											endwhile; // End of the loop.
											// wp_reset_postdata();

											foreach ( $first_post as $post_item ) :
											
										?>
										<div class="item">
											<?php echo get_the_post_thumbnail($post_item->ID, 'buzznews-main-slider'); ?>
											<?php buzznews_post_format_icon();//#post format  ?>
											<div class="middle-details">
												<h3>
													<a href="<?php echo esc_url( get_the_permalink($post_item->ID) ); ?>"><?php echo get_the_title($post_item->ID); ?></a>
												</h3>
												<?php 
													echo get_the_excerpt($post_item);
												?>
												<div class="image">
													<?php echo wp_kses_post( buzznews_meta_authorlink($post_item->ID) ); ?>
													<?php get_buzznews_post_timedate($post_item->ID); ?>
												</div>
											</div>
										</div>
										<?php endforeach; ?>
									</div>
								</div>
								
								<div class="middle-bottom buzznews-main-slider-wrap">
									<div class="row">
										<?php
											/**
											 * latest post args
											 * 
											 * @since 1.0.0
											 */
											foreach( $post_list as $post_item):
										?>
										<div class="col-lg-4 col-md-4 ">
											<div class="middle-bottom-wrapper">
												<div class="middle-bottom-wrapper-image">
													<?php echo get_the_post_thumbnail($post_item->ID,'buzznews-grid'); ?>
												</div>
												<?php buzznews_post_format_icon($post_item->ID);//#post format  ?>
												<div class="buzznews-article-content">
													<div class="desert-eating">
														<a href="<?php echo esc_url( get_the_permalink($post_item->ID) ); ?>"><?php echo get_the_title($post_item->ID); ?></a>
														
													</div>
													<?php buzznews_post_format_icon($post_item->ID);//#post format  ?>
													<div class="image">
														<?php echo wp_kses_post( buzznews_meta_authorlink($post_item->ID) ); ?>
														<?php get_buzznews_post_timedate($post_item->ID); ?>
													</div>
												</div>
											</div>
										</div>
										<?php endforeach; wp_reset_postdata(); ?>
									</div>	
								</div>
							</div>

							<?php if( $buzznews_slider_right_enable == true ): ?>
							<div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
								<div class="right buzznews-slider-right">
										<?php
											/**
											 * latest post args
											 * 
											 * @since 1.0.0
											 */
											$buzznews_post_count = 1 ;
											$buzznews_slider_right_count = get_theme_mod('buzznews_slider_right_numberofpost',6);
											$buzznews_slider_right_category_post_id = get_theme_mod('buzznews_slider_right_news_cat_id');

											$args = array('post_type'=>'post','posts_per_page'=>$buzznews_slider_right_count,'cat'=>$buzznews_slider_right_category_post_id);
											$query = new WP_Query( $args ); 
											
											while( $query->have_posts() ): $query->the_post(); 

											/**
											 * check the post
											 * @since 1.0.0
											 */
											if($buzznews_post_count == 1){
												?>
													<div class="right-top">
														<div class="right-bottom-image">
															<?php the_post_thumbnail(); ?>
														</div>
														<div class="image-details">
															<?php the_title( '<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a>' );  ?>
															<div class="image">
																<?php echo wp_kses_post( buzznews_meta_authorlink(get_the_ID()) ); ?>
																<?php get_buzznews_post_timedate(); ?>
															</div>
														</div>
													</div>
												<?php
											}else{
												?>
												<div class="buzznews-btn-check ">
													<div class="row">
														<?php if( has_post_thumbnail() ): ?>
															<div class="col-lg-5 col-md-5 col-sm-4 col-4 ">
																<div class="right-bottom-image buzznews-object-fit-slider">
																	<?php the_post_thumbnail('buzznews-postlist'); ?>
																</div>
															</div>
															<div class="col-lg-7 col-md-7 col-sm-8 col-8 buzznews-margin-none">
														<?php else: ?>
															<div class="col-lg-12 col-md-12 col-sm-12 col-12 ">
														<?php endif; ?>
																<div class="image-details">
																	<?php the_title( '<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a>' );  ?>
																	<div class="image">
																		<?php echo wp_kses_post( buzznews_meta_authorlink(get_the_ID()) ); ?>
																		<?php get_buzznews_post_timedate(); ?>
																	</div>
																</div>	
															</div>
														</div>	
													</div>
												<?php
											}
										?>
										
										<?php $buzznews_post_count++; endwhile; wp_reset_postdata(); ?>
									</div>
									
							</div>
							<?php endif; ?>

						</div>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
}

add_action( 'buzznews_main_slider', 'buzznews_main_slider_section' );



/**
 * BuzzNews Featured Grid Section
 * 
 * @since 1.0.0
 * @param int $post_id get the post id 
 * 
 * @return string
 */
if ( ! function_exists( 'buzznews_featured_section' ) ) {

	/**
	 * BuzzNews Main sldier section
	 *
	 * @since 1.0.0
	 * @return void            
	 */
	function buzznews_featured_section() {
		/**
		 * get the all customizer control data
		 * 
		 * @since 1.0.0
		 */
		if( get_theme_mod('buzznews_frontpage_featured_enable',true) != true ): return; endif;
		
		$buzznews_featured_title = esc_html( get_theme_mod('buzznews_frontpage_featured_post_header_title',esc_html__('Latest News','buzznews')) );
		?>
		<!------ Latest News full Section -------->
		<div class="buzznews-newsfeed buzznews_featured_section">
			<div class="buzznews-newsfeed-outer-wrapper">
				<div class="container">
					<div class="buzznews-newsfeed-inner-wrapper">

						<?php if( $buzznews_featured_title != '' ): ?>
							<div class="buzznews-header-title">
								<h5><?php echo esc_html( $buzznews_featured_title ); ?></h5>
							</div>
						<?php endif; ?>
						
						<div class="middle-bottom">
							<div class="row">
							<?php
									/**
									 * latest post args buzznews_frontpage_featured_enable
									 * 
									 * @since 1.0.0
									 */
									$buzznews_slider_count =  get_theme_mod('buzznews_frontpage_featured_numberofpost',4);
									$buzznews_slider_category_post_id = get_theme_mod('buzznews_frontpage_featured_post_cat_id');

									$args = array('post_type'=>'post','posts_per_page'=>$buzznews_slider_count,'cat'=>$buzznews_slider_category_post_id);
									$query = new WP_Query( $args ); 
									
									while($query->have_posts()): $query->the_post(); 
								?>
								<div class="col-lg-3 col-md-6 col-sm-6 col-12 buzznews-matchheight-article">
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
								<?php endwhile; wp_reset_postdata(); ?>
							</div>	
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
}

add_action( 'buzznews_homepage_featured', 'buzznews_featured_section' );


/**
 * BuzzNews main slider options
 * 
 * @since 1.0.0
 * @param int $post_id get the post id 
 * 
 * @return string
 */
if ( ! function_exists( 'buzznews_tranding_news' ) ) {

	/**
	 * BuzzNews Main sldier section
	 *
	 * @since 1.0.0
	 * @return void            
	 */
	function buzznews_tranding_news() {
		/**
		 * get the all customizer control data
		 * 
		 * @since 1.0.0
		 */
		 if( get_theme_mod('buzznews_frontpage_before_footer_post_enable',true) != true ): return; endif;

		$buzznews_before_footer_post_title = esc_html( get_theme_mod('buzznews_frontpage_before_footer_post_title',esc_html__('Latest News','buzznews')) );
		?>
		<!------ Latest News full Section -------->
		<div class="buzznews-newsfeed buzznews_tranding_news">
			<div class="buzznews-newsfeed-outer-wrapper">
				<div class="container">
					<div class="buzznews-newsfeed-inner-wrapper">
						
						<?php if( $buzznews_before_footer_post_title != '' ): ?>
							<div class="buzznews-header-title">
								<h5><?php echo esc_html( $buzznews_before_footer_post_title ); ?></h5>
							</div>
						<?php endif; ?>

						<div class="middle-bottom">
							<div class="row">
							<?php
									/**
									 * latest post args
									 * 
									 * @since 1.0.0
									 */
									$buzznews_slider_count = get_theme_mod('buzznews_frontpage_before_footer_numberofpost',8);
									$buzznews_slider_category_post_id = get_theme_mod('buzznews_frontpage_before_footer_post_catid');

									$args = array('post_type'=>'post','posts_per_page'=>$buzznews_slider_count,'cat'=>$buzznews_slider_category_post_id);
									$query = new WP_Query( $args ); 
									
									while($query->have_posts()): $query->the_post(); 
								?>
								<div class="col-lg-3 col-md-6 col-sm-6 col-12">
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
								<?php endwhile; wp_reset_postdata(); ?>
							</div>	
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
}

add_action( 'buzznews_tranding', 'buzznews_tranding_news' );


/**
 * BuzzNews Total number of post
 * 
 * @since 1.0.0
 * @param int $total get the total number of post
 * 
 * @return string
 */
if ( ! function_exists( 'buzznews_get_total_posts' ) ) {
	function buzznews_get_total_posts() { 
		$total = wp_count_posts()->publish;
		return $total;
	} 
}




/**
 * BuzzNews category postlist
 * 
 * @since 1.0.0
 * 
 * @return string
 */
if ( ! function_exists( 'buzznews_category_postlist_section' ) ) {

	/**
	 * BuzzNews Main sldier section
	 *
	 * @since 1.0.0
	 * @return void            
	 */
	function buzznews_category_postlist_section() {
		/**
		 * get the all customizer control data
		 * 
		 * @since 1.0.0
		 */
		if( get_theme_mod('buzznews_frontpage_category_postlist_enable',false) != true ): return; endif;
		
		$categoryid = get_theme_mod('buzznews_frontpage_category_postlist_categoryid',buzznews_get_post_categories());
		$numberofpost = get_theme_mod('buzznews_frontpage_category_postlist_numberofpost',6);
		

		?>
		<!-- category post list -->
		<div class="buzznews-fullslider">
			<div class="buzznews-fullslider-outer-wrapper">
				<div class="container">
					<div class="buzznews-fullslider-inner-wrapper">
						<div  class="buzzmag-grid-slider" >
							<div class="buzznews-fullslider-slider">

								<?php foreach( $categoryid as $postcategory ): ?>
									<div class="">
										<div class="buzznews-fullslider-single-section">
											<div class="heading">
											<?php if( !empty($postcategory) ): ?><h5><?php echo esc_html( get_cat_name($postcategory) ); ?></h5><?php endif; ?>
											</div>
											
											<div class="buzznews-fullslider-details">
												<ul>
												<?php
														/**
														 * latest post args
														 * 
														 * @since 1.0.0
														 */
														$post_count = 1;
														$args = array('post_type'=>'post','posts_per_page'=>$numberofpost,'cat'=>$postcategory);
														$query = new WP_Query( $args ); 
														
														while($query->have_posts()): $query->the_post(); 
													?>
													<li>
														<a href="<?php the_permalink(); ?>">
															<?php
																//the post thumbnail 
																if( $post_count == 1 ){
																	echo '<div class="buzznews-fullslider-image">';
																		the_post_thumbnail('buzznews-postlist');
																	echo '</div>';
																}
															?>
															<?php the_title(); ?>
														</a>
													</li>
													<?php $post_count++; endwhile; wp_reset_postdata(); ?>
												</ul>
											</div>
										</div>
									</div>
								<?php endforeach; ?>

							</div>
						</div>
					</div>	
				</div>
			</div>
		</div>

		<!-- end category post list -->
		<?php
	}
}

add_action( 'buzznews_home_category_postlist', 'buzznews_category_postlist_section' );



/**
 * BuzzNews buzznews authoer info
 * 
 * @since 1.0.0
 * 
 * @return string
 */
function buzznews_author_info_box( $content ) {
 
	global $post;
	 
	// Detect if it is a single post with a post author
	if ( is_single() && isset( $post->post_author ) ) {
	 
	// Get author's display name 
	$display_name = get_the_author_meta( 'display_name', $post->post_author );
	 
	// If display name is not available then use nickname as display name
	if ( empty( $display_name ) )
	$display_name = get_the_author_meta( 'nickname', $post->post_author );
	 
	// Get author's biographical information or description
	$user_description = get_the_author_meta( 'user_description', $post->post_author );
	 
	// Get author's website URL 
	$user_website = get_the_author_meta('url', $post->post_author);
	 
	// Get link to the author archive page
	$user_posts = get_author_posts_url( get_the_author_meta( 'ID' , $post->post_author));
	  
	if ( ! empty( $display_name ) )
	 
	$author_details = '<p class="author_name">' . esc_html( $display_name ). '</p>';
	 
	if ( ! empty( $user_description ) )
	// Author avatar and bio
	 
	$author_details .= '<p class="author_details">' . get_avatar( get_the_author_meta('user_email') , 90 ) . nl2br( $user_description ). '</p>';
	 
	$author_details .= '<p class="author_links"><a href="'. esc_html( $user_posts ).'">'.esc_html__('View all posts by','buzznews'). esc_html( $display_name ) . '</a>';  
	 
	// Check if author has a website in their profile
	if ( ! empty( $user_website ) ) {
	 
	// Display author website link
	$author_details .= ' | <a href="' . esc_url( $user_website ) .'" target="_blank" rel="nofollow">'.esc_html__('Website','buzznews').'</a></p>';
	 
	} else { 
	// if there is no author website then just close the paragraph
	$author_details .= '</p>';
	}
	 
	// Pass all this info to post content  
	$content = $content . '<footer class="author_bio_section" >' . wp_kses_post( $author_details ) . '</footer>';
	}
	return $content;
}
	 
// Add our function to the post content filter 
add_action( 'the_content', 'buzznews_author_info_box' );
