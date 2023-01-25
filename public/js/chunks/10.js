(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
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
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
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
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/drag-event-service/dist/drag-event-service.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/drag-event-service/dist/drag-event-service.es.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helper-js */ "./node_modules/helper-js/dist/helper-js.esm.js");
/*!
 * drag-event-service v0.0.6
 * (c) 2018-present phphe <phphe@outlook.com> (https://github.com/phphe)
 * Released under the MIT License.
 */


// support desktop and mobile
var events = {
  start: ['mousedown', 'touchstart'],
  move: ['mousemove', 'touchmove'],
  end: ['mouseup', 'touchend']
};
var index = {
  isTouch: function isTouch(e) {
    return e.type && e.type.startsWith('touch');
  },
  _getStore: function _getStore(el) {
    if (!el._wrapperStore) {
      el._wrapperStore = [];
    }

    return el._wrapperStore;
  },
  on: function on(el, name, handler) {
    var _hp$onDOM, _hp$onDOM2;

    var store = this._getStore(el);

    var ts = this;

    var wrapper = function wrapper(e) {
      var mouse;
      var isTouch = ts.isTouch(e);

      if (isTouch) {
        // touch
        mouse = {
          x: e.changedTouches[0].pageX,
          y: e.changedTouches[0].pageY
        };
      } else {
        // mouse
        mouse = {
          x: e.pageX,
          y: e.pageY
        };

        if (name === 'start' && e.which !== 1) {
          // not left button mousedown
          return;
        }
      }

      return handler.call(this, e, mouse);
    };

    store.push({
      handler: handler,
      wrapper: wrapper
    }); // follow format will cause big bundle size
    // 以下写法将会使打包工具认为hp是上下文, 导致打包整个hp
    // hp.onDOM(el, events[name][0], wrapper, ...args)

    for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      args[_key - 3] = arguments[_key];
    }

    (_hp$onDOM = helper_js__WEBPACK_IMPORTED_MODULE_0__["onDOM"]).call.apply(_hp$onDOM, [null, el, events[name][0], wrapper].concat(args));

    (_hp$onDOM2 = helper_js__WEBPACK_IMPORTED_MODULE_0__["onDOM"]).call.apply(_hp$onDOM2, [null, el, events[name][1], wrapper].concat(args));
  },
  off: function off(el, name, handler) {
    var store = this._getStore(el);

    for (var _len2 = arguments.length, args = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      args[_key2 - 3] = arguments[_key2];
    }

    for (var i = store.length - 1; i >= 0; i--) {
      var _store$i = store[i],
          handler2 = _store$i.handler,
          wrapper = _store$i.wrapper;

      if (handler === handler2) {
        var _hp$offDOM, _hp$offDOM2;

        (_hp$offDOM = helper_js__WEBPACK_IMPORTED_MODULE_0__["offDOM"]).call.apply(_hp$offDOM, [null, el, events[name][0], wrapper].concat(args));

        (_hp$offDOM2 = helper_js__WEBPACK_IMPORTED_MODULE_0__["offDOM"]).call.apply(_hp$offDOM2, [null, el, events[name][1], wrapper].concat(args));

        store.splice(i, 1);
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/draggable-helper/dist/draggable-helper.es.js":
/*!*******************************************************************!*\
  !*** ./node_modules/draggable-helper/dist/draggable-helper.es.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helper-js */ "./node_modules/helper-js/dist/helper-js.esm.js");
/* harmony import */ var drag_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! drag-event-service */ "./node_modules/drag-event-service/dist/drag-event-service.es.js");
/*!
 * draggable-helper v1.0.20
 * (c) 2018-present phphe <phphe@outlook.com> (https://github.com/phphe)
 * Released under the MIT License.
 */



/***
const destroy = draggableHelper(HTMLElement dragHandlerEl, Object opt = {})
opt.drag(e, opt, store)
[Object] opt.style || opt.getStyle(opt) set style of moving el style
[Boolean] opt.clone
opt.draggingClass, default dragging
opt.moving(e, opt, store) return false can prevent moving
opt.drop(e, opt, store)
opt.getEl(dragHandlerEl, opt) get the el that will be moved. default is dragHandlerEl
opt.minTranslate default 10, unit px
add other prop into opt, you get opt in callback
store{
  el
  initialMouse
  initialPosition
  mouse
  move
  movedCount // start from 0
}
e.g.
draggable(this.$el, {
  vm: this,
  data: this.data,
  drag: (e, opt, store) => {
    dplh.style.height = store.el.querySelector('.TreeNodeSelf').offsetHeight + 'px'
    th.insertAfter(dplh, opt.data)
  },
  moving: (e, opt, store) => {
    hp.arrayRemove(dplh.parent.children, dplh)
  },
  drop: (e, opt, store) => {
    hp.arrayRemove(dplh.parent.children, dplh)
  },
})
***/

function index (dragHandlerEl) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (opt.minTranslate == null) {
    opt.minTranslate = 10;
  }

  var store = getPureStore();

  var destroy = function destroy() {
    drag_event_service__WEBPACK_IMPORTED_MODULE_1__["default"].off(dragHandlerEl, 'end', dragHandlerEl._draggbleEventHandler);
    Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["offDOM"])(dragHandlerEl, 'selectstart', preventSelect);
    delete dragHandlerEl._draggbleEventHandler;
  };

  if (dragHandlerEl._draggbleEventHandler) {
    destroy();
  }

  dragHandlerEl._draggbleEventHandler = start;
  drag_event_service__WEBPACK_IMPORTED_MODULE_1__["default"].on(dragHandlerEl, 'start', dragHandlerEl._draggbleEventHandler);
  Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["onDOM"])(dragHandlerEl, 'selectstart', preventSelect);
  return destroy;

  function start(e, mouse) {
    // e.stopPropagation()
    store.mouse = {
      x: mouse.x,
      y: mouse.y
    };
    store.initialMouse = Object.assign({}, store.mouse);
    drag_event_service__WEBPACK_IMPORTED_MODULE_1__["default"].on(document, 'move', moving, {
      passive: false
    }); // passive: false is for touchmove event

    drag_event_service__WEBPACK_IMPORTED_MODULE_1__["default"].on(window, 'end', drop);
  }

  function drag(e) {
    var _resolveDragedElAndIn = resolveDragedElAndInitialPosition(),
        el = _resolveDragedElAndIn.el,
        position = _resolveDragedElAndIn.position;

    store.el = el;
    store.initialPosition = Object.assign({}, position);
    var r = opt.drag && opt.drag(e, opt, store);

    if (r === false) {
      return false;
    } // dom actions


    var size = Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["getElSize"])(el);
    var style = Object.assign({
      width: "".concat(size.width, "px"),
      height: "".concat(size.height, "px"),
      zIndex: 9999,
      opacity: 0.6,
      position: 'absolute',
      left: position.x + 'px',
      top: position.y + 'px'
    }, opt.style || opt.getStyle && opt.getStyle(opt) || {});
    Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["backupAttr"])(el, 'style');

    for (var key in style) {
      el.style[key] = style[key];
    } // add class


    Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["backupAttr"])(el, 'class');
    Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["addClass"])(el, opt.draggingClass);
  }

  function moving(e, mouse) {
    store.mouse = {
      x: mouse.x,
      y: mouse.y
    };
    var move = store.move = {
      x: store.mouse.x - store.initialMouse.x,
      y: store.mouse.y - store.initialMouse.y
    };

    if (store.movedCount === 0 && opt.minTranslate) {
      var x2 = Math.pow(store.move.x, 2);
      var y2 = Math.pow(store.move.y, 2);
      var dtc = Math.pow(x2 + y2, 0.5);

      if (dtc < opt.minTranslate) {
        return;
      }
    }

    var canMove = true;

    if (store.movedCount === 0) {
      if (drag(e) === false) {
        canMove = false;
      }
    } // move started
    // e.preventDefault() to prevent text selection and page scrolling when touch


    e.preventDefault();

    if (canMove && opt.moving) {
      if (opt.moving(e, opt, store) === false) {
        canMove = false;
      }
    }

    if (canMove) {
      if (!store || !store.el) {
        return;
      }

      Object.assign(store.el.style, {
        left: store.initialPosition.x + move.x + 'px',
        top: store.initialPosition.y + move.y + 'px'
      });
      store.movedCount++;
    }
  }

  function drop(e) {
    drag_event_service__WEBPACK_IMPORTED_MODULE_1__["default"].off(document, 'move', moving, {
      passive: false
    });
    drag_event_service__WEBPACK_IMPORTED_MODULE_1__["default"].off(window, 'end', drop); // drag executed if movedCount > 0

    if (store.movedCount > 0) {
      store.movedCount = 0;
      var _store = store,
          el = _store.el;

      if (opt.clone) {
        el.parentElement.removeChild(el);
      } else {
        Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["restoreAttr"])(el, 'style');
        Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["restoreAttr"])(el, 'class');
      }

      opt.drop && opt.drop(e, opt, store);
    }

    store = getPureStore();
  }

  function resolveDragedElAndInitialPosition() {
    var el0 = opt.getEl ? opt.getEl(dragHandlerEl, opt) : dragHandlerEl;
    var el = el0;

    if (opt.clone) {
      store.triggerEl = el0;
      el = el0.cloneNode(true);
      el0.parentElement.appendChild(el);
    }

    return {
      position: Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["getPosition"])(el),
      el: el
    };
  }

  function getPureStore() {
    return {
      movedCount: 0
    };
  }

  function preventSelect(e) {
    e.preventDefault();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/helper-js/dist/helper-js.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/helper-js/dist/helper-js.esm.js ***!
  \******************************************************/
/*! exports provided: Cache, CrossWindow, CrossWindowEventProcessor, EventProcessor, TreeData, URLHelper, addClass, addDate, appendTo, arrayAt, arrayDiff, arrayDistinct, arrayFirst, arrayFlat, arrayGet, arrayLast, arrayRemove, arrayRemoveBySortedIndexes, arraySibling, arrayWithoutEnd, assignIfDifferent, attachCache, backupAttr, binarySearch, camelCase, camelToWords, cloneDate, cloneObj, copyTextToClipboard, createElementFromHTML, debounce, debounceImmediate, debounceTrailing, depthFirstSearch, elementsFromPoint, empty, executeOnceInScopeByName, executePromiseGetters, executeWithCount, findNodeList, findNodeListReverse, findParent, forAll, getBorder, getBoundingClientRect, getCalendar, getCss3Prefix, getElSize, getElSizeEvenInvisible, getImageSizeByUrl, getLocalStorage2, getMonthEnd, getMonthStart, getOffset, getOffsetParent, getOuterAttachedHeight, getOuterAttachedWidth, getPosition, getPositionFromOffset, getScroll, getSessionStorage2, getUrlParam, getUserLanguage, getViewportPosition, glb, groupArray, hasClass, insertAfter, insertBefore, isArray, isBool, isDescendantOf, isDocumentExisted, isFunction, isIE, isIsoFormat, isNode, isNumber, isNumeric, isObject, isOffsetInEl, isPromise, isString, isWindowDefined, isset, iterateALL, iterateAll, joinFunctionsByNext, joinFunctionsByResult, joinMethods, jqFixedSize, jqMakeCarousel, kebabCase, makeStorageHelper, mapObjectTree, mapObjects, max, min, newArrayRemoveAt, numPad, numRand, objectExcept, objectGet, objectMap, objectMerge, objectOnly, objectSet, offDOM, offsetToViewportPosition, onDOM, onDOMMany, onQuickKeydown, openCenterWindow, openWindow, pairRows, parseISO, prependTo, promiseTimeout, removeClass, removeEl, replaceMultiple, resolveArgsByType, resolveValueOrGettter, restoreAttr, retry, setElChildByIndex, snakeCase, splitArray, store, store_executeOnceInScopeByName, strRand, studlyCase, titleCase, toArrayIfNot, uniqueId, unset, viewportPositionToOffset, waitFor, waitTime, walkTreeData, watchChange, windowLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return Cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossWindow", function() { return CrossWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossWindowEventProcessor", function() { return CrossWindowEventProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventProcessor", function() { return EventProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeData", function() { return TreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLHelper", function() { return URLHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDate", function() { return addDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTo", function() { return appendTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayAt", function() { return arrayAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayDiff", function() { return arrayDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayDistinct", function() { return arrayDistinct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFirst", function() { return arrayFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFlat", function() { return arrayFlat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayGet", function() { return arrayGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayLast", function() { return arrayLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return arrayRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayRemoveBySortedIndexes", function() { return arrayRemoveBySortedIndexes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arraySibling", function() { return arraySibling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayWithoutEnd", function() { return arrayWithoutEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignIfDifferent", function() { return assignIfDifferent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachCache", function() { return attachCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backupAttr", function() { return backupAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binarySearch", function() { return binarySearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return camelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelToWords", function() { return camelToWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneDate", function() { return cloneDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneObj", function() { return cloneObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyTextToClipboard", function() { return copyTextToClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementFromHTML", function() { return createElementFromHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounceImmediate", function() { return debounceImmediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounceTrailing", function() { return debounceTrailing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "depthFirstSearch", function() { return depthFirstSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementsFromPoint", function() { return elementsFromPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeOnceInScopeByName", function() { return executeOnceInScopeByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executePromiseGetters", function() { return executePromiseGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeWithCount", function() { return executeWithCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNodeList", function() { return findNodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNodeListReverse", function() { return findNodeListReverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findParent", function() { return findParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAll", function() { return forAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBorder", function() { return getBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoundingClientRect", function() { return getBoundingClientRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCalendar", function() { return getCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCss3Prefix", function() { return getCss3Prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElSize", function() { return getElSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElSizeEvenInvisible", function() { return getElSizeEvenInvisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSizeByUrl", function() { return getImageSizeByUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalStorage2", function() { return getLocalStorage2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthEnd", function() { return getMonthEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthStart", function() { return getMonthStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffset", function() { return getOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetParent", function() { return getOffsetParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOuterAttachedHeight", function() { return getOuterAttachedHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOuterAttachedWidth", function() { return getOuterAttachedWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return getPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionFromOffset", function() { return getPositionFromOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScroll", function() { return getScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionStorage2", function() { return getSessionStorage2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlParam", function() { return getUrlParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLanguage", function() { return getUserLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewportPosition", function() { return getViewportPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glb", function() { return glb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupArray", function() { return groupArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBool", function() { return isBool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDescendantOf", function() { return isDescendantOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDocumentExisted", function() { return isDocumentExisted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return isIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIsoFormat", function() { return isIsoFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return isNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOffsetInEl", function() { return isOffsetInEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWindowDefined", function() { return isWindowDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isset", function() { return isset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateALL", function() { return iterateALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateAll", function() { return iterateAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinFunctionsByNext", function() { return joinFunctionsByNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinFunctionsByResult", function() { return joinFunctionsByResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinMethods", function() { return joinMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jqFixedSize", function() { return jqFixedSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jqMakeCarousel", function() { return jqMakeCarousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebabCase", function() { return kebabCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStorageHelper", function() { return makeStorageHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapObjectTree", function() { return mapObjectTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapObjects", function() { return mapObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newArrayRemoveAt", function() { return newArrayRemoveAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numPad", function() { return numPad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numRand", function() { return numRand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectExcept", function() { return objectExcept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectGet", function() { return objectGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectMap", function() { return objectMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectMerge", function() { return objectMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectOnly", function() { return objectOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectSet", function() { return objectSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offDOM", function() { return offDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offsetToViewportPosition", function() { return offsetToViewportPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDOM", function() { return onDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDOMMany", function() { return onDOMMany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onQuickKeydown", function() { return onQuickKeydown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCenterWindow", function() { return openCenterWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openWindow", function() { return openWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairRows", function() { return pairRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseISO", function() { return parseISO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependTo", function() { return prependTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promiseTimeout", function() { return promiseTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEl", function() { return removeEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceMultiple", function() { return replaceMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveArgsByType", function() { return resolveArgsByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveValueOrGettter", function() { return resolveValueOrGettter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreAttr", function() { return restoreAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return retry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setElChildByIndex", function() { return setElChildByIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snakeCase", function() { return snakeCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitArray", function() { return splitArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store_executeOnceInScopeByName", function() { return store_executeOnceInScopeByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strRand", function() { return strRand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studlyCase", function() { return studlyCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titleCase", function() { return titleCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArrayIfNot", function() { return toArrayIfNot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return uniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unset", function() { return unset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewportPositionToOffset", function() { return viewportPositionToOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitFor", function() { return waitFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitTime", function() { return waitTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walkTreeData", function() { return walkTreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchChange", function() { return watchChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowLoaded", function() { return windowLoaded; });
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__);
/*!
 * helper-js v1.4.38
 * (c) phphe <phphe@outlook.com> (https://github.com/phphe)
 * Homepage: undefined
 * Released under the MIT License.
 */













function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.mark(iterateAll);

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// local store
var store = {}; // get global
// `this` !== global or window because of build tool

function glb() {
  if (store.glb) {
    return store.glb;
  } else {
    // resolve global
    var t;

    try {
      t = global;
    } catch (e) {
      t = window;
    }

    store.glb = t;
    return t;
  }
}
function isDocumentExisted() {
  try {
    var t = document;
  } catch (e) {
    return false;
  }

  return true;
} // is 各种判断

function isset(v) {
  return typeof v !== 'undefined';
}
function isArray(v) {
  return Object.prototype.toString.call(v) === '[object Array]';
}
function isBool(v) {
  return Object.prototype.toString.call(v) === '[object Boolean]';
}
function isNumber(v) {
  return Object.prototype.toString.call(v) === '[object Number]';
}
function isNumeric(v) {
  return isFinite(v) && !isNaN(parseFloat(v));
}
function isString(v) {
  return Object.prototype.toString.call(v) === '[object String]';
}
function isObject(v) {
  return Object.prototype.toString.call(v) === '[object Object]';
}
function isFunction(v) {
  return typeof v === 'function';
}
function isPromise(v) {
  return Object.prototype.toString.call(v) === '[object Promise]';
}
function empty(v) {
  if (v == null) {
    return true;
  } else if (v.length != null) {
    return v.length === 0;
  } else if (isBool(v)) {
    return false;
  } else if (isNumber(v)) {
    return isNaN(v);
  } else if (isObject(v)) {
    return Object.keys(v).length === 0;
  }
} // num

function numRand(min, max) {
  if (arguments.length === 1) {
    max = min;
    min = 0;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}
function numPad(num, n) {
  var len = num.toString().length;

  while (len < n) {
    num = '0' + num;
    len++;
  }

  return num;
}
function min(n, min) {
  return n < min ? min : n;
}
function max(n, max) {
  return n < max ? n : max;
} // str 字符

function studlyCase(str) {
  return str && str[0].toUpperCase() + str.substr(1);
}
function kebabCase(str) {
  return str.replace(/ /g, '-').replace(/_/g, '-').replace(/([A-Z])/g, '-$1').replace(/--+/g, '-').replace(/^-|-$|/g, '').toLowerCase();
}
function snakeCase(str) {
  return kebabCase(str).replace(/-/g, '_');
}
function camelCase(str) {
  var temp = str.toString().split(/[-_]/);

  for (var i = 1; i < temp.length; i++) {
    temp[i] = studlyCase(temp[i]);
  }

  return temp.join('');
}
function camelToWords(str) {
  return str.toString().trim().split(/(?=[A-Z])/);
}
function titleCase(str) {
  return camelToWords(studlyCase(camelCase(str))).join(' ').replace(/\bid\b/ig, 'ID');
}
function strRand() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var r = '';
  var seeds = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < len; i++) {
    r += seeds[numRand(seeds.length - 1)];
  }

  return prefix + r;
}
function replaceMultiple(mapObj, str) {
  var reg = new RegExp(Object.keys(mapObj).join('|'), 'g');
  return str.replace(reg, function (matchedKey) {
    return mapObj[matchedKey];
  });
} // array

