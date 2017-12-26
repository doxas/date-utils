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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function zeroPadding(s, n) {
	var a = new Array(n).join('0');
	return (a + s).substr(-n);
}

var DateUtils = function () {
	function DateUtils() {
		_classCallCheck(this, DateUtils);
	}

	_createClass(DateUtils, null, [{
		key: 'val',
		value: function val(value) {
			var v = value;
			if (v == null) {
				v = Date.now();
			}
			return v;
		}
	}, {
		key: 'getTime',
		value: function getTime(value) {
			return new Date(DateUtils.val(value)).getTime();
		}
	}, {
		key: 'getUtcTime',
		value: function getUtcTime(value) {
			var t = new Date(DateUtils.val(value));
			var y = t.getUTCFullYear();
			var m = t.getUTCMonth();
			var d = t.getUTCDate();
			var h = t.getUTCHours();
			var i = t.getUTCMinutes();
			var s = t.getUTCSeconds();
			var a = t.getUTCMilliseconds();
			return new Date(y, m, d, h, i, s, a).getTime();
		}
	}, {
		key: 'getTimeString',
		value: function getTimeString(value, noneSecond) {
			var t = new Date(DateUtils.val(value));
			var y = t.getFullYear();
			var m = zeroPadding(t.getMonth() + 1, 2);
			var d = zeroPadding(t.getDate(), 2);
			var h = zeroPadding(t.getHours(), 2);
			var i = zeroPadding(t.getMinutes(), 2);
			var s = zeroPadding(t.getSeconds(), 2);
			var r = y + '.' + m + '.' + d + ' - ' + h + ':' + i;
			if (noneSecond) {
				return r;
			}
			return r + ':' + s;
		}
	}, {
		key: 'getUtcTimeString',
		value: function getUtcTimeString(value, noneSecond) {
			var t = DateUtils.getTime(value);
			var o = new Date().getTimezoneOffset() * 60000;
			return DateUtils.getTimeString(t - o, noneSecond);
		}
	}]);

	return DateUtils;
}();

// temp


exports.default = DateUtils;
window.DateUtils = DateUtils;

/***/ })
/******/ ]);