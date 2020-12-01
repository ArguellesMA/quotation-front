function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-dashboards-dashboard-analytics-dashboard-analytics-module~pages-ui-forms-form-wizard-f~0582c426"], {
  /***/
  "./node_modules/@angular/cdk/esm2015/stepper.js":
  /*!******************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/stepper.js ***!
    \******************************************************/

  /*! exports provided: StepperSelectionEvent, STEP_STATE, STEPPER_GLOBAL_OPTIONS, MAT_STEPPER_GLOBAL_OPTIONS, CdkStep, CdkStepper, CdkStepLabel, CdkStepperNext, CdkStepperPrevious, CdkStepperModule, CdkStepHeader */

  /***/
  function node_modulesAngularCdkEsm2015StepperJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepperSelectionEvent", function () {
      return StepperSelectionEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STEP_STATE", function () {
      return STEP_STATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STEPPER_GLOBAL_OPTIONS", function () {
      return STEPPER_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_GLOBAL_OPTIONS", function () {
      return MAT_STEPPER_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStep", function () {
      return CdkStep;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepper", function () {
      return CdkStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepLabel", function () {
      return CdkStepLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepperNext", function () {
      return CdkStepperNext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepperPrevious", function () {
      return CdkStepperPrevious;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepperModule", function () {
      return CdkStepperModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepHeader", function () {
      return CdkStepHeader;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
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


    var CdkStepHeader = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       */
      function CdkStepHeader(_elementRef) {
        _classCallCheck(this, CdkStepHeader);

        this._elementRef = _elementRef;
      }
      /**
       * Focuses the step header.
       * @return {?}
       */


      _createClass(CdkStepHeader, [{
        key: "focus",
        value: function focus() {
          this._elementRef.nativeElement.focus();
        }
      }]);

      return CdkStepHeader;
    }();

    CdkStepHeader.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdkStepHeader]',
        host: {
          'role': 'tab'
        }
      }]
    }];
    /** @nocollapse */

    CdkStepHeader.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CdkStepLabel =
    /**
     * @param {?} template
     */
    function CdkStepLabel(
    /** @docs-private */
    template) {
      _classCallCheck(this, CdkStepLabel);

      this.template = template;
    };

    CdkStepLabel.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdkStepLabel]'
      }]
    }];
    /** @nocollapse */

    CdkStepLabel.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to generate unique ID for each stepper component.
     * @type {?}
     */


    var nextId = 0;
    /**
     * Change event emitted on selection changes.
     */

    var StepperSelectionEvent = function StepperSelectionEvent() {
      _classCallCheck(this, StepperSelectionEvent);
    };
    /**
     * Enum to represent the different states of the steps.
     * @type {?}
     */


    var STEP_STATE = {
      NUMBER: 'number',
      EDIT: 'edit',
      DONE: 'done',
      ERROR: 'error'
    };
    /**
     * InjectionToken that can be used to specify the global stepper options.
     * @type {?}
     */

    var STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('STEPPER_GLOBAL_OPTIONS');
    /**
     * InjectionToken that can be used to specify the global stepper options.
     * @deprecated Use `STEPPER_GLOBAL_OPTIONS` instead.
     * \@breaking-change 8.0.0.
     * @type {?}
     */

    var MAT_STEPPER_GLOBAL_OPTIONS = STEPPER_GLOBAL_OPTIONS;

    var CdkStep = /*#__PURE__*/function () {
      /**
       * \@breaking-change 8.0.0 remove the `?` after `stepperOptions`
       * @param {?} _stepper
       * @param {?=} stepperOptions
       */
      function CdkStep(_stepper, stepperOptions) {
        _classCallCheck(this, CdkStep);

        this._stepper = _stepper;
        /**
         * Whether user has seen the expanded step content or not.
         */

        this.interacted = false;
        this._editable = true;
        this._optional = false;
        this._completedOverride = null;
        this._customError = null;
        this._stepperOptions = stepperOptions ? stepperOptions : {};
        this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
        this._showError = !!this._stepperOptions.showError;
      }
      /**
       * Whether the user can return to this step once it has been marked as completed.
       * @return {?}
       */


      _createClass(CdkStep, [{
        key: "_getDefaultCompleted",

        /**
         * @private
         * @return {?}
         */
        value: function _getDefaultCompleted() {
          return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
        }
        /**
         * Whether step has an error.
         * @return {?}
         */

      }, {
        key: "_getDefaultError",

        /**
         * @private
         * @return {?}
         */
        value: function _getDefaultError() {
          return this.stepControl && this.stepControl.invalid && this.interacted;
        }
        /**
         * Selects this step component.
         * @return {?}
         */

      }, {
        key: "select",
        value: function select() {
          this._stepper.selected = this;
        }
        /**
         * Resets the step to its initial state. Note that this includes resetting form data.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this.interacted = false;

          if (this._completedOverride != null) {
            this._completedOverride = false;
          }

          if (this._customError != null) {
            this._customError = false;
          }

          if (this.stepControl) {
            this.stepControl.reset();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          // Since basically all inputs of the MatStep get proxied through the view down to the
          // underlying MatStepHeader, we have to make sure that change detection runs correctly.
          this._stepper._stateChanged();
        }
      }, {
        key: "editable",
        get: function get() {
          return this._editable;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._editable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the completion of step is optional.
         * @return {?}
         */

      }, {
        key: "optional",
        get: function get() {
          return this._optional;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._optional = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether step is marked as completed.
         * @return {?}
         */

      }, {
        key: "completed",
        get: function get() {
          return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._completedOverride = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
      }, {
        key: "hasError",
        get: function get() {
          return this._customError == null ? this._getDefaultError() : this._customError;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._customError = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkStep;
    }();

    CdkStep.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'cdk-step',
        exportAs: 'cdkStep',
        template: '<ng-template><ng-content></ng-content></ng-template>',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    CdkStep.ctorParameters = function () {
      return [{
        type: CdkStepper,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return CdkStepper;
          })]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [STEPPER_GLOBAL_OPTIONS]
        }]
      }];
    };

    CdkStep.propDecorators = {
      stepLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [CdkStepLabel, {
          "static": false
        }]
      }],
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], {
          "static": true
        }]
      }],
      stepControl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      errorMessage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['aria-labelledby']
      }],
      state: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      editable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      optional: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      completed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hasError: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    var CdkStepper = /*#__PURE__*/function () {
      /**
       * @param {?} _dir
       * @param {?} _changeDetectorRef
       * @param {?=} _elementRef
       * @param {?=} _document
       */
      function CdkStepper(_dir, _changeDetectorRef, _elementRef, _document) {
        _classCallCheck(this, CdkStepper);

        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        /**
         * Emits when the component is destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._linear = false;
        this._selectedIndex = 0;
        /**
         * Event emitted when the selected step has changed.
         */

        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._orientation = 'horizontal';
        this._groupId = nextId++;
        this._document = _document;
      }
      /**
       * The list of step components that the stepper is holding.
       * @return {?}
       */


      _createClass(CdkStepper, [{
        key: "ngAfterViewInit",

        /**
         * @return {?}
         */
        value: function ngAfterViewInit() {
          var _this = this;

          // Note that while the step headers are content children by default, any components that
          // extend this one might have them as view chidren. We initialize the keyboard handling in
          // AfterViewInit so we're guaranteed for both view and content children to be defined.
          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusKeyManager"](this._stepHeader).withWrap().withVerticalOrientation(this._orientation === 'vertical');
          (this._dir ?
          /** @type {?} */
          this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._layoutDirection()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} direction
          * @return {?}
          */
          function (direction) {
            return _this._keyManager.withHorizontalOrientation(direction);
          });

          this._keyManager.updateActiveItemIndex(this._selectedIndex);

          this.steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (!_this.selected) {
              _this._selectedIndex = Math.max(_this._selectedIndex - 1, 0);
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Selects and focuses the next step in list.
         * @return {?}
         */

      }, {
        key: "next",
        value: function next() {
          this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
        }
        /**
         * Selects and focuses the previous step in list.
         * @return {?}
         */

      }, {
        key: "previous",
        value: function previous() {
          this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
        }
        /**
         * Resets the stepper to its initial state. Note that this includes clearing form data.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this._updateSelectedItemIndex(0);

          this.steps.forEach(
          /**
          * @param {?} step
          * @return {?}
          */
          function (step) {
            return step.reset();
          });

          this._stateChanged();
        }
        /**
         * Returns a unique id for each step label element.
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getStepLabelId",
        value: function _getStepLabelId(i) {
          return "cdk-step-label-".concat(this._groupId, "-").concat(i);
        }
        /**
         * Returns unique id for each step content element.
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getStepContentId",
        value: function _getStepContentId(i) {
          return "cdk-step-content-".concat(this._groupId, "-").concat(i);
        }
        /**
         * Marks the component to be change detected.
         * @return {?}
         */

      }, {
        key: "_stateChanged",
        value: function _stateChanged() {
          this._changeDetectorRef.markForCheck();
        }
        /**
         * Returns position state of the step with the given index.
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_getAnimationDirection",
        value: function _getAnimationDirection(index) {
          /** @type {?} */
          var position = index - this._selectedIndex;

          if (position < 0) {
            return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
          } else if (position > 0) {
            return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
          }

          return 'current';
        }
        /**
         * Returns the type of icon to be displayed.
         * @param {?} index
         * @param {?=} state
         * @return {?}
         */

      }, {
        key: "_getIndicatorType",
        value: function _getIndicatorType(index) {
          var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : STEP_STATE.NUMBER;

          /** @type {?} */
          var step = this.steps.toArray()[index];
          /** @type {?} */

          var isCurrentStep = this._isCurrentStep(index);

          return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) : this._getGuidelineLogic(step, isCurrentStep, state);
        }
        /**
         * @private
         * @param {?} step
         * @param {?} isCurrentStep
         * @return {?}
         */

      }, {
        key: "_getDefaultIndicatorLogic",
        value: function _getDefaultIndicatorLogic(step, isCurrentStep) {
          if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
          } else if (!step.completed || isCurrentStep) {
            return STEP_STATE.NUMBER;
          } else {
            return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
          }
        }
        /**
         * @private
         * @param {?} step
         * @param {?} isCurrentStep
         * @param {?=} state
         * @return {?}
         */

      }, {
        key: "_getGuidelineLogic",
        value: function _getGuidelineLogic(step, isCurrentStep) {
          var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : STEP_STATE.NUMBER;

          if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
          } else if (step.completed && !isCurrentStep) {
            return STEP_STATE.DONE;
          } else if (step.completed && isCurrentStep) {
            return state;
          } else if (step.editable && isCurrentStep) {
            return STEP_STATE.EDIT;
          } else {
            return state;
          }
        }
        /**
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_isCurrentStep",
        value: function _isCurrentStep(index) {
          return this._selectedIndex === index;
        }
        /**
         * Returns the index of the currently-focused step header.
         * @return {?}
         */

      }, {
        key: "_getFocusIndex",
        value: function _getFocusIndex() {
          return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
        }
        /**
         * @private
         * @param {?} newIndex
         * @return {?}
         */

      }, {
        key: "_updateSelectedItemIndex",
        value: function _updateSelectedItemIndex(newIndex) {
          /** @type {?} */
          var stepsArray = this.steps.toArray();
          this.selectionChange.emit({
            selectedIndex: newIndex,
            previouslySelectedIndex: this._selectedIndex,
            selectedStep: stepsArray[newIndex],
            previouslySelectedStep: stepsArray[this._selectedIndex]
          }); // If focus is inside the stepper, move it to the next header, otherwise it may become
          // lost when the active step content is hidden. We can't be more granular with the check
          // (e.g. checking whether focus is inside the active step), because we don't have a
          // reference to the elements that are rendering out the content.

          this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItemIndex(newIndex);
          this._selectedIndex = newIndex;

          this._stateChanged();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onKeydown",
        value: function _onKeydown(event) {
          /** @type {?} */
          var hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["hasModifierKey"])(event);
          /** @type {?} */

          var keyCode = event.keyCode;
          /** @type {?} */

          var manager = this._keyManager;

          if (manager.activeItemIndex != null && !hasModifier && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["SPACE"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"])) {
            this.selectedIndex = manager.activeItemIndex;
            event.preventDefault();
          } else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["HOME"]) {
            manager.setFirstItemActive();
            event.preventDefault();
          } else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["END"]) {
            manager.setLastItemActive();
            event.preventDefault();
          } else {
            manager.onKeydown(event);
          }
        }
        /**
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_anyControlsInvalidOrPending",
        value: function _anyControlsInvalidOrPending(index) {
          /** @type {?} */
          var steps = this.steps.toArray();
          steps[this._selectedIndex].interacted = true;

          if (this._linear && index >= 0) {
            return steps.slice(0, index).some(
            /**
            * @param {?} step
            * @return {?}
            */
            function (step) {
              /** @type {?} */
              var control = step.stepControl;
              /** @type {?} */

              var isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
              return isIncomplete && !step.optional && !step._completedOverride;
            });
          }

          return false;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_layoutDirection",
        value: function _layoutDirection() {
          return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        }
        /**
         * Checks whether the stepper contains the focused element.
         * @private
         * @return {?}
         */

      }, {
        key: "_containsFocus",
        value: function _containsFocus() {
          if (!this._document || !this._elementRef) {
            return false;
          }
          /** @type {?} */


          var stepperElement = this._elementRef.nativeElement;
          /** @type {?} */

          var focusedElement = this._document.activeElement;
          return stepperElement === focusedElement || stepperElement.contains(focusedElement);
        }
      }, {
        key: "steps",
        get: function get() {
          return this._steps;
        }
        /**
         * Whether the validity of previous steps should be checked or not.
         * @return {?}
         */

      }, {
        key: "linear",
        get: function get() {
          return this._linear;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._linear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
        /**
         * The index of the selected step.
         * @return {?}
         */

      }, {
        key: "selectedIndex",
        get: function get() {
          return this._selectedIndex;
        }
        /**
         * @param {?} index
         * @return {?}
         */
        ,
        set: function set(index) {
          /** @type {?} */
          var newIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(index);

          if (this.steps) {
            // Ensure that the index can't be out of bounds.
            if (newIndex < 0 || newIndex > this.steps.length - 1) {
              throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
            }

            if (this._selectedIndex != newIndex && !this._anyControlsInvalidOrPending(newIndex) && (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
              this._updateSelectedItemIndex(index);
            }
          } else {
            this._selectedIndex = newIndex;
          }
        }
        /**
         * The step that is selected.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          // @breaking-change 8.0.0 Change return type to `CdkStep | undefined`.
          return this.steps ? this.steps.toArray()[this.selectedIndex] :
          /** @type {?} */
          undefined;
        }
        /**
         * @param {?} step
         * @return {?}
         */
        ,
        set: function set(step) {
          this.selectedIndex = this.steps ? this.steps.toArray().indexOf(step) : -1;
        }
      }]);

      return CdkStepper;
    }();

    CdkStepper.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdkStepper]',
        exportAs: 'cdkStepper'
      }]
    }];
    /** @nocollapse */

    CdkStepper.ctorParameters = function () {
      return [{
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }];
    };

    CdkStepper.propDecorators = {
      _steps: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [CdkStep]
      }],
      _stepHeader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [CdkStepHeader]
      }],
      linear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectedIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Button that moves to the next step in a stepper workflow.
     */

    var CdkStepperNext = /*#__PURE__*/function () {
      /**
       * @param {?} _stepper
       */
      function CdkStepperNext(_stepper) {
        _classCallCheck(this, CdkStepperNext);

        this._stepper = _stepper;
        /**
         * Type of the next button. Defaults to "submit" if not specified.
         */

        this.type = 'submit';
      } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
      // In Ivy the `host` bindings will be merged when this class is extended, whereas in
      // ViewEngine they're overwritten.
      // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
      // tslint:disable-next-line:no-host-decorator-in-concrete

      /**
       * @return {?}
       */


      _createClass(CdkStepperNext, [{
        key: "_handleClick",
        value: function _handleClick() {
          this._stepper.next();
        }
      }]);

      return CdkStepperNext;
    }();

    CdkStepperNext.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'button[cdkStepperNext]',
        host: {
          '[type]': 'type'
        }
      }]
    }];
    /** @nocollapse */

    CdkStepperNext.ctorParameters = function () {
      return [{
        type: CdkStepper
      }];
    };

    CdkStepperNext.propDecorators = {
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      _handleClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click']
      }]
    };
    /**
     * Button that moves to the previous step in a stepper workflow.
     */

    var CdkStepperPrevious = /*#__PURE__*/function () {
      /**
       * @param {?} _stepper
       */
      function CdkStepperPrevious(_stepper) {
        _classCallCheck(this, CdkStepperPrevious);

        this._stepper = _stepper;
        /**
         * Type of the previous button. Defaults to "button" if not specified.
         */

        this.type = 'button';
      } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
      // In Ivy the `host` bindings will be merged when this class is extended, whereas in
      // ViewEngine they're overwritten.
      // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
      // tslint:disable-next-line:no-host-decorator-in-concrete

      /**
       * @return {?}
       */


      _createClass(CdkStepperPrevious, [{
        key: "_handleClick",
        value: function _handleClick() {
          this._stepper.previous();
        }
      }]);

      return CdkStepperPrevious;
    }();

    CdkStepperPrevious.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'button[cdkStepperPrevious]',
        host: {
          '[type]': 'type'
        }
      }]
    }];
    /** @nocollapse */

    CdkStepperPrevious.ctorParameters = function () {
      return [{
        type: CdkStepper
      }];
    };

    CdkStepperPrevious.propDecorators = {
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      _handleClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CdkStepperModule = function CdkStepperModule() {
      _classCallCheck(this, CdkStepperModule);
    };

    CdkStepperModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
        exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
        declarations: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
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
    //# sourceMappingURL=stepper.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/stepper.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/stepper.js ***!
    \***********************************************************/

  /*! exports provided: MatStepperModule, MatStepLabel, MatStep, MatStepper, MatHorizontalStepper, MatVerticalStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatStepperIntl, MAT_STEPPER_INTL_PROVIDER, matStepperAnimations, MatStepperIcon */

  /***/
  function node_modulesAngularMaterialEsm2015StepperJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperModule", function () {
      return MatStepperModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepLabel", function () {
      return MatStepLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStep", function () {
      return MatStep;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepper", function () {
      return MatStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHorizontalStepper", function () {
      return MatHorizontalStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatVerticalStepper", function () {
      return MatVerticalStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperNext", function () {
      return MatStepperNext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperPrevious", function () {
      return MatStepperPrevious;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepHeader", function () {
      return MatStepHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER_FACTORY", function () {
      return MAT_STEPPER_INTL_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperIntl", function () {
      return MatStepperIntl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER", function () {
      return MAT_STEPPER_INTL_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matStepperAnimations", function () {
      return matStepperAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperIcon", function () {
      return MatStepperIcon;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
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


    var MatStepLabel = /*#__PURE__*/function (_angular_cdk_stepper_) {
      _inherits(MatStepLabel, _angular_cdk_stepper_);

      var _super = _createSuper(MatStepLabel);

      function MatStepLabel() {
        _classCallCheck(this, MatStepLabel);

        return _super.apply(this, arguments);
      }

      return MatStepLabel;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepLabel"]);

    MatStepLabel.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[matStepLabel]'
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Stepper data that is required for internationalization.
     */

    var MatStepperIntl = function MatStepperIntl() {
      _classCallCheck(this, MatStepperIntl);

      /**
       * Stream that emits whenever the labels here are changed. Use this to notify
       * components if the labels have changed after initialization.
       */
      this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      /**
       * Label that is rendered below optional steps.
       */

      this.optionalLabel = 'Optional';
    };

    MatStepperIntl.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    MatStepperIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MatStepperIntl_Factory() {
        return new MatStepperIntl();
      },
      token: MatStepperIntl,
      providedIn: "root"
    });
    /**
     * \@docs-private
     * @param {?} parentIntl
     * @return {?}
     */

    function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
      return parentIntl || new MatStepperIntl();
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_STEPPER_INTL_PROVIDER = {
      provide: MatStepperIntl,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatStepperIntl]],
      useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatStepHeader = /*#__PURE__*/function (_angular_cdk_stepper_2) {
      _inherits(MatStepHeader, _angular_cdk_stepper_2);

      var _super2 = _createSuper(MatStepHeader);

      /**
       * @param {?} _intl
       * @param {?} _focusMonitor
       * @param {?} _elementRef
       * @param {?} changeDetectorRef
       */
      function MatStepHeader(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
        var _this2;

        _classCallCheck(this, MatStepHeader);

        _this2 = _super2.call(this, _elementRef);
        _this2._intl = _intl;
        _this2._focusMonitor = _focusMonitor;

        _focusMonitor.monitor(_elementRef, true);

        _this2._intlSubscription = _intl.changes.subscribe(
        /**
        * @return {?}
        */
        function () {
          return changeDetectorRef.markForCheck();
        });
        return _this2;
      }
      /**
       * @return {?}
       */


      _createClass(MatStepHeader, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._intlSubscription.unsubscribe();

          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * Focuses the step header.
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this._focusMonitor.focusVia(this._elementRef, 'program');
        }
        /**
         * Returns string label of given step if it is a text label.
         * @return {?}
         */

      }, {
        key: "_stringLabel",
        value: function _stringLabel() {
          return this.label instanceof MatStepLabel ? null : this.label;
        }
        /**
         * Returns MatStepLabel if the label of given step is a template label.
         * @return {?}
         */

      }, {
        key: "_templateLabel",
        value: function _templateLabel() {
          return this.label instanceof MatStepLabel ? this.label : null;
        }
        /**
         * Returns the host HTML element.
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._elementRef.nativeElement;
        }
        /**
         * Template context variables that are exposed to the `matStepperIcon` instances.
         * @return {?}
         */

      }, {
        key: "_getIconContext",
        value: function _getIconContext() {
          return {
            index: this.index,
            active: this.active,
            optional: this.optional
          };
        }
        /**
         * @param {?} state
         * @return {?}
         */

      }, {
        key: "_getDefaultTextForState",
        value: function _getDefaultTextForState(state$$1) {
          if (state$$1 == 'number') {
            return "".concat(this.index + 1);
          }

          if (state$$1 == 'edit') {
            return 'create';
          }

          if (state$$1 == 'error') {
            return 'warning';
          }

          return state$$1;
        }
      }]);

      return MatStepHeader;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepHeader"]);

    MatStepHeader.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-step-header',
        template: "<div class=\"mat-step-header-ripple\" matRipple [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"disableRipple\"></div><div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\"><div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\"><ng-container *ngSwitchCase=\"true\" [ngTemplateOutlet]=\"iconOverrides[state]\" [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container><ng-container *ngSwitchDefault [ngSwitch]=\"state\"><span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span><mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon></ng-container></div></div><div class=\"mat-step-label\" [class.mat-step-label-active]=\"active\" [class.mat-step-label-selected]=\"selected\" [class.mat-step-label-error]=\"state == 'error'\"><ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"_templateLabel()!.template\"></ng-container><div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div><div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div><div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div></div>",
        styles: [".mat-step-header{overflow:hidden;outline:0;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon .mat-icon,.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
        host: {
          'class': 'mat-step-header',
          'role': 'tab'
        },
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatStepHeader.ctorParameters = function () {
      return [{
        type: MatStepperIntl
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    MatStepHeader.propDecorators = {
      state: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      errorMessage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      iconOverrides: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      index: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      optional: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disableRipple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the Material steppers.
     * \@docs-private
     * @type {?}
     */

    var matStepperAnimations = {
      /**
       * Animation that transitions the step along the X axis in a horizontal stepper.
       */
      horizontalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('stepTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translate3d(-100%, 0, 0)',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'none',
        visibility: 'visible'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translate3d(100%, 0, 0)',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)'))]),

      /**
       * Animation that transitions the step along the Y axis in a vertical stepper.
       */
      verticalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('stepTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '0px',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '0px',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '*',
        visibility: 'visible'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Template to be used to override the icons inside the step header.
     */

    var MatStepperIcon =
    /**
     * @param {?} templateRef
     */
    function MatStepperIcon(templateRef) {
      _classCallCheck(this, MatStepperIcon);

      this.templateRef = templateRef;
    };

    MatStepperIcon.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[matStepperIcon]'
      }]
    }];
    /** @nocollapse */

    MatStepperIcon.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    MatStepperIcon.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matStepperIcon']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatStep = /*#__PURE__*/function (_angular_cdk_stepper_3) {
      _inherits(MatStep, _angular_cdk_stepper_3);

      var _super3 = _createSuper(MatStep);

      /**
       * \@breaking-change 8.0.0 remove the `?` after `stepperOptions`
       * @param {?} stepper
       * @param {?} _errorStateMatcher
       * @param {?=} stepperOptions
       */
      function MatStep(stepper, _errorStateMatcher, stepperOptions) {
        var _this3;

        _classCallCheck(this, MatStep);

        _this3 = _super3.call(this, stepper, stepperOptions);
        _this3._errorStateMatcher = _errorStateMatcher;
        return _this3;
      }
      /**
       * Custom error state matcher that additionally checks for validity of interacted form.
       * @param {?} control
       * @param {?} form
       * @return {?}
       */


      _createClass(MatStep, [{
        key: "isErrorState",
        value: function isErrorState(control, form) {
          /** @type {?} */
          var originalErrorState = this._errorStateMatcher.isErrorState(control, form); // Custom error state checks for the validity of form that is not submitted or touched
          // since user can trigger a form change by calling for another step without directly
          // interacting with the current form.

          /** @type {?} */


          var customErrorState = !!(control && control.invalid && this.interacted);
          return originalErrorState || customErrorState;
        }
      }]);

      return MatStep;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"]);

    MatStep.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-step',
        template: "<ng-template><ng-content></ng-content></ng-template>",
        providers: [{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"],
          useExisting: MatStep
        }],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        exportAs: 'matStep',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatStep.ctorParameters = function () {
      return [{
        type: MatStepper,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatStepper;
          })]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"]]
        }]
      }];
    };

    MatStep.propDecorators = {
      stepLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [MatStepLabel, {
          "static": false
        }]
      }]
    };

    var MatStepper = /*#__PURE__*/function (_angular_cdk_stepper_4) {
      _inherits(MatStepper, _angular_cdk_stepper_4);

      var _super4 = _createSuper(MatStepper);

      function MatStepper() {
        var _this4;

        _classCallCheck(this, MatStepper);

        _this4 = _super4.apply(this, arguments);
        /**
         * Event emitted when the current step is done transitioning in.
         */

        _this4.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Consumer-specified template-refs to be used to override the header icons.
         */

        _this4._iconOverrides = {};
        /**
         * Stream of animation `done` events when the body expands/collapses.
         */

        _this4._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        return _this4;
      }
      /**
       * @return {?}
       */


      _createClass(MatStepper, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this5 = this;

          this._icons.forEach(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref) {
            var name = _ref.name,
                templateRef = _ref.templateRef;
            return _this5._iconOverrides[name] = templateRef;
          }); // Mark the component for change detection whenever the content children query changes


          this._steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this5._stateChanged();
          });

          this._animationDone.pipe( // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
          // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
          // See https://github.com/angular/angular/issues/24084
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(
          /**
          * @param {?} x
          * @param {?} y
          * @return {?}
          */
          function (x, y) {
            return x.fromState === y.fromState && x.toState === y.toState;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            if (
            /** @type {?} */
            event.toState === 'current') {
              _this5.animationDone.emit();
            }
          });
        }
      }]);

      return MatStepper;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"]);

    MatStepper.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[matStepper]',
        providers: [{
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
          useExisting: MatStepper
        }]
      }]
    }];
    MatStepper.propDecorators = {
      _stepHeader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
        args: [MatStepHeader]
      }],
      _steps: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatStep]
      }],
      _icons: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatStepperIcon]
      }],
      animationDone: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      disableRipple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    var MatHorizontalStepper = /*#__PURE__*/function (_MatStepper) {
      _inherits(MatHorizontalStepper, _MatStepper);

      var _super5 = _createSuper(MatHorizontalStepper);

      function MatHorizontalStepper() {
        var _this6;

        _classCallCheck(this, MatHorizontalStepper);

        _this6 = _super5.apply(this, arguments);
        /**
         * Whether the label should display in bottom or end position.
         */

        _this6.labelPosition = 'end';
        return _this6;
      }

      return MatHorizontalStepper;
    }(MatStepper);

    MatHorizontalStepper.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-horizontal-stepper',
        exportAs: 'matHorizontalStepper',
        template: "<div class=\"mat-horizontal-stepper-header-container\"><ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-horizontal-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-posinset]=\"i + 1\" [attr.aria-setsize]=\"steps.length\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex == i\" [attr.aria-label]=\"step.ariaLabel || null\" [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\" [index]=\"i\" [state]=\"_getIndicatorType(i, step.state)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\" [errorMessage]=\"step.errorMessage\" [iconOverrides]=\"_iconOverrides\" [disableRipple]=\"disableRipple\"></mat-step-header><div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div></ng-container></div><div class=\"mat-horizontal-content-container\"><div *ngFor=\"let step of steps; let i = index\" [attr.tabindex]=\"selectedIndex === i ? 0 : null\" class=\"mat-horizontal-stepper-content\" role=\"tabpanel\" [@stepTransition]=\"_getAnimationDirection(i)\" (@stepTransition.done)=\"_animationDone.next($event)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div>",
        styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{border-top-width:1px;border-top-style:solid;content:'';display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
        inputs: ['selectedIndex'],
        host: {
          'class': 'mat-stepper-horizontal',
          '[class.mat-stepper-label-position-end]': 'labelPosition == "end"',
          '[class.mat-stepper-label-position-bottom]': 'labelPosition == "bottom"',
          'aria-orientation': 'horizontal',
          'role': 'tablist'
        },
        animations: [matStepperAnimations.horizontalStepTransition],
        providers: [{
          provide: MatStepper,
          useExisting: MatHorizontalStepper
        }, {
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
          useExisting: MatHorizontalStepper
        }],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    MatHorizontalStepper.propDecorators = {
      labelPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    var MatVerticalStepper = /*#__PURE__*/function (_MatStepper2) {
      _inherits(MatVerticalStepper, _MatStepper2);

      var _super6 = _createSuper(MatVerticalStepper);

      /**
       * @param {?} dir
       * @param {?} changeDetectorRef
       * @param {?=} elementRef
       * @param {?=} _document
       */
      function MatVerticalStepper(dir, changeDetectorRef, // @breaking-change 8.0.0 `elementRef` and `_document` parameters to become required.
      elementRef, _document) {
        var _this7;

        _classCallCheck(this, MatVerticalStepper);

        _this7 = _super6.call(this, dir, changeDetectorRef, elementRef, _document);
        _this7._orientation = 'vertical';
        return _this7;
      }

      return MatVerticalStepper;
    }(MatStepper);

    MatVerticalStepper.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-vertical-stepper',
        exportAs: 'matVerticalStepper',
        template: "<div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-vertical-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_getFocusIndex() == i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-posinset]=\"i + 1\" [attr.aria-setsize]=\"steps.length\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex === i\" [attr.aria-label]=\"step.ariaLabel || null\" [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\" [index]=\"i\" [state]=\"_getIndicatorType(i, step.state)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\" [errorMessage]=\"step.errorMessage\" [iconOverrides]=\"_iconOverrides\" [disableRipple]=\"disableRipple\"></mat-step-header><div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\"><div class=\"mat-vertical-stepper-content\" role=\"tabpanel\" [attr.tabindex]=\"selectedIndex === i ? 0 : null\" [@stepTransition]=\"_getAnimationDirection(i)\" (@stepTransition.done)=\"_animationDone.next($event)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><div class=\"mat-vertical-content\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div></div></div>",
        styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{border-top-width:1px;border-top-style:solid;content:'';display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
        inputs: ['selectedIndex'],
        host: {
          'class': 'mat-stepper-vertical',
          'aria-orientation': 'vertical',
          'role': 'tablist'
        },
        animations: [matStepperAnimations.verticalStepTransition],
        providers: [{
          provide: MatStepper,
          useExisting: MatVerticalStepper
        }, {
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
          useExisting: MatVerticalStepper
        }],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatVerticalStepper.ctorParameters = function () {
      return [{
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Button that moves to the next step in a stepper workflow.
     */


    var MatStepperNext = /*#__PURE__*/function (_angular_cdk_stepper_5) {
      _inherits(MatStepperNext, _angular_cdk_stepper_5);

      var _super7 = _createSuper(MatStepperNext);

      function MatStepperNext() {
        _classCallCheck(this, MatStepperNext);

        return _super7.apply(this, arguments);
      }

      return MatStepperNext;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperNext"]);

    MatStepperNext.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'button[matStepperNext]',
        host: {
          '[type]': 'type'
        },
        inputs: ['type']
      }]
    }];
    /**
     * Button that moves to the previous step in a stepper workflow.
     */

    var MatStepperPrevious = /*#__PURE__*/function (_angular_cdk_stepper_6) {
      _inherits(MatStepperPrevious, _angular_cdk_stepper_6);

      var _super8 = _createSuper(MatStepperPrevious);

      function MatStepperPrevious() {
        _classCallCheck(this, MatStepperPrevious);

        return _super8.apply(this, arguments);
      }

      return MatStepperPrevious;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperPrevious"]);

    MatStepperPrevious.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'button[matStepperPrevious]',
        host: {
          '[type]': 'type'
        },
        inputs: ['type']
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatStepperModule = function MatStepperModule() {
      _classCallCheck(this, MatStepperModule);
    };

    MatStepperModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"]],
        exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon],
        declarations: [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon],
        providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"]]
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
    //# sourceMappingURL=stepper.js.map

    /***/
  },

  /***/
  "./node_modules/@iconify/icons-ic/twotone-home.js":
  /*!********************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-home.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneHomeJs(module, exports) {
    var data = {
      "body": "<path d=\"M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5l5 4.5V18z\" fill=\"currentColor\"/><path opacity=\".3\" d=\"M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/secondary-toolbar/secondary-toolbar.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/secondary-toolbar/secondary-toolbar.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsSecondaryToolbarSecondaryToolbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"secondary-toolbar-placeholder\">&nbsp;</div>\n\n<div [ngClass]=\"{ 'fixed': fixed$ | async, 'w-full': !(fixed$ | async) }\"\n     class=\"secondary-toolbar shadow-b py-1 z-40 border-t\"\n     fxLayout=\"row\">\n  <div class=\"px-gutter\" fxFlex=\"auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\" vexContainer>\n    <h1 *ngIf=\"current\"\n        class=\"subheading-2 font-medium m-0 ltr:pr-3 rtl:pl-3 ltr:border-r rtl:border-l ltr:mr-3 rtl:ml-3\"\n        fxFlex.xs=\"auto\">{{ current }}</h1>\n\n    <ng-content></ng-content>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts ***!
    \****************************************************************************/

  /*! exports provided: BreadcrumbComponent */

  /***/
  function srcVexComponentsBreadcrumbsBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BreadcrumbComponent = /*#__PURE__*/function () {
      function BreadcrumbComponent() {
        _classCallCheck(this, BreadcrumbComponent);
      }

      _createClass(BreadcrumbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-breadcrumb',
      template: "\n      <ng-content></ng-content>\n  ",
      host: {
        "class": 'vex-breadcrumb body-2 text-hint leading-none hover:text-primary-500 no-underline trans-ease-out ltr:mr-2 rtl:ml-2'
      }
    })], BreadcrumbComponent);
    /***/
  },

  /***/
  "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts":
  /*!******************************************************************!*\
    !*** ./src/@vex/components/breadcrumbs/breadcrumbs.component.ts ***!
    \******************************************************************/

  /*! exports provided: BreadcrumbsComponent */

  /***/
  function srcVexComponentsBreadcrumbsBreadcrumbsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function () {
      return BreadcrumbsComponent;
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


    var _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-home */
    "./node_modules/@iconify/icons-ic/twotone-home.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _utils_track_by__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../utils/track-by */
    "./src/@vex/utils/track-by.ts");

    var BreadcrumbsComponent = /*#__PURE__*/function () {
      function BreadcrumbsComponent() {
        _classCallCheck(this, BreadcrumbsComponent);

        this.crumbs = [];
        this.trackByValue = _utils_track_by__WEBPACK_IMPORTED_MODULE_3__["trackByValue"];
        this.icHome = _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2___default.a;
      }

      _createClass(BreadcrumbsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BreadcrumbsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BreadcrumbsComponent.prototype, "crumbs", void 0);
    BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-breadcrumbs',
      template: "\n      <div class=\"flex items-center\">\n          <vex-breadcrumb>\n              <a [routerLink]=\"['/']\">\n                  <ic-icon [icon]=\"icHome\" inline=\"true\" size=\"20px\"></ic-icon>\n              </a>\n          </vex-breadcrumb>\n          <ng-container *ngFor=\"let crumb of crumbs; trackBy: trackByValue\">\n              <div class=\"w-1 h-1 bg-gray-300 rounded-full ltr:mr-2 rtl:ml-2\"></div>\n              <vex-breadcrumb>\n                  <a [routerLink]=\"[]\">{{ crumb }}</a>\n              </vex-breadcrumb>\n          </ng-container>\n      </div>\n  "
    })], BreadcrumbsComponent);
    /***/
  },

  /***/
  "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts":
  /*!***************************************************************!*\
    !*** ./src/@vex/components/breadcrumbs/breadcrumbs.module.ts ***!
    \***************************************************************/

  /*! exports provided: BreadcrumbsModule */

  /***/
  function srcVexComponentsBreadcrumbsBreadcrumbsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbsModule", function () {
      return BreadcrumbsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./breadcrumbs.component */
    "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./breadcrumb/breadcrumb.component */
    "./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts");

    var BreadcrumbsModule = function BreadcrumbsModule() {
      _classCallCheck(this, BreadcrumbsModule);
    };

    BreadcrumbsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"]],
      declarations: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"]],
      exports: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]]
    })], BreadcrumbsModule);
    /***/
  },

  /***/
  "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsSecondaryToolbarSecondaryToolbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".secondary-toolbar {\n  background: var(--secondary-toolbar-background);\n  height: var(--secondary-toolbar-height);\n  margin-top: calc(var(--secondary-toolbar-height) * -1);\n}\n\n.secondary-toolbar.fixed {\n  width: var(--toolbar-width);\n}\n\n.secondary-toolbar-placeholder {\n  height: var(--secondary-toolbar-height);\n}\n\n::ng-deep .is-mobile .fixed {\n  width: 100%;\n}\n\n::ng-deep body .fixed {\n  width: calc(100% - var(--sidenav-width));\n}\n\n::ng-deep vex-breadcrumbs {\n  display: none;\n}\n\n@media (min-width: 600px) {\n  ::ng-deep vex-breadcrumbs {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNvL0Rlc2t0b3AvQ290aXphY2lvbi9zcmMvQHZleC9jb21wb25lbnRzL3NlY29uZGFyeS10b29sYmFyL3NlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL0B2ZXgvY29tcG9uZW50cy9zZWNvbmRhcnktdG9vbGJhci9zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFBO0VBQ0EsdUNBQUE7RUFDQSxzREFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLHVDQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx3Q0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxjQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3NlY29uZGFyeS10b29sYmFyL3NlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY29uZGFyeS10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIGhlaWdodDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItaGVpZ2h0KTtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1zZWNvbmRhcnktdG9vbGJhci1oZWlnaHQpICogLTEpO1xufVxuXG4uc2Vjb25kYXJ5LXRvb2xiYXIuZml4ZWQge1xuICB3aWR0aDogdmFyKC0tdG9vbGJhci13aWR0aCk7XG59XG5cbi5zZWNvbmRhcnktdG9vbGJhci1wbGFjZWhvbGRlciB7XG4gIGhlaWdodDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItaGVpZ2h0KTtcbn1cblxuOjpuZy1kZWVwIC5pcy1tb2JpbGUgLmZpeGVkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCBib2R5IC5maXhlZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1zaWRlbmF2LXdpZHRoKSk7XG59XG5cbjo6bmctZGVlcCB2ZXgtYnJlYWRjcnVtYnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgOjpuZy1kZWVwIHZleC1icmVhZGNydW1icyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iLCIuc2Vjb25kYXJ5LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktdG9vbGJhci1iYWNrZ3JvdW5kKTtcbiAgaGVpZ2h0OiB2YXIoLS1zZWNvbmRhcnktdG9vbGJhci1oZWlnaHQpO1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXNlY29uZGFyeS10b29sYmFyLWhlaWdodCkgKiAtMSk7XG59XG5cbi5zZWNvbmRhcnktdG9vbGJhci5maXhlZCB7XG4gIHdpZHRoOiB2YXIoLS10b29sYmFyLXdpZHRoKTtcbn1cblxuLnNlY29uZGFyeS10b29sYmFyLXBsYWNlaG9sZGVyIHtcbiAgaGVpZ2h0OiB2YXIoLS1zZWNvbmRhcnktdG9vbGJhci1oZWlnaHQpO1xufVxuXG46Om5nLWRlZXAgLmlzLW1vYmlsZSAuZml4ZWQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIGJvZHkgLmZpeGVkIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLXNpZGVuYXYtd2lkdGgpKTtcbn1cblxuOjpuZy1kZWVwIHZleC1icmVhZGNydW1icyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICA6Om5nLWRlZXAgdmV4LWJyZWFkY3J1bWJzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts ***!
    \******************************************************************************/

  /*! exports provided: SecondaryToolbarComponent */

  /***/
  function srcVexComponentsSecondaryToolbarSecondaryToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondaryToolbarComponent", function () {
      return SecondaryToolbarComponent;
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


    var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/config.service */
    "./src/@vex/services/config.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var SecondaryToolbarComponent = /*#__PURE__*/function () {
      function SecondaryToolbarComponent(configService) {
        _classCallCheck(this, SecondaryToolbarComponent);

        this.configService = configService;
        this.fixed$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (config) {
          return config.toolbar.fixed;
        }));
      }

      _createClass(SecondaryToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SecondaryToolbarComponent;
    }();

    SecondaryToolbarComponent.ctorParameters = function () {
      return [{
        type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SecondaryToolbarComponent.prototype, "current", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SecondaryToolbarComponent.prototype, "crumbs", void 0);
    SecondaryToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-secondary-toolbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./secondary-toolbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/secondary-toolbar/secondary-toolbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./secondary-toolbar.component.scss */
      "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.scss"))["default"]]
    })], SecondaryToolbarComponent);
    /***/
  },

  /***/
  "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts ***!
    \***************************************************************************/

  /*! exports provided: SecondaryToolbarModule */

  /***/
  function srcVexComponentsSecondaryToolbarSecondaryToolbarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondaryToolbarModule", function () {
      return SecondaryToolbarModule;
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


    var _secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./secondary-toolbar.component */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var SecondaryToolbarModule = function SecondaryToolbarModule() {
      _classCallCheck(this, SecondaryToolbarModule);
    };

    SecondaryToolbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["SecondaryToolbarComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__["ContainerModule"]],
      exports: [_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["SecondaryToolbarComponent"]]
    })], SecondaryToolbarModule);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-dashboards-dashboard-analytics-dashboard-analytics-module~pages-ui-forms-form-wizard-f~0582c426-es5.js.map