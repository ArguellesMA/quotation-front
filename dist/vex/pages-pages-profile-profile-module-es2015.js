(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-profile-profile-module"],{

/***/ "./node_modules/@iconify/icons-ic/twotone-mail.js":
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-mail.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path opacity=\".3\" d=\"M20 6H4l8 4.99zM4 8v10h16V8l-8 5z\" fill=\"currentColor\"/><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 4.99L4 6h16zm0 12H4V8l8 5l8-5v10z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-phone.js":
/*!*********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-phone.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path opacity=\".3\" d=\"M19 17.47c-.88-.07-1.75-.22-2.6-.45l-1.19 1.19c1.2.41 2.48.67 3.8.75v-1.49zM5.03 5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.23-.84-.38-1.71-.44-2.6H5.03z\" fill=\"currentColor\"/><path d=\"M9.07 7.57A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.84.84 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02zm7.33 9.45c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19zM5.79 8.8c-.41-1.21-.67-2.48-.76-3.8h1.5a13 13 0 0 0 .46 2.59L5.79 8.8z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/profile/profile.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/profile/profile.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container py-gutter\">\n  <div class=\"card overflow-hidden\">\n    <div class=\"h-64 relative overflow-hidden\">\n      <img class=\"w-full object-cover\" src=\"assets/img/demo/landscape.jpg\">\n      <div class=\"absolute bg-contrast-black opacity-25 top-0 right-0 bottom-0 left-0 w-full h-full z-0\"></div>\n\n      <img class=\"avatar h-24 w-24 absolute top-6 left-4\"\n           fxFlex=\"none\"\n           fxFlexAlign=\"start\"\n           fxHide.gt-xs\n           src=\"assets/img/avatars/1.jpg\">\n    </div>\n\n    <div class=\"z-10 relative -mt-16 px-gutter\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n      <img @scaleIn\n           class=\"avatar h-24 w-24\"\n           fxFlex=\"none\"\n           fxFlexAlign=\"start\"\n           fxHide.xs\n           src=\"assets/img/avatars/1.jpg\">\n\n      <div [ngClass.gt-xs]=\"['ltr:ml-6 rtl:mr-6']\" class=\"max-w-full\" fxFlex=\"auto\">\n        <div class=\"h-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <h1 @fadeInRight class=\"headline text-contrast-white m-0\">David Smith</h1>\n        </div>\n\n        <nav class=\"vex-tabs vex-tabs-dense border-0\" mat-tab-nav-bar>\n          <a #rla=\"routerLinkActive\"\n             *ngFor=\"let link of links\"\n             [active]=\"rla.isActive\"\n             [disabled]=\"link.disabled\"\n             [routerLink]=\"link.route\"\n             mat-tab-link\n             queryParamsHandling=\"preserve\"\n             routerLinkActive>\n            {{ link.label }}\n          </a>\n        </nav>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-6\"\n       fxLayout=\"row\"\n       fxLayout.lt-md=\"column\"\n       fxLayoutAlign=\"start start\"\n       fxLayoutAlign.lt-md=\"start stretch\"\n       fxLayoutGap=\"24px\">\n    <div fxFlex=\"calc(70% - 12px)\" fxFlex.lt-md=\"auto\">\n      <div class=\"card\">\n        <div class=\"px-gutter py-4 border-b\">\n          <h2 class=\"title m-0\">About</h2>\n        </div>\n\n        <div class=\"px-gutter py-4\" gdColumns=\"1fr 1fr\" gdColumns.xs=\"1fr\" gdGap=\"16px\">\n          <div class=\"py-3\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div @scaleIn\n                 class=\"w-10 h-10 rounded-full bg-primary-50 text-primary-500 ltr:mr-3 rtl:ml-3 flex items-center justify-center\">\n              <ic-icon [icon]=\"icPhone\" size=\"20px\"></ic-icon>\n            </div>\n\n            <div @fadeInRight>\n              <p class=\"m-0 body-1\">+1 (930) 502-3182</p>\n              <p class=\"m-0 caption text-hint\">Business</p>\n            </div>\n          </div>\n\n          <div class=\"py-3\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div @scaleIn\n                 class=\"w-10 h-10 rounded-full bg-primary-50 text-primary-500 ltr:mr-3 rtl:ml-3 flex items-center justify-center\">\n              <ic-icon [icon]=\"icWork\" size=\"20px\"></ic-icon>\n            </div>\n\n            <div @fadeInRight>\n              <p class=\"m-0 body-1\">Web Developer at IceCube</p>\n              <p class=\"m-0 caption text-hint\">Previously Designer at HotStuff</p>\n            </div>\n          </div>\n\n          <div class=\"py-3\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div @scaleIn\n                 class=\"w-10 h-10 rounded-full bg-primary-50 text-primary-500 ltr:mr-3 rtl:ml-3 flex items-center justify-center\">\n              <ic-icon [icon]=\"icMail\" size=\"20px\"></ic-icon>\n            </div>\n\n            <div @fadeInRight>\n              <p class=\"m-0 body-1\">david.smith@example.com</p>\n              <p class=\"m-0 caption text-hint\">Business inquiries only</p>\n            </div>\n          </div>\n\n          <div class=\"py-3\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div @scaleIn\n                 class=\"w-10 h-10 rounded-full bg-primary-50 text-primary-500 ltr:mr-3 rtl:ml-3 flex items-center justify-center\">\n              <ic-icon [icon]=\"icAccessTime\" size=\"20px\"></ic-icon>\n            </div>\n\n            <div @fadeInRight>\n              <p class=\"m-0 body-1\">Usually available 9am-5pm</p>\n              <p class=\"m-0 caption text-hint\">Call +1 (930) 242-5186 for important things</p>\n            </div>\n          </div>\n\n          <div class=\"py-3\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div @scaleIn\n                 class=\"w-10 h-10 rounded-full bg-gray-50 text-dark ltr:mr-3 rtl:ml-3 cursor-pointer flex items-center justify-center\">\n              <ic-icon [icon]=\"icAdd\" size=\"20px\"></ic-icon>\n            </div>\n\n            <p @fadeInRight class=\"m-0 body-1 cursor-pointer\">Add an address</p>\n          </div>\n\n          <div class=\"py-3\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div @scaleIn\n                 class=\"w-10 h-10 rounded-full bg-gray-50 text-dark ltr:mr-3 rtl:ml-3 cursor-pointer flex items-center justify-center\">\n              <ic-icon [icon]=\"icWhatshot\" size=\"20px\"></ic-icon>\n            </div>\n\n            <p @fadeInRight class=\"m-0 body-1 cursor-pointer\">Add social profiles</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card mt-6\">\n        <div class=\"px-gutter py-4 border-b\">\n          <h2 class=\"title m-0\">Latest Photos</h2>\n        </div>\n\n        <div @stagger\n             class=\"px-gutter py-4\"\n             gdColumns=\"1fr 1fr 1fr 1fr\"\n             gdColumns.lt-lg=\"1fr 1fr 1fr\"\n             gdColumns.xs=\"1fr 1fr\"\n             gdGap=\"24px\">\n          <img *ngFor=\"let i of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]\"\n               @scaleIn\n               class=\"rounded w-full\"\n               gdGridAlign=\"center\"\n               src=\"assets/img/avatars/{{ i }}.jpg\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card\" fxFlex=\"calc(30% - 12px)\" fxFlex.lt-md=\"auto\">\n      <div class=\"px-6 py-4 border-b\">\n        <h2 class=\"title m-0\">Friend Suggestions</h2>\n      </div>\n\n      <div @stagger class=\"px-6 py-4\" fxLayout=\"column\" fxLayoutGap=\"16px\">\n        <div *ngFor=\"let friend of suggestions; trackBy: trackByName\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <img @scaleIn [src]=\"friend.imageSrc\" class=\"avatar ltr:mr-3 rtl:ml-3\" fxFlex=\"none\">\n          <div @fadeInRight fxFlex=\"auto\">\n            <h4 class=\"body-2 m-0 leading-snug\">{{ friend.name }}</h4>\n            <h5 class=\"text-secondary m-0 caption leading-none\">{{ friend.friends }} mutual friends</h5>\n          </div>\n          <button (click)=\"addFriend(friend)\" *ngIf=\"!friend.added\" color=\"primary\" mat-icon-button type=\"button\">\n            <mat-icon [icIcon]=\"icPersonAdd\"></mat-icon>\n          </button>\n\n          <button (click)=\"removeFriend(friend)\" *ngIf=\"friend.added\" color=\"primary\" mat-icon-button type=\"button\">\n            <mat-icon [icIcon]=\"icCheck\"></mat-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/@vex/animations/fade-in-right.animation.ts":
/*!********************************************************!*\
  !*** ./src/@vex/animations/fade-in-right.animation.ts ***!
  \********************************************************/
/*! exports provided: fadeInRightAnimation, fadeInRight400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInRightAnimation", function() { return fadeInRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInRight400ms", function() { return fadeInRight400ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function fadeInRightAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateX(-20px)',
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateX(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInRight400ms = fadeInRightAnimation(400);


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

/***/ "./src/@vex/animations/scale-in.animation.ts":
/*!***************************************************!*\
  !*** ./src/@vex/animations/scale-in.animation.ts ***!
  \***************************************************/
/*! exports provided: scaleInAnimation, scaleIn400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleInAnimation", function() { return scaleInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleIn400ms", function() { return scaleIn400ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function scaleInAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scaleIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'scale(0)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'scale(1)'
            }))
        ])
    ]);
}
const scaleIn400ms = scaleInAnimation(400);


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

/***/ "./src/app/pages/pages/profile/profile-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/pages/profile/profile-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/pages/pages/profile/profile.component.ts");




