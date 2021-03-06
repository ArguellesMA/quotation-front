function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-overview-components-overview-module~components-progress-spinner-components-progre~7b64da95"], {
  /***/
  "./node_modules/@angular/material/esm2015/progress-spinner.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/progress-spinner.js ***!
    \********************************************************************/

  /*! exports provided: MatProgressSpinner, MatSpinner, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY, MatProgressSpinnerModule */

  /***/
  function node_modulesAngularMaterialEsm2015ProgressSpinnerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressSpinner", function () {
      return MatProgressSpinner;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSpinner", function () {
      return MatSpinner;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS", function () {
      return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY", function () {
      return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerModule", function () {
      return MatProgressSpinnerModule;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base reference size of the spinner.
     * \@docs-private
     * @type {?}
     */


    var BASE_SIZE = 100;
    /**
     * Base reference stroke width of the spinner.
     * \@docs-private
     * @type {?}
     */

    var BASE_STROKE_WIDTH = 10; // Boilerplate for applying mixins to MatProgressSpinner.

    /**
     * \@docs-private
     */

    var MatProgressSpinnerBase =
    /**
     * @param {?} _elementRef
     */
    function MatProgressSpinnerBase(_elementRef) {
      _classCallCheck(this, MatProgressSpinnerBase);

      this._elementRef = _elementRef;
    };
    /** @type {?} */


    var _MatProgressSpinnerMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(MatProgressSpinnerBase, 'primary');
    /**
     * Injection token to be used to override the default options for `mat-progress-spinner`.
     * @type {?}
     */


    var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-progress-spinner-default-options', {
      providedIn: 'root',
      factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
      return {
        diameter: BASE_SIZE
      };
    } // .0001 percentage difference is necessary in order to avoid unwanted animation frames
    // for example because the animation duration is 4 seconds, .1% accounts to 4ms
    // which are enough to see the flicker described in
    // https://github.com/angular/components/issues/8984

    /** @type {?} */


    var INDETERMINATE_ANIMATION_TEMPLATE = "\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n";
    /**
     * `<mat-progress-spinner>` component.
     */

    var MatProgressSpinner = /*#__PURE__*/function (_MatProgressSpinnerMi) {
      _inherits(MatProgressSpinner, _MatProgressSpinnerMi);

      var _super = _createSuper(MatProgressSpinner);

      /**
       * @param {?} _elementRef
       * @param {?} platform
       * @param {?} _document
       * @param {?} animationMode
       * @param {?=} defaults
       */
      function MatProgressSpinner(_elementRef, platform, _document, animationMode, defaults) {
        var _this;

        _classCallCheck(this, MatProgressSpinner);

        _this = _super.call(this, _elementRef);
        _this._elementRef = _elementRef;
        _this._document = _document;
        _this._diameter = BASE_SIZE;
        _this._value = 0;
        _this._fallbackAnimation = false;
        /**
         * Mode of the progress circle
         */

        _this.mode = 'determinate';
        /** @type {?} */

        var trackedDiameters = MatProgressSpinner._diameters; // The base size is already inserted via the component's structural styles. We still
        // need to track it so we don't end up adding the same styles again.

        if (!trackedDiameters.has(_document.head)) {
          trackedDiameters.set(_document.head, new Set([BASE_SIZE]));
        }

        _this._fallbackAnimation = platform.EDGE || platform.TRIDENT;
        _this._noopAnimations = animationMode === 'NoopAnimations' && !!defaults && !defaults._forceAnimations;

        if (defaults) {
          if (defaults.diameter) {
            _this.diameter = defaults.diameter;
          }

          if (defaults.strokeWidth) {
            _this.strokeWidth = defaults.strokeWidth;
          }
        }

        return _this;
      }
      /**
       * The diameter of the progress spinner (will set width and height of svg).
       * @return {?}
       */


      _createClass(MatProgressSpinner, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          /** @type {?} */
          var element = this._elementRef.nativeElement; // Note that we need to look up the root node in ngOnInit, rather than the constructor, because
          // Angular seems to create the element outside the shadow root and then moves it inside, if the
          // node is inside an `ngIf` and a ShadowDom-encapsulated component.

          this._styleRoot = _getShadowRoot(element, this._document) || this._document.head;

          this._attachStyleNode(); // On IE and Edge, we can't animate the `stroke-dashoffset`
          // reliably so we fall back to a non-spec animation.

          /** @type {?} */


          var animationClass = "mat-progress-spinner-indeterminate".concat(this._fallbackAnimation ? '-fallback' : '', "-animation");
          element.classList.add(animationClass);
        }
        /**
         * The radius of the spinner, adjusted for stroke width.
         * @return {?}
         */

      }, {
        key: "_attachStyleNode",

        /**
         * Dynamically generates a style tag containing the correct animation for this diameter.
         * @private
         * @return {?}
         */
        value: function _attachStyleNode() {
          /** @type {?} */
          var styleRoot = this._styleRoot;
          /** @type {?} */

          var currentDiameter = this._diameter;
          /** @type {?} */

          var diameters = MatProgressSpinner._diameters;
          /** @type {?} */

          var diametersForElement = diameters.get(styleRoot);

          if (!diametersForElement || !diametersForElement.has(currentDiameter)) {
            /** @type {?} */
            var styleTag = this._document.createElement('style');

            styleTag.setAttribute('mat-spinner-animation', currentDiameter + '');
            styleTag.textContent = this._getAnimationText();
            styleRoot.appendChild(styleTag);

            if (!diametersForElement) {
              diametersForElement = new Set();
              diameters.set(styleRoot, diametersForElement);
            }

            diametersForElement.add(currentDiameter);
          }
        }
        /**
         * Generates animation styles adjusted for the spinner's diameter.
         * @private
         * @return {?}
         */

      }, {
        key: "_getAnimationText",
        value: function _getAnimationText() {
          return INDETERMINATE_ANIMATION_TEMPLATE // Animation should begin at 5% and end at 80%
          .replace(/START_VALUE/g, "".concat(0.95 * this._strokeCircumference)).replace(/END_VALUE/g, "".concat(0.2 * this._strokeCircumference)).replace(/DIAMETER/g, "".concat(this.diameter));
        }
      }, {
        key: "diameter",
        get: function get() {
          return this._diameter;
        }
        /**
         * @param {?} size
         * @return {?}
         */
        ,
        set: function set(size) {
          this._diameter = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(size); // If this is set before `ngOnInit`, the style root may not have been resolved yet.

          if (!this._fallbackAnimation && this._styleRoot) {
            this._attachStyleNode();
          }
        }
        /**
         * Stroke width of the progress spinner.
         * @return {?}
         */

      }, {
        key: "strokeWidth",
        get: function get() {
          return this._strokeWidth || this.diameter / 10;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._strokeWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
        /**
         * Value of the progress circle.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this.mode === 'determinate' ? this._value : 0;
        }
        /**
         * @param {?} newValue
         * @return {?}
         */
        ,
        set: function set(newValue) {
          this._value = Math.max(0, Math.min(100, Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(newValue)));
        }
      }, {
        key: "_circleRadius",
        get: function get() {
          return (this.diameter - BASE_STROKE_WIDTH) / 2;
        }
        /**
         * The view box of the spinner's svg element.
         * @return {?}
         */

      }, {
        key: "_viewBox",
        get: function get() {
          /** @type {?} */
          var viewBox = this._circleRadius * 2 + this.strokeWidth;
          return "0 0 ".concat(viewBox, " ").concat(viewBox);
        }
        /**
         * The stroke circumference of the svg circle.
         * @return {?}
         */

      }, {
        key: "_strokeCircumference",
        get: function get() {
          return 2 * Math.PI * this._circleRadius;
        }
        /**
         * The dash offset of the svg circle.
         * @return {?}
         */

      }, {
        key: "_strokeDashOffset",
        get: function get() {
          if (this.mode === 'determinate') {
            return this._strokeCircumference * (100 - this._value) / 100;
          } // In fallback mode set the circle to 80% and rotate it with CSS.


          if (this._fallbackAnimation && this.mode === 'indeterminate') {
            return this._strokeCircumference * 0.2;
          }

          return null;
        }
        /**
         * Stroke width of the circle in percent.
         * @return {?}
         */

      }, {
        key: "_circleStrokeWidth",
        get: function get() {
          return this.strokeWidth / this.diameter * 100;
        }
      }]);

      return MatProgressSpinner;
    }(_MatProgressSpinnerMixinBase);
    /**
     * Tracks diameters of existing instances to de-dupe generated styles (default d = 100).
     * We need to keep track of which elements the diameters were attached to, because for
     * elements in the Shadow DOM the style tags are attached to the shadow root, rather
     * than the document head.
     */


    MatProgressSpinner._diameters = new WeakMap();
    MatProgressSpinner.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
      args: [{
        selector: 'mat-progress-spinner',
        exportAs: 'matProgressSpinner',
        host: {
          'role': 'progressbar',
          'class': 'mat-progress-spinner',
          '[class._mat-animation-noopable]': "_noopAnimations",
          '[style.width.px]': 'diameter',
          '[style.height.px]': 'diameter',
          '[attr.aria-valuemin]': 'mode === "determinate" ? 0 : null',
          '[attr.aria-valuemax]': 'mode === "determinate" ? 100 : null',
          '[attr.aria-valuenow]': 'mode === "determinate" ? value : null',
          '[attr.mode]': 'mode'
        },
        inputs: ['color'],
        template: "<svg [style.width.px]=\"diameter\" [style.height.px]=\"diameter\" [attr.viewBox]=\"_viewBox\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" [ngSwitch]=\"mode === 'indeterminate'\"><circle *ngSwitchCase=\"true\" cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle><circle *ngSwitchCase=\"false\" cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle></svg>",
        styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatProgressSpinner.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatProgressSpinner.propDecorators = {
      diameter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      strokeWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      mode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /**
     * `<mat-spinner>` component.
     *
     * This is a component definition to be used as a convenience reference to create an
     * indeterminate `<mat-progress-spinner>` instance.
     */

    var MatSpinner = /*#__PURE__*/function (_MatProgressSpinner) {
      _inherits(MatSpinner, _MatProgressSpinner);

      var _super2 = _createSuper(MatSpinner);

      /**
       * @param {?} elementRef
       * @param {?} platform
       * @param {?} document
       * @param {?} animationMode
       * @param {?=} defaults
       */
      function MatSpinner(elementRef, platform, document, animationMode, defaults) {
        var _this2;

        _classCallCheck(this, MatSpinner);

        _this2 = _super2.call(this, elementRef, platform, document, animationMode, defaults);
        _this2.mode = 'indeterminate';
        return _this2;
      }

      return MatSpinner;
    }(MatProgressSpinner);

    MatSpinner.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
      args: [{
        selector: 'mat-spinner',
        host: {
          'role': 'progressbar',
          'mode': 'indeterminate',
          'class': 'mat-spinner mat-progress-spinner',
          '[class._mat-animation-noopable]': "_noopAnimations",
          '[style.width.px]': 'diameter',
          '[style.height.px]': 'diameter'
        },
        inputs: ['color'],
        template: "<svg [style.width.px]=\"diameter\" [style.height.px]=\"diameter\" [attr.viewBox]=\"_viewBox\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" [ngSwitch]=\"mode === 'indeterminate'\"><circle *ngSwitchCase=\"true\" cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle><circle *ngSwitchCase=\"false\" cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle></svg>",
        styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatSpinner.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
        }]
      }];
    };
    /**
     * Gets the shadow root of an element, if supported and the element is inside the Shadow DOM.
     * @param {?} element
     * @param {?} _document
     * @return {?}
     */


    function _getShadowRoot(element, _document) {
      // TODO(crisbeto): see whether we should move this into the CDK
      // feature detection utilities once #15616 gets merged in.
      if (typeof window !== 'undefined') {
        /** @type {?} */
        var head = _document.head; // Check whether the browser supports Shadow DOM.

        if (head && (
        /** @type {?} */
        head.createShadowRoot || head.attachShadow)) {
          /** @type {?} */
          var rootNode = element.getRootNode ? element.getRootNode() : null; // We need to take the `ShadowRoot` off of `window`, because the built-in types are
          // incorrect. See https://github.com/Microsoft/TypeScript/issues/27929.

          if (rootNode instanceof
          /** @type {?} */
          window.ShadowRoot) {
            return rootNode;
          }
        }
      }

      return null;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatProgressSpinnerModule = function MatProgressSpinnerModule() {
      _classCallCheck(this, MatProgressSpinnerModule);
    };

    MatProgressSpinnerModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [MatProgressSpinner, MatSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
        declarations: [MatProgressSpinner, MatSpinner]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=progress-spinner.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~components-overview-components-overview-module~components-progress-spinner-components-progre~7b64da95-es5.js.map