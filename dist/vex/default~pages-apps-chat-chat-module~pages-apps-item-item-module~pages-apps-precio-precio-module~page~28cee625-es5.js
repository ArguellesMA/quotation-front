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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-apps-chat-chat-module~pages-apps-item-item-module~pages-apps-precio-precio-module~page~28cee625"], {
  /***/
  "./node_modules/@angular/material/esm2015/badge.js":
  /*!*********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/badge.js ***!
    \*********************************************************/

  /*! exports provided: MatBadgeModule, MatBadge */

  /***/
  function node_modulesAngularMaterialEsm2015BadgeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBadgeModule", function () {
      return MatBadgeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBadge", function () {
      return MatBadge;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

    /** @type {?} */


    var nextId = 0; // Boilerplate for applying mixins to MatBadge.

    /**
     * \@docs-private
     */

    var MatBadgeBase = function MatBadgeBase() {
      _classCallCheck(this, MatBadgeBase);
    };
    /** @type {?} */


    var _MatBadgeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(MatBadgeBase);
    /**
     * Directive to display a text badge.
     */


    var MatBadge = /*#__PURE__*/function (_MatBadgeMixinBase2) {
      _inherits(MatBadge, _MatBadgeMixinBase2);

      var _super = _createSuper(MatBadge);

      /**
       * @param {?} _ngZone
       * @param {?} _elementRef
       * @param {?} _ariaDescriber
       * @param {?} _renderer
       * @param {?=} _animationMode
       */
      function MatBadge(_ngZone, _elementRef, _ariaDescriber, _renderer, _animationMode) {
        var _this;

        _classCallCheck(this, MatBadge);

        _this = _super.call(this);
        _this._ngZone = _ngZone;
        _this._elementRef = _elementRef;
        _this._ariaDescriber = _ariaDescriber;
        _this._renderer = _renderer;
        _this._animationMode = _animationMode;
        /**
         * Whether the badge has any content.
         */

        _this._hasContent = false;
        _this._color = 'primary';
        _this._overlap = true;
        /**
         * Position the badge should reside.
         * Accepts any combination of 'above'|'below' and 'before'|'after'
         */

        _this.position = 'above after';
        /**
         * Size of the badge. Can be 'small', 'medium', or 'large'.
         */

        _this.size = 'medium';
        /**
         * Unique id for the badge
         */

        _this._id = nextId++;

        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()) {
          /** @type {?} */
          var nativeElement = _elementRef.nativeElement;

          if (nativeElement.nodeType !== nativeElement.ELEMENT_NODE) {
            throw Error('matBadge must be attached to an element node.');
          }
        }

        return _this;
      }
      /**
       * The color of the badge. Can be `primary`, `accent`, or `warn`.
       * @return {?}
       */


      _createClass(MatBadge, [{
        key: "isAbove",

        /**
         * Whether the badge is above the host or not
         * @return {?}
         */
        value: function isAbove() {
          return this.position.indexOf('below') === -1;
        }
        /**
         * Whether the badge is after the host or not
         * @return {?}
         */

      }, {
        key: "isAfter",
        value: function isAfter() {
          return this.position.indexOf('before') === -1;
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var contentChange = changes['content'];

          if (contentChange) {
            /** @type {?} */
            var value = contentChange.currentValue;
            this._hasContent = value != null && "".concat(value).trim().length > 0;

            this._updateTextContent();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var badgeElement = this._badgeElement;

          if (badgeElement) {
            if (this.description) {
              this._ariaDescriber.removeDescription(badgeElement, this.description);
            } // When creating a badge through the Renderer, Angular will keep it in an index.
            // We have to destroy it ourselves, otherwise it'll be retained in memory.


            if (this._renderer.destroyNode) {
              this._renderer.destroyNode(badgeElement);
            }
          }
        }
        /**
         * Gets the element into which the badge's content is being rendered.
         * Undefined if the element hasn't been created (e.g. if the badge doesn't have content).
         * @return {?}
         */

      }, {
        key: "getBadgeElement",
        value: function getBadgeElement() {
          return this._badgeElement;
        }
        /**
         * Injects a span element into the DOM with the content.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTextContent",
        value: function _updateTextContent() {
          if (!this._badgeElement) {
            this._badgeElement = this._createBadgeElement();
          } else {
            this._badgeElement.textContent = this.content;
          }

          return this._badgeElement;
        }
        /**
         * Creates the badge element
         * @private
         * @return {?}
         */

      }, {
        key: "_createBadgeElement",
        value: function _createBadgeElement() {
          /** @type {?} */
          var badgeElement = this._renderer.createElement('span');
          /** @type {?} */


          var activeClass = 'mat-badge-active';
          /** @type {?} */

          var contentClass = 'mat-badge-content'; // Clear any existing badges which may have persisted from a server-side render.

          this._clearExistingBadges(contentClass);

          badgeElement.setAttribute('id', "mat-badge-content-".concat(this._id));
          badgeElement.classList.add(contentClass);
          badgeElement.textContent = this.content;

          if (this._animationMode === 'NoopAnimations') {
            badgeElement.classList.add('_mat-animation-noopable');
          }

          if (this.description) {
            badgeElement.setAttribute('aria-label', this.description);
          }

          this._elementRef.nativeElement.appendChild(badgeElement); // animate in after insertion


          if (typeof requestAnimationFrame === 'function' && this._animationMode !== 'NoopAnimations') {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                badgeElement.classList.add(activeClass);
              });
            });
          } else {
            badgeElement.classList.add(activeClass);
          }

          return badgeElement;
        }
        /**
         * Sets the aria-label property on the element
         * @private
         * @param {?} newDescription
         * @param {?} oldDescription
         * @return {?}
         */

      }, {
        key: "_updateHostAriaDescription",
        value: function _updateHostAriaDescription(newDescription, oldDescription) {
          // ensure content available before setting label

          /** @type {?} */
          var content = this._updateTextContent();

          if (oldDescription) {
            this._ariaDescriber.removeDescription(content, oldDescription);
          }

          if (newDescription) {
            this._ariaDescriber.describe(content, newDescription);
          }
        }
        /**
         * Adds css theme class given the color to the component host
         * @private
         * @param {?} colorPalette
         * @return {?}
         */

      }, {
        key: "_setColor",
        value: function _setColor(colorPalette) {
          if (colorPalette !== this._color) {
            if (this._color) {
              this._elementRef.nativeElement.classList.remove("mat-badge-".concat(this._color));
            }

            if (colorPalette) {
              this._elementRef.nativeElement.classList.add("mat-badge-".concat(colorPalette));
            }
          }
        }
        /**
         * Clears any existing badges that might be left over from server-side rendering.
         * @private
         * @param {?} cssClass
         * @return {?}
         */

      }, {
        key: "_clearExistingBadges",
        value: function _clearExistingBadges(cssClass) {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          /** @type {?} */

          var childCount = element.children.length; // Use a reverse while, because we'll be removing elements from the list as we're iterating.

          while (childCount--) {
            /** @type {?} */
            var currentChild = element.children[childCount];

            if (currentChild.classList.contains(cssClass)) {
              element.removeChild(currentChild);
            }
          }
        }
      }, {
        key: "color",
        get: function get() {
          return this._color;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._setColor(value);

          this._color = value;
        }
        /**
         * Whether the badge should overlap its contents or not
         * @return {?}
         */

      }, {
        key: "overlap",
        get: function get() {
          return this._overlap;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._overlap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(val);
        }
        /**
         * Message used to describe the decorated element via aria-describedby
         * @return {?}
         */

      }, {
        key: "description",
        get: function get() {
          return this._description;
        }
        /**
         * @param {?} newDescription
         * @return {?}
         */
        ,
        set: function set(newDescription) {
          if (newDescription !== this._description) {
            /** @type {?} */
            var badgeElement = this._badgeElement;

            this._updateHostAriaDescription(newDescription, this._description);

            this._description = newDescription;

            if (badgeElement) {
              newDescription ? badgeElement.setAttribute('aria-label', newDescription) : badgeElement.removeAttribute('aria-label');
            }
          }
        }
        /**
         * Whether the badge is hidden.
         * @return {?}
         */

      }, {
        key: "hidden",
        get: function get() {
          return this._hidden;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._hidden = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(val);
        }
      }]);

      return MatBadge;
    }(_MatBadgeMixinBase);

    MatBadge.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: '[matBadge]',
        inputs: ['disabled: matBadgeDisabled'],
        host: {
          'class': 'mat-badge',
          '[class.mat-badge-overlap]': 'overlap',
          '[class.mat-badge-above]': 'isAbove()',
          '[class.mat-badge-below]': '!isAbove()',
          '[class.mat-badge-before]': '!isAfter()',
          '[class.mat-badge-after]': 'isAfter()',
          '[class.mat-badge-small]': 'size === "small"',
          '[class.mat-badge-medium]': 'size === "medium"',
          '[class.mat-badge-large]': 'size === "large"',
          '[class.mat-badge-hidden]': 'hidden || !_hasContent',
          '[class.mat-badge-disabled]': 'disabled'
        }
      }]
    }];
    /** @nocollapse */

    MatBadge.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["AriaDescriber"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatBadge.propDecorators = {
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matBadgeColor']
      }],
      overlap: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matBadgeOverlap']
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matBadgePosition']
      }],
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matBadge']
      }],
      description: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matBadgeDescription']
      }],
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matBadgeSize']
      }],
      hidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matBadgeHidden']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatBadgeModule = function MatBadgeModule() {
      _classCallCheck(this, MatBadgeModule);
    };

    MatBadgeModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
        exports: [MatBadge],
        declarations: [MatBadge]
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
    //# sourceMappingURL=badge.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~pages-apps-chat-chat-module~pages-apps-item-item-module~pages-apps-precio-precio-module~page~28cee625-es5.js.map