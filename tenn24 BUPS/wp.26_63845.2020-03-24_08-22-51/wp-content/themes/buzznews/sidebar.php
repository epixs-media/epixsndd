<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package     BuzzNews
 * @author     spiderbuzz
 * @copyright   Copyright (c) 2019, spiderbuzz
 * @link        http://spiderbuzz.com
 * @since       BuzzNews 1.0.0
 * */


if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

	<aside id="secondary" class="widget-area buzznews-sidebar-sticky">
		<?php buzznews_sidebars_before(); ?>

		<?php dynamic_sidebar( 'sidebar-1' ); ?>

		<?php buzznews_sidebars_after(); ?>
	</aside><!-- #secondary -->
