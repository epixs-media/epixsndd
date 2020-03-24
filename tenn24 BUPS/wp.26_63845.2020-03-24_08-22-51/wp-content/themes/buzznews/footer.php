<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
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
			<?php buzznews_content_bottom(); ?>

		<?php buzznews_content_after(); ?>

		<?php buzznews_tranding(); ?>

		<?php buzznews_footer_before(); ?>

		<?php buzznews_footer(); ?>

		<?php buzznews_footer_after(); ?>
		</div><!-- #content -->
	</div><!-- #page -->
	<?php buzznews_body_bottom(); ?>

<?php wp_footer(); ?>

</body>
</html>