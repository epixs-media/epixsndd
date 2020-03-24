jQuery(document).ready( function(){   
    /**
	 * BuzzNews homepage slider
     * 
	 * @since 1.0.0
     * @description woocommerce products tab section display options
	 */
    jQuery('.buzznews-main-slider').show().slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        nextArrow: '<span class="buzznews-main-slider-arrow buzznews-next"><span class="carousel-control-next-icon" aria-hidden="true"></span></span>',
        prevArrow: '<span class="buzznews-main-slider-arrow buzznews-prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span></span>',
        
        responsive: [
            {
                breakpoint: 991,
                settings: {
                dots: false
                }
            },
        ]
    });

    
      /**
	 * BuzzNews category postlist slider
     * 
	 * @since 1.0.0
     * @description woocommerce products tab section display options
	 */
    jQuery('.buzznews-fullslider-slider').show().slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        nextArrow: '<span class="buzznews-main-slider-arrow buzznews-next"><i class="fa fa-chevron-right"></i></span>',
        prevArrow: '<span class="buzznews-main-slider-arrow buzznews-prev"><i class="fa fa-chevron-left"></i></span>',
        responsive: [
            {
                breakpoint: 1834,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
        
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });




     /**
	 * BuzzNews homepage vertical slider
     * 
	 * @since 1.0.0
     * @description woocommerce products tab section display options
	 */
    jQuery('.buzznews-vertical').show().slick({
        autoplay: true,
        vertical: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        verticalSwiping: true,
        autoplaySpeed: 10000,
        infinite: true,
        nextArrow: '<span class="buzznews-custom-sec buzznews-down"><i class="fa fa-chevron-down"></i></span>',
        prevArrow: '<span class="buzznews-custom-sec buzznews-up"><i class="fa fa-chevron-up"></i></span>',
        responsive: [
        {
                breakpoint: 1834,
                settings: {
                    slidesToShow: 7
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:3
                }
            },
        
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });


    /**
	 * Match height js
     * 
	 * @since 1.0.0
     * @description woocommerce products tab section display options
	 */
    jQuery('.middle-bottom-wrapper').matchHeight();
    jQuery('.buzznews-fullslider-single-section').matchHeight();

    
    /**
	 * Sdiebar Sticky section
     * 
	 * @since 1.0.0
     * @description sticky the sidebar section
	 */
    jQuery('.content-area, .buzznews-sidebar-sticky').theiaStickySidebar();
    



    /**
	 * Sticky Menu Options
     * 
	 * @since 1.0.0
     * @description sticky the menu section
	 */
    if( BUZZNEWS.sticky_enable == 1){
        var yourNavigation = jQuery(".sb-navmenu");
        stickyDiv = "sticky";
        yourHeader = jQuery('.sb-header-logo').height();

        jQuery(window).scroll(function() {
            if( jQuery(this).scrollTop() > yourHeader ) {
                yourNavigation.addClass(stickyDiv);
            } else {
                yourNavigation.removeClass(stickyDiv);
            }
        });
    }


    /**
	 * Buzznews ajax post
     * 
	 * @since 1.0.0
     * @description click then ajax call
	 */
    var newsIndex = []; 
    for(var i=0, len=localStorage.length; i<len; i++){
        var key = localStorage.key(i);
        if(key == null) continue;
        var value = localStorage[key];
        if(key.search('news_section') >= 0){
            newsIndex.push(key);
        }
    }
    for(var i = 0 ; i <= newsIndex.length; i ++){
        localStorage.removeItem(newsIndex[i]);
    }

    //remove the class
    jQuery('.buzznews-postlist-ajax.arrow-left').removeClass("buzznews-postlist-ajax");
    
    var loaded = true;
    jQuery('.widget').on('click', 'span.buzznews-postlist-ajax', function(e) {
        
        e.preventDefault();
        if( loaded === false ) return ;
        loaded = false;
        var catid = jQuery( this ).attr( 'catid' );
        var postcount = jQuery( this ).attr('postcount');
        var postpaginate = jQuery( this ).attr('postpaginate');
        var postlastpaginate = jQuery( this ).attr('postlastpaginate');
        var postDisplayStyle = jQuery( this ).attr('postDisplayStyle');
        
        //arrow value
        var arrowLeftPaged = jQuery(this).parent().find('.arrow-left');
        var arrowRightPaged = jQuery(this).parent().find('.arrow-right');
        

        var widget = jQuery(this).closest(".widget_buzznews_sidebar_post_list");

        var id = jQuery(widget).attr('id');

        var storage_id = id + "-" +catid;

        var data = localStorage.getItem(storage_id);

        var that = jQuery( this );
        var buzznews_postlist = that.closest(".buzznews-trendingnews-right").find(".buzznews-trendingnews-right-top");
        
        jQuery.ajax({
            url : BUZZNEWS.ajaxurl,
            type : 'post',
            data : {
                action : 'buzznews_post_list',
                catId : catid,
                prductCount : postcount,
                postPaginate: postpaginate,
                postDisplayStyle:postDisplayStyle
            },
            success : function( response ) {
                setTimeout(function() {
                    loaded = true;
                    localStorage.setItem(storage_id, data);

                    if( postDisplayStyle == 'fullpostlist' ){
                        jQuery(buzznews_postlist).append(response.html);
                    }else{
                        jQuery(buzznews_postlist).html(response.html);
                    }
                    

                    //patination
                    var  currentPaged = parseInt( response.paged );
                    
                    if( ( currentPaged >= 1 ) && ( currentPaged <= postlastpaginate ) ){
                        jQuery(arrowLeftPaged).attr("postpaginate", currentPaged - 1 );
                        jQuery(arrowRightPaged).attr("postpaginate", currentPaged + 1 );
                    }

                    //remove and add class 
                    if( currentPaged == postlastpaginate){
                        jQuery(arrowRightPaged).removeClass("buzznews-postlist-ajax");
                    }else{
                        jQuery(arrowRightPaged).addClass("buzznews-postlist-ajax");
                    }

                    if( currentPaged == 1){
                        jQuery(arrowLeftPaged).removeClass("buzznews-postlist-ajax");
                    }else{
                        jQuery(arrowLeftPaged).addClass("buzznews-postlist-ajax");
                    }

                    if( postDisplayStyle == 'fullpostlist' ){
                        jQuery('.buzznews-ajax-loading').hide();
                        jQuery('.buzznews-postlist-arrow.buzznews-fullpostlist').show();
                    }

                
                }, 1000);
            },
            beforeSend: function() {
                if( postDisplayStyle == 'fullpostlist' ){
                    jQuery('.buzznews-ajax-loading').show();
                    jQuery('.buzznews-postlist-arrow.buzznews-fullpostlist').hide();
                    
                }else{
                    jQuery(buzznews_postlist).html('<span class="ajax-loading"><svg width="200px"  height="200px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-ripple" style="background: none;"><circle cx="50" cy="50" r="6.60838" fill="none" ng-attr-stroke="{{config.c1}}" ng-attr-stroke-width="{{config.width}}" stroke="#fe001e" stroke-width="1"><animate attributeName="r" calcMode="spline" values="0;30" keyTimes="0;1" dur="1" keySplines="0 0.2 0.8 1" begin="-0.5s" repeatCount="indefinite"></animate><animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="1" keySplines="0.2 0 0.8 1" begin="-0.5s" repeatCount="indefinite"></animate></circle><circle cx="50" cy="50" r="22.4588" fill="none" ng-attr-stroke="{{config.c2}}" ng-attr-stroke-width="{{config.width}}" stroke="#fe001e" stroke-width="1"><animate attributeName="r" calcMode="spline" values="0;30" keyTimes="0;1" dur="1" keySplines="0 0.2 0.8 1" begin="0s" repeatCount="indefinite"></animate><animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="1" keySplines="0.2 0 0.8 1" begin="0s" repeatCount="indefinite"></animate></circle></svg></span>');
                }
            },
            
        });
                    
    }); 

    
});
