function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ui-forms-form-wizard-form-wizard-module"], {
  /***/
  "./node_modules/@iconify/icons-ic/twotone-more-vert.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-more-vert.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneMoreVertJs(module, exports) {
    var data = {
      "body": "<path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/forms/form-wizard/form-wizard.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/forms/form-wizard/form-wizard.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUiFormsFormWizardFormWizardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<vex-secondary-toolbar current=\"Form Wizard\">\n  <vex-breadcrumbs [crumbs]=\"['Forms', 'Form Wizard']\" fxFlex=\"auto\"></vex-breadcrumbs>\n\n  <button class=\"ml-2\" color=\"primary\" mat-icon-button type=\"button\">\n    <mat-icon [icIcon]=\"icMoreVert\"></mat-icon>\n  </button>\n</vex-secondary-toolbar>\n\n<div @stagger class=\"p-gutter\" vexContainer>\n\n  <h2 class=\"title mb-4\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <span @scaleIn\n          [style.background-color]=\"theme.colors.primary['500'] | colorFade:0.9\"\n          class=\"w-10 h-10 rounded-full text-primary-500 mr-3 flex items-center justify-center\">\n      <ic-icon [icon]=\"icDescription\" height=\"20px\" width=\"20px\"></ic-icon>\n    </span>\n    <span @fadeInRight class=\"block\">Horizontal Form Wizard</span>\n  </h2>\n\n  <div @fadeInUp class=\"card overflow-hidden\">\n    <mat-horizontal-stepper #stepper=\"matHorizontalStepper\" [linear]=\"true\">\n      <ng-template matStepperIcon=\"edit\">\n        <mat-icon [icIcon]=\"icDoneAll\"></mat-icon>\n      </ng-template>\n\n      <ng-template matStepperIcon=\"done\">\n        <mat-icon [icIcon]=\"icDoneAll\"></mat-icon>\n      </ng-template>\n\n      <mat-step [stepControl]=\"accountFormGroup\">\n        <form [formGroup]=\"accountFormGroup\">\n          <ng-template matStepLabel>Create Account</ng-template>\n\n          <h2 class=\"title m-0\">Create Account</h2>\n          <div class=\"subheading-1\">Set up your account for testing purposes.</div>\n\n          <div class=\"mt-4\" fxLayout=\"column\" fxLayoutGap=\"8px\">\n            <mat-form-field fxFlex=\"auto\">\n              <mat-label>Account Username</mat-label>\n              <input formControlName=\"username\" matInput required>\n              <mat-hint>This will be your unique login name.</mat-hint>\n            </mat-form-field>\n\n            <mat-form-field fxFlex=\"auto\">\n              <mat-label>Name</mat-label>\n              <input formControlName=\"name\" matInput required>\n              <mat-hint>How may we call you?</mat-hint>\n            </mat-form-field>\n\n            <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutGap=\"8px\" fxLayoutGap.gt-xs=\"24px\">\n              <mat-form-field fxFlex=\"auto\">\n                <mat-label>E-Mail</mat-label>\n                <input formControlName=\"email\" matInput required>\n                <mat-hint align=\"end\">example@example.com</mat-hint>\n              </mat-form-field>\n\n              <div fxFlex=\"auto\" fxLayout=\"row\" fxLayoutGap=\"8px\">\n                <mat-form-field class=\"vex-flex-form-field\" fxFlex=\"none\">\n                  <mat-label>Code</mat-label>\n                  <mat-select formControlName=\"phonePrefix\">\n                    <mat-option *ngFor=\"let option of phonePrefixOptions\" [value]=\"option\">{{ option }}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n                <mat-form-field class=\"vex-flex-form-field\" fxFlex=\"auto\">\n                  <mat-label>Phone Number</mat-label>\n                  <input formControlName=\"phone\" matInput>\n                  <mat-hint align=\"end\"></mat-hint>\n                </mat-form-field>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n            <button (click)=\"stepper.reset()\" [disabled]=\"accountFormGroup.pristine\" color=\"primary\" mat-button\n                    type=\"button\">RESET\n            </button>\n            <button [disabled]=\"accountFormGroup.invalid\" color=\"primary\" mat-raised-button matStepperNext>NEXT\n            </button>\n          </div>\n        </form>\n      </mat-step>\n\n      <mat-step [stepControl]=\"passwordFormGroup\">\n        <form [formGroup]=\"passwordFormGroup\">\n          <ng-template matStepLabel>Select a Password</ng-template>\n\n          <h2 class=\"title m-0\">Select a Password</h2>\n          <div class=\"subheading-1\">Enter your password you will use to log in.</div>\n\n          <div class=\"mt-4\" fxLayout=\"column\" fxLayoutGap=\"8px\">\n            <mat-form-field fxFlex=\"auto\">\n              <mat-label>Password</mat-label>\n              <input [type]=\"passwordInputType\" formControlName=\"password\" matInput required>\n              <button (click)=\"showPassword()\" *ngIf=\"passwordInputType === 'password'\" mat-icon-button matSuffix\n                      type=\"button\">\n                <mat-icon [icIcon]=\"icVisibility\"></mat-icon>\n              </button>\n              <button (click)=\"hidePassword()\" *ngIf=\"passwordInputType === 'text'\" mat-icon-button matSuffix\n                      type=\"button\">\n                <mat-icon [icIcon]=\"icVisibilityOff\"></mat-icon>\n              </button>\n              <mat-hint>Your password should be atleast 6 characters long.</mat-hint>\n            </mat-form-field>\n\n            <mat-form-field fxFlex=\"auto\">\n              <mat-label>Confirm Password</mat-label>\n              <input [type]=\"passwordInputType\" formControlName=\"passwordConfirm\" matInput required>\n              <button (click)=\"showPassword()\" *ngIf=\"passwordInputType === 'password'\" mat-icon-button matSuffix\n                      type=\"button\">\n                <mat-icon [icIcon]=\"icVisibility\"></mat-icon>\n              </button>\n              <button (click)=\"hidePassword()\" *ngIf=\"passwordInputType === 'text'\" mat-icon-button matSuffix\n                      type=\"button\">\n                <mat-icon [icIcon]=\"icVisibilityOff\"></mat-icon>\n              </button>\n              <mat-hint>Please type in your password again.</mat-hint>\n            </mat-form-field>\n          </div>\n\n          <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n            <button color=\"primary\" mat-button matStepperPrevious type=\"button\">PREVIOUS</button>\n            <button [disabled]=\"passwordFormGroup.invalid\" color=\"primary\" mat-raised-button matStepperNext>NEXT\n            </button>\n          </div>\n        </form>\n      </mat-step>\n\n      <mat-step [stepControl]=\"confirmFormGroup\">\n        <form [formGroup]=\"confirmFormGroup\">\n          <ng-template matStepLabel>Confirm Creation</ng-template>\n\n          <div class=\"title m-0\">You're almost there!</div>\n          <div class=\"subheading-1\">To finish registration, accept our terms of service and click on \"Create Account\".\n          </div>\n\n          <div class=\"mt-4\" fxLayout=\"column\" fxLayoutGap=\"8px\">\n            <mat-checkbox class=\"checkbox\" formControlName=\"terms\">\n              I agree to the terms of service and the usual stuff. *\n            </mat-checkbox>\n          </div>\n\n          <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n            <button color=\"primary\" mat-button matStepperPrevious type=\"button\">PREVIOUS</button>\n            <button (click)=\"submit()\" [disabled]=\"confirmFormGroup.invalid\" color=\"primary\" mat-raised-button\n                    matStepperNext>\n              CREATE ACCOUNT\n            </button>\n          </div>\n        </form>\n\n      </mat-step>\n    </mat-horizontal-stepper>\n  </div>\n\n  <h2 class=\"title mt-6 mb-4\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <span @scaleIn\n          [style.background-color]=\"theme.colors.primary['500'] | colorFade:0.9\"\n          class=\"w-10 h-10 rounded-full text-primary-500 mr-3 flex items-center justify-center\">\n      <ic-icon [icon]=\"icVerticalSplit\" height=\"20px\" width=\"20px\"></ic-icon>\n    </span>\n    <span @fadeInRight class=\"block\">Vertical Form Wizard</span>\n  </h2>\n\n  <div @fadeInUp class=\"card overflow-hidden\">\n    <mat-vertical-stepper #verticalStepper=\"matVerticalStepper\" [linear]=\"true\">\n      <ng-template matStepperIcon=\"edit\">\n        <mat-icon [icIcon]=\"icDoneAll\"></mat-icon>\n      </ng-template>\n\n      <ng-template matStepperIcon=\"done\">\n        <mat-icon [icIcon]=\"icDoneAll\"></mat-icon>\n      </ng-template>\n\n      <mat-step [stepControl]=\"verticalAccountFormGroup\">\n        <form [formGroup]=\"verticalAccountFormGroup\">\n          <ng-template matStepLabel>Create Account</ng-template>\n\n          <div class=\"title m-0\">Create Account</div>\n          <div class=\"subheading-1\">Set up your account for testing purposes.</div>\n\n          <div class=\"mt-4\" fxLayout=\"column\" fxLayoutGap=\"8px\">\n            <mat-form-field fxFlex=\"auto\">\n              <mat-label>Account Username</mat-label>\n              <input formControlName=\"username\" matInput required>\n              <mat-hint>This will be your unique login name.</mat-hint>\n            </mat-form-field>\n\n            <mat-form-field fxFlex=\"auto\">\n              <mat-label>Name</mat-label>\n              <input formControlName=\"name\" matInput required>\n              <mat-hint>How may we call you?</mat-hint>\n            </mat-form-field>\n\n            <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutGap=\"8px\" fxLayoutGap.gt-xs=\"24px\">\n              <mat-form-field fxFlex=\"auto\">\n                <mat-label>E-Mail</mat-label>\n                <input formControlName=\"email\" matInput required>\n                <mat-hint align=\"end\">example@example.com</mat-hint>\n              </mat-form-field>\n\n              <div fxFlex=\"auto\" fxLayout=\"row\" fxLayoutGap=\"8px\">\n                <mat-form-field class=\"vex-flex-form-field\" fxFlex=\"none\">\n                  <mat-label>Code</mat-label>\n                  <mat-select formControlName=\"phonePrefix\">\n                    <mat-option *ngFor=\"let option of phonePrefixOptions\" [value]=\"option\">{{ option }}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n                <mat-form-field class=\"vex-flex-form-field\" fxFlex=\"auto\">\n                  <mat-label>Phone Number</mat-label>\n                  <input formControlName=\"phone\" matInput>\n                  <mat-hint align=\"end\"></mat-hint>\n                </mat-form-field>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n            <button (click)=\"verticalStepper.reset()\" [disabled]=\"verticalAccountFormGroup.pristine\" color=\"primary\"\n                    mat-button\n                    type=\"button\">RESET\n            </button>\n            <button [disabled]=\"verticalAccountFormGroup.invalid\" color=\"primary\" mat-raised-button matStepperNext>\n              NEXT\n            </button>\n          </div>\n        </form>\n      </mat-step>\n\n      <mat-step [stepControl]=\"verticalPasswordFormGroup\">\n        <form [formGroup]=\"verticalPasswordFormGroup\">\n          <ng-template matStepLabel>Select a Password</ng-template>\n\n          <div class=\"title m-0\">Select a Password</div>\n          <div class=\"subheading-1\">Enter your password you will use to log in.</div>\n\n          <div class=\"mt-4\" fxLayout=\"column\" fxLayoutGap=\"8px\">\n            <mat-form-field fxFlex=\"auto\">\n              <mat-label>Password</mat-label>\n              <input [type]=\"passwordInputType\" formControlName=\"password\" matInput required>\n              <button (click)=\"showPassword()\" *ngIf=\"passwordInputType === 'password'\" mat-icon-button matSuffix\n                      type=\"button\">\n                <mat-icon [icIcon]=\"icVisibility\"></mat-icon>\n              </button>\n              <button (click)=\"hidePassword()\" *ngIf=\"passwordInputType === 'text'\" mat-icon-button matSuffix\n                      type=\"button\">\n                <mat-icon [icIcon]=\"icVisibilityOff\"></mat-icon>\n              </button>\n              <mat-hint>Your password should be atleast 6 characters long.</mat-hint>\n            </mat-form-field>\n\n            <mat-form-field fxFlex=\"auto\">\n              <mat-label>Confirm Password</mat-label>\n              <input [type]=\"passwordInputType\" formControlName=\"passwordConfirm\" matInput required>\n              <button (click)=\"showPassword()\" *ngIf=\"passwordInputType === 'password'\" mat-icon-button matSuffix\n                      type=\"button\">\n                <mat-icon [icIcon]=\"icVisibility\"></mat-icon>\n              </button>\n              <button (click)=\"hidePassword()\" *ngIf=\"passwordInputType === 'text'\" mat-icon-button matSuffix\n                      type=\"button\">\n                <mat-icon [icIcon]=\"icVisibilityOff\"></mat-icon>\n              </button>\n              <mat-hint>Please type in your password again.</mat-hint>\n            </mat-form-field>\n          </div>\n\n          <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n            <button color=\"primary\" mat-button matStepperPrevious type=\"button\">PREVIOUS</button>\n            <button [disabled]=\"verticalPasswordFormGroup.invalid\" color=\"primary\" mat-raised-button matStepperNext>\n              NEXT\n            </button>\n          </div>\n        </form>\n      </mat-step>\n\n      <mat-step [stepControl]=\"verticalConfirmFormGroup\">\n        <form [formGroup]=\"verticalConfirmFormGroup\">\n          <ng-template matStepLabel>Confirm Creation</ng-template>\n\n          <div class=\"title m-0\">You're almost there!</div>\n          <div class=\"subheading-1\">To finish registration, accept our terms of service and click on \"Create Account\".\n          </div>\n\n          <div class=\"mt-4\" fxLayout=\"column\" fxLayoutGap=\"8px\">\n            <mat-checkbox class=\"checkbox\" formControlName=\"terms\">\n              I agree to the terms of service and the usual stuff. *\n            </mat-checkbox>\n          </div>\n\n          <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n            <button color=\"primary\" mat-button matStepperPrevious type=\"button\">PREVIOUS</button>\n            <button (click)=\"submit()\" [disabled]=\"verticalConfirmFormGroup.invalid\" color=\"primary\" mat-raised-button\n                    matStepperNext>\n              CREATE ACCOUNT\n            </button>\n          </div>\n        </form>\n\n      </mat-step>\n    </mat-vertical-stepper>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./src/@vex/animations/fade-in-right.animation.ts":
  /*!********************************************************!*\
    !*** ./src/@vex/animations/fade-in-right.animation.ts ***!
    \********************************************************/

  /*! exports provided: fadeInRightAnimation, fadeInRight400ms */

  /***/
  function srcVexAnimationsFadeInRightAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInRightAnimation", function () {
      return fadeInRightAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInRight400ms", function () {
      return fadeInRight400ms;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    function fadeInRightAnimation(duration) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateX(-20px)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateX(0)',
        opacity: 1
      }))])]);
    }

    var fadeInRight400ms = fadeInRightAnimation(400);
    /***/
  },

  /***/
  "./src/@vex/animations/fade-in-up.animation.ts":
  /*!*****************************************************!*\
    !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
    \*****************************************************/

  /*! exports provided: fadeInUpAnimation, fadeInUp400ms */

  /***/
  function srcVexAnimationsFadeInUpAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function () {
      return fadeInUpAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function () {
      return fadeInUp400ms;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    function fadeInUpAnimation(duration) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateY(20px)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateY(0)',
        opacity: 1
      }))])]);
    }

    var fadeInUp400ms = fadeInUpAnimation(400);
    /***/
  },

  /***/
  "./src/@vex/animations/scale-in.animation.ts":
  /*!***************************************************!*\
    !*** ./src/@vex/animations/scale-in.animation.ts ***!
    \***************************************************/

  /*! exports provided: scaleInAnimation, scaleIn400ms */

  /***/
  function srcVexAnimationsScaleInAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleInAnimation", function () {
      return scaleInAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleIn400ms", function () {
      return scaleIn400ms;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    function scaleInAnimation(duration) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scaleIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'scale(0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'scale(1)'
      }))])]);
    }

    var scaleIn400ms = scaleInAnimation(400);
    /***/
  },

  /***/
  "./src/@vex/animations/stagger.animation.ts":
  /*!**************************************************!*\
    !*** ./src/@vex/animations/stagger.animation.ts ***!
    \**************************************************/

  /*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */

  /***/
  function srcVexAnimationsStaggerAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staggerAnimation", function () {
      return staggerAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stagger80ms", function () {
      return stagger80ms;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stagger60ms", function () {
      return stagger60ms;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stagger40ms", function () {
      return stagger40ms;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stagger20ms", function () {
      return stagger20ms;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    function staggerAnimation(timing) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), {
        optional: true
      })])]);
    }

    var stagger80ms = staggerAnimation(80);
    var stagger60ms = staggerAnimation(60);
    var stagger40ms = staggerAnimation(40);
    var stagger20ms = staggerAnimation(20);
    /***/
  },

  /***/
  "./src/app/pages/ui/forms/form-wizard/form-wizard-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/ui/forms/form-wizard/form-wizard-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: FormWizardRoutingModule */

  /***/
  function srcAppPagesUiFormsFormWizardFormWizardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormWizardRoutingModule", function () {
      return FormWizardRoutingModule;
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


    var _form_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./form-wizard.component */
    "./src/app/pages/ui/forms/form-wizard/form-wizard.component.ts");

    var routes = [{
      path: '',
      component: _form_wizard_component__WEBPACK_IMPORTED_MODULE_3__["FormWizardComponent"]
    }];

    var FormWizardRoutingModule = function FormWizardRoutingModule() {
      _classCallCheck(this, FormWizardRoutingModule);
    };

    FormWizardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FormWizardRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/ui/forms/form-wizard/form-wizard.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/ui/forms/form-wizard/form-wizard.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUiFormsFormWizardFormWizardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2Zvcm1zL2Zvcm0td2l6YXJkL2Zvcm0td2l6YXJkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/ui/forms/form-wizard/form-wizard.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/ui/forms/form-wizard/form-wizard.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FormWizardComponent */

  /***/
  function srcAppPagesUiFormsFormWizardFormWizardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormWizardComponent", function () {
      return FormWizardComponent;
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


    var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-description */
    "./node_modules/@iconify/icons-ic/twotone-description.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");
    /* harmony import */


    var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../@vex/animations/scale-in.animation */
    "./src/@vex/animations/scale-in.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-right.animation */
    "./src/@vex/animations/fade-in-right.animation.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_vertical_split__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-vertical-split */
    "./node_modules/@iconify/icons-ic/twotone-vertical-split.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_vertical_split__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_vertical_split__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-visibility */
    "./node_modules/@iconify/icons-ic/twotone-visibility.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-visibility-off */
    "./node_modules/@iconify/icons-ic/twotone-visibility-off.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-done-all */
    "./node_modules/@iconify/icons-ic/twotone-done-all.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-more-vert */
    "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../../@vex/utils/tailwindcss */
    "./src/@vex/utils/tailwindcss.ts");

    var FormWizardComponent = /*#__PURE__*/function () {
      function FormWizardComponent(fb, cd, snackbar) {
        _classCallCheck(this, FormWizardComponent);

        this.fb = fb;
        this.cd = cd;
        this.snackbar = snackbar;
        this.phonePrefixOptions = ['+1', '+27', '+44', '+49', '+61', '+91'];
        this.passwordInputType = 'password';
        this.icDoneAll = _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icDescription = _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icVerticalSplit = _iconify_icons_ic_twotone_vertical_split__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icVisibility = _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icVisibilityOff = _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.theme = _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_14__["default"];
      }

      _createClass(FormWizardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /**
           * Horizontal Stepper
           * @type {FormGroup}
           */
          this.accountFormGroup = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phonePrefix: [this.phonePrefixOptions[3]],
            phone: []
          });
          this.passwordFormGroup = this.fb.group({
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])],
            passwordConfirm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.confirmFormGroup = this.fb.group({
            terms: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue]
          });
          /**
           * Vertical Stepper
           * @type {FormGroup}
           */

          this.verticalAccountFormGroup = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phonePrefix: [this.phonePrefixOptions[3]],
            phone: []
          });
          this.verticalPasswordFormGroup = this.fb.group({
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])],
            passwordConfirm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.verticalConfirmFormGroup = this.fb.group({
            terms: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue]
          });
        }
      }, {
        key: "showPassword",
        value: function showPassword() {
          this.passwordInputType = 'text';
          this.cd.markForCheck();
        }
      }, {
        key: "hidePassword",
        value: function hidePassword() {
          this.passwordInputType = 'password';
          this.cd.markForCheck();
        }
      }, {
        key: "submit",
        value: function submit() {
          this.snackbar.open('Hooray! You successfully created your account.', null, {
            duration: 5000
          });
        }
      }]);

      return FormWizardComponent;
    }();

    FormWizardComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }];
    };

    FormWizardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-form-wizard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-wizard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/forms/form-wizard/form-wizard.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      animations: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__["stagger80ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__["fadeInUp400ms"], _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_7__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_8__["fadeInRight400ms"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-wizard.component.scss */
      "./src/app/pages/ui/forms/form-wizard/form-wizard.component.scss"))["default"]]
    })], FormWizardComponent);
    /***/
  },

  /***/
  "./src/app/pages/ui/forms/form-wizard/form-wizard.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/ui/forms/form-wizard/form-wizard.module.ts ***!
    \******************************************************************/

  /*! exports provided: FormWizardModule */

  /***/
  function srcAppPagesUiFormsFormWizardFormWizardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormWizardModule", function () {
      return FormWizardModule;
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


    var _form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./form-wizard-routing.module */
    "./src/app/pages/ui/forms/form-wizard/form-wizard-routing.module.ts");
    /* harmony import */


    var _form_wizard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./form-wizard.component */
    "./src/app/pages/ui/forms/form-wizard/form-wizard.component.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");
    /* harmony import */


    var _vex_pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../../../@vex/pipes/color/color-fade.module */
    "./src/@vex/pipes/color/color-fade.module.ts");

    var FormWizardModule = function FormWizardModule() {
      _classCallCheck(this, FormWizardModule);
    };

    FormWizardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_form_wizard_component__WEBPACK_IMPORTED_MODULE_4__["FormWizardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormWizardRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_13__["SecondaryToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__["IconModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__["ContainerModule"], _vex_pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_18__["ColorFadeModule"]]
    })], FormWizardModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-ui-forms-form-wizard-form-wizard-module-es5.js.map