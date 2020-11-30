function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-table-contacts-table-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAppsContactsContactsTableContactsDataTableContactsDataTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"h-full relative\" vexScrollbar>\n  <div fxLayout=\"column\" fxLayoutAlign=\"space-between\">\n    <table [@stagger]=\"dataSource.filteredData\"\n           [dataSource]=\"dataSource\"\n           class=\"w-full\"\n           fxFlex=\"auto\"\n           mat-table\n           matSort>\n\n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n\n      <!-- Model Properties Column -->\n      <ng-container *ngFor=\"let column of columns\">\n        <ng-container *ngIf=\"column.type === 'text'\" [matColumnDef]=\"column.property\">\n          <th *matHeaderCellDef mat-header-cell mat-sort-header> {{ column.label }}</th>\n          <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" mat-cell>{{ row[column.property] }}</td>\n        </ng-container>\n\n        <ng-container *ngIf=\"column.type === 'checkbox'\" [matColumnDef]=\"column.property\">\n          <th *matHeaderCellDef mat-header-cell mat-sort-header> {{ column.label }}</th>\n          <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" mat-cell>\n            <mat-checkbox (click)=\"$event.stopPropagation()\" [checked]=\"row[column.property]\"></mat-checkbox>\n          </td>\n        </ng-container>\n\n        <ng-container *ngIf=\"column.type === 'image'\" [matColumnDef]=\"column.property\">\n          <th *matHeaderCellDef mat-header-cell mat-sort-header> {{ column.label }}</th>\n          <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" mat-cell>\n            <img [src]=\"row[column.property]\" class=\"avatar h-9 w-9 align-middle my-2\">\n          </td>\n        </ng-container>\n\n        <ng-container *ngIf=\"column.type === 'button'\" [matColumnDef]=\"column.property\">\n          <ng-container *ngIf=\"column.property === 'starred'\">\n            <th *matHeaderCellDef mat-header-cell mat-sort-header> {{ column.label }}</th>\n            <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" class=\"w-10\" mat-cell>\n              <button (click)=\"emitToggleStar($event, row.id)\" mat-icon-button type=\"button\">\n                <mat-icon *ngIf=\"row[column.property]\" [icIcon]=\"icStar\" class=\"text-amber-500\"></mat-icon>\n                <mat-icon *ngIf=\"!row[column.property]\" [icIcon]=\"icStarBorder\"></mat-icon>\n              </button>\n            </td>\n          </ng-container>\n\n          <ng-container *ngIf=\"column.property === 'menu'\">\n            <th *matHeaderCellDef mat-header-cell mat-sort-header> {{ column.label }}</th>\n            <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" class=\"w-10\" mat-cell>\n              <button (click)=\"$event.stopPropagation()\"\n                      [matMenuTriggerFor]=\"contactMenu\"\n                      mat-icon-button\n                      type=\"button\">\n                <mat-icon [icIcon]=\"icMoreVert\"></mat-icon>\n              </button>\n            </td>\n          </ng-container>\n        </ng-container>\n      </ng-container>\n\n\n      <tr *matHeaderRowDef=\"visibleColumns; sticky: true\" mat-header-row></tr>\n      <!--suppress UnnecessaryLabelJS -->\n      <tr (click)=\"openContact.emit(row.id)\"\n          *matRowDef=\"let row; columns: visibleColumns;\"\n          @fadeInUp\n          class=\"hover:bg-hover cursor-pointer\"\n          mat-row></tr>\n    </table>\n\n    <div *ngIf=\"dataSource.filteredData.length === 0\"\n         @scaleFadeIn\n         fxFlex=\"auto\"\n         fxLayout=\"column\"\n         fxLayoutAlign=\"center center\">\n      <img class=\"m-12 h-64\" src=\"assets/img/illustrations/idea.svg\">\n      <h2 class=\"headline m-0 text-center\">No contacts matching your filters</h2>\n    </div>\n\n    <mat-paginator [fxHide]=\"dataSource.filteredData.length === 0\"\n                   [pageSize]=\"pageSize\"\n                   [pageSizeOptions]=\"pageSizeOptions\"\n                   class=\"sticky bottom-0 left-0 right-0 border-t\"\n                   fxFlex=\"none\"></mat-paginator>\n  </div>\n</div>\n\n<mat-menu #contactMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n  <button mat-menu-item>\n    <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n    <span>Edit Contact</span>\n  </button>\n\n  <button mat-menu-item>\n    <mat-icon [icIcon]=\"icDeleteForever\"></mat-icon>\n    <span>Delete Contact</span>\n  </button>\n</mat-menu>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAppsContactsContactsTableContactsTableMenuContactsTableMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div @stagger class=\"max-w-xxxs w-full\">\n  <div class=\"h-14 mb-6 flex bg-primary-500 px-gutter sm:px-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <button (click)=\"openAddNew.emit()\" class=\"flex-auto\" mat-raised-button type=\"button\">\n      <ic-icon [icon]=\"icPersonAdd\" class=\"ltr:mr-3 rtl:ml-3\" inline=\"true\" size=\"18px\"></ic-icon>\n      <span>Nueva Cotizacion</span>\n    </button>\n  </div>\n\n  <div class=\"px-gutter sm:px-0\">\n    <ng-container *ngFor=\"let item of items\">\n      <a (click)=\"setFilter(item.id)\"\n         *ngIf=\"item.type === 'link'\"\n         @fadeInRight\n         [class.bg-hover]=\"isActive(item.id)\"\n         [class.text-primary-500]=\"isActive(item.id)\"\n         class=\"list-item mt-2 no-underline flex items-center\"\n         matRipple>\n        <ic-icon [icon]=\"item.icon\" [ngClass]=\"item.classes?.icon\" class=\"ltr:mr-3 rtl:ml-3\" size=\"24px\"></ic-icon>\n        <span>{{ item.label }}</span>\n      </a>\n\n      <h3 *ngIf=\"item.type === 'subheading'\"\n          @fadeInRight\n          class=\"caption text-secondary uppercase font-medium mb-0 mt-6\">{{ item.label }}</h3>\n    </ng-container>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-table.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-table.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAppsContactsContactsTableContactsTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-full h-full flex flex-col\">\n  <div class=\"px-gutter pt-6 pb-20 bg-primary-500 flex-none\">\n    <div class=\"flex items-center\" vexContainer>\n      <button (click)=\"openMenu()\" @scaleIn class=\"sm:hidden text-primary-contrast-500\" mat-icon-button type=\"button\">\n        <mat-icon [icIcon]=\"icMenu\"></mat-icon>\n      </button>\n      <h2 class=\"headline text-primary-contrast-500 m-0 flex items-center w-full max-w-xxxs mr-6\">\n        <ic-icon @scaleIn [icon]=\"icContacts\" class=\"hidden sm:block\"></ic-icon>\n        <span @fadeInRight class=\"ml-4 block\">Cotizaciones</span>\n      </h2>\n\n      <div class=\"hidden sm:flex items-center bg-card rounded-full overflow-hidden relative ltr:pl-5 rtl:pr-5 h-12 max-w-md w-full shadow-8 mx-auto\">\n        <ic-icon [icon]=\"icSearch\" class=\"text-secondary flex-none\" size=\"24px\"></ic-icon>\n        <input [formControl]=\"searchCtrl\"\n               class=\"border-0 h-12 outline-none ltr:pl-4 rtl:pr-4 placeholder:text-secondary bg-card flex-auto\"\n               placeholder=\"Buscar Clientes...\"\n               type=\"text\"/>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"-mt-14 pt-0 overflow-hidden flex\" vexContainer>\n\n    <mat-drawer-container class=\"bg-transparent flex-auto flex\">\n      <mat-drawer [(opened)]=\"menuOpen\" mode=\"over\">\n        <vex-contacts-table-menu (filterChange)=\"setData($event)\"\n                                 (openAddNew)=\"openContact()\"\n                                 class=\"sm:hidden\"></vex-contacts-table-menu>\n      </mat-drawer>\n      <mat-drawer-content class=\"p-gutter pt-0 flex-auto flex items-start\">\n        <vex-contacts-table-menu (filterChange)=\"setData($event)\"\n                                 (openAddNew)=\"openContact()\"\n                                 class=\"hidden sm:block mr-6\"></vex-contacts-table-menu>\n\n        <div class=\"card h-full overflow-hidden flex-auto\">\n          <vex-contacts-data-table (openContact)=\"openContact($event)\"\n                                   (toggleStar)=\"toggleStar($event)\"\n                                   [columns]=\"tableColumns\"\n                                   [data]=\"tableData\"\n                                   [searchStr]=\"searchStr$ | async\"></vex-contacts-data-table>\n        </div>\n      </mat-drawer-content>\n\n    </mat-drawer-container>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.scss":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.scss ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAppsContactsContactsTableContactsDataTableContactsDataTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvY29udGFjdHMvY29udGFjdHMtdGFibGUvY29udGFjdHMtZGF0YS10YWJsZS9jb250YWN0cy1kYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: ContactsDataTableComponent */

  /***/
  function srcAppPagesAppsContactsContactsTableContactsDataTableContactsDataTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsDataTableComponent", function () {
      return ContactsDataTableComponent;
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


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star */
    "./node_modules/@iconify/icons-ic/twotone-star.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star-border */
    "./node_modules/@iconify/icons-ic/twotone-star-border.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-more-vert */
    "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-edit */
    "./node_modules/@iconify/icons-ic/twotone-edit.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-delete-forever */
    "./node_modules/@iconify/icons-ic/twotone-delete-forever.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");
    /* harmony import */


    var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../../../@vex/animations/scale-fade-in.animation */
    "./src/@vex/animations/scale-fade-in.animation.ts");

    var ContactsDataTableComponent = /*#__PURE__*/function () {
      function ContactsDataTableComponent() {
        _classCallCheck(this, ContactsDataTableComponent);

        this.pageSize = 20;
        this.pageSizeOptions = [10, 20, 50];
        this.toggleStar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openContact = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icStarBorder = _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icDeleteForever = _iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8___default.a;
      }

      _createClass(ContactsDataTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.columns) {
            this.visibleColumns = this.columns.map(function (column) {
              return column.property;
            });
          }

          if (changes.data) {
            this.dataSource.data = this.data;
          }

          if (changes.searchStr) {
            this.dataSource.filter = (this.searchStr || '').trim().toLowerCase();
          }
        }
      }, {
        key: "emitToggleStar",
        value: function emitToggleStar(event, id) {
          event.stopPropagation();
          this.toggleStar.emit(id);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }]);

      return ContactsDataTableComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContactsDataTableComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContactsDataTableComponent.prototype, "columns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContactsDataTableComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContactsDataTableComponent.prototype, "pageSizeOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContactsDataTableComponent.prototype, "searchStr", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ContactsDataTableComponent.prototype, "toggleStar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ContactsDataTableComponent.prototype, "openContact", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": true
    })], ContactsDataTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
      "static": true
    })], ContactsDataTableComponent.prototype, "sort", void 0);
    ContactsDataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-contacts-data-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contacts-data-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.html"))["default"],
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
        useValue: {
          appearance: 'standard'
        }
      }],
      animations: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_11__["stagger20ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_12__["fadeInUp400ms"], _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_13__["scaleFadeIn400ms"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contacts-data-table.component.scss */
      "./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.scss"))["default"]]
    })], ContactsDataTableComponent);
    /***/
  },

  /***/
  "./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: ContactsTableMenuComponent */

  /***/
  function srcAppPagesAppsContactsContactsTableContactsTableMenuContactsTableMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsTableMenuComponent", function () {
      return ContactsTableMenuComponent;
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


    var _iconify_icons_ic_twotone_view_headline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-view-headline */
    "./node_modules/@iconify/icons-ic/twotone-view-headline.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_view_headline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_view_headline__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _static_data_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../static-data/contacts */
    "./src/static-data/contacts.ts");
    /* harmony import */


    var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../@vex/animations/fade-in-right.animation */
    "./src/@vex/animations/fade-in-right.animation.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-history */
    "./node_modules/@iconify/icons-ic/twotone-history.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star */
    "./node_modules/@iconify/icons-ic/twotone-star.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-label */
    "./node_modules/@iconify/icons-ic/twotone-label.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-person-add */
    "./node_modules/@iconify/icons-ic/twotone-person-add.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");

    var ContactsTableMenuComponent = /*#__PURE__*/function () {
      function ContactsTableMenuComponent() {
        _classCallCheck(this, ContactsTableMenuComponent);

        this.items = [{
          type: 'link',
          id: 'all',
          icon: _iconify_icons_ic_twotone_view_headline__WEBPACK_IMPORTED_MODULE_2___default.a,
          label: 'Todas las cotizaciones'
        }, {
          type: 'link',
          id: 'frequently',
          icon: _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_5___default.a,
          label: 'Frequently contacted'
        }, {
          type: 'link',
          id: 'starred',
          icon: _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_6___default.a,
          label: 'Starred'
        }, {
          type: 'subheading',
          label: 'Labels'
        }, {
          type: 'link',
          id: 'family',
          icon: _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7___default.a,
          label: 'Family',
          classes: {
            icon: 'text-primary-500'
          }
        }, {
          type: 'link',
          id: 'friends',
          icon: _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7___default.a,
          label: 'Friends',
          classes: {
            icon: 'text-green-500'
          }
        }, {
          type: 'link',
          id: 'colleagues',
          icon: _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7___default.a,
          label: 'Colleagues',
          classes: {
            icon: 'text-amber-500'
          }
        }, {
          type: 'link',
          id: 'business',
          icon: _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7___default.a,
          label: 'Business',
          classes: {
            icon: 'text-gray-500'
          }
        }];
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openAddNew = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeCategory = 'all';
        this.icPersonAdd = _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_8___default.a;
      }

      _createClass(ContactsTableMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setFilter",
        value: function setFilter(category) {
          this.activeCategory = category;

          if (category === 'starred') {
            return this.filterChange.emit(_static_data_contacts__WEBPACK_IMPORTED_MODULE_3__["contactsData"].filter(function (c) {
              return c.starred;
            }));
          }

          if (category === 'all') {
            return this.filterChange.emit(_static_data_contacts__WEBPACK_IMPORTED_MODULE_3__["contactsData"]);
          }

          if (category === 'frequently' || category === 'family' || category === 'friends' || category === 'colleagues' || category === 'business') {
            return this.filterChange.emit([]);
          }
        }
      }, {
        key: "isActive",
        value: function isActive(category) {
          return this.activeCategory === category;
        }
      }]);

      return ContactsTableMenuComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContactsTableMenuComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ContactsTableMenuComponent.prototype, "filterChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ContactsTableMenuComponent.prototype, "openAddNew", void 0);
    ContactsTableMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-contacts-table-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contacts-table-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.html"))["default"],
      animations: [_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInRight400ms"], _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_9__["stagger40ms"]]
    })], ContactsTableMenuComponent);
    /***/
  },

  /***/
  "./src/app/pages/apps/contacts/contacts-table/contacts-table-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/contacts-table/contacts-table-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ContactsTableRoutingModule */

  /***/
  function srcAppPagesAppsContactsContactsTableContactsTableRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsTableRoutingModule", function () {
      return ContactsTableRoutingModule;
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


    var _contacts_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contacts-table.component */
    "./src/app/pages/apps/contacts/contacts-table/contacts-table.component.ts");

    var routes = [{
      path: '',
      component: _contacts_table_component__WEBPACK_IMPORTED_MODULE_3__["ContactsTableComponent"],
      data: {
        scrollDisabled: true,
        toolbarShadowEnabled: true
      }
    }];

    var ContactsTableRoutingModule = function ContactsTableRoutingModule() {
      _classCallCheck(this, ContactsTableRoutingModule);
    };

    ContactsTableRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactsTableRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/apps/contacts/contacts-table/contacts-table.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/contacts-table/contacts-table.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ContactsTableComponent */

  /***/
  function srcAppPagesAppsContactsContactsTableContactsTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsTableComponent", function () {
      return ContactsTableComponent;
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


    var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-contacts */
    "./node_modules/@iconify/icons-ic/twotone-contacts.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-search */
    "./node_modules/@iconify/icons-ic/twotone-search.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star */
    "./node_modules/@iconify/icons-ic/twotone-star.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../@vex/animations/scale-in.animation */
    "./src/@vex/animations/scale-in.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-right.animation */
    "./src/@vex/animations/fade-in-right.animation.ts");
    /* harmony import */


    var _static_data_cotizaciones__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../static-data/cotizaciones */
    "./src/static-data/cotizaciones.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _components_contacts_edit_contacts_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../components/contacts-edit/contacts-edit.component */
    "./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.component.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-menu */
    "./node_modules/@iconify/icons-ic/twotone-menu.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_13__);

    var ContactsTableComponent = /*#__PURE__*/function () {
      function ContactsTableComponent(dialog) {
        _classCallCheck(this, ContactsTableComponent);

        this.dialog = dialog;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.searchStr$ = this.searchCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(10));
        this.menuOpen = false;
        this.activeCategory = 'all';
        this.tableData = _static_data_cotizaciones__WEBPACK_IMPORTED_MODULE_7__["cotizacionesData"];
        this.tableColumns = [{
          label: '',
          property: 'selected',
          type: 'checkbox',
          cssClasses: ['w-6']
        }, {
          label: '',
          property: 'imageSrc',
          type: 'image',
          cssClasses: ['min-w-9']
        }, {
          label: 'NAME',
          property: 'name',
          type: 'text',
          cssClasses: ['font-medium']
        }, {
          label: 'MARCA',
          property: 'marca',
          type: 'text',
          cssClasses: ['text-secondary']
        }, {
          label: 'MODELO',
          property: 'modelo',
          type: 'text',
          cssClasses: ['text-secondary']
        }, {
          label: '',
          property: 'starred',
          type: 'button',
          cssClasses: ['text-secondary', 'w-10']
        }, {
          label: '',
          property: 'menu',
          type: 'button',
          cssClasses: ['text-secondary', 'w-10']
        }];
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icContacts = _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icMenu = _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_13___default.a;
      }

      _createClass(ContactsTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openContact",
        value: function openContact(id) {
          this.dialog.open(_components_contacts_edit_contacts_edit_component__WEBPACK_IMPORTED_MODULE_12__["ContactsEditComponent"], {
            data: id || null,
            width: '600px'
          });
        }
      }, {
        key: "toggleStar",
        value: function toggleStar(id) {
          var contact = this.tableData.find(function (c) {
            return c.id === id;
          });

          if (contact) {
            contact.starred = !contact.starred;
          }
        }
      }, {
        key: "setData",
        value: function setData(data) {
          this.tableData = data;
          this.menuOpen = false;
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.menuOpen = true;
        }
      }]);

      return ContactsTableComponent;
    }();

    ContactsTableComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]
      }];
    };

    ContactsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-contacts-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contacts-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-table.component.html"))["default"],
      animations: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__["stagger40ms"], _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_5__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_6__["fadeInRight400ms"]]
    })], ContactsTableComponent);
    /***/
  },

  /***/
  "./src/app/pages/apps/contacts/contacts-table/contacts-table.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/contacts-table/contacts-table.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ContactsTableModule */

  /***/
  function srcAppPagesAppsContactsContactsTableContactsTableModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsTableModule", function () {
      return ContactsTableModule;
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


    var _contacts_table_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contacts-table-routing.module */
    "./src/app/pages/apps/contacts/contacts-table/contacts-table-routing.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../../../@vex/components/scrollbar/scrollbar.module */
    "./src/@vex/components/scrollbar/scrollbar.module.ts");
    /* harmony import */


    var _contacts_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./contacts-table.component */
    "./src/app/pages/apps/contacts/contacts-table/contacts-table.component.ts");
    /* harmony import */


    var _contacts_data_table_contacts_data_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./contacts-data-table/contacts-data-table.component */
    "./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.ts");
    /* harmony import */


    var _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../components/contacts-edit/contacts-edit.module */
    "./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");
    /* harmony import */


    var _contacts_table_menu_contacts_table_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./contacts-table-menu/contacts-table-menu.component */
    "./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");

    var ContactsTableModule = function ContactsTableModule() {
      _classCallCheck(this, ContactsTableModule);
    };

    ContactsTableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_contacts_table_component__WEBPACK_IMPORTED_MODULE_16__["ContactsTableComponent"], _contacts_data_table_contacts_data_table_component__WEBPACK_IMPORTED_MODULE_17__["ContactsDataTableComponent"], _contacts_table_menu_contacts_table_menu_component__WEBPACK_IMPORTED_MODULE_21__["ContactsTableMenuComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _contacts_table_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactsTableRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_15__["ScrollbarModule"], _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_18__["ContactsEditModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_20__["ContainerModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"]]
    })], ContactsTableModule);
    /***/
  },

  /***/
  "./src/static-data/cotizaciones.ts":
  /*!*****************************************!*\
    !*** ./src/static-data/cotizaciones.ts ***!
    \*****************************************/

  /*! exports provided: cotizacionesData */

  /***/
  function srcStaticDataCotizacionesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cotizacionesData", function () {
      return cotizacionesData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var cotizacionesData = [{
      id: 1,
      imageSrc: 'assets/img/avatars/1.jpg',
      name: 'Adolfo Centeno',
      phone: '+21 (988) 504-2559',
      email: 'adsoft@live.com.mx',
      selected: false,
      starred: false,
      company: 'kubeet',
      tipoCotizacion: 'leasing',
      idAuto: '001',
      marca: 'CIVIC',
      modelo: '2020',
      version: 'LUJO',
      plazo: 48,
      precio: 350000,
      iva: 40000,
      total: 390000,
      baseCalculo: 80000,
      rentaInicial: 8000,
      comisionApertura: 9500,
      depositoGarantia: 10000,
      totalPagoInicial: 89000,
      rentasPosteriores: 47,
      rentaMensual: 9200,
      gastosAdicionalesDeducibles: 9000,
      ivaDeducible: 2500,
      rentaTotalMensual: 10000,
      valorResidual: 24000,
      notes: '--'
    }];
    /***/
  }
}]);
//# sourceMappingURL=contacts-table-contacts-table-module-es5.js.map