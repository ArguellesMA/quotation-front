(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-cards-components-cards-module~components-overview-components-overview-module"],{

/***/ "./node_modules/@iconify/icons-ic/twotone-favorite.js":
/*!************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-favorite.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path opacity=\".3\" d=\"M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1l.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z\" fill=\"currentColor\"/><path d=\"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1l-.1-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-overview/components/components-overview-buttons/components-overview-buttons.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-overview/components/components-overview-buttons/components-overview-buttons.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n  <div class=\"p-6\">\r\n    <h2 class=\"title mt-0 mb-4\">Preview</h2>\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"24px\">\r\n      <div fxLayout=\"column\" fxLayoutGap=\"8px\">\r\n        <button mat-button>BUTTON</button>\r\n        <button color=\"primary\" mat-button>PRIMARY</button>\r\n        <button color=\"accent\" mat-button>ACCENT</button>\r\n        <button color=\"warn\" mat-button>WARN</button>\r\n        <button disabled mat-button>DISABLED</button>\r\n      </div>\r\n\r\n      <div fxLayout=\"column\" fxLayoutGap=\"8px\">\r\n        <button mat-stroked-button>BUTTON</button>\r\n        <button color=\"primary\" mat-stroked-button>PRIMARY</button>\r\n        <button color=\"accent\" mat-stroked-button>ACCENT</button>\r\n        <button color=\"warn\" mat-stroked-button>WARN</button>\r\n        <button disabled mat-stroked-button>DISABLED</button>\r\n      </div>\r\n\r\n      <div fxLayout=\"column\" fxLayoutGap=\"8px\">\r\n        <button mat-raised-button>BUTTON</button>\r\n        <button color=\"primary\" mat-raised-button>PRIMARY</button>\r\n        <button color=\"accent\" mat-raised-button>ACCENT</button>\r\n        <button color=\"warn\" mat-raised-button>WARN</button>\r\n        <button disabled mat-raised-button>DISABLED</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mt-6\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"8px\">\r\n      <button color=\"primary\" mat-icon-button>\r\n        <mat-icon [icIcon]=\"icFavorite\"></mat-icon>\r\n      </button>\r\n      <button color=\"accent\" mat-icon-button>\r\n        <mat-icon [icIcon]=\"icFavorite\"></mat-icon>\r\n      </button>\r\n      <button color=\"warn\" mat-icon-button>\r\n        <mat-icon [icIcon]=\"icFavorite\"></mat-icon>\r\n      </button>\r\n      <button disabled mat-icon-button>\r\n        <mat-icon [icIcon]=\"icFavorite\"></mat-icon>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"mt-6\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"8px\">\r\n      <button color=\"primary\" mat-mini-fab>\r\n        <mat-icon [icIcon]=\"icFavorite\"></mat-icon>\r\n      </button>\r\n      <button color=\"accent\" mat-mini-fab>\r\n        <mat-icon [icIcon]=\"icFavorite\"></mat-icon>\r\n      </button>\r\n      <button color=\"warn\" mat-mini-fab>\r\n        <mat-icon [icIcon]=\"icFavorite\"></mat-icon>\r\n      </button>\r\n      <button disabled mat-mini-fab>\r\n        <mat-icon [icIcon]=\"icFavorite\"></mat-icon>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"mt-6\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"8px\">\r\n      <button color=\"primary\" mat-fab>\r\n        <mat-icon [icIcon]=\"icFavorite\"></mat-icon>\r\n      </button>\r\n      <button color=\"accent\" mat-fab>\r\n        <mat-icon [icIcon]=\"icFavorite\"></mat-icon>\r\n      </button>\r\n      <button color=\"warn\" mat-fab>\r\n        <mat-icon [icIcon]=\"icFavorite\"></mat-icon>\r\n      </button>\r\n      <button disabled mat-fab>\r\n        <mat-icon [icIcon]=\"icFavorite\"></mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"border-l\" fxFlex>\r\n    <div class=\"p-6\">\r\n      <h2 class=\"title mt-0 mb-4\">Buttons</h2>\r\n      <h4 class=\"body-2 text-secondary m-0\">[mat-button]</h4>\r\n    </div>\r\n\r\n    <mat-tab-group class=\"vex-tabs\">\r\n      <mat-tab label=\"DESCRIPTION\">\r\n        <div class=\"p-6\">\r\n          <p>\r\n            Material buttons trigger an ink reaction on press. They may display text, imagery, or both. Flat buttons and\r\n            raised buttons are the most commonly used types.\r\n            <br>\r\n            <br><span class=\"semi-bold\">Flat buttons:</span>\r\n          </p>\r\n          <ul>\r\n            <li>Flat buttons are text-only buttons.</li>\r\n            <li>They may be used in dialogs, toolbars, or inline.</li>\r\n            <li>They do not lift, but fill with color on press.</li>\r\n          </ul>\r\n          <p>\r\n            <span class=\"semi-bold\">Raised buttons:</span>\r\n          </p>\r\n          <ul>\r\n            <li>Raised buttons are rectangular-shaped buttons.</li>\r\n            <li>They may be used inline.</li>\r\n            <li>They lift and display ink reactions on press.</li>\r\n          </ul>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab label=\"SOURCE CODE\">\r\n        <pre><code [vexHighlight]=\"flatButtonsHTML\"></code></pre>\r\n        <pre><code [vexHighlight]=\"raisedButtonsHTML\"></code></pre>\r\n        <pre><code [vexHighlight]=\"iconButtonHTML\"></code></pre>\r\n        <pre><code [vexHighlight]=\"fabHTML\"></code></pre>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-overview/components/components-overview-cards/components-overview-cards.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-overview/components/components-overview-cards/components-overview-cards.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card overflow-hidden\" fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n  <div class=\"p-6 bg-app-bar\">\r\n    <h2 class=\"title mt-0 mb-4\">Preview</h2>\r\n\r\n    <mat-card class=\"max-w-full\">\r\n      <mat-card-header>\r\n        <img mat-card-avatar src=\"assets/img/avatars/3.jpg\">\r\n        <mat-card-subtitle>\r\n          Yesterday\r\n        </mat-card-subtitle>\r\n        <mat-card-title>Gerald Morris</mat-card-title>\r\n      </mat-card-header>\r\n      <img mat-card-image src=\"assets/img/demo/mountain-cinematic.jpg\">\r\n      <mat-card-content>\r\n        <p>Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age.\r\n          Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in\r\n          excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. </p>\r\n      </mat-card-content>\r\n      <mat-divider></mat-divider>\r\n      <mat-card-actions>\r\n        <div fxLayout=\"row\">\r\n          <button color=\"primary\" mat-icon-button>\r\n            <mat-icon [icIcon]=\"icShare\"></mat-icon>\r\n          </button>\r\n          <button color=\"accent\" mat-icon-button>\r\n            <mat-icon [icIcon]=\"icFavorite\"></mat-icon>\r\n          </button>\r\n          <span fxFlex></span>\r\n          <button fxHide.xs mat-button>MORE INFO</button>\r\n          <button color=\"primary\" mat-button>SAVE AS</button>\r\n        </div>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div class=\"border-l\" fxFlex>\r\n    <div class=\"p-6\">\r\n      <h2 class=\"title mt-0 mb-4\">Cards</h2>\r\n      <h4 class=\"body-2 text-secondary m-0\">&lt;mat-card&gt;</h4>\r\n    </div>\r\n\r\n    <mat-tab-group class=\"vex-tabs\">\r\n      <mat-tab label=\"DESCRIPTION\">\r\n        <p class=\"p-6 m-0\">\r\n          Cards may contain a photo, text, and a link about a single subject. They may display content containing\r\n          elements of varying size, such as photos with captions of variable length.\r\n        </p>\r\n      </mat-tab>\r\n      <mat-tab label=\"SOURCE CODE\">\r\n        <pre><code [vexHighlight]=\"cardHTML\"></code></pre>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/ui/components/components-overview/components/components-overview-buttons/components-overview-buttons.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-buttons/components-overview-buttons.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2NvbXBvbmVudHMvY29tcG9uZW50cy1vdmVydmlldy9jb21wb25lbnRzL2NvbXBvbmVudHMtb3ZlcnZpZXctYnV0dG9ucy9jb21wb25lbnRzLW92ZXJ2aWV3LWJ1dHRvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/ui/components/components-overview/components/components-overview-buttons/components-overview-buttons.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-buttons/components-overview-buttons.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: ComponentsOverviewButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsOverviewButtonsComponent", function() { return ComponentsOverviewButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_favorite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-favorite */ "./node_modules/@iconify/icons-ic/twotone-favorite.js");
/* harmony import */ var _iconify_icons_ic_twotone_favorite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_favorite__WEBPACK_IMPORTED_MODULE_2__);



