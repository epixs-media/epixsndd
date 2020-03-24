<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package     BuzzNews
 * @author     spiderbuzz
 * @copyright   Copyright (c) 2019, spiderbuzz
 * @link        http://spiderbuzz.com
 * @since       BuzzNews 1.0.0
 * */
class Buzznews_Listpost_Layout extends WP_Widget {

	/* Register Widget with WordPress*/
	function __construct() {
		parent::__construct(
			'buzznews_postlist_view', // Base ID
			esc_html__( 'BN:Post List Layout', 'buzznews' ), //Widget Name
			array( 'description' => esc_html__( 'Display Post List Layout.', 'buzznews' ), ) // Args
		);
	}

	/**
     * Widget Form Section
     */
	public function form( $instance ) {
		$defaults = array(
			'title'			=> esc_html__( 'Post List view', 'buzznews' ),
			'category'		=> esc_html__( 'all', 'buzznews' ),
			'number_posts'	=> 8,
		);
		$instance = wp_parse_args( (array) $instance, $defaults );

	?>
		<p>
			<label for="<?php echo esc_attr($this->get_field_id( 'title' ) ); ?>"><?php echo esc_html__( 'Title:', 'buzznews' ); ?></label>
			<input type="text" class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" value="<?php echo esc_attr($instance['title']); ?>"/>
		</p>
		<p>
			<label><?php echo esc_html__( 'Select a post category:', 'buzznews' ); ?></label>
			<?php wp_dropdown_categories( array( 'name' => $this->get_field_name('category'), 'selected' => $instance['category'], 'show_option_all' => esc_html__('Show all posts','buzznews' ), 'class' => 'widefat' ) ); ?>
		</p>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'number_posts' ) ); ?>"><?php echo esc_html__( 'Number of posts:', 'buzznews' ); ?></label>
			<input class="widefat" type="number" id="<?php echo esc_attr( $this->get_field_id( 'number_posts' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'number_posts' ) );?>" value="<?php echo absint( $instance['number_posts'] ); ?>" size="3"/> 
		</p>
					
	<?php

	}

    /**
     * Post Update 
     */
	public function update( $new_instance, $old_instance ) {
		$instance = $old_instance;
		$instance[ 'title' ] = sanitize_text_field( $new_instance[ 'title' ] );	
		$instance[ 'category' ]	= absint( $new_instance[ 'category' ] );
		$instance[ 'number_posts' ] = intval($new_instance[ 'number_posts' ]);
		return $instance;
	}


    /**
     * Front End Display
     */
	public function widget( $args, $instance ) {
		extract( $args );

		$title = ( ! empty( $instance['title'] ) ) ? $instance['title'] : '';	
        $home_blog_title = apply_filters( 'widget_title', $title , $instance, $this->id_base );
		$home_blog_category_id = ( ! empty( $instance['category'] ) ) ? absint( $instance['category'] ) : '';
		$number_posts = ( ! empty( $instance['number_posts'] ) ) ? absint( $instance['number_posts'] ) : 6; 
		
		// last post count
        if( $home_blog_category_id != '' ){
            $category = get_category($home_blog_category_id);
            $last_page_count = ( $category->category_count ) / $number_posts;
        }else{
            $last_page_count = intval( buzznews_get_total_posts() / $number_posts ) + 1;
        }

		// Latest Posts
		echo wp_kses_post( $before_widget );
	?>
		<div class="buzznews-newsfeed listpost-widget">
			<div class="buzznews-newsfeed-outer-wrapper">
				<?php if( $home_blog_title != '' ): ?>
					<div class="buzznews-header-title">
						<h5><?php echo wp_kses_post( $home_blog_title ); ?></h5>
					</div>
				<?php endif; ?>
				<div class="container">

                        <div class="row buzznews-row">
                            <?php 
                                /**
                                 * args 
                                 * 
                                 * @since 1.0.0
                                 */
                                $args = array( 'post_type'=>'post','posts_per_page'=>$number_posts,'cat'=>$home_blog_category_id );
                                $blog_query = new WP_Query( $args ); 
							?>
							<div class="buzznews-ajax-buttom center-bttn">
								<div class="buzznews-trendingnews-right">
									<div class="buzznews-trendingnews-right-top">
										<?php 
											if($blog_query->have_posts()) :  
												while( $blog_query->have_posts()): $blog_query->the_post(); 
													/*
													* Include the Post-Format-specific template for the content.
													* If you want to override this in a child theme, then include a file
													* called content-___.php (where ___ is the Post Format name) and that will be used instead.
													*/
													get_template_part( 'spiderbuzz/template-parts/content', get_post_format() );
												endwhile; 
												wp_reset_postdata(); 
											endif; 

										?>
									</div>
									<span class="buzznews-ajax-loading" ><svg width="200px"  height="200px"   viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-ripple" style="background: none;"><circle cx="50" cy="50" r="6.60838" fill="none" ng-attr-stroke="{{config.c1}}" ng-attr-stroke-width="{{config.width}}" stroke="#fe001e" stroke-width="1"><animate attributeName="r" calcMode="spline" values="0;30" keyTimes="0;1" dur="1" keySplines="0 0.2 0.8 1" begin="-0.5s" repeatCount="indefinite"></animate><animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="1" keySplines="0.2 0 0.8 1" begin="-0.5s" repeatCount="indefinite"></animate></circle><circle cx="50" cy="50" r="22.4588" fill="none" ng-attr-stroke="{{config.c2}}" ng-attr-stroke-width="{{config.width}}" stroke="#fe001e" stroke-width="1"><animate attributeName="r" calcMode="spline" values="0;30" keyTimes="0;1" dur="1" keySplines="0 0.2 0.8 1" begin="0s" repeatCount="indefinite"></animate><animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="1" keySplines="0.2 0 0.8 1" begin="0s" repeatCount="indefinite"></animate></circle></svg></span>
									<div class="buzznews-postlist-arrow buzznews-fullpostlist">
										<span class="buzznews-postlist-ajax arrow-right " catId="<?php echo esc_attr($home_blog_category_id); ?>" postCount="<?php echo esc_attr($number_posts); ?>" postPaginate="2"  postLastPaginate="<?php echo esc_attr($last_page_count); ?>"  postDisplayStyle="fullpostlist" ><a href="#"><?php echo esc_html__('Load More','buzznews'); ?></a></span>
									</div>
								</div>
							</div>
						</div>
				</div>
			</div>
		</div>
	<?php
		echo wp_kses_post( $after_widget );
	}


}
// Register The Category Posts
function buzznews_listpost_layout_config() {
    register_widget( 'Buzznews_Listpost_Layout' );
}
add_action( 'widgets_init', 'buzznews_listpost_layout_config' );