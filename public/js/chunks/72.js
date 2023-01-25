(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/charts/c3/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/charts/c3/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_c3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-c3 */ "./node_modules/vue-c3/dist/vue-c3.umd.js");
/* harmony import */ var vue_c3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_c3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var c3_c3_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! c3/c3.min.css */ "./node_modules/c3/c3.min.css");
/* harmony import */ var c3_c3_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(c3_c3_min_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueC3: vue_c3__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      line: new vue__WEBPACK_IMPORTED_MODULE_0___default.a(),
      spline: new vue__WEBPACK_IMPORTED_MODULE_0___default.a(),
      scatter: new vue__WEBPACK_IMPORTED_MODULE_0___default.a(),
      bar: new vue__WEBPACK_IMPORTED_MODULE_0___default.a(),
      stackedBar: new vue__WEBPACK_IMPORTED_MODULE_0___default.a(),
      combination: new vue__WEBPACK_IMPORTED_MODULE_0___default.a(),
      subChart: new vue__WEBPACK_IMPORTED_MODULE_0___default.a(),
      zoom: new vue__WEBPACK_IMPORTED_MODULE_0___default.a(),
      pie: new vue__WEBPACK_IMPORTED_MODULE_0___default.a(),
      donut: new vue__WEBPACK_IMPORTED_MODULE_0___default.a(),
      step: new vue__WEBPACK_IMPORTED_MODULE_0___default.a(),
      area: new vue__WEBPACK_IMPORTED_MODULE_0___default.a(),
      colors: {
        primary: '#01a8fe',
        def: '#acb7bf',
        success: '#46be8a',
        danger: '#fb434a'
      }
    };
  },
  computed: {
    lineOptions: function lineOptions() {
      return {
        data: {
          columns: [['Primary', 100, 165, 140, 270, 200, 140, 220], ['Success', 110, 80, 100, 85, 125, 90, 100]]
        },
        color: {
          pattern: [this.colors.primary, this.colors.success]
        },
        axis: {
          x: {
            tick: {
              outer: !1
            }
          },
          y: {
            max: 300,
            min: 0,
            tick: {
              outer: !1,
              count: 7,
              values: [0, 50, 100, 150, 200, 250, 300]
            }
          }
        },
        grid: {
          x: {
            show: !1
          },
          y: {
            show: !0
          }
        }
      };
    },
    splineOptions: function splineOptions() {
      return {
        data: {
          columns: [['Primary', 100, 165, 140, 270, 200, 140, 220], ['Danger', 110, 80, 100, 85, 125, 90, 100]],
          type: 'spline'
        },
        color: {
          pattern: [this.colors.primary, this.colors.danger]
        },
        axis: {
          x: {
            tick: {
              outer: !1
            }
          },
          y: {
            max: 300,
            min: 0,
            tick: {
              outer: !1,
              count: 7,
              values: [0, 50, 100, 150, 200, 250, 300]
            }
          }
        },
        grid: {
          x: {
            show: !1
          },
          y: {
            show: !0
          }
        }
      };
    },
    scatterOptions: function scatterOptions() {
      return {
        data: {
          xs: {
            Danger: 'Danger_x',
            Primary: 'Primary_x'
          },
          columns: [['Danger_x', 3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.2, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8, 3.2, 3.7, 3.3], ['Primary_x', 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8], ['Danger', 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2], ['Primary', 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1, 1.3, 1.4, 1, 1.5, 1, 1.4, 1.3, 1.4, 1.5, 1, 1.5, 1.1, 1.6, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.2, 1.5, 1, 1.1, 1, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3]],
          type: 'scatter'
        },
        color: {
          pattern: [this.colors.danger, this.colors.primary]
        },
        axis: {
          x: {
            label: 'Width',
            tick: {
              outer: !1,
              fit: !1
            }
          },
          size: {
            height: 400
          },
          padding: {
            right: 40
          },
          y: {
            label: 'Height',
            tick: {
              outer: !1,
              count: 5,
              values: [0, 0.4, 0.8, 1.2, 1.6]
            }
          }
        },
        grid: {
          x: {
            show: !1
          },
          y: {
            show: !0
          }
        }
      };
    },
    barOptions: function barOptions() {
      return {
        data: {
          columns: [['Danger', 30, 200, 100, 400, 150, 250], ['Default', 130, 100, 140, 200, 150, 50], ['Primary', 130, -150, 200, 300, -200, 100]],
          type: 'bar'
        },
        bar: {
          width: {
            max: 20
          }
        },
        color: {
          pattern: [this.colors.danger, this.colors.def, this.colors.primary]
        },
        grid: {
          y: {
            show: !0
          },
          x: {
            show: !1
          }
        }
      };
    },
    stackedBarOptions: function stackedBarOptions() {
      return {
        data: {
          columns: [['Primary', -30, 200, 300, 400, -150, 250, -30, 200, 300, 400, -150, 250], ['Default', 130, 100, -400, 100, -150, 50, 130, 100, -400, 100, -150, 50], ['Danger', -230, 200, 200, -300, 250, 250, -230, 200, 200, -300, 250, 250], ['Success', 100, -250, 150, 200, -300, -100, 100, -250, 150, 200, -300, -100]],
          type: 'bar',
          groups: [['Primary', 'Default', 'Danger', 'Success']]
        },
        color: {
          pattern: [this.colors.primary, this.colors.def, this.colors.danger, this.colors.success]
        },
        bar: {
          width: {
            max: 45
          }
        },
        grid: {
          y: {
            show: !0,
            lines: [{
              value: 0
            }]
          }
        }
      };
    },
    combinationOptions: function combinationOptions() {
      return {
        data: {
          columns: [['Primary', 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50], ['Default', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220], ['Success', 300, 200, 160, 400, 250, 250, 300, 200, 160, 400, 250, 250], ['Danger', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220], ['Primary', 130, 120, 150, 140, 160, 150, 130, 120, 150, 140, 160, 150], ['Danger2', 90, 70, 20, 50, 60, 120, 90, 70, 20, 50, 60, 120]],
          type: 'bar',
          types: {
            Success: 'spline',
            Danger: 'line',
            Danger2: 'area'
          },
          groups: [['Primary', 'Default']]
        },
        color: {
          pattern: [this.colors.primary, this.colors.def, this.colors.success, this.colors.danger, this.colors.danger]
        },
        grid: {
          x: {
            show: !1
          },
          y: {
            show: !0
          }
        }
      };
    },
    subChartOptions: function subChartOptions() {
      return {
        data: {
          columns: [['Primary', 100, 165, 140, 270, 200, 140, 220, 210, 190, 100, 170, 250], ['Success', 110, 80, 100, 85, 125, 90, 100, 130, 120, 90, 100, 115]],
          type: 'spline'
        },
        color: {
          pattern: [this.colors.primary, this.colors.danger]
        },
        subchart: {
          show: true
        }
      };
    },
    zoomOptions: function zoomOptions() {
      return {
        data: {
          columns: [['Sample', 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 150, 250, 150, 200, 170, 240, 100, 150, 250, 150, 200, 170, 240, 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 350, 220, 250, 300, 270, 140, 150, 90, 150, 50, 120, 70, 40]],
          colors: {
            Sample: this.colors.primary
          }
        },
        zoom: {
          enabled: !0
        }
      };
    },
    pieOptions: function pieOptions() {
      return {
        data: {
          columns: [['Primary', 30], ['Success', 120]],
          type: 'pie'
        },
        color: {
          pattern: [this.colors.primary, this.colors.success]
        }
      };
    },
    donutOptions: function donutOptions() {
      return {
        data: {
          columns: [['Danger', 30], ['Success', 120]],
          type: 'donut'
        },
        color: {
          pattern: [this.colors.danger, this.colors.success]
        },
        donut: {
          title: 'Connections'
        }
      };
    },
    stepOptions: function stepOptions() {
      return {
        data: {
          columns: [['Primary', 300, 350, 300, 0, 0, 100], ['Success', 130, 100, 140, 200, 150, 50]],
          types: {
            Primary: 'step',
            Success: 'area-step'
          }
        },
        color: {
          pattern: [this.colors.primary, this.colors.success]
        }
      };
    },
    areaOptions: function areaOptions() {
      return {
        data: {
          columns: [['Primary', 300, 350, 300, 0, 0, 0], ['Success', 130, 100, 140, 200, 150, 50]],
          types: {
            Primary: 'area',
            Success: 'area-spline'
          }
        },
        color: {
          pattern: [this.colors.primary, this.colors.success]
        }
      };
    }
  },
  mounted: function mounted() {
    this.line.$emit('init', this.lineOptions);
    this.spline.$emit('init', this.splineOptions);
    this.scatter.$emit('init', this.scatterOptions);
    this.bar.$emit('init', this.barOptions);
    this.stackedBar.$emit('init', this.stackedBarOptions);
    this.combination.$emit('init', this.combinationOptions);
    this.subChart.$emit('init', this.subChartOptions);
    this.zoom.$emit('init', this.zoomOptions);
    this.pie.$emit('init', this.pieOptions);
    this.donut.$emit('init', this.donutOptions);
    this.step.$emit('init', this.stepOptions);
    this.area.$emit('init', this.areaOptions);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/charts/c3/index.vue?vue&type=template&id=d3545bce&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/charts/c3/index.vue?vue&type=template&id=d3545bce& ***!
  \**************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xl-6 col-lg-12" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-5" },
              [
                _c("vue-c3", {
                  staticClass: "height-300",
                  attrs: { handler: _vm.line }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-6 col-lg-12" }, [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-5" },
              [
                _c("vue-c3", {
                  staticClass: "height-300",
                  attrs: { handler: _vm.spline }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-6 col-lg-12" }, [
            _vm._m(3),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-5" },
              [
                _c("vue-c3", {
                  staticClass: "height-300",
                  attrs: { handler: _vm.step }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-6 col-lg-12" }, [
            _vm._m(4),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-5" },
              [
                _c("vue-c3", {
                  staticClass: "height-300",
                  attrs: { handler: _vm.area }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-6 col-lg-12" }, [
            _vm._m(5),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-5" },
              [
                _c("vue-c3", {
                  staticClass: "height-300",
                  attrs: { handler: _vm.scatter }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-6 col-lg-12" }, [
            _vm._m(6),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-5" },
              [
                _c("vue-c3", {
                  staticClass: "height-300",
                  attrs: { handler: _vm.bar }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-6 col-lg-12" }, [
            _vm._m(7),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-5" },
              [
                _c("vue-c3", {
                  staticClass: "height-300",
                  attrs: { handler: _vm.stackedBar }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-6 col-lg-12" }, [
            _vm._m(8),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-5" },
              [
                _c("vue-c3", {
                  staticClass: "height-300",
                  attrs: { handler: _vm.combination }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-6 col-lg-12" }, [
            _vm._m(9),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-5" },
              [
                _c("vue-c3", {
                  staticClass: "height-300",
                  attrs: { handler: _vm.subChart }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-6 col-lg-12" }, [
            _vm._m(10),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-5" },
              [
                _c("vue-c3", {
                  staticClass: "height-300",
                  attrs: { handler: _vm.zoom }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-6 col-lg-12" }, [
            _vm._m(11),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-5" },
              [
                _c("vue-c3", {
                  staticClass: "height-300",
                  attrs: { handler: _vm.pie }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-6 col-lg-12" }, [
            _vm._m(12),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-5" },
              [
                _c("vue-c3", {
                  staticClass: "height-300",
                  attrs: { handler: _vm.donut }
                })
              ],
              1
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "kit__utils__heading" }, [
      _c("h5", [
        _c("span", { staticClass: "mr-3" }, [_vm._v("C3")]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-sm btn-light",
            attrs: { href: "http://c3js.org/", target: "_blank" }
          },
          [
            _vm._v("\n        Official Documentation\n        "),
            _c("i", { staticClass: "fe fe-corner-right-up" })
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-4" }, [
      _c("strong", [_vm._v("Simple Line")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-4" }, [_c("strong", [_vm._v("Spline")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-4" }, [_c("strong", [_vm._v("Step")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-4" }, [_c("strong", [_vm._v("Area")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-4" }, [
      _c("strong", [_vm._v("Scatter")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-4" }, [_c("strong", [_vm._v("Bar")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-4" }, [
      _c("strong", [_vm._v("Stacked Bar")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-4" }, [
      _c("strong", [_vm._v("Combination")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-4" }, [
      _c("strong", [_vm._v("Sub Chart")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-4" }, [_c("strong", [_vm._v("Zoom")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-4" }, [
      _c("strong", [_vm._v("Pie Chart")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-4" }, [
      _c("strong", [_vm._v("Donut Chart")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/charts/c3/index.vue":
/*!*************************************************!*\
  !*** ./resources/src/views/charts/c3/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_d3545bce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d3545bce& */ "./resources/src/views/charts/c3/index.vue?vue&type=template&id=d3545bce&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/views/charts/c3/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_d3545bce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_d3545bce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/charts/c3/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/charts/c3/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/src/views/charts/c3/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/charts/c3/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/charts/c3/index.vue?vue&type=template&id=d3545bce&":
/*!********************************************************************************!*\
  !*** ./resources/src/views/charts/c3/index.vue?vue&type=template&id=d3545bce& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d3545bce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=d3545bce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/charts/c3/index.vue?vue&type=template&id=d3545bce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d3545bce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d3545bce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);