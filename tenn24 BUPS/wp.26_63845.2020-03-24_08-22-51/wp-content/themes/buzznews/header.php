<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package     BuzzNews
 * @author     spiderbuzz
 * @copyright   Copyright (c) 2019, spiderbuzz
 * @link        http://spiderbuzz.com
 * @since       BuzzNews 1.0.0
 * */

?>
<!doctype html>
<?php buzznews_html_before(); ?>
<html <?php language_attributes(); ?>>
<head>
	<?php buzznews_head_top(); ?>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php buzznews_head_bottom(); ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<?php buzznews_body_top(); ?>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'buzznews' ); ?></a>

	
		<?php buzznews_content_top(); ?>

		<?php buzznews_header_before(); ?>

		<?php buzznews_header(); ?>

		<?php buzznews_header_after(); ?>

		<?php buzznews_content_before(); ?>

		<?php buzznews_breadcrumb_trail(); ?>
		
		<div id="content" class="site-content">
		<!-- ht-banner -->
		<div class="sb-wrapper">	
			
			