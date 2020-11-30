(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-apps-scrumboard-scrumboard-module"],{

/***/ "./node_modules/@iconify/icons-ic/twotone-delete.js":
/*!**********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-delete.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path opacity=\".3\" d=\"M8 9h8v10H8z\" fill=\"currentColor\"/><path d=\"M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-more-vert.js":
/*!*************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-more-vert.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-star-border.js":
/*!***************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-star-border.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-star.js":
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-star.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path opacity=\".3\" d=\"M12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z\" fill=\"currentColor\"/><path d=\"M22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"save()\" [formGroup]=\"form\">\r\n  <div class=\"mb-0 body-1\" mat-dialog-title>\r\n    <div>\r\n      <h2 class=\"title m-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <ic-icon [icon]=\"icAssignment\" class=\"ltr:mr-1 rtl:ml-1 text-secondary\" fxFlex=\"none\" size=\"24px\"></ic-icon>\r\n        <input [class.empty]=\"!form.get('title').value\"\r\n               class=\"hidden-input title bg-card\"\r\n               formControlName=\"title\"\r\n               fxFlex=\"auto\">\r\n        <button cdkFocusInitial class=\"text-secondary\" mat-dialog-close mat-icon-button type=\"button\">\r\n          <mat-icon [icIcon]=\"icClose\"></mat-icon>\r\n        </button>\r\n      </h2>\r\n\r\n      <div class=\"body-2 text-secondary ltr:ml-10 rtl:mr-10\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <span>{{ board?.label }}</span>\r\n        <div class=\"w-1 h-1 mx-2 bg-gray-500 rounded-full\"></div>\r\n        <span>{{ list?.label }}</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mt-3 ltr:ml-10 rtl:mr-10\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\">\r\n      <div class=\"members\" fxFlex=\"none\">\r\n        <div class=\"body-2 text-secondary\">MEMBERS</div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n          <img *ngFor=\"let user of form.get('users').value\"\r\n               [matTooltip]=\"user.name\"\r\n               [src]=\"user.imageSrc\"\r\n               class=\"avatar\"\r\n               fxFlex=\"none\">\r\n          <div (click)=\"memberSelect.open()\"\r\n               class=\"avatar text-secondary bg-app-bar cursor-pointer\"\r\n               fxFlex=\"none\"\r\n               fxLayout=\"row\"\r\n               fxLayoutAlign=\"center center\">\r\n            <ic-icon [icon]=\"icAdd\" size=\"24px\"></ic-icon>\r\n          </div>\r\n          <mat-select #memberSelect=\"matSelect\"\r\n                      class=\"invisible w-0 h-0 text-sm\"\r\n                      formControlName=\"users\"\r\n                      fxFlex=\"0 1 0px\"\r\n                      multiple>\r\n            <mat-option *ngFor=\"let user of users\" [value]=\"user\">\r\n              <img [src]=\"user.imageSrc\" class=\"avatar h-6 w-6 align-middle inline-block ltr:mr-2 rtl:ml-2\">\r\n              <span>{{ user.name }}</span>\r\n            </mat-option>\r\n          </mat-select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"labels max-w-full\" fxFlex=\"none\">\r\n        <div class=\"body-2 text-secondary\">LABELS</div>\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" fxLayoutGap=\"4px\">\r\n          <div *ngFor=\"let label of form.get('labels').value\"\r\n               [style.background]=\"label.background\"\r\n               [style.color]=\"label.color\"\r\n               class=\"label\"\r\n               fxFlex=\"none\">\r\n            {{ label.label }}\r\n          </div>\r\n          <div (click)=\"labelSelect.open()\"\r\n               class=\"label text-secondary bg-app-bar cursor-pointer mt-1\"\r\n               fxFlex=\"none\"\r\n               fxLayout=\"row\"\r\n               fxLayoutAlign=\"center center\">\r\n            <ic-icon [icon]=\"icAdd\" size=\"24px\"></ic-icon>\r\n          </div>\r\n          <mat-select #labelSelect=\"matSelect\"\r\n                      class=\"invisible w-0 h-0 text-sm\"\r\n                      formControlName=\"labels\"\r\n                      fxFlex=\"0 1 0px\"\r\n                      multiple>\r\n            <mat-option *ngFor=\"let label of labels\" [value]=\"label\">\r\n              <div [style.background]=\"label.background\"\r\n                   class=\"h-6 w-6 align-middle ltr:mr-2 rtl:ml-2 rounded inline-block\"></div>\r\n              <span>{{ label.label }}</span>\r\n            </mat-option>\r\n          </mat-select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <mat-divider class=\"-mx-6 mt-6\"></mat-divider>\r\n  </div>\r\n\r\n  <mat-dialog-content class=\"pb-6 content\">\r\n\r\n    <h2 class=\"body-2 font-medium m-0 mt-6 text-secondary\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <ic-icon [icon]=\"icDescription\" class=\"ltr:mr-4 rtl:ml-4\" fxFlex=\"none\" size=\"24px\"></ic-icon>\r\n      <span>DESCRIPTION</span>\r\n    </h2>\r\n\r\n    <div class=\"ltr:ml-10 rtl:mr-10 mt-3\" fxLayout=\"column\">\r\n      <mat-form-field appearance=\"outline\" class=\"vex-dense-form-field body-1\">\r\n        <textarea cdkAutosizeMinRows=\"2\"\r\n                  formControlName=\"description\"\r\n                  matInput\r\n                  matTextareaAutosize\r\n                  placeholder=\"Add a description ...\"></textarea>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <h2 class=\"body-2 font-medium m-0 text-secondary mt-4\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <ic-icon [icon]=\"icAttachFile\" class=\"ltr:mr-4 rtl:ml-4\" fxFlex=\"none\" size=\"24px\"></ic-icon>\r\n      <span fxFlex=\"auto\">ATTACHMENTS</span>\r\n      <button color=\"primary\" mat-button type=\"button\">\r\n        <ic-icon [icon]=\"icAdd\" class=\"ltr:mr-1 rtl:ml-1 ltr:-ml-1 rtl:-mr-1\" inline=\"true\" size=\"18px\"></ic-icon>\r\n        <span>ADD AN ATTACHMENT</span>\r\n      </button>\r\n    </h2>\r\n\r\n    <div *ngIf=\"form.get('attachments').value?.length > 0\"\r\n         class=\"ltr:ml-10 rtl:mr-10 mt-3\"\r\n         gdColumns=\"1fr 1fr\"\r\n         gdColumns.xs=\"1fr\"\r\n         gdGap=\"16px\">\r\n      <div *ngFor=\"let attachment of form.get('attachments').value\"\r\n           class=\"border p-1 rounded\"\r\n           fxLayout=\"row\"\r\n           fxLayoutAlign=\"start center\">\r\n\r\n        <div *ngIf=\"isImageExtension(attachment.extension)\"\r\n             class=\"bg-app-bar rounded ltr:mr-3 rtl:ml-3 w-24 h-16 overflow-hidden relative\">\r\n          <img [src]=\"attachment.path\" class=\"object-cover w-full h-full\">\r\n        </div>\r\n\r\n        <div *ngIf=\"!isImageExtension(attachment.extension)\"\r\n             class=\"bg-app-bar p-1 rounded ltr:mr-3 rtl:ml-3 w-100 h-16 leading-none body-2\"\r\n             fxLayoutAlign=\"center center\">{{ attachment.extension }}</div>\r\n\r\n        <div fxFlex=\"auto\">\r\n          <h4 class=\"m-0 body-2 leading-snug text-secondary\">{{ attachment.name }}</h4>\r\n          <p class=\"m-0 caption leading-snug text-hint\">\r\n            <ic-icon *ngIf=\"isCover(attachment)\" [icon]=\"icStar\" inline=\"true\"></ic-icon>\r\n            <span>{{ attachment.size }}</span>\r\n          </p>\r\n        </div>\r\n\r\n        <button [matMenuTriggerData]=\"{ attachment: attachment }\"\r\n                [matMenuTriggerFor]=\"attachmentMenu\"\r\n                class=\"text-secondary ltr:ml-1 rtl:mr-1\"\r\n                mat-icon-button\r\n                type=\"button\">\r\n          <mat-icon [icIcon]=\"icMoreVert\"></mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <mat-divider class=\"-mx-6 mt-6\"></mat-divider>\r\n\r\n    <h2 class=\"body-2 m-0 pt-6 text-secondary\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <ic-icon [icon]=\"icInsertComment\" class=\"ltr:mr-4 rtl:ml-4\" fxFlex=\"none\" size=\"24px\"></ic-icon>\r\n      <span fxFlex=\"auto\">COMMENTS</span>\r\n    </h2>\r\n\r\n    <div class=\"ltr:ml-10 rtl:mr-10 mt-2\">\r\n      <div *ngFor=\"let comment of form.get('comments').value\" class=\"mt-4\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n          <img [src]=\"comment.from.imageSrc\" class=\"avatar h-8 w-8 ltr:mr-3 rtl:ml-3\">\r\n          <div>\r\n            <h4 class=\"body-2 m-0 leading-snug\">{{ comment.from.name }}</h4>\r\n            <h5 class=\"caption text-secondary m-0 leading-snug\">{{ comment.date | relativeDateTime }}</h5>\r\n          </div>\r\n        </div>\r\n\r\n        <p class=\"m-0 mt-2 caption text-secondary\">{{ comment.message }}</p>\r\n      </div>\r\n\r\n      <div class=\"mt-6\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <img class=\"avatar w-8 h-8 ltr:mr-3 rtl:ml-3\" fxFlex=\"none\" src=\"assets/img/avatars/1.jpg\">\r\n        <mat-form-field appearance=\"outline\" class=\"vex-dense-form-field vex-flex-form-field\" fxFlex=\"auto\">\r\n          <input [formControl]=\"commentCtrl\" matInput placeholder=\"Write a comment ...\">\r\n          <button (click)=\"addComment()\" class=\"-top-1\" color=\"primary\" mat-button matSuffix type=\"button\">SEND</button>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </mat-dialog-content>\r\n\r\n  <mat-dialog-actions align=\"end\">\r\n    <button mat-button mat-dialog-close type=\"button\">CANCEL</button>\r\n    <button color=\"primary\" mat-raised-button type=\"submit\">SAVE</button>\r\n  </mat-dialog-actions>\r\n</form>\r\n\r\n\r\n<mat-menu #attachmentMenu=\"matMenu\">\r\n  <ng-template let-attachment=\"attachment\" matMenuContent>\r\n    <button (click)=\"makeCover(attachment)\" mat-menu-item>\r\n      <mat-icon [icIcon]=\"icImage\"></mat-icon>\r\n      <span>Make Cover</span>\r\n    </button>\r\n\r\n    <button (click)=\"remove(attachment)\" mat-menu-item>\r\n      <mat-icon [icIcon]=\"icDelete\"></mat-icon>\r\n      <span>Remove</span>\r\n    </button>\r\n  </ng-template>\r\n</mat-menu>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/scrumboard/scrumboard.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/scrumboard/scrumboard.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"board$ | async as board\" class=\"h-full w-full overflow-hidden\" fxLayout=\"column\">\r\n\r\n  <div class=\"py-4 px-gutter\" fxFlex=\"none\" fxLayout=\"row\" fxLayoutAlign=\"start center\" vexContainer>\r\n    <h1 class=\"title m-0\">Tech Startup Board</h1>\r\n    <button (click)=\"toggleStar(board)\" class=\"ml-2\" mat-icon-button type=\"button\">\r\n      <mat-icon *ngIf=\"board.starred\" [icIcon]=\"icStar\" class=\"text-amber-500\"></mat-icon>\r\n      <mat-icon *ngIf=\"!board.starred\" [icIcon]=\"icStarBorder\"></mat-icon>\r\n    </button>\r\n\r\n    <span fxFlex></span>\r\n\r\n    <div *ngIf=\"scrumboardUsers?.length > 0\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n      <img *ngFor=\"let user of scrumboardUsers\"\r\n           [matTooltip]=\"user.name\"\r\n           [src]=\"user.imageSrc\"\r\n           class=\"avatar overlapping\">\r\n    </div>\r\n  </div>\r\n\r\n  <div (cdkDropListDropped)=\"dropList($event)\"\r\n       @stagger\r\n       [cdkDropListData]=\"board.children\"\r\n       cdkDropList\r\n       cdkDropListOrientation=\"horizontal\"\r\n       class=\"px-gutter pb-gutter min-h-0 overflow-x-auto\"\r\n       fxFlex=\"auto\"\r\n       fxLayout=\"row\"\r\n       fxLayoutAlign=\"start start\"\r\n       fxLayoutGap=\"24px\"\r\n       vexContainer>\r\n    <div *ngFor=\"let list of board.children; trackBy: trackById\"\r\n         @fadeInUp\r\n         [cdkDragData]=\"list\"\r\n         cdkDrag\r\n         cdkDropListGroup\r\n         class=\"rounded bg-app-bar overflow-hidden max-h-full w-full max-w-xxs\"\r\n         fxFlex=\"none\"\r\n         fxLayout=\"column\">\r\n      <div cdkDragHandle class=\"p-4 cursor-pointer\" fxFlex=\"none\">\r\n        <h2 class=\"subheading-2 font-medium m-0 select-none\" fxFlex=\"none\">{{ list.label }}</h2>\r\n      </div>\r\n\r\n      <div class=\"flex-auto\" vexScrollbar>\r\n        <div (cdkDropListDropped)=\"drop($event)\"\r\n             [cdkDropListConnectedTo]=\"getConnectedList(board)\"\r\n             [cdkDropListData]=\"list.children\"\r\n             cdkDropList\r\n             class=\"px-4 pb-4\"\r\n             id=\"{{ list.id }}\">\r\n          <div (click)=\"open(board, list, card)\"\r\n               *ngFor=\"let card of list.children; trackBy: trackById\"\r\n               [cdkDragData]=\"card\"\r\n               cdkDrag\r\n               class=\"scrumboard-card card w-full cursor-pointer overflow-hidden\">\r\n\r\n            <div *ngIf=\"card.cover\" class=\"w-full h-40 overflow-hidden\">\r\n              <img [src]=\"card.cover.path\" class=\"object-cover w-full h-full\">\r\n            </div>\r\n\r\n            <div class=\"p-4\">\r\n              <div *ngIf=\"card.labels?.length > 0\" class=\"mb-2\" fxLayout=\"row\" fxLayoutGap=\"8px\">\r\n                <div *ngFor=\"let label of card.labels\"\r\n                     [style.background]=\"label.background\"\r\n                     class=\"label\"\r\n                     fxFlex></div>\r\n              </div>\r\n\r\n              <h3 class=\"body-2 m-0 select-none\">{{ card.title }}</h3>\r\n\r\n              <div *ngIf=\"card.dueDate || card.comments?.length > 0 || card.attachments?.length > 0 || card.users?.length > 0\"\r\n                   class=\"mt-2\"\r\n                   fxLayout=\"row\"\r\n                   fxLayoutGap=\"8px\">\r\n                <div *ngIf=\"card.dueDate\"\r\n                     [ngClass]=\"{ 'bg-green-500 text-contrast-white': card.dueDate.done }\"\r\n                     class=\"box bg-app-bar text-secondary rounded caption\">\r\n                  <ic-icon [icon]=\"icNotifications\" inline=\"true\" size=\"16px\"></ic-icon>\r\n                  <span class=\"box-text\">{{ card.dueDate.date | dateTokens:'MMM, dd' }}</span>\r\n                </div>\r\n\r\n                <div *ngIf=\"card.comments?.length > 0\" class=\"box bg-app-bar text-secondary rounded caption\">\r\n                  <ic-icon [icon]=\"icInsertComment\" class=\"ml-1\" inline=\"true\" size=\"15px\"></ic-icon>\r\n                  <span class=\"box-text\">{{ card.comments.length }}</span>\r\n                </div>\r\n\r\n                <div *ngIf=\"card.attachments?.length > 0\" class=\"box bg-app-bar text-secondary rounded caption\">\r\n                  <ic-icon [icon]=\"icAttachFile\" inline=\"true\" size=\"16px\"></ic-icon>\r\n                  <span class=\"box-text\">{{ card.attachments.length }}</span>\r\n                </div>\r\n\r\n                <div *ngIf=\"card.users?.length > 0\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                  <img *ngFor=\"let user of card.users\"\r\n                       [matTooltip]=\"user.name\"\r\n                       [src]=\"user.imageSrc\"\r\n                       class=\"avatar overlapping\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div #addCardOriginRef class=\"bg-hover\" fxFlex=\"none\">\r\n        <ng-template #addCardTemplate let-close=\"close\">\r\n          <div class=\"card px-4 py-6\">\r\n            <mat-form-field class=\"vex-dense-form-field\">\r\n              <mat-label>Card Title</mat-label>\r\n              <input [formControl]=\"addCardCtrl\" matInput placeholder=\"Enter your title...\">\r\n              <button (click)=\"createCard(list, close)\"\r\n                      class=\"-top-1\"\r\n                      color=\"primary\"\r\n                      mat-button\r\n                      matSuffix\r\n                      type=\"button\">CREATE\r\n              </button>\r\n            </mat-form-field>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <button (click)=\"openAddCard(list, addCardTemplate, addCardOriginRef)\"\r\n                class=\"w-full\"\r\n                mat-button\r\n                type=\"button\">\r\n          <ic-icon [icon]=\"icAdd\" class=\"mr-1 -ml-1\" inline=\"true\"></ic-icon>\r\n          <span>ADD CARD</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div #addListOriginRef class=\"w-full max-w-xxs rounded bg-app-bar\" fxFlex=\"none\">\r\n      <ng-template #addListTemplate let-close=\"close\">\r\n        <div class=\"card px-4 pt-3 pb-2\">\r\n          <mat-form-field class=\"vex-dense-form-field\">\r\n            <mat-label>List Title</mat-label>\r\n            <input [formControl]=\"addListCtrl\" matInput placeholder=\"Enter your title...\">\r\n          </mat-form-field>\r\n\r\n          <div class=\"mt-3\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <button (click)=\"close()\" class=\"text-secondary w-8 h-8 leading-none\" mat-icon-button type=\"button\">\r\n              <mat-icon [icIcon]=\"icClose\" size=\"18px\"></mat-icon>\r\n            </button>\r\n            <button (click)=\"createList(board, close)\" color=\"primary\" mat-button type=\"button\">CREATE</button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <button (click)=\"openAddList(board, addListTemplate, addListOriginRef)\"\r\n              class=\"w-full\"\r\n              mat-button\r\n              type=\"button\">\r\n        <ic-icon [icon]=\"icAdd\" class=\"mr-1 -ml-1\" inline=\"true\"></ic-icon>\r\n        <span>ADD LIST</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./src/@vex/animations/fade-in-up.animation.ts":
/*!*****************************************************!*\
  !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/*! exports provided: fadeInUpAnimation, fadeInUp400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function() { return fadeInUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function() { return fadeInUp400ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function fadeInUpAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(20px)',
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInUp400ms = fadeInUpAnimation(400);


/***/ }),

