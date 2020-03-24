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
<div class="col-lg-6 col-md-6 buzznews-matchheight-article">
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
                <?php echo wp_kses_post( buzznews_meta_authorlink( get_the_ID() ) ); ?>
                <?php get_buzznews_post_timedate(); ?>
            </div>
        </div>
    </div>
</div>