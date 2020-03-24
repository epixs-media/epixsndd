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
class Buzznews_Big_Post_List_Layout extends WP_Widget {

	/* Register Widget with WordPress*/
	function __construct() {
		parent::__construct(
			'buzznews_big_post_list', // Base ID
			esc_html__( 'BN: Big Post And List Post', 'buzznews' ), //Widget Name
			array( 'description' => esc_html__( 'Display Big Post And List Post Layout.', 'buzznews' ), ) // Args
		);
	}

	/**
     * Widget Form Section
     */
	public function form( $instance ) {
		$defaults = array(
			'title'			=> esc_html__( 'Post List view', 'buzznews' ),
			'category'		=> esc_html__( 'all', 'buzznews' ),
			'number_posts'	=> 5,
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
		echo wp_kses_post($before_widget);
	?>
        <!------ BuzzNews-Customerfirst5G-full-section -------->
        <div class="buzznews-newsfeed2 bigpost-list-widget">
            <div class="buzznews-newsfeed2-outer-wrapper">
                <div class="container">
                    <div class="buzznews-newsfeed2-inner-wrapper">
                        <div class="buzznews-trendingnews-right">
                            <?php if( $home_blog_title != '' ): ?>
                                <div class="buzznews-header-title">
                                    <h5><?php echo wp_kses_post( $home_blog_title ); ?></h5>
                                </div>
                            <?php endif; ?>
                            <div class="buzznews-postlist-arrow">
                                <span class="buzznews-postlist-ajax arrow-left" catId="<?php echo esc_attr($home_blog_category_id); ?>" postCount="<?php echo esc_attr($number_posts); ?>" postPaginate="1"  postLastPaginate="<?php echo esc_attr($last_page_count); ?>" postDisplayStyle="bigPostAndList" ><a href="javascript:void(0)"><i class="fa fa-angle-left" aria-hidden="true"></i></a></span>
                                <span class="buzznews-postlist-ajax arrow-right"  catId="<?php echo esc_attr($home_blog_category_id); ?>" postCount="<?php echo esc_attr($number_posts); ?>" postPaginate="2"  postLastPaginate="<?php echo esc_attr($last_page_count); ?>"  postDisplayStyle="bigPostAndList" ><a href="javascript:void(0)"><i class="fa fa-angle-right" aria-hidden="true"></i></a></span>
                            </div>
                            <div   class="buzznews-trendingnews-right-top">
                                <div class="row">

                                    <?php 
                                        /**
                                         * args 
                                         * 
                                         * @since 1.0.0
                                         */
                                        $buzznews_post_count = 1;
                                        $args = array( 'post_type'=>'post','posts_per_page'=>$number_posts,'cat'=>$home_blog_category_id );
                                        $blog_query = new WP_Query( $args ); 
                                        
                                        while( $blog_query->have_posts()): $blog_query->the_post(); 
                                    ?>
                                        <?php if( $buzznews_post_count == 1 ) : ?>
                                            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                                <div class="buzznews-newsfeed2-left">
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
function buzznews_Big_Post_List_layout_config() {
    register_widget( 'Buzznews_Big_Post_List_Layout' );
}
add_action( 'widgets_init', 'buzznews_Big_Post_List_layout_config' );