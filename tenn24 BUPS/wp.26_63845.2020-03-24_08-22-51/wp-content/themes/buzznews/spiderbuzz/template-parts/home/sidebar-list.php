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
?>
 <div class="right-bottom-single-section clearfix">
    <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-4">
            <div class="right-bottom-image">
                <?php the_post_thumbnail(); ?>
            </div>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-8 col-8 buzznews-margin-none">
            <div class="image-details">
                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                <div class="image">
                    <?php echo wp_kses_post( buzznews_meta_authorlink(get_the_ID()) ); ?>
                    <?php get_buzznews_post_timedate(); ?>
                </div>
            </div>	
        </div>
    </div>
</div>