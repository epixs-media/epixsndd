<?php
/**
 * Shows breadcrumb
 *
 * @package buzznews
 */

// If we are front page or blog page, return.
if ( is_front_page() || is_home() ) {
	return;
}

// If file is not already loaded, loaded it now.
if ( ! function_exists( 'breadcrumb_trail' ) ) {
	load_template( get_template_directory() . '/spiderbuzz/compatibility/class-breadcrumb-trail.php' );
}
?>
<section class="breadcrumb">
	<div class="container">
		<?php
			breadcrumb_trail( array(
				'container'   => 'div',
				'before'      => '<div class="container">',
				'after'       => '</div>',
				'show_browse' => false,
			) );
		?>
	</div>
</section>
