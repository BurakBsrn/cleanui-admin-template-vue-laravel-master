(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/advanced/grid/index.vue?vue&type=template&id=3a79947c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/advanced/grid/index.vue?vue&type=template&id=3a79947c& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "kit__utils__heading" }, [
        _c("h5", [
          _c("span", { staticClass: "mr-3" }, [_vm._v("Grid")]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-sm btn-light",
              attrs: {
                href: "https://getbootstrap.com/docs/4.3/layout/grid/",
                target: "_blank"
              }
            },
            [
              _vm._v("\n        Official Documentation\n        "),
              _c("i", { staticClass: "fe fe-corner-right-up" })
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-12 mb-5" }, [
              _c("h5", { staticClass: "mb-4" }, [
                _c("strong", [_vm._v("How it works")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row text-center" }, [
                _c("div", { staticClass: "col-sm" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v("One of three columns")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v("One of three columns")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v("One of three columns")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-12 mb-5" }, [
              _c("h5", { staticClass: "mb-4" }, [
                _c("strong", [_vm._v("Grid options")])
              ]),
              _vm._v(" "),
              _c(
                "table",
                { staticClass: "table table-bordered table-striped" },
                [
                  _c("thead", [
                    _c("tr", [
                      _c("th"),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-center" }, [
                        _vm._v("\n                Extra small"),
                        _c("br"),
                        _vm._v(" "),
                        _c("small", [_vm._v("<576px")])
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-center" }, [
                        _vm._v("\n                Small"),
                        _c("br"),
                        _vm._v(" "),
                        _c("small", [_vm._v("≥576px")])
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-center" }, [
                        _vm._v("\n                Medium"),
                        _c("br"),
                        _vm._v(" "),
                        _c("small", [_vm._v("≥768px")])
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-center" }, [
                        _vm._v("\n                Large"),
                        _c("br"),
                        _vm._v(" "),
                        _c("small", [_vm._v("≥992px")])
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-center" }, [
                        _vm._v("\n                Extra large"),
                        _c("br"),
                        _vm._v(" "),
                        _c("small", [_vm._v("≥1200px")])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c(
                        "th",
                        { staticClass: "text-nowrap", attrs: { scope: "row" } },
                        [_vm._v("Max container width")]
                      ),
                      _vm._v(" "),
                      _c("td", [_vm._v("None (auto)")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("540px")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("720px")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("960px")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("1140px")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        { staticClass: "text-nowrap", attrs: { scope: "row" } },
                        [_vm._v("Class prefix")]
                      ),
                      _vm._v(" "),
                      _c("td", [_c("code", [_vm._v(".col-")])]),
                      _vm._v(" "),
                      _c("td", [_c("code", [_vm._v(".col-sm-")])]),
                      _vm._v(" "),
                      _c("td", [_c("code", [_vm._v(".col-md-")])]),
                      _vm._v(" "),
                      _c("td", [_c("code", [_vm._v(".col-lg-")])]),
                      _vm._v(" "),
                      _c("td", [_c("code", [_vm._v(".col-xl-")])])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        { staticClass: "text-nowrap", attrs: { scope: "row" } },
                        [_vm._v("# of columns")]
                      ),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "5" } }, [_vm._v("12")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        { staticClass: "text-nowrap", attrs: { scope: "row" } },
                        [_vm._v("Gutter width")]
                      ),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "5" } }, [
                        _vm._v("30px (15px on each side of a column)")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        { staticClass: "text-nowrap", attrs: { scope: "row" } },
                        [_vm._v("Nestable")]
                      ),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "5" } }, [_vm._v("Yes")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        { staticClass: "text-nowrap", attrs: { scope: "row" } },
                        [_vm._v("Column ordering")]
                      ),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "5" } }, [_vm._v("Yes")])
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-12 mb-5" }, [
              _c("h5", { staticClass: "mb-4" }, [
                _c("strong", [_vm._v("Stacked-to-Horizontal")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-8" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-8")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-4")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-4")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-4")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-4")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-6")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-6")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-1" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-1")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-1" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-1")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-1" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-1")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-1" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-1")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-1" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-1")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-1" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-1")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-1" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-1")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-1" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-1")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-1" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-1")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-1" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-1")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-1" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-1")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-1" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-md-1")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-12 mb-5" }, [
              _c("h5", { staticClass: "mb-4" }, [
                _c("strong", [_vm._v("Desktop & Mobile")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-xs-12 col-md-8" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-xs-12 .col-md-8")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-6 col-md-4" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v("col-xs-6 .col-md-4")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-xs-6 col-md-4" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-xs-6 .col-md-4")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-6 col-md-4" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-xs-6 .col-md-4")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-6 col-md-4" }, [
                  _c("div", { staticClass: "mb-4 px-3 py-2 bg-light" }, [
                    _vm._v(".col-xs-6 .col-md-4")
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/advanced/grid/index.vue":
/*!*****************************************************!*\
  !*** ./resources/src/views/advanced/grid/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3a79947c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3a79947c& */ "./resources/src/views/advanced/grid/index.vue?vue&type=template&id=3a79947c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _index_vue_vue_type_template_id_3a79947c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3a79947c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/advanced/grid/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/advanced/grid/index.vue?vue&type=template&id=3a79947c&":
/*!************************************************************************************!*\
  !*** ./resources/src/views/advanced/grid/index.vue?vue&type=template&id=3a79947c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3a79947c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3a79947c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/advanced/grid/index.vue?vue&type=template&id=3a79947c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3a79947c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3a79947c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);