const routes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        data: {
            toolbarShadowEnabled: true,
            containerEnabled: true
        }
    }
];
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProfileRoutingModule);



/***/ }),

/***/ "./src/app/pages/pages/profile/profile.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/pages/profile/profile.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/pages/profile/profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/pages/profile/profile.component.ts ***!
  \**********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_work__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-work */ "./node_modules/@iconify/icons-ic/twotone-work.js");
/* harmony import */ var _iconify_icons_ic_twotone_work__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_work__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-phone */ "./node_modules/@iconify/icons-ic/twotone-phone.js");
/* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_data_friend_suggestions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../static-data/friend-suggestions */ "./src/static-data/friend-suggestions.ts");
/* harmony import */ var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person-add */ "./node_modules/@iconify/icons-ic/twotone-person-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check */ "./node_modules/@iconify/icons-ic/twotone-check.js");
/* harmony import */ var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@vex/animations/scale-in.animation */ "./src/@vex/animations/scale-in.animation.ts");
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../@vex/animations/fade-in-right.animation */ "./src/@vex/animations/fade-in-right.animation.ts");
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-mail */ "./node_modules/@iconify/icons-ic/twotone-mail.js");
/* harmony import */ var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-access-time */ "./node_modules/@iconify/icons-ic/twotone-access-time.js");
/* harmony import */ var _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _iconify_icons_ic_twotone_whatshot__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-whatshot */ "./node_modules/@iconify/icons-ic/twotone-whatshot.js");
/* harmony import */ var _iconify_icons_ic_twotone_whatshot__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_whatshot__WEBPACK_IMPORTED_MODULE_14__);















