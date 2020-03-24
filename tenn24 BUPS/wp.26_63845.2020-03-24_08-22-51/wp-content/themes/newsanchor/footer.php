<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package NewsAnchor
 */
?>

			</div>
		</div>		
	</div><!-- .page-content -->

    <a class="go-top">
        <i class="fa fa-angle-up"></i>
    </a>

	<footer id="colophon" class="site-info" role="contentinfo">
		<div class="go-top2"></div>

		<?php if ( is_active_sidebar( 'footer-1' ) ) : ?>
			<?php get_sidebar('footer'); ?>
		<?php endif; ?>

		<div class="container">
			&copy; 2018 - 2019. Tenn24 All rights reserved. Designed & Developed by <a href="http://epixs.in/" title="EPIXS Media"> EPIXS Media</a>
		</div><!-- /.container -->
	</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