function arrayRemove(arr, v) {
  var index;
  var count = 0;

  while ((index = arr.indexOf(v)) > -1) {
    arr.splice(index, 1);
    count++;
  }

  return count;
}
function arrayRemoveBySortedIndexes(arr, sortedIndexes) {
  for (var i = sortedIndexes.length - 1; i >= 0; i--) {
    var index = sortedIndexes[i];
    arr.splice(index, 1);
  }
}
function newArrayRemoveAt(arr, indexes) {
  indexes = toArrayIfNot(indexes);
  var mapping = {};

  var _iterator = _createForOfIteratorHelper(indexes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var index = _step.value;
      mapping[index] = true;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var newArr = [];
  var len = arr.length;

  for (var i = 0; i < len; i++) {
    if (!mapping[i]) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}
function arrayAt(arr, n) {
  return arr[n >= 0 ? n : arr.length + n];
}
function arrayFirst(arr) {
  return arr[0];
}
function arrayLast(arr) {
  return arr[arr.length - 1];
}
function arrayDiff(arr1, arr2) {
  var len = arr1.length;
  var arr = [];

  while (len--) {
    if (arr2.indexOf(arr1[len]) < 0) {
      arr.push(arr1[len]);
    }
  }

  return arr;
} // offset can be many

function arraySibling(arr, item, offset) {
  var index = arr.indexOf(item);

  if (index === -1) {
    throw 'item is not in array';
  }

  if (isArray(offset)) {
    return offset.map(function (v) {
      return arr[index + v];
    });
  }

  return arr[index + offset];
}
function toArrayIfNot(arrOrNot) {
  return isArray(arrOrNot) ? arrOrNot : [arrOrNot];
} // n can be getter(number of times)
// n可以是方法, 参数1是第几次分块

function splitArray(arr, n) {
  var r = [];

  if (isFunction(n)) {
    var getChunkLength = n;
    var times = 1;
    var i = 0;

    while (i < arr.length) {
      var _n = getChunkLength(times);

      var end = i + _n;
      r.push(arr.slice(i, end));
      i = end;
      times++;
    }
  } else {
    var _i = 0;

    while (_i < arr.length) {
      var _end = _i + n;

      r.push(arr.slice(_i, _end));
      _i = _end;
    }
  }

  return r;
}
function groupArray(arr, getMark) {
  var groups = new Map();
  arr.forEach(function (v) {
    var mark = getMark(v);

    if (!groups.has(mark)) {
      groups.set(mark, []);
    }

    groups.get(mark).push(v);
  });
  var r = [];
  groups.forEach(function (value, key) {
    r.push([key, value]);
  });
  return r;
}
function arrayDistinct(arr) {
  if (glb().Set) {
    return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11___default()(new Set(arr));
  } else {
    return arr.filter(function (v, i, a) {
      return a.indexOf(v) === i;
    });
  }
}
function arrayGet(arr, index, endIndex) {
  if (index < 0) {
    index += arr.length;
  }

  if (endIndex == null) {
    return arr[index];
  } else {
    if (endIndex < 0) {
      endIndex += arr.length;
    }

    return arr.slice(index, endIndex - index + 1);
  }
}
function arrayWithoutEnd(arr, len) {
  return arr.slice(0, arr.length - len);
}
function arrayFlat(arr) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var r = [];

  var rec = function rec(arr, curentDepth) {
    var _iterator2 = _createForOfIteratorHelper(arr),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;

        if (isArray(item) && curentDepth < depth) {
          rec(item, curentDepth + 1);
        } else {
          r.push(item);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };

  rec(arr, 0);
  return r;
} // object

function assignIfDifferent(obj, key, val) {
  if (obj[key] !== val) {
    obj[key] = val;
  }
}
function objectMerge(o1, o2) {
  for (var k in o2) {
    if (!o1.hasOwnProperty(k)) {
      o1[k] = o2[k];
    } else if (isObject(o1[k]) && isObject(o2[k])) {
      Object.assign(o1[k], o2[k]);
    } else {
      o1[k] = o2[k];
    }
  }

  return o1;
}
function objectMap(obj, func) {
  var r = {};

  for (var key in obj) {
    r[key] = func(obj[key], key, obj);
  }

  return r;
}
function objectOnly(obj, keys) {
  var r = {};

  for (var key in obj) {
    if (keys.indexOf(key) > -1) {
      r[key] = obj[key];
    }
  }

  return r;
}
function objectExcept(obj, keys) {
  var r = {};

  for (var key in obj) {
    if (keys.indexOf(key) === -1) {
      r[key] = obj[key];
    }
  }

  return r;
} // loop for all type
// TODO change reverse to opt in next version

function forAll(val, handler, reverse) {
  if (!reverse) {
    if (isArray(val) || isString(val) || val.hasOwnProperty('length')) {
      for (var i = 0; i < val.length; i++) {
        if (handler(val[i], i) === false) {
          break;
        }
      }
    } else if (isObject(val)) {
      for (var _i2 = 0, _Object$keys = Object.keys(val); _i2 < _Object$keys.length; _i2++) {
        var key = _Object$keys[_i2];

        if (handler(val[key], key) === false) {
          break;
        }
      }
    } else if (Number.isInteger(val)) {
      for (var _i3 = 0; _i3 < val; _i3++) {
        if (handler(_i3, _i3) === false) {
          break;
        }
      }
    }
  } else {
    if (isArray(val) || isString(val) || val.hasOwnProperty('length')) {
      for (var _i4 = val.length - 1; _i4 >= 0; _i4--) {
        if (handler(val[_i4], _i4) === false) {
          break;
        }
      }
    } else if (isObject(val)) {
      var keys = Object.keys(val);
      keys.reverse();

      for (var _i5 = 0, _keys = keys; _i5 < _keys.length; _i5++) {
        var _key = _keys[_i5];

        if (handler(val[_key], _key) === false) {
          break;
        }
      }
    } else if (Number.isInteger(val)) {
      for (var _i6 = val - 1; _i6 >= 0; _i6--) {
        if (handler(_i6, _i6) === false) {
          break;
        }
      }
    }
  }
} // loop for Array, Object, NodeList, String

function iterateAll(val) {
  var opt,
      i,
      info,
      _i7,
      _Object$keys2,
      key,
      _info,
      _i8,
      _info2,
      keys,
      _i9,
      _keys2,
      _key2,
      _info3,
      _args = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.wrap(function iterateAll$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          opt = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};

          if (opt.reverse) {
            _context.next = 30;
            break;
          }

          if (!(val.length != null)) {
            _context.next = 14;
            break;
          }

          i = 0;

        case 4:
          if (!(i < val.length)) {
            _context.next = 12;
            break;
          }

          info = {
            value: val[i],
            index: i
          };

          if (!(!opt.exclude || !opt.exclude(info))) {
            _context.next = 9;
            break;
          }

          _context.next = 9;
          return info;

        case 9:
          i++;
          _context.next = 4;
          break;

        case 12:
          _context.next = 28;
          break;

        case 14:
          if (!isObject(val)) {
            _context.next = 27;
            break;
          }

          _i7 = 0, _Object$keys2 = Object.keys(val);

        case 16:
          if (!(_i7 < _Object$keys2.length)) {
            _context.next = 25;
            break;
          }

          key = _Object$keys2[_i7];
          _info = {
            value: val[key],
            key: key
          };

          if (!(!opt.exclude || !opt.exclude(_info))) {
            _context.next = 22;
            break;
          }

          _context.next = 22;
          return _info;

        case 22:
          _i7++;
          _context.next = 16;
          break;

        case 25:
          _context.next = 28;
          break;

        case 27:
          throw 'Unsupported type';

        case 28:
          _context.next = 58;
          break;

        case 30:
          if (!(val.length != null)) {
            _context.next = 42;
            break;
          }

          _i8 = val.length - 1;

        case 32:
          if (!(_i8 >= 0)) {
            _context.next = 40;
            break;
          }

          _info2 = {
            value: val[_i8],
            index: _i8
          };

          if (!(!opt.exclude || !opt.exclude(_info2))) {
            _context.next = 37;
            break;
          }

          _context.next = 37;
          return _info2;

        case 37:
          _i8--;
          _context.next = 32;
          break;

        case 40:
          _context.next = 58;
          break;

        case 42:
          if (!isObject(val)) {
            _context.next = 57;
            break;
          }

          keys = Object.keys(val);
          keys.reverse();
          _i9 = 0, _keys2 = keys;

        case 46:
          if (!(_i9 < _keys2.length)) {
            _context.next = 55;
            break;
          }

          _key2 = _keys2[_i9];
          _info3 = {
            value: val[_key2],
            key: _key2
          };

          if (!(!opt.exclude || !opt.exclude(_info3))) {
            _context.next = 52;
            break;
          }

          _context.next = 52;
          return _info3;

        case 52:
          _i9++;
          _context.next = 46;
          break;

        case 55:
          _context.next = 58;
          break;

        case 57:
          throw 'Unsupported type';

        case 58:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
} // Deprecated in next version

var iterateALL = iterateAll; // source: http://stackoverflow.com/questions/8817394/javascript-get-deep-value-from-object-by-passing-path-to-it-as-string

function objectGet(obj, path, throwError) {
  var paths = isArray(path) ? path : path.split('.');
  var current = obj;

  try {
    var _iterator3 = _createForOfIteratorHelper(paths),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var key = _step3.value;
        current = current[key];
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  } catch (e) {
    if (throwError) {
      throw "Path does not exist";
    }
  }

  return current;
}
function objectSet(obj, path, value) {
  var paths = isArray(path) ? path : path.split('.');
  var lastKey = arrayLast(paths);
  var parent = objectGet(obj, paths.slice(0, paths.length - 1));

  if (!parent) {
    throw "Path does not exist";
  }

  parent[lastKey] = value;
}
function unset(obj, prop) {
  obj[prop] = undefined;

  try {
    delete obj[prop];
  } catch (e) {}
} // exclude: array or function

function cloneObj(obj, exclude) {
  var type = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9___default()(obj);

  switch (type) {
    case 'undefined':
    case 'boolean':
    case 'nuber':
    case 'string':
    case 'function':
      return obj;

    case 'object':
      if (obj === null) {
        // null is object
        return obj;
      }

      var r;

      if (isArray(obj)) {
        r = [];

        var _iterator4 = _createForOfIteratorHelper(obj),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var item = _step4.value;
            r.push(cloneObj(item, exclude));
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      } else {
        r = {};

        for (var _i10 = 0, _Object$keys3 = Object.keys(obj); _i10 < _Object$keys3.length; _i10++) {
          var key = _Object$keys3[_i10];

          if (!exclude || isArray(exclude) && !exclude.includes(key) || !exclude(key, obj[key], obj)) {
            r[key] = cloneObj(obj[key], exclude);
          }
        }
      }

      return r;

    default:
      return obj;
  }
}
/*
return cloned obj
handler(value, key, parent, newParent)
handler can return null or an object.
null: don't change anything
object{
  key: false, // delete. Deprecated, this will be removed in future, please use `delete` instead of it.
  key: new key, // use a new key instead of old key. if key == null, the old key will be detected
  delete,
  value, // new value. if value not gived, the old value will be detected
  skip, // skip children
  stop,
}
{key: false}: delete
{value}: change value
{key, value}. change key and value
limit: to prevent circular reference.
 */

function mapObjectTree(obj, handler) {
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10000;
  var r;
  var count = 0;
  var stack = [{
    value: obj
  }];

  var _loop2 = function _loop2() {
    if (count >= limit) {
      throw "mapObjectTree: limit(".concat(limit, ") reached, object may has circular reference");
    }

    count++;

    var _stack$shift = stack.shift(),
        value = _stack$shift.value,
        key = _stack$shift.key,
        parent = _stack$shift.parent,
        newParent = _stack$shift.newParent;

    var t = handler(value, key, parent, newParent);

    var assign = function assign(value, key, canPush) {
      if (isArray(value)) {
        value = [];
      } else if (isObject(value)) {
        value = {};
      }

      if (parent) {
        if (isArray(newParent) && canPush) {
          newParent.push(value);
        } else {
          newParent[key] = value;
        }
      } else {
        r = value;
      } // value may changed


      return value;
    };

    var newVal = void 0,
        val = void 0,
        toDelete = void 0,
        stop = void 0,
        skip = void 0;

    if (!t) {
      // no change
      val = value;
      newVal = assign(value, key);
    } else {
      var key2 = t.key,
          _value = t.value;
      val = _value;

      if (t.delete || key2 === false) {
        // del
        toDelete = true;
      } else if (key2 == null) {
        // don't change key
        newVal = assign(_value, key, true);
      } else if (t.hasOwnProperty('value')) {
        newVal = assign(_value, key2);
      }

      stop = t.stop;
      skip = t.skip;
    }

    if (toDelete) {
      return "continue";
    }

    if (skip) {
      return "continue";
    }

    if (stop) {
      return "break";
    }

    if (isArray(val)) {
      var len = val.length;

      for (var i = 0; i < len; i++) {
        stack.push({
          value: val[i],
          key: i,
          parent: val,
          newParent: newVal
        });
      }
    } else if (isObject(val)) {
      Object.keys(val).forEach(function (key) {
        stack.push({
          value: val[key],
          key: key,
          parent: val,
          newParent: newVal
        });
      });
    }
  };

  _loop: while (stack.length > 0) {
    var _ret = _loop2();

    switch (_ret) {
      case "continue":
        continue;

      case "break":
        break _loop;
    }
  }

  return r;
} // arr, idKey/getId

function mapObjects(arr, idKey) {
  var r = {};
  var len = arr.length;

  for (var i = 0; i < len; i++) {
    var item = arr[i];
    var id = isFunction(idKey) ? idKey(item, i) : item[idKey];
    r[id] = item;
  }

  return r;
} //

function pairRows(rows1, rows2, key1, key2) {
  if (!key2) {
    key2 = key1;
  }

  var map = mapObjects(rows2, key2);
  return rows1.map(function (row1) {
    return [row1, map[row1[key1]]];
  });
} // 深度优先遍历
// Depth-First-Search
// TODO change args in next version

function depthFirstSearch(obj, handler) {
  var childrenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  var reverse = arguments.length > 3 ? arguments[3] : undefined;
  var rootChildren = isArray(obj) ? obj : [obj]; //

  var StopException = function StopException() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, StopException);
  };

  var func = function func(children, parent, parentPath) {
    if (reverse) {
      children = children.slice();
      children.reverse();
    }

    var len = children.length;

    for (var i = 0; i < len; i++) {
      var item = children[i];
      var index = reverse ? len - i - 1 : i;
      var path = parentPath ? [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11___default()(parentPath), [index]) : []; // TODO change args in next version

      var r = handler(item, index, parent, path);

      if (r === false) {
        // stop
        throw new StopException();
      } else if (r === 'skip children') {
        continue;
      } else if (r === 'skip siblings') {
        break;
      }

      if (item[childrenKey] != null) {
        func(item[childrenKey], item, path);
      }
    }
  };

  try {
    func(rootChildren, null, isArray(obj) ? [] : null);
  } catch (e) {
    if (e instanceof StopException) ; else {
      throw e;
    }
  }
}
var walkTreeData = depthFirstSearch;
var TreeData = /*#__PURE__*/function () {
  // data = null;
  function TreeData(data) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, TreeData);

    this.childrenKey = 'children';
    this.data = data;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(TreeData, [{
    key: "iteratePath",
    value: /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.mark(function iteratePath(path) {
      var opt,
          childrenKey,
          rootChildren,
          prevPath,
          prevChildren,
          _iterator5,
          _step5,
          index,
          currentPath,
          currentNode,
          list,
          _iterator6,
          _step6,
          _step6$value,
          _path,
          node,
          _args2 = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.wrap(function iteratePath$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              opt = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
              childrenKey = this.childrenKey, rootChildren = this.rootChildren;

              if (opt.reverse) {
                _context2.next = 29;
                break;
              }

              prevPath = [];
              prevChildren = rootChildren;
              _iterator5 = _createForOfIteratorHelper(path);
              _context2.prev = 6;

              _iterator5.s();

            case 8:
              if ((_step5 = _iterator5.n()).done) {
                _context2.next = 19;
                break;
              }

              index = _step5.value;
              currentPath = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11___default()(prevPath), [index]);
              currentNode = prevChildren[index];
              _context2.next = 14;
              return {
                path: currentPath,
                node: currentNode
              };

            case 14:
              prevPath = currentPath;
              prevChildren = currentNode[childrenKey];

            case 17:
              _context2.next = 8;
              break;

            case 19:
              _context2.next = 24;
              break;

            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](6);

              _iterator5.e(_context2.t0);

            case 24:
              _context2.prev = 24;

              _iterator5.f();

              return _context2.finish(24);

            case 27:
              _context2.next = 48;
              break;

            case 29:
              list = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11___default()(this.iteratePath(path, _objectSpread({}, opt, {
                reverse: false
              })));
              list.reverse();
              _iterator6 = _createForOfIteratorHelper(list);
              _context2.prev = 32;

              _iterator6.s();

            case 34:
              if ((_step6 = _iterator6.n()).done) {
                _context2.next = 40;
                break;
              }

              _step6$value = _step6.value, _path = _step6$value.path, node = _step6$value.node;
              _context2.next = 38;
              return {
                path: _path,
                node: node
              };

            case 38:
              _context2.next = 34;
              break;

            case 40:
              _context2.next = 45;
              break;

            case 42:
              _context2.prev = 42;
              _context2.t1 = _context2["catch"](32);

              _iterator6.e(_context2.t1);

            case 45:
              _context2.prev = 45;

              _iterator6.f();

              return _context2.finish(45);

            case 48:
            case "end":
              return _context2.stop();
          }
        }
      }, iteratePath, this, [[6, 21, 24, 27], [32, 42, 45, 48]]);
    })
  }, {
    key: "getAllNodes",
    value: function getAllNodes(path) {
      var all = [];

      var _iterator7 = _createForOfIteratorHelper(this.iteratePath(path)),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var node = _step7.value.node;
          all.push(node);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return all;
    }
  }, {
    key: "getNode",
    value: function getNode(path) {
      return arrayLast(this.getAllNodes(path));
    }
  }, {
    key: "getNodeIndexAndParent",
    value: function getNodeIndexAndParent(path) {
      var parentPath = path.slice();
      var index = parentPath.pop();
      return {
        parent: this.getNode(parentPath),
        index: index,
        parentPath: parentPath
      };
    }
  }, {
    key: "getNodeParent",
    value: function getNodeParent(path) {
      return this.getNodeIndexAndParent(path).parent;
    }
  }, {
    key: "setPathNode",
    value: function setPathNode(path, node) {
      if (path == null || path.length === 0) {
        this.data = node;
      } else {
        var childrenKey = this.childrenKey,
            rootChildren = this.rootChildren;

        var _this$getNodeIndexAnd = this.getNodeIndexAndParent(path),
            parent = _this$getNodeIndexAnd.parent,
            index = _this$getNodeIndexAnd.index;

        var parentChildren = path.length === 1 ? rootChildren : parent[childrenKey];
        parentChildren[index] = node;
      }
    }
  }, {
    key: "removeNode",
    value: function removeNode(path) {
      var childrenKey = this.childrenKey,
          rootChildren = this.rootChildren;

      var _this$getNodeIndexAnd2 = this.getNodeIndexAndParent(path),
          parent = _this$getNodeIndexAnd2.parent,
          index = _this$getNodeIndexAnd2.index;

      var parentChildren = path.length === 1 ? rootChildren : parent[childrenKey];
      var node = parentChildren[index];
      parentChildren.splice(index, 1);
      return node;
    }
  }, {
    key: "walk",
    value: function walk(handler) {
      var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var childrenKey = this.childrenKey,
          data = this.data; // TODO change args in next version

      return walkTreeData(data, handler, childrenKey, opt.reverse);
    }
  }, {
    key: "clone",
    value: function clone() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // opt.afterNodeCreated(newNode, {oldNode: node, index, parent, path})
      // TODO change args in next version
      var childrenKey = this.childrenKey;
      var td = new TreeData();
      this.walk(function (node, index, parent, path) {
        var newNode = Object.assign({}, node);

        if (newNode[childrenKey]) {
          newNode[childrenKey] = [];
        }

        if (opt.afterNodeCreated) {
          opt.afterNodeCreated(newNode, {
            oldNode: node,
            index: index,
            parent: parent,
            path: path
          });
        }

        td.setPathNode(path, newNode);
      });
      return td.data;
    }
  }, {
    key: "rootChildren",
    get: function get() {
      var childrenKey = this.childrenKey;

      if (!this.data) {
        this.data = [];
      }

      var data = this.data;
      return isArray(data) ? data : data[childrenKey];
    }
  }]);

  return TreeData;
}(); // function helper | method helper ============================

function resolveValueOrGettter(valueOrGetter) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (isFunction(valueOrGetter)) {
    return valueOrGetter.apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11___default()(args));
  } else {
    return valueOrGetter;
  }
}
function executeWithCount(func) {
  var count = 0;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key3 = 0; _key3 < _len; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return func.call.apply(func, [this, count++].concat(args));
  };
}
function watchChange(getVal, handler) {
  var oldVal;

  var update = function update() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key4 = 0; _key4 < _len2; _key4++) {
      args[_key4] = arguments[_key4];
    }

    var newVal = getVal.apply(void 0, args);

    if (oldVal !== newVal) {
      handler.apply(void 0, [newVal].concat(args));
    }

    oldVal = newVal;
  };

  return update;
}
var store_executeOnceInScopeByName = {};
function executeOnceInScopeByName(name, action) {
  var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : scope_executeOnceInScopeByName;
  var storeResult = arguments.length > 3 ? arguments[3] : undefined;
  name = "executeOnceInScopeByName_".concat(name);

  if (!scope[name]) {
    var value = action();

    var destroy = function destroy() {
      delete scope[name];
    };

    scope[name] = {
      destroy: destroy
    };

    if (storeResult) {
      scope[name].value = value;
    }
  }

  return scope[name];
}
function debounceTrailing(action) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var t;
  var delaying;
  var lastArgs; // when trailing, use last args

  var resolves = [];
  var rejects = [];

  var wrappedAction = function wrappedAction() {
    var _this = this;

    for (var _len3 = arguments.length, args = new Array(_len3), _key5 = 0; _key5 < _len3; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return new Promise(function (resolve, reject) {
      resolves.push(resolve);
      rejects.push(reject); //

      lastArgs = args;

      if (!delaying) {
        delaying = true;
        t = setTimeout(function () {
          var result = action.call.apply(action, [_this].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11___default()(lastArgs)));
          t = null;
          delaying = false;
          resolves.forEach(function (resolve) {
            return resolve(result);
          });
          resolves = [];
          rejects = [];
        }, wait);
      }
    });
  };

  wrappedAction.stop = function () {
    if (t) {
      clearTimeout(t);
      t = null;
    }

    delaying = false;
    resolves = [];
    rejects.forEach(function (reject) {
      return reject();
    });
    rejects = [];
  };

  return wrappedAction;
}
function debounceImmediate(action) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var t;
  var delaying;
  var result;

  var wrappedAction = function wrappedAction() {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      if (delaying) {
        resolve(result);
      } else {
        delaying = true;
        result = action.call.apply(action, [_this2].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11___default()(lastArgs)));
        resolve(result);
        t = setTimeout(function () {
          t = null;
          delaying = false;
          result = null;
        }, wait);
      }
    });
  };

  wrappedAction.stop = function () {
    if (t) {
      clearTimeout(t);
      t = null;
    }

    delaying = false;
  };

  return wrappedAction;
}
function debounce(action) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (opt.immediate) {
    return debounceImmediate(action, wait);
  } else {
    return debounceTrailing(action, wait);
  }
}
/**
 * [joinMethods description]
 * @param  {[Function[]]} methods        [description]
 * @param  {String} [mode='value'] [value, pipeline]
 * @return {[Function]}                [description]
 */

function joinMethods(methods) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'value';
  var simpleJoinedMethod;

  var _iterator8 = _createForOfIteratorHelper(methods),
      _step8;

  try {
    var _loop3 = function _loop3() {
      var method = _step8.value;
      var old = simpleJoinedMethod;

      if (old) {
        simpleJoinedMethod = function simpleJoinedMethod() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key6 = 0; _key6 < _len4; _key6++) {
            args[_key6] = arguments[_key6];
          }

          return method.call.apply(method, [this, mode === 'value' ? old.call.apply(old, [this].concat(args)) : old].concat(args));
        };
      } else {
        simpleJoinedMethod = method;
      }
    };

    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      _loop3();
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }

  return simpleJoinedMethod;
} // the returned function only accept one argument

function joinFunctionsByResult(funcs) {
  var wrappedFunc = funcs[0];

  for (var i = 1; i < funcs.length; i++) {
    wrappedFunc = join2func(wrappedFunc, funcs[i]);
  }

  return wrappedFunc;

  function join2func(func1, func2) {
    return function (arg) {
      var result = args;
      var result1 = func1(arg);
      return func2(result1);
    };
  }
} // must pass arguments to `next` manually

function joinFunctionsByNext(funcs) {
  var next = function next() {};

  var _iterator9 = _createForOfIteratorHelper(iterateAll(funcs, {
    reverse: true
  })),
      _step9;

  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var func = _step9.value.value;
      var currentNext = next;
      next = wrapFuncWithNext(func, currentNext);
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }

  return next;

  function wrapFuncWithNext(func, next) {
    return function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key7 = 0; _key7 < _len5; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return func.apply(void 0, [next].concat(args));
    };
  }
} // promise
// execute promise in sequence

function executePromiseGetters(getters) {
  var concurrent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var stopped;
  var promise = new Promise(function (resolve, reject) {
    var r = [];
    var chunks = splitArray(getters, concurrent);
    var promise = Promise.resolve();
    chunks.forEach(function (chunk) {
      promise = promise.then(function (result) {
        if (result) {
          r.push.apply(r, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11___default()(result));
        }

        if (stopped) {
          reject('stopped');
        } else {
          return Promise.all(chunk.map(function (v) {
            return v();
          }));
        }
      });
    });
    promise.then(function (result) {
      r.push.apply(r, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11___default()(result));
      resolve(r);
    });
  });
  return {
    promise: promise,
    destroy: function destroy() {
      stopped = true;
    }
  };
}
function promiseTimeout(promise, timeout) {
  return new Promise(function (resolve, reject) {
    var t, rejected;
    promise.then(function () {
      clearTimeout(t);
      resolve.apply(void 0, arguments);
    }, function () {
      if (!rejected) {
        clearTimeout(t);
        reject.apply(void 0, arguments);
      }
    });
    t = setTimeout(function () {
      rejected = true;
      var e = new Error('Promise timeout!');
      e.name = 'timeout';
      reject(e);
    }, timeout);
  });
} // url

/* eslint-disable */

function getUrlParam(par) {
  // 获取当前URL
  var local_url = document.location.href; // 获取要取得的get参数位置

  var get = local_url.indexOf(par + '=');

  if (get == -1) {
    return false;
  } // 截取字符串


  var get_par = local_url.slice(par.length + get + 1); // 判断截取后的字符串是否还有其他get参数

  var nextPar = get_par.indexOf('&');

  if (nextPar != -1) {
    get_par = get_par.slice(0, nextPar);
  }

  return get_par;
}
/* eslint-enable */
// dom =====================================================
// return NodeList if there are multiple top-level nodes

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  if (div.childNodes.length > 1) {
    return div.childNodes;
  } else {
    return div.childNodes[0];
  }
}
function uniqueId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id_';
  var id = prefix + strRand();
  if (!store.uniqueId) store.uniqueId = {};
  var generatedIds = store.uniqueId;

  if (document.getElementById(id) || generatedIds[id]) {
    return uniqueId(prefix);
  } else {
    generatedIds[id] = true;
    return id;
  }
}
function isDescendantOf(el, parent) {
  while (true) {
    if (el.parentElement == null) {
      return false;
    } else if (el.parentElement === parent) {
      return true;
    } else {
      el = el.parentElement;
    }
  }
}
function removeEl(el) {
  if (el.parentNode !== null) {
    return el.parentNode.removeChild(el);
  }
} // refer: https://stackoverflow.com/questions/871399/cross-browser-method-for-detecting-the-scrolltop-of-the-browser-window

function getScroll() {
  if (typeof pageYOffset != 'undefined') {
    //most browsers except IE before #9
    return {
      top: pageYOffset,
      left: pageXOffset
    };
  } else {
    var B = document.body; //IE 'quirks'

    var D = document.documentElement; //IE with doctype

    D = D.clientHeight ? D : B;
    return {
      top: D.scrollTop,
      left: D.scrollLeft
    };
  }
} // refer: https://gist.github.com/aderaaij/89547e34617b95ac29d1

function getOffset(el) {
  var rect = getBoundingClientRect(el);
  var scroll = getScroll();
  return {
    x: rect.left + scroll.left,
    y: rect.top + scroll.top
  };
} // there is some trap in el.offsetParent, so use this func to fix

function getOffsetParent(el) {
  var offsetParent = el.offsetParent;

  if (!offsetParent || offsetParent === document.body && getComputedStyle(document.body).position === 'static') {
    offsetParent = document.body.parentElement;
  }

  return offsetParent;
} // get el current position. like jQuery.position
// the position is relative to offsetParent viewport left top. it is for set absolute position, absolute position is relative to offsetParent viewport left top.
// 相对于offsetParent可视区域左上角(el.offsetLeft或top包含父元素的滚动距离, 所以要减去). position一般用于设置绝对定位的情况, 而绝对定位就是以可视区域左上角为原点.

function getPosition(el) {
  var offsetParent = getOffsetParent(el);
  var ps = {
    x: el.offsetLeft,
    y: el.offsetTop
  };
  var parent = el;

  while (true) {
    parent = parent.parentElement;

    if (parent === offsetParent || !parent) {
      break;
    }

    ps.x -= parent.scrollLeft;
    ps.y -= parent.scrollTop;
  }

  return ps;
} // get position of a el if its offset is given. like jQuery.offset.
// 类似 jQuery.offset的设置功能, 但是它只返回计算的position, 不改变元素样式.

function getPositionFromOffset(el, of) {
  var offsetParent = getOffsetParent(el);
  var parentOf = getOffset(offsetParent);
  return {
    x: of.x - parentOf.x,
    y: of.y - parentOf.y
  };
}
function getBoundingClientRect(el) {
  // refer: http://www.51xuediannao.com/javascript/getBoundingClientRect.html
  var xy = el.getBoundingClientRect();
  var top = xy.top - document.documentElement.clientTop,
      //document.documentElement.clientTop 在IE67中始终为2，其他高级点的浏览器为0
  bottom = xy.bottom,
      left = xy.left - document.documentElement.clientLeft,
      //document.documentElement.clientLeft 在IE67中始终为2，其他高级点的浏览器为0
  right = xy.right,
      width = xy.width || right - left,
      //IE67不存在width 使用right - left获得
  height = xy.height || bottom - top;
  var x = left;
  var y = top;
  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: width,
    height: height,
    x: x,
    y: y
  };
}
var getViewportPosition = getBoundingClientRect; // TODO not tested

function viewportPositionToOffset(position) {
  var body = document.body;
  var bodyOf = getOffset(body);
  var bodyVP = getViewportPosition(body);
  return {
    x: position.x + bodyOf.x - bodyVP.x,
    y: position.y + bodyOf.y - bodyVP.y
  };
} // TODO not tested

