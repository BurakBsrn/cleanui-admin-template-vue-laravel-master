(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/digitalocean-create/index.vue?vue&type=template&id=36397d6d&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/apps/digitalocean-create/index.vue?vue&type=template&id=36397d6d& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
          _c("a-tab-pane", { key: "1", attrs: { tab: "Resources" } }),
          _vm._v(" "),
          _c("a-tab-pane", { key: "2", attrs: { tab: "Activity" } }),
          _vm._v(" "),
          _c("a-tab-pane", { key: "3", attrs: { tab: "Settings" } })
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
      _vm._m(4),
      _vm._v(" "),
      _vm._m(5),
      _vm._v(" "),
      _vm._m(6),
      _vm._v(" "),
      _c("p", { staticClass: "mb-4" }, [
        _vm._v(
          "\n    Automatic system-level backups. Use the backup images to revert the server or create new\n    Droplets. Backups cost 20% of the Droplet price.\n  "
        )
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass:
            "btn btn-light btn-lg text-primary font-size-14 d-inline-block mb-5",
          attrs: { href: "javascript: void(0);" }
        },
        [_vm._v("Enable Backups")]
      ),
      _vm._v(" "),
      _vm._m(7),
      _vm._v(" "),
      _c("p", { staticClass: "mb-4" }, [
        _vm._v(
          "\n    Block storage lets you add independent storage volumes that can be accessed like local disk\n    and moved from one Droplet to another within the same region.\n  "
        )
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass:
            "btn btn-light btn-lg text-primary font-size-14 d-inline-block mb-5 text-primary",
          attrs: { href: "javascript: void(0);" }
        },
        [_vm._v("Add Volume")]
      ),
      _vm._v(" "),
      _vm._m(8),
      _vm._v(" "),
      _c("p", { staticClass: "mb-4" }, [
        _vm._v(
          "\n    Block storage lets you add independent storage volumes that can be accessed like local disk\n    and moved from one Droplet to another within the same region.\n  "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-5" },
          [
            _c("a-input", {
              staticClass: "width-100p mb-5",
              attrs: { placeholder: "Please enter droplet hostname..." }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-lg btn-success width-100p font-size-16",
          attrs: { href: "javascript: void(0);" }
        },
        [_vm._v("Create Droplet")]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-wrap align-items-center" }, [
      _c(
        "div",
        {
          staticClass:
            "kit__utils__avatar kit__utils__avatar--size64 flex-shrink-0 mr-5 mb-3"
        },
        [
          _c("img", {
            attrs: {
              src: "resources/images/avatars/2.jpg",
              alt: "Mary Stanform"
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "mr-auto mb-3" }, [
        _c("div", { staticClass: "text-dark font-weight-bold font-size-24" }, [
          _c("span", { staticClass: "mr-3" }, [_vm._v("Mediatec Software")]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass:
                "align-middle text-primary text-uppercase font-size-12 badge badge-light"
            },
            [_vm._v("Default")]
          )
        ]),
        _vm._v(" "),
        _c("div", [
          _vm._v(
            "Operational / Developer tooling / Update your project information under Settings"
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-light btn-lg text-blue font-size-14",
          attrs: { href: "javascript: void(0);" }
        },
        [_vm._v("Move Resources →")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "mb-4 text-uppercase" }, [
      _c("strong", [_vm._v("Choose an image")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row mb-5" }, [
      _c("div", { staticClass: "col-md-3 col-sm-6 col-xs-12" }, [
        _c("div", { staticClass: "card text-center" }, [
          _c("div", { staticClass: "card-header pt-3 pb-3" }, [
            _c(
              "div",
              { staticClass: "text-uppercase text-dark font-weight-bold" },
              [_vm._v("Ubuntu")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body pt-3 pb-3" }, [
            _c("div", { staticClass: "text-center text-gray-5" }, [
              _vm._v("18.04 x86")
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3 col-sm-6 col-xs-12" }, [
        _c("div", { staticClass: "card text-center bg-light border-blue" }, [
          _c("div", { staticClass: "card-header pt-3 pb-3" }, [
            _c(
              "div",
              { staticClass: "text-uppercase text-dark font-weight-bold" },
              [_vm._v("Freebsd")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body pt-3 pb-3" }, [
            _c("div", { staticClass: "text-center text-gray-5" }, [
              _vm._v("18.04 x86")
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3 col-sm-6 col-xs-12" }, [
        _c("div", { staticClass: "card text-center" }, [
          _c("div", { staticClass: "card-header pt-3 pb-3" }, [
            _c(
              "div",
              { staticClass: "text-uppercase text-dark font-weight-bold" },
              [_vm._v("Fedora")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body pt-3 pb-3" }, [
            _c("div", { staticClass: "text-center text-gray-5" }, [
              _vm._v("18.04 x86")
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3 col-sm-6 col-xs-12" }, [
        _c("div", { staticClass: "card text-center" }, [
          _c("div", { staticClass: "card-header pt-3 pb-3" }, [
            _c(
              "div",
              { staticClass: "text-uppercase text-dark font-weight-bold" },
              [_vm._v("Debian")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body pt-3 pb-3" }, [
            _c("div", { staticClass: "text-center text-gray-5" }, [
              _vm._v("18.04 x86")
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "mb-4 text-uppercase" }, [
      _c("strong", [_vm._v("Choose plan")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "card bg-light border-blue" }, [
          _c("div", { staticClass: "card-body pt-3 pb-3" }, [
            _c(
              "div",
              { staticClass: "text-uppercase text-dark font-weight-bold" },
              [_vm._v("Starter")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "text-center text-blue" }, [
              _c("div", { staticClass: "font-weight-bold font-size-24" }, [
                _vm._v("Standard Plan")
              ]),
              _vm._v(" "),
              _c("div", [_vm._v("$0.060 /hour")])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body pt-3 pb-3" }, [
            _c(
              "div",
              { staticClass: "text-uppercase text-dark font-weight-bold" },
              [_vm._v("Performance")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "text-center text-blue" }, [
              _c("div", { staticClass: "font-weight-bold font-size-24" }, [
                _vm._v("General Purpose")
              ]),
              _vm._v(" "),
              _c("div", [_vm._v("$0.060 /hour")])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body pt-3 pb-3" }, [
            _c(
              "div",
              { staticClass: "text-uppercase text-dark font-weight-bold" },
              [_vm._v("Pro")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "text-center text-blue" }, [
              _c("div", { staticClass: "font-weight-bold font-size-24" }, [
                _vm._v("CPU Optimized")
              ]),
              _vm._v(" "),
              _c("div", [_vm._v("$0.060 /hour")])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-5" }, [
      _vm._v(
        "\n    Each Droplet adds more free data transfer to your account, starting at 1TB/month and scaling\n    with Droplet usage and size. Additional outbound data transfer is billed at $.01/GB.\n    "
      ),
      _c(
        "a",
        { staticClass: "text-blue", attrs: { href: "javascript: void(0);" } },
        [_vm._v("Read more")]
      ),
      _vm._v(".\n  ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "mb-4 text-uppercase" }, [
      _c("strong", [_vm._v("Add backups")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "mb-4 text-uppercase" }, [
      _c("strong", [_vm._v("Add block storage")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "mb-4 text-uppercase" }, [
      _c("strong", [_vm._v("Choose a hostname")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/apps/digitalocean-create/index.vue":
/*!****************************************************************!*\
  !*** ./resources/src/views/apps/digitalocean-create/index.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_36397d6d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=36397d6d& */ "./resources/src/views/apps/digitalocean-create/index.vue?vue&type=template&id=36397d6d&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _index_vue_vue_type_template_id_36397d6d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_36397d6d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/apps/digitalocean-create/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/apps/digitalocean-create/index.vue?vue&type=template&id=36397d6d&":
/*!***********************************************************************************************!*\
  !*** ./resources/src/views/apps/digitalocean-create/index.vue?vue&type=template&id=36397d6d& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_36397d6d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=36397d6d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/apps/digitalocean-create/index.vue?vue&type=template&id=36397d6d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_36397d6d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_36397d6d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);