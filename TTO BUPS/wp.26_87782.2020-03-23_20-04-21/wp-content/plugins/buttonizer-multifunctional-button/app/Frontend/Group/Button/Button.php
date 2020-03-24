<?php

namespace Buttonizer\Frontend\Group\Button;

use  Buttonizer\Frontend\Buttonizer ;
class Button
{
    private  $groupObject ;
    private  $data ;
    //    private $styling = StylingObject;
    /**
     * Buttons constructor.
     * @param $groupObject
     * @param $data
     */
    public function __construct( $groupObject, $data )
    {
        $this->groupObject = $groupObject;
        $this->data = $data;
    }
    
    /**
     * Return option data
     * @param $key
     * @return string
     */
    private function getOption( $key )
    {
        return ( isset( $this->data[$key] ) ? $this->data[$key] : '' );
    }
    
    /**
     * Return option data as boolean
     * @param $key
     * @return string
     */
    private function getBoolean( $key )
    {
        return ( isset( $this->data[$key] ) && $this->data[$key] == 'true' ? true : false );
    }
    
    /**
     * New Return option data as boolean, so other options don't get affected
     * @param $key
     * @return string
     */
    public function getBooleanDeskMob( $key )
    {
        return ( isset( $this->data[$key] ) && $this->data[$key] == 'true' ? true : false );
    }
    
    /**
     * @param $key
     * @param $value
     * @return bool
     */
    public function setOption( $key, $value )
    {
        $this->data[$key] = $value;
        return true;
    }
    
    /**
     * Return bool value
     *
     * @param $key
     * @return string
     */
    private function getBoolValue( $key )
    {
        return ( isset( $this->data[$key] ) ? $this->data[$key] == 'true' : true );
    }
    
    /**
     * Show buttons, based on their settings
     * @return bool
     */
    public function showButton()
    {
        // Button not in use
        
        if ( !$this->getBooleanDeskMob( "show_desktop" ) && !$this->getBooleanDeskMob( "show_mobile" ) ) {
            Buttonizer::addEvent( "The button <b>" . $this->getOption( 'name', 'unnamed' ) . "</b> is hidden on all devices" );
            return false;
        }
        
        return true;
    }
    
    /**
     * @return array
     */
    public function generate()
    {
        $data = [
            'name'   => ( isset( $this->data['name'] ) ? $this->data['name'] : 'Unnamed button' ),
            'action' => [
            'type'           => ( isset( $this->data['type'] ) ? $this->data['type'] : 'url' ),
            'action'         => ( isset( $this->data['action'] ) ? $this->data['action'] : '/' ),
            'action_new_tab' => ( isset( $this->data['action_new_tab'] ) ? $this->data['action_new_tab'] : "false" ),
        ],
            'icon'   => [
            'buttonIcon' => ( isset( $this->data['icon'] ) ? $this->data['icon'] : 'fa fa-user' ),
        ],
            'device' => [
            'show_mobile'  => ( isset( $this->data['show_mobile'] ) ? $this->data['show_mobile'] : 'true' ),
            'show_desktop' => ( isset( $this->data['show_desktop'] ) ? $this->data['show_desktop'] : 'true' ),
        ],
            'label'  => [
            'label'              => ( isset( $this->data['label'] ) ? $this->data['label'] : '' ),
            'show_label_desktop' => ( isset( $this->data['show_label_desktop'] ) ? $this->data['show_label_desktop'] : 'always' ),
            'show_label_mobile'  => ( isset( $this->data['show_label_mobile'] ) ? $this->data['show_label_mobile'] : 'always' ),
        ],
        ];
        $data['styling'] = [
            'label' => [
            'text'       => ( isset( $this->data['label_color'] ) ? $this->data['label_color'] : '' ),
            'background' => ( isset( $this->data['label_background_color'] ) ? $this->data['label_background_color'] : '' ),
            'size'       => (( isset( $this->data['label_font_size'] ) ? $this->data['label_font_size'] : '12' )) . 'px',
            'radius'     => (( isset( $this->data['label_border_radius'] ) ? $this->data['label_border_radius'] : '3' )) . 'px',
        ],
            'icon'  => [
            'size'        => (( isset( $this->data['icon_size'] ) && is_numeric( $this->data['icon_size'] ) && $this->data['icon_size'] >= 0 ? $this->data['icon_size'] : '16' )) . "px",
            'color'       => ( isset( $this->data['icon_color'] ) ? $this->data['icon_color'] : '' ),
            'interaction' => ( isset( $this->data['icon_color_interaction'] ) ? $this->data['icon_color_interaction'] : '' ),
        ],
        ];
        
        if ( isset( $this->data['use_main_button_style'] ) && $this->data['use_main_button_style'] == 'false' ) {
            $data['styling']['button'] = [
                'color'       => ( isset( $this->data['background_color'] ) ? $this->data['background_color'] : '' ),
                'interaction' => ( isset( $this->data['background_color_interaction'] ) ? $this->data['background_color_interaction'] : '' ),
                'radius'      => (( isset( $this->data['border_radius'] ) ? $this->data['border_radius'] : '50' )) . "%",
            ];
            $data['styling']['border'] = [
                'width'       => ( isset( $this->data['border_size'] ) ? $this->data['border_size'] : 0 ),
                'color'       => ( isset( $this->data['border_color'] ) ? $this->data['border_color'] : '' ),
                'interaction' => ( isset( $this->data['border_color_interaction'] ) ? $this->data['border_color_interaction'] : '' ),
            ];
        }
        
        return $data;
    }

}