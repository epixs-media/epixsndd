<?php
/**
 * Functions for BuzzNews Theme.
 *
 * @package     BuzzNews
 * @author     spiderbuzz
 * @copyright   Copyright (c) 2019, spiderbuzz
 * @link        http://spiderbuzz.com
 * @since       BuzzNews 1.0.0
 * */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}



/**
 * Archive Page Title
 */
if ( ! function_exists( 'buzznews_archive_page_info' ) ) {

	/**
	 * Wrapper function for the_title()
	 *
	 * Displays title only if the page title bar is disabled.
	 */
	function buzznews_archive_page_info() {

		if ( apply_filters( 'buzznews_the_title_enabled', true ) ) {

			// Author.
			if ( is_author() ) { ?>

				<section class="buzznews-author-box buzznews-archive-description row">
					<div class="buzznews-author-bio col-md-4 text-right">
						<h1 class='page-title buzznews-archive-title'><?php echo get_the_author(); ?></h1>
						<p><?php echo wp_kses_post( get_the_author_meta( 'description' ) ); ?></p>
					</div>
					<div class="buzznews-author-avatar col-md-2">
						<?php echo get_avatar( get_the_author_meta( 'email' ), 120 ); ?>
					</div>
				</section>

				<?php

				// Category.
			} elseif ( is_category() ) {
				?>

				<section class="buzznews-archive-description">
					<h1 class="page-title buzznews-archive-title"><?php echo single_cat_title(); ?></h1>
					<?php the_archive_description(); ?>
				</section>

				<?php

				// Tag.
			} elseif ( is_tag() ) {
				?>

				<section class="buzznews-archive-description">
					<h1 class="page-title buzznews-archive-title"><?php echo single_tag_title(); ?></h1>
					<?php the_archive_description(); ?>
				</section>

				<?php

				// Search.
			} elseif ( is_search() ) {
				?>

				<section class="buzznews-archive-description">
					<?php
						/* translators: 1: search string */
						$title = apply_filters( 'buzznews_the_search_page_title', sprintf( __( 'Search Results for: %s', 'buzznews' ), get_search_query() ) );
					?>
					<h1 class="page-title buzznews-archive-title"> <?php echo esc_html( $title ); ?> </h1>
				</section>

				<?php

				// Other.
			} else {
				?>

				<section class="buzznews-archive-description">
					<?php the_archive_title( '<h1 class="page-title buzznews-archive-title">', '</h1>' ); ?>
					<?php the_archive_description(); ?>
				</section>

				<?php
			}
		}
	}

	add_action( 'buzznews_archive_header', 'buzznews_archive_page_info' );
}


/**
 * BuzzNews Plugin required
 *
 *
 * @package BuzzNews
 * @since 1.0.0
 */
function buzznews_register_required_plugins() {
    /*
    * The list of Plugin Requird List
    */
    $plugins = array(

        
        array(
            'name' => esc_attr__( 'Contact Form 7', 'buzznews'),
            'slug' => 'contact-form-7',
            'required' => false,
		),
		array(
            'name' => esc_attr__( 'One Click Demo Import', 'buzznews'),
            'slug' => 'one-click-demo-import',
            'required' => false,
        ),



    );

    /*
        * Array of configuration settings. Amend each line as needed. 
    */
    $config = array(
        'id'           => 'buzznews',                 
        'default_path' => '',                      
        'menu'         => 'tgmpa-install-plugins', 
        'has_notices'  => true,                    
        'dismissable'  => true,                    
        'dismiss_msg'  => '',                       
        'is_automatic' => false,                   
        'message'      => '',                      
        
    );

    tgmpa( $plugins, $config );
}
add_action( 'tgmpa_register','buzznews_register_required_plugins' );//Register


/**
 * BuzzNews Display the post format images,
 * 
 * @package BuzzNews
 * @since 1.0.0
 */
function buzznews_postformat_icon() {
    /**
	 *get the posformat icons
	 *@since 1.0.0 
	 */
	$postformat = get_post_format();

	//select the icon for post format
	if( $postformat == 'gallery' ){
		$postformat_icons = 'fa fa-image';
	}elseif( $postformat == 'image' ){
		$postformat_icons = 'fa fa-image';
	}elseif( $postformat == 'link' ){
		$postformat_icons = 'fa fa-link';
	}elseif( $postformat == 'quote' ){
		$postformat_icons = 'fa fa-quote-right';
	}elseif( $postformat == 'fa fa-video' ){
		$postformat_icons = 'fa fa-video';
	}elseif( $postformat == 'audio' ){
		$postformat_icons = 'fa fa-volume-up';
	}elseif( $postformat == 'status' ){
		$postformat_icons = 'fa fa-pencil';
	}elseif( $postformat == 'aside' ){
		$postformat_icons = 'fa fa-plus';
	}else{
		$postformat_icons = '';
	}


	if( $postformat_icons  != '' ){
		echo wp_kses_post( '<div class="buzznews-post-format"><i class="'.esc_attr( $postformat_icons ).'"></i></div>');
	}
	
}
add_action( 'buzznews_post_format_icon','buzznews_postformat_icon' );//Register




