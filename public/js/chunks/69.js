(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/github-discuss/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/apps/github-discuss/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_0__);
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
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_0__["quillEditor"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/github-discuss/index.vue?vue&type=template&id=349b0ae2&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/apps/github-discuss/index.vue?vue&type=template&id=349b0ae2& ***!
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
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-9" }, [
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex align-items-start mb-3" }, [
            _vm._m(3),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card flex-grow-1" },
              [
                _c(
                  "a-tabs",
                  {
                    staticClass: "kit-tabs-bordered",
                    attrs: { defaultActiveKey: "1" }
                  },
                  [
                    _c("a-tab-pane", { key: "1", attrs: { tab: "Write" } }),
                    _vm._v(" "),
                    _c("a-tab-pane", { key: "2", attrs: { tab: "Preview" } })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "card-body py-2" }, [
                  _c(
                    "div",
                    { staticClass: "height-250 mb-3" },
                    [_c("quill-editor", { staticStyle: { height: "200px" } })],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(4)
                ])
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(5)
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
    return _c(
      "div",
      { staticClass: "d-flex flex-xs-wrap border-bottom pb-4 mb-4" },
      [
        _c("div", { staticClass: "mr-auto pr-3" }, [
          _c(
            "div",
            { staticClass: "text-dark font-size-24 font-weight-bold mb-2" },
            [
              _vm._v(
                "[Feature Request] How to enable custom font that comes from svg #2460"
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3" }, [
            _c(
              "span",
              { staticClass: "mr-3 text-uppercase badge badge-success" },
              [_vm._v("Open")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: { href: "javascript: void(0);" }
              },
              [_vm._v("zxs2162")]
            ),
            _vm._v(
              "\n        wrote this issue 12 days ago · 0 comments\n      "
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-success align-self-start text-nowrap",
            attrs: { href: "javascript: void(0);" }
          },
          [_vm._v("New Issue")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex align-items-start mb-3" }, [
      _c(
        "a",
        {
          staticClass:
            "kit__utils__avatar kit__utils__avatar--size50 mr-3 flex-shrink-0",
          attrs: { href: "javascript: void(0);" }
        },
        [
          _c("img", {
            attrs: {
              src: "resources/images/avatars/5.jpg",
              alt: "Mary Stanform"
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card flex-grow-1" }, [
        _c("div", { staticClass: "card-header" }, [
          _c(
            "a",
            {
              staticClass: "font-weight-bold",
              attrs: { href: "javascript: void(0);" }
            },
            [_vm._v("zxs2162")]
          ),
          _vm._v(
            " wrote this issue\n            12 days ago · 0 comments\n          "
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("h3", [_vm._v("Description")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n              Added child elements to the active text editor lose their scrollTop property when\n              they are scrolled out of view.\n            "
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n              Hydrogen a popular atom package adds a React Component inline to the text editor to\n              view results from external code execution through jupyter kernels.\n            "
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n              This React Component contains a standard div element (not an immediate child but\n              down the sub tree) that if their is enough output can scroll.\n            "
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n              If you scroll inside of the element and then scroll down the text editor for it to\n              fall out of view and be temporarily removed from the DOM. If you scroll back up that\n              scroll position inside the element is lost.\n            "
            )
          ]),
          _vm._v(" "),
          _c("h3", [_vm._v("Steps to Reproduce")]),
          _vm._v(" "),
          _c("ol", [
            _c("li", [_vm._v("Have hydrogen active and setup properly")]),
            _vm._v(" "),
            _c("li", [
              _vm._v("\n                Use\n                "),
              _c("code", [_vm._v("Run Cell")]),
              _vm._v(
                " command from hydrogen on the code below with about 50\n                extra new lines\n              "
              )
            ])
          ]),
          _vm._v(" "),
          _c("pre", [_c("code", [_vm._v("for i in range(1000): print(i)")])]),
          _vm._v(" "),
          _c("ol", { attrs: { start: "3" } }, [
            _c("li", [_vm._v("Scroll down the editor")]),
            _vm._v(" "),
            _c("li", [_vm._v("Scroll back up the editor")])
          ]),
          _vm._v(" "),
          _c("p", [
            _c("strong", [_vm._v("Expected behavior:")]),
            _vm._v(" Everything to look the same\n            ")
          ]),
          _vm._v(" "),
          _c("p", [
            _c("strong", [_vm._v("Actual behavior:")]),
            _vm._v(
              " Scroll top of the result view has been set to 0\n              upon removal and adding back to the active DOM\n            "
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _c("strong", [_vm._v("Reproduces how often:")]),
            _vm._v(" 100% of the time\n            ")
          ]),
          _vm._v(" "),
          _c("h3", [_vm._v("Versions")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n              You can get this information from copy and pasting the output of\n              "
            ),
            _c("code", [_vm._v("atom --version")]),
            _vm._v(" and\n              "),
            _c("code", [_vm._v("apm --version")]),
            _vm._v(
              " from the command line.\n              Also, please include the OS and what version of the OS you're running.\n            "
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v("\n              Atom : 1.37.0\n              "),
            _c("br"),
            _vm._v("Electron: 2.0.18\n              "),
            _c("br"),
            _vm._v("Chrome : 61.0.3163.100\n              "),
            _c("br"),
            _vm._v("Node : 8.9.3\n            ")
          ]),
          _vm._v(" "),
          _c("h3", [_vm._v("Additional Information")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n              This isnt platform specific either, and I don't believe its a hydrogen problem.\n              "
            ),
            _c("br"),
            _vm._v(
              "I believe this is a problem with how etch processes the render of React Components\n              or how it stores html nodes when removing them. But I understand its more complex\n              than that.\n            "
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "kit__utils__avatar kit__utils__avatar--size50 mr-3 flex-shrink-0",
        attrs: { href: "javascript: void(0);" }
      },
      [
        _c("img", {
          attrs: { src: "resources/images/avatars/5.jpg", alt: "Mary Stanform" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-success btn-with-addon text-nowrap my-3",
        attrs: { href: "javascript: void(0);" }
      },
      [
        _c("span", { staticClass: "btn-addon" }, [
          _c("i", { staticClass: "btn-addon-icon fe fe-plus-circle" })
        ]),
        _vm._v("\n              Add Comment\n            ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3" }, [
      _c("div", { staticClass: "py-4 border-bottom" }, [
        _c("div", { staticClass: "font-weight-bold mb-2" }, [
          _vm._v("Assignees")
        ]),
        _vm._v(" "),
        _c("div", [_vm._v("No one assigned")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py-4 border-bottom" }, [
        _c("div", { staticClass: "font-weight-bold mb-2" }, [_vm._v("Labels")]),
        _vm._v(" "),
        _c("div", [_vm._v("None yet")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py-4 border-bottom" }, [
        _c("div", { staticClass: "font-weight-bold mb-2" }, [
          _vm._v("Projects")
        ]),
        _vm._v(" "),
        _c("div", [_vm._v("None yet")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py-4 border-bottom" }, [
        _c("div", { staticClass: "font-weight-bold mb-2" }, [
          _vm._v("Milestone")
        ]),
        _vm._v(" "),
        _c("div", [_vm._v("No milestone")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py-4 border-bottom" }, [
        _c("div", { staticClass: "font-weight-bold mb-2" }, [
          _vm._v("Notifications")
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-light text-blue mb-2",
            attrs: { href: "javascript: void(0);" }
          },
          [_vm._v("Subscribe")]
        ),
        _vm._v(" "),
        _c("div", [
          _vm._v("You’re not receiving notifications from this thread.")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py-4" }, [
        _c("div", { staticClass: "font-weight-bold mb-2" }, [
          _vm._v("4 participants")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "kit__utils__avatarGroup mb-3" }, [
          _c(
            "div",
            { staticClass: "kit__utils__avatar kit__utils__avatar--size46" },
            [
              _c("img", {
                attrs: { src: "resources/images/avatars/1.jpg", alt: "User 1" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "kit__utils__avatar kit__utils__avatar--size46" },
            [
              _c("img", {
                attrs: { src: "resources/images/avatars/2.jpg", alt: "User 2" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "kit__utils__avatar kit__utils__avatar--size46" },
            [
              _c("img", {
                attrs: { src: "resources/images/avatars/3.jpg", alt: "User 3" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "kit__utils__avatar kit__utils__avatar--size46" },
            [
              _c("img", {
                attrs: { src: "resources/images/avatars/4.jpg", alt: "User 4" }
              })
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/apps/github-discuss/index.vue":
/*!***********************************************************!*\
  !*** ./resources/src/views/apps/github-discuss/index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_349b0ae2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=349b0ae2& */ "./resources/src/views/apps/github-discuss/index.vue?vue&type=template&id=349b0ae2&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/views/apps/github-discuss/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_349b0ae2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_349b0ae2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/apps/github-discuss/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/apps/github-discuss/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/src/views/apps/github-discuss/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/github-discuss/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/apps/github-discuss/index.vue?vue&type=template&id=349b0ae2&":
/*!******************************************************************************************!*\
  !*** ./resources/src/views/apps/github-discuss/index.vue?vue&type=template&id=349b0ae2& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_349b0ae2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=349b0ae2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/github-discuss/index.vue?vue&type=template&id=349b0ae2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_349b0ae2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_349b0ae2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);