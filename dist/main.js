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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/graph-note-create-screen.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/graph-note-create-screen.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".graph-note-create-screen {\n  /*border: 1px solid #eee;*/\n  /*border-radius: 20px;*/\n  /*padding: 0 20px;*/\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _utils_observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/observable.js */ "./src/utils/observable.js");
/* harmony import */ var _storage_local_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage-local.js */ "./src/storage-local.js");
/* harmony import */ var _renderer_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer-dom.js */ "./src/renderer-dom.js");
/* harmony import */ var _components_graph_note_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/graph-note-root.js */ "./src/components/graph-note-root.js");
/* harmony import */ var _utils_common_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/common.ts */ "./src/utils/common.ts");





window.addEventListener('DOMContentLoaded', startup);
// Minimal string interpolation, possibly unsafe
String.prototype.interpolate = _utils_common_ts__WEBPACK_IMPORTED_MODULE_4__["interpolate"];
class App extends _utils_observable_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(params) {
        super();
        this.version = '0.0.1';
    }
    static create() {
        // for future use
        let privateParams = {};
        let app = new App(privateParams);
        app.init();
        return app;
    }
    init() {
        // passing state and global methods to every dependency
        // this.graph = GraphNode.create(this);
        this.M = window.M;
        this.CodeMirror = window.CodeMirror;
        // this.storage = new IndexedStorage(this);
        this.storage = new _storage_local_js__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        // this.renderer = new RendererConsole(this);
        this.renderer = new _renderer_dom_js__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        // TODO: history
        //this.history = new HistoryBrowser(this);
        this.renderRoot();
        // startup event
        this.fireEvent('graph-note-init');
        // test
        /*
        var dbx = new Dropbox({ accessToken: 'DuWRKtJOP9MAAAAAAAA-u3xoAQaEcGi7-nk0oJYkglIUm5PsCG_8hM6BW0FLxfjV' });
        dbx.usersGetCurrentAccount()
          .then(function(response) {
                console.log(response);
              })
          .catch(function(error) {
                console.error(error);
              });
         */
    }
    renderRoot() {
        let baseComponent = new _components_graph_note_root_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        let baseCmpNode = this.renderer.queryCmp(baseComponent.name);
        baseCmpNode.appendChild(baseComponent.render());
    }
}
function startup() {
    App.create();
}


/***/ }),

/***/ "./src/components/component.ts":
/*!*************************************!*\
  !*** ./src/components/component.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((function (document) {
    /*
     * Component
     *
     * This class is unaware of DOM and only uses renderer
     *
     */
    class Component {
        constructor(app, props = null) {
            this.app = app;
            this.renderer = app.renderer;
            this.name = '';
            this.dom = null;
            this.components = [];
            // redefined in children
            this.state = null;
            // passed during initialization
            this.props = props;
            // private
            this.constructComponents();
            this.bindEvents();
            this.mutateState();
            this.bindListeners();
        }
        init() {
            // This method is implemented by children
            // creates DOM from html
        }
        constructComponents() {
            this.init();
            this.renderComponents();
        }
        el(q) {
            // TODO: to renderer
            // what is queryselector, component does not know that
            let element = this.dom.querySelector(q);
            element.addEvent = this.renderer.addEvent.bind(element);
            return element;
        }
        bindEvents() {
            // pure
            //
            // Side (DOM) -> App
            // state unaware only fires events
        }
        mutateState() {
            // pure: state -> new state
            //
            // we can mutate state here based on event
            //
            // e => state change
            //
            // TODO:
            // do we need this mthod since we don't have
            // automatic state -> DOM bindings
            // and we actually dont need them because we don't depend on DOM
        }
        bindListeners() {
            // impure, async db, dom manipulations
            //
            // state => manipulation
            //
            // App -> Side (DOM, Canvas, DB)
            // we can probably merge mutateState here
            //
            // Every component only responsible for it's own state
            // We can fire diifferent event on each step (mutateState fires ith state obj)
            //
            // TODO: do we neeed tapable here ?
            //
            // All states are saved in FireState db to make state management
            // We can also store state as global object and pass it between components.
        }
        renderFragment(html) {
            // TODO: move to renderer, rename
            return document.createRange().createContextualFragment(html);
        }
        render() {
            // component -> DOM el
            let rendered = this.dom;
            return rendered;
        }
        // TODO move to render
        renderComponents() {
            // component <- DOM elements from inner components
            //
            // this method would take renderer API and render inner components to self
            // let el = new GraphNoteCreateScreen();
            // this.renderer(el.class, el.render())
            //
            // cmp.render actually uses api.renderer
            // this creates a lot of additional deps
            //
            for (let comp of this.components) {
                let baseCmp = new comp(this.app);
                let baseNode = this.renderer.queryCmpv2(this.dom, baseCmp.name);
                this.renderer.append(baseCmp.render(), baseNode);
            }
        }
    }
    return Component;
})(document));


/***/ }),

/***/ "./src/components/graph-note-add-btn.html":
/*!************************************************!*\
  !*** ./src/components/graph-note-add-btn.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"fixed-action-btn\">\n  <a class=\"btn-floating btn-large red\">\n    <i class=\"large material-icons graph-note-add\">mode_edit</i>\n  </a>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/components/graph-note-add-btn.js":
/*!**********************************************!*\
  !*** ./src/components/graph-note-add-btn.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddBtnComponent; });
/* harmony import */ var _graph_note_add_btn_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph-note-add-btn.html */ "./src/components/graph-note-add-btn.html");
/* harmony import */ var _graph_note_add_btn_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_graph_note_add_btn_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/components/component.ts");
/* harmony import */ var _graph_note_root_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graph-note-root-state */ "./src/components/graph-note-root-state.ts");




class AddBtnComponent extends _component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  init() {
    this.name = 'graph-note-add-btn';
    this.dom = this.renderFragment(_graph_note_add_btn_html__WEBPACK_IMPORTED_MODULE_0___default.a);
    this.state = Object(_graph_note_root_state__WEBPACK_IMPORTED_MODULE_2__["default"])(this.app);
  }
  bindEvents() {
    let addBtn = this.el('.graph-note-add');

    addBtn.addEvent('click', (e) => {
      if (this.state.getName() === 'init') {
        addBtn.textContent = 'check';
        this.app.fireEvent('graph-note-add', e);
      } else {
        addBtn.textContent = 'mode_edit';
        this.app.fireEvent('graph-note-create', e);
      }
    });
  }
}


/***/ }),

/***/ "./src/components/graph-note-create-screen-state.ts":
/*!**********************************************************!*\
  !*** ./src/components/graph-note-create-screen-state.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/state.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.ts");


/* harmony default export */ __webpack_exports__["default"] = (stateWrapper);
const state = {
    name: 'init',
    data: {
        init: {
            header: null,
            text: null,
        },
        dirty: null,
    },
    actions: {
        init: {},
        dirty: {
            updateState: (stateData, obj) => Object.assign({}, stateData, obj),
            resetState: (stateData) => Object.assign({}, stateData, {
                header: null,
                text: null,
            })
        },
    }
};
function stateWrapper(app) {
    let stateObj = _state__WEBPACK_IMPORTED_MODULE_0__["default"].create(state);
    stateObj['actions']['dirty']['saveState'] = (stateData) => new Promise((resolve) => {
        let id = Object(_utils_common__WEBPACK_IMPORTED_MODULE_1__["uuid"])(stateData.header);
        app.storage.set(id, stateData);
        app.fireEvent('graph-note-created');
        resolve(id);
    });
    return stateObj;
}


/***/ }),

/***/ "./src/components/graph-note-create-screen.css":
/*!*****************************************************!*\
  !*** ./src/components/graph-note-create-screen.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./graph-note-create-screen.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/graph-note-create-screen.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/graph-note-create-screen.html":
/*!******************************************************!*\
  !*** ./src/components/graph-note-create-screen.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"graph-note-create-screen hide\">\n  <div class=\"input-field\">\n    <input id=\"graph-note-header\" type=\"text\" class=\"graph-note-header\" autocomplete=\"off\">\n    <label for=\"graph-note-header\">File Name</label>\n  </div>\n  <!--\n  <div class=\"input-field\">\n    <div class=\"chips chips-autocomplete\"></div>\n  </div>\n  -->\n  <div class=\"input-field\">\n    <textarea id=\"graph-note-text\" class=\"graph-note-text\" placeholder=\"Text\"></textarea>\n    <!--<label for=\"graph-note-text\">Note</label>-->\n  </div>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/components/graph-note-create-screen.js":
/*!****************************************************!*\
  !*** ./src/components/graph-note-create-screen.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateScreenComponent; });
/* harmony import */ var _graph_note_create_screen_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph-note-create-screen.css */ "./src/components/graph-note-create-screen.css");
/* harmony import */ var _graph_note_create_screen_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_graph_note_create_screen_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graph_note_create_screen_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph-note-create-screen.html */ "./src/components/graph-note-create-screen.html");
/* harmony import */ var _graph_note_create_screen_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_graph_note_create_screen_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ "./src/components/component.ts");
/* harmony import */ var _graph_note_create_screen_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graph-note-create-screen-state */ "./src/components/graph-note-create-screen-state.ts");





class CreateScreenComponent extends _component__WEBPACK_IMPORTED_MODULE_2__["default"] {

  // TODO: This class unaware of renderer and uses component

  init() {
    this.name = 'graph-note-create-screen';
    this.state = Object(_graph_note_create_screen_state__WEBPACK_IMPORTED_MODULE_3__["default"])(this.app);
    this.dom = this.renderFragment(_graph_note_create_screen_html__WEBPACK_IMPORTED_MODULE_1___default.a);
  }
  bindEvents() {
    let noteHeader = this.el('.graph-note-header');
    let noteText = this.el('.graph-note-text');
    this.cm = this.app.CodeMirror.fromTextArea(noteText, {
      linenumbers: true,
      mode: "markdown",
    });
    this.cm.on('change', () => {
      this.state.changeComponentStateTo('dirty');
      this.state.runComponentAction('updateState', {
        header: noteHeader.value,
        text: this.cm.getValue(),
      });
    });
  }
  bindListeners() {

    let createEl = this.el('.graph-note-create-screen');
    let noteHeader = this.el('.graph-note-header');
    let noteText = this.el('.graph-note-text');

    /*
      let parentsChips = this.el('.chips-autocomplete');

      let chipsInstance;

      let chipOptions = {
        placeholder: 'Parents',
        autocompleteOptions: {
          limit: Infinity,
          minLength: 1
        }
      };

      this.app.on('graph-note-init', (e) => {
        chipOptions.autocompleteOptions.data = this.generateChipTags();
        chipsInstance = this.app.M.Chips.init(parentsChips, chipOptions);
      });
      this.app.on('graph-note-created', (e) => {
        chipOptions.autocompleteOptions.data = this.generateChipTags();
        chipsInstance = this.app.M.Chips.init(parentsChips, chipOptions);
      });
   */

    this.app.on('graph-note-add', (e) => {
      this.app.renderer.classRemove('hide', createEl);
      this.cm.refresh();
      this.cm.focus();
      noteHeader.value = new Date().toLocaleDateString('en-US');
    });
    //this.app.after
    this.app.on('graph-note-create', () => {
      this.app.renderer.classAdd('hide', createEl);
      this.state.runComponentAction('saveState');
    });
    this.app.on('graph-note-created', () => {
      this.state.runComponentAction('resetState');
      this.state.changeComponentStateTo('init');
    });
  }
  /*
  generateChipTags() {
    let objNames = {};
    for (let [uuid, nodeIns] of this.app.storage.getMap()) {
      objNames[uuid] = null;
    }
    return objNames;
  }
 */
}