/**
 * BuzzNews Display the post format images,
 * 
 * @package BuzzNews
 * @since 1.0.0
 */
function buzznews_homepage_custom_widget() {
    /**
	 *get the custom sidebar
	 *@since 1.0.0 
	 */
	//main slider
	buzznews_main_slider();
	buzznews_home_category_postlist();
    buzznews_homepage_featured();
    /**
     * Custom widget options
     * @since Buzznews 1.0.0
     *
     */
    buzznews_before_mainsec();
	?>
	<div id="primary" class="content-area" >
		<?php dynamic_sidebar( 'buzznews-homepage-widget' ); ?>
	</div>
	<aside id="secondary" class="widget-area buzznews-sidebar-sticky">
		<?php buzznews_sidebars_before(); ?>

		<?php dynamic_sidebar( 'homepage-sidebar' ); ?>

	<?php buzznews_sidebars_after(); ?>
	<?php 
	buzznews_after_mainsec();
	
}
add_action( 'buzznews_homepage_widgets','buzznews_homepage_custom_widget' );//Register




/**
 * Buzznews ajax call the post
 * 
 * @package BuzzNews
 * @since 1.0.0
 */
add_action( "wp_ajax_nopriv_buzznews_post_list", 'buzznews_ajax_postlist' );
add_action( 'wp_ajax_buzznews_post_list','buzznews_ajax_postlist');
if ( ! function_exists( 'buzznews_ajax_postlist' ) ) {  
	function buzznews_ajax_postlist(){
		
		
		//Ajax Call Products Display Hear
		if ( isset( $_POST['catId'] ) ) {
			$catId = intval( wp_unslash( $_POST['catId'] ) ); // ...
		}
		
		if ( isset( $_POST['prductCount'] ) ) {
			$prductCount = intval(  wp_unslash( $_POST['prductCount'] ) ); // ...
		}

		if ( isset( $_POST['postPaginate'] ) ) {
			$postPaginate = intval( wp_unslash( $_POST['postPaginate'] ) ); // ...
		}

		if ( isset( $_POST['postDisplayStyle'] )   ) {
			$postDisplayStyle = sanitize_text_field( wp_unslash( $_POST['postDisplayStyle'] ) ); // ...
		}

        $html = ob_start();
		
		
		if( $postDisplayStyle == 'postList' ):
	?>
		<div id="buzznews-trendingnews-right-top-<?php echo esc_attr($catId); ?>" class="buzznews-trendingnews-right-top">	
			<?php
				/**
				 * Post list
				 * @since 1.0.0
				 */
				$args = array( 'post_type'=>'post','posts_per_page'=>$prductCount,'cat'=>$catId ,'paged'=>$postPaginate );
				$blog_query = new WP_Query( $args );

				//number of post
				$buzz_news_current_paged = $blog_query->query['paged'];
			
				while( $blog_query->have_posts()): $blog_query->the_post();
					get_template_part( 'spiderbuzz/template-parts/home/sidebar-list' );
				endwhile; wp_reset_postdata(); 
			?>
		</div>
	<?php elseif( $postDisplayStyle == 'bigPostAndList'): ?>
		<div class="row">
			<?php 
				/**
				 * args 
				 * 
				 * @since 1.0.0
				 */
				$buzznews_post_count = 1;
				$args = array( 'post_type'=>'post','posts_per_page'=>$prductCount,'cat'=>$catId ,'paged'=>$postPaginate );
				$blog_query = new WP_Query( $args );

				//number of post
				$buzz_news_current_paged = $blog_query->query['paged'];
				
				while( $blog_query->have_posts()): $blog_query->the_post(); 
			?>
				<?php if( $buzznews_post_count == 1 ) : ?>
					<div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
						<div class="buzznews-newsfeed2-left ">
							<li>
								<?php the_post_thumbnail('buzznews-postlist'); ?>
							</li>
							<div class="buzznews-newsfeed2-left-details">
								<div class="headline">
									<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
								</div>
								<div class="headline-info">
									<?php the_excerpt(); ?>
								</div>
								<div class="image">
									<?php echo wp_kses_post( buzznews_meta_authorlink(get_the_ID()) ); ?>
									<?php get_buzznews_post_timedate(); ?>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
						<div class="buzznews-newsfeed2-middle">
				<?php else: ?>
							<div class="right-bottom-single-section clearfix">
								<div class="right-bottom-image">
									<?php the_post_thumbnail(); ?>
								</div>
								<div class="image-details">
									<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
									<div class="image">
										<?php echo wp_kses_post( buzznews_meta_authorlink(get_the_ID()) ); ?>
										<?php get_buzznews_post_timedate(); ?>
									</div>
								</div>	
							</div>
				<?php endif; ?>
			<?php $buzznews_post_count++; endwhile; wp_reset_postdata(); ?>
					</div>  	
				</div>
		</div>
	<?php elseif( $postDisplayStyle == 'GridLayout'): ?>
		<div class="middle-bottom">
			<div class="row">
				<?php 
					/**
					 * Post Grid view
					 * @since 1.0.0
					 */
					$args = array( 'post_type'=>'post','posts_per_page'=>$prductCount,'cat'=>$catId ,'paged'=>$postPaginate );
					$blog_query = new WP_Query( $args );

					//number of post
					$buzz_news_current_paged = $blog_query->query['paged'];
					
					
					while( $blog_query->have_posts()): $blog_query->the_post(); 
					get_template_part( 'spiderbuzz/template-parts/home/grid-post' );
					endwhile; wp_reset_postdata(); 
				?>
			</div>	
		</div>
	<?php elseif( $postDisplayStyle == 'SidebarGridLayout'): ?>
		<div class="middle-bottom">
			<div class="row">
				<?php 
					/**
					 * Post Sdiebar Grid View
					 * @since 1.0.0
					 */
					$args = array( 'post_type'=>'post','posts_per_page'=>$prductCount,'cat'=>$catId ,'paged'=>$postPaginate );
					$blog_query = new WP_Query( $args );

					//number of post
					$buzz_news_current_paged = $blog_query->query['paged'];
					
					while( $blog_query->have_posts()): $blog_query->the_post(); 
					get_template_part( 'spiderbuzz/template-parts/home/sidebar-gridpost' );
					endwhile; wp_reset_postdata(); ?>
			</div>	
		</div>
	<?php elseif( $postDisplayStyle == 'fullpostlist'): ?>
		<div class="fullpostlist-ajax">
			<?php 
				/**
				 * Post Sdiebar Grid View
				 * @since 1.0.0
				 */
				$args = array( 'post_type'=>'post','posts_per_page'=>$prductCount,'cat'=>$catId ,'paged'=>$postPaginate );
				$blog_query = new WP_Query( $args );

				//number of post
				$buzz_news_current_paged = $blog_query->query['paged'];
				
				while( $blog_query->have_posts()): $blog_query->the_post(); 
					/*
					* Include the Post-Format-specific template for the content.
					* If you want to override this in a child theme, then include a file
					* called content-___.php (where ___ is the Post Format name) and that will be used instead.
					*/
					get_template_part( 'spiderbuzz/template-parts/content', get_post_format() );
				
				endwhile; wp_reset_postdata(); ?>
		</div>
	<?php else: ?>
	<div class="buzznews-trendingnews-right-top">
		<div class="sidebar-mostread-wrapper">
			<?php 
			/**
			 * Post list
			 * @since 1.0.0
			 */
			$mostpopular_count = 1;
			$args = array( 'post_type'=>'post','posts_per_page'=>$prductCount,'cat'=>$catId ,'paged'=>$postPaginate , 'orderby' => 'meta_value_num', 'order' => 'DESC');
			$blog_query = new WP_Query( $args );

			//pagination
			$buzz_news_current_paged = $blog_query->query['paged'];
			
			?>
			<?php while( $blog_query->have_posts()): $blog_query->the_post();   ?>
			<div class="sidebar-mostread-single">
				<li>
					<a href="<?php the_permalink(); ?> "><?php  echo esc_html($mostpopular_count).'.'; ?> <?php the_title(); ?></a>
				</li>
			</div>
			<?php $mostpopular_count++; endwhile; wp_reset_postdata(); ?>
		</div>
	</div>
	<?php endif; ?>
     <?php
     
    $html = ob_get_contents();
	ob_end_clean();
	$result['html'] = $html;
	$result['paged'] = intval( $buzz_news_current_paged );
	echo wp_send_json( $result );exit;
	}
}



