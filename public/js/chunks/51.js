(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/orders/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/ecommerce/orders/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.json */ "./resources/src/views/ecommerce/orders/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./resources/src/views/ecommerce/orders/data.json", 1);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  title: 'ID',
  dataIndex: 'id',
  scopedSlots: {
    customRender: 'id'
  },
  sorter: function sorter(a, b) {
    return a.id - b.id;
  }
}, {
  title: 'Purchase Date',
  dataIndex: 'date'
}, {
  title: 'Customer',
  dataIndex: 'customer',
  sorter: function sorter(a, b) {
    return a.customer.length - b.customer.length;
  },
  scopedSlots: {
    filterDropdown: 'filterDropdown',
    filterIcon: 'filterIcon',
    customRender: 'customer'
  },
  onFilter: function onFilter(value, record) {
    return record.customer.toLowerCase().includes(value.toLowerCase());
  }
}, {
  title: 'Grand Total',
  dataIndex: 'total',
  sorter: function sorter(a, b) {
    return a.total - b.total;
  },
  scopedSlots: {
    customRender: 'total'
  }
}, {
  title: 'Tax',
  dataIndex: 'tax',
  sorter: function sorter(a, b) {
    return a.tax - b.tax;
  },
  scopedSlots: {
    customRender: 'tax'
  }
}, {
  title: 'Shipping',
  dataIndex: 'shipping',
  sorter: function sorter(a, b) {
    return a.shipping - b.shipping;
  },
  scopedSlots: {
    customRender: 'shipping'
  }
}, {
  title: 'Quantity',
  dataIndex: 'quantity',
  sorter: function sorter(a, b) {
    return a.quantity - b.quantity;
  }
}, {
  title: 'Status',
  dataIndex: 'status',
  sorter: function sorter(a, b) {
    return a.status.length - b.status.length;
  },
  scopedSlots: {
    customRender: 'status'
  }
}, {
  title: 'Action',
  scopedSlots: {
    customRender: 'action'
  }
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      searchText: '',
      searchInput: null,
      data: _data_json__WEBPACK_IMPORTED_MODULE_2__,
      columns: columns
    };
  },
  methods: {
    handleSearch: function handleSearch(selectedKeys, confirm) {
      confirm();
      this.searchText = selectedKeys[0];
    },
    handleReset: function handleReset(clearFilters) {
      clearFilters();
      this.searchText = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/orders/index.vue?vue&type=style&index=0&id=6ba2fc4a&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/ecommerce/orders/index.vue?vue&type=style&index=0&id=6ba2fc4a&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.custom-filter-dropdown[data-v-6ba2fc4a] {\n  padding: 8px;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.highlight[data-v-6ba2fc4a] {\n  background-color: rgb(255, 192, 105);\n  padding: 0px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/orders/index.vue?vue&type=style&index=0&id=6ba2fc4a&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/ecommerce/orders/index.vue?vue&type=style&index=0&id=6ba2fc4a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=6ba2fc4a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/orders/index.vue?vue&type=style&index=0&id=6ba2fc4a&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/orders/index.vue?vue&type=template&id=6ba2fc4a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/ecommerce/orders/index.vue?vue&type=template&id=6ba2fc4a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _vm._m(1),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c(
            "a-table",
            {
              attrs: { columns: _vm.columns, dataSource: _vm.data },
              scopedSlots: _vm._u([
                {
                  key: "filterDropdown",
                  fn: function(ref) {
                    var setSelectedKeys = ref.setSelectedKeys
                    var selectedKeys = ref.selectedKeys
                    var confirm = ref.confirm
                    var clearFilters = ref.clearFilters
                    var column = ref.column
                    return _c(
                      "div",
                      { staticClass: "custom-filter-dropdown" },
                      [
                        _c("a-input", {
                          directives: [
                            {
                              name: "ant-ref",
                              rawName: "v-ant-ref",
                              value: function(c) {
                                return (_vm.searchInput = c)
                              },
                              expression: "c => searchInput = c"
                            }
                          ],
                          staticStyle: {
                            width: "188px",
                            "margin-bottom": "8px",
                            display: "block"
                          },
                          attrs: {
                            placeholder: "Search " + column.dataIndex,
                            value: selectedKeys[0]
                          },
                          on: {
                            change: function(e) {
                              return setSelectedKeys(
                                e.target.value ? [e.target.value] : []
                              )
                            },
                            pressEnter: function() {
                              return _vm.handleSearch(selectedKeys, confirm)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "a-button",
                          {
                            staticStyle: {
                              width: "90px",
                              "margin-right": "8px"
                            },
                            attrs: { type: "primary", size: "small" },
                            on: {
                              click: function() {
                                return _vm.handleSearch(selectedKeys, confirm)
                              }
                            }
                          },
                          [_vm._v("Search")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-button",
                          {
                            staticStyle: { width: "90px" },
                            attrs: { size: "small" },
                            on: {
                              click: function() {
                                return _vm.handleReset(clearFilters)
                              }
                            }
                          },
                          [_vm._v("Reset")]
                        )
                      ],
                      1
                    )
                  }
                },
                {
                  key: "filterIcon",
                  fn: function(filtered) {
                    return _c("a-icon", {
                      style: { color: filtered ? "#108ee9" : undefined },
                      attrs: { type: "search" }
                    })
                  }
                },
                {
                  key: "customer",
                  fn: function(text) {
                    return [
                      _vm.searchText
                        ? _c(
                            "span",
                            [
                              _vm._l(
                                text
                                  .toString()
                                  .split(
                                    new RegExp(
                                      "(?<=" +
                                        _vm.searchText +
                                        ")|(?=" +
                                        _vm.searchText +
                                        ")",
                                      "i"
                                    )
                                  ),
                                function(fragment, i) {
                                  return [
                                    fragment.toLowerCase() ===
                                    _vm.searchText.toLowerCase()
                                      ? _c(
                                          "mark",
                                          { key: i, staticClass: "highlight" },
                                          [_vm._v(_vm._s(fragment))]
                                        )
                                      : [_vm._v(_vm._s(fragment))]
                                  ]
                                }
                              )
                            ],
                            2
                          )
                        : [
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-sm btn-light",
                                attrs: { href: "javascript: void(0);" }
                              },
                              [_vm._v(_vm._s(text))]
                            )
                          ]
                    ]
                  }
                },
                {
                  key: "progress",
                  fn: function(bar) {
                    return [
                      _c("div", { staticClass: "progress" }, [
                        _c("div", {
                          class: ["progress-bar", bar.color],
                          style: { width: bar.value + "%" },
                          attrs: { role: "progressbar" }
                        })
                      ])
                    ]
                  }
                },
                {
                  key: "value",
                  fn: function(text) {
                    return [
                      _c("span", { staticClass: "font-weight-bold" }, [
                        _vm._v(_vm._s(text))
                      ])
                    ]
                  }
                },
                {
                  key: "id",
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
                  key: "total",
                  fn: function(text) {
                    return _c("span", {}, [_vm._v("$" + _vm._s(text))])
                  }
                },
                {
                  key: "tax",
                  fn: function(text) {
                    return _c("span", {}, [_vm._v("$" + _vm._s(text))])
                  }
                },
                {
                  key: "shipping",
                  fn: function(text) {
                    return _c("span", {}, [_vm._v("$" + _vm._s(text))])
                  }
                },
                {
                  key: "status",
                  fn: function(text) {
                    return _c(
                      "span",
                      {
                        class: [
                          text === "Processing"
                            ? "font-size-12 badge badge-primary"
                            : "font-size-12 badge badge-default"
                        ]
                      },
                      [_vm._v(_vm._s(text))]
                    )
                  }
                }
              ])
            },
            [
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _c("span", { attrs: { slot: "action" }, slot: "action" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-sm btn-light mr-2",
                    attrs: { href: "javascript: void(0);" }
                  },
                  [
                    _c("i", { staticClass: "fe fe-edit mr-2" }),
                    _vm._v("\n            View\n          ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-sm btn-light",
                    attrs: { href: "javascript: void(0);" }
                  },
                  [
                    _c("small", [_c("i", { staticClass: "fe fe-trash mr-2" })]),
                    _vm._v("\n            Remove\n          ")
                  ]
                )
              ])
            ]
          )
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
      _c("strong", [_vm._v("Ecommerce: Orders")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header card-header-flex" }, [
      _c(
        "div",
        { staticClass: "d-flex flex-column justify-content-center mr-auto" },
        [_c("h5", { staticClass: "mb-0" }, [_vm._v("Latest Orders")])]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex flex-column justify-content-center" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-primary",
            attrs: { href: "javascript: void(0);" }
          },
          [_vm._v("New Order")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/ecommerce/orders/data.json":
/*!********************************************************!*\
  !*** ./resources/src/views/ecommerce/orders/data.json ***!
  \********************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":2412,\"key\":\"1\",\"date\":\"2014/06/13\",\"customer\":\"Damon\",\"total\":56,\"tax\":5.6,\"shipping\":10,\"quantity\":85,\"status\":\"Processing\"},{\"id\":3234,\"key\":\"2\",\"date\":\"2013/09/27\",\"customer\":\"Miracle\",\"total\":63.4,\"tax\":6.34,\"shipping\":0,\"quantity\":263,\"status\":\"Complete\"},{\"id\":7821,\"key\":\"3\",\"date\":\"2013/06/28\",\"customer\":\"Torrey\",\"total\":452,\"tax\":45.2,\"shipping\":10,\"quantity\":136,\"status\":\"Complete\"},{\"id\":2412,\"key\":\"4\",\"date\":\"2013/05/28\",\"customer\":\"Hubert\",\"total\":62,\"tax\":6.2,\"shipping\":34,\"quantity\":362,\"status\":\"Processing\"},{\"id\":2412,\"key\":\"5\",\"date\":\"2014/06/13\",\"customer\":\"Damon\",\"total\":56,\"tax\":5.6,\"shipping\":10,\"quantity\":85,\"status\":\"Processing\"},{\"id\":3234,\"key\":\"6\",\"date\":\"2013/09/27\",\"customer\":\"Miracle\",\"total\":63.4,\"tax\":6.34,\"shipping\":0,\"quantity\":263,\"status\":\"Complete\"},{\"id\":7821,\"key\":\"7\",\"date\":\"2013/06/28\",\"customer\":\"Torrey\",\"total\":452,\"tax\":45.2,\"shipping\":10,\"quantity\":136,\"status\":\"Complete\"},{\"id\":2412,\"key\":\"8\",\"date\":\"2013/05/28\",\"customer\":\"Hubert\",\"total\":62,\"tax\":6.2,\"shipping\":34,\"quantity\":362,\"status\":\"Processing\"},{\"id\":2412,\"key\":\"9\",\"date\":\"2014/06/13\",\"customer\":\"Damon\",\"total\":56,\"tax\":5.6,\"shipping\":10,\"quantity\":85,\"status\":\"Processing\"},{\"id\":3234,\"key\":\"10\",\"date\":\"2013/09/27\",\"customer\":\"Miracle\",\"total\":63.4,\"tax\":6.34,\"shipping\":0,\"quantity\":263,\"status\":\"Complete\"},{\"id\":7821,\"key\":\"11\",\"date\":\"2013/06/28\",\"customer\":\"Torrey\",\"total\":452,\"tax\":45.2,\"shipping\":10,\"quantity\":136,\"status\":\"Complete\"},{\"id\":2412,\"key\":\"12\",\"date\":\"2013/05/28\",\"customer\":\"Hubert\",\"total\":62,\"tax\":6.2,\"shipping\":34,\"quantity\":362,\"status\":\"Processing\"}]");

/***/ }),

/***/ "./resources/src/views/ecommerce/orders/index.vue":
/*!********************************************************!*\
  !*** ./resources/src/views/ecommerce/orders/index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_6ba2fc4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6ba2fc4a&scoped=true& */ "./resources/src/views/ecommerce/orders/index.vue?vue&type=template&id=6ba2fc4a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/views/ecommerce/orders/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_6ba2fc4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=6ba2fc4a&scoped=true&lang=css& */ "./resources/src/views/ecommerce/orders/index.vue?vue&type=style&index=0&id=6ba2fc4a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6ba2fc4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_6ba2fc4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6ba2fc4a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/ecommerce/orders/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/ecommerce/orders/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/src/views/ecommerce/orders/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/orders/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/ecommerce/orders/index.vue?vue&type=style&index=0&id=6ba2fc4a&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/src/views/ecommerce/orders/index.vue?vue&type=style&index=0&id=6ba2fc4a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6ba2fc4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=6ba2fc4a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/orders/index.vue?vue&type=style&index=0&id=6ba2fc4a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6ba2fc4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6ba2fc4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6ba2fc4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6ba2fc4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6ba2fc4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/src/views/ecommerce/orders/index.vue?vue&type=template&id=6ba2fc4a&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/src/views/ecommerce/orders/index.vue?vue&type=template&id=6ba2fc4a&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6ba2fc4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6ba2fc4a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/orders/index.vue?vue&type=template&id=6ba2fc4a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6ba2fc4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6ba2fc4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);