/***/ "./src/@vex/animations/stagger.animation.ts":
/*!**************************************************!*\
  !*** ./src/@vex/animations/stagger.animation.ts ***!
  \**************************************************/
/*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staggerAnimation", function() { return staggerAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger80ms", function() { return stagger80ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger60ms", function() { return stagger60ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger40ms", function() { return stagger40ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger20ms", function() { return stagger20ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function staggerAnimation(timing) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), { optional: true }),
        ])
    ]);
}
const stagger80ms = staggerAnimation(80);
const stagger60ms = staggerAnimation(60);
const stagger40ms = staggerAnimation(40);
const stagger20ms = staggerAnimation(20);


/***/ }),

/***/ "./src/@vex/pipes/date-tokens/date-tokens.module.ts":
/*!**********************************************************!*\
  !*** ./src/@vex/pipes/date-tokens/date-tokens.module.ts ***!
  \**********************************************************/
/*! exports provided: DateTokensModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTokensModule", function() { return DateTokensModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _date_tokens_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-tokens.pipe */ "./src/@vex/pipes/date-tokens/date-tokens.pipe.ts");




let DateTokensModule = class DateTokensModule {
};
DateTokensModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_date_tokens_pipe__WEBPACK_IMPORTED_MODULE_3__["DateTokensPipe"]],
        exports: [
            _date_tokens_pipe__WEBPACK_IMPORTED_MODULE_3__["DateTokensPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
    })
], DateTokensModule);