/***/ }),

/***/ "./src/components/graph-note-list-element.html":
/*!*****************************************************!*\
  !*** ./src/components/graph-note-list-element.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<!-- TODO: class should not clash with other css'es -->\n<div class=\"graph-note-node scale-transition\">\n  <p>\n    <a class=\"graph-note-node-link\">${header}</a>\n    <a href=\"#\" class=\"graph-note-node-edit-link\"><i class=\"material-icons\">edit</i></a>\n    <a href=\"#\" class=\"graph-note-node-delete-link\"><i class=\"material-icons\">delete</i></a>\n  </p>\n</div>\n\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/components/graph-note-list-element.js":
/*!***************************************************!*\
  !*** ./src/components/graph-note-list-element.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphNoteNode; });
/* harmony import */ var _graph_note_list_element_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph-note-list-element.html */ "./src/components/graph-note-list-element.html");
/* harmony import */ var _graph_note_list_element_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_graph_note_list_element_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/components/component.ts");



class GraphNoteNode extends _component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  init() {
    this.name = 'graph-note-node';
    this.dom = this.renderFragment(_graph_note_list_element_html__WEBPACK_IMPORTED_MODULE_0___default.a.interpolate(this.props));
  }
  bindEvents() {
    let el = this.el('.graph-note-node-edit-link');
    el.addEvent('click', (e) => {
      e.preventDefault();
    });
  }
}


/***/ }),

/***/ "./src/components/graph-note-list.html":
/*!*********************************************!*\
  !*** ./src/components/graph-note-list.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"graph-note-node-list scale-transition\">\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/components/graph-note-list.js":
/*!*******************************************!*\
  !*** ./src/components/graph-note-list.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NodeListComponent; });
/* harmony import */ var _graph_note_list_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph-note-list.html */ "./src/components/graph-note-list.html");
/* harmony import */ var _graph_note_list_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_graph_note_list_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/components/component.ts");
/* harmony import */ var _graph_note_list_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graph-note-list-element.js */ "./src/components/graph-note-list-element.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "./src/state.ts");
/* harmony import */ var _graph_note_create_screen_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graph-note-create-screen-state */ "./src/components/graph-note-create-screen-state.ts");






class NodeListComponent extends _component__WEBPACK_IMPORTED_MODULE_1__["default"] {

  init() {
    this.name = 'graph-note-list';
    this.dom = this.renderFragment(_graph_note_list_html__WEBPACK_IMPORTED_MODULE_0___default.a);
  }
  bindListeners() {
    let nodeContainer = this.el('.graph-note-node-list');
    this.renderNodes();
    this.app.on('graph-note-create', () => {
      console.info(nodeContainer);
      this.renderNodes();
    });
  }
  renderNodes() {
    let nodeContainer = this.el('.graph-note-node-list');
    let nodes = this.app.storage.getMap();
    for (const [k,v] of nodes) {
      let nodeEl = new _graph_note_list_element_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.app, v);
      this.app.renderer.append(nodeEl.render(), nodeContainer);
    }
  }
}


/***/ }),

/***/ "./src/components/graph-note-root-state.ts":
/*!*************************************************!*\
  !*** ./src/components/graph-note-root-state.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/state.ts");

/* harmony default export */ __webpack_exports__["default"] = (stateWrapper);
// We need to define state as const outside of function
// or WeakMap won't treat it as the same object
const state = {
    name: 'init',
    data: {
        init: {
            welcomeVisible: true
        },
        // we can explicitly define state here
        // or we can omit stateData for this state
        // and use actions to create from initial state
        create: null,
    },
    actions: {
        init: {
            toggleElement: (stateData) => {
                return Object.assign({}, stateData, {
                    welcomeVisible: false,
                });
            },
        },
        create: {
            toggleElement: (stateData) => {
                return Object.assign({}, stateData, {
                    welcomeVisible: true,
                });
            },
        },
    }
};
function stateWrapper(app) {
    return _state__WEBPACK_IMPORTED_MODULE_0__["default"].create(state);
}


/***/ }),

/***/ "./src/components/graph-note-root.html":
/*!*********************************************!*\
  !*** ./src/components/graph-note-root.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"container\">\n  <div class=\"row\">\n    <form class=\"col s12\">\n      <!-- can be moved to a separate component -->\n      <div class=\"graph-note-welcome scale-transition\">\n        <p>Hello! And Welcome to GraphNotes.</p>\n        <p>Feel free to create any number of notes connected to each other!</p>\n        ${welcomeVisible}\n      </div>\n      <graph-note-list></graph-note-list>\n      <graph-note-create-screen></graph-note-create-screen>\n    </form>\n  </div>\n  <graph-note-add-btn></graph-note-add-btn>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/components/graph-note-root.js":
/*!*******************************************!*\
  !*** ./src/components/graph-note-root.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RootComponent; });
/* harmony import */ var _graph_note_root_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph-note-root.html */ "./src/components/graph-note-root.html");
/* harmony import */ var _graph_note_root_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_graph_note_root_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/components/component.ts");
/* harmony import */ var _graph_note_add_btn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graph-note-add-btn.js */ "./src/components/graph-note-add-btn.js");
/* harmony import */ var _graph_note_create_screen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graph-note-create-screen.js */ "./src/components/graph-note-create-screen.js");
/* harmony import */ var _graph_note_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graph-note-list.js */ "./src/components/graph-note-list.js");
/* harmony import */ var _graph_note_root_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graph-note-root-state */ "./src/components/graph-note-root-state.ts");







class RootComponent extends _component__WEBPACK_IMPORTED_MODULE_1__["default"] {

  // This class unaware of renderer and uses component

  init() {
    this.name = 'graph-note-root';
    this.state = Object(_graph_note_root_state__WEBPACK_IMPORTED_MODULE_5__["default"])(this.app);
    this.dom = this.renderFragment(_graph_note_root_html__WEBPACK_IMPORTED_MODULE_0___default.a.interpolate(this.state.getData()));
    this.components = [_graph_note_add_btn_js__WEBPACK_IMPORTED_MODULE_2__["default"], _graph_note_create_screen_js__WEBPACK_IMPORTED_MODULE_3__["default"], _graph_note_list_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
  }
  initState() {
    // TODO: for info only
    // STATE
    // ow to access from other comp?
    // how to subscribe local storage?
    /*
    this.app.on('event', () => {
      // one way to change state
      this.stateActions[this.state][actionName]();
      // make DOM manipulations
      // no state change
    });
    // or
    this.app.on('event', () => {
      this.changeCompStateTo('act', onExit=(), onEnter=())
    });
    this.onStateChange(() => {
      // require branching
      // make DOM manipulations
    })
   */
  }
  bindEvents() {
    // Materialize button
    let elems = this.el('.fixed-action-btn');
    let instances = this.app.M.FloatingActionButton.init(elems, []);
  }
  mutateState() {
    this.app.on('graph-note-add', () => {
      this.state.runComponentAction('toggleElement');
      // TODO: we can use this method in actions
      // either in api runComponentAction(name, newState,Name)
      // or in action definition
      this.state.changeComponentStateTo('create');
    });
    this.app.on('graph-note-create', () => {
      this.state.runComponentAction('toggleElement');
      this.state.changeComponentStateTo('init');
    });
  }
  bindListeners() {
    let welcomeEl = this.el('.graph-note-welcome');
    let listEl = this.el('.graph-note-node-list');
    this.state.on('create', () => {
      welcomeEl.classList.add('scale-out');
      welcomeEl.classList.add('hide');
      listEl.classList.add('scale-out');
      listEl.classList.add('hide');
    });
    this.state.on('init', () => {
      welcomeEl.classList.remove('scale-out');
      welcomeEl.classList.remove('hide');
      listEl.classList.remove('hide');
      listEl.classList.remove('scale-out');
    });
  }
}


/***/ }),

/***/ "./src/renderer-dom.js":
/*!*****************************!*\
  !*** ./src/renderer-dom.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((function(document) {

  /**
   * RendererDOM
   *
   * Class is responsible for accessing DOM API
   *
   * Sublassed by Component
   *
   */
  class RendererDOM {
    constructor(app) {
      this.app = app;
    }
    query(q) {
      return document.querySelector(q);
    }
    queryCmp(q) {
      return document.getElementsByTagName(q)[0];
    }
    queryCmpv2(doc, q) {
      return doc.querySelector(q);
    }
    classAdd(classText, node) {
      node.classList.add(classText);
    }
    classRemove(classText, node) {
      node.classList.remove(classText);
    }
    prepend(documentFragment, node) {
      let firstEl = node.firstChild;
      node.insertBefore(documentFragment, firstEl);
    }
    addEvent(name, callback) {
      this.addEventListener(name, callback);
    }
    append(documentFragment, node) {
      //TODO: make actual replace
      node.appendChild(documentFragment);
    }
    replace(documentFragment, oldNode, parentNode) {
      parentNode.replaceChild(documentFragment, oldNode);
    }
    set(text, node) {
      node.textContent = text;
    }
  }

  return RendererDOM;

})(document));


/***/ }),

/***/ "./src/state.ts":
/*!**********************!*\
  !*** ./src/state.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/observable.js */ "./src/utils/observable.js");

