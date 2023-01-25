(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ "./resources/src/components/kit/widgets/Charts/3/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./resources/src/components/kit/widgets/Charts/3/data.json", 1);
/* harmony import */ var v_chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! v-chartist */ "./node_modules/v-chartist/dist/vue-chartist.min.js");
/* harmony import */ var v_chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(v_chartist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartist-plugin-tooltips-updated */ "./node_modules/chartist-plugin-tooltips-updated/dist/chartist-plugin-tooltip.js");
/* harmony import */ var chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'KitChart3',
  components: {
    'vue-chartist': v_chartist__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    var options = {
      low: 0,
      chartPadding: {
        right: 0,
        left: 0,
        top: 5,
        bottom: 0
      },
      fullWidth: true,
      showPoint: true,
      lineSmooth: false,
      axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0
      },
      axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
      },
      showArea: true,
      plugins: [chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_2___default()({
        anchorToPoint: false,
        appendToBody: true,
        seriesName: false
      })]
    };
    var listener = {
      draw: function draw(item) {
        if (item.type === 'bar') {
          item.group.elem('line', {
            x1: item.x1,
            x2: item.x2,
            y1: item.y2,
            y2: 0,
            stroke: '#e4e9f0',
            'stroke-width': '10'
          });
        }
      }
    };
    return {
      data: _data_json__WEBPACK_IMPORTED_MODULE_0__,
      options: options,
      listener: listener
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/2/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/kit/widgets/General/2/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'KitGeneral2'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/2v1/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/kit/widgets/General/2v1/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'KitGeneral2v1'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/2v2/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/kit/widgets/General/2v2/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'KitGeneral2v2'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/Lists/11/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/kit/widgets/Lists/11/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'KitList11'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/dashboard/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/ecommerce/dashboard/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_kit_widgets_Charts_3_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/kit/widgets/Charts/3/index */ "./resources/src/components/kit/widgets/Charts/3/index.vue");
/* harmony import */ var _components_kit_widgets_General_2_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/kit/widgets/General/2/index */ "./resources/src/components/kit/widgets/General/2/index.vue");
/* harmony import */ var _components_kit_widgets_General_2v1_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/kit/widgets/General/2v1/index */ "./resources/src/components/kit/widgets/General/2v1/index.vue");
/* harmony import */ var _components_kit_widgets_General_2v2_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/kit/widgets/General/2v2/index */ "./resources/src/components/kit/widgets/General/2v2/index.vue");
/* harmony import */ var _components_kit_widgets_General_2v3_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/kit/widgets/General/2v3/index */ "./resources/src/components/kit/widgets/General/2v3/index.vue");
/* harmony import */ var _components_kit_widgets_General_16_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/kit/widgets/General/16/index */ "./resources/src/components/kit/widgets/General/16/index.vue");
/* harmony import */ var _components_kit_widgets_Lists_11_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/kit/widgets/Lists/11/index */ "./resources/src/components/kit/widgets/Lists/11/index.vue");
/* harmony import */ var _components_kit_widgets_Lists_12_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/kit/widgets/Lists/12/index */ "./resources/src/components/kit/widgets/Lists/12/index.vue");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data.json */ "./resources/src/views/ecommerce/dashboard/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./resources/src/views/ecommerce/dashboard/data.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CuiChart3: _components_kit_widgets_Charts_3_index__WEBPACK_IMPORTED_MODULE_0__["default"],
    CuiGeneral2: _components_kit_widgets_General_2_index__WEBPACK_IMPORTED_MODULE_1__["default"],
    CuiGeneral2v1: _components_kit_widgets_General_2v1_index__WEBPACK_IMPORTED_MODULE_2__["default"],
    CuiGeneral2v2: _components_kit_widgets_General_2v2_index__WEBPACK_IMPORTED_MODULE_3__["default"],
    CuiGeneral2v3: _components_kit_widgets_General_2v3_index__WEBPACK_IMPORTED_MODULE_4__["default"],
    CuiGeneral16: _components_kit_widgets_General_16_index__WEBPACK_IMPORTED_MODULE_5__["default"],
    CuiList11: _components_kit_widgets_Lists_11_index__WEBPACK_IMPORTED_MODULE_6__["default"],
    CuiList12: _components_kit_widgets_Lists_12_index__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      products: _data_json__WEBPACK_IMPORTED_MODULE_8__
    };
  }
});

/***/ }),

/***/ "./node_modules/chartist-plugin-tooltips-updated/dist/chartist-plugin-tooltip.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/chartist-plugin-tooltips-updated/dist/chartist-plugin-tooltip.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (a0) {
      return (root['Chartist.plugins.tooltip'] = factory(a0));
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function (Chartist) {

/**
 * Chartist.js plugin to display a data label on top of the points in a line chart.
 *
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  var defaultOptions = {
    currency: undefined,
    currencyFormatCallback: undefined,
    tooltipOffset: {
      x: 0,
      y: -20
    },
    anchorToPoint: false,
    appendToBody: false,
    class: undefined,
    pointClass: 'ct-point'
  };

  Chartist.plugins = Chartist.plugins || {};
  Chartist.plugins.tooltip = function (options) {
    options = Chartist.extend({}, defaultOptions, options);

    return function tooltip(chart) {
      var tooltipSelector = options.pointClass;
      if (chart instanceof Chartist.Bar) {
        tooltipSelector = 'ct-bar';
      } else if (chart instanceof Chartist.Pie) {
        // Added support for donut graph
        if (chart.options.donut) {
          tooltipSelector = 'ct-slice-donut';
        } else {
          tooltipSelector = 'ct-slice-pie';
        }
      }

      var $chart = chart.container;
      var $toolTip;
      if (!options.appendToBody) {
        // searching for existing tooltip in the chart, because appendToBody is disabled
        $toolTip = $chart.querySelector('.chartist-tooltip')
      } else {
        // searching for existing tooltip in the body, because appendToBody is enabled
        $toolTip = document.querySelector('.chartist-tooltip');
      }
      if (!$toolTip) {
        $toolTip = document.createElement('div');
        $toolTip.className = (!options.class) ? 'chartist-tooltip' : 'chartist-tooltip ' + options.class;
        if (!options.appendToBody) {
          $chart.appendChild($toolTip);
        } else {
          document.body.appendChild($toolTip);
        }
      }
      var height = $toolTip.offsetHeight;
      var width = $toolTip.offsetWidth;

      hide($toolTip);

      function on(event, selector, callback) {
        $chart.addEventListener(event, function (e) {
          if (!selector || hasClass(e.target, selector))
            callback(e);
        });
      }

      on('mouseover', tooltipSelector, function (event) {
        var $point = event.target;
        var tooltipText = '';

        var isPieChart = (chart instanceof Chartist.Pie) ? $point : $point.parentNode;
        var seriesName = (isPieChart) ? $point.parentNode.getAttribute('ct:meta') || $point.parentNode.getAttribute('ct:series-name') : '';
        var meta = $point.getAttribute('ct:meta') || seriesName || '';
        var hasMeta = !!meta;
        var value = $point.getAttribute('ct:value');

        if (options.transformTooltipTextFnc && typeof options.transformTooltipTextFnc === 'function') {
          value = options.transformTooltipTextFnc(value);
        }

        if (options.tooltipFnc && typeof options.tooltipFnc === 'function') {
          tooltipText = options.tooltipFnc(meta, value);
        } else {
          if (options.metaIsHTML) {
            var txt = document.createElement('textarea');
            txt.innerHTML = meta;
            meta = txt.value;
          }

          meta = '<span class="chartist-tooltip-meta">' + meta + '</span>';

          if (hasMeta) {
            tooltipText += meta + '<br>';
          } else {
            // For Pie Charts also take the labels into account
            // Could add support for more charts here as well!
            if (chart instanceof Chartist.Pie) {
              var label = next($point, 'ct-label');
              if (label) {
                tooltipText += text(label) + '<br>';
              }
            }
          }

          if (value) {
            if (options.currency) {
              if (options.currencyFormatCallback != undefined) {
                value = options.currencyFormatCallback(value, options);
              } else {
                value = options.currency + value.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
              }
            }
            value = '<span class="chartist-tooltip-value">' + value + '</span>';
            tooltipText += value;
          }
        }

        if (tooltipText) {
          $toolTip.innerHTML = tooltipText;

          // Calculate new width and height, as toolTip width/height may have changed with innerHTML change
          height = $toolTip.offsetHeight;
          width = $toolTip.offsetWidth;

          setPosition(event);
          show($toolTip);

          // Remember height and width to avoid wrong position in IE
          height = $toolTip.offsetHeight;
          width = $toolTip.offsetWidth;
        }
      });

      on('mouseout', tooltipSelector, function () {
        hide($toolTip);
      });

      on('mousemove', null, function (event) {
        if (false === options.anchorToPoint)
          setPosition(event);
      });

      function setPosition(event) {
        height = height || $toolTip.offsetHeight;
        width = width || $toolTip.offsetWidth;
        var offsetX = -width / 2 + options.tooltipOffset.x;
        var offsetY = -height + options.tooltipOffset.y;
        var anchorX, anchorY;

        if (!options.appendToBody) {
          var box = $chart.getBoundingClientRect();
          var left = event.pageX - box.left - window.pageXOffset;
          var top = event.pageY - box.top - window.pageYOffset;

          if (true === options.anchorToPoint && event.target.x2 && event.target.y2) {
            anchorX = parseInt(event.target.x2.baseVal.value);
            anchorY = parseInt(event.target.y2.baseVal.value);
          }

          $toolTip.style.top = (anchorY || top) + offsetY + 'px';
          $toolTip.style.left = (anchorX || left) + offsetX + 'px';
        } else {
          $toolTip.style.top = event.pageY + offsetY + 'px';
          $toolTip.style.left = event.pageX + offsetX + 'px';
        }
      }
    }
  };

  function show(element) {
    if (!hasClass(element, 'tooltip-show')) {
      element.className = element.className + ' tooltip-show';
    }
  }

  function hide(element) {
    var regex = new RegExp('tooltip-show' + '\\s*', 'gi');
    element.className = element.className.replace(regex, '').trim();
  }

  function hasClass(element, className) {
    return (' ' + element.getAttribute('class') + ' ').indexOf(' ' + className + ' ') > -1;
  }

  function next(element, className) {
    do {
      element = element.nextSibling;
    } while (element && !hasClass(element, className));
    return element;
  }

  function text(element) {
    return element.innerText || element.textContent;
  }

}(window, document, Chartist));

return Chartist.plugins.tooltip;

}));


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=style&index=0&lang=scss&module=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=style&index=0&lang=scss&module=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: src/components/kit/core/mixins.scss.\n        on line 5 of resources/src/components/mixins.scss\n        from line 1 of resources/src/components/kit/widgets/Charts/3/style.module.scss\n        from line 83 of /Users/nick/Desktop/projects/cleanui-admin-template-vue-laravel/resources/src/components/kit/widgets/Charts/3/index.vue\n>> @import 'src/components/kit/core/mixins.scss'; // import KIT mixins\n\n   ^\n");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=style&index=0&lang=scss&module=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=style&index=0&lang=scss&module=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss&module=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=style&index=0&lang=scss&module=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=template&id=16a3588a&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=template&id=16a3588a& ***!
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
  return _c(
    "div",
    [
      _c("vue-chartist", {
        staticClass: "height-200 mb-3",
        attrs: {
          type: "Bar",
          data: _vm.data,
          options: _vm.options,
          listener: _vm.listener
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex flex-wrap" }, [
        _c("div", { staticClass: "mr-5 mb-2" }, [
          _c("div", { staticClass: "text-nowrap text-uppercase text-gray-4" }, [
            _c("div", { class: [_vm.$style.donut, _vm.$style.success] }),
            _vm._v("Gross revenue\n      ")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "font-weight-bold font-size-18 text-dark" },
            [_vm._v("+$125,367.36")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mr-5 mb-2" }, [
          _c("div", { staticClass: "text-nowrap text-uppercase text-gray-4" }, [
            _c("div", { class: [_vm.$style.primary, _vm.$style.donut] }),
            _vm._v("Gross Earnings\n      ")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "font-weight-bold font-size-18 text-dark" },
            [_vm._v("+$125,367.36")]
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/2/index.vue?vue&type=template&id=e4ea5fc2&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/kit/widgets/General/2/index.vue?vue&type=template&id=e4ea5fc2& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    return _c("div", { staticClass: "d-flex flex-wrap align-items-center" }, [
      _c("div", { staticClass: "mr-auto" }, [
        _c(
          "p",
          { staticClass: "text-uppercase text-dark font-weight-bold mb-1" },
          [_vm._v("\n      Your profit\n    ")]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "text-gray-5 mb-0" }, [
          _vm._v("\n      Average Weekly Profit\n    ")
        ])
      ]),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "text-success font-weight-bold font-size-24 mb-0" },
        [_vm._v("\n    +29,931\n  ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/2v1/index.vue?vue&type=template&id=df45e04c&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/kit/widgets/General/2v1/index.vue?vue&type=template&id=df45e04c& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-wrap align-items-center" }, [
      _c("div", { staticClass: "mr-auto" }, [
        _c(
          "p",
          { staticClass: "text-uppercase text-dark font-weight-bold mb-1" },
          [_vm._v("\n      Orders\n    ")]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "text-gray-5 mb-0" }, [
          _vm._v("\n      All Time Orders\n    ")
        ])
      ]),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "text-primary font-weight-bold font-size-24 mb-0" },
        [_vm._v("\n    1,800\n  ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/2v2/index.vue?vue&type=template&id=2541c29b&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/kit/widgets/General/2v2/index.vue?vue&type=template&id=2541c29b& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-wrap align-items-center" }, [
      _c("div", { staticClass: "mr-auto" }, [
        _c(
          "p",
          { staticClass: "text-uppercase text-dark font-weight-bold mb-1" },
          [_vm._v("\n      Refunds\n    ")]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "text-gray-5 mb-0" }, [
          _vm._v("\n      Averache Weekly Reunds\n    ")
        ])
      ]),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "text-danger font-weight-bold font-size-24 mb-0" },
        [_vm._v("\n    -$8,474\n  ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/Lists/11/index.vue?vue&type=template&id=675ff45c&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/kit/widgets/Lists/11/index.vue?vue&type=template&id=675ff45c& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "mb-3" }, [
        _c(
          "div",
          { staticClass: "bg-light text-gray-6 text-uppercase px-3 py-1 mb-2" },
          [_vm._v("Today - 7 may 2019")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive" }, [
          _c(
            "table",
            { staticClass: "table table-borderless text-gray-6 mb-0" },
            [
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("California")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [
                    _c("strong", [_vm._v("+78,366,263.00$")])
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Texas")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [
                    _c("strong", [_vm._v("+58,165,000.00$")])
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Wyoming")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [
                    _c("strong", [_vm._v("+26,156,267.00$")])
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Florida")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [
                    _c("strong", [_vm._v("+18,823,026.00$")])
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("New York")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [
                    _c("strong", [_vm._v("+8,125,642.00$")])
                  ])
                ])
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", [
        _c(
          "div",
          { staticClass: "bg-light text-gray-6 text-uppercase px-3 py-1 mb-2" },
          [_vm._v("6 may 2019")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive" }, [
          _c(
            "table",
            { staticClass: "table table-borderless text-muted mb-0" },
            [_c("tbody", [_c("tr", [_c("td", [_vm._v("No Items")])])])]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/dashboard/index.vue?vue&type=template&id=342cdcb4&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/ecommerce/dashboard/index.vue?vue&type=template&id=342cdcb4& ***!
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
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-8 col-lg-12" }, [
        _c(
          "div",
          { staticClass: "card" },
          [
            _c(
              "a-tabs",
              {
                staticClass: "kit-tabs-bordered",
                attrs: { defaultActiveKey: "2" }
              },
              [
                _c("a-tab-pane", { key: "1", attrs: { tab: "Orders" } }),
                _vm._v(" "),
                _c("a-tab-pane", { key: "2", attrs: { tab: "Revenue" } })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [_c("cui-chart-3")], 1)
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card" },
          [
            _c(
              "a-tabs",
              {
                staticClass: "kit-tabs-bordered",
                attrs: { defaultActiveKey: "1" }
              },
              [
                _c("a-tab-pane", { key: "1", attrs: { tab: "Bestsellers" } }),
                _vm._v(" "),
                _c("a-tab-pane", { key: "2", attrs: { tab: "Most Viewed" } }),
                _vm._v(" "),
                _c("a-tab-pane", { key: "3", attrs: { tab: "Highest Rated" } })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c(
                "div",
                { staticClass: "row" },
                _vm._l(_vm.products, function(product, index) {
                  return _c(
                    "div",
                    { key: index, staticClass: "col-lg-6" },
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
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-4 col-lg-12" }, [
        _c("div", { staticClass: "card text-white bg-success" }, [
          _c("div", { staticClass: "card-body" }, [_c("cui-general-2v3")], 1)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [_c("cui-general-2")], 1)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [_c("cui-general-2v1")], 1)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [_c("cui-general-2v2")], 1)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [_c("cui-list-11")], 1)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [_c("cui-list-12")], 1)
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
    return _c("div", { staticClass: "cui__utils__heading" }, [
      _c("strong", [_vm._v("Ecommerce: Dashboard")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/components/kit/widgets/Charts/3/data.json":
/*!*****************************************************************!*\
  !*** ./resources/src/components/kit/widgets/Charts/3/data.json ***!
  \*****************************************************************/
/*! exports provided: labels, series, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"labels\":[\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\"],\"series\":[{\"className\":\"ct-series-a\",\"data\":[5,4,3,7,5,10,3,4,8,10,6,8]},{\"className\":\"ct-series-b\",\"data\":[3,2,9,5,4,6,4,6,7,8,7,4]}]}");

/***/ }),

/***/ "./resources/src/components/kit/widgets/Charts/3/index.vue":
/*!*****************************************************************!*\
  !*** ./resources/src/components/kit/widgets/Charts/3/index.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _index_vue_vue_type_template_id_16a3588a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=16a3588a& */ "./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=template&id=16a3588a&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss&module=true& */ "./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=style&index=0&lang=scss&module=true&");
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
  _index_vue_vue_type_template_id_16a3588a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_16a3588a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/kit/widgets/Charts/3/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=style&index=0&lang=scss&module=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=style&index=0&lang=scss&module=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss&module=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=style&index=0&lang=scss&module=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=template&id=16a3588a&":
/*!************************************************************************************************!*\
  !*** ./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=template&id=16a3588a& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_16a3588a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=16a3588a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/Charts/3/index.vue?vue&type=template&id=16a3588a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_16a3588a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_16a3588a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/kit/widgets/General/2/index.vue":
/*!******************************************************************!*\
  !*** ./resources/src/components/kit/widgets/General/2/index.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_e4ea5fc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=e4ea5fc2& */ "./resources/src/components/kit/widgets/General/2/index.vue?vue&type=template&id=e4ea5fc2&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/components/kit/widgets/General/2/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_e4ea5fc2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_e4ea5fc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/kit/widgets/General/2/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/kit/widgets/General/2/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/src/components/kit/widgets/General/2/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/2/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/kit/widgets/General/2/index.vue?vue&type=template&id=e4ea5fc2&":
/*!*************************************************************************************************!*\
  !*** ./resources/src/components/kit/widgets/General/2/index.vue?vue&type=template&id=e4ea5fc2& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e4ea5fc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=e4ea5fc2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/2/index.vue?vue&type=template&id=e4ea5fc2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e4ea5fc2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e4ea5fc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/kit/widgets/General/2v1/index.vue":
/*!********************************************************************!*\
  !*** ./resources/src/components/kit/widgets/General/2v1/index.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_df45e04c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=df45e04c& */ "./resources/src/components/kit/widgets/General/2v1/index.vue?vue&type=template&id=df45e04c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/components/kit/widgets/General/2v1/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_df45e04c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_df45e04c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/kit/widgets/General/2v1/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/kit/widgets/General/2v1/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/src/components/kit/widgets/General/2v1/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/2v1/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/kit/widgets/General/2v1/index.vue?vue&type=template&id=df45e04c&":
/*!***************************************************************************************************!*\
  !*** ./resources/src/components/kit/widgets/General/2v1/index.vue?vue&type=template&id=df45e04c& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_df45e04c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=df45e04c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/2v1/index.vue?vue&type=template&id=df45e04c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_df45e04c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_df45e04c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/kit/widgets/General/2v2/index.vue":
/*!********************************************************************!*\
  !*** ./resources/src/components/kit/widgets/General/2v2/index.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2541c29b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2541c29b& */ "./resources/src/components/kit/widgets/General/2v2/index.vue?vue&type=template&id=2541c29b&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/components/kit/widgets/General/2v2/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2541c29b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2541c29b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/kit/widgets/General/2v2/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/kit/widgets/General/2v2/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/src/components/kit/widgets/General/2v2/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/2v2/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/kit/widgets/General/2v2/index.vue?vue&type=template&id=2541c29b&":
