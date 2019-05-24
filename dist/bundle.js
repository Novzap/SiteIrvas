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

/***/ "./src/js/modules/main.js":
/*!********************************!*\
  !*** ./src/js/modules/main.js ***!
  \********************************/
/*! exports provided: getPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return getPopup; });
var getPopup = function getPopup(btn, popup, close) {
  var popupShow = function popupShow() {
    if (btn === null) {
      popup.classList.add('js-popupShow');
      return;
    }

    for (var i = 0; i < btn.length; i++) {
      btn[0].addEventListener('click', function () {
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

/***/ "./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/*! exports provided: popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popup", function() { return popup; });
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./src/js/modules/main.js");

var popup = function popup() {
  var close = document.querySelectorAll('.popup_content .popup_close'),
      Phonelinks = document.querySelectorAll('.phone_link'),
      popupEngineer = document.querySelector('.popup_engineer'),
      popupEngineerBtn = document.querySelectorAll('.popup_engineer_btn'),
      popup = document.querySelector('.popup');

  var getPopupengineer = function getPopupengineer() {
    Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"])(popupEngineerBtn, popupEngineer, close);
  };

  var getPopupPhone = function getPopupPhone() {
    Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"])(Phonelinks, popup, close);
  };

  var getPopupTimeOut = function getPopupTimeOut() {
    setTimeout(function () {
      Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"])(null, popup, close);
    }, 60000);
  };

  getPopupengineer();
  getPopupPhone();
  getPopupTimeOut();
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
/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/popup.js */ "./src/js/modules/popup.js");

window.addEventListener('DOMContentLoaded', function () {
  "use strict";

  Object(_modules_popup_js__WEBPACK_IMPORTED_MODULE_0__["popup"])();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map