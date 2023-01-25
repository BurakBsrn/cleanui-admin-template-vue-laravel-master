(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/github-explore/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/apps/github-explore/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ "./resources/src/views/apps/github-explore/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./resources/src/views/apps/github-explore/data.json", 1);
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
  data: function data() {
    return {
      data: _data_json__WEBPACK_IMPORTED_MODULE_0__
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/github-explore/index.vue?vue&type=template&id=4675a456&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/apps/github-explore/index.vue?vue&type=template&id=4675a456& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "a-tabs",
        {
          staticClass: "kit-tabs-bordered mb-2",
          attrs: { defaultActiveKey: "1" }
        },
        [
          _c("a-tab-pane", { key: "1", attrs: { tab: "Code" } }),
          _vm._v(" "),
          _c("a-tab-pane", { key: "2" }, [
            _c("span", { attrs: { slot: "tab" }, slot: "tab" }, [
              _vm._v("\n        Issues\n        "),
              _c("strong", [_vm._v("(85)")])
            ])
          ]),
          _vm._v(" "),
          _c("a-tab-pane", { key: "3" }, [
            _c("span", { attrs: { slot: "tab" }, slot: "tab" }, [
              _vm._v("\n        Pull requests\n        "),
              _c("strong", [_vm._v("(4)")])
            ])
          ]),
          _vm._v(" "),
          _c("a-tab-pane", { key: "4", attrs: { tab: "Sequrity" } }),
          _vm._v(" "),
          _c("a-tab-pane", { key: "5", attrs: { tab: "Insights" } })
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex flex-wrap border-bottom mb-3" }, [
        _c(
          "div",
          { staticClass: "my-3 mr-3" },
          [
            _c(
              "a-dropdown",
              { attrs: { placement: "bottomLeft", trigger: ["click"] } },
              [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-light text-blue dropdown-toggle",
                    attrs: { href: "javascript: void(0);" }
                  },
                  [_vm._v("Branch: Master")]
                ),
                _vm._v(" "),
                _c(
                  "a-menu",
                  { attrs: { slot: "overlay" }, slot: "overlay" },
                  [
                    _c("a-menu-item", [
                      _c("a", { attrs: { href: "javascript:;" } }, [
                        _vm._v("Testing")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("a-menu-item", [
                      _c("a", { attrs: { href: "javascript:;" } }, [
                        _vm._v("Developers")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("a-menu-item", [
                      _c("a", { attrs: { href: "javascript:;" } }, [
                        _vm._v("Killer features")
                      ])
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-light text-blue my-3 mr-auto",
            attrs: { href: "javascript: void(0);" }
          },
          [_vm._v("New Pull Request")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-light text-blue my-3 mr-3",
            attrs: { href: "javascript: void(0);" }
          },
          [_vm._v("Create New File")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "dropdown my-3 mr-3" },
          [
            _c(
              "a-dropdown",
              { attrs: { placement: "bottomLeft", trigger: ["click"] } },
              [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-success dropdown-toggle",
                    attrs: { href: "javascript: void(0);" }
                  },
                  [_vm._v("Clone or Download")]
                ),
                _vm._v(" "),
                _c(
                  "a-menu",
                  { attrs: { slot: "overlay" }, slot: "overlay" },
                  [
                    _c("a-menu-item", [
                      _c("a", { attrs: { href: "javascript:;" } }, [
                        _vm._v("Clone")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("a-menu-item", [
                      _c("a", { attrs: { href: "javascript:;" } }, [
                        _vm._v("Download")
                      ])
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive" }, [
        _c("table", { staticClass: "table table-hover text-nowrap" }, [
          _c(
            "tbody",
            _vm._l(_vm.data, function(item, index) {
              return _c("tr", { key: index }, [
                _c("td", { staticStyle: { width: "25px" } }, [
                  _c("i", {
                    class: [
                      item.type === "folder" ? "fa-folder" : "fa-file-o",
                      "fa"
                    ]
                  })
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-nowrap" }, [
                  _c("a", { attrs: { href: "javascript: void(0);" } }, [
                    _vm._v(_vm._s(item.name))
                  ])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-nowrap" }, [
                  _vm._v(_vm._s(item.info))
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-nowrap text-right" }, [
                  _vm._v(_vm._s(item.time))
                ])
              ])
            }),
            0
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-wrap" }, [
      _c("div", { staticClass: "mr-auto pr-3 my-2" }, [
        _c("i", { staticClass: "fe fe-book font-size-21 mr-2" }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "text-nowrap d-inline-block font-size-18 text-dark" },
          [
            _c(
              "a",
              {
                staticClass: "font-size-18 text-blue",
                attrs: { href: "javascript: void(0);" }
              },
              [_vm._v("umijs")]
            ),
            _vm._v(" /\n        "),
            _c(
              "a",
              {
                staticClass: "font-size-18 text-blue",
                attrs: { href: "javascript: void(0);" }
              },
              [_vm._v("umi")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex flex-wrap font-size-16" }, [
        _c("div", { staticClass: "mr-3 my-2 text-nowrap" }, [
          _c("i", { staticClass: "fe fe-user-check font-size-21 mr-1" }),
          _vm._v("\n        Watch\n        "),
          _c("strong", { staticClass: "text-dark font-size-18 ml-1" }, [
            _vm._v("6,870")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mr-3 my-2 text-nowrap" }, [
          _c("i", { staticClass: "fe fe-star font-size-21 mr-1" }),
          _vm._v("\n        Star\n        "),
          _c("strong", { staticClass: "text-dark font-size-18 ml-1" }, [
            _vm._v("16,356")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mr-3 my-2 text-nowrap" }, [
          _c("i", { staticClass: "fe fe-copy font-size-21 mr-1" }),
          _vm._v("\n        Fork\n        "),
          _c("strong", { staticClass: "text-dark font-size-18 ml-1" }, [
            _vm._v("569")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-dark font-size-18 mb-3" }, [
      _vm._v(
        "\n    Pluggable enterprise-level react application framework.\n    "
      ),
      _c(
        "a",
        { staticClass: "text-blue", attrs: { href: "javascript: void(0);" } },
        [_vm._v("https://umijs.org/")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-4" }, [
      _c(
        "a",
        {
          staticClass:
            "badge text-blue text-uppercase bg-light font-size-12 mr-2",
          attrs: { href: "javascript: void(0);" }
        },
        [_vm._v("Umi")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass:
            "badge text-blue text-uppercase bg-light font-size-12 mr-2",
          attrs: { href: "javascript: void(0);" }
        },
        [_vm._v("React-framework")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass:
            "badge text-blue text-uppercase bg-light font-size-12 mr-2",
          attrs: { href: "javascript: void(0);" }
        },
        [_vm._v("Umijs")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "d-flex flex-wrap justify-content-around border-top border-bottom"
      },
      [
        _c("div", { staticClass: "mx-3 my-2 text-nowrap" }, [
          _c("i", {
            staticClass:
              "fe fe-arrow-down-right font-size-21 mr-1 align-text-top"
          }),
          _vm._v(" "),
          _c("strong", { staticClass: "text-dark font-size-18 mr-1" }, [
            _vm._v("2,128")
          ]),
          _vm._v("\n      commits\n    ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mx-3 my-2 text-nowrap" }, [
          _c("i", {
            staticClass: "fe fe-chevrons-down font-size-21 mr-1 align-text-top"
          }),
          _vm._v(" "),
          _c("strong", { staticClass: "text-dark font-size-18 mr-1" }, [
            _vm._v("18")
          ]),
          _vm._v("\n      branches\n    ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mx-3 my-2 text-nowrap" }, [
          _c("i", {
            staticClass: "fe fe-book-open font-size-21 mr-1 align-text-top"
          }),
          _vm._v(" "),
          _c("strong", { staticClass: "text-dark font-size-18 mr-1" }, [
            _vm._v("1,286")
          ]),
          _vm._v("\n      issues\n    ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mx-3 my-2 text-nowrap" }, [
          _c("i", {
            staticClass: "fe fe-users font-size-21 mr-1 align-text-top"
          }),
          _vm._v(" "),
          _c("strong", { staticClass: "text-dark font-size-18 mr-1" }, [
            _vm._v("26")
          ]),
          _vm._v("\n      contributes\n    ")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-flex align-items-center flex-wrap mb-4" },
      [
        _c(
          "a",
          {
            staticClass:
              "flex-shrink-0 d-flex align-items-center pr-3 mr-auto text-primary mt-1 mb-1",
            attrs: { href: "javascript: void(0);" }
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "kit__utils__avatar kit__utils__avatar--size27 mr-3 flex-shrink-0"
              },
              [
                _c("img", {
                  attrs: {
                    src: "resources/images/avatars/1.jpg",
                    alt: "sorrycc"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("div", [_vm._v("sorrycc")])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "mt-1 mb-1" }, [
          _vm._v("Latest commit ab2c07f 23 hours ago")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/apps/github-explore/data.json":
/*!***********************************************************!*\
  !*** ./resources/src/views/apps/github-explore/data.json ***!
  \***********************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"type\":\"folder\",\"name\":\"css\",\"info\":\"info about file\",\"time\":\"10 minutes ago\"},{\"type\":\"folder\",\"name\":\"font\",\"info\":\"info about file\",\"time\":\"18 minutes ago\"},{\"type\":\"folder\",\"name\":\"resources\",\"info\":\"info about file\",\"time\":\"18 minutes ago\"},{\"type\":\"folder\",\"name\":\"dist\",\"info\":\"info about file\",\"time\":\"8 minutes ago\"},{\"type\":\"folder\",\"name\":\"img\",\"info\":\"info about file\",\"time\":\"6 month ago\"},{\"type\":\"folder\",\"name\":\"js\",\"info\":\"info about file\",\"time\":\"3 month ago\"},{\"type\":\"file\",\"name\":\"Specification.md\",\"info\":\"info about file\",\"time\":\"3 month ago\"},{\"type\":\"file\",\"name\":\"Readme.md\",\"info\":\"info about file\",\"time\":\"3 month ago\"},{\"type\":\"file\",\"name\":\"index.html\",\"info\":\"info about file\",\"time\":\"3 month ago\"},{\"type\":\"file\",\"name\":\"text.html\",\"info\":\"info about file\",\"time\":\"3 month ago\"},{\"type\":\"file\",\"name\":\"gulp.js\",\"info\":\"info about file\",\"time\":\"3 month ago\"},{\"type\":\"file\",\"name\":\"autoload.php\",\"info\":\"info about file\",\"time\":\"3 month ago\"},{\"type\":\"file\",\"name\":\"bower.js\",\"info\":\"info about file\",\"time\":\"3 month ago\"},{\"type\":\"file\",\"name\":\"__exclude.js\",\"info\":\"info about file\",\"time\":\"3 month ago\"}]");

/***/ }),

/***/ "./resources/src/views/apps/github-explore/index.vue":
/*!***********************************************************!*\
  !*** ./resources/src/views/apps/github-explore/index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4675a456___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4675a456& */ "./resources/src/views/apps/github-explore/index.vue?vue&type=template&id=4675a456&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/views/apps/github-explore/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4675a456___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4675a456___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/apps/github-explore/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/apps/github-explore/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/src/views/apps/github-explore/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/github-explore/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/apps/github-explore/index.vue?vue&type=template&id=4675a456&":
/*!******************************************************************************************!*\
  !*** ./resources/src/views/apps/github-explore/index.vue?vue&type=template&id=4675a456& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4675a456___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4675a456& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/github-explore/index.vue?vue&type=template&id=4675a456&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4675a456___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4675a456___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);