(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/calendar/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/apps/calendar/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    getListData: function getListData(value) {
      var listData;

      switch (value.date()) {
        case 8:
          listData = [{
            type: 'warning',
            content: 'This is warning event.'
          }, {
            type: 'success',
            content: 'This is usual event.'
          }];
          break;

        case 10:
          listData = [{
            type: 'warning',
            content: 'This is warning event.'
          }, {
            type: 'success',
            content: 'This is usual event.'
          }, {
            type: 'error',
            content: 'This is error event.'
          }];
          break;

        case 15:
          listData = [{
            type: 'warning',
            content: 'This is warning event'
          }, {
            type: 'success',
            content: 'This is very long usual event。。....'
          }, {
            type: 'error',
            content: 'This is error event 1.'
          }, {
            type: 'error',
            content: 'This is error event 2.'
          }, {
            type: 'error',
            content: 'This is error event 3.'
          }, {
            type: 'error',
            content: 'This is error event 4.'
          }];
          break;

        default:
      }

      return listData || [];
    },
    getMonthData: function getMonthData(value) {
      if (value.month() === 8) {
        return 1394;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/calendar/index.vue?vue&type=style&index=0&lang=scss&module=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/apps/calendar/index.vue?vue&type=style&index=0&lang=scss&module=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: src/components/kit/core/mixins.scss.\n        on line 5 of resources/src/components/mixins.scss\n        from line 1 of resources/src/views/apps/calendar/style.module.scss\n        from line 88 of /Users/nick/Desktop/projects/cleanui-admin-template-vue-laravel/resources/src/views/apps/calendar/index.vue\n>> @import 'src/components/kit/core/mixins.scss'; // import KIT mixins\n\n   ^\n");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/calendar/index.vue?vue&type=style&index=0&lang=scss&module=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/apps/calendar/index.vue?vue&type=style&index=0&lang=scss&module=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss&module=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/calendar/index.vue?vue&type=style&index=0&lang=scss&module=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/calendar/index.vue?vue&type=template&id=58efdcea&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/apps/calendar/index.vue?vue&type=template&id=58efdcea& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card" }, [
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c("div", { staticClass: "d-flex flex-wrap mb-3" }, [
            _c("div", { staticClass: "mr-5 flex-grow-1" }, [
              _c(
                "div",
                {
                  staticClass: "text-uppercase text-dark font-weight-bold mb-3"
                },
                [_vm._v("Calendars")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex flex-wrap" },
                [
                  _c(
                    "a-checkbox",
                    { class: _vm.$style.event, attrs: { defaultChecked: "" } },
                    [_vm._v("Gmail")]
                  ),
                  _vm._v(" "),
                  _c("a-checkbox", { class: _vm.$style.event }, [
                    _vm._v("Birthdays")
                  ])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex-grow-1" }, [
              _c(
                "div",
                {
                  staticClass: "text-uppercase text-dark font-weight-bold mb-3"
                },
                [_vm._v("Events")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "d-flex flex-wrap" }, [
                _c("div", { class: _vm.$style.event }, [
                  _c("div", {
                    staticClass: "kit__utils__donut kit__utils__donut--danger"
                  }),
                  _vm._v("Meeting\n            ")
                ]),
                _vm._v(" "),
                _c("div", { class: _vm.$style.event }, [
                  _c("div", {
                    staticClass: "kit__utils__donut kit__utils__donut--primary"
                  }),
                  _vm._v("Holidays\n            ")
                ]),
                _vm._v(" "),
                _c("div", { class: _vm.$style.event }, [
                  _c("div", {
                    staticClass: "kit__utils__donut kit__utils__donut--orange"
                  }),
                  _vm._v("Milestones\n            ")
                ]),
                _vm._v(" "),
                _c("div", { class: _vm.$style.event }, [
                  _c("div", {
                    staticClass: "kit__utils__donut kit__utils__donut--success"
                  }),
                  _vm._v("Conference\n            ")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("a-calendar", {
            scopedSlots: _vm._u([
              {
                key: "dateCellRender",
                fn: function(value) {
                  return _c(
                    "ul",
                    { staticClass: "events" },
                    _vm._l(_vm.getListData(value), function(item) {
                      return _c(
                        "li",
                        { key: item.content },
                        [
                          _c("a-badge", {
                            attrs: { status: item.type, text: item.content }
                          })
                        ],
                        1
                      )
                    }),
                    0
                  )
                }
              },
              {
                key: "monthCellRender",
                fn: function(value) {
                  return [
                    _vm.getMonthData(value)
                      ? _c("div", { staticClass: "notes-month" }, [
                          _c("section", [
                            _vm._v(_vm._s(_vm.getMonthData(value)))
                          ]),
                          _vm._v(" "),
                          _c("span", [_vm._v("Backlog number")])
                        ])
                      : _vm._e()
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/apps/calendar/index.vue":
/*!*****************************************************!*\
  !*** ./resources/src/views/apps/calendar/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _index_vue_vue_type_template_id_58efdcea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=58efdcea& */ "./resources/src/views/apps/calendar/index.vue?vue&type=template&id=58efdcea&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/views/apps/calendar/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss&module=true& */ "./resources/src/views/apps/calendar/index.vue?vue&type=style&index=0&lang=scss&module=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





var cssModules = {}
var disposed = false

function injectStyles (context) {
  if (disposed) return
  
        cssModules["$style"] = (_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_2__["default"])
        Object.defineProperty(this, "$style", {
          configurable: true,
          get: function () {
            return cssModules["$style"]
          }
        })
      
}


  module.hot && false



        module.hot && false

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_58efdcea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_58efdcea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/apps/calendar/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/src/views/apps/calendar/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/src/views/apps/calendar/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/calendar/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/apps/calendar/index.vue?vue&type=style&index=0&lang=scss&module=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/src/views/apps/calendar/index.vue?vue&type=style&index=0&lang=scss&module=true& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss&module=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/calendar/index.vue?vue&type=style&index=0&lang=scss&module=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/src/views/apps/calendar/index.vue?vue&type=template&id=58efdcea&":
/*!************************************************************************************!*\
  !*** ./resources/src/views/apps/calendar/index.vue?vue&type=template&id=58efdcea& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_58efdcea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=58efdcea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/calendar/index.vue?vue&type=template&id=58efdcea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_58efdcea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_58efdcea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);