<?php

namespace Buttonizer\Frontend\Group;

use  Buttonizer\Frontend\Group\Button\Button ;
use  Buttonizer\Frontend\Buttonizer ;
class Group
{
    private  $buttons = array() ;
    private  $data ;
    private  $countMobile = 0 ;
    private  $countDesktop = 0 ;
    /**
     * Buttons constructor.
     * @param $data
     */
    public function __construct( $data )
    {
        $this->data = $data;
    }
    
    /**
     * Return option data
     * @param $key
     * @param string $default
     * @return string
     */
    private function getOption( $key, $default = '' )
    {
        return ( isset( $this->data[$key] ) ? $this->data[$key] : $default );
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
     * Add button
     *
     * @param Button $button
     */
    public function add( Button $button )
    {
        // Show button (on page OR only when opened
        
        if ( $button->showButton() ) {
            if ( ($button->getBooleanDeskMob( 'show_desktop' ) || $button->getBooleanDeskMob( 'show_mobile' )) && ($this->countDesktop >= 7 || $this->countMobile >= 7) ) {
                // Is desktop, but no place on desktop? Force hide on desktop
                
                if ( $button->getBooleanDeskMob( 'show_desktop' ) && $this->countDesktop >= 7 && $this->countMobile < 7 && $button->getBooleanDeskMob( 'show_mobile' ) ) {
                    $button->setOption( "show_desktop", false );
                } else {
                    
                    if ( $button->getBooleanDeskMob( 'show_mobile' ) && $this->countMobile >= 7 && $this->countDesktop < 7 && $button->getBooleanDeskMob( 'show_desktop' ) ) {
                        $button->setOption( "show_mobile", false );
                    } else {
                        return;
                    }
                
                }
            
            }
            // Add mobile
            if ( $button->getBooleanDeskMob( 'show_mobile' ) ) {
                $this->countMobile++;
            }
            // Add desktop
            if ( $button->getBooleanDeskMob( 'show_desktop' ) ) {
                $this->countDesktop++;
            }
            $this->buttons[] = $button->generate();
        }
    
    }
    
    /**
     * Show group?
     *
     * @return bool
     */
    public function show()
    {
        // Hide on all devices
        
        if ( !$this->getBoolean( 'show_desktop' ) && !$this->getBoolean( 'show_mobile' ) && !$this->getBoolean( 'single_button_mode' ) ) {
            Buttonizer::addEvent( "The group <b>" . $this->getOption( 'name', 'unnamed' ) . "</b> is hidden on all devices" );
            return;
        }
        
        return ( count( $this->buttons ) > 0 ? true : false );
    }
    
    /**
     * Output
     */
    public function fix()
    {
        $data = [
            'name'            => ( isset( $this->data['name'] ) ? $this->data['name'] : "Undefined" ),
            'position'        => [
            'top'    => 0,
            'left'   => 0,
            'bottom' => ( isset( $this->data['vertical'] ) ? $this->data['vertical'] : 0 ),
            'right'  => ( isset( $this->data['horizontal'] ) ? $this->data['horizontal'] : 0 ),
        ],
            'styling'         => [
            'menu'   => [
            'style'     => ( isset( $this->data['menu_style'] ) ? $this->data['menu_style'] : 'default' ),
            'animation' => ( isset( $this->data['menu_animation'] ) ? $this->data['menu_animation'] : 'none' ),
        ],
            'button' => [
            'color'       => ( isset( $this->data['background_color'] ) ? $this->data['background_color'] : '' ),
            'interaction' => ( isset( $this->data['background_color_interaction'] ) ? $this->data['background_color_interaction'] : '' ),
            'radius'      => (( isset( $this->data['border_radius'] ) ? $this->data['border_radius'] : 50 )) . "%",
        ],
            'border' => [
            'width'       => ( isset( $this->data['border_size'] ) ? $this->data['border_size'] : 0 ),
            'color'       => ( isset( $this->data['border_color'] ) ? $this->data['border_color'] : '' ),
            'interaction' => ( isset( $this->data['border_color_interaction'] ) ? $this->data['border_color_interaction'] : '' ),
        ],
            'icon'   => [
            'color'       => ( isset( $this->data['icon_color'] ) ? $this->data['icon_color'] : '' ),
            'interaction' => ( isset( $this->data['icon_color_interaction'] ) ? $this->data['icon_color_interaction'] : '' ),
            'size'        => (( isset( $this->data['icon_size'] ) && is_numeric( $this->data['icon_size'] ) && $this->data['icon_size'] >= 0 ? $this->data['icon_size'] : 28 )) . "px",
        ],
            'label'  => [
            'text'       => ( isset( $this->data['label_color'] ) ? $this->data['label_color'] : '' ),
            'background' => ( isset( $this->data['label_background_color'] ) ? $this->data['label_background_color'] : '' ),
            'size'       => (( isset( $this->data['label_font_size'] ) ? $this->data['label_font_size'] : 12 )) . "px",
            'radius'     => (( isset( $this->data['label_border_radius'] ) ? $this->data['label_border_radius'] : 3 )) . "px",
        ],
        ],
            'icon'            => [
            'groupIcon' => ( isset( $this->data['icon'] ) ? $this->data['icon'] : 'fa fa-plus' ),
        ],
            'label'           => [
            'groupLabel'         => ( isset( $this->data['label'] ) ? $this->data['label'] : '' ),
            'show_label_desktop' => ( isset( $this->data['show_label_desktop'] ) ? $this->data['show_label_desktop'] : 'always' ),
            'show_label_mobile'  => ( isset( $this->data['show_label_mobile'] ) ? $this->data['show_label_mobile'] : 'always' ),
        ],
            'device'          => [
            'show_mobile'  => ( isset( $this->data['show_mobile'] ) ? $this->data['show_mobile'] : 'true' ),
            'show_desktop' => ( isset( $this->data['show_desktop'] ) ? $this->data['show_desktop'] : 'true' ),
        ],
            'openedByDefault' => ( isset( $this->data['start_opened'] ) ? $this->data['start_opened'] : 'false' ),
            'buttons'         => $this->buttons,
        ];
        return $data;
    }

}