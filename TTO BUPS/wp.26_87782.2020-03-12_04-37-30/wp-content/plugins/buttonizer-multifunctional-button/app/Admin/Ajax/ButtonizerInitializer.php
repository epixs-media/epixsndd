<?php

namespace Buttonizer\Admin\Ajax;

use  Buttonizer\Utils\Maintain ;
use  Buttonizer\Utils\Update ;
/**
 * @property  pageRules
 */
class ButtonizerInitializer
{
    private  $settings = array() ;
    private  $timeSchedules = array() ;
    private  $buttons = array() ;
    private  $pageRules = array() ;
    /**
     * ButtonizerInitializer constructor.
     */
    public function __construct()
    {
        // Register general Buttonizer settings
        register_setting( 'buttonizer', 'buttonizer_settings' );
        // Register button settings
        register_setting( 'buttonizer', 'buttonizer_buttons' );
        // Register time schedules
        register_setting( 'buttonizer', 'buttonizer_schedules' );
        // Register page rules
        register_setting( 'buttonizer', 'buttonizer_rules' );
        // Load general Buttonizer settings
        $this->settings = get_option( 'buttonizer_settings' );
        // Migrate to Buttonizer 2.0
        
        if ( !isset( $this->settings['migration_version'] ) || $this->settings['migration_version'] !== '2.0' ) {
            ( new Update() )->run();
            // Load updated general settings
            $this->settings = get_option( 'buttonizer_settings' );
        }
        
        // Load button settings
        $this->buttons = get_option( 'buttonizer_buttons' );
        // Load opening settings
        $this->timeSchedules = get_option( 'buttonizer_schedules' );
        // Load 'changes' boolean
        $this->hasChanges = get_option( 'buttonizer_has_changes' );
        // Load page rules
        $this->pageRules = get_option( 'buttonizer_rules' );
        // OLD: buttonizer_page_categories
        $this->returnSettings();
    }
    
    /**
     * Return all settings
     */
    public function returnSettings()
    {
        // Let the frontend know that this is the free version
        $premium = false;
        echo  json_encode( [
            "status"                      => "success",
            "version"                     => BUTTONIZER_VERSION,
            "fontawesome_current_version" => FONTAWESOME_CURRENT_VERSION,
            "premium"                     => $premium,
            "settings"                    => [
            "welcome"                   => $this->check( "welcome", true ),
            "icon_library"              => $this->check( "icon_library", 'fontawesome' ),
            "icon_library_version"      => $this->check( "icon_library_version", '5.free' ),
            "icon_library_code"         => $this->check( "icon_library_code", '' ),
            "import_icon_library"       => $this->check( "import_icon_library", 'true' ),
            "google_analytics"          => $this->check( "google_analytics", '' ),
            "google_analytics_enabled"  => $this->check( "google_analytics_enabled", 'true' ),
            "admin_top_bar_show_button" => $this->check( "admin_top_bar_show_button", 'true' ),
            "show_tooltips"             => $this->check( "show_tooltips", 'true' ),
            "allow_subdomains"          => $this->check( "allow_subdomains", 'false' ),
        ],
            "changes"                     => $this->hasChanges,
            "groups"                      => $this->loadButtonObjects(),
            "time_schedules"              => $this->loadTimeSchedules(),
            "page_rules"                  => $this->loadPageRules(),
            "wordpress"                   => [
            "base"       => get_site_url(),
            "admin_base" => substr( admin_url(), 0, -1 ),
            'timezone'   => Maintain::getTimezone(),
        ],
        ] ) ;
    }
    
    /**
     * Return groups and buttons
     *
     * @return array
     */
    private function loadButtonObjects()
    {
        return ( is_array( $this->buttons ) ? $this->buttons : [] );
    }
    
    /**
     * Check setting exists, otherwise give default value
     *
     * @param $name
     * @param $default
     * @return mixed
     */
    private function check( $name, $default )
    {
        return ( isset( $this->settings[$name] ) && !empty($this->settings[$name]) ? $this->settings[$name] : $default );
    }
    
    /**
     * Get time schedules
     */
    private function loadTimeSchedules()
    {
        return false;
    }
    
    /**
     * Get page rules
     */
    private function loadPageRules()
    {
        return false;
    }

}