/***/ }),

/***/ "./src/@vex/pipes/date-tokens/date-tokens.pipe.ts":
/*!********************************************************!*\
  !*** ./src/@vex/pipes/date-tokens/date-tokens.pipe.ts ***!
  \********************************************************/
/*! exports provided: DateTokensPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTokensPipe", function() { return DateTokensPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DateTokensPipe = class DateTokensPipe {
    transform(value, ...args) {
        if (!args[0]) {
            throw new Error('[DateTokensPipe]: No args defined, please define your format.');
        }
        return value ? value.toFormat(args[0]) : '';
    }
};
DateTokensPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dateTokens'
    })
], DateTokensPipe);



/***/ }),

/***/ "./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".members .avatar {\n  border: 2px solid var(--background-card);\n  box-sizing: border-box;\n  height: 36px;\n  margin-right: -8px;\n  margin-top: var(--padding-4);\n  width: 36px;\n}\n\n.members .avatar:last-child {\n  margin-right: 0;\n}\n\n.labels .label {\n  border-radius: var(--border-radius);\n  font: var(--font-caption);\n  height: 32px;\n  line-height: 32px;\n  margin-top: var(--padding-4);\n  min-width: 32px;\n  padding-left: var(--padding-8);\n  padding-right: var(--padding-8);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.labels .label:last-of-type {\n  padding: 0;\n}\n\n.content {\n  max-height: 40vh;\n}\n\n@media (min-width: 600px) {\n  .content {\n    max-height: 50vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNvL0Rlc2t0b3AvVGF4aS1mcm9udC9zcmMvYXBwL3BhZ2VzL2FwcHMvc2NydW1ib2FyZC9jb21wb25lbnRzL3NjcnVtYm9hcmQtZGlhbG9nL3NjcnVtYm9hcmQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hcHBzL3NjcnVtYm9hcmQvY29tcG9uZW50cy9zY3J1bWJvYXJkLWRpYWxvZy9zY3J1bWJvYXJkLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGdCQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvc2NydW1ib2FyZC9jb21wb25lbnRzL3NjcnVtYm9hcmQtZGlhbG9nL3NjcnVtYm9hcmQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbWJlcnMgLmF2YXRhciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nLTQpO1xuICB3aWR0aDogMzZweDtcbn1cblxuLm1lbWJlcnMgLmF2YXRhcjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4ubGFiZWxzIC5sYWJlbCB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBmb250OiB2YXIoLS1mb250LWNhcHRpb24pO1xuICBoZWlnaHQ6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nLTQpO1xuICBtaW4td2lkdGg6IDMycHg7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy04KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZy04KTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5sYWJlbHMgLmxhYmVsOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb250ZW50IHtcbiAgbWF4LWhlaWdodDogNDB2aDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xuICB9XG59IiwiLm1lbWJlcnMgLmF2YXRhciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nLTQpO1xuICB3aWR0aDogMzZweDtcbn1cblxuLm1lbWJlcnMgLmF2YXRhcjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4ubGFiZWxzIC5sYWJlbCB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBmb250OiB2YXIoLS1mb250LWNhcHRpb24pO1xuICBoZWlnaHQ6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nLTQpO1xuICBtaW4td2lkdGg6IDMycHg7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy04KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZy04KTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5sYWJlbHMgLmxhYmVsOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb250ZW50IHtcbiAgbWF4LWhlaWdodDogNDB2aDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ScrumboardDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardDialogComponent", function() { return ScrumboardDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-assignment */ "./node_modules/@iconify/icons-ic/twotone-assignment.js");
/* harmony import */ var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_data_scrumboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../static-data/scrumboard */ "./src/static-data/scrumboard.ts");
/* harmony import */ var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-description */ "./node_modules/@iconify/icons-ic/twotone-description.js");
/* harmony import */ var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconify_icons_ic_twotone_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-image */ "./node_modules/@iconify/icons-ic/twotone-image.js");
/* harmony import */ var _iconify_icons_ic_twotone_image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_image__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-attach-file */ "./node_modules/@iconify/icons-ic/twotone-attach-file.js");
/* harmony import */ var _iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-insert-comment */ "./node_modules/@iconify/icons-ic/twotone-insert-comment.js");
/* harmony import */ var _iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star */ "./node_modules/@iconify/icons-ic/twotone-star.js");
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_15__);
















