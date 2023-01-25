(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/16/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/kit/widgets/General/16/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'KitGeneral16',
  props: ['isNew', 'isFavorite', 'image', 'name', 'price', 'oldPrice'],
  data: function data() {
    return {
      favorite: this.isFavorite
    };
  },
  methods: {
    toggleFavorite: function toggleFavorite(event) {
      event.preventDefault();
      this.favorite = !this.favorite;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/product-details/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/ecommerce/product-details/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ "./resources/src/views/ecommerce/product-details/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./resources/src/views/ecommerce/product-details/data.json", 1);
/* harmony import */ var _components_kit_widgets_General_16_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/kit/widgets/General/16/index */ "./resources/src/components/kit/widgets/General/16/index.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CuiGeneral16: _components_kit_widgets_General_16_index__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      data: _data_json__WEBPACK_IMPORTED_MODULE_0__,
      images: _data_json__WEBPACK_IMPORTED_MODULE_0__.images,
      favorite: true,
      activeImgIndex: 0
    };
  },
  methods: {
    toggleFavorite: function toggleFavorite(event) {
      event.preventDefault();
      this.favorite = !this.favorite;
    },
    setImage: function setImage(index) {
      event.preventDefault();
      this.activeImgIndex = index;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/16/index.vue?vue&type=style&index=0&lang=scss&module=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/kit/widgets/General/16/index.vue?vue&type=style&index=0&lang=scss&module=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: src/components/kit/core/mixins.scss.\n        on line 5 of resources/src/components/mixins.scss\n        from line 1 of resources/src/components/kit/widgets/General/16/style.module.scss\n        from line 49 of /Users/nick/Desktop/projects/cleanui-admin-template-vue-laravel/resources/src/components/kit/widgets/General/16/index.vue\n>> @import 'src/components/kit/core/mixins.scss'; // import KIT mixins\n\n   ^\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/product-details/index.vue?vue&type=style&index=0&lang=scss&module=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/ecommerce/product-details/index.vue?vue&type=style&index=0&lang=scss&module=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: src/components/kit/core/mixins.scss.\n        on line 5 of resources/src/components/mixins.scss\n        from line 1 of resources/src/views/ecommerce/product-details/style.module.scss\n        from line 131 of /Users/nick/Desktop/projects/cleanui-admin-template-vue-laravel/resources/src/views/ecommerce/product-details/index.vue\n>> @import 'src/components/kit/core/mixins.scss'; // import KIT mixins\n\n   ^\n");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/16/index.vue?vue&type=style&index=0&lang=scss&module=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/kit/widgets/General/16/index.vue?vue&type=style&index=0&lang=scss&module=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss&module=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/16/index.vue?vue&type=style&index=0&lang=scss&module=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/product-details/index.vue?vue&type=style&index=0&lang=scss&module=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/ecommerce/product-details/index.vue?vue&type=style&index=0&lang=scss&module=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss&module=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/product-details/index.vue?vue&type=style&index=0&lang=scss&module=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/16/index.vue?vue&type=template&id=a45fa424&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/kit/widgets/General/16/index.vue?vue&type=template&id=a45fa424& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card overflow-hidden" }, [
    _vm.isNew
      ? _c("div", { class: _vm.$style.new }, [_vm._v("\n    New\n  ")])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c(
        "a",
        {
          class: [
            _vm.$style.favorite,
            _vm.favorite ? "text-dark" : "text-gray-3"
          ],
          attrs: { href: "#" },
          on: { click: _vm.toggleFavorite }
        },
        [_c("i", { staticClass: "fe fe-heart font-size-21" })]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "border-bottom height-250 mb-3",
          class: _vm.$style.image
        },
        [
          _c("img", {
            staticClass: "img-fluid",
            attrs: { src: _vm.image, alt: _vm.name }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "font-size-24 font-weight-bold text-dark mb-2" },
        [
          _vm._v("\n      " + _vm._s(_vm.price) + "\n      "),
          _vm.oldPrice
            ? _c("del", { staticClass: "align-text-top font-size-14 mr-2" }, [
                _vm._v("\n        " + _vm._s(_vm.oldPrice) + "\n      ")
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", [
        _c(
          "a",
          {
            staticClass: "text-blue font-size-18",
            attrs: { href: "javascript:void(0);" }
          },
          [_vm._v("\n        " + _vm._s(_vm.name) + "\n      ")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/product-details/index.vue?vue&type=template&id=7a4099c4&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/ecommerce/product-details/index.vue?vue&type=template&id=7a4099c4& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card overflow-hidden" }, [
      _c("div", { class: _vm.$style.new }, [_vm._v("New")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-4" }, [
            _c(
              "a",
              {
                class: [
                  _vm.$style.favorite,
                  _vm.favorite ? "text-dark" : "text-gray-3"
                ],
                attrs: { href: "#" },
                on: { click: _vm.toggleFavorite }
              },
              [_c("i", { staticClass: "fe fe-heart font-size-21" })]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "height-250 mb-3", class: _vm.$style.image },
              [
                _c("img", {
                  attrs: { src: _vm.images[_vm.activeImgIndex], alt: "Product" }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex flex-wrap mb-3" },
              _vm._l(_vm.images, function(image, index) {
                return _c(
                  "a",
                  {
                    key: index,
                    staticClass: "width-100 height-100 border mr-2 mb-2",
                    class: [
                      index === _vm.activeImgIndex ? "border-primary" : "",
                      _vm.$style.thumb
                    ],
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        return _vm.setImage(index)
                      }
                    }
                  },
                  [_c("img", { attrs: { src: image, alt: "Product" } })]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-lg-8" },
            [
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-4 width-300" },
                [
                  _c(
                    "a-select",
                    {
                      staticStyle: { width: "100%" },
                      attrs: { defaultValue: "Red" }
                    },
                    [
                      _c("a-select-option", { attrs: { value: "red" } }, [
                        _vm._v("Red")
                      ]),
                      _vm._v(" "),
                      _c("a-select-option", { attrs: { value: "black" } }, [
                        _vm._v("Black")
                      ]),
                      _vm._v(" "),
                      _c("a-select-option", { attrs: { value: "cyan" } }, [
                        _vm._v("Cyan")
                      ]),
                      _vm._v(" "),
                      _c("a-select-option", { attrs: { value: "blue" } }, [
                        _vm._v("Blue")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _c(
                "a-tabs",
                {
                  staticClass: "kit-tabs-bordered",
                  attrs: { defaultActiveKey: "1" }
                },
                [
                  _c("a-tab-pane", { key: "1", attrs: { tab: "Information" } }),
                  _vm._v(" "),
                  _c("a-tab-pane", { key: "2", attrs: { tab: "Description" } })
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(4)
            ],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(5),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      _vm._l(_vm.data.products, function(product, index) {
        return _c(
          "div",
          { key: index, staticClass: "col-lg-4" },
          [
            _c("cui-general-16", {
              attrs: {
                isNew: product.isNew,
                isFavorite: product.isFavorite,
                image: product.image,
                name: product.name,
                price: product.price,
                oldPrice: product.oldPrice
              }
            })
          ],
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "cui__utils__heading" }, [
      _c("strong", [_vm._v("Ecommerce: Product Details")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "font-size-24 font-weight-bold text-dark mb-2" },
      [
        _vm._v("\n            $199.28\n            "),
        _c("del", { staticClass: "align-text-top font-size-14" }, [
          _vm._v("$299.28")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pb-3 mb-4 border-bottom" }, [
      _c(
        "a",
        {
          staticClass: "text-blue font-size-18",
          attrs: { href: "javascript:void(0);" }
        },
        [
          _vm._v(
            "\n              TP-Link AC1750 Smart WiFi Router - Dual\n              "
          ),
          _c("br"),
          _vm._v("Band Gigabit Wireless Internet Routers for\n              "),
          _c("br"),
          _vm._v("Home\n            ")
        ]
      )
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
          "width-200 btn btn-success btn-with-addon mr-auto mb-3 text-nowrap d-none d-md-block",
        attrs: { href: "javascript: void(0);" }
      },
      [
        _c("span", { staticClass: "btn-addon" }, [
          _c("i", { staticClass: "btn-addon-icon fe fe-plus-circle" })
        ]),
        _vm._v("\n            Add To Card\n          ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body px-0" }, [
      _c("p", [
        _vm._v(
          "\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n              Ipsum has been the industry's standard dummy text ever since the 1500s,\n              when an unknown printer took a galley of type and scrambled it to make a type\n              specimen book. It has survived not only five centuries, but also the leap into\n              electronic typesetting, remaining essentially unchanged.\n            "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n              Ipsum has been the industry's standard dummy text ever since the 1500s,\n              when an unknown printer took a galley of type.\n            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "cui__utils__heading" }, [
      _c("h5", [_vm._v("Related Products")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/components/kit/widgets/General/16/index.vue":
/*!*******************************************************************!*\
  !*** ./resources/src/components/kit/widgets/General/16/index.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _index_vue_vue_type_template_id_a45fa424___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a45fa424& */ "./resources/src/components/kit/widgets/General/16/index.vue?vue&type=template&id=a45fa424&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/components/kit/widgets/General/16/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss&module=true& */ "./resources/src/components/kit/widgets/General/16/index.vue?vue&type=style&index=0&lang=scss&module=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





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
  _index_vue_vue_type_template_id_a45fa424___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_a45fa424___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/kit/widgets/General/16/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/src/components/kit/widgets/General/16/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/src/components/kit/widgets/General/16/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/16/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/kit/widgets/General/16/index.vue?vue&type=style&index=0&lang=scss&module=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/src/components/kit/widgets/General/16/index.vue?vue&type=style&index=0&lang=scss&module=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss&module=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/16/index.vue?vue&type=style&index=0&lang=scss&module=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/src/components/kit/widgets/General/16/index.vue?vue&type=template&id=a45fa424&":
/*!**************************************************************************************************!*\
  !*** ./resources/src/components/kit/widgets/General/16/index.vue?vue&type=template&id=a45fa424& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a45fa424___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=a45fa424& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/16/index.vue?vue&type=template&id=a45fa424&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a45fa424___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a45fa424___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/ecommerce/product-details/data.json":
/*!*****************************************************************!*\
  !*** ./resources/src/views/ecommerce/product-details/data.json ***!
  \*****************************************************************/
/*! exports provided: images, products, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"images\":[\"resources/images/products/001.jpg\",\"resources/images/products/002.jpg\",\"resources/images/products/003.jpg\",\"resources/images/products/004.jpg\"],\"products\":[{\"isNew\":true,\"isFavorite\":false,\"image\":\"resources/images/products/001.jpg\",\"name\":\"TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Routers for Home\",\"price\":\"199.28\",\"oldPrice\":\"299.28\"},{\"isNew\":false,\"isFavorite\":true,\"image\":\"resources/images/products/002.jpg\",\"name\":\"TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Routers for Home\",\"price\":\"99.99\",\"oldPrice\":\"199.99\"},{\"isNew\":false,\"isFavorite\":false,\"image\":\"resources/images/products/003.jpg\",\"name\":\"TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Routers for Home\",\"price\":\"245.21\",\"oldPrice\":\"419.58\"}]}");

/***/ }),

/***/ "./resources/src/views/ecommerce/product-details/index.vue":
/*!*****************************************************************!*\
  !*** ./resources/src/views/ecommerce/product-details/index.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _index_vue_vue_type_template_id_7a4099c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7a4099c4& */ "./resources/src/views/ecommerce/product-details/index.vue?vue&type=template&id=7a4099c4&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/views/ecommerce/product-details/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss&module=true& */ "./resources/src/views/ecommerce/product-details/index.vue?vue&type=style&index=0&lang=scss&module=true&");
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
  _index_vue_vue_type_template_id_7a4099c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7a4099c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/ecommerce/product-details/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/src/views/ecommerce/product-details/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/src/views/ecommerce/product-details/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/product-details/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/ecommerce/product-details/index.vue?vue&type=style&index=0&lang=scss&module=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/src/views/ecommerce/product-details/index.vue?vue&type=style&index=0&lang=scss&module=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss&module=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/product-details/index.vue?vue&type=style&index=0&lang=scss&module=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/src/views/ecommerce/product-details/index.vue?vue&type=template&id=7a4099c4&":
/*!************************************************************************************************!*\
  !*** ./resources/src/views/ecommerce/product-details/index.vue?vue&type=template&id=7a4099c4& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7a4099c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7a4099c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/product-details/index.vue?vue&type=template&id=7a4099c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7a4099c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7a4099c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);