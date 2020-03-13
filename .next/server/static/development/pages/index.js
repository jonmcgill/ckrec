module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/GlobalStyles.tsx":
/*!*************************************!*\
  !*** ./components/GlobalStyles.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalStyles; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/styles */ "./shared/styles.ts");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function GlobalStyles() {
  return __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "299408768",
    dynamic: [_shared_styles__WEBPACK_IMPORTED_MODULE_2__["fonts"].import],
    __self: this
  }, `${_shared_styles__WEBPACK_IMPORTED_MODULE_2__["fonts"].import} *{box-sizing:border-box;}body,h1,h2,h3,h4,h5,h6,p,ul,ol{margin:0;padding:0;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25tY2dpbGwvd29yay9ja3JlYy9jb21wb25lbnRzL0dsb2JhbFN0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSXVCLEFBSytCLEFBSWIsU0FDQyxVQUNaLEdBTEEiLCJmaWxlIjoiL1VzZXJzL2pvbm1jZ2lsbC93b3JrL2NrcmVjL2NvbXBvbmVudHMvR2xvYmFsU3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvbnRzIH0gZnJvbSAnLi4vc2hhcmVkL3N0eWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdsb2JhbFN0eWxlcygpIHtcbiAgcmV0dXJuIChcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgJHtmb250cy5pbXBvcnR9XG5cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuXG4gICAgICBib2R5LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCB1bCwgb2wge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICApXG59Il19 */
/*@ sourceURL=/Users/jonmcgill/work/ckrec/components/GlobalStyles.tsx */`);
}

/***/ }),

/***/ "./components/Logo.tsx":
/*!*****************************!*\
  !*** ./components/Logo.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/styles */ "./shared/styles.ts");