function offsetToViewportPosition(offset) {
  var body = document.body;
  var bodyOf = getOffset(body);
  var bodyVP = getViewportPosition(body);
  return {
    x: offset.x + bodyVP.x - bodyOf.x,
    y: offset.y + bodyVP.y - bodyOf.y
  };
}
function findParent(el, callback, opt) {
  var cur = opt && opt.withSelf ? el : el.parentElement;

  while (cur) {
    var r = callback(cur);

    if (r === 'break') {
      return;
    } else if (r) {
      return cur;
    } else {
      cur = cur.parentElement;
    }
  }
}
function backupAttr(el, name) {
  var key = "original_".concat(name);
  el[key] = el.getAttribute(name);
}
function restoreAttr(el, name) {
  var key = "original_".concat(name);
  el.setAttribute(name, el[key]);
} // source: http://youmightnotneedjquery.com/

function hasClass(el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
} // source: http://youmightnotneedjquery.com/

function addClass(el, className) {
  if (!hasClass(el, className)) {
    if (el.classList) {
      el.classList.add(className);
    } else {
      el.className += ' ' + className;
    }
  }
} // source: http://youmightnotneedjquery.com/

function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
} // TODO rename to getElSizeEvenInvisible in next version

function getElSize(el) {
  backupAttr(el, 'style');
  el.style.display = 'block';
  var t = getBoundingClientRect(el);
  var size = {
    width: t.width,
    height: t.height
  };
  restoreAttr(el, 'style');
  return size;
}
var getElSizeEvenInvisible = getElSize;
/**
 * [isOffsetInEl]
 * @param {Number} x
 * @param {Number} y
 * @param {Object} el HTML Element
 */

function isOffsetInEl(x, y, el) {
  var offset = getOffset(el);
  return offset.x <= x && offset.x + el.offsetWidth >= x && offset.y <= y && offset.y + el.offsetHeight >= y;
} // get border

function getBorder(el) {
  var body = document.body;
  var workArea = findParent(el, function (v) {
    return hasClass(v, 'work-area');
  });
  var of = getOffset(workArea);
  return {
    left: of.x,
    right: of.x + workArea.offsetWidth,
    top: of.y + 50,
    bottom: body.offsetHeight < glb().innerHeight ? glb().innerHeight : body.offsetHeight
  };
}
function setElChildByIndex(el, index, child) {
  child.childComponentIndex = index;
  var len = el.childNodes.length;

  if (len === 0) {
    el.appendChild(child);
  } else if (index === 0) {
    el.insertBefore(child, el.childNodes[0]);
  } else {
    var _binarySearch = binarySearch(el.childNodes, function (el) {
      return el.childComponentIndex - index;
    }, 0, max(index, len - 1), true),
        nearestIndex = _binarySearch.index,
        nearest = _binarySearch.value,
        bigger = _binarySearch.bigger;

    if (bigger) {
      el.insertBefore(child, nearest);
    } else {
      var next = el.childNodes[nearestIndex + 1];

      if (next) {
        el.insertBefore(child, next);
      } else {
        el.appendChild(child);
      }
    }
  }
} // from https://blog.csdn.net/qq_30100043/article/details/74719534

function getCss3Prefix() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (opt.noCache || store.css3Prefix == null) {
    store.css3Prefix = reget();
  }

  return store.css3Prefix;

  function reget() {
    var div = document.createElement('div');
    var cssText = '-webkit-transition:all .1s; -moz-transition:all .1s; -o-transition:all .1s; -ms-transition:all .1s; transition:all .1s;';
    div.style.cssText = cssText;
    var style = div.style;

    if (style.webkitTransition) {
      return '-webkit-';
    }

    if (style.MozTransition) {
      return '-moz-';
    }

    if (style.oTransition) {
      return '-o-';
    }

    if (style.msTransition) {
      return '-ms-';
    }

    return '';
  }
} // dom event

function onDOM(el, name, handler) {
  for (var _len6 = arguments.length, args = new Array(_len6 > 3 ? _len6 - 3 : 0), _key8 = 3; _key8 < _len6; _key8++) {
    args[_key8 - 3] = arguments[_key8];
  }

  if (el.addEventListener) {
    // 所有主流浏览器，除了 IE 8 及更早 IE版本
    el.addEventListener.apply(el, [name, handler].concat(args));
  } else if (el.attachEvent) {
    // IE 8 及更早 IE 版本
    el.attachEvent.apply(el, ["on".concat(name), handler].concat(args));
  }
}
function offDOM(el, name, handler) {
  for (var _len7 = arguments.length, args = new Array(_len7 > 3 ? _len7 - 3 : 0), _key9 = 3; _key9 < _len7; _key9++) {
    args[_key9 - 3] = arguments[_key9];
  }

  if (el.removeEventListener) {
    // 所有主流浏览器，除了 IE 8 及更早 IE版本
    el.removeEventListener.apply(el, [name, handler].concat(args));
  } else if (el.detachEvent) {
    // IE 8 及更早 IE 版本
    el.detachEvent.apply(el, ["on".concat(name), handler].concat(args));
  }
}
function onDOMMany(els, names, handler) {
  els = toArrayIfNot(els);
  names = toArrayIfNot(names);

  for (var _len8 = arguments.length, args = new Array(_len8 > 3 ? _len8 - 3 : 0), _key10 = 3; _key10 < _len8; _key10++) {
    args[_key10 - 3] = arguments[_key10];
  }

  var _iterator10 = _createForOfIteratorHelper(els),
      _step10;

  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var el = _step10.value;

      var _iterator13 = _createForOfIteratorHelper(names),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var name = _step13.value;
          onDOM.apply(void 0, [el, name, handler].concat(args));
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }

  var destroy = function destroy() {
    var _iterator11 = _createForOfIteratorHelper(els),
        _step11;

    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var el = _step11.value;

        var _iterator12 = _createForOfIteratorHelper(names),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var name = _step12.value;
            offDOM(el, name, handler);
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
  };

  return destroy;
}
function getImageSizeByUrl(url) {
  var image = document.createElement('img');
  return new Promise(function (resolve, reject) {
    onDOM(image, 'load', function () {
      resolve({
        width: image.width,
        height: image.height
      });
    });
    onDOM(image, 'error', function (e) {
      reject(e);
    });
    image.src = url;
  });
}
function findNodeList(list, callback) {
  var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var iterator = iterateAll(list, {
    reverse: opt.reverse
  });

  var _iterator14 = _createForOfIteratorHelper(iterator),
      _step14;

  try {
    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
      var _step14$value = _step14.value,
          value = _step14$value.value,
          index = _step14$value.index;

      if (callback(value, index)) {
        return value;
      }
    }
  } catch (err) {
    _iterator14.e(err);
  } finally {
    _iterator14.f();
  }
}
function findNodeListReverse(list, callback) {
  var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  opt.reverse = true;
  return findNodeList(list, callback, opt);
}
function elementsFromPoint() {
  var func = document.elementsFromPoint || document.msElementsFromPoint || elementsFromPoint;

  for (var _len9 = arguments.length, args = new Array(_len9), _key11 = 0; _key11 < _len9; _key11++) {
    args[_key11] = arguments[_key11];
  }

  return func.apply(document, args);

  function elementsFromPoint(x, y) {
    var parents = [];
    var parent = void 0;

    do {
      if (parent !== document.elementFromPoint(x, y)) {
        parent = document.elementFromPoint(x, y);
        parents.push(parent);
        parent.style.pointerEvents = 'none';
      } else {
        parent = false;
      }
    } while (parent);

    parents.forEach(function (parent) {
      return parent.style.pointerEvents = 'all';
    });
    return parents;
  }
}
function getOuterAttachedHeight(el) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  opt = _objectSpread({
    margin: true,
    border: true
  }, opt);
  var stl = getComputedStyle(el);
  var r = 0;
  var arr = [];

  if (opt.margin) {
    arr.push('margin-top', 'margin-bottom');
  }

  if (opt.border) {
    arr.push('border-top-width', 'border-bottom-width');
  }

  arr.forEach(function (key) {
    r += parseFloat(stl[key]);
  });
  return r;
}
function getOuterAttachedWidth(el) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  opt = _objectSpread({
    margin: true,
    border: true
  }, opt);
  var stl = getComputedStyle(el);
  var r = 0;
  var arr = [];

  if (opt.margin) {
    arr.push('margin-left', 'margin-right');
  }

  if (opt.border) {
    arr.push('border-left-width', 'border-right-width');
  }

  arr.forEach(function (key) {
    r += parseFloat(stl[key]);
  });
  return r;
} // DOM structure

function insertBefore(el, target) {
  target.parentElement.insertBefore(el, target);
}
function insertAfter(el, target) {
  target.parentElement.insertBefore(el, target.nextSibling);
}
function prependTo(el, target) {
  target.insertBefore(el, target.firstChild);
}
function appendTo(el, target) {
  target.appendChild(el);
} // Date ===================================

function cloneDate(dateObj) {
  return new Date(dateObj.getTime());
}
function addDate(dateObj, n, type) {
  if (!['year', 'month', 'day', 'date'].includes(type)) {
    type += 's';
  }

  type = studlyCase(type);

  if (type === 'Day') {
    type = 'Date';
  }

  var setFuncName = 'set' + type;
  var getFuncName = 'get' + type;
  dateObj[setFuncName](dateObj[getFuncName]() + n);
  return dateObj;
}
function getMonthStart(dateObj) {
  var clonedObj = cloneDate(dateObj);
  clonedObj.setDate(1);
  return clonedObj;
}
function getMonthEnd(dateObj) {
  var r = cloneDate(dateObj);
  addDate(r, 1, 'month');
  r.setDate(0);
  return r;
}
/**
 * [getCalendar description]
 * @param  {[type]} year         [description]
 * @param  {[type]} month        [description]
 * @param  {Number} [startWeekDay=0] [0 is sunday]
 * @return {[type]}              [description]
 */

function getCalendar(year, month) {
  var startWeekDay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var results = [];
  var date = new Date(year, month - 1);
  year = date.getFullYear();
  month = date.getMonth() + 1;
  var monthStart = getMonthStart(date);
  var monthStartDay = monthStart.getDay();
  var calendarStart = addDate(cloneDate(monthStart), -(monthStartDay + startWeekDay), 'day');

  if (monthStartDay > startWeekDay) {
    var startDate = calendarStart.getDate();

    var _year = calendarStart.getFullYear();

    var _month = calendarStart.getMonth() + 1;

    for (var i = startWeekDay; i < monthStartDay; i++) {
      var _date = startDate + i;

      results.push({
        year: _year,
        month: _month,
        date: _date,
        text: _date,
        prevMonth: true
      });
    }
  } //


  var monthEnd = getMonthEnd(date);
  var monthEndtDate = monthEnd.getDate();

  for (var _i11 = 1; _i11 <= monthEndtDate; _i11++) {
    var _date2 = _i11;
    results.push({
      year: year,
      month: month,
      date: _date2,
      text: _date2,
      currentMonth: true
    });
  } //


  var monthEndDay = monthEnd.getDay();
  var endWeekDay = 6 - startWeekDay;

  if (monthEndDay < endWeekDay) {
    var nextMonth = addDate(cloneDate(date), 1, 'month');

    var _year2 = nextMonth.getFullYear();

    var _month2 = nextMonth.getMonth() + 1;

    for (var _i12 = monthEndDay + 1, _date3 = 1; _i12 <= endWeekDay; _i12++, _date3++) {
      results.push({
        year: _year2,
        month: _month2,
        date: _date3,
        text: _date3,
        nextMonth: true
      });
    }
  } //


  return splitArray(results, 7);
} // eg: 2018-09-07T03:38:37.888Z
// timezone must be UTC

function isIsoFormat(str) {
  return str.length > 15 && str.length < 30 && str.match(/^\d{4}-\d{2}-\d{2}T.*Z$/);
} // timestamp eg: 2018-09-07T03:38:37.888Z

function parseISO(timestamp) {
  var _timestamp$split = timestamp.split('T'),
      _timestamp$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_timestamp$split, 2),
      datePart = _timestamp$split2[0],
      timePart = _timestamp$split2[1];

  var y,
      m,
      d,
      h = 0,
      min = 0,
      s = 0;

  var _datePart$split$map = datePart.split('-').map(function (v) {
    return parseInt(v);
  });

  var _datePart$split$map2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_datePart$split$map, 3);

  y = _datePart$split$map2[0];
  m = _datePart$split$map2[1];
  d = _datePart$split$map2[2];
  m = m - 1;

  if (timePart) {
    var t = timePart.split('-').map(function (v) {
      return parseFloat(v);
    });
    h = t[0];

    if (t[1] != null) {
      min = t[1];
    }

    if (t[2] != null) {
      s = t[2];
    }
  }

  var dt = new Date(y, m, d, h, min, s); // the dt timezone is current, so reset hour with setUTCHours

  dt.setUTCHours(h);
  return dt;
} // advance =================================
// binarySearch 二分查找
// callback(mid, i) should return mid - your_value

function binarySearch(arr, callback, start, end, returnNearestIfNoHit) {
  var max = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1000;
  var midNum;
  var mid;

  if (start == null) {
    start = 0;
    end = arr.length - 1;
  }

  var i = 0;
  var r;

  while (start >= 0 && start <= end) {
    if (i >= max) {
      throw Error("binarySearch: loop times is over ".concat(max, ", you can increase the limit."));
    }

    midNum = Math.floor((end - start) / 2 + start);
    mid = arr[midNum];
    r = callback(mid, i);

    if (r > 0) {
      end = midNum - 1;
    } else if (r < 0) {
      start = midNum + 1;
    } else {
      return {
        index: midNum,
        value: mid,
        count: i + 1,
        hit: true
      };
    }

    i++;
  }

  return returnNearestIfNoHit ? {
    index: midNum,
    value: mid,
    count: i + 1,
    hit: false,
    bigger: r > 0
  } : null;
} //

function windowLoaded() {
  return new Promise(function (resolve, reject) {
    if (document && document.readyState === 'complete') {
      resolve();
    } else {
      glb().addEventListener('load', function once() {
        resolve();
        glb().removeEventListener('load', once);
      });
    }
  });
}
function waitTime(milliseconds, callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      callback && callback();
      resolve();
    }, milliseconds);
  });
} // overload waitFor(condition, time = 100, maxCount = 1000))

function waitFor(name, condition) {
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  var maxCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1000;

  if (isFunction(name)) {
    maxCount = time;
    time = isNumeric(condition) ? condition : 100;
    condition = name;
    name = null;
  }

  if (!store.waitFor) store.waitFor = {};
  var waits = store.waitFor;

  if (name && isset(waits[name])) {
    glb().clearInterval(waits[name]);
    delete waits[name];
  }

  return new Promise(function (resolve, reject) {
    var count = 0;

    function judge(interval) {
      if (count <= maxCount) {
        if (condition()) {
          stop(interval, name);
          resolve();
        }
      } else {
        stop(interval, name);
        reject(new Error('waitFor: Limit is reached'));
      }

      count++;
    }

    function stop(interval, name) {
      if (interval) {
        if (name && isset(waits[name])) {
          glb().clearInterval(waits[name]);
          delete waits[name];
        } else {
          glb().clearInterval(interval);
        }
      }
    }

    var interval = glb().setInterval(function () {
      judge(interval);
    }, time);

    if (name) {
      waits[name] = interval;
    }

    judge();
  });
}
function retry(func) {
  var limitTimes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  if (!store.retry) store.retry = {};
  var counters = retry;
  var name = generateName();
  counters[name] = 0;
  return doFunc;

  function doFunc(arg1, arg2, arg3) {
    return func(arg1, arg2, arg3).then(function (data) {
      delete counters[name];
      return data;
    }).catch(function (e) {
      counters[name]++;

      if (counters[name] >= limitTimes) {
        delete counters[name];
        return Promise.reject(e);
      } else {
        return doFunc(arg1, arg2, arg3);
      }
    });
  }

  function generateName() {
    var name = Math.random() + '';

    if (counters[name]) {
      return generateName();
    } else {
      return name;
    }
  }
} // 复制文字到剪贴板

function copyTextToClipboard(text) {
  try {
    // use latest api
    navigator.clipboard.writeText(text);
    return;
  } catch (e) {}

  var textArea = document.createElement('textarea'); //
  // *** This styling is an extra step which is likely not required. ***
  //
  // Why is it here? To ensure:
  // 1. the element is able to have focus and selection.
  // 2. if element was to flash render it has minimal visual impact.
  // 3. less flakyness with selection and copying which **might** occur if
  //    the textarea element is not visible.
  //
  // The likelihood is the element won't even render, not even a flash,
  // so some of these are just precautions. However in IE the element
  // is visible whilst the popup box asking the user for permission for
  // the web page to copy to the clipboard.
  //
  // Place in top-left corner of screen regardless of scroll position.

  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0; // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.

  textArea.style.width = '2em';
  textArea.style.height = '2em'; // We don't need padding, reducing the size if it does flash render.

  textArea.style.padding = 0; // Clean up any borders.

  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none'; // Avoid flash of white box if rendered for any reason.

  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}
function isWindowDefined() {
  try {
    return window && true;
  } catch (error) {
    return false;
  }
}
function isNode() {
  return Boolean(typeof glb().module !== 'undefined' && glb().module.exports);
}
function isIE() {
  return Boolean(window.ActiveXObject || "ActiveXObject" in window);
} // jquery

function jqFixedSize(sel) {
  var $ = glb().jQuery;
  $(sel).each(function () {
    var t = $(this);
    t.css({
      width: t.width() + 'px',
      height: t.height() + 'px'
    });
  });
}
function jqMakeCarousel(wrapperSel, listSel, itemSel) {
  var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1000;
  var space = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 16;
  var dir = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'left';
  var top = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

  if (space.toString().match(/^\d+$/)) {
    space = space + 'px';
  }

  var spaceNumber = parseFloat(space);
  var $ = glb().jQuery;
  var wrapper = $(wrapperSel);
  var list = wrapper.find(listSel);
  wrapper.css({
    position: 'relative',
    height: wrapper.height() + 'px'
  });
  var items0 = list.find(itemSel);
  items0.css({
    margin: '0',
    marginRight: space
  });
  var width = (Math.ceil(items0.width()) + spaceNumber) * items0.length;
  list.css({
    position: 'absolute',
    margin: '0',
    width: width + 'px'
  });
  var height = list.height();
  var list2 = list.clone();
  var list3 = list.clone();
  list.css({
    left: 0
  });
  list2.css({
    left: width + 'px'
  });
  list3.css({
    left: width * 2 + 'px'
  });
  var lists = $('<div></div>');
  lists.css({
    position: 'absolute',
    width: width * 3 + 'px',
    height: height + 'px',
    left: 0,
    top: top
  });
  lists.append(list).append(list2).append(list3);
  wrapper.append(lists);
  var left = 0;

  function animateLoop() {
    if (dir === 'left') {
      left -= 100;
    } else {
      left += 100;
    }

    lists.animate({
      left: "".concat(left, "px")
    }, speed, 'linear', function () {
      if (Math.abs(left) > width) {
        if (dir === 'left') {
          left += width;
        } else {
          left -= width;
        }

        lists.css({
          left: left + 'px'
        });
      }

      animateLoop();
    });
  }

  animateLoop();
} // https://developer.mozilla.org/docs/Web/API/Window/open
// http://www.w3school.com.cn/htmldom/met_win_open.asp#windowfeatures

function openWindow(url, name) {
  var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  glb().open(url, name, Object.keys(opt).map(function (k) {
    return "".concat(k, "=").concat(opt[k]);
  }).join(','));
}
function openCenterWindow(url, name, width, height) {
  var opt = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var t = {
    width: width,
    height: height,
    top: (glb().screen.availHeight - 30 - height) / 2,
    left: (glb().screen.availWidth - 30 - width) / 2
  };
  Object.assign(t, opt);
  openWindow(url, name, t);
}
var URLHelper = /*#__PURE__*/function () {
  // protocol, hostname, port, pastname
  function URLHelper(baseUrl) {
    var _this3 = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, URLHelper);

    this.baseUrl = '';
    this.search = {};
    var t = decodeURI(baseUrl).split('?');
    this.baseUrl = t[0];

    if (t[1]) {
      t[1].split('&').forEach(function (v) {
        var t2 = v.split('=');
        _this3.search[t2[0]] = t2[1] == null ? '' : decodeURIComponent(t2[1]);
      });
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(URLHelper, [{
    key: "getHref",
    value: function getHref() {
      var _this4 = this;

      var t = [this.baseUrl];
      var searchStr = Object.keys(this.search).map(function (k) {
        return "".concat(k, "=").concat(encodeURIComponent(_this4.search[k]));
      }).join('&');

      if (searchStr) {
        t.push(searchStr);
      }

      return t.join('?');
    }
  }]);

  return URLHelper;
}(); // 解析函数参数, 帮助重载
// types eg: ['Object', (i) => i > 3, ['Number', default], null ]
// null represent all types of argument

function resolveArgsByType(args, types) {
  var argIndex = 0;
  return types.map(function (v) {
    // make rule
    var rule, dft;

    if (isArray(v)) {
      rule = v[0];
      dft = v[1];
    } else {
      rule = v;
      dft = undefined;
    }

    if (!isFunction(rule)) {
      if (rule == null) {
        rule = function rule() {
          return true;
        };
      } else {
        var t = rule;

        rule = function rule(x) {
          return Object.prototype.toString.call(x) === "[object ".concat(t, "]");
        };
      }
    }

    var arg = args[argIndex];

    if (rule(arg)) {
      argIndex++;
      return arg;
    } else {
      return dft;
    }
  });
} // set null can remove a item

function makeStorageHelper(storage) {
  return {
    storage: storage,
    set: function set(name, value, minutes) {
      if (value == null) {
        this.storage.removeItem(name);
      } else {
        this.storage.setItem(name, JSON.stringify({
          value: value,
          expired_at: minutes ? new Date().getTime() + minutes * 60 * 1000 : null
        }));
      }
    },
    get: function get(name) {
      var t = this.storage.getItem(name);

      if (t) {
        t = JSON.parse(t);

        if (!t.expired_at || t.expired_at > new Date().getTime()) {
          return t.value;
        } else {
          this.storage.removeItem(name);
        }
      }

      return null;
    },
    clear: function clear() {
      this.storage.clear();
    }
  };
}
function getLocalStorage2() {
  if (!store.localStorage2) {
    store.localStorage2 = makeStorageHelper(glb().localStorage);
  }

  return store.localStorage2;
}
function getSessionStorage2() {
  if (!store.sessionStorage2) {
    store.sessionStorage2 = makeStorageHelper(glb().sessionStorage);
  }

  return store.sessionStorage2;
} // 事件处理

var EventProcessor = /*#__PURE__*/function () {
  function EventProcessor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, EventProcessor);

    this.eventStore = [];
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(EventProcessor, [{
    key: "on",
    value: function on(name, handler) {
      this.eventStore.push({
        name: name,
        handler: handler
      });
    }
  }, {
    key: "once",
    value: function once(name, handler) {
      var _this5 = this;

      var off = function off() {
        _this5.off(name, wrappedHandler);
      };

      var wrappedHandler = function wrappedHandler() {
        handler.apply(void 0, arguments);
        off();
      };

      this.on(name, wrappedHandler);
      return off;
    }
  }, {
    key: "onceTimeout",
    value: function onceTimeout(name, handler, timeout) {
      var _this6 = this;

      var off;
      var promise = new Promise(function (resolve, reject) {
        var wrappedHandler = function wrappedHandler() {
          handler.apply(void 0, arguments);
          resolve();
        };

        off = _this6.once(name, wrappedHandler);
        waitTime(timeout).then(function () {
          off();
          reject();
        });
      });

      var off2 = function off2() {
        off && off();
      };

      return {
        off: off2,
        promise: promise
      };
    }
  }, {
    key: "off",
    value: function off(name, handler) {
      var indexes = []; // to remove indexes; reverse; 倒序的

      var len = this.eventStore.length;

      for (var i = 0; i < len; i++) {
        var item = this.eventStore[i];

        if (item.name === name && item.handler === handler) {
          indexes.unshift(i);
        }
      }

      for (var _i13 = 0, _indexes = indexes; _i13 < _indexes.length; _i13++) {
        var index = _indexes[_i13];
        this.eventStore.splice(index, 1);
      }
    }
  }, {
    key: "emit",
    value: function emit(name) {
      // 重要: 先找到要执行的项放在新数组里, 因为执行项会改变事件项存储数组
      var items = [];

      var _iterator15 = _createForOfIteratorHelper(this.eventStore),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var _item = _step15.value;

          if (_item.name === name) {
            items.push(_item);
          }
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      for (var _len10 = arguments.length, args = new Array(_len10 > 1 ? _len10 - 1 : 0), _key12 = 1; _key12 < _len10; _key12++) {
        args[_key12 - 1] = arguments[_key12];
      }

      for (var _i14 = 0, _items = items; _i14 < _items.length; _i14++) {
        var item = _items[_i14];
        item.handler.apply(item, args);
      }
    }
  }]);

  return EventProcessor;
}();
var CrossWindowEventProcessor = /*#__PURE__*/function (_EventProcessor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(CrossWindowEventProcessor, _EventProcessor);

  var _super = _createSuper(CrossWindowEventProcessor);

  // id
  function CrossWindowEventProcessor(opt) {
    var _this7;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, CrossWindowEventProcessor);

    _this7 = _super.call(this);
    _this7.storageName = '_crossWindow';
    _this7.windows = [];
    _this7.timeout = 200;
    _this7.BROADCAST = '__BROADCAST__';

    if (opt) {
      Object.assign(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this7), opt);
    }

    onDOM(window, 'storage', function (ev) {
      if (ev.key === _this7.storageName) {
        var event = JSON.parse(ev.newValue);

        if (!event.targets || event.targets.includes(_this7.id)) {
          var _this8;

          (_this8 = _this7).emitLocal.apply(_this8, [event.name].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11___default()(event.args)));
        }
      }
    }); // social parts 集体部分
    // join

    _this7.id = strRand();
    _this7.windows = [_this7.id];
    _this7.ready = new Promise(function (resolve, reject) {
      _this7.onceTimeout('_windows_updated', function (_ref) {
        var windows = _ref.windows;
        _this7.windows = windows;
      }, _this7.timeout).promise.then(function () {
        resolve(); // responsed 被响应
      }, function () {
        // no response 无响应
        resolve();
      });

      _this7.broadcast('_join', _this7.id);
    });

    _this7.ready.then(function () {
      // on join
      _this7.on('_join', function (id) {
        _this7.windows.push(id);

        if (_this7.isMain()) {
          _this7.broadcast('_windows_updated', {
            windows: _this7.windows,
            type: 'join',
            id: id
          });
        }
      }); // on _windows_updated


      _this7.on('_windows_updated', function (_ref2) {
        var windows = _ref2.windows;
        _this7.windows = windows;
      }); // on exit


      _this7.on('_exit', function (id) {
        var oldMain = _this7.windows[0];
        arrayRemove(_this7.windows, id);

        if (_this7.isMain()) {
          _this7.emit('_windows_updated', {
            windows: _this7.windows,
            type: 'exit',
            id: id
          });

          if (oldMain != _this7.id) {
            _this7.emit('_main_updated', {
              windows: _this7.windows,
              old: oldMain,
              'new': _this7.id
            });
          }
        }
      });

      onDOM(window, 'beforeunload', function () {
        _this7.exitGroup();
      });
    });

    return _this7;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(CrossWindowEventProcessor, [{
    key: "isMain",
    value: function isMain() {
      return this.id === this.windows[0];
    }
  }, {
    key: "emitTo",
    value: function emitTo(name, targets) {
      for (var _len11 = arguments.length, args = new Array(_len11 > 2 ? _len11 - 2 : 0), _key13 = 2; _key13 < _len11; _key13++) {
        args[_key13 - 2] = arguments[_key13];
      }

      if (targets === this.BROADCAST) {
        targets = null;
      } else {
        if (targets && !isArray(targets)) {
          targets = [targets];
        }

        if (targets.includes(this.id)) {
          var _get2;

          (_get2 = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(CrossWindowEventProcessor.prototype), "emit", this)).call.apply(_get2, [this, name].concat(args)); // emit to current window

        }
      }

      glb().localStorage.setItem(this.storageName, JSON.stringify({
        name: name,
        targets: targets,
        args: args,
        // use random make storage event triggered every time
        // 加入随机保证触发storage事件
        random: Math.random()
      }));
    }
  }, {
    key: "emitLocal",
    value: function emitLocal(name) {
      for (var _len12 = arguments.length, args = new Array(_len12 > 1 ? _len12 - 1 : 0), _key14 = 1; _key14 < _len12; _key14++) {
        args[_key14 - 1] = arguments[_key14];
      }

      this.emitTo.apply(this, [name, this.id].concat(args));
    }
  }, {
    key: "broadcast",
    value: function broadcast(name) {
      for (var _len13 = arguments.length, args = new Array(_len13 > 1 ? _len13 - 1 : 0), _key15 = 1; _key15 < _len13; _key15++) {
        args[_key15 - 1] = arguments[_key15];
      }

      this.emitTo.apply(this, [name, this.BROADCAST].concat(args));
    }
  }, {
    key: "emit",
    value: function emit(name) {
      for (var _len14 = arguments.length, args = new Array(_len14 > 1 ? _len14 - 1 : 0), _key16 = 1; _key16 < _len14; _key16++) {
        args[_key16 - 1] = arguments[_key16];
      }

      this.emitTo.apply(this, [name, this.windows].concat(args));
    }
  }, {
    key: "exitGroup",
    value: function exitGroup() {
      this.broadcast('_exit', this.id);
    }
  }]);

  return CrossWindowEventProcessor;
}(EventProcessor); // Deprecated in next version

