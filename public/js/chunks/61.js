(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/cart/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/ecommerce/cart/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./resources/src/views/ecommerce/cart/data.json");
var _data__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data */ "./resources/src/views/ecommerce/cart/data.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var columns = [{
  title: '#',
  dataIndex: 'number'
}, {
  title: 'Description',
  dataIndex: 'description',
  scopedSlots: {
    customRender: 'description'
  }
}, {
  title: 'Quantity',
  dataIndex: 'quantity',
  scopedSlots: {
    customRender: 'quantity'
  },
  "class": 'text-right'
}, {
  title: 'Unit Cost',
  dataIndex: 'unitcost',
  "class": 'text-right'
}, {
  title: 'Total',
  dataIndex: 'total',
  "class": 'text-right'
}, {
  title: '',
  dataIndex: '',
  "class": 'text-right',
  scopedSlots: {
    customRender: 'actions'
  }
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      data: _data__WEBPACK_IMPORTED_MODULE_0__,
      columns: columns,
      form: this.$form.createForm(this)
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/cart/index.vue?vue&type=template&id=a62ed1d4&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/ecommerce/cart/index.vue?vue&type=template&id=a62ed1d4& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mb-4" },
            [
              _c(
                "a-table",
                {
                  attrs: {
                    columns: _vm.columns,
                    dataSource: _vm.data,
                    pagination: false
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "description",
                      fn: function(text) {
                        return _c(
                          "a",
                          {
                            staticClass: "btn btn-sm btn-light",
                            attrs: { href: "javascript: void(0);" }
                          },
                          [_vm._v(_vm._s(text))]
                        )
                      }
                    },
                    {
                      key: "quantity",
                      fn: function(value) {
                        return _c("a-input-number", {
                          attrs: { size: "small", min: 1, defaultValue: +value }
                        })
                      }
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-sm btn-light",
                      attrs: { slot: "actions", href: "javascript: void(0);" },
                      slot: "actions"
                    },
                    [
                      _c("i", { staticClass: "fe fe-trash mr-1" }),
                      _vm._v(" Remove\n          ")
                    ]
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("a-form", { attrs: { form: _vm.form } }, [
            _c("div", { staticClass: "row mb-4" }, [
              _c("div", { staticClass: "col-md-8" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-6" },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Email" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "email",
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message: "Please input your Email!"
                                      }
                                    ]
                                  }
                                ],
                                expression:
                                  "['email', {rules: [{required: true, message: 'Please input your Email!'}]}]"
                              }
                            ],
                            attrs: { placeholder: "Email" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-6" },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Phone Number" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "phoneNumber",
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message:
                                          "Please input your Phone Number!"
                                      }
                                    ]
                                  }
                                ],
                                expression:
                                  "['phoneNumber', {rules: [{required: true, message: 'Please input your Phone Number!'}]}]"
                              }
                            ],
                            attrs: { placeholder: "Phone Number" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-6" },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Name" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "name",
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message: "Please input your Name!"
                                      }
                                    ]
                                  }
                                ],
                                expression:
                                  "['name', {rules: [{required: true, message: 'Please input your Name!'}]}]"
                              }
                            ],
                            attrs: { placeholder: "Name" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-6" },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Surname" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "surname",
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message: "Please input your Surname!"
                                      }
                                    ]
                                  }
                                ],
                                expression:
                                  "['surname', {rules: [{required: true, message: 'Please input your Surname!'}]}]"
                              }
                            ],
                            attrs: { placeholder: "Surname" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-12" },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "City" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "city",
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message: "Please input your City!"
                                      }
                                    ]
                                  }
                                ],
                                expression:
                                  "['city', {rules: [{required: true, message: 'Please input your City!'}]}]"
                              }
                            ],
                            attrs: { placeholder: "City" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-12 mb-3" },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Adress" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "city",
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message: "Please input your Adress!"
                                      }
                                    ]
                                  }
                                ],
                                expression:
                                  "['city', {rules: [{required: true, message: 'Please input your Adress!'}]}]"
                              }
                            ],
                            attrs: { placeholder: "Adress" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "mb-4 text-uppercase" }, [
                  _c("strong", [_vm._v("Payment details")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-12" },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Card Number" } },
                        [
                          _c(
                            "a-input",
                            {
                              directives: [
                                {
                                  name: "decorator",
                                  rawName: "v-decorator",
                                  value: [
                                    "curdnum",
                                    {
                                      rules: [
                                        {
                                          required: true,
                                          message:
                                            "Please input your Card Number!"
                                        }
                                      ]
                                    }
                                  ],
                                  expression:
                                    "['curdnum', {rules: [{required: true, message: 'Please input your Card Number!'}]}]"
                                }
                              ],
                              attrs: { placeholder: "Card Number" }
                            },
                            [
                              _c("a-icon", {
                                attrs: {
                                  slot: "addonBefore",
                                  type: "credit-card"
                                },
                                slot: "addonBefore"
                              })
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
                    "div",
                    { staticClass: "col-md-7" },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Expiration Date" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "expirationdate",
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message:
                                          "Please input Card Expiration Date!"
                                      }
                                    ]
                                  }
                                ],
                                expression:
                                  "['expirationdate', {rules: [{required: true, message: 'Please input Card Expiration Date!'}]}]"
                              }
                            ],
                            attrs: { placeholder: "Surname" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-5" },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Card CVC" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "cardcvc",
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message: "Please input Card CVC!"
                                      }
                                    ]
                                  }
                                ],
                                expression:
                                  "['cardcvc', {rules: [{required: true, message: 'Please input Card CVC!'}]}]"
                              }
                            ],
                            attrs: { placeholder: "CVC" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-12" },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Card Holder Name" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "cardholdername",
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message:
                                          "Please input Card Holder Name!"
                                      }
                                    ]
                                  }
                                ],
                                expression:
                                  "['cardholdername', {rules: [{required: true, message: 'Please input Card Holder Name!'}]}]"
                              }
                            ],
                            attrs: { placeholder: "Name and Surname" }
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
              _c("div", { staticClass: "col-md-4" }, [
                _c("h4", { staticClass: "text-black mb-3" }, [
                  _c("strong", [_vm._v("General Info")])
                ]),
                _vm._v(" "),
                _c("h2", [
                  _c("i", { staticClass: "fa fa-cc-visa text-primary mr-1" }),
                  _vm._v(" "),
                  _c("i", {
                    staticClass: "fa fa-cc-mastercard text-default mr-1"
                  }),
                  _vm._v(" "),
                  _c("i", { staticClass: "fa fa-cc-amex text-default" })
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n              incididunt ut labore et dolore magna aliqua.\n            "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n              ex ea commodo consequat.\n            "
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _vm._m(3)
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "cui__utils__heading" }, [
      _c("strong", [_vm._v("Ecommerce: Cart")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "mb-4 text-uppercase" }, [
      _c("strong", [_vm._v("Order items")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "mb-4 text-uppercase" }, [
      _c("strong", [_vm._v("Shipment details")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "border-top text-dark font-size-18 pt-4 text-right" },
      [
        _c("p", { staticClass: "mb-1" }, [
          _vm._v("\n          Sub - Total amount:\n          "),
          _c("strong", { staticClass: "font-size-24" }, [_vm._v("$5,700.00")])
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "mb-1" }, [
          _vm._v("\n          VAT:\n          "),
          _c("strong", { staticClass: "font-size-24" }, [_vm._v("$57.00")])
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "mb-4" }, [
          _vm._v("\n          Grand Total:\n          "),
          _c("strong", { staticClass: "font-size-36" }, [_vm._v("$5,757.00")])
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-lg btn-success width-200 mb-2",
            attrs: { href: "javascript: void(0);" }
          },
          [_vm._v("Order Now")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/ecommerce/cart/data.json":
/*!******************************************************!*\
  !*** ./resources/src/views/ecommerce/cart/data.json ***!
  \******************************************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"key\":\"1\",\"number\":\"1\",\"description\":\"Server hardware purchase\",\"quantity\":\"35\",\"unitcost\":\"$75.00\",\"total\":\"$2,152.00\"},{\"key\":\"2\",\"number\":\"2\",\"description\":\"Office furniture purchase\",\"quantity\":\"21\",\"unitcost\":\"$169.00\",\"total\":\"$4,169.00\"},{\"key\":\"3\",\"number\":\"3\",\"description\":\"Company Anual Dinner Catering\",\"quantity\":\"58\",\"unitcost\":\"$49.00\",\"total\":\"$1,260.00\"},{\"key\":\"4\",\"number\":\"4\",\"description\":\"Payment for Jan 2016\",\"quantity\":\"231\",\"unitcost\":\"$12.00\",\"total\":\"$866.00\"}]");

/***/ }),

/***/ "./resources/src/views/ecommerce/cart/index.vue":
/*!******************************************************!*\
  !*** ./resources/src/views/ecommerce/cart/index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_a62ed1d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a62ed1d4& */ "./resources/src/views/ecommerce/cart/index.vue?vue&type=template&id=a62ed1d4&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/views/ecommerce/cart/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_a62ed1d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_a62ed1d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/ecommerce/cart/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/ecommerce/cart/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/src/views/ecommerce/cart/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/cart/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/ecommerce/cart/index.vue?vue&type=template&id=a62ed1d4&":
/*!*************************************************************************************!*\
  !*** ./resources/src/views/ecommerce/cart/index.vue?vue&type=template&id=a62ed1d4& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a62ed1d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=a62ed1d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/cart/index.vue?vue&type=template&id=a62ed1d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a62ed1d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a62ed1d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);