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
 */!function(l){var e={};function o(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return l[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=l,o.c=e,o.d=function(l,e,r){o.o(l,e)||Object.defineProperty(l,e,{enumerable:!0,get:r})},o.r=function(l){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},o.t=function(l,e){if(1&e&&(l=o(l)),8&e)return l;if(4&e&&"object"==typeof l&&l&&l.__esModule)return l;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:l}),2&e&&"string"!=typeof l)for(var s in l)o.d(r,s,function(e){return l[e]}.bind(null,s));return r},o.n=function(l){var e=l&&l.__esModule?function(){return l.default}:function(){return l};return o.d(e,"a",e),e},o.o=function(l,e){return Object.prototype.hasOwnProperty.call(l,e)},o.p="",o(o.s=0)}([function(l,e,o){o(1)},function(l,e,o){var r,s,t;s=[o(2)],void 0===(t="function"==typeof(r=function(l){"use strict";function e(e){if(r.webkit&&!e)return{height:0,width:0};if(!r.data.outer){var o={border:"none","box-sizing":"content-box",height:"200px",margin:"0",padding:"0",width:"200px"};r.data.inner=l("<div>").css(l.extend({},o)),r.data.outer=l("<div>").css(l.extend({left:"-1000px",overflow:"scroll",position:"absolute",top:"-1000px"},o)).append(r.data.inner).appendTo("body")}return r.data.outer.scrollLeft(1e3).scrollTop(1e3),{height:Math.ceil(r.data.outer.offset().top-r.data.inner.offset().top||0),width:Math.ceil(r.data.outer.offset().left-r.data.inner.offset().left||0)}}function o(l){var e=l.originalEvent;return!(e.axis&&e.axis===e.HORIZONTAL_AXIS||e.wheelDeltaX)}var r={data:{index:0,name:"scrollbar"},macosx:/mac/i.test(navigator.platform),mobile:/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),overlay:null,scroll:null,scrolls:[],webkit:/webkit/i.test(navigator.userAgent)&&!/edge\/\d+/i.test(navigator.userAgent)};r.scrolls.add=function(l){this.remove(l).push(l)},r.scrolls.remove=function(e){for(;l.inArray(e,this)>=0;)this.splice(l.inArray(e,this),1);return this};var s={autoScrollSize:!0,autoUpdate:!0,debug:!1,disableBodyScroll:!1,duration:200,ignoreMobile:!1,ignoreOverlay:!1,scrollStep:30,showArrows:!1,stepScrolling:!0,scrollx:null,scrolly:null,onDestroy:null,onInit:null,onScroll:null,onUpdate:null},t=function(o){r.scroll||(r.overlay=function(){var l=e(!0);return!(l.height||l.width)}(),r.scroll=e(),n(),l(window).resize(function(){var l=!1;if(r.scroll&&(r.scroll.height||r.scroll.width)){var o=e();(o.height!==r.scroll.height||o.width!==r.scroll.width)&&(r.scroll=o,l=!0)}n(l)})),this.container=o,this.namespace=".scrollbar_"+r.data.index++,this.options=l.extend({},s,window.jQueryScrollbarOptions||{}),this.scrollTo=null,this.scrollx={},this.scrolly={},o.data(r.data.name,this),r.scrolls.add(this)};t.prototype={destroy:function(){if(this.wrapper){this.container.removeData(r.data.name),r.scrolls.remove(this);var e=this.container.scrollLeft(),o=this.container.scrollTop();this.container.insertBefore(this.wrapper).css({height:"",margin:"","max-height":""}).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(e).scrollTop(o),this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace),this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace),this.wrapper.remove(),l(document).add("body").off(this.namespace),l.isFunction(this.options.onDestroy)&&this.options.onDestroy.apply(this,[this.container])}},init:function(e){var s=this,t=this.container,i=this.containerWrapper||t,n=this.namespace,c=l.extend(this.options,e||{}),a={x:this.scrollx,y:this.scrolly},d=this.wrapper,u={scrollLeft:t.scrollLeft(),scrollTop:t.scrollTop()};if(r.mobile&&c.ignoreMobile||r.overlay&&c.ignoreOverlay||r.macosx&&!r.webkit)return!1;if(d)i.css({height:"auto","margin-bottom":-1*r.scroll.height+"px","margin-right":-1*r.scroll.width+"px","max-height":""});else{if(this.wrapper=d=l("<div>").addClass("scroll-wrapper").addClass(t.attr("class")).css("position","absolute"==t.css("position")?"absolute":"relative").insertBefore(t).append(t),t.is("textarea")&&(this.containerWrapper=i=l("<div>").insertBefore(t).append(t),d.addClass("scroll-textarea")),i.addClass("scroll-content").css({height:"auto","margin-bottom":-1*r.scroll.height+"px","margin-right":-1*r.scroll.width+"px","max-height":""}),t.on("scroll"+n,function(e){l.isFunction(c.onScroll)&&c.onScroll.call(s,{maxScroll:a.y.maxScrollOffset,scroll:t.scrollTop(),size:a.y.size,visible:a.y.visible},{maxScroll:a.x.maxScrollOffset,scroll:t.scrollLeft(),size:a.x.size,visible:a.x.visible}),a.x.isVisible&&a.x.scroll.bar.css("left",t.scrollLeft()*a.x.kx+"px"),a.y.isVisible&&a.y.scroll.bar.css("top",t.scrollTop()*a.y.kx+"px")}),d.on("scroll"+n,function(){d.scrollTop(0).scrollLeft(0)}),c.disableBodyScroll){var p=function(l){o(l)?a.y.isVisible&&a.y.mousewheel(l):a.x.isVisible&&a.x.mousewheel(l)};d.on("MozMousePixelScroll"+n,p),d.on("mousewheel"+n,p),r.mobile&&d.on("touchstart"+n,function(e){var o=e.originalEvent.touches&&e.originalEvent.touches[0]||e,r=o.pageX,s=o.pageY,i=t.scrollLeft(),c=t.scrollTop();l(document).on("touchmove"+n,function(l){var e=l.originalEvent.targetTouches&&l.originalEvent.targetTouches[0]||l;t.scrollLeft(i+r-e.pageX),t.scrollTop(c+s-e.pageY),l.preventDefault()}),l(document).on("touchend"+n,function(){l(document).off(n)})})}l.isFunction(c.onInit)&&c.onInit.apply(this,[t])}l.each(a,function(e,r){var i=null,d=1,u="x"===e?"scrollLeft":"scrollTop",p=c.scrollStep,f=function(){var l=t[u]();t[u](l+p),1==d&&l+p>=h&&(l=t[u]()),-1==d&&h>=l+p&&(l=t[u]()),t[u]()==l&&i&&i()},h=0;r.scroll||(r.scroll=s._getScroll(c["scroll"+e]).addClass("scroll-"+e),c.showArrows&&r.scroll.addClass("scroll-element_arrows_visible"),r.mousewheel=function(l){if(!r.isVisible||"x"===e&&o(l))return!0;if("y"===e&&!o(l))return a.x.mousewheel(l),!0;var i=-1*l.originalEvent.wheelDelta||l.originalEvent.detail,n=r.size-r.visible-r.offset;return(i>0&&n>h||0>i&&h>0)&&(0>(h+=i)&&(h=0),h>n&&(h=n),s.scrollTo=s.scrollTo||{},s.scrollTo[u]=h,setTimeout(function(){s.scrollTo&&(t.stop().animate(s.scrollTo,240,"linear",function(){h=t[u]()}),s.scrollTo=null)},1)),l.preventDefault(),!1},r.scroll.on("MozMousePixelScroll"+n,r.mousewheel).on("mousewheel"+n,r.mousewheel).on("mouseenter"+n,function(){h=t[u]()}),r.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown"+n,function(o){if(1!=o.which)return!0;d=1;var n={eventOffset:o["x"===e?"pageX":"pageY"],maxScrollValue:r.size-r.visible-r.offset,scrollbarOffset:r.scroll.bar.offset()["x"===e?"left":"top"],scrollbarSize:r.scroll.bar["x"===e?"outerWidth":"outerHeight"]()},a=0,v=0;return l(this).hasClass("scroll-arrow")?(d=l(this).hasClass("scroll-arrow_more")?1:-1,p=c.scrollStep*d,h=d>0?n.maxScrollValue:0):(d=n.eventOffset>n.scrollbarOffset+n.scrollbarSize?1:n.eventOffset<n.scrollbarOffset?-1:0,p=Math.round(.75*r.visible)*d,h=n.eventOffset-n.scrollbarOffset-(c.stepScrolling?1==d?n.scrollbarSize:0:Math.round(n.scrollbarSize/2)),h=t[u]()+h/r.kx),s.scrollTo=s.scrollTo||{},s.scrollTo[u]=c.stepScrolling?t[u]()+p:h,c.stepScrolling&&(i=function(){h=t[u](),clearInterval(v),clearTimeout(a),a=0,v=0},a=setTimeout(function(){v=setInterval(f,40)},c.duration+100)),setTimeout(function(){s.scrollTo&&(t.animate(s.scrollTo,c.duration),s.scrollTo=null)},1),s._handleMouseDown(i,o)}),r.scroll.bar.on("mousedown"+n,function(o){if(1!=o.which)return!0;var i=o["x"===e?"pageX":"pageY"],c=t[u]();return r.scroll.addClass("scroll-draggable"),l(document).on("mousemove"+n,function(l){var o=parseInt((l["x"===e?"pageX":"pageY"]-i)/r.kx,10);t[u](c+o)}),s._handleMouseDown(function(){r.scroll.removeClass("scroll-draggable"),h=t[u]()},o)}))}),l.each(a,function(l,e){var o="scroll-scroll"+l+"_visible",r="x"==l?a.y:a.x;e.scroll.removeClass(o),r.scroll.removeClass(o),i.removeClass(o)}),l.each(a,function(e,o){l.extend(o,"x"==e?{offset:parseInt(t.css("left"),10)||0,size:t.prop("scrollWidth"),visible:d.width()}:{offset:parseInt(t.css("top"),10)||0,size:t.prop("scrollHeight"),visible:d.height()})}),this._updateScroll("x",this.scrollx),this._updateScroll("y",this.scrolly),l.isFunction(c.onUpdate)&&c.onUpdate.apply(this,[t]),l.each(a,function(l,e){var o="x"===l?"left":"top",r="x"===l?"outerWidth":"outerHeight",s="x"===l?"width":"height",i=parseInt(t.css(o),10)||0,n=e.size,a=e.visible+i,d=e.scroll.size[r]()+(parseInt(e.scroll.size.css(o),10)||0);c.autoScrollSize&&(e.scrollbarSize=parseInt(d*a/n,10),e.scroll.bar.css(s,e.scrollbarSize+"px")),e.scrollbarSize=e.scroll.bar[r](),e.kx=(d-e.scrollbarSize)/(n-a)||1,e.maxScrollOffset=n-a}),t.scrollLeft(u.scrollLeft).scrollTop(u.scrollTop).trigger("scroll")},_getScroll:function(e){var o={advanced:['<div class="scroll-element">','<div class="scroll-element_corner"></div>','<div class="scroll-arrow scroll-arrow_less"></div>','<div class="scroll-arrow scroll-arrow_more"></div>','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_inner-wrapper">','<div class="scroll-element_inner scroll-element_track">','<div class="scroll-element_inner-bottom"></div>',"</div>","</div>",'<div class="scroll-bar">','<div class="scroll-bar_body">','<div class="scroll-bar_body-inner"></div>',"</div>",'<div class="scroll-bar_bottom"></div>','<div class="scroll-bar_center"></div>',"</div>","</div>","</div>"].join(""),simple:['<div class="scroll-element">','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_track"></div>','<div class="scroll-bar"></div>',"</div>","</div>"].join("")};return o[e]&&(e=o[e]),e||(e=o.simple),e="string"==typeof e?l(e).appendTo(this.wrapper):l(e),l.extend(e,{bar:e.find(".scroll-bar"),size:e.find(".scroll-element_size"),track:e.find(".scroll-element_track")}),e},_handleMouseDown:function(e,o){var r=this.namespace;return l(document).on("blur"+r,function(){l(document).add("body").off(r),e&&e()}),l(document).on("dragstart"+r,function(l){return l.preventDefault(),!1}),l(document).on("mouseup"+r,function(){l(document).add("body").off(r),e&&e()}),l("body").on("selectstart"+r,function(l){return l.preventDefault(),!1}),o&&o.preventDefault(),!1},_updateScroll:function(e,o){var s=this.container,t=this.containerWrapper||s,i="scroll-scroll"+e+"_visible",n="x"===e?this.scrolly:this.scrollx,c=parseInt(this.container.css("x"===e?"left":"top"),10)||0,a=this.wrapper,d=o.size,u=o.visible+c;o.isVisible=d-u>1,o.isVisible?(o.scroll.addClass(i),n.scroll.addClass(i),t.addClass(i)):(o.scroll.removeClass(i),n.scroll.removeClass(i),t.removeClass(i)),"y"===e&&(s.is("textarea")||u>d?t.css({height:u+r.scroll.height+"px","max-height":"none"}):t.css({"max-height":u+r.scroll.height+"px"})),(o.size!=s.prop("scrollWidth")||n.size!=s.prop("scrollHeight")||o.visible!=a.width()||n.visible!=a.height()||o.offset!=(parseInt(s.css("left"),10)||0)||n.offset!=(parseInt(s.css("top"),10)||0))&&(l.extend(this.scrollx,{offset:parseInt(s.css("left"),10)||0,size:s.prop("scrollWidth"),visible:a.width()}),l.extend(this.scrolly,{offset:parseInt(s.css("top"),10)||0,size:this.container.prop("scrollHeight"),visible:a.height()}),this._updateScroll("x"===e?"y":"x",n))}};var i=t;l.fn.scrollbar=function(e,o){return"string"!=typeof e&&(o=e,e="init"),void 0===o&&(o=[]),l.isArray(o)||(o=[o]),this.not("body, .scroll-wrapper").each(function(){var s=l(this),t=s.data(r.data.name);(t||"init"===e)&&(t||(t=new i(s)),t[e]&&t[e].apply(t,o))}),this},l.fn.scrollbar.options=s;var n=function(){var l=0;return function(e){var o,s,t,i,c,a,d;for(o=0;o<r.scrolls.length;o++)s=(i=r.scrolls[o]).container,t=i.options,c=i.wrapper,a=i.scrollx,d=i.scrolly,(e||t.autoUpdate&&c&&c.is(":visible")&&(s.prop("scrollWidth")!=a.size||s.prop("scrollHeight")!=d.size||c.width()!=a.visible||c.height()!=d.visible))&&(i.init(),t.debug&&window.console&&console.log({scrollHeight:s.prop("scrollHeight")+":"+i.scrolly.size,scrollWidth:s.prop("scrollWidth")+":"+i.scrollx.size,visibleHeight:c.height()+":"+i.scrolly.visible,visibleWidth:c.width()+":"+i.scrollx.visible},!0));clearTimeout(l),l=setTimeout(n,300)}}();window.angular&&function(l){l.module("jQueryScrollbar",[]).provider("jQueryScrollbar",function(){var e=s;return{setOptions:function(o){l.extend(e,o)},$get:function(){return{options:l.copy(e)}}}}).directive("jqueryScrollbar",["jQueryScrollbar","$parse",function(l,e){return{restrict:"AC",link:function(o,r,s){var t=e(s.jqueryScrollbar)(o);r.scrollbar(t||l.options).on("$destroy",function(){r.scrollbar("destroy")})}}}])}(window.angular)})?r.apply(e,s):r)||(l.exports=t)},function(l,e){l.exports=jQuery}]);