let ComponentsOverviewButtonsComponent = class ComponentsOverviewButtonsComponent {
    constructor() {
        this.flatButtonsHTML = `<button mat-button>Button</button>
<button mat-button color="primary">Primary</button>
<button mat-button color="accent">Accent</button>
<button mat-button color="warn">Warn</button>
<button mat-button disabled="true">Disabled</button>`;
        this.raisedButtonsHTML = `<button mat-raised-button>Button</button>
<button mat-raised-button color="primary">Primary</button>
<button mat-raised-button color="accent">Accent</button>
<button mat-raised-button color="warn">Warn</button>
<button mat-raised-button disabled="true">Disabled</button>`;
        this.fabHTML = `<button mat-fab color="primary"><mat-icon>grade</mat-icon></button>
<button mat-fab color="accent"><mat-icon>favorite</mat-icon></button>
<button mat-fab color="warn"><mat-icon>build</mat-icon></button>
<button mat-fab disabled="true"><mat-icon>lock</mat-icon></button>
<button mat-mini-fab color="primary"><mat-icon>favorite</mat-icon></button>
<button mat-mini-fab color="accent"><mat-icon>thumb_up</mat-icon></button>
<button mat-mini-fab color="warn"><mat-icon>build</mat-icon></button>
<button mat-mini-fab disabled="true"><mat-icon>lock</mat-icon></button>`;
        this.iconButtonHTML = `<button mat-icon-button><mat-icon>menu</mat-icon></button>
<button mat-icon-button color="primary"><mat-icon>grade</mat-icon></button>
<button mat-icon-button color="accent"><mat-icon>favorite</mat-icon></button>
<button mat-icon-button color="warn"><mat-icon>build</mat-icon></button>
<button mat-icon-button disabled="true"><mat-icon>lock</mat-icon></button>`;
        this.icFavorite = _iconify_icons_ic_twotone_favorite__WEBPACK_IMPORTED_MODULE_2___default.a;
    }
    ngOnInit() {
    }
};
ComponentsOverviewButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-components-overview-buttons',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./components-overview-buttons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-overview/components/components-overview-buttons/components-overview-buttons.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./components-overview-buttons.component.scss */ "./src/app/pages/ui/components/components-overview/components/components-overview-buttons/components-overview-buttons.component.scss")).default]
    })
], ComponentsOverviewButtonsComponent);