var CrossWindow = CrossWindowEventProcessor;
function onQuickKeydown(handler) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  opt = _objectSpread({
    timeout: 1000
  }, opt);
  var input = '';
  var timeoutId;

  var keydownHandler = function keydownHandler(e) {
    if (e.key && e.key.length === 1) {
      input = "".concat(input).concat(e.key);
      handler(input);

      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }

      timeoutId = setTimeout(function () {
        input = '';
      }, opt.timeout);
    }
  };

  onDOM(document, 'keydown', keydownHandler);
  return function () {
    offDOM(document, 'keydown', keydownHandler);
  };
}
function getUserLanguage() {
  return navigator.language || navigator.userLanguage;
}
var Cache = /*#__PURE__*/function () {
  function Cache() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, Cache);

    this.store = {};
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(Cache, [{
    key: "has",
    value: function has(name) {
      return this.store.hasOwnProperty(name);
    }
  }, {
    key: "remember",
    value: function remember(name, getter) {
      if (!this.has(name)) {
        this.store[name] = {
          value: getter()
        };
      }

      return this.store[name].value;
    }
  }, {
    key: "forget",
    value: function forget(name) {
      if (name) {
        if (this.has(name)) {
          delete this.store[name];
        }
      } else {
        this.store = {};
      }
    }
  }]);

  return Cache;
}(); // attach cached getters to an object; can attach to self

function attachCache(obj, toCache) {
  var cache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Cache();

  var _loop4 = function _loop4(key) {
    var getter = toCache[key];
    Object.defineProperty(obj, key, {
      get: function get() {
        var _this9 = this;

        return cache.remember(key, function () {
          return getter.call(_this9);
        });
      }
    });
  };

  for (var key in toCache) {
    _loop4(key);
  }
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/tree-helper/dist/tree-helper.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/tree-helper/dist/tree-helper.esm.js ***!
  \**********************************************************/
/*! exports provided: appendTo, breadthFirstSearch, clone, depthFirstSearch, forIn, getTreeDataFromFlat, insertAfter, insertBefore, prependTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTo", function() { return appendTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breadthFirstSearch", function() { return breadthFirstSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "depthFirstSearch", function() { return depthFirstSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forIn", function() { return forIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeDataFromFlat", function() { return getTreeDataFromFlat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependTo", function() { return prependTo; });
/* harmony import */ var helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helper-js */ "./node_modules/helper-js/dist/helper-js.esm.js");
/*!
* tree-helper v1.4.14
* (c) phphe <phphe@outlook.com> (https://github.com/phphe)
* Released under the MIT License.
*/


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function clone(obj) {
  var childrenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
  var cloned;

  if (Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["isArray"])(obj)) {
    cloned = obj.map(function (item) {
      return clone(item);
    });
  } else {
    cloned = Object.assign({}, obj);

    if (cloned[childrenKey]) {
      cloned[childrenKey] = clone(cloned[childrenKey]);
    }
  }

  return cloned;
} // 旧版深度优先遍历
// old Depth-First-Search

function forIn(obj, handler) {
  var childrenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';

  var rootChildren, rootParent, _func;

  if (Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["isArray"])(obj)) {
    rootChildren = obj;
    rootParent = null;
  } else {
    rootChildren = [obj];
    rootParent = null;
  }

  if (rootChildren) {
    _func = function func(children, parent) {
      for (var key in children) {
        var child = children[key];

        if (handler(child, key, parent) === false) {
          return false;
        }

        if (child[childrenKey] != null) {
          if (_func(child[childrenKey], child) === false) {
            return false;
          }
        }
      }

      return true;
    };

    _func(rootChildren, rootParent);
  }

  return obj;
} // 深度优先遍历
// Depth-First-Search

function depthFirstSearch(obj, handler) {
  var childrenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  var reverse = arguments.length > 3 ? arguments[3] : undefined;
  var rootChildren = Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["isArray"])(obj) ? obj : [obj]; //

  var StopException = function StopException() {};

  var func = function func(children, parent) {
    if (reverse) {
      children = children.slice();
      children.reverse();
    }

    var len = children.length;

    for (var i = 0; i < len; i++) {
      var item = children[i];
      var r = handler(item, i, parent);

      if (r === false) {
        // stop
        throw new StopException();
      } else if (r === 'skip children') {
        continue;
      } else if (r === 'skip siblings') {
        break;
      }

      if (item[childrenKey] != null) {
        func(item[childrenKey], item);
      }
    }
  };

  try {
    func(rootChildren);
  } catch (e) {
    if (e instanceof StopException) ; else {
      throw e;
    }
  }
} // 广度优先遍历
// Breadth-First-Search

function breadthFirstSearch(obj, handler) {
  var reverse = arguments.length > 3 ? arguments[3] : undefined;
  var rootChildren = Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["isArray"])(obj) ? obj : [obj]; //

  var stack = rootChildren.map(function (v, i) {
    return {
      item: v,
      index: i
    };
  });

  if (reverse) {
    stack.reverse();
  }

  var _loop = function _loop() {
    var _stack$shift = stack.shift(),
        item = _stack$shift.item,
        index = _stack$shift.index,
        parent = _stack$shift.parent;

    var r = handler(item, index, parent);

    if (r === false) {
      // stop
      return {
        v: void 0
      };
    } else if (r === 'skip children') {
      return "continue";
    } else if (r === 'skip siblings') {
      stack = stack.filter(function (v) {
        return v.parent !== parent;
      });
    }

    if (item.children) {
      var _stack;

      var children = item.children;

      if (reverse) {
        children = children.slice();
        children.reverse();
      }

      var pushStack = children.map(function (v, i) {
        return {
          item: v,
          index: i,
          parent: item
        };
      });

      (_stack = stack).push.apply(_stack, _toConsumableArray(pushStack));
    }
  };

  while (stack.length) {
    var _ret = _loop();

    switch (_ret) {
      case "continue":
        continue;

      default:
        if (_typeof(_ret) === "object") return _ret.v;
    }
  }
}

function _changeParent(item, parent) {
  var childrenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  var parentKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'parent';

  // remove item from original list
  if (item[parentKey]) {
    Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(item[parentKey][childrenKey], item);
  }

  item[parentKey] = parent;
}

function getTreeDataFromFlat(data, idKey, parentIdKey) {
  data.forEach(function (item) {
    return item.children = data.filter(function (v) {
      return v[parentIdKey] === item[idKey];
    });
  });
  return data.filter(function (item) {
    return item[parentIdKey] == null;
  });
}
function insertBefore(item, target) {
  var childrenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  var parentKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'parent';

  if (item === target) {
    return;
  }

  var siblings = target[parentKey][childrenKey];
  var index = siblings.indexOf(target);

  if (siblings[index - 1] !== item) {
    if (item[parentKey] === target[parentKey]) {
      Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(siblings, item);
      index = siblings.indexOf(target);
    } else {
      _changeParent(item, target[parentKey]);
    }

    siblings.splice(index, 0, item);
  }
}
function insertAfter(item, target) {
  var childrenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  var parentKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'parent';

  if (item === target) {
    return;
  }

  var targetParent = target[parentKey];
  var siblings = targetParent[childrenKey];
  var index = siblings.indexOf(target);

  if (siblings[index + 1] !== item) {
    if (item[parentKey] === target[parentKey]) {
      Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(siblings, item);
      index = siblings.indexOf(target);
    } else {
      _changeParent(item, target[parentKey]);
    }

    siblings.splice(index + 1, 0, item);
  }
}
function prependTo(item, target) {
  var childrenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';

  if (item === target) {
    throw "can't prepend to self";
  }

  var targetChildren = target[childrenKey];

  if (targetChildren[0] !== item) {
    _changeParent(item, target);

    targetChildren.splice(0, 0, item);
  }
}
function appendTo(item, target) {
  var childrenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';

  if (item === target) {
    throw "can't append to self";
  }

  var targetChildren = target[childrenKey];
  var targetChildrenLast = targetChildren[targetChildren.length - 1];

  if (targetChildrenLast !== item) {
    _changeParent(item, target);

    targetChildren.push(item);
  }
}




/***/ }),

/***/ "./node_modules/vue-draggable-nested-tree/dist/vue-draggable-nested-tree.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/vue-draggable-nested-tree/dist/vue-draggable-nested-tree.esm.js ***!
  \**************************************************************************************/
/*! exports provided: DraggableTree, DraggableTreeNode, Tree, TreeNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableTree", function() { return __vue_component__$3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableTreeNode", function() { return __vue_component__$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tree", function() { return __vue_component__$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return __vue_component__; });
/* harmony import */ var helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helper-js */ "./node_modules/helper-js/dist/helper-js.esm.js");
/* harmony import */ var tree_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tree-helper */ "./node_modules/tree-helper/dist/tree-helper.esm.js");
/* harmony import */ var vue_runtime_helpers_dist_normalize_component_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-runtime-helpers/dist/normalize-component.mjs */ "./node_modules/vue-runtime-helpers/dist/normalize-component.mjs");
/* harmony import */ var draggable_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draggable-helper */ "./node_modules/draggable-helper/dist/draggable-helper.es.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-functions */ "./node_modules/vue-functions/dist/vue-functions.esm.js");
/*!
 * vue-draggable-nested-tree v3.0.0-beta
 * (c) phphe <phphe@outlook.com> (https://github.com/phphe)
 * Released under the MIT License.
 */







//
var script = {
  name: 'TreeNode',
  props: {
    data: {},
    store: {},
    level: {
      default: 0
    } // readonly

  },

  data() {
    return {
      vm: this
    };
  },

  computed: {
    childrenLevel() {
      return this.level + 1;
    },

    isRoot() {
      return this.data && this.data.isRoot;
    },

    childrenVisible() {
      var {
        data
      } = this;
      return this.isRoot || data && data.children && data.children.length && data.open;
    },

    innerBackStyle() {
      var r = {
        marginBottom: this.store.space + 'px'
      };

      if (!this.isRoot && this.level > 1) {
        r.paddingLeft = (this.level - 1) * this.store.indent + 'px';
      }

      return r;
    }

  },
  watch: {
    data: {
      immediate: true,

      handler(data) {
        if (data) {
          data._vm = this;

          if (!data._treeNodePropertiesCompleted && !data.isRoot) {
            this.store.compeleteNode(data, this.$parent.data);
          }
        }
      }

    }
  } // methods: {},
  // created() {},
  // mounted() {},

};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "tree-node",
    class: [_vm.data.active ? _vm.store.activatedClass : "", _vm.data.open ? _vm.store.openedClass : "", _vm.data.class],
    style: _vm.data.style,
    attrs: {
      id: _vm.data._id
    }
  }, [!_vm.isRoot ? _vm._t("node-inner-back", [_c("div", {
    staticClass: "tree-node-inner-back",
    class: [_vm.data.innerBackClass],
    style: [_vm.innerBackStyle, _vm.data.innerBackStyle]
  }, [_c("div", {
    staticClass: "tree-node-inner",
    class: [_vm.data.innerClass],
    style: [_vm.data.innerStyle]
  }, [_vm._t("default", null, {
    data: _vm.data,
    store: _vm.store,
    vm: _vm.vm
  })], 2)])], {
    styleObj: _vm.innerBackStyle,
    data: _vm.data,
    store: _vm.store,
    vm: _vm.vm
  }) : _vm._e(), _c("transition", {
    attrs: {
      name: _vm.store.childrenTransitionName
    }
  }, [_vm.childrenVisible ? _c("div", {
    staticClass: "tree-node-children"
  }, _vm._l(_vm.data.children, function (child) {
    return _c("TreeNode", {
      key: child._id,
      attrs: {
        data: child,
        store: _vm.store,
        level: _vm.childrenLevel
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function fn(props) {
          return [_vm._t("default", null, {
            data: props.data,
            store: props.store,
            vm: props.vm
          })];
        }
      }, {
        key: "node-inner-back",
        fn: function fn(props) {
          return _vm.store.customInnerBack ? [_vm._t("node-inner-back", null, {
            styleObj: props.styleObj,
            data: props.data,
            store: props.store,
            vm: props.vm
          })] : undefined;
        }
      }], null, true)
    });
  }), 1) : _vm._e()])], 2);
};

var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = Object(vue_runtime_helpers_dist_normalize_component_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

//
var script$1 = {
  props: {
    data: {},
    idLength: {
      type: Number,
      default: 5
    },
    indent: {
      type: Number,
      default: 16
    },
    activatedClass: {
      default: 'active'
    },
    openedClass: {
      default: 'open'
    },
    space: {
      type: Number,
      default: 10
    },
    // space between node, unit px
    childrenTransitionName: {},
    // there are issues under draggable tree
    customInnerBack: {}
  },
  components: {
    TreeNode: __vue_component__
  },

  data() {
    return {
      store: this,
      rootData: null
    };
  },

  // computed: {},
  watch: {
    data: {
      immediate: true,

      handler(data, old) {
        if (data === old) {
          return;
        } // make rootData always use a same object


        this.rootData = this.rootData || {
          isRoot: true,
          _id: "tree_".concat(this._uid, "_node_root"),
          children: []
        };
        Object(tree_helper__WEBPACK_IMPORTED_MODULE_1__["breadthFirstSearch"])(data, (node, k, parent) => {
          this.compeleteNode(node, parent);
        });
        this.rootData.children = data;
      }

    }
  },
  methods: {
    compeleteNode(node, parent) {
      var compeletedData = {
        open: true,
        children: [],
        active: false,
        style: {},
        class: '',
        innerStyle: {},
        innerClass: '',
        innerBackStyle: {},
        innerBackClass: {}
      };

      for (var key in compeletedData) {
        if (!node.hasOwnProperty(key)) {
          this.$set(node, key, compeletedData[key]);
        }
      }

      this.$set(node, 'parent', parent || this.rootData);

      if (!node.hasOwnProperty('_id')) {
        node._id = "tree_".concat(this._uid, "_node_").concat(Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["strRand"])(this.idLength));
      }

      node._treeNodePropertiesCompleted = true;
    },

    // pure node self
    pure(node, withChildren, after) {
      var t = Object.assign({}, node);
      delete t._id;
      delete t.parent;
      delete t.children;
      delete t.open;
      delete t.active;
      delete t.style;
      delete t.class;
      delete t.innerStyle;
      delete t.innerClass;
      delete t.innerBackStyle;
      delete t.innerBackClass;

      for (var key of Object.keys(t)) {
        if (key[0] === '_') {
          delete t[key];
        }
      }

      if (withChildren && node.children) {
        t.children = node.children.slice();
        t.children.forEach((v, k) => {
          t.children[k] = this.pure(v, withChildren);
        });
      }

      if (after) {
        return after(t, node) || t;
      }

      return t;
    },

    getNodeById(id) {
      var r;
      Object(tree_helper__WEBPACK_IMPORTED_MODULE_1__["breadthFirstSearch"])(this.rootData.children, node => {
        if (node._id === id) {
          r = node;
          return false;
        }
      });
      return r;
    },

    getActivated() {
      var r = [];
      Object(tree_helper__WEBPACK_IMPORTED_MODULE_1__["breadthFirstSearch"])(this.rootData.children, node => {
        if (node.active) {
          r.push(node);
        }
      });
      return r;
    },

    getOpened() {
      var r = [];
      Object(tree_helper__WEBPACK_IMPORTED_MODULE_1__["breadthFirstSearch"])(this.rootData.children, node => {
        if (node.open) {
          r.push(node);
        }
      });
      return r;
    },

    activeNode(node, inactiveOld) {

      if (inactiveOld) {
        this.getActivated().forEach(node2 => {
          node2.active = false;
        });
      }

      node.active = true;
    },

    toggleActive(node, inactiveOld) {
      if (node.active) {
        node.active = false;
      } else {
        this.activeNode(node, inactiveOld);
      }
    },

    openNode(node, closeOld) {

      if (closeOld) {
        this.getOpened().forEach(node2 => {
          node2.open = false;
          this.$emit('nodeOpenChanged', node2);
        });
      }

      node.open = true;
      this.$emit('nodeOpenChanged', node);
    },

    toggleOpen(node, closeOld) {
      if (node.open) {
        node.open = false;
        this.$emit('nodeOpenChanged', node);
      } else {
        this.openNode(node, closeOld);
      }
    },

    getPureData(after) {
      return this.pure(this.rootData, true, after).children;
    },

    deleteNode(node) {
      return Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(node.parent.children, node);
    }

  } // created() {},
  // mounted() {},

};

/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "he-tree tree"
  }, [_c("TreeNode", {
    attrs: {
      data: _vm.rootData,
      store: _vm.store
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_vm._t("default", null, {
          data: props.data,
          store: _vm.store,
          vm: props.vm
        })];
      }
    }, {
      key: "node-inner-back",
      fn: function fn(props) {
        return _vm.customInnerBack ? [_vm._t("node-inner-back", null, {
          styleObj: props.styleObj,
          data: props.data,
          store: props.store,
          vm: props.vm
        })] : undefined;
      }
    }], null, true)
  })], 1);
};

var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = Object(vue_runtime_helpers_dist_normalize_component_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

class Cache {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "store", {});
  }

  has(name) {
    return this.store.hasOwnProperty(name);
  }

  remember(name, getter) {
    if (!this.has(name)) {
      this.store[name] = {
        value: getter()
      };
    }

    return this.store[name].value;
  }

  forget(name) {
    if (name) {
      if (this.has(name)) {
        delete this.store[name];
      }
    } else {
      this.store = {};
    }
  }

}
function attachCache(obj, cache, toCache) {
  var _loop = function _loop(key) {
    Object.defineProperty(obj, key, {
      get() {
        return cache.remember(key, () => toCache[key].call(this));
      }

    });
  };

  for (var key in toCache) {
    _loop(key);
  }
}

// from https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380

if (!document.elementsFromPoint) {
  document.elementsFromPoint = elementsFromPoint;
}

function elementsFromPoint(x, y) {
  var parents = [];
  var parent = void 0;

  do {
    if (parent !== document.elementFromPoint(x, y)) {
      parent = document.elementFromPoint(x, y);
      parents.push(parent);
      parent.style.pointerEvents = 'none';
    } else {
      parent = false;
    }
  } while (parent);

  parents.forEach(function (parent) {
    return parent.style.pointerEvents = 'all';
  });
  return parents;
}

function getTreeByPoint(x, y, trees) {
  var els = document.elementsFromPoint(x, y);
  var treeEl;
  var nodeEl;
  var betweenEls = [];

  for (var el of els) {
    if (!nodeEl) {
      if (Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el, 'tree-node')) {
        nodeEl = el;
      }
    } else {
      // console.log(el);
      if (Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el, 'tree')) {
        treeEl = el;
        break;
      }

      betweenEls.push(el);
    }
  }

  if (treeEl) {
    // is target tree is another tree, and be covered by other element, like modal, popup
    var covered = false;

    if (!isParent(nodeEl, treeEl)) {
      // cross tree
      for (var _el of betweenEls) {
        if (!isParent(_el, treeEl)) {
          covered = true;
          break;
        }
      }
    } //


    if (!covered) {
      return trees.find(v => v.$el === treeEl);
    }
  }
}

function isParent(child, parent) {
  var cur = child;

  while (cur) {
    cur = cur.parentNode;

    if (cur === parent) {
      return true;
    }
  }
}

// 对 drag placeholder进行的操作

var targets = {
  'nothing': info => {},
  'after': info => {
    insertDplhAfterTo(info.dplh, info.targetNode);
  },
  'before': info => {
    if (isNodeDroppable(info.targetNode.parent)) {
      Object(tree_helper__WEBPACK_IMPORTED_MODULE_1__["insertBefore"])(info.dplh, info.targetNode);
    } else {
      insertDplhAfterTo(info.dplh, info.targetNode.parent);
    }
  },
  'append': info => {
    if (isNodeDroppable(info.targetNode)) {
      Object(tree_helper__WEBPACK_IMPORTED_MODULE_1__["appendTo"])(info.dplh, info.targetNode);
      if (!info.targetNode.open) info.store.toggleOpen(info.targetNode);
    } else {
      insertDplhAfterTo(info.dplh, info.targetNode);
    }
  },
  'prepend': info => {
    if (isNodeDroppable(info.targetNode)) {
      Object(tree_helper__WEBPACK_IMPORTED_MODULE_1__["prependTo"])(info.dplh, info.targetNode);
      if (!info.targetNode.open) info.store.toggleOpen(info.targetNode);
    } else {
      insertDplhAfterTo(info.dplh, info.targetNode);
    }
  },
  'after target parent': info => {
    insertDplhAfterTo(info.dplh, info.targetNode.parent);
  },
  // append to prev sibling
  'append prev': info => {
    if (isNodeDroppable(info.targetPrev)) {
      Object(tree_helper__WEBPACK_IMPORTED_MODULE_1__["appendTo"])(info.dplh, info.targetPrev);
      if (!info.targetPrev.open) info.store.toggleOpen(info.targetPrev);
    } else {
      insertDplhAfterTo(info.dplh, info.targetPrev);
    }
  },
  // append to current tree
  'append current tree': info => {
    if (isNodeDroppable(info.currentTree.rootData)) {
      Object(tree_helper__WEBPACK_IMPORTED_MODULE_1__["appendTo"])(info.dplh, info.currentTree.rootData);
    }
  }
};

function insertDplhAfterTo(dplh, targetNode, info) {
  if (!targetNode) {
    return false;
  } else {
    var closest = findParent(targetNode, node => node.parent && isNodeDroppable(node.parent));

    if (closest) {
      Object(tree_helper__WEBPACK_IMPORTED_MODULE_1__["insertAfter"])(dplh, closest);
    } else {
      return false;
    }
  }

  return true;
}

function isNodeDraggable(node) {
  if (!draggableIds.hasOwnProperty(node._id)) {
    var r;

    if (node.hasOwnProperty('draggable')) {
      r = node.draggable;
    } else if (node.parent) {
      r = isNodeDraggable(node.parent);
    } else {
      r = true;
    }

    draggableIds[node._id] = r;
  }

  return draggableIds[node._id];
}
function isNodeDroppable(node) {
  if (!droppableIds.hasOwnProperty(node._id)) {
    var r;

    if (node.hasOwnProperty('droppable')) {
      r = node.droppable;
    } else if (node.parent) {
      r = isNodeDroppable(node.parent);
    } else {
      r = true;
    }

    droppableIds[node._id] = r;
  }

  return droppableIds[node._id];
} // find child, excluding dragging node default

