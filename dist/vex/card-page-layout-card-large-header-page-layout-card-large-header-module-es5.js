function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-page-layout-card-large-header-page-layout-card-large-header-module"], {
  /***/
  "./node_modules/@iconify/icons-ic/twotone-home.js":
  /*!********************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-home.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneHomeJs(module, exports) {
    var data = {
      "body": "<path d=\"M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5l5 4.5V18z\" fill=\"currentColor\"/><path opacity=\".3\" d=\"M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/card/page-layout-card-large-header/page-layout-card-large-header.component.html":
  /*!*************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/card/page-layout-card-large-header/page-layout-card-large-header.component.html ***!
    \*************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUiPageLayoutsCardPageLayoutCardLargeHeaderPageLayoutCardLargeHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<vex-page-layout mode=\"card\">\n\n  <vex-page-layout-header fxLayout=\"column\" fxLayoutAlign=\"center start\">\n    <div vexContainer>\n      <h2 class=\"title m-0\">Card - Large Header</h2>\n      <vex-breadcrumbs [crumbs]=\"['Page Layouts', 'Card', 'Large Header']\"></vex-breadcrumbs>\n    </div>\n  </vex-page-layout-header>\n\n  <vex-page-layout-content vexContainer>\n    <div class=\"card p-6\">\n      <h2 class=\"m-0 title mb-6\">Blog Post</h2>\n\n      <vex-page-layout-demo></vex-page-layout-demo>\n    </div>\n  </vex-page-layout-content>\n\n</vex-page-layout>\n";
    /***/
  },

  /***/
  "./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts ***!
    \****************************************************************************/

  /*! exports provided: BreadcrumbComponent */

  /***/
  function srcVexComponentsBreadcrumbsBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BreadcrumbComponent = /*#__PURE__*/function () {
      function BreadcrumbComponent() {
        _classCallCheck(this, BreadcrumbComponent);
      }

      _createClass(BreadcrumbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-breadcrumb',
      template: "\n      <ng-content></ng-content>\n  ",
      host: {
        "class": 'vex-breadcrumb body-2 text-hint leading-none hover:text-primary-500 no-underline trans-ease-out ltr:mr-2 rtl:ml-2'
      }
    })], BreadcrumbComponent);
    /***/
  },

  /***/
  "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts":
  /*!******************************************************************!*\
    !*** ./src/@vex/components/breadcrumbs/breadcrumbs.component.ts ***!
    \******************************************************************/

  /*! exports provided: BreadcrumbsComponent */

  /***/
  function srcVexComponentsBreadcrumbsBreadcrumbsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function () {
      return BreadcrumbsComponent;
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


    var _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-home */
    "./node_modules/@iconify/icons-ic/twotone-home.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _utils_track_by__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../utils/track-by */
    "./src/@vex/utils/track-by.ts");

    var BreadcrumbsComponent = /*#__PURE__*/function () {
      function BreadcrumbsComponent() {
        _classCallCheck(this, BreadcrumbsComponent);

        this.crumbs = [];
        this.trackByValue = _utils_track_by__WEBPACK_IMPORTED_MODULE_3__["trackByValue"];
        this.icHome = _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2___default.a;
      }

      _createClass(BreadcrumbsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BreadcrumbsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BreadcrumbsComponent.prototype, "crumbs", void 0);
    BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-breadcrumbs',
      template: "\n      <div class=\"flex items-center\">\n          <vex-breadcrumb>\n              <a [routerLink]=\"['/']\">\n                  <ic-icon [icon]=\"icHome\" inline=\"true\" size=\"20px\"></ic-icon>\n              </a>\n          </vex-breadcrumb>\n          <ng-container *ngFor=\"let crumb of crumbs; trackBy: trackByValue\">\n              <div class=\"w-1 h-1 bg-gray-300 rounded-full ltr:mr-2 rtl:ml-2\"></div>\n              <vex-breadcrumb>\n                  <a [routerLink]=\"[]\">{{ crumb }}</a>\n              </vex-breadcrumb>\n          </ng-container>\n      </div>\n  "
    })], BreadcrumbsComponent);
    /***/
  },

  /***/
  "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts":
  /*!***************************************************************!*\
    !*** ./src/@vex/components/breadcrumbs/breadcrumbs.module.ts ***!
    \***************************************************************/

  /*! exports provided: BreadcrumbsModule */

  /***/
  function srcVexComponentsBreadcrumbsBreadcrumbsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbsModule", function () {
      return BreadcrumbsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./breadcrumbs.component */
    "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./breadcrumb/breadcrumb.component */
    "./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts");

    var BreadcrumbsModule = function BreadcrumbsModule() {
      _classCallCheck(this, BreadcrumbsModule);
    };

    BreadcrumbsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"]],
      declarations: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"]],
      exports: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]]
    })], BreadcrumbsModule);
    /***/
  },

  /***/
  "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header/page-layout-card-large-header-routing.module.ts":
  /*!**************************************************************************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-large-header/page-layout-card-large-header-routing.module.ts ***!
    \**************************************************************************************************************************/

  /*! exports provided: PageLayoutCardLargeHeaderRoutingModule */

  /***/
  function srcAppPagesUiPageLayoutsCardPageLayoutCardLargeHeaderPageLayoutCardLargeHeaderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutCardLargeHeaderRoutingModule", function () {
      return PageLayoutCardLargeHeaderRoutingModule;
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


    var _page_layout_card_large_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page-layout-card-large-header.component */
    "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header/page-layout-card-large-header.component.ts");

    var routes = [{
      path: '',
      component: _page_layout_card_large_header_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutCardLargeHeaderComponent"]
    }];

    var PageLayoutCardLargeHeaderRoutingModule = function PageLayoutCardLargeHeaderRoutingModule() {
      _classCallCheck(this, PageLayoutCardLargeHeaderRoutingModule);
    };

    PageLayoutCardLargeHeaderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PageLayoutCardLargeHeaderRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header/page-layout-card-large-header.component.scss":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-large-header/page-layout-card-large-header.component.scss ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUiPageLayoutsCardPageLayoutCardLargeHeaderPageLayoutCardLargeHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL3BhZ2UtbGF5b3V0cy9jYXJkL3BhZ2UtbGF5b3V0LWNhcmQtbGFyZ2UtaGVhZGVyL3BhZ2UtbGF5b3V0LWNhcmQtbGFyZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header/page-layout-card-large-header.component.ts":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-large-header/page-layout-card-large-header.component.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: PageLayoutCardLargeHeaderComponent */

  /***/
  function srcAppPagesUiPageLayoutsCardPageLayoutCardLargeHeaderPageLayoutCardLargeHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutCardLargeHeaderComponent", function () {
      return PageLayoutCardLargeHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageLayoutCardLargeHeaderComponent = /*#__PURE__*/function () {
      function PageLayoutCardLargeHeaderComponent() {
        _classCallCheck(this, PageLayoutCardLargeHeaderComponent);
      }

      _createClass(PageLayoutCardLargeHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageLayoutCardLargeHeaderComponent;
    }();

    PageLayoutCardLargeHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-page-layout-card-large-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-layout-card-large-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/card/page-layout-card-large-header/page-layout-card-large-header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-layout-card-large-header.component.scss */
      "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header/page-layout-card-large-header.component.scss"))["default"]]
    })], PageLayoutCardLargeHeaderComponent);
    /***/
  },

  /***/
  "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header/page-layout-card-large-header.module.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-large-header/page-layout-card-large-header.module.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: PageLayoutCardLargeHeaderModule */

  /***/
  function srcAppPagesUiPageLayoutsCardPageLayoutCardLargeHeaderPageLayoutCardLargeHeaderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutCardLargeHeaderModule", function () {
      return PageLayoutCardLargeHeaderModule;
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


    var _page_layout_card_large_header_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page-layout-card-large-header-routing.module */
    "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header/page-layout-card-large-header-routing.module.ts");
    /* harmony import */


    var _page_layout_card_large_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./page-layout-card-large-header.component */
    "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header/page-layout-card-large-header.component.ts");
    /* harmony import */


    var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../../@vex/components/page-layout/page-layout.module */
    "./src/@vex/components/page-layout/page-layout.module.ts");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../page-layout-demo/page-layout-demo.module */
    "./src/app/pages/ui/page-layouts/page-layout-demo/page-layout-demo.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var PageLayoutCardLargeHeaderModule = function PageLayoutCardLargeHeaderModule() {
      _classCallCheck(this, PageLayoutCardLargeHeaderModule);
    };

    PageLayoutCardLargeHeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_page_layout_card_large_header_component__WEBPACK_IMPORTED_MODULE_4__["PageLayoutCardLargeHeaderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _page_layout_card_large_header_routing_module__WEBPACK_IMPORTED_MODULE_3__["PageLayoutCardLargeHeaderRoutingModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"], _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutDemoModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_9__["ContainerModule"]]
    })], PageLayoutCardLargeHeaderModule);
    /***/
  }
}]);
//# sourceMappingURL=card-page-layout-card-large-header-page-layout-card-large-header-module-es5.js.map