let ScrumboardDialogComponent = class ScrumboardDialogComponent {
    constructor(dialogRef, data, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.form = this.fb.group({
            title: null,
            description: null,
            dueDate: null,
            cover: null,
            attachments: this.fb.array([]),
            comments: this.fb.array([]),
            users: [],
            labels: []
        });
        this.commentCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.icAssignment = _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icDescription = _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icImage = _iconify_icons_ic_twotone_image__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icAttachFile = _iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icInsertComment = _iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.users = _static_data_scrumboard__WEBPACK_IMPORTED_MODULE_6__["scrumboardUsers"];
        this.labels = _static_data_scrumboard__WEBPACK_IMPORTED_MODULE_6__["scrumboardLabels"];
    }
    ngOnInit() {
        this.list = this.data.list;
        this.board = this.data.board;
        const card = this.data.card;
        this.form.valueChanges.subscribe(console.log);
        this.form.patchValue({
            title: card.title,
            description: card.description,
            dueDate: card.dueDate || null,
            cover: card.cover || null,
            users: card.users || [],
            labels: card.labels || []
        });
        this.form.setControl('attachments', this.fb.array(card.attachments || []));
        this.form.setControl('comments', this.fb.array(card.comments || []));
    }
    save() {
        this.dialogRef.close(this.form.value);
    }
    isImageExtension(extension) {
        return extension === 'jpg' || extension === 'png';
    }
    makeCover(attachment) {
        this.form.get('cover').setValue(attachment);
    }
    isCover(attachment) {
        return this.form.get('cover').value === attachment;
    }
    remove(attachment) {
        if (this.form.get('cover').value && attachment.id === this.form.get('cover').value.id) {
            this.form.get('cover').setValue(null);
        }
        this.form.setControl('attachments', this.fb.array(this.form.get('attachments').value.filter(a => a !== attachment)));
    }
    addComment() {
        if (!this.commentCtrl.value) {
            return;
        }
        const comments = this.form.get('comments');
        comments.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({
            from: {
                name: 'David Smith',
                imageSrc: 'assets/img/avatars/1.jpg'
            },
            message: this.commentCtrl.value,
            date: luxon__WEBPACK_IMPORTED_MODULE_14__["DateTime"].local().minus({ seconds: 1 })
        }));
        this.commentCtrl.setValue(null);
    }
};
ScrumboardDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
ScrumboardDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-scrumboard-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scrumboard-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scrumboard-dialog.component.scss */ "./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ScrumboardDialogComponent);