let ProfileComponent = class ProfileComponent {
    constructor() {
        this.links = [
            {
                label: 'ABOUT',
                route: './'
            },
            {
                label: 'TIMELINE',
                route: '',
                disabled: true
            },
            {
                label: 'FRIENDS',
                route: '',
                disabled: true
            },
            {
                label: 'PHOTOS',
                route: '',
                disabled: true
            }
        ];
        this.suggestions = _static_data_friend_suggestions__WEBPACK_IMPORTED_MODULE_4__["friendSuggestions"];
        this.icWork = _iconify_icons_ic_twotone_work__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icPersonAdd = _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icCheck = _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icMail = _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icAccessTime = _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icWhatshot = _iconify_icons_ic_twotone_whatshot__WEBPACK_IMPORTED_MODULE_14___default.a;
    }
    ngOnInit() {
    }
    addFriend(friend) {
        friend.added = true;
    }
    removeFriend(friend) {
        friend.added = false;
    }
    trackByName(index, friend) {
        return friend.name;
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/profile/profile.component.html")).default,
        animations: [
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_7__["fadeInUp400ms"],
            _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_9__["fadeInRight400ms"],
            _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_8__["scaleIn400ms"],
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__["stagger40ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/pages/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/pages/pages/profile/profile.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/pages/profile/profile.module.ts ***!
  \*******************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/app/pages/pages/profile/profile.component.ts");
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");












let ProfileModule = class ProfileModule {
};
ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"]
        ]
    })
], ProfileModule);



/***/ }),

/***/ "./src/static-data/friend-suggestions.ts":
/*!***********************************************!*\
  !*** ./src/static-data/friend-suggestions.ts ***!
  \***********************************************/
/*! exports provided: friendSuggestions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friendSuggestions", function() { return friendSuggestions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const friendSuggestions = [
    {
        name: 'Fannie Wilson',
        imageSrc: 'assets/img/avatars/1.jpg',
        friends: 6,
        added: false
    },
    {
        name: 'Priscilla Ayala',
        imageSrc: 'assets/img/avatars/2.jpg',
        friends: 3,
        added: false
    },
    {
        name: 'Margaret Farley',
        imageSrc: 'assets/img/avatars/3.jpg',
        friends: 3,
        added: true
    },
    {
        name: 'Alston Tucker',
        imageSrc: 'assets/img/avatars/4.jpg',
        friends: 1,
        added: true
    },
    {
        name: 'Frye Humphrey',
        imageSrc: 'assets/img/avatars/5.jpg',
        friends: 1,
        added: true
    },
    {
        name: 'Jannie Cochran',
        imageSrc: 'assets/img/avatars/6.jpg',
        friends: 5,
        added: false
    },
    {
        name: 'Perkins Doyle',
        imageSrc: 'assets/img/avatars/7.jpg',
        friends: 7,
        added: false
    },
    {
        name: 'Marci Boyd',
        imageSrc: 'assets/img/avatars/8.jpg',
        friends: 2,
        added: false
    }
];


/***/ })

}]);
//# sourceMappingURL=pages-pages-profile-profile-module-es2015.js.map