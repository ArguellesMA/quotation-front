function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-errors-error-404-error-404-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/errors/error-404/error-404.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/errors/error-404/error-404.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPagesErrorsError404Error404ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-full p-gutter text-center\">\n  <img class=\"w-full max-w-lg mx-auto mb-6\" src=\"assets/img/illustrations/data_center.svg\">\n\n  <h1 class=\"display-3 font-medium m-0\">404</h1>\n  <h2 class=\"headline m-0\">Page not found.</h2>\n\n  <div class=\"bg-card rounded-full overflow-hidden relative ltr:pl-5 rtl:pr-5 h-12 max-w-md w-full shadow-8 mx-auto mt-6\"\n       fxLayout=\"row\"\n       fxLayoutAlign=\"start center\">\n    <ic-icon [icon]=\"icSearch\" class=\"text-secondary\" fxFlex=\"none\" height=\"24px\" width=\"24px\"></ic-icon>\n    <input class=\"border-0 h-12 outline-none ltr:pl-4 rtl:pr-4 placeholder:text-secondary bg-card\"\n           fxFlex=\"auto\"\n           placeholder=\"Search for other pages ...\"\n           type=\"text\">\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/pages/pages/errors/error-404/error-404-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/pages/errors/error-404/error-404-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: Error404RoutingModule */

  /***/
  function srcAppPagesPagesErrorsError404Error404RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error404RoutingModule", function () {
      return Error404RoutingModule;
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


    var _error_404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./error-404.component */
    "./src/app/pages/pages/errors/error-404/error-404.component.ts");

    var routes = [{
      path: '',
      component: _error_404_component__WEBPACK_IMPORTED_MODULE_3__["Error404Component"],
      data: {
        containerEnabled: true,
        toolbarShadowEnabled: true
      }
    }];

    var Error404RoutingModule = function Error404RoutingModule() {
      _classCallCheck(this, Error404RoutingModule);
    };

    Error404RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Error404RoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/pages/errors/error-404/error-404.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/pages/errors/error-404/error-404.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPagesErrorsError404Error404ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2VzL2Vycm9ycy9lcnJvci00MDQvZXJyb3ItNDA0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/pages/errors/error-404/error-404.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/pages/errors/error-404/error-404.component.ts ***!
    \*********************************************************************/

  /*! exports provided: Error404Component */

  /***/
  function srcAppPagesPagesErrorsError404Error404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error404Component", function () {
      return Error404Component;
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


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-search */
    "./node_modules/@iconify/icons-ic/twotone-search.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__);

    var Error404Component = /*#__PURE__*/function () {
      function Error404Component() {
        _classCallCheck(this, Error404Component);

        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default.a;
      }

      _createClass(Error404Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Error404Component;
    }();

    Error404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-error404',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error-404.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/errors/error-404/error-404.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error-404.component.scss */
      "./src/app/pages/pages/errors/error-404/error-404.component.scss"))["default"]]
    })], Error404Component);
    /***/
  },

  /***/
  "./src/app/pages/pages/errors/error-404/error-404.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/pages/errors/error-404/error-404.module.ts ***!
    \******************************************************************/

  /*! exports provided: Error404Module */

  /***/
  function srcAppPagesPagesErrorsError404Error404ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error404Module", function () {
      return Error404Module;
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


    var _error_404_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./error-404-routing.module */
    "./src/app/pages/pages/errors/error-404/error-404-routing.module.ts");
    /* harmony import */


    var _error_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./error-404.component */
    "./src/app/pages/pages/errors/error-404/error-404.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");

    var Error404Module = function Error404Module() {
      _classCallCheck(this, Error404Module);
    };

    Error404Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_error_404_component__WEBPACK_IMPORTED_MODULE_4__["Error404Component"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _error_404_routing_module__WEBPACK_IMPORTED_MODULE_3__["Error404RoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"]]
    })], Error404Module);
    /***/
  }
}]);
//# sourceMappingURL=pages-pages-errors-error-404-error-404-module-es5.js.map