/***/ }),

/***/ "./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.module.ts ***!
  \************************************************************************************************/
/*! exports provided: ScrumboardDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardDialogModule", function() { return ScrumboardDialogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _scrumboard_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrumboard-dialog.component */ "./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _vex_pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../@vex/pipes/relative-date-time/relative-date-time.module */ "./src/@vex/pipes/relative-date-time/relative-date-time.module.ts");
















let ScrumboardDialogModule = class ScrumboardDialogModule {
};
ScrumboardDialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_scrumboard_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ScrumboardDialogComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
            _vex_pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_15__["RelativeDateTimeModule"]
        ],
        exports: [_scrumboard_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ScrumboardDialogComponent"]],
        entryComponents: [_scrumboard_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ScrumboardDialogComponent"]]
    })
], ScrumboardDialogModule);



/***/ }),

/***/ "./src/app/pages/apps/scrumboard/scrumboard-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/apps/scrumboard/scrumboard-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ScrumboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardRoutingModule", function() { return ScrumboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _scrumboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrumboard.component */ "./src/app/pages/apps/scrumboard/scrumboard.component.ts");




const routes = [
    {
        path: '',
        redirectTo: '1'
    },
    {
        path: ':scrumboardId',
        component: _scrumboard_component__WEBPACK_IMPORTED_MODULE_3__["ScrumboardComponent"],
        data: {
            scrollDisabled: true,
            containerEnabled: true
        }
    }
];
let ScrumboardRoutingModule = class ScrumboardRoutingModule {
};
ScrumboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ScrumboardRoutingModule);



/***/ }),

/***/ "./src/app/pages/apps/scrumboard/scrumboard.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/apps/scrumboard/scrumboard.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .vex-style-dark vex-scrumboard .scrumboard-card:hover {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.scrumboard-card {\n  margin-bottom: var(--padding-16);\n}\n\n.scrumboard-card:last-of-type {\n  margin-bottom: 0;\n}\n\n.scrumboard-card:hover {\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.scrumboard-card .label {\n  border-radius: 6px;\n  height: 6px;\n  max-width: 32px;\n}\n\n.scrumboard-card .box {\n  padding: 3px;\n}\n\n.scrumboard-card .box .box-text {\n  font-size: 11px;\n  font-weight: var(--font-weight-medium);\n  margin-left: 3px;\n  margin-right: 3px;\n  vertical-align: bottom;\n}\n\n.avatar.overlapping {\n  border: 2px solid var(--background-card);\n  height: 23px;\n  margin-right: -8px;\n  width: 23px;\n}\n\n.avatar.overlapping:last-of-type {\n  margin-right: 0;\n}\n\n/*\n  Cdk Drag & Drop\n */\n\n.cdk-drag-preview {\n  box-shadow: var(--elevation-z8);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0.2;\n}\n\n.cdk-drop-list-dragging .scrumboard-card:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNvL0Rlc2t0b3AvVGF4aS1mcm9udC9zcmMvYXBwL3BhZ2VzL2FwcHMvc2NydW1ib2FyZC9zY3J1bWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hcHBzL3NjcnVtYm9hcmQvc2NydW1ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBOztFQUFBOztBQUlBO0VBQ0UsK0JBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLHNEQUFBO0FDQUY7O0FER0E7RUFDRSxpRUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXBwcy9zY3J1bWJvYXJkL3NjcnVtYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLnZleC1zdHlsZS1kYXJrIHZleC1zY3J1bWJvYXJkIC5zY3J1bWJvYXJkLWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zY3J1bWJvYXJkLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWRkaW5nLTE2KTtcbn1cblxuLnNjcnVtYm9hcmQtY2FyZDpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc2NydW1ib2FyZC1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4uc2NydW1ib2FyZC1jYXJkIC5sYWJlbCB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIG1heC13aWR0aDogMzJweDtcbn1cblxuLnNjcnVtYm9hcmQtY2FyZCAuYm94IHtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4uc2NydW1ib2FyZC1jYXJkIC5ib3ggLmJveC10ZXh0IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbi5hdmF0YXIub3ZlcmxhcHBpbmcge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNhcmQpO1xuICBoZWlnaHQ6IDIzcHg7XG4gIG1hcmdpbi1yaWdodDogLThweDtcbiAgd2lkdGg6IDIzcHg7XG59XG5cbi5hdmF0YXIub3ZlcmxhcHBpbmc6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4vKlxuICBDZGsgRHJhZyAmIERyb3BcbiAqL1xuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi16OCk7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLnNjcnVtYm9hcmQtY2FyZDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKSAhaW1wb3J0YW50O1xufSIsIjo6bmctZGVlcCAudmV4LXN0eWxlLWRhcmsgdmV4LXNjcnVtYm9hcmQgLnNjcnVtYm9hcmQtY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnNjcnVtYm9hcmQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZGRpbmctMTYpO1xufVxuXG4uc2NydW1ib2FyZC1jYXJkOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5zY3J1bWJvYXJkLWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5zY3J1bWJvYXJkLWNhcmQgLmxhYmVsIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgbWF4LXdpZHRoOiAzMnB4O1xufVxuXG4uc2NydW1ib2FyZC1jYXJkIC5ib3gge1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5zY3J1bWJvYXJkLWNhcmQgLmJveCAuYm94LXRleHQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cblxuLmF2YXRhci5vdmVybGFwcGluZyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG4gIGhlaWdodDogMjNweDtcbiAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xuICB3aWR0aDogMjNweDtcbn1cblxuLmF2YXRhci5vdmVybGFwcGluZzpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi8qXG4gIENkayBEcmFnICYgRHJvcFxuICovXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi16OCk7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLnNjcnVtYm9hcmQtY2FyZDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/apps/scrumboard/scrumboard.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/apps/scrumboard/scrumboard.component.ts ***!
  \***************************************************************/
