(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-apps-contacts-contacts-module"],{

/***/ "./src/app/pages/apps/contacts/contacts-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ContactsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsRoutingModule", function() { return ContactsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'grid',
                loadChildren: () => Promise.all(/*! import() | contacts-grid-contacts-grid-module */[__webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~097b817e"), __webpack_require__.e("default~contacts-grid-contacts-grid-module~contacts-table-contacts-table-module~pages-apps-calendar-~6a9edf45"), __webpack_require__.e("default~contacts-grid-contacts-grid-module~contacts-table-contacts-table-module"), __webpack_require__.e("common"), __webpack_require__.e("contacts-grid-contacts-grid-module")]).then(__webpack_require__.bind(null, /*! ./contacts-grid/contacts-grid.module */ "./src/app/pages/apps/contacts/contacts-grid/contacts-grid.module.ts")).then(m => m.ContactsGridModule)
            },
            {
                path: 'table',
                loadChildren: () => Promise.all(/*! import() | contacts-table-contacts-table-module */[__webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~097b817e"), __webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~90406d78"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-aio-table-aio-table-module~pages-apps-almace~7bd49c41"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-aio-table-aio-table-module~pages-apps-almace~3bad751b"), __webpack_require__.e("default~contacts-grid-contacts-grid-module~contacts-table-contacts-table-module~pages-apps-calendar-~6a9edf45"), __webpack_require__.e("default~contacts-grid-contacts-grid-module~contacts-table-contacts-table-module"), __webpack_require__.e("common"), __webpack_require__.e("contacts-table-contacts-table-module")]).then(__webpack_require__.bind(null, /*! ./contacts-table/contacts-table.module */ "./src/app/pages/apps/contacts/contacts-table/contacts-table.module.ts")).then(m => m.ContactsTableModule)
            }
        ]
    }
];
let ContactsRoutingModule = class ContactsRoutingModule {
};
ContactsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ContactsRoutingModule);



/***/ }),

/***/ "./src/app/pages/apps/contacts/contacts.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts.module.ts ***!
  \********************************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts-routing.module */ "./src/app/pages/apps/contacts/contacts-routing.module.ts");




let ContactsModule = class ContactsModule {
};
ContactsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _contacts_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactsRoutingModule"]
        ]
    })
], ContactsModule);



/***/ })

}]);
//# sourceMappingURL=pages-apps-contacts-contacts-module-es2015.js.map