/*
Function that will set infinite scrolling to be displayed in the page.
*/
/**
 * AJAX Load More 
 *
 */
function buzznews_ajax_load_more() {
	check_ajax_referer( 'buzznews-load-more-nonce', 'nonce' );
	$post = wp_unslash($_POST);

	if ( isset( $post['query'] ) ) {
		$args =  $post['query']; // ...
	}else{
		$args = array();
	}
	$args['post_type'] = $args['post'];
	$args['paged'] = $post['page'];
	$args['post_status'] = 'publish';
	ob_start();
	$loop = new WP_Query( $args );
	if( $loop->have_posts() ): while( $loop->have_posts() ): $loop->the_post();
	do_action( 'buzznews_template_parts_content' );
	endwhile; endif; wp_reset_postdata();
	$data['data'] = ob_get_clean();
	$data['total_page'] = $loop->post_count;
	$data['current_page'] = $args['paged'];
	wp_send_json_success( $data );
}
add_action( 'wp_ajax_buzznews_ajax_load_more', 'buzznews_ajax_load_more' );
add_action( 'wp_ajax_nopriv_buzznews_ajax_load_more', 'buzznews_ajax_load_more' );



/**
 * Buzznews 
 * 
 * @since 1.0.0
 */
function get_buzznews_post_timedate(){
	/**
	 * get the post date
	 * 
	 */
	echo "<span>";
		if( get_theme_mod('buzznews_post_timedate','human-readable') == 'human-readable' ):
			echo esc_attr(human_time_diff( get_the_time('U'), current_time('timestamp') )) . esc_html(' ago', 'buzznews');  
		else: 
			the_time(get_option('date_format')); 
		endif;
	echo "</span>"; 
}