/*! exports provided: ScrumboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardComponent", function() { return ScrumboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@vex/utils/track-by */ "./src/@vex/utils/track-by.ts");
/* harmony import */ var _static_data_scrumboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../static-data/scrumboard */ "./src/static-data/scrumboard.ts");
/* harmony import */ var _iconify_icons_ic_twotone_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-notifications */ "./node_modules/@iconify/icons-ic/twotone-notifications.js");
/* harmony import */ var _iconify_icons_ic_twotone_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-insert-comment */ "./node_modules/@iconify/icons-ic/twotone-insert-comment.js");
/* harmony import */ var _iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-attach-file */ "./node_modules/@iconify/icons-ic/twotone-attach-file.js");
/* harmony import */ var _iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _components_scrumboard_dialog_scrumboard_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/scrumboard-dialog/scrumboard-dialog.component */ "./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _vex_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../@vex/components/popover/popover.service */ "./src/@vex/components/popover/popover.service.ts");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star */ "./node_modules/@iconify/icons-ic/twotone-star.js");
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star-border */ "./node_modules/@iconify/icons-ic/twotone-star-border.js");
/* harmony import */ var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
var ScrumboardComponent_1;




















let ScrumboardComponent = ScrumboardComponent_1 = class ScrumboardComponent {
    constructor(dialog, route, popover) {
        this.dialog = dialog;
        this.route = route;
        this.popover = popover;
        this.board$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(paramMap => +paramMap.get('scrumboardId')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(scrumboardId => _static_data_scrumboard__WEBPACK_IMPORTED_MODULE_4__["scrumboards"].find(board => board.id === scrumboardId)));
        this.addCardCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"]();
        this.addListCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"]();
        this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_3__["trackById"];
        this.icNotifications = _iconify_icons_ic_twotone_notifications__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icInsertComment = _iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icAttachFile = _iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icStarBorder = _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.scrumboardUsers = _static_data_scrumboard__WEBPACK_IMPORTED_MODULE_4__["scrumboardUsers"];
    }
    ngOnInit() {
    }
    open(board, list, card) {
        this.addCardCtrl.setValue(null);
        this.dialog.open(_components_scrumboard_dialog_scrumboard_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ScrumboardDialogComponent"], {
            data: { card, list, board },
            width: '700px',
            maxWidth: '100%',
            disableClose: true
        }).beforeClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(Boolean)).subscribe(value => {
            console.log(value);
            const index = list.children.findIndex(child => child.id === card.id);
            if (index > -1) {
                list.children[index] = value;
            }
        });
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    dropList(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    getConnectedList(board) {
        return board.children.map(x => `${x.id}`);
    }
    openAddCard(list, content, origin) {
        this.popover.open({
            content,
            origin,
            position: [
                {
                    originX: 'center',
                    originY: 'bottom',
                    overlayX: 'center',
                    overlayY: 'bottom'
                },
                {
                    originX: 'center',
                    originY: 'bottom',
                    overlayX: 'center',
                    overlayY: 'top',
                },
            ]
        });
    }
    openAddList(board, content, origin) {
        this.popover.open({
            content,
            origin,
            position: [
                {
                    originX: 'center',
                    originY: 'bottom',
                    overlayX: 'center',
                    overlayY: 'top'
                },
                {
                    originX: 'center',
                    originY: 'bottom',
                    overlayX: 'center',
                    overlayY: 'top',
                },
            ]
        });
    }
    createCard(list, close) {
        if (!this.addCardCtrl.value) {
            return;
        }
        list.children.push({
            id: ScrumboardComponent_1.nextId++,
            title: this.addCardCtrl.value
        });
        close();
        this.addCardCtrl.setValue(null);
    }
    createList(board, close) {
        if (!this.addListCtrl.value) {
            return;
        }
        board.children.push({
            id: ScrumboardComponent_1.nextId++,
            label: this.addListCtrl.value,
            children: []
        });
        close();
        this.addListCtrl.setValue(null);
    }
    toggleStar(board) {
        board.starred = !board.starred;
    }
};
ScrumboardComponent.nextId = 100;
ScrumboardComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: _vex_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_13__["PopoverService"] }
];
ScrumboardComponent = ScrumboardComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-scrumboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scrumboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/scrumboard/scrumboard.component.html")).default,
        animations: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_18__["stagger80ms"],
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_19__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scrumboard.component.scss */ "./src/app/pages/apps/scrumboard/scrumboard.component.scss")).default]
    })
], ScrumboardComponent);



/***/ }),

/***/ "./src/app/pages/apps/scrumboard/scrumboard.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/apps/scrumboard/scrumboard.module.ts ***!
  \************************************************************/
/*! exports provided: ScrumboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardModule", function() { return ScrumboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _scrumboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrumboard-routing.module */ "./src/app/pages/apps/scrumboard/scrumboard-routing.module.ts");
/* harmony import */ var _scrumboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrumboard.component */ "./src/app/pages/apps/scrumboard/scrumboard.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@vex/components/scrollbar/scrollbar.module */ "./src/@vex/components/scrollbar/scrollbar.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _vex_pipes_date_tokens_date_tokens_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../@vex/pipes/date-tokens/date-tokens.module */ "./src/@vex/pipes/date-tokens/date-tokens.module.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _components_scrumboard_dialog_scrumboard_dialog_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/scrumboard-dialog/scrumboard-dialog.module */ "./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.module.ts");
/* harmony import */ var _vex_components_popover_popover_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../@vex/components/popover/popover.module */ "./src/@vex/components/popover/popover.module.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");


