var _jsxFileName = "/Users/jonmcgill/work/ckrec/components/Logo.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Logo({
  color = 'red',
  size = '60px'
}) {
  return __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3025849928", [_shared_styles__WEBPACK_IMPORTED_MODULE_2__["colors"][color] || color, size]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 106 124",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3025849928", [_shared_styles__WEBPACK_IMPORTED_MODULE_2__["colors"][color] || color, size]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("g", {
    fillRule: "nonzero",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3025849928", [_shared_styles__WEBPACK_IMPORTED_MODULE_2__["colors"][color] || color, size]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("path", {
    d: "M16.845 57.087c-2.364.292-3.97.703-4.816 1.233-.846.53-1.665 1.636-2.457 3.318l-5.411.839-1.717 2.167 1.717 1.023h2.473l2.938-1.023-1.307 3.292-.79 4.03v4.89l.79 3.537 1.379 3.75.897 2.137v2.246l-.897 1.017-1.379 1.082-1.631 1.167L4.16 93.33l-1.717 2.058L1.006 97.5l-.212 1.543v1.359l.212 1.438.902 1.314 4.449 5.04v1.83l1.459 1.433v1.175L9.644 112l2.19-2.784v-3.771l-1.598-.213-2.42-4.208v-1.98l4.684-2.576 1.017.22 5.095 5.153v3.391l.437 5.216.497 7.526-1.986 2.131v1.78l1.489.975h3.709l.85-1.854v-1.627l1.504-.71-.459-2.224v-10.161l2.562-4.006.424-1.562-.934-1.374 1.345-.298 2.277 1.98 12.214-26.401h-9.652l-1.933.345-2.906.95-1.82.937h-3.226l-1.336-1.432v-1.195h3.957l2.014-.66 1.076-.403.218-1.49.39-.875-4.67-6.156v-1.896l-1.045-1.11-.604-1.104 2.985-.411 1.65-1.516-.934-.877-2.703.877h-2.71l-1.41-.877-1.27-.643h-1.767z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3025849928", [_shared_styles__WEBPACK_IMPORTED_MODULE_2__["colors"][color] || color, size]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("path", {
    d: "M24 121.454l2.663 1.274L66.328 34.49h2.46l.408-6.725 5.568-11.391h1.047l4.449 2.53.565 2.851 2.304-1.252 2.91.8-1.871-2.716V15.96l-3.019 1.042-4.966-2.994.372-1.486 4.594-4.834h-1.255L81.15 0l-5.582 5.683-.803-1.216-.668 7.058-1.14.504-3.76-2.286V6.89l-2.577.798-3.141-.307 1.696 3.092v2.996l2.637-1.44 4.279 2.416.381.956-5.202 11.287-4.627 4.723 1.472 2.025z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3025849928", [_shared_styles__WEBPACK_IMPORTED_MODULE_2__["colors"][color] || color, size]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("path", {
    d: "M35 111.116l3.125.757 2.527 4.904.9 2.179 2.418 1.289.266 2.19 1.03.668h6.645l1.144-1.16-1.144-1.698v-2.109l-2.034-.27-1.521.27H47.27l-4.436-7.534v-3.06l.855-1.899 4.666-5.298.326-4.532 1.195-.3 4.045 2.931 2.032 1.009 2.638.305h7.32l2.43 2.241 1.989 1.218 1.913.978h3.168l2.374 1.883.461.618v2.965l-2.076-.353-1.82.882-.396 1.683v1.973l2.882 1.773h3.728l2.155-.898 1.887-1.882v-3.178l1.366.529.466 2.65 5.544 5.026.307 2.379h7.017l1.145-1.29-.885-1.535-.26-2.7-3.658-.295-5.368-8.347-.954-2.53-2.386-6.772v-3.413l1.517-2.395.38-10.006 1.443-1.161v-1.608h1.185l-.299-1.855 1.123-.725.59-.297v-2.289l.291-1.288 6.136 1.288 1.934-2.838.849-.352.356-2.772 2.641-2.486-.421-1.503-7.254-7.85v-3.44l-4.24-3.037-.293-4.73-1.413.962h-.839l-.346-1.368-.954 1.368-1.706-.418-.68-.95-.968-.332v.738l-.444.962h-.922l-1.117-.962v.962h-1.48l-1.018-.418L79.156 42v1.613l-.485.95h-1.834l-1.425-.544v1.342l-.358.628-1.099.298h-1.099V48.273l-1.081.476-1.731-.476V50.185h-2.009l.306 1.334-1.672-.543h-.758l.758 1.072v1.205h-1.22l-.453.59.915.577v.806h-.915l.454.816.461 1.072-.461.553-3.23-.284 1.718 1.196.338.713H63.06l-.84.535 1.718.662v1.262l-1.296.373 1.296.952-.878 1.503-1.138.272-1.415.695h-4.553z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3025849928", [_shared_styles__WEBPACK_IMPORTED_MODULE_2__["colors"][color] || color, size]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3025849928",
    dynamic: [_shared_styles__WEBPACK_IMPORTED_MODULE_2__["colors"][color] || color, size],
    __self: this
  }, `svg.__jsx-style-dynamic-selector{fill:${_shared_styles__WEBPACK_IMPORTED_MODULE_2__["colors"][color] || color};width:${size};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25tY2dpbGwvd29yay9ja3JlYy9jb21wb25lbnRzL0xvZ28udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCa0IsQUFHMkMsa0NBQ0MsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9qb25tY2dpbGwvd29yay9ja3JlYy9jb21wb25lbnRzL0xvZ28udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vc2hhcmVkL3N0eWxlcyc7XG5cbmludGVyZmFjZSBJTG9nbyB7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBzaXplPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvKHsgY29sb3IgPSAncmVkJywgc2l6ZSA9ICc2MHB4JyB9OiBJTG9nbykge1xuICByZXR1cm4gKFxuICAgIDxzcGFuPlxuICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEwNiAxMjRcIj5cbiAgICAgICAgPGcgZmlsbFJ1bGU9XCJub256ZXJvXCI+XG4gICAgICAgICAgPHBhdGggZD1cIk0xNi44NDUgNTcuMDg3Yy0yLjM2NC4yOTItMy45Ny43MDMtNC44MTYgMS4yMzMtLjg0Ni41My0xLjY2NSAxLjYzNi0yLjQ1NyAzLjMxOGwtNS40MTEuODM5LTEuNzE3IDIuMTY3IDEuNzE3IDEuMDIzaDIuNDczbDIuOTM4LTEuMDIzLTEuMzA3IDMuMjkyLS43OSA0LjAzdjQuODlsLjc5IDMuNTM3IDEuMzc5IDMuNzUuODk3IDIuMTM3djIuMjQ2bC0uODk3IDEuMDE3LTEuMzc5IDEuMDgyLTEuNjMxIDEuMTY3TDQuMTYgOTMuMzNsLTEuNzE3IDIuMDU4TDEuMDA2IDk3LjVsLS4yMTIgMS41NDN2MS4zNTlsLjIxMiAxLjQzOC45MDIgMS4zMTQgNC40NDkgNS4wNHYxLjgzbDEuNDU5IDEuNDMzdjEuMTc1TDkuNjQ0IDExMmwyLjE5LTIuNzg0di0zLjc3MWwtMS41OTgtLjIxMy0yLjQyLTQuMjA4di0xLjk4bDQuNjg0LTIuNTc2IDEuMDE3LjIyIDUuMDk1IDUuMTUzdjMuMzkxbC40MzcgNS4yMTYuNDk3IDcuNTI2LTEuOTg2IDIuMTMxdjEuNzhsMS40ODkuOTc1aDMuNzA5bC44NS0xLjg1NHYtMS42MjdsMS41MDQtLjcxLS40NTktMi4yMjR2LTEwLjE2MWwyLjU2Mi00LjAwNi40MjQtMS41NjItLjkzNC0xLjM3NCAxLjM0NS0uMjk4IDIuMjc3IDEuOTggMTIuMjE0LTI2LjQwMWgtOS42NTJsLTEuOTMzLjM0NS0yLjkwNi45NS0xLjgyLjkzN2gtMy4yMjZsLTEuMzM2LTEuNDMydi0xLjE5NWgzLjk1N2wyLjAxNC0uNjYgMS4wNzYtLjQwMy4yMTgtMS40OS4zOS0uODc1LTQuNjctNi4xNTZ2LTEuODk2bC0xLjA0NS0xLjExLS42MDQtMS4xMDQgMi45ODUtLjQxMSAxLjY1LTEuNTE2LS45MzQtLjg3Ny0yLjcwMy44NzdoLTIuNzFsLTEuNDEtLjg3Ny0xLjI3LS42NDNoLTEuNzY3elwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0yNCAxMjEuNDU0bDIuNjYzIDEuMjc0TDY2LjMyOCAzNC40OWgyLjQ2bC40MDgtNi43MjUgNS41NjgtMTEuMzkxaDEuMDQ3bDQuNDQ5IDIuNTMuNTY1IDIuODUxIDIuMzA0LTEuMjUyIDIuOTEuOC0xLjg3MS0yLjcxNlYxNS45NmwtMy4wMTkgMS4wNDItNC45NjYtMi45OTQuMzcyLTEuNDg2IDQuNTk0LTQuODM0aC0xLjI1NUw4MS4xNSAwbC01LjU4MiA1LjY4My0uODAzLTEuMjE2LS42NjggNy4wNTgtMS4xNC41MDQtMy43Ni0yLjI4NlY2Ljg5bC0yLjU3Ny43OTgtMy4xNDEtLjMwNyAxLjY5NiAzLjA5MnYyLjk5NmwyLjYzNy0xLjQ0IDQuMjc5IDIuNDE2LjM4MS45NTYtNS4yMDIgMTEuMjg3LTQuNjI3IDQuNzIzIDEuNDcyIDIuMDI1elwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0zNSAxMTEuMTE2bDMuMTI1Ljc1NyAyLjUyNyA0LjkwNC45IDIuMTc5IDIuNDE4IDEuMjg5LjI2NiAyLjE5IDEuMDMuNjY4aDYuNjQ1bDEuMTQ0LTEuMTYtMS4xNDQtMS42OTh2LTIuMTA5bC0yLjAzNC0uMjctMS41MjEuMjdINDcuMjdsLTQuNDM2LTcuNTM0di0zLjA2bC44NTUtMS44OTkgNC42NjYtNS4yOTguMzI2LTQuNTMyIDEuMTk1LS4zIDQuMDQ1IDIuOTMxIDIuMDMyIDEuMDA5IDIuNjM4LjMwNWg3LjMybDIuNDMgMi4yNDEgMS45ODkgMS4yMTggMS45MTMuOTc4aDMuMTY4bDIuMzc0IDEuODgzLjQ2MS42MTh2Mi45NjVsLTIuMDc2LS4zNTMtMS44Mi44ODItLjM5NiAxLjY4M3YxLjk3M2wyLjg4MiAxLjc3M2gzLjcyOGwyLjE1NS0uODk4IDEuODg3LTEuODgydi0zLjE3OGwxLjM2Ni41MjkuNDY2IDIuNjUgNS41NDQgNS4wMjYuMzA3IDIuMzc5aDcuMDE3bDEuMTQ1LTEuMjktLjg4NS0xLjUzNS0uMjYtMi43LTMuNjU4LS4yOTUtNS4zNjgtOC4zNDctLjk1NC0yLjUzLTIuMzg2LTYuNzcydi0zLjQxM2wxLjUxNy0yLjM5NS4zOC0xMC4wMDYgMS40NDMtMS4xNjF2LTEuNjA4aDEuMTg1bC0uMjk5LTEuODU1IDEuMTIzLS43MjUuNTktLjI5N3YtMi4yODlsLjI5MS0xLjI4OCA2LjEzNiAxLjI4OCAxLjkzNC0yLjgzOC44NDktLjM1Mi4zNTYtMi43NzIgMi42NDEtMi40ODYtLjQyMS0xLjUwMy03LjI1NC03Ljg1di0zLjQ0bC00LjI0LTMuMDM3LS4yOTMtNC43My0xLjQxMy45NjJoLS44MzlsLS4zNDYtMS4zNjgtLjk1NCAxLjM2OC0xLjcwNi0uNDE4LS42OC0uOTUtLjk2OC0uMzMydi43MzhsLS40NDQuOTYyaC0uOTIybC0xLjExNy0uOTYydi45NjJoLTEuNDhsLTEuMDE4LS40MThMNzkuMTU2IDQydjEuNjEzbC0uNDg1Ljk1aC0xLjgzNGwtMS40MjUtLjU0NHYxLjM0MmwtLjM1OC42MjgtMS4wOTkuMjk4aC0xLjA5OVY0OC4yNzNsLTEuMDgxLjQ3Ni0xLjczMS0uNDc2VjUwLjE4NWgtMi4wMDlsLjMwNiAxLjMzNC0xLjY3Mi0uNTQzaC0uNzU4bC43NTggMS4wNzJ2MS4yMDVoLTEuMjJsLS40NTMuNTkuOTE1LjU3N3YuODA2aC0uOTE1bC40NTQuODE2LjQ2MSAxLjA3Mi0uNDYxLjU1My0zLjIzLS4yODQgMS43MTggMS4xOTYuMzM4LjcxM0g2My4wNmwtLjg0LjUzNSAxLjcxOC42NjJ2MS4yNjJsLTEuMjk2LjM3MyAxLjI5Ni45NTItLjg3OCAxLjUwMy0xLjEzOC4yNzItMS40MTUuNjk1aC00LjU1M3pcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHN2ZyB7XG4gICAgICAgIGZpbGw6ICR7Y29sb3JzW2NvbG9yXSB8fCBjb2xvcn07XG4gICAgICAgIHdpZHRoOiAke3NpemV9O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L3NwYW4+XG4gIClcbn1cbiJdfQ== */
/*@ sourceURL=/Users/jonmcgill/work/ckrec/components/Logo.tsx */`));
}

/***/ }),

