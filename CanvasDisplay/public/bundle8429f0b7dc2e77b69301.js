/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
}

body {
    font-family: 'Roboto', sans-serif;
    color: black;
    overflow: hidden;
    scroll-behavior: smooth;
}

#background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
}

header {
    margin: auto;
    font-size: 2.5vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1vh solid rgb(255, 255, 255);
}

#headerCanvas {
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}

main {
    position: relative;
    height: 100vh;
    width: 100vw;
}

#displayTitle {
    position: absolute;
    top: 3%;
    left: 1%;
    width: 20vw;
    height: 5vh;
    min-width: fit-content;
    min-height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(25, 25, 25, 0.50);
    backdrop-filter: blur(10px);
    color: white;
    font-size: 1.5vw;
    padding: 1.5vw 5vw;
    border: 0.3vw solid white;
}

#mainCanvas {
    background-color: rgb(0, 0, 0);
    position: relative;
    z-index: -1;
}
`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,2CAA2C;AAC/C;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,aAAa;IACb,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,WAAW;IACX,WAAW;IACX,sBAAsB;IACtB,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,wCAAwC;IACxC,2BAA2B;IAC3B,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;IAClB,WAAW;AACf","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    user-select: none;\r\n}\r\n\r\nbody {\r\n    font-family: 'Roboto', sans-serif;\r\n    color: black;\r\n    overflow: hidden;\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n#background {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    z-index: -1;\r\n}\r\n\r\nheader {\r\n    margin: auto;\r\n    font-size: 2.5vw;\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-bottom: 1vh solid rgb(255, 255, 255);\r\n}\r\n\r\n#headerCanvas {\r\n    background-color: black;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: -1;\r\n}\r\n\r\nmain {\r\n    position: relative;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n#displayTitle {\r\n    position: absolute;\r\n    top: 3%;\r\n    left: 1%;\r\n    width: 20vw;\r\n    height: 5vh;\r\n    min-width: fit-content;\r\n    min-height: fit-content;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(25, 25, 25, 0.50);\r\n    backdrop-filter: blur(10px);\r\n    color: white;\r\n    font-size: 1.5vw;\r\n    padding: 1.5vw 5vw;\r\n    border: 0.3vw solid white;\r\n}\r\n\r\n#mainCanvas {\r\n    background-color: rgb(0, 0, 0);\r\n    position: relative;\r\n    z-index: -1;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/headerBg.svg":
/*!*********************************!*\
  !*** ./src/assets/headerBg.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/headerBgab3c50040210aab5cfa26688d247bb79.svg");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/animations.js":
/*!***********************************!*\
  !*** ./src/scripts/animations.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bouncingCircles: () => (/* binding */ bouncingCircles),
/* harmony export */   circularMotion: () => (/* binding */ circularMotion),
/* harmony export */   clearObjectArray: () => (/* binding */ clearObjectArray),
/* harmony export */   collision: () => (/* binding */ collision),
/* harmony export */   galacticLight: () => (/* binding */ galacticLight),
/* harmony export */   gravityCircles: () => (/* binding */ gravityCircles),
/* harmony export */   interactiveBouncingCircles: () => (/* binding */ interactiveBouncingCircles),
/* harmony export */   realisticFireworks: () => (/* binding */ realisticFireworks),
/* harmony export */   sineWaves: () => (/* binding */ sineWaves),
/* harmony export */   staticCollision: () => (/* binding */ staticCollision)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ "./src/scripts/classes.js");
// Get canvas context and element


// Get canvas context and element
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Object Array to store different 2D elements
let objectArray = [];

// Function that updateObjectArray
function clearObjectArray() {
    objectArray = [];
}

// Get random integer from a min and max value
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Function that clear screen
function clearScreen() {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fill();
    ctx.closePath();
}

// Function for bouncing circles
function bouncingCircles() {
    // Check if initialGeneration is true
    if (objectArray.length === 0) {

        // Create circles
        for (let i = 0; i < 100; i++) {
            // Declaring variable
            let radius = 50; // Set radius
            let x = Math.random() * (canvas.width - radius * 2) + radius; // Set x coordinate
            let y = Math.random() * (canvas.height - radius * 2) + radius; // Set y coordinate
            let dx = Math.floor((Math.random() - 0.5) * 100) / 10; // Set x velocity
            let dy = Math.floor((Math.random() - 0.5) * 100) / 10; // Set y velocity
            let color = `hsl(${Math.random() * 360}, 50%, 50%)`; // Set color

            objectArray.push(new _classes_js__WEBPACK_IMPORTED_MODULE_0__.BouncingCircles(x, y, dx, dy, radius, color));
        }
    }

    // Animates the circles
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < objectArray.length; i++) {
        objectArray[i].update();
    }
}

// Function for circular motion version 1
function circularMotion(version) {
    if (objectArray.length === 0) {
        // Create particle
        for (let i = 0; i < 200; i ++) {
            let size = (Math.random() * 10) + 5; // Set size
            let color = `hsl(${Math.random() * 360}, 50%, 50%)`; // Set color

            objectArray.push(new _classes_js__WEBPACK_IMPORTED_MODULE_0__.CircularMotion(canvas.width / 2, canvas.height / 2, size, color, version));
        }
    }

    // Animate the circular motion
    clearScreen();
    objectArray.forEach(particle => {
        particle.update();
    });
}

// Function for dynamic collision
function collision() {
    let spawnCount = canvas.width * canvas.height / ((canvas.width + canvas.height) * 20);
    if (objectArray.length === 0) {
        // Create and insert particle into array
        for (let i = 0; i < spawnCount; i++) {

            // Set random variables
            let radius = 50;
            let color = `hsl(${Math.random() * 360}, 50%, 50%)`;
            let x = randomIntFromRange(radius, canvas.width - radius);
            let y = randomIntFromRange(radius, canvas.height - radius);
            let dx = randomIntFromRange(-5, 5);
            let dy = randomIntFromRange(-5, 5);

            // Make sure it's not the first particle
            if (i !== 0) {
                // Check for collisions with existing particle
                for (let j = 0; j < objectArray.length; j++) {
                    // Execute if (x, y) coordinates are too close 
                    if ((0,_classes_js__WEBPACK_IMPORTED_MODULE_0__.getDistance)(x, y, objectArray[j].x, objectArray[j].y) < (radius + objectArray[j].radius + 2)) {
                        // Reassign x, y coordinates
                        x = randomIntFromRange(radius, canvas.width - radius);
                        y = randomIntFromRange(radius, canvas.height - radius);

                        // Reset for loop to recheck if new coordinates are far enough
                        j = -1;
                    }
                }
            }

            // Insert particle object into array if no collision
            objectArray.push(new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Collision(x, y, radius, color, dx, dy));
        }
    }

    // Animate the collision
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    objectArray.forEach(particle => {
        particle.update(objectArray);
    })
}

// Function for galactic light
let opacity = 1; // Set opacity
let radians = 0 // Set radian value
function galacticLight() {
    let spawnCount = canvas.width * canvas.height / 500;
    let margin = canvas.width * canvas.height / canvas.width;

    if (objectArray.length === 0) {
        for (let i = 0; i < spawnCount; i++) {
            const canvasWidth = canvas.width + margin;
            const canvasHeight = canvas.height + margin;
            const x = Math.random() * canvasWidth - canvasWidth / 2;
            const y = Math.random() * canvasHeight - canvasHeight / 2;
            const color = `hsl(${Math.random() * 360}, 50%, 50%)`;
            const radius = 2 * Math.random();
    
            objectArray.push(new _classes_js__WEBPACK_IMPORTED_MODULE_0__.GalacticLight(x, y, radius, color));
        }
    }

    // Clear the canvas
    ctx.beginPath();
    ctx.fillStyle = `rgba(10, 10, 10, ${opacity}`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.closePath

    // Save the current transformation state
    ctx.save();

    // Translate the canvas origin to the center of the canvas
    ctx.translate(canvas.width / 2, canvas.height / 2);

    // Rotate the canvas by the specified radians
    ctx.rotate(radians);

    // Iterate over each light and update its position or properties
    objectArray.forEach(light => {
        light.update(); // Update each light after each loop
    });

    // Restore the previously saved transformation state
    ctx.restore();

    // Increment the radians value to rotate the canvas gradually
    radians += 0.003;

    // Change bg color opacity depending on mouseDown
    if (mouseDown && opacity >= 0.03) {
        opacity -= 0.01;
    } else if (!mouseDown && opacity < 1) {
        opacity += 0.005;
    }
}

// Function for gravity circles
function gravityCircles() {

}

// Function for interactive bouncing circles
function interactiveBouncingCircles() {

}

// Function for realistic fireworks
function realisticFireworks() {

}

// Function for sine waves
function sineWaves() {

}

// Function for static collision
function staticCollision() {

}

let mouseDown = false;
window.addEventListener('mousedown', () => {
    mouseDown = true;
})

window.addEventListener('mouseup', () => {
    mouseDown = false;
})

// Export functions


/***/ }),

/***/ "./src/scripts/classes.js":
/*!********************************!*\
  !*** ./src/scripts/classes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BouncingCircles: () => (/* binding */ BouncingCircles),
/* harmony export */   CircularMotion: () => (/* binding */ CircularMotion),
/* harmony export */   Collision: () => (/* binding */ Collision),
/* harmony export */   GalacticLight: () => (/* binding */ GalacticLight),
/* harmony export */   getDistance: () => (/* binding */ getDistance),
/* harmony export */   updateMouseCoordinates: () => (/* binding */ updateMouseCoordinates)
/* harmony export */ });
/* harmony import */ var _resolveCollision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolveCollision */ "./src/scripts/resolveCollision.js");
// Import


// Get canvas context and element
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Mouse coordinates
let mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2
};

// Function that updateObjectArray
function updateMouseCoordinates(x, y) {
    mouse.x = x;
    mouse.y = y;
}

// Random interger generating function
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Get the distance between 2 objects
function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    // Return the distance between the 2 objects using Pythagorean Formula
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// BouncingCircles class
class BouncingCircles {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        // Drawing a circle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        // Check if circle hit the side of the screen
        if (this.x > (canvas.width - this.radius) || this.x < (0 + this.radius)) {
            this.dx = -this.dx;
        }

        if (this.y > (canvas.height - this.radius) || this.y < (0 + this.radius)) {
            this.dy = -this.dy;
        }

        // Modify x coordinate
        this.x += this.dx;
        this.y += this.dy;

        // Call Circle.draw() function;
        this.draw();
    }
}

// CircularMotion class with different versions
class CircularMotion { // Particle Class
    constructor(x, y, size, color, version) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.radians = Math.random() * Math.PI * 2; // Set random radians (starting point)
        this.velocity = 0.03; // Rate of change for the radians
        this.lastMouse = {
            x: x,
            y: y
        };
        this.version = version;

        if (version === 1) {
            //! Version 1
            this.distanceFromCenter = randomIntFromRange(100, 400); // Set random distance from center
        } else if (this.version === 2) {
            //! Version 2
            this.distanceFromCenter = {
                x: randomIntFromRange(100, 400),
                y: randomIntFromRange(100, 400)
            }
        }
    }

    update() {
        const lastPoint = {
            x: this.x,
            y: this.y
        };

        // Move points over time
        this.radians += this.velocity; // Increase radians value over time

        // Gradually 
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

        // Circular Motion
        if (this.version === 1) {
            //! Version 1
            this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
            this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;
            this.draw(lastPoint);
        } else if (this.version === 2) {
            //! Version 2
            this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter.x;
            this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter.y;
            this.draw(lastPoint);
        }
    }

    draw(lastPoint) {
        //! Trail with lines
        ctx.beginPath();
        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineWidth = this.size;
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.closePath();

        //! Trail with circles
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

// Collision class
class Collision {
    constructor(x, y, radius, color, dx, dy) {
        this.x = x;
        this.y = y;
        this.velocity = {
            x: dx,
            y: dy
        }
        this.radius = radius;
        this.color = color;
        this.mass = this.radius ** 2 * Math.PI; // Mass proportional to Particle area
        this.opacity = 1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
        ctx.closePath();
    }

    update(particleArray) {
        this.draw();

        // Cycle through every particle
        for (let i = 0; i < particleArray.length; i++) {
            // Do not detect collision with itself
            if (this === particleArray[i]) continue;

            // Check collision
            if (getDistance(this.x, this.y, particleArray[i].x, particleArray[i].y) < (this.radius + particleArray[i].radius)) {
                // Resolve collision
                (0,_resolveCollision__WEBPACK_IMPORTED_MODULE_0__.resolveCollision)(this, particleArray[i]);
            }
        }

        // Reset x velocity if touching border
        if ((this.x + this.radius) > canvas.width || (this.x - this.radius) < 0) {
            this.velocity.x = -this.velocity.x;
        }

        // Reset y velocity if touching border
        if ((this.y + this.radius) > canvas.height || (this.y - this.radius) < 0) {
            this.velocity.y = -this.velocity.y;
        }

        // Move Particle based on velocity
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}

// GalacticLight class
class GalacticLight {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.draw();
    }
}

 // Export classes

/***/ }),

/***/ "./src/scripts/resolveCollision.js":
/*!*****************************************!*\
  !*** ./src/scripts/resolveCollision.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveCollision: () => (/* binding */ resolveCollision)
/* harmony export */ });
// Rotate function to rotate velocities so its 1D
function rotate(velocity, angle) {
    const rotatedVelocity = {
        x: (Math.cos(angle) * velocity.x) - (Math.sin(angle) * velocity.y),
        y: (Math.sin(angle) * velocity.x) + (Math.cos(angle) * velocity.y)
    }

    // Return rotated velocity
    return rotatedVelocity;
}

// Redirect direction upon collision
function resolveCollision(particle, otherParticle) {
    // Get the difference in velocities of both particles
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    // Get distance of x and y of both particles
    const xDistance = otherParticle.x - particle.x;
    const yDistance = otherParticle.y - particle.y;
    
    // Check if clipping / overlap
    if (xVelocityDiff * xDistance + yVelocityDiff * yDistance >= 0) {
        // Get angle of the triangle formed by the two colliding particles
        const angle = -Math.atan2((otherParticle.y - particle.y), (otherParticle.x - particle.x))
    
        // Set mass of both first and second particle
        const m1 = particle.mass;
        const m2 = otherParticle.mass;
    
        // Velocity before collision
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);
    
        // Velocity after the 1D collision (Using One-dimensional Newtonian equasion)
        const v1 = {
            x: (u1.x * (m1 - m2) + 2 * m2 * u2.x) / (m1 + m2),
            y: u1.y
        }
        const v2 = {
            x: (u2.x * (m2 - m1) + 2 * m1 * u1.x) / (m1 + m2),
            y: u2.y
        }
    
        // Velocity after rotation axis back to original location
        const finalV1 = rotate(v1, -angle);
        const finalV2 = rotate(v2, -angle);
    
        // Reassigning particle volacity to simulate bounce effect
        particle.velocity = finalV1;
        otherParticle.velocity = finalV2;
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _assets_headerBg_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/headerBg.svg */ "./src/assets/headerBg.svg");
/* harmony import */ var _animations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations.js */ "./src/scripts/animations.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes.js */ "./src/scripts/classes.js");
// Imports





// HTML element
const backgroundElement = document.getElementById('background');
const canvas = document.getElementById('mainCanvas');

// Get canvas context
const ctx = canvas.getContext('2d');

// Function to set the size of the canvas to match the window size
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    (0,_classes_js__WEBPACK_IMPORTED_MODULE_3__.updateMouseCoordinates)(canvas.width / 2, canvas.height / 2); // Set mouse coordinates to the center of the canvas
    (0,_animations_js__WEBPACK_IMPORTED_MODULE_2__.clearObjectArray)(); // Clear updateObjectArray function
}
setCanvasSize(); // Call the function to set the initial canvas size

// Set background image using style.backgroundImage
backgroundElement.style.backgroundImage = `url(${_assets_headerBg_svg__WEBPACK_IMPORTED_MODULE_1__["default"]})`;

// Variables
let atMain = false;
let index = 0;

// Project list
const projects = [
    { title: 'BouncingCircles', function: _animations_js__WEBPACK_IMPORTED_MODULE_2__.bouncingCircles },
    { title: 'CircularMotion Version 1', function: _animations_js__WEBPACK_IMPORTED_MODULE_2__.circularMotion, version: 1 },
    { title: 'CircularMotion Version 2', function: _animations_js__WEBPACK_IMPORTED_MODULE_2__.circularMotion, version: 2 },
    { title: 'DynamicCollision', function: _animations_js__WEBPACK_IMPORTED_MODULE_2__.collision },
    { title: 'GalacticLight', function: _animations_js__WEBPACK_IMPORTED_MODULE_2__.galacticLight },
    { title: 'GravityCircles', function: _animations_js__WEBPACK_IMPORTED_MODULE_2__.gravityCircles },
    { title: 'InteractiveBouncingCircles', function: _animations_js__WEBPACK_IMPORTED_MODULE_2__.interactiveBouncingCircles },
    { title: 'RealisticFireworks', function: _animations_js__WEBPACK_IMPORTED_MODULE_2__.realisticFireworks },
    { title: 'SineWaves', function: _animations_js__WEBPACK_IMPORTED_MODULE_2__.sineWaves },
    { title: 'StaticCollision', function: _animations_js__WEBPACK_IMPORTED_MODULE_2__.staticCollision },
];

// Animate function
function animate() {
    // Make a loop
    requestAnimationFrame(animate);
    
    // Check if at project index for each project in projects array
    projects.forEach((project, projectIndex) => {
        if (index === projectIndex) {
            const displayTitle = document.getElementById('displayTitle');
            displayTitle.textContent = project.title;
            const projectVersion = project.version ? project.version : 0;

            // Check if project doesnt have a version
            if (projectVersion === 0) {
                project.function(); // Call project function without version
                return;
            }

            project.function(project.version); // Call project function with their version
        }
    });
}
animate(); // Call animate function

// Event listener for arrow keys
let isScrolling = false; // Flag to prevent multiple key presses
window.addEventListener('keydown', (e) => {
    if (isScrolling) {
        return;
    }

    // Execute code based on key pressed
    switch (e.key) {
        default: // Default case (always update mouse coordinates to the center of the canvas)
            (0,_classes_js__WEBPACK_IMPORTED_MODULE_3__.updateMouseCoordinates)(canvas.width / 2, canvas.height / 2);

        case 'ArrowDown':
            const mainSection = document.getElementById('main');
            mainSection.scrollIntoView({ behavior: 'smooth' });
            isScrolling = true;
            setTimeout(() => {
                isScrolling = false;
                atMain = true;
            }, 1000);
            break;

        case 'ArrowUp':
            const headerSection = document.getElementById('header');
            headerSection.scrollIntoView({ behavior: 'smooth' });
            isScrolling = true;
            setTimeout(() => {
                isScrolling = false;
                atMain = false;
            }, 1000);
            break;

        case 'ArrowRight':
            if (atMain && index < projects.length - 1) {
                ctx.clearRect(0, 0, innerWidth, innerHeight);
                (0,_animations_js__WEBPACK_IMPORTED_MODULE_2__.clearObjectArray)();
                index++;
            }
            (0,_classes_js__WEBPACK_IMPORTED_MODULE_3__.updateMouseCoordinates)(canvas.width / 2, canvas.height / 2);
            break;

        case 'ArrowLeft':
            if (atMain && index > 0) {
                ctx.clearRect(0, 0, innerWidth, innerHeight);
                (0,_animations_js__WEBPACK_IMPORTED_MODULE_2__.clearObjectArray)();
                index--;
            }
            break;
    }
});

// Event listener for resize
window.addEventListener('resize', () => {
    const headerSection = document.getElementById('header');
    headerSection.scrollIntoView({ behavior: 'smooth' });
    setCanvasSize();
    atMain = false;
});

// Event lsiterner for mouse movement
window.addEventListener('mousemove', (e) => {
    (0,_classes_js__WEBPACK_IMPORTED_MODULE_3__.updateMouseCoordinates)(e.x, e.y);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle8429f0b7dc2e77b69301.js.map