(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["changelog-changelog-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documentation/changelog/changelog.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documentation/changelog/changelog.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n\n  <vex-secondary-toolbar current=\"Documentation\">\n    <vex-breadcrumbs [crumbs]=\"['Documentation', 'Changelog']\" fxFlex=\"auto\"></vex-breadcrumbs>\n\n    <button class=\"ml-2\" color=\"primary\" mat-icon-button type=\"button\">\n      <mat-icon [icIcon]=\"icMoreVert\"></mat-icon>\n    </button>\n  </vex-secondary-toolbar>\n\n  <vex-page-layout-content vexContainer>\n    <div class=\"card p-gutter relative\">\n      <showdown src=\"/CHANGELOG.md\"></showdown>\n    </div>\n  </vex-page-layout-content>\n</vex-page-layout>\n");

/***/ }),

/***/ "./src/app/pages/documentation/changelog/changelog-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/documentation/changelog/changelog-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ChangelogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangelogRoutingModule", function() { return ChangelogRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _changelog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changelog.component */ "./src/app/pages/documentation/changelog/changelog.component.ts");




const routes = [
    {
        path: '',
        component: _changelog_component__WEBPACK_IMPORTED_MODULE_3__["ChangelogComponent"]
    }
];
let ChangelogRoutingModule = class ChangelogRoutingModule {
};
ChangelogRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ChangelogRoutingModule);



/***/ }),

