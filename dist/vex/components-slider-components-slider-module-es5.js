function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-slider-components-slider-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-slider/components-slider.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-slider/components-slider.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUiComponentsComponentsSliderComponentsSliderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<vex-page-layout @stagger>\n\n  <vex-secondary-toolbar current=\"Slider\">\n    <vex-breadcrumbs [crumbs]=\"['Components', 'Slider']\"></vex-breadcrumbs>\n  </vex-secondary-toolbar>\n\n  <vex-page-layout-content vexContainer>\n    <vex-components-overview-slider @fadeInUp class=\"block\"></vex-components-overview-slider>\n\n    <!--\n    <h2 class=\"title mt-6\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <span @scaleIn\n          class=\"block w-10 h-10 rounded-full bg-primary-50 text-primary-500 mr-3\"\n          fxLayout=\"row\"\n          fxLayoutAlign=\"center center\">\n      <ic-icon [icon]=\"icSettings\" height=\"20px\" width=\"20px\"></ic-icon>\n      </span>\n      <span @fadeInRight class=\"block\">Card Options</span>\n    </h2>\n    -->\n  </vex-page-layout-content>\n\n</vex-page-layout>\n";
    /***/
  },

  /***/
  "./src/@vex/animations/scale-in.animation.ts":
  /*!***************************************************!*\
    !*** ./src/@vex/animations/scale-in.animation.ts ***!
    \***************************************************/

  /*! exports provided: scaleInAnimation, scaleIn400ms */

  /***/
  function srcVexAnimationsScaleInAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleInAnimation", function () {
      return scaleInAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleIn400ms", function () {
      return scaleIn400ms;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    function scaleInAnimation(duration) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scaleIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'scale(0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'scale(1)'
      }))])]);
    }

    var scaleIn400ms = scaleInAnimation(400);
    /***/
  },

  /***/
  "./src/app/pages/ui/components/components-slider/components-slider-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-slider/components-slider-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ComponentsSliderRoutingModule */

  /***/
  function srcAppPagesUiComponentsComponentsSliderComponentsSliderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsSliderRoutingModule", function () {
      return ComponentsSliderRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components-slider.component */
    "./src/app/pages/ui/components/components-slider/components-slider.component.ts");

    var routes = [{
      path: '',
      component: _components_slider_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsSliderComponent"]
    }];

    var ComponentsSliderRoutingModule = function ComponentsSliderRoutingModule() {
      _classCallCheck(this, ComponentsSliderRoutingModule);
    };

    ComponentsSliderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ComponentsSliderRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/ui/components/components-slider/components-slider.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-slider/components-slider.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUiComponentsComponentsSliderComponentsSliderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2NvbXBvbmVudHMvY29tcG9uZW50cy1zbGlkZXIvY29tcG9uZW50cy1zbGlkZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/ui/components/components-slider/components-slider.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-slider/components-slider.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ComponentsSliderComponent */

  /***/
  function srcAppPagesUiComponentsComponentsSliderComponentsSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsSliderComponent", function () {
      return ComponentsSliderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../@vex/animations/scale-in.animation */
    "./src/@vex/animations/scale-in.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-right.animation */
    "./src/@vex/animations/fade-in-right.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");

    var ComponentsSliderComponent = /*#__PURE__*/function () {
      function ComponentsSliderComponent() {
        _classCallCheck(this, ComponentsSliderComponent);
      }

      _createClass(ComponentsSliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ComponentsSliderComponent;
    }();

    ComponentsSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-components-slider',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./components-slider.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-slider/components-slider.component.html"))["default"],
      animations: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger80ms"], _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInRight400ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./components-slider.component.scss */
      "./src/app/pages/ui/components/components-slider/components-slider.component.scss"))["default"]]
    })], ComponentsSliderComponent);
    /***/
  },

  /***/
  "./src/app/pages/ui/components/components-slider/components-slider.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-slider/components-slider.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ComponentsSliderModule */

  /***/
  function srcAppPagesUiComponentsComponentsSliderComponentsSliderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsSliderModule", function () {
      return ComponentsSliderModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components_slider_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components-slider-routing.module */
    "./src/app/pages/ui/components/components-slider/components-slider-routing.module.ts");
    /* harmony import */


    var _components_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components-slider.component */
    "./src/app/pages/ui/components/components-slider/components-slider.component.ts");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
    /* harmony import */


    var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../@vex/components/page-layout/page-layout.module */
    "./src/@vex/components/page-layout/page-layout.module.ts");
    /* harmony import */


    var _components_overview_components_components_overview_slider_components_overview_slider_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components-overview/components/components-overview-slider/components-overview-slider.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-slider/components-overview-slider.module.ts");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var ComponentsSliderModule = function ComponentsSliderModule() {
      _classCallCheck(this, ComponentsSliderModule);
    };

    ComponentsSliderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_slider_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsSliderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _components_slider_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsSliderRoutingModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["SecondaryToolbarModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"], _components_overview_components_components_overview_slider_components_overview_slider_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsOverviewSliderModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_9__["ContainerModule"]]
    })], ComponentsSliderModule);
    /***/
  }
}]);
//# sourceMappingURL=components-slider-components-slider-module-es5.js.map