function findChild(info, children, handler, reverse) {
  var len = children.length;

  if (reverse) {
    for (var i = len - 1; i >= 0; i--) {
      var item = children[i]; // excluding dragging node

      if (item !== info.node) {
        if (handler(item, i)) {
          return item;
        }
      }
    }
  } else {
    for (var _i = 0; _i < len; _i++) {
      var _item = children[_i]; // excluding dragging node

      if (_item !== info.node) {
        if (handler(_item, _i)) {
          return _item;
        }
      }
    }
  }
} // start from node self


function findParent(node, handle) {
  var current = node;

  while (current) {
    if (handle(current)) {
      return current;
    }

    current = current.parent;
  }
}

var rules = {
  // 另一节点存在
  'targetNode existed': info => info.targetNode,
  // 另一节点是拖动占位节点
  'targetNode is placeholder': info => info.targetNode.isDragPlaceHolder,
  // 另一节点在最上面
  'targetNode at top': info => info.targetAtTop,
  // 另一节点在最下面
  'targetNode at bottom': info => info.targetAtBottom,
  // 另一节点是根节点第二个子
  'targetNode is the second child of root': info => info.currentTreeRootSecondChildExcludingDragging === info.targetNode,
  // 拖动点坐标在任一树中, 同时, 起始树要可拖出, 当前树要可拖入
  'currentTree existed': info => info.currentTree,
  // 当前树为空(不包括占位节点)
  'currentTree empty': info => !findChild(info, info.currentTree.rootData.children, v => v),
  // 占位节点存在
  'placeholder existed': info => info.dplhEl,
  // 占位节点在当前树中
  'placeholder in currentTree': info => info.dplhElInCurrentTree,
  // 占位节点在最上面
  'placeholder at top': info => info.dplhAtTop,
  // 另一节点是打开的
  'targetNode is open': info => info.targetNode.open,
  // 另一节点有子(不包括占位节点)
  'targetNode has children excluding placeholder': info => findChild(info, info.targetNode.children, v => v !== info.dplh),
  // 另一节点是第一个节点
  'targetNode is 1st child': info => findChild(info, info.targetNode.parent.children, v => v) === info.targetNode,
  // 另一节点是最后节点
  'targetNode is last child': info => findChild(info, info.targetNode.parent.children, v => v, true) === info.targetNode,
  // 当前位置在另一节点inner垂直中线上
  'on targetNode middle': info => info.offset.y <= info.tiMiddleY,
  // 当前位置在另一节点inner左边
  'at left': info => info.offset.x < info.tiOffset.x,
  // 当前位置在另一节点innner indent位置右边
  'at indent right': info => info.offset.x > info.tiOffset.x + info.currentTree.indent
}; // convert rule output to Boolean

var _loop = function _loop(key) {
  var old = rules[key];

  rules[key] = function () {
    return Boolean(old(...arguments));
  };
};

for (var key of Object.keys(rules)) {
  _loop(key);
}

var prevTree;
var droppableIds = {};
var draggableIds = {}; // context is vm

function autoMoveDragPlaceHolder(draggableHelperInfo) {
  var trees = this.store.trees;
  var dhStore = draggableHelperInfo.store; // make info

  var info = {
    event: draggableHelperInfo.event,
    el: dhStore.el,
    vm: this,
    node: this.data,
    store: this.store,
    dplh: this.store.dplh,
    draggableHelperData: {
      opt: draggableHelperInfo.options,
      store: dhStore
    }
  }; //

  attachCache(info, new Cache(), {
    // dragging node coordinate
    // 拖动中的节点相关坐标
    nodeInnerEl() {
      return this.el.querySelector('.tree-node-inner');
    },

    offset() {
      return Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["getOffset"])(this.nodeInnerEl);
    },

    // left top point
    offset2() {
      return {
        x: this.offset.x + this.nodeInnerEl.offsetWidth,
        y: this.offset.y + this.nodeInnerEl.offsetHeight
      };
    },

    // right bottom point
    offsetToViewPort() {
      var r = this.nodeInnerEl.getBoundingClientRect();
      r.x = r.left;
      r.y = r.top;
      return r;
    },

    // tree
    currentTree() {
      // const currentTree = trees.find(tree => hp.isOffsetInEl(this.offset.x, this.offset.y, tree.$el))
      var currentTree = getTreeByPoint(this.offsetToViewPort.x, this.offsetToViewPort.y, trees);

      if (currentTree) {
        var dragStartTree = this.store;

        if (prevTree == null) {
          prevTree = dragStartTree;
        }

        if (prevTree !== currentTree) {
          if (!Object(vue_functions__WEBPACK_IMPORTED_MODULE_5__["isPropTrue"])(dragStartTree.crossTree) || !Object(vue_functions__WEBPACK_IMPORTED_MODULE_5__["isPropTrue"])(currentTree.crossTree)) {
            return;
          }

          prevTree = currentTree;
        }

        if (!Object(vue_functions__WEBPACK_IMPORTED_MODULE_5__["isPropTrue"])(currentTree.droppable)) {
          return;
        }

        return currentTree;
      }
    },

    currentTreeRootEl() {
      return document.getElementById(this.currentTree.rootData._id);
    },

    currentTreeRootOf4() {
      return getOf4(this.currentTreeRootEl, this.currentTree.space);
    },

    // the second child of currentTree root, excluding dragging node
    currentTreeRootSecondChildExcludingDragging() {
      return this.currentTree.rootData.children.slice(0, 3).filter(v => v !== this.node)[1];
    },

    // placeholder
    dplhEl() {
      return document.getElementById(this.dplh._id);
    },

    dplhElInCurrentTree() {
      return Boolean(this.currentTree.$el.querySelector("#".concat(this.dplh._id)));
    },

    dplhOf4() {
      return getOf4(this.dplhEl, this.currentTree.space);
    },

    dplhAtTop() {
      return Math.abs(this.dplhOf4.y - this.currentTreeRootOf4.y) < 5;
    },

    targetAtTop() {
      return Math.abs(this.tiOf4.y - this.currentTreeRootOf4.y) < 5;
    },

    targetAtBottom() {
      return Math.abs(this.tiOf4.y2 - this.currentTreeRootOf4.y2) < 5;
    },

    // most related node
    // 最相关的另一个节点
    targetNode() {
      var {
        currentTree
      } = this;

      if (!currentTree) {
        throw 'no currentTree';
      } //


      var {
        x,
        y
      } = this.offset;
      var currentNode = currentTree.rootData;

      while (true) {
        var children = currentNode.children;

        if (!children) {
          break;
        }

        if (this.node.parent === currentNode) {
          // dragging node is in currentNode children, remove it first
          children = children.slice();
          children.splice(children.indexOf(this.node), 1);
        }

        if (children.length === 0) {
          break;
        }

        var t = Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["binarySearch"])(children, node => {
          var el = document.getElementById(node._id);
          var ty = Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["getOffset"])(el).y;
          var ty2 = ty + el.offsetHeight + currentTree.space;

          if (ty2 < y) {
            return -1;
          } else if (ty <= y) {
            return 0;
          } else {
            return 1;
          }
        }, null, null, true);

        if (t.hit) {
          currentNode = t.value;
        } else {
          if (t.bigger) {
            currentNode = children[t.index - 1];
          } else {
            currentNode = t.value;
          }
        }

        if (!currentNode) {
          currentNode = children[0];
          break;
        }

        if (!currentNode) {
          break;
        }

        var innerEl = document.getElementById(currentNode._id).querySelector('.tree-node-inner');
        var of = getOf4(innerEl, currentTree.space);

        if (of.y <= y && y <= of.y2) {
          break;
        }
      }

      return currentNode;
    },

    targetNodeEl() {
      return document.getElementById(this.targetNode._id);
    },

    // targetNodeInnerElOffset
    tiInnerEl() {
      return this.targetNodeEl.querySelector('.tree-node-inner');
    },

    tiOffset() {
      return Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["getOffset"])(this.tiInnerEl);
    },

    tiOf4() {
      return getOf4(this.tiInnerEl, this.currentTree.space);
    },

    tiMiddleY() {
      return this.tiOffset.y + this.tiInnerEl.offsetHeight / 2;
    },

    //
    targetPrevEl() {
      // tree node 之间不要有其他元素, 否则这里会获取到错误的元素
      var r = this.targetNodeEl.previousSibling;

      if (Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(r, 'dragging')) {
        r = r.previousSibling;
      }

      return r;
    },

    targetPrev() {
      var id = this.targetPrevEl.getAttribute('id');
      return this.currentTree.getNodeById(id);
    }

  }); // attachCache end
  // decision start =================================

  var executedRuleCache = {}; // exec rule

  var exec = ruleId => {
    if (!executedRuleCache.hasOwnProperty(ruleId)) {
      var r;

      try {
        r = rules[ruleId](info);
      } catch (e) {
        r = e;

        try {
          if (process.env.DEVELOPE_SELF) {
            // only visible when develop its self
            console.warn("failed to execute rule '".concat(ruleId, "'"), e);
          }
        } catch (e2) {}
      }

      executedRuleCache[ruleId] = r;
    }

    return executedRuleCache[ruleId];
  };

  if (exec('currentTree existed') === true) {
    if (exec('targetNode is placeholder') === false) {
      if (exec('targetNode is the second child of root') === true) {
        if (exec('targetNode has children excluding placeholder') === false) {
          if (exec('on targetNode middle') === true) {
            targets['before'](info);
          } else if (exec('on targetNode middle') === false) {
            if (exec('at indent right') === true) {
              targets['append'](info);
            } else if (exec('at indent right') === false) {
              targets['after'](info);
            }
          }
        } else if (exec('targetNode has children excluding placeholder') === true) {
          targets['prepend'](info);
        }
      } else if (exec('targetNode is the second child of root') === false) {
        if (exec('currentTree empty') === false) {
          if (exec('targetNode at top') === true) {
            if (exec('placeholder in currentTree') === true) {
              if (exec('targetNode has children excluding placeholder') === false) {
                if (exec('on targetNode middle') === false) {
                  if (exec('at indent right') === false) {
                    targets['after'](info);
                  } else if (exec('at indent right') === true) {
                    targets['append'](info);
                  }
                } else if (exec('on targetNode middle') === true) {
                  targets['before'](info);
                }
              } else if (exec('targetNode has children excluding placeholder') === true) {
                if (exec('on targetNode middle') === false) {
                  targets['prepend'](info);
                } else if (exec('on targetNode middle') === true) {
                  targets['before'](info);
                }
              }
            } else if (exec('placeholder in currentTree') === false) {
              targets['before'](info);
            }
          } else if (exec('targetNode at top') === false) {
            if (exec('targetNode at bottom') === false) {
              if (exec('placeholder at top') === true) {
                targets['prepend'](info);
              } else if (exec('placeholder at top') === false) {
                if (exec('targetNode has children excluding placeholder') === true) {
                  targets['prepend'](info);
                } else if (exec('targetNode has children excluding placeholder') === false) {
                  if (exec('targetNode is 1st child') === false) {
                    if (exec('targetNode is last child') === false) {
                      if (exec('on targetNode middle') === true) {
                        if (exec('at indent right') === true) {
                          targets['append'](info);
                        } else if (exec('at indent right') === false) {
                          targets['after'](info);
                        }
                      } else if (exec('on targetNode middle') === false) {
                        if (exec('at indent right') === true) {
                          targets['append'](info);
                        } else if (exec('at indent right') === false) {
                          targets['after'](info);
                        }
                      }
                    } else if (exec('targetNode is last child') === true) {
                      if (exec('at indent right') === true) {
                        targets['append'](info);
                      } else if (exec('at indent right') === false) {
                        targets['after'](info);
                      }
                    }
                  } else if (exec('targetNode is 1st child') === true) {
                    if (exec('targetNode is last child') === true) {
                      targets['append'](info);
                    } else if (exec('targetNode is last child') === false) {
                      if (exec('on targetNode middle') === false) {
                        if (exec('at indent right') === false) {
                          targets['after'](info);
                        } else if (exec('at indent right') === true) {
                          targets['append'](info);
                        }
                      } else if (exec('on targetNode middle') === true) {
                        if (exec('at indent right') === false) {
                          targets['after'](info);
                        } else if (exec('at indent right') === true) {
                          targets['append'](info);
                        }
                      }
                    }
                  }
                }
              }
            } else if (exec('targetNode at bottom') === true) {
              if (exec('placeholder in currentTree') === true) {
                if (exec('on targetNode middle') === false) {
                  if (exec('at indent right') === true) {
                    targets['append'](info);
                  } else if (exec('at indent right') === false) {
                    targets['after'](info);
                  }
                } else if (exec('on targetNode middle') === true) {
                  targets['append'](info);
                }
              } else if (exec('placeholder in currentTree') === false) {
                targets['append'](info);
              }
            }
          }
        } else if (exec('currentTree empty') === true) {
          targets['append current tree'](info);
        }
      }
    } else if (exec('targetNode is placeholder') === true) {
      if (exec('targetNode at bottom') === false) {
        if (exec('targetNode is the second child of root') === false) {
          if (exec('targetNode is 1st child') === true) {
            if (exec('targetNode is last child') === false) {
              targets['nothing'](info);
            } else if (exec('targetNode is last child') === true) {
              if (exec('on targetNode middle') === false) {
                if (exec('at left') === true) {
                  targets['after target parent'](info);
                } else if (exec('at left') === false) {
                  targets['nothing'](info);
                }
              } else if (exec('on targetNode middle') === true) {
                if (exec('at left') === true) {
                  targets['after target parent'](info);
                } else if (exec('at left') === false) {
                  targets['nothing'](info);
                }
              }
            }
          } else if (exec('targetNode is 1st child') === false) {
            if (exec('targetNode is last child') === true) {
              if (exec('on targetNode middle') === true) {
                if (exec('at left') === true) {
                  targets['after target parent'](info);
                } else if (exec('at left') === false) {
                  if (exec('at indent right') === true) {
                    targets['append prev'](info);
                  } else if (exec('at indent right') === false) {
                    targets['nothing'](info);
                  }
                }
              } else if (exec('on targetNode middle') === false) {
                if (exec('at left') === true) {
                  targets['after target parent'](info);
                } else if (exec('at left') === false) {
                  if (exec('at indent right') === true) {
                    targets['append prev'](info);
                  } else if (exec('at indent right') === false) {
                    targets['nothing'](info);
                  }
                }
              }
            } else if (exec('targetNode is last child') === false) {
              if (exec('on targetNode middle') === true) {
                if (exec('at left') === true) {
                  targets['nothing'](info);
                } else if (exec('at left') === false) {
                  if (exec('at indent right') === true) {
                    targets['append prev'](info);
                  } else if (exec('at indent right') === false) {
                    targets['nothing'](info);
                  }
                }
              } else if (exec('on targetNode middle') === false) {
                if (exec('at left') === true) {
                  targets['nothing'](info);
                } else if (exec('at left') === false) {
                  if (exec('at indent right') === true) {
                    targets['append prev'](info);
                  } else if (exec('at indent right') === false) {
                    targets['nothing'](info);
                  }
                }
              }
            }
          }
        } else if (exec('targetNode is the second child of root') === true) {
          if (exec('on targetNode middle') === true) {
            if (exec('at indent right') === true) {
              targets['append prev'](info);
            } else if (exec('at indent right') === false) {
              targets['nothing'](info);
            }
          } else if (exec('on targetNode middle') === false) {
            if (exec('at indent right') === true) {
              targets['append prev'](info);
            } else if (exec('at indent right') === false) {
              targets['nothing'](info);
            }
          }
        }
      } else if (exec('targetNode at bottom') === true) {
        if (exec('targetNode is 1st child') === true) {
          if (exec('on targetNode middle') === false) {
            if (exec('at left') === true) {
              targets['after target parent'](info);
            } else if (exec('at left') === false) {
              targets['nothing'](info);
            }
          } else if (exec('on targetNode middle') === true) {
            if (exec('at left') === false) {
              targets['nothing'](info);
            } else if (exec('at left') === true) {
              targets['after target parent'](info);
            }
          }
        } else if (exec('targetNode is 1st child') === false) {
          if (exec('on targetNode middle') === false) {
            if (exec('at left') === true) {
              targets['after target parent'](info);
            } else if (exec('at left') === false) {
              if (exec('at indent right') === true) {
                targets['append prev'](info);
              } else if (exec('at indent right') === false) {
                targets['nothing'](info);
              }
            }
          } else if (exec('on targetNode middle') === true) {
            if (exec('at left') === true) {
              targets['after target parent'](info);
            } else if (exec('at left') === false) {
              if (exec('at indent right') === true) {
                targets['append prev'](info);
              } else if (exec('at indent right') === false) {
                targets['nothing'](info);
              }
            }
          }
        }
      }
    }
  } else if (exec('currentTree existed') === false) {
    targets['nothing'](info);
  } // decision end =================================
  //

}

function getOf4(el, space) {
  var r = Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["getOffset"])(el);
  r.x2 = r.x + el.offsetWidth;
  r.y2 = r.y + el.offsetHeight + space;
  return r;
}

autoMoveDragPlaceHolder.dragStart = function dragStart() {};

autoMoveDragPlaceHolder.dragEnd = function dragEnd() {
  prevTree = null;
  droppableIds = {};
  draggableIds = {};
};

var script$2 = {
  extends: __vue_component__,
  name: 'TreeNode',

  mounted() {
    this.store.isNodeDraggable = isNodeDraggable;
    this.store.isNodeDroppable = isNodeDroppable;

    if (this.isRoot || this.data.isDragPlaceHolder) {
      return;
    }

    var {
      dplh
    } = this.store;
    this.$watch('store.draggable', draggable => {
      if (Object(vue_functions__WEBPACK_IMPORTED_MODULE_5__["isPropTrue"])(draggable)) {
        var triggerEl = this.store.getTriggerEl ? this.store.getTriggerEl(this) : this.$el.querySelector('.tree-node-inner');
        this._draggableDestroy = Object(draggable_helper__WEBPACK_IMPORTED_MODULE_3__["default"])(triggerEl, {
          preventSelect: Object(vue_functions__WEBPACK_IMPORTED_MODULE_5__["isPropTrue"])(this.store.preventSelect),
          // trigger el
          getEl: () => this.$el,
          minTranslate: 10,
          drag: (e, opt, store) => {
            autoMoveDragPlaceHolder.dragStart(); // this store is not tree

            var draggableHelperInfo = {
              event: e,
              options: opt,
              store
            };

            if (this.store.ondragstart && this.store.ondragstart(this.data, draggableHelperInfo) === false) {
              return false;
            }

            if (!isNodeDraggable(this.data)) {
              return false;
            }

            this.store.$emit('drag', this.data); // record start positon

            var siblings = this.data.parent.children;
            this.startPosition = {
              siblings,
              index: siblings.indexOf(this.data)
            }; //

            dplh.innerStyle.height = store.el.offsetHeight + 'px';
            Object(tree_helper__WEBPACK_IMPORTED_MODULE_1__["insertAfter"])(dplh, this.data);
            this.data.class += ' dragging'; // console.log('drag start');
          },
          moving: (e, opt, store) => {
            if (store.movedCount === 0) {
              return;
            }

            var draggableHelperInfo = {
              event: e,
              options: opt,
              store
            };
            return autoMoveDragPlaceHolder.call(this, draggableHelperInfo);
          },
          drop: (e, opt, store) => {
            autoMoveDragPlaceHolder.dragEnd();
            var draggableHelperInfo = {
              event: e,
              options: opt,
              store
            };

            if (this.store.ondragend && this.store.ondragend(this.data, draggableHelperInfo) === false) {
              Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(dplh.parent.children, dplh); // can't drop, no change
            } else {
              var targetTree = dplh._vm.store;
              var crossTree = targetTree !== this.store;
              var oldTree = crossTree ? this.store : null;
              Object(tree_helper__WEBPACK_IMPORTED_MODULE_1__["insertAfter"])(this.data, dplh);
              Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(dplh.parent.children, dplh);
              this.data.class = this.data.class.replace(/(^| )dragging( |$)/g, ' ');
              targetTree.$emit('drop', this.data, targetTree, oldTree);
              oldTree && oldTree.$emit('drop', this.data, targetTree, oldTree); // emit change event if changed

              var siblings = this.data.parent.children;

              if (siblings === this.startPosition.siblings && siblings.indexOf(this.data) === this.startPosition.index) ; else {
                this.store.$emit('change', this.data, targetTree, oldTree);
                oldTree && oldTree.$emit('change', this.data, targetTree, oldTree);
              }

              this.startPosition = null;
            } // console.log('drag end');

          }
        });
      } else {
        if (this._draggableDestroy) {
          this._draggableDestroy();

          this._draggableDestroy = null;
        }
      }
    }, {
      immediate: true
    });
  }

};

/* script */
var __vue_script__$2 = script$2;
/* template */

/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = undefined;
/* functional template */

