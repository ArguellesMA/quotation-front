(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~caccc31e"],{

/***/ "./src/@vex/components/page-layout/page-layout-content.directive.ts":
/*!**************************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout-content.directive.ts ***!
  \**************************************************************************/
/*! exports provided: PageLayoutContentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutContentDirective", function() { return PageLayoutContentDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageLayoutContentDirective = class PageLayoutContentDirective {
    constructor() { }
};
PageLayoutContentDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[vexPageLayoutContent],vex-page-layout-content',
        host: {
            class: 'vex-page-layout-content'
        }
    })
], PageLayoutContentDirective);



/***/ }),

/***/ "./src/@vex/components/page-layout/page-layout-header.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout-header.directive.ts ***!
  \*************************************************************************/
/*! exports provided: PageLayoutHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutHeaderDirective", function() { return PageLayoutHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageLayoutHeaderDirective = class PageLayoutHeaderDirective {
    constructor() { }
};
PageLayoutHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[vexPageLayoutHeader],vex-page-layout-header',
        host: {
            class: 'vex-page-layout-header'
        }
    })
], PageLayoutHeaderDirective);



/***/ }),

/***/ "./src/@vex/components/page-layout/page-layout.component.scss":
/*!********************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vex-page-layout {\n  display: block;\n}\n\n.vex-page-layout-simple .vex-page-layout-content {\n  padding-bottom: var(--padding-gutter);\n  padding-top: var(--padding-gutter);\n}\n\n.vex-page-layout-card {\n  padding-bottom: var(--padding);\n}\n\n.vex-page-layout-card .vex-page-layout-header {\n  margin-bottom: calc(var(--page-layout-toolbar-height) * -1);\n  padding-bottom: var(--page-layout-toolbar-height);\n}\n\n.vex-page-layout-card .vex-page-layout-content > * > .mat-tab-group .mat-tab-label,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label {\n  height: var(--page-layout-toolbar-height);\n}\n\n.vex-page-layout-card .vex-page-layout-content > * > .mat-tab-group .mat-tab-label.mat-tab-label-active,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label.mat-tab-label-active {\n  opacity: 1;\n}\n\n.vex-page-layout-header {\n  align-items: center;\n  --bg-opacity: 1;\n  background-color: #5c77ff;\n  background-color: rgba(92, 119, 255, var(--bg-opacity));\n  --text-opacity: 1;\n  color: #FFF;\n  color: rgba(255, 255, 255, var(--text-opacity));\n  box-sizing: content-box !important;\n  display: flex;\n  flex-direction: row;\n  height: calc(var(--page-layout-header-height) - var(--page-layout-toolbar-height));\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n  place-content: center flex-start;\n}\n\n.vex-page-layout-header .vex-breadcrumb {\n  --text-opacity: 1;\n  color: #FFF;\n  color: rgba(255, 255, 255, var(--text-opacity));\n  opacity: 0.5;\n}\n\n.vex-page-layout-header .vex-breadcrumb:hover {\n  --text-opacity: 1;\n  color: #FFF;\n  color: rgba(255, 255, 255, var(--text-opacity));\n  opacity: 1;\n}\n\n.vex-page-layout-content {\n  box-sizing: border-box;\n  display: block;\n  padding-left: var(--padding-gutter);\n  padding-right: var(--padding-gutter);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNvL0Rlc2t0b3AvVGF4aS1mcm9udC9zcmMvQHZleC9jb21wb25lbnRzL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL0B2ZXgvY29tcG9uZW50cy9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0VBQ0Esa0NBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyREFBQTtFQUNBLGlEQUFBO0FDQ0Y7O0FERUE7O0VBRUUseUNBQUE7QUNDRjs7QURFQTs7RUFFRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHVEQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtGQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSwrQ0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9AdmV4L2NvbXBvbmVudHMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmV4LXBhZ2UtbGF5b3V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtc2ltcGxlIC52ZXgtcGFnZS1sYXlvdXQtY29udGVudCB7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCB7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCkgKiAtMSk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCk7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgPiAqID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwsXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwge1xuICBoZWlnaHQ6IHZhcigtLXBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0KTtcbn1cblxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtY29udGVudCA+ICogPiAubWF0LXRhYi1ncm91cCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSxcbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgPiAubWF0LXRhYi1ncm91cCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLS1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM3N2ZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkyLCAxMTksIDI1NSwgdmFyKC0tYmctb3BhY2l0eSkpO1xuICAtLXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6ICNGRkY7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXRleHQtb3BhY2l0eSkpO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IGNhbGModmFyKC0tcGFnZS1sYXlvdXQtaGVhZGVyLWhlaWdodCkgLSB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCkpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmcpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIC52ZXgtYnJlYWRjcnVtYiB7XG4gIC0tdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogI0ZGRjtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnZleC1wYWdlLWxheW91dC1oZWFkZXIgLnZleC1icmVhZGNydW1iOmhvdmVyIHtcbiAgLS10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiAjRkZGO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10ZXh0LW9wYWNpdHkpKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnZleC1wYWdlLWxheW91dC1jb250ZW50IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG59IiwiLnZleC1wYWdlLWxheW91dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LXNpbXBsZSAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQge1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZyk7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpICogLTEpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gKiA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsLFxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtY29udGVudCA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsIHtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCk7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgPiAqID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmUsXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWhlYWRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC0tYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNzdmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MiwgMTE5LCAyNTUsIHZhcigtLWJnLW9wYWNpdHkpKTtcbiAgLS10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiAjRkZGO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10ZXh0LW9wYWNpdHkpKTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbGF5b3V0LWhlYWRlci1oZWlnaHQpIC0gdmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpKTtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nKTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZyk7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBmbGV4LXN0YXJ0O1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWhlYWRlciAudmV4LWJyZWFkY3J1bWIge1xuICAtLXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6ICNGRkY7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXRleHQtb3BhY2l0eSkpO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIC52ZXgtYnJlYWRjcnVtYjpob3ZlciB7XG4gIC0tdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogI0ZGRjtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY29udGVudCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmctZ3V0dGVyKTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/@vex/components/page-layout/page-layout.component.ts":
/*!******************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: PageLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutComponent", function() { return PageLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageLayoutComponent = class PageLayoutComponent {
    constructor() {
        this.mode = 'simple';
    }
    get isCard() {
        return this.mode === 'card';
    }
    get isSimple() {
        return this.mode === 'simple';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageLayoutComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vex-page-layout-card')
], PageLayoutComponent.prototype, "isCard", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vex-page-layout-simple')
], PageLayoutComponent.prototype, "isSimple", null);
PageLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-page-layout',
        template: '<ng-content></ng-content>',
        host: {
            class: 'vex-page-layout'
        },
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-layout.component.scss */ "./src/@vex/components/page-layout/page-layout.component.scss")).default]
    })
], PageLayoutComponent);



/***/ }),

/***/ "./src/@vex/components/page-layout/page-layout.module.ts":
/*!***************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout.module.ts ***!
  \***************************************************************/
/*! exports provided: PageLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutModule", function() { return PageLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _page_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-layout.component */ "./src/@vex/components/page-layout/page-layout.component.ts");
/* harmony import */ var _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-layout-header.directive */ "./src/@vex/components/page-layout/page-layout-header.directive.ts");
/* harmony import */ var _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-layout-content.directive */ "./src/@vex/components/page-layout/page-layout-content.directive.ts");






let PageLayoutModule = class PageLayoutModule {
};
PageLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [_page_layout_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__["PageLayoutContentDirective"]],
        exports: [_page_layout_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__["PageLayoutContentDirective"]]
    })
], PageLayoutModule);



/***/ })

}]);
//# sourceMappingURL=default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~caccc31e-es2015.js.map