/***/ "./src/app/pages/documentation/changelog/changelog.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/documentation/changelog/changelog.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep vex-changelog vex-secondary-toolbar h1, ::ng-deep vex-changelog vex-secondary-toolbar h2 {\n  border: none;\n  margin: 0;\n}\n\n::ng-deep vex-changelog showdown a {\n  --text-opacity: 1;\n  color: #5c77ff;\n  color: rgba(92, 119, 255, var(--text-opacity));\n}\n\n::ng-deep vex-changelog showdown > *:first-child {\n  margin-top: 0 !important;\n}\n\n::ng-deep vex-changelog h1, ::ng-deep vex-changelog h2 {\n  border-bottom: 1px solid var(--foreground-divider);\n  padding-bottom: 0.3em;\n}\n\n::ng-deep vex-changelog h1, ::ng-deep vex-changelog h2, ::ng-deep vex-changelog h3, ::ng-deep vex-changelog h4, ::ng-deep vex-changelog h5, ::ng-deep vex-changelog h6 {\n  font-weight: var(--font-weight-medium) !important;\n  margin-bottom: var(--padding-16);\n  margin-top: 32px;\n}\n\n::ng-deep vex-changelog p, ::ng-deep vex-changelog ul, ::ng-deep vex-changelog li {\n  font-size: 15px !important;\n  line-height: 1.5 !important;\n}\n\n::ng-deep vex-changelog strong {\n  font-weight: 500;\n}\n\n::ng-deep vex-changelog code.typescript {\n  display: block;\n}\n\n::ng-deep vex-changelog table {\n  border: 1px solid var(--foreground-divider);\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 15px;\n}\n\n::ng-deep vex-changelog table tr {\n  background-color: var(--background-card);\n  border-top: 1px solid var(--foreground-divider);\n}\n\n::ng-deep vex-changelog table tr:nth-child(2n) {\n  background-color: var(--background-app-bar);\n}\n\n::ng-deep vex-changelog table td, ::ng-deep vex-changelog table th {\n  border-left: 1px solid var(--foreground-divider);\n  padding: var(--padding-12) var(--padding-16);\n}\n\n::ng-deep vex-changelog table td:first-child, ::ng-deep vex-changelog table th:first-child {\n  border-left: none;\n}\n\n::ng-deep vex-changelog table th {\n  font-weight: var(--font-weight-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNvL0Rlc2t0b3AvVGF4aS1mcm9udC9zcmMvYXBwL3BhZ2VzL2RvY3VtZW50YXRpb24vY2hhbmdlbG9nL2NoYW5nZWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZG9jdW1lbnRhdGlvbi9jaGFuZ2Vsb2cvY2hhbmdlbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0RBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaURBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsMkNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usd0NBQUE7RUFDQSwrQ0FBQTtBQ0NGOztBREVBO0VBQ0UsMkNBQUE7QUNDRjs7QURFQTtFQUNFLGdEQUFBO0VBQ0EsNENBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9jdW1lbnRhdGlvbi9jaGFuZ2Vsb2cvY2hhbmdlbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdmV4LXNlY29uZGFyeS10b29sYmFyIGgxLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB2ZXgtc2Vjb25kYXJ5LXRvb2xiYXIgaDIge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgc2hvd2Rvd24gYSB7XG4gIC0tdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogIzVjNzdmZjtcbiAgY29sb3I6IHJnYmEoOTIsIDExOSwgMjU1LCB2YXIoLS10ZXh0LW9wYWNpdHkpKTtcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgc2hvd2Rvd24gPiAqOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBoMSwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgaDIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbiAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBoMSwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgaDIsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGgzLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBoNCwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgaDUsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGg2IHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFkZGluZy0xNik7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHAsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHVsLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBsaSB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGNvZGUudHlwZXNjcmlwdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB0YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHRhYmxlIHRyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jYXJkKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHRhYmxlIHRyOm50aC1jaGlsZCgybikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWFwcC1iYXIpO1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB0YWJsZSB0ZCwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdGFibGUgdGgge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctMTIpIHZhcigtLXBhZGRpbmctMTYpO1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB0YWJsZSB0ZDpmaXJzdC1jaGlsZCwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdGFibGUgdGg6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdGFibGUgdGgge1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbn0iLCI6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB2ZXgtc2Vjb25kYXJ5LXRvb2xiYXIgaDEsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHZleC1zZWNvbmRhcnktdG9vbGJhciBoMiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBzaG93ZG93biBhIHtcbiAgLS10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiAjNWM3N2ZmO1xuICBjb2xvcjogcmdiYSg5MiwgMTE5LCAyNTUsIHZhcigtLXRleHQtb3BhY2l0eSkpO1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBzaG93ZG93biA+ICo6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGgxLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBoMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zZW07XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGgxLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBoMiwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgaDMsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGg0LCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBoNSwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgaDYge1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWRkaW5nLTE2KTtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgcCwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdWwsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGxpIHtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgY29kZS50eXBlc2NyaXB0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdGFibGUgdHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNhcmQpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdGFibGUgdHI6bnRoLWNoaWxkKDJuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYXBwLWJhcik7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHRhYmxlIHRkLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB0YWJsZSB0aCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xMikgdmFyKC0tcGFkZGluZy0xNik7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHRhYmxlIHRkOmZpcnN0LWNoaWxkLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB0YWJsZSB0aDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB0YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/documentation/changelog/changelog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/documentation/changelog/changelog.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChangelogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangelogComponent", function() { return ChangelogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2__);



let ChangelogComponent = class ChangelogComponent {
    constructor() {
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2___default.a;
    }
    ngOnInit() {
    }
};
ChangelogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-changelog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./changelog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documentation/changelog/changelog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./changelog.component.scss */ "./src/app/pages/documentation/changelog/changelog.component.scss")).default]
    })
], ChangelogComponent);



/***/ }),

/***/ "./src/app/pages/documentation/changelog/changelog.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/documentation/changelog/changelog.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChangelogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangelogModule", function() { return ChangelogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _changelog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changelog-routing.module */ "./src/app/pages/documentation/changelog/changelog-routing.module.ts");
/* harmony import */ var _changelog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changelog.component */ "./src/app/pages/documentation/changelog/changelog.component.ts");
/* harmony import */ var _markdown_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../markdown.module */ "./src/app/pages/documentation/markdown.module.ts");
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");














let ChangelogModule = class ChangelogModule {
};
ChangelogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_changelog_component__WEBPACK_IMPORTED_MODULE_4__["ChangelogComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _changelog_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChangelogRoutingModule"],
            _markdown_module__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"],
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["SecondaryToolbarModule"],
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"],
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_13__["ContainerModule"]
        ]
    })
], ChangelogModule);



/***/ })

}]);
//# sourceMappingURL=changelog-changelog-module-es2015.js.map