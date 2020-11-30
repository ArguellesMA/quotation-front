function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-center-pricing-help-center-pricing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAppsHelpCenterHelpCenterPricingHelpCenterPricingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg-card py-16 px-gutter\">\n  <h1 class=\"display-1 mt-12 mb-4 text-center\">Pricing & Plans</h1>\n  <h2 class=\"subheading-2 text-hint text-center max-w-lg mx-auto m-0\">Simple, transparent pricing.</h2>\n</div>\n\n<div class=\"my-12 container\"\n     fxLayout=\"row\"\n     fxLayout.xs=\"column\"\n     fxLayoutAlign=\"start start\"\n     fxLayoutAlign.xs=\"start stretch\"\n     fxLayoutGap=\"24px\">\n\n  <div class=\"card p-6\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"start center\">\n    <div class=\"inline-block p-6 rounded-full bg-primary-50 text-primary-500 mx-auto\"\n         fxLayout=\"row\"\n         fxLayoutAlign=\"center center\">\n      <ic-icon [icon]=\"icBeenhere\" size=\"48px\"></ic-icon>\n    </div>\n\n    <h2 class=\"headline my-6\">Basic Plan</h2>\n\n    <div class=\"body-1\"><span class=\"body-2\">2</span> Users</div>\n    <div class=\"body-1\"><span class=\"body-2\">10</span> Projects</div>\n    <div class=\"body-1\"><span class=\"body-2\">10GB</span> Storage</div>\n    <div class=\"body-1\"><span class=\"body-2\">Basic</span> Support</div>\n\n    <h3 class=\"display-2 font-bold my-6\">19<span class=\"text-secondary headline align-top\">$</span></h3>\n\n    <button class=\"rounded-full max-w-full w-200\" color=\"primary\" mat-raised-button type=\"button\">PURCHASE</button>\n  </div>\n\n  <div class=\"card p-6\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"start center\">\n    <div class=\"inline-block p-6 rounded-full bg-primary-50 text-primary-500 mx-auto\"\n         fxLayout=\"row\"\n         fxLayoutAlign=\"center center\">\n      <ic-icon [icon]=\"icStars\" size=\"48px\"></ic-icon>\n    </div>\n\n    <h2 class=\"headline my-6\">Premium Plan</h2>\n\n    <div class=\"body-1\"><span class=\"body-2\">10</span> Users</div>\n    <div class=\"body-1\"><span class=\"body-2\">500</span> Projects</div>\n    <div class=\"body-1\"><span class=\"body-2\">1TB</span> Storage</div>\n    <div class=\"body-1\"><span class=\"body-2\">Priority</span> Support</div>\n\n    <h3 class=\"display-2 font-bold my-6\">59<span class=\"text-secondary headline align-top\">$</span></h3>\n\n    <button class=\"rounded-full max-w-full w-200\" color=\"primary\" mat-raised-button type=\"button\">PURCHASE</button>\n  </div>\n\n  <div class=\"card p-6\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"start center\">\n    <div class=\"inline-block p-6 rounded-full bg-primary-50 text-primary-500 mx-auto\"\n         fxLayout=\"row\"\n         fxLayoutAlign=\"center center\">\n      <ic-icon [icon]=\"icBusinessCenter\" size=\"48px\"></ic-icon>\n    </div>\n\n    <h2 class=\"headline my-6\">Enterprise Plan</h2>\n\n    <div class=\"body-1\"><span class=\"body-2\">Unlimited</span> Users</div>\n    <div class=\"body-1\"><span class=\"body-2\">Unlimited</span> Projects</div>\n    <div class=\"body-1\"><span class=\"body-2\">Unlimited</span> Storage</div>\n    <div class=\"body-1\"><span class=\"body-2\">Dedicated</span> Support</div>\n\n    <h3 class=\"display-2 font-bold my-6\">699<span class=\"text-secondary headline align-top\">$</span></h3>\n\n    <button class=\"rounded-full max-w-full w-200\" color=\"primary\" mat-raised-button type=\"button\">PURCHASE</button>\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing-routing.module.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing-routing.module.ts ***!
    \**************************************************************************************************/

  /*! exports provided: HelpCenterPricingRoutingModule */

  /***/
  function srcAppPagesAppsHelpCenterHelpCenterPricingHelpCenterPricingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpCenterPricingRoutingModule", function () {
      return HelpCenterPricingRoutingModule;
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


    var _help_center_pricing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./help-center-pricing.component */
    "./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing.component.ts");

    var routes = [{
      path: '',
      component: _help_center_pricing_component__WEBPACK_IMPORTED_MODULE_3__["HelpCenterPricingComponent"]
    }];

    var HelpCenterPricingRoutingModule = function HelpCenterPricingRoutingModule() {
      _classCallCheck(this, HelpCenterPricingRoutingModule);
    };

    HelpCenterPricingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HelpCenterPricingRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAppsHelpCenterHelpCenterPricingHelpCenterPricingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvaGVscC1jZW50ZXIvaGVscC1jZW50ZXItcHJpY2luZy9oZWxwLWNlbnRlci1wcmljaW5nLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: HelpCenterPricingComponent */

  /***/
  function srcAppPagesAppsHelpCenterHelpCenterPricingHelpCenterPricingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpCenterPricingComponent", function () {
      return HelpCenterPricingComponent;
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


    var _iconify_icons_ic_twotone_beenhere__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-beenhere */
    "./node_modules/@iconify/icons-ic/twotone-beenhere.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_beenhere__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_beenhere__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_ic_twotone_stars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-stars */
    "./node_modules/@iconify/icons-ic/twotone-stars.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_stars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_stars__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_ic_twotone_business_center__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-business-center */
    "./node_modules/@iconify/icons-ic/twotone-business-center.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_business_center__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_business_center__WEBPACK_IMPORTED_MODULE_4__);

    var HelpCenterPricingComponent = /*#__PURE__*/function () {
      function HelpCenterPricingComponent() {
        _classCallCheck(this, HelpCenterPricingComponent);

        this.icBeenhere = _iconify_icons_ic_twotone_beenhere__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icStars = _iconify_icons_ic_twotone_stars__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icBusinessCenter = _iconify_icons_ic_twotone_business_center__WEBPACK_IMPORTED_MODULE_4___default.a;
      }

      _createClass(HelpCenterPricingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HelpCenterPricingComponent;
    }();

    HelpCenterPricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-help-center-pricing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./help-center-pricing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./help-center-pricing.component.scss */
      "./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing.component.scss"))["default"]]
    })], HelpCenterPricingComponent);
    /***/
  },

  /***/
  "./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: HelpCenterPricingModule */

  /***/
  function srcAppPagesAppsHelpCenterHelpCenterPricingHelpCenterPricingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpCenterPricingModule", function () {
      return HelpCenterPricingModule;
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


    var _help_center_pricing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./help-center-pricing-routing.module */
    "./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing-routing.module.ts");
    /* harmony import */


    var _help_center_pricing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./help-center-pricing.component */
    "./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");

    var HelpCenterPricingModule = function HelpCenterPricingModule() {
      _classCallCheck(this, HelpCenterPricingModule);
    };

    HelpCenterPricingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_help_center_pricing_component__WEBPACK_IMPORTED_MODULE_4__["HelpCenterPricingComponent"]],
      exports: [_help_center_pricing_component__WEBPACK_IMPORTED_MODULE_4__["HelpCenterPricingComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _help_center_pricing_routing_module__WEBPACK_IMPORTED_MODULE_3__["HelpCenterPricingRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]]
    })], HelpCenterPricingModule);
    /***/
  }
}]);
//# sourceMappingURL=help-center-pricing-help-center-pricing-module-es5.js.map