/* harmony default export */ __webpack_exports__["default"] = ((function (Observable) {
    let instances = new WeakMap();
    class State {
        constructor(obj) {
            this.name = obj.name || '';
            this.data = obj.data || {};
            this.actions = obj.actions || {};
            // TODO: Proxy can be used to track changes
            this.observable = new Observable();
            // TODO: tracks state for each component
            //this.stateHistory = {};
            // TODO: history TEST
            /* this.app.on('graph-note-history-change', () => {
              let h = this.app.history.getStateData().hash;
              console.info(h);
              console.info(this.stateHistory);
              console.warn(this.stateHistory[h]);
              if (this.stateHistory[h]) {
                this.changeComponentStateTo(this.stateHistory[h], false);
              }
            });
             */
        }
        static create(obj) {
            let instance;
            if (!instances.has(obj)) {
                instance = new State(obj);
                instances.set(obj, instance);
            }
            return instances.get(obj);
        }
        getData() {
            return this.data[this.name];
        }
        getName() {
            return this.name;
        }
        on(name, f) {
            this.observable.on(name, f);
        }
        /* This method chages state data,
         * but leaves component state intact,
         * You should manually call changeComponentStateTo
         * to change state
         */
        runComponentAction(actionName, obj) {
            try {
                this.data[this.name] = this.actions[this.name][actionName](this.getData(), obj);
            }
            catch (TypeError) {
                throw new Error(`There is no ${actionName} action in ${this.getName()} state`);
            }
        }
        /* This methdod does not change state data in any way,
         * we have actions for that,
         * It saves current state and transitions state
         */
        changeComponentStateTo(newState, save = true) {
            this.observable.fireEvent(newState);
            this.name = newState;
            // TODO: move to renderer
            // this will write to to history on each component change
            // we can create start state history method to control state more elegantly
            // TODO: history
            /*
            let h = uuid(this.state.name);
            if (save) {
              this.stateHistory[h] = this.state.name;
              this.app.history.saveState(this.state, h);
            }
             */
            /*
          changeComponentStateTo_v0(newState) {
            let hash = new Hash(); //or index
            this.prev = this.prev.slice(1,this.prev.lenth);
            this.prev = {
              stateData = this.stateData;
            }
            //push history change
            History[hash] = this.prev;
            for action in this.onExit() {
              action()
            }
            this.sate = newState;
            for action in this.onEnter() {
              action()
            }
            this.pres = this.state;
          }
          */
        }
    }
    return State;
})(_utils_observable_js__WEBPACK_IMPORTED_MODULE_0__["default"]));


/***/ }),

/***/ "./src/storage-local.js":
/*!******************************!*\
  !*** ./src/storage-local.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (( function(window, Array, JSON) {

//TODO: use promises since it's a side effect system

let BUCKET_NAME = 'nodes';

class StorageLocal {
  constructor(app) {
    this.app = app;
    this.init();
    return this;
  }
  init() {
    let jsonStorage = window.localStorage.getItem(BUCKET_NAME);
    if (jsonStorage) {
      this.map = new Map(JSON.parse(jsonStorage));
    } else {
      this.map = new Map();
    }
  }
  getMap() {
    return this.map;
  }
  get(k) {
    return this.map.get(k);
  }
  set(k, v) {
    if (!k) return;
    this.map.set(k, v);
    let toJsonStorage = JSON.stringify(Array.from(this.map.entries()));
    window.localStorage.setItem(BUCKET_NAME, toJsonStorage);
  }
}

return StorageLocal;

})(window, Array, JSON));


/***/ }),

/***/ "./src/utils/common.ts":
/*!*****************************!*\
  !*** ./src/utils/common.ts ***!
  \*****************************/
/*! exports provided: uuid, interpolate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
// TODO: Date dep
function uuid(text) {
    text = text || '';
    return new Date().getTime() + text.substring(0, 100);
}
function interpolate(params) {
    const names = Object.keys(params);
    const vals = Object.values(params);
    return new Function(...names, `return \`${this}\`;`)(...vals);
}



/***/ }),

