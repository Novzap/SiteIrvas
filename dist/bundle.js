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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/ImgFullScreen.js":
/*!*****************************************!*\
  !*** ./src/js/modules/ImgFullScreen.js ***!
  \*****************************************/
/*! exports provided: sizeImgScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeImgScreen", function() { return sizeImgScreen; });
var sizeImgScreen = function sizeImgScreen() {};

/***/ }),

/***/ "./src/js/modules/main.js":
/*!********************************!*\
  !*** ./src/js/modules/main.js ***!
  \********************************/
/*! exports provided: popup, getTabs, img, getTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popup", function() { return popup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabs", function() { return getTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "img", function() { return img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimer", function() { return getTimer; });
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/js/modules/popup.js");
/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.js */ "./src/js/modules/tabs.js");
/* harmony import */ var _ImgFullScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImgFullScreen.js */ "./src/js/modules/ImgFullScreen.js");
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer.js */ "./src/js/modules/timer.js");




var popup = function popup() {
  var close = document.querySelectorAll('.popup_content .popup_close'),
      Phonelinks = document.querySelectorAll('.phone_link'),
      popupEngineer = document.querySelector('.popup_engineer'),
      popupEngineerBtn = document.querySelectorAll('.popup_engineer_btn'),
      popup = document.querySelector('.popup');

  var getPopupengineer = function getPopupengineer() {
    Object(_popup_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"])(popupEngineerBtn, popupEngineer, close);
  };

  var getPopupPhone = function getPopupPhone() {
    Object(_popup_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"])(Phonelinks, popup, close);
  };

  var getPopupTimeOut = function getPopupTimeOut() {
    setTimeout(function () {
      Object(_popup_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"])(null, popup, close);
    }, 60000);
  };

  getPopupengineer();
  getPopupPhone();
  getPopupTimeOut();
};
var getTabs = function getTabs() {
  var tabsLink = document.querySelectorAll('.glazing_block');
  var tabsContent = document.querySelectorAll('.glazing .row');
  var DecorationLink = document.querySelectorAll('.decoration_item div');
  var DecorationContent = document.querySelectorAll('.decoration_content .decoration-item-content');
  Object(_tabs_js__WEBPACK_IMPORTED_MODULE_1__["tabs"])(tabsLink, tabsContent, 'active');
  Object(_tabs_js__WEBPACK_IMPORTED_MODULE_1__["tabs"])(DecorationLink, DecorationContent, 'after_click');
};
var img = function img() {
  Object(_ImgFullScreen_js__WEBPACK_IMPORTED_MODULE_2__["sizeImgScreen"])();
};
var getTimer = function getTimer() {
  Object(_timer_js__WEBPACK_IMPORTED_MODULE_4__["timer"])();
};

/***/ }),

/***/ "./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/*! exports provided: getPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return getPopup; });
var getPopup = function getPopup(btn, popup, close) {
  "use strict";

  var popupShow = function popupShow() {
    if (btn === null) {
      popup.classList.add('js-popupShow');
      return;
    }

    for (var i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function (e) {
        e.preventDefault();
        popup.classList.add('js-popupShow');
      });
    }
  };

  var popupClose = function popupClose() {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function () {
        popup.classList.remove('js-popupShow');
      });
    }

    popup.addEventListener('click', function (e) {
      if (popup === e.target) {
        popup.classList.remove('js-popupShow');
      }
    });
  };

  popupShow();
  popupClose();
};

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabs", function() { return tabs; });
var tabs = function tabs(tabsLink, tabsContent, styleClass) {
  "use strict";

  for (var i = 1; i < tabsContent.length; i++) {
    tabsContent[i].classList.remove('show');
    tabsContent[i].classList.add('hide');
  }

  tabsLink[0].classList.add(styleClass);
  tabsLink.forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.preventDefault();
      var target = e.target;

      for (var _i = 0; _i < tabsLink.length; _i++) {
        if (target == tabsLink[_i] || target === tabsLink[_i].querySelector('a') || target === tabsLink[_i].querySelector('img')) {
          for (var _i2 = 0; _i2 < tabsContent.length; _i2++) {
            tabsContent[_i2].classList.remove('show');

            tabsContent[_i2].classList.add('hide');

            if (styleClass === 'active') {
              tabsLink[_i2].querySelector('a').classList.remove(styleClass);
            } else {
              tabsLink[_i2].classList.remove(styleClass);
            }
          }

          if (tabsContent[_i].classList.contains('hide')) {
            tabsContent[_i].classList.remove('hide');

            tabsContent[_i].classList.add('show');

            if (styleClass === 'active') {
              tabsLink[_i].querySelector('a').classList.add(styleClass);
            } else {
              tabsLink[_i].classList.add(styleClass);
            }
          }
        }
      }
    });
  });
};

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
var timer = function timer() {
  var deadline = '2019-12-18';

  var getTimeRemaining = function getTimeRemaining(endTime) {
    var t = Date.parse(endTime) - (Date.parse(new Date()) + new Date().getTimezoneOffset() * 60 * 1000),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor(t / (1000 * 60 * 60) / 365),
        minutes = Math.floor(t / 1000 / 60 % 60),
        seconds = Math.floor(t / 1000 % 60);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  var setClock = function setClock(id, endTime) {
    var timer = document.getElementById(id),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(endTime);
      days.textContent = t.days;
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.hours < 10) {
        hours.textContent = "0".concat(t.hours);
      } else if (t.minutes < 10) {
        minutes.textContent = "0".concat(t.minutes);
      } else if (t.seconds < 10) {
        seconds.textContent = "0".concat(t.seconds);
      } else if (t.days < 10) {
        days.textContent = "0".concat(t.days);
      }

      if (t.total <= 0) {
        clearInterval(timeInterval);
        days.textContent = '00', hours.textContent = '00', minutes.textContent = '00', seconds.textContent = '00';
      }
    }
  };

  setClock('timer', deadline);
};

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/main.js */ "./src/js/modules/main.js");

window.addEventListener('DOMContentLoaded', function () {
  "use strict";

  Object(_modules_main_js__WEBPACK_IMPORTED_MODULE_0__["popup"])();
  Object(_modules_main_js__WEBPACK_IMPORTED_MODULE_0__["getTabs"])();
  Object(_modules_main_js__WEBPACK_IMPORTED_MODULE_0__["img"])();
  Object(_modules_main_js__WEBPACK_IMPORTED_MODULE_0__["getTimer"])();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map