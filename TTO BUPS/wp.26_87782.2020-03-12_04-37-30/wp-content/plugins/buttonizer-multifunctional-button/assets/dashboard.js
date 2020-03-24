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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(10);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["a"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var objectAssign = __webpack_require__(6);

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(7);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(8);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(9);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(2)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Intro.js v2.9.3
 * https://github.com/usablica/intro.js
 *
 * Copyright (C) 2017 Afshin Mehrabani (@afshinmeh)
 */

(function(f) {
    if (true) {
        module.exports = f();
        // deprecated function
        // @since 2.8.0
        module.exports.introJs = function () {
          console.warn('Deprecated: please use require("intro.js") directly, instead of the introJs method of the function');
          // introJs()
          return f().apply(this, arguments);
        };
    } else { var g; }
})(function () {
  //Default config/variables
  var VERSION = '2.9.3';

  /**
   * IntroJs main class
   *
   * @class IntroJs
   */
  function IntroJs(obj) {
    this._targetElement = obj;
    this._introItems = [];

    this._options = {
      /* Next button label in tooltip box */
      nextLabel: 'Next &rarr;',
      /* Previous button label in tooltip box */
      prevLabel: '&larr; Back',
      /* Skip button label in tooltip box */
      skipLabel: 'Skip',
      /* Done button label in tooltip box */
      doneLabel: 'Done',
      /* Hide previous button in the first step? Otherwise, it will be disabled button. */
      hidePrev: false,
      /* Hide next button in the last step? Otherwise, it will be disabled button. */
      hideNext: false,
      /* Default tooltip box position */
      tooltipPosition: 'bottom',
      /* Next CSS class for tooltip boxes */
      tooltipClass: '',
      /* CSS class that is added to the helperLayer */
      highlightClass: '',
      /* Close introduction when pressing Escape button? */
      exitOnEsc: true,
      /* Close introduction when clicking on overlay layer? */
      exitOnOverlayClick: true,
      /* Show step numbers in introduction? */
      showStepNumbers: true,
      /* Let user use keyboard to navigate the tour? */
      keyboardNavigation: true,
      /* Show tour control buttons? */
      showButtons: true,
      /* Show tour bullets? */
      showBullets: true,
      /* Show tour progress? */
      showProgress: false,
      /* Scroll to highlighted element? */
      scrollToElement: true,
      /*
       * Should we scroll the tooltip or target element?
       *
       * Options are: 'element' or 'tooltip'
       */
      scrollTo: 'element',
      /* Padding to add after scrolling when element is not in the viewport (in pixels) */
      scrollPadding: 30,
      /* Set the overlay opacity */
      overlayOpacity: 0.8,
      /* Precedence of positions, when auto is enabled */
      positionPrecedence: ["bottom", "top", "right", "left"],
      /* Disable an interaction with element? */
      disableInteraction: false,
      /* Set how much padding to be used around helper element */
      helperElementPadding: 10,
      /* Default hint position */
      hintPosition: 'top-middle',
      /* Hint button label */
      hintButtonLabel: 'Got it',
      /* Adding animation to hints? */
      hintAnimation: true,
      /* additional classes to put on the buttons */
      buttonClass: "introjs-button"
    };
  }

  /**
   * Initiate a new introduction/guide from an element in the page
   *
   * @api private
   * @method _introForElement
   * @param {Object} targetElm
   * @param {String} group
   * @returns {Boolean} Success or not?
   */
  function _introForElement(targetElm, group) {
    var allIntroSteps = targetElm.querySelectorAll("*[data-intro]"),
        introItems = [];

    if (this._options.steps) {
      //use steps passed programmatically
      _forEach(this._options.steps, function (step) {
        var currentItem = _cloneObject(step);

        //set the step
        currentItem.step = introItems.length + 1;

        //use querySelector function only when developer used CSS selector
        if (typeof (currentItem.element) === 'string') {
          //grab the element with given selector from the page
          currentItem.element = document.querySelector(currentItem.element);
        }

        //intro without element
        if (typeof (currentItem.element) === 'undefined' || currentItem.element === null) {
          var floatingElementQuery = document.querySelector(".introjsFloatingElement");

          if (floatingElementQuery === null) {
            floatingElementQuery = document.createElement('div');
            floatingElementQuery.className = 'introjsFloatingElement';

            document.body.appendChild(floatingElementQuery);
          }

          currentItem.element  = floatingElementQuery;
          currentItem.position = 'floating';
        }

        currentItem.scrollTo = currentItem.scrollTo || this._options.scrollTo;

        if (typeof (currentItem.disableInteraction) === 'undefined') {
          currentItem.disableInteraction = this._options.disableInteraction;
        }

        if (currentItem.element !== null) {
          introItems.push(currentItem);
        }        
      }.bind(this));

    } else {
      //use steps from data-* annotations
      var elmsLength = allIntroSteps.length;
      var disableInteraction;
      
      //if there's no element to intro
      if (elmsLength < 1) {
        return false;
      }

      _forEach(allIntroSteps, function (currentElement) {
        
        // PR #80
        // start intro for groups of elements
        if (group && (currentElement.getAttribute("data-intro-group") !== group)) {
          return;
        }

        // skip hidden elements
        if (currentElement.style.display === 'none') {
          return;
        }

        var step = parseInt(currentElement.getAttribute('data-step'), 10);

        if (typeof (currentElement.getAttribute('data-disable-interaction')) !== 'undefined') {
          disableInteraction = !!currentElement.getAttribute('data-disable-interaction');
        } else {
          disableInteraction = this._options.disableInteraction;
        }

        if (step > 0) {
          introItems[step - 1] = {
            element: currentElement,
            intro: currentElement.getAttribute('data-intro'),
            step: parseInt(currentElement.getAttribute('data-step'), 10),
            tooltipClass: currentElement.getAttribute('data-tooltipclass'),
            highlightClass: currentElement.getAttribute('data-highlightclass'),
            position: currentElement.getAttribute('data-position') || this._options.tooltipPosition,
            scrollTo: currentElement.getAttribute('data-scrollto') || this._options.scrollTo,
            disableInteraction: disableInteraction
          };
        }
      }.bind(this));

      //next add intro items without data-step
      //todo: we need a cleanup here, two loops are redundant
      var nextStep = 0;

      _forEach(allIntroSteps, function (currentElement) {
        
        // PR #80
        // start intro for groups of elements
        if (group && (currentElement.getAttribute("data-intro-group") !== group)) {
          return;
        }
        
        if (currentElement.getAttribute('data-step') === null) {

          while (true) {
            if (typeof introItems[nextStep] === 'undefined') {
              break;
            } else {
              nextStep++;
            }
          } 

          if (typeof (currentElement.getAttribute('data-disable-interaction')) !== 'undefined') {
            disableInteraction = !!currentElement.getAttribute('data-disable-interaction');
          } else {
            disableInteraction = this._options.disableInteraction;
          }

          introItems[nextStep] = {
            element: currentElement,
            intro: currentElement.getAttribute('data-intro'),
            step: nextStep + 1,
            tooltipClass: currentElement.getAttribute('data-tooltipclass'),
            highlightClass: currentElement.getAttribute('data-highlightclass'),
            position: currentElement.getAttribute('data-position') || this._options.tooltipPosition,
            scrollTo: currentElement.getAttribute('data-scrollto') || this._options.scrollTo,
            disableInteraction: disableInteraction
          };
        }
      }.bind(this));
    }

    //removing undefined/null elements
    var tempIntroItems = [];
    for (var z = 0; z < introItems.length; z++) {
      if (introItems[z]) {
        // copy non-falsy values to the end of the array
        tempIntroItems.push(introItems[z]);  
      } 
    }

    introItems = tempIntroItems;

    //Ok, sort all items with given steps
    introItems.sort(function (a, b) {
      return a.step - b.step;
    });

    //set it to the introJs object
    this._introItems = introItems;

    //add overlay layer to the page
    if(_addOverlayLayer.call(this, targetElm)) {
      //then, start the show
      _nextStep.call(this);

      if (this._options.keyboardNavigation) {
        DOMEvent.on(window, 'keydown', _onKeyDown, this, true);
      }
      //for window resize
      DOMEvent.on(window, 'resize', _onResize, this, true);
    }
    return false;
  }

  function _onResize () {
    this.refresh.call(this);
  }

  /**
  * on keyCode:
  * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
  * This feature has been removed from the Web standards.
  * Though some browsers may still support it, it is in
  * the process of being dropped.
  * Instead, you should use KeyboardEvent.code,
  * if it's implemented.
  *
  * jQuery's approach is to test for
  *   (1) e.which, then
  *   (2) e.charCode, then
  *   (3) e.keyCode
  * https://github.com/jquery/jquery/blob/a6b0705294d336ae2f63f7276de0da1195495363/src/event.js#L638
  *
  * @param type var
  * @return type
  */
  function _onKeyDown (e) {
    var code = (e.code === null) ? e.which : e.code;

    // if code/e.which is null
    if (code === null) {
      code = (e.charCode === null) ? e.keyCode : e.charCode;
    }
    
    if ((code === 'Escape' || code === 27) && this._options.exitOnEsc === true) {
      //escape key pressed, exit the intro
      //check if exit callback is defined
      _exitIntro.call(this, this._targetElement);
    } else if (code === 'ArrowLeft' || code === 37) {
      //left arrow
      _previousStep.call(this);
    } else if (code === 'ArrowRight' || code === 39) {
      //right arrow
      _nextStep.call(this);
    } else if (code === 'Enter' || code === 13) {
      //srcElement === ie
      var target = e.target || e.srcElement;
      if (target && target.className.match('introjs-prevbutton')) {
        //user hit enter while focusing on previous button
        _previousStep.call(this);
      } else if (target && target.className.match('introjs-skipbutton')) {
        //user hit enter while focusing on skip button
        if (this._introItems.length - 1 === this._currentStep && typeof (this._introCompleteCallback) === 'function') {
            this._introCompleteCallback.call(this);
        }

        _exitIntro.call(this, this._targetElement);
      } else if (target && target.getAttribute('data-stepnumber')) {
        // user hit enter while focusing on step bullet
        target.click();
      } else {
        //default behavior for responding to enter
        _nextStep.call(this);
      }

      //prevent default behaviour on hitting Enter, to prevent steps being skipped in some browsers
      if(e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
    }
  }

 /*
   * makes a copy of the object
   * @api private
   * @method _cloneObject
  */
  function _cloneObject(object) {
      if (object === null || typeof (object) !== 'object' || typeof (object.nodeType) !== 'undefined') {
        return object;
      }
      var temp = {};
      for (var key in object) {
        if (typeof(window.jQuery) !== 'undefined' && object[key] instanceof window.jQuery) {
          temp[key] = object[key];
        } else {
          temp[key] = _cloneObject(object[key]);
        }
      }
      return temp;
  }
  /**
   * Go to specific step of introduction
   *
   * @api private
   * @method _goToStep
   */
  function _goToStep(step) {
    //because steps starts with zero
    this._currentStep = step - 2;
    if (typeof (this._introItems) !== 'undefined') {
      _nextStep.call(this);
    }
  }

  /**
   * Go to the specific step of introduction with the explicit [data-step] number
   *
   * @api private
   * @method _goToStepNumber
   */
  function _goToStepNumber(step) {
    this._currentStepNumber = step;
    if (typeof (this._introItems) !== 'undefined') {
      _nextStep.call(this);
    }
  }

  /**
   * Go to next step on intro
   *
   * @api private
   * @method _nextStep
   */
  function _nextStep() {
    this._direction = 'forward';

    if (typeof (this._currentStepNumber) !== 'undefined') {
      _forEach(this._introItems, function (item, i) {
        if( item.step === this._currentStepNumber ) {
          this._currentStep = i - 1;
          this._currentStepNumber = undefined;
        }
      }.bind(this));
    }

    if (typeof (this._currentStep) === 'undefined') {
      this._currentStep = 0;
    } else {
      ++this._currentStep;
    }

    var nextStep = this._introItems[this._currentStep];
    var continueStep = true;

    if (typeof (this._introBeforeChangeCallback) !== 'undefined') {
      continueStep = this._introBeforeChangeCallback.call(this, nextStep.element);
    }

    // if `onbeforechange` returned `false`, stop displaying the element
    if (continueStep === false) {
      --this._currentStep;
      return false;
    }

    if ((this._introItems.length) <= this._currentStep) {
      //end of the intro
      //check if any callback is defined
      if (typeof (this._introCompleteCallback) === 'function') {
        this._introCompleteCallback.call(this);
      }
      _exitIntro.call(this, this._targetElement);
      return;
    }

    _showElement.call(this, nextStep);
  }

  /**
   * Go to previous step on intro
   *
   * @api private
   * @method _previousStep
   */
  function _previousStep() {
    this._direction = 'backward';

    if (this._currentStep === 0) {
      return false;
    }

    --this._currentStep;

    var nextStep = this._introItems[this._currentStep];
    var continueStep = true;

    if (typeof (this._introBeforeChangeCallback) !== 'undefined') {
      continueStep = this._introBeforeChangeCallback.call(this, nextStep.element);
    }

    // if `onbeforechange` returned `false`, stop displaying the element
    if (continueStep === false) {
      ++this._currentStep;
      return false;
    }

    _showElement.call(this, nextStep);
  }

  /**
   * Update placement of the intro objects on the screen
   * @api private
   */
  function _refresh() {
    // re-align intros
    _setHelperLayerPosition.call(this, document.querySelector('.introjs-helperLayer'));
    _setHelperLayerPosition.call(this, document.querySelector('.introjs-tooltipReferenceLayer'));
    _setHelperLayerPosition.call(this, document.querySelector('.introjs-disableInteraction'));

    // re-align tooltip
    if(this._currentStep !== undefined && this._currentStep !== null) {
      var oldHelperNumberLayer = document.querySelector('.introjs-helperNumberLayer'),
        oldArrowLayer        = document.querySelector('.introjs-arrow'),
        oldtooltipContainer  = document.querySelector('.introjs-tooltip');
      _placeTooltip.call(this, this._introItems[this._currentStep].element, oldtooltipContainer, oldArrowLayer, oldHelperNumberLayer);
    }

    //re-align hints
    _reAlignHints.call(this);
    return this;
  }

  /**
   * Exit from intro
   *
   * @api private
   * @method _exitIntro
   * @param {Object} targetElement
   * @param {Boolean} force - Setting to `true` will skip the result of beforeExit callback
   */
  function _exitIntro(targetElement, force) {
    var continueExit = true;

    // calling onbeforeexit callback
    //
    // If this callback return `false`, it would halt the process
    if (this._introBeforeExitCallback !== undefined) {
      continueExit = this._introBeforeExitCallback.call(this);
    }

    // skip this check if `force` parameter is `true`
    // otherwise, if `onbeforeexit` returned `false`, don't exit the intro
    if (!force && continueExit === false) return;

    //remove overlay layers from the page
    var overlayLayers = targetElement.querySelectorAll('.introjs-overlay');

    if (overlayLayers && overlayLayers.length) {
      _forEach(overlayLayers, function (overlayLayer) {
        overlayLayer.style.opacity = 0;
        window.setTimeout(function () {
          if (this.parentNode) {
            this.parentNode.removeChild(this);
          }
        }.bind(overlayLayer), 500);
      }.bind(this));
    }

    //remove all helper layers
    var helperLayer = targetElement.querySelector('.introjs-helperLayer');
    if (helperLayer) {
      helperLayer.parentNode.removeChild(helperLayer);
    }

    var referenceLayer = targetElement.querySelector('.introjs-tooltipReferenceLayer');
    if (referenceLayer) {
      referenceLayer.parentNode.removeChild(referenceLayer);
    }

    //remove disableInteractionLayer
    var disableInteractionLayer = targetElement.querySelector('.introjs-disableInteraction');
    if (disableInteractionLayer) {
      disableInteractionLayer.parentNode.removeChild(disableInteractionLayer);
    }

    //remove intro floating element
    var floatingElement = document.querySelector('.introjsFloatingElement');
    if (floatingElement) {
      floatingElement.parentNode.removeChild(floatingElement);
    }

    _removeShowElement();

    //remove `introjs-fixParent` class from the elements
    var fixParents = document.querySelectorAll('.introjs-fixParent');
    _forEach(fixParents, function (parent) {
      _removeClass(parent, /introjs-fixParent/g);
    });

    //clean listeners
    DOMEvent.off(window, 'keydown', _onKeyDown, this, true);
    DOMEvent.off(window, 'resize', _onResize, this, true);

    //check if any callback is defined
    if (this._introExitCallback !== undefined) {
      this._introExitCallback.call(this);
    }

    //set the step to zero
    this._currentStep = undefined;
  }

  /**
   * Render tooltip box in the page
   *
   * @api private
   * @method _placeTooltip
   * @param {HTMLElement} targetElement
   * @param {HTMLElement} tooltipLayer
   * @param {HTMLElement} arrowLayer
   * @param {HTMLElement} helperNumberLayer
   * @param {Boolean} hintMode
   */
  function _placeTooltip(targetElement, tooltipLayer, arrowLayer, helperNumberLayer, hintMode) {
    var tooltipCssClass = '',
        currentStepObj,
        tooltipOffset,
        targetOffset,
        windowSize,
        currentTooltipPosition;

    hintMode = hintMode || false;

    //reset the old style
    tooltipLayer.style.top        = null;
    tooltipLayer.style.right      = null;
    tooltipLayer.style.bottom     = null;
    tooltipLayer.style.left       = null;
    tooltipLayer.style.marginLeft = null;
    tooltipLayer.style.marginTop  = null;

    arrowLayer.style.display = 'inherit';

    if (typeof(helperNumberLayer) !== 'undefined' && helperNumberLayer !== null) {
      helperNumberLayer.style.top  = null;
      helperNumberLayer.style.left = null;
    }

    //prevent error when `this._currentStep` is undefined
    if (!this._introItems[this._currentStep]) return;

    //if we have a custom css class for each step
    currentStepObj = this._introItems[this._currentStep];
    if (typeof (currentStepObj.tooltipClass) === 'string') {
      tooltipCssClass = currentStepObj.tooltipClass;
    } else {
      tooltipCssClass = this._options.tooltipClass;
    }

    tooltipLayer.className = ('introjs-tooltip ' + tooltipCssClass).replace(/^\s+|\s+$/g, '');
    tooltipLayer.setAttribute('role', 'dialog');

    currentTooltipPosition = this._introItems[this._currentStep].position;

    // Floating is always valid, no point in calculating
    if (currentTooltipPosition !== "floating") { 
      currentTooltipPosition = _determineAutoPosition.call(this, targetElement, tooltipLayer, currentTooltipPosition);
    }

    var tooltipLayerStyleLeft;
    targetOffset  = _getOffset(targetElement);
    tooltipOffset = _getOffset(tooltipLayer);
    windowSize    = _getWinSize();

    _addClass(tooltipLayer, 'introjs-' + currentTooltipPosition);

    switch (currentTooltipPosition) {
      case 'top-right-aligned':
        arrowLayer.className      = 'introjs-arrow bottom-right';

        var tooltipLayerStyleRight = 0;
        _checkLeft(targetOffset, tooltipLayerStyleRight, tooltipOffset, tooltipLayer);
        tooltipLayer.style.bottom    = (targetOffset.height +  20) + 'px';
        break;

      case 'top-middle-aligned':
        arrowLayer.className      = 'introjs-arrow bottom-middle';

        var tooltipLayerStyleLeftRight = targetOffset.width / 2 - tooltipOffset.width / 2;

        // a fix for middle aligned hints
        if (hintMode) {
          tooltipLayerStyleLeftRight += 5;
        }

        if (_checkLeft(targetOffset, tooltipLayerStyleLeftRight, tooltipOffset, tooltipLayer)) {
          tooltipLayer.style.right = null;
          _checkRight(targetOffset, tooltipLayerStyleLeftRight, tooltipOffset, windowSize, tooltipLayer);
        }
        tooltipLayer.style.bottom = (targetOffset.height + 20) + 'px';
        break;

      case 'top-left-aligned':
      // top-left-aligned is the same as the default top
      case 'top':
        arrowLayer.className = 'introjs-arrow bottom';

        tooltipLayerStyleLeft = (hintMode) ? 0 : 15;

        _checkRight(targetOffset, tooltipLayerStyleLeft, tooltipOffset, windowSize, tooltipLayer);
        tooltipLayer.style.bottom = (targetOffset.height +  20) + 'px';
        break;
      case 'right':
        tooltipLayer.style.left = (targetOffset.width + 20) + 'px';
        if (targetOffset.top + tooltipOffset.height > windowSize.height) {
          // In this case, right would have fallen below the bottom of the screen.
          // Modify so that the bottom of the tooltip connects with the target
          arrowLayer.className = "introjs-arrow left-bottom";
          tooltipLayer.style.top = "-" + (tooltipOffset.height - targetOffset.height - 20) + "px";
        } else {
          arrowLayer.className = 'introjs-arrow left';
        }
        break;
      case 'left':
        if (!hintMode && this._options.showStepNumbers === true) {
          tooltipLayer.style.top = '15px';
        }

        if (targetOffset.top + tooltipOffset.height > windowSize.height) {
          // In this case, left would have fallen below the bottom of the screen.
          // Modify so that the bottom of the tooltip connects with the target
          tooltipLayer.style.top = "-" + (tooltipOffset.height - targetOffset.height - 20) + "px";
          arrowLayer.className = 'introjs-arrow right-bottom';
        } else {
          arrowLayer.className = 'introjs-arrow right';
        }
        tooltipLayer.style.right = (targetOffset.width + 20) + 'px';

        break;
      case 'floating':
        arrowLayer.style.display = 'none';

        //we have to adjust the top and left of layer manually for intro items without element
        tooltipLayer.style.left   = '50%';
        tooltipLayer.style.top    = '50%';
        tooltipLayer.style.marginLeft = '-' + (tooltipOffset.width / 2)  + 'px';
        tooltipLayer.style.marginTop  = '-' + (tooltipOffset.height / 2) + 'px';

        if (typeof(helperNumberLayer) !== 'undefined' && helperNumberLayer !== null) {
          helperNumberLayer.style.left = '-' + ((tooltipOffset.width / 2) + 18) + 'px';
          helperNumberLayer.style.top  = '-' + ((tooltipOffset.height / 2) + 18) + 'px';
        }

        break;
      case 'bottom-right-aligned':
        arrowLayer.className      = 'introjs-arrow top-right';

        tooltipLayerStyleRight = 0;
        _checkLeft(targetOffset, tooltipLayerStyleRight, tooltipOffset, tooltipLayer);
        tooltipLayer.style.top    = (targetOffset.height +  20) + 'px';
        break;

      case 'bottom-middle-aligned':
        arrowLayer.className      = 'introjs-arrow top-middle';

        tooltipLayerStyleLeftRight = targetOffset.width / 2 - tooltipOffset.width / 2;

        // a fix for middle aligned hints
        if (hintMode) {
          tooltipLayerStyleLeftRight += 5;
        }

        if (_checkLeft(targetOffset, tooltipLayerStyleLeftRight, tooltipOffset, tooltipLayer)) {
          tooltipLayer.style.right = null;
          _checkRight(targetOffset, tooltipLayerStyleLeftRight, tooltipOffset, windowSize, tooltipLayer);
        }
        tooltipLayer.style.top = (targetOffset.height + 20) + 'px';
        break;

      // case 'bottom-left-aligned':
      // Bottom-left-aligned is the same as the default bottom
      // case 'bottom':
      // Bottom going to follow the default behavior
      default:
        arrowLayer.className = 'introjs-arrow top';

        tooltipLayerStyleLeft = 0;
        _checkRight(targetOffset, tooltipLayerStyleLeft, tooltipOffset, windowSize, tooltipLayer);
        tooltipLayer.style.top    = (targetOffset.height +  20) + 'px';
    }
  }

  /**
   * Set tooltip left so it doesn't go off the right side of the window
   *
   * @return boolean true, if tooltipLayerStyleLeft is ok.  false, otherwise.
   */
  function _checkRight(targetOffset, tooltipLayerStyleLeft, tooltipOffset, windowSize, tooltipLayer) {
    if (targetOffset.left + tooltipLayerStyleLeft + tooltipOffset.width > windowSize.width) {
      // off the right side of the window
      tooltipLayer.style.left = (windowSize.width - tooltipOffset.width - targetOffset.left) + 'px';
      return false;
    }
    tooltipLayer.style.left = tooltipLayerStyleLeft + 'px';
    return true;
  }

  /**
   * Set tooltip right so it doesn't go off the left side of the window
   *
   * @return boolean true, if tooltipLayerStyleRight is ok.  false, otherwise.
   */
  function _checkLeft(targetOffset, tooltipLayerStyleRight, tooltipOffset, tooltipLayer) {
    if (targetOffset.left + targetOffset.width - tooltipLayerStyleRight - tooltipOffset.width < 0) {
      // off the left side of the window
      tooltipLayer.style.left = (-targetOffset.left) + 'px';
      return false;
    }
    tooltipLayer.style.right = tooltipLayerStyleRight + 'px';
    return true;
  }

  /**
   * Determines the position of the tooltip based on the position precedence and availability
   * of screen space.
   *
   * @param {Object}    targetElement
   * @param {Object}    tooltipLayer
   * @param {String}    desiredTooltipPosition
   * @return {String}   calculatedPosition
   */
  function _determineAutoPosition(targetElement, tooltipLayer, desiredTooltipPosition) {

    // Take a clone of position precedence. These will be the available
    var possiblePositions = this._options.positionPrecedence.slice();

    var windowSize = _getWinSize();
    var tooltipHeight = _getOffset(tooltipLayer).height + 10;
    var tooltipWidth = _getOffset(tooltipLayer).width + 20;
    var targetElementRect = targetElement.getBoundingClientRect();

    // If we check all the possible areas, and there are no valid places for the tooltip, the element
    // must take up most of the screen real estate. Show the tooltip floating in the middle of the screen.
    var calculatedPosition = "floating";

    /*
    * auto determine position 
    */

    // Check for space below
    if (targetElementRect.bottom + tooltipHeight + tooltipHeight > windowSize.height) {
      _removeEntry(possiblePositions, "bottom");
    }

    // Check for space above
    if (targetElementRect.top - tooltipHeight < 0) {
      _removeEntry(possiblePositions, "top");
    }

    // Check for space to the right
    if (targetElementRect.right + tooltipWidth > windowSize.width) {
      _removeEntry(possiblePositions, "right");
    }

    // Check for space to the left
    if (targetElementRect.left - tooltipWidth < 0) {
      _removeEntry(possiblePositions, "left");
    }

    // @var {String}  ex: 'right-aligned'
    var desiredAlignment = (function (pos) {
      var hyphenIndex = pos.indexOf('-');
      if (hyphenIndex !== -1) {
        // has alignment
        return pos.substr(hyphenIndex);
      }
      return '';
    })(desiredTooltipPosition || '');

    // strip alignment from position
    if (desiredTooltipPosition) {
      // ex: "bottom-right-aligned"
      // should return 'bottom'
      desiredTooltipPosition = desiredTooltipPosition.split('-')[0];
    }

    if (possiblePositions.length) {
      if (desiredTooltipPosition !== "auto" &&
          possiblePositions.indexOf(desiredTooltipPosition) > -1) {
        // If the requested position is in the list, choose that
        calculatedPosition = desiredTooltipPosition;
      } else {
        // Pick the first valid position, in order
        calculatedPosition = possiblePositions[0];
      }
    }

    // only top and bottom positions have optional alignments
    if (['top', 'bottom'].indexOf(calculatedPosition) !== -1) {
      calculatedPosition += _determineAutoAlignment(targetElementRect.left, tooltipWidth, windowSize, desiredAlignment);
    }

    return calculatedPosition;
  }

  /**
  * auto-determine alignment
  * @param {Integer}  offsetLeft
  * @param {Integer}  tooltipWidth
  * @param {Object}   windowSize
  * @param {String}   desiredAlignment
  * @return {String}  calculatedAlignment
  */
  function _determineAutoAlignment (offsetLeft, tooltipWidth, windowSize, desiredAlignment) {
    var halfTooltipWidth = tooltipWidth / 2,
      winWidth = Math.min(windowSize.width, window.screen.width),
      possibleAlignments = ['-left-aligned', '-middle-aligned', '-right-aligned'],
      calculatedAlignment = '';
    
    // valid left must be at least a tooltipWidth
    // away from right side
    if (winWidth - offsetLeft < tooltipWidth) {
      _removeEntry(possibleAlignments, '-left-aligned');
    }

    // valid middle must be at least half 
    // width away from both sides
    if (offsetLeft < halfTooltipWidth || 
      winWidth - offsetLeft < halfTooltipWidth) {
      _removeEntry(possibleAlignments, '-middle-aligned');
    }

    // valid right must be at least a tooltipWidth
    // width away from left side
    if (offsetLeft < tooltipWidth) {
      _removeEntry(possibleAlignments, '-right-aligned');
    }

    if (possibleAlignments.length) {
      if (possibleAlignments.indexOf(desiredAlignment) !== -1) {
        // the desired alignment is valid
        calculatedAlignment = desiredAlignment;
      } else {
        // pick the first valid position, in order
        calculatedAlignment = possibleAlignments[0];
      }
    } else {
      // if screen width is too small 
      // for ANY alignment, middle is 
      // probably the best for visibility
      calculatedAlignment = '-middle-aligned';
    }

    return calculatedAlignment;
  }

  /**
   * Remove an entry from a string array if it's there, does nothing if it isn't there.
   *
   * @param {Array} stringArray
   * @param {String} stringToRemove
   */
  function _removeEntry(stringArray, stringToRemove) {
    if (stringArray.indexOf(stringToRemove) > -1) {
      stringArray.splice(stringArray.indexOf(stringToRemove), 1);
    }
  }

  /**
   * Update the position of the helper layer on the screen
   *
   * @api private
   * @method _setHelperLayerPosition
   * @param {Object} helperLayer
   */
  function _setHelperLayerPosition(helperLayer) {
    if (helperLayer) {
      //prevent error when `this._currentStep` in undefined
      if (!this._introItems[this._currentStep]) return;

      var currentElement  = this._introItems[this._currentStep],
          elementPosition = _getOffset(currentElement.element),
          widthHeightPadding = this._options.helperElementPadding;

      // If the target element is fixed, the tooltip should be fixed as well.
      // Otherwise, remove a fixed class that may be left over from the previous
      // step.
      if (_isFixed(currentElement.element)) {
        _addClass(helperLayer, 'introjs-fixedTooltip');
      } else {
        _removeClass(helperLayer, 'introjs-fixedTooltip');
      }

      if (currentElement.position === 'floating') {
        widthHeightPadding = 0;
      }

      //set new position to helper layer
      helperLayer.style.cssText = 'width: ' + (elementPosition.width  + widthHeightPadding)  + 'px; ' +
                                        'height:' + (elementPosition.height + widthHeightPadding)  + 'px; ' +
                                        'top:'    + (elementPosition.top    - widthHeightPadding / 2)   + 'px;' +
                                        'left: '  + (elementPosition.left   - widthHeightPadding / 2)   + 'px;';

    }
  }

  /**
   * Add disableinteraction layer and adjust the size and position of the layer
   *
   * @api private
   * @method _disableInteraction
   */
  function _disableInteraction() {
    var disableInteractionLayer = document.querySelector('.introjs-disableInteraction');

    if (disableInteractionLayer === null) {
      disableInteractionLayer = document.createElement('div');
      disableInteractionLayer.className = 'introjs-disableInteraction';
      this._targetElement.appendChild(disableInteractionLayer);
    }

    _setHelperLayerPosition.call(this, disableInteractionLayer);
  }

  /**
   * Setting anchors to behave like buttons
   *
   * @api private
   * @method _setAnchorAsButton
   */
  function _setAnchorAsButton(anchor){
    anchor.setAttribute('role', 'button');
    anchor.tabIndex = 0;
  }

  /**
   * Show an element on the page
   *
   * @api private
   * @method _showElement
   * @param {Object} targetElement
   */
  function _showElement(targetElement) {
    if (typeof (this._introChangeCallback) !== 'undefined') {
      this._introChangeCallback.call(this, targetElement.element);
    }

    var self = this,
        oldHelperLayer = document.querySelector('.introjs-helperLayer'),
        oldReferenceLayer = document.querySelector('.introjs-tooltipReferenceLayer'),
        highlightClass = 'introjs-helperLayer',
        nextTooltipButton,
        prevTooltipButton,
        skipTooltipButton,
        scrollParent;

    //check for a current step highlight class
    if (typeof (targetElement.highlightClass) === 'string') {
      highlightClass += (' ' + targetElement.highlightClass);
    }
    //check for options highlight class
    if (typeof (this._options.highlightClass) === 'string') {
      highlightClass += (' ' + this._options.highlightClass);
    }

    if (oldHelperLayer !== null) {
      var oldHelperNumberLayer = oldReferenceLayer.querySelector('.introjs-helperNumberLayer'),
          oldtooltipLayer      = oldReferenceLayer.querySelector('.introjs-tooltiptext'),
          oldArrowLayer        = oldReferenceLayer.querySelector('.introjs-arrow'),
          oldtooltipContainer  = oldReferenceLayer.querySelector('.introjs-tooltip');
          
      skipTooltipButton    = oldReferenceLayer.querySelector('.introjs-skipbutton');
      prevTooltipButton    = oldReferenceLayer.querySelector('.introjs-prevbutton');
      nextTooltipButton    = oldReferenceLayer.querySelector('.introjs-nextbutton');

      //update or reset the helper highlight class
      oldHelperLayer.className = highlightClass;
      //hide the tooltip
      oldtooltipContainer.style.opacity = 0;
      oldtooltipContainer.style.display = "none";

      if (oldHelperNumberLayer !== null) {
        var lastIntroItem = this._introItems[(targetElement.step - 2 >= 0 ? targetElement.step - 2 : 0)];

        if (lastIntroItem !== null && (this._direction === 'forward' && lastIntroItem.position === 'floating') || (this._direction === 'backward' && targetElement.position === 'floating')) {
          oldHelperNumberLayer.style.opacity = 0;
        }
      }

      // scroll to element
      scrollParent = _getScrollParent( targetElement.element );

      if (scrollParent !== document.body) {
        // target is within a scrollable element
        _scrollParentToElement(scrollParent, targetElement.element);
      }

      // set new position to helper layer
      _setHelperLayerPosition.call(self, oldHelperLayer);
      _setHelperLayerPosition.call(self, oldReferenceLayer);

      //remove `introjs-fixParent` class from the elements
      var fixParents = document.querySelectorAll('.introjs-fixParent');
      _forEach(fixParents, function (parent) {
        _removeClass(parent, /introjs-fixParent/g);
      });
      
      //remove old classes if the element still exist
      _removeShowElement();

      //we should wait until the CSS3 transition is competed (it's 0.3 sec) to prevent incorrect `height` and `width` calculation
      if (self._lastShowElementTimer) {
        window.clearTimeout(self._lastShowElementTimer);
      }

      self._lastShowElementTimer = window.setTimeout(function() {
        //set current step to the label
        if (oldHelperNumberLayer !== null) {
          oldHelperNumberLayer.innerHTML = targetElement.step;
        }
        //set current tooltip text
        oldtooltipLayer.innerHTML = targetElement.intro;
        //set the tooltip position
        oldtooltipContainer.style.display = "block";
        _placeTooltip.call(self, targetElement.element, oldtooltipContainer, oldArrowLayer, oldHelperNumberLayer);

        //change active bullet
        if (self._options.showBullets) {
            oldReferenceLayer.querySelector('.introjs-bullets li > a.active').className = '';
            oldReferenceLayer.querySelector('.introjs-bullets li > a[data-stepnumber="' + targetElement.step + '"]').className = 'active';
        }
        oldReferenceLayer.querySelector('.introjs-progress .introjs-progressbar').style.cssText = 'width:' + _getProgress.call(self) + '%;';
        oldReferenceLayer.querySelector('.introjs-progress .introjs-progressbar').setAttribute('aria-valuenow', _getProgress.call(self));

        //show the tooltip
        oldtooltipContainer.style.opacity = 1;
        if (oldHelperNumberLayer) oldHelperNumberLayer.style.opacity = 1;

        //reset button focus
        if (typeof skipTooltipButton !== "undefined" && skipTooltipButton !== null && /introjs-donebutton/gi.test(skipTooltipButton.className)) {
          // skip button is now "done" button
          skipTooltipButton.focus();
        } else if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
          //still in the tour, focus on next
          nextTooltipButton.focus();
        }

        // change the scroll of the window, if needed
        _scrollTo.call(self, targetElement.scrollTo, targetElement, oldtooltipLayer);
      }, 350);

      // end of old element if-else condition
    } else {
      var helperLayer       = document.createElement('div'),
          referenceLayer    = document.createElement('div'),
          arrowLayer        = document.createElement('div'),
          tooltipLayer      = document.createElement('div'),
          tooltipTextLayer  = document.createElement('div'),
          bulletsLayer      = document.createElement('div'),
          progressLayer     = document.createElement('div'),
          buttonsLayer      = document.createElement('div');

      helperLayer.className = highlightClass;
      referenceLayer.className = 'introjs-tooltipReferenceLayer';

      // scroll to element
      scrollParent = _getScrollParent( targetElement.element );

      if (scrollParent !== document.body) {
        // target is within a scrollable element
        _scrollParentToElement(scrollParent, targetElement.element);
      }

      //set new position to helper layer
      _setHelperLayerPosition.call(self, helperLayer);
      _setHelperLayerPosition.call(self, referenceLayer);

      //add helper layer to target element
      this._targetElement.appendChild(helperLayer);
      this._targetElement.appendChild(referenceLayer);

      arrowLayer.className = 'introjs-arrow';

      tooltipTextLayer.className = 'introjs-tooltiptext';
      tooltipTextLayer.innerHTML = targetElement.intro;

      bulletsLayer.className = 'introjs-bullets';

      if (this._options.showBullets === false) {
        bulletsLayer.style.display = 'none';
      }

      var ulContainer = document.createElement('ul');
      ulContainer.setAttribute('role', 'tablist');

      var anchorClick = function () {
          self.goToStep(this.getAttribute('data-stepnumber'));
      };

      _forEach(this._introItems, function (item, i) {
        var innerLi    = document.createElement('li');
        var anchorLink = document.createElement('a');
        
        innerLi.setAttribute('role', 'presentation');
        anchorLink.setAttribute('role', 'tab');

        anchorLink.onclick = anchorClick;

        if (i === (targetElement.step-1)) {
          anchorLink.className = 'active';
        } 

        _setAnchorAsButton(anchorLink);
        anchorLink.innerHTML = "&nbsp;";
        anchorLink.setAttribute('data-stepnumber', item.step);

        innerLi.appendChild(anchorLink);
        ulContainer.appendChild(innerLi);
      });

      bulletsLayer.appendChild(ulContainer);

      progressLayer.className = 'introjs-progress';

      if (this._options.showProgress === false) {
        progressLayer.style.display = 'none';
      }
      var progressBar = document.createElement('div');
      progressBar.className = 'introjs-progressbar';
      progressBar.setAttribute('role', 'progress');
      progressBar.setAttribute('aria-valuemin', 0);
      progressBar.setAttribute('aria-valuemax', 100);
      progressBar.setAttribute('aria-valuenow', _getProgress.call(this));
      progressBar.style.cssText = 'width:' + _getProgress.call(this) + '%;';

      progressLayer.appendChild(progressBar);

      buttonsLayer.className = 'introjs-tooltipbuttons';
      if (this._options.showButtons === false) {
        buttonsLayer.style.display = 'none';
      }

      tooltipLayer.className = 'introjs-tooltip';
      tooltipLayer.appendChild(tooltipTextLayer);
      tooltipLayer.appendChild(bulletsLayer);
      tooltipLayer.appendChild(progressLayer);

      //add helper layer number
      var helperNumberLayer = document.createElement('span');
      if (this._options.showStepNumbers === true) {
        helperNumberLayer.className = 'introjs-helperNumberLayer';
        helperNumberLayer.innerHTML = targetElement.step;
        referenceLayer.appendChild(helperNumberLayer);
      }

      tooltipLayer.appendChild(arrowLayer);
      referenceLayer.appendChild(tooltipLayer);

      //next button
      nextTooltipButton = document.createElement('a');

      nextTooltipButton.onclick = function() {
        if (self._introItems.length - 1 !== self._currentStep) {
          _nextStep.call(self);
        }
      };

      _setAnchorAsButton(nextTooltipButton);
      nextTooltipButton.innerHTML = this._options.nextLabel;

      //previous button
      prevTooltipButton = document.createElement('a');

      prevTooltipButton.onclick = function() {
        if (self._currentStep !== 0) {
          _previousStep.call(self);
        }
      };

      _setAnchorAsButton(prevTooltipButton);
      prevTooltipButton.innerHTML = this._options.prevLabel;

      //skip button
      skipTooltipButton = document.createElement('a');
      skipTooltipButton.className = this._options.buttonClass + ' introjs-skipbutton ';
      _setAnchorAsButton(skipTooltipButton);
      skipTooltipButton.innerHTML = this._options.skipLabel;

      skipTooltipButton.onclick = function() {
        if (self._introItems.length - 1 === self._currentStep && typeof (self._introCompleteCallback) === 'function') {
          self._introCompleteCallback.call(self);
        }

        if (self._introItems.length - 1 !== self._currentStep && typeof (self._introExitCallback) === 'function') {
          self._introExitCallback.call(self);
        }

        if (typeof(self._introSkipCallback) === 'function') {
          self._introSkipCallback.call(self);
        }

        _exitIntro.call(self, self._targetElement);
      };

      buttonsLayer.appendChild(skipTooltipButton);

      //in order to prevent displaying next/previous button always
      if (this._introItems.length > 1) {
        buttonsLayer.appendChild(prevTooltipButton);
        buttonsLayer.appendChild(nextTooltipButton);
      }

      tooltipLayer.appendChild(buttonsLayer);

      //set proper position
      _placeTooltip.call(self, targetElement.element, tooltipLayer, arrowLayer, helperNumberLayer);

      // change the scroll of the window, if needed
      _scrollTo.call(this, targetElement.scrollTo, targetElement, tooltipLayer);

      //end of new element if-else condition
    }

    // removing previous disable interaction layer
    var disableInteractionLayer = self._targetElement.querySelector('.introjs-disableInteraction');
    if (disableInteractionLayer) {
      disableInteractionLayer.parentNode.removeChild(disableInteractionLayer);
    }

    //disable interaction
    if (targetElement.disableInteraction) {
      _disableInteraction.call(self);
    }

    // when it's the first step of tour
    if (this._currentStep === 0 && this._introItems.length > 1) {
      if (typeof skipTooltipButton !== "undefined" && skipTooltipButton !== null) {
        skipTooltipButton.className = this._options.buttonClass + ' introjs-skipbutton';
      }
      if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
        nextTooltipButton.className = this._options.buttonClass + ' introjs-nextbutton';
      }

      if (this._options.hidePrev === true) {
        if (typeof prevTooltipButton !== "undefined" && prevTooltipButton !== null) {
          prevTooltipButton.className = this._options.buttonClass + ' introjs-prevbutton introjs-hidden';
        }
        if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
          _addClass(nextTooltipButton, 'introjs-fullbutton');
        }
      } else {
        if (typeof prevTooltipButton !== "undefined" && prevTooltipButton !== null) {
          prevTooltipButton.className = this._options.buttonClass + ' introjs-prevbutton introjs-disabled';
        }
      }

      if (typeof skipTooltipButton !== "undefined" && skipTooltipButton !== null) {
        skipTooltipButton.innerHTML = this._options.skipLabel;
      }
    } else if (this._introItems.length - 1 === this._currentStep || this._introItems.length === 1) {
      // last step of tour
      if (typeof skipTooltipButton !== "undefined" && skipTooltipButton !== null) {
        skipTooltipButton.innerHTML = this._options.doneLabel;
        // adding donebutton class in addition to skipbutton
        _addClass(skipTooltipButton, 'introjs-donebutton');
      }
      if (typeof prevTooltipButton !== "undefined" && prevTooltipButton !== null) {
        prevTooltipButton.className = this._options.buttonClass + ' introjs-prevbutton';
      }

      if (this._options.hideNext === true) {
        if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
          nextTooltipButton.className = this._options.buttonClass + ' introjs-nextbutton introjs-hidden';
        }
        if (typeof prevTooltipButton !== "undefined" && prevTooltipButton !== null) {
          _addClass(prevTooltipButton, 'introjs-fullbutton');
        }
      } else {
        if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
          nextTooltipButton.className = this._options.buttonClass + ' introjs-nextbutton introjs-disabled';
        }
      }
    } else {
      // steps between start and end
      if (typeof skipTooltipButton !== "undefined" && skipTooltipButton !== null) {
        skipTooltipButton.className = this._options.buttonClass + ' introjs-skipbutton';
      }
      if (typeof prevTooltipButton !== "undefined" && prevTooltipButton !== null) {
        prevTooltipButton.className = this._options.buttonClass + ' introjs-prevbutton';
      }
      if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
        nextTooltipButton.className = this._options.buttonClass + ' introjs-nextbutton';
      }
      if (typeof skipTooltipButton !== "undefined" && skipTooltipButton !== null) {
        skipTooltipButton.innerHTML = this._options.skipLabel;
      }
    }

    prevTooltipButton.setAttribute('role', 'button');
    nextTooltipButton.setAttribute('role', 'button');
    skipTooltipButton.setAttribute('role', 'button');

    //Set focus on "next" button, so that hitting Enter always moves you onto the next step
    if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
      nextTooltipButton.focus();
    }

    _setShowElement(targetElement);

    if (typeof (this._introAfterChangeCallback) !== 'undefined') {
      this._introAfterChangeCallback.call(this, targetElement.element);
    }
  }

  /**
   * To change the scroll of `window` after highlighting an element
   *
   * @api private
   * @method _scrollTo
   * @param {String} scrollTo
   * @param {Object} targetElement
   * @param {Object} tooltipLayer
   */
  function _scrollTo(scrollTo, targetElement, tooltipLayer) {
    if (scrollTo === 'off') return;  
    var rect;

    if (!this._options.scrollToElement) return;

    if (scrollTo === 'tooltip') {
      rect = tooltipLayer.getBoundingClientRect();
    } else {
      rect = targetElement.element.getBoundingClientRect();
    }

    if (!_elementInViewport(targetElement.element)) {
      var winHeight = _getWinSize().height;
      var top = rect.bottom - (rect.bottom - rect.top);

      // TODO (afshinm): do we need scroll padding now?
      // I have changed the scroll option and now it scrolls the window to
      // the center of the target element or tooltip.

      if (top < 0 || targetElement.element.clientHeight > winHeight) {
        window.scrollBy(0, rect.top - ((winHeight / 2) -  (rect.height / 2)) - this._options.scrollPadding); // 30px padding from edge to look nice

      //Scroll down
      } else {
        window.scrollBy(0, rect.top - ((winHeight / 2) -  (rect.height / 2)) + this._options.scrollPadding); // 30px padding from edge to look nice
      }
    }
  }

  /**
   * To remove all show element(s)
   *
   * @api private
   * @method _removeShowElement
   */
  function _removeShowElement() {
    var elms = document.querySelectorAll('.introjs-showElement');

    _forEach(elms, function (elm) {
      _removeClass(elm, /introjs-[a-zA-Z]+/g);
    });
  }

  /**
   * To set the show element
   * This function set a relative (in most cases) position and changes the z-index
   *
   * @api private
   * @method _setShowElement
   * @param {Object} targetElement
   */
  function _setShowElement(targetElement) {
    var parentElm;
    // we need to add this show element class to the parent of SVG elements
    // because the SVG elements can't have independent z-index
    if (targetElement.element instanceof SVGElement) {
      parentElm = targetElement.element.parentNode;

      while (targetElement.element.parentNode !== null) {
        if (!parentElm.tagName || parentElm.tagName.toLowerCase() === 'body') break;

        if (parentElm.tagName.toLowerCase() === 'svg') {
          _addClass(parentElm, 'introjs-showElement introjs-relativePosition');
        }

        parentElm = parentElm.parentNode;
      }
    }

    _addClass(targetElement.element, 'introjs-showElement');

    var currentElementPosition = _getPropValue(targetElement.element, 'position');
    if (currentElementPosition !== 'absolute' &&
        currentElementPosition !== 'relative' &&
        currentElementPosition !== 'fixed') {
      //change to new intro item
      _addClass(targetElement.element, 'introjs-relativePosition');
    }

    parentElm = targetElement.element.parentNode;
    while (parentElm !== null) {
      if (!parentElm.tagName || parentElm.tagName.toLowerCase() === 'body') break;

      //fix The Stacking Context problem.
      //More detail: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context
      var zIndex = _getPropValue(parentElm, 'z-index');
      var opacity = parseFloat(_getPropValue(parentElm, 'opacity'));
      var transform = _getPropValue(parentElm, 'transform') || _getPropValue(parentElm, '-webkit-transform') || _getPropValue(parentElm, '-moz-transform') || _getPropValue(parentElm, '-ms-transform') || _getPropValue(parentElm, '-o-transform');
      if (/[0-9]+/.test(zIndex) || opacity < 1 || (transform !== 'none' && transform !== undefined)) {
        _addClass(parentElm, 'introjs-fixParent');
      }

      parentElm = parentElm.parentNode;
    }
  }

  /**
  * Iterates arrays
  *
  * @param {Array} arr
  * @param {Function} forEachFnc
  * @param {Function} completeFnc
  * @return {Null}
  */
  function _forEach(arr, forEachFnc, completeFnc) {
    // in case arr is an empty query selector node list
    if (arr) {
      for (var i = 0, len = arr.length; i < len; i++) {
        forEachFnc(arr[i], i);
      }
    }

    if (typeof(completeFnc) === 'function') {
      completeFnc();
    }
  }

  /**
  * Mark any object with an incrementing number
  * used for keeping track of objects
  *
  * @param Object obj   Any object or DOM Element
  * @param String key
  * @return Object
  */
  var _stamp = (function () {
    var keys = {};
    return function stamp (obj, key) {
      
      // get group key
      key = key || 'introjs-stamp';

      // each group increments from 0
      keys[key] = keys[key] || 0;

      // stamp only once per object
      if (obj[key] === undefined) {
        // increment key for each new object
        obj[key] = keys[key]++;
      }

      return obj[key];
    };
  })();

  /**
  * DOMEvent Handles all DOM events
  *
  * methods:
  *
  * on - add event handler
  * off - remove event
  */
  var DOMEvent = (function () {
    function DOMEvent () {
      var events_key = 'introjs_event';
      
      /**
      * Gets a unique ID for an event listener
      *
      * @param Object obj
      * @param String type        event type
      * @param Function listener
      * @param Object context
      * @return String
      */
      this._id = function (obj, type, listener, context) {
        return type + _stamp(listener) + (context ? '_' + _stamp(context) : '');
      };

      /**
      * Adds event listener
      *
      * @param Object obj
      * @param String type        event type
      * @param Function listener
      * @param Object context
      * @param Boolean useCapture
      * @return null
      */
      this.on = function (obj, type, listener, context, useCapture) {
        var id = this._id.apply(this, arguments),
            handler = function (e) {
              return listener.call(context || obj, e || window.event);
            };

        if ('addEventListener' in obj) {
          obj.addEventListener(type, handler, useCapture);
        } else if ('attachEvent' in obj) {
          obj.attachEvent('on' + type, handler);
        }

        obj[events_key] = obj[events_key] || {};
        obj[events_key][id] = handler;
      };

      /**
      * Removes event listener
      *
      * @param Object obj
      * @param String type        event type
      * @param Function listener
      * @param Object context
      * @param Boolean useCapture
      * @return null
      */
      this.off = function (obj, type, listener, context, useCapture) {
        var id = this._id.apply(this, arguments),
            handler = obj[events_key] && obj[events_key][id];

        if (!handler) {
          return;
        }

        if ('removeEventListener' in obj) {
          obj.removeEventListener(type, handler, useCapture);
        } else if ('detachEvent' in obj) {
          obj.detachEvent('on' + type, handler);
        }

        obj[events_key][id] = null;
      };
    }

    return new DOMEvent();
  })();

  /**
   * Append a class to an element
   *
   * @api private
   * @method _addClass
   * @param {Object} element
   * @param {String} className
   * @returns null
   */
  function _addClass(element, className) {
    if (element instanceof SVGElement) {
      // svg
      var pre = element.getAttribute('class') || '';

      element.setAttribute('class', pre + ' ' + className);
    } else {
      if (element.classList !== undefined) {
        // check for modern classList property
        var classes = className.split(' ');
        _forEach(classes, function (cls) {
          element.classList.add( cls );
        });
      } else if (!element.className.match( className )) {
        // check if element doesn't already have className
        element.className += ' ' + className;
      }
    }
  }

  /**
   * Remove a class from an element
   *
   * @api private
   * @method _removeClass
   * @param {Object} element
   * @param {RegExp|String} classNameRegex can be regex or string
   * @returns null
   */
  function _removeClass(element, classNameRegex) {
    if (element instanceof SVGElement) {
      var pre = element.getAttribute('class') || '';

      element.setAttribute('class', pre.replace(classNameRegex, '').replace(/^\s+|\s+$/g, ''));
    } else {
      element.className = element.className.replace(classNameRegex, '').replace(/^\s+|\s+$/g, '');
    }
  }

  /**
   * Get an element CSS property on the page
   * Thanks to JavaScript Kit: http://www.javascriptkit.com/dhtmltutors/dhtmlcascade4.shtml
   *
   * @api private
   * @method _getPropValue
   * @param {Object} element
   * @param {String} propName
   * @returns Element's property value
   */
  function _getPropValue (element, propName) {
    var propValue = '';
    if (element.currentStyle) { //IE
      propValue = element.currentStyle[propName];
    } else if (document.defaultView && document.defaultView.getComputedStyle) { //Others
      propValue = document.defaultView.getComputedStyle(element, null).getPropertyValue(propName);
    }

    //Prevent exception in IE
    if (propValue && propValue.toLowerCase) {
      return propValue.toLowerCase();
    } else {
      return propValue;
    }
  }

  /**
   * Checks to see if target element (or parents) position is fixed or not
   *
   * @api private
   * @method _isFixed
   * @param {Object} element
   * @returns Boolean
   */
  function _isFixed (element) {
    var p = element.parentNode;

    if (!p || p.nodeName === 'HTML') {
      return false;
    }

    if (_getPropValue(element, 'position') === 'fixed') {
      return true;
    }

    return _isFixed(p);
  }

  /**
   * Provides a cross-browser way to get the screen dimensions
   * via: http://stackoverflow.com/questions/5864467/internet-explorer-innerheight
   *
   * @api private
   * @method _getWinSize
   * @returns {Object} width and height attributes
   */
  function _getWinSize() {
    if (window.innerWidth !== undefined) {
      return { width: window.innerWidth, height: window.innerHeight };
    } else {
      var D = document.documentElement;
      return { width: D.clientWidth, height: D.clientHeight };
    }
  }

  /**
   * Check to see if the element is in the viewport or not
   * http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
   *
   * @api private
   * @method _elementInViewport
   * @param {Object} el
   */
  function _elementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      (rect.bottom+80) <= window.innerHeight && // add 80 to get the text right
      rect.right <= window.innerWidth
    );
  }

  /**
   * Add overlay layer to the page
   *
   * @api private
   * @method _addOverlayLayer
   * @param {Object} targetElm
   */
  function _addOverlayLayer(targetElm) {
    var overlayLayer = document.createElement('div'),
        styleText = '',
        self = this;

    //set css class name
    overlayLayer.className = 'introjs-overlay';

    //check if the target element is body, we should calculate the size of overlay layer in a better way
    if (!targetElm.tagName || targetElm.tagName.toLowerCase() === 'body') {
      styleText += 'top: 0;bottom: 0; left: 0;right: 0;position: fixed;';
      overlayLayer.style.cssText = styleText;
    } else {
      //set overlay layer position
      var elementPosition = _getOffset(targetElm);
      if (elementPosition) {
        styleText += 'width: ' + elementPosition.width + 'px; height:' + elementPosition.height + 'px; top:' + elementPosition.top + 'px;left: ' + elementPosition.left + 'px;';
        overlayLayer.style.cssText = styleText;
      }
    }

    targetElm.appendChild(overlayLayer);

    overlayLayer.onclick = function() {
      if (self._options.exitOnOverlayClick === true) {
        _exitIntro.call(self, targetElm);
      }
    };

    window.setTimeout(function() {
      styleText += 'opacity: ' + self._options.overlayOpacity.toString() + ';';
      overlayLayer.style.cssText = styleText;
    }, 10);

    return true;
  }

  /**
   * Removes open hint (tooltip hint)
   *
   * @api private
   * @method _removeHintTooltip
   */
  function _removeHintTooltip() {
    var tooltip = document.querySelector('.introjs-hintReference');

    if (tooltip) {
      var step = tooltip.getAttribute('data-step');
      tooltip.parentNode.removeChild(tooltip);
      return step;
    }
  }

  /**
   * Start parsing hint items
   *
   * @api private
   * @param {Object} targetElm
   * @method _startHint
   */
  function _populateHints(targetElm) {

    this._introItems = [];

    if (this._options.hints) {
      _forEach(this._options.hints, function (hint) {
        var currentItem = _cloneObject(hint);

        if (typeof(currentItem.element) === 'string') {
          //grab the element with given selector from the page
          currentItem.element = document.querySelector(currentItem.element);
        }

        currentItem.hintPosition = currentItem.hintPosition || this._options.hintPosition;
        currentItem.hintAnimation = currentItem.hintAnimation || this._options.hintAnimation;

        if (currentItem.element !== null) {
          this._introItems.push(currentItem);
        }
      }.bind(this));
    } else {
      var hints = targetElm.querySelectorAll('*[data-hint]');

      if (!hints || !hints.length) {
        return false;
      }

      //first add intro items with data-step
      _forEach(hints, function (currentElement) {
        // hint animation
        var hintAnimation = currentElement.getAttribute('data-hintanimation');

        if (hintAnimation) {
          hintAnimation = (hintAnimation === 'true');
        } else {
          hintAnimation = this._options.hintAnimation;
        }

        this._introItems.push({
          element: currentElement,
          hint: currentElement.getAttribute('data-hint'),
          hintPosition: currentElement.getAttribute('data-hintposition') || this._options.hintPosition,
          hintAnimation: hintAnimation,
          tooltipClass: currentElement.getAttribute('data-tooltipclass'),
          position: currentElement.getAttribute('data-position') || this._options.tooltipPosition
        });
      }.bind(this));
    }

    _addHints.call(this);

    /* 
    todo:
    these events should be removed at some point 
    */
    DOMEvent.on(document, 'click', _removeHintTooltip, this, false);
    DOMEvent.on(window, 'resize', _reAlignHints, this, true);
  }

  /**
   * Re-aligns all hint elements
   *
   * @api private
   * @method _reAlignHints
   */
  function _reAlignHints() {
    _forEach(this._introItems, function (item) {
      if (typeof(item.targetElement) === 'undefined') {
        return;
      }

      _alignHintPosition.call(this, item.hintPosition, item.element, item.targetElement);
    }.bind(this));
  }

  /**
  * Get a queryselector within the hint wrapper
  *
  * @param {String} selector
  * @return {NodeList|Array}
  */
  function _hintQuerySelectorAll(selector) {
    var hintsWrapper = document.querySelector('.introjs-hints');
    return (hintsWrapper) ? hintsWrapper.querySelectorAll(selector) : [];
  }

  /**
   * Hide a hint
   *
   * @api private
   * @method _hideHint
   */
  function _hideHint(stepId) {
    var hint = _hintQuerySelectorAll('.introjs-hint[data-step="' + stepId + '"]')[0];
    
    _removeHintTooltip.call(this);

    if (hint) {
      _addClass(hint, 'introjs-hidehint');
    }

    // call the callback function (if any)
    if (typeof (this._hintCloseCallback) !== 'undefined') {
      this._hintCloseCallback.call(this, stepId);
    }
  }

  /**
   * Hide all hints
   *
   * @api private
   * @method _hideHints
   */
  function _hideHints() {
    var hints = _hintQuerySelectorAll('.introjs-hint');

    _forEach(hints, function (hint) {
      _hideHint.call(this, hint.getAttribute('data-step'));
    }.bind(this));
  }

  /**
   * Show all hints
   *
   * @api private
   * @method _showHints
   */
  function _showHints() {
    var hints = _hintQuerySelectorAll('.introjs-hint');

    if (hints && hints.length) {
      _forEach(hints, function (hint) {
        _showHint.call(this, hint.getAttribute('data-step'));
      }.bind(this));
    } else {
      _populateHints.call(this, this._targetElement);
    }
  }

  /**
   * Show a hint
   *
   * @api private
   * @method _showHint
   */
  function _showHint(stepId) {
    var hint = _hintQuerySelectorAll('.introjs-hint[data-step="' + stepId + '"]')[0];

    if (hint) {
      _removeClass(hint, /introjs-hidehint/g);
    }
  }

  /**
   * Removes all hint elements on the page
   * Useful when you want to destroy the elements and add them again (e.g. a modal or popup)
   *
   * @api private
   * @method _removeHints
   */
  function _removeHints() {
    var hints = _hintQuerySelectorAll('.introjs-hint');

    _forEach(hints, function (hint) {
      _removeHint.call(this, hint.getAttribute('data-step'));
    }.bind(this));
  }

  /**
   * Remove one single hint element from the page
   * Useful when you want to destroy the element and add them again (e.g. a modal or popup)
   * Use removeHints if you want to remove all elements.
   *
   * @api private
   * @method _removeHint
   */
  function _removeHint(stepId) {
    var hint = _hintQuerySelectorAll('.introjs-hint[data-step="' + stepId + '"]')[0];

    if (hint) {
      hint.parentNode.removeChild(hint);
    }
  }

  /**
   * Add all available hints to the page
   *
   * @api private
   * @method _addHints
   */
  function _addHints() {
    var self = this;

    var hintsWrapper = document.querySelector('.introjs-hints');

    if (hintsWrapper === null) {
      hintsWrapper = document.createElement('div');
      hintsWrapper.className = 'introjs-hints';
    }

    /**
    * Returns an event handler unique to the hint iteration
    * 
    * @param {Integer} i
    * @return {Function}
    */
    var getHintClick = function (i) {
      return function(e) {
        var evt = e ? e : window.event;
        
        if (evt.stopPropagation) {
          evt.stopPropagation();
        }

        if (evt.cancelBubble !== null) {
          evt.cancelBubble = true;
        }

        _showHintDialog.call(self, i);
      };
    };

    _forEach(this._introItems, function(item, i) {
      // avoid append a hint twice
      if (document.querySelector('.introjs-hint[data-step="' + i + '"]')) {
        return;
      }

      var hint = document.createElement('a');
      _setAnchorAsButton(hint);

      hint.onclick = getHintClick(i);

      hint.className = 'introjs-hint';

      if (!item.hintAnimation) {
        _addClass(hint, 'introjs-hint-no-anim');
      }

      // hint's position should be fixed if the target element's position is fixed
      if (_isFixed(item.element)) {
        _addClass(hint, 'introjs-fixedhint');
      }

      var hintDot = document.createElement('div');
      hintDot.className = 'introjs-hint-dot';
      var hintPulse = document.createElement('div');
      hintPulse.className = 'introjs-hint-pulse';

      hint.appendChild(hintDot);
      hint.appendChild(hintPulse);
      hint.setAttribute('data-step', i);

      // we swap the hint element with target element
      // because _setHelperLayerPosition uses `element` property
      item.targetElement = item.element;
      item.element = hint;

      // align the hint position
      _alignHintPosition.call(this, item.hintPosition, hint, item.targetElement);

      hintsWrapper.appendChild(hint);
    }.bind(this));

    // adding the hints wrapper
    document.body.appendChild(hintsWrapper);

    // call the callback function (if any)
    if (typeof (this._hintsAddedCallback) !== 'undefined') {
      this._hintsAddedCallback.call(this);
    }
  }

  /**
   * Aligns hint position
   *
   * @api private
   * @method _alignHintPosition
   * @param {String} position
   * @param {Object} hint
   * @param {Object} element
   */
  function _alignHintPosition(position, hint, element) {
    // get/calculate offset of target element
    var offset = _getOffset.call(this, element);
    var iconWidth = 20;
    var iconHeight = 20;

    // align the hint element
    switch (position) {
      default:
      case 'top-left':
        hint.style.left = offset.left + 'px';
        hint.style.top = offset.top + 'px';
        break;
      case 'top-right':
        hint.style.left = (offset.left + offset.width - iconWidth) + 'px';
        hint.style.top = offset.top + 'px';
        break;
      case 'bottom-left':
        hint.style.left = offset.left + 'px';
        hint.style.top = (offset.top + offset.height - iconHeight) + 'px';
        break;
      case 'bottom-right':
        hint.style.left = (offset.left + offset.width - iconWidth) + 'px';
        hint.style.top = (offset.top + offset.height - iconHeight) + 'px';
        break;
      case 'middle-left':
        hint.style.left = offset.left + 'px';
        hint.style.top = (offset.top + (offset.height - iconHeight) / 2) + 'px';
        break;
      case 'middle-right':
        hint.style.left = (offset.left + offset.width - iconWidth) + 'px';
        hint.style.top = (offset.top + (offset.height - iconHeight) / 2) + 'px';
        break;
      case 'middle-middle':
        hint.style.left = (offset.left + (offset.width - iconWidth) / 2) + 'px';
        hint.style.top = (offset.top + (offset.height - iconHeight) / 2) + 'px';
        break;
      case 'bottom-middle':
        hint.style.left = (offset.left + (offset.width - iconWidth) / 2) + 'px';
        hint.style.top = (offset.top + offset.height - iconHeight) + 'px';
        break;
      case 'top-middle':
        hint.style.left = (offset.left + (offset.width - iconWidth) / 2) + 'px';
        hint.style.top = offset.top + 'px';
        break;
    }
  }

  /**
   * Triggers when user clicks on the hint element
   *
   * @api private
   * @method _showHintDialog
   * @param {Number} stepId
   */
  function _showHintDialog(stepId) {
    var hintElement = document.querySelector('.introjs-hint[data-step="' + stepId + '"]');
    var item = this._introItems[stepId];

    // call the callback function (if any)
    if (typeof (this._hintClickCallback) !== 'undefined') {
      this._hintClickCallback.call(this, hintElement, item, stepId);
    }

    // remove all open tooltips
    var removedStep = _removeHintTooltip.call(this);

    // to toggle the tooltip
    if (parseInt(removedStep, 10) === stepId) {
      return;
    }

    var tooltipLayer = document.createElement('div');
    var tooltipTextLayer = document.createElement('div');
    var arrowLayer = document.createElement('div');
    var referenceLayer = document.createElement('div');

    tooltipLayer.className = 'introjs-tooltip';

    tooltipLayer.onclick = function (e) {
      //IE9 & Other Browsers
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      //IE8 and Lower
      else {
        e.cancelBubble = true;
      }
    };

    tooltipTextLayer.className = 'introjs-tooltiptext';

    var tooltipWrapper = document.createElement('p');
    tooltipWrapper.innerHTML = item.hint;

    var closeButton = document.createElement('a');
    closeButton.className = this._options.buttonClass;
    closeButton.setAttribute('role', 'button');
    closeButton.innerHTML = this._options.hintButtonLabel;
    closeButton.onclick = _hideHint.bind(this, stepId);

    tooltipTextLayer.appendChild(tooltipWrapper);
    tooltipTextLayer.appendChild(closeButton);

    arrowLayer.className = 'introjs-arrow';
    tooltipLayer.appendChild(arrowLayer);

    tooltipLayer.appendChild(tooltipTextLayer);

    // set current step for _placeTooltip function
    this._currentStep = hintElement.getAttribute('data-step');

    // align reference layer position
    referenceLayer.className = 'introjs-tooltipReferenceLayer introjs-hintReference';
    referenceLayer.setAttribute('data-step', hintElement.getAttribute('data-step'));
    _setHelperLayerPosition.call(this, referenceLayer);

    referenceLayer.appendChild(tooltipLayer);
    document.body.appendChild(referenceLayer);

    //set proper position
    _placeTooltip.call(this, hintElement, tooltipLayer, arrowLayer, null, true);
  }

  /**
   * Get an element position on the page
   * Thanks to `meouw`: http://stackoverflow.com/a/442474/375966
   *
   * @api private
   * @method _getOffset
   * @param {Object} element
   * @returns Element's position info
   */
  function _getOffset(element) {
    var body = document.body;
    var docEl = document.documentElement;
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
    var x = element.getBoundingClientRect();
    return {
      top: x.top + scrollTop,
      width: x.width,
      height: x.height,
      left: x.left + scrollLeft
    };
  }

  /**
  * Find the nearest scrollable parent
  * copied from https://stackoverflow.com/questions/35939886/find-first-scrollable-parent
  *
  * @param Element element
  * @return Element
  */
  function _getScrollParent(element) {
    var style = window.getComputedStyle(element);
    var excludeStaticParent = (style.position === "absolute");
    var overflowRegex = /(auto|scroll)/;

    if (style.position === "fixed") return document.body;
    
    for (var parent = element; (parent = parent.parentElement);) {
      style = window.getComputedStyle(parent);
      if (excludeStaticParent && style.position === "static") {
        continue;
      }
      if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) return parent;
    }

    return document.body;
  }

  /**
  * scroll a scrollable element to a child element
  *
  * @param Element parent
  * @param Element element
  * @return Null
  */
  function _scrollParentToElement (parent, element) {
    parent.scrollTop = element.offsetTop - parent.offsetTop;
  }

  /**
   * Gets the current progress percentage
   *
   * @api private
   * @method _getProgress
   * @returns current progress percentage
   */
  function _getProgress() {
    // Steps are 0 indexed
    var currentStep = parseInt((this._currentStep + 1), 10);
    return ((currentStep / this._introItems.length) * 100);
  }

  /**
   * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
   * via: http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
   *
   * @param obj1
   * @param obj2
   * @returns obj3 a new object based on obj1 and obj2
   */
  function _mergeOptions(obj1,obj2) {
    var obj3 = {},
      attrname;
    for (attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
  }

  var introJs = function (targetElm) {
    var instance;

    if (typeof (targetElm) === 'object') {
      //Ok, create a new instance
      instance = new IntroJs(targetElm);

    } else if (typeof (targetElm) === 'string') {
      //select the target element with query selector
      var targetElement = document.querySelector(targetElm);

      if (targetElement) {
        instance = new IntroJs(targetElement);
      } else {
        throw new Error('There is no element with given selector.');
      }
    } else {
      instance = new IntroJs(document.body);
    }
    // add instance to list of _instances
    // passing group to _stamp to increment
    // from 0 onward somewhat reliably
    introJs.instances[ _stamp(instance, 'introjs-instance') ] = instance;

    return instance;
  };

  /**
   * Current IntroJs version
   *
   * @property version
   * @type String
   */
  introJs.version = VERSION;

  /**
  * key-val object helper for introJs instances
  *
  * @property instances
  * @type Object
  */
  introJs.instances = {};

  //Prototype
  introJs.fn = IntroJs.prototype = {
    clone: function () {
      return new IntroJs(this);
    },
    setOption: function(option, value) {
      this._options[option] = value;
      return this;
    },
    setOptions: function(options) {
      this._options = _mergeOptions(this._options, options);
      return this;
    },
    start: function (group) {
      _introForElement.call(this, this._targetElement, group);
      return this;
    },
    goToStep: function(step) {
      _goToStep.call(this, step);
      return this;
    },
    addStep: function(options) {
      if (!this._options.steps) {
        this._options.steps = [];
      }

      this._options.steps.push(options);

      return this;
    },
    addSteps: function(steps) {
      if (!steps.length) return;

      for(var index = 0; index < steps.length; index++) {
        this.addStep(steps[index]);
      }

      return this;
    },
    goToStepNumber: function(step) {
      _goToStepNumber.call(this, step);

      return this;
    },
    nextStep: function() {
      _nextStep.call(this);
      return this;
    },
    previousStep: function() {
      _previousStep.call(this);
      return this;
    },
    exit: function(force) {
      _exitIntro.call(this, this._targetElement, force);
      return this;
    },
    refresh: function() {
      _refresh.call(this);
      return this;
    },
    onbeforechange: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._introBeforeChangeCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onbeforechange was not a function');
      }
      return this;
    },
    onchange: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._introChangeCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onchange was not a function.');
      }
      return this;
    },
    onafterchange: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._introAfterChangeCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onafterchange was not a function');
      }
      return this;
    },
    oncomplete: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._introCompleteCallback = providedCallback;
      } else {
        throw new Error('Provided callback for oncomplete was not a function.');
      }
      return this;
    },
    onhintsadded: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._hintsAddedCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onhintsadded was not a function.');
      }
      return this;
    },
    onhintclick: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._hintClickCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onhintclick was not a function.');
      }
      return this;
    },
    onhintclose: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._hintCloseCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onhintclose was not a function.');
      }
      return this;
    },
    onexit: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._introExitCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onexit was not a function.');
      }
      return this;
    },
    onskip: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._introSkipCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onskip was not a function.');
      }
      return this;
    },
    onbeforeexit: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._introBeforeExitCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onbeforeexit was not a function.');
      }
      return this;
    },
    addHints: function() {
      _populateHints.call(this, this._targetElement);
      return this;
    },
    hideHint: function (stepId) {
      _hideHint.call(this, stepId);
      return this;
    },
    hideHints: function () {
      _hideHints.call(this);
      return this;
    },
    showHint: function (stepId) {
      _showHint.call(this, stepId);
      return this;
    },
    showHints: function () {
      _showHints.call(this);
      return this;
    },
    removeHints: function () {
      _removeHints.call(this);
      return this;
    },
    removeHint: function (stepId) {
      _removeHint.call(this, stepId);
      return this;
    },
    showHintDialog: function (stepId) {
      _showHintDialog.call(this, stepId);
      return this;
    }
  };

  return introJs;
});


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*!
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com

Version 1.8.7
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011-2018 Harvest http://getharvest.com

MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
This file is generated by `grunt build`, do not edit it by hand.
*/

(function() {
  var $, AbstractChosen, Chosen, SelectParser,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  SelectParser = (function() {
    function SelectParser() {
      this.options_index = 0;
      this.parsed = [];
    }

    SelectParser.prototype.add_node = function(child) {
      if (child.nodeName.toUpperCase() === "OPTGROUP") {
        return this.add_group(child);
      } else {
        return this.add_option(child);
      }
    };

    SelectParser.prototype.add_group = function(group) {
      var group_position, i, len, option, ref, results1;
      group_position = this.parsed.length;
      this.parsed.push({
        array_index: group_position,
        group: true,
        label: group.label,
        title: group.title ? group.title : void 0,
        children: 0,
        disabled: group.disabled,
        classes: group.className
      });
      ref = group.childNodes;
      results1 = [];
      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        results1.push(this.add_option(option, group_position, group.disabled));
      }
      return results1;
    };

    SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
      if (option.nodeName.toUpperCase() === "OPTION") {
        if (option.text !== "") {
          if (group_position != null) {
            this.parsed[group_position].children += 1;
          }
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: option.value,
            text: option.text,
            html: option.innerHTML,
            title: option.title ? option.title : void 0,
            selected: option.selected,
            disabled: group_disabled === true ? group_disabled : option.disabled,
            group_array_index: group_position,
            group_label: group_position != null ? this.parsed[group_position].label : null,
            classes: option.className,
            style: option.style.cssText
          });
        } else {
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: true
          });
        }
        return this.options_index += 1;
      }
    };

    return SelectParser;

  })();

  SelectParser.select_to_array = function(select) {
    var child, i, len, parser, ref;
    parser = new SelectParser();
    ref = select.childNodes;
    for (i = 0, len = ref.length; i < len; i++) {
      child = ref[i];
      parser.add_node(child);
    }
    return parser.parsed;
  };

  AbstractChosen = (function() {
    function AbstractChosen(form_field, options1) {
      this.form_field = form_field;
      this.options = options1 != null ? options1 : {};
      this.label_click_handler = bind(this.label_click_handler, this);
      if (!AbstractChosen.browser_is_supported()) {
        return;
      }
      this.is_multiple = this.form_field.multiple;
      this.set_default_text();
      this.set_default_values();
      this.setup();
      this.set_up_html();
      this.register_observers();
      this.on_ready();
    }

    AbstractChosen.prototype.set_default_values = function() {
      this.click_test_action = (function(_this) {
        return function(evt) {
          return _this.test_active_click(evt);
        };
      })(this);
      this.activate_action = (function(_this) {
        return function(evt) {
          return _this.activate_field(evt);
        };
      })(this);
      this.active_field = false;
      this.mouse_on_container = false;
      this.results_showing = false;
      this.result_highlighted = null;
      this.is_rtl = this.options.rtl || /\bchosen-rtl\b/.test(this.form_field.className);
      this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
      this.disable_search_threshold = this.options.disable_search_threshold || 0;
      this.disable_search = this.options.disable_search || false;
      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
      this.group_search = this.options.group_search != null ? this.options.group_search : true;
      this.search_contains = this.options.search_contains || false;
      this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
      this.max_selected_options = this.options.max_selected_options || Infinity;
      this.inherit_select_classes = this.options.inherit_select_classes || false;
      this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
      this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
      this.include_group_label_in_selected = this.options.include_group_label_in_selected || false;
      this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY;
      this.case_sensitive_search = this.options.case_sensitive_search || false;
      return this.hide_results_on_select = this.options.hide_results_on_select != null ? this.options.hide_results_on_select : true;
    };

    AbstractChosen.prototype.set_default_text = function() {
      if (this.form_field.getAttribute("data-placeholder")) {
        this.default_text = this.form_field.getAttribute("data-placeholder");
      } else if (this.is_multiple) {
        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
      } else {
        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
      }
      this.default_text = this.escape_html(this.default_text);
      return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
    };

    AbstractChosen.prototype.choice_label = function(item) {
      if (this.include_group_label_in_selected && (item.group_label != null)) {
        return "<b class='group-name'>" + (this.escape_html(item.group_label)) + "</b>" + item.html;
      } else {
        return item.html;
      }
    };

    AbstractChosen.prototype.mouse_enter = function() {
      return this.mouse_on_container = true;
    };

    AbstractChosen.prototype.mouse_leave = function() {
      return this.mouse_on_container = false;
    };

    AbstractChosen.prototype.input_focus = function(evt) {
      if (this.is_multiple) {
        if (!this.active_field) {
          return setTimeout(((function(_this) {
            return function() {
              return _this.container_mousedown();
            };
          })(this)), 50);
        }
      } else {
        if (!this.active_field) {
          return this.activate_field();
        }
      }
    };

    AbstractChosen.prototype.input_blur = function(evt) {
      if (!this.mouse_on_container) {
        this.active_field = false;
        return setTimeout(((function(_this) {
          return function() {
            return _this.blur_test();
          };
        })(this)), 100);
      }
    };

    AbstractChosen.prototype.label_click_handler = function(evt) {
      if (this.is_multiple) {
        return this.container_mousedown(evt);
      } else {
        return this.activate_field();
      }
    };

    AbstractChosen.prototype.results_option_build = function(options) {
      var content, data, data_content, i, len, ref, shown_results;
      content = '';
      shown_results = 0;
      ref = this.results_data;
      for (i = 0, len = ref.length; i < len; i++) {
        data = ref[i];
        data_content = '';
        if (data.group) {
          data_content = this.result_add_group(data);
        } else {
          data_content = this.result_add_option(data);
        }
        if (data_content !== '') {
          shown_results++;
          content += data_content;
        }
        if (options != null ? options.first : void 0) {
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.single_set_selected_text(this.choice_label(data));
          }
        }
        if (shown_results >= this.max_shown_results) {
          break;
        }
      }
      return content;
    };

    AbstractChosen.prototype.result_add_option = function(option) {
      var classes, option_el;
      if (!option.search_match) {
        return '';
      }
      if (!this.include_option_in_results(option)) {
        return '';
      }
      classes = [];
      if (!option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("active-result");
      }
      if (option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("disabled-result");
      }
      if (option.selected) {
        classes.push("result-selected");
      }
      if (option.group_array_index != null) {
        classes.push("group-option");
      }
      if (option.classes !== "") {
        classes.push(option.classes);
      }
      option_el = document.createElement("li");
      option_el.className = classes.join(" ");
      if (option.style) {
        option_el.style.cssText = option.style;
      }
      option_el.setAttribute("data-option-array-index", option.array_index);
      option_el.innerHTML = option.highlighted_html || option.html;
      if (option.title) {
        option_el.title = option.title;
      }
      return this.outerHTML(option_el);
    };

    AbstractChosen.prototype.result_add_group = function(group) {
      var classes, group_el;
      if (!(group.search_match || group.group_match)) {
        return '';
      }
      if (!(group.active_options > 0)) {
        return '';
      }
      classes = [];
      classes.push("group-result");
      if (group.classes) {
        classes.push(group.classes);
      }
      group_el = document.createElement("li");
      group_el.className = classes.join(" ");
      group_el.innerHTML = group.highlighted_html || this.escape_html(group.label);
      if (group.title) {
        group_el.title = group.title;
      }
      return this.outerHTML(group_el);
    };

    AbstractChosen.prototype.results_update_field = function() {
      this.set_default_text();
      if (!this.is_multiple) {
        this.results_reset_cleanup();
      }
      this.result_clear_highlight();
      this.results_build();
      if (this.results_showing) {
        return this.winnow_results();
      }
    };

    AbstractChosen.prototype.reset_single_select_options = function() {
      var i, len, ref, result, results1;
      ref = this.results_data;
      results1 = [];
      for (i = 0, len = ref.length; i < len; i++) {
        result = ref[i];
        if (result.selected) {
          results1.push(result.selected = false);
        } else {
          results1.push(void 0);
        }
      }
      return results1;
    };

    AbstractChosen.prototype.results_toggle = function() {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.results_search = function(evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.winnow_results = function(options) {
      var escapedQuery, fix, i, len, option, prefix, query, ref, regex, results, results_group, search_match, startpos, suffix, text;
      this.no_results_clear();
      results = 0;
      query = this.get_search_text();
      escapedQuery = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      regex = this.get_search_regex(escapedQuery);
      ref = this.results_data;
      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        option.search_match = false;
        results_group = null;
        search_match = null;
        option.highlighted_html = '';
        if (this.include_option_in_results(option)) {
          if (option.group) {
            option.group_match = false;
            option.active_options = 0;
          }
          if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
            results_group = this.results_data[option.group_array_index];
            if (results_group.active_options === 0 && results_group.search_match) {
              results += 1;
            }
            results_group.active_options += 1;
          }
          text = option.group ? option.label : option.text;
          if (!(option.group && !this.group_search)) {
            search_match = this.search_string_match(text, regex);
            option.search_match = search_match != null;
            if (option.search_match && !option.group) {
              results += 1;
            }
            if (option.search_match) {
              if (query.length) {
                startpos = search_match.index;
                prefix = text.slice(0, startpos);
                fix = text.slice(startpos, startpos + query.length);
                suffix = text.slice(startpos + query.length);
                option.highlighted_html = (this.escape_html(prefix)) + "<em>" + (this.escape_html(fix)) + "</em>" + (this.escape_html(suffix));
              }
              if (results_group != null) {
                results_group.group_match = true;
              }
            } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
              option.search_match = true;
            }
          }
        }
      }
      this.result_clear_highlight();
      if (results < 1 && query.length) {
        this.update_results_content("");
        return this.no_results(query);
      } else {
        this.update_results_content(this.results_option_build());
        if (!(options != null ? options.skip_highlight : void 0)) {
          return this.winnow_results_set_highlight();
        }
      }
    };

    AbstractChosen.prototype.get_search_regex = function(escaped_search_string) {
      var regex_flag, regex_string;
      regex_string = this.search_contains ? escaped_search_string : "(^|\\s|\\b)" + escaped_search_string + "[^\\s]*";
      if (!(this.enable_split_word_search || this.search_contains)) {
        regex_string = "^" + regex_string;
      }
      regex_flag = this.case_sensitive_search ? "" : "i";
      return new RegExp(regex_string, regex_flag);
    };

    AbstractChosen.prototype.search_string_match = function(search_string, regex) {
      var match;
      match = regex.exec(search_string);
      if (!this.search_contains && (match != null ? match[1] : void 0)) {
        match.index += 1;
      }
      return match;
    };

    AbstractChosen.prototype.choices_count = function() {
      var i, len, option, ref;
      if (this.selected_option_count != null) {
        return this.selected_option_count;
      }
      this.selected_option_count = 0;
      ref = this.form_field.options;
      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        if (option.selected) {
          this.selected_option_count += 1;
        }
      }
      return this.selected_option_count;
    };

    AbstractChosen.prototype.choices_click = function(evt) {
      evt.preventDefault();
      this.activate_field();
      if (!(this.results_showing || this.is_disabled)) {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.keydown_checker = function(evt) {
      var ref, stroke;
      stroke = (ref = evt.which) != null ? ref : evt.keyCode;
      this.search_field_scale();
      if (stroke !== 8 && this.pending_backstroke) {
        this.clear_backstroke();
      }
      switch (stroke) {
        case 8:
          this.backstroke_length = this.get_search_field_value().length;
          break;
        case 9:
          if (this.results_showing && !this.is_multiple) {
            this.result_select(evt);
          }
          this.mouse_on_container = false;
          break;
        case 13:
          if (this.results_showing) {
            evt.preventDefault();
          }
          break;
        case 27:
          if (this.results_showing) {
            evt.preventDefault();
          }
          break;
        case 32:
          if (this.disable_search) {
            evt.preventDefault();
          }
          break;
        case 38:
          evt.preventDefault();
          this.keyup_arrow();
          break;
        case 40:
          evt.preventDefault();
          this.keydown_arrow();
          break;
      }
    };

    AbstractChosen.prototype.keyup_checker = function(evt) {
      var ref, stroke;
      stroke = (ref = evt.which) != null ? ref : evt.keyCode;
      this.search_field_scale();
      switch (stroke) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
            this.keydown_backstroke();
          } else if (!this.pending_backstroke) {
            this.result_clear_highlight();
            this.results_search();
          }
          break;
        case 13:
          evt.preventDefault();
          if (this.results_showing) {
            this.result_select(evt);
          }
          break;
        case 27:
          if (this.results_showing) {
            this.results_hide();
          }
          break;
        case 9:
        case 16:
        case 17:
        case 18:
        case 38:
        case 40:
        case 91:
          break;
        default:
          this.results_search();
          break;
      }
    };

    AbstractChosen.prototype.clipboard_event_checker = function(evt) {
      if (this.is_disabled) {
        return;
      }
      return setTimeout(((function(_this) {
        return function() {
          return _this.results_search();
        };
      })(this)), 50);
    };

    AbstractChosen.prototype.container_width = function() {
      if (this.options.width != null) {
        return this.options.width;
      } else {
        return this.form_field.offsetWidth + "px";
      }
    };

    AbstractChosen.prototype.include_option_in_results = function(option) {
      if (this.is_multiple && (!this.display_selected_options && option.selected)) {
        return false;
      }
      if (!this.display_disabled_options && option.disabled) {
        return false;
      }
      if (option.empty) {
        return false;
      }
      return true;
    };

    AbstractChosen.prototype.search_results_touchstart = function(evt) {
      this.touch_started = true;
      return this.search_results_mouseover(evt);
    };

    AbstractChosen.prototype.search_results_touchmove = function(evt) {
      this.touch_started = false;
      return this.search_results_mouseout(evt);
    };

    AbstractChosen.prototype.search_results_touchend = function(evt) {
      if (this.touch_started) {
        return this.search_results_mouseup(evt);
      }
    };

    AbstractChosen.prototype.outerHTML = function(element) {
      var tmp;
      if (element.outerHTML) {
        return element.outerHTML;
      }
      tmp = document.createElement("div");
      tmp.appendChild(element);
      return tmp.innerHTML;
    };

    AbstractChosen.prototype.get_single_html = function() {
      return "<a class=\"chosen-single chosen-default\">\n  <span>" + this.default_text + "</span>\n  <div><b></b></div>\n</a>\n<div class=\"chosen-drop\">\n  <div class=\"chosen-search\">\n    <input class=\"chosen-search-input\" type=\"text\" autocomplete=\"off\" />\n  </div>\n  <ul class=\"chosen-results\"></ul>\n</div>";
    };

    AbstractChosen.prototype.get_multi_html = function() {
      return "<ul class=\"chosen-choices\">\n  <li class=\"search-field\">\n    <input class=\"chosen-search-input\" type=\"text\" autocomplete=\"off\" value=\"" + this.default_text + "\" />\n  </li>\n</ul>\n<div class=\"chosen-drop\">\n  <ul class=\"chosen-results\"></ul>\n</div>";
    };

    AbstractChosen.prototype.get_no_results_html = function(terms) {
      return "<li class=\"no-results\">\n  " + this.results_none_found + " <span>" + (this.escape_html(terms)) + "</span>\n</li>";
    };

    AbstractChosen.browser_is_supported = function() {
      if ("Microsoft Internet Explorer" === window.navigator.appName) {
        return document.documentMode >= 8;
      }
      if (/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent)) {
        return false;
      }
      return true;
    };

    AbstractChosen.default_multiple_text = "Select Some Options";

    AbstractChosen.default_single_text = "Select an Option";

    AbstractChosen.default_no_result_text = "No results match";

    return AbstractChosen;

  })();

  $ = jQuery;

  $.fn.extend({
    chosen: function(options) {
      if (!AbstractChosen.browser_is_supported()) {
        return this;
      }
      return this.each(function(input_field) {
        var $this, chosen;
        $this = $(this);
        chosen = $this.data('chosen');
        if (options === 'destroy') {
          if (chosen instanceof Chosen) {
            chosen.destroy();
          }
          return;
        }
        if (!(chosen instanceof Chosen)) {
          $this.data('chosen', new Chosen(this, options));
        }
      });
    }
  });

  Chosen = (function(superClass) {
    extend(Chosen, superClass);

    function Chosen() {
      return Chosen.__super__.constructor.apply(this, arguments);
    }

    Chosen.prototype.setup = function() {
      this.form_field_jq = $(this.form_field);
      return this.current_selectedIndex = this.form_field.selectedIndex;
    };

    Chosen.prototype.set_up_html = function() {
      var container_classes, container_props;
      container_classes = ["chosen-container"];
      container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
      if (this.inherit_select_classes && this.form_field.className) {
        container_classes.push(this.form_field.className);
      }
      if (this.is_rtl) {
        container_classes.push("chosen-rtl");
      }
      container_props = {
        'class': container_classes.join(' '),
        'title': this.form_field.title
      };
      if (this.form_field.id.length) {
        container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
      }
      this.container = $("<div />", container_props);
      this.container.width(this.container_width());
      if (this.is_multiple) {
        this.container.html(this.get_multi_html());
      } else {
        this.container.html(this.get_single_html());
      }
      this.form_field_jq.hide().after(this.container);
      this.dropdown = this.container.find('div.chosen-drop').first();
      this.search_field = this.container.find('input').first();
      this.search_results = this.container.find('ul.chosen-results').first();
      this.search_field_scale();
      this.search_no_results = this.container.find('li.no-results').first();
      if (this.is_multiple) {
        this.search_choices = this.container.find('ul.chosen-choices').first();
        this.search_container = this.container.find('li.search-field').first();
      } else {
        this.search_container = this.container.find('div.chosen-search').first();
        this.selected_item = this.container.find('.chosen-single').first();
      }
      this.results_build();
      this.set_tab_index();
      return this.set_label_behavior();
    };

    Chosen.prototype.on_ready = function() {
      return this.form_field_jq.trigger("chosen:ready", {
        chosen: this
      });
    };

    Chosen.prototype.register_observers = function() {
      this.container.on('touchstart.chosen', (function(_this) {
        return function(evt) {
          _this.container_mousedown(evt);
        };
      })(this));
      this.container.on('touchend.chosen', (function(_this) {
        return function(evt) {
          _this.container_mouseup(evt);
        };
      })(this));
      this.container.on('mousedown.chosen', (function(_this) {
        return function(evt) {
          _this.container_mousedown(evt);
        };
      })(this));
      this.container.on('mouseup.chosen', (function(_this) {
        return function(evt) {
          _this.container_mouseup(evt);
        };
      })(this));
      this.container.on('mouseenter.chosen', (function(_this) {
        return function(evt) {
          _this.mouse_enter(evt);
        };
      })(this));
      this.container.on('mouseleave.chosen', (function(_this) {
        return function(evt) {
          _this.mouse_leave(evt);
        };
      })(this));
      this.search_results.on('mouseup.chosen', (function(_this) {
        return function(evt) {
          _this.search_results_mouseup(evt);
        };
      })(this));
      this.search_results.on('mouseover.chosen', (function(_this) {
        return function(evt) {
          _this.search_results_mouseover(evt);
        };
      })(this));
      this.search_results.on('mouseout.chosen', (function(_this) {
        return function(evt) {
          _this.search_results_mouseout(evt);
        };
      })(this));
      this.search_results.on('mousewheel.chosen DOMMouseScroll.chosen', (function(_this) {
        return function(evt) {
          _this.search_results_mousewheel(evt);
        };
      })(this));
      this.search_results.on('touchstart.chosen', (function(_this) {
        return function(evt) {
          _this.search_results_touchstart(evt);
        };
      })(this));
      this.search_results.on('touchmove.chosen', (function(_this) {
        return function(evt) {
          _this.search_results_touchmove(evt);
        };
      })(this));
      this.search_results.on('touchend.chosen', (function(_this) {
        return function(evt) {
          _this.search_results_touchend(evt);
        };
      })(this));
      this.form_field_jq.on("chosen:updated.chosen", (function(_this) {
        return function(evt) {
          _this.results_update_field(evt);
        };
      })(this));
      this.form_field_jq.on("chosen:activate.chosen", (function(_this) {
        return function(evt) {
          _this.activate_field(evt);
        };
      })(this));
      this.form_field_jq.on("chosen:open.chosen", (function(_this) {
        return function(evt) {
          _this.container_mousedown(evt);
        };
      })(this));
      this.form_field_jq.on("chosen:close.chosen", (function(_this) {
        return function(evt) {
          _this.close_field(evt);
        };
      })(this));
      this.search_field.on('blur.chosen', (function(_this) {
        return function(evt) {
          _this.input_blur(evt);
        };
      })(this));
      this.search_field.on('keyup.chosen', (function(_this) {
        return function(evt) {
          _this.keyup_checker(evt);
        };
      })(this));
      this.search_field.on('keydown.chosen', (function(_this) {
        return function(evt) {
          _this.keydown_checker(evt);
        };
      })(this));
      this.search_field.on('focus.chosen', (function(_this) {
        return function(evt) {
          _this.input_focus(evt);
        };
      })(this));
      this.search_field.on('cut.chosen', (function(_this) {
        return function(evt) {
          _this.clipboard_event_checker(evt);
        };
      })(this));
      this.search_field.on('paste.chosen', (function(_this) {
        return function(evt) {
          _this.clipboard_event_checker(evt);
        };
      })(this));
      if (this.is_multiple) {
        return this.search_choices.on('click.chosen', (function(_this) {
          return function(evt) {
            _this.choices_click(evt);
          };
        })(this));
      } else {
        return this.container.on('click.chosen', function(evt) {
          evt.preventDefault();
        });
      }
    };

    Chosen.prototype.destroy = function() {
      $(this.container[0].ownerDocument).off('click.chosen', this.click_test_action);
      if (this.form_field_label.length > 0) {
        this.form_field_label.off('click.chosen');
      }
      if (this.search_field[0].tabIndex) {
        this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
      }
      this.container.remove();
      this.form_field_jq.removeData('chosen');
      return this.form_field_jq.show();
    };

    Chosen.prototype.search_field_disabled = function() {
      this.is_disabled = this.form_field.disabled || this.form_field_jq.parents('fieldset').is(':disabled');
      this.container.toggleClass('chosen-disabled', this.is_disabled);
      this.search_field[0].disabled = this.is_disabled;
      if (!this.is_multiple) {
        this.selected_item.off('focus.chosen', this.activate_field);
      }
      if (this.is_disabled) {
        return this.close_field();
      } else if (!this.is_multiple) {
        return this.selected_item.on('focus.chosen', this.activate_field);
      }
    };

    Chosen.prototype.container_mousedown = function(evt) {
      var ref;
      if (this.is_disabled) {
        return;
      }
      if (evt && ((ref = evt.type) === 'mousedown' || ref === 'touchstart') && !this.results_showing) {
        evt.preventDefault();
      }
      if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
        if (!this.active_field) {
          if (this.is_multiple) {
            this.search_field.val("");
          }
          $(this.container[0].ownerDocument).on('click.chosen', this.click_test_action);
          this.results_show();
        } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
          evt.preventDefault();
          this.results_toggle();
        }
        return this.activate_field();
      }
    };

    Chosen.prototype.container_mouseup = function(evt) {
      if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
        return this.results_reset(evt);
      }
    };

    Chosen.prototype.search_results_mousewheel = function(evt) {
      var delta;
      if (evt.originalEvent) {
        delta = evt.originalEvent.deltaY || -evt.originalEvent.wheelDelta || evt.originalEvent.detail;
      }
      if (delta != null) {
        evt.preventDefault();
        if (evt.type === 'DOMMouseScroll') {
          delta = delta * 40;
        }
        return this.search_results.scrollTop(delta + this.search_results.scrollTop());
      }
    };

    Chosen.prototype.blur_test = function(evt) {
      if (!this.active_field && this.container.hasClass("chosen-container-active")) {
        return this.close_field();
      }
    };

    Chosen.prototype.close_field = function() {
      $(this.container[0].ownerDocument).off("click.chosen", this.click_test_action);
      this.active_field = false;
      this.results_hide();
      this.container.removeClass("chosen-container-active");
      this.clear_backstroke();
      this.show_search_field_default();
      this.search_field_scale();
      return this.search_field.blur();
    };

    Chosen.prototype.activate_field = function() {
      if (this.is_disabled) {
        return;
      }
      this.container.addClass("chosen-container-active");
      this.active_field = true;
      this.search_field.val(this.search_field.val());
      return this.search_field.focus();
    };

    Chosen.prototype.test_active_click = function(evt) {
      var active_container;
      active_container = $(evt.target).closest('.chosen-container');
      if (active_container.length && this.container[0] === active_container[0]) {
        return this.active_field = true;
      } else {
        return this.close_field();
      }
    };

    Chosen.prototype.results_build = function() {
      this.parsing = true;
      this.selected_option_count = null;
      this.results_data = SelectParser.select_to_array(this.form_field);
      if (this.is_multiple) {
        this.search_choices.find("li.search-choice").remove();
      } else {
        this.single_set_selected_text();
        if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
          this.search_field[0].readOnly = true;
          this.container.addClass("chosen-container-single-nosearch");
        } else {
          this.search_field[0].readOnly = false;
          this.container.removeClass("chosen-container-single-nosearch");
        }
      }
      this.update_results_content(this.results_option_build({
        first: true
      }));
      this.search_field_disabled();
      this.show_search_field_default();
      this.search_field_scale();
      return this.parsing = false;
    };

    Chosen.prototype.result_do_highlight = function(el) {
      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
      if (el.length) {
        this.result_clear_highlight();
        this.result_highlight = el;
        this.result_highlight.addClass("highlighted");
        maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
        visible_top = this.search_results.scrollTop();
        visible_bottom = maxHeight + visible_top;
        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
        high_bottom = high_top + this.result_highlight.outerHeight();
        if (high_bottom >= visible_bottom) {
          return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
        } else if (high_top < visible_top) {
          return this.search_results.scrollTop(high_top);
        }
      }
    };

    Chosen.prototype.result_clear_highlight = function() {
      if (this.result_highlight) {
        this.result_highlight.removeClass("highlighted");
      }
      return this.result_highlight = null;
    };

    Chosen.prototype.results_show = function() {
      if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
        this.form_field_jq.trigger("chosen:maxselected", {
          chosen: this
        });
        return false;
      }
      this.container.addClass("chosen-with-drop");
      this.results_showing = true;
      this.search_field.focus();
      this.search_field.val(this.get_search_field_value());
      this.winnow_results();
      return this.form_field_jq.trigger("chosen:showing_dropdown", {
        chosen: this
      });
    };

    Chosen.prototype.update_results_content = function(content) {
      return this.search_results.html(content);
    };

    Chosen.prototype.results_hide = function() {
      if (this.results_showing) {
        this.result_clear_highlight();
        this.container.removeClass("chosen-with-drop");
        this.form_field_jq.trigger("chosen:hiding_dropdown", {
          chosen: this
        });
      }
      return this.results_showing = false;
    };

    Chosen.prototype.set_tab_index = function(el) {
      var ti;
      if (this.form_field.tabIndex) {
        ti = this.form_field.tabIndex;
        this.form_field.tabIndex = -1;
        return this.search_field[0].tabIndex = ti;
      }
    };

    Chosen.prototype.set_label_behavior = function() {
      this.form_field_label = this.form_field_jq.parents("label");
      if (!this.form_field_label.length && this.form_field.id.length) {
        this.form_field_label = $("label[for='" + this.form_field.id + "']");
      }
      if (this.form_field_label.length > 0) {
        return this.form_field_label.on('click.chosen', this.label_click_handler);
      }
    };

    Chosen.prototype.show_search_field_default = function() {
      if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
        this.search_field.val(this.default_text);
        return this.search_field.addClass("default");
      } else {
        this.search_field.val("");
        return this.search_field.removeClass("default");
      }
    };

    Chosen.prototype.search_results_mouseup = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target.length) {
        this.result_highlight = target;
        this.result_select(evt);
        return this.search_field.focus();
      }
    };

    Chosen.prototype.search_results_mouseover = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target) {
        return this.result_do_highlight(target);
      }
    };

    Chosen.prototype.search_results_mouseout = function(evt) {
      if ($(evt.target).hasClass("active-result") || $(evt.target).parents('.active-result').first()) {
        return this.result_clear_highlight();
      }
    };

    Chosen.prototype.choice_build = function(item) {
      var choice, close_link;
      choice = $('<li />', {
        "class": "search-choice"
      }).html("<span>" + (this.choice_label(item)) + "</span>");
      if (item.disabled) {
        choice.addClass('search-choice-disabled');
      } else {
        close_link = $('<a />', {
          "class": 'search-choice-close',
          'data-option-array-index': item.array_index
        });
        close_link.on('click.chosen', (function(_this) {
          return function(evt) {
            return _this.choice_destroy_link_click(evt);
          };
        })(this));
        choice.append(close_link);
      }
      return this.search_container.before(choice);
    };

    Chosen.prototype.choice_destroy_link_click = function(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      if (!this.is_disabled) {
        return this.choice_destroy($(evt.target));
      }
    };

    Chosen.prototype.choice_destroy = function(link) {
      if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
        if (this.active_field) {
          this.search_field.focus();
        } else {
          this.show_search_field_default();
        }
        if (this.is_multiple && this.choices_count() > 0 && this.get_search_field_value().length < 1) {
          this.results_hide();
        }
        link.parents('li').first().remove();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.results_reset = function() {
      this.reset_single_select_options();
      this.form_field.options[0].selected = true;
      this.single_set_selected_text();
      this.show_search_field_default();
      this.results_reset_cleanup();
      this.trigger_form_field_change();
      if (this.active_field) {
        return this.results_hide();
      }
    };

    Chosen.prototype.results_reset_cleanup = function() {
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.selected_item.find("abbr").remove();
    };

    Chosen.prototype.result_select = function(evt) {
      var high, item;
      if (this.result_highlight) {
        high = this.result_highlight;
        this.result_clear_highlight();
        if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
          this.form_field_jq.trigger("chosen:maxselected", {
            chosen: this
          });
          return false;
        }
        if (this.is_multiple) {
          high.removeClass("active-result");
        } else {
          this.reset_single_select_options();
        }
        high.addClass("result-selected");
        item = this.results_data[high[0].getAttribute("data-option-array-index")];
        item.selected = true;
        this.form_field.options[item.options_index].selected = true;
        this.selected_option_count = null;
        if (this.is_multiple) {
          this.choice_build(item);
        } else {
          this.single_set_selected_text(this.choice_label(item));
        }
        if (this.is_multiple && (!this.hide_results_on_select || (evt.metaKey || evt.ctrlKey))) {
          if (evt.metaKey || evt.ctrlKey) {
            this.winnow_results({
              skip_highlight: true
            });
          } else {
            this.search_field.val("");
            this.winnow_results();
          }
        } else {
          this.results_hide();
          this.show_search_field_default();
        }
        if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
          this.trigger_form_field_change({
            selected: this.form_field.options[item.options_index].value
          });
        }
        this.current_selectedIndex = this.form_field.selectedIndex;
        evt.preventDefault();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.single_set_selected_text = function(text) {
      if (text == null) {
        text = this.default_text;
      }
      if (text === this.default_text) {
        this.selected_item.addClass("chosen-default");
      } else {
        this.single_deselect_control_build();
        this.selected_item.removeClass("chosen-default");
      }
      return this.selected_item.find("span").html(text);
    };

    Chosen.prototype.result_deselect = function(pos) {
      var result_data;
      result_data = this.results_data[pos];
      if (!this.form_field.options[result_data.options_index].disabled) {
        result_data.selected = false;
        this.form_field.options[result_data.options_index].selected = false;
        this.selected_option_count = null;
        this.result_clear_highlight();
        if (this.results_showing) {
          this.winnow_results();
        }
        this.trigger_form_field_change({
          deselected: this.form_field.options[result_data.options_index].value
        });
        this.search_field_scale();
        return true;
      } else {
        return false;
      }
    };

    Chosen.prototype.single_deselect_control_build = function() {
      if (!this.allow_single_deselect) {
        return;
      }
      if (!this.selected_item.find("abbr").length) {
        this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
      }
      return this.selected_item.addClass("chosen-single-with-deselect");
    };

    Chosen.prototype.get_search_field_value = function() {
      return this.search_field.val();
    };

    Chosen.prototype.get_search_text = function() {
      return $.trim(this.get_search_field_value());
    };

    Chosen.prototype.escape_html = function(text) {
      return $('<div/>').text(text).html();
    };

    Chosen.prototype.winnow_results_set_highlight = function() {
      var do_high, selected_results;
      selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
      do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
      if (do_high != null) {
        return this.result_do_highlight(do_high);
      }
    };

    Chosen.prototype.no_results = function(terms) {
      var no_results_html;
      no_results_html = this.get_no_results_html(terms);
      this.search_results.append(no_results_html);
      return this.form_field_jq.trigger("chosen:no_results", {
        chosen: this
      });
    };

    Chosen.prototype.no_results_clear = function() {
      return this.search_results.find(".no-results").remove();
    };

    Chosen.prototype.keydown_arrow = function() {
      var next_sib;
      if (this.results_showing && this.result_highlight) {
        next_sib = this.result_highlight.nextAll("li.active-result").first();
        if (next_sib) {
          return this.result_do_highlight(next_sib);
        }
      } else {
        return this.results_show();
      }
    };

    Chosen.prototype.keyup_arrow = function() {
      var prev_sibs;
      if (!this.results_showing && !this.is_multiple) {
        return this.results_show();
      } else if (this.result_highlight) {
        prev_sibs = this.result_highlight.prevAll("li.active-result");
        if (prev_sibs.length) {
          return this.result_do_highlight(prev_sibs.first());
        } else {
          if (this.choices_count() > 0) {
            this.results_hide();
          }
          return this.result_clear_highlight();
        }
      }
    };

    Chosen.prototype.keydown_backstroke = function() {
      var next_available_destroy;
      if (this.pending_backstroke) {
        this.choice_destroy(this.pending_backstroke.find("a").first());
        return this.clear_backstroke();
      } else {
        next_available_destroy = this.search_container.siblings("li.search-choice").last();
        if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
          this.pending_backstroke = next_available_destroy;
          if (this.single_backstroke_delete) {
            return this.keydown_backstroke();
          } else {
            return this.pending_backstroke.addClass("search-choice-focus");
          }
        }
      }
    };

    Chosen.prototype.clear_backstroke = function() {
      if (this.pending_backstroke) {
        this.pending_backstroke.removeClass("search-choice-focus");
      }
      return this.pending_backstroke = null;
    };

    Chosen.prototype.search_field_scale = function() {
      var div, i, len, style, style_block, styles, width;
      if (!this.is_multiple) {
        return;
      }
      style_block = {
        position: 'absolute',
        left: '-1000px',
        top: '-1000px',
        display: 'none',
        whiteSpace: 'pre'
      };
      styles = ['fontSize', 'fontStyle', 'fontWeight', 'fontFamily', 'lineHeight', 'textTransform', 'letterSpacing'];
      for (i = 0, len = styles.length; i < len; i++) {
        style = styles[i];
        style_block[style] = this.search_field.css(style);
      }
      div = $('<div />').css(style_block);
      div.text(this.get_search_field_value());
      $('body').append(div);
      width = div.width() + 25;
      div.remove();
      if (this.container.is(':visible')) {
        width = Math.min(this.container.outerWidth() - 10, width);
      }
      return this.search_field.width(width);
    };

    Chosen.prototype.trigger_form_field_change = function(extra) {
      this.form_field_jq.trigger("input", extra);
      return this.form_field_jq.trigger("change", extra);
    };

    return Chosen;

  })(AbstractChosen);

}).call(this);


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/sass/admin/dashboard.scss
var dashboard = __webpack_require__(17);

// CONCATENATED MODULE: ./src/js/admin/components/Debug.js


class Debug
{
    startDebugging()
    {
        this.debugging = true;

        this.log({
            data: "Buttonizer is debugging!",
            style: "font-size: 30px; color: #FF0000;"
        });
    }

    welcomeToTheConsole()
    {
        this.debugging = true;

        this.log({
            data: "Welcome to Buttonizer. Please do not continue without any knowledge.",
            style: "font-size: 30px; color: #FF0000;"
        });

        this.log({
            data: "You can find errors down here. If there is any error that is related to Buttonizer you can contact us at contact@buttonizer.pro",
            style: "font-size: 18px; color: #FF0000;"
        });

        this.log({
            data: "Check https://community.buttonizer.pro",
            style: "font-size: 18px; color: #FF0000;"
        });

        this.log({
            data: " ",
            style: "font-size: 18px; color: #FF0000;"
        });

        this.log({
            data: " ",
            style: "font-size: 18px; color: #FF0000;"
        });

        this.log({
            data: "----- Logs: -----",
            style: "font-size: 18px; color: #FF0000;"
        });

        this.debugging = false;
    }

    log(logData)
    {
        // Do not debug
        if(!this.debugging) {
            return;
        }

        // Data exists
        if(!logData.data) {
            return;
        }

        if(logData.color) {
            logData.style = "";
        }

        if(logData.color || logData.style) {
            console.log("%c " + logData.data, logData.style);
        }else{
            console.log(logData.data);
        }
    }

    warning(data)
    {
        // Do not debug
        if(!this.debugging) {
            return;
        }

        console.warn(data);
    }

    warn(data)
    {
        // Do not debug
        if(!this.debugging) {
            return;
        }

        console.warn(data);
    }

    error(data)
    {
        // Always show errors
        console.error(data);
    }
}

/* harmony default export */ var components_Debug = (Debug);
// CONCATENATED MODULE: ./src/js/admin/ui/Modal/Button.js
class Button
{
    constructor(data, modal)
    {
        this.data = data;
        this.modal = modal;

        this.validate();
    }

    validate()
    {
        if(typeof this.data.onClick === "undefined")
        {
            this.data.onClick = function() {};
        }

        if(typeof this.data.text === "undefined")
        {
            this.data.text = "Button";
        }

        // Is confirm button
        if(typeof this.data.confirm === "undefined")
        {
            this.data.confirm = false;
        }

        // Focus on opening
        if(typeof this.data.focus === "undefined")
        {
            this.data.focus = false;
        }
    }

    render()
    {
        let button = document.createElement("a");
        button.href = "javascript:void(0)";
        button.innerHTML = this.data.text;
        button.className = "button";
        button.style.marginLeft = "5px";

        if(this.data.confirm) {
            button.className += " button-primary";
        }

        button.addEventListener("click", () => {
            if(this.data.close) {
                this.modal.closeDialog();
            }

            if(this.data.confirm)
            {
                this.modal.confirmDialog();
            }

            if(this.data.cancel)
            {
                this.modal.cancelDialog();
            }

            this.data.onClick();
        });

        // Focus
        setTimeout(() => {
            // Focus
            if(this.data.focus) {
                button.focus();
            }
        }, 50);

        return button;
    }
}

/* harmony default export */ var Modal_Button = (Button);
// CONCATENATED MODULE: ./src/js/admin/ui/Modal/index.js


class Modal_Index
{
    // Init
    constructor(modalData)
    {
        // Temp save modal
        this.data = modalData;

        this.element = HTMLElement;

        // When dialog is confirmed
        if(typeof this.data.onConfirm === "function")
        {
            this.onConfirm = this.data.onConfirm;
        }else{
            this.onConfirm = function () { };
        }

        // When dialog is canceled
        if(typeof this.data.onCancel === "function")
        {
            this.onCancel = this.data.onCancel;
        }else{
            this.onCancel = function () { };
        }

        // When dialog is closed
        if(typeof this.data.onClose === "function")
        {
            this.onClose = this.data.onClose;
        }else{
            this.onClose = function () { };
        }

        // When dialog is closed
        if(typeof this.data.class === "undefined")
        {
            this.class = '';
        }else{
            this.class = this.data.class;
        }

        if(typeof this.data.video !== 'undefined') {
            this.class += ' has-video';
        }


        // Write modal
        this.render();
    }

    // Write window
    render()
    {
        // Window
        this.element = document.createElement("div");
        this.element.classList = "fs-modal active" + (this.class !== "" ? ' ' + this.class : '');

        // Modal body
        let modalBody = document.createElement("div");
        modalBody.classList = "fs-modal-dialog";

        // Add header
        modalBody.appendChild(this.modalHeader());

        // Add text body
        modalBody.appendChild(this.modalBody());

        if(typeof this.data.video !== 'undefined') {
            // Add clear both
            modalBody.appendChild(this.clearBoth());
        }

        // Add footer
        modalBody.appendChild(this.modalFooter());

        // Append body
        this.element.appendChild(modalBody);

        document.body.appendChild(this.element);

    }

    modalHeader()
    {
        let header = document.createElement("div");
        header.classList = "fs-modal-header";

        // Add title
        let title = document.createElement("h4");
        title.innerHTML = this.data.title;
        header.appendChild(title);

        // Add close button
        let closeButton = document.createElement("a");
        closeButton.className = "fs-close";
        closeButton.href = "javascript:void(0)";
        closeButton.innerHTML = "<i class=\"dashicons dashicons-no\" title=\""+ window.Buttonizer.translate('modal.dismiss') +"\"></i>";

        closeButton.addEventListener("click", () => {
            this.closeDialog();
        });

        // Append to header
        header.appendChild(closeButton);

        return header;
    }

    // Modal body
    modalBody()
    {
        let container = document.createElement('div');

        let body = document.createElement("div");
        body.className = "fs-modal-body fs-modal-body-text";

        // Panel
        let panel = document.createElement("div");
        panel.className = "fs-modal-panel active";

        if(typeof this.data.content === "object") {
            panel.appendChild(this.data.content);
        }else{
            panel.innerHTML = this.data.content;
        }

        body.appendChild(panel);

        if(typeof this.data.video !== 'undefined') {
            container.appendChild(body)
            container.appendChild(this.video());

            return container;
        }

        return body;
    }

    // Modal footer
    modalFooter()
    {
        let footer = document.createElement("div");
        footer.className = "fs-modal-footer";

        if(this.data.buttons) {
            footer.appendChild(this.renderButtons());
        }

        return footer;
    }

    // Get all buttons
    renderButtons()
    {
        let buttons = document.createElement("div");

        for(var i = 0; i < this.data.buttons.length; i++)
        {
            let button = new Modal_Button(this.data.buttons[i], this);
            buttons.appendChild(button.render());
        }

        return buttons;
    }

    // Cancel dialog
    cancelDialog()
    {
        this.onCancel();

        this.closeDialog();
    }

    // Confirm dialog
    confirmDialog()
    {
        this.onConfirm();

        this.closeDialog();
    }

    // Close dialog
    closeDialog()
    {
        this.onClose();
        this.element.remove();
    }

    // Video
    video()
    {
        let body2 = document.createElement("div");
        body2.className = "fs-modal-body fs-modal-video";

        let panel2 = document.createElement("div");
        panel2.className = "fs-modal-panel active";

        let iframe = document.createElement("iframe");
        iframe.width = '100%';
        iframe.style.maxWidth = '560px';
        iframe.height = '315';
        iframe.src = `https://www.youtube.com/embed/${this.data.video}?&autoplay=1`;
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer';
        iframe.setAttribute('autoplay', '');
        iframe.setAttribute('encrypted-media', '');
        iframe.setAttribute('gyroscope', '');
        iframe.setAttribute('picture-in-picture', '');
        iframe.setAttribute('allowfullscreen', '');

        panel2.appendChild(iframe);
        body2.appendChild(panel2);

        return body2;
    }

    // Clear both div
    clearBoth()
    {
        let clear = document.createElement('div');
        clear.style.clear = 'both';

        return clear;
    }
}

/* harmony default export */ var Modal = (Modal_Index);
// CONCATENATED MODULE: ./src/js/admin/ui/Table.js


/**
 * Table... Very easy to use
 *
 * let someTable = new Table()
 * someTable.addColumn(HTMLElement, 'classname');
 * someTable.newRow().addColumn(HTMLElement, 'classname');
 * someTable.newRow().addColumn(HTMLElement, 'classname');
 * someTable.build()
 */
class Table
{
    constructor(className)
    {
        this.table = document.createElement("table");
        this.table.width = "100%";

        if(className !== "")
        {
            this.table.className = className;
        }

        this.currentRow = document.createElement("tr");
    }

    newRow()
    {
        this.table.appendChild(this.currentRow);
        this.currentRow = document.createElement("tr");

        return this;
    }

    /**
     *
     * @param node
     * @param className
     * @param width
     * @returns {Table}
     */
    addColumn(node, className, width)
    {
        let column = document.createElement("td");
        column.appendChild(node);

        if(className !== typeof undefined)
        {
            column.className = className;
        }

        if(width !== "undefined")
        {
            column.width = width;
        }

        this.currentRow.appendChild(column);

        return this;
    }

    /**
     *
     * @param text
     * @param className
     * @param width
     * @returns {Table}
     */
    addColumnText(text, className, width)
    {
        let column = document.createElement("td");
        column.innerText = text;

        if(className !== typeof undefined)
        {
            column.className = "" + className;
        }

        if(width !== "undefined")
        {
            column.width = width;
        }

        this.currentRow.appendChild(column);

        return this;
    }

    /**
     *
     * @param html
     * @param className
     * @param width
     * @returns {Table}
     */
    addColumnHTML(html, className, width)
    {
        let column = document.createElement("td");
        column.innerHTML = html;

        if(className !== typeof undefined)
        {
            column.className = className;
        }

        if(width !== typeof undefined)
        {
            column.width = width;
        }

        this.currentRow.appendChild(column);

        return this;
    }

    /**
     * Returns HTML object
     * @returns {*}
     */
    build()
    {
        this.table.appendChild(this.currentRow);

        return this.table;
    }
}
// CONCATENATED MODULE: ./src/js/admin/ui/Inputs/FormDropdown.js
/**
 * Buttonizer 2.0
 *
 * This will create a simple dropdown form input
 *
 */

class FormDropdown
{

    constructor(data)
    {

        // New element
        this.element        = document.createElement("select");
        this.selected       = data.selected;
        this.width          = typeof data.width === "undefined" ? '199px' : data.width;
        this.class          = typeof data.class === "undefined" ? 'buttonizer-select-drawer' : data.class;
        this.init();

        this.callback       = function () { console.log("FormDropdown: No binding. Use FormDropdown.onChange()"); }

    }

    init()
    {

    }
    /**
     * Building element
     */
    build()
    {   
        this.element.style.width = this.width;
        this.element.className = this.class;

        this.element.addEventListener('change', (e) => {
            this.callback(e, this.element.value);
        });

        return this.element;
    }

    /**
     * Add dropdown option
     *
     * @param data
     * @returns {HTMLOptionElement}
    */
    add(data)
    {
        // creates option element
        let option = document.createElement("option");

        // creates text and value of option
        option.text = data.text;
        option.value = data.value;
        option.selected = typeof this.selected !== undefined && this.selected === data.value ;
        
        //appends option to drawer
        this.element.appendChild(option)
    }

    // Set callback
    onChange(callback)
    {
        this.callback = callback;
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/Window/Filters/PageRuleSelect.js




class PageRuleSelect_PageRuleSelect
{
    constructor(windowObject)
    {
        this.windowObject = windowObject;

        this.onTriggerContainer = null;

        this.dropdown = document.createElement("select");
        this.dropdown.className = "window-select";


    }

    // Build selector
    build()
    {
        let holder = document.createElement("div");

        // Add dropdown
        holder.appendChild(this.dropdown);

        // Add event listener
        this.onChange();

        // Create table
        let table = new Table('table-relative');

        table.addColumnHTML("<h2>"+ window.Buttonizer.translate('page_rules.single_name') + (!window.Buttonizer.hasPremium() ? ' <span class="buttonizer-premium premium-right">PRO</span>' : '') +"</h2>", "table-align-top", "");
        table.addColumn(holder, "", "370");
        table.newRow();



        return table.build();
    }

    /**
     * What happens when you change it?
     */
    onChange()
    {


        this.dropdown.innerHTML = '<option>'+ window.Buttonizer.translate('page_rules.input_any_page') +'</option>';
        this.dropdown.readonly = true;
        this.dropdown.addEventListener("click", () => window.Buttonizer.showPremiumPopup(window.Buttonizer.translate('page_rules.pro_description'), 'SQnAhyBWLWg'));
    }

    /**
     * Decide what will happen when a page rule is triggered
     */

}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/Window/Filters/TimeSchedule.js




class TimeSchedule_TimeSchedule
{
    /**
     * 
     * @param {Object} windowObject 
     */
    constructor(windowObject)
    {
        this.windowObject = windowObject;

        this.onTriggerContainer = null;

        this.dropdown = document.createElement("select");
        this.dropdown.className = "window-select";



    }

    build()
    {
        let holder = document.createElement("div");

        // Add dropdown
        holder.appendChild(this.dropdown);

        // Add event listener
        this.onChange();

        // Create table
        let table = new Table('table-relative');

        table.addColumnHTML("<h2>" +window.Buttonizer.translate('time_schedules.single_name') +  (!window.Buttonizer.hasPremium() ? ' <span class="buttonizer-premium premium-right">PRO</span>' : '') +"</h2>", "table-align-top", '');
        table.addColumn(holder, "", "370");
        table.newRow();



        return table.build();
    }

    /**
     * What happens when you change it?
     */
    onChange()
    {


        this.dropdown.innerHTML = `<option>Show on all times</option>`;
        this.dropdown.readonly = true;
        this.dropdown.addEventListener("click", () => window.Buttonizer.showPremiumPopup(window.Buttonizer.translate('time_schedules.pro_description'), "C-B9ITdY6A4"));
    }

    /**
     * Decide what will happen when a time schedule is triggered
     */

}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/Window/ShowAfterTimeout.js



class ShowAfterTimeout_ShowAfterTimeout
{
    constructor(windowObject)
    {
        this.windowObject = windowObject;
    }

    build()
    {
        let build = this.buildElements();

        if(!window.Buttonizer.hasPremium()) {
            build.addEventListener('click', () => {
                window.Buttonizer.showPremiumPopup("With this setting, you can make your button appear/hide after certain amount of time.", 'V4lvZ15ULWw');
            });
        }

        return build;
    }

    buildElements() {
        /*=================     ELEMENTS    ==================*/

        // Checkbox
        let checkbox = document.createElement("input");
        checkbox.type = 'checkbox';
        checkbox.className = 'buttonizer-timeout-checkbox'
        checkbox.checked = typeof this.windowObject.objectOwner.data.advanced_timeout !== "undefined" && !isNaN(this.windowObject.objectOwner.data.advanced_timeout) && this.windowObject.objectOwner.data.advanced_timeout > 0;
        // Input
        let input = document.createElement("input");
        input.type = 'number';
        input.value = (typeof this.windowObject.objectOwner.data.advanced_timeout === typeof undefined ? "" : this.windowObject.objectOwner.data.advanced_timeout);
        input.className = "window-select";
        input.placeholder = "miliseconds";

        // Info
        let info = document.createElement("div");
        info.innerHTML = ` Show Buttonizer after <b>${input.value / 1000}</b> seconds`;

        /*=================     END ELEMENTS    ==================*/




        if(!window.Buttonizer.hasPremium()) {
            checkbox.setAttribute('disabled', '');
            input.setAttribute('readonly', '');
            input.value = '' ;
            input.style.opacity = '0.5';
            info.style.opacity = '0.5';
        }

        // Table
        let timeout = new Table('table-relative');
        timeout.addColumnHTML("<h2>Timeout</h2>" + (!window.Buttonizer.hasPremium() ? '<span class="buttonizer-premium premium-right">PRO</span>' : ''));
        timeout.addColumn(checkbox, "", "10");
        timeout.addColumn(input, "", "360");
        timeout.newRow();
        timeout.addColumnText("");
        timeout.addColumnText("");
        timeout.addColumn(info);

        return timeout.build();
    }


}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/Window/ShowOnScroll.js



class ShowOnScroll_ShowOnScroll
{
    constructor(windowObject)
    {
        this.windowObject = windowObject;

        // Elements
        this.checkbox;
        this.input;
        this.toggle;
        this.hide;
        this.toggleHide;
        this.select;
        this.info;

    }
    
    build()
    {
        let build = this.elements().build();



        if(!window.Buttonizer.hasPremium()) {
            build.addEventListener('click', () => {
                window.Buttonizer.showPremiumPopup("With this setting, you can make your button appear/hide after scrolling for a certain amount.", 'hh5LBF4C1pg');
            });
        }

        return build;
    }

    elements() {
        /*=================     ELEMENTS    ==================*/

        // Checkbox
        this.checkbox = document.createElement("input");
        this.checkbox.type = 'checkbox';
        this.checkbox.className = 'buttonizer-scroll-checkbox';


        // Input
        this.input = document.createElement("input");
        this.input.type = 'number';
        this.input.className = "window-select";
        this.input.placeholder = "0";


        // Toggle
        this.toggle = document.createElement("input");
        this.toggle.type = 'checkbox';
        this.toggle.className = 'buttonizer-switch';
        this.toggle.style.display = 'inline-block';


        // Toggle info
        this.hide = document.createElement("div");
        this.hide.style.display = 'inline-block';


        if(!window.Buttonizer.hasPremium()) {
            this.hide.innerHTML = 'Starting visibility: <b>Show</b>';
        }

        // Hide
        this.toggleHide = document.createElement('div');
        this.toggleHide.appendChild(this.toggle);
        this.toggleHide.appendChild(this.hide);

        // Pixels or percent
        this.select = document.createElement('select');

        let pixel = document.createElement('option');
        pixel.value = 'px';
        pixel.innerHTML = 'px';


        let percent = document.createElement('option');
        percent.value = '%';
        percent.innerHTML = '%';



        this.select.classList = 'window-select';
        this.select.appendChild(percent);
        this.select.appendChild(pixel);

        
        // Info
        this.info = document.createElement("div");
        this.info.innerHTML = ` Scroll <b>${ this.input.value <= 0 ? '0' : this.input.value } ${ this.select.value }</b> from top of page to <b>${ this.windowObject.objectOwner.data.advanced_scroll_hide == "true" ? "hide" : "show" }</b> Buttonizer`;



        if(!window.Buttonizer.hasPremium()) {
            this.checkbox.setAttribute('disabled', '');
            this.input.setAttribute('readonly', '');
            this.toggle.setAttribute('disabled', '');
            this.select.setAttribute('disabled', '');
            this.input.value = '' ;
            this.input.style.opacity = '0.5';
            this.select.style.opacity = '0.5';
            this.info.style.opacity = '0.5';
            this.toggleHide.style.opacity = '0.5';
        }

        /*=================     END ELEMENTS    ==================*/

        
        // Table
        let scroll = new Table('table-relative');
        scroll.addColumnHTML("<h2>Scroll</h2>" + (!window.Buttonizer.hasPremium() ? '<span class="buttonizer-premium premium-right">PRO</span>' : ''));
        scroll.addColumn(this.checkbox, "", "10");
        scroll.addColumn(this.input, "", "284");
        scroll.addColumn(this.select, "", "70");
        scroll.newRow();
        scroll.addColumnText("");
        scroll.addColumnText("");
        scroll.addColumn(this.toggleHide);
        scroll.newRow();
        scroll.addColumnText("");
        scroll.addColumnText("");
        scroll.addColumn(this.info);

        return scroll;
    }



}
// CONCATENATED MODULE: ./src/js/admin/components/SettingsWindow.js


class SettingsWindow
{
    constructor(objectOwner, windowTitle)
    {
        this.window = HTMLElement;
        this.body = HTMLElement;
        this.footer = HTMLElement;

        this.background = document.createElement("div");
        this.background.className = "background";
        this.background.addEventListener("click", () => {
            this.hide();
        });

        this.title = document.createElement("div");
        this.title.innerHTML = windowTitle;

        this.settings = {};

        this.objectOwner = objectOwner;

        this.menuItems = [];

        // Register filter div
        this.buttonFilter = document.createElement("div");

        this.build();
    }

    /**
     * Create modal head
     *
     * @returns {HTMLElement}
     */
    header()
    {
        let header = document.createElement("div");
        header.className = "header";

        // Link
        let closeBtn = document.createElement("a");
        closeBtn.className = "close-btn";
        closeBtn.href = "javascript:void(0)";

        // Icon
        let closeIcon = document.createElement("i");
        closeIcon.className = "fa fa-times";
        closeBtn.appendChild(closeIcon);

        // Close
        closeBtn.addEventListener("click", () => {
            this.hide();
        });

        header.appendChild(closeBtn);

        header.appendChild(this.title);

        return header;
    }

    /**
     * Create modal body
     * @returns {HTMLElement}
     */
    createBody()
    {
        let body = document.createElement("div");

        // left menu
        let menu = document.createElement("div");
        menu.className = "window-menu";

        this.bodyMenu = menu;

        // Body
        this.body = document.createElement("div");
        this.body.className = "window-body";

        body.appendChild(this.bodyMenu);
        body.appendChild(this.body);

        return body;
    }

    /**
     * Build modal
     */
    build()
    {
        let window = document.createElement("div");
        window.className = "buttonizer-settings-window";
        window.style.display = "none";
        window.style.top = '500px';

        window.appendChild(this.header());

        // Window body
        window.appendChild(this.createBody());

        // Background
        window.appendChild(this.background);

        // Settings window
        this.window = window;

        // Append to body
        document.body.appendChild(this.window);

        jQuery(this.window).draggable({
            handle: ".header",
            containment: "body",
            start: () => this.topMeUp()
        });

        this.window.addEventListener("click", () => this.topMeUp());

        this.afterBuild();

        this.render();
    }

    /**
     * Add menu item
     *
     * @param name
     * @param body
     */
    addItem(name, body)
    {
        let menuItem = document.createElement("a");
        menuItem.href = "javascript:void(0)";
        menuItem.innerHTML = name;

        let itemDiv = document.createElement("div");
        itemDiv.className = "body-inner animated pulse";

        if(this.menuItems.length >= 1)
        {
            itemDiv.style.display = "none";
        }

        itemDiv.appendChild(body);

        menuItem.addEventListener("click", () => {
            this.openMenuItem(name);
        });

        // Auto select first item
        if(this.menuItems.length === 0)
        {
            menuItem.classList.add('selected');
        }

        this.menuItems.push({
            unique: name,
            menu: menuItem,
            body: itemDiv
        });

        this.bodyMenu.appendChild(menuItem);
        this.body.appendChild(itemDiv);
    }

    /**
     * Open menu item
     *
     * @param unique
     */
    openMenuItem(unique)
    {
        for(let i = 0; i < this.menuItems.length; i++)
        {
            if(this.menuItems[i].unique === unique)
            {
                this.menuItems[i].menu.classList.add('selected');
                this.menuItems[i].body.style.display = "block";
            } else {
                this.menuItems[i].menu.classList.remove('selected');
                this.menuItems[i].body.style.display = "none";
            }
        }
    }

    /**
     * Show modal
     */
    show()
    {
        this.window.style.display = "block";
    }

    /**
     * Hide modal
     */
    hide()
    {
        this.window.style.display = "none";
    }

    /**
     * Toggle modal
     */
    toggle()
    {
        if(this.window.style.display === "block")
        {
            this.hide();
        }else{
            this.show();
        }
    }

    /**
     * Top the modal up
     */
    topMeUp()
    {
        if(Buttonizer.windowsZindex === this.window.style.zIndex) return;

        Buttonizer.windowsZindex++;

        this.window.style.zIndex = Buttonizer.windowsZindex;
    }

    /**
     * Default render function
     */
    render()
    {

    }

    /**
     * Gets called after the build process
     */
    afterBuild()
    {

    }
}

// CONCATENATED MODULE: ./src/js/admin/components/Settings/Window/CustomId.js


class CustomId_CustomID
{
    constructor(windowObject)
    {
        this.windowObject = windowObject;
    }

    build()
    {
        let input = document.createElement("input");
        input.className = "window-select";
        input.placeholder = window.Buttonizer.translate('settings.custom_id.placeholder');



        
        // Table
        let customId = new Table('table-relative');
        customId.addColumnHTML("<h2>"+ window.Buttonizer.translate('settings.custom_id.title') +" <span class='buttonizer-premium premium-right'>PRO</span></h2>");
        input.addEventListener("mousedown", () => window.Buttonizer.showPremiumPopup(window.Buttonizer.translate('settings.custom_id.pro_description')));
        customId.addColumn(input, "", "370");

        return customId.build();
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/Window/CustomClass.js


class CustomClass_CustomClass
{
    constructor(windowObject)
    {
        this.windowObject = windowObject;
    }

    build()
    {
        let input = document.createElement("input");
        input.className = "window-select";
        input.placeholder = window.Buttonizer.translate('settings.custom_class.placeholder');
        

        

        // Table
        let customClass = new Table("table-relative");
        customClass.addColumnHTML("<h2>"+ window.Buttonizer.translate('settings.custom_class.title') +" <span class='buttonizer-premium premium-right'>PRO</span></h2>","table-align-top", "");
        input.addEventListener("mousedown", () => window.Buttonizer.showPremiumPopup(window.Buttonizer.translate('settings.custom_class.pro_description')));
        customClass.addColumn(input, "", "370");

        return customClass.build();
    }
}
// CONCATENATED MODULE: ./src/js/admin/ui/Button/ButtonWindow.js










class ButtonWindow_ButtonWindow extends SettingsWindow
{
    constructor(button) {
        super(button, window.Buttonizer.translate('utils.advanced_settings') + " - " + button.data.name + (!window.Buttonizer.hasPremium() ? ' (premium)' : ''));
    }

    render()
    {
        this.filter();
        this.styling();
        this.delay();
    }

    filter()
    {
        let filter = document.createElement("div");


        this.pageRuleSelect = new PageRuleSelect_PageRuleSelect(this);
        this.timeSchedule = new TimeSchedule_TimeSchedule(this);

        // Time Schedule
        filter.appendChild(this.timeSchedule.build());

        // Page Rule
        filter.appendChild(this.pageRuleSelect.build());

        // Add
        super.addItem(window.Buttonizer.translate('settings.button_group_window.filters'), filter);
    }

    styling()
    {
        let filter = document.createElement("div");

        // Button custom class
        filter.appendChild(new CustomClass_CustomClass(this).build());

        // Button custom id
        filter.appendChild(new CustomId_CustomID(this).build());

        // Add
        super.addItem(window.Buttonizer.translate('settings.button_group_window.styling'), filter);
    }

    delay()
    {
        let delay = document.createElement("div");

        delay.appendChild(new ShowAfterTimeout_ShowAfterTimeout(this.objectOwner.groupObject.windowObject).build());
        delay.appendChild(new ShowOnScroll_ShowOnScroll(this.objectOwner.groupObject.windowObject).build());

        // Add
        this.addItem("Timeout & Scroll", delay);
        this.menuItems.forEach(element => {
            if(element.unique === "Timeout & Scroll") element.menu.style.display = 'none';
        })
    }
}
// EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js
var esm_popper = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/tippy.js/esm/index.all.js
/**!
* tippy.js v4.3.5
* (c) 2017-2019 atomiks
* MIT License
*/


var css = ".tippy-iOS{cursor:pointer!important;-webkit-tap-highlight-color:transparent}.tippy-popper{transition-timing-function:cubic-bezier(.165,.84,.44,1);max-width:calc(100% - 8px);pointer-events:none;outline:0}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-7px;bottom:-6.5px;-webkit-transform-origin:50% 0;transform-origin:50% 0;margin:0 3px}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 3px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(-10px);transform:perspective(700px) translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateX(60deg);transform:perspective(700px) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=top] [data-animation=scale]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px) scale(.5);transform:translateY(-10px) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-7px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;margin:0 3px}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 3px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(10px);transform:perspective(700px) translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateX(-60deg);transform:perspective(700px) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=scale]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px) scale(.5);transform:translateY(10px) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-12px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%;margin:3px 0}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(-10px);transform:perspective(700px) translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateY(-60deg);transform:perspective(700px) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=left] [data-animation=scale]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px) scale(.5);transform:translateX(-10px) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-12px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%;margin:3px 0}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(10px);transform:perspective(700px) translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateY(60deg);transform:perspective(700px) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=right] [data-animation=scale]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px) scale(.5);transform:translateX(10px) scale(.5)}.tippy-tooltip{position:relative;color:#fff;border-radius:.25rem;font-size:.875rem;padding:.3125rem .5625rem;line-height:1.4;text-align:center;background-color:#333}.tippy-tooltip[data-size=small]{padding:.1875rem .375rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.375rem .75rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:initial}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] .tippy-roundarrow path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:18px;height:7px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:\"\";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity;will-change:opacity}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}";

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var version = "4.3.5";

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var ua = isBrowser ? navigator.userAgent : '';
var isIE = /MSIE |Trident\//.test(ua);
var isUCBrowser = /UCBrowser\//.test(ua);
var isIOS = isBrowser && /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream;

var defaultProps = {
  a11y: true,
  allowHTML: true,
  animateFill: true,
  animation: 'shift-away',
  appendTo: function appendTo() {
    return document.body;
  },
  aria: 'describedby',
  arrow: false,
  arrowType: 'sharp',
  boundary: 'scrollParent',
  content: '',
  delay: 0,
  distance: 10,
  duration: [325, 275],
  flip: true,
  flipBehavior: 'flip',
  flipOnUpdate: false,
  followCursor: false,
  hideOnClick: true,
  ignoreAttributes: false,
  inertia: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  lazy: true,
  maxWidth: 350,
  multiple: false,
  offset: 0,
  onHidden: function onHidden() {},
  onHide: function onHide() {},
  onMount: function onMount() {},
  onShow: function onShow() {},
  onShown: function onShown() {},
  onTrigger: function onTrigger() {},
  placement: 'top',
  popperOptions: {},
  role: 'tooltip',
  showOnInit: false,
  size: 'regular',
  sticky: false,
  target: '',
  theme: 'dark',
  touch: true,
  touchHold: false,
  trigger: 'mouseenter focus',
  triggerTarget: null,
  updateDuration: 0,
  wait: null,
  zIndex: 9999
  /**
   * If the set() method encounters one of these, the popperInstance must be
   * recreated
   */

};
var POPPER_INSTANCE_DEPENDENCIES = ['arrow', 'arrowType', 'boundary', 'distance', 'flip', 'flipBehavior', 'flipOnUpdate', 'offset', 'placement', 'popperOptions'];

var elementProto = isBrowser ? Element.prototype : {};
var matches = elementProto.matches || elementProto.matchesSelector || elementProto.webkitMatchesSelector || elementProto.mozMatchesSelector || elementProto.msMatchesSelector;
/**
 * Ponyfill for Array.from - converts iterable values to an array
 */

function arrayFrom(value) {
  return [].slice.call(value);
}
/**
 * Ponyfill for Element.prototype.closest
 */

function closest(element, selector) {
  return closestCallback(element, function (el) {
    return matches.call(el, selector);
  });
}
/**
 * Works like Element.prototype.closest, but uses a callback instead
 */

function closestCallback(element, callback) {
  while (element) {
    if (callback(element)) {
      return element;
    }

    element = element.parentElement;
  }

  return null;
}

// Passive event listener config
var PASSIVE = {
  passive: true // Popper `preventOverflow` padding

};
var PADDING = 4; // Popper attributes
// In Popper v2 these will be `data-*` instead of `x-*` to adhere to HTML5 spec

var PLACEMENT_ATTRIBUTE = 'x-placement';
var OUT_OF_BOUNDARIES_ATTRIBUTE = 'x-out-of-boundaries'; // Classes

var IOS_CLASS = "tippy-iOS";
var ACTIVE_CLASS = "tippy-active";
var POPPER_CLASS = "tippy-popper";
var TOOLTIP_CLASS = "tippy-tooltip";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var ROUND_ARROW_CLASS = "tippy-roundarrow"; // Selectors

var POPPER_SELECTOR = ".".concat(POPPER_CLASS);
var TOOLTIP_SELECTOR = ".".concat(TOOLTIP_CLASS);
var CONTENT_SELECTOR = ".".concat(CONTENT_CLASS);
var BACKDROP_SELECTOR = ".".concat(BACKDROP_CLASS);
var ARROW_SELECTOR = ".".concat(ARROW_CLASS);
var ROUND_ARROW_SELECTOR = ".".concat(ROUND_ARROW_CLASS);

var isUsingTouch = false;
function onDocumentTouch() {
  if (isUsingTouch) {
    return;
  }

  isUsingTouch = true;

  if (isIOS) {
    document.body.classList.add(IOS_CLASS);
  }

  if (window.performance) {
    document.addEventListener('mousemove', onDocumentMouseMove);
  }
}
var lastMouseMoveTime = 0;
function onDocumentMouseMove() {
  var now = performance.now(); // Chrome 60+ is 1 mousemove per animation frame, use 20ms time difference

  if (now - lastMouseMoveTime < 20) {
    isUsingTouch = false;
    document.removeEventListener('mousemove', onDocumentMouseMove);

    if (!isIOS) {
      document.body.classList.remove(IOS_CLASS);
    }
  }

  lastMouseMoveTime = now;
}
function onWindowBlur() {
  var _document = document,
      activeElement = _document.activeElement;

  if (activeElement && activeElement.blur && activeElement._tippy) {
    activeElement.blur();
  }
}
/**
 * Adds the needed global event listeners
 */

function bindGlobalEventListeners() {
  document.addEventListener('touchstart', onDocumentTouch, PASSIVE);
  window.addEventListener('blur', onWindowBlur);
}

var keys = Object.keys(defaultProps);
/**
 * Returns an object of optional props from data-tippy-* attributes
 */

function getDataAttributeOptions(reference) {
  return keys.reduce(function (acc, key) {
    var valueAsString = (reference.getAttribute("data-tippy-".concat(key)) || '').trim();

    if (!valueAsString) {
      return acc;
    }

    if (key === 'content') {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }

    return acc;
  }, {});
}
/**
 * Polyfills the virtual reference (plain object) with Element.prototype props
 * Mutating because DOM elements are mutated, adds `_tippy` property
 */

function polyfillElementPrototypeProperties(virtualReference) {
  var polyfills = {
    isVirtual: true,
    attributes: virtualReference.attributes || {},
    contains: function contains() {},
    setAttribute: function setAttribute(key, value) {
      virtualReference.attributes[key] = value;
    },
    getAttribute: function getAttribute(key) {
      return virtualReference.attributes[key];
    },
    removeAttribute: function removeAttribute(key) {
      delete virtualReference.attributes[key];
    },
    hasAttribute: function hasAttribute(key) {
      return key in virtualReference.attributes;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    classList: {
      classNames: {},
      add: function add(key) {
        virtualReference.classList.classNames[key] = true;
      },
      remove: function remove(key) {
        delete virtualReference.classList.classNames[key];
      },
      contains: function contains(key) {
        return key in virtualReference.classList.classNames;
      }
    }
  };

  for (var key in polyfills) {
    virtualReference[key] = polyfills[key];
  }
}

/**
 * Determines if a value is a "bare" virtual element (before mutations done
 * by `polyfillElementPrototypeProperties()`). JSDOM elements show up as
 * [object Object], we can check if the value is "element-like" if it has
 * `addEventListener`
 */

function isBareVirtualElement(value) {
  return {}.toString.call(value) === '[object Object]' && !value.addEventListener;
}
/**
 * Determines if the value is a reference element
 */

function isReferenceElement(value) {
  return !!value._tippy && !matches.call(value, POPPER_SELECTOR);
}
/**
 * Safe .hasOwnProperty check, for prototype-less objects
 */

function index_all_hasOwnProperty(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
/**
 * Returns an array of elements based on the value
 */

function getArrayOfElements(value) {
  if (isSingular(value)) {
    // TODO: VirtualReference is not compatible to type Element
    return [value];
  }

  if (value instanceof NodeList) {
    return arrayFrom(value);
  }

  if (Array.isArray(value)) {
    return value;
  }

  try {
    return arrayFrom(document.querySelectorAll(value));
  } catch (e) {
    return [];
  }
}
/**
 * Returns a value at a given index depending on if it's an array or number
 */

function getValue(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? defaultValue : v;
  }

  return value;
}
/**
 * Debounce utility. To avoid bloating bundle size, we're only passing 1
 * argument here, a more generic function would pass all arguments. Only
 * `onMouseMove` uses this which takes the event object for now.
 */

function debounce(fn, ms) {
  // Avoid wrapping in `setTimeout` if ms is 0 anyway
  if (ms === 0) {
    return fn;
  }

  var timeout;
  return function (arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn(arg);
    }, ms);
  };
}
/**
 * Prevents errors from being thrown while accessing nested modifier objects
 * in `popperOptions`
 */

function getModifier(obj, key) {
  return obj && obj.modifiers && obj.modifiers[key];
}
/**
 * Determines if an array or string includes a value
 */

function includes(a, b) {
  return a.indexOf(b) > -1;
}
/**
 * Determines if the value is a real element
 */

function isRealElement(value) {
  return value instanceof Element;
}
/**
 * Determines if the value is singular-like
 */

function isSingular(value) {
  return !!(value && index_all_hasOwnProperty(value, 'isVirtual')) || isRealElement(value);
}
/**
 * Firefox extensions don't allow setting .innerHTML directly, this will trick it
 */

function innerHTML() {
  return 'innerHTML';
}
/**
 * Evaluates a function if one, or returns the value
 */

function invokeWithArgsOrReturn(value, args) {
  return typeof value === 'function' ? value.apply(null, args) : value;
}
/**
 * Sets a popperInstance `flip` modifier's enabled state
 */

function setFlipModifierEnabled(modifiers, value) {
  modifiers.filter(function (m) {
    return m.name === 'flip';
  })[0].enabled = value;
}
/**
 * Determines if an element can receive focus
 * Always returns true for virtual objects
 */

function canReceiveFocus(element) {
  return isRealElement(element) ? matches.call(element, 'a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]') && !element.hasAttribute('disabled') : true;
}
/**
 * Returns a new `div` element
 */

function index_all_div() {
  return document.createElement('div');
}
/**
 * Applies a transition duration to a list of elements
 */

function setTransitionDuration(els, value) {
  els.forEach(function (el) {
    if (el) {
      el.style.transitionDuration = "".concat(value, "ms");
    }
  });
}
/**
 * Sets the visibility state to elements so they can begin to transition
 */

function setVisibilityState(els, state) {
  els.forEach(function (el) {
    if (el) {
      el.setAttribute('data-state', state);
    }
  });
}
/**
 * Evaluates the props object by merging data attributes and
 * disabling conflicting options where necessary
 */

function evaluateProps(reference, props) {
  var out = _extends({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference])
  }, props.ignoreAttributes ? {} : getDataAttributeOptions(reference));

  if (out.arrow || isUCBrowser) {
    out.animateFill = false;
  }

  return out;
}
/**
 * Validates an object of options with the valid default props object
 */

function validateOptions(options, defaultProps) {
  Object.keys(options).forEach(function (option) {
    if (!index_all_hasOwnProperty(defaultProps, option)) {
      throw new Error("[tippy]: `".concat(option, "` is not a valid option"));
    }
  });
}

/**
 * Sets the innerHTML of an element
 */

function setInnerHTML(element, html) {
  element[innerHTML()] = isRealElement(html) ? html[innerHTML()] : html;
}
/**
 * Sets the content of a tooltip
 */

function index_all_setContent(contentEl, props) {
  if (isRealElement(props.content)) {
    setInnerHTML(contentEl, '');
    contentEl.appendChild(props.content);
  } else if (typeof props.content !== 'function') {
    var key = props.allowHTML ? 'innerHTML' : 'textContent';
    contentEl[key] = props.content;
  }
}
/**
 * Returns the child elements of a popper element
 */

function getChildren(popper) {
  return {
    tooltip: popper.querySelector(TOOLTIP_SELECTOR),
    backdrop: popper.querySelector(BACKDROP_SELECTOR),
    content: popper.querySelector(CONTENT_SELECTOR),
    arrow: popper.querySelector(ARROW_SELECTOR) || popper.querySelector(ROUND_ARROW_SELECTOR)
  };
}
/**
 * Adds `data-inertia` attribute
 */

function addInertia(tooltip) {
  tooltip.setAttribute('data-inertia', '');
}
/**
 * Removes `data-inertia` attribute
 */

function removeInertia(tooltip) {
  tooltip.removeAttribute('data-inertia');
}
/**
 * Creates an arrow element and returns it
 */

function createArrowElement(arrowType) {
  var arrow = index_all_div();

  if (arrowType === 'round') {
    arrow.className = ROUND_ARROW_CLASS;
    setInnerHTML(arrow, '<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>');
  } else {
    arrow.className = ARROW_CLASS;
  }

  return arrow;
}
/**
 * Creates a backdrop element and returns it
 */

function createBackdropElement() {
  var backdrop = index_all_div();
  backdrop.className = BACKDROP_CLASS;
  backdrop.setAttribute('data-state', 'hidden');
  return backdrop;
}
/**
 * Adds interactive-related attributes
 */

function addInteractive(popper, tooltip) {
  popper.setAttribute('tabindex', '-1');
  tooltip.setAttribute('data-interactive', '');
}
/**
 * Removes interactive-related attributes
 */

function removeInteractive(popper, tooltip) {
  popper.removeAttribute('tabindex');
  tooltip.removeAttribute('data-interactive');
}
/**
 * Add/remove transitionend listener from tooltip
 */

function updateTransitionEndListener(tooltip, action, listener) {
  // UC Browser hasn't adopted the `transitionend` event despite supporting
  // unprefixed transitions...
  var eventName = isUCBrowser && document.body.style.webkitTransition !== undefined ? 'webkitTransitionEnd' : 'transitionend';
  tooltip[action + 'EventListener'](eventName, listener);
}
/**
 * Returns the popper's placement, ignoring shifting (top-start, etc)
 */

function getBasicPlacement(popper) {
  var fullPlacement = popper.getAttribute(PLACEMENT_ATTRIBUTE);
  return fullPlacement ? fullPlacement.split('-')[0] : '';
}
/**
 * Triggers reflow
 */

function reflow(popper) {
  void popper.offsetHeight;
}
/**
 * Adds/removes theme from tooltip's classList
 */

function updateTheme(tooltip, action, theme) {
  theme.split(' ').forEach(function (themeName) {
    tooltip.classList[action](themeName + '-theme');
  });
}
/**
 * Constructs the popper element and returns it
 */

function createPopperElement(id, props) {
  var popper = index_all_div();
  popper.className = POPPER_CLASS;
  popper.id = "tippy-".concat(id);
  popper.style.zIndex = '' + props.zIndex;
  popper.style.position = 'absolute';
  popper.style.top = '0';
  popper.style.left = '0';

  if (props.role) {
    popper.setAttribute('role', props.role);
  }

  var tooltip = index_all_div();
  tooltip.className = TOOLTIP_CLASS;
  tooltip.style.maxWidth = props.maxWidth + (typeof props.maxWidth === 'number' ? 'px' : '');
  tooltip.setAttribute('data-size', props.size);
  tooltip.setAttribute('data-animation', props.animation);
  tooltip.setAttribute('data-state', 'hidden');
  updateTheme(tooltip, 'add', props.theme);
  var content = index_all_div();
  content.className = CONTENT_CLASS;
  content.setAttribute('data-state', 'hidden');

  if (props.interactive) {
    addInteractive(popper, tooltip);
  }

  if (props.arrow) {
    tooltip.appendChild(createArrowElement(props.arrowType));
  }

  if (props.animateFill) {
    tooltip.appendChild(createBackdropElement());
    tooltip.setAttribute('data-animatefill', '');
  }

  if (props.inertia) {
    addInertia(tooltip);
  }

  index_all_setContent(content, props);
  tooltip.appendChild(content);
  popper.appendChild(tooltip);
  return popper;
}
/**
 * Updates the popper element based on the new props
 */

function updatePopperElement(popper, prevProps, nextProps) {
  var _getChildren = getChildren(popper),
      tooltip = _getChildren.tooltip,
      content = _getChildren.content,
      backdrop = _getChildren.backdrop,
      arrow = _getChildren.arrow;

  popper.style.zIndex = '' + nextProps.zIndex;
  tooltip.setAttribute('data-size', nextProps.size);
  tooltip.setAttribute('data-animation', nextProps.animation);
  tooltip.style.maxWidth = nextProps.maxWidth + (typeof nextProps.maxWidth === 'number' ? 'px' : '');

  if (nextProps.role) {
    popper.setAttribute('role', nextProps.role);
  } else {
    popper.removeAttribute('role');
  }

  if (prevProps.content !== nextProps.content) {
    index_all_setContent(content, nextProps);
  } // animateFill


  if (!prevProps.animateFill && nextProps.animateFill) {
    tooltip.appendChild(createBackdropElement());
    tooltip.setAttribute('data-animatefill', '');
  } else if (prevProps.animateFill && !nextProps.animateFill) {
    tooltip.removeChild(backdrop);
    tooltip.removeAttribute('data-animatefill');
  } // arrow


  if (!prevProps.arrow && nextProps.arrow) {
    tooltip.appendChild(createArrowElement(nextProps.arrowType));
  } else if (prevProps.arrow && !nextProps.arrow) {
    tooltip.removeChild(arrow);
  } // arrowType


  if (prevProps.arrow && nextProps.arrow && prevProps.arrowType !== nextProps.arrowType) {
    tooltip.replaceChild(createArrowElement(nextProps.arrowType), arrow);
  } // interactive


  if (!prevProps.interactive && nextProps.interactive) {
    addInteractive(popper, tooltip);
  } else if (prevProps.interactive && !nextProps.interactive) {
    removeInteractive(popper, tooltip);
  } // inertia


  if (!prevProps.inertia && nextProps.inertia) {
    addInertia(tooltip);
  } else if (prevProps.inertia && !nextProps.inertia) {
    removeInertia(tooltip);
  } // theme


  if (prevProps.theme !== nextProps.theme) {
    updateTheme(tooltip, 'remove', prevProps.theme);
    updateTheme(tooltip, 'add', nextProps.theme);
  }
}
/**
 * Hides all visible poppers on the document
 */

function hideAll() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      excludedReferenceOrInstance = _ref.exclude,
      duration = _ref.duration;

  arrayFrom(document.querySelectorAll(POPPER_SELECTOR)).forEach(function (popper) {
    var instance = popper._tippy;

    if (instance) {
      var isExcluded = false;

      if (excludedReferenceOrInstance) {
        isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : popper === excludedReferenceOrInstance.popper;
      }

      if (!isExcluded) {
        instance.hide(duration);
      }
    }
  });
}
/**
 * Determines if the mouse cursor is outside of the popper's interactive border
 * region
 */

function isCursorOutsideInteractiveBorder(popperPlacement, popperRect, event, props) {
  if (!popperPlacement) {
    return true;
  }

  var x = event.clientX,
      y = event.clientY;
  var interactiveBorder = props.interactiveBorder,
      distance = props.distance;
  var exceedsTop = popperRect.top - y > (popperPlacement === 'top' ? interactiveBorder + distance : interactiveBorder);
  var exceedsBottom = y - popperRect.bottom > (popperPlacement === 'bottom' ? interactiveBorder + distance : interactiveBorder);
  var exceedsLeft = popperRect.left - x > (popperPlacement === 'left' ? interactiveBorder + distance : interactiveBorder);
  var exceedsRight = x - popperRect.right > (popperPlacement === 'right' ? interactiveBorder + distance : interactiveBorder);
  return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
}
/**
 * Returns the distance offset, taking into account the default offset due to
 * the transform: translate() rule (10px) in CSS
 */

function getOffsetDistanceInPx(distance) {
  return -(distance - 10) + 'px';
}

var idCounter = 1; // Workaround for IE11's lack of new MouseEvent constructor

var mouseMoveListeners = [];
/**
 * Creates and returns a Tippy object. We're using a closure pattern instead of
 * a class so that the exposed object API is clean without private members
 * prefixed with `_`.
 */

function createTippy(reference, collectionProps) {
  var props = evaluateProps(reference, collectionProps); // If the reference shouldn't have multiple tippys, return null early

  if (!props.multiple && reference._tippy) {
    return null;
  }
  /* ======================= 🔒 Private members 🔒 ======================= */


  var lastTriggerEventType;
  var lastMouseMoveEvent;
  var showTimeoutId;
  var hideTimeoutId;
  var scheduleHideAnimationFrameId;
  var isScheduledToShow = false;
  var isBeingDestroyed = false;
  var previousPlacement;
  var wasVisibleDuringPreviousUpdate = false;
  var hasMountCallbackRun = false;
  var currentMountCallback;
  var currentTransitionEndListener;
  var listeners = [];
  var currentComputedPadding;
  var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
  /* ======================= 🔑 Public members 🔑 ======================= */

  var id = idCounter++;
  var popper = createPopperElement(id, props);
  var popperChildren = getChildren(popper);
  var popperInstance = null;
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id: id,
    reference: reference,
    popper: popper,
    popperChildren: popperChildren,
    popperInstance: popperInstance,
    props: props,
    state: state,
    // methods
    clearDelayTimeouts: clearDelayTimeouts,
    set: set,
    setContent: setContent,
    show: show,
    hide: hide,
    enable: enable,
    disable: disable,
    destroy: destroy
    /* ==================== Initial instance mutations =================== */

  };
  reference._tippy = instance;
  popper._tippy = instance;
  addTriggersToReference();

  if (!props.lazy) {
    createPopperInstance();
  }

  if (props.showOnInit) {
    scheduleShow();
  } // Ensure the event listeners target can receive focus


  if (props.a11y && !props.target && !canReceiveFocus(getEventListenersTarget())) {
    getEventListenersTarget().setAttribute('tabindex', '0');
  } // Prevent a tippy with a delay from hiding if the cursor left then returned
  // before it started hiding


  popper.addEventListener('mouseenter', function (event) {
    if (instance.props.interactive && instance.state.isVisible && lastTriggerEventType === 'mouseenter') {
      // We don't want props.onTrigger() to be called here, since the `event`
      // object is not related to the reference element
      scheduleShow(event, true);
    }
  });
  popper.addEventListener('mouseleave', function () {
    if (instance.props.interactive && lastTriggerEventType === 'mouseenter') {
      document.addEventListener('mousemove', debouncedOnMouseMove);
    }
  });
  return instance;
  /* ======================= 🔒 Private methods 🔒 ======================= */

  /**
   * Removes the follow cursor listener
   */

  function removeFollowCursorListener() {
    document.removeEventListener('mousemove', positionVirtualReferenceNearCursor);
  }
  /**
   * Cleans up interactive mouse listeners
   */


  function cleanupInteractiveMouseListeners() {
    document.body.removeEventListener('mouseleave', scheduleHide);
    document.removeEventListener('mousemove', debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
      return listener !== debouncedOnMouseMove;
    });
  }
  /**
   * Returns correct target used for event listeners
   */


  function getEventListenersTarget() {
    return instance.props.triggerTarget || reference;
  }
  /**
   * Adds the document click event listener for the instance
   */


  function addDocumentClickListener() {
    document.addEventListener('click', onDocumentClick, true);
  }
  /**
   * Removes the document click event listener for the instance
   */


  function removeDocumentClickListener() {
    document.removeEventListener('click', onDocumentClick, true);
  }
  /**
   * Returns transitionable inner elements used in show/hide methods
   */


  function getTransitionableElements() {
    return [instance.popperChildren.tooltip, instance.popperChildren.backdrop, instance.popperChildren.content];
  }
  /**
   * Determines if the instance is in `followCursor` mode.
   * NOTE: in v5, touch devices will use `initial` behavior no matter the value.
   */


  function getIsInLooseFollowCursorMode() {
    var followCursor = instance.props.followCursor;
    return followCursor && lastTriggerEventType !== 'focus' || isUsingTouch && followCursor === 'initial';
  }
  /**
   * Updates the tooltip's position on each animation frame
   */


  function makeSticky() {
    setTransitionDuration([popper], isIE ? 0 : instance.props.updateDuration);
    var prevRefRect = reference.getBoundingClientRect();

    function updatePosition() {
      var currentRefRect = reference.getBoundingClientRect(); // Only schedule an update if the reference rect has changed

      if (prevRefRect.top !== currentRefRect.top || prevRefRect.right !== currentRefRect.right || prevRefRect.bottom !== currentRefRect.bottom || prevRefRect.left !== currentRefRect.left) {
        instance.popperInstance.scheduleUpdate();
      }

      prevRefRect = currentRefRect;

      if (instance.state.isMounted) {
        requestAnimationFrame(updatePosition);
      }
    }

    updatePosition();
  }
  /**
   * Invokes a callback once the tooltip has fully transitioned out
   */


  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function () {
      if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
        callback();
      }
    });
  }
  /**
   * Invokes a callback once the tooltip has fully transitioned in
   */


  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  /**
   * Invokes a callback once the tooltip's CSS transition ends
   */


  function onTransitionEnd(duration, callback) {
    var tooltip = instance.popperChildren.tooltip;
    /**
     * Listener added as the `transitionend` handler
     */

    function listener(event) {
      if (event.target === tooltip) {
        updateTransitionEndListener(tooltip, 'remove', listener);
        callback();
      }
    } // Make callback synchronous if duration is 0
    // `transitionend` won't fire otherwise


    if (duration === 0) {
      return callback();
    }

    updateTransitionEndListener(tooltip, 'remove', currentTransitionEndListener);
    updateTransitionEndListener(tooltip, 'add', listener);
    currentTransitionEndListener = listener;
  }
  /**
   * Adds an event listener to the reference and stores it in `listeners`
   */


  function on(eventType, handler) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    getEventListenersTarget().addEventListener(eventType, handler, options);
    listeners.push({
      eventType: eventType,
      handler: handler,
      options: options
    });
  }
  /**
   * Adds event listeners to the reference based on the `trigger` prop
   */


  function addTriggersToReference() {
    if (instance.props.touchHold && !instance.props.target) {
      on('touchstart', onTrigger, PASSIVE);
      on('touchend', onMouseLeave, PASSIVE);
    }

    instance.props.trigger.trim().split(' ').forEach(function (eventType) {
      if (eventType === 'manual') {
        return;
      } // Non-delegates


      if (!instance.props.target) {
        on(eventType, onTrigger);

        switch (eventType) {
          case 'mouseenter':
            on('mouseleave', onMouseLeave);
            break;

          case 'focus':
            on(isIE ? 'focusout' : 'blur', onBlur);
            break;
        }
      } else {
        // Delegates
        switch (eventType) {
          case 'mouseenter':
            on('mouseover', onDelegateShow);
            on('mouseout', onDelegateHide);
            break;

          case 'focus':
            on('focusin', onDelegateShow);
            on('focusout', onDelegateHide);
            break;

          case 'click':
            on(eventType, onDelegateShow);
            break;
        }
      }
    });
  }
  /**
   * Removes event listeners from the reference
   */


  function removeTriggersFromReference() {
    listeners.forEach(function (_ref) {
      var eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      getEventListenersTarget().removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  /**
   * Positions the virtual reference near the cursor
   */


  function positionVirtualReferenceNearCursor(event) {
    var _lastMouseMoveEvent = lastMouseMoveEvent = event,
        x = _lastMouseMoveEvent.clientX,
        y = _lastMouseMoveEvent.clientY; // Gets set once popperInstance `onCreate` has been called


    if (!currentComputedPadding) {
      return;
    } // If the instance is interactive, avoid updating the position unless it's
    // over the reference element


    var isCursorOverReference = closestCallback(event.target, function (el) {
      return el === reference;
    });
    var rect = reference.getBoundingClientRect();
    var followCursor = instance.props.followCursor;
    var isHorizontal = followCursor === 'horizontal';
    var isVertical = followCursor === 'vertical'; // The virtual reference needs some size to prevent itself from overflowing

    var isVerticalPlacement = includes(['top', 'bottom'], getBasicPlacement(popper));
    var fullPlacement = popper.getAttribute(PLACEMENT_ATTRIBUTE);
    var isVariation = fullPlacement ? !!fullPlacement.split('-')[1] : false;
    var size = isVerticalPlacement ? popper.offsetWidth : popper.offsetHeight;
    var halfSize = size / 2;
    var verticalIncrease = isVerticalPlacement ? 0 : isVariation ? size : halfSize;
    var horizontalIncrease = isVerticalPlacement ? isVariation ? size : halfSize : 0;

    if (isCursorOverReference || !instance.props.interactive) {
      instance.popperInstance.reference = _extends({}, instance.popperInstance.reference, {
        // This will exist in next Popper.js feature release to fix #532
        // @ts-ignore
        referenceNode: reference,
        // These `client` values don't get used by Popper.js if they are 0
        clientWidth: 0,
        clientHeight: 0,
        getBoundingClientRect: function getBoundingClientRect() {
          return {
            width: isVerticalPlacement ? size : 0,
            height: isVerticalPlacement ? 0 : size,
            top: (isHorizontal ? rect.top : y) - verticalIncrease,
            bottom: (isHorizontal ? rect.bottom : y) + verticalIncrease,
            left: (isVertical ? rect.left : x) - horizontalIncrease,
            right: (isVertical ? rect.right : x) + horizontalIncrease
          };
        }
      });
      instance.popperInstance.update();
    }

    if (followCursor === 'initial' && instance.state.isVisible) {
      removeFollowCursorListener();
    }
  }
  /**
   * Creates the tippy instance for a delegate when it's been triggered
   */


  function createDelegateChildTippy(event) {
    if (event) {
      var targetEl = closest(event.target, instance.props.target);

      if (targetEl && !targetEl._tippy) {
        createTippy(targetEl, _extends({}, instance.props, {
          content: invokeWithArgsOrReturn(collectionProps.content, [targetEl]),
          appendTo: collectionProps.appendTo,
          target: '',
          showOnInit: true
        }));
      }
    }
  }
  /**
   * Event listener invoked upon trigger
   */


  function onTrigger(event) {
    if (!instance.state.isEnabled || isEventListenerStopped(event)) {
      return;
    }

    if (!instance.state.isVisible) {
      lastTriggerEventType = event.type;

      if (event instanceof MouseEvent) {
        lastMouseMoveEvent = event; // If scrolling, `mouseenter` events can be fired if the cursor lands
        // over a new target, but `mousemove` events don't get fired. This
        // causes interactive tooltips to get stuck open until the cursor is
        // moved

        mouseMoveListeners.forEach(function (listener) {
          return listener(event);
        });
      }
    } // Toggle show/hide when clicking click-triggered tooltips


    if (event.type === 'click' && instance.props.hideOnClick !== false && instance.state.isVisible) {
      scheduleHide();
    } else {
      scheduleShow(event);
    }
  }
  /**
   * Event listener used for interactive tooltips to detect when they should
   * hide
   */


  function onMouseMove(event) {
    var isCursorOverPopper = closest(event.target, POPPER_SELECTOR) === popper;
    var isCursorOverReference = closestCallback(event.target, function (el) {
      return el === reference;
    });

    if (isCursorOverPopper || isCursorOverReference) {
      return;
    }

    if (isCursorOutsideInteractiveBorder(getBasicPlacement(popper), popper.getBoundingClientRect(), event, instance.props)) {
      cleanupInteractiveMouseListeners();
      scheduleHide();
    }
  }
  /**
   * Event listener invoked upon mouseleave
   */


  function onMouseLeave(event) {
    if (isEventListenerStopped(event)) {
      return;
    }

    if (instance.props.interactive) {
      document.body.addEventListener('mouseleave', scheduleHide);
      document.addEventListener('mousemove', debouncedOnMouseMove);
      mouseMoveListeners.push(debouncedOnMouseMove);
      return;
    }

    scheduleHide();
  }
  /**
   * Event listener invoked upon blur
   */


  function onBlur(event) {
    if (event.target !== getEventListenersTarget()) {
      return;
    }

    if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
      return;
    }

    scheduleHide();
  }
  /**
   * Event listener invoked when a child target is triggered
   */


  function onDelegateShow(event) {
    if (closest(event.target, instance.props.target)) {
      scheduleShow(event);
    }
  }
  /**
   * Event listener invoked when a child target should hide
   */


  function onDelegateHide(event) {
    if (closest(event.target, instance.props.target)) {
      scheduleHide();
    }
  }
  /**
   * Determines if an event listener should stop further execution due to the
   * `touchHold` option
   */


  function isEventListenerStopped(event) {
    var supportsTouch = 'ontouchstart' in window;
    var isTouchEvent = includes(event.type, 'touch');
    var touchHold = instance.props.touchHold;
    return supportsTouch && isUsingTouch && touchHold && !isTouchEvent || isUsingTouch && !touchHold && isTouchEvent;
  }
  /**
   * Runs the mount callback
   */


  function runMountCallback() {
    if (!hasMountCallbackRun && currentMountCallback) {
      hasMountCallbackRun = true;
      reflow(popper);
      currentMountCallback();
    }
  }
  /**
   * Creates the popper instance for the instance
   */


  function createPopperInstance() {
    var popperOptions = instance.props.popperOptions;
    var _instance$popperChild = instance.popperChildren,
        tooltip = _instance$popperChild.tooltip,
        arrow = _instance$popperChild.arrow;
    var preventOverflowModifier = getModifier(popperOptions, 'preventOverflow');

    function applyMutations(data) {
      if (instance.props.flip && !instance.props.flipOnUpdate) {
        if (data.flipped) {
          instance.popperInstance.options.placement = data.placement;
        }

        setFlipModifierEnabled(instance.popperInstance.modifiers, false);
      } // Apply all of the popper's attributes to the tootip node as well.
      // Allows users to avoid using the .tippy-popper selector for themes.


      tooltip.setAttribute(PLACEMENT_ATTRIBUTE, data.placement);

      if (data.attributes[OUT_OF_BOUNDARIES_ATTRIBUTE] !== false) {
        tooltip.setAttribute(OUT_OF_BOUNDARIES_ATTRIBUTE, '');
      } else {
        tooltip.removeAttribute(OUT_OF_BOUNDARIES_ATTRIBUTE);
      } // Prevents a transition when changing placements (while tippy is visible)
      // for scroll/resize updates


      if (previousPlacement && previousPlacement !== data.placement && wasVisibleDuringPreviousUpdate) {
        tooltip.style.transition = 'none';
        requestAnimationFrame(function () {
          tooltip.style.transition = '';
        });
      }

      previousPlacement = data.placement;
      wasVisibleDuringPreviousUpdate = instance.state.isVisible;
      var basicPlacement = getBasicPlacement(popper);
      var styles = tooltip.style; // Account for the `distance` offset

      styles.top = styles.bottom = styles.left = styles.right = '';
      styles[basicPlacement] = getOffsetDistanceInPx(instance.props.distance);
      var padding = preventOverflowModifier && preventOverflowModifier.padding !== undefined ? preventOverflowModifier.padding : PADDING;
      var isPaddingNumber = typeof padding === 'number';

      var computedPadding = _extends({
        top: isPaddingNumber ? padding : padding.top,
        bottom: isPaddingNumber ? padding : padding.bottom,
        left: isPaddingNumber ? padding : padding.left,
        right: isPaddingNumber ? padding : padding.right
      }, !isPaddingNumber && padding);

      computedPadding[basicPlacement] = isPaddingNumber ? padding + instance.props.distance : (padding[basicPlacement] || 0) + instance.props.distance;
      instance.popperInstance.modifiers.filter(function (m) {
        return m.name === 'preventOverflow';
      })[0].padding = computedPadding;
      currentComputedPadding = computedPadding;
    }

    var config = _extends({
      eventsEnabled: false,
      placement: instance.props.placement
    }, popperOptions, {
      modifiers: _extends({}, popperOptions ? popperOptions.modifiers : {}, {
        preventOverflow: _extends({
          boundariesElement: instance.props.boundary,
          padding: PADDING
        }, preventOverflowModifier),
        arrow: _extends({
          element: arrow,
          enabled: !!arrow
        }, getModifier(popperOptions, 'arrow')),
        flip: _extends({
          enabled: instance.props.flip,
          // The tooltip is offset by 10px from the popper in CSS,
          // we need to account for its distance
          padding: instance.props.distance + PADDING,
          behavior: instance.props.flipBehavior
        }, getModifier(popperOptions, 'flip')),
        offset: _extends({
          offset: instance.props.offset
        }, getModifier(popperOptions, 'offset'))
      }),
      onCreate: function onCreate(data) {
        applyMutations(data);
        runMountCallback();

        if (popperOptions && popperOptions.onCreate) {
          popperOptions.onCreate(data);
        }
      },
      onUpdate: function onUpdate(data) {
        applyMutations(data);
        runMountCallback();

        if (popperOptions && popperOptions.onUpdate) {
          popperOptions.onUpdate(data);
        }
      }
    });

    instance.popperInstance = new esm_popper["a" /* default */](reference, popper, config);
  }
  /**
   * Mounts the tooltip to the DOM
   */


  function mount() {
    hasMountCallbackRun = false;
    var isInLooseFollowCursorMode = getIsInLooseFollowCursorMode();

    if (instance.popperInstance) {
      setFlipModifierEnabled(instance.popperInstance.modifiers, instance.props.flip);

      if (!isInLooseFollowCursorMode) {
        instance.popperInstance.reference = reference;
        instance.popperInstance.enableEventListeners();
      }

      instance.popperInstance.scheduleUpdate();
    } else {
      createPopperInstance();

      if (!isInLooseFollowCursorMode) {
        instance.popperInstance.enableEventListeners();
      }
    }

    var appendTo = instance.props.appendTo;
    var parentNode = appendTo === 'parent' ? reference.parentNode : invokeWithArgsOrReturn(appendTo, [reference]);

    if (!parentNode.contains(popper)) {
      parentNode.appendChild(popper);
      instance.props.onMount(instance);
      instance.state.isMounted = true;
    }
  }
  /**
   * Setup before show() is invoked (delays, etc.)
   */


  function scheduleShow(event, shouldAvoidCallingOnTrigger) {
    clearDelayTimeouts();

    if (instance.state.isVisible) {
      return;
    } // Is a delegate, create an instance for the child target


    if (instance.props.target) {
      return createDelegateChildTippy(event);
    }

    isScheduledToShow = true;

    if (event && !shouldAvoidCallingOnTrigger) {
      instance.props.onTrigger(instance, event);
    }

    if (instance.props.wait) {
      return instance.props.wait(instance, event);
    } // If the tooltip has a delay, we need to be listening to the mousemove as
    // soon as the trigger event is fired, so that it's in the correct position
    // upon mount.
    // Edge case: if the tooltip is still mounted, but then scheduleShow() is
    // called, it causes a jump.


    if (getIsInLooseFollowCursorMode() && !instance.state.isMounted) {
      if (!instance.popperInstance) {
        createPopperInstance();
      }

      document.addEventListener('mousemove', positionVirtualReferenceNearCursor);
    }

    addDocumentClickListener();
    var delay = getValue(instance.props.delay, 0, defaultProps.delay);

    if (delay) {
      showTimeoutId = setTimeout(function () {
        show();
      }, delay);
    } else {
      show();
    }
  }
  /**
   * Setup before hide() is invoked (delays, etc.)
   */


  function scheduleHide() {
    clearDelayTimeouts();

    if (!instance.state.isVisible) {
      removeFollowCursorListener();
      removeDocumentClickListener();
      return;
    }

    isScheduledToShow = false;
    var delay = getValue(instance.props.delay, 1, defaultProps.delay);

    if (delay) {
      hideTimeoutId = setTimeout(function () {
        if (instance.state.isVisible) {
          hide();
        }
      }, delay);
    } else {
      // Fixes a `transitionend` problem when it fires 1 frame too
      // late sometimes, we don't want hide() to be called.
      scheduleHideAnimationFrameId = requestAnimationFrame(function () {
        hide();
      });
    }
  }
  /**
   * Listener to handle clicks on the document to determine if the
   * instance should hide
   */


  function onDocumentClick(event) {
    // Clicked on interactive popper
    if (instance.props.interactive && popper.contains(event.target)) {
      return;
    } // Clicked on the event listeners target


    if (getEventListenersTarget().contains(event.target)) {
      if (isUsingTouch) {
        return;
      }

      if (instance.state.isVisible && includes(instance.props.trigger, 'click')) {
        return;
      }
    }

    if (instance.props.hideOnClick === true) {
      clearDelayTimeouts();
      hide();
    }
  }
  /* ======================= 🔑 Public methods 🔑 ======================= */

  /**
   * Enables the instance to allow it to show or hide
   */


  function enable() {
    instance.state.isEnabled = true;
  }
  /**
   * Disables the instance to disallow it to show or hide
   */


  function disable() {
    instance.state.isEnabled = false;
  }
  /**
   * Clears pending timeouts related to the `delay` prop if any
   */


  function clearDelayTimeouts() {
    clearTimeout(showTimeoutId);
    clearTimeout(hideTimeoutId);
    cancelAnimationFrame(scheduleHideAnimationFrameId);
  }
  /**
   * Sets new props for the instance and redraws the tooltip
   */


  function set(options) {
    // Backwards-compatible after TypeScript change
    options = options || {};
    validateOptions(options, defaultProps);
    removeTriggersFromReference();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference, _extends({}, instance.props, {}, options, {
      ignoreAttributes: true
    }));
    nextProps.ignoreAttributes = index_all_hasOwnProperty(options, 'ignoreAttributes') ? options.ignoreAttributes || false : prevProps.ignoreAttributes;
    instance.props = nextProps;
    addTriggersToReference();
    cleanupInteractiveMouseListeners();
    debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
    updatePopperElement(popper, prevProps, nextProps);
    instance.popperChildren = getChildren(popper);

    if (instance.popperInstance) {
      if (POPPER_INSTANCE_DEPENDENCIES.some(function (prop) {
        return index_all_hasOwnProperty(options, prop) && options[prop] !== prevProps[prop];
      })) {
        instance.popperInstance.destroy();
        createPopperInstance();

        if (instance.state.isVisible) {
          instance.popperInstance.enableEventListeners();
        }

        if (instance.props.followCursor && lastMouseMoveEvent) {
          positionVirtualReferenceNearCursor(lastMouseMoveEvent);
        }
      } else {
        instance.popperInstance.update();
      }
    }
  }
  /**
   * Shortcut for .set({ content: newContent })
   */


  function setContent(content) {
    set({
      content: content
    });
  }
  /**
   * Shows the tooltip
   */


  function show() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getValue(instance.props.duration, 0, defaultProps.duration[1]);

    if (instance.state.isDestroyed || !instance.state.isEnabled || isUsingTouch && !instance.props.touch) {
      return;
    } // Standardize `disabled` behavior across browsers.
    // Firefox allows events on disabled elements, but Chrome doesn't.
    // Using a wrapper element (i.e. <span>) is recommended.


    if (getEventListenersTarget().hasAttribute('disabled')) {
      return;
    }

    if (instance.props.onShow(instance) === false) {
      return;
    }

    addDocumentClickListener();
    popper.style.visibility = 'visible';
    instance.state.isVisible = true;

    if (instance.props.interactive) {
      getEventListenersTarget().classList.add(ACTIVE_CLASS);
    } // Prevent a transition if the popper is at the opposite placement


    var transitionableElements = getTransitionableElements();
    setTransitionDuration(transitionableElements.concat(popper), 0);

    currentMountCallback = function currentMountCallback() {
      if (!instance.state.isVisible) {
        return;
      }

      var isInLooseFollowCursorMode = getIsInLooseFollowCursorMode();

      if (isInLooseFollowCursorMode && lastMouseMoveEvent) {
        positionVirtualReferenceNearCursor(lastMouseMoveEvent);
      } else if (!isInLooseFollowCursorMode) {
        // Double update will apply correct mutations
        instance.popperInstance.update();
      }

      if (instance.popperChildren.backdrop) {
        instance.popperChildren.content.style.transitionDelay = Math.round(duration / 12) + 'ms';
      }

      if (instance.props.sticky) {
        makeSticky();
      }

      setTransitionDuration([popper], instance.props.updateDuration);
      setTransitionDuration(transitionableElements, duration);
      setVisibilityState(transitionableElements, 'visible');
      onTransitionedIn(duration, function () {
        if (instance.props.aria) {
          getEventListenersTarget().setAttribute("aria-".concat(instance.props.aria), popper.id);
        }

        instance.props.onShown(instance);
        instance.state.isShown = true;
      });
    };

    mount();
  }
  /**
   * Hides the tooltip
   */


  function hide() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getValue(instance.props.duration, 1, defaultProps.duration[1]);

    if (instance.state.isDestroyed || !instance.state.isEnabled && !isBeingDestroyed) {
      return;
    }

    if (instance.props.onHide(instance) === false && !isBeingDestroyed) {
      return;
    }

    removeDocumentClickListener();
    popper.style.visibility = 'hidden';
    instance.state.isVisible = false;
    instance.state.isShown = false;
    wasVisibleDuringPreviousUpdate = false;

    if (instance.props.interactive) {
      getEventListenersTarget().classList.remove(ACTIVE_CLASS);
    }

    var transitionableElements = getTransitionableElements();
    setTransitionDuration(transitionableElements, duration);
    setVisibilityState(transitionableElements, 'hidden');
    onTransitionedOut(duration, function () {
      if (!isScheduledToShow) {
        removeFollowCursorListener();
      }

      if (instance.props.aria) {
        getEventListenersTarget().removeAttribute("aria-".concat(instance.props.aria));
      }

      instance.popperInstance.disableEventListeners();
      instance.popperInstance.options.placement = instance.props.placement;
      popper.parentNode.removeChild(popper);
      instance.props.onHidden(instance);
      instance.state.isMounted = false;
    });
  }
  /**
   * Destroys the tooltip
   */


  function destroy(destroyTargetInstances) {
    if (instance.state.isDestroyed) {
      return;
    }

    isBeingDestroyed = true; // If the popper is currently mounted to the DOM, we want to ensure it gets
    // hidden and unmounted instantly upon destruction

    if (instance.state.isMounted) {
      hide(0);
    }

    removeTriggersFromReference();
    delete reference._tippy;
    var target = instance.props.target;

    if (target && destroyTargetInstances && isRealElement(reference)) {
      arrayFrom(reference.querySelectorAll(target)).forEach(function (child) {
        if (child._tippy) {
          child._tippy.destroy();
        }
      });
    }

    if (instance.popperInstance) {
      instance.popperInstance.destroy();
    }

    isBeingDestroyed = false;
    instance.state.isDestroyed = true;
  }
}

/**
 * Groups an array of instances by taking control of their props during
 * certain lifecycles.
 */
function group(instances) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? instances[0].props.delay : _ref$delay,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 0 : _ref$duration;

  var isAnyTippyOpen = false;
  instances.forEach(function (instance) {
    if (instance._originalProps) {
      instance.set(instance._originalProps);
    } else {
      instance._originalProps = _extends({}, instance.props);
    }
  });

  function setIsAnyTippyOpen(value) {
    isAnyTippyOpen = value;
    updateInstances();
  }

  function onShow(instance) {
    instance._originalProps.onShow(instance);

    instances.forEach(function (instance) {
      instance.set({
        duration: duration
      });

      if (instance.state.isVisible) {
        instance.hide();
      }
    });
    setIsAnyTippyOpen(true);
  }

  function onHide(instance) {
    instance._originalProps.onHide(instance);

    setIsAnyTippyOpen(false);
  }

  function onShown(instance) {
    instance._originalProps.onShown(instance);

    instance.set({
      duration: instance._originalProps.duration
    });
  }

  function updateInstances() {
    instances.forEach(function (instance) {
      instance.set({
        onShow: onShow,
        onShown: onShown,
        onHide: onHide,
        delay: isAnyTippyOpen ? [0, Array.isArray(delay) ? delay[1] : delay] : delay,
        duration: isAnyTippyOpen ? duration : instance._originalProps.duration
      });
    });
  }

  updateInstances();
}

var globalEventListenersBound = false;
/**
 * Exported module
 */

function tippy(targets, options) {
  validateOptions(options || {}, defaultProps);

  if (!globalEventListenersBound) {
    bindGlobalEventListeners();
    globalEventListenersBound = true;
  }

  var props = _extends({}, defaultProps, {}, options); // If they are specifying a virtual positioning reference, we need to polyfill
  // some native DOM props


  if (isBareVirtualElement(targets)) {
    polyfillElementPrototypeProperties(targets);
  }

  var instances = getArrayOfElements(targets).reduce(function (acc, reference) {
    var instance = reference && createTippy(reference, props);

    if (instance) {
      acc.push(instance);
    }

    return acc;
  }, []);
  return isSingular(targets) ? instances[0] : instances;
}
/**
 * Static props
 */


tippy.version = version;
tippy.defaults = defaultProps;
/**
 * Static methods
 */

tippy.setDefaults = function (partialDefaults) {
  Object.keys(partialDefaults).forEach(function (key) {
    // @ts-ignore
    defaultProps[key] = partialDefaults[key];
  });
};

tippy.hideAll = hideAll;
tippy.group = group;
/**
 * Auto-init tooltips for elements with a `data-tippy="..."` attribute
 */

function autoInit() {
  arrayFrom(document.querySelectorAll('[data-tippy]')).forEach(function (el) {
    var content = el.getAttribute('data-tippy');

    if (content) {
      tippy(el, {
        content: content
      });
    }
  });
}

if (isBrowser) {
  setTimeout(autoInit);
}

/**
 * Injects a string of CSS styles to a style node in <head>
 */

function injectCSS(css) {
  if (isBrowser) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = css;
    style.setAttribute('data-tippy-stylesheet', '');
    var head = document.head;
    var firstStyleOrLinkTag = head.querySelector('style,link');

    if (firstStyleOrLinkTag) {
      head.insertBefore(style, firstStyleOrLinkTag);
    } else {
      head.appendChild(style);
    }
  }
}

injectCSS(css);

/* harmony default export */ var index_all = (tippy);
//# sourceMappingURL=index.all.js.map

// CONCATENATED MODULE: ./src/js/admin/ui/Button/ButtonHolder.js



class ButtonHolder_ButtonHolder
{
    constructor(buttonObject)
    {
        this.buttonObject = buttonObject;
        this.buttonObject.stylingObject = this;

        this.groupHolder = null;
        this.buttonTitle = null;
        this.manageButtonMenu = null;
    }

    /**
     * Build button holder
     *
     * @returns {HTMLElement}
     */
    build()
    {
        let groupHolder = document.createElement("div");
        groupHolder.className = "button-group-holder";

        groupHolder.appendChild(this.createTitleField());
        groupHolder.appendChild(this.createButtonMobileDesktop());
        groupHolder.appendChild(this.createButtonHolderButton());
        groupHolder.appendChild(this.createQuickMenu());

        this.groupHolder = groupHolder;
        return groupHolder;
    }

    /**
     * Setting button
     *
     * @returns {HTMLElement}
     */
    createButtonHolderButton()
    {
        let buttonArrow = document.createElement("a");
        buttonArrow.href = 'javascript:void(0)';
        buttonArrow.className = "holder-button";

        // Icon
        let icon = document.createElement("i");
        icon.className = "fas fa-ellipsis-v";

        buttonArrow.appendChild(icon);

        buttonArrow.addEventListener("click", () => {
            let wasOpened = this.groupHolder.className.indexOf('holder-show-quick-menu');
            jQuery('.holder-show-quick-menu').removeClass('holder-show-quick-menu');

            if(wasOpened === -1) {
                this.groupHolder.classList.add('holder-show-quick-menu');
            }
        });

        return buttonArrow;
    }

    /**
     *
     * @returns {HTMLElement}
     */
    createQuickMenu()
    {
        let buttonMenu = document.createElement('div');
        buttonMenu.className = 'group-holder-quick-menu';
        buttonMenu.addEventListener('click', () => {
            this.groupHolder.classList.remove('holder-show-quick-menu');
        });

        // Menu items
        buttonMenu.appendChild(this.createQuickMenuButton('fas fa-wrench', window.Buttonizer.translate('common.settings'), () => this.revealSettings(), 'settings'));
        buttonMenu.appendChild(this.createQuickMenuButton('fas fa-cog', window.Buttonizer.translate('utils.advanced_settings'), () => this.buttonObject.windowObject.toggle(), !window.Buttonizer.hasPremium() ? 'buttonizer-premium-gray-out' : ''));
        buttonMenu.appendChild(this.createQuickMenuButton('fas fa-pencil-alt', window.Buttonizer.translate('utils.rename'), () => this.buttonRename(), ''));
        buttonMenu.appendChild(this.createQuickMenuButton('far fa-copy', window.Buttonizer.translate('utils.duplicate'), () => this.buttonDuplicate(), ''));
        buttonMenu.appendChild(this.createQuickMenuButton('far fa-trash-alt', window.Buttonizer.translate('utils.delete'), () => this.buttonDelete(), 'delete'));

        this.manageButtonMenu = buttonMenu;
        return buttonMenu;
    }

    /**
     *
     * @returns {HTMLElement}
     */
    createQuickMenuButton(iconClass, title, event, className = '')
    {
        let link = document.createElement('a');
        link.href = 'javascript:void(0)';
        link.className = className;

        let icon = document.createElement('i');
        icon.className = iconClass;
        link.appendChild(icon);

        link.innerHTML += title;

        link.addEventListener('click', (e) => event(e));

        return link;
    }

    /**
     * Create title text field
     *
     * @returns {HTMLElement}
     */
    createTitleField()
    {
        let container = document.createElement('div');
        container.className += "button-title-holder";

        let title = document.createElement("input");
        title.type = "text";
        title.className = "group-title";
        title.value = this.buttonObject.data.name;
        title.setAttribute("readonly", "");
        title.id = 'buttonizer-button-title';

        let button = document.createElement("a");
        button.href = "javascript:void(0)";
        button.className = "group-rename";
        button.innerHTML = "<i class='fa fa-pencil-alt'></i>";

        title.addEventListener("change", () => this.updateTitle());
        title.addEventListener("blur", () => this.updateTitle());

        title.addEventListener("keyup", (e) => {
            if(e.keyCode === 13) {
                this.updateTitle();
            }else if(e.keyCode === 27) {
                title.value = this.buttonObject.data.name;
                title.setAttribute("readonly", "");
            }
        });
        
        title.addEventListener("click", (e) => {
            jQuery('.holder-show-quick-menu').removeClass('holder-show-quick-menu');
            if(!e.isTrusted) return;
            if(!title.hasAttribute("readonly")) return;

            this.revealSettings();
        });

        this.buttonTitle = title;

        container.appendChild(title);
        container.appendChild(button);

        return title;
    }

    /**
     * Update title
     */
    updateTitle()
    {
        this.buttonObject.data.name = this.buttonTitle.value;
        window.Buttonizer.buttonChanges = true;

        this.buttonTitle.setAttribute("readonly", "");
    }

    /**
     * Toggle button title
     */
    buttonRename() {
        // When already editing, ignore double-clicks
        if(!this.buttonTitle.hasAttribute("readonly")) return;

        // Set readonly back
        this.buttonTitle.removeAttribute("readonly");

        // Focus field
        this.buttonTitle.focus();
    }

    /**
     * Delete button
     */
    buttonDelete()
    {
        if(this.buttonObject.groupObject.getButtonsAlive() === 1)
        {
            // NOPE!
            new Modal({
                title: window.Buttonizer.translate('bar.buttons.delete_button.window_title_button'),
                content: "<p>"+ window.Buttonizer.translate('bar.buttons.delete_button.cannot_delete') +"</p>",

                buttons: [{
                    text: window.Buttonizer.translate('modal.close'),
                    close: true,
                    focus: true,
                    confirm: true
                }]
            });
            return;
        }

        new Modal({
            title: window.Buttonizer.translate('bar.buttons.delete_button.window_title_button'),
            content: "<p>"+ window.Buttonizer.translate('bar.buttons.delete_button.question_remove_button').format(this.buttonObject.data.name) +"</p>",

            onConfirm: () =>
            {
                this.buttonObject.removeButton();
            },

            buttons: [{
                text: window.Buttonizer.translate('modal.changed_my_mind'),
                close: true,
                focus: true
            }, {
                text: window.Buttonizer.translate('utils.delete'),
                confirm: true
            }]
        });
    }

    buttonDuplicate()
    {
        // Button title + "- Copy" with ANY number in brackets
        let regex2 = new RegExp(this.buttonObject.data.name + '\ - Copy \\([0-9]+\\)');

        // Add "- Copy" to title
        let title = this.buttonObject.data.name + ' - Copy';

        // Loop through all groupbuttons
        for(let i = 0; i < this.buttonObject.groupObject.buttons.length; i++)
        {
            // Look if there's a button with Button Title + "- Copy (number)"
            if(this.buttonObject.groupObject.buttons[i].data.name.match(regex2)) {

                // Get button with Button Title + "- Copy (number)"
                let tag = this.buttonObject.groupObject.buttons[i].data.name.match(regex2).toString();

                // Get only the "- Copy (number)"
                let num = tag.match(/- Copy \([0-9]+\)/).toString();

                // Get only the number from let num
                let numTag = parseInt(num.replace(/\D/g, ''));

                // New title = Button Title + - Copy (number + 1)
                title =  this.buttonObject.data.name + ` - Copy (${numTag + 1})`;
            }

            // If there's no button with Button Title + "- Copy (number)" but there's Button Title + "- Copy" add (2)
            else if(this.buttonObject.groupObject.buttons[i].data.name === title && !this.buttonObject.groupObject.buttons[i].data.name.match(regex2)) {
                title += ` (2)`;
            }
        };
        let data = {};
        for(let entry in this.buttonObject.data){
            data[entry] = this.buttonObject.data[entry];
        }
        data.name = title;

        new ui_Button(this.buttonObject.groupObject, data);

        window.Buttonizer.buttonChanges = true;
    }

    createButtonMobileDesktop()
    {
        let newVisibility = document.createElement('a');
        newVisibility.href = 'javascript:void(0)';
        newVisibility.className = 'mobile-desktop';
        newVisibility.innerHTML = "&nbsp;";

        // Mobile icon preview
        let iconPhone = document.createElement('i');
        iconPhone.className = "mobile-preview"
        iconPhone.innerHTML = `<i class="fa fa-mobile-alt"></i>`

        // Desktop icon preview
        let iconDesktop = document.createElement('i');
        iconDesktop.className = "desktop-preview"
        iconDesktop.innerHTML = `<i class="fa fa-desktop"></i>`

        // If show_mobile is true of undefined, make preview blue
        if (this.buttonObject.data.show_mobile === 'true' || this.buttonObject.data.show_mobile === undefined) {
            iconPhone.className += ' selected';
        }

        // If show_desktop is true of undefined, make preview blue
        if (this.buttonObject.data.show_desktop === 'true' || this.buttonObject.data.show_desktop === undefined) {
            iconDesktop.className += ' selected';
        }

        let visibility = document.createElement("div");
        visibility.className = "new-button-visibility";

        visibility.appendChild(this.createMobile(iconPhone));
        visibility.appendChild(this.createDesktop(iconDesktop));

        newVisibility.appendChild(visibility);
        newVisibility.appendChild(iconPhone);
        newVisibility.appendChild(iconDesktop);

        return newVisibility
    }

    createMobile(iconPhone)
    {

        let mobile = document.createElement("a");
        mobile.href = "javascript:void(0)";
        mobile.className = "visibility-deskmobi";

        let icon = document.createElement("i");
        icon.className = "fa fa-mobile-alt";

        mobile.appendChild(icon);

        this.buttonObject.registerUI('show_mobile', {
            update: (value) => {
                if(value === true || value === 'true') {
                    mobile.classList.add('selected');
                    iconPhone.classList.add('selected');
                } else{
                    mobile.classList.remove('selected')
                    iconPhone.classList.remove('selected');
                }
            }
        });
        this.buttonObject.getUI('show_mobile').forEach((item) => item.update(this.buttonObject.get('show_mobile')));

        // Click Show On: Mobile when clicked.
        mobile.addEventListener("click", () => {
            let showMobile = this.buttonObject.get('show_mobile', true);

            this.buttonObject.set('show_mobile', !(showMobile === true || showMobile === 'true'));
        });

        return mobile;
    }

    createDesktop(iconDesktop)
    {
        let desktop = document.createElement("a");
        desktop.href = "javascript:void(0)";
        desktop.className = "visibility-deskmobi";

        let icon = document.createElement("i");
        icon.className = "fa fa-desktop";

        desktop.appendChild(icon);

        this.buttonObject.registerUI('show_desktop', {
            update: (value) => {
                if(value === true || value === 'true') {
                    desktop.classList.add('selected');
                    iconDesktop.classList.add('selected');
                } else{
                    desktop.classList.remove('selected')
                    iconDesktop.classList.remove('selected');
                }
            }
        });
        this.buttonObject.getUI('show_desktop').forEach((item) => item.update(this.buttonObject.get('show_desktop')));

        // Click Show On: Desktop when clicked.
        desktop.addEventListener("click", () => {
            let showDesktop = this.buttonObject.get('show_desktop', true);

            this.buttonObject.set('show_desktop', !(showDesktop === true || showDesktop === 'true'));
        });

        return desktop;
    }

    /**
     * Toggle settings
     */
    revealSettings()
    {
        this.buttonObject.revealSettings();
    }
}



/* harmony default export */ var Button_ButtonHolder = (ButtonHolder_ButtonHolder);
// CONCATENATED MODULE: ./src/js/admin/ui/Inputs/FormToggle.js
/**
 * Buttonizer 2.0
 *
 * This will create a switch input (on or off)
 *
 * Result value: true or false
 */

class FormToggle
{
    /**
     * FormBoolean constructor
     *
     * @param constructData
     */
    constructor(constructData)
    {
        // Is the switch checked?
        this.state          = (typeof constructData.state === typeof undefined ? false : (constructData.state == 'true'));

        // What must be executed when the switch changed?
        this.onChange       = (typeof constructData.onChange === typeof undefined ? function () { console.log("FormBoolean: No binding. Use FormBoolean.onChange()") } : constructData.onChange);

        // Is the switch disabled?
        this.disabled       = (typeof constructData.disabled === typeof undefined ? false : constructData.disabled);

        // Is the switch visible?
        this.visible        = (typeof constructData.visible === typeof undefined ? true : constructData.visible);

        // New element
        this.element        = HTMLElement;
    }

    /**
     * Building element
     */
    build()
    {
        // New switch element
        this.element = document.createElement("a");
        this.element.href = "javascript:void(0)";
        this.element.className = "buttonizer-boolean " + (this.state === true ? 'boolean-selected' : '');
        this.element.addEventListener("click", () => this.toggle());

        // Switch circle
        let circle = document.createElement("div");
        circle.className = "buttonizer-boolean-circle";

        this.element.appendChild(circle);

        return this.element;
    }

    hide()
    {
        this.element.style.display = "none";
    }

    show()
    {
        this.element.style.display = "block";
    }

    onToggle(callback)
    {
        this.onChange = callback;
    }

    toggle()
    {
        if(this.disabled)
        {
            console.log("Sorry, you're not able to edit this");
            return;
        }

        // Toggle
        this.state = !this.state;

        // Add or remove class
        if(this.state === true) {
            this.element.classList.add("boolean-selected");
        }else{
            this.element.classList.remove("boolean-selected");
        }

        this.onChange(this.state);
    }
}
// CONCATENATED MODULE: ./src/js/admin/ui/SettingHolder.js

class SettingHolder
{
    constructor(title, content, className)
    {
        this.title = title;
        this.settingHolderContent = content;
        this.className = (typeof className !== typeof undefined ? className : false);
    }

    build()
    {
        let row = document.createElement("div");
        row.className = "buttonizer-setting-row " + (this.className === false ? '' : this.className);
        row.style.marginTop = '10px';

        let rowTitle = document.createElement("div");
        rowTitle.className = "buttonizer-setting-row-c1";
        rowTitle.innerHTML = this.title;

        let rowInteraction = document.createElement("div");
        rowInteraction.className = "buttonizer-setting-row-c2";
        rowInteraction.appendChild(this.settingHolderContent);

        row.appendChild(rowTitle);
        row.appendChild(rowInteraction);

        return row;
    }
}
// CONCATENATED MODULE: ./src/js/admin/ui/Button/ButtonOptions/ButtonAction/Url.js
class Url
{
    constructor(ButtonAction)
    {
        this.buttonAction = ButtonAction;
    }

    build(placeholder)
    {
        // Add input
        let input = this.buttonAction.inputText();
        input.placeholder = placeholder === undefined ? "https://www.domain.ltd/page " : placeholder;
        input.addEventListener("keyup", () => this.change(input.value));

        if(this.buttonAction.value !== "")
        {
            input.value = this.buttonAction.value;
        }

        return input;
    }

    /**
     * Triggered by every keyup
     *
     * @param value
     */
    change(value)
    {
        // If valid, remove error
        if(this.valid(value)) {
            this.buttonAction.removeError();
        }

        // Always do save the status
        this.buttonAction.updateButtonActionValue(value);
    }

    /**
     * Validation for URL field
     * @param value
     * @returns {boolean}
     */
    valid(value)
    {
        let error = false;
        let websiteUrlPattern = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

        if(!websiteUrlPattern.test(value) && (value.substring(0, 1) !== '?' && value.substring(0, 1) !== '#')) {
            error =
                '<p>'+ window.Buttonizer.translate('settings.button_action.actions.url.invalid') +'</p>' +
                '<p>'+ window.Buttonizer.translate('settings.button_action.actions.url.invalid_tip') +'</p>';
        }else if(value.indexOf('https://') === -1 && value.substring(0, 1) !== '#') {
            error =
                '<p>'+ window.Buttonizer.translate('settings.button_action.actions.url.insecure') +'</p>' +
                '<p><a href="https://community.buttonizer.pro/knowledgebase/19" target="_blank" style="text-decoration: none;">More info &raquo;</a></p>';
        }

        if(error === false) {
            return true;
        } else{
            this.buttonAction.addError(error);
            return false;
        }
    }
}
// CONCATENATED MODULE: ./src/js/admin/ui/Button/ButtonOptions/ButtonAction/input.js


class input_Input
{
    constructor(ButtonAction, numbersOnly = false)
    {
        this.buttonAction = ButtonAction;
        this.numbersOnly = numbersOnly;
    }

    build(placeholder)
    {
        // Add container
        let container = document.createElement('div');
        
        // Add input
        let input = this.buttonAction.inputText();
        input.placeholder = placeholder === undefined ? "Add text here" : placeholder;
        input.addEventListener("keyup", () => this.change(input.value));

        if(this.buttonAction.value !== "")
        {
            input.value = this.buttonAction.value;
        }

        container.appendChild(input);

        if(this.numbersOnly) {
            this.numbersOnlyField = document.createElement("div")
            this.numbersOnlyField.className = 'field-error';
            this.numbersOnlyField.innerHTML = window.Buttonizer.translate('warnings.only_numbers');
            this.numbersOnlyField.style.display = 'none';

            container.appendChild(this.numbersOnlyField)
        }

        return container;
    }

    /**
     * Triggered by every keyup
     *
     * @param value
     */
    change(value)
    {
        if(this.numbersOnly) {
            if(isNaN(value)) {
                this.numbersOnlyField.style.display = 'block';
            }else{
                this.numbersOnlyField.style.display = 'none';
            }
        }

        // Always do save the status
        this.buttonAction.updateButtonActionValue(value);
    }
}
// CONCATENATED MODULE: ./src/js/admin/ui/Button/ButtonOptions/ButtonAction/PhoneNumber.js
class PhoneNumber
{
    constructor(ButtonAction)
    {
        this.buttonAction = ButtonAction;
    }

    build(placeholder)
    {
        // Add input
        let input = this.buttonAction.inputText();
        input.placeholder = placeholder === undefined ? "(000) 123 456 78" : placeholder;
        input.addEventListener("keyup", () => this.change(input.value));

        if(this.buttonAction.value !== "")
        {
            input.value = this.buttonAction.value;
        }

        return input;
    }

    /**
     * Triggered by every keyup
     *
     * @param value
     */
    change(value)
    {
        // If valid, remove error
        if(this.valid(value)) {
            this.buttonAction.removeError();
        }

        // Always do save the status
        this.buttonAction.updateButtonActionValue(value);
    }

    /**
     * Validation for URL field
     * @param value
     * @returns {boolean}
     */
    valid(value)
    {
        let error = false;

        value = value.replace("+", "");
        value = value.replace(" ", "");

        if(!/^(?=.*\d)[\d ]+$/.test(value)) {
            error = '<p>'+ window.Buttonizer.translate('warnings.invalid_phone_number') +'</p>';
        }

        if(error === false) {
            return true;
        } else{
            this.buttonAction.addError(error);
            return false;
        }
    }
}
// CONCATENATED MODULE: ./src/js/admin/ui/Button/ButtonOptions/ButtonAction/Mail.js
class Mail
{
    constructor(ButtonAction)
    {
        this.buttonAction = ButtonAction;
    }

    build(placeholder)
    {
        // Add input
        let input = this.buttonAction.inputText();
        input.placeholder = placeholder === undefined ? "account@domain.tld" : placeholder;

        input.addEventListener("keyup", () => this.change(input.value));

        if(this.buttonAction.value !== "")
        {
            input.value = this.buttonAction.value;
        }

        return input;
    }

    /**
     * Triggered by every keyup
     *
     * @param value
     */
    change(value)
    {
        // If valid, remove error
        if(this.valid(value)) {
            this.buttonAction.removeError();
        }

        // Always do save the status
        this.buttonAction.updateButtonActionValue(value);
    }

    /**
     * Validation for Mail field
     * @param value
     * @returns {boolean}
     */
    valid(value)
    {
        let error = false;

        value = value.replace("+", "");
        value = value.replace(" ", "");

        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/.test(value)) {
            error = '<p>'+ window.Buttonizer.translate('warnings.invalid_email') +'</p>';
        }

        if(error === false) {
            return true;
        } else{
            this.buttonAction.addError(error);
            return false;
        }
    }
}
// CONCATENATED MODULE: ./src/js/admin/ui/Button/ButtonOptions/ButtonAction/Pages.js


class Pages
{
    constructor(ButtonAction, numbersOnly = false)
    {
        this.buttonAction = ButtonAction;
        this.value = this.buttonAction.value;
    }

    build()
    {
        // Add container
        let container = document.createElement('div');
        container.className = 'button-value';
        
        // Add dropdown
        let input = this.generateValue();

        container.appendChild(input);

        return container;
    }

    /**
     * Triggered on change
     *
     * @param value
     */
    change(value)
    {
        this.buttonAction.updateButtonActionValue(value);
    }

    
    /**
     * Value text
     * @returns {HTMLElement}
     */
    generateValue()
    {
        let input = null;

        input = document.createElement("select");
        input.style.width = '100%';
        input.style.maxHeight = '40px';
        input.className = 'buttonizer-select-action';

        let placeholder = document.createElement('option');
        placeholder.value = '#'

        let loadItems = 'pages'; // By default, load pages

        let loading = document.createElement("option");
        loading.disabled = true;
        loading.innerText = window.Buttonizer.translate('loading.loading');
        input.appendChild(loading);

        // Get results
        this.loadResults(loadItems, input, () => {
            setTimeout(() => {
                jQuery(input).chosen({
                    placeholder_text_single: 'Select a page...',
                    no_results_text: window.Buttonizer.translate('utils.search_not_found') + " ",
                    hide_results_on_select: false
                }).change((evt, params) => {
                    this.change(params.selected);
                });
            }, 200);
        });

        return input;
    }
    
    /**
     *
     * @param type
     * @param input
     * @param callback
     */
    loadResults(type, input, callback)
    {
        jQuery.ajax({
            url: buttonizer_admin.ajax + '?action=buttonizer_backend&item=WordpressOverview&get=' + type,
            dataType: 'json',
            success: (data) => {
                input.innerHTML = '';

                jQuery.each(data.results, (i, val) => {
                    if (typeof val.name !== 'undefined') {
                        let placeholder = document.createElement('option');
                        
                        let option = document.createElement("option");

                        option.value = val.id;
                        option.innerText = val.name;

                        if(option.value === this.value)
                        {
                            option.selected = true;
                        }

                        input.appendChild(placeholder);
                        input.appendChild(option);
                    }
                });


                callback();
            },
            error: (err) => {

            }
        });

    }


}
// EXTERNAL MODULE: ./src/js/admin/ui/Button/ButtonOptions/ButtonAction/Javascript.js
var Javascript = __webpack_require__(4);

// CONCATENATED MODULE: ./src/js/admin/ui/Button/ButtonOptions/ButtonAction/SocialSharing.js
class SocialSharing
{
    constructor(ButtonAction)
    {
        this.buttonAction = ButtonAction;
    }

    /**
     * Build Sharing options
     * @returns {HTMLSelectElement}
     */
    build()
    {
        // Create select
        let select = document.createElement("select");
        select.className = "buttonizer-select-action";

        // // Share on Facebook
        // select.appendChild(this.add('facebook', window.Buttonizer.translate('settings.button_action.actions.share_page_on').format('Facebook')));

        // // Twitter
        // select.appendChild(this.add('twitter', window.Buttonizer.translate('settings.button_action.actions.share_page_on').format('Twitter')));

        // // Whatsapp
        // select.appendChild(this.add('whatsapp', window.Buttonizer.translate('settings.button_action.actions.share_page_on').format('Whatsapp')));

        // // LinkedIn
        // select.appendChild(this.add('linkedin', window.Buttonizer.translate('settings.button_action.actions.share_page_on').format('LinkedIn')));

        // // Pinterest //James
        // select.appendChild(this.add('pinterest', window.Buttonizer.translate('settings.button_action.actions.share_page_on').format('Pinterest')));

        // // Mail Address
        // select.appendChild(this.add('mail', window.Buttonizer.translate('settings.button_action.actions.share_page_via').format('email')));

        // Popular actions
        select.appendChild(
            this.selectGroup(window.Buttonizer.translate('settings.button_action.actions.group_popular'),
                [
                    {value: "facebook", text: window.Buttonizer.translate('settings.button_action.actions.share_page_on').format('Facebook')},
                    {value: "twitter", text: window.Buttonizer.translate('settings.button_action.actions.share_page_on').format('Twitter')},
                    {value: "whatsapp", text: window.Buttonizer.translate('settings.button_action.actions.share_page_on').format('Whatsapp')},
                    {value: "linkedin", text: window.Buttonizer.translate('settings.button_action.actions.share_page_on').format('LinkedIn')},
                    {value: "pinterest", text: window.Buttonizer.translate('settings.button_action.actions.share_page_on').format('Pinterest')},
                    {value: "mail", text: window.Buttonizer.translate('settings.button_action.actions.share_page_via').format('email')},
                ]
            )
        );

        // New actions
        select.appendChild(
            this.selectGroup('New actions',
                [
                    {value: "sms", text: 'Share on SMS'},
                    {value: "reddit", text: 'Share on Reddit'},
                    {value: "tumblr", text: 'Share on Tumblr'},
                    {value: "digg", text: 'Share on Digg'},
                    {value: "weibo", text: 'Share on Weibo'},
                    {value: "vk", text: 'Share on VK'},
                    {value: "ok", text: 'Share on OK.ru (Odnoklassniki)'},
                    {value: "xing", text: 'Share on Xing'},
                    {value: "blogger", text: 'Share on Blogger'},
                    {value: "flipboard", text: 'Share on Flipboard'},
                ]
            )
        );

        // Change
        select.addEventListener("change", () => {
            this.buttonAction.updateButtonActionValue(select.value);
        });

        return select;
    }

    /**
     * Add action option
     *
     * @param value
     * @param text
     * @returns {HTMLOptionElement}
     */
    add(value, text)
    {
        let option = document.createElement("option");
        option.text = text;

        if(value === this.buttonAction.value)
        {
            option.selected = true;
        }

        option.value = value;

        return option;
    }

    selectGroup(label, option)
    {
        let optgroup = document.createElement('optgroup');
        optgroup.label = label;
        
        for (let num of option) {
            optgroup.appendChild(this.add(num.value, num.text));
        }

        return optgroup;
    }
}
// CONCATENATED MODULE: ./src/js/admin/ui/Button/ButtonOptions/Action.js













class Action_Action
{
    /**
     * Constructor
     *
     * @param buttonSettingsObject
     */
    constructor(buttonSettingsObject)
    {
        this.element = document.createElement("div");
        this.errorElement = document.createElement("div");

        this.buttonSettingsObject = buttonSettingsObject;
        this.dropdown = null;

        this.value = typeof this.buttonSettingsObject.buttonObject.data.action !== typeof undefined ? this.buttonSettingsObject.buttonObject.data.action : '';

    
        // Creates random string for this button
        this.unique = Array.apply(0, Array(15)).map(() => (charset => {
            return charset.charAt(Math.floor(Math.random() * charset.length))
        })('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')).join(''); 


    }

    /**
     * Build
     *
     * @returns {*}
     */
    build() {
        this.element.style.marginTop = "10px";

        // Create dropdown
        this.dropdown = document.createElement("select");
        this.dropdown.style.width = '199px';
        this.dropdown.className = "buttonizer-select-action";

        // Common actions
        this.dropdown.appendChild(
            this.selectGroup(window.Buttonizer.translate('settings.button_action.actions.group_popular'),
                [
                    {value: "url", text: "Website URL"},
                    {value: "phone", text: window.Buttonizer.translate('settings.button_action.actions.phone_number') },
                    {value: "mail", text: window.Buttonizer.translate('settings.button_action.actions.mail')},
                    {value: "whatsapp", text: "WhatsApp chat"},
                    {value: "backtotop", text: window.Buttonizer.translate('settings.button_action.actions.back_to_top')},
                    {value: "gobackpage", text: window.Buttonizer.translate('settings.button_action.actions.go_back_one_page')},
                    {value: "socialsharing", text: "Social sharing"},
                    {value: "javascript_pro", text: "Javascript function"},
                ]
            )
        );

        // Click to chat
        this.dropdown.appendChild(
            this.selectGroup(window.Buttonizer.translate('settings.button_action.actions.group_chat'),
                [
                    {value: "sms", text: "SMS"},
                    {value: "messenger_chat", text: "Facebook Messenger Chat Widget"},
                    {value: "messenger", text: "Facebook Messenger Link"},
                    {value: "twitter_dm", text: "Twitter DM"},
                    {value: "skype", text: "Skype"},
                    {value: "line", text: "LINE"},
                    {value: "telegram", text: "Telegram"},
                    {value: "wechat", text: "WeChat"},
                    {value: "viber", text: "Viber"},
                ]
            )
        );

        // Social media
        this.dropdown.appendChild(
            this.selectGroup(window.Buttonizer.translate('settings.button_action.actions.group_social_media'),
                [
                    {value: "facebook", text: "Facebook"},
                    {value: "twitter", text: "Twitter"},
                    {value: "instagram", text: "Instagram"},
                    {value: "snapchat", text: "Snapchat"},
                    {value: "linkedin", text: "LinkedIn"},
                    {value: "vk", text: "VKontakte"},
                    {value: "waze", text: "Waze"},
                ]
            )
        );

        // Popups
        this.dropdown.appendChild(
            this.selectGroup(window.Buttonizer.translate('settings.button_action.actions.group_popup'),
                [
                    {value: "poptin", text: "Poptin"},
                    {value: "elementor_popup", text: "Elementor Popup"},
                    {value: "popup_maker", text: "Popup Maker"},
                    {value: "popups", text: "Popups - WordPress Popup"},
                ]
            )
        );

        // Actions
        this.dropdown.appendChild(
            this.selectGroup('Actions',
                [
                    {value: "clipboard", text: "Copy URL to clipboard"},
                    {value: "print", text: "Print page"},
                    // {value: "woocommerce", text: "Add to Cart (WooCommerce)"},
                    // {value: "page", text: "Select Page"},
                ]
            )
        );

        let container = document.createElement("div");

        index_all(container.appendChild(new SettingHolder("<label for='label-always-open'>"+ window.Buttonizer.translate('settings.button_action.title') +"</label>", this.dropdown).build()).firstChild.firstChild, {
            content: window.Buttonizer.translate('settings.button_action.description'),
            animation: 'shift-away',
            arrow: true,
            hideOnClick: false
        });

        container.appendChild(this.element);
        container.appendChild(this.errorElement);

        this.changeForm(this.buttonSettingsObject.buttonObject.data.type);

        jQuery(this.dropdown).chosen({
            placeholder_text_single: window.Buttonizer.translate('settings.button_action.select'),
            no_results_text: window.Buttonizer.translate('settings.button_action.search_not_found'),
            hide_results_on_select: false
        }).change(() => this.update(this.dropdown.value));
        return container;
    }

    /**
     * Add action option
     *
     * @param value
     * @param text
     * @returns {HTMLElement}
     */
    add(value, text)
    {
        let option = document.createElement("option");
        option.text = text;

        if(value === this.buttonSettingsObject.buttonObject.data.type)
        {
            option.selected = true;
        }

        // PRO?
        if(value.indexOf("pro") === -1 || window.Buttonizer.hasPremium()) {
            option.value = value;
        }else{
            option.disabled = true;
            option.text += " (PRO ONLY)";
        }

        return option;
    }

    /**
     * Update
     *
     * @param value
     * @param confirmed
     */
    update(value, confirmed = false)
    {
        if(this.buttonSettingsObject.buttonObject.data.type === 'javascript_pro' && value !== 'javascript_pro') {
            if(!confirmed)
            {
                new Modal({
                    title: "<i class='fas fa-exclamation window-icon'></i> " + window.Buttonizer.translate('settings.button_action.actions.javascript.warning_modal_title'),
                    content: '<p>'+ window.Buttonizer.translate('settings.button_action.actions.javascript.warning_intro') +'</p><p>'+ window.Buttonizer.translate('settings.button_action.actions.javascript.warning_question') +'</p>',
                    class: 'warning-red',
                    buttons: [{
                        text: window.Buttonizer.translate('modal.changed_my_mind'),
                        close: true,
                        focus: true,
                        cancel: true
                    }, {
                        text: window.Buttonizer.translate('modal.yes_please'),
                        close: true,
                        confirm: true
                    }],
                    onConfirm: () => {
                        this.value = '';
                        this.update(value, true);
                    },
                    onCancel: () => {
                        this.buttonSettingsObject.buttonObject.data.type = 'javascript_pro';
                        // jQuery(this.dropdown).val('javascript_pro');
                        jQuery(this.dropdown).val(this.buttonSettingsObject.buttonObject.data.type);
                        jQuery(this.dropdown).trigger("chosen:updated");

                    }
                });
                return;
            }
        }else if(value === "socialsharing") {
            this.buttonSettingsObject.buttonObject.data.action = "facebook";
        }
        else if(this.buttonSettingsObject.buttonObject.data.type === "socialsharing")
        {
            switch(value) {
                case "elementor_popup":
                    this.value = "elementor" + this.unique;
                    this.updateButtonActionValue(this.value);
                    break;
                case "popup_maker":
                    this.value = "popupmaker" + this.unique;
                    this.updateButtonActionValue(this.value);
                    break;
                default:
                    this.value = "";
            }
        }
        else if(value === "elementor_popup")
        {
            this.value = "elementor" + this.unique;
            this.updateButtonActionValue(this.value);

            console.log(this.value);
        }
        else if(this.buttonSettingsObject.buttonObject.data.type === "elementor_popup" && value !== "popup_maker")
        {
            this.value = "";
        }
        else if(value === "popup_maker")
        {
            this.value = "popupmaker" + this.unique;
            this.updateButtonActionValue(this.value);

            console.log(this.value);
        }
        else if(this.buttonSettingsObject.buttonObject.data.type === "popup_maker" && value !== "elementor_popup")
        {
            this.value = "";
        }
        else if(this.buttonSettingsObject.buttonObject.data.type === "page")
        {
            this.value = "";
        }
        else if(value === "messenger_chat")
        {
            for (let groups of window.Buttonizer.buttonGroups) {
                for (let buttons of groups.buttons) {
                    let buttonName = `<br>Button: <b>${buttons.data.name}</b>`;


        
                    if(buttons.data.type === 'messenger_chat') {
                        new Modal({
                            title: `This is getting out of hand. Now there are two of them!`,
                            content: `<p>You currently have a button with a Facebook Messenger Chat Widget action.
                            <br>
                            As of now, the Facebook Messenger SDK can only support 1 Facebook Messenger Chat Widget. 
                            <br><br>
                            Button with Facebook Messenger Widget:
                            ${buttonName}
                            <p>`,
                            class: 'warning-red',
                            buttons: [ {
                                text: 'I understand',
                                close: true,
                                confirm: true
                            }],
                            onConfirm: () => {
                                jQuery(this.dropdown).val(this.buttonSettingsObject.buttonObject.data.type);
                                jQuery(this.dropdown).trigger("chosen:updated");
                            }
                        });

                        return;
                    }
                }
            }
        }

        this.buttonSettingsObject.buttonObject.data.type = value;

        window.Buttonizer.buttonChanges = true;
        this.removeError();
        this.changeForm(value);
    }

    /**
     * Button action value
     *
     * @param value
     */
    updateButtonActionValue(value)
    {
        this.buttonSettingsObject.buttonObject.data.action = value;
        window.Buttonizer.buttonChanges = true;
        this.value = value;
    }



    /**
     *
     * @param value
     * @param confirmed
     */
    changeForm(value)
    {
        // Empty
        this.element.innerHTML = '';
        this.element.className =  '';

        let boolean = new FormToggle({
            state: (typeof this.buttonSettingsObject.buttonObject.data.action_new_tab === undefined ? 'false' : this.buttonSettingsObject.buttonObject.data.action_new_tab)
        });

        boolean.onToggle((state) => {
            this.buttonSettingsObject.buttonObject.data.action_new_tab = state;
            window.Buttonizer.buttonChanges = true;
        });

        if(value === "phone" || value === 'sms')
        {
            this.element.appendChild((new PhoneNumber(this)).build());

            if(value === 'sms') {

            }

            this.addKnowledgeBaseLink();
        }
        else if(value === 'viber') 
        {
            this.element.appendChild((new PhoneNumber(this)).build('+00123456789'));

            let infoText = document.createElement("p");
            infoText.innerHTML = window.Buttonizer.translate('settings.button_action.actions.viber');

            this.element.appendChild(infoText);
        }
        else if(value === 'page') 
        {
            this.element.appendChild((new Pages(this)).build());
            index_all(this.element.appendChild(new SettingHolder("<label for='label-always-open'>"+ window.Buttonizer.translate('settings.open_new_tab.title') +":</label>", boolean.build(), 'is-boolean-only').build()).firstChild.firstChild, {
                content: window.Buttonizer.translate('settings.open_new_tab.description'),
                animation: 'shift-away',
                arrow: true,
                hideOnClick: false
            });
        }
        else if(value === "mail")
        {
            this.element.appendChild((new Mail(this)).build(window.Buttonizer.translate('settings.button_action.placeholders.mail.recipient')));

        }
        else if(value === "whatsapp_pro" || value === "whatsapp")
        {
            this.element.appendChild((new PhoneNumber(this)).build());



            let infoText = document.createElement("p");
            infoText.innerHTML = window.Buttonizer.translate('settings.button_action.actions.whatsapp_info');

            this.element.appendChild(infoText);
        }
        else if(value === "socialsharing")
        {
            this.element.appendChild((new SocialSharing(this)).build());
        }

        else if(value === "backtotop" || value === "gobackpage" || value === 'clipboard' || value === 'print' || value === 'woocommerce')
        {
            return;
        }

        /* NEW Social Media actions */
        else if(value === 'skype' || value === 'telegram' || value === 'twitter' || value === 'snapchat' || value === 'instagram' || value === 'vk')
        {
            this.element.appendChild((new input_Input(this)).build(window.Buttonizer.translate('settings.button_action.placeholders.username')));

            this.addKnowledgeBaseLink();
        }
        else if(value === 'twitter_dm')
        {
            this.element.appendChild((new input_Input(this, true)).build('Account ID'));



            let info = document.createElement("p");
            info.innerHTML = window.Buttonizer.translate('settings.button_action.actions.twitter_info');
            this.element.appendChild(info);
        }
        else if(value === 'messenger') {
            this.element.appendChild((new Url(this)).build('https://m.me/YOUR-PAGE-NAME'));

            this.addKnowledgeBaseLink();

        }
        else if(value === 'messenger_chat') {
            this.element.appendChild((new input_Input(this)).build('Facebook page ID'));
            
            let info = document.createElement("p");
            info.innerHTML = window.Buttonizer.translate('settings.button_action.actions.messenger_chat');
            this.element.appendChild(info);

            this.addKnowledgeBaseLink(59, "Facebook Messenger Chat Widget");
        }
        else if(value === 'facebook') {
            this.element.appendChild((new input_Input(this)).build('Facebook username/page'));

            this.addKnowledgeBaseLink();
        }
        else if(value === 'linkedin') {
            this.element.appendChild((new input_Input(this)).build('"company/COMPANY-NAME" or "in/USERNAME"'));

            this.addKnowledgeBaseLink();
        }
        else if(value === 'line') {
            this.element.appendChild((new input_Input(this)).build('LINE ID'));
        }
        else if(value === 'wechat') {
            this.element.appendChild((new input_Input(this)).build('User ID'));
        }
        else if(value === 'waze') {
            this.element.appendChild((new Url(this)).build('https://www.waze.com/ul?q=Netherlands'));
        }
        else if(value === 'popup_maker') {
            // this.element.appendChild((new Input(this)).build('URL trigger'));

            let info = document.createElement("p");
            info.innerHTML = `In your <b>Popup Settings</b>, add a new <b>"Click to Open"</b> trigger and copy and paste this code in <b>"Extra CSS Selectors"</b> </br> <code style="font-size: 11px;">a[href="#${this.value}"]</code>`;
            this.element.appendChild(info);

            this.addKnowledgeBaseLink(57, "Popup maker");
        }
        else if(value === 'elementor_popup') {
            // this.element.appendChild((new Input(this)).build('Trigger'));

            let info = document.createElement("p");
            info.innerHTML = `Copy and paste this into your Elementor Popup's <b>"Open By Selector"</b> option. </br> <code style="font-size: 11px;">a[href="#${this.value}"]</code>`;
            this.element.appendChild(info);

            this.addKnowledgeBaseLink(57, "Elementor popup");
        }
        else if(value === 'popups') {
            this.element.appendChild((new input_Input(this)).build('ID'));

            let info = document.createElement("p");
            info.innerHTML = `Copy and paste your popup ID here.`;
            this.element.appendChild(info);
        }
        else if(value === 'poptin') {
            this.element.appendChild((new Url(this)).build('https://app.popt.in/APIRequest/click/0c768294b0605'));

            let info = document.createElement("p");
            info.innerHTML = window.Buttonizer.translate('settings.button_action.actions.poptin');
            this.element.appendChild(info);
            this.addKnowledgeBaseLink(57);
        }

        // Just use url
        else{ 
            this.element.appendChild((new Url(this)).build());
            index_all(this.element.appendChild(new SettingHolder("<label for='label-always-open'>"+ window.Buttonizer.translate('settings.open_new_tab.title') +":</label>", boolean.build(), 'is-boolean-only').build()).firstChild.firstChild, {
                content: window.Buttonizer.translate('settings.open_new_tab.description'),
                animation: 'shift-away',
                arrow: true,
                hideOnClick: false
            });

            this.addKnowledgeBaseLink();
        }
    }

    addKnowledgeBaseLink(permalink = '', name = '') {
        let link = document.createElement('a');
        link.className = 'info-link has-margin-everywhere';
        if(name === '') {
            link.innerHTML = window.Buttonizer.translate('utils.visit_knowledgebase');
        }else{
            link.innerHTML = window.Buttonizer.translate('utils.knowledge_link').format(name);
        }
        link.href = 'https://community.buttonizer.pro/knowledgebase' + (permalink === '' ? '' : '/' + permalink);
        link.target = '_blank'
        this.element.appendChild(link);
    }

    /**
     * Default text box
     *
     * @returns {*}
     */
    inputText()
    {
        let input = document.createElement("input");
        input.type = "text";
        input.style.display = "block";
        input.style.width = "100%";
        input.className = "buttonizer-input-action";

        return input;
    }

    addError(text)
    {
        this.errorElement.innerHTML = "";

        let error = document.createElement("div");
        error.innerHTML = text;
        error.className = 'field-error-container';

        this.errorElement.appendChild(error);
    }

    removeError()
    {
        this.errorElement.innerHTML = "";
    }

    selectGroup(label, option)
    {
        let optgroup = document.createElement('optgroup');
        optgroup.label = label;
        
        for (let num of option) {
            optgroup.appendChild(this.add(num.value, num.text));
        }

        return optgroup;
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Setting.js


class Setting_Setting
{
    /**
     * 
     * @param {Object} obj 
     */
    constructor(obj){
        // Parent object
        this.parentObject = typeof obj.parentObject !== "undefined" ? obj.parentObject : null;

        // UI name
        this.rowName = typeof obj.rowName !== "undefined" ? obj.rowName : null;

        // Title
        this.title = typeof obj.title !== "undefined" ? obj.title : '';

        // Description
        this.description = typeof obj.description !== "undefined" ? obj.description : null;
        
        this.wrap = typeof obj.wrap !== 'undefined' ? obj.wrap : false;

        // Content of setting 
        this.content = typeof obj.content !== "undefined" ? obj.content : [];

        // Element class
        this.className = typeof obj.class !== "undefined" ? obj.class : [];

        // Custom build
        this.customBuild = typeof obj.useCustomBuild !== "undefined" ? obj.useCustomBuild : false;

        // Hide element?
        this.hidden = typeof obj.hidden !== "undefined" ? obj.hidden : false;

        // Create element
        this.element = document.createElement("div");

        if(this.parentObject !== null) {
            if(this.rowName !== null) {
                this.parentObject.registerUI(this.rowName + '-container', this);
            }
        }else if(this.rowName !== null && this.parentObject === null) {
            console.error("Row name '"+ this.rowName +"' is set, but no parent has been set");
        }
    }

    build(){
        this.element.className = "buttonizer-setting-row " + (this.className === false ? '' : this.className);
        this.element.style.marginTop = '10px';

        // Hide element
        if(this.hidden) {
            switch(this.rowName) {
                case "background-color":
                case "border-radius":
                case "background-image":
                case "label-color":
                    this.element.classList += ' disabled'
                    break;
                default:
                    this.element.style.display = 'none';
            }
        }

        let title = document.createElement("div");
        title.className = "buttonizer-setting-row-c1";
        
        let label = document.createElement("label");
        label.innerHTML = this.title;

        if(this.description !== null) {
            index_all(label, {
                content: this.description,
                animation: 'shift-away',
                arrow: true,
                hideOnClick: false
            });
        }

        title.appendChild(label);

        let content = document.createElement("div");
        content.className = "buttonizer-setting-row-c2";

        for (const e in this.content) {
            content.appendChild(this.customBuild ? this.content[e]() : this.content[e].build());
        }
        // content.appendChild(this.settingHolderContent);
        if(this.wrap) content.style['flex-wrap'] = 'wrap';

        this.element.appendChild(title);
        this.element.appendChild(content);

        return this.element;
    }

    hide()
    {
        this.element.style.display = "none";
    }

    show()
    {
        this.element.style.display = "";
        this.element.classList.remove('disabled')
    }
    disable()
    {
        this.element.classList += ' disabled'
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Inputs/Input.js


class Input_Input
{
    /**
     * Input constructor
     *
     * @param data
     */
    constructor(data)
    {
        this.parent   = data.parentObject;
        this.element        = document.createElement("div");
        this.dataEntry      = data.dataEntry;
        this.default        = (typeof data.default === typeof undefined ? "" : data.default);
        this.callback       = (typeof data.callback === typeof undefined ? () => {return;} : data.callback);
        this.onClick        = (typeof data.onClick === typeof undefined ? null : data.onClick);

        this.input = HTMLElement;
        this.onlyNumbers = typeof data.onlyNumbers === typeof undefined ? false : data.onlyNumbers;

        this.parent.registerUI(this.dataEntry, this);
        
        // Current value
        this.placeholder    = (typeof data.placeholder === typeof undefined ? "" : data.placeholder);

        // Default value
        this.title          = (typeof data.title === typeof undefined ? "" : data.title);

        // Field width
        this.fieldWidth     = (typeof data.width === typeof undefined ? 'default' : data.width);

        // Is the switch disabled?
        this.hidden       = (typeof data.hidden === typeof undefined ? false : data.hidden);
    }

    build()
    {
        this.element = document.createElement("div");
        this.element.className = "buttonizer-input-container is-textfield input-field-width-" + this.fieldWidth;
        this.element.style.marginRight = "7px";

        let inputView = document.createElement("div");
        inputView.className = "buttonizer-input-item";

        let input = document.createElement("input");
        input.type = "text";
        input.value = this.parent.get(this.dataEntry,this.default);
        if(this.onlyNumbers) {
            input.addEventListener("keyup", (e) => {
                if(isNaN(input.value) || input.value < 0) {
                    // Set back value
                    input.value = this.default;
    
                    new Modal({
                        title: window.Buttonizer.translate('errors.forms.only_numbers'),
                        content: '<p>'+ window.Buttonizer.translate('errors.forms.only_numbers_info') +'</p>',
                        buttons: [{
                            text: window.Buttonizer.translate('modal.close'),
                            close: true,
                            focus: true
                        }]
                    });
                }
            });
        }

        // Check on click event
        if(this.onClick !== null) {
            input.addEventListener("click", (e) => this.onClick(e, input));
        }

        input.addEventListener('change', () => {
            if(this.onlyNumbers && (isNaN(input.value) || input.value < 0)) {
                input.value = this.default;
            }

            this.parent.set(this.dataEntry, input.value);
        })

        // Set placeholder
        if(this.placeholder !== "")
        {
            input.setAttribute("placeholder", this.placeholder);
        }

        inputView.appendChild(input);

        this.element.appendChild(inputView);

        let describe = document.createElement("div");
        describe.className = "buttonizer-input-info";
        describe.innerHTML = this.title;

        this.element.appendChild(describe);
        this.input = input;
        if(this.hidden) this.hide();

        if(this.title !== "") return this.element;
        this.input.className = "buttonizer-input-only";
        return this.input;
    }

    // Hide element
    hide()
    {
        this.element.style.display = "none";
        this.input.style.display = "none";
    }

    // Show element
    show()
    {
        this.element.style.display = "";
        this.input.style.display = "";
    }

    /**
     * Update field with new value
     * @param {String} value 
     */
    update(value)
    {
        this.input.value = value;
        this.callback(value);
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Inputs/Toggle.js
/**
 * Buttonizer 2.0
 *
 * This will create a switch input (on or off)
 *
 * Result value: true or false
 */

class Toggle
{
    /**
     * FormBoolean constructor
     *
     * @param data
     */
    constructor(data)
    {
        this.parentObject   = data.parentObject;
        this.element        = document.createElement("a");
        this.dataEntry      = data.dataEntry;

        this.state          = this.parentObject.get(this.dataEntry,data.default);

        this.parentObject.registerUI(this.dataEntry, this);

        // Is the switch disabled?
        this.disabled       = (typeof data.disabled === typeof undefined ? false : data.disabled);

        // Is the switch visible?
        this.visible        = (typeof data.visible === typeof undefined ? true : data.visible);
        this.callback       = typeof data.callback !== typeof undefined ? data.callback : (v) => {return;};

        // Custom class
        this.class        = (typeof data.class === "undefined" ? '' : data.class);
    }

    /**
     * Building element
     */
    build()
    {
        this.element.href = "javascript:void(0)";
        this.element.className = "buttonizer-boolean " + (this.state === true || this.state === 'true' ? 'boolean-selected' : '') + ' ' + this.class;
        this.element.addEventListener("click", () => this.toggle());

        // Switch circle
        let circle = document.createElement("div");
        circle.className = "buttonizer-boolean-circle";

        this.element.appendChild(circle);

        return this.element;
    }

    hide()
    {
        this.element.style.display = "none";
    }

    show()
    {
        this.element.style.display = "block";
    }

    toggle()
    {
        if(this.disabled)
        {
            console.log("Sorry, you're not able to edit this");
            return;
        }

        // Add or remove class
        if(this.state === true || this.state === 'true') {
            this.state = false;
        }else{
            this.state = true;
        }

        this.parentObject.set(this.dataEntry, this.state);

        if(typeof this.callback !== 'undefined') this.callback(this.state);
    }

    update(state){
        // Add or remove class
        this.state = state;
        if(state === true || state === 'true') {
            if(!this.element.classList.contains('boolean-selected')) this.element.classList.add("boolean-selected");
        }else{
            if(this.element.classList.contains('boolean-selected')) this.element.classList.remove("boolean-selected");
        }
        this.callback(state);
    }

    // Enable input
    enable() {
        this.disabled = false;
    }

    // Disable input
    disable() {
        this.disabled = true;
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/Label.js





class Label_Label extends Setting_Setting
{
    constructor(parent){
        super({
            title: window.Buttonizer.translate('settings.label.title'),
            description: window.Buttonizer.translate('settings.label.description'),
            wrap: true,
            class: 'form-has-extra-fields',
            content: [
                new Input_Input({
                    parentObject: parent,
                    dataEntry: 'label',
                    default: parent.get('label'),
                    placeholder: window.Buttonizer.translate('settings.label.placeholder')
                })
            ]
        })
    }
}
// CONCATENATED MODULE: ./node_modules/vanilla-picker/dist/vanilla-picker.mjs
var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

String.prototype.startsWith = String.prototype.startsWith || function (needle) {
    return this.indexOf(needle) === 0;
};
String.prototype.padStart = String.prototype.padStart || function (len, pad) {
    var str = this;while (str.length < len) {
        str = pad + str;
    }return str;
};

var colorNames = { aliceblue: '#f0f8ff', antiquewhite: '#faebd7', aqua: '#00ffff', aquamarine: '#7fffd4', azure: '#f0ffff', beige: '#f5f5dc', bisque: '#ffe4c4', black: '#000000', blanchedalmond: '#ffebcd', blue: '#0000ff', blueviolet: '#8a2be2', brown: '#a52a2a', burlywood: '#deb887', cadetblue: '#5f9ea0', chartreuse: '#7fff00', chocolate: '#d2691e', coral: '#ff7f50', cornflowerblue: '#6495ed', cornsilk: '#fff8dc', crimson: '#dc143c', cyan: '#00ffff', darkblue: '#00008b', darkcyan: '#008b8b', darkgoldenrod: '#b8860b', darkgray: '#a9a9a9', darkgreen: '#006400', darkgrey: '#a9a9a9', darkkhaki: '#bdb76b', darkmagenta: '#8b008b', darkolivegreen: '#556b2f', darkorange: '#ff8c00', darkorchid: '#9932cc', darkred: '#8b0000', darksalmon: '#e9967a', darkseagreen: '#8fbc8f', darkslateblue: '#483d8b', darkslategray: '#2f4f4f', darkslategrey: '#2f4f4f', darkturquoise: '#00ced1', darkviolet: '#9400d3', deeppink: '#ff1493', deepskyblue: '#00bfff', dimgray: '#696969', dimgrey: '#696969', dodgerblue: '#1e90ff', firebrick: '#b22222', floralwhite: '#fffaf0', forestgreen: '#228b22', fuchsia: '#ff00ff', gainsboro: '#dcdcdc', ghostwhite: '#f8f8ff', gold: '#ffd700', goldenrod: '#daa520', gray: '#808080', green: '#008000', greenyellow: '#adff2f', grey: '#808080', honeydew: '#f0fff0', hotpink: '#ff69b4', indianred: '#cd5c5c', indigo: '#4b0082', ivory: '#fffff0', khaki: '#f0e68c', lavender: '#e6e6fa', lavenderblush: '#fff0f5', lawngreen: '#7cfc00', lemonchiffon: '#fffacd', lightblue: '#add8e6', lightcoral: '#f08080', lightcyan: '#e0ffff', lightgoldenrodyellow: '#fafad2', lightgray: '#d3d3d3', lightgreen: '#90ee90', lightgrey: '#d3d3d3', lightpink: '#ffb6c1', lightsalmon: '#ffa07a', lightseagreen: '#20b2aa', lightskyblue: '#87cefa', lightslategray: '#778899', lightslategrey: '#778899', lightsteelblue: '#b0c4de', lightyellow: '#ffffe0', lime: '#00ff00', limegreen: '#32cd32', linen: '#faf0e6', magenta: '#ff00ff', maroon: '#800000', mediumaquamarine: '#66cdaa', mediumblue: '#0000cd', mediumorchid: '#ba55d3', mediumpurple: '#9370db', mediumseagreen: '#3cb371', mediumslateblue: '#7b68ee', mediumspringgreen: '#00fa9a', mediumturquoise: '#48d1cc', mediumvioletred: '#c71585', midnightblue: '#191970', mintcream: '#f5fffa', mistyrose: '#ffe4e1', moccasin: '#ffe4b5', navajowhite: '#ffdead', navy: '#000080', oldlace: '#fdf5e6', olive: '#808000', olivedrab: '#6b8e23', orange: '#ffa500', orangered: '#ff4500', orchid: '#da70d6', palegoldenrod: '#eee8aa', palegreen: '#98fb98', paleturquoise: '#afeeee', palevioletred: '#db7093', papayawhip: '#ffefd5', peachpuff: '#ffdab9', peru: '#cd853f', pink: '#ffc0cb', plum: '#dda0dd', powderblue: '#b0e0e6', purple: '#800080', rebeccapurple: '#663399', red: '#ff0000', rosybrown: '#bc8f8f', royalblue: '#4169e1', saddlebrown: '#8b4513', salmon: '#fa8072', sandybrown: '#f4a460', seagreen: '#2e8b57', seashell: '#fff5ee', sienna: '#a0522d', silver: '#c0c0c0', skyblue: '#87ceeb', slateblue: '#6a5acd', slategray: '#708090', slategrey: '#708090', snow: '#fffafa', springgreen: '#00ff7f', steelblue: '#4682b4', tan: '#d2b48c', teal: '#008080', thistle: '#d8bfd8', tomato: '#ff6347', turquoise: '#40e0d0', violet: '#ee82ee', wheat: '#f5deb3', white: '#ffffff', whitesmoke: '#f5f5f5', yellow: '#ffff00', yellowgreen: '#9acd32' };

function printNum(num) {
    var decs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var str = decs > 0 ? num.toFixed(decs).replace(/0+$/, '').replace(/\.$/, '') : num.toString();
    return str || '0';
}

var vanilla_picker_Color = function () {
    function Color(r, g, b, a) {
        classCallCheck(this, Color);


        var that = this;
        function parseString(input) {

            if (input.startsWith('hsl')) {
                var _input$match$map = input.match(/([\-\d\.e]+)/g).map(Number),
                    _input$match$map2 = slicedToArray(_input$match$map, 4),
                    h = _input$match$map2[0],
                    s = _input$match$map2[1],
                    l = _input$match$map2[2],
                    _a = _input$match$map2[3];

                if (_a === undefined) {
                    _a = 1;
                }

                h /= 360;
                s /= 100;
                l /= 100;
                that.hsla = [h, s, l, _a];
            } else if (input.startsWith('rgb')) {
                var _input$match$map3 = input.match(/([\-\d\.e]+)/g).map(Number),
                    _input$match$map4 = slicedToArray(_input$match$map3, 4),
                    _r = _input$match$map4[0],
                    _g = _input$match$map4[1],
                    _b = _input$match$map4[2],
                    _a2 = _input$match$map4[3];

                if (_a2 === undefined) {
                    _a2 = 1;
                }

                that.rgba = [_r, _g, _b, _a2];
            } else {
                if (input.startsWith('#')) {
                    that.rgba = Color.hexToRgb(input);
                } else {
                    that.rgba = Color.nameToRgb(input) || Color.hexToRgb(input);
                }
            }
        }

        if (r === undefined) ; else if (Array.isArray(r)) {
            this.rgba = r;
        } else if (b === undefined) {
            var color = r && '' + r;
            if (color) {
                parseString(color.toLowerCase());
            }
        } else {
            this.rgba = [r, g, b, a === undefined ? 1 : a];
        }
    }

    createClass(Color, [{
        key: 'printRGB',
        value: function printRGB(alpha) {
            var rgb = alpha ? this.rgba : this.rgba.slice(0, 3),
                vals = rgb.map(function (x, i) {
                return printNum(x, i === 3 ? 3 : 0);
            });

            return alpha ? 'rgba(' + vals + ')' : 'rgb(' + vals + ')';
        }
    }, {
        key: 'printHSL',
        value: function printHSL(alpha) {
            var mults = [360, 100, 100, 1],
                suff = ['', '%', '%', ''];

            var hsl = alpha ? this.hsla : this.hsla.slice(0, 3),
                vals = hsl.map(function (x, i) {
                return printNum(x * mults[i], i === 3 ? 3 : 1) + suff[i];
            });

            return alpha ? 'hsla(' + vals + ')' : 'hsl(' + vals + ')';
        }
    }, {
        key: 'printHex',
        value: function printHex(alpha) {
            var hex = this.hex;
            return alpha ? hex : hex.substring(0, 7);
        }
    }, {
        key: 'rgba',
        get: function get$$1() {
            if (this._rgba) {
                return this._rgba;
            }
            if (!this._hsla) {
                throw new Error('No color is set');
            }

            return this._rgba = Color.hslToRgb(this._hsla);
        },
        set: function set$$1(rgb) {
            if (rgb.length === 3) {
                rgb[3] = 1;
            }

            this._rgba = rgb;
            this._hsla = null;
        }
    }, {
        key: 'rgbString',
        get: function get$$1() {
            return this.printRGB();
        }
    }, {
        key: 'rgbaString',
        get: function get$$1() {
            return this.printRGB(true);
        }
    }, {
        key: 'hsla',
        get: function get$$1() {
            if (this._hsla) {
                return this._hsla;
            }
            if (!this._rgba) {
                throw new Error('No color is set');
            }

            return this._hsla = Color.rgbToHsl(this._rgba);
        },
        set: function set$$1(hsl) {
            if (hsl.length === 3) {
                hsl[3] = 1;
            }

            this._hsla = hsl;
            this._rgba = null;
        }
    }, {
        key: 'hslString',
        get: function get$$1() {
            return this.printHSL();
        }
    }, {
        key: 'hslaString',
        get: function get$$1() {
            return this.printHSL(true);
        }
    }, {
        key: 'hex',
        get: function get$$1() {
            var rgb = this.rgba,
                hex = rgb.map(function (x, i) {
                return i < 3 ? x.toString(16) : Math.round(x * 255).toString(16);
            });

            return '#' + hex.map(function (x) {
                return x.padStart(2, '0');
            }).join('');
        },
        set: function set$$1(hex) {
            this.rgba = Color.hexToRgb(hex);
        }
    }], [{
        key: 'hexToRgb',
        value: function hexToRgb(input) {

            var hex = (input.startsWith('#') ? input.slice(1) : input).replace(/^(\w{3})$/, '$1F').replace(/^(\w)(\w)(\w)(\w)$/, '$1$1$2$2$3$3$4$4').replace(/^(\w{6})$/, '$1FF');

            if (!hex.match(/^([0-9a-fA-F]{8})$/)) {
                throw new Error('Unknown hex color; ' + input);
            }

            var rgba = hex.match(/^(\w\w)(\w\w)(\w\w)(\w\w)$/).slice(1).map(function (x) {
                return parseInt(x, 16);
            });

            rgba[3] = rgba[3] / 255;
            return rgba;
        }
    }, {
        key: 'nameToRgb',
        value: function nameToRgb(input) {

            var hex = colorNames[input];
            if (hex) {
                return Color.hexToRgb(hex);
            }
        }
    }, {
        key: 'rgbToHsl',
        value: function rgbToHsl(_ref) {
            var _ref2 = slicedToArray(_ref, 4),
                r = _ref2[0],
                g = _ref2[1],
                b = _ref2[2],
                a = _ref2[3];

            r /= 255;
            g /= 255;
            b /= 255;

            var max = Math.max(r, g, b),
                min = Math.min(r, g, b);
            var h = void 0,
                s = void 0,
                l = (max + min) / 2;

            if (max === min) {
                h = s = 0;
            } else {
                var d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);break;
                    case g:
                        h = (b - r) / d + 2;break;
                    case b:
                        h = (r - g) / d + 4;break;
                }

                h /= 6;
            }

            return [h, s, l, a];
        }
    }, {
        key: 'hslToRgb',
        value: function hslToRgb(_ref3) {
            var _ref4 = slicedToArray(_ref3, 4),
                h = _ref4[0],
                s = _ref4[1],
                l = _ref4[2],
                a = _ref4[3];

            var r = void 0,
                g = void 0,
                b = void 0;

            if (s === 0) {
                r = g = b = l;
            } else {
                var hue2rgb = function hue2rgb(p, q, t) {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1 / 6) return p + (q - p) * 6 * t;
                    if (t < 1 / 2) return q;
                    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                };

                var q = l < 0.5 ? l * (1 + s) : l + s - l * s,
                    p = 2 * l - q;

                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }

            var rgba = [r * 255, g * 255, b * 255].map(Math.round);
            rgba[3] = a;

            return rgba;
        }
    }]);
    return Color;
}();

function parseHTML(htmlString) {

    var div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.firstElementChild;
}

function dragTrack(area, callback) {
    var dragging = false;

    function addEvent(target, type, handler) {
        target.addEventListener(type, handler, false);
    }
    function clamp(val, min, max) {
        return Math.max(min, Math.min(val, max));
    }

    function onMove(e, info, starting) {
        if (starting) {
            dragging = true;
        }
        if (!dragging) {
            return;
        }

        e.preventDefault();

        var bounds = area.getBoundingClientRect(),
            w = bounds.width,
            h = bounds.height,
            x = info.clientX,
            y = info.clientY;

        var relX = clamp(x - bounds.left, 0, w),
            relY = clamp(y - bounds.top, 0, h);

        callback(relX / w, relY / h);
    }

    function onMouse(e, starting) {
        var button = e.buttons === undefined ? e.which : e.buttons;
        if (button === 1) {
            onMove(e, e, starting);
        } else {
            dragging = false;
        }
    }

    function onTouch(e, starting) {
        if (e.touches.length === 1) {
            onMove(e, e.touches[0], starting);
        } else {
            dragging = false;
        }
    }

    addEvent(area, 'mousedown', function (e) {
        onMouse(e, true);
    });
    addEvent(area, 'touchstart', function (e) {
        onTouch(e, true);
    });
    addEvent(window, 'mousemove', onMouse);
    addEvent(area, 'touchmove', onTouch);
    addEvent(window, 'mouseup', function (e) {
        dragging = false;
    });
    addEvent(area, 'touchend', function (e) {
        dragging = false;
    });
    addEvent(area, 'touchcancel', function (e) {
        dragging = false;
    });
}

var BG_TRANSP = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'2\' height=\'2\'%3E%3Cpath d=\'M1,0H0V1H2V2H1\' fill=\'lightgrey\'/%3E%3C/svg%3E")';
var HUES = 360;

var EVENT_KEY = 'keydown',
    EVENT_CLICK_OUTSIDE = 'mousedown',
    EVENT_TAB_MOVE = 'focusin';

function $(selector, context) {
    return (context || document).querySelector(selector);
}

function addEvent(target, type, handler) {
    target.addEventListener(type, handler, false);
}
function stopEvent(e) {

    e.preventDefault();
    e.stopPropagation();
}
function onKey(target, keys, handler, stop) {
    addEvent(target, EVENT_KEY, function (e) {
        if (keys.indexOf(e.key) >= 0) {
            if (stop) {
                stopEvent(e);
            }
            handler(e);
        }
    });
}

var _style = document.createElement('style');
_style.textContent = '.picker_wrapper.no_alpha .picker_alpha{display:none}.picker_wrapper.no_editor .picker_editor{position:absolute;z-index:-1;opacity:0}.picker_wrapper.no_cancel .picker_cancel{display:none}.layout_default.picker_wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:stretch;align-items:stretch;font-size:10px;width:25em;padding:.5em}.layout_default.picker_wrapper input,.layout_default.picker_wrapper button{font-size:1rem}.layout_default.picker_wrapper>*{margin:.5em}.layout_default.picker_wrapper::before{content:\'\';display:block;width:100%;height:0;-webkit-box-ordinal-group:2;order:1}.layout_default .picker_slider,.layout_default .picker_selector{padding:1em}.layout_default .picker_hue{width:100%}.layout_default .picker_sl{-webkit-box-flex:1;flex:1 1 auto}.layout_default .picker_sl::before{content:\'\';display:block;padding-bottom:100%}.layout_default .picker_editor{-webkit-box-ordinal-group:2;order:1;width:6.5rem}.layout_default .picker_editor input{width:100%;height:100%}.layout_default .picker_sample{-webkit-box-ordinal-group:2;order:1;-webkit-box-flex:1;flex:1 1 auto}.layout_default .picker_done,.layout_default .picker_cancel{-webkit-box-ordinal-group:2;order:1}.picker_wrapper{box-sizing:border-box;background:#f2f2f2;box-shadow:0 0 0 1px silver;cursor:default;font-family:sans-serif;color:#444;pointer-events:auto}.picker_wrapper:focus{outline:none}.picker_wrapper button,.picker_wrapper input{box-sizing:border-box;border:none;box-shadow:0 0 0 1px silver;outline:none}.picker_wrapper button:focus,.picker_wrapper button:active,.picker_wrapper input:focus,.picker_wrapper input:active{box-shadow:0 0 2px 1px dodgerblue}.picker_wrapper button{padding:.4em .6em;cursor:pointer;background-color:whitesmoke;background-image:-webkit-gradient(linear, left bottom, left top, from(gainsboro), to(transparent));background-image:-webkit-linear-gradient(bottom, gainsboro, transparent);background-image:linear-gradient(0deg, gainsboro, transparent)}.picker_wrapper button:active{background-image:-webkit-gradient(linear, left bottom, left top, from(transparent), to(gainsboro));background-image:-webkit-linear-gradient(bottom, transparent, gainsboro);background-image:linear-gradient(0deg, transparent, gainsboro)}.picker_wrapper button:hover{background-color:white}.picker_selector{position:absolute;z-index:1;display:block;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border:2px solid white;border-radius:100%;box-shadow:0 0 3px 1px #67b9ff;background:currentColor;cursor:pointer}.picker_slider .picker_selector{border-radius:2px}.picker_hue{position:relative;background-image:-webkit-gradient(linear, left top, right top, from(red), color-stop(yellow), color-stop(lime), color-stop(cyan), color-stop(blue), color-stop(magenta), to(red));background-image:-webkit-linear-gradient(left, red, yellow, lime, cyan, blue, magenta, red);background-image:linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red);box-shadow:0 0 0 1px silver}.picker_sl{position:relative;box-shadow:0 0 0 1px silver;background-image:-webkit-gradient(linear, left top, left bottom, from(white), color-stop(50%, rgba(255,255,255,0))),-webkit-gradient(linear, left bottom, left top, from(black), color-stop(50%, rgba(0,0,0,0))),-webkit-gradient(linear, left top, right top, from(gray), to(rgba(128,128,128,0)));background-image:-webkit-linear-gradient(top, white, rgba(255,255,255,0) 50%),-webkit-linear-gradient(bottom, black, rgba(0,0,0,0) 50%),-webkit-linear-gradient(left, gray, rgba(128,128,128,0));background-image:linear-gradient(180deg, white, rgba(255,255,255,0) 50%),linear-gradient(0deg, black, rgba(0,0,0,0) 50%),linear-gradient(90deg, gray, rgba(128,128,128,0))}.picker_alpha,.picker_sample{position:relative;background:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'2\' height=\'2\'%3E%3Cpath d=\'M1,0H0V1H2V2H1\' fill=\'lightgrey\'/%3E%3C/svg%3E") left top/contain white;box-shadow:0 0 0 1px silver}.picker_alpha .picker_selector,.picker_sample .picker_selector{background:none}.picker_editor input{font-family:monospace;padding:.2em .4em}.picker_sample::before{content:\'\';position:absolute;display:block;width:100%;height:100%;background:currentColor}.picker_arrow{position:absolute;z-index:-1}.picker_wrapper.popup{position:absolute;z-index:2;margin:1.5em}.picker_wrapper.popup,.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{background:#f2f2f2;box-shadow:0 0 10px 1px rgba(0,0,0,0.4)}.picker_wrapper.popup .picker_arrow{width:3em;height:3em;margin:0}.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{content:"";display:block;position:absolute;top:0;left:0;z-index:-99}.picker_wrapper.popup .picker_arrow::before{width:100%;height:100%;-webkit-transform:skew(45deg);transform:skew(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.picker_wrapper.popup .picker_arrow::after{width:150%;height:150%;box-shadow:none}.popup.popup_top{bottom:100%;left:0}.popup.popup_top .picker_arrow{bottom:0;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.popup.popup_bottom{top:100%;left:0}.popup.popup_bottom .picker_arrow{top:0;left:0;-webkit-transform:rotate(90deg) scale(1, -1);transform:rotate(90deg) scale(1, -1)}.popup.popup_left{top:0;right:100%}.popup.popup_left .picker_arrow{top:0;right:0;-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.popup.popup_right{top:0;left:100%}.popup.popup_right .picker_arrow{top:0;left:0}';
document.documentElement.firstElementChild.appendChild(_style);

var Picker = function () {
    function Picker(options) {
        var _this = this;

        classCallCheck(this, Picker);


        this.settings = {

            popup: 'right',
            layout: 'default',
            alpha: true,
            editor: true,
            editorFormat: 'hex',
            cancelButton: false
        };

        this._openProxy = function (e) {
            return _this.openHandler(e);
        };

        this.onChange = null;

        this.onDone = null;

        this.onOpen = null;

        this.onClose = null;

        this.setOptions(options);
    }

    createClass(Picker, [{
        key: 'setOptions',
        value: function setOptions(options) {
            if (!options) {
                return;
            }
            var settings = this.settings;

            function transfer(source, target, skipKeys) {
                for (var key in source) {
                    if (skipKeys && skipKeys.indexOf(key) >= 0) {
                        continue;
                    }

                    target[key] = source[key];
                }
            }

            if (options instanceof HTMLElement) {
                settings.parent = options;
            } else {

                if (settings.parent && options.parent && settings.parent !== options.parent) {
                    settings.parent.removeEventListener('click', this._openProxy, false);
                    this._popupInited = false;
                }

                transfer(options, settings);

                if (options.onChange) {
                    this.onChange = options.onChange;
                }
                if (options.onDone) {
                    this.onDone = options.onDone;
                }
                if (options.onOpen) {
                    this.onOpen = options.onOpen;
                }
                if (options.onClose) {
                    this.onClose = options.onClose;
                }

                var col = options.color || options.colour;
                if (col) {
                    this._setColor(col);
                }
            }

            var parent = settings.parent;
            if (parent && settings.popup && !this._popupInited) {

                addEvent(parent, 'click', this._openProxy);

                onKey(parent, [' ', 'Spacebar', 'Enter'], this._openProxy);

                this._popupInited = true;
            } else if (options.parent && !settings.popup) {
                this.show();
            }
        }
    }, {
        key: 'openHandler',
        value: function openHandler(e) {
            if (this.show()) {

                e && e.preventDefault();

                this.settings.parent.style.pointerEvents = 'none';

                var toFocus = e && e.type === EVENT_KEY ? this._domEdit : this.domElement;
                setTimeout(function () {
                    return toFocus.focus();
                }, 100);

                if (this.onOpen) {
                    this.onOpen(this.colour);
                }
            }
        }
    }, {
        key: 'closeHandler',
        value: function closeHandler(e) {
            var event = e && e.type;
            var doHide = false;

            if (!e) {
                doHide = true;
            } else if (event === EVENT_CLICK_OUTSIDE || event === EVENT_TAB_MOVE) {

                var knownTime = (this.__containedEvent || 0) + 100;
                if (e.timeStamp > knownTime) {
                    doHide = true;
                }
            } else {

                stopEvent(e);

                doHide = true;
            }

            if (doHide && this.hide()) {
                this.settings.parent.style.pointerEvents = '';

                if (event !== EVENT_CLICK_OUTSIDE) {
                    this.settings.parent.focus();
                }

                if (this.onClose) {
                    this.onClose(this.colour);
                }
            }
        }
    }, {
        key: 'movePopup',
        value: function movePopup(options, open) {

            this.closeHandler();

            this.setOptions(options);
            if (open) {
                this.openHandler();
            }
        }
    }, {
        key: 'setColor',
        value: function setColor(color, silent) {
            this._setColor(color, { silent: silent });
        }
    }, {
        key: '_setColor',
        value: function _setColor(color, flags) {
            if (typeof color === 'string') {
                color = color.trim();
            }
            if (!color) {
                return;
            }

            flags = flags || {};
            var c = void 0;
            try {

                c = new vanilla_picker_Color(color);
            } catch (ex) {
                if (flags.failSilently) {
                    return;
                }
                throw ex;
            }

            if (!this.settings.alpha) {
                var hsla = c.hsla;
                hsla[3] = 1;
                c.hsla = hsla;
            }
            this.colour = this.color = c;
            this._setHSLA(null, null, null, null, flags);
        }
    }, {
        key: 'setColour',
        value: function setColour(colour, silent) {
            this.setColor(colour, silent);
        }
    }, {
        key: 'show',
        value: function show() {
            var parent = this.settings.parent;
            if (!parent) {
                return false;
            }

            if (this.domElement) {
                var toggled = this._toggleDOM(true);

                this._setPosition();

                return toggled;
            }

            var html = this.settings.template || '<div class="picker_wrapper" tabindex="-1"><div class="picker_arrow"></div><div class="picker_hue picker_slider"><div class="picker_selector"></div></div><div class="picker_sl"><div class="picker_selector"></div></div><div class="picker_alpha picker_slider"><div class="picker_selector"></div></div><div class="picker_editor"><input aria-label="Type a color name or hex value"/></div><div class="picker_sample"></div><div class="picker_done"><button>Ok</button></div><div class="picker_cancel"><button>Cancel</button></div></div>';
            var wrapper = parseHTML(html);

            this.domElement = wrapper;
            this._domH = $('.picker_hue', wrapper);
            this._domSL = $('.picker_sl', wrapper);
            this._domA = $('.picker_alpha', wrapper);
            this._domEdit = $('.picker_editor input', wrapper);
            this._domSample = $('.picker_sample', wrapper);
            this._domOkay = $('.picker_done button', wrapper);
            this._domCancel = $('.picker_cancel button', wrapper);

            wrapper.classList.add('layout_' + this.settings.layout);
            if (!this.settings.alpha) {
                wrapper.classList.add('no_alpha');
            }
            if (!this.settings.editor) {
                wrapper.classList.add('no_editor');
            }
            if (!this.settings.cancelButton) {
                wrapper.classList.add('no_cancel');
            }
            this._ifPopup(function () {
                return wrapper.classList.add('popup');
            });

            this._setPosition();

            if (this.colour) {
                this._updateUI();
            } else {
                this._setColor('#0cf');
            }
            this._bindEvents();

            return true;
        }
    }, {
        key: 'hide',
        value: function hide() {
            return this._toggleDOM(false);
        }
    }, {
        key: '_bindEvents',
        value: function _bindEvents() {
            var _this2 = this;

            var that = this,
                dom = this.domElement;

            addEvent(dom, 'click', function (e) {
                return e.preventDefault();
            });

            dragTrack(this._domH, function (x, y) {
                return that._setHSLA(x);
            });

            dragTrack(this._domSL, function (x, y) {
                return that._setHSLA(null, x, 1 - y);
            });

            if (this.settings.alpha) {
                dragTrack(this._domA, function (x, y) {
                    return that._setHSLA(null, null, null, 1 - y);
                });
            }

            var editInput = this._domEdit;
            {
                addEvent(editInput, 'input', function (e) {
                    that._setColor(this.value, { fromEditor: true, failSilently: true });
                });

                addEvent(editInput, 'focus', function (e) {
                    var input = this;

                    if (input.selectionStart === input.selectionEnd) {
                        input.select();
                    }
                });
            }

            this._ifPopup(function () {

                var popupCloseProxy = function popupCloseProxy(e) {
                    return _this2.closeHandler(e);
                };

                addEvent(window, EVENT_CLICK_OUTSIDE, popupCloseProxy);
                addEvent(window, EVENT_TAB_MOVE, popupCloseProxy);
                onKey(dom, ['Esc', 'Escape'], popupCloseProxy);

                var timeKeeper = function timeKeeper(e) {
                    _this2.__containedEvent = e.timeStamp;
                };
                addEvent(dom, EVENT_CLICK_OUTSIDE, timeKeeper);

                addEvent(dom, EVENT_TAB_MOVE, timeKeeper);

                addEvent(_this2._domCancel, 'click', popupCloseProxy);
            });

            var onDoneProxy = function onDoneProxy(e) {
                _this2._ifPopup(function () {
                    return _this2.closeHandler(e);
                });
                if (_this2.onDone) {
                    _this2.onDone(_this2.colour);
                }
            };
            addEvent(this._domOkay, 'click', onDoneProxy);
            onKey(dom, ['Enter'], onDoneProxy);
        }
    }, {
        key: '_setPosition',
        value: function _setPosition() {
            var parent = this.settings.parent,
                elm = this.domElement;

            if (parent !== elm.parentNode) {
                parent.appendChild(elm);
            }

            this._ifPopup(function (popup) {

                if (getComputedStyle(parent).position === 'static') {
                    parent.style.position = 'relative';
                }

                var cssClass = popup === true ? 'popup_right' : 'popup_' + popup;

                ['popup_top', 'popup_bottom', 'popup_left', 'popup_right'].forEach(function (c) {

                    if (c === cssClass) {
                        elm.classList.add(c);
                    } else {
                        elm.classList.remove(c);
                    }
                });

                elm.classList.add(cssClass);
            });
        }
    }, {
        key: '_setHSLA',
        value: function _setHSLA(h, s, l, a, flags) {
            flags = flags || {};

            var col = this.colour,
                hsla = col.hsla;

            [h, s, l, a].forEach(function (x, i) {
                if (x || x === 0) {
                    hsla[i] = x;
                }
            });
            col.hsla = hsla;

            this._updateUI(flags);

            if (this.onChange && !flags.silent) {
                this.onChange(col);
            }
        }
    }, {
        key: '_updateUI',
        value: function _updateUI(flags) {
            if (!this.domElement) {
                return;
            }
            flags = flags || {};

            var col = this.colour,
                hsl = col.hsla,
                cssHue = 'hsl(' + hsl[0] * HUES + ', 100%, 50%)',
                cssHSL = col.hslString,
                cssHSLA = col.hslaString;

            var uiH = this._domH,
                uiSL = this._domSL,
                uiA = this._domA,
                thumbH = $('.picker_selector', uiH),
                thumbSL = $('.picker_selector', uiSL),
                thumbA = $('.picker_selector', uiA);

            function posX(parent, child, relX) {
                child.style.left = relX * 100 + '%';
            }
            function posY(parent, child, relY) {
                child.style.top = relY * 100 + '%';
            }

            posX(uiH, thumbH, hsl[0]);

            this._domSL.style.backgroundColor = this._domH.style.color = cssHue;

            posX(uiSL, thumbSL, hsl[1]);
            posY(uiSL, thumbSL, 1 - hsl[2]);

            uiSL.style.color = cssHSL;

            posY(uiA, thumbA, 1 - hsl[3]);

            var opaque = cssHSL,
                transp = opaque.replace('hsl', 'hsla').replace(')', ', 0)'),
                bg = 'linear-gradient(' + [opaque, transp] + ')';

            this._domA.style.backgroundImage = bg + ', ' + BG_TRANSP;

            if (!flags.fromEditor) {
                var format = this.settings.editorFormat,
                    alpha = this.settings.alpha;

                var value = void 0;
                switch (format) {
                    case 'rgb':
                        value = col.printRGB(alpha);break;
                    case 'hsl':
                        value = col.printHSL(alpha);break;
                    default:
                        value = col.printHex(alpha);
                }
                this._domEdit.value = value;
            }

            this._domSample.style.color = cssHSLA;
        }
    }, {
        key: '_ifPopup',
        value: function _ifPopup(actionIf, actionElse) {
            if (this.settings.parent && this.settings.popup) {
                actionIf && actionIf(this.settings.popup);
            } else {
                actionElse && actionElse();
            }
        }
    }, {
        key: '_toggleDOM',
        value: function _toggleDOM(toVisible) {
            var dom = this.domElement;
            if (!dom) {
                return false;
            }

            var displayStyle = toVisible ? '' : 'none',
                toggle = dom.style.display !== displayStyle;

            if (toggle) {
                dom.style.display = displayStyle;
            }
            return toggle;
        }
    }], [{
        key: 'StyleElement',
        get: function get$$1() {
            return _style;
        }
    }]);
    return Picker;
}();

/* harmony default export */ var vanilla_picker = (Picker);

// CONCATENATED MODULE: ./src/js/admin/components/Inputs/Color.js
/**
 * Buttonizer 2.0
 *
 * This will create a simple color picker form input
 *
 * Using:
 * - vanilla-picker (new Picker())
 */


class Color_Color
{
    /**
     * Color constructor
     *
     * @param data
     */
    constructor(data)
    {
        this.parent         = data.parentObject;
        this.element        = document.createElement("div");
        this.dataEntry      = data.dataEntry;
        this.default        = (typeof data.default === typeof undefined ? "" : data.default);
        this.callback       = (typeof data.callback === typeof undefined ? () => {return;} : data.callback);
        this.style          = (typeof data.style === typeof undefined ? {} : data.style);
        this.parent.registerUI(this.dataEntry, this);
        this.currentColor   = this.parent.get(this.dataEntry, this.default);

        // Title
        this.title          = (typeof data.title === typeof undefined ? "Color" : data.title);
        
        // Timeout before sending 'onChange' command
        this.timer = setTimeout(() => {}, 0);

        this.opened = false;

        // New element
        this.element        = HTMLElement;

        this.colorView      = HTMLElement;
        this.colorPicker    = HTMLElement;

        // Fix any color mistakes of Buttonizer 1.0
        if(this.currentColor === '#fffff' || this.currentColor === '#FFFFF' || this.currentColor.length <= 6) {
            this.currentColor = '#FFFFFF';
        }
    }

    /**
     * Building element
     */
    build()
    {
        // First build element
        this.buildVisiblePicker();

        // Color picker
        let colorPicker = new vanilla_picker({
            parent: this.element,
            popup: 'bottom',
            alpha: true,
            color: this.currentColor,
            onChange: (color) => {
                if(this.currentColor !== color.rgbaString) {
                    this.currentColor = color.rgbaString;    
                    this.parent.set(this.dataEntry, color.rgbaString);
                }
            }
        });

        // Open color picker
        this.element.addEventListener("click", () => {
            colorPicker.show();
        });

        this.colorPicker = colorPicker;
        return this.element;
    }

    buildVisiblePicker()
    {
        this.element = document.createElement("div");
        this.element.className = "buttonizer-input-container is-color-picker";
        this.element.style.marginRight = "7px";

        let item = document.createElement("div");
        item.className = "buttonizer-input-item";

        this.colorView = document.createElement("div");
        this.colorView.style.background = this.currentColor;
        this.colorView.className = "colored-background";

        item.appendChild(this.colorView);

        this.element.appendChild(item);

        let describe = document.createElement("div");
        describe.className = "buttonizer-input-info";
        describe.innerHTML = this.title;

        this.element.appendChild(describe);

    }

    onSelect(callback)
    {
        this.callback = callback;
    }

    hide()
    {
        this.element.style.display = "none";
    }

    show()
    {
        this.element.style.display = "block";
    }

    update(value){
        clearTimeout(this.timer);
        this.colorView.style.background = value;
        this.colorPicker.color = value;
        this.timer = setTimeout(() => this.callback(value), 1500);
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/IconColor.js



class IconColor_IconColor extends Setting_Setting
{
    constructor(parent)
    {
        super({
            title: window.Buttonizer.translate('settings.icon_color.title'),
            description: window.Buttonizer.translate('settings.icon_color.description'),
            rowName: 'icon-color',
            parentObject: parent,
            hidden: (window.Buttonizer.hasPremium() && parent.get('icon_is_image') == 'true'),
            content: [
                new Color_Color({
                    parentObject: parent,
                    dataEntry: 'icon_color',
                    title: window.Buttonizer.translate('utils.base'),
                    default: '#FFFFFF',
                    width: 'space'
                }),
                new Color_Color({
                    parentObject: parent,
                    dataEntry: 'icon_color_interaction',
                    title: window.Buttonizer.translate('utils.interaction'),
                    default: '#FFFFFF',
                    width: 'space'
                })
            ]
        });
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/IconSize.js



class IconSize_IconSize extends Setting_Setting
{
    constructor(parent)
    {
        super({
            title: window.Buttonizer.translate('settings.icon_size.title'),
            description: window.Buttonizer.translate('settings.icon_size.description'),
            rowName: 'icon-size',
            parentObject: parent,
            hidden: (window.Buttonizer.hasPremium() && parent.get('icon_is_image') == 'true'),
            content: [
                new Input_Input({
                    title: 'px',
                    placeholder: parent.type === 'button' ?  16 : 25,
                    width: 'space',
                    dataEntry: 'icon_size',
                    parentObject: parent,
                    onlyNumbers: true,
                    default: parent.type === 'button' ?  16 : 25,
                })
            ]
        })
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/BorderRadius.js



class BorderRadius_BorderRadius extends Setting_Setting
{
    constructor(parent)
    {
        super({
            title: window.Buttonizer.translate('settings.border_radius.title'),
            description: window.Buttonizer.translate('settings.border_radius.description'),
            hidden: parent.type === 'button' ? parent.get('use_main_button_style') !== 'false' : false, // Only show on group side, or when use_main_button_style is disabled
            rowName: 'border-radius',
            parentObject: parent,
            content: [
                new Input_Input({
                    parentObject: parent,
                    dataEntry: 'border_radius',
                    default: '',
                    placeholder: 50,
                    title: '%',
                    width: 'space',
                    onlyNumbers: true
                })
            ]
        })
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/LabelFontSizeBorderRadius.js



class LabelFontSizeBorderRadius_LabelFontSizeBorderRadius extends Setting_Setting
{
    constructor(parent){
        super({
            title: window.Buttonizer.translate('settings.font_size_border_radius.title'),
            description: window.Buttonizer.translate('settings.font_size_border_radius.description'),
            content: [
                new Input_Input({
                    title: 'px',
                    placeholder: 12,
                    width: 'space',
                    dataEntry: 'label_font_size',
                    parentObject: parent,
                    onlyNumbers: true
                }),
                new Input_Input({
                    title: 'px',
                    placeholder: 3,
                    width: 'space',
                    dataEntry: 'label_border_radius',
                    parentObject: parent,
                    onlyNumbers: true
                })
            ]
        })
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Inputs/Checkbox.js
/**
 * Buttonizer 2.0
 *
 * This will create a switch input (on or off)
 *
 * Result value: true or false
 */

class Checkbox
{
    /**
     * FormCheckbox constructor
     *
     * @param data
     */
    constructor(data)
    {
        this.parentObject   = data.parentObject;
        this.element        = document.createElement("a");
        this.dataEntry      = data.dataEntry;
        this.default        = data.default;
        this.callback       = data.callback;

        this.type           = data.type;
        this.data           = data;

        this.title          = data.title;

        this.state          = this.parentObject.get(this.dataEntry, this.default);

        this.parentObject.registerUI(this.dataEntry, this);

        // Is the switch disabled?
        this.disabled       = (typeof data.disabled === typeof undefined ? false : data.disabled);

        // Is the switch visible?
        this.visible        = (typeof data.visible === typeof undefined ? true : data.visible);

    }

    /**
     * Building element
     */
    build()
    {
        // New switch element
        this.element.href = "javascript:void(0)";
        this.element.className = `buttonizer-checkbox ${this.title === 'Mobile' ? 'mobile-checkbox' : 'desktop-checkbox'}`;

        let checkbox = document.createElement('div');
        checkbox.className =`buttonizer-checkbox-box`;
        checkbox.innerHTML = '&#10003;';

        this.element.appendChild(checkbox);

        this.element.addEventListener("click", () => this.toggle());

        let text = document.createElement('div');
        text.className = 'buttonizer-checkbox-text';
        text.innerHTML = this.title;
        this.element.appendChild(text);

        this.update(this.state);
        this.eventListener(this.type);

        return this.element;
    }

    hide()
    {
        this.element.style.display = "none";
    }

    show()
    {
        this.element.style.display = "block";
    }

    toggle()
    {
        if(this.disabled)
        {
            console.log("Sorry, you're not able to edit this");
            return;
        }

        // set entry
        if(this.state === true || this.state === 'true') {
            this.parentObject.set(this.dataEntry, false);
        }else{
            this.parentObject.set(this.dataEntry, true);
        }

        if(typeof callback !== 'undefined') this.callback(this.state);
    }

    update(state){
        this.state = state;
        if(state === true || state === 'true'){
            if(!this.element.classList.contains('checkbox-selected')) this.element.classList.add('checkbox-selected');
        }else{
            if(this.element.classList.contains('checkbox-selected')) this.element.classList.remove('checkbox-selected');
        }
    }

    eventListener(type){
        
        // Mobile
        if(type === 'button') {
            this.element.addEventListener(`click`, () => {
                let mobile = this.parentObject.buttonHTMLObject.querySelector('.mobile-preview');
                let mobile2 = this.parentObject.buttonHTMLObject.querySelector('.fa-mobile-alt').parentElement;
                let desktop = this.parentObject.buttonHTMLObject.querySelector('.desktop-preview');
                let desktop2 = this.parentObject.buttonHTMLObject.querySelector('.fa-desktop').parentElement;

                if(this.title === 'Mobile') {
                    if(mobile.classList.contains('selected') && this.state === false) {
                        mobile.classList.remove('selected');
                        mobile2.classList.remove('selected');
                    }
                    else if(!mobile.classList.contains('selected') && this.state === true) {
                        mobile.classList += ' selected';
                        mobile2.classList += ' selected';
                    }
                }
                else if(this.title === 'Desktop') {
                    if(desktop.classList.contains('selected') && this.state === false) {
                        desktop.classList.remove('selected');
                        desktop2.classList.remove('selected');
                    }
                    else if(!desktop.classList.contains('selected') && this.state === true) {
                        desktop.classList += ' selected';
                        desktop2.classList += ' selected';
                    }
                }
            });
        }
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/ShowMobileDesktop.js



class ShowMobileDesktop_ShowMobileDesktop extends Setting_Setting
{
    constructor(parent)
    {
        super({
            title: window.Buttonizer.translate('settings.show_mobile_desktop.title'),
            description: window.Buttonizer.translate('settings.show_mobile_desktop.description'),
            content: [
                new Checkbox({
                    parentObject: parent,
                    dataEntry: 'show_mobile',
                    title: window.Buttonizer.translate('settings.show_mobile_desktop.mobile'),
                    default: true,
                    type: parent.type === 'button' ? 'button' : 'group',
                }),
                new Checkbox({
                    parentObject: parent,
                    dataEntry: 'show_desktop',
                    title: window.Buttonizer.translate('settings.show_mobile_desktop.desktop'),
                    default: true,
                    type: parent.type === 'button' ? 'button' : 'group',
                })
            ]
        });
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/BackgroundColor.js



class BackgroundColor_BackgroundColor extends Setting_Setting
{
    constructor(parent)
    {
        super({
            title: window.Buttonizer.translate('settings.background_color.title'),
            description: window.Buttonizer.translate('settings.background_color.description'),
            hidden: parent.type === 'button' ? parent.get('use_main_button_style') !== 'false' : false, // Only show on group side, or when use_main_button_style is disabled
            rowName: 'background-color',
            parentObject: parent,
            content: [
                new Color_Color({
                    parentObject: parent,
                    dataEntry: 'background_color',
                    title: window.Buttonizer.translate('utils.base'),
                    default: '#f08419'
                }),
                new Color_Color({
                    parentObject: parent,
                    dataEntry: 'background_color_interaction',
                    title: window.Buttonizer.translate('utils.interaction'),
                    default: '#ff9d3c'
                })
            ]
        });
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Inputs/Dropdown.js
/**
 * Buttonizer 2.0
 *
 * This will create a simple dropdown form input
 */

class Dropdown
{

    constructor(data)
    {
        this.parentObject   = data.parentObject;
        this.element        = document.createElement("select");
        this.dataEntry      = data.dataEntry;
        this.default        = data.default;
        this.callback       = data.callback;
        this.style          = data.style;


        this.list           = data.list;
        this.width          = typeof data.width === "undefined" ? '199px' : data.width;
        this.class          = typeof data.class === "undefined" ? 'buttonizer-select-drawer' : data.class;
        this.parentObject.registerUI(this.dataEntry, this);


    }

    /**
     * Build element
     */
    build()
    {   
        this.element.style.width = this.width;
        this.element.className = this.class;

        this.element.addEventListener('change', (e) => {
            this.parentObject.set(this.dataEntry, this.element.value);
        });

        for (let i in this.list) {
            let data = this.list[i];

            // creates option element
            let option = document.createElement("option");

            // creates text and value of option
            option.text = data.text;
            option.value = data.value;
            option.selected = typeof this.selected !== undefined && this.selected === data.value ;

            if(typeof data.disabled !== 'undefined' && data.disabled) {
                option.disabled = true;
            }
            
            //appends option to drawer
            this.element.appendChild(option)
        }
        this.element.value = this.parentObject.get(this.dataEntry, this.default);

        return this.element;
    }

    hide()
    {
        this.element.style.display = "none";
    }

    show()
    {
        this.element.style.display = "block";
    }

    /**
     * Update field with new value
     * 
     * @param {String} value 
     */
    update(value){
        this.element.value = value;
        if(typeof this.callback !== 'undefined') this.callback(value, this);
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/ShowLabelDesktop.js



class ShowLabelDesktop_ShowLabelDesktop extends Setting_Setting
{
    constructor(parent)
    {
        super({
            title: '<span class="setting-icon"><i class="fa fa-desktop"></i></span> ' + window.Buttonizer.translate('settings.label_desktop.title'),
            description: window.Buttonizer.translate('settings.label_desktop.description'),
            content: [
                new Dropdown({
                    parentObject: parent,
                    dataEntry: 'show_label_desktop',
                    default: 'always',
                    list: [
                        {
                            value: 'always',
                            text: window.Buttonizer.translate('settings.label_styles.always'),
                        },
                        {
                            value: 'hover',
                            text: window.Buttonizer.translate('settings.label_styles.hover'),
                        },
                        {
                            value: 'hide',
                            text: window.Buttonizer.translate('settings.label_styles.hide'),
                        }]
                })
            ]
        });
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/ShowLabelMobile.js



class ShowLabelMobile_ShowLabelDesktop extends Setting_Setting
{
    constructor(parent)
    {
        super({
            title: '<span class="setting-icon"><i class="fa fa-mobile-alt"></i></span> ' + window.Buttonizer.translate('settings.label_mobile.title'),
            description: window.Buttonizer.translate('settings.label_mobile.description'),
            content: [
                new Dropdown({
                    parentObject: parent,
                    dataEntry: 'show_label_mobile',
                    default: 'always',
                    list: [
                        {
                            value: 'always',
                            text: window.Buttonizer.translate('settings.label_styles.always'),
                        },
                        {
                            value: 'hide',
                            text: window.Buttonizer.translate('settings.label_styles.hide'),
                        }]
                })
            ]
        });
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/LabelColor.js



class LabelColor_LabelColor extends Setting_Setting
{
    constructor(parent)
    {
        super({
            title: window.Buttonizer.translate('settings.label_color.title'),
            description: window.Buttonizer.translate('settings.label_color.description'),
            hidden: parent.type === 'button' ? parent.get('use_main_button_style') !== 'false' : false, // Only show on group side, or when use_main_button_style is disabled
            rowName: 'label-color',
            parentObject: parent,
            content: [
                new Color_Color({
                    parentObject: parent,
                    dataEntry: 'label_color',
                    title: window.Buttonizer.translate('utils.text'),
                    default: '#FFFFFF'
                }),
                new Color_Color({
                    parentObject: parent,
                    dataEntry: 'label_background_color',
                    title: window.Buttonizer.translate('utils.background'),
                    default: '#4E4C4C'
                })
            ]
        });
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/Icon.js



class Icon_Icon extends Setting_Setting
{
    constructor(parent)
    {
        super({
            title: window.Buttonizer.translate('settings.icon.title'),
            description: window.Buttonizer.translate('settings.icon.description'),
            rowName: 'icon',
            parentObject: parent,
            hidden: (window.Buttonizer.hasPremium() && parent.get('icon_is_image') == 'true'),
            content: [
                new Input_Input({
                    parentObject: parent,
                    dataEntry: 'icon',
                    default: 'fa fa-user',
                    onClick: (e, input) => {
                        window.Buttonizer.iconSelector.open(input);
                    }
                })
            ]
        })
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Inputs/Image.js


class Image
{
    constructor(data)
    {
        // Form boolean
        this.parentObject       = data.parentObject;
        this.button             = null;
        this.selectedImage      = null;
        this.dataEntry          = (typeof data.dataEntry === "undefined" ? null : data.dataEntry);

        this.default            = (typeof data.default === "undefined" ? '' : data.default);

        this.value              = data.parentObject.get(data.dataEntry, '');

        this.selectText         = (typeof data.selectText === "undefined" ? window.Buttonizer.translate('utils.select_image') : data.selectText);
        this.updateText         = (typeof data.updateText === "undefined" ? window.Buttonizer.translate('utils.change_image') : data.updateText);

        this.callback           = data.callback;

        this.parentObject.registerUI(this.dataEntry, this);
    }

    /**
     * Build image
     *
     * @returns {HTMLAnchorElement|*}
     */
    build()
    {


        return this.buildFree();
    }

    /**
     * Build free one
     *
     * @returns {HTMLAnchorElement}
     */
    buildFree()
    {
        let button = document.createElement("a");
        button.className = "button";
        button.href = "javascript:void(0)";
        button.innerHTML = '<i class="fa fa-image"></i>&nbsp;&nbsp;'+ this.selectText +' <small>(premium)</small>';
        button.addEventListener("click", () => {
            window.Buttonizer.showPremiumPopup('You can select images and set them as icon or as button background image.');
        });

        return button;
    }


}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/BackgroundImage.js



class BackgroundImage_BackgroundImage extends Setting_Setting
{
    constructor(parent)
    {
        super({
            title: window.Buttonizer.translate('settings.background_image.title'),
            description: window.Buttonizer.translate('settings.background_image.description'),
            hidden: parent.type === 'button' ? parent.get('use_main_button_style') !== 'false' : false, // Only show on group side, or when use_main_button_style is disabled
            rowName: 'background-image',
            parentObject: parent,
            content: [
                new Image({
                    parentObject: parent,
                    dataEntry: 'background_image'
                })
            ]
        });
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/UseMainButtonStyle.js



class UseMainButtonStyle_UseMainButtonStyle extends Setting_Setting
{
    constructor(parent)
    {
        super({
            parentObject: parent,
            title: window.Buttonizer.translate('settings.use_main_button_style.title'),
            description: window.Buttonizer.translate('settings.use_main_button_style.description'),
            class: 'is-boolean-only',
            rowName: 'use_main_button_style',
            content: [
                new Toggle({
                    parentObject: parent,
                    dataEntry: 'use_main_button_style',
                    default: 'true',
                    callback: (value) => this.update(value)
                })
            ]
        });

        this.parent = parent;
    }

    /**
     * Show or hide form elements
     *
     * @param value
     */
    update(value)
    {
        if(value === true || value === 'true'){
            this.parent.getUI('background-color-container').forEach(item => { item.disable() });
            this.parent.getUI('label-color-container').forEach(item => { item.disable() });
            this.parent.getUI('border-radius-container').forEach(item => { item.disable() });
            this.parent.getUI('background-image-container').forEach(item => { item.disable() });
        }else{
            this.parent.getUI('background-color-container').forEach(item => { item.show() });
            this.parent.getUI('label-color-container').forEach(item => { item.show() });
            this.parent.getUI('border-radius-container').forEach(item => { item.show() });
            this.parent.getUI('background-image-container').forEach(item => { item.show() });
        }
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Inputs/Boolean.js
/**
 * Buttonizer 2.0
 *
 * This will create a TRUE-FALSE boolean, resulting into a
 * click element where you have two values (On | Off,
 * Open | Closed, Icon | Image)
 *
 * Result value: true or false
 *
 */
class Boolean
{
    /**
     * Boolean constructor
     *
     * @param data
     */
    constructor(data)
    {
        // Form boolean
        this.parentObject   = data.parentObject;
        this.element        = document.createElement("div");
        this.dataEntry      = (typeof data.dataEntry === "undefined" ? null : data.dataEntry);

        this.default        = (typeof data.default === "undefined" ? false : data.default);

        this.state          = (typeof data.state === "undefined" ? false : data.state == 'true');

        this.first          = (typeof data.first === "undefined" ? "First" : data.first);

        this.second         = (typeof data.second === "undefined" ? "Second" : data.second);

        this.callback       = data.callback;

        if(this.dataEntry !== null) {
            this.parentObject.registerUI(this.dataEntry, this);
        }
    }

    build()
    {
        // New switch element
        this.element.className = "buttonizer-toggle" + (this.state === true ? ' right-selected' : ' left-selected');

        let leftSide = document.createElement("a");
        leftSide.href = "javascript:void(0)";
        leftSide.innerHTML = this.first;
        leftSide.addEventListener("click", () => this.toggle());
        this.element.appendChild(leftSide)

        let rightSide = document.createElement("a");
        rightSide.href = "javascript:void(0)";
        rightSide.innerHTML = this.second;
        rightSide.addEventListener("click", () => this.toggle());
        this.element.appendChild(rightSide);

        return this.element;
    }

    toggle()
    {
        if(this.dataEntry === null) {
            this.callback(false);
            return;
        }

        this.parentObject.set(this.dataEntry, !this.state);
    }

    update(state)
    {
        this.state = state;

        if(state === false)
        {
            this.element.classList.add('left-selected');
            this.element.classList.remove('right-selected');
        }
        else {
            this.element.classList.remove('left-selected');
            this.element.classList.add('right-selected');
        }

        this.callback(state);
    }

    hide()
    {
        this.element.style.display = "none";
    }

    show()
    {
        this.element.style.display = "block";
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/IconOrImage.js



class IconOrImage_IconOrImage extends Setting_Setting
{
    constructor(parent)
    {
        super({
            title: window.Buttonizer.translate('settings.icon_or_image.title'),
            description: window.Buttonizer.translate('settings.icon_or_image.description'),
            useCustomBuild: true,
            content: [
                () => this.buildBoolean()
            ]
        })

        this.parent = parent;
    }

    buildBoolean()
    {


        let boolean = new Boolean({
            parentObject: this.parent,
            state: false,
            first: window.Buttonizer.translate('utils.icon'),
            second: window.Buttonizer.translate('common.custom') + ' <small>(premium)</small>',
            callback: () => {
                window.Buttonizer.showPremiumPopup("You can select an custom image as icon for your buttons and groups.");
            }
        });

        return boolean.build();
    }


}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/MenuPosition.js




class MenuPosition_MenuPosition extends Setting_Setting
{
    constructor(parent)
    {
        super({
            parentObject: parent,
            title: window.Buttonizer.translate('settings.menu_position.title'),
            description: window.Buttonizer.translate('settings.menu_position.description'),
            wrap: true,
            class: 'form-has-extra-fields',
            rowName: 'position',
            content: [
                new Dropdown({
                    parentObject: parent,
                    dataEntry: 'position',
                    default: 'bottomright',
                    callback: (value) => this.changePosition(value),
                    list: [{
                        value: 'bottomright',
                        text: window.Buttonizer.translate('settings.menu_position.positions.bottomright'),
                    },
                    {
                        value: 'bottomleft',
                        text: window.Buttonizer.translate('settings.menu_position.positions.bottomleft'),
                    },
                    {
                        value: 'topright',
                        text: window.Buttonizer.translate('settings.menu_position.positions.topright'),
                    },
                    {
                        value: 'topleft',
                        text: window.Buttonizer.translate('settings.menu_position.positions.topleft'),
                    },
                    {
                        value: 'advanced',
                        text: window.Buttonizer.translate('settings.menu_position.positions.advanced'),
                    }]
                }),
                new Input_Input({
                    parentObject: parent,
                    dataEntry: 'horizontal',
                    title: "X&nbsp;&lpar;&percnt;&rpar;",
                    width: 'space',
                    hidden: parent.get('position') !== 'advanced',
                    onlyNumbers: true
                }),
                new Input_Input({
                    parentObject: parent,
                    dataEntry: 'vertical',
                    title: "Y&nbsp;&lpar;&percnt;&rpar;",
                    width: 'space',
                    hidden: parent.get('position') !== 'advanced',
                    onlyNumbers: true
                })
            ]
        });

        this.translatedPositions = {
            topleft: {x:95,y:95},
            topright: {x:5,y:95},
            bottomleft: {x:95,y:5},
            bottomright: {x:5,y:5}
        };
        this.parentObject = parent;
    }

    changePosition(value)
    {
        if(value === 'advanced'){
            this.parentObject.getUI('horizontal').forEach((item) => item.show());
            this.parentObject.getUI('vertical').forEach((item) => item.show());
        }else{
            this.parentObject.getUI('horizontal').forEach((item) => item.hide());
            this.parentObject.getUI('vertical').forEach((item) => item.hide());
            this.parentObject.set('horizontal', this.translatedPositions[value].x);
            this.parentObject.set('vertical', this.translatedPositions[value].y);
        }
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/MenuAnimation.js



class MenuAnimation_MenuAnimation extends Setting_Setting
{
    constructor(parent)
    {
        super({
            title: window.Buttonizer.translate('settings.menu_animation.title'),
            description: window.Buttonizer.translate('settings.menu_animation.description'),
            parentObject: parent,
            rowName: 'animation',
            content: [
                new Dropdown({
                    parentObject: parent,
                    dataEntry: 'menu_animation',
                    default: 'none',
                    list: [
                        {
                            value: 'none',
                            text: window.Buttonizer.translate('settings.menu_animation.animations.none')
                        },
                        {
                            value: 'hello',
                            text: window.Buttonizer.translate('settings.menu_animation.animations.hello')
                        },
                        {
                            value: 'bounce',
                            text: window.Buttonizer.translate('settings.menu_animation.animations.bounce')
                        },
                        {
                            value: 'pulse',
                            text: window.Buttonizer.translate('settings.menu_animation.animations.pulse') + (!window.Buttonizer.hasPremium() ? ' (PRO)' : ''),
                            disabled: !window.Buttonizer.hasPremium()
                        },
                        {
                            value: 'jelly',
                            text: window.Buttonizer.translate('settings.menu_animation.animations.jelly') + (!window.Buttonizer.hasPremium() ? ' (PRO)' : ''),
                            disabled: !window.Buttonizer.hasPremium()
                        }
                    ]
                })
            ]
        });
    }
}
// CONCATENATED MODULE: ./src/js/admin/components/Settings/MenuStyle.js




class MenuStyle_MenuStyle extends Setting_Setting
{
    /**
     * 
     * @param {Group or Button object} parent 
     */
    constructor(parent){
        super({
            title: window.Buttonizer.translate('settings.menu_style.title'),
            description: window.Buttonizer.translate('settings.menu_style.description'),
            parentObject: parent,
            rowName: 'style',
            content: [
                new Dropdown({
                    parentObject: parent,
                    dataEntry: 'menu_style',
                    default: 'default',
                    list: [{
                        value: 'default',
                        text: window.Buttonizer.translate('settings.menu_style.styles.default'),
                    },
                    {
                        value: 'faded',
                        text: window.Buttonizer.translate('settings.menu_style.styles.faded'),
                        hidden: true,
                    },
                    {
                        value: 'corner-circle',
                        text: window.Buttonizer.translate('settings.menu_style.styles.cornercircle'),
                        hidden: true,
                    },
                    {
                        value: 'building-up',
                        text: window.Buttonizer.translate('settings.menu_style.styles.buildingup'),
                        hidden: true,
                    },
                    {
                        value: 'pop',
                        text: window.Buttonizer.translate('settings.menu_style.styles.pop'),
                        hidden: true,
                    },
                    {
                        value: 'square',
                        text: window.Buttonizer.translate('settings.menu_style.styles.square'),
                    },
                    {
                        value: 'rectangle',
                        text: window.Buttonizer.translate('settings.menu_style.styles.rectangle'),
                    }
                ]
                })
            ]
        });
    }
}


// CONCATENATED MODULE: ./src/js/admin/ui/Button/ButtonSettings.js



// New settings













// New settings, button only








class ButtonSettings_ButtonSettings
{
    constructor(buttonObject)
    {
        this.buttonObject = buttonObject;

        this.groupSetting = HTMLElement;

        this.formElements = {
            useMainButtonStyle: undefined,

            // Styling
            buttonColor: undefined,
            borderColor: undefined,
            borderRadius: undefined,
            backgroundImage: undefined,



            buttonIconSelect: undefined,
            buttonIconColor: undefined,
            buttonIconSize: undefined,

            buttonImageSelect: undefined,
            buttonImageIcon: undefined,
            buttonImageIconSelect: undefined,
            imageBorderRadius: undefined,
            imageSize: undefined,

            // Label
            label: undefined,
            labelColor: undefined,
            labelFontSizeBorderRadius: undefined,
            show_label: undefined,

            // Some other settings
            showOnOpeningTimes: undefined,
            buttonCustomClass: undefined,
        };
    }

    build()
    {
        let styling = document.createElement("div");
        styling.className = "button-group-styling";
        styling.style.display = "none";

        this.element = styling;

        // Build form
        this.buildForm();

        this.buttonObject.stylingObject = styling;
        return this.element;
    }

    buildForm()
    {

        /** ================   GENERAL SETTINGS   ================= **/

        this.element.appendChild(this.generalSetting());

        /** ================   BUTTON STYLE   ================= **/

        this.element.appendChild(this.buttonStyle());

        /** ================   ICON STYLE   ================= **/

        this.element.appendChild(this.iconStyle());

        /** ================   LABEL STYLE   ================= **/

        this.element.appendChild(this.labelStyle());

        this.element.appendChild(this.advancedSettings());

    }

    /**
     * Advanced settings button
     *
     * @returns {HTMLElement}
     */
    advancedSettings()
    {
        let advancedSettings = document.createElement("a");
        advancedSettings.href = "javascript:void(0)";
        advancedSettings.className = "advanced-settings" + (!window.Buttonizer.hasPremium() ? ' buttonizer-premium-gray-out' : '');
        advancedSettings.innerHTML = "<i></i> " + window.Buttonizer.translate('utils.advanced_settings') + (!window.Buttonizer.hasPremium() ? ` <span class='buttonizer-premium'>PRO</span>` : '');

        advancedSettings.addEventListener("click", () => {
            this.buttonObject.windowObject.toggle();
        });

        return advancedSettings;
    }

    /**
     * Button top settings
     */
    generalSetting() {
        let container = document.createElement('div');
        container.className = 'style-top';

        this.groupSetting = document.createElement('div');
        this.groupSetting.className = 'style-group';

        this.formElements.menuPosition = new MenuPosition_MenuPosition(this.buttonObject.groupObject);
        this.groupSetting.appendChild(this.formElements.menuPosition.build());
        this.formElements.menuPosition.element.style.display = 'none';

        this.formElements.menuAnimation = new MenuAnimation_MenuAnimation(this.buttonObject.groupObject);
        this.groupSetting.appendChild(this.formElements.menuAnimation.build());
        this.formElements.menuAnimation.element.style.display = 'none';

        this.formElements.menuStyle = new MenuStyle_MenuStyle(this.buttonObject.groupObject);
        this.groupSetting.appendChild(this.formElements.menuStyle.build());
        this.formElements.menuStyle.element.style.display = 'none';

        container.appendChild(this.groupSetting);

        // Button action
        this.formElements.buttonAction = new Action_Action(this);
        container.appendChild(this.formElements.buttonAction.build());

        // Show on mobile or desktop
        this.formElements.isMobile = new ShowMobileDesktop_ShowMobileDesktop(this.buttonObject);
        container.appendChild(this.formElements.isMobile.build())

        return container;
    }

    /**
     * Button style settings
     */
    buttonStyle() {
        let container = document.createElement('div');
        container.className = 'style-button';
        
        // Button style
        let title = document.createElement("h2");
        title.innerHTML = "<i></i><span>"+ window.Buttonizer.translate('settings.setting_categories.button_style') +"</span>";
        container.appendChild(title);

        // Main button style
        this.formElements.useMainButtonStyle = new UseMainButtonStyle_UseMainButtonStyle(this.buttonObject);
        container.appendChild(this.formElements.useMainButtonStyle.build());

        // Button color
        this.formElements.buttonColor = new BackgroundColor_BackgroundColor(this.buttonObject);
        container.appendChild(this.formElements.buttonColor.build());
        
        // Border radius
        this.formElements.borderRadius = new BorderRadius_BorderRadius(this.buttonObject);
        container.appendChild(this.formElements.borderRadius.build());
        
        // Background Image
        this.formElements.backgroundImage = new BackgroundImage_BackgroundImage(this.buttonObject);
        container.appendChild(this.formElements.backgroundImage.build());

        // Label color
        this.formElements.labelColor = new LabelColor_LabelColor(this.buttonObject);
        container.appendChild(this.formElements.labelColor.build());
        
        return container;
    }

    /**
     * Button icon settings
     */
    iconStyle() {
        let container = document.createElement('div');
        container.className = 'style-icon';

        let title = document.createElement("h2");
        title.innerHTML = "<i></i><span>"+ window.Buttonizer.translate('settings.setting_categories.button_icon') +"</span>";
        container.appendChild(title);

        // Button icon or image
        this.formElements.buttonIconOrImage = new IconOrImage_IconOrImage(this.buttonObject);
        container.appendChild(this.formElements.buttonIconOrImage.build());

        // Button icon selector
        this.formElements.buttonIconSelect = new Icon_Icon(this.buttonObject);
        container.appendChild(this.formElements.buttonIconSelect.build());

        // Button icon color
        this.formElements.buttonIconColor = new IconColor_IconColor(this.buttonObject);
        container.appendChild(this.formElements.buttonIconColor.build());

        // Button icon size
        this.formElements.buttonIconSize = new IconSize_IconSize(this.buttonObject);
        container.appendChild(this.formElements.buttonIconSize.build());



        return container;
    }

    /**
     * Button label style settings
     */
    labelStyle() {
        let container = document.createElement('div');
        container.className = 'style-label';

        let title = document.createElement("h2");
        title.innerHTML = "<i></i><span>"+ window.Buttonizer.translate('settings.setting_categories.label') +"</span>";
        container.appendChild(title);


        // Label text
        this.formElements.buttonLabel = new Label_Label(this.buttonObject);
        container.appendChild(this.formElements.buttonLabel .build());

        // Show label on desktop...
        this.formElements.show_label = new ShowLabelDesktop_ShowLabelDesktop(this.buttonObject);
        container.appendChild(this.formElements.show_label.build());

        // Show label on mobile...
        this.formElements.show_label_mobile = new ShowLabelMobile_ShowLabelDesktop(this.buttonObject);
        container.appendChild(this.formElements.show_label_mobile.build());

        // Label border radius
        this.formElements.buttonLabelFontSizeBorderRadius = new LabelFontSizeBorderRadius_LabelFontSizeBorderRadius(this.buttonObject);
        container.appendChild(this.formElements.buttonLabelFontSizeBorderRadius.build());

        return container;
    }
}
// CONCATENATED MODULE: ./src/js/admin/ui/Button/index.js









class Button_Index
{
    constructor(groupObject, data)
    {
        this.type = 'button';

        this.groupObject = groupObject;
        this.alive = true;
        this.data = data;
        this.ui = [];

        this.buttonName = data.name;
        this.id = -1;

        this.settingsOpened = false;

        this.buttonHTMLObject = HTMLElement;
        this.buttonIconObject = HTMLElement;
        this.buttonTitleObject = HTMLElement;
        this.windowObject = HTMLElement;

        // Style form
        this.stylingObject = undefined;

        // Settings object
        this.stylingObject = HTMLElement;
        this.settingsObject = {};

        // Build button HTML
        this.buildButton();

        // Settings window object
        this.windowObject = new ButtonWindow_ButtonWindow(this);

        this.groupObject.registerButton(this);
        // Register this button object
        // Buttonizer.registerButton(this);
    }

    /**
     * Build the button
     */
    buildButton()
    {
        let buttonObject = document.createElement("div");
        buttonObject.className = "buttonizer-button-group group-button";

        buttonObject.appendChild(new Button_ButtonHolder(this).build());

        this.settingsObject = new ButtonSettings_ButtonSettings(this);
        Buttonizer.bar.settingContent.appendChild(this.settingsObject.build());

        var mouseDown = false;
        var warningShown = false;
        const warning = index_all(buttonObject, {
            content: window.Buttonizer.translate('bar.buttons.tippy_drag_warning'),
            animation: 'shift-away',
            arrow: true,
            hideOnClick: false,
            trigger: 'manual',
            onShow: () => {
                warningShown = true;
                setTimeout(() => {
                    warningShown = false;
                    warning.hide();
                }, 5000);
            }
        });
        buttonObject.addEventListener('mousedown', () => {
            if(!warningShown) mouseDown = true;
        });
        buttonObject.addEventListener('mouseout', () => {
            if(mouseDown && jQuery(this.groupObject.groupBody).sortable('option','cancel') !== null){
                mouseDown = false;
                warning.show();
            }
        });
        buttonObject.addEventListener('mouseup', () => {
            mouseDown = false;
        });

        this.buttonHTMLObject = buttonObject;
        this.groupObject.groupBody.appendChild(this.buttonHTMLObject);
    }


    /**
     * Remove button
     */
    removeButton()
    {
        this.alive = false;
        this.buttonHTMLObject.remove();
        window.Buttonizer.buttonChanges = true;
        if(this.groupObject.buttonsAmount <=1){
            jQuery(this.groupObject.groupBody).sortable('option', 'cancel', '.group-button');
        }

        if(this.groupObject.getButtonsAlive() === 1 !== this.groupObject.singleButtonMode){
            this.groupObject.singleButtonMode = this.groupObject.getButtonsAlive() === 1;
            this.groupObject.getButtons()[0].set('icon_size', '25');
            this.groupObject.groupHolder.setSingleButtonMode();
        }
    }

    /**
     * Set entry in data to value
     * 
     * @param {String} entry 
     * @param {String} value 
     */
    set(entry, value){
        this.data[entry] = value;
        this.ui[entry].forEach((item) => item.update(value));
        window.Buttonizer.buttonChanges = true;
    }

    /**
     * Get value from entry. if none available, set default (def)
     * 
     * @param {String} entry 
     * @param {String} def 
     */
    get(entry, def){
        if(typeof this.data[entry] !== "undefined") return this.data[entry];
        this.data[entry] = def;
        window.Buttonizer.buttonChanges = true;
        return def;
    }

    registerUI(entry, ui){
        if(typeof this.ui[entry] !== typeof undefined){
            this.ui[entry].push(ui)
        }else{
            this.ui[entry] = [ui];
        }
    }

    getUI(entry){
        if(typeof this.ui[entry] !== 'undefined') return this.ui[entry];
        return false;
    }

    revealSettings(){
        this.buttonHTMLObject.classList.add('opened');
        this.stylingObject.style.display = 'block';
        Buttonizer.bar.showSettings(this.get('name'), () => this.closeSettings());
    }

    closeSettings(){
        this.stylingObject.style.display = 'none';
        this.buttonHTMLObject.classList.remove('opened');
    }
    
}

/* harmony default export */ var ui_Button = (Button_Index);


// CONCATENATED MODULE: ./src/js/admin/ui/ButtonGroup/GroupHolder.js



class GroupHolder_GroupHolder
{
    constructor(groupObject)
    {
        this.groupObject = groupObject;
        this.groupObject.stylingObject = this;
        // this.timeout = setTimeout(function () {}, 1);
        this.groupHolder = null;
        this.titleElement = null;

        this.arrow = HTMLElement;
    }

    build()
    {
        let groupHolder = document.createElement("div");
        groupHolder.className = "button-group-holder";

        groupHolder.appendChild(this.groupArrow());
        groupHolder.appendChild(this.createTitle());
        groupHolder.appendChild(this.groupSettingsButton());
        groupHolder.appendChild(this.createButtonHolderButton());
        groupHolder.appendChild(this.createQuickMenu());

        this.groupHolder = groupHolder;
        
        return groupHolder;
    }

    /**
     * Setting button
     *
     * @returns {HTMLElement}
     */
    createButtonHolderButton()
    {
        let buttonArrow = document.createElement("a");
        buttonArrow.href = 'javascript:void(0)';
        buttonArrow.className = "holder-button";

        // Icon
        let icon = document.createElement("i");
        icon.className = "fas fa-ellipsis-v";

        buttonArrow.appendChild(icon);

        buttonArrow.addEventListener("click", () => {
            let wasOpened = this.groupHolder.className.indexOf('holder-show-quick-menu');
            jQuery('.holder-show-quick-menu').removeClass('holder-show-quick-menu');

            if(wasOpened === -1) {
                this.groupHolder.classList.add('holder-show-quick-menu');
            }
        });

        return buttonArrow;
    }

    /**
     *
     * @returns {HTMLElement}
     */
    createQuickMenu()
    {
        let buttonMenu = document.createElement('div');
        buttonMenu.className = 'group-holder-quick-menu';
        buttonMenu.addEventListener('click', () => {
            this.groupHolder.classList.remove('holder-show-quick-menu');
        });

        // Menu items
        buttonMenu.appendChild(this.createQuickMenuButton('fas fa-plus', window.Buttonizer.translate('bar.buttons.convert_to_group'), () => {
            new ui_Button(this.groupObject, {
                name: window.Buttonizer.translate('common.button') + " 2",
                show_mobile: 'true',
                show_desktop: 'true'
            });
            this.groupObject.getButtons()[0].set('icon_size', '16');
            this.groupObject.singleButtonMode = false;
            this.setSingleButtonMode();
            jQuery(this.groupObject.groupBody).sortable('option', 'cancel', null);
        }, 'convert-button'));
        buttonMenu.appendChild(this.createQuickMenuButton('fas fa-wrench', window.Buttonizer.translate('common.settings'), () => this.toggleStyling(), ''));
        buttonMenu.appendChild(this.createQuickMenuButton('fas fa-cog', window.Buttonizer.translate('utils.advanced_settings'), () => {
            if(this.groupObject.singleButtonMode){
                this.groupObject.getButtons()[0].windowObject.toggle();
            }else{
                this.groupObject.windowObject.toggle();
            }
        }, !window.Buttonizer.hasPremium() ? 'buttonizer-premium-gray-out' : ''));
        buttonMenu.appendChild(this.createQuickMenuButton('fas fa-pencil-alt', window.Buttonizer.translate('utils.rename'), () => this.groupRename(), ''));
        buttonMenu.appendChild(this.createQuickMenuButton('far fa-trash-alt', window.Buttonizer.translate('utils.delete'), () => this.groupDelete(), 'delete'));
        buttonMenu.firstChild.style.display = 'none';

        this.quickMenu = buttonMenu;
        return buttonMenu;
    }

    /**
     *
     * @returns {HTMLElement}
     */
    createQuickMenuButton(iconClass, title, event, className = '')
    {
        let link = document.createElement('a');
        link.href = 'javascript:void(0)';
        link.className = className;

        let icon = document.createElement('i');
        icon.className = iconClass;
        link.appendChild(icon);

        link.innerHTML += title;

        link.addEventListener('click', (e) => event(e));

        return link;
    }

    /**
     *
     */
    groupArrow()
    {
        let groupArrow = document.createElement('a');
        groupArrow.href = 'javascript:void(0)';
        groupArrow.className = 'holder-button pull-left has-background group-arrow';

        let downIcon = document.createElement('i');
        downIcon.className = 'fa fa-angle-down buttonizer-arrow-down';
        groupArrow.appendChild(downIcon);

        let upIcon = document.createElement('i');
        upIcon.className = 'fa fa-angle-up buttonizer-arrow-up';
        groupArrow.appendChild(upIcon);

        groupArrow.addEventListener('click', () => this.revealButtons());

        this.arrow = groupArrow;

        return groupArrow;
    }

    /**
     * Group title
     * @returns {HTMLElement}
     */
    createTitle() {
        let title = document.createElement("input");
        title.type = "text";
        title.className = "group-title";
        title.value = this.groupObject.get('name');
        title.setAttribute("readonly", "");
        title.id = 'buttonizer-group-title';
        this.titleElement = title;

        title.addEventListener("blur", () => this.updateTitle());

        title.addEventListener("keyup", (e) => {
            e.preventDefault();

            if(e.keyCode === 13) {
                this.updateTitle();
            }else if(e.keyCode === 27) {
                title.value = this.groupObject.singleButtonMode ? this.groupObject.getButtons()[0].data.name : this.groupObject.data.name;
                title.setAttribute("readonly", "");
            }
        });

        title.addEventListener("click", (e) => {
            jQuery('.holder-show-quick-menu').removeClass('holder-show-quick-menu');
            if(!e.isTrusted) return;
            if(!title.hasAttribute("readonly")) return;
            if(this.groupObject.singleButtonMode) {
                this.toggleStyling();
                return;
            }
            this.revealButtons();
        });

        return title;
    }

    /**
     * Update title
     */
    updateTitle()
    {
        let parent = this.groupObject.singleButtonMode ? this.groupObject.getButtons()[0] : this.groupObject;

        parent.data.name = this.titleElement.value;
        window.Buttonizer.buttonChanges = true;

        this.titleElement.setAttribute("readonly", "");
    }

    /**
     * Rename group
     */
    groupRename() {
        // When already editing, ignore doubleclicks
        if(!this.titleElement.hasAttribute("readonly")) return;

        // Set readonly back
        this.titleElement.removeAttribute("readonly");

        // Focus field
        this.titleElement.focus();
    }

    /**
     *
     * @returns {HTMLElement}
     */
    groupSettingsButton()
    {
        let button = document.createElement("a");
        button.href = "javascript:void(0)";
        button.className = "holder-button group-style";

        let icon = document.createElement("i");
        icon.className = 'fas fa-wrench';
        button.appendChild(icon);

        button.addEventListener("click", (e) => {
            jQuery('.holder-show-quick-menu').removeClass('holder-show-quick-menu');
            this.toggleStyling();
        });

        return button;
    }

    /**
     * Toggle styling
     */
    toggleStyling()
    {
        if(this.groupObject.singleButtonMode) {
            this.groupObject.getButtons()[0].revealSettings();
            return;
        }
        this.groupObject.groupSettings.show();
    }

    /**
     * Delete group
     */
    groupDelete()
    {
        if(this.groupObject.singleButtonMode) {
            if(window.Buttonizer.buttonGroups.length <= 1){
                new Modal({
                    title: window.Buttonizer.translate('bar.buttons.delete_button.window_title_button'),
                    content: "<p>"+ window.Buttonizer.translate('bar.buttons.delete_button.cannot_delete') +"</p>",

                    buttons: [{
                        text: window.Buttonizer.translate('modal.close'),
                        close: true,
                        focus: true,
                        confirm: true
                    }]
                });
                return;
            }

            new Modal({
                title: window.Buttonizer.translate('bar.buttons.delete_button.window_title_button'),
                content: "<p>"+ window.Buttonizer.translate('bar.buttons.delete_button.question_button') +"</p>",

                onConfirm: () =>
                {
                    this.groupObject.removeGroup();

                    window.Buttonizer.buttonChanges = true;

                },

                buttons: [{
                    text: window.Buttonizer.translate('modal.changed_my_mind'),
                    close: true,
                    focus: true
                }, {
                    text: window.Buttonizer.translate('utils.delete'),
                    confirm: true
                }]
            });
            return;
        }
        if(window.Buttonizer.buttonGroups.length <= 1)
        {
            // NOPE!
            new Modal({
                title: window.Buttonizer.translate('bar.buttons.delete_button.window_title_button'),
                content: "<p>"+ window.Buttonizer.translate('bar.buttons.delete_button.cannot_delete_group') +"</p>",

                buttons: [{
                    text: window.Buttonizer.translate('modal.close'),
                    close: true,
                    focus: true,
                    confirm: true
                }]
            });
            return;
        }

        new Modal({
            title: window.Buttonizer.translate('bar.buttons.delete_button.window_title_group'),
            content: "<p>"+ window.Buttonizer.translate('bar.buttons.delete_button.question_group_multiple_buttons').format(this.groupObject.getButtonsAlive()) + "</p>",

            onConfirm: () =>
            {
                this.groupObject.removeGroup();

                window.Buttonizer.buttonChanges = true;

            },

            buttons: [{
                text: window.Buttonizer.translate('modal.changed_my_mind'),
                close: true,
                focus: true
            }, {
                text: window.Buttonizer.translate('utils.delete'),
                confirm: true
            }]
        });
    }

    /**
     * Reveal buttons
     */
    revealButtons()
    {
        this.groupObject.groupOpened = !this.groupObject.groupOpened;

        if(this.groupObject.groupOpened) {
            this.groupObject.groupObject.classList.add('opened');
            jQuery(this.groupObject.groupBody).sortable('enable');
        }else{
            this.groupObject.groupObject.classList.remove('opened');
            jQuery(this.groupObject.groupBody).sortable('disable');
        }
        // this.groupObject.groupObject.className = this.groupObject.groupOpened ? "buttonizer-button-group opened" : "buttonizer-button-group";

        this.groupObject.groupBody.style.display = this.groupObject.groupOpened ? "block" : "none";
    }

    setSingleButtonMode(){
        if(this.groupObject.singleButtonMode) {
            this.quickMenu.firstChild.style.display = '';

            this.titleElement.value = typeof this.groupObject.getButtons()[0] === 'undefined' ? this.groupObject.firstButtonName : this.groupObject.getButtons()[0].data.name;
            this.groupHolder.classList.add('single-button');
            if(this.groupObject.groupOpened) this.revealButtons();

            this.groupObject.getButtons()[0].set('use_main_button_style', 'false');
            this.groupObject.getButtons()[0].getUI('use_main_button_style-container')[0].element.style.display = 'none';
            this.groupObject.getUI('position-container')[1].element.style.display = '';
            this.groupObject.getUI('animation-container')[1].element.style.display = '';
            this.groupObject.getUI('style-container')[1].element.style.display = '';
            for(let i = 0; i < this.groupObject.getUI('style-container')[1].content[0].element.length; i++) {
                if(this.groupObject.getUI('style-container')[1].content[0].list[i].hidden === true) {
                    this.groupObject.getUI('style-container')[1].content[0].element[i].style.display = 'none';
                }
            }


            this.groupObject.set('single_button_mode', 'true');

        } else {
            this.quickMenu.firstChild.style.display = 'none';

            this.groupObject.getUI('position-container')[1].element.style.display = 'none';
            this.groupObject.getUI('animation-container')[1].element.style.display = 'none';
            this.groupObject.getUI('style-container')[1].element.style.display = 'none';
            this.groupObject.getButtons()[0].set('use_main_button_style', 'true');
            this.groupObject.getButtons()[0].getUI('use_main_button_style-container')[0].element.style.display = '';
            this.titleElement.value = this.groupObject.data.name;
            this.groupHolder.classList.remove('single-button');

            this.groupObject.set('single_button_mode', 'false');


        }
    }


}

/* harmony default export */ var ButtonGroup_GroupHolder = (GroupHolder_GroupHolder);
// CONCATENATED MODULE: ./src/js/admin/components/Settings/StartOpened.js



class StartOpened_StartOpened extends Setting_Setting
{
    constructor(parent)
    {
        super({
            title: window.Buttonizer.translate('settings.start_opened.title'),
            description: window.Buttonizer.translate('settings.start_opened.description'),
            class: 'is-boolean-only',
            content: [
                new Toggle({
                    parentObject: parent,
                    dataEntry: 'start_opened',
                    default: 'false'
                })
            ]
        });
    }
}
// CONCATENATED MODULE: ./src/js/admin/ui/ButtonGroup/GroupSettings.js
// New settings




















class GroupSettings_GroupSettings
{
    constructor(groupObject)
    {
        this.groupObject = groupObject;
        this.open = false;

        this.formElements = {
            alwaysOpen: undefined,
            menuStyle: undefined,
            isMobile: undefined,
            isDesktop: undefined,
            attentionAnimation: undefined,
            buttonColor: undefined,
            borderRadius: undefined,
            backgroundImage: undefined,
            groupPosition: undefined,

            buttonIconSelect: undefined,
            buttonIconColor: undefined,
            buttonIconSize: undefined,
            buttonImageSelect: undefined,
            buttonImageBackground: undefined,
            buttonImageIconSelect: undefined,
            imageSize: undefined,
            imageBorderRadius: undefined,

            // Label stuff
            buttonLabel: undefined,
            buttonLabelColor: undefined,
            buttonLabelSize: undefined,
            show_label: undefined
        };

        this.element = HTMLElement;
    }

    build()
    {
        let styling = document.createElement("div");
        styling.className = "button-group-styling hidden";

        // styling.style.display = "none";
        // styling.innerHTML = "Drag & drop the button to change position";

        this.element = styling;
        // this.element.style.transform = 'translateX(100%)';
        this.hide();

        this.buildTop();

        // Build form
        this.buildForm();

        this.groupObject.stylingObject = styling;
        return this.element;
    }

    buildForm()
    {
        // Group Position Dropdown
        this.element.appendChild(this.top());
        
        /** =================    MENU STYLE   ================= **/

        this.element.appendChild(this.menuStyle());

        /** =================    GROUP BUTTON STYLE    ================= **/

        this.element.appendChild(this.buttonStyle());

        /** =================    GROUP BUTTON ICON    ================= **/

        this.element.appendChild(this.iconStyle());

        /** ================   end button icon   ================= **/

        this.element.appendChild(this.labelStyle());

        /** ================   ADVANCED SETTINGS   ================= **/

        // Advanced settings
        let advancedSettings = document.createElement("a");
        advancedSettings.href = "javascript:void(0)";
        advancedSettings.className = "advanced-settings" + (!window.Buttonizer.hasPremium() ? ' buttonizer-premium-gray-out' : '');
        advancedSettings.innerHTML = "<i></i> " + window.Buttonizer.translate('utils.advanced_settings') + (!window.Buttonizer.hasPremium() ? ` <span class='buttonizer-premium'>PRO</span>` : '');

        advancedSettings.addEventListener("click", () => {
            this.groupObject.windowObject.toggle();
        });

        this.element.appendChild(advancedSettings);

    }

    /**
     * Settings on top
     */
    top() {
        let container = document.createElement('div');
        container.className = 'style-top';

        this.formElements.menuPosition = new MenuPosition_MenuPosition(this.groupObject);
        container.appendChild(this.formElements.menuPosition.build());
        
        this.formElements.isMobile = new ShowMobileDesktop_ShowMobileDesktop(this.groupObject);
        container.appendChild(this.formElements.isMobile.build())

        return container;
    }

    /**
     * Menu style settings
     */
    menuStyle() {
        let container = document.createElement('div');
        container.className = 'style-menu';

        let groupAnimation = document.createElement('h2');
        groupAnimation.innerHTML = "<i></i><span>"+ window.Buttonizer.translate('settings.setting_categories.menu_style') +"</span>";
        container.appendChild(groupAnimation);

        // Always open
        this.formElements.alwaysOpen = new StartOpened_StartOpened(this.groupObject);
        container.appendChild(this.formElements.alwaysOpen.build());
        
        // Menu Style
        this.formElements.menuStyle = new MenuStyle_MenuStyle(this.groupObject);
        container.appendChild(this.formElements.menuStyle.build());
        
        //Attention Animation
        this.formElements.attentionAnimation = new MenuAnimation_MenuAnimation(this.groupObject);
        container.appendChild(this.formElements.attentionAnimation.build());
        
        // Group Position Advanced Setting
        // this.formElements.groupPosition = new GroupPosition(this);
        // container.appendChild(this.formElements.groupPosition.build());

        // if(this.groupObject.data.position === 'advanced'){
        //     this.formElements.groupPosition.show();
        // }

        return container;
    }

    /**
     * Group button style settings
     */
    buttonStyle() {
        let container = document.createElement('div');
        container.className = 'style-button';
       
        let groupStyling = document.createElement("h2");
        groupStyling.innerHTML = "<i></i><span>"+ window.Buttonizer.translate('settings.setting_categories.group_style') +"</span>";
        container.appendChild(groupStyling);

        // Button color
        this.formElements.buttonColor = new BackgroundColor_BackgroundColor(this.groupObject);
        container.appendChild(this.formElements.buttonColor.build());

        // Border radius
        this.formElements.borderRadius = new BorderRadius_BorderRadius(this.groupObject);
        container.appendChild(this.formElements.borderRadius.build());

        // Background image
        this.formElements.backgroundImage = new BackgroundImage_BackgroundImage(this.groupObject);
        container.appendChild(this.formElements.backgroundImage.build());

        return container;
    }

    /**
     * Group icon
     */
    iconStyle() {
        let container = document.createElement('div');
        container.className = 'style-icon';
        
        let groupIcon = document.createElement("h2");
        groupIcon.innerHTML = "<i></i><span>"+ window.Buttonizer.translate('settings.setting_categories.group_icon') +"</span>";
        container.appendChild(groupIcon);
        
        // If there's only one button, show warning

        // Button icon
        this.formElements.buttonIcon = new IconOrImage_IconOrImage(this.groupObject);
        container.appendChild(this.formElements.buttonIcon.build());

        // Button icon select
        this.formElements.buttonIconSelect = new Icon_Icon(this.groupObject);
        container.appendChild(this.formElements.buttonIconSelect.build());

        // Button icon color
        this.formElements.buttonIconColor = new IconColor_IconColor(this.groupObject);
        container.appendChild(this.formElements.buttonIconColor.build());

        // Button icon size
        this.formElements.buttonIconSize = new IconSize_IconSize(this.groupObject);
        container.appendChild(this.formElements.buttonIconSize.build());



        return container;
    }

    /**
     * Label settings
     */
    labelStyle() {
        let container = document.createElement('div');
        container.className = 'style-label';
        
        let labelTitle = document.createElement("h2");
        labelTitle.innerHTML = "<i></i><span>"+ window.Buttonizer.translate('settings.setting_categories.label') +"</span>";
        container.appendChild(labelTitle);

        // Label text
        this.formElements.buttonLabel = new Label_Label(this.groupObject);
        container.appendChild(this.formElements.buttonLabel.build());

        // Show label on desktop...
        this.formElements.show_label = new ShowLabelDesktop_ShowLabelDesktop(this.groupObject);
        container.appendChild(this.formElements.show_label.build());

        // Show label on mobile...
        this.formElements.show_label_mobile = new ShowLabelMobile_ShowLabelDesktop(this.groupObject);
        container.appendChild(this.formElements.show_label_mobile.build());

        // Label color
        this.formElements.buttonLabelColor = new LabelColor_LabelColor(this.groupObject);
        container.appendChild(this.formElements.buttonLabelColor.build());

        // Label color
        this.formElements.buttonLabelFontSizeBorderRadius = new LabelFontSizeBorderRadius_LabelFontSizeBorderRadius(this.groupObject);
        container.appendChild(this.formElements.buttonLabelFontSizeBorderRadius.build());

        return container;
    }

    buildTop(){

    }

    toggle(){
        if(this.open = true)
        {
            this.open = false;
            this.hide();
            // this.groupObject.stylingObject.style['transform'] = 'translateX(100%)';
        }else{
            this.open = true;
            this.show();
        }
    }


    show(){
        this.element.className = "button-group-styling";
        Buttonizer.bar.showSettings(this.groupObject.get('name'), () => this.hide());
    }

    hide(){
        this.element.className = "button-group-styling hidden";
    }
}

/* harmony default export */ var ButtonGroup_GroupSettings = (GroupSettings_GroupSettings);
// CONCATENATED MODULE: ./src/js/admin/components/Settings/Window/ExitIntent.js




class ExitIntent_ExitIntent {
    constructor(windowObject) {
        this.windowObject = windowObject;

        this.checkbox = document.createElement("input");

        this.mainBox;

    }

    build() {
        let build = this.createTable();

        if (!window.Buttonizer.hasPremium()) {
            build.addEventListener('click', () => {
                window.Buttonizer.showPremiumPopup(window.Buttonizer.translate('settings.exit_intent.pro_description'));
            });
        }

        return build;
    }

    /**
     * Create table
     * @returns {*}
     */
    createTable() {
        let div = document.createElement("div");
        div.appendChild(this.buildTriggers());
        div.appendChild(this.createTriggerDropdown());
        div.appendChild(this.createTriggerAnimation());

        this.mainBox = div;



        let timeout = new Table('table-relative');
        timeout.addColumnHTML("<h2>"+ window.Buttonizer.translate('settings.exit_intent.title') +"</h2>" + (!window.Buttonizer.hasPremium() ? '<span class="buttonizer-premium premium-right">PRO</span>' : ''));
        timeout.addColumn(this.createCheckbox(), (!window.Buttonizer.hasPremium() ? 'buttonizer-premium-ghost' : ''), "10");
        timeout.newRow();
        timeout.addColumnHTML('', "", "");
        timeout.addColumn(this.mainBox, (!window.Buttonizer.hasPremium() ? 'buttonizer-premium-ghost' : ''), "358");
        timeout.newRow();
        timeout.addColumnHTML('', "", "");
        timeout.addColumnHTML(window.Buttonizer.translate('settings.exit_intent.info'), (!window.Buttonizer.hasPremium() ? 'buttonizer-premium-ghost' : ''), "358");

        return timeout.build();
    }

    // Build trigger
    buildTriggers() {
        let div = document.createElement("div");
        div.innerHTML = '<b>'+ window.Buttonizer.translate('settings.exit_intent.when_to_trigger') +'</b><br /><br />';

        div.appendChild(this.triggerLeavingWindow());
        div.appendChild(this.triggerInactive());

        return div;
    }

    // Trigger by leaving window
    triggerLeavingWindow() {
        let triggerDiv = document.createElement("div");

        if (!window.Buttonizer.hasPremium()) {
            triggerDiv.innerHTML = window.Buttonizer.translate('settings.exit_intent.trigger_window');
            triggerDiv.prepend(new Toggle({
                parentObject: this.windowObject.objectOwner,
                default: 'true',
                disabled: true,
                class: 'inline-toggle',
                callback: () => {}
            }).build())

            return triggerDiv;
        }


    }

    // Trigger by leaving window
    triggerInactive() {
        let triggerDiv = document.createElement("div");
        triggerDiv.style.marginTop = '10px';
        triggerDiv.style.marginBottom = '15px';

        if (!window.Buttonizer.hasPremium()) {
            triggerDiv.innerHTML = window.Buttonizer.translate('settings.exit_intent.trigger_inactive');
            triggerDiv.prepend(new Toggle({
                parentObject: this.windowObject.objectOwner,
                default: 'false',
                disabled: true,
                class: 'inline-toggle',
                callback: () => {}
            }).build());

            return triggerDiv;
        }


    }

    // Trigger on time
    createTriggerDropdown() {
        let div = document.createElement("div");
        div.style.marginBottom = '15px';
        div.innerHTML = '<b>'+ window.Buttonizer.translate('settings.exit_intent.how_often._title') +'</b><br />';

        if (!window.Buttonizer.hasPremium()) {
            div.appendChild(new Dropdown({
                parentObject: this.windowObject.objectOwner,
                class: 'window-select',
                disabled: true,
                width: '100%',
                callback: () => {},
                list: [
                    {
                        value: 'first',
                        text: window.Buttonizer.translate('settings.exit_intent.how_often.once_page'),
                    }]
            }).build())

            return div;
        }


    }

    // Trigger animation
    createTriggerAnimation() {
        let div = document.createElement("div");
        div.style.marginBottom = '15px';
        div.innerHTML = '<b>'+ window.Buttonizer.translate('settings.exit_intent.animation._title') +'</b><br />';

        if (!window.Buttonizer.hasPremium()) {
            div.appendChild(new Dropdown({
                parentObject: this.windowObject.objectOwner,
                default: 'first',
                class: 'window-select',
                disabled: true,
                width: '100%',
                callback: () => {},
                list: [
                    {
                        value: 'first',
                        text: window.Buttonizer.translate('settings.exit_intent.animation.focused'),
                    }]
            }).build())

            return div;
        }


    }

    // Create enable/disable
    createCheckbox() {
        let triggerDiv = document.createElement("div");

        if (!window.Buttonizer.hasPremium()) {
            this.checkbox = new Toggle({
                parentObject: this.windowObject.objectOwner,
                default: 'false',
                disabled: true,
                class: 'inline-toggle',
                callback: (value) => {}
            });
        }else {

        }

        triggerDiv.appendChild(this.checkbox.build());

        let info = document.createElement('span');
        info.className = 'span-middle';
        info.innerHTML = window.Buttonizer.translate('settings.exit_intent.enable');
        info.addEventListener("click", () => this.checkbox.toggle());
        triggerDiv.appendChild(info);

        return triggerDiv;
    }

    /**
     * On enable/disable
     *
     * @param value
     */

}
// CONCATENATED MODULE: ./src/js/admin/ui/ButtonGroup/GroupWindow.js











class GroupWindow_GroupWindow extends SettingsWindow
{
    constructor(group) {
        super(group, window.Buttonizer.translate('utils.advanced_settings') + " - "+ window.Buttonizer.translate('common.group') +" " + group.data.name + (!window.Buttonizer.hasPremium() ? ' (premium)' : ''));
    }

    render()
    {
        this.filter();
        this.delay();
        this.styling();
    }

    filter()
    {
        let filter = document.createElement("div");

        // Time Schedule
        filter.appendChild(new TimeSchedule_TimeSchedule(this).build());

        // Page Rule
        filter.appendChild(new PageRuleSelect_PageRuleSelect(this).build());

        // Add
        super.addItem(window.Buttonizer.translate('settings.button_group_window.filters'), filter);
    }

    delay()
    {
        let delay = document.createElement("div");

        delay.appendChild(new ShowAfterTimeout_ShowAfterTimeout(this).build());
        delay.appendChild(new ShowOnScroll_ShowOnScroll(this).build());
        delay.appendChild(new ExitIntent_ExitIntent(this).build());

        // Add
        super.addItem(window.Buttonizer.translate('settings.button_group_window.timeout_scroll'), delay);
    }

    styling()
    {
        let filter = document.createElement("div");

        // Button custom class
        filter.appendChild(new CustomClass_CustomClass(this).build());


        // Button custom id
        filter.appendChild(new CustomId_CustomID(this).build());

        // Add
        super.addItem(window.Buttonizer.translate('settings.button_group_window.styling'), filter);
    }
}

// CONCATENATED MODULE: ./src/js/admin/ui/ButtonGroup/index.js







class ButtonGroup_Index {
    constructor(data, buttons) {
        if (!buttons) {
            buttons = [];
        }

        this.type = 'group';

        // Default construct
        this.groupOpened = false;

        this.data = data;
        this.ui = {}; // UI linked to data entries

        this.groupObject = HTMLElement;

        this.groupID = window.Buttonizer.buttonGroups.length;

        this.stylingOpened = false;
        this.stylingObject = HTMLElement;

        this.groupBody = HTMLElement;
        this.windowObject = HTMLElement;

        this.buttons = [];
        this.buttonsLength = buttons.length;

        this.singleButtonMode = false;

        // Build group
        this.buildGroup();

        // Settings window object
        this.windowObject = new GroupWindow_GroupWindow(this);

        // Add buttons
        for (let button in buttons) {
            new ui_Button(this, buttons[button]);
        }

        if(this.getButtonsAlive() === 1 !== this.singleButtonMode){
            this.singleButtonMode = this.getButtonsAlive() === 1;
            this.groupHolder.setSingleButtonMode();
        }

        this.appendAddButton();
        window.Buttonizer.buttonGroups.push(this);
    }

    get buttonsAmount(){
        return this.getButtonsAlive();
    }

    buildGroup() {
        let groupObject = document.createElement("div");
        groupObject.className = "buttonizer-button-group is-group";
        this.groupObject = groupObject;

        this.groupHolder = new ButtonGroup_GroupHolder(this);
        groupObject.appendChild(this.groupHolder.build());

        this.groupSettings = new ButtonGroup_GroupSettings(this);
        Buttonizer.bar.settingContent.appendChild(this.groupSettings.build());



        this.appendAddButton();

        this.groupBody = document.createElement("div");
        this.groupBody.style.display = "none";
        this.groupBody.className = "button-group-body";
        groupObject.appendChild(this.groupBody);

        //Make buttons sortable
        jQuery(this.groupBody).sortable({
            items: "> div",
            axis: "y",
            cursor: "move",
            delay: 150,
            handle: "#buttonizer-button-title",
            helper: 'clone',
            cancel: !(this.buttonsLength <= 1) ? null : '.group-button',
            connectWith: '.button-group-body',
            disabled: true,
            start: (e, ui) => {
                // creates a temporary attribute on the element with the old index
                jQuery(ui.item).attr('previndex', ui.item.index());
                jQuery(ui.item).attr('prevgroup', jQuery(this.groupBody).parent().index());
            },
            stop: (e, ui) => {
                jQuery(ui.item).removeAttr('previndex');
                jQuery(ui.item).removeAttr('prevgroup');
            },
            update: function(e, ui) {
                if(this === ui.item.parent()[0]){
                    // gets the new and old index then removes the temporary attribute
                    let newIndex = ui.item.index();
                    let oldIndex = jQuery(ui.item).attr('previndex');
                    let newGroup = jQuery(this).parent().index();
                    let oldGroup = jQuery(ui.item).attr('prevgroup');
                    if(ui.sender) jQuery(this).sortable('option', 'cancel', null);
                    window.Buttonizer.updateButtonList(newIndex, oldIndex, newGroup, oldGroup);
                    
                    jQuery(ui.item).removeAttr('previndex');
                    jQuery(ui.item).removeAttr('prevgroup');
                }
            }
        });
        jQuery(this.groupBody).disableSelection();
        jQuery(".group-title").disableSelection();
        Buttonizer.bar.groupHolder.appendChild(this.groupObject);
    }

    duplicate()
    {
        new ButtonGroup_Index(this.data, this.buttons);
    }

    appendAddButton()
    {
        let addButton = document.createElement("a");
        addButton.href = "javascript:void(0)";
        addButton.className = "create-new-button";
        addButton.innerHTML = window.Buttonizer.translate('utils.add_button') + " +";

        addButton.addEventListener("click", () => {
            new ui_Button(this, {
                name: window.Buttonizer.translate('common.button') + " " + (this.getButtonsAlive()+1),
                show_mobile: 'true',
                show_desktop: 'true'
            });
            jQuery(this.groupBody).sortable('option', 'cancel', null);
        });

        this.groupObject.appendChild(addButton);
    }

    registerButton(object)
    {
        this.buttons.push(object);
    }

    removeGroup()
    {
        let placing = window.Buttonizer.buttonGroups.indexOf(this);
        window.Buttonizer.buttonGroups.splice(placing, 1);

        this.groupObject.remove();
    }

    /**
     * Set entry in data to value
     * 
     * @param {String} entry 
     * @param {String} value 
     */
    set(entry, value){
        this.data[entry] = value;
        if("undefined" !== typeof this.ui[entry]) this.ui[entry].forEach((item) => item.update(value));
        // if(typeof this.ui[entry] !== undefined) this.ui[entry].update(value);
        window.Buttonizer.buttonChanges = true;
    }

    /**
     * Get value from entry. if none available, set default (def)
     * 
     * @param {String} entry 
     * @param {String} def 
     */
    get(entry, def){ 
        if(typeof this.data[entry] !== "undefined") return this.data[entry];
        this.data[entry] = def;
        window.Buttonizer.buttonChanges = true;
        return def;
    }

    /**
     * Get the amount of buttons that are alive
     * @returns {number}
     */
    getButtonsAlive()
    {
        let alive = 0;

        this.buttons.forEach((button) => {
            if(button.alive) alive++
        });

        return alive;
    }

    /**
     * Returns all alive buttons in an array
     * @returns {*[]}
     */
    getButtons(){
        return this.buttons.filter((button) => button.alive);
    }

    /**
     * register HTMLElement with dataEntry point.
     * 
     * @param {String} entry 
     * @param {HTMLElement} ui 
     */
    registerUI(entry, ui){
        if(typeof this.ui[entry] !== typeof undefined){
            this.ui[entry].push(ui)
        //Else, the entry point is empty and it can just be set to the new ui.
        }else{
            this.ui[entry] = [ui];
        }
    }

    getUI(entry){
        if(typeof this.ui[entry] !== 'undefined') return this.ui[entry];
        return false;
    }
}

/* harmony default export */ var ButtonGroup = (ButtonGroup_Index);
// CONCATENATED MODULE: ./src/js/admin/ui/TopBar.js
// Buttonizer bar



class TopBar_TopBar
{
    constructor(buttonizer)
    {
        this.buttonizerObject = buttonizer;
        this.topBarElement = HTMLElement;
        this.optionsWindow = HTMLElement;
        this.publishButton = HTMLElement;
        this.revertChangesText = HTMLElement;
        this.alertText = HTMLElement;

        this.eventListCache = [];
        this.eventTrackerMenuItem = null;
        this.eventTracker = null;

        this.windowOptions = [
            {
                buttons: [
                    {
                        title:'Buttonizer',
                        description: window.Buttonizer.translate('bar.menu.version'),
                        callback: () => {
                            window.open("https://www.buttonizer.pro/");
                        }
                    },
                    {
                        title: window.Buttonizer.translate('bar.menu.knowledgebase.title'),
                        description: window.Buttonizer.translate('bar.menu.knowledgebase.description'),
                        callback: () => {
                            window.open("https://community.buttonizer.pro/knowledgebase");
                        }
                    }
                ]
            },
            {
                title: window.Buttonizer.translate('bar.menu.support_group'),
                buttons: [
                    {
                        title: window.Buttonizer.translate('bar.menu.support.title'),
                        callback: () => {
                            window.open("https://community.buttonizer.pro/t/support");
                        }
                    },
                    {
                        title: window.Buttonizer.translate('bar.menu.community.title'),
                        description: window.Buttonizer.translate('bar.menu.community.description'),
                        callback: () => {
                            window.open("https://community.buttonizer.pro/");
                        }
                    },
                    {
                        title: window.Buttonizer.translate('bar.menu.tour.title'),
                        description: window.Buttonizer.translate('bar.menu.tour.description'),
                        callback: () => {
                            window.Buttonizer.startTour();
                        }
                    }
                ]
            },{
                title: window.Buttonizer.translate('bar.menu.account_group'),
                buttons: [
                    {
                        title: window.Buttonizer.translate('bar.menu.account.title'),
                        callback: () => {
                            window.open(buttonizer_admin.admin + "?page=Buttonizer-account");
                        }
                    },
                    {
                        title: window.Buttonizer.translate('bar.menu.upgrade.title'),
                        callback: () => {
                            window.open(buttonizer_admin.admin + "?page=Buttonizer-pricing");
                        }
                    },
                    {
                        title: window.Buttonizer.translate('bar.menu.affiliation.title'),
                        description: window.Buttonizer.translate('bar.menu.affiliation.description'),
                        callback: () => {
                            window.open(buttonizer_admin.admin + "?page=Buttonizer-affiliation");
                        }
                    }
                ]
            },
            {
                buttons: [
                    {
                        title: window.Buttonizer.translate('page_rules.name'),
                        icon: 'fas fa-filter',
                        class: !window.Buttonizer.hasPremium() ? 'buttonizer-premium-gray-out' : '',
                        callback: () => {
                            if(window.Buttonizer.hasPremium()) {
                                window.Buttonizer.pageRule.show();
                                return;
                            }

                            window.Buttonizer.showPremiumPopup(window.Buttonizer.translate('page_rules.pro_description'), 'SQnAhyBWLWg');
                        }
                    },
                    {
                        title: window.Buttonizer.translate('time_schedules.name'),
                        icon: 'far fa-clock',
                        class: !window.Buttonizer.hasPremium() ? 'buttonizer-premium-gray-out' : '',
                        callback: () => {
                            if(window.Buttonizer.hasPremium()) {
                                window.Buttonizer.timeSchedule.show();
                                return;
                            }

                            window.Buttonizer.showPremiumPopup(window.Buttonizer.translate('time_schedules.pro_description'), 'C-B9ITdY6A4');
                        }
                    }
                ]
            },
            {
                buttons: [
                    {
                        title: window.Buttonizer.translate('bar.menu.options.title'),
                        icon: 'fa fa-cogs',
                        class: 'single-button',
                        callback: () => {
                            this.buttonizerObject.settingsWindow.toggle();
                        }
                    }
                ]
            }
        ];

        document.body.appendChild(this.buildTopBar());
    }

    buildTopBar()
    {
        let topBar = document.createElement("div");
        topBar.className = "buttonizer-topbar";

        let revertSave = document.createElement('div');
        revertSave.className = 'revert-save';
        revertSave.style.display = 'inline-block';
        revertSave.appendChild(this.createRevertChangesButton());
        revertSave.appendChild(this.createPublishButton());

        // Add back button and logo
        topBar.appendChild(this.createBackButton());
        topBar.appendChild(this.createLogo());

        topBar.appendChild(revertSave);
        topBar.appendChild(this.createOptionsButton());

        topBar.appendChild(this.createAlertText());
        topBar.appendChild(this.createOptionsWindow());

        topBar.appendChild(this.createEventMenuItem());
        topBar.appendChild(this.createEventWindow());

        this.topBarElement = topBar;

        return topBar;
    }

    createOptionsButton()
    {
        let button = document.createElement("a");
        button.className = "options-button button right fas fa-cog";

        button.addEventListener('click', () => {
            this.optionsWindow.toggle();
        });

        return button;
    }

    /**
     * Create event menu item
     *
     * @returns {HTMLAnchorElement}
     */
    createEventMenuItem() {
        // Add close button
        let button = document.createElement("a");
        button.href = 'javascript:void(0)';
        button.className = 'event-tracker-button';
        button.style.display = 'none';
        button.innerHTML = '';
        button.addEventListener("click", () => {
            if(this.eventTracker.container.style.display === 'block') {
                this.eventTracker.container.style.display = 'none';
            }else {
                this.eventTracker.container.style.display = 'block';
            }
        });

        this.eventTrackerMenuItem = button;

        return button;
    }

    /**
     * Create event track window
     */
    createEventWindow()
    {
        let container = document.createElement("div");
        container.className = 'event-track-window';
        container.style.display = 'none';
        container.innerHTML = `<div class="track-window-title">${window.Buttonizer.translate('event_tracker.window_title')}</div>`;

        // Add close button
        let closeButton = document.createElement("a");
        closeButton.href = 'javascript:void(0)';
        closeButton.className = 'close';
        closeButton.innerHTML = '<i class="fas fa-times"></i>';
        closeButton.addEventListener("click", () => {
            container.style.display = 'none';
        });

        container.appendChild(closeButton);

        // Event list container
        let listContainer = document.createElement("div");
        listContainer.className = 'list-container';
        listContainer.innerHTML = '';
        container.appendChild(listContainer);

        this.eventTracker = {
            container: container,
            list: listContainer
        };

        return container;
    }

    /**
     * Events
     *
     * @param events
     */
    updateEventLogs(events) {
        // No events
        if(events.length === 0) {
            this.eventTrackerMenuItem.style.display = 'none';
            return;
        }

        // Nothing changed
        if(this.eventListCache === events) {
            return;
        }

        this.eventTrackerMenuItem.style.display = 'block';
        this.eventTrackerMenuItem.innerHTML = '<i class="fas fa-info"></i> ('+ events.length +') ' + window.Buttonizer.translate('event_tracker.title');


        // Empty
        this.eventTracker.list.innerHTML = '';

        for (let i = 0; i < events.length; i++) {
            let event = document.createElement("div");
            event.className = 'event-element event-' + events[i].type;
            event.innerHTML = events[i].message;

            this.eventTracker.list.appendChild(event);
        }
    }

    /**
     * Options window
     *
     * @returns {{prototype: HTMLElement; new(): HTMLElement} | * | HTMLElement}
     */
    createOptionsWindow()
    {
        this.optionsWindow = document.createElement("div");
        this.optionsWindow.className = "options-window";
        this.optionsWindow.hidden = true;
        this.optionsWindow.toggle = () => {
            this.optionsWindow.hidden = !(this.optionsWindow.hidden);
        };

        let list = document.createElement('ul');

        for (let i = 0; i < this.windowOptions.length; i++) {
            let group = document.createElement("li");
            group.className = 'group-container';

            // Add group title
            if(typeof this.windowOptions[i].title === "string")
            {
                let title = document.createElement("div");
                title.className = 'group-title';
                title.innerHTML = this.windowOptions[i].title;

                group.appendChild(title);
            }

            // Add buttons to group
            for(let b = 0; b < this.windowOptions[i].buttons.length; b++) {
                group.appendChild(this.barMenuItem(this.windowOptions[i].buttons[b]));
            }

            list.appendChild(group);
        }

        this.optionsWindow.appendChild(list);
        return this.optionsWindow;
    }

    barMenuItem(data)
    {
        let item = document.createElement('a');
        item.href = 'javascript:void(0)';
        // item.innerText = data.title ? data.title : 'Default title';
        item.className = data.class ? 'option ' + data.class : 'option';

        let buttonTitle = document.createElement('span');
        buttonTitle.className = 'button-title';
        buttonTitle.innerHTML = data.title ? data.title : 'Default title';
        item.appendChild(buttonTitle);

        // Add button description
        if(data.hasOwnProperty('description')) {
            let buttonDescription = document.createElement('span');
            buttonDescription.className = 'button-description';
            buttonDescription.innerHTML = data.description ? data.description : '';
            item.appendChild(buttonDescription);
        }

            // Button icon
        if(data.hasOwnProperty('icon')){
            let icon = document.createElement('i');
            icon.className = data.icon;
            item.appendChild(icon);
        }

        // Button callback
        if(data.hasOwnProperty('callback')){
            item.addEventListener('click', () => {
                this.optionsWindow.toggle();
                data.callback();
            });
        }

        return item;
    }

    createBackButton()
    {
        let button = document.createElement("a");
        button.className = "close-button fa fa-times";

        button.addEventListener('click', () =>
        {
            document.location.href = window.Buttonizer.buttonizerInitData.wordpress.admin_base;
        });
        
        return button;
    }

    createLogo()
    {
        // Add image
        let logoImage = document.createElement("img");
        logoImage.className= "buttonizer-logo";
        logoImage.src = buttonizer_admin.assets + "/images/logo.png";

        return logoImage;
    }

    createPublishButton()
    {
        this.publishButton = document.createElement("a");
        this.publishButton.className = "publish-button button-primary right";
        this.publishButton.innerText = window.Buttonizer.translate('common.save_publish');
        this.publishButton.enabled = true;
        this.publishButton.addEventListener('click', () => {
            if(!this.publishButton.enabled) return;
            this.buttonizerObject.savingMechanism.publish();
        });
        
        this.publishButton.enable = () => {
            this.publishButton.enabled = true;
            this.revertChangesText.hidden = false;
            this.publishButton.innerText = window.Buttonizer.translate('common.save_publish');
            this.publishButton.className = this.publishButton.className.replace(" disabled", "");
        };
        this.publishButton.disable = (innerText) => {
            this.publishButton.enabled = false;
            this.revertChangesText.hidden = true;
            this.publishButton.innerText = innerText;

            if(this.publishButton.className.includes(" disabled")) return;
            this.publishButton.className += " disabled";
        };
        return this.publishButton;
    }

    createRevertChangesButton()
    {
        this.revertChangesText = document.createElement("a");
        this.revertChangesText.className = "revert-button right";
        this.revertChangesText.innerText = window.Buttonizer.translate('revert.revert_changes');
        this.revertChangesText.href = "javascript:void(0)";

        this.revertChangesText.addEventListener('click', () => {
            new Modal({
                title: window.Buttonizer.translate('revert.revert_changes'),
                content: '<p>'+ window.Buttonizer.translate('revert.modal.intro') +'</p><p>'+ window.Buttonizer.translate('revert.modal.action') +'</p>',

                onConfirm: () =>
                {
                    this.buttonizerObject.savingMechanism.revert();
                },

                buttons: [{
                    text: window.Buttonizer.translate('modal.changed_my_mind'),
                    close: true,
                    focus: true
                }, {
                    text: window.Buttonizer.translate('revert.revert_changes'),
                    confirm: true
                }]
            });
        });
        return this.revertChangesText;
    }

    createAlertText(){
        this.alertText = document.createElement("a");
        this.alertText.className = "alert-text";
        this.alertText.showSaving = () => {
            this.alertText.innerHTML = '<i class="fas fa-mug-hot"></i> ' + window.Buttonizer.translate('saving.saving');
            this.alertText.hidden = false;
        };
        this.alertText.showSaved = () => {
            this.alertText.innerHTML = '<i class="fas fa-check"></i> ' + window.Buttonizer.translate('saving.completed')
            setTimeout(() => {
                this.alertText.hidden = true;
            }, 2000);
        };
        this.alertText.alert = (text) => {
            this.alertText.innerText = text;
            this.alertText.hidden = false;
            setTimeout(() => {
                this.alertText.hidden = true;
            }, 2000);
        }
        this.alertText.hidden = true;
        return this.alertText;
    }

    /**
     * Sets if there are changes made.
     * @param {boolean} value
     */
    set changes(value){
        if(value){
            this.publishButton.enable();
        } else {
            this.publishButton.disable(window.Buttonizer.translate('common.published'));
        }
    }
}

/* harmony default export */ var ui_TopBar = (TopBar_TopBar);
// CONCATENATED MODULE: ./src/js/admin/ui/Bar.js
// Buttonizer bar



class Bar_Bar
{
    // Send object to Buttonizer
    constructor(buttonizer)
    {
        this.buttonizerObject = buttonizer;
        this.barElement = HTMLElement;
        this.groupContainer = HTMLElement;
        this.settingBar = HTMLElement;
        this.settingContainer = HTMLElement;
        this.settingContent = HTMLElement;
        this.settingTitle = HTMLElement;

        this.settingCallback = () => console.log('huh?');

        document.body.appendChild(this.buildBar());

        jQuery(this.groupContainer).scrollbar();
        jQuery(this.settingContent).scrollbar();
        
    }

    buildBar()
    {
        let bar = document.createElement("div");
        bar.className = "buttonizer-bar";


        let container = document.createElement('div');
        container.className = 'group-container container';

        
        container.appendChild(this.createButtonHolder());

        container.appendChild(this.addButtonGroup());

        bar.appendChild(container);
        bar.appendChild(this.createBarFooter());

        this.barElement = bar;
        this.groupContainer = container;

        let content = document.createElement('div');

        let wrapper = document.createElement('div');
        wrapper.className = 'settings-content';

        let settingContainer = document.createElement('div');
        settingContainer.className = 'settings-container container hidden';
        settingContainer.appendChild(this.createSettingBar());
        wrapper.appendChild(content);
        settingContainer.appendChild(wrapper);

        bar.appendChild(settingContainer);

        this.settingContent = content;
        this.settingContainer = settingContainer;

        return bar;
    }

    createSettingBar() {
        let bar = document.createElement('div');
        bar.className = 'top';

        let button = document.createElement('a');
        button.className = "back-button fa fa-angle-left";

        button.addEventListener('click', () => {
            jQuery('.settings-container').addClass('hidden');
            jQuery('.group-container').removeClass('hidden');
            setTimeout(() => this.settingCallback(), 250);
        });

        bar.appendChild(button);

        let titlewrapper = document.createElement('div');
        titlewrapper.className = 'title-wrapper';
        let title = document.createElement('h4');
        title.innerHTML = window.Buttonizer.translate('bar.buttons.now_editing');

        let smallTitle = document.createElement('h2');
        smallTitle.innerHTML = 'nothing!';

        titlewrapper.appendChild(title);
        titlewrapper.appendChild(smallTitle);

        bar.appendChild(titlewrapper);

        this.settingBar = bar;
        this.settingTitle = smallTitle;
        return bar;
    }

    createButtonHolder()
    {
        this.groupHolder = document.createElement("div");
        this.groupHolder.className = "buttonizer-group-holder";

        // Make groupholders sortable
        jQuery(this.groupHolder).sortable({
            items: "> div",
            axis: "y",
            cursor: "move",
            delay: 150,
            handle: "#buttonizer-group-title",
            helper: 'clone',
            start: function(e, ui) {
                // creates a temporary attribute on the element with the old index
                jQuery(this).attr('data-previndex', ui.item.index());
            },
            stop: function(e, ui) {
                jQuery(this).removeAttr('data-previndex');
            },
            update: function(e, ui) {
                // gets the new and old index then removes the temporary attribute
                var newIndex = ui.item.index();
                var oldIndex = jQuery(this).attr('data-previndex');
                // var element_id = ui.item.attr('id');
                window.Buttonizer.updateButtonGroupList(newIndex, oldIndex);
                jQuery(this).removeAttr('data-previndex');
            },
            cancel: null
        });
        jQuery(this.groupHolder).disableSelection();
        jQuery(".group-title").disableSelection();


        return this.groupHolder;
    }

    addButtonGroup()
    {


        let addGroup = document.createElement("a");
        addGroup.href = "javascript:void(0)";
        addGroup.className = "create-new-button is-create-group buttonizer-premium-gray-out";
        addGroup.innerHTML = window.Buttonizer.translate('utils.add_group') + '+ <span class="buttonizer-premium">PRO</span>';
        addGroup.addEventListener("click", () => window.Buttonizer.showPremiumPopup(window.Buttonizer.translate('premium.multiple_button_groups'), 'Qxs1oGCVATU'));

        return addGroup;
    }

    // Generate action link
    generateLink(icon, text, callback, buttonClass)
    {
        if(!buttonClass)
        {
            buttonClass = "";
        }

        let link = document.createElement("a");
        link.href = "javascript:void(0)";
        link.className = buttonClass;
        link.innerHTML = '<i class="'+ icon +'"></i> ' + text;
        link.addEventListener("click", callback);

        return link;
    }

    showSettings(string, callback)
    {
        jQuery('.buttonizer-bar .settings-container').removeClass('hidden');
        jQuery('.buttonizer-bar .group-container').addClass('hidden');

        this.settingTitle.innerHTML = string;

        this.settingCallback = callback;
        // this.settingContainer.className = 'setting-container container';
    }

    // Create bar footer
    createBarFooter()
    {
        let footer = document.createElement("div");
        footer.className = 'bar-footer';

        let devicePreviewContainer = document.createElement("div");
        devicePreviewContainer.className = 'footer-device-selector';

        // Desktop button
        let buttonDesktop = document.createElement("a");
        buttonDesktop.href = 'javascript:void(0)';
        buttonDesktop.className = 'active';
        buttonDesktop.innerHTML = '<span class="dashicons-before dashicons-desktop"></span>';

        buttonDesktop.addEventListener("click", () => {
            buttonDesktop.classList.add('active');
            buttonTablet.classList.remove('active');
            buttonMobile.classList.remove('active');

            document.querySelector(".buttonizer-frame").className = 'buttonizer-frame';
        });

        index_all(buttonDesktop, {
            content: window.Buttonizer.translate('bar.preview.desktop'),
            animation: 'shift-away',
            arrow: false,
            placement: "top"
        });

        devicePreviewContainer.appendChild(buttonDesktop);

        // Tablet button
        let buttonTablet = document.createElement("a");
        buttonTablet.href = 'javascript:void(0)';
        buttonTablet.innerHTML = '<span class="dashicons-before dashicons-tablet"></span>';

        buttonTablet.addEventListener("click", () => {
            buttonDesktop.classList.remove('active');
            buttonTablet.classList.add('active');
            buttonMobile.classList.remove('active');

            document.querySelector(".buttonizer-frame").className = 'buttonizer-frame frame-size-tablet';
        });

        index_all(buttonTablet, {
            content: window.Buttonizer.translate('bar.preview.tablet'),
            animation: 'shift-away',
            arrow: false,
            placement: "top"
        });

        devicePreviewContainer.appendChild(buttonTablet);

        // Mobile button
        let buttonMobile = document.createElement("a");
        buttonMobile.href = 'javascript:void(0)';
        buttonMobile.innerHTML = '<span class="dashicons-before dashicons-smartphone"></span>';

        buttonMobile.addEventListener("click", () => {
            buttonDesktop.classList.remove('active');
            buttonTablet.classList.remove('active');
            buttonMobile.classList.add('active');

            document.querySelector(".buttonizer-frame").className = 'buttonizer-frame frame-size-mobile';
        });

        index_all(buttonMobile, {
            content: window.Buttonizer.translate('bar.preview.mobile'),
            animation: 'shift-away',
            arrow: false,
            placement: "top"
        });

        devicePreviewContainer.appendChild(buttonMobile);

        footer.appendChild(devicePreviewContainer);

        return footer;
    }
}

/* harmony default export */ var ui_Bar = (Bar_Bar);
// CONCATENATED MODULE: ./src/js/admin/ui/Loader.js


class Loader
{
    constructor()
    {
        this.element = document.createElement("div");
        this.element.className = "buttonizer-loading";

        // Center loading object
        let itemCentered = document.createElement("div");
        itemCentered.className = "middle";

        // Buttonizer spinning
        let logo = document.createElement("img");
        logo.src = buttonizer_admin.assets + "/images/buttonizer-loading.png";

        // Spinner
        itemCentered.innerHTML = this.svg();

        itemCentered.appendChild(logo);

        // Text element (loading info)
        this.textElement = document.createElement("div");
        this.textElement.className = "loader-text";
        itemCentered.appendChild(this.textElement);

        // Append all to the main element
        this.element.appendChild(itemCentered);

        document.body.appendChild(this.element);
    }

    // Spinning SVG animation
    svg()
    {
        return '<svg width="165" height="165" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling"><circle cx="50" cy="50" fill="none" stroke="#2f788a" stroke-width="7" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(300 50 50)"><!--animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"--></animateTransform></circle></svg>';
    }

    // Show loader
    show(text, className = '')
    {
        if(!text) {
            text = "";
        }

        this.textElement.innerHTML = text;

        this.element.className = 'buttonizer-loading ' + className;
        this.element.style.display = "block";
    }

    // Hide loader
    hide()
    {
        this.element.style.display = "none";
    }

}

/* harmony default export */ var ui_Loader = (Loader);
// CONCATENATED MODULE: ./src/js/admin/ui/Saving.js
'use string';



class Saving_Saving
{
    constructor()
    {
        this.updateTimer = setTimeout(() => { }, 0);
        this.isUpdating = false;
        this.tempButtons = {};

        // Saving and saved object
        this.savingObject = HTMLElement;
        this.savedObject = HTMLElement;

        // Start interval
        setInterval(() => this.checkUpdates(), 500);
    }

    checkUpdates()
    {
        if(!window.Buttonizer.buttonChanges || this.isUpdating)
        {
            return;
        }

        window.Buttonizer.buttonChanges = false;
        // Clear timeout, we don't want to spam the webserver
        clearTimeout(this.updateTimer);

        this.updateTimer = setTimeout(() => this.save(), 1000);
    }

    save()
    {
        // Nevermind, still editing
        if(window.Buttonizer.buttonChanges)
        {
            return;
        }

        this.isUpdating = true;
        window.Buttonizer.buttonChanges = false;
        window.Buttonizer.topBar.alertText.showSaving();

        console.log("[BUG DEBUG SAVING AND RELOADING] button changes!");

        jQuery.ajax({
            url: buttonizer_admin.ajax + '?action=buttonizer_backend&item=SaveData&save=buttons',
            dataType: 'json',
            method: 'post',
            data: {
                security: buttonizer_admin.security,
                buttons: this.generateJSONObject()
            },
            success: (data) => {
                this.isUpdating = false;

                if(data.status !== "success")
                {
                    window.Buttonizer.savingError(data.message);
                    return;
                }

                console.log("[BUG DEBUG SAVING AND RELOADING] saved!");

                window.Buttonizer.topBar.alertText.showSaved();
                this.reloadPreview();
                window.Buttonizer.changes = true;
            },
            error: (err) => {
                this.isUpdating = false;
                window.Buttonizer.savingError(err);
            }
        });
    }

    // Publish the save data
    publish(){
        // Nevermind, still editing
        if(window.Buttonizer.buttonChanges || this.isUpdating)
        {
            return;
        }

        this.isUpdating = true;

        window.Buttonizer.buttonChanges = false;
        window.Buttonizer.topBar.publishButton.disable(window.Buttonizer.translate('common.publishing'));

        jQuery.ajax({
            url: buttonizer_admin.ajax + '?action=buttonizer_backend&item=SaveData&save=publish',
            dataType: 'json',
            data: {
                security: buttonizer_admin.security
            },
            method: 'post',
            success: (data) => {
                this.isUpdating = false;

                if(data.status !== "success")
                {
                    new Modal({
                        title: window.Buttonizer.translate('errors.saving.title'),
                        content: `<p>${window.Buttonizer.translate('errors.saving.message')}.</p><p>${data.message}</p>`,
                        buttons: [{
                            text: "Close",
                            close: true
                        }]
                    });
                    return;
                }

                window.Buttonizer.topBar.publishButton.disable(window.Buttonizer.translate('common.published'));
            },
            error: (err, msg, data) => {

                this.isUpdating = false;

                window.Buttonizer.topBar.publishButton.enable();

                window.bdebug.error("Couldn't complete saving: " + err);
            }
        });
    }

    // Revert the save data to the published data
    revert(){
        // Nevermind, still editing
        if(window.Buttonizer.buttonChanges)
        {
            return;
        }

        window.Buttonizer.loader.show(window.Buttonizer.translate('revert.reverting'));

        this.isUpdating = true;
        window.Buttonizer.buttonChanges = false;

        jQuery.ajax({
            url: buttonizer_admin.ajax + '?action=buttonizer_backend&item=SaveData&save=revert',
            dataType: 'json',
            method: 'post',
            data: {
                security: buttonizer_admin.security
            },
            success: (data) => {
                this.isUpdating = false;

                if(data.status !== "success")
                {
                    window.Buttonizer.loader.hide();

                    new Modal({
                        title: window.Buttonizer.translate('revert.error.title'),
                        content: `<p>${window.Buttonizer.translate('revert.error.message')}</p><p>${data.message}</p>`,
                        buttons: [{
                            text: "Close",
                            close: true
                        }]
                    });
                    return;
                }

                document.location.reload();
            },
            error: (err, msg, data) => {

                this.isUpdating = false;

                window.bdebug.error("Couldn't complete saving: " + err);
            }
        });

    }

    reloadPreview()
    {
        console.log("[BUG DEBUG SAVING AND RELOADING] requested!");

        // Post reload buttonizer
        try {
            document.getElementById('buttonizer-iframe').contentWindow.postMessage({
                eventType: 'buttonizer',
                messageType: 'preview-reload'
            }, document.location.origin);
        } catch (e) {
            console.log("Buttonizer tried to auto update the Buttonizer Buttons. But the message didn't came through. Well. Doesn't matter, it's just an extra function. It's nice to have.");
            console.log(e);
            document.getElementById('buttonizer-iframe').contentWindow.location.reload();
        }
    }

    // Generate JSON object
    generateJSONObject()
    {
        // Buttons
        let buttonGroups = window.Buttonizer.buttonGroups;
        let data = [];

        // Loop through all groups
        for(let groupCounter = 0; groupCounter < buttonGroups.length; groupCounter++)
        {
            let groupButtons = buttonGroups[groupCounter].buttons;
            let tempdata = [];

            // Loop through all buttons within that group
            for(let i = 0; i < groupButtons.length; i++) {
                // Button has been removed
                if (!groupButtons[i].alive) {
                    continue;
                }

                // Add button to data string
                tempdata.push(groupButtons[i].data);
            }

            data.push({
                data: buttonGroups[groupCounter].data,
                buttons: tempdata
            });
        }

        return data;
    }


}

/* harmony default export */ var ui_Saving = (Saving_Saving);
// CONCATENATED MODULE: ./src/js/admin/ui/Settings/Settings/IconLibrary.js



/* harmony default export */ var IconLibrary = (class
{
    /**
     *
     */
    constructor()
    {
        this.versionDropdown = {};
        this.libraryPremiumCode = {};
        this.currentSelected = window.Buttonizer.getSetting('icon_library', 'fontawesome');
        this.currentSelectedIndex = null;
        this.currentSelectedVersion = window.Buttonizer.getSetting('icon_library_version', '5.free');
        this.currentSelectedVersionIndex = null;
        this.currentSelectedPremiumCode = window.Buttonizer.getSetting('icon_library_code', '');
        this.cachedPremium = [];

        this.libraries = [
            {
                name: 'Font Awesome',
                id: 'fontawesome',
                versions: [
                    {
                        id: '5.free',
                        name: "Font Awesome 5 - "+ window.Buttonizer.translate('settings_window.icon_library.free') +" - " + window.Buttonizer.translate('settings_window.icon_library.latest'),
                        free: true
                    },
                    {
                        id: '5.paid',
                        name: "Font Awesome 5 - Pro - " + window.Buttonizer.translate('settings_window.icon_library.latest'),
                        free: false
                    },
                    {
                        id: '4.7.0',
                        name: "Font Awesome 4.7",
                        free: true
                    }
                ]
            }/*, {
                name: 'The Noun Project',
                versions: [
                    {
                        id: '1.5.5',
                        name: "Version 1.5.5",
                        free: true
                    },
                    {
                        id: '1.4.0',
                        name: "Version 1.4.0",
                        free: true
                    }
                ]
            }, {
                name: 'Another icon library',
                versions: [
                    {
                        id: '1.0.2',
                        name: "Version 1.0.2",
                        free: true
                    }
                ]
            }*/
        ];
    }

    /**
     *
     */
    build()
    {
        let iconLibrary = document.createElement("div");
        iconLibrary.appendChild(this.iconLibrary());
        iconLibrary.appendChild(this.versionSelector());
        iconLibrary.appendChild(this.importIconLibrary());
        return iconLibrary;
    }

    /**
     * Show premium icons?
     *
     * @returns {boolean}
     */
    showPremiumIcons()
    {
        return true;
        let keyword = this.currentSelected + this.currentSelectedVersion;

        if(typeof this.cachedPremium[keyword] !== "undefined")
        {
            return this.cachedPremium[keyword];
        }

        for (let i = 0; i < this.libraries.length; i++)
        {
            // Current selected library?
            if(this.libraries[i].id === this.currentSelected) {
                // Find current version
                for (let b = 0; b < this.libraries[i].versions.length; b++)
                {
                    // Is this the version?
                    if (this.libraries[i].versions[i].id === this.currentSelectedVersion)
                    {
                        this.cachedPremium[keyword] = !this.libraries[i].versions[b].free;
                        return !this.libraries[i].versions[b].free; // Show premium code? true = false, false = true
                    }
                }
            }
        }

        return false;
    }

    /**
     * Select icon library
     * @returns {*}
     */
    iconLibrary()
    {
        /// ---------------------
        let libraryDropdown = document.createElement("select");
        libraryDropdown.className = "window-select";

        for(let i = 0; i < this.libraries.length; i++)
        {
            let option = document.createElement("option");
            option.value = i;
            option.text = this.libraries[i].name;
            option.setAttribute("data-index", i.toString());

            if(this.currentSelected === this.libraries[i].id)
            {
                option.selected = true;
                this.currentSelectedIndex = i;
            }

            libraryDropdown.appendChild(option);
        }

        // Changed
        libraryDropdown.addEventListener("change", () => {
            this.currentSelected = libraryDropdown.value;
            this.currentSelectedIndex = Number(libraryDropdown.getAttribute("data-index"));
            this.currentSelectedVersion = 0;

            window.Buttonizer.saveSettings({
                icon_library: libraryDropdown.value,
                icon_library_version: this.libraries[this.currentSelectedIndex].versions[0]
            }, false);


            this.buildVersionSelector();

            this.reloadIframe();
        });

        /// ---------------------

        // Info
        let info = document.createElement("div");
        info.innerHTML = window.Buttonizer.translate('settings_window.icon_library.info');


        // Icon library
        let librarySelector = new Table();
        librarySelector.addColumnHTML("<h2>"+ window.Buttonizer.translate('settings_window.icon_library.title') +"</h2>");
        librarySelector.addColumn(libraryDropdown, "", "370");
        librarySelector.newRow();
        librarySelector.addColumnText("");
        librarySelector.addColumn(info);

        return librarySelector.build();
    }

    /**
     * Select icon library version
     * @returns {*}
     */
    versionSelector()
    {
        /// ---------------------
        this.versionDropdown = document.createElement("select");
        this.versionDropdown.className = "window-select";

        // Changed
        this.versionDropdown.addEventListener("change", () => {
            this.currentSelectedVersion = this.versionDropdown.value;
            
            window.Buttonizer.saveSettings({
                icon_library_version: this.currentSelectedVersion
            }, false);

            // Is this a premium library?
            if(this.currentSelectedVersion.indexOf('paid') >= 0) {
                this.libraryPremiumCode.style.display = 'block';

                if(this.currentSelectedPremiumCode !== "") {
                    this.reloadIcons();
                }
            }else{
                this.libraryPremiumCode.style.display = 'none';

                this.reloadIcons();
            }
        });

        // Info
        let info = document.createElement("div");
        info.innerHTML = window.Buttonizer.translate('settings_window.icon_library.select_version.info');

        // Table
        let fontAwesomeVersion = new Table();
        fontAwesomeVersion.addColumnHTML("<h2>"+ window.Buttonizer.translate('settings_window.icon_library.select_version.title') +"</h2>");
        fontAwesomeVersion.addColumn(this.versionDropdown, "", "370");
        fontAwesomeVersion.newRow();
        fontAwesomeVersion.addColumnText("");
        fontAwesomeVersion.addColumn(info);

        // Data
        let data = document.createElement("div");

        data.appendChild(fontAwesomeVersion.build());

        /// ----- license
        data.appendChild(this.libraryLicenseKey());

        this.buildVersionSelector();

        return data;
    }

    /**
     * Fire reloading icons
     */
    reloadIcons() {
        // Update icon listener
        window.Buttonizer.iconSelector.iconListener.onReady(() => {
            window.Buttonizer.iconSelector.rebuild();
            window.Buttonizer.addIconLibrary();

            this.reloadIframe();
        });

        // Reload icons
        window.Buttonizer.iconSelector.iconListener.loadIcons();
    }

    /**
     * Get license key
     * @returns {HTMLInputElement}
     */
    libraryLicenseKey()
    {
        // Info
        let licenseInfo = document.createElement("div");
        licenseInfo.innerHTML = window.Buttonizer.translate('settings_window.icon_library.library_license_key.info') + '<a href="" target="_blank" class="link-add-more" style="display: inline">'+ window.Buttonizer.translate('settings_window.icon_library.library_license_key.how_does_it_work') +'</a>';


        let input = document.createElement("input");
        input.placeholder = window.Buttonizer.translate('settings_window.icon_library.library_license_key.enter_integrity_code');
        input.className = 'window-select';
        input.value = this.currentSelectedPremiumCode;

        input.addEventListener("change", () => {
            window.Buttonizer.saveSettings({
                icon_library_code: input.value
            }, false);

            this.reloadIcons();
        });

        // Table
        let libraryCode = new Table();
        libraryCode.addColumnHTML(" ");
        libraryCode.addColumn(input, "", "370");
        libraryCode.newRow();
        libraryCode.addColumnText("");
        libraryCode.addColumn(licenseInfo);

        this.libraryPremiumCode = libraryCode.build();

        return this.libraryPremiumCode;
    }

    /**
     * Build version options
     */
    buildVersionSelector()
    {
        this.versionDropdown.innerHTML = '';
        let isPremiumLibrary = false;

        for(let i = 0; i < this.libraries[this.currentSelectedIndex].versions.length; i++)
        {
            let option = document.createElement("option");
            option.value = this.libraries[this.currentSelectedIndex].versions[i].id;
            option.text = this.libraries[this.currentSelectedIndex].versions[i].name;

            if(this.currentSelectedVersion === option.value)
            {
                option.selected = true;

                if(!this.libraries[this.currentSelectedIndex].versions[i].free) {
                    isPremiumLibrary = true;
                }
            }

            this.versionDropdown.appendChild(option);
        }

        if(isPremiumLibrary) {
            this.libraryPremiumCode.style.display = 'block';
        }else{
            this.libraryPremiumCode.style.display = 'none';
        }
    }

    /**
     *
     * @returns {*}
     */
    importIconLibrary()
    {
        /// ---------------------
        let boolean = new FormToggle({
            state: window.Buttonizer.getSetting('import_icon_library', true)
        });

        boolean.onToggle((state) => {
            window.Buttonizer.saveSettings({
                import_icon_library: state
            }, false);

            this.reloadIframe();
        });

        // Info
        let info = document.createElement("div");
        info.innerHTML = window.Buttonizer.translate('settings_window.icon_library.import_library.info');

        // Table
        let importIconLibrary = new Table();
        importIconLibrary.addColumnHTML("<h2>"+ window.Buttonizer.translate('settings_window.icon_library.import_library.title') +"</h2>");
        importIconLibrary.addColumn(boolean.build(), "", "370");
        importIconLibrary.newRow();
        importIconLibrary.addColumnText("");
        importIconLibrary.addColumn(info);

        this.buildVersionSelector();

        return importIconLibrary.build();
    }

    /**
     * After updating some settings, reload the iframe
     */
    reloadIframe()
    {
        setTimeout(() => {
            // Refresh the iframe
            document.getElementById("buttonizer-iframe").contentWindow.location.reload();
        }, 1500);
    }
});
// CONCATENATED MODULE: ./src/js/admin/ui/Settings/Settings/Analytics.js



class Analytics_Analytics
{
    constructor()
    {
        this.versionDropdown = {};
        this.currentSelected = window.Buttonizer.getSetting('google_analytics', '');
    }

    build()
    {
        let data = document.createElement("div");
        data.appendChild(this.googleAnalyticsEnabled());
        const gaIntroText = document.createElement("p");
        gaIntroText.innerText = window.Buttonizer.translate('settings_window.google_analytics.intro');
        gaIntroText.style.marginTop = '0';
        data.appendChild(gaIntroText);
        data.appendChild(this.googleAnalyticsInput());


        let link = document.createElement("a");
        link.href = 'https://community.buttonizer.pro/knowledgebase/17';
        link.target = '_blank';
        link.className = 'info-link text-big';
        link.innerHTML = '<i class="fas fa-info"></i> ' + window.Buttonizer.translate('settings_window.google_analytics.link');
        link.style.marginTop = '40px';
        link.style.textAlign = 'center';
        data.appendChild(link);

        return data;
    }

    googleAnalyticsEnabled() {
        let boolean = new FormToggle({
            state: window.Buttonizer.getSetting('google_analytics_enabled', 'true')
        });

        boolean.onToggle((state) => {
            window.Buttonizer.saveSettings({
                google_analytics_enabled: state
            }, false);
        });

        // Table
        let tooltipsTable = new Table();
        tooltipsTable.addColumnHTML("<h2>Google Analytics</h2>");
        tooltipsTable.addColumn(boolean.build(), "", "50");

        return tooltipsTable.build();
    }

    googleAnalyticsInput()
    {
        let input = document.createElement("input");
        input.value =  this.currentSelected;
        input.className = "window-select";
        input.placeholder = "UA-XXXXXX-Y";

        input.addEventListener("change", () => {
            window.Buttonizer.saveSettings({
                google_analytics: input.value,
            }, false);
        });


        // Info
        let info = document.createElement("div");
        info.innerHTML = window.Buttonizer.translate('settings_window.google_analytics.input_info');

        // Table
        let analytics = new Table();
        analytics.addColumn(input);
        analytics.newRow();
        analytics.addColumn(info);

        return analytics.build();
    }
}
// CONCATENATED MODULE: ./src/js/admin/ui/Settings/Settings/ResetButtonizer.js
class ResetButtonizer
{
    constructor()
    {

    }

    build()
    {
        let data = document.createElement("div");
        let info = document.createElement("div");
        info.className = 'settings-window-information';
        info.innerHTML = '<p>'+ window.Buttonizer.translate('settings_window.reset.info') + '</p>';

        data.appendChild(info);

        data.appendChild(this.whatWillHappen());
        data.appendChild(this.why());
        data.appendChild(this.myLicense());
        data.appendChild(this.andThen());
        data.appendChild(this.ready());

        return data;
    }

    // What will happen
    whatWillHappen()
    {
        let data = document.createElement("div");
        let title = document.createElement("div");
        title.className = 'window-splitter';
        title.innerHTML = window.Buttonizer.translate('settings_window.reset.what_will_happen.title');
        title.style.marginBottom = '20px';

        data.appendChild(title);

        let info = document.createElement("div");
        info.className = 'settings-window-information';
        info.innerHTML = '<p>'+ window.Buttonizer.translate('settings_window.reset.what_will_happen.info') +'</p>';

        data.appendChild(info);
        return data;
    }

    // Why
    why()
    {
        let data = document.createElement("div");
        let title = document.createElement("div");
        title.className = 'window-splitter';
        title.innerHTML = window.Buttonizer.translate('settings_window.reset.why.title');
        title.style.marginBottom = '20px';

        data.appendChild(title);

        let info = document.createElement("div");
        info.className = 'settings-window-information';
        info.innerHTML = '<p>'+ window.Buttonizer.translate('settings_window.reset.why.info') +'</p>';

        data.appendChild(info);
        return data;
    }

    // My license
    myLicense()
    {
        let data = document.createElement("div");
        let title = document.createElement("div");
        title.className = 'window-splitter';
        title.innerHTML = window.Buttonizer.translate('settings_window.reset.license.title');
        title.style.marginBottom = '20px';

        data.appendChild(title);

        let info = document.createElement("div");
        info.className = 'settings-window-information';
        info.innerHTML = `
<p>${window.Buttonizer.translate('settings_window.reset.license.info')}</p>
<p>
<ul>
    <li>${window.Buttonizer.translate('settings_window.reset.license.list.buttons')}</li>
    <li>${window.Buttonizer.translate('settings_window.reset.license.list.groups')}</li>
    <li>${window.Buttonizer.translate('settings_window.reset.license.list.time_schedules')}</li>
    <li>${window.Buttonizer.translate('settings_window.reset.license.list.page_rules')}</li>
    <li>${window.Buttonizer.translate('settings_window.reset.license.list.settings')}</li>
    <li>${window.Buttonizer.translate('settings_window.reset.license.list.published')}</li>
</ul>
</p>
`;

        data.appendChild(info);
        return data;
    }

    // And then?
    andThen()
    {
        let data = document.createElement("div");
        let title = document.createElement("div");
        title.className = 'window-splitter';
        title.innerHTML = window.Buttonizer.translate('settings_window.reset.default_settings.title');
        title.style.marginBottom = '20px';

        data.appendChild(title);

        let info = document.createElement("div");
        info.className = 'settings-window-information';
        info.innerHTML = '<p>'+ window.Buttonizer.translate('settings_window.reset.default_settings.info') +'</p>';

        data.appendChild(info);
        return data;
    }

    // Ready
    ready()
    {
        let data = document.createElement("div");
        let title = document.createElement("div");
        title.className = 'window-splitter';
        title.innerHTML = window.Buttonizer.translate('settings_window.reset.ready.title');
        title.style.marginBottom = '20px';

        data.appendChild(title);

        let info = document.createElement("div");
        info.className = 'settings-window-information';
        info.innerHTML = '<p>'+ window.Buttonizer.translate('settings_window.reset.ready.info') +'</p>';

        data.appendChild(info);


        let button = document.createElement("a");
        button.className = 'button button-red button-centered-reset';
        button.innerHTML = '<i class="fas fa-sync"></i> ' + window.Buttonizer.translate('settings_window.reset.ready.button');
        button.href = 'javascript:void(0)';

        button.addEventListener("click", () => this.countdown());

        data.appendChild(button);
        return data;
    }

    // Countdown
    countdown()
    {
        window.Buttonizer.loader.show(window.Buttonizer.translate('loading.initializing'));

        setTimeout(() => {
            window.Buttonizer.loader.show(window.Buttonizer.translate('loading.resetting'));
            this.reset();
        }, 1500);
    }

    // Okay, reset
    reset()
    {
        jQuery.ajax({
            url: buttonizer_admin.ajax + '?action=buttonizer_backend&item=SaveData&save=reset-buttonizer',
            dataType: 'json',
            method: 'post',
            data: {
                security: buttonizer_admin.security
            },
            success: (data) => {
                if (data.status === "success") {
                    window.Buttonizer.loader.show(window.Buttonizer.translate('loading.finishing'));

                    setTimeout(() => {
                        document.location.reload();
                    }, 500);
                } else {
                    window.Buttonizer.loader.hide();

                    window.Buttonizer.savingError(data.message);
                }
            },
            error: (err, msg, data) => {
                window.Buttonizer.loader.hide();
                window.Buttonizer.savingError(msg);
            }
        });
    }

    error() {

    }
}
// CONCATENATED MODULE: ./src/js/admin/ui/Settings/Settings/Remigrate.js
class Remigrate
{
    constructor()
    {

    }

    build()
    {
        let data = document.createElement("div");
        let info = document.createElement("div");
        info.className = 'settings-window-information';
        info.innerHTML = `<p>We have fixed the migration issues in the last couple updates. 
        If you lost buttons when updating to version 2.0,
        you can try migrating your old buttons again!</p>`;

        data.appendChild(info);

        data.appendChild(this.whatWillHappen());
        data.appendChild(this.why());
        data.appendChild(this.caution());
        data.appendChild(this.ready());

        return data;
    }

    // What will happen
    whatWillHappen()
    {
        let data = document.createElement("div");
        let title = document.createElement("div");
        title.className = 'window-splitter';
        title.innerHTML = 'What happens when I click the red button below?';
        title.style.marginBottom = '20px';

        data.appendChild(title);

        let info = document.createElement("div");
        info.className = 'settings-window-information';
        info.innerHTML = `<p>Buttonizer made a backup of your buttons from version 1.5.x in your database. 
        When you click on the button below, it will convert that backup into buttons suitable for version 2.0.
        It will not remove the backup so that you can still revert back to version 1.5.7 if you want!</p>`;

        data.appendChild(info);
        return data;
    }

    // Why
    why()
    {
        let data = document.createElement("div");
        let title = document.createElement("div");
        title.className = 'window-splitter';
        title.innerHTML = 'Why would I do that?';
        title.style.marginBottom = '20px';

        data.appendChild(title);

        let info = document.createElement("div");
        info.className = 'settings-window-information';
        info.innerHTML = `<p>During the first update to version 2.0, a couple of users lost their settings or buttons!
        Since then we've fixed all the reported migration issues.
        <b>This is a chance for those who lost their buttons to try and see if they can migrate their old buttons again.</b></p>`;

        data.appendChild(info);
        return data;
    }

    // My license
    caution()
    {
        let data = document.createElement("div");
        let title = document.createElement("div");
        title.className = 'window-splitter';
        title.innerHTML = 'Extra! Extra!';
        title.style.marginBottom = '20px';

        data.appendChild(title);

        let info = document.createElement("div");
        info.className = 'settings-window-information';
        info.innerHTML = `
        <p>A little warning! 
        This will remove your current Buttonizer version 2.0 buttons/settings. 
        <b>It will not make a backup!</b></p>`;

        data.appendChild(info);
        return data;
    }

    // And then?
    andThen()
    {
        let data = document.createElement("div");
        let title = document.createElement("div");
        title.className = 'window-splitter';
        title.innerHTML = 'Okay, sounds good. What then?';
        title.style.marginBottom = '20px';

        data.appendChild(title);

        let info = document.createElement("div");
        info.className = 'settings-window-information';
        info.innerHTML = `<p>Buttonizer will go back to the default settings and will behave like a fresh installation. That's all.</p>`;

        data.appendChild(info);
        return data;
    }

    // Ready
    ready()
    {
        let data = document.createElement("div");
        let title = document.createElement("div");
        title.className = 'window-splitter';
        title.innerHTML = 'Okay, I\'m ready!';
        title.style.marginBottom = '20px';

        data.appendChild(title);

        let info = document.createElement("div");
        info.className = 'settings-window-information';
        info.innerHTML = `<p>Press the red button below to re-migrate old data. There will be no more warnings.</p>`;

        data.appendChild(info);


        let button = document.createElement("a");
        button.className = 'button button-red button-centered-reset';
        button.innerHTML = '<i class="fas fa-sync"></i> Re-migrate old data!';
        button.href = 'javascript:void(0)';

        button.addEventListener("click", () => this.countdown());

        data.appendChild(button);
        return data;
    }

    // Countdown
    countdown()
    {
        window.Buttonizer.loader.show("Initializing...");

        setTimeout(() => {
            window.Buttonizer.loader.show("Running migration...");
            this.remigrate();
        }, 1500);
    }

    // Okay, reset
    remigrate()
    {
        jQuery.ajax({
            url: buttonizer_admin.ajax + '?action=buttonizer_backend&item=SaveData&save=remigrate-buttonizer',
            dataType: 'json',
            method: 'post',
            data: {
                security: buttonizer_admin.security
            },
            success: (data) => {
                if (data.status === "success") {
                    window.Buttonizer.loader.show("Finishing...");

                    setTimeout(() => {
                        document.location.reload();
                    }, 500);
                } else {
                    window.Buttonizer.loader.hide();
                    window.Buttonizer.savingError(data.message);
                }
            },
            error: (err, msg, data) => {
                window.Buttonizer.loader.hide();
                window.Buttonizer.savingError(msg);
            }
        });
    }

    error() {

    }
}
// CONCATENATED MODULE: ./src/js/admin/ui/Settings/Settings/ButtonizerMainSettings.js



class ButtonizerMainSettings_ButtonizerMainSettings {

    build()
    {
        let buttonizerSettings = document.createElement("div");
        buttonizerSettings.appendChild(this.showWPAdminTopBarButton());
        buttonizerSettings.appendChild(this.showTooltips());
        buttonizerSettings.appendChild(this.allowRequestsFromSubdomains());

        return buttonizerSettings;
    }

    /**
     * Show the Buttonizer WordPress admin top bar
     * @returns {*}
     */
    showWPAdminTopBarButton() {
        let boolean = new FormToggle({
            state: window.Buttonizer.getSetting('admin_top_bar_show_button', 'true')
        });

        boolean.onToggle((state) => {
            window.Buttonizer.saveSettings({
                admin_top_bar_show_button: state
            }, false);
        });

        // Table
        let adminBarButtonTable = new Table();
        adminBarButtonTable.addColumnHTML("<h2>"+ window.Buttonizer.translate('settings_window.other_settings.admin_button.title') +"</h2>");
        adminBarButtonTable.addColumn(boolean.build(), "", "370");
        adminBarButtonTable.newRow();
        adminBarButtonTable.addColumnText("");
        adminBarButtonTable.addColumnText(window.Buttonizer.translate('settings_window.other_settings.admin_button.info'));

        return adminBarButtonTable.build();
    }

    /**
     * Show the Buttonizer WordPress admin top bar
     * @returns {*}
     */
    showTooltips() {
        let boolean = new FormToggle({
            state: window.Buttonizer.getSetting('show_tooltips')
        });

        boolean.onToggle((state) => {
            window.Buttonizer.saveSettings({
                show_tooltips: state
            }, false);
        });

        // Table
        let tooltipsTable = new Table();
        tooltipsTable.addColumnHTML("<h2>"+ window.Buttonizer.translate('settings_window.other_settings.tooltips.title') +"</h2>");
        tooltipsTable.addColumn(boolean.build(), "", "370");
        tooltipsTable.newRow();
        tooltipsTable.addColumnText("");
        tooltipsTable.addColumnText(window.Buttonizer.translate('settings_window.other_settings.tooltips.info'));

        return tooltipsTable.build();
    }

    /**
     * Show the Buttonizer WordPress admin top bar
     * @returns {*}
     */
    allowRequestsFromSubdomains() {
        let boolean = new FormToggle({
            state: window.Buttonizer.getSetting('allow_subdomains', 'false')
        });

        boolean.onToggle((state) => {
            window.Buttonizer.saveSettings({
                allow_subdomains: state
            }, false);
        });

        // Table
        let adminBarButtonTable = new Table();
        adminBarButtonTable.addColumnHTML("<h2>"+ window.Buttonizer.translate('settings_window.other_settings.subdomain.title') +"</h2>");
        adminBarButtonTable.addColumn(boolean.build(), "", "370");
        adminBarButtonTable.newRow();
        adminBarButtonTable.addColumnText("");
        adminBarButtonTable.addColumnText(window.Buttonizer.translate('settings_window.other_settings.subdomain.info'));

        return adminBarButtonTable.build();
    }
}
// CONCATENATED MODULE: ./src/js/admin/ui/Settings/index.js







/* harmony default export */ var Settings = (class extends SettingsWindow
{
    constructor() {
        super({}, window.Buttonizer.translate('settings_window.title'));
    }

    render()
    {
        this.fontAwesome();
        this.analytics();
        this.mainSettings();
        // this.remigrate();
        this.reset();
    }

    fontAwesome()
    {
        super.addItem(window.Buttonizer.translate('settings_window.icon_library.title'), new IconLibrary().build());
    }

    analytics()
    {
        super.addItem("Google Analytics", new Analytics_Analytics().build());
    }

    mainSettings()
    {
        super.addItem(window.Buttonizer.translate('settings_window.other_settings.title'), new ButtonizerMainSettings_ButtonizerMainSettings().build());
    }

    remigrate()
    {
        super.addItem("Re-migrate", new Remigrate().build());
    }

    reset()
    {
        super.addItem(window.Buttonizer.translate('settings_window.reset.title'), new ResetButtonizer().build());
    }
});

// CONCATENATED MODULE: ./src/js/admin/ui/IconSelector/IconLister.js

/* harmony default export */ var IconLister = (class {
    constructor()
    {
        this.icons = [];
        this.callback = () => {};

        this.searchResultCache = [];

        this.loadIcons();
    }

    /**
     * Create callback
     * @param callback
     */
    onReady(callback)
    {
        this.callback = callback;
    }

    /**
     * Get iconlist
     * @returns {Array|*}
     */
    getIcons()
    {
        return this.icons;
    }

    /**
     *
     * @param keyword
     */
    search(keyword)
    {
        // Did we cache the results?
        if(typeof this.searchResultCache[keyword] !== "undefined")
        {
            return this.searchResultCache[keyword];
        }

        // Empty list
        let iconList = [];

        for(let i = 0; i < this.icons.length; i++) {
            let iconData = this.icons[i];

            // Search in name or in search terms
            if(iconData.searchTerms.indexOf(keyword) >= 0 || iconData.name.indexOf(keyword) >= 0)
            {
                iconList.push(iconData);
            }
        }

        // Cache the result
        this.searchResultCache[keyword] = iconList;

        return iconList;
    }

    /**
     * Load icon library that is used for this website
     */
    loadIcons()
    {
        // Reset search result cache
        this.searchResultCache = [];
        this.icons = [];

        // Get new library
        let library = window.Buttonizer.settings.icon_library;
        let version = window.Buttonizer.settings.icon_library_version;

        jQuery.ajax({
            url: buttonizer_admin.assets + '/icon_definitions/' + library + '.' + version + '.json?buttonizer-icon-cache=' + window.Buttonizer.version,
            dataType: 'json',
            method: 'get',
            success: (data) => {
                this.icons = data;

                console.log("Finished loading icon library '"+ library +"' version " + version);

                // Trigger callback
                this.callback();
            },
            error: () => {
                console.error("Could not load icon library '"+ library +"' version " + version)
            }
        });
    }
});
// CONCATENATED MODULE: ./src/js/admin/ui/IconSelector/index.js



/* harmony default export */ var IconSelector = (class {
    constructor()
    {
        // Icon selector
        this.element = null;
        this.itemList = null;
        this.searchList = null;
        this.searchInput = null;
        this.fontAwesomeStylesheet = null;
        this.iframeContent = null;

        this.mayClose();

        // Build element
        this.build();

        // Load iconList
        this.iconListener = new IconLister();

        // Icon library
        this.iconLibrary = new IconLibrary();

        this.currentInput = null;
        this.currentInputJ = null;

        this.searchTimeout = setTimeout(() => {}, 1);

        setInterval(() => this.stayOnPlace(), 100);

        this.firstBuild = true;
        this.opened = false;

    }

    build() {
        let iconSelector = document.createElement("div");
        iconSelector.className = 'buttonizer-icon-selector';

        // Searchbar
        let searchbar = document.createElement("div");
        searchbar.className = 'icon-selector-searchbar';

        let searchInput = document.createElement("input");
        searchInput.className = 'icon-selector-searchbar';
        searchInput.placeholder = window.Buttonizer.translate('utils.search_icons');
        searchInput.addEventListener("keyup", () => {
            // First clear timeout
            clearTimeout(this.searchTimeout);

            // Then update it
            this.searchTimeout = setTimeout(() => {
                this.search(searchInput.value);
            }, 200);
        });

        this.searchInput = searchInput;
        searchbar.appendChild(this.searchInput);

        iconSelector.appendChild(searchbar);

        let iframe = document.createElement('iframe');
        iframe.height = '350px';
        iframe.width = '100%';
        iframe.src = 'about:blank';
        iframe.frameborder = 0;

        iframe.addEventListener("load", () => {
            iframe.contentDocument.querySelector('head').appendChild(window.Buttonizer.iconLibraryStylesheet);

            let stylesheet = document.createElement('style');
            stylesheet.innerText = `
body, html {
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 14px;
}

.icon-selector-list {
  border-top: 1px solid #e7e7e7;
  overflow: auto;
  text-align: center;
}

.icon-selector-list a {
  background-color: #f5f5f5;
  color: #464646;
  font-size: 19px;
  width: 16%;
  height: 50px;
  line-height: 50px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  outline: none;
}

.icon-selector-list a:hover {
  background-color: #e7e7e7;
}

.icon-selector-list a:focus {
  box-shadow: none !important;
}

.fa, .fal, .far, .fas, .fab {
    line-height: 50px !important;
}`;

            iframe.contentDocument.querySelector('head').appendChild(stylesheet);

            // Item list
            this.itemList = document.createElement("div");
            this.itemList.className = 'icon-selector-list';
            iframe.contentDocument.body.appendChild(this.itemList);

            // Search list
            this.searchList = document.createElement("div");
            this.searchList.className = 'icon-selector-list search-list';
            this.searchList.style.display = 'none';
            iframe.contentDocument.body.appendChild(this.searchList);
        });

        this.iframeContent = iframe;
        iconSelector.appendChild(this.iframeContent);

        this.element = iconSelector;
        document.body.appendChild(this.element);
    }

    /**
     * Search
     *
     * @param keyword
     */
    search(keyword)
    {
        if(keyword === '')
        {
            this.searchList.style.display = 'none';
            this.itemList.style.display = 'block';
            this.iframeContent.height = '350px';
            return;
        }

        this.searchList.style.display = 'block';
        this.itemList.style.display = 'none';

        let searchList = this.iconListener.search(keyword);

        if(searchList.length > 0) {
            this.searchList.innerHTML = '';
            this.showIcons(this.searchList, searchList);

            if(jQuery(this.searchList).height() > 350) {
                this.iframeContent.height = '350px';
            }else {
                this.iframeContent.height = (jQuery(this.searchList).height() + 5) + 'px';
            }
        }else {
            this.iframeContent.height = '50px';
            this.searchList.innerHTML = `<p>${window.Buttonizer.translate('utils.search_not_found')} <b>${keyword}</b></p>`;
        }
    }

    /**
     * Rebuild icon list
     */
    rebuild()
    {
        this.itemList.innerHTML = '';
        this.searchList.innerHTML = '';

        this.showIcons(this.itemList, this.iconListener.getIcons());
    }

    showIcons(element, icons)
    {
        // Get through all icon types
        for(let i = 0; i < icons.length; i++)
        {
            let iconData = icons[i];

            // Get children
            for(let b = 0; b < iconData.icons.length; b++)
            {
                let iconLink = document.createElement("a");
                iconLink.innerHTML = `<i class="${iconData.icons[b].icon}"></i>`;
                iconLink.href = 'javascript:void(0)';
                iconLink.title = iconData.name + " ("+ iconData.icons[b].type +")";

                // Update icon
                iconLink.addEventListener("click", () => {
                    if(this.currentInput !== null)
                    {
                        this.currentInput.value = iconData.icons[b].icon;

                        // Fire event
                        if ("createEvent" in document) {
                            let evt = document.createEvent("HTMLEvents");
                            evt.initEvent("change", false, true);
                            this.currentInput.dispatchEvent(evt);
                        }
                        else {
                            this.currentInput.fireEvent("onchange");
                        }

                        this.close();
                    }
                });

                element.appendChild(iconLink);
            }
        }
    }

    /**
     * Open icon selector
     * @param element
     */
    open(element)
    {
        this.currentInput = element;
        this.currentInputJ = jQuery(this.currentInput);

        // Empty value and focus on search input
        this.searchInput.value = '';

        this.searchList.style.display = 'none';
        this.itemList.style.display = 'block';

        // Show icon window
        this.element.style.display = 'block';

        setTimeout(() => {
            this.searchInput.focus();
            this.opened = true;

            this.stayOnPlace();

            setTimeout(() => {
                this.element.className = 'buttonizer-icon-selector selector-animated';

                if(this.firstBuild) {
                    this.firstBuild = false;
                    this.rebuild();
                }
            }, 250);
        }, 50);
    }

    /**
     * Close the window
     */
    mayClose()
    {
        document.querySelector("body").addEventListener("click", (e) => {
            if(!this.opened) {
                return;
            }

            if(e.target.className !== "icon-selector-searchbar")
            {
                this.element.style.display = 'none';
                this.element.className = 'buttonizer-icon-selector';
                this.opened = false;
            }
        });

        setTimeout(() => {
            document.querySelector("#buttonizer-iframe").contentDocument.addEventListener("click", (e) => {
                if(!this.opened) {
                    return;
                }
    
                if(e.target.className !== "icon-selector-searchbar")
                {
                    this.element.style.display = 'none';
                    this.element.className = 'buttonizer-icon-selector';
                    this.opened = false;
                }
            })
        }, 500);
    }

    /**
     * Close icon selector
     */
    close()
    {
        this.element.style.display = 'none';
        this.opened = false;
    }

    stayOnPlace()
    {
        if(this.opened)
        {
            let calculateTop = ((this.currentInputJ.offset().top + this.currentInputJ.height()) + 10) + 'px';

            if(calculateTop !== this.element.style.top)
            {
                this.element.style.top = calculateTop;
                this.element.style.left = this.currentInputJ.offset().left + 'px';
            }
        }
    }
});
// EXTERNAL MODULE: ./node_modules/assert/assert.js
var assert = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/timers-browserify/main.js
var main = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/admin/ui/Tour.js



const introJs = __webpack_require__(11);

class Tour_Tour {
    constructor() {
        this.tour = null;
        this.amount = window.Buttonizer.buttonGroups[0].groupObject.querySelectorAll('.group-button').length;
        this.single = '';

        this.setupStep5 = false;
        this.setupStep6 = false;
        this.setupStep7 = false;
        this.setupStep10 = false;
        this.setupStep11 = false;

        this.setup2Step4 = false;
        this.setup2Step6 = false;
        this.setup2Step7 = false;
        this.setup2Step12 = false;
    }

    build() {
        let tour = this.intro();
        tour.onchange((event) => this.conditions(tour._currentStep, event, 1));
        tour.start();
        tour.onbeforeexit(() => this.onExit(tour._currentStep, 1));
        tour.onexit(() => {
            this.tour = null;
            this.amount = window.Buttonizer.buttonGroups[0].groupObject.querySelectorAll('.group-button').length;
            this.setupStep5 = false;
            this.setupStep6 = false;
            this.setupStep7 = false;
            this.setupStep10 = false;
            this.setupStep11 = false;
    
            this.setup2Step4 = false;
            this.setup2Step6 = false;
            this.setup2Step7 = false;
            this.setup2Step12 = false;

            if(tour._currentStep === 20) {
                window.Buttonizer.bar.groupHolder.querySelector('.create-new-button').click();
            }
        });

    }
    getAmount() {
        this.amount = window.Buttonizer.buttonGroups[0].groupObject.querySelectorAll('.group-button').length;

        return this.amount; 
    }

    // Custom conditions for Buttonizer tour
    conditions(step, event, part) {

        // console.log(step);
        this.amount = window.Buttonizer.buttonGroups[0].groupObject.querySelectorAll('.group-button').length;

        // Part 1 of tour
        if(part === 1) {

            if(step === 0) {
                if(!window.Buttonizer.bar.settingContainer.classList.contains('hidden')){
                    window.Buttonizer.bar.settingContainer.querySelector('.back-button').click();
                }
                // console.log(this.tour._introItems[11].element)
                // setTimeout(() => {
                //     this.tour._introItems[11].element =  window.Buttonizer.bar.groupHolder.querySelector('.button-group-holder');
                //     console.log(this.tour._introItems[11].element)

                // }, 300);
            }
            // Buttonizer menu button
            else if(step === 4) {

                // If it's been step 5 don't listen
                if(!this.setupStep5) {
                    this.setupStep5 = true;
                        
                    // Check if user clicked button
                    let optionsButton = document.querySelector('.options-button');
                    optionsButton.addEventListener('click', () => {
                        if(this.tour !== null) {
                            this.tour.goToStep(6);
                        }
                    });
                }
    
                // If coming back from step 5, hide menu again
                if(this.tour._direction === 'backward')
                {
                    if(!document.querySelector('.options-window').hasAttribute('hidden')) {
                        document.querySelector('.options-window').setAttribute("hidden", "");
                    }
    
                }
            }
    
            // Buttonizer menu
            else if(step === 5) {
    
                // If menu is hidden, show menu
                if(document.querySelector('.options-window').hasAttribute("hidden"))
                {
                    document.querySelector('.options-window').removeAttribute("hidden");
                }
                
                // If coming back, remove disable class
                if(this.tour._direction === 'backward')
                {
                    document.querySelector('.options-window').classList.remove('disabled');
    
                }
            }

            //
            else if(step === 6) {
                if(document.querySelector('.options-window').hasAttribute("hidden"))
                {
                    document.querySelector('.options-window').removeAttribute("hidden");
                }
                
                document.querySelector('.options-window').setAttribute('style', 'z-index:9999999 !important');
                document.querySelector('.options-window').classList += ' disabled';
                
                let options = window.Buttonizer.topBar.optionsWindow.querySelector('.single-button');
                options.style.pointerEvents = 'all';
                options.style.cursor = 'pointer';
    
                if(!this.setupStep7) {
                    this.setupStep7 = true;    

                    // Check if user followed instruction
                    options.addEventListener('click', () => {
                        if(this.tour !== null) {
                            this.tour.nextStep();
                        }
                    });
                }
    
                if(this.tour._direction === 'backward')
                {
                    window.Buttonizer.settingsWindow.title.parentElement.parentElement.style.display = 'none';;
                }
    
            }
            else if (step === 7) {
                document.querySelector('.options-window').removeAttribute('style', 'z-index:9999999 !important');
                document.querySelector('.options-window').classList.remove('disabled');
    
                window.Buttonizer.settingsWindow.title.parentElement.parentElement.style.display = 'block';;
                window.Buttonizer.settingsWindow.title.parentElement.parentElement.setAttribute('style', 'z-index:9999999 !important;pointer-events: none;');
    
                if(!document.querySelector('.options-window').hasAttribute("hidden"))
                {
                    document.querySelector('.options-window').setAttribute("hidden", '');
                }
    
            }
            else if (step === 8) {
                window.Buttonizer.settingsWindow.title.parentElement.parentElement.removeAttribute('style', 'z-index:9999999 !important');
                window.Buttonizer.settingsWindow.title.parentElement.parentElement.style.display = 'none';;
    
            }
            else if (step === 9) {
                if(!this.setupStep10) {
                    this.setupStep10 = true;
    
                    let options = window.Buttonizer.bar.groupHolder.querySelector('.button-group-holder').querySelector('.group-style');
    
                    // Check if user followed instruction
                    options.addEventListener('click', () => {
                        if(this.tour !== null && this.setupStep11 === false) {
                            this.tour.nextStep();
                        }
                    });
                }
                
                if(this.tour._direction === 'backward')
                {
                    this.setupStep11 = false;

                    Object(main["setTimeout"])(() => {
                        document.querySelector('.introjs-tooltipReferenceLayer').setAttribute('style', 'width: 50px; height: 60px; top: 67px; left: 276px;');
                        document.querySelector('.introjs-helperLayer').setAttribute('style', 'width: 50px; height: 60px; top: 67px; left: 276px;');
                    }, 100);
                    window.Buttonizer.bar.settingContainer.querySelector('.back-button').click();

                }
            }
            else if(step === 10) {
                if(this.tour._direction === 'forward') {
                    if(this.setupStep11 == false) {
                        this.setupStep11 = true;

                        window.Buttonizer.buttonGroups[0].groupHolder.toggleStyling()
                    }
                    this.tour._introItems[11].element = jQuery('.button-group-styling:visible')[0].querySelector('.style-top');
                    this.tour._introItems[13].element = jQuery('.button-group-styling:visible')[0].querySelector('.style-button');
                    this.tour._introItems[14].element = jQuery('.button-group-styling:visible')[0].querySelector('.style-icon');
                    this.tour._introItems[15].element = jQuery('.button-group-styling:visible')[0].querySelector('.style-label');
                    // console.log(this.tour._introItems[11]);
                    Object(main["setTimeout"])(() => {
                        document.querySelector('.introjs-tooltipReferenceLayer').setAttribute('style', 'width: 385px; height: 966px; top: 46px; left: -5px;');
                    }, 100);
                    window.Buttonizer.bar.settingContainer.querySelector('.back-button').style.pointerEvents = 'none';
                }

            }
            else if (step === 12) {
                if(this.amount === 1) {
                    if(this.tour._direction === 'forward') {
                        Object(main["setTimeout"])(() => {
                            this.tour.nextStep();
                            
                        }, 100);
                    }
                    else if(this.tour._direction === 'backward') {
                        Object(main["setTimeout"])(() => {
                            this.tour.previousStep();
                            
                        }, 100);
                    }

                }
            }
            else if(step === 15) {
                if(this.tour._direction === 'backward') {
                    window.Buttonizer.buttonGroups[0].groupHolder.toggleStyling()
                    Object(main["setTimeout"])(() => {
                        document.querySelector('.introjs-tooltipReferenceLayer').setAttribute('style', 'width: 371px; height: 263px; top: 688px; left: 2px;');
                    }, 100);
                }
            }
            else if(step === 16 || step === 17 || step === 18 || step === 19) {
                window.Buttonizer.bar.settingContainer.querySelector('.back-button').click();
                
                let options = window.Buttonizer.bar.groupHolder.querySelector('.create-new-button');
    
                // Check if user followed instruction
                options.addEventListener('click', () => {
                    if(this.tour !== null) {
                        this.tour.goToStep(21);
                    }
                });

                if(step === 16) {
                    if(this.tour._direction = 'forward') {
                        if(this.getAmount() === 1) {
                            window.Buttonizer.buttonGroups[0].groupHolder.quickMenu.querySelector('.convert-button').click();
                        }

                        if(!window.Buttonizer.buttonGroups[0].groupObject.classList.contains('opened')) {
                            // window.Buttonizer.buttonGroups[0].groupObject.classList += ' opened';
                            // window.Buttonizer.buttonGroups[0].groupBody.style.display = 'block';
                            window.Buttonizer.buttonGroups[0].groupHolder.revealButtons();
                            
                        }
                        Object(main["setTimeout"])(() => {
                            document.querySelector('.introjs-tooltipReferenceLayer').setAttribute('style', document.querySelector('.introjs-tooltipReferenceLayer').getAttribute('style') + 'width: 333px !important; height: 48px !important; left: 36px !important;');
                            document.querySelector('.introjs-helperLayer').setAttribute('style', document.querySelector('.introjs-tooltipReferenceLayer').getAttribute('style') + 'width: 333px !important; height: 48px !important; left: 36px !important;');
                        }, 100);
                    }
                }
            }
            else if(step === 20) {
                Object(main["setTimeout"])(() => {
                    this.tour.exit();
                }, 100) 
            }
        }



        else if(part === 2) {
            let newButt = window.Buttonizer.buttonGroups[0].groupBody.querySelectorAll('.buttonizer-button-group')[window.Buttonizer.buttonGroups[0].groupBody.querySelectorAll('.buttonizer-button-group').length-1];

            if(step === 0) {
                
            }
            else if(step === 2) {
                Object(main["setTimeout"])(() => {
                    document.querySelector('.introjs-tooltipReferenceLayer').setAttribute('style', document.querySelector('.introjs-tooltipReferenceLayer').getAttribute('style') + 'left: 276px !important;');
                }, 100);
            }
            else if(step === 2) {
                if(this.tour._direction === 'backward') {
                    newButt.querySelector('.group-title').style.pointerEvents = 'all';
                    newButt.querySelector('.mobile-desktop').style.pointerEvents = 'all';
                }
            }
            else if(step === 3) {
                if(newButt.querySelector('.group-holder-quick-menu').style.visibility = 'visible') {
                    newButt.querySelector('.group-holder-quick-menu').style.visibility = 'hidden';
                    newButt.querySelector('.group-holder-quick-menu').style.top = '45px';
                    newButt.querySelector('.group-holder-quick-menu').style.opacity = '0';
                }
                Object(main["setTimeout"])(() => {
                    document.querySelector('.introjs-tooltipReferenceLayer').setAttribute('style', document.querySelector('.introjs-tooltipReferenceLayer').getAttribute('style'));
                }, 100);
                newButt.querySelector('.group-title').style.pointerEvents = 'none';
                newButt.querySelector('.mobile-desktop').style.pointerEvents = 'none';

                if(!this.setup2Step4) {
                    this.setup2Step4 = true

                    newButt.querySelector('.holder-button').addEventListener('click', () => {
                        if(this.tour !== null) {
                            this.tour.nextStep()
                        }
                    });
                }
                newButt.querySelector('.holder-button').style.backgroundColor = 'rgb(255, 255, 255)'

            }
            else if(step === 4) {
                if(newButt.querySelector('.group-holder-quick-menu').style.visibility = 'hidden') {
                    newButt.querySelector('.group-holder-quick-menu').style.visibility = 'visible';
                    newButt.querySelector('.group-holder-quick-menu').style.top = '50px';
                    newButt.querySelector('.group-holder-quick-menu').style.opacity = '1';
                }
                if(this.tour._direction === 'backward') {
                    let options = newButt.querySelector('.fa-wrench').parentElement;
                    options.style.pointerEvents = 'none';
                    
                    newButt.querySelector('.group-holder-quick-menu').style.pointerEvents = 'none';
                }
                else if(this.tour._direction === 'forward') {
                    newButt.querySelector('.group-holder-quick-menu').style.pointerEvents = 'none';
                }

                if(this.amount >= 8) {
                    Object(main["setTimeout"])(() => {
                        document.querySelector('.introjs-tooltipReferenceLayer').setAttribute('style', document.querySelector('.introjs-tooltipReferenceLayer').getAttribute('style') + 'top: 684px !important;');
                    }, 100);
                    // console.log('more')
                }
                // console.log(this.amount)
            }
            else if(step === 5) {
                if(this.tour._direction === 'backward') {
                    this.setup2Step7 = false;
                    newButt.querySelector('.group-holder-quick-menu').style.visibility = 'visible';
                    newButt.querySelector('.group-holder-quick-menu').style.top = '50px';
                    newButt.querySelector('.group-holder-quick-menu').style.opacity = '1';
                    window.Buttonizer.bar.settingContainer.querySelector('.back-button').click();

                    Object(main["setTimeout"])(() => {
                        document.querySelector('.introjs-tooltipReferenceLayer').setAttribute('style', document.querySelector('.introjs-tooltipReferenceLayer').getAttribute('style') + 'left: 36px !important;');
                    }, 100);
                }

                if(this.amount >= 8 ) {
                    Object(main["setTimeout"])(() => {
                        document.querySelector('.introjs-tooltipReferenceLayer').setAttribute('style', document.querySelector('.introjs-tooltipReferenceLayer').getAttribute('style') + 'top: 692px !important;');
                    }, 100);
                }

                newButt.querySelector('.group-holder-quick-menu').setAttribute('style' , newButt.querySelector('.group-holder-quick-menu').getAttribute('style')+'z-index: 99999999 !important;');

                let options = newButt.querySelector('.fa-wrench').parentElement;
                options.style.pointerEvents = 'all';
                options.style.cursor = 'pointer';

                if(!this.setup2Step6) {
                    this.setup2Step6 = true;

                    newButt.querySelector('.fa-wrench').parentElement.addEventListener('click', () => {
                        if(this.tour !== null && this.setup2Step7 === false) {
                            this.tour.nextStep();
                        }
                    });
                }
            }
            else if(step === 6) {

                    // if(newButt.querySelector('.button-group-styling').style.display = 'none') {
                    //     newButt.querySelector('.button-group-styling').style.display = 'block'
                    // }
                    if(this.tour._direction === 'forward') {
                        if(this.setup2Step7 == false) {
                            this.setup2Step7 = true
                            newButt.querySelector('.settings').click();

                        }
                        Object(main["setTimeout"])(() => {
                            document.querySelector('.introjs-tooltipReferenceLayer').setAttribute('style', 'width: 385px; height: 966px; top: 46px; left: -5px;');
                        }, 100);
                    }

                    newButt.querySelector('.group-holder-quick-menu').style.visibility = 'hidden';
                    newButt.querySelector('.group-holder-quick-menu').style.top = '45px';
                    newButt.querySelector('.group-holder-quick-menu').style.opacity = '0';
            }
            else if(step === 10) {
                newButt.querySelector('.settings').click();

                if(this.tour._direction === 'backward') {
                    Object(main["setTimeout"])(() => {
                        document.querySelector('.introjs-tooltipReferenceLayer').setAttribute('style', 'width: 371px; height: 224px; top: 630px; left: 2px;');
                    }, 100);
                }
            }
            else if(step === 11) {
                window.Buttonizer.bar.settingContainer.querySelector('.back-button').click();
                if(!this.setup2Step12) {
                    this.setup2Step12 = true;
                    
                    window.Buttonizer.topBar.topBarElement.querySelector('.revert-save').addEventListener('click', () => {
                        if(this.tour !== null) {
                            this.tour.nextStep();
                        }
                    })
                }
            }
        }
    }
    
    /**
     * OnExit IntoJs
     * 
     */
    onExit(step, part) {
        this.tour = null;
        this.amount = window.Buttonizer.buttonGroups[0].groupObject.querySelectorAll('.group-button').length;
        this.setupStep5 = false;
        this.setupStep6 = false;
        this.setupStep7 = false;
        this.setupStep10 = false;
        this.setupStep11 = false;

        this.setup2Step4 = false;
        this.setup2Step6 = false;
        this.setup2Step7 = false;
        this.setup2Step12 = false;

        if(part === 1) {
            // Remove disable and hide menu on exit
            if(window.Buttonizer.bar.settingContainer.querySelector('.back-button').style.pointerEvents = 'none') {
                window.Buttonizer.bar.settingContainer.querySelector('.back-button').style.pointerEvents = 'all';
            }
            if(step === 5) {
                document.querySelector('.options-window').setAttribute("hidden", "");
            }
            else if(step === 6) {
                document.querySelector('.options-window').classList.remove('disabled');
            }
            else if(step === 7) {
                window.Buttonizer.settingsWindow.title.parentElement.parentElement.removeAttribute('style', 'z-index:9999999 !important;pointer-events: none;');
            }
            else if (step === 20) {
                // console.log('test');
                Object(main["setTimeout"])(() => {
                    let tour = this.intro2();
    
                    tour.onchange((event) => this.conditions(tour._currentStep, event, 2));
                    tour.start();
                    tour.onbeforeexit(() => this.onExit(tour._currentStep, 2));
                    tour.onexit(() => {
                        this.tour = null;
                        this.amount = window.Buttonizer.buttonGroups[0].groupObject.querySelectorAll('.group-button').length;
                        this.setupStep5 = false;
                        this.setupStep6 = false;
                        this.setupStep7 = false;
                        this.setupStep10 = false;
                        this.setupStep11 = false;
                
                        this.setup2Step4 = false;
                        this.setup2Step6 = false;
                        this.setup2Step7 = false;
                        this.setup2Step12 = false;
            
                        if(tour._currentStep === 20) {
                            window.Buttonizer.bar.groupHolder.querySelector('.create-new-button').click();
                        }
                    });
                }, 300);
            }
        }
        else if(part === 2) {
            let newButt = window.Buttonizer.buttonGroups[0].groupBody.querySelectorAll('.buttonizer-button-group')[window.Buttonizer.buttonGroups[0].groupBody.querySelectorAll('.buttonizer-button-group').length-1];

            if(step === 3) {
                newButt.querySelector('.group-title').style.pointerEvents = 'all';
                newButt.querySelector('.mobile-desktop').style.pointerEvents = 'all';
            }
            if(newButt.querySelector('.group-holder-quick-menu').hasAttribute('style')) {
                newButt.querySelector('.group-holder-quick-menu').setAttribute('style', '');
            }
            
            if(newButt.querySelector('.group-holder-quick-menu').classList.contains('disabled')) {
                newButt.querySelector('.group-holder-quick-menu').classList.remove('disabled')
            }
            if(newButt.querySelector('.group-holder-quick-menu').style.pointerEvents = 'none') {
                newButt.querySelector('.group-holder-quick-menu').style.pointerEvents = 'all';
            }
            if(newButt.querySelector('.group-title').style.pointerEvents = 'none') {
                newButt.querySelector('.group-title').style.pointerEvents = 'all';
            }
            if(newButt.querySelector('.mobile-desktop').style.pointerEvents = 'none') {
                newButt.querySelector('.mobile-desktop').style.pointerEvents = 'all';
            }
            if(newButt.querySelector('.fa-wrench').parentElement.style.pointerEvents = 'none') {
                newButt.querySelector('.fa-wrench').parentElement.style.pointerEvents = 'all';
            }
        }
    }
    /**
     * Start Buttonizer tour 2
     * 
     */
    intro() {
        
        this.tour = introJs();

        this.tour.setOptions({
            showBullets: false,
            exitOnOverlayClick: false,
            skipLabel: window.Buttonizer.translate('welcome.exit_tour'),
            doneLabel: window.Buttonizer.translate('welcome.exit_tour'),
            nextLabel: window.Buttonizer.translate('common.next') + ' →',
            prevLabel: '← ' + window.Buttonizer.translate('common.previous'),
            scrollToElement: true,
            showStepNumbers: false,
            disableInteraction: true
        });

        this.tour.setOptions({
            steps: [
            // STEP 0
            {
                intro: "<h2><b>"+ window.Buttonizer.translate('welcome.tour-steps.step-0.title') +"</b></h2> " +
                    window.Buttonizer.translate('welcome.tour-steps.step-0.description') + '<br /><br />' +
                    window.Buttonizer.translate('welcome.tour-steps.step-0.keyboard'),
                position: 'left',
                tooltipClass: 'max-width'
            },
            // STEP 1
            {
                element: document.querySelector('.buttonizer-bar'),
                intro: "<h2><b>"+ window.Buttonizer.translate('welcome.tour-steps.step-1.title') +"</b></h2> " + window.Buttonizer.translate('welcome.tour-steps.step-1.description'),
                position: 'left'
            },
            // STEP 2
            {
                element: document.querySelector('.buttonizer-frame'),
                intro: "<h2><b>"+ window.Buttonizer.translate('welcome.tour-steps.step-2.title') +"</b></h2> " + window.Buttonizer.translate('welcome.tour-steps.step-2.description'),
                position: 'left'
            },
            // STEP 3
            {
                element: document.querySelector('.buttonizer-topbar'),
                intro: "<h2><b>"+ window.Buttonizer.translate('welcome.tour-steps.step-3.title') +"</b></h2> " + window.Buttonizer.translate('welcome.tour-steps.step-3.description') + `

                <h4 style="font-weight:400;text-align:left;padding:0 15px">
                1. ${window.Buttonizer.translate('welcome.tour-steps.step-3.list.close')}<br>
                2. ${window.Buttonizer.translate('welcome.tour-steps.step-3.list.revert')}<br>
                3. ${window.Buttonizer.translate('welcome.tour-steps.step-3.list.publish')}<br>
                4. ${window.Buttonizer.translate('welcome.tour-steps.step-3.list.general-settings')}
                </h4>`,
                position: 'left',
                tooltipClass: 'middle',
            },
            // STEP 4
            {
                element: document.querySelector('.buttonizer-topbar .options-button'),
                intro: window.Buttonizer.translate('welcome.tour-steps.step-4.description'),
                position: 'left',
                disableInteraction: false,
            },
            // STEP 5
            {
                element: document.querySelector('.options-window'),
                intro: "<h2><b>"+ window.Buttonizer.translate('welcome.tour-steps.step-5.title') +"</b></h2>" +
                    "<b>"+ window.Buttonizer.translate('bar.menu.knowledgebase.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-5.list.knowledgebase') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('bar.menu.support.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-5.list.support') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('bar.menu.community.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-5.list.community') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('bar.menu.account.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-5.list.account') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('bar.menu.upgrade.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-5.list.upgrade') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('bar.menu.affiliation.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-5.list.affiliation') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('bar.menu.options.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-5.list.options'),
                position: 'left',
                tooltipClass: 'wider',
            },
            // STEP 6
            {
                element: window.Buttonizer.topBar.optionsWindow.querySelector('.single-button'),
                intro: window.Buttonizer.translate('welcome.tour-steps.step-6.description') + ' &rarr;',
                position: 'left',
                disableInteraction: false,
                highlightClass: 'introjs-custom-hidden',
            },
            // STEP 7
            {
                element: window.Buttonizer.settingsWindow.title.parentElement.parentElement.querySelector('.window-menu'),
                intro:
                    "<h2><b>"+ window.Buttonizer.translate('welcome.tour-steps.step-7.title') +"</b></h2>" +
                    "<b>"+ window.Buttonizer.translate('settings_window.icon_library.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-7.list.icon-library') +"<br>" +
                    "<b>Google Analytics:</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-7.list.google-analytics') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings_window.reset.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-7.list.reset') +"<br>",
                position: 'left',
                highlightClass: 'introjs-custom-hidden',
                tooltipClass: 'wider',
            },
            // STEP 8
            {
                element: window.Buttonizer.bar.groupHolder.querySelector('.button-group-holder'),
                intro:
                    "<h2><b>"+ window.Buttonizer.translate('welcome.tour-steps.step-8.title') +"</b></h2>" +
                    window.Buttonizer.translate('welcome.tour-steps.step-8.multiple_buttons') + "<br><br>" +
                    window.Buttonizer.translate('welcome.tour-steps.step-8.visible') + "<br><br>" +
                    window.Buttonizer.translate('welcome.tour-steps.step-8.position') + "<br>",
                position: 'right',
                tooltipClass: 'max-width'
            },
            // STEP 9
            {
                element: window.Buttonizer.bar.groupHolder.querySelector('.button-group-holder').querySelector('.group-style'),
                intro: '<b>&larr;</b> ' + window.Buttonizer.translate('welcome.tour-steps.step-9.description'),
                position: 'right',
                disableInteraction: false,
            },
            // STEP 10
            {
                element: window.Buttonizer.bar.settingContainer,
                intro:
                    "<h2><b>"+ window.Buttonizer.translate('welcome.tour-steps.step-10.title') +"</b></h2>" +
                    window.Buttonizer.translate('welcome.tour-steps.step-10.description') + "<br><br>" +
                    window.Buttonizer.translate('welcome.tour-steps.step-10.action'),
                position: 'right',
                disableInteraction: false,
                highlightClass: 'introjs-custom-gone',
                scrollTo: false,
                tooltipClass: 'intojs-foff-height',
            },
            // GROUP  OPTIONS
            // STEP 11
            {
                element: this.getAmount() === 1 ? jQuery('.button-group-styling')[1].querySelector('.style-top') : window.Buttonizer.buttonGroups[0].stylingObject.querySelector('.style-top'),
                intro:
                    "<h2><b>"+ window.Buttonizer.translate('welcome.tour-steps.step-11.title') +"</b></h2>" +
                    "<b>"+ window.Buttonizer.translate('settings.menu_position.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-11.position') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.show_mobile_desktop.title') +"</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-11.visibility') +"<br>",
                position: 'right',
                disableInteraction: false,
                scrollTo: false,
                highlightClass: 'introjs-custom-gone',
                tooltipClass: 'wider',
            },
            // STEP 12
            {
                element: this.getAmount() === 1 ? jQuery('.button-group-styling')[1].querySelector('.style-menu') : window.Buttonizer.buttonGroups[0].stylingObject.querySelector('.style-menu'),
                intro:
                    "<h2><b>"+ window.Buttonizer.translate('welcome.tour-steps.step-12.title') +"</b></h2>" +
                    "<b>"+ window.Buttonizer.translate('settings.start_opened.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-12.start_opened') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.menu_style.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-12.menu_style') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.menu_animation.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-12.animation') +"<br>",
                position: 'right',
                disableInteraction: false,
                scrollTo: false,
                highlightClass: 'introjs-custom-gone',
                tooltipClass: 'wider',
            },
            // STEP 13
            {
                element: this.getAmount() === 1 ? jQuery('.button-group-styling')[1].querySelector('.style-button') : window.Buttonizer.buttonGroups[0].stylingObject.querySelector('.style-button'),
                intro:
                    "<h2><b>"+ window.Buttonizer.translate('welcome.tour-steps.step-13.title') +"</b></h2>" +
                    "<b>"+ window.Buttonizer.translate('settings.background_color.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-13.background_color') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.border_radius.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-13.border_radius') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.background_image.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-13.background_image') +"<br>",
                position: 'right',
                disableInteraction: false,
                scrollTo: false,
                highlightClass: 'introjs-custom-gone',
                tooltipClass: 'wider',
            },
            // STEP 14
            {
                element: this.getAmount() === 1 ? jQuery('.button-group-styling')[1].querySelector('.style-icon') : window.Buttonizer.buttonGroups[0].stylingObject.querySelector('.style-icon'),
                intro:
                    "<h2><b>"+ window.Buttonizer.translate('settings.setting_categories.group_icon') +"</b></h2>" +
                    "<b>"+ window.Buttonizer.translate('settings.icon_or_image.title') +":</b> "+ window.Buttonizer.translate('settings.icon_or_image.description') +"<br>" +
                    "<h2 style=\"margin: 1em 0 0 0;\"><b>"+ window.Buttonizer.translate('settings.icon.title') +"</b></h2>" +
                    "<b>"+ window.Buttonizer.translate('settings.icon.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-14.icon') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.icon_color.title') +":</b> "+ window.Buttonizer.translate('settings.icon_color.description') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.icon_size.title') +":</b> "+ window.Buttonizer.translate('settings.icon_size.description') +"<br>" +
                    "<h2 style=\"margin: 1em 0 0 0;\"><b>"+ window.Buttonizer.translate('utils.image') +"</b></h2>" +
                    "<b>"+ window.Buttonizer.translate('settings.icon_image_select.title') +":</b> "+ window.Buttonizer.translate('settings.icon_image_select.description') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.icon_image_border_radius.title') +":</b> "+ window.Buttonizer.translate('settings.icon_image_border_radius.description') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.icon_image_size.title') +":</b> "+ window.Buttonizer.translate('settings.icon_image_size.description') +"<br>",

                position: 'right',
                disableInteraction: false,
                scrollTo: false,
                highlightClass: 'introjs-custom-gone',
                tooltipClass: 'wider',
            },
            // STEP 15
            {
                element: this.getAmount() === 1 ? jQuery('.button-group-styling')[1].querySelector('.style-label') : window.Buttonizer.buttonGroups[0].stylingObject.querySelector('.style-label'),

                intro:
                    "<h2><b>"+ window.Buttonizer.translate('settings.setting_categories.label') +"</b></h2>" +
                    "<b>"+ window.Buttonizer.translate('settings.label.title') +":</b> "+ window.Buttonizer.translate('settings.label.description') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.label_desktop.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-15.label_visibility') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.label_color.title') +":</b> "+ window.Buttonizer.translate('settings.label_color.description') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.font_size_border_radius.title') +":</b> "+ window.Buttonizer.translate('settings.font_size_border_radius.description') +"<br>",
                position: 'right',
                disableInteraction: false,
                scrollTo: false,
                highlightClass: 'introjs-custom-gone',
                tooltipClass: 'wider',
            },
            // END GROUP OPTIONS
            // STEP 16
            {
                element: window.Buttonizer.buttonGroups[0].groupObject.querySelector('.create-new-button'),
                intro: '<h2><b>'+ window.Buttonizer.translate('utils.new_button') +'</b></h2>&larr; ' + window.Buttonizer.translate('welcome.tour-steps.step-before-button.action'),
                position: 'right',
                disableInteraction: false,
            },
            // STEP 17
            {
                element: window.Buttonizer.buttonGroups[0].groupObject.querySelector('.create-new-button'),
                intro: window.Buttonizer.translate('welcome.tour-steps.step-before-button.msg1'),
                position: 'right',
                disableInteraction: false,
            },
            // STEP 18
            {
                element: window.Buttonizer.buttonGroups[0].groupObject.querySelector('.create-new-button'),
                intro: window.Buttonizer.translate('welcome.tour-steps.step-before-button.msg2'),
                position: 'right',
                disableInteraction: false,
            },
            // STEP 19
            {
                element: window.Buttonizer.buttonGroups[0].groupObject.querySelector('.create-new-button'),
                intro: window.Buttonizer.translate('welcome.tour-steps.step-before-button.msg3'),
                position: 'right',
                disableInteraction: false,
            },
            // STEP 20
            {
                position: 'bottom',
                disableInteraction: false,
                highlightClass: 'introjs-custom-gone',
                tooltipClass: 'introjs-custom-gone',
            },
            // STEP 21
            {
                position: 'bottom',
                intro: window.Buttonizer.translate('welcome.tour-steps.step-before-button.msg4'),
                disableInteraction: false,
                highlightClass: 'introjs-custom-gone',
                tooltipClass: 'introjs-custom-gone',
            },
            // STEP 22
            {
                position: 'bottom',
                disableInteraction: false,
                highlightClass: 'introjs-custom-gone',
                tooltipClass: 'introjs-custom-gone',
            },
        ]});

        // this.tour._currentStep = 15;

        return this.tour;
    }

    /**
     * This is part 2 of Tour
     */
    intro2() {         
        this.tour = introJs();

        this.tour.setOptions({
            showBullets: false,
            exitOnOverlayClick: false,
            skipLabel: window.Buttonizer.translate('welcome.exit_tour'),
            doneLabel: window.Buttonizer.translate('welcome.exit_tour'),
            nextLabel: window.Buttonizer.translate('common.next') + ' →',
            prevLabel: '← ' + window.Buttonizer.translate('common.previous'),
            scrollToElement: true,
            showStepNumbers: false,
            disableInteraction: true,

        });

        let newButt = window.Buttonizer.buttonGroups[0].groupBody.querySelectorAll('.buttonizer-button-group')[window.Buttonizer.buttonGroups[0].groupBody.querySelectorAll('.buttonizer-button-group').length-1];
        let set = window.Buttonizer.bar.settingContainer;

        this.tour.setOptions({
            steps: [
            // STEP 0
            {
                element: newButt,
                intro: "<h2><b>"+ window.Buttonizer.translate('common.button') +"</b></h2> " + window.Buttonizer.translate('welcome.tour-steps.step-23'),
                position: 'right',
            },
            // STEP 1
            {
                element: this.amount <= 7 ? newButt.querySelector('.group-title') : newButt,
                intro: "<h2><b>"+ window.Buttonizer.translate('settings.name.title') +"</b></h2> " + window.Buttonizer.translate('settings.name.description'),
                position: 'bottom',
                scrollToElement: false,
                highlightClass: 'introjs-custom-gone',
            },
            // STEP 2
            {
                element: this.amount <= 7 ? newButt.querySelector('.mobile-desktop') : newButt,
                intro: "<h2><b>"+ window.Buttonizer.translate('settings.label_desktop.title') +"</b></h2> " + window.Buttonizer.translate('welcome.tour-steps.step-15'),
                position: 'bottom',
                highlightClass: 'introjs-custom-gone',

            },
            // STEP 3
            {
                element: this.amount <= 7 ? newButt.querySelector('.holder-button') : newButt,
                intro: "&larr; " + window.Buttonizer.translate('welcome.tour-steps.step-26'),
                position: 'right',
                highlightClass: 'introjs-custom-gone',
                disableInteraction: false,
            },
            // STEP 4
            {
                element: this.amount <= 7 ? newButt.querySelector('.group-holder-quick-menu') : newButt,
                intro: '<h2><b>Menu</b></h2>' +
                    '<p style="text-align: left;">' +
                        '<b>'+ window.Buttonizer.translate('common.settings') +':</b> '+ window.Buttonizer.translate('welcome.tour-steps.step-27.edit_button') +'<br>' +
                        '<b>'+ window.Buttonizer.translate('utils.advanced_settings') +':</b> '+ window.Buttonizer.translate('welcome.tour-steps.step-27.advanced_settings') +'<br>' +
                        '<b>'+ window.Buttonizer.translate('utils.rename') +':</b> '+ window.Buttonizer.translate('welcome.tour-steps.step-27.rename') +'<br>' +
                        '<b>'+ window.Buttonizer.translate('utils.duplicate') +':</b> '+ window.Buttonizer.translate('welcome.tour-steps.step-27.duplicate') + '<br>' +
                        '<b>'+ window.Buttonizer.translate('utils.delete') +':</b> '+ window.Buttonizer.translate('welcome.tour-steps.step-27.delete') + '<br>' +
                    '</p>',

                position: 'right',
                highlightClass: 'introjs-custom-gone',
            },
            // STEP 5
            {
                element: this.amount <= 7 ? newButt.querySelector('.group-holder-quick-menu').querySelector('.settings') : newButt,
                intro: "&larr; " + window.Buttonizer.translate('welcome.tour-steps.step-28'),
                position: 'right',
                disableInteraction: false,
                highlightClass: 'introjs-custom-hidden',
            },
            // STEP 6
            {
                element: window.Buttonizer.bar.settingContainer,
                intro: "<b><h2>"+ window.Buttonizer.translate('welcome.tour-steps.step-29.title') +"</h2></b> " + window.Buttonizer.translate('welcome.tour-steps.step-29.description'),
                position: 'right',
                disableInteraction: false,
                highlightClass: 'introjs-custom-gone',
            },
            // STEP 7
            {
                element: set.querySelectorAll('.style-top')[set.querySelectorAll('.style-top').length -1],
                intro:
                    "<h2><b>"+ window.Buttonizer.translate('welcome.tour-steps.step-30.title') +"</b></h2>" +
                    "<b>"+ window.Buttonizer.translate('settings.button_action.title') +":</b> "+ window.Buttonizer.translate('settings.button_action.description') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.show_mobile_desktop.device_visibility') +":</b> "+ window.Buttonizer.translate('settings.show_mobile_desktop.description'),
                position: 'right',
                disableInteraction: false,
                highlightClass: 'introjs-custom-gone',
                tooltipClass: 'wider',
            },
            // STEP 8
            {
                element: set.querySelectorAll('.style-button')[set.querySelectorAll('.style-button').length -1],
                intro: "<h2><b>"+ window.Buttonizer.translate('settings.setting_categories.button_style') +"</b></h2>" +
                    window.Buttonizer.translate('welcome.tour-steps.step-31.enabled') + "<br>" +
                    window.Buttonizer.translate('welcome.tour-steps.step-31.turning_off'),
                position: 'right',
                disableInteraction: false,
                highlightClass: 'introjs-custom-gone',
                tooltipClass: 'wider',
            },
            // STEP 9
            {
                element: set.querySelectorAll('.style-icon')[set.querySelectorAll('.style-icon').length -1],
                intro:
                    "<h2><b>"+ window.Buttonizer.translate('settings.setting_categories.button_icon') +"</b></h2>" +
                    "<b>"+ window.Buttonizer.translate('settings.icon_or_image.title') +":</b> "+ window.Buttonizer.translate('settings.icon_or_image.description') +"<br>" +
                    "<h2 style=\"margin: 1em 0 0 0;\"><b>"+ window.Buttonizer.translate('settings.icon.title') +"</b></h2>" +
                    "<b>"+ window.Buttonizer.translate('settings.icon.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-14.icon') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.icon_color.title') +":</b> "+ window.Buttonizer.translate('settings.icon_color.description') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.icon_size.title') +":</b> "+ window.Buttonizer.translate('settings.icon_size.description') +"<br>" +
                    "<h2 style=\"margin: 1em 0 0 0;\"><b>"+ window.Buttonizer.translate('utils.image') +"</b></h2>" +
                    "<b>"+ window.Buttonizer.translate('settings.icon_image_select.title') +":</b> "+ window.Buttonizer.translate('settings.icon_image_select.description') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.icon_image_border_radius.title') +":</b> "+ window.Buttonizer.translate('settings.icon_image_border_radius.description') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.icon_image_size.title') +":</b> "+ window.Buttonizer.translate('settings.icon_image_size.description') +"<br>",
                position: 'right',
                disableInteraction: false,
                highlightClass: 'introjs-custom-gone',
                tooltipClass: 'wider', 
            },
            // STEP 10
            {
                element: set.querySelectorAll('.style-label')[set.querySelectorAll('.style-label').length -1],
                intro:
                    "<h2><b>"+ window.Buttonizer.translate('settings.setting_categories.label') +"</b></h2>" +
                    "<b>"+ window.Buttonizer.translate('settings.label.title') +":</b> "+ window.Buttonizer.translate('settings.label.description') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.label_desktop.title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-15.label_visibility') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.label_color.title') +":</b> "+ window.Buttonizer.translate('settings.label_color.description') +"<br>" +
                    "<b>"+ window.Buttonizer.translate('settings.font_size_border_radius.title') +":</b> "+ window.Buttonizer.translate('settings.font_size_border_radius.description') +"<br>",
                position: 'right',
                disableInteraction: false,
                highlightClass: 'introjs-custom-gone',
                tooltipClass: 'wider',
            },
            // STEP 11
            {
                element: window.Buttonizer.topBar.topBarElement.querySelector('.revert-save'),
                intro: "<h2><b>"+ window.Buttonizer.translate('welcome.tour-steps.step-34.title') +"</b></h2>" +
                        "<b>"+ window.Buttonizer.translate('welcome.tour-steps.step-34.revert_title') +":</b> "+ window.Buttonizer.translate('welcome.tour-steps.step-34.revert_description') +"<br><br>" +
                        "<b>"+ window.Buttonizer.translate('welcome.tour-steps.step-34.save_title') +":</b> " + window.Buttonizer.translate('welcome.tour-steps.step-34.save_description'),
                position: 'right',
                disableInteraction: true,
                tooltipClass: 'right',
            },
            // Thanking user
            {
                intro: "<h2><b>"+ window.Buttonizer.translate('welcome.tour-steps.final.title') +"</b></h2>" +
                    window.Buttonizer.translate('welcome.tour-steps.final.intro') + "<br /><br />" + window.Buttonizer.translate('welcome.tour-steps.final.outro'),
                position: 'left',
                tooltipClass: 'max-width'
            },
        ]});

        return this.tour
    }
}


// CONCATENATED MODULE: ./src/js/admin/Buttonizer.js
// Import Buttonizer Dashboard style!
















__webpack_require__(12);

window.bdebug = new components_Debug();

class Buttonizer_Buttonizer {
    constructor() {
        this.loader = {};
        this.topBar = {};
        this.bar = {};
        this.assetsLink = ".";
        this.tour = null;

        // Buttonizer version
        this.version = "-";

        // Settings
        this.settings = {};
        this.buttonGroups = [];
        this.savingMechanism = {};
        //
        this.buttonizerInitData = [];

        this.timeSchedule = {};
        this.pageRule = {};

        this.windowsZindex = 9999;
        this.bc;
        this.loading = true;

        this.settingsWindow = {};

        this.iframe = null;
        this.iframeLoaded = false;
        this.iconLibraryLoaded = false;
        this.ButtonizerStartedLoading = 0;

        this.iconSelector = null;

        this.iconLibraryStylesheet = null;

        this.previewWarning = null;

        this.premium = false;

        this.init(true);
    }

    set buttonChanges(value) {
        if(this.loading) return;
        this.bc = value;
    }

    get buttonChanges(){
        return this.bc;
    }

    /**
     * Initialize Buttonizer
     *
     * @param doDebug
     */
    init(doDebug) {
        document.body.className += ' buttonizer-initialized';

        // Debug
        bdebug.welcomeToTheConsole();

        if (doDebug === true) {
            bdebug.startDebugging();
        }

        bdebug.warning("Buttonizer 2.0");

        // Add favicon
        let favicon = document.createElement("link");
        favicon.rel = 'shortcut icon';
        favicon.href = buttonizer_admin.dir + '/favicon.ico';
        document.head.appendChild(favicon);

        this.loader = new ui_Loader();
        this.loader.show(this.translate('loading.settings'));
        this.savingMechanism = new ui_Saving();

        bdebug.warning("Buttonizer settings loading");
        this.ButtonizerStartedLoading = new Date().getTime();
        // Load all Buttonizer settings
        this.loadSettings();
    }

    /**
     * Loading all Buttonizer settings
     */
    loadSettings() {
        jQuery.ajax({
            url: buttonizer_admin.ajax + '?action=buttonizer_backend&item=ButtonizerInitializer',
            dataType: 'json',
            method: 'get',
            success: (data) => {

                bdebug.warning("Buttonizer settings loaded: " + ((new Date().getTime() - this.ButtonizerStartedLoading) / 1000) + 's');

                if (data.status === "success") {
                    this.defineSettings(data);
                } else {
                    this.fatalErrorLoading("<b>" + data.message + "</b>" , "Buttonizer.loadSettings().success");
                }
            },
            error: (err, msg, data) => {
                this.loader.hide();

                console.log(err);

                this.fatalErrorLoading("<b>" + msg.toUpperCase() + ":</b>" + "<br />" + data, "Buttonizer.loadSettings().error");
            }
        });
    }

    /**
     * Fatal error when loading the plugin
     *
     * @param fatalMessage
     * @param functionLink
     */
    fatalErrorLoading(fatalMessage, functionLink) {
        new Modal({
            title: "Error!",
            content: `
                <p>Oh, that was not what I was expecting! Something went wrong while we tried to load all Buttonizer settings.</p>
                <p>Try to reload the webpage. If that did not work, send us a <a href="https://community.buttonizer.pro/" target="_blank">support request</a>.</p>
                <p>Report the following information:</p>
                <p style='color: #FF0000; display: block; border: 1px solid #FF0000; padding: 10px;'>${fatalMessage}<br /><br />Function place: ${functionLink}</p>`,

            onConfirm: () => {
                document.location.reload();
            },

            buttons: [{
                text: "Reload webpage",
                confirm: true
            }]
        });
    }

    /**
     * Fatal error
     * @param fatalMessage
     * @param functionLink
     */
    fatalError(errorData) {
        // First console log error data
        console.error(errorData);

        // Set text
        let data = document.createElement("div");

        data.innerHTML = `<p>Oh, that was not what we were expecting! Something went wrong.</p>
            <p>Try to reload the webpage. If that did not work, send us a <a href="https://community.buttonizer.pro/" target="_blank">support request</a>.</p>`;

        // Technical info link
        let p = document.createElement("p");
        p.innerHTML = "Do you want to see technical details? <a href='javascript:void(0)'>Click here!</a>";
        data.appendChild(p);

        // The technical info
        let technicalDetails = document.createElement("code");
        technicalDetails.style.overflowX = 'auto';
        technicalDetails.style.whiteSpace = 'nowrap';
        technicalDetails.innerText =
            `Error type: ${errorData.name}
            
            Stack trace:
            
            ${errorData.stack}`;
        technicalDetails.style.display = "none";

        data.appendChild(technicalDetails);

        // Open technical info
        p.addEventListener("click", () => {
            p.style.display = "none";
            technicalDetails.style.display = "block";
        });

        new Modal({
            title: "Error!?!?1?!1?!",
            content: data,
            buttons: [{
                text: "Close",
                confirm: true
            }]
        });
    }

    /**
     * The Buttonizer settings are loaded
     * Define them, and load iframe
     *
     * @param data
     */
    defineSettings(data) {
        // Define
        this.settings = data.settings;
        this.version = data.version;
        this.buttonizerInitData = data;
        this.premium = data.premium;

        index_all.setDefaults({
            onShow: () => this.getSetting('show_tooltips', 'true') === 'true' || this.getSetting('show_tooltips') === true
        });

        this.loader.show(this.translate('loading.bar'));

        // Setup
        this.topBar = new ui_TopBar(this);
        this.bar = new ui_Bar(this);
        this.previewWarning = this.leftButtonizerWarning();

        this.changes = data.changes;
        if (data.changes) {
            this.topBar.alertText.alert(this.translate('bar.previous_session'));
        }

        this.initializeSettings(data.settings);

        this.initializeTimeSchedules();

        this.initializePageRules();

        this.loadButtonGroups();

        this.loading = false;

        this.settingsWindow = new Settings();

        // Open settings
        if(document.location.href.indexOf("open-settings") >= 0) {
            this.settingsWindow.show();
        }

        this.iconSelector = new IconSelector();

        /**
         * Check how many groups there are.
         * Open the first one if there is just one group, except if it's in single-button-mode
         */
        if (this.buttonGroups.length === 1 && !this.buttonGroups[0].singleButtonMode) {
            this.buttonGroups[0].groupHolder.revealButtons();
        }

        // Create iframe
        this.createIframe();

        /**
         * Add FontAwesome (used by Buttonizer)
         */
        let buttonizerUsedFontAwesome = document.createElement('link');
        buttonizerUsedFontAwesome.rel = "stylesheet";
        buttonizerUsedFontAwesome.type = "text/css";
        buttonizerUsedFontAwesome.href = 'https://use.fontawesome.com/releases/v5.8.2/css/all.css';
        buttonizerUsedFontAwesome.integrity = 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay';
        buttonizerUsedFontAwesome.setAttribute("crossorigin",  'anonymous');
        document.getElementsByTagName('head')[0].appendChild(buttonizerUsedFontAwesome);

        window.addEventListener("message", (event) => {
            if (!event.isTrusted || typeof event.data === "undefined" || typeof event.data.eventType === "undefined" || event.data.eventType !== "buttonizer") return;

            if (event.data.messageType === 'warning') {
                this.topBar.updateEventLogs(event.data.message);
            } else if (event.data.messageType === 'javascript_error') {
                new Modal({
                    title: this.translate('errors.custom_javascript.title'),
                    content: `
                <p>${this.translate('errors.custom_javascript.message')}</p> <p><code style="display: block; padding: 15px;">${event.data.message}</code></p>
            `,
                    buttons: [{
                        text: this.translate('common.ok_fix'),
                        confirm: true,
                    }]
                });
            }
            // Todo: Add a spinner/loading text on the admin panel and give feedback that the preview-window has reloaded Buttonizer
            else if (event.data.messageType === '(re)loaded') {
                console.log('[Buttonizer ADMIN] Buttonizer is (re)loaded! So last changes can be seen in the preview window.');
            }
        }, false);

        // DEV
        if (document.location.href.indexOf('tour') >= 0) {
            this.startTour();
        }
    }

    /**
     * Start Buttonizer tour
     */
    startTour()
    {
        if(this.tour === null) {
            this.tour = new Tour_Tour();
        }

        this.tour.build();
    }

    /**
     * Create iframe
     */
    createIframe() {
        let iframe_src = (document.location.hash === "" || document.location.hash === "#open-settings" ? this.buttonizerInitData.wordpress.base : decodeURIComponent(document.location.hash.substr(1)));

        // Create iframe
        let iframeContainer = document.createElement("div");
        iframeContainer.className = 'buttonizer-frame';

        // Iframe
        let iframe = document.createElement("iframe");
        iframe.src = iframe_src + '?buttonizer-preview=1';
        iframe.id = 'buttonizer-iframe';
        iframe.setAttribute('frameborder', "0");
        iframe.setAttribute('width', "100%");
        iframe.setAttribute('height', "100%");

        // When the iframe is loaded
        iframe.addEventListener("load", (e) => {
            this.iframeLoaded = true;

            // Leaving protected window
            if (e.target.contentWindow.location.href.indexOf("buttonizer-preview") === -1) {
                if (document.body.className.indexOf('warning-left-preview-window') === -1) {
                    document.body.className += ' warning-left-preview-window';

                    this.previewWarning.style.display = 'block';
                }
            }
        });

        iframeContainer.appendChild(iframe);
        document.body.appendChild(iframeContainer);

        // Update iframe path

        this.loader.show(this.translate('loading.website'), 'site-loading');

        setTimeout(() => {
            if (!this.iframeLoaded) {
                this.loader.show(this.translate('loading.website') + "<br /><br /><small>"+ this.translate('loading.website_slow') +"<br /><br /><a href='javascript:void(0)' onclick='window.Buttonizer.loader.hide()'>"+ this.translate('loading.website_skip') +"</a></small>");
            }
        }, 5000);

        let closeLoader = setInterval(() => {
            if (this.iframeLoaded && this.iconLibraryLoaded) {

                this.loader.hide();

                document.body.className += ' buttonizer-loaded';

                clearInterval(closeLoader);
            }
        });
    }

    /**
     * Welcome window
     */
    welcome() {
        this.loader.hide();

        new Modal({
            title: this.translate('welcome.title') + " " + this.version,
            content: `
                <img src="${buttonizer_admin.assets}/images/plugin-icon.png" width="100" align="left" style="margin-right: 20px; margin-bottom: 10px;" />
                <p>${this.translate('welcome.intro')}</p>
                <p>${this.translate('welcome.tour')}</p>
            `,

            onClose: () => {
                this.saveSettings({
                    welcome: 'false'
                }, true);
            },

            onConfirm: () => {
                this.startTour();
            },

            buttons: [{
                text: this.translate("welcome.already_know") + " <i class=\"fa fa-chevron-right\" style=\"margin-left: 10px; vertical-align: middle;\" aria-hidden=\"true\"></i>",
                close: true,
            }, {
                text: this.translate('welcome.take_tour') + " <i class=\"fa fa-chevron-right\" style=\"margin-left: 10px; vertical-align: middle;\" aria-hidden=\"true\"></i>",
                confirm: true,
            }]
        });
    }

    /**
     * Something did not went right. Updated to 2.0?
     */
    updateButtonsTo2Point0() {
        new Modal({
            title: this.translate("migration_modal.title"),
            content: `
                <p>${this.translate("migration_modal.intro")}</p>
                <p>${this.translate("migration_modal.convert")}</p>
                
                <p>${this.translate("migration_modal.popping_up")}</p> 
            `,

            onConfirm: () => {
                window.Buttonizer.loader.show(this.translate("loading.running_migration"));

                jQuery.ajax({
                    url: buttonizer_admin.ajax + '?action=buttonizer_backend&item=SaveData&save=migrate-buttonizer',
                    dataType: 'json',
                    method: 'post',
                    data: {
                        security: buttonizer_admin.security
                    },
                    success: (data) => {
                        if (data.status === "success") {
                            window.Buttonizer.loader.show(this.translate("loading.finishing"));

                            setTimeout(() => {
                                document.location.reload();
                            }, 500);
                        } else {
                            window.Buttonizer.loader.hide();
                            window.Buttonizer.savingError(data.message);
                        }
                    },
                    error: (err, msg, data) => {
                        window.Buttonizer.loader.hide();
                        window.Buttonizer.savingError(msg);
                    }
                });
            },

            buttons: [{
                text: this.translate('modal.no_thanks'),
                close: true,
            }, {
                text: this.translate('migration_modal.convert_buttons') + " <i class=\"fa fa-chevron-right\" style=\"margin-left: 10px; vertical-align: middle;\" aria-hidden=\"true\"></i>",
                confirm: true,
            }]
        });
    }

    /**
     * The user left the Buttonizer Preview window. Auch!
     */
    leftButtonizerWarning() {
        let warning = document.createElement("div");
        warning.className = 'buttonizer-warning warning-red';
        warning.innerHTML = this.translate('bar.preview.no_changes');

        let button = document.createElement("a");
        button.href = 'javascript:void(0)';
        button.className = 'buttonizer-warning-button';
        button.innerText = this.translate('bar.preview.return');

        button.addEventListener("click", () => {
            document.body.className = document.body.className.replace('warning-left-preview-window', '');

            this.previewWarning.style.display = 'none';

            document.getElementById("buttonizer-iframe").setAttribute("src", window.Buttonizer.buttonizerInitData.wordpress.base + '?buttonizer-preview=true');
        });

        warning.appendChild(button);

        // Add warning to the button
        document.body.appendChild(warning);

        return warning;
    }

    /**
     * Save Buttonizer settings
     *
     * @param newSetting object
     * @param showLoadingScreen boolean
     */
    saveSettings(newSetting, showLoadingScreen) {
        if (showLoadingScreen) {
            this.loader.show(this.translate('common.saving_settings'));
        }

        Object.assign(this.settings, newSetting);

        jQuery.ajax({
            url: buttonizer_admin.ajax + '?action=buttonizer_backend&item=SaveData&save=settings',
            dataType: 'json',
            method: 'post',
            data: {
                "data": this.settings,
                security: buttonizer_admin.security
            },
            success: (data) => {
                this.loader.hide();

                if (data.status !== "success") {
                    window.Buttonizer.savingError(data.message);
                }
            },
            error: (msg) => {
                this.loader.hide();

                window.Buttonizer.savingError(msg);
            }
        });
    }

    /**
     * Add button to the buttons array
     *
     * @param object
     */
    registerButton(object) {
        // this.buttons.push(object);
    }

    /**
     * Save buttons?
     */
    saveButtons() {
        console.log(this.buttons);
    }

    /**
     * Initialize setting
     * @param settings
     */
    initializeSettings(settings) {
        if (settings.welcome.toString() === "true") {
            this.welcome();
        }

        this.settings = settings;

        this.addIconLibrary();
    }

    /**
     * Find
     * @param settings
     * @returns {*}
     */
    addIconLibrary() {
        let firstImport = false;

        // Add FontAwesome
        if (this.iconLibraryStylesheet === null) {
            this.iconLibraryStylesheet = document.createElement('link');
            this.iconLibraryStylesheet.rel = "stylesheet";
            this.iconLibraryStylesheet.type = "text/css";

            firstImport = true;
        }

        if (this.settings.icon_library === 'fontawesome' && (this.settings.icon_library_version === '5.free' || this.settings.icon_library_version === '5.paid')) {
            if(this.settings.icon_library_version === '5.paid' && this.settings.icon_library_code !== '') {
                this.iconLibraryStylesheet.setAttribute('integrity', this.settings.icon_library_code);
            }else{
                this.iconLibraryStylesheet.setAttribute('integrity', 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay');

            }

            this.iconLibraryStylesheet.setAttribute('crossorigin', 'anonymous');
            this.iconLibraryStylesheet.href = 'https://'+ (this.settings.icon_library_version === '5.paid' ? 'pro' : 'use') +'.fontawesome.com/releases/'+ this.buttonizerInitData.fontawesome_current_version+'/css/all.css';

        }
        else if (this.settings.icon_library === 'fontawesome' && this.settings.icon_library_version === '4.7.0') {
            this.iconLibraryStylesheet.setAttribute('integrity', '');
            this.iconLibraryStylesheet.href = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
        }

        this.iconLibraryLoaded = true;

        if (firstImport) {
            // this.iconLibraryStylesheet.addEventListener("load", () => {
            //     this.iconLibraryLoaded = true;
            // });
        }
    }

    /**
     * Does the user has premium?
     *
     * @returns {boolean}
     */
    hasPremium() {
        return this.premium;
    }

    /**
     *
     */
    showPremiumPopup(description, video) {
        new Modal({
            title: `<i class="far fa-gem window-icon"></i> ` + this.translate('premium.modal.title'),
            content: `
                <p>${this.translate('premium.modal.describe')}</p>
                <code style="display: block; margin-bottom: 5px; padding: 10px;">${description}</code>
                <p><b>${this.translate('premium.modal.what_do_i_get')}</b></p>
                
                <ul class="buttonizer-pro-checklist">
                    <li><i class="fas fa-check"></i> ${this.translate('premium.modal.list.time_schedules')}</li>
                    <li><i class="fas fa-check"></i> ${this.translate('premium.modal.list.page_rules')}</li>
                    <li><i class="fas fa-check"></i> ${this.translate('premium.modal.list.button_groups')}</li>
                    <li><i class="fas fa-check"></i> ${this.translate('premium.modal.list.custom_images')}</li>
                    <li><i class="fas fa-check"></i> ${this.translate('premium.modal.list.exit_intent')}</li>
                    <li><i class="fas fa-check"></i> ${this.translate('premium.modal.list.show_on_scroll')}</li>
                    <li><i class="fas fa-check"></i> ${this.translate('premium.modal.list.show_on_timeout')}</li>
                    <li><i class="fas fa-check"></i> ${this.translate('premium.modal.list.custom_class')}</li>
                    <li><i class="fas fa-check"></i> ${this.translate('premium.modal.list.javascript')}</li>
                </ul>`,
            onConfirm: () => {
                document.location.href = buttonizer_admin.admin + '?page=Buttonizer-pricing';
            },
            video: video,
            buttons: [{
                text: this.translate('modal.close'),
                close: true
            }, {
                text: this.translate('premium.modal.go_pro') + ' <i class="fas fa-chevron-right" style="margin-left: 5px;vertical-align: middle;"></i>',
                confirm: true,
                close: true,
                focus: true
            }]
        });

    }

    /**
     * Get setting
     *
     * @param setting
     * @param defaultValue
     * @returns {*}
     */
    getSetting(setting, defaultValue) {
        return ("undefined" !== typeof this.settings[setting] ? this.settings[setting] : defaultValue)
    }

    /**
     * Setter for changes.
     * @param {boolean} value
     */
    set changes(value) {
        this.topBar.changes = value;
    }

    updateButtonGroupList(newIndex, oldIndex) {
        this.buttonGroups.splice(newIndex, 0, this.buttonGroups.splice(oldIndex, 1)[0]);
        this.buttonChanges = true;
    }

    updateButtonList(newIndex, oldIndex, newGroup, oldGroup) {
        this.buttonGroups[newGroup].buttons.splice(newIndex, 0, this.buttonGroups[oldGroup].buttons.splice(oldIndex, 1)[0]);
        this.buttonGroups[newGroup].buttons[newIndex].groupObject = this.buttonGroups[newGroup];
        this.buttonChanges = true;

        if (!(this.buttonGroups[oldGroup].buttons.length <= 1)) return;
        jQuery(this.buttonGroups[oldGroup].groupBody).sortable("option", "cancel", ".group-button");
    }

    /**
     * Could not save settings
     *
     * @param message
     */
    savingError(message) {
        new Modal({
            title: this.translate('errors.saving.title'),
            content: `<p>${this.translate('errors.saving.message')}.</p><p>${message}</p>`,
            buttons: [{
                text: this.translate('modal.close'),
                close: true
            }]
        });
    }

    /**
     * Time schedules
     * @premium
     */
    initializeTimeSchedules() {

    }

    /**
     * Page rules
     * @premium
     */
    initializePageRules() {

    }

    /**
     * Page rules
     * @premium
     */
    loadButtonGroups() {
        if(typeof this.buttonizerInitData.groups.buttonorder !== "undefined") {
            this.updateButtonsTo2Point0();
        }

        if (this.buttonizerInitData.groups.length === 0) {
            new ButtonGroup({
                name: 'Buttonizer',
                position: 'bottomright',
                icon: 'fa fa-plus',
                horizontal: 5,
                vertical: 5
            },
            [
                {
                    name: window.Buttonizer.translate('utils.first_button'),
                    show_mobile: true,
                    show_desktop: true
                },
                {
                    name: window.Buttonizer.translate('utils.second_button'),
                    show_mobile: true,
                    show_desktop: true
                }
            ]);

            setTimeout(() => {
                this.buttonChanges = true;
            }, 1000);
            return;
        }



        new ButtonGroup(this.buttonizerInitData.groups[0].data, this.buttonizerInitData.groups[0].buttons);
    }

    /**
     * Translate string
     *
     * @param prop
     */
    translate(prop = '') {
        let localization_array = prop.split('.');

        // First not found
        if(typeof buttonizer_translations[localization_array[0]] === "undefined") {
            console.error("Localization not found: " + prop);
            return prop;
        }

        let result = buttonizer_translations[localization_array[0]];

        for(let i = 1, len = localization_array.length; i < len; i++) {
            if(typeof result[localization_array[i]] === "undefined") {
                console.error("Localization not found: " + prop);
                return prop;
            }

            result = result[localization_array[i]];
        }

        return result;
    }

    /**
     *
     * @param prop
     * @returns {string}
     */
    __(prop = '') {
        return this.translate(prop);
    }
}

// Translation helper
if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}

window.Buttonizer = new Buttonizer_Buttonizer();


/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);