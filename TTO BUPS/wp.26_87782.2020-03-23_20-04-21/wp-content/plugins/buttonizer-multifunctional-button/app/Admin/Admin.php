<?php

/*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

Copyright 2017 Buttonizer
*/
namespace Buttonizer\Admin;

# No script kiddies
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );
class Admin
{
    /**
     * Admin constructor.
     */
    public function __construct()
    {
        // Let's wait for Wordpress to initialize... Otherwise we are way to early
        add_action( 'init', array( &$this, 'wordpress_initialized' ) );
    }
    
    /**
     * Wordpress initialized
     */
    public function wordpress_initialized()
    {
        $this->pluginAdminMenu();
        if ( is_admin() && (current_user_can( 'editor' ) || current_user_can( 'administrator' )) ) {
            add_action( 'wp_ajax_buttonizer_backend', [ &$this, 'ajaxHandler' ] );
        }
    }
    
    /**
     * Create Admin menu
     */
    private function pluginAdminMenu()
    {
        // Admin menu
        add_menu_page(
            'Buttonizer Buttons',
            'Buttonizer',
            'manage_options',
            'Buttonizer',
            [ &$this, 'plugin_options_page' ],
            plugins_url( '/assets/images/wp-icon.png', BUTTONIZER_PLUGIN_DIR ),
            81
        );
        // Add submenu
        add_submenu_page(
            'Buttonizer',
            'Settings',
            __( 'Settings' ),
            'manage_options',
            'admin.php?page=Buttonizer#open-settings'
        );
        // Plugin information, add links
        add_filter( "plugin_action_links_" . plugin_basename( BUTTONIZER_PLUGIN_DIR ), function ( $aLinks ) {
            $aButtonizerLinks = [
                '<a href="' . admin_url( 'admin.php?page=Buttonizer-contact' ) . '">I need support</a><br />',
                '<a href="https://community.buttonizer.pro/" target="_blank">Community forums</a>',
                '<a href="' . admin_url( 'admin.php?page=Buttonizer' ) . '">Manage buttons</a>',
                '<a href="' . admin_url( 'admin.php?page=Buttonizer#open-settings' ) . '">Settings</a>'
            ];
            return array_merge( $aLinks, $aButtonizerLinks );
        } );
    }
    
    /**
     * Get media and add scripts/styles that Buttonizer uses
     */
    public function getPluginScriptStyle()
    {
        // Require media manager
        wp_enqueue_media();
        // Require wordpress style
        wp_enqueue_style( [
            'wp-color-picker',
            'jquery-ui-datepicker',
            'dashicons',
            'common',
            'dashboard',
            'forms',
            'buttons',
            'admin-menu'
        ] );
        // Require wordpress scripts
        wp_enqueue_script( [
            'jquery',
            'wp-color-picker',
            'jquery-ui-slider',
            'jquery-ui-datepicker'
        ], false, true );
        wp_enqueue_script( 'buttonizer-bundle', plugins_url( '/assets/bundle.js?v=' . md5( BUTTONIZER_VERSION ), BUTTONIZER_PLUGIN_DIR ), [ 'jquery' ] );
        wp_enqueue_style( 'buttonizer-css', plugins_url( '/assets/dashboard.css?v=' . md5( BUTTONIZER_VERSION ), BUTTONIZER_PLUGIN_DIR ) );
        $path = '/assets/dashboard.min.js';
        wp_register_script(
            'buttonizer_admin_js',
            plugins_url( $path . '?v=' . md5( BUTTONIZER_VERSION ), BUTTONIZER_PLUGIN_DIR ),
            [ 'jquery', 'buttonizer-bundle' ],
            false,
            true
        );
        wp_localize_script( 'buttonizer_admin_js', 'buttonizer_admin', [
            'ajax'     => admin_url( 'admin-ajax.php' ),
            'admin'    => admin_url( 'admin.php' ),
            'version'  => BUTTONIZER_VERSION,
            'dir'      => plugins_url( '', BUTTONIZER_PLUGIN_DIR ),
            'assets'   => plugins_url( '/assets', BUTTONIZER_PLUGIN_DIR ),
            'security' => wp_create_nonce( "save_buttonizer" ),
        ] );
        // Buttonizer translations
        $set = ( new Translations() )->get();
        wp_localize_script( 'buttonizer_admin_js', 'buttonizer_translations', $set );
        wp_enqueue_script( 'buttonizer_admin_js' );
    }
    
    /**
     * Default setting page template
     */
    public function plugin_options_page()
    {
        $this->getPluginScriptStyle();
        echo  '<div class="buttonizer-admin-overlay">
            <br /><br />
            <b>' . __( 'Buttonizer is loading...', 'buttonizer-multifunctional-button' ) . '</b><br />
            ' . sprintf(
            // Translators: First link goes to our knowledge base, the second link goes to the admin panel.
            __( 'When Buttonizer does not start, <a %1$s>click here</a> to find out what is going wrong or <a %2$s>click here</a> to return to the WordPress admin dashboard.', 'buttonizer-multifunctional-button' ),
            'href="https://community.buttonizer.pro/knowledgebase/28" target="_blank"',
            'href="' . admin_url() . '"'
        ) . '

            <script type="application/javascript">
                setTimeout(function() {
                  document.querySelector(".buttonizer-admin-overlay").innerHTML += "<div style=\'margin-top: 40px;\'>' . __( 'When you have a slow internet connection or slow webserver, give it a moment...', 'buttonizer-multifunctional-button' ) . '</div>";
                }, 10000);
            </script>

            <noscript>
                <div class="buttonizer-no-script">' . __( 'Hi there! JavaScript is disabled in your browser. Please consider to enable JavaScript in your browser to use Buttonizer.', 'buttonizer-multifunctional-button' ) . '</div>
            </noscript>
        </div>' ;
    }
    
    /**
     * Overwrite admin page
     */
    public function showButtonizer()
    {
        // Enqueue style and scripts
        $this->getPluginScriptStyle();
        require __DIR__ . '/templates/Admin.php';
    }
    
    /**
     * Ajax request handler
     */
    public function ajaxHandler()
    {
        if ( !isset( $_GET['action'] ) || $_GET['action'] !== 'buttonizer_backend' || !isset( $_GET['item'] ) ) {
            return;
        }
        // Get item
        $ajaxFileRequest = urldecode( $_GET['item'] );
        // Do not get further then this
        
        if ( strpos( $ajaxFileRequest, '..' ) !== false ) {
            echo  json_encode( [
                'plugin'  => 'Buttonizer',
                'status'  => 'error',
                'message' => 'You are not allowed to do this. ',
            ] ) ;
            wp_die();
        }
        
        // Replace dots to nothing
        $ajaxFileRequest = str_replace( "..", "", $ajaxFileRequest );
        // Check file exists
        
        if ( file_exists( BUTTONIZER_DIR . '/app/Admin/Ajax/' . $ajaxFileRequest . '.php' ) ) {
            // Create class path
            $className = '\\Buttonizer\\Admin\\Ajax\\' . str_replace( '/', '\\', $ajaxFileRequest );
            // Open file
            require BUTTONIZER_DIR . '/app/Admin/Ajax/' . $ajaxFileRequest . '.php';
            new $className();
        } else {
            echo  json_encode( [
                'plugin'  => 'Buttonizer',
                'status'  => 'error',
                'message' => 'Ajax request file not found.',
            ] ) ;
        }
        
        wp_die();
    }

}