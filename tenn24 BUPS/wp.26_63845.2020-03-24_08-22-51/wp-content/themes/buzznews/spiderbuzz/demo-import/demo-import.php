<?php
/**
 * Buzznews Section Import Options 
 * Demo Import File 
 */
function buzznews_import_files() {
    return array(
      array(
        'import_file_name'           => 'Default',
        'categories'                 => array( 'News'),
        'import_file_url'            =>  get_template_directory_uri() . '/spiderbuzz/demo-import/default/content.xml',
        'import_widget_file_url'     =>  get_template_directory_uri() . '/spiderbuzz/demo-import/default/widget.wie',
        'import_customizer_file_url' =>  get_template_directory_uri() . '/spiderbuzz/demo-import/default/customizer.dat',
        'import_preview_image_url'   =>  get_template_directory_uri() . '/screenshot.png',
        'import_notice'              => __( 'After you import this demo, you will have to setup the slider separately.', 'buzznews' ),
        'preview_url'                => 'http://demo.spiderbuzz.com/buzznews',
      ),
      array(
        'import_file_name'           => 'Default',
        'categories'                 => array( 'News'),
        'import_file_url'            =>  get_template_directory_uri() . '/spiderbuzz/demo-import/default/content.xml',
        'import_widget_file_url'     =>  get_template_directory_uri() . '/spiderbuzz/demo-import/default/widget.wie',
        'import_customizer_file_url' =>  get_template_directory_uri() . '/spiderbuzz/demo-import/default/customizer.dat',
        'import_preview_image_url'   =>  get_template_directory_uri() . '/screenshot.png',
        'import_notice'              => __( 'After you import this demo, you will have to setup the slider separately.', 'buzznews' ),
        'preview_url'                => 'http://demo.spiderbuzz.com/buzznews',
      ),
    );
  }
  add_filter( 'pt-ocdi/import_files', 'buzznews_import_files' );


  
/*****************************************************************
*         After demo import options
*************************************************************/
function buzznews_after_import_setup() {
  // Assign menus to their locations.
  $main_menu = get_term_by( 'name', 'All Pages', 'nav_menu' );
  
  set_theme_mod( 'nav_menu_locations', array(
    'primary-menu' => $main_menu->term_id,
    )
  );

  // Assign front page and posts page (blog page).
  $front_page_id = get_page_by_title( 'Home' );
  $blog_page_id  = get_page_by_title( 'Blog' );

  update_option( 'show_on_front', 'page' );
  update_option( 'page_on_front', $front_page_id->ID );
  update_option( 'page_for_posts', $blog_page_id->ID );

}
add_action( 'pt-ocdi/after_import', 'buzznews_after_import_setup' );