/*!
 * 
 * This file is part of the Buttonizer plugin that is downloadable through Wordpress.org, 
 * please do not redistribute this plugin or the files without any written permission of the author.
 * 
 * If you need support, contact us at support@buttonizer.pro or visit our community website 
 * https://community.buttonizer.pro/
 * 
 * Buttonizer is Freemium software. The free version (build) does not contain premium functionality.
 * 
 * (C) 2017-2020 Buttonizer
 * 
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports) {

/**
 * Exit intent
 */


/***/ }),

/***/ 14:
/***/ (function(module, exports) {

/**
 * Show on scroll
 */


/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/frontend/Group/Button/Button.js
class Button
{
    constructor(groupObject, data,)
    {
        this.group = groupObject;
        this.data = data;
        this.icon = data.icon.buttonIcon;

        this.show_mobile = data.device.show_mobile;
        this.show_desktop = data.device.show_desktop;
        this.style = '';
        this.button;

        this.init();

        // Creates random string for this button
        this.unique = 'buttonizer-button-' + Array.apply(0, Array(15)).map(() => (charset => {
                return charset.charAt(Math.floor(Math.random() * charset.length))
        })('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')).join('');
    }

    /**
     * Initialize Button
     */
    init()
    {
        // Nothing to do
    }

    build()
    {
        let button = document.createElement("a");
        button.className = 'buttonizer-button';
        button.setAttribute("data-buttonizer", this.unique);

        if(this.data.action.type === 'url') {
            button.href = this.data.action.action;

            // If open new tab = true, use target=_blank
            if(this.data.action.type === 'url' && this.data.action.action_new_tab === 'true'){
              button.target = '_blank';
            }
        }else {
            button.href = 'javascript:void(0)';
        }

        // If action is Elementor popup, add attribute
        if(this.data.action.type === "elementor_popup" || this.data.action.type === 'popup_maker') {
            button.href = "#" + this.data.action.action;
        }


        // Check if set to mobile or desktop only
        // Just show on mobile phones
        if(this.show_mobile === 'true' && this.show_desktop === 'false')
        {
            this.group.mobileButtonCount++;

            button.className += ' button-mobile-' + this.group.mobileButtonCount + ' button-hide-desktop';
        }

        // Just show on desktop
        else if(this.show_mobile === 'false' && this.show_desktop === 'true')
        {
            this.group.desktopButtonCount++;

            button.className += ' button-desktop-' + this.group.desktopButtonCount + ' button-hide-mobile';
        }

        // Do not show the button
        else if(this.show_mobile === 'false' && this.show_desktop === 'false')
        {
            button.className += ' button-hide-desktop button-hide-mobile'
        }

        // Show on all devices
        else {
            this.group.mobileButtonCount++;
            this.group.desktopButtonCount++;

            button.className += ' button-mobile-' + this.group.mobileButtonCount + ' button-desktop-' + this.group.desktopButtonCount;
        }

        // Check which setting Show label is on desktop, then add class
        if(this.data.label.show_label_desktop === 'hover') {
            button.className += ' show-label-desktop-hover';
        }
        else if(this.data.label.show_label_desktop === 'hide') {
            button.className += ' label-desktop-hidden';
        }

        // Check which setting Show label is on mobile, then add class
        if(this.data.label.show_label_mobile === 'hide') {
            button.className += ' label-mobile-hidden';
        }

        // If button action type is facebook messenger chat, add necessary elements
        if(this.data.action.type === 'messenger_chat') {
            this.addMessengerWindow();
        }



        // Add button label
        if(this.data.label.label.length > 0) 
        {
            let label = document.createElement("div");
            label.className = 'buttonizer-label';
            label.innerText = this.data.label.label;
            button.appendChild(label);
        }
        else if (this.data.label.label === "" && this.group.data.styling.menu.style === "rectangle") {
            let label = document.createElement("div");
            label.className = 'buttonizer-label';
            label.innerText = this.data.name + "'s label";
            button.appendChild(label);
        }

        let icon;

        (() => {


            icon = document.createElement("i");
            icon.className = typeof this.icon !== undefined ? this.icon : 'fa fa-user';

            button.appendChild(icon);
            
        })()

        button.addEventListener("click", (e) => this.onButtonClick(e));

        // Generate style for this button
        this.generateStyle();

        // if(this.data.action.type === 'page') {
        //     this.getPageUrl();
        // }

        this.button = button;

        return this.button;
    }

    /**
     *  
     * @param e
     */
    onButtonClick(e)
    {
        // Track event
        window.Buttonizer.googleAnalyticsEvent({
            type: 'button-click',
            groupName: this.group.data.name,
            buttonName: this.data.name
        });

        if(this.data.action.type === 'url')
        {
            return;
        }
        else if (this.data.action.type === 'phone')
        {
            document.location.href = `tel:${this.data.action.action}`;
            return;
        }
        else if (this.data.action.type === 'page')
        {
            return;
        }
        else if (this.data.action.type === 'mail')
        {
            let mail = `mailto:${this.data.action.action}`;



            document.location.href = mail;

            return;
        }
        else if (this.data.action.type === 'backtotop')
        {
            jQuery('html, body').animate({
                scrollTop: 0
            }, 750);
            return;
        }
        else if (this.data.action.type === 'gobackpage')
        {
            window.history.back();
            return;
        }
        // else if (this.data.action.type === 'woocommerce')
        // {
        //     let button = document.querySelector('button.single_add_to_cart_button');
        //
        //     if(button === null) {
        //         console.log('No Product found');
        //     }
        //     else {
        //         if(button.parentElement === document.querySelector('form.cart')) {
        //             button.click();
        //         }
        //         else {
        //             console.log('Not a product');
        //         }
        //     }
        //     return;
        // }
        else if (this.data.action.type === 'socialsharing')
        {
            if (this.data.action.action === "facebook"){
                window.open('http://www.facebook.com/sharer.php?u='+ document.location.href +'&t='+ document.title +'', 'popupFacebook', 'width=610, height=480, resizable=0, toolbar=0, menubar=0, status=0, location=0, scrollbars=0'); return false;
            }
            else if (this.data.action.action === "twitter"){
                window.open('https://twitter.com/intent/tweet?text='+ encodeURI(document.title) + ' Hey! Check out this link:' + '&url='+ document.location.href +'', 'popupTwitter', 'width=610, height=480, resizable=0, toolbar=0, menubar=0, status=0, location=0, scrollbars=0'); return false;
            }
            else if (this.data.action.action === "whatsapp"){
                window.open("https://api.whatsapp.com/send?text=" + encodeURI(document.title + " Hey! Check out this link:" + document.location.href));
            }
            else if (this.data.action.action === "linkedin"){
                window.open('http://www.linkedin.com/shareArticle?mini=true&url='+ document.location.href +'&title='+ encodeURI(document.title) +'&summary='+ encodeURI(document.title) +'', 'popupLinkedIn', 'width=610, height=480, resizable=0, toolbar=0, menubar=0, status=0, location=0, scrollbars=0'); return false;
            }
            else if (this.data.action.action === "pinterest"){
                window.open(`http://pinterest.com/pin/create/button/?url=${document.location.href}`); return false;
            }
            else if (this.data.action.action === "mail"){
                window.location.href = "mailto:?subject=" + document.title + "&body= Hey! Check out this link: " + document.location.href;
            }
            // New actions
            else if (this.data.action.action === "reddit"){
                let reddit = `https://www.reddit.com/submit?url=${encodeURI(`Hey! Check out this link: ` + document.location.href)}&title=${encodeURI(document.title)}`; 
                window.open(reddit)
                return false;
            }
            else if (this.data.action.action === "tumblr"){
                window.open(`https://www.tumblr.com/widgets/share/tool?shareSource=legacy&canonicalUrl=${encodeURI(document.location.href)}&posttype=link`); return false;
            }
            else if (this.data.action.action === "digg"){
                window.open(`http://digg.com/submit?url=${encodeURI(document.location.href)}`); return false;
            }
            else if (this.data.action.action === "weibo"){
                window.open(`http://service.weibo.com/share/share.php?url=${encodeURI(document.location.href)}&title=${encodeURI(document.title)}&pic=https://plus.google.com/_/favicon?domain=${document.location.origin}`); return false;
            }
            else if (this.data.action.action === "vk"){
                window.open(`https://vk.com/share.php?url=${encodeURI(document.location.href)}&title=${encodeURI(document.title)}&comment=Hey%20Check%20this%20out!`); return false;
            }
            else if (this.data.action.action === "ok"){
                window.open(`https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${encodeURI(document.location.href)}`); return false;
            }
            else if (this.data.action.action === "xing"){
                window.open(`https://www.xing.com/spi/shares/new?url=${encodeURI(document.location.href)}`); return false;
            }
            else if (this.data.action.action === "blogger"){
                window.open(`https://www.blogger.com/blog-this.g?u=${encodeURI(document.location.href)}&n=${encodeURI(document.title)}&t=Check%20this%20out!`); return false;
            }
            else if (this.data.action.action === "flipboard"){
                window.open(`https://share.flipboard.com/bookmarklet/popout?v=2&title=${encodeURI(document.title)}&url=${encodeURI(document.location.href)}`); return false;
            }
            else if (this.data.action.action === "sms"){
                window.open(`sms:?body=${encodeURI(document.title + 'Hey! Check out this link: ' + document.location.href)}`); return false;
            }
            return;
        }
        else if (this.data.action.type === 'whatsapp_pro' || this.data.action.type === 'whatsapp')
        {
            let whatsapp = `https://api.whatsapp.com/send?phone=${this.data.action.action}`;
            


            window.open(whatsapp)

            return;
        }

        /* Social Media actions */
        else if (this.data.action.type === 'skype') {
            document.location.href = `skype:${this.data.action.action}?chat`;
            return;
        }
        else if (this.data.action.type === 'messenger') {
            window.open(this.data.action.action);
            return;
        }
        else if (this.data.action.type === 'sms') {

            let sms = `sms:${this.data.action.action}`;



            document.location.href = sms;

            return;
        }
        else if (this.data.action.type === 'telegram') {
            window.open(`https://telegram.me/${this.data.action.action}`);
            return;
        }
        else if (this.data.action.type === 'facebook') {
            window.open(`https://www.facebook.com/${this.data.action.action}`);
            return;
        }
        else if (this.data.action.type === 'instagram') {
            window.open(`https://www.instagram.com/${this.data.action.action}`);
            return;
        }
        else if (this.data.action.type === 'line') {
            window.open(`https://line.me/R/ti/p/${this.data.action.action}`);
            return;
        }
        else if (this.data.action.type === 'twitter') {
            window.open(`https://twitter.com/${this.data.action.action}`);
            return;
        }
        else if (this.data.action.type === 'twitter_dm') {

            let dms = `https://twitter.com/messages/compose?recipient_id=${this.data.action.action}`;



            window.open(dms);

            return;
        }
        else if (this.data.action.type === 'snapchat') {
            window.open(`https://www.snapchat.com/add/${this.data.action.action}`);
            return;
        }
        else if (this.data.action.type === 'linkedin') {
            window.open(`https://www.linkedin.com/${this.data.action.action}`);
            return;
        }
        else if (this.data.action.type === 'viber') {
            document.location.href = `viber://chat?number=${this.data.action.action}`;
            return;
        }
        else if (this.data.action.type === 'vk') {
            window.open(`https://vk.me/${this.data.action.action}`);
            return;
        }
        else if (this.data.action.type === 'poptin') {
            document.location.href = this.data.action.action;
            return;
        }
        else if (this.data.action.type === 'popup_maker') {
            return;
        }
        else if (this.data.action.type === 'elementor_popup') {
            return;
        }
        else if (this.data.action.type === 'popups') {
            let remove = this.data.action.action;

            // is NaN
            if(isNaN(remove)) {
                remove = remove.replace(/\D/g, '');
            }

            // Show popup
            window.SPU.show(remove)
            return;
        }
        else if (this.data.action.type === 'waze') {
            document.location.href = this.data.action.action;
            return;
        }
        else if (this.data.action.type === 'wechat') {
            document.location.href = `weixin://dl/chat?${this.data.action.action}`;
            return;
        }
        else if (this.data.action.type === 'clipboard') {
            this.copyClipboard();
            return;
        }
        else if (this.data.action.type === 'print') {
            window.print()
            return;
        }
        else if (this.data.action.type === 'messenger_chat') {
            if(typeof window.Buttonizer.initializedFacebookChat !== "undefined" && document.querySelectorAll('.fb-customerchat').length > 0) {
                if (document.querySelector('.fb-customerchat').querySelector('iframe').style.maxHeight === '0px') {
                    FB.CustomerChat.showDialog();
                }
                else if (document.querySelector('.fb-customerchat').querySelector('iframe').style.maxHeight === '100%') {
                    FB.CustomerChat.hideDialog();
                }
            }else{
                if(window.Buttonizer.previewInitialized) {
                    window.Buttonizer.messageButtonizerAdminEditor("warning", "Facebook Messenger button is not found, it may be blocked or this domain is not allowed to load the Facebook widget.");
                }else {
                    alert("Sorry, we were unable to open Facebook Messenger! Check the console for more information.");
                }
            }

            return;
        }



        console.error("Buttonizer: Error! Unknown button action!");
    }

    generateStyle()
    {
        if(this.data.styling.label.size !== "12px" || this.data.styling.label.radius !== "3px")
        {
            let size;
            let radius;

            if(this.data.styling.label.size === "px") {
                size = this.group.data.styling.label.size === "px" ? '12px' : this.group.data.styling.label.size;
            }
            else {
                size = this.data.styling.label.size;
            }

            if(this.data.styling.label.radius === "px") {
                radius = this.group.data.styling.label.radius === "px" ? '3px' : this.group.data.styling.label.radius
            }
            else {
                radius = this.data.styling.label.radius;
            }

            this.group.stylesheet += `
                [data-buttonizer="${this.group.unique}"] [data-buttonizer="${this.unique}"] .buttonizer-label {
                    font-size: ${size};
                    border-radius: ${radius};
                    -moz-border-radius: ${radius};
                    -webkit-border-radius: ${radius};
                }
            `;
        }


        
        if(this.data.styling.button)
        {
            let extraStyle = '';


            if(this.data.styling.button.radius !== "%") {
                extraStyle += `
                border-radius: ${this.data.styling.button.radius};
                `;
            }
            else {
                extraStyle += `
                border-radius: 50%;
                `;  
            }

            this.group.stylesheet += `
            [data-buttonizer="${this.group.unique}"] [data-buttonizer="${this.unique}"] {
                background-color: ${this.data.styling.button.color};
                ${this.data.styling.button.color.substr(-2) === '00' ? 'box-shadow: none;': '' };
                ${extraStyle}
            }
            
            [data-buttonizer="${this.group.unique}"] [data-buttonizer="${this.unique}"]:hover {
                background-color: ${this.data.styling.button.interaction}
            }
            
            [data-buttonizer="${this.group.unique}"] [data-buttonizer="${this.unique}"] .buttonizer-label {
                background-color: ${this.data.styling.label.background};
                color: ${this.data.styling.label.text} !important;
            }`;
        }

        this.group.stylesheet += `
        [data-buttonizer="${this.group.unique}"] [data-buttonizer="${this.unique}"] i {
            color: ${this.data.styling.icon.color};
            font-size: ${this.data.styling.icon.size};

            transition: all 0.2s ease-in-out;
            -moz-transition: all 0.2s ease-in-out;
            -webkit-transition: all 0.2s ease-in-out;
            -o-transition: all 0.2s ease-in-out;
        }

        [data-buttonizer="${this.group.unique}"] [data-buttonizer="${this.unique}"]:hover i{
            color: ${this.data.styling.icon.interaction};

            transition: all 0.2s ease-in-out;
            -moz-transition: all 0.2s ease-in-out;
            -webkit-transition: all 0.2s ease-in-out;
            -o-transition: all 0.2s ease-in-out;
        }
        `;

        if(this.data.styling.button) {
            this.group.stylesheet += `
            [data-buttonizer="${this.group.unique}"].attention-animation-true.buttonizer-animation-pulse.buttonizer-desktop-has-1.buttonizer-mobile-has-1 [data-buttonizer="${this.unique}"]:before, 
            [data-buttonizer="${this.group.unique}"].attention-animation-true.buttonizer-animation-pulse.buttonizer-desktop-has-1.buttonizer-mobile-has-1 [data-buttonizer="${this.unique}"]:after {
                background-color: ${this.data.styling.button.color};
            }
        `;
        }
    }

    /**
     * Got a request to destroy this button
     * Try to remove as much references as possible
     */
    destroy()
    {
        this.button.remove(); // Remove object
        this.group.removeButton(this); // Remove button from group
        this.group = null; // Remove group reference
        this.data = null; // Remove data reference
        this.button = null; // Remove button reference

        delete this;
    }

    // Messenger
    addMessengerWindow() {
        if(typeof window.Buttonizer.initializedFacebookChat !== "undefined") {
            // Already done
            return;
        }

        window.Buttonizer.initializedFacebookChat = this.data.action.action === "" ? undefined : this.data.action.action;

        // Initialize first
        window.fbAsyncInit = function() {
            FB.init({
                xfbml: true,
                version: 'v3.3'
            });
        };

        // Add script
        let fbMessengerScript = document.createElement('script');
        fbMessengerScript.innerHTML = `
             (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));`

        document.head.appendChild(fbMessengerScript);

    }

    copyClipboard() {
        var dummy = document.createElement('input'),
        text = window.location.href;

        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);

        
        let label = document.createElement("div");
        label.className = 'buttonizer-label buttonizer-label-popup';
        label.innerText = 'Copied!';
        this.button.appendChild(label);

        setTimeout(() => {
            label.remove();
        }, 2000);
    }

    // /**
    //  * Get page data
    //  */
    // getPageUrl() {
    //     jQuery.ajax({
    //         url: buttonizer_ajax.ajaxurl + '?action=buttonizer_backend&item=WordpressOverview&get=' + 'pages',
    //         dataType: 'json',
    //         success: (data) => {
    //             jQuery.each(data.results, (i, val) => {
    //                 if (typeof val.name !== 'undefined' && val.id === parseInt(this.data.action.action)) {
    //                     this.button.href = val.url;

    //                     if(this.data.action.action_new_tab === 'true') {
    //                         this.button.target = "_blank";
    //                     }
    //                 }
    //             });
    //         },
    //         error: (err) => {
    //             console.log(err)
    //         }
    //     });
    // }
}
// CONCATENATED MODULE: ./src/js/frontend/Group/Group.js




class Group_Group
{
    constructor(data, index)
    {
        this.data = data;
        this.groupIndex = index;

        this.buttons = [];

        // Default parameters
        this.isBuild = false;
        this.opened = false;

        // Exit intent
        this.usesExitIntent = false;
        this.exitIntentExecuted = false;

        this.usesOnSroll = false;

        this.show_mobile = this.data.device.show_mobile;
        this.show_desktop = this.data.device.show_desktop;
        this.single_button_mode = this.data.single_button_mode;

        this.element = null;

        // Menu styling
        this.groupStyle = this.data.styling.menu.style;
        this.groupAnimation = this.data.styling.menu.animation;


        this.stylesheet = '';

        this.mobileButtonCount = 0;
        this.desktopButtonCount = 0;

        // Creates random string for this group
        this.unique = "buttonizer-" + Array.apply(0, Array(15)).map(function() {
            return (function(charset){
                return charset.charAt(Math.floor(Math.random() * charset.length))
            }('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'));
        }).join('');

        // Initialize group
        this.init();
    }

    /**
     * Initialize group
     */
    init()
    {
        // Create buttons
        for(let i = 0; i < this.data.buttons.length; i++)
        {
            let button = new Button(this, this.data.buttons[i]);

            this.buttons.push(button);
        }

        // Build group
        this.build();

        // Animate main button
        this.animate();


    }

    /**
     * Build group
     */
    build()
    {
        // No buttons
        if(this.isBuild === true || this.buttons.length === 0) {
            console.error("Buttonizer: Cannot create group: No buttons or already build");
            return;
        }

        // ${this.data.position.right <= 50 ? 'right' : 'left'}: ${this.data.position.right <= 50 ? this.data.position.right : (100 - this.data.position.right)}%;
        // ${this.data.position.bottom <= 50 ? 'bottom' : 'top'}: ${this.data.position.bottom <= 50 ? this.data.position.bottom : (100 - this.data.position.bottom)}%;

        // Quick fix for migration mistake
        if(this.groupStyle === 'fade-left-to-right') {
            this.groupStyle = 'faded';
        }

        let group = document.createElement("div");
        group.className = `buttonizer buttonizer-group buttonizer-style-${this.groupStyle} buttonizer-animation-${this.groupAnimation} ${this.data.position.bottom <= 50 ? 'bottom' : 'top'} ${this.data.position.right <= 50 ? 'right' : 'left'}`;
        group.setAttribute("data-buttonizer", this.unique);

        // Check if set to mobile or desktop only
        
        if(this.show_mobile === 'true' && this.show_desktop === 'false') {
            group.className += ' button-mobile-only'
        }
        else if(this.show_mobile === 'false' && this.show_desktop === 'true') {
            group.className += ' button-desktop-only'
            
        }
        else if(this.show_mobile === 'false' && this.show_desktop === 'false') {
            group.className += ' button-hide'
        }



        // Do we need to make a array of buttons?
        if(this.buttons.length > 1)
        {
            group.classList.add(`buttonizer-is-menu`);

            //check Always open
            if(this.data.openedByDefault === 'true'){

                if(!document.cookie.match('buttonizer_open=')) {
                    setTimeout(function(){
                        group.classList.add(`opened`);
                    }, 100);
    
                    this.opened = !this.opened;
                }
                else if (document.cookie.match('buttonizer_open=closed')) {
                    
                }
                else if (document.cookie.match('buttonizer_open=opened')) {
                    group.classList.add(`opened`);

                    this.opened = true;
                }
            }

            // When in preview modus and button was opened
            if(buttonizer_ajax.in_preview === "1" && document.cookie.match("buttonizer_preview_"+ this.groupIndex +"=opened")) {
                this.opened = true;
                group.classList.add('opened');
            }

            if(this.data.styling.menu.style === 'square' || this.data.styling.menu.style === 'rectangle') {
                group.classList.add('opened');
            }

            // Button list
            let buttonList = document.createElement("div");
            buttonList.className = 'buttonizer-button-list';

            // Create group button
            let mainButton = document.createElement("a");
            mainButton.href = 'javascript:void(0)';
            mainButton.className = 'buttonizer-button buttonizer-head';

            // Check which setting Show label is on (desktop), then add class... or not...
            if(this.data.label.show_label_desktop === 'hover') {
                mainButton.className += ' show-label-desktop-hover';
            }
            else if(this.data.label.show_label_desktop === 'hide') {
                mainButton.className += ' label-desktop-hidden';
            }

            // Check which setting Show label is on (mobile), then add class... or not...
            if(this.data.label.show_label_mobile === 'hide') {
                mainButton.className += ' label-mobile-hidden';
            }

            // If label is empty, don't add label.
            let mainButtonLabel =`<div class="buttonizer-label">${this.data.label.groupLabel}</div>`;            
            let mainButtonIcon;


                mainButtonIcon = `<i class="${typeof this.data.icon.groupIcon !== undefined ? this.data.icon.groupIcon : 'fa fa-plus'}"></i>`;


            if(this.data.label.groupLabel.length <= 0){
                mainButton.innerHTML = mainButtonIcon;
            }
            else{
                mainButton.innerHTML = mainButtonLabel + mainButtonIcon;
            }

            mainButton.addEventListener("click", (e) => this.toggleMenu(e));

            group.appendChild(buttonList);

            group.appendChild(mainButton);

            // Add all buttons to page
            for(let i = 0; i < this.buttons.length; i++)
            {
                // check if a buttons is using messenger, add messenger widget.
                if(this.buttons[i].data.action.type === 'messenger_chat') {
                    let messengerDiv = document.createElement('div');            
                    messengerDiv.className = `fb-customerchat buttonizer-facebook-messenger-overwrite-${this.unique}`;
                    messengerDiv.setAttribute('page-id', `${this.buttons[i].data.action.action}`);
                    messengerDiv.setAttribute('greeting_dialog_display', `hide`);
                    
                    group.appendChild(messengerDiv);
                }
                buttonList.appendChild(this.buttons[i].build()); // Build button
            }
        }else{
            group.appendChild(this.buttons[0].build()); // Build button 
            console.log(this.buttons)

            // check if a button is using messenger, add messenger widget.
            if(this.buttons[0].data.action.type === 'messenger_chat') {
                let messengerDiv = document.createElement('div');            
                messengerDiv.className = `fb-customerchat buttonizer-facebook-messenger-overwrite-${this.unique}`;
                messengerDiv.setAttribute('page-id', `${this.buttons[0].data.action.action}`);
                messengerDiv.setAttribute('greeting_dialog_display', `hide`);
                
                group.appendChild(messengerDiv);
            }
        }

        group.className += ` buttonizer-desktop-has-${this.desktopButtonCount} buttonizer-mobile-has-${this.mobileButtonCount}`;

        // Write group
        this.element = group; // Register element
        document.body.appendChild(this.element); // Write group to body



        this.isBuild = true;
        this.writeCSS();

        if(this.data.styling.menu.style === "rectangle") {
            this.maxLabelWidth(group, 'rectangle'); 
        }
    }

    /**
     * Toggle
     * @param e
     */
    toggleMenu(e)
    {
        e.preventDefault();

        // Track event
        window.Buttonizer.googleAnalyticsEvent({
            type: 'group-open-close',
            name: this.data.name,
            interaction: (this.opened ? 'close' : 'open')
        });

        // Update
        if(this.opened)
        {
            this.element.classList.remove('opened');
        }else{
            this.element.classList.add('opened');
        }

        // Update opened to opposite
        this.opened = !this.opened;

        // Set cookie closed-opened
        if(this.data.openedByDefault === 'true' ) {
            if(!document.cookie.match('buttonizer_open=')) {
                document.cookie = "buttonizer_open=closed";
            }
            else if (document.cookie.match('buttonizer_open=closed')) {
                document.cookie = "buttonizer_open=opened";
            }
            else if (document.cookie.match('buttonizer_open=opened')) {
                document.cookie = "buttonizer_open=closed";
            }
        }

        // Toggle preview status
        if(buttonizer_ajax.in_preview === '1') {
            this.togglePreviewOpened();
        }
    }

    /**
     * Toggle preview opened
     */
    togglePreviewOpened() {
        if(this.opened) {
            document.cookie = "buttonizer_preview_"+ this.groupIndex +"=opened";
        }else {
            document.cookie = "buttonizer_preview_"+ this.groupIndex +"=closed";
        }
    }

    writeCSS()
    {
        let stylesheet = document.createElement("style");
        stylesheet.id = this.unique;

        let css = `            
            [data-buttonizer="${this.unique}"] {
                ${this.data.position.right <= 50 ? 'right' : 'left'}: ${this.data.position.right <= 50 ? this.data.position.right : (100 - this.data.position.right)}%;
                ${this.data.position.bottom <= 50 ? 'bottom' : 'top'}: ${this.data.position.bottom <= 50 ? this.data.position.bottom : (100 - this.data.position.bottom)}%;
            }
            
            [data-buttonizer="${this.unique}"] .buttonizer-button {
                background-color: ${this.data.styling.button.color};
                color: ${this.data.styling.icon.color};
                border-radius: ${this.data.styling.button.radius};
                ${this.data.styling.button.color.replace(/\D/g, '').substr(-1) === '0' ? 'box-shadow: none;': '' }
            }
            
            [data-buttonizer="${this.unique}"] .buttonizer-button:hover {
                background-color: ${this.data.styling.button.interaction};
                color: ${this.data.styling.icon.color}
            }
            
            [data-buttonizer="${this.unique}"] .buttonizer-button .buttonizer-label {
                background-color: ${this.data.styling.label.background};
                color: ${this.data.styling.label.text};
                font-size: ${this.data.styling.label.size};
                border-radius: ${this.data.styling.label.radius};
            }

            [data-buttonizer="${this.unique}"] .buttonizer-button i {
                color: ${this.data.styling.icon.color};
                font-size: ${this.data.styling.icon.size};
            }

            [data-buttonizer="${this.unique}"] .buttonizer-button:hover i {
                color: ${this.data.styling.icon.interaction};
            }
            
            [data-buttonizer="${this.unique}"].attention-animation-true.buttonizer-animation-pulse .buttonizer-head:before, 
            [data-buttonizer="${this.unique}"].attention-animation-true.buttonizer-animation-pulse .buttonizer-head:after {
                background-color: ${this.data.styling.button.color};
            }
        `
        
        if(this.data.buttons.length === 1 && this.groupAnimation === "pulse") {
            css += `
                [data-buttonizer="${this.unique}"].attention-animation-true.buttonizer-animation-pulse > .buttonizer-button.button-desktop-1:before, 
                [data-buttonizer="${this.unique}"].attention-animation-true.buttonizer-animation-pulse > .buttonizer-button.button-desktop-1:after {
                    background-color: ${this.data.styling.button.color};
                }

                [data-buttonizer="${this.unique}"].attention-animation-true.buttonizer-animation-pulse > .buttonizer-button.button-mobile-1:before, 
                [data-buttonizer="${this.unique}"].attention-animation-true.buttonizer-animation-pulse > .buttonizer-button.button-mobile-1:after {
                    background-color: ${this.data.styling.button.color};
                }
            `
        }

        if(typeof window.Buttonizer.initializedFacebookChat !== "undefined"){
            css += `
                .fb_dialog {
                    display: none !important;
                }

                .buttonizer-facebook-messenger-overwrite-${this.unique} span iframe {
                    ${this.data.position.right <= 50 ? 'right' : 'left'}: ${this.data.position.right <= 50 ? +this.data.position.right - 1 : ((100 - this.data.position.right) - 1)}% !important;
                    ${this.data.position.bottom <= 50 ? 'bottom' : 'top'}: ${this.data.position.bottom <= 50 ? +this.data.position.bottom + 4 : ((100 - this.data.position.bottom) + 6)}% !important;
                }

                @media screen and (max-width: 769px){
                    .buttonizer-facebook-messenger-overwrite-${this.unique} span iframe {
                        ${this.data.position.right <= 50 ? 'right' : 'left'}: ${this.data.position.right <= 50 ? +this.data.position.right - 5 : ((100 - this.data.position.right) - 1)}% !important;
                        ${this.data.position.bottom <= 50 ? 'bottom' : 'top'}: ${this.data.position.bottom <= 50 ? +this.data.position.bottom + 4 : ((100 - this.data.position.bottom) + 7)}% !important;
    
                    }
                }

                .buttonizer-facebook-messenger-overwrite-${this.unique} span .fb_customer_chat_bounce_in_v2 {
                    animation-duration: 300ms;
                    animation-name: fb_bounce_in_v3 !important;
                    transition-timing-function: ease-in-out;   
                }

                .buttonizer-facebook-messenger-overwrite-${this.unique} span .fb_customer_chat_bounce_out_v2 {
                    max-height: 0px !important;
                }

                @keyframes fb_bounce_in_v3 {
                    0% {
                        opacity: 0;
                        transform: scale(0, 0);
                        transform-origin: bottom;
                    }
                    50% {
                        transform: scale(1.03, 1.03);
                        transform-origin: bottom;
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1, 1);
                        transform-origin: bottom;
                    }
                }
            `
        }



        css += this.stylesheet;

        stylesheet.innerHTML = css;

        document.head.appendChild(stylesheet);
    }

    /**
     * Animate main button
     */
    animate()
    {
        if(this.element === null) return;

        if(this.groupAnimation !== 'none') {
            if(!this.element.classList.contains('opened')) {
                this.element.classList.add('attention-animation-true');

                setTimeout(() => {
                    if(this.element === null) return;

                    this.element.classList.remove('attention-animation-true');
                }, 2000);
            }

            setTimeout(() => this.animate(), 10000);
        }
    }

    /**
     * Set show after timeout
     */


    /**
     * Set show on scroll
     */


    /**
     * Got a request to destroy this group
     * Try to remove as much references as possible
     */
    destroy()
    {
        // Destroy button objects
        for(let i = 0; i < this.buttons.length; i++)
        {
            this.buttons[i].destroy();
        }

        // Remove group
        this.element.remove();
        this.element = null;

        // Remove stylesheet
        document.getElementById(this.unique).remove();

        // Goodbye cruel world
        window.Buttonizer.destroyGroup(this);



        delete this;
    }

    /**
     * Remove button from array
     *
     * @param button
     */
    removeButton(button)
    {
        let buttonIndex = this.buttons.indexOf(button);

        if(buttonIndex >= 0)
        {
            this.buttons.splice(buttonIndex, 1);
        }
    }

    maxLabelWidth(group, style) {
        // Calculate width
        let arr = [];
        for(let labels of group.querySelectorAll('.buttonizer-label')) {
            arr.push(labels.offsetWidth)
        }
        let max = Math.max(...arr);

        // Add style to stylesheet
        let css  = `
                [data-buttonizer="${this.unique}"].buttonizer-style-${style} .buttonizer-button .buttonizer-label {
                        min-width: ${max}px;
                        max-width: ${max}px;
                        overflow: hidden;
                        text-align: ${this.data.position.right <= 50 ? 'right' : 'left'};
                }
            `;

        document.getElementById(this.unique).innerHTML += css;
    }

    /**
     * Exit intent
     */

}
// EXTERNAL MODULE: ./src/sass/frontend/frontend.scss
var frontend = __webpack_require__(36);

// EXTERNAL MODULE: ./src/js/frontend/Utils/ExitIntent.js
var ExitIntent = __webpack_require__(13);

// EXTERNAL MODULE: ./src/js/frontend/Utils/OnScroll.js
var OnScroll = __webpack_require__(14);

// CONCATENATED MODULE: ./src/js/frontend/Buttonizer.js


// Import Buttonizer Dashboard style




class Buttonizer_Buttonizer
{
    constructor(){
        this.getSettings();
        this.firstTimeInitialize = true;
        this.write = HTMLElement;
        this.previewInitialized = false;
        this.settingsLoading = false;
        this.isInPreviewContainer = false;

        this.premium = false;
        this.groups = [];
        this.exitIntent = null;
        this.onscroll = null;

        this.settings = {
            // Google analytics
            ga: null
        };

        if(buttonizer_ajax.in_preview) {
            let stylesheet = document.createElement("style");
            stylesheet.innerHTML = 'html { margin-top: 0 !important; }';
            window.document.head.appendChild(stylesheet);
        }
    }

    /**
     * Get Buttonizer
     */
    getSettings() {
        // Add current url
        buttonizer_ajax.current.url = document.location.href;
        this.settingsLoading = true;

        jQuery.ajax({
            url: buttonizer_ajax.ajaxurl + '?action=buttonizer',
            dataType: 'json',
            data: {
                'qpu': (buttonizer_ajax.is_admin ? Date.now() : buttonizer_ajax.cache),
                'preview': (buttonizer_ajax.in_preview ? 1 : 0),
                'data': buttonizer_ajax.current
            },
            method: 'get',
            success: (data) => {
                if(data.status === "success")
                {
                    this.init(data);
                }else{
                    console.error('Buttonizer: Something went wrong! Buttonizer not loaded', data);
                }
            },
            error: (e) => {
                this.settingsLoading = false;
                console.error("Buttonizer: OH NO! ERROR: '" + e.statusText + "'. That's all we know... Please check your PHP logs or contact Buttonizer support if you need help.");
                console.error("Buttonizer: Visit our community on https://community.buttonizer.pro/");
            }
        });
    }

    init(data)
    {
        // Listen to admin
        if(buttonizer_ajax.in_preview && !this.previewInitialized) {
            this.isInPreviewContainer = true;
            this.listenToPreview();
        }



        // No buttons
        if(data.result.length > 0)
        {
            // First visit
            if(this.getCookie("buttonizer-first-visit") === '')
            {
                document.cookie = "buttonizer-first-visit=" + new Date().getTime();
            }

            // Loop through the group(s)
            (() => {


                this.groups.push(new Group_Group(data.result[0], 0));
            })()
            

            if(this.firstTimeInitialize) {
                this.buttonizerInitialized();
            }
        }else{
            console.log("Buttonizer: No groups/buttons to display");
        }

        // Send message to admin panel
        if(buttonizer_ajax.in_preview && this.previewInitialized) {
            this.messageButtonizerAdminEditor('(re)loaded', true);
            this.messageButtonizerAdminEditor('warning', data.warning);
        }

        this.settingsLoading = false;
    }

    /**
     * Feature to message the admin buttonizer editor
     *
     * @param message
     */
    messageButtonizerAdminEditor(type, message)
    {
        try {
            window.parent.postMessage({
                eventType: 'buttonizer',
                messageType: type,
                message: message
            }, document.location.origin);
        } catch (e) {
            console.log("Buttonizer tried to warn you in the front-end editor. But the message didn't came through. Well. Doesn't matter, it's just an extra function. It's nice to have.");
            console.log(e);
        }
    }

    /**
     * Feature to receive messages from the admin buttonizer editor
     */
    listenToPreview()
    {
        this.previewInitialized = true;

        window.addEventListener("message", (event) => {
            if(!event.isTrusted || typeof event.data.eventType === "undefined" || event.data.eventType !== "buttonizer") return;

            console.log('[Buttonizer] Buttonizer preview - Data received:', event.data.messageType)

            if(buttonizer_ajax.in_preview && event.data.messageType === 'preview-reload') {
                this.reload();
            }
        }, false);
    }

    /**
     * Reload Buttonizer
     */
    reload()
    {
        if(this.settingsLoading) {
            console.log("[Buttonizer] Request too quick, first finish the previous one");
            setTimeout(() => this.reload(), 100);
            return;
        }

        console.log("[Buttonizer] Reloading Buttonizer");
        this.settingsLoading = true;

        for(let i = 0; i < this.groups.length; i++)
        {
            this.groups[i].destroy();
        }

        // Todo: Try to find a better fix for this, why doesn't the group remove itself sometimes?
        let findButtonizer = document.querySelectorAll('.buttonizer-group');
        for(let b = 0; b < findButtonizer.length; b++)
        {
            findButtonizer[b].remove();
        }

        setTimeout(() => {
            this.groups = [];
            this.getSettings();
        }, 50);
    }

    /**
     * Google analytics event
     * 
     * @param object
     */
    googleAnalyticsEvent(object)
    {
        if(!buttonizer_ajax.enable_ga_clicks) return;

        if (typeof ga === 'function' || typeof gtag === "function" || (typeof window.dataLayer === 'object' && typeof window.dataLayer.push === "function"))
        {
            let actionData = {};

            // Opening or closing a group
            if(object.type === 'group-open-close')
            {
                actionData.groupName = object.name;
                actionData.action = object.interaction;
            }
            else if(object.type === "button-click")
            {
                actionData.groupName = object.groupName;
                actionData.action = "Clicked button: " + object.buttonName;
            }

            // Gtag support
            if("gtag" in window && typeof gtag === "function")
            {
                // Work with Google Tag Manager
                gtag('event', 'Buttonizer', {
                    event_category: 'Buttonizer group: ' + actionData.groupName,
                    event_action: actionData.action,
                    event_label: document.title,
                    page_url: document.location.href
                });
            }else if ("ga" in window) {
                try {
                    // Fallback to tracker
                    let tracker = ga.getAll()[0];
                    if (tracker) {
                        tracker.send("event", 'Buttonizer group: ' + actionData.groupName, actionData.action, document.title);
                    } else {
                        throw "No tracker found";
                    }
                } catch (e) {
                    console.error("Buttonizer Google Analytics: Last try to push to Google Analytics.");
                    console.error("What does this mean?", "https://community.buttonizer.pro/knowledgebase/17");

                    // Fallback to old Google Analytics
                    ga('send', 'event', {
                        eventCategory: 'Buttonizer group: ' + actionData.groupName,
                        eventAction: actionData.action,
                        eventLabel: document.title
                    });

                }
            }else{
                console.error("Buttonizer Google Analytics: Unable to push data to Google Analytics");
                console.error("What does this mean?", "https://community.buttonizer.pro/knowledgebase/17");
            }
        }
    }

    getCookie(cname)
    {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }

    /**
     * Remove button from array
     *
     * @param group
     */
    destroyGroup(group)
    {
        let groupIndex = this.groups.indexOf(group);

        if(groupIndex >= 0)
        {
            this.groups.splice(groupIndex, 1);
        }
    }

    hasPremium(){
        return this.premium;
    }

    /**
     * Buttonizer is initialized, call function
     */
    buttonizerInitialized() {
        // Execute only once
        if(!this.firstTimeInitialize) {
            return;
        }

        // Call function
        if(typeof window.buttonizerInitialized === "function") {
            window.buttonizerInitialized();
        }

        this.firstTimeInitialize = false;
    }

    /**
     * Is in preview?
     *
     * @returns {boolean}
     */
    inPreview() {
        return this.isInPreviewContainer;
    }

    /**
     * Start exit intent and on scroll
     */

}

window.Buttonizer = new Buttonizer_Buttonizer();


/***/ }),

/***/ 36:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });