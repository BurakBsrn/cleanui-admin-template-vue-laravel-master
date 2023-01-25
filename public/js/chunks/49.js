(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/charts/chartistjs/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/charts/chartistjs/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_nick_Desktop_projects_cleanui_admin_template_vue_laravel_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var v_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! v-chartist */ "./node_modules/v-chartist/dist/vue-chartist.min.js");
/* harmony import */ var v_chartist__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(v_chartist__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chartist-plugin-tooltips-updated */ "./node_modules/chartist-plugin-tooltips-updated/dist/chartist-plugin-tooltip.js");
/* harmony import */ var chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_6__);





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'vue-chartist': v_chartist__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  data: function data() {
    var simplePieSum = function sum(a, b) {
      return a + b;
    };

    var simplePieData = {
      series: [5, 3, 4]
    };

    var scatterTimes = function scatter(n) {
      return Array.apply(void 0, Object(_Users_nick_Desktop_projects_cleanui_admin_template_vue_laravel_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(new Array(n)));
    };

    var scatterData = scatterTimes(52).map(Math.random).reduce(function (scatter, rnd, index) {
      var data = scatter;
      data.labels.push(index + 1);
      data.series.forEach(function (series) {
        series.push(Math.random() * 100);
      });
      return data;
    }, {
      labels: [],
      series: scatterTimes(4).map(function () {
        return [];
      })
    });
    var lineHoleData = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      series: [[5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9], [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null], [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null], [{
        x: 3,
        y: 3
      }, {
        x: 4,
        y: 3
      }, {
        x: 5,
        y: undefined
      }, {
        x: 6,
        y: 4
      }, {
        x: 7,
        y: null
      }, {
        x: 8,
        y: 4
      }, {
        x: 9,
        y: 4
      }]]
    };
    var lineHoleOptions = {
      fullWidth: true,
      chartPadding: {
        right: 10
      },
      low: 0
    };
    return {
      lineHoleData: lineHoleData,
      lineHoleOptions: lineHoleOptions,
      animationData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [[1, 2, 2.7, 0, 3, 5, 3, 4, 8, 10, 12, 7], [0, 1.2, 2, 7, 2.5, 9, 5, 8, 9, 11, 14, 4], [10, 9, 8, 6.5, 6.8, 6, 5.4, 5.3, 4.5, 4.4, 3, 2.8]]
      },
      animatonOptions: {
        axisX: {
          labelInterpolationFnc: function labelInterpolationFnc(value, index) {
            return index % 2 !== 0 ? !1 : value;
          }
        },
        plugins: [chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_6___default()({
          anchorToPoint: false,
          appendToBody: true,
          seriesName: false
        })]
      },
      lineData: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [[5, 4, 3, 7, 5, 10, 3], [3, 2, 9, 5, 4, 6, 4]]
      },
      lineOptions: {
        fullWidth: true,
        chartPadding: {
          right: 0
        },
        plugins: [chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_6___default()({
          anchorToPoint: false,
          appendToBody: true,
          seriesName: false
        })]
      },
      areaData: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [[5, 9, 7, 8, 5, 3, 5, 4]]
      },
      areaOptions: {
        low: 0,
        showArea: true,
        plugins: [chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_6___default()({
          anchorToPoint: false,
          appendToBody: true,
          seriesName: false
        })]
      },
      horizontalData: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [[5, 4, 3, 7, 5, 10, 3], [3, 2, 9, 5, 4, 6, 4]]
      },
      horizontalOptions: {
        seriesBarDistance: 10,
        reverseData: !0,
        horizontalBars: !0,
        axisY: {
          offset: 70
        },
        plugins: [chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_6___default()({
          anchorToPoint: false,
          appendToBody: true,
          seriesName: false
        })]
      },
      biPolarLineData: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [[1, 2, 3, 1, -2, 0, 1, 0], [-2, -1, -2, -1, -2.5, -1, -2, -1], [0, 0, 0, 1, 2, 2.5, 2, 1], [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]]
      },
      biPolarLineOptions: {
        high: 3,
        low: -3,
        showArea: !0,
        showLine: !1,
        showPoint: !1,
        fullWidth: !0,
        axisX: {
          showLabel: false,
          showGrid: false
        },
        plugins: [chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_6___default()({
          anchorToPoint: false,
          appendToBody: true,
          seriesName: false
        })]
      },
      biPolarBarData: {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
        series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]]
      },
      biPolarBarOptions: {
        high: 10,
        low: -10,
        axisX: {
          labelInterpolationFnc: function labelInterpolationFnc(value, index) {
            return index % 2 === 0 ? value : null;
          }
        },
        plugins: [chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_6___default()({
          anchorToPoint: false,
          appendToBody: true,
          seriesName: false
        })]
      },
      stackedBarData: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        series: [[8e5, 12e5, 14e5, 13e5], [2e5, 4e5, 5e5, 3e5], [1e5, 2e5, 4e5, 6e5]]
      },
      stackedBarOptions: {
        stackBars: !0,
        axisY: {
          labelInterpolationFnc: function labelInterpolationFnc(value) {
            return "".concat(value / 1e3, "k");
          }
        },
        plugins: [chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_6___default()({
          anchorToPoint: false,
          appendToBody: true,
          seriesName: false
        })]
      },
      overlappingBarData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [[5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8], [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]]
      },
      overlappingBarOptions: {
        seriesBarDistance: 10,
        plugins: [chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_6___default()({
          anchorToPoint: false,
          appendToBody: true,
          seriesName: false
        })]
      },
      overlappingResponsiveOptions: [['', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function labelInterpolationFnc(value) {
            return value[0];
          }
        }
      }]],
      labelsPieData: {
        labels: ['Bananas', 'Apples', 'Grapes'],
        series: [20, 15, 40]
      },
      labelsPieOptions: {
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return value[0];
        },
        plugins: [chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_6___default()({
          anchorToPoint: false,
          appendToBody: true,
          seriesName: false
        })]
      },
      labelsPieResponsiveOptions: [['screen and (min-width: 640px)', {
        chartPadding: 30,
        labelOffset: 100,
        labelDirection: 'explode',
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return value;
        }
      }], ['screen and (min-width: 1024px)', {
        labelOffset: 80,
        chartPadding: 20
      }]],
      simplePieData: simplePieData,
      simplePieOptions: {
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return "".concat(Math.round(value / simplePieData.series.reduce(simplePieSum) * 100), "%");
        },
        plugins: [chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_6___default()({
          anchorToPoint: false,
          appendToBody: true,
          seriesName: false
        })]
      },
      scatterResponsiveOptions: [['screen and (min-width: 640px)', {
        axisX: {
          labelInterpolationFnc: function labelInterpolationFnc(value, index) {
            return index % 4 === 0 ? "W".concat(value) : null;
          }
        }
      }]],
      scatterOptions: {
        showLine: false,
        axisX: {
          labelInterpolationFnc: function labelInterpolationFnc(value, index) {
            return index % 13 === 0 ? "W".concat(value) : null;
          }
        },
        plugins: [chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_6___default()({
          anchorToPoint: false,
          appendToBody: true,
          seriesName: false
        })]
      },
      scatterData: scatterData
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/charts/chartistjs/index.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/charts/chartistjs/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/charts/chartistjs/index.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/charts/chartistjs/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/charts/chartistjs/index.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/charts/chartistjs/index.vue?vue&type=template&id=1c4623de&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/charts/chartistjs/index.vue?vue&type=template&id=1c4623de& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
                _c("vue-chartist", {
                  staticClass: "chartist-animated height-300 mt-4",
                  attrs: {
                    type: "Line",
                    data: _vm.animationData,
                    options: _vm.animatonOptions
                  }
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
                _c("vue-chartist", {
                  staticClass: "height-300",
                  attrs: {
                    type: "Line",
                    data: _vm.lineHoleData,
                    options: _vm.lineHoleOptions
                  }
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
                _c("vue-chartist", {
                  staticClass: "height-300 mt-4",
                  attrs: {
                    type: "Line",
                    data: _vm.lineData,
                    options: _vm.lineData
                  }
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
                _c("vue-chartist", {
                  staticClass: "height-300 mt-4",
                  attrs: {
                    type: "Line",
                    data: _vm.areaData,
                    options: _vm.areaOptions
                  }
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
                _c("vue-chartist", {
                  staticClass: "height-300",
                  attrs: {
                    type: "Line",
                    data: _vm.scatterData,
                    options: _vm.scatterOptions,
                    "responsive-options": _vm.scatterResponsiveOptions
                  }
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
                _c("vue-chartist", {
                  staticClass: "height-300",
                  attrs: {
                    type: "Bar",
                    data: _vm.horizontalData,
                    options: _vm.horizontalOptions
                  }
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
                _c("vue-chartist", {
                  staticClass: "height-300",
                  attrs: {
                    type: "Line",
                    data: _vm.biPolarLineData,
                    options: _vm.biPolarLineOptions
                  }
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
                _c("vue-chartist", {
                  staticClass: "height-300",
                  attrs: {
                    type: "Bar",
                    data: _vm.biPolarBarData,
                    options: _vm.biPolarBarOptions
                  }
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
                _c("vue-chartist", {
                  staticClass: "height-300",
                  attrs: {
                    type: "Bar",
                    data: _vm.stackedBarData,
                    options: _vm.stackedBarOptions
                  }
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
                _c("vue-chartist", {
                  staticClass: "height-300",
                  attrs: {
                    type: "Bar",
                    data: _vm.overlappingBarData,
                    options: _vm.overlappingBarOptions,
                    "responsive-options": _vm.overlappingResponsiveOptions
                  }
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
                _c("vue-chartist", {
                  staticClass: "height-300",
                  attrs: {
                    type: "Pie",
                    data: _vm.simplePieData,
                    options: _vm.simplePieOptions
                  }
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
                _c("vue-chartist", {
                  staticClass: "height-300",
                  attrs: {
                    type: "Pie",
                    data: _vm.labelsPieData,
                    options: _vm.labelsPieOptions,
                    "responsive-options": _vm.labelsPieResponsiveOptions
                  }
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
        _c("span", { staticClass: "mr-3" }, [_vm._v("Chartist.js")]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-sm btn-light",
            attrs: {
              href: "https://gionkunz.github.io/chartist-js/",
              target: "_blank"
            }
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
      _c("strong", [_vm._v("CSS Styling & Animations")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-4" }, [
      _c("strong", [_vm._v("Holes in data")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-4" }, [_c("strong", [_vm._v("Line")])])
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
    return _c("h5", { staticClass: "mb-4" }, [
      _c("strong", [_vm._v("Horizontal Bar")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-4" }, [
      _c("strong", [_vm._v("Bi-polar Line")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-4" }, [
      _c("strong", [_vm._v("Bi-polar Bar")])
    ])
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
      _c("strong", [_vm._v("Overlapping Bar")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-4" }, [
      _c("strong", [_vm._v("Simple Pie")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-4" }, [
      _c("strong", [_vm._v("Pie w/ Labels")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/charts/chartistjs/index.vue":
/*!*********************************************************!*\
  !*** ./resources/src/views/charts/chartistjs/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1c4623de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1c4623de& */ "./resources/src/views/charts/chartistjs/index.vue?vue&type=template&id=1c4623de&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/views/charts/chartistjs/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./resources/src/views/charts/chartistjs/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1c4623de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1c4623de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/charts/chartistjs/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/charts/chartistjs/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/src/views/charts/chartistjs/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/charts/chartistjs/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/charts/chartistjs/index.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/src/views/charts/chartistjs/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/charts/chartistjs/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/src/views/charts/chartistjs/index.vue?vue&type=template&id=1c4623de&":
/*!****************************************************************************************!*\
  !*** ./resources/src/views/charts/chartistjs/index.vue?vue&type=template&id=1c4623de& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1c4623de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1c4623de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/charts/chartistjs/index.vue?vue&type=template&id=1c4623de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1c4623de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1c4623de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);