var __vue_is_functional_template__$2 = undefined;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = Object(vue_runtime_helpers_dist_normalize_component_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])({}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

var trees = []; // for multiple trees
// DragPlaceHolder, unique

var dplh = {
  _id: 'draggable_tree_drag_placeHolder',
  level: null,
  droppable: false,
  isDragPlaceHolder: true,
  class: 'draggable-placeholder',
  style: {},
  innerStyle: {},
  innerClass: 'draggable-placeholder-inner',
  innerBackStyle: {},
  innerBackClass: 'draggable-placeholder-inner-back' // children: [],

};
var script$3 = {
  extends: __vue_component__$1,
  props: {
    getTriggerEl: {
      type: Function
    },
    draggable: {},
    droppable: {
      default: true
    },
    crossTree: {},
    ondragstart: {
      type: Function
    },
    ondragend: {
      type: Function
    },
    preventSelect: {
      default: true
    }
  },
  components: {
    TreeNode: __vue_component__$2
  },

  data() {
    return {
      // DragPlaceHolder
      dplh,
      trees
    };
  },

  // computed: {},
  // watch: {},
  // methods: {},
  created() {
    trees.push(this);
  },

  mounted() {},

  beforeDestroy() {
    Object(helper_js__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(trees, this);
  }

};

/* script */
var __vue_script__$3 = script$3;
/* template */

/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = undefined;
/* functional template */

var __vue_is_functional_template__$3 = undefined;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = Object(vue_runtime_helpers_dist_normalize_component_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])({}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/vue-functions/dist/vue-functions.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-functions/dist/vue-functions.esm.js ***!
  \**************************************************************/
/*! exports provided: doWatch, hookHelper, isPropTrue, iterateObjectWithoutDollarDash, mountedMixin, registerPreventURLChange, updatablePropsEvenUnbound, watchAsync, windowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doWatch", function() { return doWatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hookHelper", function() { return hookHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPropTrue", function() { return isPropTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateObjectWithoutDollarDash", function() { return iterateObjectWithoutDollarDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountedMixin", function() { return mountedMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPreventURLChange", function() { return registerPreventURLChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatablePropsEvenUnbound", function() { return updatablePropsEvenUnbound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchAsync", function() { return watchAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowSize", function() { return windowSize; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helper-js */ "./node_modules/vue-functions/node_modules/helper-js/dist/helper-js.esm.js");
/*!
 * vue-functions v2.0.6
 * (c) phphe <phphe@outlook.com> (https://github.com/phphe)
 * Homepage: undefined
 * Released under the MIT License.
 */




var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(iterateObjectWithoutDollarDash);
/**
 * [updatablePropsEvenUnbound description]
 * @param  {[type]} props [object or getter]
 * @return {[type]}       [description]
 * props eg: {
    value: {$localName: 'current', $localSetter: (value, vm)},
  }
  default localName is `localProps_${name}`
 */

function updatablePropsEvenUnbound(props) {
  if (Object(helper_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(props)) {
    props = props();
  } else {
    // object
    props = Object.assign({}, props);
  }

  var standardProps = {}; // without key starts with `$`

  var _loop = function _loop(name) {
    var prop = props[name]; // complete 补全选项

    if (!prop.$localName) {
      prop.$localName = "localProps_".concat(name);
    }

    if (!prop.$localSetter) {
      prop.$localSetter = function (value) {
        return value;
      };
    } // make standardProp


    var standardProp = {};
    standardProps[name] = standardProp;
    Object.keys(props[name]).forEach(function (key) {
      if (key[0] !== '$') {
        standardProp[key] = prop[key];
      }
    });
  };

  for (var name in props) {
    _loop(name);
  }

  var component = {
    props: standardProps,
    computed: {},
    watch: {}
  };

  component.data = function () {
    var t = {
      localValueOfUpdatableProps: {}
    };

    for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
      var _name = _Object$keys[_i];
      t.localValueOfUpdatableProps[_name] = this[_name];
    }

    return t;
  };

  var _loop2 = function _loop2() {
    var name = _Object$keys2[_i2];
    var prop = props[name];

    component.watch[name] = function (value) {
      this.localValueOfUpdatableProps[name] = prop.$localSetter(value, this);
    };

    var localName = prop.$localName;
    component.computed[localName] = {
      get: function get() {
        return this.localValueOfUpdatableProps[name];
      },
      set: function set(value) {
        if (name === 'value') {
          this.$emit('input', value);
        } else {
          this.$emit("update:".concat(name), value);
        }

        this.localValueOfUpdatableProps[name] = prop.$localSetter(value, this);
      }
    };
  };

  for (var _i2 = 0, _Object$keys2 = Object.keys(props); _i2 < _Object$keys2.length; _i2++) {
    _loop2();
  }

  return component;
}
function isPropTrue(value) {
  return value === '' || value;
} // the dependences in getter can't be auto resolved. must use exec to include dependences

function watchAsync(vm, getter, handler, opt) {
  var destroies = [];
  var value, oldValue;
  var count = -1; // updated count

  main();
  return destroy;

  function destroy() {
    destroies.forEach(function (f) {
      return f();
    });
    destroies = [];
  }

  function exec(getter, opt) {
    var value;
    var first = true;
    var unwatch = vm.$watch(function () {
      return getter.call(vm, exec);
    }, function (value2) {
      value = value2;

      if (first) {
        first = false;
      } else {
        main();
      }
    }, {
      immediate: true,
      deep: opt && opt.deep
    });
    destroies.push(unwatch);
    return value;
  }

  function main() {
    destroy();
    var result = getter.call(vm, exec);
    count++;
    var localCount = count;
    oldValue = value;

    var getterExecuted = function getterExecuted(value) {
      if (localCount !== count) {
        // expired
        return;
      }

      if (localCount === 0) {
        if (opt && opt.immediate) {
          handler.call(vm, value, oldValue);
        }
      } else {
        handler.call(vm, value, oldValue);
      }
    }; //


    if (Object(helper_js__WEBPACK_IMPORTED_MODULE_2__["isPromise"])(result)) {
      result.then(getterExecuted);
    } else {
      getterExecuted(result);
    }
  }
} // do handler first, handler return getter

function doWatch(vm, handler) {
  var oldValue, unwatch;

  var update = function update() {
    var getter = handler.call(vm, oldValue);
    unwatch = vm.$watch(getter, function (value) {
      unwatch();
      oldValue = value;
      update();
    });
  };

  update();
  return function () {
    return unwatch && unwatch();
  };
}
function iterateObjectWithoutDollarDash(obj) {
  var key, start;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function iterateObjectWithoutDollarDash$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.keys(obj);

        case 1:
          if ((_context.t1 = _context.t0()).done) {
            _context.next = 9;
            break;
          }

          key = _context.t1.value;
          start = key.substr(0, 1);

          if (!(start !== '$' && start !== '_')) {
            _context.next = 7;
            break;
          }

          _context.next = 7;
          return {
            key: key,
            value: obj[key]
          };

        case 7:
          _context.next = 1;
          break;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
} // add reactive `windowSize`

var windowSize = {
  data: function data() {
    return {
      windowSize: {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight
      }
    };
  },
  methods: {
    updateWindowSize: function updateWindowSize() {
      Object.assign(this.windowSize, {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight
      });
    }
  },
  created: function created() {
    var _this = this;

    this._windowSize_onresize = function () {
      _this.updateWindowSize();

      _this.$emit('window-resize');
    };

    Object(helper_js__WEBPACK_IMPORTED_MODULE_2__["onDOM"])(window, 'resize', this._windowSize_onresize);
  },
  beforeDestroy: function beforeDestroy() {
    Object(helper_js__WEBPACK_IMPORTED_MODULE_2__["offDOM"])(window, 'resize', this._windowSize_onresize);
  }
};
function registerPreventURLChange(Vue, router, msg) {
  var preventRouter = false;
  var msg0 = "It looks like you have been editing something.\nIf you leave before saving, your changes will be lost.";
  router.beforeEach(function (to, from, next) {
    if (preventRouter) {
      if (window.confirm(msg || msg0)) {
        Vue.allowURLChange();
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  });

  var beforeunload = function beforeunload(e) {
    var confirmationMessage = msg || msg0;
    e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+

    return confirmationMessage; // Gecko, WebKit, Chrome <34
  };

  Vue.preventURLChange = Vue.prototype.$preventURLChange = function (msg2) {
    if (msg2 != null) {
      msg = msg2;
    }

    if (!preventRouter) {
      preventRouter = true;
      window.addEventListener("beforeunload", beforeunload);
    }
  };

  Vue.allowURLChange = Vue.prototype.$allowURLChange = function () {
    preventRouter = false;
    window.removeEventListener("beforeunload", beforeunload);
  };
}
var hookHelper = {
  methods: {
    // todo extract hooks to vue-functions
    // get hooks in this._hooks, without which in props
    _getNonPropHooksByName: function _getNonPropHooksByName(name) {
      if (this._hooks) {
        return this._hooks[name];
      }
    },
    addHook: function addHook(name, func) {
      if (!this._getNonPropHooksByName(name)) {
        if (!this._hooks) {
          this._hooks = {};
        }

        if (!this._hooks[name]) {
          this._hooks[name] = [];
        }
      }

      this._hooks[name].push(func);
    },
    removeHook: function removeHook(name, func) {
      var hooks = this._getNonPropHooksByName(name);

      if (hooks) {
        Object(helper_js__WEBPACK_IMPORTED_MODULE_2__["arrayRemove"])(hooks, func);
      }
    },
    hasHook: function hasHook(name) {
      return this._getNonPropHooksByName(name) || this[name];
    },
    executeHook: function executeHook(name, args) {
      var _this2 = this;

      var hooks = this._getNonPropHooksByName(name);

      hooks = hooks ? hooks.slice() : [];

      if (this[name] && Object(helper_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(this[name])) {
        hooks.push(function (next) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          return _this2[name].apply(_this2, args);
        });
      }

      return Object(helper_js__WEBPACK_IMPORTED_MODULE_2__["joinFunctionsByNext"])(hooks).apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args));
    }
  }
};
var mountedMixin = {
  data: function data() {
    var _this3 = this;

    return {
      mounted: new Promise(function (resolve, reject) {
        _this3._mounted_resolve = resolve;
      })
    };
  },
  mounted: function mounted() {
    this._mounted_resolve();
  }
};




/***/ }),

/***/ "./node_modules/vue-functions/node_modules/helper-js/dist/helper-js.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/vue-functions/node_modules/helper-js/dist/helper-js.esm.js ***!
  \*********************************************************************************/
/*! exports provided: Cache, CrossWindow, CrossWindowEventProcessor, EventProcessor, TreeData, URLHelper, addClass, addDate, appendTo, arrayAt, arrayDistinct, arrayFirst, arrayFlat, arrayGetRange, arrayLast, arrayRemove, arrayRemoveBySortedIndexes, arraySubtract, arrayWithoutEnd, assignIfDifferent, attachCache, backupAttr, binarySearch, camelCase, camelToWords, cloneDate, copyTextToClipboard, createElementFromHTML, debounceImmediate, debounceTrailing, depthFirstSearch, easeInOutQuad, elementsFromPoint, empty, executePromiseGetters, executeWithCount, findNodeList, findNodeListReverse, findParent, getArrayItemSibling, getArrayItemSiblings, getBorder, getBoundingClientRect, getCalendar, getElSizeEvenInvisible, getImageSizeByUrl, getLocalStorage2, getMonthEnd, getMonthStart, getOffset, getOffsetParent, getOuterAttachedHeight, getOuterAttachedWidth, getPosition, getPositionFromOffset, getScroll, getSessionStorage2, getUrlParam, getUserLanguage, getViewportPosition, glb, groupArray, hasClass, insertAfter, insertBefore, isArray, isBool, isDescendantOf, isDocumentExisted, isFunction, isIE, isIsoFormat, isNode, isNumber, isNumeric, isObject, isOffsetInEl, isPromise, isString, isWindowDefined, iterateAll, joinFunctionsByNext, joinFunctionsByResult, kebabCase, makeStorageHelper, mapObjectTree, mapObjects, newArrayExcludingIndexes, notGreaterThan, notLessThan, objectAssignIfKeyNull, objectExcept, objectGet, objectMap, objectOnly, objectSet, offDOM, offsetToViewportPosition, onContinuousInput, onDOM, onDOMMany, onQuickKeydown, openCenterWindow, openWindow, pairRows, parseISO, prependTo, promiseTimeout, randChoice, randInt, randString, removeClass, removeEl, resolveArgsByType, resolveValueOrGettter, restoreAttr, retry, scrollTo, setElChildByIndex, snakeCase, splitArray, store, strPad, studlyCase, titleCase, toArrayIfNot, uniqueId, unset, viewportPositionToOffset, waitFor, waitTime, walkTreeData, watchChange, windowLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return Cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossWindow", function() { return CrossWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossWindowEventProcessor", function() { return CrossWindowEventProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventProcessor", function() { return EventProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeData", function() { return TreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLHelper", function() { return URLHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDate", function() { return addDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTo", function() { return appendTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayAt", function() { return arrayAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayDistinct", function() { return arrayDistinct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFirst", function() { return arrayFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFlat", function() { return arrayFlat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayGetRange", function() { return arrayGetRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayLast", function() { return arrayLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return arrayRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayRemoveBySortedIndexes", function() { return arrayRemoveBySortedIndexes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arraySubtract", function() { return arraySubtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayWithoutEnd", function() { return arrayWithoutEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignIfDifferent", function() { return assignIfDifferent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachCache", function() { return attachCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backupAttr", function() { return backupAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binarySearch", function() { return binarySearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return camelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelToWords", function() { return camelToWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneDate", function() { return cloneDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyTextToClipboard", function() { return copyTextToClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementFromHTML", function() { return createElementFromHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounceImmediate", function() { return debounceImmediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounceTrailing", function() { return debounceTrailing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "depthFirstSearch", function() { return depthFirstSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuad", function() { return easeInOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementsFromPoint", function() { return elementsFromPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executePromiseGetters", function() { return executePromiseGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeWithCount", function() { return executeWithCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNodeList", function() { return findNodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNodeListReverse", function() { return findNodeListReverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findParent", function() { return findParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArrayItemSibling", function() { return getArrayItemSibling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArrayItemSiblings", function() { return getArrayItemSiblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBorder", function() { return getBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoundingClientRect", function() { return getBoundingClientRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCalendar", function() { return getCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElSizeEvenInvisible", function() { return getElSizeEvenInvisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSizeByUrl", function() { return getImageSizeByUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalStorage2", function() { return getLocalStorage2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthEnd", function() { return getMonthEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthStart", function() { return getMonthStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffset", function() { return getOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetParent", function() { return getOffsetParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOuterAttachedHeight", function() { return getOuterAttachedHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOuterAttachedWidth", function() { return getOuterAttachedWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return getPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionFromOffset", function() { return getPositionFromOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScroll", function() { return getScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionStorage2", function() { return getSessionStorage2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlParam", function() { return getUrlParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLanguage", function() { return getUserLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewportPosition", function() { return getViewportPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glb", function() { return glb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupArray", function() { return groupArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBool", function() { return isBool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDescendantOf", function() { return isDescendantOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDocumentExisted", function() { return isDocumentExisted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return isIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIsoFormat", function() { return isIsoFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return isNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOffsetInEl", function() { return isOffsetInEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWindowDefined", function() { return isWindowDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateAll", function() { return iterateAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinFunctionsByNext", function() { return joinFunctionsByNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinFunctionsByResult", function() { return joinFunctionsByResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebabCase", function() { return kebabCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStorageHelper", function() { return makeStorageHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapObjectTree", function() { return mapObjectTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapObjects", function() { return mapObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newArrayExcludingIndexes", function() { return newArrayExcludingIndexes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notGreaterThan", function() { return notGreaterThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notLessThan", function() { return notLessThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectAssignIfKeyNull", function() { return objectAssignIfKeyNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectExcept", function() { return objectExcept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectGet", function() { return objectGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectMap", function() { return objectMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectOnly", function() { return objectOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectSet", function() { return objectSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offDOM", function() { return offDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offsetToViewportPosition", function() { return offsetToViewportPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onContinuousInput", function() { return onContinuousInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDOM", function() { return onDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDOMMany", function() { return onDOMMany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onQuickKeydown", function() { return onQuickKeydown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCenterWindow", function() { return openCenterWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openWindow", function() { return openWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairRows", function() { return pairRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseISO", function() { return parseISO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependTo", function() { return prependTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promiseTimeout", function() { return promiseTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randChoice", function() { return randChoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randInt", function() { return randInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randString", function() { return randString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEl", function() { return removeEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveArgsByType", function() { return resolveArgsByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveValueOrGettter", function() { return resolveValueOrGettter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreAttr", function() { return restoreAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return retry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setElChildByIndex", function() { return setElChildByIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snakeCase", function() { return snakeCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitArray", function() { return splitArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strPad", function() { return strPad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studlyCase", function() { return studlyCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titleCase", function() { return titleCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArrayIfNot", function() { return toArrayIfNot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return uniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unset", function() { return unset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewportPositionToOffset", function() { return viewportPositionToOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitFor", function() { return waitFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitTime", function() { return waitTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walkTreeData", function() { return walkTreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchChange", function() { return watchChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowLoaded", function() { return windowLoaded; });
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_10__);
/*!
 * helper-js v2.0.1
 * (c) phphe <phphe@outlook.com> (https://github.com/phphe)
 * Homepage: undefined
 * Released under the MIT License.
 */












function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(iterateAll);

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
// 为此库有需要的方法存储信息
// @ts-ignore

var store = {
  uniqueId: {}
}; // get global, such as window in browser.
// 返回顶级全局变量. 例如浏览器的`window`

function glb() {
  // `this` !== global or window because of build tool. So you can't use `this` to get `global`
  if (store.glb) {
    return store.glb;
  } else {
    // resolve global
    var t;

    try {
      t = global;
    } catch (e) {
      t = window;
    }

    store.glb = t;
    return t;
  }
} // detect if global variable `document` existing.
// 判断全局变量`document`是否存在

function isDocumentExisted() {
  try {
    var t = document;
  } catch (e) {
    return false;
  }

  return true;
}
function isArray(v) {
  return Object.prototype.toString.call(v) === '[object Array]';
}
function isBool(v) {
  return Object.prototype.toString.call(v) === '[object Boolean]';
}
function isNumber(v) {
  return Object.prototype.toString.call(v) === '[object Number]';
}
function isNumeric(v) {
  return isFinite(v) && !isNaN(parseFloat(v));
}
function isString(v) {
  return Object.prototype.toString.call(v) === '[object String]';
}
function isObject(v) {
  return Object.prototype.toString.call(v) === '[object Object]';
}
function isFunction(v) {
  return typeof v === 'function';
}
function isPromise(v) {
  return Object.prototype.toString.call(v) === '[object Promise]';
} // detect if argumrnt is null, undefined, empty array, empty string, false, NaN, empty object
// 检查是否是null, undefined, 空数组, 空字符串, false, NaN, 空对象

function empty(v) {
  if (v == null) {
    return true;
  } else if (v.length != null) {
    return v.length === 0;
  } else if (isBool(v)) {
    return false;
  } else if (isNumber(v)) {
    return isNaN(v);
  } else if (isObject(v)) {
    return Object.keys(v).length === 0;
  }
} // rand int in range, including min and max
// 返回指定范围随机整数, 包括范围起始值和终止值

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} // rand item in array
// 返回数组随机一项

function randChoice(arr) {
  return arr[randInt(0, arr.length - 1)];
} // Pad a string to a certain length with another string
// 左边补充指定字符, 使其达到指定长度

function strPad(str, n) {
  var padString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  var r = str.toString();
  var len = str.toString().length;

  while (len < n) {
    r = padString + r;
    len++;
  }

  if (r.length > n) {
    r = r.substr(r.length - n);
  }

  return str;
} // If n less than `min`, return `min`, else n.
// 如果n小于min, 返回min, 否则n.

function notLessThan(n, min) {
  return n < min ? min : n;
} // If n greater than `max`, return `max`, else n.
// 如果n大于max, 返回max, 否则n.

function notGreaterThan(n, max) {
  return n < max ? n : max;
} // ## string
// ## 字符串
// 'abc abc' to 'Abc abc'

function studlyCase(str) {
  return str && str[0].toUpperCase() + str.substr(1);
} // To lower case and use `-` as delimiter. example: '-ABC abc_def camelCase-- helloMyFriend' to 'a-b-c-abc-def-camel-case-hello-my-friend'

function kebabCase(str) {
  return str.replace(/ /g, '-').replace(/_/g, '-').replace(/([A-Z])/g, '-$1').replace(/--+/g, '-').replace(/^-|-$|/g, '').toLowerCase();
} // To lower case and use `_` as delimiter.

function snakeCase(str) {
  return kebabCase(str).replace(/-/g, '_');
} // 'abc-abc-abc_abc' to 'AbcAbcAbcAbc'

function camelCase(str) {
  var temp = str.toString().split(/[-_]/);

  for (var i = 1; i < temp.length; i++) {
    temp[i] = studlyCase(temp[i]);
  }

  return temp.join('');
} // 'AbcAbcAbcAbc' to ['Abc', 'Abc', 'Abc', 'Abc']

function camelToWords(str) {
  return str.toString().trim().split(/(?=[A-Z])/);
} // 'abcAbc' to 'Abc Abc'

function titleCase(str) {
  return camelToWords(studlyCase(camelCase(str))).join(' ').replace(/\bid\b/ig, 'ID');
} // generate random string
// 随机字符串

function randString() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var seeds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var r = '';

  for (var i = 0; i < len; i++) {
    r += randChoice(seeds);
  }

  return r;
} // ## Array
// ## 数组
// remove item from array. return removed count
// 从数组删除项. 返回删除计数

function arrayRemove(arr, v) {
  var index;
  var count = 0;

  while ((index = arr.indexOf(v)) > -1) {
    arr.splice(index, 1);
    count++;
  }

  return count;
} // remove items from array by sorted indexes. indexes example: [0, 2, 6, 8, 9]
// 通过有序的索引集删除数组项. 索引集例子: [0, 2, 6, 8, 9]

function arrayRemoveBySortedIndexes(arr, sortedIndexes) {
  for (var i = sortedIndexes.length - 1; i >= 0; i--) {
    var index = sortedIndexes[i];
    arr.splice(index, 1);
  }
} // return new array excluding indexes
// 返回新数组除了给定索引

function newArrayExcludingIndexes(arr, indexes) {
  var mapping = {};

  var _iterator = _createForOfIteratorHelper(indexes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var index = _step.value;
      mapping[index] = true;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var newArr = [];
  var len = arr.length;

  for (var i = 0; i < len; i++) {
    if (!mapping[i]) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
} // get item from array by index. index can be negative number
// 通过所以获取数组一项. 支持负值索引.

function arrayAt(arr, n) {
  return arr[n >= 0 ? n : arr.length + n];
} // get first or array
// 返回数组首项

function arrayFirst(arr) {
  return arr[0];
} // get last of array
// 返回数组末项

function arrayLast(arr) {
  return arr[arr.length - 1];
} // return arr1 - arr2

function arraySubtract(arr1, arr2) {
  var len = arr1.length;
  var arr = [];

  while (len--) {
    if (arr2.indexOf(arr1[len]) < 0) {
      arr.push(arr1[len]);
    }
  }

  return arr;
} // get array item sibling. Example: getArrayItemSibling(arr, item, -1), get previous sibling
// 获得数组项的一个同级. 例: getArrayItemSibling(arr, item, -1), 获得前一个

function getArrayItemSibling(arr, item, offset) {
  return getArrayItemSiblings(arr, item, [offset])[0];
} // get array item siblings. Example: getArrayItemSiblings(arr, item, [-1, 1]), get previous and next sibling
// 获得数组项的多个同级. 例: getArrayItemSiblings(arr, item, [-1, 1]), 获得前一个和后一个

function getArrayItemSiblings(arr, item, offsets) {
  var index = arr.indexOf(item);

  if (index === -1) {
    throw 'item is not in array';
  }

  return offsets.map(function (v) {
    return arr[index + v];
  });
}
function toArrayIfNot(arrOrNot) {
  return isArray(arrOrNot) ? arrOrNot : [arrOrNot];
}
function splitArray(arr, n) {
  var r = [];

  if (isFunction(n)) {
    var getChunkLength = n;
    var times = 1;
    var i = 0;

    while (i < arr.length) {
      var _n = getChunkLength(times);

      var end = i + _n;
      r.push(arr.slice(i, end));
      i = end;
      times++;
    }
  } else {
    var _i = 0;

    while (_i < arr.length) {
      var _end = _i + n;

      r.push(arr.slice(_i, _end));
      _i = _end;
    }
  }

  return r;
} // Compute mark of each item, and group them by mark.
// 计算每项的标识, 通过标识将数组项分组.

function groupArray(arr, getMark) {
  var groups = new Map();
  arr.forEach(function (v) {
    var mark = getMark(v);

    if (!groups.has(mark)) {
      groups.set(mark, []);
    }

    groups.get(mark).push(v);
  });
  return groups;
} // Each item in the new array is unique.
// 新数组每项唯一.

function arrayDistinct(arr) {
  // @ts-ignore
  if (glb().Set) {
    return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9___default()(new Set(arr));
  } else {
    return arr.filter(function (v, i, a) {
      return a.indexOf(v) === i;
    });
  }
} // get items from array by range. range can be negative
// 从数组获得一个范围内的项. 范围可以为负.

function arrayGetRange(arr, index, endIndex) {
  if (index < 0) {
    index += arr.length;
  }

  if (endIndex == null) {
    return arr[index];
  } else {
    if (endIndex < 0) {
      endIndex += arr.length;
    }

    return arr.slice(index, endIndex - index + 1);
  }
} // return new array excluding n items from end
// 返回新数组排除末尾n项

function arrayWithoutEnd(arr, n) {
  return arr.slice(0, arr.length - n);
} // get one-dimensional array from multidimensional array
// 从多维数组获取一维数组

function arrayFlat(arr) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var r = [];

  var rec = function rec(arr, curentDepth) {
    var _iterator2 = _createForOfIteratorHelper(arr),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;

        if (isArray(item) && curentDepth < depth) {
          rec(item, curentDepth + 1);
        } else {
          r.push(item);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };

  rec(arr, 0);
  return r;
} // ## Object
// ## 对象

function assignIfDifferent(obj, key, val) {
  if (obj[key] !== val) {
    obj[key] = val;
  }
} // like Array.map

function objectMap(obj, handler) {
  var r = {};
  var i = 0;

  for (var key in obj) {
    r[key] = handler(obj[key], key, i);
    i++;
  }

  return r;
}
function objectOnly(obj, keys) {
  var keysSet = new Set(keys);
  var r = {};

  for (var key in obj) {
    if (keysSet.has(key)) {
      r[key] = obj[key];
    }
  }

  return r;
}
function objectExcept(obj, keys) {
  var keysSet = new Set(keys);
  var r = {};

  for (var key in obj) {
    if (!keysSet.has(key)) {
      r[key] = obj[key];
    }
  }

  return r;
}
function iterateAll(val) {
  var opt,
      i,
      info,
      _i2,
      _Object$keys,
      key,
      _info,
      _i3,
      _info2,
      keys,
      _i4,
      _keys,
      _key,
      _info3,
      _args = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function iterateAll$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          opt = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};

          if (opt.reverse) {
            _context.next = 30;
            break;
          }

          if (!(val.length != null)) {
            _context.next = 14;
            break;
          }

          i = 0;

        case 4:
          if (!(i < val.length)) {
            _context.next = 12;
            break;
          }

          info = {
            value: val[i],
            index: i
          };

          if (!(!opt.exclude || !opt.exclude(info))) {
            _context.next = 9;
            break;
          }

          _context.next = 9;
          return info;

        case 9:
          i++;
          _context.next = 4;
          break;

        case 12:
          _context.next = 28;
          break;

        case 14:
          if (!isObject(val)) {
            _context.next = 27;
            break;
          }

          _i2 = 0, _Object$keys = Object.keys(val);

        case 16:
          if (!(_i2 < _Object$keys.length)) {
            _context.next = 25;
            break;
          }

          key = _Object$keys[_i2];
          _info = {
            value: val[key],
            key: key
          };

          if (!(!opt.exclude || !opt.exclude(_info))) {
            _context.next = 22;
            break;
          }

          _context.next = 22;
          return _info;

        case 22:
          _i2++;
          _context.next = 16;
          break;

        case 25:
          _context.next = 28;
          break;

        case 27:
          throw 'Unsupported type';

        case 28:
          _context.next = 58;
          break;

        case 30:
          if (!(val.length != null)) {
            _context.next = 42;
            break;
          }

          _i3 = val.length - 1;

        case 32:
          if (!(_i3 >= 0)) {
            _context.next = 40;
            break;
          }

          _info2 = {
            value: val[_i3],
            index: _i3
          };

          if (!(!opt.exclude || !opt.exclude(_info2))) {
            _context.next = 37;
            break;
          }

          _context.next = 37;
          return _info2;

        case 37:
          _i3--;
          _context.next = 32;
          break;

        case 40:
          _context.next = 58;
          break;

        case 42:
          if (!isObject(val)) {
            _context.next = 57;
            break;
          }

          keys = Object.keys(val);
          keys.reverse();
          _i4 = 0, _keys = keys;

        case 46:
          if (!(_i4 < _keys.length)) {
            _context.next = 55;
            break;
          }

          _key = _keys[_i4];
          _info3 = {
            value: val[_key],
            key: _key
          };

          if (!(!opt.exclude || !opt.exclude(_info3))) {
            _context.next = 52;
            break;
          }

          _context.next = 52;
          return _info3;

        case 52:
          _i4++;
          _context.next = 46;
          break;

        case 55:
          _context.next = 58;
          break;

        case 57:
          throw 'Unsupported type';

        case 58:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
} // example: objectGet(window, 'document.body.children.0') . source: http://stackoverflow.com/questions/8817394/javascript-get-deep-value-from-object-by-passing-path-to-it-as-string
// 例: objectGet(window, 'document.body.children.0') . 参考: http://stackoverflow.com/questions/8817394/javascript-get-deep-value-from-object-by-passing-path-to-it-as-string

function objectGet(obj, path, throwError) {
  var paths = isArray(path) ? path : path.split('.');
  var current = obj;

  try {
    var _iterator3 = _createForOfIteratorHelper(paths),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var key = _step3.value;
        current = current[key];
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  } catch (e) {
    if (throwError) {
      throw "Path does not exist";
    }
  }

  return current;
} // refer [objectGet](#objectGet)

function objectSet(obj, path, value) {
  var paths = isArray(path) ? path : path.split('.');
  var lastKey = arrayLast(paths);
  var parent = objectGet(obj, paths.slice(0, paths.length - 1));

  if (!parent) {
    throw "Path does not exist";
  }

  parent[lastKey] = value;
} // try delete obj[prop]

function unset(obj, prop) {
  obj[prop] = undefined;

  try {
    delete obj[prop];
  } catch (e) {}
}
function objectAssignIfKeyNull(obj1, obj2) {
  Object.keys(obj2).forEach(function (key) {
    if (obj1[key] == null) {
      obj1[key] = obj2[key];
    }
  });
}
function mapObjectTree(obj, handler) {
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10000;
  var r;
  var count = 0;
  var stack = [{
    value: obj
  }];

  var _loop2 = function _loop2() {
    if (count >= limit) {
      throw "mapObjectTree: limit(".concat(limit, ") reached, object may has circular reference");
    }

    count++; // @ts-ignore

    var _stack$shift = stack.shift(),
        value = _stack$shift.value,
        key = _stack$shift.key,
        parent = _stack$shift.parent,
        newParent = _stack$shift.newParent;

    var t = handler(value, key, parent, newParent);

    var assign = function assign(value, key, canPush) {
      if (isArray(value)) {
        value = [];
      } else if (isObject(value)) {
        value = {};
      }

      if (parent) {
        if (isArray(newParent) && canPush) {
          newParent.push(value);
        } else {
          newParent[key] = value;
        }
      } else {
        r = value;
      } // value may changed


      return value;
    };

    var newVal = void 0,
        val = void 0,
        toDelete = void 0,
        stop = void 0,
        skip = void 0;

    if (!t) {
      // no change
      val = value; // @ts-ignore

      newVal = assign(value, key);
    } else {
      var key2 = t.key,
          _value = t.value;
      val = _value; // @ts-ignore

      if (t.delete || key2 === false) {
        // del
        toDelete = true;
      } else if (key2 == null) {
        // don't change key
        newVal = assign(_value, key, true);
      } else if (t.hasOwnProperty('value')) {
        // @ts-ignore
        newVal = assign(_value, key2);
      }

      stop = t.stop;
      skip = t.skip;
    }

    if (toDelete) {
      return "continue";
    }

    if (skip) {
      return "continue";
    }

    if (stop) {
      return "break";
    }

    if (isArray(val)) {
      var len = val.length;

      for (var i = 0; i < len; i++) {
        // @ts-ignore
        stack.push({
          value: val[i],
          key: i,
          parent: val,
          newParent: newVal
        });
      }
    } else if (isObject(val)) {
      Object.keys(val).forEach(function (key) {
        // @ts-ignore
        stack.push({
          value: val[key],
          key: key,
          parent: val,
          newParent: newVal
        });
      });
    }
  };

  _loop: while (stack.length > 0) {
    var _ret = _loop2();

    switch (_ret) {
      case "continue":
        continue;

      case "break":
        break _loop;
    }
  }

  return r;
}
function mapObjects(arr, idKey) {
  var r = {};
  var len = arr.length;

  for (var i = 0; i < len; i++) {
    var item = arr[i]; // @ts-ignore

    var id = isFunction(idKey) ? idKey(item, i) : item[idKey];
    r[id] = item;
  }

  return r;
} // example: pairRows(users, userProfiles, 'id', 'user_id')

function pairRows(rows1, rows2, key1) {
  var key2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : key1;
  var map = mapObjects(rows2, key2);
  return rows1.map(function (row1) {
    return [row1, map[row1[key1]]];
  });
}
function depthFirstSearch(obj, handler) {
  var childrenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var rootChildren = isArray(obj) ? obj : [obj]; //

  var StopException = function StopException() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, StopException);
  };

  var func = function func(children, parent, parentPath) {
    if (opt.reverse) {
      children = children.slice();
      children.reverse();
    }

    var len = children.length;

    for (var i = 0; i < len; i++) {
      var item = children[i];
      var index = opt.reverse ? len - i - 1 : i;
      var path = parentPath ? [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9___default()(parentPath), [index]) : [];
      var r = handler(item, index, parent, path);

      if (r === false) {
        // stop
        throw new StopException();
      } else if (r === 'skip children') {
        continue;
      } else if (r === 'skip siblings') {
        break;
      }

      if (item[childrenKey] != null) {
        func(item[childrenKey], item, path);
      }
    }
  };

  try {
    func(rootChildren, null, isArray(obj) ? [] : null);
  } catch (e) {
    if (e instanceof StopException) ; else {
      throw e;
    }
  }
} // refer [depthFirstSearch](#depthFirstSearch)