/***/ }),

/***/ "./src/app/pages/ui/components/components-overview/components/components-overview-buttons/components-overview-buttons.module.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-buttons/components-overview-buttons.module.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ComponentsOverviewButtonsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsOverviewButtonsModule", function() { return ComponentsOverviewButtonsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components-overview-buttons.component */ "./src/app/pages/ui/components/components-overview/components/components-overview-buttons/components-overview-buttons.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.module */ "./src/@vex/components/highlight/highlight.module.ts");











let ComponentsOverviewButtonsModule = class ComponentsOverviewButtonsModule {
};
ComponentsOverviewButtonsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsOverviewButtonsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__["IconModule"],
            _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_10__["HighlightModule"]
        ],
        exports: [_components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsOverviewButtonsComponent"]]
    })
], ComponentsOverviewButtonsModule);



/***/ }),

/***/ "./src/app/pages/ui/components/components-overview/components/components-overview-cards/components-overview-cards.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-cards/components-overview-cards.component.scss ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-card {\n  max-width: 500px;\n}\n\n.mat-card-subtitle:not(:first-child), .mat-card-title:not(:first-child) {\n  margin-top: -14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNvL0Rlc2t0b3AvQ290aXphY2lvbi9zcmMvYXBwL3BhZ2VzL3VpL2NvbXBvbmVudHMvY29tcG9uZW50cy1vdmVydmlldy9jb21wb25lbnRzL2NvbXBvbmVudHMtb3ZlcnZpZXctY2FyZHMvY29tcG9uZW50cy1vdmVydmlldy1jYXJkcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdWkvY29tcG9uZW50cy9jb21wb25lbnRzLW92ZXJ2aWV3L2NvbXBvbmVudHMvY29tcG9uZW50cy1vdmVydmlldy1jYXJkcy9jb21wb25lbnRzLW92ZXJ2aWV3LWNhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91aS9jb21wb25lbnRzL2NvbXBvbmVudHMtb3ZlcnZpZXcvY29tcG9uZW50cy9jb21wb25lbnRzLW92ZXJ2aWV3LWNhcmRzL2NvbXBvbmVudHMtb3ZlcnZpZXctY2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4ubWF0LWNhcmQtc3VidGl0bGU6bm90KDpmaXJzdC1jaGlsZCksIC5tYXQtY2FyZC10aXRsZTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi10b3A6IC0xNHB4O1xufSIsIi5tYXQtY2FyZCB7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5tYXQtY2FyZC1zdWJ0aXRsZTpub3QoOmZpcnN0LWNoaWxkKSwgLm1hdC1jYXJkLXRpdGxlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogLTE0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/ui/components/components-overview/components/components-overview-cards/components-overview-cards.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-cards/components-overview-cards.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: ComponentsOverviewCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsOverviewCardsComponent", function() { return ComponentsOverviewCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-share */ "./node_modules/@iconify/icons-ic/twotone-share.js");
/* harmony import */ var _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_ic_twotone_favorite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-favorite */ "./node_modules/@iconify/icons-ic/twotone-favorite.js");
/* harmony import */ var _iconify_icons_ic_twotone_favorite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_favorite__WEBPACK_IMPORTED_MODULE_3__);