/***/ "./src/utils/observable.js":
/*!*********************************!*\
  !*** ./src/utils/observable.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Observable; });
// One of the ideas was to track state based on fired events
// Each new fired event creates new state
// We can track input and output of the function as call fram of the stack
const interceptors = new Map();
const states = new Map();

let stateStart = 0;

class Observable {
  constructor() {
    this.listeners = new Map();
  }
  on(name, f) {
    if (!this.listeners.has(name)) {
      this.listeners.set(name, new Set());
    }
    this.listeners.get(name).add(f);
    return this.off(name, f);
  }
  //TODO: Create before, after, during methods
  intercept(name, f) {
    //ony one interecpt is allowed to eliminate race conditions
    if (interceptors.has(name)) {
      throw new Error('Only one interceptor is allowed!');
    }
    interceptors.set(name, f);
  }
  off(name, f) {
    // TODO
    if (this.listeners.has(name)) {
      this.listeners.get(name);
    }
  }
  fireEvent(name) {
    if (this.listeners.has(name)) {
      for (let f of this.listeners.get(name)) {
        if (interceptors.has(name)) {
          f(interceptors.get(name)());
        } else {
          f();
        }
      }
    }
  }
  // state was moved to each component
  /*
  state(name, extData) {
    switch(name) {
      case 'state-back':
        stateStart -= extData; //TODO < 0
      //TODO dirtyhack
        var {name: eventName, extData: eventData} = states.get(stateStart);
        this.fireEvent(eventName, eventData, false);
        break;
      case 'state-forward':
        stateStart += extData; //TODO mod max
        var {name: eventName, extData: eventData} = states.get(stateStart);
        this.fireEvent(eventName, eventData, false);
        break;
    }
  }
  */
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ3JhcGgtbm90ZS1jcmVhdGUtc2NyZWVuLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ncmFwaC1ub3RlLWFkZC1idG4uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ncmFwaC1ub3RlLWFkZC1idG4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ3JhcGgtbm90ZS1jcmVhdGUtc2NyZWVuLXN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dyYXBoLW5vdGUtY3JlYXRlLXNjcmVlbi5jc3M/NzJiNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ncmFwaC1ub3RlLWNyZWF0ZS1zY3JlZW4uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ncmFwaC1ub3RlLWNyZWF0ZS1zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ3JhcGgtbm90ZS1saXN0LWVsZW1lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ncmFwaC1ub3RlLWxpc3QtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ncmFwaC1ub3RlLWxpc3QuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ncmFwaC1ub3RlLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ3JhcGgtbm90ZS1yb290LXN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dyYXBoLW5vdGUtcm9vdC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dyYXBoLW5vdGUtcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXItZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmFnZS1sb2NhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29tbW9uLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9vYnNlcnZhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLDhCQUE4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QUFDO0FBQ3ZELENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxNQUFjO0lBQ2pDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxPQUFPLElBQUksUUFBUSxDQUFDLEdBQUcsS0FBSyxFQUFFLFlBQVksSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2hFLENBQUM7QUFFeUI7Ozs7Ozs7Ozs7Ozs7QUNiMUI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsYUFBYSxvQ0FBb0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLGFBQWEsb0NBQW9DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ncmFwaC1ub3RlLWNyZWF0ZS1zY3JlZW4ge1xcbiAgLypib3JkZXI6IDFweCBzb2xpZCAjZWVlOyovXFxuICAvKmJvcmRlci1yYWRpdXM6IDIwcHg7Ki9cXG4gIC8qcGFkZGluZzogMCAyMHB4OyovXFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuL3V0aWxzL29ic2VydmFibGUuanMnO1xuaW1wb3J0IFN0b3JhZ2VMb2NhbCBmcm9tICcuL3N0b3JhZ2UtbG9jYWwuanMnO1xuaW1wb3J0IFJlbmRlcmVyRE9NIGZyb20gJy4vcmVuZGVyZXItZG9tLmpzJztcbmltcG9ydCBSb290Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9ncmFwaC1ub3RlLXJvb3QuanMnO1xuaW1wb3J0IEhpc3RvcnlCcm93c2VyIGZyb20gJy4vaGlzdG9yeS1icm93c2VyJztcbmltcG9ydCB7aW50ZXJwb2xhdGV9IGZyb20gJy4vdXRpbHMvY29tbW9uLnRzJztcbi8vaW1wb3J0IHsgRHJvcGJveCB9IGZyb20gJ2Ryb3Bib3gnO1xuXG4vLyBUUyB0ZW1wIGRlY2xhcmF0aW9uc1xuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBNOiBhbnk7XG4gICAgQ29kZU1pcnJvcjogYW55O1xuICB9XG4gIGludGVyZmFjZSBTdHJpbmcge1xuICAgIGludGVycG9sYXRlIChwYXJhbXM6IE9iamVjdCk6IEZ1bmN0aW9uO1xuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc3RhcnR1cCk7XG5cbi8vIE1pbmltYWwgc3RyaW5nIGludGVycG9sYXRpb24sIHBvc3NpYmx5IHVuc2FmZVxuU3RyaW5nLnByb3RvdHlwZS5pbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgLy8gZml4aW5nIFRTMjMzOVxuICB2ZXJzaW9uOiBzdHJpbmc7XG4gIC8vIFRPRE86IGludGVyZmFjZSBpbXBsZW1lbnRzIFN0b3JhZ2VcbiAgc3RvcmFnZTogYW55O1xuICAvLyBUT0RPOiBpbnRlcmZhY2UgaW1wbGVtZW50cyBSZW5kZXJlclxuICByZW5kZXJlcjogYW55O1xuICBNO1xuICBDb2RlTWlycm9yOiBhbnk7XG4gIGhpc3Rvcnk6IGFueTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM6IE9iamVjdCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52ZXJzaW9uID0gJzAuMC4xJztcbiAgfVxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIC8vIGZvciBmdXR1cmUgdXNlXG4gICAgbGV0IHByaXZhdGVQYXJhbXMgPSB7fTtcbiAgICBsZXQgYXBwID0gbmV3IEFwcChwcml2YXRlUGFyYW1zKTtcbiAgICBhcHAuaW5pdCgpO1xuICAgIHJldHVybiBhcHA7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICAvLyBwYXNzaW5nIHN0YXRlIGFuZCBnbG9iYWwgbWV0aG9kcyB0byBldmVyeSBkZXBlbmRlbmN5XG4gICAgLy8gdGhpcy5ncmFwaCA9IEdyYXBoTm9kZS5jcmVhdGUodGhpcyk7XG5cbiAgICB0aGlzLk0gPSB3aW5kb3cuTTtcblxuICAgIHRoaXMuQ29kZU1pcnJvciA9IHdpbmRvdy5Db2RlTWlycm9yO1xuXG4gICAgLy8gdGhpcy5zdG9yYWdlID0gbmV3IEluZGV4ZWRTdG9yYWdlKHRoaXMpO1xuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBTdG9yYWdlTG9jYWwodGhpcyk7XG5cbiAgICAvLyB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyQ29uc29sZSh0aGlzKTtcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyRE9NKHRoaXMpO1xuXG4gICAgLy8gVE9ETzogaGlzdG9yeVxuICAgIC8vdGhpcy5oaXN0b3J5ID0gbmV3IEhpc3RvcnlCcm93c2VyKHRoaXMpO1xuXG4gICAgdGhpcy5yZW5kZXJSb290KCk7XG5cbiAgICAvLyBzdGFydHVwIGV2ZW50XG4gICAgdGhpcy5maXJlRXZlbnQoJ2dyYXBoLW5vdGUtaW5pdCcpO1xuXG4gICAgLy8gdGVzdFxuICAgIC8qXG4gICAgdmFyIGRieCA9IG5ldyBEcm9wYm94KHsgYWNjZXNzVG9rZW46ICdEdVdSS3RKT1A5TUFBQUFBQUFBLXUzeG9BUWFFY0dpNy1uazBvSllrZ2xJVW01UHNDR184aE02QlcwRkx4ZmpWJyB9KTtcbiAgICBkYngudXNlcnNHZXRDdXJyZW50QWNjb3VudCgpXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAqL1xuICB9XG4gIHJlbmRlclJvb3QoKSB7XG4gICAgbGV0IGJhc2VDb21wb25lbnQgPSBuZXcgUm9vdENvbXBvbmVudCh0aGlzKTtcbiAgICBsZXQgYmFzZUNtcE5vZGUgPSB0aGlzLnJlbmRlcmVyLnF1ZXJ5Q21wKGJhc2VDb21wb25lbnQubmFtZSk7XG4gICAgYmFzZUNtcE5vZGUuYXBwZW5kQ2hpbGQoYmFzZUNvbXBvbmVudC5yZW5kZXIoKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnR1cCgpIHtcbiAgQXBwLmNyZWF0ZSgpO1xufVxuIiwiaW1wb3J0IHt1dWlkfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oZG9jdW1lbnQpIHtcblxuICAvKlxuICAgKiBDb21wb25lbnRcbiAgICpcbiAgICogVGhpcyBjbGFzcyBpcyB1bmF3YXJlIG9mIERPTSBhbmQgb25seSB1c2VzIHJlbmRlcmVyXG4gICAqXG4gICAqL1xuXG4gIGNsYXNzIENvbXBvbmVudCB7XG4gICAgYXBwOiBhbnk7XG4gICAgcmVuZGVyZXI6IGFueTtcbiAgICBuYW1lOiBTdHJpbmc7XG4gICAgZG9tOiBhbnk7XG4gICAgY29tcG9uZW50czogQXJyYXk8dHlwZW9mIENvbXBvbmVudD47XG4gICAgc3RhdGU6IGFueTtcbiAgICBwcm9wczogYW55O1xuXG4gICAgY29uc3RydWN0b3IoYXBwLCBwcm9wcz1udWxsKSB7XG4gICAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICAgIHRoaXMucmVuZGVyZXIgPSBhcHAucmVuZGVyZXI7XG4gICAgICB0aGlzLm5hbWUgPSAnJztcbiAgICAgIHRoaXMuZG9tID0gbnVsbDtcbiAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xuXG4gICAgICAvLyByZWRlZmluZWQgaW4gY2hpbGRyZW5cbiAgICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuXG4gICAgICAvLyBwYXNzZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uXG4gICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICAgIC8vIHByaXZhdGVcbiAgICAgIHRoaXMuY29uc3RydWN0Q29tcG9uZW50cygpO1xuXG4gICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgIHRoaXMubXV0YXRlU3RhdGUoKTtcbiAgICAgIHRoaXMuYmluZExpc3RlbmVycygpO1xuXG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAvLyBUaGlzIG1ldGhvZCBpcyBpbXBsZW1lbnRlZCBieSBjaGlsZHJlblxuICAgICAgLy8gY3JlYXRlcyBET00gZnJvbSBodG1sXG4gICAgfVxuICAgIGNvbnN0cnVjdENvbXBvbmVudHMoKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50cygpO1xuICAgIH1cbiAgICBlbChxKSB7XG4gICAgICAvLyBUT0RPOiB0byByZW5kZXJlclxuICAgICAgLy8gd2hhdCBpcyBxdWVyeXNlbGVjdG9yLCBjb21wb25lbnQgZG9lcyBub3Qga25vdyB0aGF0XG4gICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IocSk7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50ID0gdGhpcy5yZW5kZXJlci5hZGRFdmVudC5iaW5kKGVsZW1lbnQpO1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAvLyBwdXJlXG4gICAgICAvL1xuICAgICAgLy8gU2lkZSAoRE9NKSAtPiBBcHBcbiAgICAgIC8vIHN0YXRlIHVuYXdhcmUgb25seSBmaXJlcyBldmVudHNcbiAgICB9XG4gICAgbXV0YXRlU3RhdGUoKSB7XG4gICAgICAvLyBwdXJlOiBzdGF0ZSAtPiBuZXcgc3RhdGVcbiAgICAgIC8vXG4gICAgICAvLyB3ZSBjYW4gbXV0YXRlIHN0YXRlIGhlcmUgYmFzZWQgb24gZXZlbnRcbiAgICAgIC8vXG4gICAgICAvLyBlID0+IHN0YXRlIGNoYW5nZVxuICAgICAgLy9cbiAgICAgIC8vIFRPRE86XG4gICAgICAvLyBkbyB3ZSBuZWVkIHRoaXMgbXRob2Qgc2luY2Ugd2UgZG9uJ3QgaGF2ZVxuICAgICAgLy8gYXV0b21hdGljIHN0YXRlIC0+IERPTSBiaW5kaW5nc1xuICAgICAgLy8gYW5kIHdlIGFjdHVhbGx5IGRvbnQgbmVlZCB0aGVtIGJlY2F1c2Ugd2UgZG9uJ3QgZGVwZW5kIG9uIERPTVxuICAgIH1cbiAgICBiaW5kTGlzdGVuZXJzKCkge1xuICAgICAgLy8gaW1wdXJlLCBhc3luYyBkYiwgZG9tIG1hbmlwdWxhdGlvbnNcbiAgICAgIC8vXG4gICAgICAvLyBzdGF0ZSA9PiBtYW5pcHVsYXRpb25cbiAgICAgIC8vXG4gICAgICAvLyBBcHAgLT4gU2lkZSAoRE9NLCBDYW52YXMsIERCKVxuICAgICAgLy8gd2UgY2FuIHByb2JhYmx5IG1lcmdlIG11dGF0ZVN0YXRlIGhlcmVcbiAgICAgIC8vXG4gICAgICAvLyBFdmVyeSBjb21wb25lbnQgb25seSByZXNwb25zaWJsZSBmb3IgaXQncyBvd24gc3RhdGVcbiAgICAgIC8vIFdlIGNhbiBmaXJlIGRpaWZmZXJlbnQgZXZlbnQgb24gZWFjaCBzdGVwIChtdXRhdGVTdGF0ZSBmaXJlcyBpdGggc3RhdGUgb2JqKVxuICAgICAgLy9cbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWVkIHRhcGFibGUgaGVyZSA/XG4gICAgICAvL1xuICAgICAgLy8gQWxsIHN0YXRlcyBhcmUgc2F2ZWQgaW4gRmlyZVN0YXRlIGRiIHRvIG1ha2Ugc3RhdGUgbWFuYWdlbWVudFxuICAgICAgLy8gV2UgY2FuIGFsc28gc3RvcmUgc3RhdGUgYXMgZ2xvYmFsIG9iamVjdCBhbmQgcGFzcyBpdCBiZXR3ZWVuIGNvbXBvbmVudHMuXG4gICAgfVxuICAgIHJlbmRlckZyYWdtZW50KGh0bWwpIHtcbiAgICAgIC8vIFRPRE86IG1vdmUgdG8gcmVuZGVyZXIsIHJlbmFtZVxuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGh0bWwpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAvLyBjb21wb25lbnQgLT4gRE9NIGVsXG4gICAgICBsZXQgcmVuZGVyZWQgPSB0aGlzLmRvbTtcbiAgICAgIHJldHVybiByZW5kZXJlZDtcbiAgICB9XG4gICAgLy8gVE9ETyBtb3ZlIHRvIHJlbmRlclxuICAgIHJlbmRlckNvbXBvbmVudHMoKSB7XG4gICAgICAvLyBjb21wb25lbnQgPC0gRE9NIGVsZW1lbnRzIGZyb20gaW5uZXIgY29tcG9uZW50c1xuICAgICAgLy9cbiAgICAgIC8vIHRoaXMgbWV0aG9kIHdvdWxkIHRha2UgcmVuZGVyZXIgQVBJIGFuZCByZW5kZXIgaW5uZXIgY29tcG9uZW50cyB0byBzZWxmXG4gICAgICAvLyBsZXQgZWwgPSBuZXcgR3JhcGhOb3RlQ3JlYXRlU2NyZWVuKCk7XG4gICAgICAvLyB0aGlzLnJlbmRlcmVyKGVsLmNsYXNzLCBlbC5yZW5kZXIoKSlcbiAgICAgIC8vXG4gICAgICAvLyBjbXAucmVuZGVyIGFjdHVhbGx5IHVzZXMgYXBpLnJlbmRlcmVyXG4gICAgICAvLyB0aGlzIGNyZWF0ZXMgYSBsb3Qgb2YgYWRkaXRpb25hbCBkZXBzXG4gICAgICAvL1xuICAgICAgZm9yIChsZXQgY29tcCBvZiB0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IGJhc2VDbXAgPSBuZXcgY29tcCh0aGlzLmFwcCk7XG4gICAgICAgIGxldCBiYXNlTm9kZSA9IHRoaXMucmVuZGVyZXIucXVlcnlDbXB2Mih0aGlzLmRvbSwgYmFzZUNtcC5uYW1lKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmQoYmFzZUNtcC5yZW5kZXIoKSwgYmFzZU5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBDb21wb25lbnQ7XG5cbn0pKGRvY3VtZW50KVxuIiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiZml4ZWQtYWN0aW9uLWJ0blxcXCI+XFxuICA8YSBjbGFzcz1cXFwiYnRuLWZsb2F0aW5nIGJ0bi1sYXJnZSByZWRcXFwiPlxcbiAgICA8aSBjbGFzcz1cXFwibGFyZ2UgbWF0ZXJpYWwtaWNvbnMgZ3JhcGgtbm90ZS1hZGRcXFwiPm1vZGVfZWRpdDwvaT5cXG4gIDwvYT5cXG48L2Rpdj5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJpbXBvcnQgaHRtbCBmcm9tICcuL2dyYXBoLW5vdGUtYWRkLWJ0bi5odG1sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IFJvb3RTdGF0ZSBmcm9tICcuL2dyYXBoLW5vdGUtcm9vdC1zdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZEJ0bkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGluaXQoKSB7XG4gICAgdGhpcy5uYW1lID0gJ2dyYXBoLW5vdGUtYWRkLWJ0bic7XG4gICAgdGhpcy5kb20gPSB0aGlzLnJlbmRlckZyYWdtZW50KGh0bWwpO1xuICAgIHRoaXMuc3RhdGUgPSBSb290U3RhdGUodGhpcy5hcHApO1xuICB9XG4gIGJpbmRFdmVudHMoKSB7XG4gICAgbGV0IGFkZEJ0biA9IHRoaXMuZWwoJy5ncmFwaC1ub3RlLWFkZCcpO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50KCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5nZXROYW1lKCkgPT09ICdpbml0Jykge1xuICAgICAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnY2hlY2snO1xuICAgICAgICB0aGlzLmFwcC5maXJlRXZlbnQoJ2dyYXBoLW5vdGUtYWRkJywgZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnbW9kZV9lZGl0JztcbiAgICAgICAgdGhpcy5hcHAuZmlyZUV2ZW50KCdncmFwaC1ub3RlLWNyZWF0ZScsIGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgU3RhdGUgZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHt1dWlkfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZVdyYXBwZXI7XG5cbmNvbnN0IHN0YXRlID0ge1xuICAgIG5hbWU6ICdpbml0JyxcbiAgICBkYXRhOiB7XG4gICAgICBpbml0OiB7XG4gICAgICAgIGhlYWRlcjogbnVsbCxcbiAgICAgICAgdGV4dDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBkaXJ0eTogbnVsbCxcbiAgICB9LFxuICAgIGFjdGlvbnM6IHtcbiAgICAgIGluaXQ6IHtcbiAgICAgIH0sXG4gICAgICBkaXJ0eToge1xuICAgICAgICB1cGRhdGVTdGF0ZTogKHN0YXRlRGF0YSwgb2JqKSA9PiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHt9LCBzdGF0ZURhdGEsIG9ialxuICAgICAgICApLFxuICAgICAgICByZXNldFN0YXRlOiAoc3RhdGVEYXRhKSA9PiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHt9LCBzdGF0ZURhdGEsIHtcbiAgICAgICAgICAgIGhlYWRlcjogbnVsbCxcbiAgICAgICAgICAgIHRleHQ6IG51bGwsXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9LFxuICAgIH1cbn1cblxuZnVuY3Rpb24gc3RhdGVXcmFwcGVyKGFwcCkge1xuICBsZXQgc3RhdGVPYmogPSBTdGF0ZS5jcmVhdGUoc3RhdGUpO1xuICBzdGF0ZU9ialsnYWN0aW9ucyddWydkaXJ0eSddWydzYXZlU3RhdGUnXSA9IChzdGF0ZURhdGEpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgbGV0IGlkID0gdXVpZChzdGF0ZURhdGEuaGVhZGVyKTtcbiAgICBhcHAuc3RvcmFnZS5zZXQoaWQsIHN0YXRlRGF0YSk7XG4gICAgYXBwLmZpcmVFdmVudCgnZ3JhcGgtbm90ZS1jcmVhdGVkJyk7XG4gICAgcmVzb2x2ZShpZCk7XG4gIH0pO1xuICByZXR1cm4gc3RhdGVPYmo7XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ3JhcGgtbm90ZS1jcmVhdGUtc2NyZWVuLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiZ3JhcGgtbm90ZS1jcmVhdGUtc2NyZWVuIGhpZGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICA8aW5wdXQgaWQ9XFxcImdyYXBoLW5vdGUtaGVhZGVyXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZ3JhcGgtbm90ZS1oZWFkZXJcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIj5cXG4gICAgPGxhYmVsIGZvcj1cXFwiZ3JhcGgtbm90ZS1oZWFkZXJcXFwiPkZpbGUgTmFtZTwvbGFiZWw+XFxuICA8L2Rpdj5cXG4gIDwhLS1cXG4gIDxkaXYgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY2hpcHMgY2hpcHMtYXV0b2NvbXBsZXRlXFxcIj48L2Rpdj5cXG4gIDwvZGl2PlxcbiAgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuICAgIDx0ZXh0YXJlYSBpZD1cXFwiZ3JhcGgtbm90ZS10ZXh0XFxcIiBjbGFzcz1cXFwiZ3JhcGgtbm90ZS10ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiVGV4dFxcXCI+PC90ZXh0YXJlYT5cXG4gICAgPCEtLTxsYWJlbCBmb3I9XFxcImdyYXBoLW5vdGUtdGV4dFxcXCI+Tm90ZTwvbGFiZWw+LS0+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJpbXBvcnQgJy4vZ3JhcGgtbm90ZS1jcmVhdGUtc2NyZWVuLmNzcyc7XG5pbXBvcnQgaHRtbCBmcm9tICcuL2dyYXBoLW5vdGUtY3JlYXRlLXNjcmVlbi5odG1sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IENyZWF0ZVNjcmVlblN0YXRlIGZyb20gJy4vZ3JhcGgtbm90ZS1jcmVhdGUtc2NyZWVuLXN0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlU2NyZWVuQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAvLyBUT0RPOiBUaGlzIGNsYXNzIHVuYXdhcmUgb2YgcmVuZGVyZXIgYW5kIHVzZXMgY29tcG9uZW50XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLm5hbWUgPSAnZ3JhcGgtbm90ZS1jcmVhdGUtc2NyZWVuJztcbiAgICB0aGlzLnN0YXRlID0gQ3JlYXRlU2NyZWVuU3RhdGUodGhpcy5hcHApO1xuICAgIHRoaXMuZG9tID0gdGhpcy5yZW5kZXJGcmFnbWVudChodG1sKTtcbiAgfVxuICBiaW5kRXZlbnRzKCkge1xuICAgIGxldCBub3RlSGVhZGVyID0gdGhpcy5lbCgnLmdyYXBoLW5vdGUtaGVhZGVyJyk7XG4gICAgbGV0IG5vdGVUZXh0ID0gdGhpcy5lbCgnLmdyYXBoLW5vdGUtdGV4dCcpO1xuICAgIHRoaXMuY20gPSB0aGlzLmFwcC5Db2RlTWlycm9yLmZyb21UZXh0QXJlYShub3RlVGV4dCwge1xuICAgICAgbGluZW51bWJlcnM6IHRydWUsXG4gICAgICBtb2RlOiBcIm1hcmtkb3duXCIsXG4gICAgfSk7XG4gICAgdGhpcy5jbS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5jaGFuZ2VDb21wb25lbnRTdGF0ZVRvKCdkaXJ0eScpO1xuICAgICAgdGhpcy5zdGF0ZS5ydW5Db21wb25lbnRBY3Rpb24oJ3VwZGF0ZVN0YXRlJywge1xuICAgICAgICBoZWFkZXI6IG5vdGVIZWFkZXIudmFsdWUsXG4gICAgICAgIHRleHQ6IHRoaXMuY20uZ2V0VmFsdWUoKSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGJpbmRMaXN0ZW5lcnMoKSB7XG5cbiAgICBsZXQgY3JlYXRlRWwgPSB0aGlzLmVsKCcuZ3JhcGgtbm90ZS1jcmVhdGUtc2NyZWVuJyk7XG4gICAgbGV0IG5vdGVIZWFkZXIgPSB0aGlzLmVsKCcuZ3JhcGgtbm90ZS1oZWFkZXInKTtcbiAgICBsZXQgbm90ZVRleHQgPSB0aGlzLmVsKCcuZ3JhcGgtbm90ZS10ZXh0Jyk7XG5cbiAgICAvKlxuICAgICAgbGV0IHBhcmVudHNDaGlwcyA9IHRoaXMuZWwoJy5jaGlwcy1hdXRvY29tcGxldGUnKTtcblxuICAgICAgbGV0IGNoaXBzSW5zdGFuY2U7XG5cbiAgICAgIGxldCBjaGlwT3B0aW9ucyA9IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdQYXJlbnRzJyxcbiAgICAgICAgYXV0b2NvbXBsZXRlT3B0aW9uczoge1xuICAgICAgICAgIGxpbWl0OiBJbmZpbml0eSxcbiAgICAgICAgICBtaW5MZW5ndGg6IDFcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5hcHAub24oJ2dyYXBoLW5vdGUtaW5pdCcsIChlKSA9PiB7XG4gICAgICAgIGNoaXBPcHRpb25zLmF1dG9jb21wbGV0ZU9wdGlvbnMuZGF0YSA9IHRoaXMuZ2VuZXJhdGVDaGlwVGFncygpO1xuICAgICAgICBjaGlwc0luc3RhbmNlID0gdGhpcy5hcHAuTS5DaGlwcy5pbml0KHBhcmVudHNDaGlwcywgY2hpcE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFwcC5vbignZ3JhcGgtbm90ZS1jcmVhdGVkJywgKGUpID0+IHtcbiAgICAgICAgY2hpcE9wdGlvbnMuYXV0b2NvbXBsZXRlT3B0aW9ucy5kYXRhID0gdGhpcy5nZW5lcmF0ZUNoaXBUYWdzKCk7XG4gICAgICAgIGNoaXBzSW5zdGFuY2UgPSB0aGlzLmFwcC5NLkNoaXBzLmluaXQocGFyZW50c0NoaXBzLCBjaGlwT3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICovXG5cbiAgICB0aGlzLmFwcC5vbignZ3JhcGgtbm90ZS1hZGQnLCAoZSkgPT4ge1xuICAgICAgdGhpcy5hcHAucmVuZGVyZXIuY2xhc3NSZW1vdmUoJ2hpZGUnLCBjcmVhdGVFbCk7XG4gICAgICB0aGlzLmNtLnJlZnJlc2goKTtcbiAgICAgIHRoaXMuY20uZm9jdXMoKTtcbiAgICAgIG5vdGVIZWFkZXIudmFsdWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnKTtcbiAgICB9KTtcbiAgICAvL3RoaXMuYXBwLmFmdGVyXG4gICAgdGhpcy5hcHAub24oJ2dyYXBoLW5vdGUtY3JlYXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5hcHAucmVuZGVyZXIuY2xhc3NBZGQoJ2hpZGUnLCBjcmVhdGVFbCk7XG4gICAgICB0aGlzLnN0YXRlLnJ1bkNvbXBvbmVudEFjdGlvbignc2F2ZVN0YXRlJyk7XG4gICAgfSk7XG4gICAgdGhpcy5hcHAub24oJ2dyYXBoLW5vdGUtY3JlYXRlZCcsICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUucnVuQ29tcG9uZW50QWN0aW9uKCdyZXNldFN0YXRlJyk7XG4gICAgICB0aGlzLnN0YXRlLmNoYW5nZUNvbXBvbmVudFN0YXRlVG8oJ2luaXQnKTtcbiAgICB9KTtcbiAgfVxuICAvKlxuICBnZW5lcmF0ZUNoaXBUYWdzKCkge1xuICAgIGxldCBvYmpOYW1lcyA9IHt9O1xuICAgIGZvciAobGV0IFt1dWlkLCBub2RlSW5zXSBvZiB0aGlzLmFwcC5zdG9yYWdlLmdldE1hcCgpKSB7XG4gICAgICBvYmpOYW1lc1t1dWlkXSA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBvYmpOYW1lcztcbiAgfVxuICovXG59XG4iLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8IS0tIFRPRE86IGNsYXNzIHNob3VsZCBub3QgY2xhc2ggd2l0aCBvdGhlciBjc3MnZXMgLS0+XFxuPGRpdiBjbGFzcz1cXFwiZ3JhcGgtbm90ZS1ub2RlIHNjYWxlLXRyYW5zaXRpb25cXFwiPlxcbiAgPHA+XFxuICAgIDxhIGNsYXNzPVxcXCJncmFwaC1ub3RlLW5vZGUtbGlua1xcXCI+JHtoZWFkZXJ9PC9hPlxcbiAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZ3JhcGgtbm90ZS1ub2RlLWVkaXQtbGlua1xcXCI+PGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lZGl0PC9pPjwvYT5cXG4gICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImdyYXBoLW5vdGUtbm9kZS1kZWxldGUtbGlua1xcXCI+PGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5kZWxldGU8L2k+PC9hPlxcbiAgPC9wPlxcbjwvZGl2PlxcblxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsImltcG9ydCBodG1sIGZyb20gJy4vZ3JhcGgtbm90ZS1saXN0LWVsZW1lbnQuaHRtbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhOb3RlTm9kZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGluaXQoKSB7XG4gICAgdGhpcy5uYW1lID0gJ2dyYXBoLW5vdGUtbm9kZSc7XG4gICAgdGhpcy5kb20gPSB0aGlzLnJlbmRlckZyYWdtZW50KGh0bWwuaW50ZXJwb2xhdGUodGhpcy5wcm9wcykpO1xuICB9XG4gIGJpbmRFdmVudHMoKSB7XG4gICAgbGV0IGVsID0gdGhpcy5lbCgnLmdyYXBoLW5vdGUtbm9kZS1lZGl0LWxpbmsnKTtcbiAgICBlbC5hZGRFdmVudCgnY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJncmFwaC1ub3RlLW5vZGUtbGlzdCBzY2FsZS10cmFuc2l0aW9uXFxcIj5cXG48L2Rpdj5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJpbXBvcnQgaHRtbCBmcm9tICcuL2dyYXBoLW5vdGUtbGlzdC5odG1sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IEdyYXBoTm90ZU5vZGUgZnJvbSAnLi9ncmFwaC1ub3RlLWxpc3QtZWxlbWVudC5qcydcbmltcG9ydCBTdGF0ZSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgQ3JlYXRlU2NyZWVuU3RhdGUgZnJvbSAnLi9ncmFwaC1ub3RlLWNyZWF0ZS1zY3JlZW4tc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlTGlzdENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLm5hbWUgPSAnZ3JhcGgtbm90ZS1saXN0JztcbiAgICB0aGlzLmRvbSA9IHRoaXMucmVuZGVyRnJhZ21lbnQoaHRtbCk7XG4gIH1cbiAgYmluZExpc3RlbmVycygpIHtcbiAgICBsZXQgbm9kZUNvbnRhaW5lciA9IHRoaXMuZWwoJy5ncmFwaC1ub3RlLW5vZGUtbGlzdCcpO1xuICAgIHRoaXMucmVuZGVyTm9kZXMoKTtcbiAgICB0aGlzLmFwcC5vbignZ3JhcGgtbm90ZS1jcmVhdGUnLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmluZm8obm9kZUNvbnRhaW5lcik7XG4gICAgICB0aGlzLnJlbmRlck5vZGVzKCk7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyTm9kZXMoKSB7XG4gICAgbGV0IG5vZGVDb250YWluZXIgPSB0aGlzLmVsKCcuZ3JhcGgtbm90ZS1ub2RlLWxpc3QnKTtcbiAgICBsZXQgbm9kZXMgPSB0aGlzLmFwcC5zdG9yYWdlLmdldE1hcCgpO1xuICAgIGZvciAoY29uc3QgW2ssdl0gb2Ygbm9kZXMpIHtcbiAgICAgIGxldCBub2RlRWwgPSBuZXcgR3JhcGhOb3RlTm9kZSh0aGlzLmFwcCwgdik7XG4gICAgICB0aGlzLmFwcC5yZW5kZXJlci5hcHBlbmQobm9kZUVsLnJlbmRlcigpLCBub2RlQ29udGFpbmVyKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBTdGF0ZSBmcm9tICcuLi9zdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlV3JhcHBlcjtcblxuLy8gV2UgbmVlZCB0byBkZWZpbmUgc3RhdGUgYXMgY29uc3Qgb3V0c2lkZSBvZiBmdW5jdGlvblxuLy8gb3IgV2Vha01hcCB3b24ndCB0cmVhdCBpdCBhcyB0aGUgc2FtZSBvYmplY3RcbmNvbnN0IHN0YXRlID0ge1xuICAgIG5hbWU6ICdpbml0JyxcbiAgICBkYXRhOiB7XG4gICAgICBpbml0OiB7XG4gICAgICAgIHdlbGNvbWVWaXNpYmxlOiB0cnVlXG4gICAgICB9LFxuICAgICAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgZGVmaW5lIHN0YXRlIGhlcmVcbiAgICAgIC8vIG9yIHdlIGNhbiBvbWl0IHN0YXRlRGF0YSBmb3IgdGhpcyBzdGF0ZVxuICAgICAgLy8gYW5kIHVzZSBhY3Rpb25zIHRvIGNyZWF0ZSBmcm9tIGluaXRpYWwgc3RhdGVcbiAgICAgIGNyZWF0ZTogbnVsbCxcbiAgICB9LFxuICAgIGFjdGlvbnM6IHtcbiAgICAgIGluaXQ6IHtcbiAgICAgICAgdG9nZ2xlRWxlbWVudDogKHN0YXRlRGF0YSkgPT4ge1xuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZURhdGEsIHtcbiAgICAgICAgICAgIHdlbGNvbWVWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjcmVhdGU6IHtcbiAgICAgICAgdG9nZ2xlRWxlbWVudDogKHN0YXRlRGF0YSkgPT4ge1xuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZURhdGEsIHtcbiAgICAgICAgICAgIHdlbGNvbWVWaXNpYmxlOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBzdGF0ZVdyYXBwZXIoYXBwKSB7XG4gIHJldHVybiBTdGF0ZS5jcmVhdGUoc3RhdGUpO1xufVxuIiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgIDxmb3JtIGNsYXNzPVxcXCJjb2wgczEyXFxcIj5cXG4gICAgICA8IS0tIGNhbiBiZSBtb3ZlZCB0byBhIHNlcGFyYXRlIGNvbXBvbmVudCAtLT5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJncmFwaC1ub3RlLXdlbGNvbWUgc2NhbGUtdHJhbnNpdGlvblxcXCI+XFxuICAgICAgICA8cD5IZWxsbyEgQW5kIFdlbGNvbWUgdG8gR3JhcGhOb3Rlcy48L3A+XFxuICAgICAgICA8cD5GZWVsIGZyZWUgdG8gY3JlYXRlIGFueSBudW1iZXIgb2Ygbm90ZXMgY29ubmVjdGVkIHRvIGVhY2ggb3RoZXIhPC9wPlxcbiAgICAgICAgJHt3ZWxjb21lVmlzaWJsZX1cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8Z3JhcGgtbm90ZS1saXN0PjwvZ3JhcGgtbm90ZS1saXN0PlxcbiAgICAgIDxncmFwaC1ub3RlLWNyZWF0ZS1zY3JlZW4+PC9ncmFwaC1ub3RlLWNyZWF0ZS1zY3JlZW4+XFxuICAgIDwvZm9ybT5cXG4gIDwvZGl2PlxcbiAgPGdyYXBoLW5vdGUtYWRkLWJ0bj48L2dyYXBoLW5vdGUtYWRkLWJ0bj5cXG48L2Rpdj5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJpbXBvcnQgaHRtbCBmcm9tICcuL2dyYXBoLW5vdGUtcm9vdC5odG1sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IEFkZEJ0bkNvbXBvbmVudCBmcm9tICcuL2dyYXBoLW5vdGUtYWRkLWJ0bi5qcyc7XG5pbXBvcnQgQ3JlYXRlU2NyZWVuQ29tcG9uZW50IGZyb20gJy4vZ3JhcGgtbm90ZS1jcmVhdGUtc2NyZWVuLmpzJztcbmltcG9ydCBOb2RlTGlzdENvbXBvbmVudCBmcm9tICcuL2dyYXBoLW5vdGUtbGlzdC5qcyc7XG5pbXBvcnQgUm9vdFN0YXRlIGZyb20gJy4vZ3JhcGgtbm90ZS1yb290LXN0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vdENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgLy8gVGhpcyBjbGFzcyB1bmF3YXJlIG9mIHJlbmRlcmVyIGFuZCB1c2VzIGNvbXBvbmVudFxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5uYW1lID0gJ2dyYXBoLW5vdGUtcm9vdCc7XG4gICAgdGhpcy5zdGF0ZSA9IFJvb3RTdGF0ZSh0aGlzLmFwcCk7XG4gICAgdGhpcy5kb20gPSB0aGlzLnJlbmRlckZyYWdtZW50KGh0bWwuaW50ZXJwb2xhdGUodGhpcy5zdGF0ZS5nZXREYXRhKCkpKTtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBbQWRkQnRuQ29tcG9uZW50LCBDcmVhdGVTY3JlZW5Db21wb25lbnQsIE5vZGVMaXN0Q29tcG9uZW50XTtcbiAgfVxuICBpbml0U3RhdGUoKSB7XG4gICAgLy8gVE9ETzogZm9yIGluZm8gb25seVxuICAgIC8vIFNUQVRFXG4gICAgLy8gb3cgdG8gYWNjZXNzIGZyb20gb3RoZXIgY29tcD9cbiAgICAvLyBob3cgdG8gc3Vic2NyaWJlIGxvY2FsIHN0b3JhZ2U/XG4gICAgLypcbiAgICB0aGlzLmFwcC5vbignZXZlbnQnLCAoKSA9PiB7XG4gICAgICAvLyBvbmUgd2F5IHRvIGNoYW5nZSBzdGF0ZVxuICAgICAgdGhpcy5zdGF0ZUFjdGlvbnNbdGhpcy5zdGF0ZV1bYWN0aW9uTmFtZV0oKTtcbiAgICAgIC8vIG1ha2UgRE9NIG1hbmlwdWxhdGlvbnNcbiAgICAgIC8vIG5vIHN0YXRlIGNoYW5nZVxuICAgIH0pO1xuICAgIC8vIG9yXG4gICAgdGhpcy5hcHAub24oJ2V2ZW50JywgKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VDb21wU3RhdGVUbygnYWN0Jywgb25FeGl0PSgpLCBvbkVudGVyPSgpKVxuICAgIH0pO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZSgoKSA9PiB7XG4gICAgICAvLyByZXF1aXJlIGJyYW5jaGluZ1xuICAgICAgLy8gbWFrZSBET00gbWFuaXB1bGF0aW9uc1xuICAgIH0pXG4gICAqL1xuICB9XG4gIGJpbmRFdmVudHMoKSB7XG4gICAgLy8gTWF0ZXJpYWxpemUgYnV0dG9uXG4gICAgbGV0IGVsZW1zID0gdGhpcy5lbCgnLmZpeGVkLWFjdGlvbi1idG4nKTtcbiAgICBsZXQgaW5zdGFuY2VzID0gdGhpcy5hcHAuTS5GbG9hdGluZ0FjdGlvbkJ1dHRvbi5pbml0KGVsZW1zLCBbXSk7XG4gIH1cbiAgbXV0YXRlU3RhdGUoKSB7XG4gICAgdGhpcy5hcHAub24oJ2dyYXBoLW5vdGUtYWRkJywgKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5ydW5Db21wb25lbnRBY3Rpb24oJ3RvZ2dsZUVsZW1lbnQnKTtcbiAgICAgIC8vIFRPRE86IHdlIGNhbiB1c2UgdGhpcyBtZXRob2QgaW4gYWN0aW9uc1xuICAgICAgLy8gZWl0aGVyIGluIGFwaSBydW5Db21wb25lbnRBY3Rpb24obmFtZSwgbmV3U3RhdGUsTmFtZSlcbiAgICAgIC8vIG9yIGluIGFjdGlvbiBkZWZpbml0aW9uXG4gICAgICB0aGlzLnN0YXRlLmNoYW5nZUNvbXBvbmVudFN0YXRlVG8oJ2NyZWF0ZScpO1xuICAgIH0pO1xuICAgIHRoaXMuYXBwLm9uKCdncmFwaC1ub3RlLWNyZWF0ZScsICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUucnVuQ29tcG9uZW50QWN0aW9uKCd0b2dnbGVFbGVtZW50Jyk7XG4gICAgICB0aGlzLnN0YXRlLmNoYW5nZUNvbXBvbmVudFN0YXRlVG8oJ2luaXQnKTtcbiAgICB9KTtcbiAgfVxuICBiaW5kTGlzdGVuZXJzKCkge1xuICAgIGxldCB3ZWxjb21lRWwgPSB0aGlzLmVsKCcuZ3JhcGgtbm90ZS13ZWxjb21lJyk7XG4gICAgbGV0IGxpc3RFbCA9IHRoaXMuZWwoJy5ncmFwaC1ub3RlLW5vZGUtbGlzdCcpO1xuICAgIHRoaXMuc3RhdGUub24oJ2NyZWF0ZScsICgpID0+IHtcbiAgICAgIHdlbGNvbWVFbC5jbGFzc0xpc3QuYWRkKCdzY2FsZS1vdXQnKTtcbiAgICAgIHdlbGNvbWVFbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBsaXN0RWwuY2xhc3NMaXN0LmFkZCgnc2NhbGUtb3V0Jyk7XG4gICAgICBsaXN0RWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH0pO1xuICAgIHRoaXMuc3RhdGUub24oJ2luaXQnLCAoKSA9PiB7XG4gICAgICB3ZWxjb21lRWwuY2xhc3NMaXN0LnJlbW92ZSgnc2NhbGUtb3V0Jyk7XG4gICAgICB3ZWxjb21lRWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgbGlzdEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgIGxpc3RFbC5jbGFzc0xpc3QucmVtb3ZlKCdzY2FsZS1vdXQnKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uKGRvY3VtZW50KSB7XG5cbiAgLyoqXG4gICAqIFJlbmRlcmVyRE9NXG4gICAqXG4gICAqIENsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBhY2Nlc3NpbmcgRE9NIEFQSVxuICAgKlxuICAgKiBTdWJsYXNzZWQgYnkgQ29tcG9uZW50XG4gICAqXG4gICAqL1xuICBjbGFzcyBSZW5kZXJlckRPTSB7XG4gICAgY29uc3RydWN0b3IoYXBwKSB7XG4gICAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICB9XG4gICAgcXVlcnkocSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocSk7XG4gICAgfVxuICAgIHF1ZXJ5Q21wKHEpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShxKVswXTtcbiAgICB9XG4gICAgcXVlcnlDbXB2Mihkb2MsIHEpIHtcbiAgICAgIHJldHVybiBkb2MucXVlcnlTZWxlY3RvcihxKTtcbiAgICB9XG4gICAgY2xhc3NBZGQoY2xhc3NUZXh0LCBub2RlKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3NUZXh0KTtcbiAgICB9XG4gICAgY2xhc3NSZW1vdmUoY2xhc3NUZXh0LCBub2RlKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NUZXh0KTtcbiAgICB9XG4gICAgcHJlcGVuZChkb2N1bWVudEZyYWdtZW50LCBub2RlKSB7XG4gICAgICBsZXQgZmlyc3RFbCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgIG5vZGUuaW5zZXJ0QmVmb3JlKGRvY3VtZW50RnJhZ21lbnQsIGZpcnN0RWwpO1xuICAgIH1cbiAgICBhZGRFdmVudChuYW1lLCBjYWxsYmFjaykge1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgYXBwZW5kKGRvY3VtZW50RnJhZ21lbnQsIG5vZGUpIHtcbiAgICAgIC8vVE9ETzogbWFrZSBhY3R1YWwgcmVwbGFjZVxuICAgICAgbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudEZyYWdtZW50KTtcbiAgICB9XG4gICAgcmVwbGFjZShkb2N1bWVudEZyYWdtZW50LCBvbGROb2RlLCBwYXJlbnROb2RlKSB7XG4gICAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZChkb2N1bWVudEZyYWdtZW50LCBvbGROb2RlKTtcbiAgICB9XG4gICAgc2V0KHRleHQsIG5vZGUpIHtcbiAgICAgIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZW5kZXJlckRPTTtcblxufSkoZG9jdW1lbnQpXG4iLCJpbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuL3V0aWxzL29ic2VydmFibGUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oT2JzZXJ2YWJsZSkge1xuXG5sZXQgaW5zdGFuY2VzID0gbmV3IFdlYWtNYXAoKTtcblxuY2xhc3MgU3RhdGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRhdGE6IE9iamVjdDtcbiAgYWN0aW9uczogT2JqZWN0O1xuICBwcml2YXRlIG9ic2VydmFibGU6IE9ic2VydmFibGU7XG5cbiAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgdGhpcy5uYW1lID0gb2JqLm5hbWUgfHwgJyc7XG4gICAgdGhpcy5kYXRhID0gb2JqLmRhdGEgfHwge307XG4gICAgdGhpcy5hY3Rpb25zID0gb2JqLmFjdGlvbnMgfHwge307XG4gICAgICAvLyBUT0RPOiBQcm94eSBjYW4gYmUgdXNlZCB0byB0cmFjayBjaGFuZ2VzXG4gICAgICB0aGlzLm9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgICAgLy8gVE9ETzogdHJhY2tzIHN0YXRlIGZvciBlYWNoIGNvbXBvbmVudFxuICAgICAgLy90aGlzLnN0YXRlSGlzdG9yeSA9IHt9O1xuICAgICAgLy8gVE9ETzogaGlzdG9yeSBURVNUXG4gICAgICAvKiB0aGlzLmFwcC5vbignZ3JhcGgtbm90ZS1oaXN0b3J5LWNoYW5nZScsICgpID0+IHtcbiAgICAgICAgbGV0IGggPSB0aGlzLmFwcC5oaXN0b3J5LmdldFN0YXRlRGF0YSgpLmhhc2g7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhoKTtcbiAgICAgICAgY29uc29sZS5pbmZvKHRoaXMuc3RhdGVIaXN0b3J5KTtcbiAgICAgICAgY29uc29sZS53YXJuKHRoaXMuc3RhdGVIaXN0b3J5W2hdKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVIaXN0b3J5W2hdKSB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VDb21wb25lbnRTdGF0ZVRvKHRoaXMuc3RhdGVIaXN0b3J5W2hdLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgICovXG4gIH1cbiAgc3RhdGljIGNyZWF0ZShvYmopIHtcbiAgICBsZXQgaW5zdGFuY2U7XG4gICAgaWYgKCFpbnN0YW5jZXMuaGFzKG9iaikpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IFN0YXRlKG9iaik7XG4gICAgICBpbnN0YW5jZXMuc2V0KG9iaiwgaW5zdGFuY2UpO1xuICAgIH1cbiAgICByZXR1cm4gaW5zdGFuY2VzLmdldChvYmopO1xuICB9XG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVt0aGlzLm5hbWVdO1xuICB9XG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBvbihuYW1lLCBmKSB7XG4gICAgdGhpcy5vYnNlcnZhYmxlLm9uKG5hbWUsIGYpO1xuICB9XG4gIC8qIFRoaXMgbWV0aG9kIGNoYWdlcyBzdGF0ZSBkYXRhLFxuICAgKiBidXQgbGVhdmVzIGNvbXBvbmVudCBzdGF0ZSBpbnRhY3QsXG4gICAqIFlvdSBzaG91bGQgbWFudWFsbHkgY2FsbCBjaGFuZ2VDb21wb25lbnRTdGF0ZVRvXG4gICAqIHRvIGNoYW5nZSBzdGF0ZVxuICAgKi9cbiAgcnVuQ29tcG9uZW50QWN0aW9uKGFjdGlvbk5hbWUsIG9iaikge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmRhdGFbdGhpcy5uYW1lXSA9IHRoaXMuYWN0aW9uc1t0aGlzLm5hbWVdW2FjdGlvbk5hbWVdKHRoaXMuZ2V0RGF0YSgpLCBvYmopO1xuICAgIH0gY2F0Y2ggKFR5cGVFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyAke2FjdGlvbk5hbWV9IGFjdGlvbiBpbiAke3RoaXMuZ2V0TmFtZSgpfSBzdGF0ZWApO1xuICAgIH1cbiAgfVxuICAvKiBUaGlzIG1ldGhkb2QgZG9lcyBub3QgY2hhbmdlIHN0YXRlIGRhdGEgaW4gYW55IHdheSxcbiAgICogd2UgaGF2ZSBhY3Rpb25zIGZvciB0aGF0LFxuICAgKiBJdCBzYXZlcyBjdXJyZW50IHN0YXRlIGFuZCB0cmFuc2l0aW9ucyBzdGF0ZVxuICAgKi9cbiAgY2hhbmdlQ29tcG9uZW50U3RhdGVUbyhuZXdTdGF0ZSwgc2F2ZT10cnVlKSB7XG4gICAgdGhpcy5vYnNlcnZhYmxlLmZpcmVFdmVudChuZXdTdGF0ZSk7XG4gICAgdGhpcy5uYW1lID0gbmV3U3RhdGU7XG4gICAgLy8gVE9ETzogbW92ZSB0byByZW5kZXJlclxuICAgIC8vIHRoaXMgd2lsbCB3cml0ZSB0byB0byBoaXN0b3J5IG9uIGVhY2ggY29tcG9uZW50IGNoYW5nZVxuICAgIC8vIHdlIGNhbiBjcmVhdGUgc3RhcnQgc3RhdGUgaGlzdG9yeSBtZXRob2QgdG8gY29udHJvbCBzdGF0ZSBtb3JlIGVsZWdhbnRseVxuICAgIC8vIFRPRE86IGhpc3RvcnlcbiAgICAvKlxuICAgIGxldCBoID0gdXVpZCh0aGlzLnN0YXRlLm5hbWUpO1xuICAgIGlmIChzYXZlKSB7XG4gICAgICB0aGlzLnN0YXRlSGlzdG9yeVtoXSA9IHRoaXMuc3RhdGUubmFtZTtcbiAgICAgIHRoaXMuYXBwLmhpc3Rvcnkuc2F2ZVN0YXRlKHRoaXMuc3RhdGUsIGgpO1xuICAgIH1cbiAgICAgKi9cbiAgICAgIC8qXG4gICAgY2hhbmdlQ29tcG9uZW50U3RhdGVUb192MChuZXdTdGF0ZSkge1xuICAgICAgbGV0IGhhc2ggPSBuZXcgSGFzaCgpOyAvL29yIGluZGV4XG4gICAgICB0aGlzLnByZXYgPSB0aGlzLnByZXYuc2xpY2UoMSx0aGlzLnByZXYubGVudGgpO1xuICAgICAgdGhpcy5wcmV2ID0ge1xuICAgICAgICBzdGF0ZURhdGEgPSB0aGlzLnN0YXRlRGF0YTtcbiAgICAgIH1cbiAgICAgIC8vcHVzaCBoaXN0b3J5IGNoYW5nZSBcbiAgICAgIEhpc3RvcnlbaGFzaF0gPSB0aGlzLnByZXY7XG4gICAgICBmb3IgYWN0aW9uIGluIHRoaXMub25FeGl0KCkge1xuICAgICAgICBhY3Rpb24oKVxuICAgICAgfVxuICAgICAgdGhpcy5zYXRlID0gbmV3U3RhdGU7XG4gICAgICBmb3IgYWN0aW9uIGluIHRoaXMub25FbnRlcigpIHtcbiAgICAgICAgYWN0aW9uKClcbiAgICAgIH1cbiAgICAgIHRoaXMucHJlcyA9IHRoaXMuc3RhdGU7XG4gICAgfVxuICAgICovXG4gIH1cbn1cblxucmV0dXJuIFN0YXRlO1xuXG59KShPYnNlcnZhYmxlKVxuIiwiZXhwb3J0IGRlZmF1bHQgKCBmdW5jdGlvbih3aW5kb3csIEFycmF5LCBKU09OKSB7XG5cbi8vVE9ETzogdXNlIHByb21pc2VzIHNpbmNlIGl0J3MgYSBzaWRlIGVmZmVjdCBzeXN0ZW1cblxubGV0IEJVQ0tFVF9OQU1FID0gJ25vZGVzJztcblxuY2xhc3MgU3RvcmFnZUxvY2FsIHtcbiAgY29uc3RydWN0b3IoYXBwKSB7XG4gICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICBsZXQganNvblN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oQlVDS0VUX05BTUUpO1xuICAgIGlmIChqc29uU3RvcmFnZSkge1xuICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKEpTT04ucGFyc2UoanNvblN0b3JhZ2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuICB9XG4gIGdldE1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXA7XG4gIH1cbiAgZ2V0KGspIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGspO1xuICB9XG4gIHNldChrLCB2KSB7XG4gICAgaWYgKCFrKSByZXR1cm47XG4gICAgdGhpcy5tYXAuc2V0KGssIHYpO1xuICAgIGxldCB0b0pzb25TdG9yYWdlID0gSlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbSh0aGlzLm1hcC5lbnRyaWVzKCkpKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oQlVDS0VUX05BTUUsIHRvSnNvblN0b3JhZ2UpO1xuICB9XG59XG5cbnJldHVybiBTdG9yYWdlTG9jYWw7XG5cbn0pKHdpbmRvdywgQXJyYXksIEpTT04pO1xuIiwiLy8gVE9ETzogRGF0ZSBkZXBcblxuZnVuY3Rpb24gdXVpZCh0ZXh0OiBTdHJpbmcpIHtcbiAgdGV4dCA9IHRleHQgfHwgJyc7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHRleHQuc3Vic3RyaW5nKDAsIDEwMCk7XG59XG5cbmZ1bmN0aW9uIGludGVycG9sYXRlKHBhcmFtczogT2JqZWN0KSB7XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocGFyYW1zKTtcbiAgY29uc3QgdmFscyA9IE9iamVjdC52YWx1ZXMocGFyYW1zKTtcbiAgcmV0dXJuIG5ldyBGdW5jdGlvbiguLi5uYW1lcywgYHJldHVybiBcXGAke3RoaXN9XFxgO2ApKC4uLnZhbHMpO1xufVxuXG5leHBvcnQge3V1aWQsaW50ZXJwb2xhdGV9O1xuIiwiLy8gT25lIG9mIHRoZSBpZGVhcyB3YXMgdG8gdHJhY2sgc3RhdGUgYmFzZWQgb24gZmlyZWQgZXZlbnRzXG4vLyBFYWNoIG5ldyBmaXJlZCBldmVudCBjcmVhdGVzIG5ldyBzdGF0ZVxuLy8gV2UgY2FuIHRyYWNrIGlucHV0IGFuZCBvdXRwdXQgb2YgdGhlIGZ1bmN0aW9uIGFzIGNhbGwgZnJhbSBvZiB0aGUgc3RhY2tcbmNvbnN0IGludGVyY2VwdG9ycyA9IG5ldyBNYXAoKTtcbmNvbnN0IHN0YXRlcyA9IG5ldyBNYXAoKTtcblxubGV0IHN0YXRlU3RhcnQgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnNlcnZhYmxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBuZXcgTWFwKCk7XG4gIH1cbiAgb24obmFtZSwgZikge1xuICAgIGlmICghdGhpcy5saXN0ZW5lcnMuaGFzKG5hbWUpKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zZXQobmFtZSwgbmV3IFNldCgpKTtcbiAgICB9XG4gICAgdGhpcy5saXN0ZW5lcnMuZ2V0KG5hbWUpLmFkZChmKTtcbiAgICByZXR1cm4gdGhpcy5vZmYobmFtZSwgZik7XG4gIH1cbiAgLy9UT0RPOiBDcmVhdGUgYmVmb3JlLCBhZnRlciwgZHVyaW5nIG1ldGhvZHNcbiAgaW50ZXJjZXB0KG5hbWUsIGYpIHtcbiAgICAvL29ueSBvbmUgaW50ZXJlY3B0IGlzIGFsbG93ZWQgdG8gZWxpbWluYXRlIHJhY2UgY29uZGl0aW9uc1xuICAgIGlmIChpbnRlcmNlcHRvcnMuaGFzKG5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgb25lIGludGVyY2VwdG9yIGlzIGFsbG93ZWQhJyk7XG4gICAgfVxuICAgIGludGVyY2VwdG9ycy5zZXQobmFtZSwgZik7XG4gIH1cbiAgb2ZmKG5hbWUsIGYpIHtcbiAgICAvLyBUT0RPXG4gICAgaWYgKHRoaXMubGlzdGVuZXJzLmhhcyhuYW1lKSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMuZ2V0KG5hbWUpO1xuICAgIH1cbiAgfVxuICBmaXJlRXZlbnQobmFtZSkge1xuICAgIGlmICh0aGlzLmxpc3RlbmVycy5oYXMobmFtZSkpIHtcbiAgICAgIGZvciAobGV0IGYgb2YgdGhpcy5saXN0ZW5lcnMuZ2V0KG5hbWUpKSB7XG4gICAgICAgIGlmIChpbnRlcmNlcHRvcnMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgZihpbnRlcmNlcHRvcnMuZ2V0KG5hbWUpKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGYoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBzdGF0ZSB3YXMgbW92ZWQgdG8gZWFjaCBjb21wb25lbnRcbiAgLypcbiAgc3RhdGUobmFtZSwgZXh0RGF0YSkge1xuICAgIHN3aXRjaChuYW1lKSB7XG4gICAgICBjYXNlICdzdGF0ZS1iYWNrJzpcbiAgICAgICAgc3RhdGVTdGFydCAtPSBleHREYXRhOyAvL1RPRE8gPCAwXG4gICAgICAvL1RPRE8gZGlydHloYWNrXG4gICAgICAgIHZhciB7bmFtZTogZXZlbnROYW1lLCBleHREYXRhOiBldmVudERhdGF9ID0gc3RhdGVzLmdldChzdGF0ZVN0YXJ0KTtcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoZXZlbnROYW1lLCBldmVudERhdGEsIGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdGF0ZS1mb3J3YXJkJzpcbiAgICAgICAgc3RhdGVTdGFydCArPSBleHREYXRhOyAvL1RPRE8gbW9kIG1heFxuICAgICAgICB2YXIge25hbWU6IGV2ZW50TmFtZSwgZXh0RGF0YTogZXZlbnREYXRhfSA9IHN0YXRlcy5nZXQoc3RhdGVTdGFydCk7XG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KGV2ZW50TmFtZSwgZXZlbnREYXRhLCBmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICAqL1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==