let ScrumboardModule = class ScrumboardModule {
};
ScrumboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_scrumboard_component__WEBPACK_IMPORTED_MODULE_4__["ScrumboardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _scrumboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["ScrumboardRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_6__["ScrollbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__["IconModule"],
            _vex_pipes_date_tokens_date_tokens_module__WEBPACK_IMPORTED_MODULE_10__["DateTokensModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
            _components_scrumboard_dialog_scrumboard_dialog_module__WEBPACK_IMPORTED_MODULE_12__["ScrumboardDialogModule"],
            _vex_components_popover_popover_module__WEBPACK_IMPORTED_MODULE_13__["PopoverModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__["ContainerModule"]
        ]
    })
], ScrumboardModule);



/***/ }),

/***/ "./src/static-data/scrumboard.ts":
/*!***************************************!*\
  !*** ./src/static-data/scrumboard.ts ***!
  \***************************************/
/*! exports provided: scrumboardAttachments, scrumboardUsers, scrumboardComments, scrumboardLabels, scrumboards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrumboardAttachments", function() { return scrumboardAttachments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrumboardUsers", function() { return scrumboardUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrumboardComments", function() { return scrumboardComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrumboardLabels", function() { return scrumboardLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrumboards", function() { return scrumboards; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@vex/utils/tailwindcss */ "./src/@vex/utils/tailwindcss.ts");