/*!***************************************************************************************************!*\
  !*** ./resources/src/components/kit/widgets/General/2v2/index.vue?vue&type=template&id=2541c29b& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2541c29b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2541c29b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/General/2v2/index.vue?vue&type=template&id=2541c29b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2541c29b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2541c29b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/kit/widgets/Lists/11/index.vue":
/*!*****************************************************************!*\
  !*** ./resources/src/components/kit/widgets/Lists/11/index.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_675ff45c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=675ff45c& */ "./resources/src/components/kit/widgets/Lists/11/index.vue?vue&type=template&id=675ff45c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/components/kit/widgets/Lists/11/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_675ff45c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_675ff45c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/kit/widgets/Lists/11/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/kit/widgets/Lists/11/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/src/components/kit/widgets/Lists/11/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/Lists/11/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/kit/widgets/Lists/11/index.vue?vue&type=template&id=675ff45c&":
/*!************************************************************************************************!*\
  !*** ./resources/src/components/kit/widgets/Lists/11/index.vue?vue&type=template&id=675ff45c& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_675ff45c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=675ff45c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/kit/widgets/Lists/11/index.vue?vue&type=template&id=675ff45c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_675ff45c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_675ff45c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/ecommerce/dashboard/data.json":
/*!***********************************************************!*\
  !*** ./resources/src/views/ecommerce/dashboard/data.json ***!
  \***********************************************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"isNew\":true,\"isFavorite\":false,\"image\":\"resources/images/products/001.jpg\",\"name\":\"TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Routers for Home\",\"price\":\"199.28\",\"oldPrice\":\"299.28\"},{\"isNew\":false,\"isFavorite\":true,\"image\":\"resources/images/products/002.jpg\",\"name\":\"TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Routers for Home\",\"price\":\"99.99\",\"oldPrice\":\"199.99\"},{\"isNew\":false,\"isFavorite\":false,\"image\":\"resources/images/products/003.jpg\",\"name\":\"TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Routers for Home\",\"price\":\"245.21\",\"oldPrice\":\"419.58\"},{\"isNew\":true,\"isFavorite\":true,\"image\":\"resources/images/products/004.jpg\",\"name\":\"TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Routers for Home\",\"price\":\"199.99\",\"oldPrice\":\"499.99\"}]");

/***/ }),

/***/ "./resources/src/views/ecommerce/dashboard/index.vue":
/*!***********************************************************!*\
  !*** ./resources/src/views/ecommerce/dashboard/index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_342cdcb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=342cdcb4& */ "./resources/src/views/ecommerce/dashboard/index.vue?vue&type=template&id=342cdcb4&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/views/ecommerce/dashboard/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_342cdcb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_342cdcb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/ecommerce/dashboard/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/ecommerce/dashboard/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/src/views/ecommerce/dashboard/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/dashboard/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/ecommerce/dashboard/index.vue?vue&type=template&id=342cdcb4&":
/*!******************************************************************************************!*\
  !*** ./resources/src/views/ecommerce/dashboard/index.vue?vue&type=template&id=342cdcb4& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_342cdcb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=342cdcb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/ecommerce/dashboard/index.vue?vue&type=template&id=342cdcb4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_342cdcb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_342cdcb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);