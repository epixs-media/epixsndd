<?php

namespace Buttonizer\Admin\Ajax;

use  Buttonizer\Utils\Update ;
use  Buttonizer\Utils\Remigrate ;
class SaveData
{
    public function __construct()
    {
        if ( wp_get_current_user()->ID === 0 ) {
            exit( json_encode( [
                'status'  => 'error',
                'message' => 'You are not logged in',
            ] ) );
        }
        // Make sure the security token exists
        
        if ( !isset( $_POST["security"] ) ) {
            echo  json_encode( [
                'status'  => 'error',
                'message' => 'Missing security token to perform this action',
            ] ) ;
            wp_die();
        }
        
        // Okey, great, make sure it's safe
        
        if ( !wp_verify_nonce( $_POST["security"], "save_buttonizer", false ) ) {
            echo  json_encode( [
                'status'  => 'error',
                'message' => 'Your security token is invalid to perform this action. <a href="https://community.buttonizer.pro/d/33" target="_blank">What does this mean?</a>',
            ] ) ;
            wp_die();
        }
        
        switch ( $_GET['save'] ) {
            case 'pageRules':
                $this->savePageRules();
                break;
            case 'settings':
                $this->saveSettings();
                break;
            case 'buttons':
                $this->saveButtons();
                break;
            case 'timeSchedules':
                $this->saveTimeSchedules();
                break;
            case 'publish':
                $this->publish();
                break;
            case 'revert':
                $this->revert();
                break;
            case 'reset-buttonizer':
                $this->reset();
                break;
            case 'migrate-buttonizer':
                $this->migrateToTwoPointO();
                break;
            case 'remigrate-buttonizer':
                $this->remigrateToTwoPointO();
                break;
            default:
                echo  json_encode( [
                    'status'  => 'error',
                    'message' => 'No function handled',
                ] ) ;
                break;
        }
    }
    
    /**
     * Save buttons
     */
    private function saveButtons()
    {
        register_setting( 'buttonizer', 'buttonizer_buttons' );
        register_setting( 'buttonizer', 'buttonizer_has_changes' );
        // Save buttons
        update_option( 'buttonizer_buttons', $this->stripslashes_deep( $_POST['buttons'] ) );
        update_option( 'buttonizer_has_changes', true );
        echo  json_encode( [
            'status'  => 'success',
            'message' => 'Your changes are saved.',
        ] ) ;
    }
    
    public function stripslashes_deep( $value )
    {
        $value = ( is_array( $value ) ? array_map( [ &$this, 'stripslashes_deep' ], $value ) : stripslashes( $value ) );
        return $value;
    }
    
    /**
     * Save buttons
     */
    private function publish()
    {
        register_setting( 'buttonizer', 'buttonizer_buttons_published' );
        register_setting( 'buttonizer', 'buttonizer_rules_published' );
        register_setting( 'buttonizer', 'buttonizer_schedules_published' );
        register_setting( 'buttonizer', 'buttonizer_has_changes' );
        register_setting( 'buttonizer', 'buttonizer_settings' );
        // Update cache code
        $settings = get_option( 'buttonizer_settings' );
        $settings['cache_code'] = md5( time() );
        // Save buttons
        update_option( 'buttonizer_buttons_published', get_option( 'buttonizer_buttons' ) );
        update_option( 'buttonizer_rules_published', get_option( 'buttonizer_rules' ) );
        update_option( 'buttonizer_schedules_published', get_option( 'buttonizer_schedules' ) );
        update_option( 'buttonizer_settings', $settings );
        update_option( 'buttonizer_has_changes', false );
        echo  json_encode( [
            'status'  => 'success',
            'message' => 'Your changes are saved.',
        ] ) ;
    }
    
    /**
     * Revert buttons
     */
    private function revert()
    {
        register_setting( 'buttonizer', 'buttonizer_buttons' );
        register_setting( 'buttonizer', 'buttonizer_rules' );
        register_setting( 'buttonizer', 'buttonizer_schedules' );
        register_setting( 'buttonizer', 'buttonizer_has_changes' );
        // Save buttons
        update_option( 'buttonizer_buttons', get_option( 'buttonizer_buttons_published' ) );
        update_option( 'buttonizer_rules', get_option( 'buttonizer_rules_published' ) );
        update_option( 'buttonizer_schedules', get_option( 'buttonizer_schedules_published' ) );
        update_option( 'buttonizer_has_changes', false );
        echo  json_encode( [
            'status'  => 'success',
            'message' => 'Your changes are reverted.',
        ] ) ;
    }
    
    /**
     * PRO: Page rules
     */
    private function savePageRules()
    {
        echo  json_encode( [
            'status'  => 'error',
            'message' => 'You do not have Buttonizer Pro.',
        ] ) ;
    }
    
    /**
     * PRO: Save time schedules
     */
    private function saveTimeSchedules()
    {
        echo  json_encode( [
            'status'  => 'error',
            'message' => 'You do not have Buttonizer Pro.',
        ] ) ;
    }
    
    /**
     * Buttonizer settings
     */
    private function saveSettings()
    {
        register_setting( 'buttonizer', 'buttonizer_settings' );
        register_setting( 'buttonizer', 'buttonizer_has_changes' );
        $settings = get_option( 'buttonizer_settings' );
        $saveData = $_POST['data'];
        foreach ( $saveData as $key => $value ) {
            $settings[$key] = $value;
        }
        update_option( 'buttonizer_settings', $settings );
        echo  json_encode( [
            'status'  => 'success',
            'message' => 'Your changes are saved.',
        ] ) ;
    }
    
    /**
     * Reset Buttonizer
     */
    private function reset()
    {
        // Current settings
        delete_option( 'buttonizer_buttons' );
        delete_option( 'buttonizer_rules' );
        delete_option( 'buttonizer_schedules' );
        // Published
        delete_option( 'buttonizer_buttons_published' );
        delete_option( 'buttonizer_rules_published' );
        delete_option( 'buttonizer_schedules_published' );
        delete_option( 'buttonizer_has_changes' );
        ( new Update() )->run();
        echo  json_encode( [
            'status' => 'success',
        ] ) ;
    }
    
    /**
     * Uhm, not sure, but you just requested a migration to 2.0!
     */
    private function migrateToTwoPointO()
    {
        register_setting( 'buttonizer', 'buttonizer_buttons' );
        $buttons = get_option( 'buttonizer_buttons' );
        
        if ( !isset( $buttons['buttonorder'] ) ) {
            echo  json_encode( [
                'status'  => 'error',
                'message' => 'Nothing to convert!',
            ] ) ;
            exit;
        }
        
        ( new Update() )->run();
        echo  json_encode( [
            'status' => 'success',
        ] ) ;
    }
    
    /**
     * Uhm, not sure, but you just requested a migration to 2.0!
     */
    private function remigrateToTwoPointO()
    {
        register_setting( 'buttonizer', 'buttonizer_buttons_backup' );
        $buttons = get_option( 'buttonizer_buttons_backup' );
        
        if ( !isset( $buttons['buttonorder'] ) ) {
            echo  json_encode( [
                'status'  => 'error',
                'message' => 'Nothing to convert!',
            ] ) ;
            exit;
        }
        
        ( new Remigrate() )->run();
        echo  json_encode( [
            'status' => 'success',
        ] ) ;
    }

}