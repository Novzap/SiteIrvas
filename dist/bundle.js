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
var sizeImgScreen = function sizeImgScreen() {
  var linkImg = document.querySelectorAll('.works a');
  var div = document.createElement('div');
  div.classList.add('wrap-img');
  var bigImg = document.querySelectorAll('.lupa');

  for (var i = 0; i < linkImg.length; i++) {
    linkImg[i].appendChild(div);
  }

  var div2 = document.querySelectorAll('.wrap-img');

  for (var _i = 0; _i < div2.length; _i++) {
    div2[_i].appendChild(bigImg[_i]);
  }

  linkImg.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      div.classList.add('show');
      div.firstChild.style.display = 'block';
    });
  });
  div.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.target === this) {
      this.classList.remove('show');
    }
  });
};

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! exports provided: calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return calc; });
var calc = function calc() {
  var balcons = document.querySelectorAll('.balcon_icons a');
  var bigImage = document.querySelectorAll('.big_img img');
  var obj = {};

  for (var i = 1; i < bigImage.length; i++) {
    bigImage[i].classList.remove('show');
    bigImage[i].classList.add('hide');
  }

  balcons.forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.preventDefault();
      var target = e.target;

      for (var _i = 0; _i < balcons.length; _i++) {
        if (target == balcons[_i] || target === balcons[_i].querySelector('img')) {
          for (var _i2 = 0; _i2 < bigImage.length; _i2++) {
            bigImage[_i2].classList.remove('show');

            bigImage[_i2].classList.add('hide');
          }

          if (bigImage[_i].classList.contains('hide')) {
            bigImage[_i].classList.remove('hide');

            bigImage[_i].classList.add('show');
          }
        }
      }
    });
  });
};

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: forms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forms", function() { return forms; });
var forms = function forms() {
  var message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так'
  };
  var statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  function submitForm(form) {
    var input = document.querySelectorAll('.form input');
    form.forEach(function (element) {
      element.addEventListener('submit', function (e) {
        e.preventDefault();
        element.appendChild(statusMessage);
        var formData = new FormData(form);

        function postData(data) {
          return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            request.addEventListener('readystatechange', function () {
              if (request.readyState < 4) {
                resolve();
              } else if (request.readyState === 4 && request.status === 200) {
                resolve();
              } else {
                reject();
              }
            });
            request.send(data);
          });
        }

        function clearInput() {
          for (var i = 0; i < input.length; i++) {
            input[i].value = '';
          }
        }

        var obj = {};
        formData.forEach(function (value, key) {
          obj[key] = value;
        });
        var json = JSON.stringify(obj);
        postData(json).then(function () {
          return statusMessage.textContent = message.loading;
        }).then(function () {
          statusMessage.textContent = message.success;
        }).catch(function () {
          return statusMessage.textContent = message.failure;
        }).then(clearInput);
      });
    });

    function clearInput() {
      for (var i = 0; i < input.length; i++) {
        input[i].value = '';
      }
    }

    clearInput();
    input.forEach(function (item) {
      item.addEventListener('input', function (e) {
        if (item.name !== 'email' && item.name !== 'user_name') {
          if (e.data.search(/[0-9\+]/)) {
            this.value = '';
          }
        }
      });
    });
  }

  submitForm(document.querySelectorAll('.popup_form'));
  submitForm(document.querySelectorAll('.main_form'));
};

/***/ }),

/***/ "./src/js/modules/main.js":
/*!********************************!*\
  !*** ./src/js/modules/main.js ***!
  \********************************/
/*! exports provided: popup, getTabs, img, getTimer, getForms, calcPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popup", function() { return popup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabs", function() { return getTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "img", function() { return img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimer", function() { return getTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getForms", function() { return getForms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcPopup", function() { return calcPopup; });
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/js/modules/popup.js");
/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.js */ "./src/js/modules/tabs.js");
/* harmony import */ var _ImgFullScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImgFullScreen.js */ "./src/js/modules/ImgFullScreen.js");
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer.js */ "./src/js/modules/timer.js");
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms.js */ "./src/js/modules/forms.js");
/* harmony import */ var _calc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calc.js */ "./src/js/modules/calc.js");