const scrumboardAttachments = [
    {
        id: 1,
        name: 'business-case.jpg',
        extension: 'jpg',
        path: 'assets/img/demo/1.jpg',
        size: '55 KB'
    },
    {
        id: 2,
        name: 'laptop.jpg',
        extension: 'jpg',
        path: 'assets/img/demo/2.jpg',
        size: '62 KB'
    },
    {
        id: 3,
        name: 'how-to.jpg',
        extension: 'jpg',
        path: 'assets/img/demo/3.jpg',
        size: '35 KB'
    },
    {
        id: 4,
        name: 'workplace.jpg',
        extension: 'jpg',
        path: 'assets/img/demo/4.jpg',
        size: '51 KB'
    },
    {
        id: 5,
        name: 'issue-332.jpg',
        extension: 'jpg',
        path: 'assets/img/demo/5.jpg',
        size: '10 KB'
    },
    {
        id: 6,
        name: 'notebook-26.jpg',
        extension: 'jpg',
        path: 'assets/img/demo/6.jpg',
        size: '48 KB'
    },
    {
        id: 7,
        name: 'business-2.jpg',
        extension: 'jpg',
        path: 'assets/img/demo/7.jpg',
        size: '58 KB'
    },
    {
        id: 7,
        name: 'example-67.jpg',
        extension: 'jpg',
        path: 'assets/img/demo/8.jpg',
        size: '87 KB'
    }
];
const scrumboardUsers = [
    {
        name: 'David Smith',
        imageSrc: 'assets/img/avatars/1.jpg'
    },
    {
        name: 'Michael Bolta',
        imageSrc: 'assets/img/avatars/2.jpg'
    },
    {
        name: 'Jenny Zents',
        imageSrc: 'assets/img/avatars/3.jpg'
    },
    {
        name: 'Donald Orisan',
        imageSrc: 'assets/img/avatars/4.jpg'
    },
    {
        name: 'Frank Uhrzeen',
        imageSrc: 'assets/img/avatars/5.jpg'
    },
    {
        name: 'James Blound',
        imageSrc: 'assets/img/avatars/6.jpg'
    },
    {
        name: 'Peter Moffeen',
        imageSrc: 'assets/img/avatars/7.jpg'
    }
];
const scrumboardComments = [
    {
        from: scrumboardUsers[0],
        date: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({ days: 2, minutes: 43 }),
        message: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
    },
    {
        from: scrumboardUsers[1],
        date: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({ days: 4, minutes: 43 }),
        message: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
    },
    {
        from: scrumboardUsers[2],
        date: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({ days: 1, minutes: 43 }),
        message: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.'
    },
    {
        from: scrumboardUsers[3],
        date: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({ days: 0, minutes: 27 }),
        message: 'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.'
    },
    {
        from: scrumboardUsers[4],
        date: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({ hour: 2, minutes: 4 }),
        message: 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.'
    }
];
const scrumboardLabels = [
    {
        label: 'High Priority',
        background: _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_2__["default"].colors.amber['500'],
        color: _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_2__["default"].textColor['amber-contrast']['500'],
    },
    {
        label: 'Blocked',
        background: _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_2__["default"].colors.red['500'],
        color: _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_2__["default"].textColor['red-contrast']['500'],
    },
    {
        label: 'Approved',
        background: _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_2__["default"].colors.green['500'],
        color: _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_2__["default"].textColor['green-contrast']['600'],
    },
    {
        label: 'Ready',
        background: _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_2__["default"].colors.cyan['500'],
        color: _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_2__["default"].textColor['cyan-contrast']['500'],
    },
    {
        label: 'Deployed',
        background: _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_2__["default"].colors.purple['500'],
        color: _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_2__["default"].textColor['purple-contrast']['500'],
    }
];
const scrumboards = [
    {
        id: 1,
        label: 'Tech Startup Board',
        children: [
            {
                id: 1,
                label: 'Backlog',
                children: [
                    {
                        id: 11,
                        title: 'Fix Issue #332',
                        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
                        dueDate: {
                            date: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().plus({ days: 5 }),
                            done: true
                        },
                        attachments: [
                            scrumboardAttachments[0],
                            scrumboardAttachments[1],
                            scrumboardAttachments[2],
                        ],
                        comments: [
                            scrumboardComments[0],
                            scrumboardComments[1],
                            scrumboardComments[2],
                        ],
                        users: [
                            scrumboardUsers[0],
                            scrumboardUsers[1],
                            scrumboardUsers[2],
                        ],
                        labels: [
                            scrumboardLabels[0],
                            scrumboardLabels[1],
                        ],
                        cover: scrumboardAttachments[0]
                    },
                    {
                        id: 12,
                        title: 'Create new User Profiles',
                        comments: [
                            scrumboardComments[4],
                            scrumboardComments[3]
                        ],
                        users: [
                            scrumboardUsers[1],
                        ]
                    },
                    {
                        id: 13,
                        title: 'Add Dashboard',
                        description: '',
                        attachments: [
                            scrumboardAttachments[2],
                            scrumboardAttachments[3]
                        ],
                        users: [
                            scrumboardUsers[2],
                            scrumboardUsers[3],
                        ],
                        labels: [
                            scrumboardLabels[3]
                        ],
                        comments: [
                            scrumboardComments[0]
                        ],
                        cover: scrumboardAttachments[2]
                    },
                    {
                        id: 14,
                        title: 'Improve User Onboarding',
                        labels: [
                            scrumboardLabels[0],
                            scrumboardLabels[2]
                        ]
                    },
                    {
                        id: 5,
                        title: 'Create new All-In-One Widget',
                        description: 'This widget has superpowers and can display all the great things you love and want in life.',
                        attachments: [
                            scrumboardAttachments[4],
                            scrumboardAttachments[1]
                        ],
                        users: [
                            scrumboardUsers[5],
                            scrumboardUsers[4],
                        ],
                        labels: [
                            scrumboardLabels[4],
                            scrumboardLabels[0],
                            scrumboardLabels[2]
                        ],
                        cover: scrumboardAttachments[1]
                    },
                ]
            },
            {
                id: 2,
                label: 'Hot Backlog',
                children: [
                    {
                        id: 21,
                        title: 'Create Support Center',
                        comments: [
                            scrumboardComments[4],
                            scrumboardComments[2],
                            scrumboardComments[1],
                            scrumboardComments[0]
                        ],
                        labels: [
                            scrumboardLabels[0],
                            scrumboardLabels[3]
                        ],
                        users: [
                            scrumboardUsers[1],
                            scrumboardUsers[0],
                            scrumboardUsers[2]
                        ]
                    },
                    {
                        id: 22,
                        title: 'Add Forgot Password functionality',
                        dueDate: {
                            date: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().plus({ days: 2 }),
                            done: false
                        },
                        attachments: [
                            scrumboardAttachments[1],
                            scrumboardAttachments[3],
                        ],
                        users: [
                            scrumboardUsers[0],
                            scrumboardUsers[3]
                        ],
                        cover: scrumboardAttachments[3]
                    },
                    {
                        id: 23,
                        title: 'Make America Great Again',
                        labels: [
                            scrumboardLabels[1]
                        ]
                    },
                    {
                        id: 24,
                        title: 'Create new Design Prototypes',
                        dueDate: {
                            date: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().plus({ days: 7 }),
                            done: true
                        },
                        labels: [
                            scrumboardLabels[0],
                            scrumboardLabels[3]
                        ],
                        users: [
                            scrumboardUsers[4],
                            scrumboardUsers[1]
                        ],
                        attachments: [
                            scrumboardAttachments[4],
                            scrumboardAttachments[0]
                        ],
                        cover: scrumboardAttachments[4]
                    }
                ]
            },
            {
                id: 3,
                label: 'In Progress',
                children: [
                    {
                        id: 31,
                        title: 'Add new Material Design 2 Icons',
                        attachments: [
                            scrumboardAttachments[1],
                            scrumboardAttachments[0],
                            scrumboardAttachments[6],
                            scrumboardAttachments[2]
                        ],
                        comments: [
                            scrumboardComments[0],
                        ],
                        cover: scrumboardAttachments[6]
                    },
                    {
                        id: 32,
                        title: 'Improve Dashboard Grid',
                        comments: [
                            scrumboardComments[4],
                        ],
                        users: [
                            scrumboardUsers[2],
                            scrumboardUsers[1],
                            scrumboardUsers[0]
                        ]
                    },
                    {
                        id: 33,
                        title: 'Use Google Fonts',
                        dueDate: {
                            date: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().plus({ days: 2 }),
                            done: false
                        },
                        labels: [
                            scrumboardLabels[3]
                        ],
                        attachments: [
                            scrumboardAttachments[1],
                            scrumboardAttachments[5],
                            scrumboardAttachments[2]
                        ],
                        comments: [
                            scrumboardComments[0],
                            scrumboardComments[4],
                            scrumboardComments[2],
                        ],
                        users: [
                            scrumboardUsers[0],
                            scrumboardUsers[3],
                            scrumboardUsers[2]
                        ],
                        cover: scrumboardAttachments[5]
                    }
                ]
            },
            {
                id: 4,
                label: 'Ready to Deploy',
                children: [
                    {
                        id: 41,
                        title: 'Add Meta Description',
                        dueDate: {
                            date: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().plus({ days: 2 }),
                            done: false
                        },
                        labels: [
                            scrumboardLabels[0],
                            scrumboardLabels[2]
                        ],
                        attachments: [
                            scrumboardAttachments[5],
                            scrumboardAttachments[6]
                        ],
                        users: [
                            scrumboardUsers[2],
                        ]
                    },
                    {
                        id: 42,
                        title: 'Redesign Homepage',
                        labels: [
                            scrumboardLabels[3]
                        ],
                        attachments: [
                            scrumboardAttachments[5]
                        ],
                        comments: [
                            scrumboardComments[4]
                        ],
                        users: [
                            scrumboardUsers[0],
                            scrumboardUsers[4]
                        ]
                    },
                    {
                        id: 43,
                        title: 'Work on SEO',
                        dueDate: {
                            date: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().plus({ days: 1 }),
                            done: true
                        },
                        attachments: [
                            scrumboardAttachments[7]
                        ],
                        cover: scrumboardAttachments[7],
                        users: [
                            scrumboardUsers[4]
                        ],
                        comments: [
                            scrumboardComments[2]
                        ]
                    },
                    {
                        id: 44,
                        title: 'Create new Side-Navigation',
                        attachments: [
                            scrumboardAttachments[0],
                        ],
                        cover: scrumboardAttachments[0],
                        users: [
                            scrumboardUsers[3],
                            scrumboardUsers[2]
                        ]
                    },
                    {
                        id: 45,
                        title: 'Participate in Design Contest',
                        users: [
                            scrumboardUsers[1],
                            scrumboardUsers[0]
                        ],
                        comments: [
                            scrumboardComments[0]
                        ],
                        labels: [
                            scrumboardLabels[0]
                        ]
                    }
                ]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=pages-apps-scrumboard-scrumboard-module-es2015.js.map