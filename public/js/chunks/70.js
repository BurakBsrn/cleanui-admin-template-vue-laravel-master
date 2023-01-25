(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/wordpress-add/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/apps/wordpress-add/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_1__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_1__["quillEditor"]
  },
  data: function data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleChange: function handleChange(info) {
      var status = info.file.status;

      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }

      if (status === 'done') {
        this.$message.success("".concat(info.file.name, " file uploaded successfully."));
      } else if (status === 'error') {
        this.$message.error("".concat(info.file.name, " file upload failed."));
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/wordpress-add/index.vue?vue&type=template&id=26f04c92&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/apps/wordpress-add/index.vue?vue&type=template&id=26f04c92& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
          _c("a-form", { attrs: { form: _vm.form } }, [
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-6" },
                  [
                    _c(
                      "a-form-item",
                      { attrs: { label: "Title" } },
                      [
                        _c("a-input", {
                          directives: [
                            {
                              name: "decorator",
                              rawName: "v-decorator",
                              value: ["username"],
                              expression: "['username']"
                            }
                          ],
                          attrs: { placeholder: "Post Title" }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c(
                  "a-form-item",
                  { attrs: { label: "Type" } },
                  [
                    _c(
                      "a-checkbox-group",
                      {
                        directives: [
                          {
                            name: "decorator",
                            rawName: "v-decorator",
                            value: ["type", { initialValue: ["Text"] }],
                            expression: "['type', { initialValue: ['Text'] }]"
                          }
                        ],
                        attrs: { name: "radioGroup" }
                      },
                      [
                        _c("a-checkbox", { attrs: { value: "Text" } }, [
                          _vm._v("Text")
                        ]),
                        _vm._v(" "),
                        _c("a-checkbox", { attrs: { value: "Video" } }, [
                          _vm._v("Video")
                        ]),
                        _vm._v(" "),
                        _c("a-checkbox", { attrs: { value: "Image" } }, [
                          _vm._v("Image")
                        ]),
                        _vm._v(" "),
                        _c("a-checkbox", { attrs: { value: "Audio" } }, [
                          _vm._v("Audio")
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-6" },
                      [
                        _c(
                          "a-form-item",
                          { attrs: { label: "Category" } },
                          [
                            _c(
                              "a-select",
                              {
                                directives: [
                                  {
                                    name: "decorator",
                                    rawName: "v-decorator",
                                    value: [
                                      "category",
                                      { initialValue: ["lifestyle", "blog"] }
                                    ],
                                    expression:
                                      "['category', { initialValue: ['lifestyle', 'blog'] }]"
                                  }
                                ],
                                staticStyle: { width: "100%" },
                                attrs: {
                                  mode: "multiple",
                                  placeholder: "Please select tags"
                                }
                              },
                              [
                                _c(
                                  "a-select-option",
                                  { attrs: { value: "lifestyle" } },
                                  [_vm._v("Lifestyle")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a-select-option",
                                  { attrs: { value: "blog" } },
                                  [_vm._v("Blog")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a-select-option",
                                  { attrs: { value: "nature" } },
                                  [_vm._v("Nature")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a-select-option",
                                  { attrs: { value: "relax" } },
                                  [_vm._v("Relax")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a-select-option",
                                  { attrs: { value: "travel" } },
                                  [_vm._v("Travel")]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("a-form-item", { attrs: { label: "Content" } }, [
                      _c(
                        "div",
                        { staticClass: "height-250 mb-3" },
                        [
                          _c("quill-editor", {
                            staticStyle: { height: "200px" }
                          })
                        ],
                        1
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c(
                      "a-form-item",
                      [
                        _c(
                          "a-upload-dragger",
                          {
                            attrs: {
                              name: "file",
                              multiple: true,
                              action: "//jsonplaceholder.typicode.com/posts/"
                            },
                            on: { change: _vm.handleChange }
                          },
                          [
                            _c(
                              "p",
                              { staticClass: "ant-upload-drag-icon" },
                              [_c("a-icon", { attrs: { type: "inbox" } })],
                              1
                            ),
                            _vm._v(" "),
                            _c("p", { staticClass: "ant-upload-text" }, [
                              _vm._v(
                                "Click or drag file to this area to upload"
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "ant-upload-hint" }, [
                              _vm._v(
                                "\n                  Support for a single or bulk upload. Strictly prohibit from uploading\n                  company data or other band files\n                "
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("a-form-item", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success btn-with-addon text-nowrap",
                      attrs: { type: "submit" }
                    },
                    [
                      _c("span", { staticClass: "btn-addon" }, [
                        _c("i", {
                          staticClass: "btn-addon-icon fe fe-plus-circle"
                        })
                      ]),
                      _vm._v("\n              Add Post\n            ")
                    ]
                  )
                ])
              ],
              1
            )
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/apps/wordpress-add/index.vue":
/*!**********************************************************!*\
  !*** ./resources/src/views/apps/wordpress-add/index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_26f04c92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=26f04c92& */ "./resources/src/views/apps/wordpress-add/index.vue?vue&type=template&id=26f04c92&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/views/apps/wordpress-add/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_26f04c92___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_26f04c92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/apps/wordpress-add/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/apps/wordpress-add/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/src/views/apps/wordpress-add/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/wordpress-add/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/apps/wordpress-add/index.vue?vue&type=template&id=26f04c92&":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/apps/wordpress-add/index.vue?vue&type=template&id=26f04c92& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_26f04c92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=26f04c92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/wordpress-add/index.vue?vue&type=template&id=26f04c92&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_26f04c92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_26f04c92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);