var walkTreeData = depthFirstSearch; // tree data helpers

var TreeData = /*#__PURE__*/function () {
  // data = null;
  function TreeData() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, TreeData);

    this.childrenKey = 'children';
    this.data = data;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(TreeData, [{
    key: "iteratePath",
    value: /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function iteratePath(path) {
      var opt,
          childrenKey,
          rootChildren,
          prevPath,
          prevChildren,
          _iterator4,
          _step4,
          index,
          currentPath,
          currentNode,
          list,
          _iterator5,
          _step5,
          _step5$value,
          path0,
          node,
          _path,
          _args2 = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function iteratePath$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              opt = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
              childrenKey = this.childrenKey, rootChildren = this.rootChildren;

              if (opt.reverse) {
                _context2.next = 29;
                break;
              }

              prevPath = [];
              prevChildren = rootChildren;
              _iterator4 = _createForOfIteratorHelper(path);
              _context2.prev = 6;

              _iterator4.s();

            case 8:
              if ((_step4 = _iterator4.n()).done) {
                _context2.next = 19;
                break;
              }

              index = _step4.value;
              currentPath = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9___default()(prevPath), [index]);
              currentNode = prevChildren[index];
              _context2.next = 14;
              return {
                path: currentPath,
                node: currentNode
              };

            case 14:
              prevPath = currentPath;
              prevChildren = currentNode[childrenKey];

            case 17:
              _context2.next = 8;
              break;

            case 19:
              _context2.next = 24;
              break;

            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](6);

              _iterator4.e(_context2.t0);

            case 24:
              _context2.prev = 24;

              _iterator4.f();

              return _context2.finish(24);

            case 27:
              _context2.next = 49;
              break;

            case 29:
              list = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9___default()(this.iteratePath(path, Object.assign(Object.assign({}, opt), {
                reverse: false
              })));
              list.reverse();
              _iterator5 = _createForOfIteratorHelper(list);
              _context2.prev = 32;

              _iterator5.s();

            case 34:
              if ((_step5 = _iterator5.n()).done) {
                _context2.next = 41;
                break;
              }

              _step5$value = _step5.value, path0 = _step5$value.path, node = _step5$value.node;
              _path = path0;
              _context2.next = 39;
              return {
                path: _path,
                node: node
              };

            case 39:
              _context2.next = 34;
              break;

            case 41:
              _context2.next = 46;
              break;

            case 43:
              _context2.prev = 43;
              _context2.t1 = _context2["catch"](32);

              _iterator5.e(_context2.t1);

            case 46:
              _context2.prev = 46;

              _iterator5.f();

              return _context2.finish(46);

            case 49:
            case "end":
              return _context2.stop();
          }
        }
      }, iteratePath, this, [[6, 21, 24, 27], [32, 43, 46, 49]]);
    })
  }, {
    key: "getAllNodes",
    value: function getAllNodes(path) {
      var all = [];

      var _iterator6 = _createForOfIteratorHelper(this.iteratePath(path)),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var node = _step6.value.node;
          all.push(node);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return all;
    }
  }, {
    key: "getNode",
    value: function getNode(path) {
      return arrayLast(this.getAllNodes(path));
    }
  }, {
    key: "getNodeIndexAndParent",
    value: function getNodeIndexAndParent(path) {
      var parentPath = path.slice();
      var index = parentPath.pop();
      return {
        parent: this.getNode(parentPath),
        index: index,
        parentPath: parentPath
      };
    }
  }, {
    key: "getNodeParent",
    value: function getNodeParent(path) {
      return this.getNodeIndexAndParent(path).parent;
    }
  }, {
    key: "setPathNode",
    value: function setPathNode(path, node) {
      if (path == null || path.length === 0) {
        this.data = node;
      } else {
        var childrenKey = this.childrenKey,
            rootChildren = this.rootChildren;

        var _this$getNodeIndexAnd = this.getNodeIndexAndParent(path),
            parent = _this$getNodeIndexAnd.parent,
            index = _this$getNodeIndexAnd.index;

        var parentChildren = path.length === 1 ? rootChildren : parent[childrenKey];
        parentChildren[index] = node;
      }
    }
  }, {
    key: "removeNode",
    value: function removeNode(path) {
      var childrenKey = this.childrenKey,
          rootChildren = this.rootChildren;

      var _this$getNodeIndexAnd2 = this.getNodeIndexAndParent(path),
          parent = _this$getNodeIndexAnd2.parent,
          index = _this$getNodeIndexAnd2.index;

      var parentChildren = path.length === 1 ? rootChildren : parent[childrenKey];
      var node = parentChildren[index];
      parentChildren.splice(index, 1);
      return node;
    }
  }, {
    key: "walk",
    value: function walk(handler, opt) {
      var childrenKey = this.childrenKey,
          data = this.data; // @ts-ignore

      return walkTreeData(data, handler, childrenKey, opt);
    }
  }, {
    key: "clone",
    value: function clone() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // opt.afterNodeCreated(newNode, {oldNode: node, index, parent, path})
      var childrenKey = this.childrenKey;
      var td = new TreeData();
      this.walk(function (node, index, parent, path) {
        var newNode = Object.assign({}, node);

        if (newNode[childrenKey]) {
          newNode[childrenKey] = [];
        }

        if (opt.afterNodeCreated) {
          opt.afterNodeCreated(newNode, {
            oldNode: node,
            index: index,
            parent: parent,
            path: path
          });
        }

        td.setPathNode(path, newNode);
      });
      return td.data;
    }
  }, {
    key: "rootChildren",
    get: function get() {
      var childrenKey = this.childrenKey;
      var data = this.data;
      return isArray(data) ? data : data[childrenKey];
    }
  }]);

  return TreeData;
}(); // ## function
// ## 函数
// if it is function, return result, else return it directly.

function resolveValueOrGettter(valueOrGetter) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (isFunction(valueOrGetter)) {
    return valueOrGetter.apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9___default()(args));
  } else {
    return valueOrGetter;
  }
}
function executeWithCount(func) {
  var count = 0;

  function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
      args[_key2] = arguments[_key2];
    }

    // @ts-ignore
    return func.call.apply(func, [this, count++].concat(args));
  }

  return wrapper;
}
function watchChange(getVal, handler) {
  var oldVal;

  var update = function update() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
      args[_key3] = arguments[_key3];
    }

    // @ts-ignore
    var newVal = getVal.apply(void 0, args);

    if (oldVal !== newVal) {
      // @ts-ignore
      handler.apply(void 0, [newVal].concat(args));
    }

    oldVal = newVal;
  };

  return update;
}
function debounceTrailing(action) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var t;
  var delaying;
  var lastArgs; // when trailing, use last args

  var resolves = [];
  var rejects = [];

  var wrappedAction = function wrappedAction() {
    var _this = this;

    for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return new Promise(function (resolve, reject) {
      resolves.push(resolve);
      rejects.push(reject); //

      lastArgs = args;

      if (!delaying) {
        delaying = true;
        t = setTimeout(function () {
          // @ts-ignore
          var result = action.call.apply(action, [_this].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9___default()(lastArgs)));
          t = null;
          delaying = false;
          resolves.forEach(function (resolve) {
            return resolve(result);
          });
          resolves = [];
          rejects = [];
        }, wait);
      }
    });
  };

  var stop = function stop() {
    if (t) {
      clearTimeout(t);
      t = null;
    }

    delaying = false;
    resolves = [];
    rejects.forEach(function (reject) {
      return reject();
    });
    rejects = [];
  }; // @ts-ignore


  return {
    action: wrappedAction,
    stop: stop
  };
}
function debounceImmediate(action) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var t;
  var delaying;
  var result;

  var wrappedAction = function wrappedAction() {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      if (delaying) {
        resolve(result);
      } else {
        delaying = true; // @ts-ignore

        result = action.call.apply(action, [_this2].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9___default()(lastArgs)));
        resolve(result);
        t = setTimeout(function () {
          t = null;
          delaying = false;
          result = null;
        }, wait);
      }
    });
  };

  var stop = function stop() {
    if (t) {
      clearTimeout(t);
      t = null;
    }

    delaying = false;
  }; // @ts-ignore


  return {
    action: wrappedAction,
    stop: stop
  };
} // the returned function only accept one argument

function joinFunctionsByResult(funcs) {
  var wrappedFunc = funcs[0];

  for (var i = 1; i < funcs.length; i++) {
    wrappedFunc = join2func(wrappedFunc, funcs[i]);
  }

  return wrappedFunc;

  function join2func(func1, func2) {
    return function (arg) {
      var result1 = func1(arg);
      return func2(result1);
    };
  }
} // must pass arguments to `next` manually

function joinFunctionsByNext(funcs) {
  var next = function next() {};

  var _iterator7 = _createForOfIteratorHelper(iterateAll(funcs, {
    reverse: true
  })),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var func = _step7.value.value;
      var currentNext = next;
      next = wrapFuncWithNext(func, currentNext);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }

  return next;

  function wrapFuncWithNext(func, next) {
    return function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key5 = 0; _key5 < _len4; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return func.apply(void 0, [next].concat(args));
    };
  }
} // ## promise
// execute promise in sequence

function executePromiseGetters(getters) {
  var concurrent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var stopped;
  var promise = new Promise(function (resolve, reject) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee() {
      var chunks, promises, _iterator8, _step8, chunk, chunkPromises;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              chunks = splitArray(getters, concurrent);
              promises = [];
              _iterator8 = _createForOfIteratorHelper(chunks);
              _context3.prev = 3;

              _iterator8.s();

            case 5:
              if ((_step8 = _iterator8.n()).done) {
                _context3.next = 15;
                break;
              }

              chunk = _step8.value;
              chunkPromises = chunk.map(function (v) {
                return v();
              });
              promises.push.apply(promises, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9___default()(chunkPromises));
              _context3.next = 11;
              return Promise.all(chunkPromises);

            case 11:
              if (!stopped) {
                _context3.next = 13;
                break;
              }

              return _context3.abrupt("break", 15);

            case 13:
              _context3.next = 5;
              break;

            case 15:
              _context3.next = 20;
              break;

            case 17:
              _context3.prev = 17;
              _context3.t0 = _context3["catch"](3);

              _iterator8.e(_context3.t0);

            case 20:
              _context3.prev = 20;

              _iterator8.f();

              return _context3.finish(20);

            case 23:
              Promise.all(promises).then(function () {
                resolve.apply(void 0, arguments);
              });

            case 24:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee, null, [[3, 17, 20, 23]]);
    }));
  });
  return {
    promise: promise,
    stop: function stop() {
      stopped = true;
    }
  };
}
function promiseTimeout(promise, timeout) {
  return new Promise(function (resolve, reject) {
    var t, rejected;
    promise.then(function () {
      clearTimeout(t);
      resolve.apply(void 0, arguments);
    }, function () {
      if (!rejected) {
        clearTimeout(t);
        reject.apply(void 0, arguments);
      }
    });
    t = setTimeout(function () {
      rejected = true;
      var e = new Error('Promise timeout!');
      e.name = 'timeout';
      reject(e);
    }, timeout);
  });
} // ## url

function getUrlParam(par) {
  // 获取当前URL
  var local_url = document.location.href; // 获取要取得的get参数位置

  var get = local_url.indexOf(par + '=');

  if (get == -1) {
    return false;
  } // 截取字符串


  var get_par = local_url.slice(par.length + get + 1); // 判断截取后的字符串是否还有其他get参数

  var nextPar = get_par.indexOf('&');

  if (nextPar != -1) {
    get_par = get_par.slice(0, nextPar);
  }

  return get_par;
} // ## dom
// return NodeList if there are multiple top-level nodes

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  if (div.childNodes.length > 1) {
    return div.childNodes;
  } else {
    return div.childNodes[0];
  }
}
function uniqueId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id_';
  var id = prefix + randString();
  if (!store.uniqueId) store.uniqueId = {};
  var generatedIds = store.uniqueId;

  if (document.getElementById(id) || generatedIds[id]) {
    return uniqueId(prefix);
  } else {
    generatedIds[id] = true;
    return id;
  }
}
function isDescendantOf(el, parent) {
  while (true) {
    if (el.parentElement == null) {
      return false;
    } else if (el.parentElement === parent) {
      return true;
    } else {
      el = el.parentElement;
    }
  }
}
function removeEl(el) {
  if (el.parentNode !== null) {
    return el.parentNode.removeChild(el);
  }
} // refer: https://stackoverflow.com/questions/871399/cross-browser-method-for-detecting-the-scrolltop-of-the-browser-window

function getScroll() {
  if (typeof pageYOffset != 'undefined') {
    //most browsers except IE before #9
    return {
      top: pageYOffset,
      left: pageXOffset
    };
  } else {
    var B = document.body; //IE 'quirks'

    var D = document.documentElement; //IE with doctype

    D = D.clientHeight ? D : B;
    return {
      top: D.scrollTop,
      left: D.scrollLeft
    };
  }
} // refer: https://gist.github.com/aderaaij/89547e34617b95ac29d1

function getOffset(el) {
  var rect = getBoundingClientRect(el);
  var scroll = getScroll();
  return {
    x: rect.left + scroll.left,
    y: rect.top + scroll.top
  };
} // there is some trap in el.offsetParent, so use this func to fix

function getOffsetParent(el) {
  var offsetParent = el.offsetParent;

  if (!offsetParent || offsetParent === document.body && getComputedStyle(document.body).position === 'static') {
    offsetParent = document.body.parentElement;
  }

  return offsetParent;
} // get el current position. like jQuery.position. The position is relative to offsetParent viewport left top. it is for set absolute position, absolute position is relative to offsetParent viewport left top.
// 相对于offsetParent可视区域左上角(el.offsetLeft或top包含父元素的滚动距离, 所以要减去). position一般用于设置绝对定位的情况, 而绝对定位就是以可视区域左上角为原点.

function getPosition(el) {
  var offsetParent = getOffsetParent(el);
  var ps = {
    x: el.offsetLeft,
    y: el.offsetTop
  };
  var parent = el;

  while (true) {
    parent = parent.parentElement;

    if (parent === offsetParent || !parent) {
      break;
    }

    ps.x -= parent.scrollLeft;
    ps.y -= parent.scrollTop;
  }

  return ps;
} // like jQuery.offset(x, y), but it just return cmputed position, don't update style
// 类似 jQuery.offset的设置功能, 但是它只返回计算的position, 不改变元素样式.

function getPositionFromOffset(el, of) {
  var offsetParent = getOffsetParent(el);
  var parentOf = getOffset(offsetParent);
  return {
    x: of.x - parentOf.x,
    y: of.y - parentOf.y
  };
}
function getBoundingClientRect(el) {
  // refer: http://www.51xuediannao.com/javascript/getBoundingClientRect.html
  var xy = el.getBoundingClientRect();
  var top = xy.top - document.documentElement.clientTop,
      //document.documentElement.clientTop 在IE67中始终为2，其他高级点的浏览器为0
  bottom = xy.bottom,
      left = xy.left - document.documentElement.clientLeft,
      //document.documentElement.clientLeft 在IE67中始终为2，其他高级点的浏览器为0
  right = xy.right,
      width = xy.width || right - left,
      //IE67不存在width 使用right - left获得
  height = xy.height || bottom - top;
  var x = left;
  var y = top;
  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: width,
    height: height,
    x: x,
    y: y
  };
} // refer [getBoundingClientRect](#getBoundingClientRect)

var getViewportPosition = getBoundingClientRect; // TODO not tested

function viewportPositionToOffset(position) {
  var body = document.body;
  var bodyOf = getOffset(body);
  var bodyVP = getViewportPosition(body);
  return {
    x: position.x + bodyOf.x - bodyVP.x,
    y: position.y + bodyOf.y - bodyVP.y
  };
} // TODO not tested

function offsetToViewportPosition(offset) {
  var body = document.body;
  var bodyOf = getOffset(body);
  var bodyVP = getViewportPosition(body);
  return {
    x: offset.x + bodyVP.x - bodyOf.x,
    y: offset.y + bodyVP.y - bodyOf.y
  };
}
function findParent(el, callback) {
  var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var cur = opt && opt.withSelf ? el : el.parentElement;

  while (cur) {
    var r = callback(cur);

    if (r === 'break') {
      return;
    } else if (r) {
      return cur;
    } else {
      cur = cur.parentElement;
    }
  }
}
function backupAttr(el, name) {
  var key = "original_".concat(name);
  el[key] = el.getAttribute(name);
}
function restoreAttr(el, name) {
  var key = "original_".concat(name);
  var value = el[key];

  if (value == null) {
    el.removeAttribute(name);
  } else {
    el.setAttribute(name, value);
  }
} // source: http://youmightnotneedjquery.com/

function hasClass(el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
} // source: http://youmightnotneedjquery.com/

function addClass(el, className) {
  if (!hasClass(el, className)) {
    if (el.classList) {
      el.classList.add(className);
    } else {
      el.className += ' ' + className;
    }
  }
} // source: http://youmightnotneedjquery.com/

function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}
function getElSizeEvenInvisible(el) {
  backupAttr(el, 'style');
  el.style.display = 'block';
  var t = getBoundingClientRect(el);
  var size = {
    width: t.width,
    height: t.height
  };
  restoreAttr(el, 'style');
  return size;
}
/**
 * [isOffsetInEl]
 * @param {Number} x
 * @param {Number} y
 * @param {Object} el HTML Element
 */

function isOffsetInEl(x, y, el) {
  var offset = getOffset(el);
  return offset.x <= x && offset.x + el.offsetWidth >= x && offset.y <= y && offset.y + el.offsetHeight >= y;
} // get border

function getBorder(el) {
  var body = document.body;
  var workArea = findParent(el, function (v) {
    return hasClass(v, 'work-area');
  });
  var of = getOffset(workArea);
  return {
    left: of.x,
    right: of.x + workArea.offsetWidth,
    top: of.y + 50,
    bottom: body.offsetHeight < glb().innerHeight ? glb().innerHeight : body.offsetHeight
  };
}
function setElChildByIndex(el, child, index) {
  // @ts-ignore
  child.childComponentIndex = index;
  var len = el.childNodes.length;

  if (len === 0) {
    el.appendChild(child);
  } else if (index === 0) {
    el.insertBefore(child, el.childNodes[0]);
  } else {
    var _binarySearch = binarySearch(el.childNodes, function (el) {
      return el.childComponentIndex - index;
    }, {
      start: 0,
      end: notGreaterThan(index, len - 1),
      returnNearestIfNoHit: true
    }),
        nearestIndex = _binarySearch.index,
        nearest = _binarySearch.value,
        greater = _binarySearch.greater;

    if (greater) {
      el.insertBefore(child, nearest);
    } else {
      var next = el.childNodes[nearestIndex + 1];

      if (next) {
        el.insertBefore(child, next);
      } else {
        el.appendChild(child);
      }
    }
  }
}
function onDOM(el, name, handler) {
  for (var _len5 = arguments.length, args = new Array(_len5 > 3 ? _len5 - 3 : 0), _key6 = 3; _key6 < _len5; _key6++) {
    args[_key6 - 3] = arguments[_key6];
  }

  if (el.addEventListener) {
    // 所有主流浏览器，除了 IE 8 及更早 IE版本
    el.addEventListener.apply(el, [name, handler].concat(args)); // @ts-ignore
  } else if (el.attachEvent) {
    // IE 8 及更早 IE 版本
    // @ts-ignore
    el.attachEvent.apply(el, ["on".concat(name), handler].concat(args));
  }
}
function offDOM(el, name, handler) {
  for (var _len6 = arguments.length, args = new Array(_len6 > 3 ? _len6 - 3 : 0), _key7 = 3; _key7 < _len6; _key7++) {
    args[_key7 - 3] = arguments[_key7];
  }

  if (el.removeEventListener) {
    // 所有主流浏览器，除了 IE 8 及更早 IE版本
    el.removeEventListener.apply(el, [name, handler].concat(args)); // @ts-ignore
  } else if (el.detachEvent) {
    // IE 8 及更早 IE 版本
    // @ts-ignore
    el.detachEvent.apply(el, ["on".concat(name), handler].concat(args));
  }
}
function onDOMMany(els, names, handler) {
  for (var _len7 = arguments.length, args = new Array(_len7 > 3 ? _len7 - 3 : 0), _key8 = 3; _key8 < _len7; _key8++) {
    args[_key8 - 3] = arguments[_key8];
  }

  var _iterator9 = _createForOfIteratorHelper(els),
      _step9;

  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var el = _step9.value;

      var _iterator12 = _createForOfIteratorHelper(names),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var name = _step12.value;
          onDOM.apply(void 0, [el, name, handler].concat(args));
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }

  var destroy = function destroy() {
    var _iterator10 = _createForOfIteratorHelper(els),
        _step10;

    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var el = _step10.value;

        var _iterator11 = _createForOfIteratorHelper(names),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var name = _step11.value;
            offDOM(el, name, handler);
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
  };

  return destroy;
}
function getImageSizeByUrl(url) {
  var image = document.createElement('img');
  return new Promise(function (resolve, reject) {
    onDOM(image, 'load', function () {
      resolve({
        width: image.width,
        height: image.height
      });
    });
    onDOM(image, 'error', function (e) {
      reject(e);
    });
    image.src = url;
  });
}
function findNodeList(list, callback) {
  var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var iterator = iterateAll(list, {
    reverse: opt.reverse
  });

  var _iterator13 = _createForOfIteratorHelper(iterator),
      _step13;

  try {
    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
      var _step13$value = _step13.value,
          value = _step13$value.value,
          index = _step13$value.index;

      if (callback(value, index)) {
        return value;
      }
    }
  } catch (err) {
    _iterator13.e(err);
  } finally {
    _iterator13.f();
  }
}
function findNodeListReverse(list, callback) {
  return findNodeList(list, callback, {
    reverse: true
  });
}
function elementsFromPoint(x, y) {
  var args = [x, y]; // @ts-ignore

  var func = document.elementsFromPoint || document.msElementsFromPoint || elementsFromPoint;
  return func.apply(document, args);

  function elementsFromPoint(x, y) {
    var parents = [];
    var parent = void 0;

    do {
      if (parent !== document.elementFromPoint(x, y)) {
        parent = document.elementFromPoint(x, y);
        parents.push(parent);
        parent.style.pointerEvents = 'none';
      } else {
        parent = false;
      }
    } while (parent);

    parents.forEach(function (parent) {
      return parent.style.pointerEvents = 'all';
    });
    return parents;
  }
}
function getOuterAttachedHeight(el) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  opt = Object.assign({
    margin: true,
    border: true
  }, opt);
  var stl = getComputedStyle(el);
  var r = 0;
  var arr = [];

  if (opt.margin) {
    arr.push('margin-top', 'margin-bottom');
  }

  if (opt.border) {
    arr.push('border-top-width', 'border-bottom-width');
  }

  arr.forEach(function (key) {
    r += parseFloat(stl[key]);
  });
  return r;
}
function getOuterAttachedWidth(el) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  opt = Object.assign({
    margin: true,
    border: true
  }, opt);
  var stl = getComputedStyle(el);
  var r = 0;
  var arr = [];

  if (opt.margin) {
    arr.push('margin-left', 'margin-right');
  }

  if (opt.border) {
    arr.push('border-left-width', 'border-right-width');
  }

  arr.forEach(function (key) {
    r += parseFloat(stl[key]);
  });
  return r;
}
/* scroll to a positon with duration
from https://gist.github.com/andjosh/6764939
interface options{
  x: number // nullable. don't scroll horizontally when null
  y: number // nullable. don't scroll vertically when null
  duration: number // default 0
  element: Element // default is the top scrollable element.
  beforeEveryFrame: (count: number) => boolean|void // call before requestAnimationFrame execution. return false to stop
}
return stop
*/