/***/ "./components/PageBackground.tsx":
/*!***************************************!*\
  !*** ./components/PageBackground.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageBackground; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jonmcgill/work/ckrec/components/PageBackground.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function PageBackground() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2376338858" + " " + "bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2376338858",
    __self: this
  }, ".bg.jsx-2376338858{background-image:url(\"https://enacademic.com/pictures/enwiki/70/Florentinischer_Meister_um_1300_001.jpg\");background-size:cover;background-position:center;background-repeat:no-repeat;position:fixed;height:100vh;width:100%;z-index:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25tY2dpbGwvd29yay9ja3JlYy9jb21wb25lbnRzL1BhZ2VCYWNrZ3JvdW5kLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0IsQUFHcUgsMEdBQ3BGLHNCQUNLLDJCQUNDLDRCQUNiLGVBQ0YsYUFDRixXQUNELFVBQ1oiLCJmaWxlIjoiL1VzZXJzL2pvbm1jZ2lsbC93b3JrL2NrcmVjL2NvbXBvbmVudHMvUGFnZUJhY2tncm91bmQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZUJhY2tncm91bmQoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmdcIiAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYmcge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZW5hY2FkZW1pYy5jb20vcGljdHVyZXMvZW53aWtpLzcwL0Zsb3JlbnRpbmlzY2hlcl9NZWlzdGVyX3VtXzEzMDBfMDAxLmpwZ1wiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/jonmcgill/work/ckrec/components/PageBackground.tsx */"));
}