let ComponentsOverviewCardsComponent = class ComponentsOverviewCardsComponent {
    constructor() {
        this.cardHTML = `<mat-card>
  <mat-card-header>
    <img mat-card-avatar src="assets/img/avatars/3.jpg">
    <mat-card-subtitle>
      Yesterday
    </mat-card-subtitle>
    <mat-card-title>Gerald Morris</mat-card-title>
  </mat-card-header>
  <img mat-card-image src="assets/img/backgrounds/1.jpg">
  <mat-card-content>
    <p>Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. </p>
  </mat-card-content>
  <mat-divider></mat-divider>
  <mat-card-actions>
    <div fxLayout="row">
      <button mat-icon-button>
        <mat-icon>share</mat-icon>
      </button>
      <button mat-icon-button>
        <mat-icon>favorite</mat-icon>
      </button>
      <span fxFlex></span>
      <button mat-button>
        More Info
      </button>
      <button mat-button>
        Save as
      </button>
    </div>
  </mat-card-actions>
</mat-card>`;
        this.icShare = _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icFavorite = _iconify_icons_ic_twotone_favorite__WEBPACK_IMPORTED_MODULE_3___default.a;
    }
    ngOnInit() {
    }
};
ComponentsOverviewCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-components-overview-cards',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./components-overview-cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-overview/components/components-overview-cards/components-overview-cards.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./components-overview-cards.component.scss */ "./src/app/pages/ui/components/components-overview/components/components-overview-cards/components-overview-cards.component.scss")).default]
    })
], ComponentsOverviewCardsComponent);



/***/ }),

/***/ "./src/app/pages/ui/components/components-overview/components/components-overview-cards/components-overview-cards.module.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-cards/components-overview-cards.module.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: ComponentsOverviewCardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsOverviewCardsModule", function() { return ComponentsOverviewCardsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_overview_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components-overview-cards.component */ "./src/app/pages/ui/components/components-overview/components/components-overview-cards/components-overview-cards.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.module */ "./src/@vex/components/highlight/highlight.module.ts");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");












let ComponentsOverviewCardsModule = class ComponentsOverviewCardsModule {
};
ComponentsOverviewCardsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_overview_cards_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsOverviewCardsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_10__["HighlightModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"]
        ],
        exports: [_components_overview_cards_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsOverviewCardsComponent"]]
    })
], ComponentsOverviewCardsModule);



/***/ })

}]);
//# sourceMappingURL=default~components-cards-components-cards-module~components-overview-components-overview-module-es2015.js.map