function scrollTo(options) {
  if (!options.element) {
    options.element = document.scrollingElement || document.documentElement;
  }

  if (options.duration == null) {
    options.duration = 0;
  }

  var x = options.x,
      y = options.y,
      duration = options.duration,
      element = options.element;
  var requestAnimationFrameId;
  var count = 0;

  var startY = element.scrollTop,
      changeY = y - startY,
      startX = element.scrollLeft,
      changeX = x - startX,
      startDate = +new Date(),
      animateScroll = function animateScroll() {
    if (options.beforeEveryFrame && options.beforeEveryFrame(count) === false) {
      return;
    }

    var currentDate = new Date().getTime();
    var changedTime = currentDate - startDate;

    if (y != null) {
      element.scrollTop = parseInt(calc(startY, changeY, changedTime, duration));
    }

    if (x != null) {
      element.scrollLeft = parseInt(calc(startX, changeX, changedTime, duration));
    }

    if (changedTime < duration) {
      requestAnimationFrameId = requestAnimationFrame(animateScroll);
    } else {
      if (y != null) {
        element.scrollTop = y;
      }

      if (x != null) {
        element.scrollLeft = x;
      }
    }

    count++;
  };

  var stop = function stop() {
    cancelAnimationFrame(requestAnimationFrameId);
  };

  animateScroll(); // return stop

  return stop;

  function calc(startValue, changeInValue, changedTime, duration) {
    return startValue + changeInValue * (changedTime / duration);
  }
} // ### DOM structure

function insertBefore(el, target) {
  target.parentElement.insertBefore(el, target);
}
function insertAfter(el, target) {
  target.parentElement.insertBefore(el, target.nextSibling);
}
function prependTo(el, target) {
  target.insertBefore(el, target.firstChild);
}
function appendTo(el, target) {
  target.appendChild(el);
} // ## Date

function cloneDate(dateObj) {
  return new Date(dateObj.getTime());
} // day and date is same

function addDate(dateObj, n, type) {
  if (!['year', 'month', 'day', 'date'].includes(type)) {
    type += 's';
  }

  var type2 = studlyCase(type);

  if (type2 === 'Day') {
    type2 = 'Date';
  }

  var setFuncName = 'set' + type2;
  var getFuncName = 'get' + type2;
  dateObj[setFuncName](dateObj[getFuncName]() + n);
  return dateObj;
}
function getMonthStart(dateObj) {
  var clonedObj = cloneDate(dateObj);
  clonedObj.setDate(1);
  return clonedObj;
}
function getMonthEnd(dateObj) {
  var r = cloneDate(dateObj);
  addDate(r, 1, 'month');
  r.setDate(0);
  return r;
}
function getCalendar(year, month) {
  var startWeekDay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var results = [];
  var date = new Date(year, month - 1);
  year = date.getFullYear();
  month = date.getMonth() + 1;
  var monthStart = getMonthStart(date);
  var monthStartDay = monthStart.getDay();
  var calendarStart = addDate(cloneDate(monthStart), -(monthStartDay + startWeekDay), 'day');

  if (monthStartDay > startWeekDay) {
    var startDate = calendarStart.getDate();

    var _year = calendarStart.getFullYear();

    var _month = calendarStart.getMonth() + 1;

    for (var i = startWeekDay; i < monthStartDay; i++) {
      var _date = startDate + i;

      results.push({
        year: _year,
        month: _month,
        date: _date,
        text: _date,
        prevMonth: true
      });
    }
  } //


  var monthEnd = getMonthEnd(date);
  var monthEndtDate = monthEnd.getDate();

  for (var _i5 = 1; _i5 <= monthEndtDate; _i5++) {
    var _date2 = _i5;
    results.push({
      year: year,
      month: month,
      date: _date2,
      text: _date2,
      currentMonth: true
    });
  } //


  var monthEndDay = monthEnd.getDay();
  var endWeekDay = 6 - startWeekDay;

  if (monthEndDay < endWeekDay) {
    var nextMonth = addDate(cloneDate(date), 1, 'month');

    var _year2 = nextMonth.getFullYear();

    var _month2 = nextMonth.getMonth() + 1;

    for (var _i6 = monthEndDay + 1, _date3 = 1; _i6 <= endWeekDay; _i6++, _date3++) {
      results.push({
        year: _year2,
        month: _month2,
        date: _date3,
        text: _date3,
        nextMonth: true
      });
    }
  } //


  return splitArray(results, 7);
} // eg: 2018-09-07T03:38:37.888Z
// timezone must be UTC

function isIsoFormat(str) {
  return Boolean(str.length > 15 && str.length < 30 && str.match(/^\d{4}-\d{2}-\d{2}T.*Z$/));
} // timestamp eg: 2018-09-07T03:38:37.888Z

function parseISO(timestamp) {
  var _timestamp$split = timestamp.split('T'),
      _timestamp$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_timestamp$split, 2),
      datePart = _timestamp$split2[0],
      timePart = _timestamp$split2[1];

  var y,
      m,
      d,
      h = 0,
      min = 0,
      s = 0;

  var _datePart$split$map = datePart.split('-').map(function (v) {
    return parseInt(v);
  });

  var _datePart$split$map2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_datePart$split$map, 3);

  y = _datePart$split$map2[0];
  m = _datePart$split$map2[1];
  d = _datePart$split$map2[2];
  m = m - 1;

  if (timePart) {
    var t = timePart.split('-').map(function (v) {
      return parseFloat(v);
    });
    h = t[0];

    if (t[1] != null) {
      min = t[1];
    }

    if (t[2] != null) {
      s = t[2];
    }
  }

  var dt = new Date(y, m, d, h, min, s); // the dt timezone is current, so reset hour with setUTCHours

  dt.setUTCHours(h);
  return dt;
}
function binarySearch(arr, callback) {
  var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  opt = Object.assign({
    start: 0,
    end: arr.length - 1,
    maxTimes: 1000
  }, opt);
  var _opt = opt,
      start = _opt.start,
      end = _opt.end;
  var _opt2 = opt,
      returnNearestIfNoHit = _opt2.returnNearestIfNoHit,
      maxTimes = _opt2.maxTimes;
  var midNum;
  var mid;

  if (start == null) {
    start = 0;
    end = arr.length - 1;
  }

  var i = 0;
  var r;

  while (start >= 0 && start <= end) {
    if (i >= maxTimes) {
      throw Error("binarySearch: loop times is over ".concat(maxTimes, ", you can increase the limit."));
    }

    midNum = Math.floor((end - start) / 2 + start);
    mid = arr[midNum];
    r = callback(mid, i);

    if (r > 0) {
      end = midNum - 1;
    } else if (r < 0) {
      start = midNum + 1;
    } else {
      return {
        index: midNum,
        value: mid,
        count: i + 1,
        hit: true
      };
    }

    i++;
  }

  return returnNearestIfNoHit ? {
    index: midNum,
    value: mid,
    count: i + 1,
    hit: false,
    greater: r > 0
  } : null;
} //

function windowLoaded() {
  return new Promise(function (resolve, reject) {
    if (document && document.readyState === 'complete') {
      resolve();
    } else {
      glb().addEventListener('load', function once() {
        resolve();
        glb().removeEventListener('load', once);
      });
    }
  });
}
function waitTime(milliseconds, callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      callback && callback();
      resolve();
    }, milliseconds);
  });
}
function waitFor(condition) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var maxTimes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
  var interval;
  var promise = new Promise(function (resolve, reject) {
    var count = 0;

    function judge() {
      if (count <= maxTimes) {
        if (condition()) {
          stop();
          resolve();
        }
      } else {
        stop();
        reject(new Error('waitFor: Limit is reached'));
      }

      count++;
    }

    interval = setInterval(function () {
      judge();
    }, time);
    judge();
  });
  return {
    promise: promise,
    stop: stop
  };

  function stop() {
    clearInterval(interval);
  }
}
function retry(action) {
  var limitTimes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee2() {
    var index;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee2$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            index = 1;

          case 1:
            if (!(index <= limitTimes)) {
              _context4.next = 15;
              break;
            }

            _context4.prev = 2;
            _context4.next = 5;
            return action();

          case 5:
            return _context4.abrupt("return", _context4.sent);

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](2);

            if (!(index === limitTimes)) {
              _context4.next = 12;
              break;
            }

            throw _context4.t0;

          case 12:
            index++;
            _context4.next = 1;
            break;

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee2, null, [[2, 8]]);
  }));
} // clipboard-polyfill is more powerful
// 复制文字到剪贴板. 仅限于简单使用. 复杂环境推荐clipboard-polyfill

function copyTextToClipboard(text) {
  try {
    // use latest api
    navigator.clipboard.writeText(text);
    return;
  } catch (e) {}

  var textArea = document.createElement('textarea'); //
  // *** This styling is an extra step which is likely not required. ***
  //
  // Why is it here? To ensure:
  // 1. the element is able to have focus and selection.
  // 2. if element was to flash render it has minimal visual impact.
  // 3. less flakyness with selection and copying which **might** occur if
  //    the textarea element is not visible.
  //
  // The likelihood is the element won't even render, not even a flash,
  // so some of these are just precautions. However in IE the element
  // is visible whilst the popup box asking the user for permission for
  // the web page to copy to the clipboard.
  //
  // Place in top-left corner of screen regardless of scroll position.

  textArea.style.position = 'fixed';
  textArea.style.top = '0';
  textArea.style.left = '0'; // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.

  textArea.style.width = '2em';
  textArea.style.height = '2em'; // We don't need padding, reducing the size if it does flash render.

  textArea.style.padding = '0'; // Clean up any borders.

  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none'; // Avoid flash of white box if rendered for any reason.

  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}
function isWindowDefined() {
  try {
    return window && true;
  } catch (error) {
    return false;
  }
}
function isNode() {
  // @ts-ignore
  return Boolean(typeof glb().module !== 'undefined' && glb().module.exports);
}
function isIE() {
  // @ts-ignore
  return Boolean(window.ActiveXObject || "ActiveXObject" in window);
}
/*
https://developer.mozilla.org/docs/Web/API/Window/open
http://www.w3school.com.cn/htmldom/met_win_open.asp#windowfeatures
*/

function openWindow(url, name) {
  var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  glb().open(url, name, Object.keys(opt).map(function (k) {
    return "".concat(k, "=").concat(opt[k]);
  }).join(','));
}
function openCenterWindow(url, name, width, height) {
  var opt = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var t = {
    width: width,
    height: height,
    top: (glb().screen.availHeight - 30 - height) / 2,
    left: (glb().screen.availWidth - 30 - width) / 2
  };
  Object.assign(t, opt);
  openWindow(url, name, t);
}
var URLHelper = /*#__PURE__*/function () {
  function URLHelper(baseUrl) {
    var _this3 = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, URLHelper);

    this.baseUrl = ''; // protocol, hostname, port, pastname

    this.search = {};
    var t = decodeURI(baseUrl).split('?');
    this.baseUrl = t[0];

    if (t[1]) {
      t[1].split('&').forEach(function (v) {
        var t2 = v.split('=');
        _this3.search[t2[0]] = t2[1] == null ? '' : decodeURIComponent(t2[1]);
      });
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(URLHelper, [{
    key: "getHref",
    value: function getHref() {
      var _this4 = this;

      var t = [this.baseUrl];
      var searchStr = Object.keys(this.search).map(function (k) {
        return "".concat(k, "=").concat(encodeURIComponent(_this4.search[k]));
      }).join('&');

      if (searchStr) {
        t.push(searchStr);
      }

      return t.join('?');
    }
  }]);

  return URLHelper;
}();
/* resolve arguments to help overload. 解析函数参数, 帮助重载
```js
types eg: ['Object', (i) => i > 3, ['Number', default], null ]
null represent all types of argument
resolveArgsByType([1,'str'], ['Number', 'Boolean' ,'String']) -> [1, null, 'str']
resolveArgsByType([1,'str'], ['Number', ['Boolean', true] ,'String']) -> [1, true, 'str']
```
*/

function resolveArgsByType(args, types) {
  var argIndex = 0;
  return types.map(function (v) {
    // make rule
    var rule, dft;

    if (isArray(v)) {
      rule = v[0];
      dft = v[1];
    } else {
      rule = v;
      dft = undefined;
    }

    if (!isFunction(rule)) {
      if (rule == null) {
        rule = function rule() {
          return true;
        };
      } else {
        var t = rule;

        rule = function rule(x) {
          return Object.prototype.toString.call(x) === "[object ".concat(t, "]");
        };
      }
    }

    var arg = args[argIndex];

    if (rule(arg)) {
      argIndex++;
      return arg;
    } else {
      return dft;
    }
  });
}
function makeStorageHelper(storage) {
  return {
    storage: storage,
    set: function set(name, value, minutes) {
      // set null can remove a item
      if (value == null) {
        this.storage.removeItem(name);
      } else {
        this.storage.setItem(name, JSON.stringify({
          value: value,
          expired_at: minutes ? new Date().getTime() + minutes * 60 * 1000 : null
        }));
      }
    },
    get: function get(name) {
      var t = this.storage.getItem(name);

      if (t) {
        t = JSON.parse(t);

        if (!t.expired_at || t.expired_at > new Date().getTime()) {
          return t.value;
        } else {
          this.storage.removeItem(name);
        }
      }

      return null;
    },
    clear: function clear() {
      this.storage.clear();
    }
  };
}
function getLocalStorage2() {
  if (!store.localStorage2) {
    store.localStorage2 = makeStorageHelper(localStorage);
  }

  return store.localStorage2;
}
function getSessionStorage2() {
  if (!store.sessionStorage2) {
    store.sessionStorage2 = makeStorageHelper(glb().sessionStorage);
  }

  return store.sessionStorage2;
} // 事件处理

var EventProcessor = /*#__PURE__*/function () {
  function EventProcessor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, EventProcessor);

    this.eventStore = [];
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(EventProcessor, [{
    key: "on",
    value: function on(name, handler) {
      this.eventStore.push({
        name: name,
        handler: handler
      });
    }
  }, {
    key: "once",
    value: function once(name, handler) {
      var _this5 = this;

      var off = function off() {
        _this5.off(name, wrappedHandler);
      };

      var wrappedHandler = function wrappedHandler() {
        handler.apply(void 0, arguments);
        off();
      };

      this.on(name, wrappedHandler);
      return off;
    }
  }, {
    key: "onceTimeout",
    value: function onceTimeout(name, handler, timeout) {
      var _this6 = this;

      var off;
      var promise = new Promise(function (resolve, reject) {
        var wrappedHandler = function wrappedHandler() {
          handler.apply(void 0, arguments);
          resolve();
        };

        off = _this6.once(name, wrappedHandler);
        waitTime(timeout).then(function () {
          off();
          reject();
        });
      });

      var off2 = function off2() {
        off && off();
      };

      return {
        off: off2,
        promise: promise
      };
    }
  }, {
    key: "off",
    value: function off(name, handler) {
      var indexes = []; // to remove indexes; reverse; 倒序的

      var len = this.eventStore.length;

      for (var i = 0; i < len; i++) {
        var item = this.eventStore[i];

        if (item.name === name && item.handler === handler) {
          indexes.unshift(i);
        }
      }

      for (var _i7 = 0, _indexes = indexes; _i7 < _indexes.length; _i7++) {
        var index = _indexes[_i7];
        this.eventStore.splice(index, 1);
      }
    }
  }, {
    key: "emit",
    value: function emit(name) {
      // 重要: 先找到要执行的项放在新数组里, 因为执行项会改变事件项存储数组
      var items = [];

      var _iterator14 = _createForOfIteratorHelper(this.eventStore),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var _item = _step14.value;

          if (_item.name === name) {
            items.push(_item);
          }
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }

      for (var _len8 = arguments.length, args = new Array(_len8 > 1 ? _len8 - 1 : 0), _key9 = 1; _key9 < _len8; _key9++) {
        args[_key9 - 1] = arguments[_key9];
      }

      for (var _i8 = 0, _items = items; _i8 < _items.length; _i8++) {
        var item = _items[_i8];
        item.handler.apply(item, args);
      }
    }
  }]);

  return EventProcessor;
}();
var CrossWindowEventProcessor = /*#__PURE__*/function (_EventProcessor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(CrossWindowEventProcessor, _EventProcessor);

  var _super = _createSuper(CrossWindowEventProcessor);

  // id
  function CrossWindowEventProcessor(opt) {
    var _this7;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, CrossWindowEventProcessor);

    _this7 = _super.call(this);
    _this7.storageName = '_crossWindow';
    _this7.windows = [];
    _this7.timeout = 200;
    _this7.BROADCAST = '__BROADCAST__';

    if (opt) {
      Object.assign(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this7), opt);
    }

    onDOM(window, 'storage', function (ev) {
      if (ev.key === _this7.storageName) {
        var event = JSON.parse(ev.newValue);

        if (!event.targets || event.targets.includes(_this7.id)) {
          var _this8;

          (_this8 = _this7).emitLocal.apply(_this8, [event.name].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9___default()(event.args)));
        }
      }
    }); // social parts 集体部分
    // join

    _this7.id = randString();
    _this7.windows = [_this7.id];
    _this7.ready = new Promise(function (resolve, reject) {
      _this7.onceTimeout('_windows_updated', function (_ref) {
        var windows = _ref.windows;
        _this7.windows = windows;
      }, _this7.timeout).promise.then(function () {
        resolve(); // responsed 被响应
      }, function () {
        // no response 无响应
        resolve();
      });

      _this7.broadcast('_join', _this7.id);
    });

    _this7.ready.then(function () {
      // on join
      _this7.on('_join', function (id) {
        _this7.windows.push(id);

        if (_this7.isMain()) {
          _this7.broadcast('_windows_updated', {
            windows: _this7.windows,
            type: 'join',
            id: id
          });
        }
      }); // on _windows_updated


      _this7.on('_windows_updated', function (_ref2) {
        var windows = _ref2.windows;
        _this7.windows = windows;
      }); // on exit


      _this7.on('_exit', function (id) {
        var oldMain = _this7.windows[0];
        arrayRemove(_this7.windows, id);

        if (_this7.isMain()) {
          _this7.emit('_windows_updated', {
            windows: _this7.windows,
            type: 'exit',
            id: id
          });

          if (oldMain != _this7.id) {
            _this7.emit('_main_updated', {
              windows: _this7.windows,
              old: oldMain,
              'new': _this7.id
            });
          }
        }
      });

      onDOM(window, 'beforeunload', function () {
        _this7.exitGroup();
      });
    });

    return _this7;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(CrossWindowEventProcessor, [{
    key: "isMain",
    value: function isMain() {
      return this.id === this.windows[0];
    }
  }, {
    key: "emitTo",
    value: function emitTo(name, targets) {
      for (var _len9 = arguments.length, args = new Array(_len9 > 2 ? _len9 - 2 : 0), _key10 = 2; _key10 < _len9; _key10++) {
        args[_key10 - 2] = arguments[_key10];
      }

      if (targets === this.BROADCAST) {
        targets = null;
      } else {
        if (targets && !isArray(targets)) {
          targets = [targets];
        }

        if (targets.includes(this.id)) {
          var _get2;

          (_get2 = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(CrossWindowEventProcessor.prototype), "emit", this)).call.apply(_get2, [this, name].concat(args)); // emit to current window

        }
      }

      glb().localStorage.setItem(this.storageName, JSON.stringify({
        name: name,
        targets: targets,
        args: args,
        // use random make storage event triggered every time
        // 加入随机保证触发storage事件
        random: Math.random()
      }));
    }
  }, {
    key: "emitLocal",
    value: function emitLocal(name) {
      for (var _len10 = arguments.length, args = new Array(_len10 > 1 ? _len10 - 1 : 0), _key11 = 1; _key11 < _len10; _key11++) {
        args[_key11 - 1] = arguments[_key11];
      }

      this.emitTo.apply(this, [name, this.id].concat(args));
    }
  }, {
    key: "broadcast",
    value: function broadcast(name) {
      for (var _len11 = arguments.length, args = new Array(_len11 > 1 ? _len11 - 1 : 0), _key12 = 1; _key12 < _len11; _key12++) {
        args[_key12 - 1] = arguments[_key12];
      }

      this.emitTo.apply(this, [name, this.BROADCAST].concat(args));
    }
  }, {
    key: "emit",
    value: function emit(name) {
      for (var _len12 = arguments.length, args = new Array(_len12 > 1 ? _len12 - 1 : 0), _key13 = 1; _key13 < _len12; _key13++) {
        args[_key13 - 1] = arguments[_key13];
      }

      this.emitTo.apply(this, [name, this.windows].concat(args));
    }
  }, {
    key: "exitGroup",
    value: function exitGroup() {
      this.broadcast('_exit', this.id);
    }
  }]);

  return CrossWindowEventProcessor;
}(EventProcessor); // Deprecated in next version

var CrossWindow = CrossWindowEventProcessor; // on continuous input. return destroy
// 监听连续输入事件. 返回取消监听函数.

function onContinuousInput(handler) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  opt = Object.assign({
    timeout: 1000
  }, opt);
  var input = '';
  var timeoutId;

  var keydownHandler = function keydownHandler(e) {
    if (e.key && e.key.length === 1) {
      input = "".concat(input).concat(e.key);
      handler(input);

      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }

      timeoutId = setTimeout(function () {
        input = '';
      }, opt.timeout);
    }
  };

  onDOM(document, 'keydown', keydownHandler);
  return function () {
    offDOM(document, 'keydown', keydownHandler);
  };
} // refer [onContinuousInput](#onContinuousInput)

var onQuickKeydown = onContinuousInput;
function getUserLanguage() {
  // @ts-ignore
  return navigator.language || navigator.userLanguage;
}
var Cache = /*#__PURE__*/function () {
  function Cache() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Cache);

    this.store = {};
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Cache, [{
    key: "has",
    value: function has(name) {
      return this.store.hasOwnProperty(name);
    }
  }, {
    key: "remember",
    value: function remember(name, getter) {
      if (!this.has(name)) {
        this.store[name] = {
          value: getter()
        };
      }

      return this.store[name].value;
    }
  }, {
    key: "forget",
    value: function forget(name) {
      if (name) {
        if (this.has(name)) {
          delete this.store[name];
        }
      } else {
        this.store = {};
      }
    }
  }]);

  return Cache;
}(); // attach cached getters to an object; can attach to self

function attachCache(obj, toCache) {
  var cache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Cache();

  var _loop3 = function _loop3(key) {
    var getter = toCache[key];
    Object.defineProperty(obj, key, {
      get: function get() {
        var _this9 = this;

        return cache.remember(key, function () {
          return getter.call(_this9);
        });
      }
    });
  };

  for (var key in toCache) {
    _loop3(key);
  }
} // for animation

function easeInOutQuad(startValue, changeInValue, changedTime, duration) {
  var t = changedTime,
      d = duration,
      b = startValue,
      c = changeInValue;
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-runtime-helpers/dist/normalize-component.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/vue-runtime-helpers/dist/normalize-component.mjs ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* harmony default export */ __webpack_exports__["default"] = (normalizeComponent);
//# sourceMappingURL=normalize-component.mjs.map


/***/ })

}]);