/***/ }),

/***/ "./components/PageTitle.tsx":
/*!**********************************!*\
  !*** ./components/PageTitle.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageTitle; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo */ "./components/Logo.tsx");
/* harmony import */ var _shared_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/styles */ "./shared/styles.ts");
var _jsxFileName = "/Users/jonmcgill/work/ckrec/components/PageTitle.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function PageTitle() {
  return __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3740099757", [_shared_styles__WEBPACK_IMPORTED_MODULE_3__["fonts"].serif, _shared_styles__WEBPACK_IMPORTED_MODULE_3__["colors"].amber, _shared_styles__WEBPACK_IMPORTED_MODULE_3__["fonts"].sans]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "amber",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3740099757", [_shared_styles__WEBPACK_IMPORTED_MODULE_3__["fonts"].serif, _shared_styles__WEBPACK_IMPORTED_MODULE_3__["colors"].amber, _shared_styles__WEBPACK_IMPORTED_MODULE_3__["fonts"].sans]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3740099757", [_shared_styles__WEBPACK_IMPORTED_MODULE_3__["fonts"].serif, _shared_styles__WEBPACK_IMPORTED_MODULE_3__["colors"].amber, _shared_styles__WEBPACK_IMPORTED_MODULE_3__["fonts"].sans]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Christ the King"), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3740099757", [_shared_styles__WEBPACK_IMPORTED_MODULE_3__["fonts"].serif, _shared_styles__WEBPACK_IMPORTED_MODULE_3__["colors"].amber, _shared_styles__WEBPACK_IMPORTED_MODULE_3__["fonts"].sans]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Anglican Church")), __jsx("hr", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3740099757", [_shared_styles__WEBPACK_IMPORTED_MODULE_3__["fonts"].serif, _shared_styles__WEBPACK_IMPORTED_MODULE_3__["colors"].amber, _shared_styles__WEBPACK_IMPORTED_MODULE_3__["fonts"].sans]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3740099757", [_shared_styles__WEBPACK_IMPORTED_MODULE_3__["fonts"].serif, _shared_styles__WEBPACK_IMPORTED_MODULE_3__["colors"].amber, _shared_styles__WEBPACK_IMPORTED_MODULE_3__["fonts"].sans]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Preserving, teaching, and living the historic Christian faith in communion with other branches of Christ\u2019s Church to advance His Kingdom in all the earth."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3740099757",
    dynamic: [_shared_styles__WEBPACK_IMPORTED_MODULE_3__["fonts"].serif, _shared_styles__WEBPACK_IMPORTED_MODULE_3__["colors"].amber, _shared_styles__WEBPACK_IMPORTED_MODULE_3__["fonts"].sans],
    __self: this
  }, `header.__jsx-style-dynamic-selector{color:white;height:100vh;padding:20px;padding-top:25vh;position:relative;text-align:center;z-index:3;background:rgba(0,46,16,0.8);width:100%;}h1.__jsx-style-dynamic-selector{font-family:${_shared_styles__WEBPACK_IMPORTED_MODULE_3__["fonts"].serif};line-height:1.1;padding:20px 0;}h1.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{display:block;}hr.__jsx-style-dynamic-selector{width:40%;max-width:400px;border:none;border-bottom:2px solid ${_shared_styles__WEBPACK_IMPORTED_MODULE_3__["colors"].amber};}p.__jsx-style-dynamic-selector{margin:20px auto 0;font-family:${_shared_styles__WEBPACK_IMPORTED_MODULE_3__["fonts"].sans};line-height:1.6;max-width:400px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25tY2dpbGwvd29yay9ja3JlYy9jb21wb25lbnRzL1BhZ2VUaXRsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JrQixBQUd1QixBQVk2QixBQU0zQixBQUlKLEFBT1MsVUFOSCxFQXRCSCxFQWtCZixLQVcyQyxNQTVCNUIsQ0FzQkQsWUFyQkssQUFzQm9DLEdBWnJDLGNBVEUsRUFVSCxHQWlCQyxZQWhCbEIsQ0FWb0IsR0EyQkYsZUExQk4sQUFvQlosQ0FPQSxTQTFCa0MsNkJBQ3JCLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2pvbm1jZ2lsbC93b3JrL2NrcmVjL2NvbXBvbmVudHMvUGFnZVRpdGxlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dvIGZyb20gJy4vTG9nbyc7XG5pbXBvcnQgeyBjb2xvcnMsIGZvbnRzIH0gZnJvbSAnLi4vc2hhcmVkL3N0eWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VUaXRsZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgPExvZ28gY29sb3I9XCJhbWJlclwiIC8+XG4gICAgICA8aDE+XG4gICAgICAgIDxzcGFuPkNocmlzdCB0aGUgS2luZzwvc3Bhbj5cbiAgICAgICAgPHNwYW4+QW5nbGljYW4gQ2h1cmNoPC9zcGFuPlxuICAgICAgPC9oMT5cbiAgICAgIDxociAvPlxuICAgICAgPHA+XG4gICAgICAgIFByZXNlcnZpbmcsIHRlYWNoaW5nLCBhbmQgbGl2aW5nIHRoZSBoaXN0b3JpYyBDaHJpc3RpYW4gZmFpdGggaW5cbiAgICAgICAgY29tbXVuaW9uIHdpdGggb3RoZXIgYnJhbmNoZXMgb2YgQ2hyaXN04oCZcyBDaHVyY2ggdG8gYWR2YW5jZSBIaXMgS2luZ2RvbSBpbiBhbGwgdGhlIGVhcnRoLlxuICAgICAgPC9wPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDI1dmg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgNDYsIDE2LCAwLjgpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnRzLnNlcmlmfTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHNwYW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgaHIge1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICR7Y29sb3JzLmFtYmVyfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udHMuc2Fuc307XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9oZWFkZXI+XG4gIClcbn0iXX0= */
/*@ sourceURL=/Users/jonmcgill/work/ckrec/components/PageTitle.tsx */`));
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/GlobalStyles */ "./components/GlobalStyles.tsx");
/* harmony import */ var _components_PageBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageBackground */ "./components/PageBackground.tsx");
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PageTitle */ "./components/PageTitle.tsx");
var _jsxFileName = "/Users/jonmcgill/work/ckrec/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_components_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx(_components_PageBackground__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
}

/***/ }),

/***/ "./shared/styles.ts":
/*!**************************!*\
  !*** ./shared/styles.ts ***!
  \**************************/
/*! exports provided: fonts, colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fonts", function() { return fonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
const fonts = {
  import: "@import url('https://fonts.googleapis.com/css?family=Cormorant+Unicase|Barlow');",
  sans: 'Barlow, Arial',
  serif: '"Cormorant Unicase", "Palatino", "sans-serif"'
};
const colors = {
  amber: '#DF8B00',
  black: '#122232',
  brown: '#8D6E63',
  cyan: '#B2EBF2',
  red: '#b71c1c'
};

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jonmcgill/work/ckrec/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map