var popup = function popup() {
  var close = document.querySelectorAll('.popup_content .popup_close'),
      Phonelinks = document.querySelectorAll('.phone_link'),
      popupEngineer = document.querySelector('.popup_engineer'),
      popupEngineerBtn = document.querySelectorAll('.popup_engineer_btn'),
      popup = document.querySelector('.popup'),
      calcBtn = document.querySelectorAll('.popup_calc_btn.glazing_price_btn'),
      popupCalc = document.querySelector('.popup_calc'),
      popupCalcClose = document.querySelectorAll('.popup_calc_close'),
      calcBtn2 = document.querySelector('.popup_calc .popup_calc_button'),
      a,
      b,
      obj = {},
      popupCalc2 = document.querySelector('.popup_calc_profile'),
      calcBtn3 = document.querySelector('.popup_calc_profile_button'),
      popupCalc3 = document.querySelector('.popup_calc_end');
  var popupClose2 = document.querySelectorAll('.popup_calc_profile_close');
  var popupClose3 = document.querySelectorAll('.popup_calc_end_close');
  var width = document.querySelector('#width');
  var height = document.querySelector('#height');

  var getPopupengineer = function getPopupengineer() {
    Object(_popup_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"])(popupEngineerBtn, popupEngineer, close, false);
  };

  var getPopupPhone = function getPopupPhone() {
    Object(_popup_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"])(Phonelinks, popup, close, false);
  };

  var getPopupTimeOut = function getPopupTimeOut() {
    setTimeout(function () {
      Object(_popup_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"])(null, popup, close, false);
    }, 60000);
  };

  var getPopupCalc = function getPopupCalc() {
    a = Object(_popup_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"])(calcBtn, popupCalc, popupCalcClose, true);
    calcBtn2.addEventListener('click', function () {
      a.classList.remove('js-popupShow');
      b = Object(_popup_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"])(null, popupCalc2, popupClose2, true);
      obj.width = width.value;
      obj.height = height.value;
    });
    width.addEventListener('input', function (e) {
      if (width.name !== 'email' && width.name !== 'user_name') {
        if (e.data.search(/[0-9\+]/)) {
          this.value = '';
        }
      }
    });
    height.addEventListener('input', function (e) {
      if (height.name !== 'email' && height.name !== 'user_name') {
        if (e.data.search(/[0-9\+]/)) {
          this.value = '';
        }
      }
    });
  };

  calcBtn3.addEventListener('click', function () {
    b.classList.remove('js-popupShow');
    Object(_popup_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"])(null, popupCalc3, popupClose3, true);
    obj.mode = document.querySelector('input[name="checkbox-test"]:checked').value;
    console.log(obj);
  });
  getPopupengineer();
  getPopupPhone();
  getPopupTimeOut();
  getPopupCalc();
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
  Object(_timer_js__WEBPACK_IMPORTED_MODULE_3__["timer"])();
};
var getForms = function getForms() {
  Object(_forms_js__WEBPACK_IMPORTED_MODULE_4__["forms"])();
};
var calcPopup = function calcPopup() {
  Object(_calc_js__WEBPACK_IMPORTED_MODULE_5__["calc"])();
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
var getPopup = function getPopup(btn, popup, close, closeDown) {
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
      if (popup === e.target && !closeDown) {
        popup.classList.remove('js-popupShow');
      }
    });
  };

  popupShow();
  popupClose();
  return popup;
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
  Object(_modules_main_js__WEBPACK_IMPORTED_MODULE_0__["getForms"])();
  Object(_modules_main_js__WEBPACK_IMPORTED_MODULE_0__["calcPopup"])();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map