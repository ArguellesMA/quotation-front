function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-apps-calendar-calendar-module"], {
  /***/
  "./node_modules/@mattlewis92/dom-autoscroller/dist/bundle.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@mattlewis92/dom-autoscroller/dist/bundle.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMattlewis92DomAutoscrollerDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var typeFunc = __webpack_require__(
    /*! type-func */
    "./node_modules/type-func/dist/bundle.js");

    var domSet = __webpack_require__(
    /*! dom-set */
    "./node_modules/dom-set/dist/bundle.js");

    var domPlane = __webpack_require__(
    /*! dom-plane */
    "./node_modules/dom-plane/dist/bundle.js");

    var mousemoveDispatcher = _interopDefault(__webpack_require__(
    /*! dom-mousemove-dispatcher */
    "./node_modules/dom-mousemove-dispatcher/dist/bundle.js"));

    var prefix = ['webkit', 'moz', 'ms', 'o'];

    var requestFrame = function () {
      if (typeof window === "undefined") {
        return function () {};
      }

      for (var i = 0, limit = prefix.length; i < limit && !window.requestAnimationFrame; ++i) {
        window.requestAnimationFrame = window[prefix[i] + 'RequestAnimationFrame'];
      }

      if (!window.requestAnimationFrame) {
        var lastTime = 0;

        window.requestAnimationFrame = function (callback) {
          var now = new Date().getTime();
          var ttc = Math.max(0, 16 - now - lastTime);
          var timer = window.setTimeout(function () {
            return callback(now + ttc);
          }, ttc);
          lastTime = now + ttc;
          return timer;
        };
      }

      return window.requestAnimationFrame.bind(window);
    }();

    var cancelFrame = function () {
      if (typeof window === "undefined") {
        return function () {};
      }

      for (var i = 0, limit = prefix.length; i < limit && !window.cancelAnimationFrame; ++i) {
        window.cancelAnimationFrame = window[prefix[i] + 'CancelAnimationFrame'] || window[prefix[i] + 'CancelRequestAnimationFrame'];
      }

      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (timer) {
          window.clearTimeout(timer);
        };
      }

      return window.cancelAnimationFrame.bind(window);
    }();

    function AutoScroller(elements, options) {
      if (options === void 0) options = {};
      var self = this;
      var maxSpeed = 4,
          scrolling = false;
      this.margin = options.margin || -1; //this.scrolling = false;

      this.scrollWhenOutside = options.scrollWhenOutside || false;
      var point = {},
          pointCB = domPlane.createPointCB(point),
          dispatcher = mousemoveDispatcher(),
          down = false;
      window.addEventListener('mousemove', pointCB, false);
      window.addEventListener('touchmove', pointCB, false);

      if (!isNaN(options.maxSpeed)) {
        maxSpeed = options.maxSpeed;
      }

      this.autoScroll = typeFunc["boolean"](options.autoScroll);
      this.syncMove = typeFunc["boolean"](options.syncMove, false);

      this.destroy = function (forceCleanAnimation) {
        window.removeEventListener('mousemove', pointCB, false);
        window.removeEventListener('touchmove', pointCB, false);
        window.removeEventListener('mousedown', onDown, false);
        window.removeEventListener('touchstart', onDown, false);
        window.removeEventListener('mouseup', onUp, false);
        window.removeEventListener('touchend', onUp, false);
        window.removeEventListener('pointerup', onUp, false);
        window.removeEventListener('mouseleave', onMouseOut, false);
        window.removeEventListener('mousemove', onMove, false);
        window.removeEventListener('touchmove', onMove, false);
        window.removeEventListener('scroll', setScroll, true);
        elements = [];

        if (forceCleanAnimation) {
          cleanAnimation();
        }
      };

      this.add = function () {
        var element = [],
            len = arguments.length;

        while (len--) {
          element[len] = arguments[len];
        }

        domSet.addElements.apply(void 0, [elements].concat(element));
        return this;
      };

      this.remove = function () {
        var element = [],
            len = arguments.length;

        while (len--) {
          element[len] = arguments[len];
        }

        return domSet.removeElements.apply(void 0, [elements].concat(element));
      };

      var hasWindow = null,
          windowAnimationFrame;

      if (Object.prototype.toString.call(elements) !== '[object Array]') {
        elements = [elements];
      }

      (function (temp) {
        elements = [];
        temp.forEach(function (element) {
          if (element === window) {
            hasWindow = window;
          } else {
            self.add(element);
          }
        });
      })(elements);

      Object.defineProperties(this, {
        down: {
          get: function get() {
            return down;
          }
        },
        maxSpeed: {
          get: function get() {
            return maxSpeed;
          }
        },
        point: {
          get: function get() {
            return point;
          }
        },
        scrolling: {
          get: function get() {
            return scrolling;
          }
        }
      });
      var n = 0,
          current = null,
          animationFrame;
      window.addEventListener('mousedown', onDown, false);
      window.addEventListener('touchstart', onDown, false);
      window.addEventListener('mouseup', onUp, false);
      window.addEventListener('touchend', onUp, false);
      /*
      IE does not trigger mouseup event when scrolling.
      It is a known issue that Microsoft won't fix.
      https://connect.microsoft.com/IE/feedback/details/783058/scrollbar-trigger-mousedown-but-not-mouseup
      IE supports pointer events instead
      */

      window.addEventListener('pointerup', onUp, false);
      window.addEventListener('mousemove', onMove, false);
      window.addEventListener('touchmove', onMove, false);
      window.addEventListener('mouseleave', onMouseOut, false);
      window.addEventListener('scroll', setScroll, true);

      function setScroll(e) {
        for (var i = 0; i < elements.length; i++) {
          if (elements[i] === e.target) {
            scrolling = true;
            break;
          }
        }

        if (scrolling) {
          requestFrame(function () {
            return scrolling = false;
          });
        }
      }

      function onDown() {
        down = true;
      }

      function onUp() {
        down = false;
        cleanAnimation();
      }

      function cleanAnimation() {
        cancelFrame(animationFrame);
        cancelFrame(windowAnimationFrame);
      }

      function onMouseOut() {
        down = false;
      }

      function getTarget(target) {
        if (!target) {
          return null;
        }

        if (current === target) {
          return target;
        }

        if (domSet.hasElement(elements, target)) {
          return target;
        }

        while (target = target.parentNode) {
          if (domSet.hasElement(elements, target)) {
            return target;
          }
        }

        return null;
      }

      function getElementUnderPoint() {
        var underPoint = null;

        for (var i = 0; i < elements.length; i++) {
          if (inside(point, elements[i])) {
            underPoint = elements[i];
          }
        }

        return underPoint;
      }

      function onMove(event) {
        if (!self.autoScroll()) {
          return;
        }

        if (event['dispatched']) {
          return;
        }

        var target = event.target,
            body = document.body;

        if (current && !inside(point, current)) {
          if (!self.scrollWhenOutside) {
            current = null;
          }
        }

        if (target && target.parentNode === body) {
          //The special condition to improve speed.
          target = getElementUnderPoint();
        } else {
          target = getTarget(target);

          if (!target) {
            target = getElementUnderPoint();
          }
        }

        if (target && target !== current) {
          current = target;
        }

        if (hasWindow) {
          cancelFrame(windowAnimationFrame);
          windowAnimationFrame = requestFrame(scrollWindow);
        }

        if (!current) {
          return;
        }

        cancelFrame(animationFrame);
        animationFrame = requestFrame(scrollTick);
      }

      function scrollWindow() {
        autoScroll(hasWindow);
        cancelFrame(windowAnimationFrame);
        windowAnimationFrame = requestFrame(scrollWindow);
      }

      function scrollTick() {
        if (!current) {
          return;
        }

        autoScroll(current);
        cancelFrame(animationFrame);
        animationFrame = requestFrame(scrollTick);
      }

      function autoScroll(el) {
        var rect = domPlane.getClientRect(el),
            scrollx,
            scrolly;

        if (point.x < rect.left + self.margin) {
          scrollx = Math.floor(Math.max(-1, (point.x - rect.left) / self.margin - 1) * self.maxSpeed);
        } else if (point.x > rect.right - self.margin) {
          scrollx = Math.ceil(Math.min(1, (point.x - rect.right) / self.margin + 1) * self.maxSpeed);
        } else {
          scrollx = 0;
        }

        if (point.y < rect.top + self.margin) {
          scrolly = Math.floor(Math.max(-1, (point.y - rect.top) / self.margin - 1) * self.maxSpeed);
        } else if (point.y > rect.bottom - self.margin) {
          scrolly = Math.ceil(Math.min(1, (point.y - rect.bottom) / self.margin + 1) * self.maxSpeed);
        } else {
          scrolly = 0;
        }

        if (self.syncMove()) {
          /*
          Notes about mousemove event dispatch.
          screen(X/Y) should need to be updated.
          Some other properties might need to be set.
          Keep the syncMove option default false until all inconsistencies are taken care of.
          */
          dispatcher.dispatch(el, {
            pageX: point.pageX + scrollx,
            pageY: point.pageY + scrolly,
            clientX: point.x + scrollx,
            clientY: point.y + scrolly
          });
        }

        setTimeout(function () {
          if (scrolly) {
            scrollY(el, scrolly);
          }

          if (scrollx) {
            scrollX(el, scrollx);
          }
        });
      }

      function scrollY(el, amount) {
        if (el === window) {
          window.scrollTo(el.pageXOffset, el.pageYOffset + amount);
        } else {
          el.scrollTop += amount;
        }
      }

      function scrollX(el, amount) {
        if (el === window) {
          window.scrollTo(el.pageXOffset + amount, el.pageYOffset);
        } else {
          el.scrollLeft += amount;
        }
      }
    }

    function AutoScrollerFactory(element, options) {
      return new AutoScroller(element, options);
    }

    function inside(point, el, rect) {
      if (!rect) {
        return domPlane.pointInside(point, el);
      } else {
        return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
      }
    }
    /*
    git remote add origin https://github.com/hollowdoor/dom_autoscroller.git
    git push -u origin master
    */


    module.exports = AutoScrollerFactory; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/angular-calendar/date-adapters/date-fns/index.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/angular-calendar/date-adapters/date-fns/index.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularCalendarDateAdaptersDateFnsIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var date_fns_1 = __webpack_require__(
    /*! calendar-utils/date-adapters/date-fns */
    "./node_modules/calendar-utils/date-adapters/date-fns/index.js");

    var addWeeks = __webpack_require__(
    /*! date-fns/add_weeks/index */
    "./node_modules/date-fns/add_weeks/index.js");

    var addMonths = __webpack_require__(
    /*! date-fns/add_months/index */
    "./node_modules/date-fns/add_months/index.js");

    var subDays = __webpack_require__(
    /*! date-fns/sub_days/index */
    "./node_modules/date-fns/sub_days/index.js");

    var subWeeks = __webpack_require__(
    /*! date-fns/sub_weeks/index */
    "./node_modules/date-fns/sub_weeks/index.js");

    var subMonths = __webpack_require__(
    /*! date-fns/sub_months/index */
    "./node_modules/date-fns/sub_months/index.js");

    var getISOWeek = __webpack_require__(
    /*! date-fns/get_iso_week/index */
    "./node_modules/date-fns/get_iso_week/index.js");

    var setDate = __webpack_require__(
    /*! date-fns/set_date/index */
    "./node_modules/date-fns/set_date/index.js");

    var setMonth = __webpack_require__(
    /*! date-fns/set_month/index */
    "./node_modules/date-fns/set_month/index.js");

    var setYear = __webpack_require__(
    /*! date-fns/set_year/index */
    "./node_modules/date-fns/set_year/index.js");

    var getDate = __webpack_require__(
    /*! date-fns/get_date/index */
    "./node_modules/date-fns/get_date/index.js");

    var getYear = __webpack_require__(
    /*! date-fns/get_year/index */
    "./node_modules/date-fns/get_year/index.js");

    function adapterFactory() {
      return tslib_1.__assign({}, date_fns_1.adapterFactory(), {
        addWeeks: addWeeks,
        addMonths: addMonths,
        subDays: subDays,
        subWeeks: subWeeks,
        subMonths: subMonths,
        getISOWeek: getISOWeek,
        setDate: setDate,
        setMonth: setMonth,
        setYear: setYear,
        getDate: getDate,
        getYear: getYear
      });
    }

    exports.adapterFactory = adapterFactory; //# sourceMappingURL=index.js.map

    /***/
  },

  /***/
  "./node_modules/angular-calendar/fesm2015/angular-calendar.js":
  /*!********************************************************************!*\
    !*** ./node_modules/angular-calendar/fesm2015/angular-calendar.js ***!
    \********************************************************************/

  /*! exports provided: DAYS_OF_WEEK, CalendarAngularDateFormatter, CalendarCommonModule, CalendarDateFormatter, CalendarDayModule, CalendarDayViewComponent, CalendarEventTimesChangedEventType, CalendarEventTitleFormatter, CalendarModule, CalendarMomentDateFormatter, CalendarMonthModule, CalendarMonthViewComponent, CalendarNativeDateFormatter, CalendarUtils, CalendarView, CalendarWeekModule, CalendarWeekViewComponent, DateAdapter, MOMENT, collapseAnimation, getWeekViewPeriod, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr */

  /***/
  function node_modulesAngularCalendarFesm2015AngularCalendarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarAngularDateFormatter", function () {
      return CalendarAngularDateFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarCommonModule", function () {
      return CalendarCommonModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function () {
      return CalendarDateFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarDayModule", function () {
      return CalendarDayModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function () {
      return CalendarDayViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventTimesChangedEventType", function () {
      return CalendarEventTimesChangedEventType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function () {
      return CalendarEventTitleFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarModule", function () {
      return CalendarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function () {
      return CalendarMomentDateFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarMonthModule", function () {
      return CalendarMonthModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function () {
      return CalendarMonthViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function () {
      return CalendarNativeDateFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarUtils", function () {
      return CalendarUtils;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarView", function () {
      return CalendarView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekModule", function () {
      return CalendarWeekModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function () {
      return CalendarWeekViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
      return DateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MOMENT", function () {
      return MOMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "collapseAnimation", function () {
      return collapseAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getWeekViewPeriod", function () {
      return getWeekViewPeriod;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return CalendarOpenDayEventsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return CalendarEventActionsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return CalendarEventTitleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return CalendarTooltipWindowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return CalendarTooltipDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return CalendarPreviousViewDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return CalendarNextViewDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return CalendarTodayDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return CalendarDatePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return CalendarEventTitlePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return ClickDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return CalendarMonthCellComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return CalendarMonthViewHeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return CalendarWeekViewHeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return CalendarWeekViewEventComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp", function () {
      return CalendarWeekViewHourSegmentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵq", function () {
      return CalendarDayViewHourSegmentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵr", function () {
      return CalendarDayViewEventComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! positioning */
    "./node_modules/positioning/dist/entry.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var calendar_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! calendar-utils */
    "./node_modules/calendar-utils/calendar-utils.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function () {
      return calendar_utils__WEBPACK_IMPORTED_MODULE_5__["DAYS_OF_WEEK"];
    });
    /* harmony import */


    var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-draggable-droppable */
    "./node_modules/angular-draggable-droppable/fesm2015/angular-draggable-droppable.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-resizable-element */
    "./node_modules/angular-resizable-element/fesm2015/angular-resizable-element.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarEventActionsComponent = function CalendarEventActionsComponent() {
      _classCallCheck(this, CalendarEventActionsComponent);

      this.trackByActionId =
      /**
      * @param {?} index
      * @param {?} action
      * @return {?}
      */
      function (index, action) {
        return action.id ? action.id : action;
      };
    };

    CalendarEventActionsComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-event-actions',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-trackByActionId=\"trackByActionId\"\n    >\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy: trackByActionId\"\n          (mwlClick)=\"action.onClick({ event: event })\"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\"\n        >\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        trackByActionId: trackByActionId\n      }\"\n    >\n    </ng-template>\n  "
      }]
    }];
    CalendarEventActionsComponent.propDecorators = {
      event: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarEventTitleComponent = function CalendarEventTitleComponent() {
      _classCallCheck(this, CalendarEventTitleComponent);
    };

    CalendarEventTitleComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-event-title',
        template: "\n    <ng-template #defaultTemplate let-event=\"event\" let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle: view:event\"\n      >\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\"\n    >\n    </ng-template>\n  "
      }]
    }];
    CalendarEventTitleComponent.propDecorators = {
      event: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      view: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarTooltipWindowComponent = function CalendarTooltipWindowComponent() {
      _classCallCheck(this, CalendarTooltipWindowComponent);
    };

    CalendarTooltipWindowComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-tooltip-window',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\"\n    >\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\"\n    >\n    </ng-template>\n  "
      }]
    }];
    CalendarTooltipWindowComponent.propDecorators = {
      contents: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      placement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      event: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}

    var CalendarTooltipDirective = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} injector
       * @param {?} renderer
       * @param {?} componentFactoryResolver
       * @param {?} viewContainerRef
       * @param {?} document
       */
      function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
      ) {
        _classCallCheck(this, CalendarTooltipDirective);

        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document = document; // tslint:disable-line no-input-rename

        this.placement = 'auto'; // tslint:disable-line no-input-rename
        // tslint:disable-line no-input-rename

        this.delay = null; // tslint:disable-line no-input-rename

        this.cancelTooltipDelay$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(CalendarTooltipDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.tooltipRef && (changes.contents || changes.customTemplate || changes.event)) {
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            this.tooltipRef.changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.hide();
        }
        /**
         * @return {?}
         */

      }, {
        key: "onMouseOver",
        value: function onMouseOver() {
          var _this = this;

          /** @type {?} */
          var delay$ = this.delay === null ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('now') : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(this.delay);
          delay$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.cancelTooltipDelay$)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this.show();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "onMouseOut",
        value: function onMouseOut() {
          this.hide();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var _this2 = this;

          if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;

            if (this.appendToBody) {
              this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }

            requestAnimationFrame(
            /**
            * @return {?}
            */
            function () {
              _this2.positionTooltip();
            });
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
          }

          this.cancelTooltipDelay$.next();
        }
        /**
         * @private
         * @param {?=} previousPositions
         * @return {?}
         */

      }, {
        key: "positionTooltip",
        value: function positionTooltip() {
          var previousPositions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          if (this.tooltipRef) {
            this.tooltipRef.changeDetectorRef.detectChanges();
            this.tooltipRef.instance.placement = Object(positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody); // keep re-positioning the tooltip until the arrow position doesn't make a difference

            if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
              this.positionTooltip([].concat(_toConsumableArray(previousPositions), [this.tooltipRef.instance.placement]));
            }
          }
        }
      }]);

      return CalendarTooltipDirective;
    }();

    CalendarTooltipDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mwlCalendarTooltip]'
      }]
    }];
    /** @nocollapse */

    CalendarTooltipDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };

    CalendarTooltipDirective.propDecorators = {
      contents: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['mwlCalendarTooltip']
      }],
      placement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipPlacement']
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipTemplate']
      }],
      event: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipEvent']
      }],
      appendToBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipAppendToBody']
      }],
      delay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipDelay']
      }],
      onMouseOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mouseenter']
      }],
      onMouseOut: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mouseleave']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @abstract
     */


    var DateAdapter = function DateAdapter() {
      _classCallCheck(this, DateAdapter);
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {string} */


    var CalendarView = {
      Month: 'month',
      Week: 'week',
      Day: 'day'
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var validateEvents =
    /**
    * @param {?} events
    * @return {?}
    */
    function validateEvents(events) {
      /** @type {?} */
      var warn =
      /**
      * @param {...?} args
      * @return {?}
      */
      function warn() {
        var _console;

        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return (_console = console).warn.apply(_console, ['angular-calendar'].concat(args));
      };

      return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_5__["validateEvents"])(events, warn);
    };
    /**
     * @param {?} outer
     * @param {?} inner
     * @return {?}
     */


    function isInside(outer, inner) {
      return Math.floor(outer.left) <= Math.ceil(inner.left) && Math.floor(inner.left) <= Math.ceil(outer.right) && Math.floor(outer.left) <= Math.ceil(inner.right) && Math.floor(inner.right) <= Math.ceil(outer.right) && Math.floor(outer.top) <= Math.ceil(inner.top) && Math.floor(inner.top) <= Math.ceil(outer.bottom) && Math.floor(outer.top) <= Math.ceil(inner.bottom) && Math.floor(inner.bottom) <= Math.ceil(outer.bottom);
    }
    /**
     * @param {?} amount
     * @param {?} precision
     * @return {?}
     */


    function roundToNearest(amount, precision) {
      return Math.round(amount / precision) * precision;
    }
    /** @type {?} */


    var trackByEventId =
    /**
    * @param {?} index
    * @param {?} event
    * @return {?}
    */
    function trackByEventId(index, event) {
      return event.id ? event.id : event;
    };
    /** @type {?} */


    var trackByWeekDayHeaderDate =
    /**
    * @param {?} index
    * @param {?} day
    * @return {?}
    */
    function trackByWeekDayHeaderDate(index, day) {
      return day.date.toISOString();
    };
    /** @type {?} */


    var trackByHourSegment =
    /**
    * @param {?} index
    * @param {?} segment
    * @return {?}
    */
    function trackByHourSegment(index, segment) {
      return segment.date.toISOString();
    };
    /** @type {?} */


    var trackByHour =
    /**
    * @param {?} index
    * @param {?} hour
    * @return {?}
    */
    function trackByHour(index, hour) {
      return hour.segments[0].date.toISOString();
    };
    /** @type {?} */


    var trackByDayOrWeekEvent =
    /**
    * @param {?} index
    * @param {?} weekEvent
    * @return {?}
    */
    function trackByDayOrWeekEvent(index, weekEvent) {
      return weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
    };
    /** @type {?} */


    var MINUTES_IN_HOUR = 60;
    /**
     * @param {?} movedY
     * @param {?} hourSegments
     * @param {?} hourSegmentHeight
     * @param {?} eventSnapSize
     * @return {?}
     */

    function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize) {
      /** @type {?} */
      var draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
      /** @type {?} */

      var pixelAmountInMinutes = MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight);
      return draggedInPixelsSnapSize * pixelAmountInMinutes;
    }
    /**
     * @param {?} hourSegments
     * @param {?} hourSegmentHeight
     * @return {?}
     */


    function getMinimumEventHeightInMinutes(hourSegments, hourSegmentHeight) {
      return MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight) * hourSegmentHeight;
    }
    /**
     * @param {?} dateAdapter
     * @param {?} event
     * @param {?} minimumMinutes
     * @return {?}
     */


    function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
      if (event.end) {
        return event.end;
      } else {
        return dateAdapter.addMinutes(event.start, minimumMinutes);
      }
    }
    /**
     * @param {?} dateAdapter
     * @param {?} date
     * @param {?} days
     * @param {?} excluded
     * @return {?}
     */


    function addDaysWithExclusions(dateAdapter, date, days, excluded) {
      /** @type {?} */
      var daysCounter = 0;
      /** @type {?} */

      var daysToAdd = 0;
      /** @type {?} */

      var changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
      /** @type {?} */

      var result = date;

      while (daysToAdd <= Math.abs(days)) {
        result = changeDays(date, daysCounter);
        /** @type {?} */

        var day = dateAdapter.getDay(result);

        if (excluded.indexOf(day) === -1) {
          daysToAdd++;
        }

        daysCounter++;
      }

      return result;
    }
    /**
     * @param {?} newStart
     * @param {?} newEnd
     * @param {?} period
     * @return {?}
     */


    function isDraggedWithinPeriod(newStart, newEnd, period) {
      /** @type {?} */
      var end = newEnd || newStart;
      return period.start <= newStart && newStart <= period.end || period.start <= end && end <= period.end;
    }
    /**
     * @param {?} dropEvent
     * @param {?} date
     * @param {?} allDay
     * @param {?} calendarId
     * @return {?}
     */


    function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
      return dropEvent.dropData && dropEvent.dropData.event && (dropEvent.dropData.calendarId !== calendarId || dropEvent.dropData.event.allDay && !allDay || !dropEvent.dropData.event.allDay && allDay);
    }
    /**
     * @param {?} dateAdapter
     * @param {?} viewDate
     * @param {?} weekStartsOn
     * @param {?=} excluded
     * @param {?=} daysInWeek
     * @return {?}
     */


    function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn) {
      var excluded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var daysInWeek = arguments.length > 4 ? arguments[4] : undefined;

      /** @type {?} */
      var viewStart = daysInWeek ? dateAdapter.startOfDay(viewDate) : dateAdapter.startOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      });
      /** @type {?} */

      var endOfWeek = dateAdapter.endOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      });

      while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 && viewStart < endOfWeek) {
        viewStart = dateAdapter.addDays(viewStart, 1);
      }

      if (daysInWeek) {
        /** @type {?} */
        var viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
        return {
          viewStart: viewStart,
          viewEnd: viewEnd
        };
      } else {
        /** @type {?} */
        var _viewEnd = endOfWeek;

        while (excluded.indexOf(dateAdapter.getDay(_viewEnd)) > -1 && _viewEnd > viewStart) {
          _viewEnd = dateAdapter.subDays(_viewEnd, 1);
        }

        return {
          viewStart: viewStart,
          viewEnd: _viewEnd
        };
      }
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function isWithinThreshold(_ref) {
      var x = _ref.x,
          y = _ref.y;

      /** @type {?} */
      var DRAG_THRESHOLD = 1;
      return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Change the view date to the previous view. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarPreviousView
     *  [(viewDate)]="viewDate"
     *  [view]="view">
     *  Previous
     * </button>
     * ```
     */


    var CalendarPreviousViewDirective = /*#__PURE__*/function () {
      /**
       * @param {?} dateAdapter
       */
      function CalendarPreviousViewDirective(dateAdapter) {
        _classCallCheck(this, CalendarPreviousViewDirective);

        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going back by 1 day
         */

        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */

        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @hidden
       * @return {?}
       */


      _createClass(CalendarPreviousViewDirective, [{
        key: "onClick",
        value: function onClick() {
          /** @type {?} */
          var subFn = {
            day: this.dateAdapter.subDays,
            week: this.dateAdapter.subWeeks,
            month: this.dateAdapter.subMonths
          }[this.view];

          if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
          } else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
          } else {
            this.viewDateChange.emit(subFn(this.viewDate, 1));
          }
        }
      }]);

      return CalendarPreviousViewDirective;
    }();

    CalendarPreviousViewDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mwlCalendarPreviousView]'
      }]
    }];
    /** @nocollapse */

    CalendarPreviousViewDirective.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    CalendarPreviousViewDirective.propDecorators = {
      view: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      viewDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      excludeDays: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      daysInWeek: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      viewDateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Change the view date to the next view. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarNextView
     *  [(viewDate)]="viewDate"
     *  [view]="view">
     *  Next
     * </button>
     * ```
     */


    var CalendarNextViewDirective = /*#__PURE__*/function () {
      /**
       * @param {?} dateAdapter
       */
      function CalendarNextViewDirective(dateAdapter) {
        _classCallCheck(this, CalendarNextViewDirective);

        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going forward by 1 day
         */

        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */

        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @hidden
       * @return {?}
       */


      _createClass(CalendarNextViewDirective, [{
        key: "onClick",
        value: function onClick() {
          /** @type {?} */
          var addFn = {
            day: this.dateAdapter.addDays,
            week: this.dateAdapter.addWeeks,
            month: this.dateAdapter.addMonths
          }[this.view];

          if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, 1, this.excludeDays));
          } else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
          } else {
            this.viewDateChange.emit(addFn(this.viewDate, 1));
          }
        }
      }]);

      return CalendarNextViewDirective;
    }();

    CalendarNextViewDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mwlCalendarNextView]'
      }]
    }];
    /** @nocollapse */

    CalendarNextViewDirective.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    CalendarNextViewDirective.propDecorators = {
      view: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      viewDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      excludeDays: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      daysInWeek: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      viewDateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Change the view date to the current day. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarToday
     *  [(viewDate)]="viewDate">
     *  Today
     * </button>
     * ```
     */


    var CalendarTodayDirective = /*#__PURE__*/function () {
      /**
       * @param {?} dateAdapter
       */
      function CalendarTodayDirective(dateAdapter) {
        _classCallCheck(this, CalendarTodayDirective);

        this.dateAdapter = dateAdapter;
        /**
         * Called when the view date is changed
         */

        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @hidden
       * @return {?}
       */


      _createClass(CalendarTodayDirective, [{
        key: "onClick",
        value: function onClick() {
          this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
        }
      }]);

      return CalendarTodayDirective;
    }();

    CalendarTodayDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mwlCalendarToday]'
      }]
    }];
    /** @nocollapse */

    CalendarTodayDirective.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    CalendarTodayDirective.propDecorators = {
      viewDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      viewDateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
     */


    var CalendarAngularDateFormatter = /*#__PURE__*/function () {
      /**
       * @param {?} dateAdapter
       */
      function CalendarAngularDateFormatter(dateAdapter) {
        _classCallCheck(this, CalendarAngularDateFormatter);

        this.dateAdapter = dateAdapter;
      }
      /**
       * The month view header week day labels
       * @param {?} __0
       * @return {?}
       */


      _createClass(CalendarAngularDateFormatter, [{
        key: "monthViewColumnHeader",
        value: function monthViewColumnHeader(_ref2) {
          var date = _ref2.date,
              locale = _ref2.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'EEEE', locale);
        }
        /**
         * The month view cell day number
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "monthViewDayNumber",
        value: function monthViewDayNumber(_ref3) {
          var date = _ref3.date,
              locale = _ref3.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'd', locale);
        }
        /**
         * The month view title
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "monthViewTitle",
        value: function monthViewTitle(_ref4) {
          var date = _ref4.date,
              locale = _ref4.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'LLLL y', locale);
        }
        /**
         * The week view header week day labels
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewColumnHeader",
        value: function weekViewColumnHeader(_ref5) {
          var date = _ref5.date,
              locale = _ref5.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'EEEE', locale);
        }
        /**
         * The week view sub header day and month labels
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewColumnSubHeader",
        value: function weekViewColumnSubHeader(_ref6) {
          var date = _ref6.date,
              locale = _ref6.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'MMM d', locale);
        }
        /**
         * The week view title
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewTitle",
        value: function weekViewTitle(_ref7) {
          var date = _ref7.date,
              locale = _ref7.locale,
              weekStartsOn = _ref7.weekStartsOn,
              excludeDays = _ref7.excludeDays,
              daysInWeek = _ref7.daysInWeek;

          var _getWeekViewPeriod = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
              viewStart = _getWeekViewPeriod.viewStart,
              viewEnd = _getWeekViewPeriod.viewEnd;
          /** @type {?} */


          var format =
          /**
          * @param {?} dateToFormat
          * @param {?} showYear
          * @return {?}
          */
          function format(dateToFormat, showYear) {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);
          };

          return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
        }
        /**
         * The time formatting down the left hand side of the week view
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewHour",
        value: function weekViewHour(_ref8) {
          var date = _ref8.date,
              locale = _ref8.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'h a', locale);
        }
        /**
         * The time formatting down the left hand side of the day view
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "dayViewHour",
        value: function dayViewHour(_ref9) {
          var date = _ref9.date,
              locale = _ref9.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'h a', locale);
        }
        /**
         * The day view title
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "dayViewTitle",
        value: function dayViewTitle(_ref10) {
          var date = _ref10.date,
              locale = _ref10.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'EEEE, MMMM d, y', locale);
        }
      }]);

      return CalendarAngularDateFormatter;
    }();

    CalendarAngularDateFormatter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    CalendarAngularDateFormatter.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
     *
     * If you wish, you may override any of the defaults via angulars DI. For example:
     *
     * ```typescript
     * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
     * import { formatDate } from '\@angular/common';
     *
     * class CustomDateFormatter extends CalendarDateFormatter {
     *
     *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
     *     return formatDate(date, 'EEE', locale); // use short week days
     *   }
     *
     * }
     *
     * // in your component that uses the calendar
     * providers: [{
     *   provide: CalendarDateFormatter,
     *   useClass: CustomDateFormatter
     * }]
     * ```
     */


    var CalendarDateFormatter = /*#__PURE__*/function (_CalendarAngularDateF) {
      _inherits(CalendarDateFormatter, _CalendarAngularDateF);

      var _super = _createSuper(CalendarDateFormatter);

      function CalendarDateFormatter() {
        _classCallCheck(this, CalendarDateFormatter);

        return _super.apply(this, arguments);
      }

      return CalendarDateFormatter;
    }(CalendarAngularDateFormatter);

    CalendarDateFormatter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This pipe is primarily for rendering the current view title. Example usage:
     * ```typescript
     * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
     * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
     * ```
     */

    var CalendarDatePipe = /*#__PURE__*/function () {
      /**
       * @param {?} dateFormatter
       * @param {?} locale
       */
      function CalendarDatePipe(dateFormatter, locale) {
        _classCallCheck(this, CalendarDatePipe);

        this.dateFormatter = dateFormatter;
        this.locale = locale;
      }
      /**
       * @param {?} date
       * @param {?} method
       * @param {?=} locale
       * @param {?=} weekStartsOn
       * @param {?=} excludeDays
       * @param {?=} daysInWeek
       * @return {?}
       */


      _createClass(CalendarDatePipe, [{
        key: "transform",
        value: function transform(date, method) {
          var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.locale;
          var weekStartsOn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var excludeDays = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
          var daysInWeek = arguments.length > 5 ? arguments[5] : undefined;

          if (typeof this.dateFormatter[method] === 'undefined') {
            /** @type {?} */
            var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter(
            /**
            * @param {?} iMethod
            * @return {?}
            */
            function (iMethod) {
              return iMethod !== 'constructor';
            });
            throw new Error("".concat(method, " is not a valid date formatter. Can only be one of ").concat(allowedMethods.join(', ')));
          }

          return this.dateFormatter[method]({
            date: date,
            locale: locale,
            weekStartsOn: weekStartsOn,
            excludeDays: excludeDays,
            daysInWeek: daysInWeek
          });
        }
      }]);

      return CalendarDatePipe;
    }();

    CalendarDatePipe.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
      args: [{
        name: 'calendarDate'
      }]
    }];
    /** @nocollapse */

    CalendarDatePipe.ctorParameters = function () {
      return [{
        type: CalendarDateFormatter
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
     *
     * ```typescript
     * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
     *
     * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
     *
     *   month(event: CalendarEvent): string {
     *     return `Custom prefix: ${event.title}`;
     *   }
     *
     * }
     *
     * // in your component
     * providers: [{
     *  provide: CalendarEventTitleFormatter,
     *  useClass: CustomEventTitleFormatter
     * }]
     * ```
     */


    var CalendarEventTitleFormatter = /*#__PURE__*/function () {
      function CalendarEventTitleFormatter() {
        _classCallCheck(this, CalendarEventTitleFormatter);
      }

      _createClass(CalendarEventTitleFormatter, [{
        key: "month",

        /**
         * The month view event title.
         * @param {?} event
         * @param {?} title
         * @return {?}
         */
        value: function month(event, title) {
          return event.title;
        }
        /**
         * The month view event tooltip. Return a falsey value from this to disable the tooltip.
         * @param {?} event
         * @param {?} title
         * @return {?}
         */

      }, {
        key: "monthTooltip",
        value: function monthTooltip(event, title) {
          return event.title;
        }
        /**
         * The week view event title.
         * @param {?} event
         * @param {?} title
         * @return {?}
         */

      }, {
        key: "week",
        value: function week(event, title) {
          return event.title;
        }
        /**
         * The week view event tooltip. Return a falsey value from this to disable the tooltip.
         * @param {?} event
         * @param {?} title
         * @return {?}
         */

      }, {
        key: "weekTooltip",
        value: function weekTooltip(event, title) {
          return event.title;
        }
        /**
         * The day view event title.
         * @param {?} event
         * @param {?} title
         * @return {?}
         */

      }, {
        key: "day",
        value: function day(event, title) {
          return event.title;
        }
        /**
         * The day view event tooltip. Return a falsey value from this to disable the tooltip.
         * @param {?} event
         * @param {?} title
         * @return {?}
         */

      }, {
        key: "dayTooltip",
        value: function dayTooltip(event, title) {
          return event.title;
        }
      }]);

      return CalendarEventTitleFormatter;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarEventTitlePipe = /*#__PURE__*/function () {
      /**
       * @param {?} calendarEventTitle
       */
      function CalendarEventTitlePipe(calendarEventTitle) {
        _classCallCheck(this, CalendarEventTitlePipe);

        this.calendarEventTitle = calendarEventTitle;
      }
      /**
       * @param {?} title
       * @param {?} titleType
       * @param {?} event
       * @return {?}
       */


      _createClass(CalendarEventTitlePipe, [{
        key: "transform",
        value: function transform(title, titleType, event) {
          return this.calendarEventTitle[titleType](event, title);
        }
      }]);

      return CalendarEventTitlePipe;
    }();

    CalendarEventTitlePipe.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
      args: [{
        name: 'calendarEventTitle'
      }]
    }];
    /** @nocollapse */

    CalendarEventTitlePipe.ctorParameters = function () {
      return [{
        type: CalendarEventTitleFormatter
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ClickDirective = /*#__PURE__*/function () {
      /**
       * @param {?} renderer
       * @param {?} elm
       * @param {?} document
       */
      function ClickDirective(renderer, elm, document) {
        _classCallCheck(this, ClickDirective);

        this.renderer = renderer;
        this.elm = elm;
        this.document = document;
        this.clickListenerDisabled = false;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-line
        // tslint:disable-line

        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }
      /**
       * @return {?}
       */


      _createClass(ClickDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          if (!this.clickListenerDisabled) {
            this.listen().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              event.stopPropagation();

              _this3.click.emit(event);
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "listen",
        value: function listen() {
          var _this4 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            return _this4.renderer.listen(_this4.elm.nativeElement, 'click',
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              observer.next(event);
            });
          });
        }
      }]);

      return ClickDirective;
    }();

    ClickDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mwlClick]'
      }]
    }];
    /** @nocollapse */

    ClickDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };

    ClickDirective.propDecorators = {
      clickListenerDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      click: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['mwlClick']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarUtils = /*#__PURE__*/function () {
      /**
       * @param {?} dateAdapter
       */
      function CalendarUtils(dateAdapter) {
        _classCallCheck(this, CalendarUtils);

        this.dateAdapter = dateAdapter;
      }
      /**
       * @param {?} args
       * @return {?}
       */


      _createClass(CalendarUtils, [{
        key: "getMonthView",
        value: function getMonthView(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_5__["getMonthView"])(this.dateAdapter, args);
        }
        /**
         * @param {?} args
         * @return {?}
         */

      }, {
        key: "getWeekViewHeader",
        value: function getWeekViewHeader(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_5__["getWeekViewHeader"])(this.dateAdapter, args);
        }
        /**
         * @param {?} args
         * @return {?}
         */

      }, {
        key: "getWeekView",
        value: function getWeekView(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_5__["getWeekView"])(this.dateAdapter, args);
        }
        /**
         * @param {?} args
         * @return {?}
         */

      }, {
        key: "getDayView",
        value: function getDayView(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_5__["getDayView"])(this.dateAdapter, args);
        }
        /**
         * @param {?} args
         * @return {?}
         */

      }, {
        key: "getDayViewHourGrid",
        value: function getDayViewHourGrid(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_5__["getDayViewHourGrid"])(this.dateAdapter, args);
        }
      }]);

      return CalendarUtils;
    }();

    CalendarUtils.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    CalendarUtils.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var MOMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Moment');
    /**
     * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
     *
     * ```typescript
     * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
     * import moment from 'moment';
     *
     * // in your component
     * provide: [{
     *   provide: MOMENT, useValue: moment
     * }, {
     *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
     * }]
     *
     * ```
     */

    var CalendarMomentDateFormatter = /*#__PURE__*/function () {
      /**
       * @hidden
       * @param {?} moment
       * @param {?} dateAdapter
       */
      function CalendarMomentDateFormatter(moment, dateAdapter) {
        _classCallCheck(this, CalendarMomentDateFormatter);

        this.moment = moment;
        this.dateAdapter = dateAdapter;
      }
      /**
       * The month view header week day labels
       * @param {?} __0
       * @return {?}
       */


      _createClass(CalendarMomentDateFormatter, [{
        key: "monthViewColumnHeader",
        value: function monthViewColumnHeader(_ref11) {
          var date = _ref11.date,
              locale = _ref11.locale;
          return this.moment(date).locale(locale).format('dddd');
        }
        /**
         * The month view cell day number
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "monthViewDayNumber",
        value: function monthViewDayNumber(_ref12) {
          var date = _ref12.date,
              locale = _ref12.locale;
          return this.moment(date).locale(locale).format('D');
        }
        /**
         * The month view title
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "monthViewTitle",
        value: function monthViewTitle(_ref13) {
          var date = _ref13.date,
              locale = _ref13.locale;
          return this.moment(date).locale(locale).format('MMMM YYYY');
        }
        /**
         * The week view header week day labels
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewColumnHeader",
        value: function weekViewColumnHeader(_ref14) {
          var date = _ref14.date,
              locale = _ref14.locale;
          return this.moment(date).locale(locale).format('dddd');
        }
        /**
         * The week view sub header day and month labels
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewColumnSubHeader",
        value: function weekViewColumnSubHeader(_ref15) {
          var date = _ref15.date,
              locale = _ref15.locale;
          return this.moment(date).locale(locale).format('MMM D');
        }
        /**
         * The week view title
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewTitle",
        value: function weekViewTitle(_ref16) {
          var _this5 = this;

          var date = _ref16.date,
              locale = _ref16.locale,
              weekStartsOn = _ref16.weekStartsOn,
              excludeDays = _ref16.excludeDays,
              daysInWeek = _ref16.daysInWeek;

          var _getWeekViewPeriod2 = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
              viewStart = _getWeekViewPeriod2.viewStart,
              viewEnd = _getWeekViewPeriod2.viewEnd;
          /** @type {?} */


          var format =
          /**
          * @param {?} dateToFormat
          * @param {?} showYear
          * @return {?}
          */
          function format(dateToFormat, showYear) {
            return _this5.moment(dateToFormat).locale(locale).format('MMM D' + (showYear ? ', YYYY' : ''));
          };

          return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
        }
        /**
         * The time formatting down the left hand side of the week view
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewHour",
        value: function weekViewHour(_ref17) {
          var date = _ref17.date,
              locale = _ref17.locale;
          return this.moment(date).locale(locale).format('ha');
        }
        /**
         * The time formatting down the left hand side of the day view
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "dayViewHour",
        value: function dayViewHour(_ref18) {
          var date = _ref18.date,
              locale = _ref18.locale;
          return this.moment(date).locale(locale).format('ha');
        }
        /**
         * The day view title
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "dayViewTitle",
        value: function dayViewTitle(_ref19) {
          var date = _ref19.date,
              locale = _ref19.locale;
          return this.moment(date).locale(locale).format('dddd, D MMMM, YYYY');
        }
      }]);

      return CalendarMomentDateFormatter;
    }();

    CalendarMomentDateFormatter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    CalendarMomentDateFormatter.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MOMENT]
        }]
      }, {
        type: DateAdapter
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
     *
     * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
     */


    var CalendarNativeDateFormatter = /*#__PURE__*/function () {
      /**
       * @param {?} dateAdapter
       */
      function CalendarNativeDateFormatter(dateAdapter) {
        _classCallCheck(this, CalendarNativeDateFormatter);

        this.dateAdapter = dateAdapter;
      }
      /**
       * The month view header week day labels
       * @param {?} __0
       * @return {?}
       */


      _createClass(CalendarNativeDateFormatter, [{
        key: "monthViewColumnHeader",
        value: function monthViewColumnHeader(_ref20) {
          var date = _ref20.date,
              locale = _ref20.locale;
          return new Intl.DateTimeFormat(locale, {
            weekday: 'long'
          }).format(date);
        }
        /**
         * The month view cell day number
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "monthViewDayNumber",
        value: function monthViewDayNumber(_ref21) {
          var date = _ref21.date,
              locale = _ref21.locale;
          return new Intl.DateTimeFormat(locale, {
            day: 'numeric'
          }).format(date);
        }
        /**
         * The month view title
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "monthViewTitle",
        value: function monthViewTitle(_ref22) {
          var date = _ref22.date,
              locale = _ref22.locale;
          return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long'
          }).format(date);
        }
        /**
         * The week view header week day labels
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewColumnHeader",
        value: function weekViewColumnHeader(_ref23) {
          var date = _ref23.date,
              locale = _ref23.locale;
          return new Intl.DateTimeFormat(locale, {
            weekday: 'long'
          }).format(date);
        }
        /**
         * The week view sub header day and month labels
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewColumnSubHeader",
        value: function weekViewColumnSubHeader(_ref24) {
          var date = _ref24.date,
              locale = _ref24.locale;
          return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
          }).format(date);
        }
        /**
         * The week view title
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewTitle",
        value: function weekViewTitle(_ref25) {
          var date = _ref25.date,
              locale = _ref25.locale,
              weekStartsOn = _ref25.weekStartsOn,
              excludeDays = _ref25.excludeDays,
              daysInWeek = _ref25.daysInWeek;

          var _getWeekViewPeriod3 = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
              viewStart = _getWeekViewPeriod3.viewStart,
              viewEnd = _getWeekViewPeriod3.viewEnd;
          /** @type {?} */


          var format =
          /**
          * @param {?} dateToFormat
          * @param {?} showYear
          * @return {?}
          */
          function format(dateToFormat, showYear) {
            return new Intl.DateTimeFormat(locale, {
              day: 'numeric',
              month: 'short',
              year: showYear ? 'numeric' : undefined
            }).format(dateToFormat);
          };

          return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
        }
        /**
         * The time formatting down the left hand side of the week view
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewHour",
        value: function weekViewHour(_ref26) {
          var date = _ref26.date,
              locale = _ref26.locale;
          return new Intl.DateTimeFormat(locale, {
            hour: 'numeric'
          }).format(date);
        }
        /**
         * The time formatting down the left hand side of the day view
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "dayViewHour",
        value: function dayViewHour(_ref27) {
          var date = _ref27.date,
              locale = _ref27.locale;
          return new Intl.DateTimeFormat(locale, {
            hour: 'numeric'
          }).format(date);
        }
        /**
         * The day view title
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "dayViewTitle",
        value: function dayViewTitle(_ref28) {
          var date = _ref28.date,
              locale = _ref28.locale;
          return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
          }).format(date);
        }
      }]);

      return CalendarNativeDateFormatter;
    }();

    CalendarNativeDateFormatter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    CalendarNativeDateFormatter.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The parameter type passed to the date formatter methods.
     * @record
     */


    function DateFormatterParams() {}

    if (false) {}
    /**
     * If using a completely custom date formatter then it should implement this interface.
     * @record
     */


    function CalendarDateFormatterInterface() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {string} */


    var CalendarEventTimesChangedEventType = {
      Drag: 'drag',
      Drop: 'drop',
      Resize: 'resize'
    };
    /**
     * The output `$event` type when an event is resized or dragged and dropped.
     * @record
     * @template MetaType
     */

    function CalendarEventTimesChangedEvent() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function CalendarModuleConfig() {}

    if (false) {}
    /**
     * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
     *
     * ```typescript
     * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
     *
     * \@NgModule({
     *   imports: [
     *     CalendarCommonModule.forRoot(),
     *     CalendarMonthModule
     *   ]
     * })
     * class MyModule {}
     * ```
     *
     */


    var CalendarCommonModule = /*#__PURE__*/function () {
      function CalendarCommonModule() {
        _classCallCheck(this, CalendarCommonModule);
      }

      _createClass(CalendarCommonModule, null, [{
        key: "forRoot",

        /**
         * @param {?} dateAdapter
         * @param {?=} config
         * @return {?}
         */
        value: function forRoot(dateAdapter) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return {
            ngModule: CalendarCommonModule,
            providers: [dateAdapter, config.eventTitleFormatter || CalendarEventTitleFormatter, config.dateFormatter || CalendarDateFormatter, config.utils || CalendarUtils]
          };
        }
      }]);

      return CalendarCommonModule;
    }();

    CalendarCommonModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, ClickDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, ClickDirective],
        entryComponents: [CalendarTooltipWindowComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */

    function CalendarMonthViewBeforeRenderEvent() {}

    if (false) {}
    /**
     * @record
     * @template EventMetaType, DayMetaType
     */


    function CalendarMonthViewEventTimesChangedEvent() {}

    if (false) {}
    /**
     * Shows all events on a given month. Example usage:
     *
     * ```typescript
     * <mwl-calendar-month-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-month-view>
     * ```
     */


    var CalendarMonthViewComponent = /*#__PURE__*/function () {
      /**
       * @hidden
       * @param {?} cdr
       * @param {?} utils
       * @param {?} locale
       * @param {?} dateAdapter
       */
      function CalendarMonthViewComponent(cdr, utils, locale, dateAdapter) {
        var _this6 = this;

        _classCallCheck(this, CalendarMonthViewComponent);

        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */

        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */

        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */

        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */

        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */

        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */

        this.tooltipDelay = null;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */

        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the day cell is clicked
         */

        this.dayClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */

        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when a header week day is clicked. Returns ISO day number.
         */

        this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an event is dragged and dropped
         */

        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @hidden
         */

        this.trackByRowOffset =
        /**
        * @param {?} index
        * @param {?} offset
        * @return {?}
        */
        function (index, offset) {
          return _this6.view.days.slice(offset, _this6.view.totalDaysVisibleInWeek).map(
          /**
          * @param {?} day
          * @return {?}
          */
          function (day) {
            return day.date.toISOString();
          }).join('-');
        };
        /**
         * @hidden
         */


        this.trackByDate =
        /**
        * @param {?} index
        * @param {?} day
        * @return {?}
        */
        function (index, day) {
          return day.date.toISOString();
        };

        this.locale = locale;
      }
      /**
       * @hidden
       * @return {?}
       */


      _createClass(CalendarMonthViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(
            /**
            * @return {?}
            */
            function () {
              _this7.refreshAll();

              _this7.cdr.markForCheck();
            });
          }
        }
        /**
         * @hidden
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
          /** @type {?} */

          var refreshBody = changes.viewDate || changes.events || changes.excludeDays || changes.weekendDays;

          if (refreshHeader) {
            this.refreshHeader();
          }

          if (changes.events) {
            validateEvents(this.events);
          }

          if (refreshBody) {
            this.refreshBody();
          }

          if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
          }

          if (changes.activeDayIsOpen || changes.viewDate || changes.events || changes.excludeDays || changes.activeDay) {
            this.checkActiveDayIsOpen();
          }
        }
        /**
         * @hidden
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
          }
        }
        /**
         * @hidden
         * @param {?} event
         * @param {?} isHighlighted
         * @return {?}
         */

      }, {
        key: "toggleDayHighlight",
        value: function toggleDayHighlight(event, isHighlighted) {
          this.view.days.forEach(
          /**
          * @param {?} day
          * @return {?}
          */
          function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
              day.backgroundColor = event.color && event.color.secondary || '#D1E8FF';
            } else {
              delete day.backgroundColor;
            }
          });
        }
        /**
         * @hidden
         * @param {?} droppedOn
         * @param {?} event
         * @param {?=} draggedFrom
         * @return {?}
         */

      }, {
        key: "eventDropped",
        value: function eventDropped(droppedOn, event, draggedFrom) {
          if (droppedOn !== draggedFrom) {
            /** @type {?} */
            var year = this.dateAdapter.getYear(droppedOn.date);
            /** @type {?} */

            var month = this.dateAdapter.getMonth(droppedOn.date);
            /** @type {?} */

            var date = this.dateAdapter.getDate(droppedOn.date);
            /** @type {?} */

            var newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
            /** @type {?} */

            var newEnd;

            if (event.end) {
              /** @type {?} */
              var secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
              newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
            }

            this.eventTimesChanged.emit({
              event: event,
              newStart: newStart,
              newEnd: newEnd,
              day: droppedOn,
              type: CalendarEventTimesChangedEventType.Drop
            });
          }
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "refreshHeader",
        value: function refreshHeader() {
          this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
          });
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "refreshBody",
        value: function refreshBody() {
          this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
          });
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "checkActiveDayIsOpen",
        value: function checkActiveDayIsOpen() {
          var _this8 = this;

          if (this.activeDayIsOpen === true) {
            /** @type {?} */
            var activeDay = this.activeDay || this.viewDate;
            this.openDay = this.view.days.find(
            /**
            * @param {?} day
            * @return {?}
            */
            function (day) {
              return _this8.dateAdapter.isSameDay(day.date, activeDay);
            });
            /** @type {?} */

            var index = this.view.days.indexOf(this.openDay);
            this.openRowIndex = Math.floor(index / this.view.totalDaysVisibleInWeek) * this.view.totalDaysVisibleInWeek;
          } else {
            this.openRowIndex = null;
            this.openDay = null;
          }
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "refreshAll",
        value: function refreshAll() {
          this.refreshHeader();
          this.refreshBody();
          this.emitBeforeViewRender();
          this.checkActiveDayIsOpen();
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "emitBeforeViewRender",
        value: function emitBeforeViewRender() {
          if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
              header: this.columnHeaders,
              body: this.view.days,
              period: this.view.period
            });
          }
        }
      }]);

      return CalendarMonthViewComponent;
    }();

    CalendarMonthViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-month-view',
        template: "\n    <div class=\"cal-month-view\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        (columnHeaderClicked)=\"columnHeaderClicked.emit($event)\"\n        [customTemplate]=\"headerTemplate\"\n      >\n        >\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div\n          *ngFor=\"let rowIndex of view.rowOffsets; trackBy: trackByRowOffset\"\n        >\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"\n                let day of view.days\n                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;\n                trackBy: trackByDate\n              \"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"cellTemplate\"\n              [ngStyle]=\"{ backgroundColor: day.backgroundColor }\"\n              (mwlClick)=\"dayClicked.emit({ day: day })\"\n              [clickListenerDisabled]=\"dayClicked.observers.length === 0\"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"\n                eventDropped(\n                  day,\n                  $event.dropData.event,\n                  $event.dropData.draggedFrom\n                )\n              \"\n              (eventClicked)=\"eventClicked.emit({ event: $event.event })\"\n            >\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"eventClicked.emit({ event: $event.event })\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"\n              eventDropped(\n                openDay,\n                $event.dropData.event,\n                $event.dropData.draggedFrom\n              )\n            \"\n          >\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
      }]
    }];
    /** @nocollapse */

    CalendarMonthViewComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: CalendarUtils
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
        }]
      }, {
        type: DateAdapter
      }];
    };

    CalendarMonthViewComponent.propDecorators = {
      viewDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      events: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      excludeDays: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      activeDayIsOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      activeDay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      refresh: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipPlacement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipAppendToBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      weekStartsOn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      headerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cellTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      openDayEventsTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventTitleTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventActionsTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      weekendDays: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      beforeViewRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      dayClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      eventClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      columnHeaderClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      eventTimesChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarMonthViewHeaderComponent = function CalendarMonthViewHeaderComponent() {
      _classCallCheck(this, CalendarMonthViewHeaderComponent);

      this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    };

    CalendarMonthViewHeaderComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-month-view-header',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-cell-row cal-header\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          (click)=\"columnHeaderClicked.emit(day.day)\"\n          [ngClass]=\"day.cssClass\"\n        >\n          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
      }]
    }];
    CalendarMonthViewHeaderComponent.propDecorators = {
      days: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      columnHeaderClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarMonthCellComponent = function CalendarMonthCellComponent() {
      _classCallCheck(this, CalendarMonthCellComponent);

      this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.trackByEventId = trackByEventId;
      this.validateDrag = isWithinThreshold;
    };

    CalendarMonthCellComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-month-cell',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div class=\"cal-cell-top\">\n        <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{\n          day.badgeTotal\n        }}</span>\n        <span class=\"cal-day-number\">{{\n          day.date | calendarDate: 'monthViewDayNumber':locale\n        }}</span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy: trackByEventId\"\n          [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({ event: event })\"\n          (mouseleave)=\"unhighlightDay.emit({ event: event })\"\n          [mwlCalendarTooltip]=\"\n            event.title | calendarEventTitle: 'monthTooltip':event\n          \"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, draggedFrom: day }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          (mwlClick)=\"eventClicked.emit({ event: event })\"\n        ></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
        host: {
          "class": 'cal-cell cal-day-cell',
          '[class.cal-past]': 'day.isPast',
          '[class.cal-today]': 'day.isToday',
          '[class.cal-future]': 'day.isFuture',
          '[class.cal-weekend]': 'day.isWeekend',
          '[class.cal-in-month]': 'day.inMonth',
          '[class.cal-out-month]': '!day.inMonth',
          '[class.cal-has-events]': 'day.events.length > 0',
          '[class.cal-open]': 'day === openDay',
          '[class.cal-event-highlight]': '!!day.backgroundColor'
        }
      }]
    }];
    CalendarMonthCellComponent.propDecorators = {
      day: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      openDay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipPlacement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipAppendToBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      highlightDay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      unhighlightDay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      eventClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var collapseAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('collapse', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
      height: 0,
      overflow: 'hidden',
      'padding-top': 0,
      'padding-bottom': 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
      height: '*',
      overflow: 'hidden',
      'padding-top': '*',
      'padding-bottom': '*'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('150ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('150ms ease-in'))]);

    var CalendarOpenDayEventsComponent = function CalendarOpenDayEventsComponent() {
      _classCallCheck(this, CalendarOpenDayEventsComponent);

      this.isOpen = false;
      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.trackByEventId = trackByEventId;
      this.validateDrag = isWithinThreshold;
    };

    CalendarOpenDayEventsComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-open-day-events',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\"\n      let-isOpen=\"isOpen\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div class=\"cal-open-day-events\" [@collapse] *ngIf=\"isOpen\">\n        <div\n          *ngFor=\"let event of events; trackBy: trackByEventId\"\n          [ngClass]=\"event?.cssClass\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n        >\n          <span\n            class=\"cal-event\"\n            [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          >\n          </span>\n          &ngsp;\n          <mwl-calendar-event-title\n            [event]=\"event\"\n            [customTemplate]=\"eventTitleTemplate\"\n            view=\"month\"\n            (mwlClick)=\"eventClicked.emit({ event: event })\"\n          >\n          </mwl-calendar-event-title>\n          &ngsp;\n          <mwl-calendar-event-actions\n            [event]=\"event\"\n            [customTemplate]=\"eventActionsTemplate\"\n          >\n          </mwl-calendar-event-actions>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        events: events,\n        eventClicked: eventClicked,\n        isOpen: isOpen,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
        animations: [collapseAnimation]
      }]
    }];
    CalendarOpenDayEventsComponent.propDecorators = {
      isOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      events: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventTitleTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventActionsTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarMonthModule = function CalendarMonthModule() {
      _classCallCheck(this, CalendarMonthModule);
    };

    CalendarMonthModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__["DragAndDropModule"], CalendarCommonModule],
        declarations: [CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent],
        exports: [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__["DragAndDropModule"], CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CalendarDragHelper = /*#__PURE__*/function () {
      /**
       * @param {?} dragContainerElement
       * @param {?} draggableElement
       */
      function CalendarDragHelper(dragContainerElement, draggableElement) {
        _classCallCheck(this, CalendarDragHelper);

        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      _createClass(CalendarDragHelper, [{
        key: "validateDrag",
        value: function validateDrag(_ref29) {
          var x = _ref29.x,
              y = _ref29.y,
              snapDraggedEvents = _ref29.snapDraggedEvents,
              dragAlreadyMoved = _ref29.dragAlreadyMoved,
              transform = _ref29.transform;

          if (snapDraggedEvents) {
            /** @type {?} */
            var newRect = Object.assign({}, this.startPosition, {
              left: this.startPosition.left + transform.x,
              right: this.startPosition.right + transform.x,
              top: this.startPosition.top + transform.y,
              bottom: this.startPosition.bottom + transform.y
            });
            return (isWithinThreshold({
              x: x,
              y: y
            }) || dragAlreadyMoved) && isInside(this.dragContainerElement.getBoundingClientRect(), newRect);
          } else {
            return isWithinThreshold({
              x: x,
              y: y
            }) || dragAlreadyMoved;
          }
        }
      }]);

      return CalendarDragHelper;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarResizeHelper = /*#__PURE__*/function () {
      /**
       * @param {?} resizeContainerElement
       * @param {?=} minWidth
       */
      function CalendarResizeHelper(resizeContainerElement, minWidth) {
        _classCallCheck(this, CalendarResizeHelper);

        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      _createClass(CalendarResizeHelper, [{
        key: "validateResize",
        value: function validateResize(_ref30) {
          var rectangle = _ref30.rectangle;

          if (this.minWidth && Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
            return false;
          }

          return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
        }
      }]);

      return CalendarResizeHelper;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function WeekViewAllDayEventResize() {}

    if (false) {}
    /**
     * @record
     */


    function CalendarWeekViewBeforeRenderEvent() {}

    if (false) {}
    /**
     * Shows all events on a given week. Example usage:
     *
     * ```typescript
     * <mwl-calendar-week-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-week-view>
     * ```
     */


    var CalendarWeekViewComponent = /*#__PURE__*/function () {
      /**
       * @hidden
       * @param {?} cdr
       * @param {?} utils
       * @param {?} locale
       * @param {?} dateAdapter
       */
      function CalendarWeekViewComponent(cdr, utils, locale, dateAdapter) {
        _classCallCheck(this, CalendarWeekViewComponent);

        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */

        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */

        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */

        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */

        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */

        this.tooltipDelay = null;
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */

        this.precision = 'days';
        /**
         * Whether to snap events to a grid when dragging
         */

        this.snapDraggedEvents = true;
        /**
         * The number of segments in an hour. Must be <= 6
         */

        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */

        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */

        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */

        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */

        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */

        this.dayEndMinute = 59;
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */

        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */

        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */

        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */

        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */

        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @hidden
         */

        this.allDayEventResizes = new Map();
        /**
         * @hidden
         */

        this.timeEventResizes = new Map();
        /**
         * @hidden
         */

        this.eventDragEnterByType = {
          allDay: 0,
          time: 0
        };
        /**
         * @hidden
         */

        this.dragActive = false;
        /**
         * @hidden
         */

        this.dragAlreadyMoved = false;
        /**
         * @hidden
         */

        this.calendarId = Symbol('angular calendar week view id');
        /**
         * @hidden
         */

        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
        /**
         * @hidden
         */

        this.trackByHourSegment = trackByHourSegment;
        /**
         * @hidden
         */

        this.trackByHour = trackByHour;
        /**
         * @hidden
         */

        this.trackByDayOrWeekEvent = trackByDayOrWeekEvent;
        /**
         * @hidden
         */

        this.trackByHourColumn =
        /**
        * @param {?} index
        * @param {?} column
        * @return {?}
        */
        function (index, column) {
          return column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
        };
        /**
         * @hidden
         */


        this.trackById =
        /**
        * @param {?} index
        * @param {?} row
        * @return {?}
        */
        function (index, row) {
          return row.id;
        };

        this.locale = locale;
      }
      /**
       * @hidden
       * @return {?}
       */


      _createClass(CalendarWeekViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(
            /**
            * @return {?}
            */
            function () {
              _this9.refreshAll();

              _this9.cdr.markForCheck();
            });
          }
        }
        /**
         * @hidden
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays || changes.daysInWeek || changes.weekStartsOn;
          /** @type {?} */

          var refreshBody = changes.viewDate || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute || changes.hourSegments || changes.weekStartsOn || changes.weekendDays || changes.excludeDays || changes.hourSegmentHeight || changes.events || changes.daysInWeek;

          if (refreshHeader) {
            this.refreshHeader();
          }

          if (changes.events) {
            validateEvents(this.events);
          }

          if (refreshBody) {
            this.refreshBody();
          }

          if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
          }
        }
        /**
         * @hidden
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
          }
        }
        /**
         * @protected
         * @param {?} eventsContainer
         * @param {?=} minWidth
         * @return {?}
         */

      }, {
        key: "resizeStarted",
        value: function resizeStarted(eventsContainer, minWidth) {
          this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
          /** @type {?} */

          var resizeHelper = new CalendarResizeHelper(eventsContainer, minWidth);

          this.validateResize =
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref31) {
            var rectangle = _ref31.rectangle;
            return resizeHelper.validateResize({
              rectangle: rectangle
            });
          };

          this.cdr.markForCheck();
        }
        /**
         * @hidden
         * @param {?} eventsContainer
         * @param {?} timeEvent
         * @param {?} resizeEvent
         * @return {?}
         */

      }, {
        key: "timeEventResizeStarted",
        value: function timeEventResizeStarted(eventsContainer, timeEvent, resizeEvent) {
          this.timeEventResizes.set(timeEvent.event, resizeEvent);
          this.resizeStarted(eventsContainer);
        }
        /**
         * @hidden
         * @param {?} timeEvent
         * @param {?} resizeEvent
         * @return {?}
         */

      }, {
        key: "timeEventResizing",
        value: function timeEventResizing(timeEvent, resizeEvent) {
          var _this10 = this;

          this.timeEventResizes.set(timeEvent.event, resizeEvent);
          /** @type {?} */

          var adjustedEvents = new Map();
          /** @type {?} */

          var tempEvents = _toConsumableArray(this.events);

          this.timeEventResizes.forEach(
          /**
          * @param {?} lastResizeEvent
          * @param {?} event
          * @return {?}
          */
          function (lastResizeEvent, event) {
            /** @type {?} */
            var newEventDates = _this10.getTimeEventResizedDates(event, lastResizeEvent);
            /** @type {?} */


            var adjustedEvent = Object.assign({}, event, newEventDates);
            adjustedEvents.set(adjustedEvent, event);
            /** @type {?} */

            var eventIndex = tempEvents.indexOf(event);
            tempEvents[eventIndex] = adjustedEvent;
          });
          this.restoreOriginalEvents(tempEvents, adjustedEvents);
        }
        /**
         * @hidden
         * @param {?} timeEvent
         * @return {?}
         */

      }, {
        key: "timeEventResizeEnded",
        value: function timeEventResizeEnded(timeEvent) {
          this.view = this.getWeekView(this.events);
          /** @type {?} */

          var lastResizeEvent = this.timeEventResizes.get(timeEvent.event);

          if (lastResizeEvent) {
            this.timeEventResizes["delete"](timeEvent.event);
            /** @type {?} */

            var newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
            this.eventTimesChanged.emit({
              newStart: newEventDates.start,
              newEnd: newEventDates.end,
              event: timeEvent.event,
              type: CalendarEventTimesChangedEventType.Resize
            });
          }
        }
        /**
         * @hidden
         * @param {?} allDayEventsContainer
         * @param {?} allDayEvent
         * @param {?} resizeEvent
         * @return {?}
         */

      }, {
        key: "allDayEventResizeStarted",
        value: function allDayEventResizeStarted(allDayEventsContainer, allDayEvent, resizeEvent) {
          this.allDayEventResizes.set(allDayEvent, {
            originalOffset: allDayEvent.offset,
            originalSpan: allDayEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
          });
          this.resizeStarted(allDayEventsContainer, this.getDayColumnWidth(allDayEventsContainer));
        }
        /**
         * @hidden
         * @param {?} allDayEvent
         * @param {?} resizeEvent
         * @param {?} dayWidth
         * @return {?}
         */

      }, {
        key: "allDayEventResizing",
        value: function allDayEventResizing(allDayEvent, resizeEvent, dayWidth) {
          /** @type {?} */
          var currentResize = this.allDayEventResizes.get(allDayEvent);

          if (typeof resizeEvent.edges.left !== 'undefined') {
            /** @type {?} */
            var diff = Math.round(+resizeEvent.edges.left / dayWidth);
            allDayEvent.offset = currentResize.originalOffset + diff;
            allDayEvent.span = currentResize.originalSpan - diff;
          } else if (typeof resizeEvent.edges.right !== 'undefined') {
            /** @type {?} */
            var _diff = Math.round(+resizeEvent.edges.right / dayWidth);

            allDayEvent.span = currentResize.originalSpan + _diff;
          }
        }
        /**
         * @hidden
         * @param {?} allDayEvent
         * @return {?}
         */

      }, {
        key: "allDayEventResizeEnded",
        value: function allDayEventResizeEnded(allDayEvent) {
          /** @type {?} */
          var currentResize = this.allDayEventResizes.get(allDayEvent);

          if (currentResize) {
            /** @type {?} */
            var allDayEventResizingBeforeStart = currentResize.edge === 'left';
            /** @type {?} */

            var daysDiff;

            if (allDayEventResizingBeforeStart) {
              daysDiff = allDayEvent.offset - currentResize.originalOffset;
            } else {
              daysDiff = allDayEvent.span - currentResize.originalSpan;
            }

            allDayEvent.offset = currentResize.originalOffset;
            allDayEvent.span = currentResize.originalSpan;
            /** @type {?} */

            var newStart = allDayEvent.event.start;
            /** @type {?} */

            var newEnd = allDayEvent.event.end || allDayEvent.event.start;

            if (allDayEventResizingBeforeStart) {
              newStart = addDaysWithExclusions(this.dateAdapter, newStart, daysDiff, this.excludeDays);
            } else {
              newEnd = addDaysWithExclusions(this.dateAdapter, newEnd, daysDiff, this.excludeDays);
            }

            this.eventTimesChanged.emit({
              newStart: newStart,
              newEnd: newEnd,
              event: allDayEvent.event,
              type: CalendarEventTimesChangedEventType.Resize
            });
            this.allDayEventResizes["delete"](allDayEvent);
          }
        }
        /**
         * @hidden
         * @param {?} eventRowContainer
         * @return {?}
         */

      }, {
        key: "getDayColumnWidth",
        value: function getDayColumnWidth(eventRowContainer) {
          return Math.floor(eventRowContainer.offsetWidth / this.days.length);
        }
        /**
         * @hidden
         * @param {?} dropEvent
         * @param {?} date
         * @param {?} allDay
         * @return {?}
         */

      }, {
        key: "eventDropped",
        value: function eventDropped(dropEvent, date, allDay) {
          if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId)) {
            this.eventTimesChanged.emit({
              type: CalendarEventTimesChangedEventType.Drop,
              event: dropEvent.dropData.event,
              newStart: date,
              allDay: allDay
            });
          }
        }
        /**
         * @hidden
         * @param {?} type
         * @return {?}
         */

      }, {
        key: "dragEnter",
        value: function dragEnter(type) {
          this.eventDragEnterByType[type]++;
        }
        /**
         * @hidden
         * @param {?} type
         * @return {?}
         */

      }, {
        key: "dragLeave",
        value: function dragLeave(type) {
          this.eventDragEnterByType[type]--;
        }
        /**
         * @hidden
         * @param {?} eventsContainer
         * @param {?} event
         * @param {?=} dayEvent
         * @return {?}
         */

      }, {
        key: "dragStarted",
        value: function dragStarted(eventsContainer, event, dayEvent) {
          var _this11 = this;

          this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
          /** @type {?} */

          var dragHelper = new CalendarDragHelper(eventsContainer, event);

          this.validateDrag =
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref32) {
            var x = _ref32.x,
                y = _ref32.y,
                transform = _ref32.transform;
            return _this11.allDayEventResizes.size === 0 && _this11.timeEventResizes.size === 0 && dragHelper.validateDrag({
              x: x,
              y: y,
              snapDraggedEvents: _this11.snapDraggedEvents,
              dragAlreadyMoved: _this11.dragAlreadyMoved,
              transform: transform
            });
          };

          this.dragActive = true;
          this.dragAlreadyMoved = false;
          this.eventDragEnterByType = {
            allDay: 0,
            time: 0
          };

          if (!this.snapDraggedEvents && dayEvent) {
            this.view.hourColumns.forEach(
            /**
            * @param {?} column
            * @return {?}
            */
            function (column) {
              /** @type {?} */
              var linkedEvent = column.events.find(
              /**
              * @param {?} columnEvent
              * @return {?}
              */
              function (columnEvent) {
                return columnEvent.event === dayEvent.event && columnEvent !== dayEvent;
              }); // hide any linked events while dragging

              if (linkedEvent) {
                linkedEvent.width = 0;
                linkedEvent.height = 0;
              }
            });
          }

          this.cdr.markForCheck();
        }
        /**
         * @hidden
         * @param {?} dayEvent
         * @param {?} dragEvent
         * @return {?}
         */

      }, {
        key: "dragMove",
        value: function dragMove(dayEvent, dragEvent) {
          if (this.snapDraggedEvents) {
            /** @type {?} */
            var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
            /** @type {?} */

            var originalEvent = dayEvent.event;
            /** @type {?} */

            var adjustedEvent = Object.assign({}, originalEvent, newEventTimes);
            /** @type {?} */

            var tempEvents = this.events.map(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              if (event === originalEvent) {
                return adjustedEvent;
              }

              return event;
            });
            this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]));
          }

          this.dragAlreadyMoved = true;
        }
        /**
         * @hidden
         * @return {?}
         */

      }, {
        key: "allDayEventDragMove",
        value: function allDayEventDragMove() {
          this.dragAlreadyMoved = true;
        }
        /**
         * @hidden
         * @param {?} weekEvent
         * @param {?} dragEndEvent
         * @param {?} dayWidth
         * @param {?=} useY
         * @return {?}
         */

      }, {
        key: "dragEnded",
        value: function dragEnded(weekEvent, dragEndEvent, dayWidth) {
          var useY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          this.view = this.getWeekView(this.events);
          this.dragActive = false;

          var _this$getDragMovedEve = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY),
              start = _this$getDragMovedEve.start,
              end = _this$getDragMovedEve.end;

          if (this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0 && isDraggedWithinPeriod(start, end, this.view.period)) {
            this.eventTimesChanged.emit({
              newStart: start,
              newEnd: end,
              event: weekEvent.event,
              type: CalendarEventTimesChangedEventType.Drag,
              allDay: !useY
            });
          }
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "refreshHeader",
        value: function refreshHeader() {
          this.days = this.utils.getWeekViewHeader(Object.assign({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
          }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "refreshBody",
        value: function refreshBody() {
          this.view = this.getWeekView(this.events);
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "refreshAll",
        value: function refreshAll() {
          this.refreshHeader();
          this.refreshBody();
          this.emitBeforeViewRender();
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "emitBeforeViewRender",
        value: function emitBeforeViewRender() {
          if (this.days && this.view) {
            this.beforeViewRender.emit(Object.assign({
              header: this.days
            }, this.view));
          }
        }
        /**
         * @protected
         * @param {?} events
         * @return {?}
         */

      }, {
        key: "getWeekView",
        value: function getWeekView(events) {
          return this.utils.getWeekView(Object.assign({
            events: events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            precision: this.precision,
            absolutePositionedEvents: true,
            hourSegments: this.hourSegments,
            dayStart: {
              hour: this.dayStartHour,
              minute: this.dayStartMinute
            },
            dayEnd: {
              hour: this.dayEndHour,
              minute: this.dayEndMinute
            },
            segmentHeight: this.hourSegmentHeight,
            weekendDays: this.weekendDays
          }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        }
        /**
         * @protected
         * @param {?} weekEvent
         * @param {?} dragEndEvent
         * @param {?} dayWidth
         * @param {?} useY
         * @return {?}
         */

      }, {
        key: "getDragMovedEventTimes",
        value: function getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY) {
          /** @type {?} */
          var daysDragged = roundToNearest(dragEndEvent.x, dayWidth) / dayWidth;
          /** @type {?} */

          var minutesMoved = useY ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize) : 0;
          /** @type {?} */

          var start = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
          /** @type {?} */

          var end;

          if (weekEvent.event.end) {
            end = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
          }

          return {
            start: start,
            end: end
          };
        }
        /**
         * @protected
         * @param {?} tempEvents
         * @param {?} adjustedEvents
         * @return {?}
         */

      }, {
        key: "restoreOriginalEvents",
        value: function restoreOriginalEvents(tempEvents, adjustedEvents) {
          /** @type {?} */
          var previousView = this.view;
          this.view = this.getWeekView(tempEvents);
          /** @type {?} */

          var adjustedEventsArray = tempEvents.filter(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return adjustedEvents.has(event);
          });
          this.view.hourColumns.forEach(
          /**
          * @param {?} column
          * @param {?} columnIndex
          * @return {?}
          */
          function (column, columnIndex) {
            previousView.hourColumns[columnIndex].hours.forEach(
            /**
            * @param {?} hour
            * @param {?} hourIndex
            * @return {?}
            */
            function (hour, hourIndex) {
              hour.segments.forEach(
              /**
              * @param {?} segment
              * @param {?} segmentIndex
              * @return {?}
              */
              function (segment, segmentIndex) {
                column.hours[hourIndex].segments[segmentIndex].cssClass = segment.cssClass;
              });
            });
            adjustedEventsArray.forEach(
            /**
            * @param {?} adjustedEvent
            * @return {?}
            */
            function (adjustedEvent) {
              /** @type {?} */
              var originalEvent = adjustedEvents.get(adjustedEvent);
              /** @type {?} */

              var existingColumnEvent = column.events.find(
              /**
              * @param {?} columnEvent
              * @return {?}
              */
              function (columnEvent) {
                return columnEvent.event === adjustedEvent;
              });

              if (existingColumnEvent) {
                // restore the original event so trackBy kicks in and the dom isn't changed
                existingColumnEvent.event = originalEvent;
              } else {
                // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                column.events.push({
                  event: originalEvent,
                  left: 0,
                  top: 0,
                  height: 0,
                  width: 0,
                  startsBeforeDay: false,
                  endsAfterDay: false
                });
              }
            });
          });
          adjustedEvents.clear();
        }
        /**
         * @protected
         * @param {?} calendarEvent
         * @param {?} resizeEvent
         * @return {?}
         */

      }, {
        key: "getTimeEventResizedDates",
        value: function getTimeEventResizedDates(calendarEvent, resizeEvent) {
          /** @type {?} */
          var minimumEventHeight = getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight);
          /** @type {?} */

          var newEventDates = {
            start: calendarEvent.start,
            end: getDefaultEventEnd(this.dateAdapter, calendarEvent, minimumEventHeight)
          };
          var end = calendarEvent.end,
              eventWithoutEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__rest"])(calendarEvent, ["end"]);
          /** @type {?} */

          var smallestResizes = {
            start: this.dateAdapter.addMinutes(newEventDates.end, minimumEventHeight * -1),
            end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, minimumEventHeight)
          };

          if (typeof resizeEvent.edges.left !== 'undefined') {
            /** @type {?} */
            var daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth);
            /** @type {?} */

            var newStart = addDaysWithExclusions(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);

            if (newStart < smallestResizes.start) {
              newEventDates.start = newStart;
            } else {
              newEventDates.start = smallestResizes.start;
            }
          } else if (typeof resizeEvent.edges.right !== 'undefined') {
            /** @type {?} */
            var _daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth);
            /** @type {?} */


            var newEnd = addDaysWithExclusions(this.dateAdapter, newEventDates.end, _daysDiff, this.excludeDays);

            if (newEnd > smallestResizes.end) {
              newEventDates.end = newEnd;
            } else {
              newEventDates.end = smallestResizes.end;
            }
          }

          if (typeof resizeEvent.edges.top !== 'undefined') {
            /** @type {?} */
            var minutesMoved = getMinutesMoved(
            /** @type {?} */
            resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            /** @type {?} */

            var _newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);

            if (_newStart < smallestResizes.start) {
              newEventDates.start = _newStart;
            } else {
              newEventDates.start = smallestResizes.start;
            }
          } else if (typeof resizeEvent.edges.bottom !== 'undefined') {
            /** @type {?} */
            var _minutesMoved = getMinutesMoved(
            /** @type {?} */
            resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            /** @type {?} */


            var _newEnd = this.dateAdapter.addMinutes(newEventDates.end, _minutesMoved);

            if (_newEnd > smallestResizes.end) {
              newEventDates.end = _newEnd;
            } else {
              newEventDates.end = smallestResizes.end;
            }
          }

          return newEventDates;
        }
      }]);

      return CalendarWeekViewComponent;
    }();

    CalendarWeekViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-week-view',
        template: "\n    <div class=\"cal-week-view\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"\n          eventDropped({ dropData: $event }, $event.newStart, true)\n        \"\n      >\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('allDay')\"\n        (dragLeave)=\"dragLeave('allDay')\"\n      >\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\"\n          ></div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\"\n          ></div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy: trackById\"\n          #eventRowContainer\n          class=\"cal-events-row\"\n        >\n          <div\n            *ngFor=\"\n              let allDayEvent of eventRow.row;\n              trackBy: trackByDayOrWeekEvent\n            \"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"\n              allDayEvent.event.draggable && allDayEventResizes.size === 0\n            \"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"(100 / days.length) * allDayEvent.offset\"\n            mwlResizable\n            [resizeSnapGrid]=\"{ left: dayColumnWidth, right: dayColumnWidth }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"\n              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\n            \"\n            (resizing)=\"\n              allDayEventResizing(allDayEvent, $event, dayColumnWidth)\n            \"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: allDayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y:\n                !snapDraggedEvents &&\n                allDayEvent.event.draggable &&\n                allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? { x: dayColumnWidth } : {}\"\n            [validateDrag]=\"validateDrag\"\n            (dragStart)=\"dragStarted(eventRowContainer, event)\"\n            (dragging)=\"allDayEventDragMove()\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.beforeStart &&\n                !allDayEvent.startsBeforeWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\"\n            ></div>\n            <mwl-calendar-week-view-event\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              (eventClicked)=\"eventClicked.emit({ event: allDayEvent.event })\"\n            >\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.afterEnd &&\n                !allDayEvent.endsAfterWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\"\n            ></div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('time')\"\n        (dragLeave)=\"dragLeave('time')\"\n      >\n        <div class=\"cal-time-label-column\" *ngIf=\"view.hourColumns.length > 0\">\n          <div\n            *ngFor=\"\n              let hour of view.hourColumns[0].hours;\n              trackBy: trackByHour;\n              let odd = odd\n            \"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\"\n          >\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\"\n            >\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns\n        >\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy: trackByHourColumn\"\n          >\n            <div\n              *ngFor=\"\n                let timeEvent of column.events;\n                trackBy: trackByDayOrWeekEvent\n              \"\n              #event\n              class=\"cal-event-container\"\n              [class.cal-draggable]=\"\n                timeEvent.event.draggable && timeEventResizes.size === 0\n              \"\n              [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n              [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n              [ngClass]=\"timeEvent.event.cssClass\"\n              [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n              [style.top.px]=\"timeEvent.top\"\n              [style.height.px]=\"timeEvent.height\"\n              [style.left.%]=\"timeEvent.left\"\n              [style.width.%]=\"timeEvent.width\"\n              mwlResizable\n              [resizeSnapGrid]=\"{\n                left: dayColumnWidth,\n                right: dayColumnWidth,\n                top: eventSnapSize || hourSegmentHeight,\n                bottom: eventSnapSize || hourSegmentHeight\n              }\"\n              [validateResize]=\"validateResize\"\n              [allowNegativeResizes]=\"true\"\n              (resizeStart)=\"\n                timeEventResizeStarted(dayColumns, timeEvent, $event)\n              \"\n              (resizing)=\"timeEventResizing(timeEvent, $event)\"\n              (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n              mwlDraggable\n              dragActiveClass=\"cal-drag-active\"\n              [dropData]=\"{ event: timeEvent.event, calendarId: calendarId }\"\n              [dragAxis]=\"{\n                x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                y: timeEvent.event.draggable && timeEventResizes.size === 0\n              }\"\n              [dragSnapGrid]=\"\n                snapDraggedEvents\n                  ? { x: dayColumnWidth, y: eventSnapSize || hourSegmentHeight }\n                  : {}\n              \"\n              [ghostDragEnabled]=\"!snapDraggedEvents\"\n              [validateDrag]=\"validateDrag\"\n              (dragStart)=\"dragStarted(dayColumns, event, timeEvent)\"\n              (dragging)=\"dragMove(timeEvent, $event)\"\n              (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\"\n            >\n              <div\n                class=\"cal-resize-handle cal-resize-handle-before-start\"\n                *ngIf=\"\n                  timeEvent.event?.resizable?.beforeStart &&\n                  !timeEvent.startsBeforeDay\n                \"\n                mwlResizeHandle\n                [resizeEdges]=\"{\n                  left: true,\n                  top: true\n                }\"\n              ></div>\n              <mwl-calendar-week-view-event\n                [weekEvent]=\"timeEvent\"\n                [tooltipPlacement]=\"tooltipPlacement\"\n                [tooltipTemplate]=\"tooltipTemplate\"\n                [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                [tooltipDelay]=\"tooltipDelay\"\n                [customTemplate]=\"eventTemplate\"\n                [eventTitleTemplate]=\"eventTitleTemplate\"\n                [eventActionsTemplate]=\"eventActionsTemplate\"\n                [column]=\"column\"\n                (eventClicked)=\"eventClicked.emit({ event: timeEvent.event })\"\n              >\n              </mwl-calendar-week-view-event>\n              <div\n                class=\"cal-resize-handle cal-resize-handle-after-end\"\n                *ngIf=\"\n                  timeEvent.event?.resizable?.afterEnd &&\n                  !timeEvent.endsAfterDay\n                \"\n                mwlResizeHandle\n                [resizeEdges]=\"{\n                  right: true,\n                  bottom: true\n                }\"\n              ></div>\n            </div>\n\n            <div\n              *ngFor=\"\n                let hour of column.hours;\n                trackBy: trackByHour;\n                let odd = odd\n              \"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\"\n            >\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"\n                  let segment of hour.segments;\n                  trackBy: trackByHourSegment\n                \"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                (mwlClick)=\"hourSegmentClicked.emit({ date: segment.date })\"\n                [clickListenerDisabled]=\"\n                  hourSegmentClicked.observers.length === 0\n                \"\n                mwlDroppable\n                [dragOverClass]=\"\n                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\n                \"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\"\n              >\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
      }]
    }];
    /** @nocollapse */

    CalendarWeekViewComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: CalendarUtils
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
        }]
      }, {
        type: DateAdapter
      }];
    };

    CalendarWeekViewComponent.propDecorators = {
      viewDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      events: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      excludeDays: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      refresh: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipPlacement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipAppendToBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      weekStartsOn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      headerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventTitleTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventActionsTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      precision: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      weekendDays: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      snapDraggedEvents: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hourSegments: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hourSegmentHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayStartHour: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayStartMinute: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayEndHour: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayEndMinute: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hourSegmentTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventSnapSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      allDayEventsLabelTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      daysInWeek: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayHeaderClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      eventClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      eventTimesChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      beforeViewRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      hourSegmentClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarWeekViewHeaderComponent = function CalendarWeekViewHeaderComponent() {
      _classCallCheck(this, CalendarWeekViewHeaderComponent);

      this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    };

    CalendarWeekViewHeaderComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-week-view-header',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-day-headers\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({ day: day })\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"\n            eventDropped.emit({\n              event: $event.dropData.event,\n              newStart: day.date\n            })\n          \"\n        >\n          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b\n          ><br />\n          <span>{{\n            day.date | calendarDate: 'weekViewColumnSubHeader':locale\n          }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        dayHeaderClicked: dayHeaderClicked,\n        eventDropped: eventDropped,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
      }]
    }];
    CalendarWeekViewHeaderComponent.propDecorators = {
      days: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayHeaderClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      eventDropped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarWeekViewEventComponent = function CalendarWeekViewEventComponent() {
      _classCallCheck(this, CalendarWeekViewEventComponent);

      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    CalendarWeekViewEventComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-week-view-event',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-column=\"column\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: weekEvent.event.color?.secondary,\n          borderColor: weekEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          !tooltipDisabled\n            ? (weekEvent.event.title\n              | calendarEventTitle: 'weekTooltip':weekEvent.event)\n            : ''\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit()\"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"week\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled,\n        tooltipDelay: tooltipDelay,\n        column: column\n      }\"\n    >\n    </ng-template>\n  "
      }]
    }];
    CalendarWeekViewEventComponent.propDecorators = {
      weekEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipPlacement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipAppendToBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventTitleTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventActionsTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      column: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarWeekViewHourSegmentComponent = function CalendarWeekViewHourSegmentComponent() {
      _classCallCheck(this, CalendarWeekViewHourSegmentComponent);
    };

    CalendarWeekViewHourSegmentComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-week-view-hour-segment',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n      let-isTimeLabel=\"isTimeLabel\"\n    >\n      <div\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\"\n      >\n        <div class=\"cal-time\" *ngIf=\"isTimeLabel\">\n          {{ segment.displayDate | calendarDate: 'weekViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight,\n        isTimeLabel: isTimeLabel\n      }\"\n    >\n    </ng-template>\n  "
      }]
    }];
    CalendarWeekViewHourSegmentComponent.propDecorators = {
      segment: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      segmentHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isTimeLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarWeekModule = function CalendarWeekModule() {
      _classCallCheck(this, CalendarWeekModule);
    };

    CalendarWeekModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__["DragAndDropModule"], CalendarCommonModule],
        declarations: [CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent],
        exports: [angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__["DragAndDropModule"], CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */

    function CalendarDayViewBeforeRenderEvent() {}

    if (false) {}
    /**
     * @hidden
     * @record
     */


    function DayViewEventResize() {}

    if (false) {}
    /**
     * Shows all events on a given day. Example usage:
     *
     * ```typescript
     * <mwl-calendar-day-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-day-view>
     * ```
     */


    var CalendarDayViewComponent = /*#__PURE__*/function () {
      /**
       * @hidden
       * @param {?} cdr
       * @param {?} utils
       * @param {?} locale
       * @param {?} dateAdapter
       */
      function CalendarDayViewComponent(cdr, utils, locale, dateAdapter) {
        _classCallCheck(this, CalendarDayViewComponent);

        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */

        this.events = [];
        /**
         * The number of segments in an hour. Must be <= 6
         */

        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */

        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */

        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */

        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */

        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */

        this.dayEndMinute = 59;
        /**
         * The width in pixels of each event on the view
         */

        this.eventWidth = 150;
        /**
         * The placement of the event tooltip
         */

        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */

        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */

        this.tooltipDelay = null;
        /**
         * Whether to snap events to a grid when dragging
         */

        this.snapDraggedEvents = true;
        /**
         * Called when an event title is clicked
         */

        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */

        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */

        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
         */

        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @hidden
         */

        this.hours = [];
        /**
         * @hidden
         */

        this.width = 0;
        /**
         * @hidden
         */

        this.currentResizes = new Map();
        /**
         * @hidden
         */

        this.eventDragEnter = 0;
        /**
         * @hidden
         */

        this.calendarId = Symbol('angular calendar day view id');
        /**
         * @hidden
         */

        this.dragAlreadyMoved = false;
        /**
         * @hidden
         */

        this.trackByEventId = trackByEventId;
        /**
         * @hidden
         */

        this.trackByHour = trackByHour;
        /**
         * @hidden
         */

        this.trackByHourSegment = trackByHourSegment;
        /**
         * @hidden
         */

        this.trackByDayEvent = trackByDayOrWeekEvent;
        this.locale = locale;
      }
      /**
       * @hidden
       * @return {?}
       */


      _createClass(CalendarDayViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(
            /**
            * @return {?}
            */
            function () {
              _this12.refreshAll();

              _this12.cdr.markForCheck();
            });
          }
        }
        /**
         * @hidden
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
          }
        }
        /**
         * @hidden
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var refreshHourGrid = changes.viewDate || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute || changes.hourSegments;
          /** @type {?} */

          var refreshView = changes.viewDate || changes.events || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute || changes.eventWidth || changes.hourSegments;

          if (refreshHourGrid) {
            this.refreshHourGrid();
          }

          if (changes.events) {
            validateEvents(this.events);
          }

          if (refreshView) {
            this.refreshView();
          }

          if (refreshHourGrid || refreshView) {
            this.emitBeforeViewRender();
          }
        }
        /**
         * @param {?} dropEvent
         * @param {?} date
         * @param {?} allDay
         * @return {?}
         */

      }, {
        key: "eventDropped",
        value: function eventDropped(dropEvent, date, allDay) {
          if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId)) {
            this.eventTimesChanged.emit({
              type: CalendarEventTimesChangedEventType.Drop,
              event: dropEvent.dropData.event,
              newStart: date,
              allDay: allDay
            });
          }
        }
        /**
         * @param {?} event
         * @param {?} resizeEvent
         * @param {?} dayEventsContainer
         * @return {?}
         */

      }, {
        key: "resizeStarted",
        value: function resizeStarted(event, resizeEvent, dayEventsContainer) {
          this.currentResizes.set(event, {
            originalTop: event.top,
            originalHeight: event.height,
            edge: typeof resizeEvent.edges.top !== 'undefined' ? 'top' : 'bottom'
          });
          /** @type {?} */

          var resizeHelper = new CalendarResizeHelper(dayEventsContainer);

          this.validateResize =
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref33) {
            var rectangle = _ref33.rectangle;
            return resizeHelper.validateResize({
              rectangle: rectangle
            });
          };

          this.cdr.markForCheck();
        }
        /**
         * @param {?} event
         * @param {?} resizeEvent
         * @return {?}
         */

      }, {
        key: "resizing",
        value: function resizing(event, resizeEvent) {
          /** @type {?} */
          var currentResize = this.currentResizes.get(event);

          if (typeof resizeEvent.edges.top !== 'undefined') {
            event.top = currentResize.originalTop + +resizeEvent.edges.top;
            event.height = currentResize.originalHeight - +resizeEvent.edges.top;
          } else if (typeof resizeEvent.edges.bottom !== 'undefined') {
            event.height = currentResize.originalHeight + +resizeEvent.edges.bottom;
          }
        }
        /**
         * @param {?} dayEvent
         * @return {?}
         */

      }, {
        key: "resizeEnded",
        value: function resizeEnded(dayEvent) {
          /** @type {?} */
          var currentResize = this.currentResizes.get(dayEvent);
          /** @type {?} */

          var resizingBeforeStart = currentResize.edge === 'top';
          /** @type {?} */

          var pixelsMoved;

          if (resizingBeforeStart) {
            pixelsMoved = dayEvent.top - currentResize.originalTop;
          } else {
            pixelsMoved = dayEvent.height - currentResize.originalHeight;
          }

          dayEvent.top = currentResize.originalTop;
          dayEvent.height = currentResize.originalHeight;
          /** @type {?} */

          var minutesMoved = getMinutesMoved(pixelsMoved, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
          /** @type {?} */

          var newStart = dayEvent.event.start;
          /** @type {?} */

          var newEnd = getDefaultEventEnd(this.dateAdapter, dayEvent.event, getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight));

          if (resizingBeforeStart) {
            newStart = this.dateAdapter.addMinutes(newStart, minutesMoved);
          } else {
            newEnd = this.dateAdapter.addMinutes(newEnd, minutesMoved);
          }

          this.eventTimesChanged.emit({
            newStart: newStart,
            newEnd: newEnd,
            event: dayEvent.event,
            type: CalendarEventTimesChangedEventType.Resize
          });
          this.currentResizes["delete"](dayEvent);
        }
        /**
         * @param {?} event
         * @param {?} dayEventsContainer
         * @param {?} dayEvent
         * @return {?}
         */

      }, {
        key: "dragStarted",
        value: function dragStarted(event, dayEventsContainer, dayEvent) {
          var _this13 = this;

          /** @type {?} */
          var dragHelper = new CalendarDragHelper(dayEventsContainer, event);

          this.validateDrag =
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref34) {
            var x = _ref34.x,
                y = _ref34.y,
                transform = _ref34.transform;
            return _this13.currentResizes.size === 0 && dragHelper.validateDrag({
              x: x,
              y: y,
              snapDraggedEvents: _this13.snapDraggedEvents,
              dragAlreadyMoved: _this13.dragAlreadyMoved,
              transform: transform
            });
          };

          this.eventDragEnter = 0;
          this.dragAlreadyMoved = false;
          this.currentDrag = {
            dayEvent: dayEvent,
            originalTop: dayEvent.top,
            originalLeft: dayEvent.left
          };
          this.cdr.markForCheck();
        }
        /**
         * @hidden
         * @param {?} coords
         * @return {?}
         */

      }, {
        key: "dragMove",
        value: function dragMove(coords) {
          this.dragAlreadyMoved = true;

          if (this.snapDraggedEvents) {
            this.currentDrag.dayEvent.top = this.currentDrag.originalTop + coords.y;
            this.currentDrag.dayEvent.left = this.currentDrag.originalLeft + coords.x;
          }
        }
        /**
         * @param {?} dayEvent
         * @param {?} dragEndEvent
         * @return {?}
         */

      }, {
        key: "dragEnded",
        value: function dragEnded(dayEvent, dragEndEvent) {
          this.currentDrag.dayEvent.top = this.currentDrag.originalTop;
          this.currentDrag.dayEvent.left = this.currentDrag.originalLeft;
          this.currentDrag = null;

          if (this.eventDragEnter > 0) {
            /** @type {?} */
            var minutesMoved = getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            /** @type {?} */

            var newStart = this.dateAdapter.addMinutes(dayEvent.event.start, minutesMoved);

            if (dragEndEvent.y < 0 && newStart < this.view.period.start) {
              minutesMoved += this.dateAdapter.differenceInMinutes(this.view.period.start, newStart);
              newStart = this.view.period.start;
            }
            /** @type {?} */


            var newEnd;

            if (dayEvent.event.end) {
              newEnd = this.dateAdapter.addMinutes(dayEvent.event.end, minutesMoved);
            }

            if (isDraggedWithinPeriod(newStart, newEnd, this.view.period)) {
              this.eventTimesChanged.emit({
                newStart: newStart,
                newEnd: newEnd,
                event: dayEvent.event,
                type: CalendarEventTimesChangedEventType.Drag,
                allDay: false
              });
            }
          }
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "refreshHourGrid",
        value: function refreshHourGrid() {
          this.hours = this.utils.getDayViewHourGrid({
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
              hour: this.dayStartHour,
              minute: this.dayStartMinute
            },
            dayEnd: {
              hour: this.dayEndHour,
              minute: this.dayEndMinute
            }
          });
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "refreshView",
        value: function refreshView() {
          this.view = this.utils.getDayView({
            events: this.events,
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
              hour: this.dayStartHour,
              minute: this.dayStartMinute
            },
            dayEnd: {
              hour: this.dayEndHour,
              minute: this.dayEndMinute
            },
            eventWidth: this.eventWidth,
            segmentHeight: this.hourSegmentHeight
          });
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "refreshAll",
        value: function refreshAll() {
          this.refreshHourGrid();
          this.refreshView();
          this.emitBeforeViewRender();
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "emitBeforeViewRender",
        value: function emitBeforeViewRender() {
          if (this.hours && this.view) {
            this.beforeViewRender.emit({
              body: {
                hourGrid: this.hours,
                allDayEvents: this.view.allDayEvents
              },
              period: this.view.period
            });
          }
        }
      }]);

      return CalendarDayViewComponent;
    }();

    CalendarDayViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-day-view',
        template: "\n    <div class=\"cal-day-view\">\n      <div\n        class=\"cal-all-day-events\"\n        mwlDroppable\n        dragOverClass=\"cal-drag-over\"\n        dragActiveClass=\"cal-drag-active\"\n        (drop)=\"eventDropped($event, view.period.start, true)\"\n      >\n        <mwl-calendar-day-view-event\n          *ngFor=\"let event of view.allDayEvents; trackBy: trackByEventId\"\n          [ngClass]=\"event.cssClass\"\n          [dayEvent]=\"{ event: event }\"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          [customTemplate]=\"eventTemplate\"\n          [eventTitleTemplate]=\"eventTitleTemplate\"\n          [eventActionsTemplate]=\"eventActionsTemplate\"\n          (eventClicked)=\"eventClicked.emit({ event: event })\"\n          [class.cal-draggable]=\"!snapDraggedEvents && event.draggable\"\n          mwlDraggable\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, calendarId: calendarId }\"\n          [dragAxis]=\"{\n            x: !snapDraggedEvents && event.draggable,\n            y: !snapDraggedEvents && event.draggable\n          }\"\n        >\n        </mwl-calendar-day-view-event>\n      </div>\n      <div\n        class=\"cal-hour-rows\"\n        #dayEventsContainer\n        mwlDroppable\n        (dragEnter)=\"eventDragEnter = eventDragEnter + 1\"\n        (dragLeave)=\"eventDragEnter = eventDragEnter - 1\"\n      >\n        <div class=\"cal-events\">\n          <div\n            #event\n            *ngFor=\"let dayEvent of view?.events; trackBy: trackByDayEvent\"\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"dayEvent.event.draggable\"\n            [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n            [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n            [ngClass]=\"dayEvent.event.cssClass\"\n            mwlResizable\n            [resizeSnapGrid]=\"{\n              top: eventSnapSize || hourSegmentHeight,\n              bottom: eventSnapSize || hourSegmentHeight\n            }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"resizeStarted(dayEvent, $event, dayEventsContainer)\"\n            (resizing)=\"resizing(dayEvent, $event)\"\n            (resizeEnd)=\"resizeEnded(dayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: dayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x:\n                !snapDraggedEvents &&\n                dayEvent.event.draggable &&\n                currentResizes.size === 0,\n              y: dayEvent.event.draggable && currentResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"\n              snapDraggedEvents ? { y: eventSnapSize || hourSegmentHeight } : {}\n            \"\n            [validateDrag]=\"validateDrag\"\n            [ghostDragEnabled]=\"!snapDraggedEvents\"\n            (dragStart)=\"dragStarted(event, dayEventsContainer, dayEvent)\"\n            (dragging)=\"dragMove($event)\"\n            (dragEnd)=\"dragEnded(dayEvent, $event)\"\n            [style.marginTop.px]=\"dayEvent.top\"\n            [style.height.px]=\"dayEvent.height\"\n            [style.marginLeft.px]=\"dayEvent.left + 70\"\n            [style.width.px]=\"dayEvent.width - 1\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                dayEvent.event?.resizable?.beforeStart &&\n                !dayEvent.startsBeforeDay\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ top: true }\"\n            ></div>\n            <mwl-calendar-day-view-event\n              [dayEvent]=\"dayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              (eventClicked)=\"eventClicked.emit({ event: dayEvent.event })\"\n            >\n            </mwl-calendar-day-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                dayEvent.event?.resizable?.afterEnd && !dayEvent.endsAfterDay\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ bottom: true }\"\n            ></div>\n          </div>\n        </div>\n        <div\n          class=\"cal-hour\"\n          *ngFor=\"let hour of hours; trackBy: trackByHour\"\n          [style.minWidth.px]=\"view?.width + 70\"\n        >\n          <mwl-calendar-day-view-hour-segment\n            *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n            [style.height.px]=\"hourSegmentHeight\"\n            [segment]=\"segment\"\n            [segmentHeight]=\"hourSegmentHeight\"\n            [locale]=\"locale\"\n            [customTemplate]=\"hourSegmentTemplate\"\n            (mwlClick)=\"hourSegmentClicked.emit({ date: segment.date })\"\n            [clickListenerDisabled]=\"hourSegmentClicked.observers.length === 0\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            dragActiveClass=\"cal-drag-active\"\n            (drop)=\"eventDropped($event, segment.date, false)\"\n          >\n          </mwl-calendar-day-view-hour-segment>\n        </div>\n      </div>\n    </div>\n  "
      }]
    }];
    /** @nocollapse */

    CalendarDayViewComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: CalendarUtils
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
        }]
      }, {
        type: DateAdapter
      }];
    };

    CalendarDayViewComponent.propDecorators = {
      viewDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      events: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hourSegments: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hourSegmentHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayStartHour: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayStartMinute: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayEndHour: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayEndMinute: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      refresh: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventSnapSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipPlacement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipAppendToBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hourSegmentTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventTitleTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventActionsTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      snapDraggedEvents: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      hourSegmentClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      eventTimesChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      beforeViewRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarDayViewHourSegmentComponent = function CalendarDayViewHourSegmentComponent() {
      _classCallCheck(this, CalendarDayViewHourSegmentComponent);
    };

    CalendarDayViewHourSegmentComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-day-view-hour-segment',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n    >\n      <div\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\"\n      >\n        <div class=\"cal-time\">\n          {{ segment.displayDate | calendarDate: 'dayViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight\n      }\"\n    >\n    </ng-template>\n  "
      }]
    }];
    CalendarDayViewHourSegmentComponent.propDecorators = {
      segment: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      segmentHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarDayViewEventComponent = function CalendarDayViewEventComponent() {
      _classCallCheck(this, CalendarDayViewEventComponent);

      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    CalendarDayViewEventComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-day-view-event',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-dayEvent=\"dayEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: dayEvent.event.color?.secondary,\n          borderColor: dayEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          dayEvent.event.title | calendarEventTitle: 'dayTooltip':dayEvent.event\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"dayEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit()\"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"day\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        dayEvent: dayEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay\n      }\"\n    >\n    </ng-template>\n  "
      }]
    }];
    CalendarDayViewEventComponent.propDecorators = {
      dayEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipPlacement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipAppendToBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventTitleTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventActionsTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarDayModule = function CalendarDayModule() {
      _classCallCheck(this, CalendarDayModule);
    };

    CalendarDayModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__["DragAndDropModule"], CalendarCommonModule],
        declarations: [CalendarDayViewComponent, CalendarDayViewHourSegmentComponent, CalendarDayViewEventComponent],
        exports: [angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__["DragAndDropModule"], CalendarDayViewComponent, CalendarDayViewHourSegmentComponent, CalendarDayViewEventComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The main module of this library. Example usage:
     *
     * ```typescript
     * import { CalenderModule } from 'angular-calendar';
     *
     * \@NgModule({
     *   imports: [
     *     CalenderModule.forRoot()
     *   ]
     * })
     * class MyModule {}
     * ```
     *
     */

    var CalendarModule = /*#__PURE__*/function () {
      function CalendarModule() {
        _classCallCheck(this, CalendarModule);
      }

      _createClass(CalendarModule, null, [{
        key: "forRoot",

        /**
         * @param {?} dateAdapter
         * @param {?=} config
         * @return {?}
         */
        value: function forRoot(dateAdapter) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return {
            ngModule: CalendarModule,
            providers: [dateAdapter, config.eventTitleFormatter || CalendarEventTitleFormatter, config.dateFormatter || CalendarDateFormatter, config.utils || CalendarUtils]
          };
        }
      }]);

      return CalendarModule;
    }();

    CalendarModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule],
        exports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=angular-calendar.js.map

    /***/
  },

  /***/
  "./node_modules/angular-draggable-droppable/fesm2015/angular-draggable-droppable.js":
  /*!******************************************************************************************!*\
    !*** ./node_modules/angular-draggable-droppable/fesm2015/angular-draggable-droppable.js ***!
    \******************************************************************************************/

  /*! exports provided: DragAndDropModule, ɵc, ɵd, ɵb, ɵa */

  /***/
  function node_modulesAngularDraggableDroppableFesm2015AngularDraggableDroppableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragAndDropModule", function () {
      return DragAndDropModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return DraggableHelper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return DraggableScrollContainerDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return DraggableDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return DroppableDirective;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @mattlewis92/dom-autoscroller */
    "./node_modules/@mattlewis92/dom-autoscroller/dist/bundle.js");
    /* harmony import */


    var _mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DraggableHelper = function DraggableHelper() {
      _classCallCheck(this, DraggableHelper);

      this.currentDrag = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    };

    DraggableHelper.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    DraggableHelper.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({
      factory: function DraggableHelper_Factory() {
        return new DraggableHelper();
      },
      token: DraggableHelper,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * If the window isn't scrollable, then place this on the scrollable container that draggable elements are inside. e.g.
     * ```html
     * <div style="overflow: scroll" mwlDraggableScrollContainer>
     * <div mwlDraggable>Drag me!</div>
     * </div>
     * ```
     */

    var DraggableScrollContainerDirective =
    /**
     * @hidden
     * @param {?} elementRef
     */
    function DraggableScrollContainerDirective(elementRef) {
      _classCallCheck(this, DraggableScrollContainerDirective);

      this.elementRef = elementRef;
      /**
       * Trigger the DragStart after a long touch in scrollable container when true
       * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
       */

      this.activeLongPressDrag = false;
      /**
       * Configuration of a long touch
       * Duration in ms of a long touch before activating DragStart
       * Delta of the
       * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
       */

      this.longPressConfig = {
        duration: 300,
        delta: 30
      };
    };

    DraggableScrollContainerDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[mwlDraggableScrollContainer]'
      }]
    }];
    /** @nocollapse */

    DraggableScrollContainerDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };

    DraggableScrollContainerDirective.propDecorators = {
      activeLongPressDrag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      longPressConfig: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} classToAdd
     * @return {?}
     */

    function addClass(renderer, element, classToAdd) {
      if (classToAdd) {
        classToAdd.split(' ').forEach(
        /**
        * @param {?} className
        * @return {?}
        */
        function (className) {
          return renderer.addClass(element.nativeElement, className);
        });
      }
    }
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} classToRemove
     * @return {?}
     */


    function removeClass(renderer, element, classToRemove) {
      if (classToRemove) {
        classToRemove.split(' ').forEach(
        /**
        * @param {?} className
        * @return {?}
        */
        function (className) {
          return renderer.removeClass(element.nativeElement, className);
        });
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DraggableDirective = /*#__PURE__*/function () {
      /**
       * @hidden
       * @param {?} element
       * @param {?} renderer
       * @param {?} draggableHelper
       * @param {?} zone
       * @param {?} vcr
       * @param {?} scrollContainer
       * @param {?} document
       */
      function DraggableDirective(element, renderer, draggableHelper, zone, vcr, scrollContainer, document) {
        _classCallCheck(this, DraggableDirective);

        this.element = element;
        this.renderer = renderer;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.vcr = vcr;
        this.scrollContainer = scrollContainer;
        this.document = document;
        /**
         * The axis along which the element is draggable
         */

        this.dragAxis = {
          x: true,
          y: true
        };
        /**
         * Snap all drags to an x / y grid
         */

        this.dragSnapGrid = {};
        /**
         * Show a ghost element that shows the drag when dragging
         */

        this.ghostDragEnabled = true;
        /**
         * Show the original element when ghostDragEnabled is true
         */

        this.showOriginalElementWhileDragging = false;
        /**
         * The cursor to use when hovering over a draggable element
         */

        this.dragCursor = '';
        /**
         * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
         */

        this.dragPointerDown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when the element has started to be dragged.
         * Only called after at least one mouse or touch move event.
         * If you call $event.cancelDrag$.emit() it will cancel the current drag
         */

        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called after the ghost element has been created
         */

        this.ghostElementCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when the element is being dragged
         */

        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called after the element is dragged
         */

        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * @hidden
         */

        this.pointerDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * @hidden
         */

        this.pointerMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * @hidden
         */

        this.pointerUp$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.eventListenerSubscriptions = {};
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.timeLongPress = {
          timerBegin: 0,
          timerEnd: 0
        };
      }
      /**
       * @return {?}
       */


      _createClass(DraggableDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.checkEventListeners();
          /** @type {?} */

          var pointerDragged$ = this.pointerDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this14.canDrag();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(
          /**
          * @param {?} pointerDownEvent
          * @return {?}
          */
          function (pointerDownEvent) {
            // fix for https://github.com/mattlewis92/angular-draggable-droppable/issues/61
            // stop mouse events propagating up the chain
            if (pointerDownEvent.event.stopPropagation && !_this14.scrollContainer) {
              pointerDownEvent.event.stopPropagation();
            } // hack to prevent text getting selected in safari while dragging

            /** @type {?} */


            var globalDragStyle = _this14.renderer.createElement('style');

            _this14.renderer.setAttribute(globalDragStyle, 'type', 'text/css');

            _this14.renderer.appendChild(globalDragStyle, _this14.renderer.createText("\n          body * {\n           -moz-user-select: none;\n           -ms-user-select: none;\n           -webkit-user-select: none;\n           user-select: none;\n          }\n        "));

            _this14.document.head.appendChild(globalDragStyle);
            /** @type {?} */


            var startScrollPosition = _this14.getScrollPosition();
            /** @type {?} */


            var scrollContainerScroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](
            /**
            * @param {?} observer
            * @return {?}
            */
            function (observer) {
              /** @type {?} */
              var scrollContainer = _this14.scrollContainer ? _this14.scrollContainer.elementRef.nativeElement : 'window';
              return _this14.renderer.listen(scrollContainer, 'scroll',
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                return observer.next(e);
              });
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(startScrollPosition), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @return {?}
            */
            function () {
              return _this14.getScrollPosition();
            }));
            /** @type {?} */

            var currentDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            /** @type {?} */

            var cancelDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();

            _this14.zone.run(
            /**
            * @return {?}
            */
            function () {
              _this14.dragPointerDown.next({
                x: 0,
                y: 0
              });
            });
            /** @type {?} */


            var dragComplete$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(_this14.pointerUp$, _this14.pointerDown$, cancelDrag$, _this14.destroy$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
            /** @type {?} */

            var pointerMove = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([_this14.pointerMove$, scrollContainerScroll$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref35) {
              var _ref36 = _slicedToArray(_ref35, 2),
                  pointerMoveEvent = _ref36[0],
                  scroll = _ref36[1];

              return {
                currentDrag$: currentDrag$,
                transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                clientX: pointerMoveEvent.clientX,
                clientY: pointerMoveEvent.clientY,
                scrollLeft: scroll.left,
                scrollTop: scroll.top
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} moveData
            * @return {?}
            */
            function (moveData) {
              if (_this14.dragSnapGrid.x) {
                moveData.transformX = Math.round(moveData.transformX / _this14.dragSnapGrid.x) * _this14.dragSnapGrid.x;
              }

              if (_this14.dragSnapGrid.y) {
                moveData.transformY = Math.round(moveData.transformY / _this14.dragSnapGrid.y) * _this14.dragSnapGrid.y;
              }

              return moveData;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} moveData
            * @return {?}
            */
            function (moveData) {
              if (!_this14.dragAxis.x) {
                moveData.transformX = 0;
              }

              if (!_this14.dragAxis.y) {
                moveData.transformY = 0;
              }

              return moveData;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} moveData
            * @return {?}
            */
            function (moveData) {
              /** @type {?} */
              var scrollX = moveData.scrollLeft - startScrollPosition.left;
              /** @type {?} */

              var scrollY = moveData.scrollTop - startScrollPosition.top;
              return Object.assign({}, moveData, {
                x: moveData.transformX + scrollX,
                y: moveData.transformY + scrollY
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref37) {
              var x = _ref37.x,
                  y = _ref37.y,
                  transformX = _ref37.transformX,
                  transformY = _ref37.transformY;
              return !_this14.validateDrag || _this14.validateDrag({
                x: x,
                y: y,
                transform: {
                  x: transformX,
                  y: transformY
                }
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(dragComplete$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
            /** @type {?} */

            var dragStarted$ = pointerMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
            /** @type {?} */

            var dragEnded$ = pointerMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeLast"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
            dragStarted$.subscribe(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref38) {
              var clientX = _ref38.clientX,
                  clientY = _ref38.clientY,
                  x = _ref38.x,
                  y = _ref38.y;

              _this14.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this14.dragStart.next({
                  cancelDrag$: cancelDrag$
                });
              });

              _this14.scroller = _mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_2___default()([_this14.scrollContainer ? _this14.scrollContainer.elementRef.nativeElement : _this14.document.defaultView], {
                margin: 20,

                /**
                 * @return {?}
                 */
                autoScroll: function autoScroll() {
                  return true;
                }
              });
              addClass(_this14.renderer, _this14.element, _this14.dragActiveClass);

              if (_this14.ghostDragEnabled) {
                /** @type {?} */
                var rect = _this14.element.nativeElement.getBoundingClientRect();
                /** @type {?} */


                var clone =
                /** @type {?} */
                _this14.element.nativeElement.cloneNode(true);

                if (!_this14.showOriginalElementWhileDragging) {
                  _this14.renderer.setStyle(_this14.element.nativeElement, 'visibility', 'hidden');
                }

                if (_this14.ghostElementAppendTo) {
                  _this14.ghostElementAppendTo.appendChild(clone);
                } else {
                  /** @type {?} */
                  _this14.element.nativeElement.parentNode.insertBefore(clone, _this14.element.nativeElement.nextSibling);
                }

                _this14.ghostElement = clone;
                _this14.document.body.style.cursor = _this14.dragCursor;

                _this14.setElementStyles(clone, {
                  position: 'fixed',
                  top: "".concat(rect.top, "px"),
                  left: "".concat(rect.left, "px"),
                  width: "".concat(rect.width, "px"),
                  height: "".concat(rect.height, "px"),
                  cursor: _this14.dragCursor,
                  margin: '0',
                  willChange: 'transform',
                  pointerEvents: 'none'
                });

                if (_this14.ghostElementTemplate) {
                  /** @type {?} */
                  var viewRef = _this14.vcr.createEmbeddedView(_this14.ghostElementTemplate);

                  clone.innerHTML = '';
                  viewRef.rootNodes.filter(
                  /**
                  * @param {?} node
                  * @return {?}
                  */
                  function (node) {
                    return node instanceof Node;
                  }).forEach(
                  /**
                  * @param {?} node
                  * @return {?}
                  */
                  function (node) {
                    clone.appendChild(node);
                  });
                  dragEnded$.subscribe(
                  /**
                  * @return {?}
                  */
                  function () {
                    _this14.vcr.remove(_this14.vcr.indexOf(viewRef));
                  });
                }

                _this14.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this14.ghostElementCreated.emit({
                    clientX: clientX - x,
                    clientY: clientY - y,
                    element: clone
                  });
                });

                dragEnded$.subscribe(
                /**
                * @return {?}
                */
                function () {
                  /** @type {?} */
                  clone.parentElement.removeChild(clone);
                  _this14.ghostElement = null;

                  _this14.renderer.setStyle(_this14.element.nativeElement, 'visibility', '');
                });
              }

              _this14.draggableHelper.currentDrag.next(currentDrag$);
            });
            dragEnded$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(
            /**
            * @param {?} dragEndData
            * @return {?}
            */
            function (dragEndData) {
              /** @type {?} */
              var dragEndData$ = cancelDrag$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["count"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
              /**
              * @param {?} calledCount
              * @return {?}
              */
              function (calledCount) {
                return Object.assign({}, dragEndData, {
                  dragCancelled: calledCount > 0
                });
              }));
              cancelDrag$.complete();
              return dragEndData$;
            })).subscribe(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref39) {
              var x = _ref39.x,
                  y = _ref39.y,
                  dragCancelled = _ref39.dragCancelled;

              _this14.scroller.destroy();

              _this14.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this14.dragEnd.next({
                  x: x,
                  y: y,
                  dragCancelled: dragCancelled
                });
              });

              removeClass(_this14.renderer, _this14.element, _this14.dragActiveClass);
              currentDrag$.complete();
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(dragComplete$, dragEnded$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this14.document.head.removeChild(globalDragStyle);
            });
            return pointerMove;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
          Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(pointerDragged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return [, value];
          })), pointerDragged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref40) {
            var _ref41 = _slicedToArray(_ref40, 2),
                previous = _ref41[0],
                next = _ref41[1];

            if (!previous) {
              return true;
            }

            return previous.x !== next.x || previous.y !== next.y;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref42) {
            var _ref43 = _slicedToArray(_ref42, 2),
                previous = _ref43[0],
                next = _ref43[1];

            return next;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_0__["animationFrameScheduler"])).subscribe(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref44) {
            var x = _ref44.x,
                y = _ref44.y,
                currentDrag$ = _ref44.currentDrag$,
                clientX = _ref44.clientX,
                clientY = _ref44.clientY,
                transformX = _ref44.transformX,
                transformY = _ref44.transformY;

            _this14.zone.run(
            /**
            * @return {?}
            */
            function () {
              _this14.dragging.next({
                x: x,
                y: y
              });
            });

            if (_this14.ghostElement) {
              /** @type {?} */
              var transform = "translate3d(".concat(transformX, "px, ").concat(transformY, "px, 0px)");

              _this14.setElementStyles(_this14.ghostElement, {
                transform: transform,
                '-webkit-transform': transform,
                '-ms-transform': transform,
                '-moz-transform': transform,
                '-o-transform': transform
              });
            }

            currentDrag$.next({
              clientX: clientX,
              clientY: clientY,
              dropData: _this14.dropData
            });
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.dragAxis) {
            this.checkEventListeners();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeEventListeners();
          this.pointerDown$.complete();
          this.pointerMove$.complete();
          this.pointerUp$.complete();
          this.destroy$.next();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "checkEventListeners",
        value: function checkEventListeners() {
          var _this15 = this;

          /** @type {?} */
          var canDrag = this.canDrag();
          /** @type {?} */

          var hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;

          if (canDrag && !hasEventListeners) {
            this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this15.eventListenerSubscriptions.mousedown = _this15.renderer.listen(_this15.element.nativeElement, 'mousedown',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this15.onMouseDown(event);
              });
              _this15.eventListenerSubscriptions.mouseup = _this15.renderer.listen('document', 'mouseup',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this15.onMouseUp(event);
              });
              _this15.eventListenerSubscriptions.touchstart = _this15.renderer.listen(_this15.element.nativeElement, 'touchstart',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this15.onTouchStart(event);
              });
              _this15.eventListenerSubscriptions.touchend = _this15.renderer.listen('document', 'touchend',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this15.onTouchEnd(event);
              });
              _this15.eventListenerSubscriptions.touchcancel = _this15.renderer.listen('document', 'touchcancel',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this15.onTouchEnd(event);
              });
              _this15.eventListenerSubscriptions.mouseenter = _this15.renderer.listen(_this15.element.nativeElement, 'mouseenter',
              /**
              * @return {?}
              */
              function () {
                _this15.onMouseEnter();
              });
              _this15.eventListenerSubscriptions.mouseleave = _this15.renderer.listen(_this15.element.nativeElement, 'mouseleave',
              /**
              * @return {?}
              */
              function () {
                _this15.onMouseLeave();
              });
            });
          } else if (!canDrag && hasEventListeners) {
            this.unsubscribeEventListeners();
          }
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onMouseDown",
        value: function onMouseDown(event) {
          var _this16 = this;

          if (event.button === 0) {
            if (!this.eventListenerSubscriptions.mousemove) {
              this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove',
              /**
              * @param {?} mouseMoveEvent
              * @return {?}
              */
              function (mouseMoveEvent) {
                _this16.pointerMove$.next({
                  event: mouseMoveEvent,
                  clientX: mouseMoveEvent.clientX,
                  clientY: mouseMoveEvent.clientY
                });
              });
            }

            this.pointerDown$.next({
              event: event,
              clientX: event.clientX,
              clientY: event.clientY
            });
          }
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onMouseUp",
        value: function onMouseUp(event) {
          if (event.button === 0) {
            if (this.eventListenerSubscriptions.mousemove) {
              this.eventListenerSubscriptions.mousemove();
              delete this.eventListenerSubscriptions.mousemove;
            }

            this.pointerUp$.next({
              event: event,
              clientX: event.clientX,
              clientY: event.clientY
            });
          }
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onTouchStart",
        value: function onTouchStart(event) {
          var _this17 = this;

          /** @type {?} */
          var startScrollPosition;
          /** @type {?} */

          var isDragActivated;
          /** @type {?} */

          var hasContainerScrollbar;

          if (this.scrollContainer && this.scrollContainer.activeLongPressDrag || this.touchStartLongPress) {
            this.timeLongPress.timerBegin = Date.now();
            isDragActivated = false;
            hasContainerScrollbar = this.hasScrollbar();
            startScrollPosition = this.getScrollPosition();
          }

          if (!this.eventListenerSubscriptions.touchmove) {
            /** @type {?} */
            var contextMenuListener = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.document, 'contextmenu').subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              e.preventDefault();
            });
            /** @type {?} */

            var touchMoveListener = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.document, 'touchmove', {
              passive: false
            }).subscribe(
            /**
            * @param {?} touchMoveEvent
            * @return {?}
            */
            function (touchMoveEvent) {
              if ((_this17.scrollContainer && _this17.scrollContainer.activeLongPressDrag || _this17.touchStartLongPress) && !isDragActivated && hasContainerScrollbar) {
                isDragActivated = _this17.shouldBeginDrag(event, touchMoveEvent, startScrollPosition);
              }

              if ((!_this17.scrollContainer || !_this17.scrollContainer.activeLongPressDrag) && !_this17.touchStartLongPress || !hasContainerScrollbar || isDragActivated) {
                touchMoveEvent.preventDefault();

                _this17.pointerMove$.next({
                  event: touchMoveEvent,
                  clientX: touchMoveEvent.targetTouches[0].clientX,
                  clientY: touchMoveEvent.targetTouches[0].clientY
                });
              }
            });

            this.eventListenerSubscriptions.touchmove =
            /**
            * @return {?}
            */
            function () {
              contextMenuListener.unsubscribe();
              touchMoveListener.unsubscribe();
            };
          }

          this.pointerDown$.next({
            event: event,
            clientX: event.touches[0].clientX,
            clientY: event.touches[0].clientY
          });
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onTouchEnd",
        value: function onTouchEnd(event) {
          if (this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove();
            delete this.eventListenerSubscriptions.touchmove;

            if (this.scrollContainer && this.scrollContainer.activeLongPressDrag || this.touchStartLongPress) {
              this.enableScroll();
            }
          }

          this.pointerUp$.next({
            event: event,
            clientX: event.changedTouches[0].clientX,
            clientY: event.changedTouches[0].clientY
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "onMouseEnter",
        value: function onMouseEnter() {
          this.setCursor(this.dragCursor);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          this.setCursor('');
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "canDrag",
        value: function canDrag() {
          return this.dragAxis.x || this.dragAxis.y;
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setCursor",
        value: function setCursor(value) {
          if (!this.eventListenerSubscriptions.mousemove) {
            this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "unsubscribeEventListeners",
        value: function unsubscribeEventListeners() {
          var _this18 = this;

          Object.keys(this.eventListenerSubscriptions).forEach(
          /**
          * @param {?} type
          * @return {?}
          */
          function (type) {
            /** @type {?} */
            _this18.eventListenerSubscriptions[type]();

            delete
            /** @type {?} */
            _this18.eventListenerSubscriptions[type];
          });
        }
        /**
         * @private
         * @param {?} element
         * @param {?} styles
         * @return {?}
         */

      }, {
        key: "setElementStyles",
        value: function setElementStyles(element, styles) {
          var _this19 = this;

          Object.keys(styles).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            _this19.renderer.setStyle(element, key, styles[key]);
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getScrollElement",
        value: function getScrollElement() {
          if (this.scrollContainer) {
            return this.scrollContainer.elementRef.nativeElement;
          } else {
            return this.document.body;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getScrollPosition",
        value: function getScrollPosition() {
          if (this.scrollContainer) {
            return {
              top: this.scrollContainer.elementRef.nativeElement.scrollTop,
              left: this.scrollContainer.elementRef.nativeElement.scrollLeft
            };
          } else {
            return {
              top: window.pageYOffset || this.document.documentElement.scrollTop,
              left: window.pageXOffset || this.document.documentElement.scrollLeft
            };
          }
        }
        /**
         * @private
         * @param {?} event
         * @param {?} touchMoveEvent
         * @param {?} startScrollPosition
         * @return {?}
         */

      }, {
        key: "shouldBeginDrag",
        value: function shouldBeginDrag(event, touchMoveEvent, startScrollPosition) {
          /** @type {?} */
          var moveScrollPosition = this.getScrollPosition();
          /** @type {?} */

          var deltaScroll = {
            top: Math.abs(moveScrollPosition.top - startScrollPosition.top),
            left: Math.abs(moveScrollPosition.left - startScrollPosition.left)
          };
          /** @type {?} */

          var deltaX = Math.abs(touchMoveEvent.targetTouches[0].clientX - event.touches[0].clientX) - deltaScroll.left;
          /** @type {?} */

          var deltaY = Math.abs(touchMoveEvent.targetTouches[0].clientY - event.touches[0].clientY) - deltaScroll.top;
          /** @type {?} */

          var deltaTotal = deltaX + deltaY;
          /** @type {?} */

          var longPressConfig = this.touchStartLongPress ? this.touchStartLongPress :
          /* istanbul ignore next */
          {
            delta: this.scrollContainer.longPressConfig.delta,
            delay: this.scrollContainer.longPressConfig.duration
          };

          if (deltaTotal > longPressConfig.delta || deltaScroll.top > 0 || deltaScroll.left > 0) {
            this.timeLongPress.timerBegin = Date.now();
          }

          this.timeLongPress.timerEnd = Date.now();
          /** @type {?} */

          var duration = this.timeLongPress.timerEnd - this.timeLongPress.timerBegin;

          if (duration >= longPressConfig.delay) {
            this.disableScroll();
            return true;
          }

          return false;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "enableScroll",
        value: function enableScroll() {
          if (this.scrollContainer) {
            this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', '');
          }

          this.renderer.setStyle(this.document.body, 'overflow', '');
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "disableScroll",
        value: function disableScroll() {
          /* istanbul ignore next */
          if (this.scrollContainer) {
            this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', 'hidden');
          }

          this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "hasScrollbar",
        value: function hasScrollbar() {
          /** @type {?} */
          var scrollContainer = this.getScrollElement();
          /** @type {?} */

          var containerHasHorizontalScroll = scrollContainer.scrollWidth > scrollContainer.clientWidth;
          /** @type {?} */

          var containerHasVerticalScroll = scrollContainer.scrollHeight > scrollContainer.clientHeight;
          return containerHasHorizontalScroll || containerHasVerticalScroll;
        }
      }]);

      return DraggableDirective;
    }();

    DraggableDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[mwlDraggable]'
      }]
    }];
    /** @nocollapse */

    DraggableDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: DraggableHelper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: DraggableScrollContainerDirective,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };

    DraggableDirective.propDecorators = {
      dropData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragAxis: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragSnapGrid: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ghostDragEnabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      showOriginalElementWhileDragging: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      validateDrag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragCursor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragActiveClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ghostElementAppendTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ghostElementTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      touchStartLongPress: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragPointerDown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      ghostElementCreated: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragging: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} clientX
     * @param {?} clientY
     * @param {?} rect
     * @return {?}
     */

    function isCoordinateWithinRectangle(clientX, clientY, rect) {
      return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
    }

    var DroppableDirective = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?} draggableHelper
       * @param {?} zone
       * @param {?} renderer
       * @param {?} scrollContainer
       */
      function DroppableDirective(element, draggableHelper, zone, renderer, scrollContainer) {
        _classCallCheck(this, DroppableDirective);

        this.element = element;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.renderer = renderer;
        this.scrollContainer = scrollContainer;
        /**
         * Called when a draggable element starts overlapping the element
         */

        this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when a draggable element stops overlapping the element
         */

        this.dragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when a draggable element is moved over the element
         */

        this.dragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when a draggable element is dropped on this element
         */

        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // tslint:disable-line no-output-named-after-standard-event
      }
      /**
       * @return {?}
       */


      _createClass(DroppableDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe(
          /**
          * @param {?} drag$
          * @return {?}
          */
          function (drag$) {
            addClass(_this20.renderer, _this20.element, _this20.dragActiveClass);
            /** @type {?} */

            var droppableElement = {
              updateCache: true
            };
            /** @type {?} */

            var deregisterScrollListener = _this20.renderer.listen(_this20.scrollContainer ? _this20.scrollContainer.elementRef.nativeElement : 'window', 'scroll',
            /**
            * @return {?}
            */
            function () {
              droppableElement.updateCache = true;
            });
            /** @type {?} */


            var currentDragDropData;
            /** @type {?} */

            var overlaps$ = drag$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref45) {
              var clientX = _ref45.clientX,
                  clientY = _ref45.clientY,
                  dropData = _ref45.dropData;
              currentDragDropData = dropData;

              if (droppableElement.updateCache) {
                droppableElement.rect = _this20.element.nativeElement.getBoundingClientRect();

                if (_this20.scrollContainer) {
                  droppableElement.scrollContainerRect = _this20.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
                }

                droppableElement.updateCache = false;
              }
              /** @type {?} */


              var isWithinElement = isCoordinateWithinRectangle(clientX, clientY,
              /** @type {?} */
              droppableElement.rect);

              if (droppableElement.scrollContainerRect) {
                return isWithinElement && isCoordinateWithinRectangle(clientX, clientY,
                /** @type {?} */
                droppableElement.scrollContainerRect);
              } else {
                return isWithinElement;
              }
            }));
            /** @type {?} */

            var overlapsChanged$ = overlaps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
            /** @type {?} */

            var dragOverActive;
            overlapsChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} overlapsNow
            * @return {?}
            */
            function (overlapsNow) {
              return overlapsNow;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              dragOverActive = true;
              addClass(_this20.renderer, _this20.element, _this20.dragOverClass);

              _this20.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this20.dragEnter.next({
                  dropData: currentDragDropData
                });
              });
            });
            overlaps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} overlapsNow
            * @return {?}
            */
            function (overlapsNow) {
              return overlapsNow;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this20.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this20.dragOver.next({
                  dropData: currentDragDropData
                });
              });
            });
            overlapsChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref46) {
              var _ref47 = _slicedToArray(_ref46, 2),
                  didOverlap = _ref47[0],
                  overlapsNow = _ref47[1];

              return didOverlap && !overlapsNow;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              dragOverActive = false;
              removeClass(_this20.renderer, _this20.element, _this20.dragOverClass);

              _this20.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this20.dragLeave.next({
                  dropData: currentDragDropData
                });
              });
            });
            drag$.subscribe({
              complete:
              /**
              * @return {?}
              */
              function complete() {
                deregisterScrollListener();
                removeClass(_this20.renderer, _this20.element, _this20.dragActiveClass);

                if (dragOverActive) {
                  removeClass(_this20.renderer, _this20.element, _this20.dragOverClass);

                  _this20.zone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    _this20.drop.next({
                      dropData: currentDragDropData
                    });
                  });
                }
              }
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.currentDragSubscription) {
            this.currentDragSubscription.unsubscribe();
          }
        }
      }]);

      return DroppableDirective;
    }();

    DroppableDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[mwlDroppable]'
      }]
    }];
    /** @nocollapse */

    DroppableDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: DraggableHelper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: DraggableScrollContainerDirective,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    DroppableDirective.propDecorators = {
      dragOverClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragActiveClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragLeave: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      drop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var DragAndDropModule = function DragAndDropModule() {
      _classCallCheck(this, DragAndDropModule);
    };

    DragAndDropModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        declarations: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective],
        exports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective]
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
    //# sourceMappingURL=angular-draggable-droppable.js.map

    /***/
  },

  /***/
  "./node_modules/angular-resizable-element/fesm2015/angular-resizable-element.js":
  /*!**************************************************************************************!*\
    !*** ./node_modules/angular-resizable-element/fesm2015/angular-resizable-element.js ***!
    \**************************************************************************************/

  /*! exports provided: ResizableDirective, ResizeHandleDirective, ResizableModule */

  /***/
  function node_modulesAngularResizableElementFesm2015AngularResizableElementJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResizableDirective", function () {
      return ResizableDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResizeHandleDirective", function () {
      return ResizeHandleDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResizableModule", function () {
      return ResizableModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value1
     * @param {?} value2
     * @param {?=} precision
     * @return {?}
     */


    function isNumberCloseTo(value1, value2) {
      var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

      /** @type {?} */
      var diff = Math.abs(value1 - value2);
      return diff < precision;
    }
    /**
     * @param {?} startingRect
     * @param {?} edges
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */


    function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
      /** @type {?} */
      var newBoundingRect = {
        top: startingRect.top,
        bottom: startingRect.bottom,
        left: startingRect.left,
        right: startingRect.right
      };

      if (edges.top) {
        newBoundingRect.top += clientY;
      }

      if (edges.bottom) {
        newBoundingRect.bottom += clientY;
      }

      if (edges.left) {
        newBoundingRect.left += clientX;
      }

      if (edges.right) {
        newBoundingRect.right += clientX;
      }

      newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
      newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
      return newBoundingRect;
    }
    /**
     * @param {?} element
     * @param {?} ghostElementPositioning
     * @return {?}
     */


    function getElementRect(element, ghostElementPositioning) {
      /** @type {?} */
      var translateX = 0;
      /** @type {?} */

      var translateY = 0;
      /** @type {?} */

      var style = element.nativeElement.style;
      /** @type {?} */

      var transformProperties = ['transform', '-ms-transform', '-moz-transform', '-o-transform'];
      /** @type {?} */

      var transform = transformProperties.map(function (property) {
        return style[property];
      }).find(function (value) {
        return !!value;
      });

      if (transform && transform.includes('translate')) {
        translateX = transform.replace(/.*translate3?d?\(([0-9]*)px, ([0-9]*)px.*/, '$1');
        translateY = transform.replace(/.*translate3?d?\(([0-9]*)px, ([0-9]*)px.*/, '$2');
      }

      if (ghostElementPositioning === 'absolute') {
        return {
          height: element.nativeElement.offsetHeight,
          width: element.nativeElement.offsetWidth,
          top: element.nativeElement.offsetTop - translateY,
          bottom: element.nativeElement.offsetHeight + element.nativeElement.offsetTop - translateY,
          left: element.nativeElement.offsetLeft - translateX,
          right: element.nativeElement.offsetWidth + element.nativeElement.offsetLeft - translateX
        };
      } else {
        /** @type {?} */
        var boundingRect = element.nativeElement.getBoundingClientRect();
        return {
          height: boundingRect.height,
          width: boundingRect.width,
          top: boundingRect.top - translateY,
          bottom: boundingRect.bottom - translateY,
          left: boundingRect.left - translateX,
          right: boundingRect.right - translateX,
          scrollTop: element.nativeElement.scrollTop,
          scrollLeft: element.nativeElement.scrollLeft
        };
      }
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function isWithinBoundingY(_ref48) {
      var clientY = _ref48.clientY,
          rect = _ref48.rect;
      return clientY >= rect.top && clientY <= rect.bottom;
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function isWithinBoundingX(_ref49) {
      var clientX = _ref49.clientX,
          rect = _ref49.rect;
      return clientX >= rect.left && clientX <= rect.right;
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function getResizeEdges(_ref50) {
      var clientX = _ref50.clientX,
          clientY = _ref50.clientY,
          elm = _ref50.elm,
          allowedEdges = _ref50.allowedEdges,
          cursorPrecision = _ref50.cursorPrecision;

      /** @type {?} */
      var elmPosition = elm.nativeElement.getBoundingClientRect();
      /** @type {?} */

      var edges = {};

      if (allowedEdges.left && isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) && isWithinBoundingY({
        clientY: clientY,
        rect: elmPosition
      })) {
        edges.left = true;
      }

      if (allowedEdges.right && isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) && isWithinBoundingY({
        clientY: clientY,
        rect: elmPosition
      })) {
        edges.right = true;
      }

      if (allowedEdges.top && isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) && isWithinBoundingX({
        clientX: clientX,
        rect: elmPosition
      })) {
        edges.top = true;
      }

      if (allowedEdges.bottom && isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) && isWithinBoundingX({
        clientX: clientX,
        rect: elmPosition
      })) {
        edges.bottom = true;
      }

      return edges;
    }
    /** @type {?} */


    var DEFAULT_RESIZE_CURSORS = Object.freeze({
      topLeft: 'nw-resize',
      topRight: 'ne-resize',
      bottomLeft: 'sw-resize',
      bottomRight: 'se-resize',
      leftOrRight: 'col-resize',
      topOrBottom: 'row-resize'
    });
    /**
     * @param {?} edges
     * @param {?} cursors
     * @return {?}
     */

    function getResizeCursor(edges, cursors) {
      if (edges.left && edges.top) {
        return cursors.topLeft;
      } else if (edges.right && edges.top) {
        return cursors.topRight;
      } else if (edges.left && edges.bottom) {
        return cursors.bottomLeft;
      } else if (edges.right && edges.bottom) {
        return cursors.bottomRight;
      } else if (edges.left || edges.right) {
        return cursors.leftOrRight;
      } else if (edges.top || edges.bottom) {
        return cursors.topOrBottom;
      } else {
        return '';
      }
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function getEdgesDiff(_ref51) {
      var edges = _ref51.edges,
          initialRectangle = _ref51.initialRectangle,
          newRectangle = _ref51.newRectangle;

      /** @type {?} */
      var edgesDiff = {};
      Object.keys(edges).forEach(function (edge) {
        edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
      });
      return edgesDiff;
    }
    /** @type {?} */


    var RESIZE_ACTIVE_CLASS = 'resize-active';
    /** @type {?} */

    var RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
    /** @type {?} */

    var RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
    /** @type {?} */

    var RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
    /** @type {?} */

    var RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
    /** @type {?} */

    var RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
    /** @type {?} */

    var MOUSE_MOVE_THROTTLE_MS = 50;
    /**
     * Place this on an element to make it resizable. For example:
     *
     * ```html
     * <div
     *   mwlResizable
     *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
     *   [enableGhostResize]="true">
     * </div>
     * ```
     */

    var ResizableDirective = /*#__PURE__*/function () {
      /**
       * @hidden
       * @param {?} platformId
       * @param {?} renderer
       * @param {?} elm
       * @param {?} zone
       */
      function ResizableDirective(platformId, renderer, elm, zone) {
        _classCallCheck(this, ResizableDirective);

        this.platformId = platformId;
        this.renderer = renderer;
        this.elm = elm;
        this.zone = zone;
        /**
         * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
         * @deprecated use a resize handle instead that positions itself to the side of the element you would like to resize
         */

        this.resizeEdges = {};
        /**
         * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
         */

        this.enableGhostResize = false;
        /**
         * A snap grid that resize events will be locked to.
         *
         * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
         */

        this.resizeSnapGrid = {};
        /**
         * The mouse cursors that will be set on the resize edges
         */

        this.resizeCursors = DEFAULT_RESIZE_CURSORS;
        /**
         * Mouse over thickness to active cursor.
         * @deprecated invalid when you migrate to use resize handles instead of setting resizeEdges on the element
         */

        this.resizeCursorPrecision = 3;
        /**
         * Define the positioning of the ghost element (can be fixed or absolute)
         */

        this.ghostElementPositioning = 'fixed';
        /**
         * Allow elements to be resized to negative dimensions
         */

        this.allowNegativeResizes = false;
        /**
         * The mouse move throttle in milliseconds, default: 50 ms
         */

        this.mouseMoveThrottleMS = MOUSE_MOVE_THROTTLE_MS;
        /**
         * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
         */

        this.resizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
         */

        this.resizing = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
         */

        this.resizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * @hidden
         */

        this.mouseup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * @hidden
         */

        this.mousedown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * @hidden
         */

        this.mousemove = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.resizeEdges$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
      }
      /**
       * @hidden
       * @return {?}
       */


      _createClass(ResizableDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          /** @type {?} */
          var mousedown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pointerEventListeners.pointerDown, this.mousedown);
          /** @type {?} */

          var mousemove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pointerEventListeners.pointerMove, this.mousemove).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_ref52) {
            var event = _ref52.event;

            if (currentResize) {
              event.preventDefault();
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
          /** @type {?} */

          var mouseup$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pointerEventListeners.pointerUp, this.mouseup);
          /** @type {?} */

          var currentResize;
          /** @type {?} */

          var removeGhostElement = function removeGhostElement() {
            if (currentResize && currentResize.clonedNode) {
              _this21.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);

              _this21.renderer.setStyle(_this21.elm.nativeElement, 'visibility', 'inherit');
            }
          };
          /** @type {?} */


          var getResizeCursors = function getResizeCursors() {
            return Object.assign({}, DEFAULT_RESIZE_CURSORS, _this21.resizeCursors);
          };

          this.resizeEdges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.resizeEdges), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this21.resizeEdges && Object.keys(_this21.resizeEdges).some(function (edge) {
              return !!_this21.resizeEdges[edge];
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (legacyResizeEdgesEnabled) {
            return legacyResizeEdgesEnabled ? mousemove$ : rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["auditTime"])(this.mouseMoveThrottleMS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (_ref53) {
            var clientX = _ref53.clientX,
                clientY = _ref53.clientY;

            /** @type {?} */
            var resizeEdges = getResizeEdges({
              clientX: clientX,
              clientY: clientY,
              elm: _this21.elm,
              allowedEdges: _this21.resizeEdges,
              cursorPrecision: _this21.resizeCursorPrecision
            });
            /** @type {?} */

            var resizeCursors = getResizeCursors();

            if (!currentResize) {
              /** @type {?} */
              var cursor = getResizeCursor(resizeEdges, resizeCursors);

              _this21.renderer.setStyle(_this21.elm.nativeElement, 'cursor', cursor);
            }

            _this21.setElementClass(_this21.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);

            _this21.setElementClass(_this21.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);

            _this21.setElementClass(_this21.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);

            _this21.setElementClass(_this21.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
          });
          /** @type {?} */

          var mousedrag = mousedown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (startCoords) {
            /**
             * @param {?} moveCoords
             * @return {?}
             */
            function getDiff(moveCoords) {
              return {
                clientX: moveCoords.clientX - startCoords.clientX,
                clientY: moveCoords.clientY - startCoords.clientY
              };
            }
            /** @type {?} */


            var getSnapGrid = function getSnapGrid() {
              /** @type {?} */
              var snapGrid = {
                x: 1,
                y: 1
              };

              if (currentResize) {
                if (_this21.resizeSnapGrid.left && currentResize.edges.left) {
                  snapGrid.x = +_this21.resizeSnapGrid.left;
                } else if (_this21.resizeSnapGrid.right && currentResize.edges.right) {
                  snapGrid.x = +_this21.resizeSnapGrid.right;
                }

                if (_this21.resizeSnapGrid.top && currentResize.edges.top) {
                  snapGrid.y = +_this21.resizeSnapGrid.top;
                } else if (_this21.resizeSnapGrid.bottom && currentResize.edges.bottom) {
                  snapGrid.y = +_this21.resizeSnapGrid.bottom;
                }
              }

              return snapGrid;
            };
            /**
             * @param {?} coords
             * @param {?} snapGrid
             * @return {?}
             */


            function getGrid(coords, snapGrid) {
              return {
                x: Math.ceil(coords.clientX / snapGrid.x),
                y: Math.ceil(coords.clientY / snapGrid.y)
              };
            }

            return (
              /** @type {?} */
              Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(mousemove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (coords) {
                return [, coords];
              })), mousemove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref54) {
                var _ref55 = _slicedToArray(_ref54, 2),
                    previousCoords = _ref55[0],
                    newCoords = _ref55[1];

                return [previousCoords ? getDiff(previousCoords) : previousCoords, getDiff(newCoords)];
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_ref56) {
                var _ref57 = _slicedToArray(_ref56, 2),
                    previousCoords = _ref57[0],
                    newCoords = _ref57[1];

                if (!previousCoords) {
                  return true;
                }
                /** @type {?} */


                var snapGrid = getSnapGrid();
                /** @type {?} */

                var previousGrid = getGrid(previousCoords, snapGrid);
                /** @type {?} */

                var newGrid = getGrid(newCoords, snapGrid);
                return previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y;
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref58) {
                var _ref59 = _slicedToArray(_ref58, 2),
                    newCoords = _ref59[1];

                /** @type {?} */
                var snapGrid = getSnapGrid();
                return {
                  clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                  clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                };
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(mouseup$, mousedown$)))
            );
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function () {
            return !!currentResize;
          }));
          mousedrag.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref60) {
            var clientX = _ref60.clientX,
                clientY = _ref60.clientY;
            return getNewBoundingRectangle(
            /** @type {?} */
            currentResize.startingRect,
            /** @type {?} */
            currentResize.edges, clientX, clientY);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (newBoundingRect) {
            return _this21.allowNegativeResizes || !!(newBoundingRect.height && newBoundingRect.width && newBoundingRect.height > 0 && newBoundingRect.width > 0);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (newBoundingRect) {
            return _this21.validateResize ? _this21.validateResize({
              rectangle: newBoundingRect,
              edges: getEdgesDiff({
                edges:
                /** @type {?} */
                currentResize.edges,
                initialRectangle:
                /** @type {?} */
                currentResize.startingRect,
                newRectangle: newBoundingRect
              })
            }) : true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (newBoundingRect) {
            if (currentResize && currentResize.clonedNode) {
              _this21.renderer.setStyle(currentResize.clonedNode, 'height', "".concat(newBoundingRect.height, "px"));

              _this21.renderer.setStyle(currentResize.clonedNode, 'width', "".concat(newBoundingRect.width, "px"));

              _this21.renderer.setStyle(currentResize.clonedNode, 'top', "".concat(newBoundingRect.top, "px"));

              _this21.renderer.setStyle(currentResize.clonedNode, 'left', "".concat(newBoundingRect.left, "px"));
            }

            _this21.zone.run(function () {
              _this21.resizing.emit({
                edges: getEdgesDiff({
                  edges:
                  /** @type {?} */
                  currentResize.edges,
                  initialRectangle:
                  /** @type {?} */
                  currentResize.startingRect,
                  newRectangle: newBoundingRect
                }),
                rectangle: newBoundingRect
              });
            });

            /** @type {?} */
            currentResize.currentRect = newBoundingRect;
          });
          mousedown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref61) {
            var clientX = _ref61.clientX,
                clientY = _ref61.clientY,
                edges = _ref61.edges;
            return edges || getResizeEdges({
              clientX: clientX,
              clientY: clientY,
              elm: _this21.elm,
              allowedEdges: _this21.resizeEdges,
              cursorPrecision: _this21.resizeCursorPrecision
            });
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (edges) {
            return Object.keys(edges).length > 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (edges) {
            if (currentResize) {
              removeGhostElement();
            }
            /** @type {?} */


            var startingRect = getElementRect(_this21.elm, _this21.ghostElementPositioning);
            currentResize = {
              edges: edges,
              startingRect: startingRect,
              currentRect: startingRect
            };
            /** @type {?} */

            var resizeCursors = getResizeCursors();
            /** @type {?} */

            var cursor = getResizeCursor(currentResize.edges, resizeCursors);

            _this21.renderer.setStyle(document.body, 'cursor', cursor);

            _this21.setElementClass(_this21.elm, RESIZE_ACTIVE_CLASS, true);

            if (_this21.enableGhostResize) {
              currentResize.clonedNode = _this21.elm.nativeElement.cloneNode(true);

              _this21.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);

              _this21.renderer.setStyle(_this21.elm.nativeElement, 'visibility', 'hidden');

              _this21.renderer.setStyle(currentResize.clonedNode, 'position', _this21.ghostElementPositioning);

              _this21.renderer.setStyle(currentResize.clonedNode, 'left', "".concat(currentResize.startingRect.left, "px"));

              _this21.renderer.setStyle(currentResize.clonedNode, 'top', "".concat(currentResize.startingRect.top, "px"));

              _this21.renderer.setStyle(currentResize.clonedNode, 'height', "".concat(currentResize.startingRect.height, "px"));

              _this21.renderer.setStyle(currentResize.clonedNode, 'width', "".concat(currentResize.startingRect.width, "px"));

              _this21.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));

              _this21.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);

              /** @type {?} */
              currentResize.clonedNode.scrollTop =
              /** @type {?} */
              currentResize.startingRect.scrollTop;

              /** @type {?} */
              currentResize.clonedNode.scrollLeft =
              /** @type {?} */
              currentResize.startingRect.scrollLeft;
            }

            _this21.zone.run(function () {
              _this21.resizeStart.emit({
                edges: getEdgesDiff({
                  edges: edges,
                  initialRectangle: startingRect,
                  newRectangle: startingRect
                }),
                rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
              });
            });
          });
          mouseup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function () {
            if (currentResize) {
              _this21.renderer.removeClass(_this21.elm.nativeElement, RESIZE_ACTIVE_CLASS);

              _this21.renderer.setStyle(document.body, 'cursor', '');

              _this21.renderer.setStyle(_this21.elm.nativeElement, 'cursor', '');

              _this21.zone.run(function () {
                _this21.resizeEnd.emit({
                  edges: getEdgesDiff({
                    edges:
                    /** @type {?} */
                    currentResize.edges,
                    initialRectangle:
                    /** @type {?} */
                    currentResize.startingRect,
                    newRectangle:
                    /** @type {?} */
                    currentResize.currentRect
                  }),
                  rectangle:
                  /** @type {?} */
                  currentResize.currentRect
                });
              });

              removeGhostElement();
              currentResize = null;
            }
          });
        }
        /**
         * @hidden
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.resizeEdges) {
            this.resizeEdges$.next(this.resizeEdges);
          }
        }
        /**
         * @hidden
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // browser check for angular universal, because it doesn't know what document is
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this.renderer.setStyle(document.body, 'cursor', '');
          }

          this.mousedown.complete();
          this.mouseup.complete();
          this.mousemove.complete();
          this.resizeEdges$.complete();
          this.destroy$.next();
        }
        /**
         * @private
         * @param {?} elm
         * @param {?} name
         * @param {?} add
         * @return {?}
         */

      }, {
        key: "setElementClass",
        value: function setElementClass(elm, name, add) {
          if (add) {
            this.renderer.addClass(elm.nativeElement, name);
          } else {
            this.renderer.removeClass(elm.nativeElement, name);
          }
        }
      }]);

      return ResizableDirective;
    }();

    ResizableDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[mwlResizable]'
      }]
    }];
    /** @nocollapse */

    ResizableDirective.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }];
    };

    ResizableDirective.propDecorators = {
      validateResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeEdges: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      enableGhostResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeSnapGrid: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeCursors: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeCursorPrecision: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ghostElementPositioning: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      allowNegativeResizes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      mouseMoveThrottleMS: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      resizing: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      resizeEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };

    var PointerEventListeners = /*#__PURE__*/function () {
      _createClass(PointerEventListeners, null, [{
        key: "getInstance",
        // tslint:disable-line

        /**
         * @param {?} renderer
         * @param {?} zone
         * @return {?}
         */
        value: function getInstance(renderer, zone) {
          if (!PointerEventListeners.instance) {
            PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
          }

          return PointerEventListeners.instance;
        }
        /**
         * @param {?} renderer
         * @param {?} zone
         */

      }]);

      function PointerEventListeners(renderer, zone) {
        _classCallCheck(this, PointerEventListeners);

        this.pointerDown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
          /** @type {?} */
          var unsubscribeMouseDown;
          /** @type {?} */

          var unsubscribeTouchStart;
          zone.runOutsideAngular(function () {
            unsubscribeMouseDown = renderer.listen('document', 'mousedown', function (event) {
              observer.next({
                clientX: event.clientX,
                clientY: event.clientY,
                event: event
              });
            });
            unsubscribeTouchStart = renderer.listen('document', 'touchstart', function (event) {
              observer.next({
                clientX: event.touches[0].clientX,
                clientY: event.touches[0].clientY,
                event: event
              });
            });
          });
          return function () {
            unsubscribeMouseDown();
            unsubscribeTouchStart();
          };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
          /** @type {?} */
          var unsubscribeMouseMove;
          /** @type {?} */

          var unsubscribeTouchMove;
          zone.runOutsideAngular(function () {
            unsubscribeMouseMove = renderer.listen('document', 'mousemove', function (event) {
              observer.next({
                clientX: event.clientX,
                clientY: event.clientY,
                event: event
              });
            });
            unsubscribeTouchMove = renderer.listen('document', 'touchmove', function (event) {
              observer.next({
                clientX: event.targetTouches[0].clientX,
                clientY: event.targetTouches[0].clientY,
                event: event
              });
            });
          });
          return function () {
            unsubscribeMouseMove();
            unsubscribeTouchMove();
          };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
          /** @type {?} */
          var unsubscribeMouseUp;
          /** @type {?} */

          var unsubscribeTouchEnd;
          /** @type {?} */

          var unsubscribeTouchCancel;
          zone.runOutsideAngular(function () {
            unsubscribeMouseUp = renderer.listen('document', 'mouseup', function (event) {
              observer.next({
                clientX: event.clientX,
                clientY: event.clientY,
                event: event
              });
            });
            unsubscribeTouchEnd = renderer.listen('document', 'touchend', function (event) {
              observer.next({
                clientX: event.changedTouches[0].clientX,
                clientY: event.changedTouches[0].clientY,
                event: event
              });
            });
            unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', function (event) {
              observer.next({
                clientX: event.changedTouches[0].clientX,
                clientY: event.changedTouches[0].clientY,
                event: event
              });
            });
          });
          return function () {
            unsubscribeMouseUp();
            unsubscribeTouchEnd();
            unsubscribeTouchCancel();
          };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
      }

      return PointerEventListeners;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
     *
     * For example
     *
     * ```html
     * <div mwlResizable>
     *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
     * </div>
     * ```
     */


    var ResizeHandleDirective = /*#__PURE__*/function () {
      /**
       * @param {?} renderer
       * @param {?} element
       * @param {?} zone
       * @param {?} resizable
       */
      function ResizeHandleDirective(renderer, element, zone, resizable) {
        _classCallCheck(this, ResizeHandleDirective);

        this.renderer = renderer;
        this.element = element;
        this.zone = zone;
        this.resizable = resizable;
        /**
         * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
         */

        this.resizeEdges = {};
        this.eventListeners = {};
      }
      /**
       * @return {?}
       */


      _createClass(ResizeHandleDirective, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeEventListeners();
        }
        /**
         * @hidden
         * @param {?} event
         * @param {?} clientX
         * @param {?} clientY
         * @return {?}
         */

      }, {
        key: "onMousedown",
        value: function onMousedown(event, clientX, clientY) {
          var _this22 = this;

          event.preventDefault();
          this.zone.runOutsideAngular(function () {
            if (!_this22.eventListeners.touchmove) {
              _this22.eventListeners.touchmove = _this22.renderer.listen(_this22.element.nativeElement, 'touchmove', function (touchMoveEvent) {
                _this22.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
              });
            }

            if (!_this22.eventListeners.mousemove) {
              _this22.eventListeners.mousemove = _this22.renderer.listen(_this22.element.nativeElement, 'mousemove', function (mouseMoveEvent) {
                _this22.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
              });
            }

            _this22.resizable.mousedown.next({
              clientX: clientX,
              clientY: clientY,
              edges: _this22.resizeEdges
            });
          });
        }
        /**
         * @hidden
         * @param {?} clientX
         * @param {?} clientY
         * @return {?}
         */

      }, {
        key: "onMouseup",
        value: function onMouseup(clientX, clientY) {
          var _this23 = this;

          this.zone.runOutsideAngular(function () {
            _this23.unsubscribeEventListeners();

            _this23.resizable.mouseup.next({
              clientX: clientX,
              clientY: clientY,
              edges: _this23.resizeEdges
            });
          });
        }
        /**
         * @private
         * @param {?} event
         * @param {?} clientX
         * @param {?} clientY
         * @return {?}
         */

      }, {
        key: "onMousemove",
        value: function onMousemove(event, clientX, clientY) {
          this.resizable.mousemove.next({
            clientX: clientX,
            clientY: clientY,
            edges: this.resizeEdges,
            event: event
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "unsubscribeEventListeners",
        value: function unsubscribeEventListeners() {
          var _this24 = this;

          Object.keys(this.eventListeners).forEach(function (type) {
            /** @type {?} */
            _this24.eventListeners[type]();

            delete _this24.eventListeners[type];
          });
        }
      }]);

      return ResizeHandleDirective;
    }();

    ResizeHandleDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[mwlResizeHandle]'
      }]
    }];
    /** @nocollapse */

    ResizeHandleDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: ResizableDirective
      }];
    };

    ResizeHandleDirective.propDecorators = {
      resizeEdges: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      onMousedown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['touchstart', ['$event', '$event.touches[0].clientX', '$event.touches[0].clientY']]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['mousedown', ['$event', '$event.clientX', '$event.clientY']]
      }],
      onMouseup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['touchend', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY']]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['touchcancel', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY']]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['mouseup', ['$event.clientX', '$event.clientY']]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ResizableModule = function ResizableModule() {
      _classCallCheck(this, ResizableModule);
    };

    ResizableModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        declarations: [ResizableDirective, ResizeHandleDirective],
        exports: [ResizableDirective, ResizeHandleDirective]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=angular-resizable-element.js.map

    /***/
  },

  /***/
  "./node_modules/array-from/index.js":
  /*!******************************************!*\
    !*** ./node_modules/array-from/index.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesArrayFromIndexJs(module, exports, __webpack_require__) {
    module.exports = typeof Array.from === 'function' ? Array.from : __webpack_require__(
    /*! ./polyfill */
    "./node_modules/array-from/polyfill.js");
    /***/
  },

  /***/
  "./node_modules/array-from/polyfill.js":
  /*!*********************************************!*\
    !*** ./node_modules/array-from/polyfill.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesArrayFromPolyfillJs(module, exports) {
    // Production steps of ECMA-262, Edition 6, 22.1.2.1
    // Reference: http://www.ecma-international.org/ecma-262/6.0/#sec-array.from
    module.exports = function () {
      var isCallable = function isCallable(fn) {
        return typeof fn === 'function';
      };

      var toInteger = function toInteger(value) {
        var number = Number(value);

        if (isNaN(number)) {
          return 0;
        }

        if (number === 0 || !isFinite(number)) {
          return number;
        }

        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
      };

      var maxSafeInteger = Math.pow(2, 53) - 1;

      var toLength = function toLength(value) {
        var len = toInteger(value);
        return Math.min(Math.max(len, 0), maxSafeInteger);
      };

      var iteratorProp = function iteratorProp(value) {
        if (value != null) {
          if (['string', 'number', 'boolean', 'symbol'].indexOf(typeof value) > -1) {
            return Symbol.iterator;
          } else if (typeof Symbol !== 'undefined' && 'iterator' in Symbol && Symbol.iterator in value) {
            return Symbol.iterator;
          } // Support "@@iterator" placeholder, Gecko 27 to Gecko 35
          else if ('@@iterator' in value) {
              return '@@iterator';
            }
        }
      };

      var getMethod = function getMethod(O, P) {
        // Assert: IsPropertyKey(P) is true.
        if (O != null && P != null) {
          // Let func be GetV(O, P).
          var func = O[P]; // ReturnIfAbrupt(func).
          // If func is either undefined or null, return undefined.

          if (func == null) {
            return void 0;
          } // If IsCallable(func) is false, throw a TypeError exception.


          if (!isCallable(func)) {
            throw new TypeError(func + ' is not a function');
          }

          return func;
        }
      };

      var iteratorStep = function iteratorStep(iterator) {
        // Let result be IteratorNext(iterator).
        // ReturnIfAbrupt(result).
        var result = iterator.next(); // Let done be IteratorComplete(result).
        // ReturnIfAbrupt(done).

        var done = Boolean(result.done); // If done is true, return false.

        if (done) {
          return false;
        } // Return result.


        return result;
      }; // The length property of the from method is 1.


      return function from(items
      /*, mapFn, thisArg */
      ) {
        'use strict'; // 1. Let C be the this value.

        var C = this; // 2. If mapfn is undefined, let mapping be false.

        var mapFn = arguments.length > 1 ? arguments[1] : void 0;
        var T;

        if (typeof mapFn !== 'undefined') {
          // 3. else
          //   a. If IsCallable(mapfn) is false, throw a TypeError exception.
          if (!isCallable(mapFn)) {
            throw new TypeError('Array.from: when provided, the second argument must be a function');
          } //   b. If thisArg was supplied, let T be thisArg; else let T
          //      be undefined.


          if (arguments.length > 2) {
            T = arguments[2];
          } //   c. Let mapping be true (implied by mapFn)

        }

        var A, k; // 4. Let usingIterator be GetMethod(items, @@iterator).
        // 5. ReturnIfAbrupt(usingIterator).

        var usingIterator = getMethod(items, iteratorProp(items)); // 6. If usingIterator is not undefined, then

        if (usingIterator !== void 0) {
          // a. If IsConstructor(C) is true, then
          //   i. Let A be the result of calling the [[Construct]]
          //      internal method of C with an empty argument list.
          // b. Else,
          //   i. Let A be the result of the abstract operation ArrayCreate
          //      with argument 0.
          // c. ReturnIfAbrupt(A).
          A = isCallable(C) ? Object(new C()) : []; // d. Let iterator be GetIterator(items, usingIterator).

          var iterator = usingIterator.call(items); // e. ReturnIfAbrupt(iterator).

          if (iterator == null) {
            throw new TypeError('Array.from requires an array-like or iterable object');
          } // f. Let k be 0.


          k = 0; // g. Repeat

          var next, nextValue;

          while (true) {
            // i. Let Pk be ToString(k).
            // ii. Let next be IteratorStep(iterator).
            // iii. ReturnIfAbrupt(next).
            next = iteratorStep(iterator); // iv. If next is false, then

            if (!next) {
              // 1. Let setStatus be Set(A, "length", k, true).
              // 2. ReturnIfAbrupt(setStatus).
              A.length = k; // 3. Return A.

              return A;
            } // v. Let nextValue be IteratorValue(next).
            // vi. ReturnIfAbrupt(nextValue)


            nextValue = next.value; // vii. If mapping is true, then
            //   1. Let mappedValue be Call(mapfn, T, «nextValue, k»).
            //   2. If mappedValue is an abrupt completion, return
            //      IteratorClose(iterator, mappedValue).
            //   3. Let mappedValue be mappedValue.[[value]].
            // viii. Else, let mappedValue be nextValue.
            // ix.  Let defineStatus be the result of
            //      CreateDataPropertyOrThrow(A, Pk, mappedValue).
            // x. [TODO] If defineStatus is an abrupt completion, return
            //    IteratorClose(iterator, defineStatus).

            if (mapFn) {
              A[k] = mapFn.call(T, nextValue, k);
            } else {
              A[k] = nextValue;
            } // xi. Increase k by 1.


            k++;
          } // 7. Assert: items is not an Iterable so assume it is
          //    an array-like object.

        } else {
          // 8. Let arrayLike be ToObject(items).
          var arrayLike = Object(items); // 9. ReturnIfAbrupt(items).

          if (items == null) {
            throw new TypeError('Array.from requires an array-like object - not null or undefined');
          } // 10. Let len be ToLength(Get(arrayLike, "length")).
          // 11. ReturnIfAbrupt(len).


          var len = toLength(arrayLike.length); // 12. If IsConstructor(C) is true, then
          //     a. Let A be Construct(C, «len»).
          // 13. Else
          //     a. Let A be ArrayCreate(len).
          // 14. ReturnIfAbrupt(A).

          A = isCallable(C) ? Object(new C(len)) : new Array(len); // 15. Let k be 0.

          k = 0; // 16. Repeat, while k < len… (also steps a - h)

          var kValue;

          while (k < len) {
            kValue = arrayLike[k];

            if (mapFn) {
              A[k] = mapFn.call(T, kValue, k);
            } else {
              A[k] = kValue;
            }

            k++;
          } // 17. Let setStatus be Set(A, "length", len, true).
          // 18. ReturnIfAbrupt(setStatus).


          A.length = len; // 19. Return A.
        }

        return A;
      };
    }();
    /***/

  },

  /***/
  "./node_modules/calendar-utils/calendar-utils.js":
  /*!*******************************************************!*\
    !*** ./node_modules/calendar-utils/calendar-utils.js ***!
    \*******************************************************/

  /*! exports provided: DAYS_OF_WEEK, SECONDS_IN_DAY, getWeekViewEventOffset, getEventsInPeriod, getWeekViewHeader, getDifferenceInDaysWithExclusions, getWeekView, getMonthView, getDayView, getDayViewHourGrid, EventValidationErrorMessage, validateEvents */

  /***/
  function node_modulesCalendarUtilsCalendarUtilsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function () {
      return DAYS_OF_WEEK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SECONDS_IN_DAY", function () {
      return SECONDS_IN_DAY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getWeekViewEventOffset", function () {
      return getWeekViewEventOffset;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getEventsInPeriod", function () {
      return getEventsInPeriod;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getWeekViewHeader", function () {
      return getWeekViewHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDifferenceInDaysWithExclusions", function () {
      return getDifferenceInDaysWithExclusions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getWeekView", function () {
      return getWeekView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMonthView", function () {
      return getMonthView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDayView", function () {
      return getDayView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDayViewHourGrid", function () {
      return getDayViewHourGrid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventValidationErrorMessage", function () {
      return EventValidationErrorMessage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateEvents", function () {
      return validateEvents;
    });

    var __assign = undefined && undefined.__assign || function () {
      __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };

    var DAYS_OF_WEEK;

    (function (DAYS_OF_WEEK) {
      DAYS_OF_WEEK[DAYS_OF_WEEK["SUNDAY"] = 0] = "SUNDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["MONDAY"] = 1] = "MONDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["TUESDAY"] = 2] = "TUESDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["WEDNESDAY"] = 3] = "WEDNESDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["THURSDAY"] = 4] = "THURSDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["FRIDAY"] = 5] = "FRIDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["SATURDAY"] = 6] = "SATURDAY";
    })(DAYS_OF_WEEK || (DAYS_OF_WEEK = {}));

    var DEFAULT_WEEKEND_DAYS = [DAYS_OF_WEEK.SUNDAY, DAYS_OF_WEEK.SATURDAY];
    var DAYS_IN_WEEK = 7;
    var HOURS_IN_DAY = 24;
    var MINUTES_IN_HOUR = 60;
    var SECONDS_IN_DAY = 60 * 60 * 24;

    function getExcludedSeconds(dateAdapter, _a) {
      var startDate = _a.startDate,
          seconds = _a.seconds,
          excluded = _a.excluded,
          _b = _a.precision,
          precision = _b === void 0 ? 'days' : _b;

      if (excluded.length < 1) {
        return 0;
      }

      var addSeconds = dateAdapter.addSeconds,
          getDay = dateAdapter.getDay,
          addDays = dateAdapter.addDays;
      var endDate = addSeconds(startDate, seconds - 1);
      var dayStart = getDay(startDate);
      var dayEnd = getDay(endDate);
      var result = 0; // Calculated in seconds

      var current = startDate;

      var _loop_1 = function _loop_1() {
        var day = getDay(current);

        if (excluded.some(function (excludedDay) {
          return excludedDay === day;
        })) {
          result += calculateExcludedSeconds(dateAdapter, {
            dayStart: dayStart,
            dayEnd: dayEnd,
            day: day,
            precision: precision,
            startDate: startDate,
            endDate: endDate
          });
        }

        current = addDays(current, 1);
      };

      while (current < endDate) {
        _loop_1();
      }

      return result;
    }

    function calculateExcludedSeconds(dateAdapter, _a) {
      var precision = _a.precision,
          day = _a.day,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd,
          startDate = _a.startDate,
          endDate = _a.endDate;
      var differenceInSeconds = dateAdapter.differenceInSeconds,
          endOfDay = dateAdapter.endOfDay,
          startOfDay = dateAdapter.startOfDay;

      if (precision === 'minutes') {
        if (day === dayStart) {
          return differenceInSeconds(endOfDay(startDate), startDate) + 1;
        } else if (day === dayEnd) {
          return differenceInSeconds(endDate, startOfDay(endDate)) + 1;
        }
      }

      return SECONDS_IN_DAY;
    }

    function getWeekViewEventSpan(dateAdapter, _a) {
      var event = _a.event,
          offset = _a.offset,
          startOfWeekDate = _a.startOfWeekDate,
          excluded = _a.excluded,
          _b = _a.precision,
          precision = _b === void 0 ? 'days' : _b,
          totalDaysInView = _a.totalDaysInView;
      var max = dateAdapter.max,
          differenceInSeconds = dateAdapter.differenceInSeconds,
          addDays = dateAdapter.addDays,
          endOfDay = dateAdapter.endOfDay,
          differenceInDays = dateAdapter.differenceInDays;
      var span = SECONDS_IN_DAY;
      var begin = max(event.start, startOfWeekDate);

      if (event.end) {
        switch (precision) {
          case 'minutes':
            span = differenceInSeconds(event.end, begin);
            break;

          default:
            span = differenceInDays(addDays(endOfDay(event.end), 1), begin) * SECONDS_IN_DAY;
            break;
        }
      }

      var offsetSeconds = offset * SECONDS_IN_DAY;
      var totalLength = offsetSeconds + span; // the best way to detect if an event is outside the week-view
      // is to check if the total span beginning (from startOfWeekDay or event start) exceeds the total days in the view

      var secondsInView = totalDaysInView * SECONDS_IN_DAY;

      if (totalLength > secondsInView) {
        span = secondsInView - offsetSeconds;
      }

      span -= getExcludedSeconds(dateAdapter, {
        startDate: begin,
        seconds: span,
        excluded: excluded,
        precision: precision
      });
      return span / SECONDS_IN_DAY;
    }

    function getWeekViewEventOffset(dateAdapter, _a) {
      var event = _a.event,
          startOfWeekDate = _a.startOfWeek,
          _b = _a.excluded,
          excluded = _b === void 0 ? [] : _b,
          _c = _a.precision,
          precision = _c === void 0 ? 'days' : _c;
      var differenceInDays = dateAdapter.differenceInDays,
          startOfDay = dateAdapter.startOfDay,
          differenceInSeconds = dateAdapter.differenceInSeconds;

      if (event.start < startOfWeekDate) {
        return 0;
      }

      var offset = 0;

      switch (precision) {
        case 'days':
          offset = differenceInDays(startOfDay(event.start), startOfWeekDate) * SECONDS_IN_DAY;
          break;

        case 'minutes':
          offset = differenceInSeconds(event.start, startOfWeekDate);
          break;
      }

      offset -= getExcludedSeconds(dateAdapter, {
        startDate: startOfWeekDate,
        seconds: offset,
        excluded: excluded,
        precision: precision
      });
      return Math.abs(offset / SECONDS_IN_DAY);
    }

    function isEventIsPeriod(dateAdapter, _a) {
      var event = _a.event,
          periodStart = _a.periodStart,
          periodEnd = _a.periodEnd;
      var isSameSecond = dateAdapter.isSameSecond;
      var eventStart = event.start;
      var eventEnd = event.end || event.start;

      if (eventStart > periodStart && eventStart < periodEnd) {
        return true;
      }

      if (eventEnd > periodStart && eventEnd < periodEnd) {
        return true;
      }

      if (eventStart < periodStart && eventEnd > periodEnd) {
        return true;
      }

      if (isSameSecond(eventStart, periodStart) || isSameSecond(eventStart, periodEnd)) {
        return true;
      }

      if (isSameSecond(eventEnd, periodStart) || isSameSecond(eventEnd, periodEnd)) {
        return true;
      }

      return false;
    }

    function getEventsInPeriod(dateAdapter, _a) {
      var events = _a.events,
          periodStart = _a.periodStart,
          periodEnd = _a.periodEnd;
      return events.filter(function (event) {
        return isEventIsPeriod(dateAdapter, {
          event: event,
          periodStart: periodStart,
          periodEnd: periodEnd
        });
      });
    }

    function getWeekDay(dateAdapter, _a) {
      var date = _a.date,
          _b = _a.weekendDays,
          weekendDays = _b === void 0 ? DEFAULT_WEEKEND_DAYS : _b;
      var startOfDay = dateAdapter.startOfDay,
          isSameDay = dateAdapter.isSameDay,
          getDay = dateAdapter.getDay;
      var today = startOfDay(new Date());
      var day = getDay(date);
      return {
        date: date,
        day: day,
        isPast: date < today,
        isToday: isSameDay(date, today),
        isFuture: date > today,
        isWeekend: weekendDays.indexOf(day) > -1
      };
    }

    function getWeekViewHeader(dateAdapter, _a) {
      var viewDate = _a.viewDate,
          weekStartsOn = _a.weekStartsOn,
          _b = _a.excluded,
          excluded = _b === void 0 ? [] : _b,
          weekendDays = _a.weekendDays,
          _c = _a.viewStart,
          viewStart = _c === void 0 ? dateAdapter.startOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      }) : _c,
          _d = _a.viewEnd,
          viewEnd = _d === void 0 ? dateAdapter.addDays(viewStart, DAYS_IN_WEEK) : _d;
      var addDays = dateAdapter.addDays,
          getDay = dateAdapter.getDay;
      var days = [];
      var date = viewStart;

      while (date < viewEnd) {
        if (!excluded.some(function (e) {
          return getDay(date) === e;
        })) {
          days.push(getWeekDay(dateAdapter, {
            date: date,
            weekendDays: weekendDays
          }));
        }

        date = addDays(date, 1);
      }

      return days;
    }

    function getDifferenceInDaysWithExclusions(dateAdapter, _a) {
      var date1 = _a.date1,
          date2 = _a.date2,
          excluded = _a.excluded;
      var date = date1;
      var diff = 0;

      while (date < date2) {
        if (excluded.indexOf(dateAdapter.getDay(date)) === -1) {
          diff++;
        }

        date = dateAdapter.addDays(date, 1);
      }

      return diff;
    }

    function getAllDayWeekEvents(dateAdapter, _a) {
      var events = _a.events,
          excluded = _a.excluded,
          precision = _a.precision,
          absolutePositionedEvents = _a.absolutePositionedEvents,
          viewStart = _a.viewStart,
          viewEnd = _a.viewEnd,
          eventsInPeriod = _a.eventsInPeriod;
      var differenceInSeconds = dateAdapter.differenceInSeconds,
          differenceInDays = dateAdapter.differenceInDays;
      var maxRange = getDifferenceInDaysWithExclusions(dateAdapter, {
        date1: viewStart,
        date2: viewEnd,
        excluded: excluded
      });
      var totalDaysInView = differenceInDays(viewEnd, viewStart) + 1;
      var eventsMapped = eventsInPeriod.filter(function (event) {
        return event.allDay;
      }).map(function (event) {
        var offset = getWeekViewEventOffset(dateAdapter, {
          event: event,
          startOfWeek: viewStart,
          excluded: excluded,
          precision: precision
        });
        var span = getWeekViewEventSpan(dateAdapter, {
          event: event,
          offset: offset,
          startOfWeekDate: viewStart,
          excluded: excluded,
          precision: precision,
          totalDaysInView: totalDaysInView
        });
        return {
          event: event,
          offset: offset,
          span: span
        };
      }).filter(function (e) {
        return e.offset < maxRange;
      }).filter(function (e) {
        return e.span > 0;
      }).map(function (entry) {
        return {
          event: entry.event,
          offset: entry.offset,
          span: entry.span,
          startsBeforeWeek: entry.event.start < viewStart,
          endsAfterWeek: (entry.event.end || entry.event.start) > viewEnd
        };
      }).sort(function (itemA, itemB) {
        var startSecondsDiff = differenceInSeconds(itemA.event.start, itemB.event.start);

        if (startSecondsDiff === 0) {
          return differenceInSeconds(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
        }

        return startSecondsDiff;
      });
      var allDayEventRows = [];
      var allocatedEvents = [];
      eventsMapped.forEach(function (event, index) {
        if (allocatedEvents.indexOf(event) === -1) {
          allocatedEvents.push(event);
          var rowSpan_1 = event.span + event.offset;
          var otherRowEvents = eventsMapped.slice(index + 1).filter(function (nextEvent) {
            if (nextEvent.offset >= rowSpan_1 && rowSpan_1 + nextEvent.span <= totalDaysInView && allocatedEvents.indexOf(nextEvent) === -1) {
              var nextEventOffset = nextEvent.offset - rowSpan_1;

              if (!absolutePositionedEvents) {
                nextEvent.offset = nextEventOffset;
              }

              rowSpan_1 += nextEvent.span + nextEventOffset;
              allocatedEvents.push(nextEvent);
              return true;
            }
          });
          var weekEvents = [event].concat(otherRowEvents);
          var id = weekEvents.filter(function (weekEvent) {
            return weekEvent.event.id;
          }).map(function (weekEvent) {
            return weekEvent.event.id;
          }).join('-');
          allDayEventRows.push(__assign({
            row: weekEvents
          }, id ? {
            id: id
          } : {}));
        }
      });
      return allDayEventRows;
    }

    function getWeekViewHourGrid(dateAdapter, _a) {
      var events = _a.events,
          viewDate = _a.viewDate,
          hourSegments = _a.hourSegments,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd,
          weekStartsOn = _a.weekStartsOn,
          excluded = _a.excluded,
          weekendDays = _a.weekendDays,
          segmentHeight = _a.segmentHeight,
          viewStart = _a.viewStart,
          viewEnd = _a.viewEnd;
      var dayViewHourGrid = getDayViewHourGrid(dateAdapter, {
        viewDate: viewDate,
        hourSegments: hourSegments,
        dayStart: dayStart,
        dayEnd: dayEnd
      });
      var weekDays = getWeekViewHeader(dateAdapter, {
        viewDate: viewDate,
        weekStartsOn: weekStartsOn,
        excluded: excluded,
        weekendDays: weekendDays,
        viewStart: viewStart,
        viewEnd: viewEnd
      });
      var setHours = dateAdapter.setHours,
          setMinutes = dateAdapter.setMinutes,
          getHours = dateAdapter.getHours,
          getMinutes = dateAdapter.getMinutes;
      return weekDays.map(function (day) {
        var dayView = getDayView(dateAdapter, {
          events: events,
          viewDate: day.date,
          hourSegments: hourSegments,
          dayStart: dayStart,
          dayEnd: dayEnd,
          segmentHeight: segmentHeight,
          eventWidth: 1
        });
        var hours = dayViewHourGrid.map(function (hour) {
          var segments = hour.segments.map(function (segment) {
            var date = setMinutes(setHours(day.date, getHours(segment.date)), getMinutes(segment.date));
            return __assign({}, segment, {
              date: date
            });
          });
          return __assign({}, hour, {
            segments: segments
          });
        });

        function getColumnCount(allEvents, prevOverlappingEvents) {
          var columnCount = Math.max.apply(Math, prevOverlappingEvents.map(function (iEvent) {
            return iEvent.left + 1;
          }));
          var nextOverlappingEvents = allEvents.filter(function (iEvent) {
            return iEvent.left >= columnCount;
          }).filter(function (iEvent) {
            return getOverLappingDayViewEvents(prevOverlappingEvents, iEvent.top, iEvent.top + iEvent.height).length > 0;
          });

          if (nextOverlappingEvents.length > 0) {
            return getColumnCount(allEvents, nextOverlappingEvents);
          } else {
            return columnCount;
          }
        }

        var mappedEvents = dayView.events.map(function (event) {
          var columnCount = getColumnCount(dayView.events, getOverLappingDayViewEvents(dayView.events, event.top, event.top + event.height));
          var width = 100 / columnCount;
          return __assign({}, event, {
            left: event.left * width,
            width: width
          });
        });
        return {
          hours: hours,
          date: day.date,
          events: mappedEvents.map(function (event) {
            var overLappingEvents = getOverLappingDayViewEvents(mappedEvents.filter(function (otherEvent) {
              return otherEvent.left > event.left;
            }), event.top, event.top + event.height);

            if (overLappingEvents.length > 0) {
              return __assign({}, event, {
                width: Math.min.apply(Math, overLappingEvents.map(function (otherEvent) {
                  return otherEvent.left;
                })) - event.left
              });
            }

            return event;
          })
        };
      });
    }

    function getWeekView(dateAdapter, _a) {
      var _b = _a.events,
          events = _b === void 0 ? [] : _b,
          viewDate = _a.viewDate,
          weekStartsOn = _a.weekStartsOn,
          _c = _a.excluded,
          excluded = _c === void 0 ? [] : _c,
          _d = _a.precision,
          precision = _d === void 0 ? 'days' : _d,
          _e = _a.absolutePositionedEvents,
          absolutePositionedEvents = _e === void 0 ? false : _e,
          hourSegments = _a.hourSegments,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd,
          weekendDays = _a.weekendDays,
          segmentHeight = _a.segmentHeight,
          _f = _a.viewStart,
          viewStart = _f === void 0 ? dateAdapter.startOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      }) : _f,
          _g = _a.viewEnd,
          viewEnd = _g === void 0 ? dateAdapter.endOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      }) : _g;

      if (!events) {
        events = [];
      }

      var startOfDay = dateAdapter.startOfDay,
          endOfDay = dateAdapter.endOfDay;
      viewStart = startOfDay(viewStart);
      viewEnd = endOfDay(viewEnd);
      var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: events,
        periodStart: viewStart,
        periodEnd: viewEnd
      });
      var header = getWeekViewHeader(dateAdapter, {
        viewDate: viewDate,
        weekStartsOn: weekStartsOn,
        excluded: excluded,
        weekendDays: weekendDays,
        viewStart: viewStart,
        viewEnd: viewEnd
      });
      return {
        allDayEventRows: getAllDayWeekEvents(dateAdapter, {
          events: events,
          excluded: excluded,
          precision: precision,
          absolutePositionedEvents: absolutePositionedEvents,
          viewStart: viewStart,
          viewEnd: viewEnd,
          eventsInPeriod: eventsInPeriod
        }),
        period: {
          events: eventsInPeriod,
          start: header[0].date,
          end: endOfDay(header[header.length - 1].date)
        },
        hourColumns: getWeekViewHourGrid(dateAdapter, {
          events: events,
          viewDate: viewDate,
          hourSegments: hourSegments,
          dayStart: dayStart,
          dayEnd: dayEnd,
          weekStartsOn: weekStartsOn,
          excluded: excluded,
          weekendDays: weekendDays,
          segmentHeight: segmentHeight,
          viewStart: viewStart,
          viewEnd: viewEnd
        })
      };
    }

    function getMonthView(dateAdapter, _a) {
      var _b = _a.events,
          events = _b === void 0 ? [] : _b,
          viewDate = _a.viewDate,
          weekStartsOn = _a.weekStartsOn,
          _c = _a.excluded,
          excluded = _c === void 0 ? [] : _c,
          _d = _a.viewStart,
          viewStart = _d === void 0 ? dateAdapter.startOfMonth(viewDate) : _d,
          _e = _a.viewEnd,
          viewEnd = _e === void 0 ? dateAdapter.endOfMonth(viewDate) : _e,
          weekendDays = _a.weekendDays;

      if (!events) {
        events = [];
      }

      var startOfWeek = dateAdapter.startOfWeek,
          endOfWeek = dateAdapter.endOfWeek,
          differenceInDays = dateAdapter.differenceInDays,
          startOfDay = dateAdapter.startOfDay,
          addHours = dateAdapter.addHours,
          endOfDay = dateAdapter.endOfDay,
          isSameMonth = dateAdapter.isSameMonth,
          getDay = dateAdapter.getDay,
          getMonth = dateAdapter.getMonth;
      var start = startOfWeek(viewStart, {
        weekStartsOn: weekStartsOn
      });
      var end = endOfWeek(viewEnd, {
        weekStartsOn: weekStartsOn
      });
      var eventsInMonth = getEventsInPeriod(dateAdapter, {
        events: events,
        periodStart: start,
        periodEnd: end
      });
      var initialViewDays = [];
      var previousDate;

      var _loop_2 = function _loop_2(i) {
        // hacky fix for https://github.com/mattlewis92/angular-calendar/issues/173
        var date;

        if (previousDate) {
          date = startOfDay(addHours(previousDate, HOURS_IN_DAY));

          if (previousDate.getTime() === date.getTime()) {
            // DST change, so need to add 25 hours

            /* istanbul ignore next */
            date = startOfDay(addHours(previousDate, HOURS_IN_DAY + 1));
          }

          previousDate = date;
        } else {
          date = previousDate = start;
        }

        if (!excluded.some(function (e) {
          return getDay(date) === e;
        })) {
          var day = getWeekDay(dateAdapter, {
            date: date,
            weekendDays: weekendDays
          });
          var eventsInPeriod = getEventsInPeriod(dateAdapter, {
            events: eventsInMonth,
            periodStart: startOfDay(date),
            periodEnd: endOfDay(date)
          });
          day.inMonth = isSameMonth(date, viewDate);
          day.events = eventsInPeriod;
          day.badgeTotal = eventsInPeriod.length;
          initialViewDays.push(day);
        }
      };

      for (var i = 0; i < differenceInDays(end, start) + 1; i++) {
        _loop_2(i);
      }

      var days = [];
      var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;

      if (totalDaysVisibleInWeek < DAYS_IN_WEEK) {
        for (var i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
          var row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
          var isRowInMonth = row.some(function (day) {
            return getMonth(day.date) === getMonth(viewDate);
          });

          if (isRowInMonth) {
            days = days.concat(row);
          }
        }
      } else {
        days = initialViewDays;
      }

      var rows = Math.floor(days.length / totalDaysVisibleInWeek);
      var rowOffsets = [];

      for (var i = 0; i < rows; i++) {
        rowOffsets.push(i * totalDaysVisibleInWeek);
      }

      return {
        rowOffsets: rowOffsets,
        totalDaysVisibleInWeek: totalDaysVisibleInWeek,
        days: days,
        period: {
          start: days[0].date,
          end: endOfDay(days[days.length - 1].date),
          events: eventsInMonth
        }
      };
    }

    function getOverLappingDayViewEvents(events, top, bottom) {
      return events.filter(function (previousEvent) {
        var previousEventTop = previousEvent.top;
        var previousEventBottom = previousEvent.top + previousEvent.height;

        if (top < previousEventBottom && previousEventBottom < bottom) {
          return true;
        } else if (top < previousEventTop && previousEventTop < bottom) {
          return true;
        } else if (previousEventTop <= top && bottom <= previousEventBottom) {
          return true;
        }

        return false;
      });
    }

    function getDayView(dateAdapter, _a) {
      var _b = _a.events,
          events = _b === void 0 ? [] : _b,
          viewDate = _a.viewDate,
          hourSegments = _a.hourSegments,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd,
          eventWidth = _a.eventWidth,
          segmentHeight = _a.segmentHeight;

      if (!events) {
        events = [];
      }

      var setMinutes = dateAdapter.setMinutes,
          setHours = dateAdapter.setHours,
          startOfDay = dateAdapter.startOfDay,
          startOfMinute = dateAdapter.startOfMinute,
          endOfDay = dateAdapter.endOfDay,
          differenceInMinutes = dateAdapter.differenceInMinutes;
      var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
      var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
      var previousDayEvents = [];
      var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: events.filter(function (event) {
          return !event.allDay;
        }),
        periodStart: startOfView,
        periodEnd: endOfView
      });
      var dayViewEvents = eventsInPeriod.sort(function (eventA, eventB) {
        return eventA.start.valueOf() - eventB.start.valueOf();
      }).map(function (event) {
        var eventStart = event.start;
        var eventEnd = event.end || eventStart;
        var startsBeforeDay = eventStart < startOfView;
        var endsAfterDay = eventEnd > endOfView;
        var hourHeightModifier = hourSegments * segmentHeight / MINUTES_IN_HOUR;
        var top = 0;

        if (eventStart > startOfView) {
          // adjust the difference in minutes if the user's offset is different between the start of the day and the event (e.g. when going to or from DST)
          var eventOffset = eventStart.getTimezoneOffset();
          var startOffset = startOfView.getTimezoneOffset();
          var diff = startOffset - eventOffset;
          top += differenceInMinutes(eventStart, startOfView) + diff;
        }

        top *= hourHeightModifier;
        var startDate = startsBeforeDay ? startOfView : eventStart;
        var endDate = endsAfterDay ? endOfView : eventEnd;
        var height = differenceInMinutes(endDate, startDate);

        if (!event.end) {
          height = segmentHeight;
        } else {
          height *= hourHeightModifier;
        }

        var bottom = top + height;
        var overlappingPreviousEvents = getOverLappingDayViewEvents(previousDayEvents, top, bottom);
        var left = 0;

        while (overlappingPreviousEvents.some(function (previousEvent) {
          return previousEvent.left === left;
        })) {
          left += eventWidth;
        }

        var dayEvent = {
          event: event,
          height: height,
          width: eventWidth,
          top: top,
          left: left,
          startsBeforeDay: startsBeforeDay,
          endsAfterDay: endsAfterDay
        };
        previousDayEvents.push(dayEvent);
        return dayEvent;
      });
      var width = Math.max.apply(Math, dayViewEvents.map(function (event) {
        return event.left + event.width;
      }));
      var allDayEvents = getEventsInPeriod(dateAdapter, {
        events: events.filter(function (event) {
          return event.allDay;
        }),
        periodStart: startOfDay(startOfView),
        periodEnd: endOfDay(endOfView)
      });
      return {
        events: dayViewEvents,
        width: width,
        allDayEvents: allDayEvents,
        period: {
          events: eventsInPeriod,
          start: startOfView,
          end: endOfView
        }
      };
    }

    function sanitiseHours(hours) {
      return Math.max(Math.min(23, hours), 0);
    }

    function sanitiseMinutes(minutes) {
      return Math.max(Math.min(59, minutes), 0);
    }

    function getDayViewHourGrid(dateAdapter, _a) {
      var viewDate = _a.viewDate,
          hourSegments = _a.hourSegments,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd;
      var setMinutes = dateAdapter.setMinutes,
          setHours = dateAdapter.setHours,
          startOfDay = dateAdapter.startOfDay,
          startOfMinute = dateAdapter.startOfMinute,
          endOfDay = dateAdapter.endOfDay,
          addMinutes = dateAdapter.addMinutes,
          addHours = dateAdapter.addHours,
          addDays = dateAdapter.addDays;
      var hours = [];
      var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
      var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
      var segmentDuration = MINUTES_IN_HOUR / hourSegments;
      var startOfViewDay = startOfDay(viewDate);
      var endOfViewDay = endOfDay(viewDate);

      var dateAdjustment = function dateAdjustment(d) {
        return d;
      }; // this means that we change from or to DST on this day and that's going to cause problems so we bump the date


      if (startOfViewDay.getTimezoneOffset() !== endOfViewDay.getTimezoneOffset()) {
        startOfViewDay = addDays(startOfViewDay, 1);
        startOfView = addDays(startOfView, 1);
        endOfView = addDays(endOfView, 1);

        dateAdjustment = function dateAdjustment(d) {
          return addDays(d, -1);
        };
      }

      for (var i = 0; i < HOURS_IN_DAY; i++) {
        var segments = [];

        for (var j = 0; j < hourSegments; j++) {
          var date = addMinutes(addHours(startOfViewDay, i), j * segmentDuration);

          if (date >= startOfView && date < endOfView) {
            segments.push({
              date: dateAdjustment(date),
              displayDate: date,
              isStart: j === 0
            });
          }
        }

        if (segments.length > 0) {
          hours.push({
            segments: segments
          });
        }
      }

      return hours;
    }

    var EventValidationErrorMessage;

    (function (EventValidationErrorMessage) {
      EventValidationErrorMessage["NotArray"] = "Events must be an array";
      EventValidationErrorMessage["StartPropertyMissing"] = "Event is missing the `start` property";
      EventValidationErrorMessage["StartPropertyNotDate"] = "Event `start` property should be a javascript date object. Do `new Date(event.start)` to fix it.";
      EventValidationErrorMessage["EndPropertyNotDate"] = "Event `end` property should be a javascript date object. Do `new Date(event.end)` to fix it.";
      EventValidationErrorMessage["EndsBeforeStart"] = "Event `start` property occurs after the `end`";
    })(EventValidationErrorMessage || (EventValidationErrorMessage = {}));

    function validateEvents(events, log) {
      var isValid = true;

      function isError(msg, event) {
        log(msg, event);
        isValid = false;
      }

      if (!Array.isArray(events)) {
        log(EventValidationErrorMessage.NotArray, events);
        return false;
      }

      events.forEach(function (event) {
        if (!event.start) {
          isError(EventValidationErrorMessage.StartPropertyMissing, event);
        } else if (!(event.start instanceof Date)) {
          isError(EventValidationErrorMessage.StartPropertyNotDate, event);
        }

        if (event.end) {
          if (!(event.end instanceof Date)) {
            isError(EventValidationErrorMessage.EndPropertyNotDate, event);
          }

          if (event.start > event.end) {
            isError(EventValidationErrorMessage.EndsBeforeStart, event);
          }
        }
      });
      return isValid;
    } //# sourceMappingURL=calendar-utils.js.map

    /***/

  },

  /***/
  "./node_modules/calendar-utils/date-adapters/date-fns/index.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/calendar-utils/date-adapters/date-fns/index.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCalendarUtilsDateAdaptersDateFnsIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var addDays = __webpack_require__(
    /*! date-fns/add_days/index */
    "./node_modules/date-fns/add_days/index.js");

    var addHours = __webpack_require__(
    /*! date-fns/add_hours/index */
    "./node_modules/date-fns/add_hours/index.js");

    var addMinutes = __webpack_require__(
    /*! date-fns/add_minutes/index */
    "./node_modules/date-fns/add_minutes/index.js");

    var addSeconds = __webpack_require__(
    /*! date-fns/add_seconds/index */
    "./node_modules/date-fns/add_seconds/index.js");

    var differenceInDays = __webpack_require__(
    /*! date-fns/difference_in_days/index */
    "./node_modules/date-fns/difference_in_days/index.js");

    var differenceInMinutes = __webpack_require__(
    /*! date-fns/difference_in_minutes/index */
    "./node_modules/date-fns/difference_in_minutes/index.js");

    var differenceInSeconds = __webpack_require__(
    /*! date-fns/difference_in_seconds/index */
    "./node_modules/date-fns/difference_in_seconds/index.js");

    var endOfDay = __webpack_require__(
    /*! date-fns/end_of_day/index */
    "./node_modules/date-fns/end_of_day/index.js");

    var endOfMonth = __webpack_require__(
    /*! date-fns/end_of_month/index */
    "./node_modules/date-fns/end_of_month/index.js");

    var endOfWeek = __webpack_require__(
    /*! date-fns/end_of_week/index */
    "./node_modules/date-fns/end_of_week/index.js");

    var getDay = __webpack_require__(
    /*! date-fns/get_day/index */
    "./node_modules/date-fns/get_day/index.js");

    var getMonth = __webpack_require__(
    /*! date-fns/get_month/index */
    "./node_modules/date-fns/get_month/index.js");

    var isSameDay = __webpack_require__(
    /*! date-fns/is_same_day/index */
    "./node_modules/date-fns/is_same_day/index.js");

    var isSameMonth = __webpack_require__(
    /*! date-fns/is_same_month/index */
    "./node_modules/date-fns/is_same_month/index.js");

    var isSameSecond = __webpack_require__(
    /*! date-fns/is_same_second/index */
    "./node_modules/date-fns/is_same_second/index.js");

    var max = __webpack_require__(
    /*! date-fns/max/index */
    "./node_modules/date-fns/max/index.js");

    var setHours = __webpack_require__(
    /*! date-fns/set_hours/index */
    "./node_modules/date-fns/set_hours/index.js");

    var setMinutes = __webpack_require__(
    /*! date-fns/set_minutes/index */
    "./node_modules/date-fns/set_minutes/index.js");

    var startOfDay = __webpack_require__(
    /*! date-fns/start_of_day/index */
    "./node_modules/date-fns/start_of_day/index.js");

    var startOfMinute = __webpack_require__(
    /*! date-fns/start_of_minute/index */
    "./node_modules/date-fns/start_of_minute/index.js");

    var startOfMonth = __webpack_require__(
    /*! date-fns/start_of_month/index */
    "./node_modules/date-fns/start_of_month/index.js");

    var startOfWeek = __webpack_require__(
    /*! date-fns/start_of_week/index */
    "./node_modules/date-fns/start_of_week/index.js");

    var getHours = __webpack_require__(
    /*! date-fns/get_hours/index */
    "./node_modules/date-fns/get_hours/index.js");

    var getMinutes = __webpack_require__(
    /*! date-fns/get_minutes/index */
    "./node_modules/date-fns/get_minutes/index.js");

    function adapterFactory() {
      return {
        addDays: addDays,
        addHours: addHours,
        addMinutes: addMinutes,
        addSeconds: addSeconds,
        differenceInDays: differenceInDays,
        differenceInMinutes: differenceInMinutes,
        differenceInSeconds: differenceInSeconds,
        endOfDay: endOfDay,
        endOfMonth: endOfMonth,
        endOfWeek: endOfWeek,
        getDay: getDay,
        getMonth: getMonth,
        isSameDay: isSameDay,
        isSameMonth: isSameMonth,
        isSameSecond: isSameSecond,
        max: max,
        setHours: setHours,
        setMinutes: setMinutes,
        startOfDay: startOfDay,
        startOfMinute: startOfMinute,
        startOfMonth: startOfMonth,
        startOfWeek: startOfWeek,
        getHours: getHours,
        getMinutes: getMinutes
      };
    }

    exports.adapterFactory = adapterFactory; //# sourceMappingURL=index.js.map

    /***/
  },

  /***/
  "./node_modules/create-point-cb/dist/bundle.js":
  /*!*****************************************************!*\
    !*** ./node_modules/create-point-cb/dist/bundle.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCreatePointCbDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    var typeFunc = __webpack_require__(
    /*! type-func */
    "./node_modules/type-func/dist/bundle.js");

    function createPointCB(object, options) {
      // A persistent object (as opposed to returned object) is used to save memory
      // This is good to prevent layout thrashing, or for games, and such
      // NOTE
      // This uses IE fixes which should be OK to remove some day. :)
      // Some speed will be gained by removal of these.
      // pointCB should be saved in a variable on return
      // This allows the usage of element.removeEventListener
      options = options || {};
      var allowUpdate = typeFunc["boolean"](options.allowUpdate, true);
      /*if(typeof options.allowUpdate === 'function'){
          allowUpdate = options.allowUpdate;
      }else{
          allowUpdate = function(){return true;};
      }*/

      return function pointCB(event) {
        event = event || window.event; // IE-ism

        object.target = event.target || event.srcElement || event.originalTarget;
        object.element = this;
        object.type = event.type;

        if (!allowUpdate(event)) {
          return;
        } // Support touch
        // http://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644


        if (event.targetTouches) {
          object.x = event.targetTouches[0].clientX;
          object.y = event.targetTouches[0].clientY;
          object.pageX = event.targetTouches[0].pageX;
          object.pageY = event.targetTouches[0].pageY;
          object.screenX = event.targetTouches[0].screenX;
          object.screenY = event.targetTouches[0].screenY;
        } else {
          // If pageX/Y aren't available and clientX/Y are,
          // calculate pageX/Y - logic taken from jQuery.
          // (This is to support old IE)
          // NOTE Hopefully this can be removed soon.
          if (event.pageX === null && event.clientX !== null) {
            var eventDoc = event.target && event.target.ownerDocument || document;
            var doc = eventDoc.documentElement;
            var body = eventDoc.body;
            object.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
            object.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
          } else {
            object.pageX = event.pageX;
            object.pageY = event.pageY;
          } // pageX, and pageY change with page scroll
          // so we're not going to use those for x, and y.
          // NOTE Most browsers also alias clientX/Y with x/y
          // so that's something to consider down the road.


          object.x = event.clientX;
          object.y = event.clientY;
          object.screenX = event.screenX;
          object.screenY = event.screenY;
        }

        object.clientX = object.x;
        object.clientY = object.y;
      }; //NOTE Remember accessibility, Aria roles, and labels.
    }
    /*
    git remote add origin https://github.com/hollowdoor/create_point_cb.git
    git push -u origin master
    */


    module.exports = createPointCB; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
    \*****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFns_libGetTimezoneOffsetInMillisecondsIndexJs(module, exports) {
    var MILLISECONDS_IN_MINUTE = 60000;
    /**
     * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
     * They usually appear for dates that denote time before the timezones were introduced
     * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
     * and GMT+01:00:00 after that date)
     *
     * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
     * which would lead to incorrect calculations.
     *
     * This function returns the timezone offset in milliseconds that takes seconds in account.
     */

    module.exports = function getTimezoneOffsetInMilliseconds(dirtyDate) {
      var date = new Date(dirtyDate.getTime());
      var baseTimezoneOffset = date.getTimezoneOffset();
      date.setSeconds(0, 0);
      var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE;
      return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
    };
    /***/

  },

  /***/
  "./node_modules/date-fns/add_days/index.js":
  /*!*************************************************!*\
    !*** ./node_modules/date-fns/add_days/index.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsAdd_daysIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Day Helpers
     * @summary Add the specified number of days to the given date.
     *
     * @description
     * Add the specified number of days to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of days to be added
     * @returns {Date} the new date with the days added
     *
     * @example
     * // Add 10 days to 1 September 2014:
     * var result = addDays(new Date(2014, 8, 1), 10)
     * //=> Thu Sep 11 2014 00:00:00
     */


    function addDays(dirtyDate, dirtyAmount) {
      var date = parse(dirtyDate);
      var amount = Number(dirtyAmount);
      date.setDate(date.getDate() + amount);
      return date;
    }

    module.exports = addDays;
    /***/
  },

  /***/
  "./node_modules/date-fns/add_hours/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/date-fns/add_hours/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsAdd_hoursIndexJs(module, exports, __webpack_require__) {
    var addMilliseconds = __webpack_require__(
    /*! ../add_milliseconds/index.js */
    "./node_modules/date-fns/add_milliseconds/index.js");

    var MILLISECONDS_IN_HOUR = 3600000;
    /**
     * @category Hour Helpers
     * @summary Add the specified number of hours to the given date.
     *
     * @description
     * Add the specified number of hours to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of hours to be added
     * @returns {Date} the new date with the hours added
     *
     * @example
     * // Add 2 hours to 10 July 2014 23:00:00:
     * var result = addHours(new Date(2014, 6, 10, 23, 0), 2)
     * //=> Fri Jul 11 2014 01:00:00
     */

    function addHours(dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR);
    }

    module.exports = addHours;
    /***/
  },

  /***/
  "./node_modules/date-fns/add_iso_years/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/date-fns/add_iso_years/index.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsAdd_iso_yearsIndexJs(module, exports, __webpack_require__) {
    var getISOYear = __webpack_require__(
    /*! ../get_iso_year/index.js */
    "./node_modules/date-fns/get_iso_year/index.js");

    var setISOYear = __webpack_require__(
    /*! ../set_iso_year/index.js */
    "./node_modules/date-fns/set_iso_year/index.js");
    /**
     * @category ISO Week-Numbering Year Helpers
     * @summary Add the specified number of ISO week-numbering years to the given date.
     *
     * @description
     * Add the specified number of ISO week-numbering years to the given date.
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of ISO week-numbering years to be added
     * @returns {Date} the new date with the ISO week-numbering years added
     *
     * @example
     * // Add 5 ISO week-numbering years to 2 July 2010:
     * var result = addISOYears(new Date(2010, 6, 2), 5)
     * //=> Fri Jun 26 2015 00:00:00
     */


    function addISOYears(dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return setISOYear(dirtyDate, getISOYear(dirtyDate) + amount);
    }

    module.exports = addISOYears;
    /***/
  },

  /***/
  "./node_modules/date-fns/add_milliseconds/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/date-fns/add_milliseconds/index.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsAdd_millisecondsIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Millisecond Helpers
     * @summary Add the specified number of milliseconds to the given date.
     *
     * @description
     * Add the specified number of milliseconds to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of milliseconds to be added
     * @returns {Date} the new date with the milliseconds added
     *
     * @example
     * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
     * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
     * //=> Thu Jul 10 2014 12:45:30.750
     */


    function addMilliseconds(dirtyDate, dirtyAmount) {
      var timestamp = parse(dirtyDate).getTime();
      var amount = Number(dirtyAmount);
      return new Date(timestamp + amount);
    }

    module.exports = addMilliseconds;
    /***/
  },

  /***/
  "./node_modules/date-fns/add_minutes/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/add_minutes/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsAdd_minutesIndexJs(module, exports, __webpack_require__) {
    var addMilliseconds = __webpack_require__(
    /*! ../add_milliseconds/index.js */
    "./node_modules/date-fns/add_milliseconds/index.js");

    var MILLISECONDS_IN_MINUTE = 60000;
    /**
     * @category Minute Helpers
     * @summary Add the specified number of minutes to the given date.
     *
     * @description
     * Add the specified number of minutes to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of minutes to be added
     * @returns {Date} the new date with the minutes added
     *
     * @example
     * // Add 30 minutes to 10 July 2014 12:00:00:
     * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
     * //=> Thu Jul 10 2014 12:30:00
     */

    function addMinutes(dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
    }

    module.exports = addMinutes;
    /***/
  },

  /***/
  "./node_modules/date-fns/add_months/index.js":
  /*!***************************************************!*\
    !*** ./node_modules/date-fns/add_months/index.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsAdd_monthsIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var getDaysInMonth = __webpack_require__(
    /*! ../get_days_in_month/index.js */
    "./node_modules/date-fns/get_days_in_month/index.js");
    /**
     * @category Month Helpers
     * @summary Add the specified number of months to the given date.
     *
     * @description
     * Add the specified number of months to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of months to be added
     * @returns {Date} the new date with the months added
     *
     * @example
     * // Add 5 months to 1 September 2014:
     * var result = addMonths(new Date(2014, 8, 1), 5)
     * //=> Sun Feb 01 2015 00:00:00
     */


    function addMonths(dirtyDate, dirtyAmount) {
      var date = parse(dirtyDate);
      var amount = Number(dirtyAmount);
      var desiredMonth = date.getMonth() + amount;
      var dateWithDesiredMonth = new Date(0);
      dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1);
      dateWithDesiredMonth.setHours(0, 0, 0, 0);
      var daysInMonth = getDaysInMonth(dateWithDesiredMonth); // Set the last day of the new month
      // if the original date was the last day of the longer month

      date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()));
      return date;
    }

    module.exports = addMonths;
    /***/
  },

  /***/
  "./node_modules/date-fns/add_quarters/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/add_quarters/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsAdd_quartersIndexJs(module, exports, __webpack_require__) {
    var addMonths = __webpack_require__(
    /*! ../add_months/index.js */
    "./node_modules/date-fns/add_months/index.js");
    /**
     * @category Quarter Helpers
     * @summary Add the specified number of year quarters to the given date.
     *
     * @description
     * Add the specified number of year quarters to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of quarters to be added
     * @returns {Date} the new date with the quarters added
     *
     * @example
     * // Add 1 quarter to 1 September 2014:
     * var result = addQuarters(new Date(2014, 8, 1), 1)
     * //=> Mon Dec 01 2014 00:00:00
     */


    function addQuarters(dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      var months = amount * 3;
      return addMonths(dirtyDate, months);
    }

    module.exports = addQuarters;
    /***/
  },

  /***/
  "./node_modules/date-fns/add_seconds/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/add_seconds/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsAdd_secondsIndexJs(module, exports, __webpack_require__) {
    var addMilliseconds = __webpack_require__(
    /*! ../add_milliseconds/index.js */
    "./node_modules/date-fns/add_milliseconds/index.js");
    /**
     * @category Second Helpers
     * @summary Add the specified number of seconds to the given date.
     *
     * @description
     * Add the specified number of seconds to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of seconds to be added
     * @returns {Date} the new date with the seconds added
     *
     * @example
     * // Add 30 seconds to 10 July 2014 12:45:00:
     * var result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
     * //=> Thu Jul 10 2014 12:45:30
     */


    function addSeconds(dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return addMilliseconds(dirtyDate, amount * 1000);
    }

    module.exports = addSeconds;
    /***/
  },

  /***/
  "./node_modules/date-fns/add_weeks/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/date-fns/add_weeks/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsAdd_weeksIndexJs(module, exports, __webpack_require__) {
    var addDays = __webpack_require__(
    /*! ../add_days/index.js */
    "./node_modules/date-fns/add_days/index.js");
    /**
     * @category Week Helpers
     * @summary Add the specified number of weeks to the given date.
     *
     * @description
     * Add the specified number of week to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of weeks to be added
     * @returns {Date} the new date with the weeks added
     *
     * @example
     * // Add 4 weeks to 1 September 2014:
     * var result = addWeeks(new Date(2014, 8, 1), 4)
     * //=> Mon Sep 29 2014 00:00:00
     */


    function addWeeks(dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      var days = amount * 7;
      return addDays(dirtyDate, days);
    }

    module.exports = addWeeks;
    /***/
  },

  /***/
  "./node_modules/date-fns/add_years/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/date-fns/add_years/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsAdd_yearsIndexJs(module, exports, __webpack_require__) {
    var addMonths = __webpack_require__(
    /*! ../add_months/index.js */
    "./node_modules/date-fns/add_months/index.js");
    /**
     * @category Year Helpers
     * @summary Add the specified number of years to the given date.
     *
     * @description
     * Add the specified number of years to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of years to be added
     * @returns {Date} the new date with the years added
     *
     * @example
     * // Add 5 years to 1 September 2014:
     * var result = addYears(new Date(2014, 8, 1), 5)
     * //=> Sun Sep 01 2019 00:00:00
     */


    function addYears(dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return addMonths(dirtyDate, amount * 12);
    }

    module.exports = addYears;
    /***/
  },

  /***/
  "./node_modules/date-fns/are_ranges_overlapping/index.js":
  /*!***************************************************************!*\
    !*** ./node_modules/date-fns/are_ranges_overlapping/index.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsAre_ranges_overlappingIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Range Helpers
     * @summary Is the given date range overlapping with another date range?
     *
     * @description
     * Is the given date range overlapping with another date range?
     *
     * @param {Date|String|Number} initialRangeStartDate - the start of the initial range
     * @param {Date|String|Number} initialRangeEndDate - the end of the initial range
     * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with
     * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with
     * @returns {Boolean} whether the date ranges are overlapping
     * @throws {Error} startDate of a date range cannot be after its endDate
     *
     * @example
     * // For overlapping date ranges:
     * areRangesOverlapping(
     *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)
     * )
     * //=> true
     *
     * @example
     * // For non-overlapping date ranges:
     * areRangesOverlapping(
     *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)
     * )
     * //=> false
     */


    function areRangesOverlapping(dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {
      var initialStartTime = parse(dirtyInitialRangeStartDate).getTime();
      var initialEndTime = parse(dirtyInitialRangeEndDate).getTime();
      var comparedStartTime = parse(dirtyComparedRangeStartDate).getTime();
      var comparedEndTime = parse(dirtyComparedRangeEndDate).getTime();

      if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {
        throw new Error('The start of the range cannot be after the end of the range');
      }

      return initialStartTime < comparedEndTime && comparedStartTime < initialEndTime;
    }

    module.exports = areRangesOverlapping;
    /***/
  },

  /***/
  "./node_modules/date-fns/closest_index_to/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/date-fns/closest_index_to/index.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsClosest_index_toIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Common Helpers
     * @summary Return an index of the closest date from the array comparing to the given date.
     *
     * @description
     * Return an index of the closest date from the array comparing to the given date.
     *
     * @param {Date|String|Number} dateToCompare - the date to compare with
     * @param {Date[]|String[]|Number[]} datesArray - the array to search
     * @returns {Number} an index of the date closest to the given date
     * @throws {TypeError} the second argument must be an instance of Array
     *
     * @example
     * // Which date is closer to 6 September 2015?
     * var dateToCompare = new Date(2015, 8, 6)
     * var datesArray = [
     *   new Date(2015, 0, 1),
     *   new Date(2016, 0, 1),
     *   new Date(2017, 0, 1)
     * ]
     * var result = closestIndexTo(dateToCompare, datesArray)
     * //=> 1
     */


    function closestIndexTo(dirtyDateToCompare, dirtyDatesArray) {
      if (!(dirtyDatesArray instanceof Array)) {
        throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array');
      }

      var dateToCompare = parse(dirtyDateToCompare);
      var timeToCompare = dateToCompare.getTime();
      var result;
      var minDistance;
      dirtyDatesArray.forEach(function (dirtyDate, index) {
        var currentDate = parse(dirtyDate);
        var distance = Math.abs(timeToCompare - currentDate.getTime());

        if (result === undefined || distance < minDistance) {
          result = index;
          minDistance = distance;
        }
      });
      return result;
    }

    module.exports = closestIndexTo;
    /***/
  },

  /***/
  "./node_modules/date-fns/closest_to/index.js":
  /*!***************************************************!*\
    !*** ./node_modules/date-fns/closest_to/index.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsClosest_toIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Common Helpers
     * @summary Return a date from the array closest to the given date.
     *
     * @description
     * Return a date from the array closest to the given date.
     *
     * @param {Date|String|Number} dateToCompare - the date to compare with
     * @param {Date[]|String[]|Number[]} datesArray - the array to search
     * @returns {Date} the date from the array closest to the given date
     * @throws {TypeError} the second argument must be an instance of Array
     *
     * @example
     * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
     * var dateToCompare = new Date(2015, 8, 6)
     * var result = closestTo(dateToCompare, [
     *   new Date(2000, 0, 1),
     *   new Date(2030, 0, 1)
     * ])
     * //=> Tue Jan 01 2030 00:00:00
     */


    function closestTo(dirtyDateToCompare, dirtyDatesArray) {
      if (!(dirtyDatesArray instanceof Array)) {
        throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array');
      }

      var dateToCompare = parse(dirtyDateToCompare);
      var timeToCompare = dateToCompare.getTime();
      var result;
      var minDistance;
      dirtyDatesArray.forEach(function (dirtyDate) {
        var currentDate = parse(dirtyDate);
        var distance = Math.abs(timeToCompare - currentDate.getTime());

        if (result === undefined || distance < minDistance) {
          result = currentDate;
          minDistance = distance;
        }
      });
      return result;
    }

    module.exports = closestTo;
    /***/
  },

  /***/
  "./node_modules/date-fns/compare_asc/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/compare_asc/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsCompare_ascIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Common Helpers
     * @summary Compare the two dates and return -1, 0 or 1.
     *
     * @description
     * Compare the two dates and return 1 if the first date is after the second,
     * -1 if the first date is before the second or 0 if dates are equal.
     *
     * @param {Date|String|Number} dateLeft - the first date to compare
     * @param {Date|String|Number} dateRight - the second date to compare
     * @returns {Number} the result of the comparison
     *
     * @example
     * // Compare 11 February 1987 and 10 July 1989:
     * var result = compareAsc(
     *   new Date(1987, 1, 11),
     *   new Date(1989, 6, 10)
     * )
     * //=> -1
     *
     * @example
     * // Sort the array of dates:
     * var result = [
     *   new Date(1995, 6, 2),
     *   new Date(1987, 1, 11),
     *   new Date(1989, 6, 10)
     * ].sort(compareAsc)
     * //=> [
     * //   Wed Feb 11 1987 00:00:00,
     * //   Mon Jul 10 1989 00:00:00,
     * //   Sun Jul 02 1995 00:00:00
     * // ]
     */


    function compareAsc(dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse(dirtyDateLeft);
      var timeLeft = dateLeft.getTime();
      var dateRight = parse(dirtyDateRight);
      var timeRight = dateRight.getTime();

      if (timeLeft < timeRight) {
        return -1;
      } else if (timeLeft > timeRight) {
        return 1;
      } else {
        return 0;
      }
    }

    module.exports = compareAsc;
    /***/
  },

  /***/
  "./node_modules/date-fns/compare_desc/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/compare_desc/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsCompare_descIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Common Helpers
     * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
     *
     * @description
     * Compare the two dates and return -1 if the first date is after the second,
     * 1 if the first date is before the second or 0 if dates are equal.
     *
     * @param {Date|String|Number} dateLeft - the first date to compare
     * @param {Date|String|Number} dateRight - the second date to compare
     * @returns {Number} the result of the comparison
     *
     * @example
     * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
     * var result = compareDesc(
     *   new Date(1987, 1, 11),
     *   new Date(1989, 6, 10)
     * )
     * //=> 1
     *
     * @example
     * // Sort the array of dates in reverse chronological order:
     * var result = [
     *   new Date(1995, 6, 2),
     *   new Date(1987, 1, 11),
     *   new Date(1989, 6, 10)
     * ].sort(compareDesc)
     * //=> [
     * //   Sun Jul 02 1995 00:00:00,
     * //   Mon Jul 10 1989 00:00:00,
     * //   Wed Feb 11 1987 00:00:00
     * // ]
     */


    function compareDesc(dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse(dirtyDateLeft);
      var timeLeft = dateLeft.getTime();
      var dateRight = parse(dirtyDateRight);
      var timeRight = dateRight.getTime();

      if (timeLeft > timeRight) {
        return -1;
      } else if (timeLeft < timeRight) {
        return 1;
      } else {
        return 0;
      }
    }

    module.exports = compareDesc;
    /***/
  },

  /***/
  "./node_modules/date-fns/difference_in_calendar_days/index.js":
  /*!********************************************************************!*\
    !*** ./node_modules/date-fns/difference_in_calendar_days/index.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDifference_in_calendar_daysIndexJs(module, exports, __webpack_require__) {
    var startOfDay = __webpack_require__(
    /*! ../start_of_day/index.js */
    "./node_modules/date-fns/start_of_day/index.js");

    var MILLISECONDS_IN_MINUTE = 60000;
    var MILLISECONDS_IN_DAY = 86400000;
    /**
     * @category Day Helpers
     * @summary Get the number of calendar days between the given dates.
     *
     * @description
     * Get the number of calendar days between the given dates.
     *
     * @param {Date|String|Number} dateLeft - the later date
     * @param {Date|String|Number} dateRight - the earlier date
     * @returns {Number} the number of calendar days
     *
     * @example
     * // How many calendar days are between
     * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
     * var result = differenceInCalendarDays(
     *   new Date(2012, 6, 2, 0, 0),
     *   new Date(2011, 6, 2, 23, 0)
     * )
     * //=> 366
     */

    function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
      var startOfDayLeft = startOfDay(dirtyDateLeft);
      var startOfDayRight = startOfDay(dirtyDateRight);
      var timestampLeft = startOfDayLeft.getTime() - startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
      var timestampRight = startOfDayRight.getTime() - startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE; // Round the number of days to the nearest integer
      // because the number of milliseconds in a day is not constant
      // (e.g. it's different in the day of the daylight saving time clock shift)

      return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
    }

    module.exports = differenceInCalendarDays;
    /***/
  },

  /***/
  "./node_modules/date-fns/difference_in_calendar_iso_weeks/index.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/date-fns/difference_in_calendar_iso_weeks/index.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDifference_in_calendar_iso_weeksIndexJs(module, exports, __webpack_require__) {
    var startOfISOWeek = __webpack_require__(
    /*! ../start_of_iso_week/index.js */
    "./node_modules/date-fns/start_of_iso_week/index.js");

    var MILLISECONDS_IN_MINUTE = 60000;
    var MILLISECONDS_IN_WEEK = 604800000;
    /**
     * @category ISO Week Helpers
     * @summary Get the number of calendar ISO weeks between the given dates.
     *
     * @description
     * Get the number of calendar ISO weeks between the given dates.
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} dateLeft - the later date
     * @param {Date|String|Number} dateRight - the earlier date
     * @returns {Number} the number of calendar ISO weeks
     *
     * @example
     * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
     * var result = differenceInCalendarISOWeeks(
     *   new Date(2014, 6, 21),
     *   new Date(2014, 6, 6)
     * )
     * //=> 3
     */

    function differenceInCalendarISOWeeks(dirtyDateLeft, dirtyDateRight) {
      var startOfISOWeekLeft = startOfISOWeek(dirtyDateLeft);
      var startOfISOWeekRight = startOfISOWeek(dirtyDateRight);
      var timestampLeft = startOfISOWeekLeft.getTime() - startOfISOWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
      var timestampRight = startOfISOWeekRight.getTime() - startOfISOWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE; // Round the number of days to the nearest integer
      // because the number of milliseconds in a week is not constant
      // (e.g. it's different in the week of the daylight saving time clock shift)

      return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
    }

    module.exports = differenceInCalendarISOWeeks;
    /***/
  },

  /***/
  "./node_modules/date-fns/difference_in_calendar_iso_years/index.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/date-fns/difference_in_calendar_iso_years/index.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDifference_in_calendar_iso_yearsIndexJs(module, exports, __webpack_require__) {
    var getISOYear = __webpack_require__(
    /*! ../get_iso_year/index.js */
    "./node_modules/date-fns/get_iso_year/index.js");
    /**
     * @category ISO Week-Numbering Year Helpers
     * @summary Get the number of calendar ISO week-numbering years between the given dates.
     *
     * @description
     * Get the number of calendar ISO week-numbering years between the given dates.
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} dateLeft - the later date
     * @param {Date|String|Number} dateRight - the earlier date
     * @returns {Number} the number of calendar ISO week-numbering years
     *
     * @example
     * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?
     * var result = differenceInCalendarISOYears(
     *   new Date(2012, 0, 1),
     *   new Date(2010, 0, 1)
     * )
     * //=> 2
     */


    function differenceInCalendarISOYears(dirtyDateLeft, dirtyDateRight) {
      return getISOYear(dirtyDateLeft) - getISOYear(dirtyDateRight);
    }

    module.exports = differenceInCalendarISOYears;
    /***/
  },

  /***/
  "./node_modules/date-fns/difference_in_calendar_months/index.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/date-fns/difference_in_calendar_months/index.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDifference_in_calendar_monthsIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Month Helpers
     * @summary Get the number of calendar months between the given dates.
     *
     * @description
     * Get the number of calendar months between the given dates.
     *
     * @param {Date|String|Number} dateLeft - the later date
     * @param {Date|String|Number} dateRight - the earlier date
     * @returns {Number} the number of calendar months
     *
     * @example
     * // How many calendar months are between 31 January 2014 and 1 September 2014?
     * var result = differenceInCalendarMonths(
     *   new Date(2014, 8, 1),
     *   new Date(2014, 0, 31)
     * )
     * //=> 8
     */


    function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse(dirtyDateLeft);
      var dateRight = parse(dirtyDateRight);
      var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
      var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
      return yearDiff * 12 + monthDiff;
    }

    module.exports = differenceInCalendarMonths;
    /***/
  },

  /***/
  "./node_modules/date-fns/difference_in_calendar_quarters/index.js":
  /*!************************************************************************!*\
    !*** ./node_modules/date-fns/difference_in_calendar_quarters/index.js ***!
    \************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDifference_in_calendar_quartersIndexJs(module, exports, __webpack_require__) {
    var getQuarter = __webpack_require__(
    /*! ../get_quarter/index.js */
    "./node_modules/date-fns/get_quarter/index.js");

    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Quarter Helpers
     * @summary Get the number of calendar quarters between the given dates.
     *
     * @description
     * Get the number of calendar quarters between the given dates.
     *
     * @param {Date|String|Number} dateLeft - the later date
     * @param {Date|String|Number} dateRight - the earlier date
     * @returns {Number} the number of calendar quarters
     *
     * @example
     * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
     * var result = differenceInCalendarQuarters(
     *   new Date(2014, 6, 2),
     *   new Date(2013, 11, 31)
     * )
     * //=> 3
     */


    function differenceInCalendarQuarters(dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse(dirtyDateLeft);
      var dateRight = parse(dirtyDateRight);
      var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
      var quarterDiff = getQuarter(dateLeft) - getQuarter(dateRight);
      return yearDiff * 4 + quarterDiff;
    }

    module.exports = differenceInCalendarQuarters;
    /***/
  },

  /***/
  "./node_modules/date-fns/difference_in_calendar_weeks/index.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/date-fns/difference_in_calendar_weeks/index.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDifference_in_calendar_weeksIndexJs(module, exports, __webpack_require__) {
    var startOfWeek = __webpack_require__(
    /*! ../start_of_week/index.js */
    "./node_modules/date-fns/start_of_week/index.js");

    var MILLISECONDS_IN_MINUTE = 60000;
    var MILLISECONDS_IN_WEEK = 604800000;
    /**
     * @category Week Helpers
     * @summary Get the number of calendar weeks between the given dates.
     *
     * @description
     * Get the number of calendar weeks between the given dates.
     *
     * @param {Date|String|Number} dateLeft - the later date
     * @param {Date|String|Number} dateRight - the earlier date
     * @param {Object} [options] - the object with options
     * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
     * @returns {Number} the number of calendar weeks
     *
     * @example
     * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
     * var result = differenceInCalendarWeeks(
     *   new Date(2014, 6, 20),
     *   new Date(2014, 6, 5)
     * )
     * //=> 3
     *
     * @example
     * // If the week starts on Monday,
     * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
     * var result = differenceInCalendarWeeks(
     *   new Date(2014, 6, 20),
     *   new Date(2014, 6, 5),
     *   {weekStartsOn: 1}
     * )
     * //=> 2
     */

    function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
      var startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions);
      var startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions);
      var timestampLeft = startOfWeekLeft.getTime() - startOfWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
      var timestampRight = startOfWeekRight.getTime() - startOfWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE; // Round the number of days to the nearest integer
      // because the number of milliseconds in a week is not constant
      // (e.g. it's different in the week of the daylight saving time clock shift)

      return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
    }

    module.exports = differenceInCalendarWeeks;
    /***/
  },

  /***/
  "./node_modules/date-fns/difference_in_calendar_years/index.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/date-fns/difference_in_calendar_years/index.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDifference_in_calendar_yearsIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Year Helpers
     * @summary Get the number of calendar years between the given dates.
     *
     * @description
     * Get the number of calendar years between the given dates.
     *
     * @param {Date|String|Number} dateLeft - the later date
     * @param {Date|String|Number} dateRight - the earlier date
     * @returns {Number} the number of calendar years
     *
     * @example
     * // How many calendar years are between 31 December 2013 and 11 February 2015?
     * var result = differenceInCalendarYears(
     *   new Date(2015, 1, 11),
     *   new Date(2013, 11, 31)
     * )
     * //=> 2
     */


    function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse(dirtyDateLeft);
      var dateRight = parse(dirtyDateRight);
      return dateLeft.getFullYear() - dateRight.getFullYear();
    }

    module.exports = differenceInCalendarYears;
    /***/
  },

  /***/
  "./node_modules/date-fns/difference_in_days/index.js":
  /*!***********************************************************!*\
    !*** ./node_modules/date-fns/difference_in_days/index.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDifference_in_daysIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var differenceInCalendarDays = __webpack_require__(
    /*! ../difference_in_calendar_days/index.js */
    "./node_modules/date-fns/difference_in_calendar_days/index.js");

    var compareAsc = __webpack_require__(
    /*! ../compare_asc/index.js */
    "./node_modules/date-fns/compare_asc/index.js");
    /**
     * @category Day Helpers
     * @summary Get the number of full days between the given dates.
     *
     * @description
     * Get the number of full days between the given dates.
     *
     * @param {Date|String|Number} dateLeft - the later date
     * @param {Date|String|Number} dateRight - the earlier date
     * @returns {Number} the number of full days
     *
     * @example
     * // How many full days are between
     * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
     * var result = differenceInDays(
     *   new Date(2012, 6, 2, 0, 0),
     *   new Date(2011, 6, 2, 23, 0)
     * )
     * //=> 365
     */


    function differenceInDays(dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse(dirtyDateLeft);
      var dateRight = parse(dirtyDateRight);
      var sign = compareAsc(dateLeft, dateRight);
      var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight));
      dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
      // If so, result must be decreased by 1 in absolute value

      var isLastDayNotFull = compareAsc(dateLeft, dateRight) === -sign;
      return sign * (difference - isLastDayNotFull);
    }

    module.exports = differenceInDays;
    /***/
  },

  /***/
  "./node_modules/date-fns/difference_in_hours/index.js":
  /*!************************************************************!*\
    !*** ./node_modules/date-fns/difference_in_hours/index.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDifference_in_hoursIndexJs(module, exports, __webpack_require__) {
    var differenceInMilliseconds = __webpack_require__(
    /*! ../difference_in_milliseconds/index.js */
    "./node_modules/date-fns/difference_in_milliseconds/index.js");

    var MILLISECONDS_IN_HOUR = 3600000;
    /**
     * @category Hour Helpers
     * @summary Get the number of hours between the given dates.
     *
     * @description
     * Get the number of hours between the given dates.
     *
     * @param {Date|String|Number} dateLeft - the later date
     * @param {Date|String|Number} dateRight - the earlier date
     * @returns {Number} the number of hours
     *
     * @example
     * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
     * var result = differenceInHours(
     *   new Date(2014, 6, 2, 19, 0),
     *   new Date(2014, 6, 2, 6, 50)
     * )
     * //=> 12
     */

    function differenceInHours(dirtyDateLeft, dirtyDateRight) {
      var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_HOUR;
      return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
    }

    module.exports = differenceInHours;
    /***/
  },

  /***/
  "./node_modules/date-fns/difference_in_iso_years/index.js":
  /*!****************************************************************!*\
    !*** ./node_modules/date-fns/difference_in_iso_years/index.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDifference_in_iso_yearsIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var differenceInCalendarISOYears = __webpack_require__(
    /*! ../difference_in_calendar_iso_years/index.js */
    "./node_modules/date-fns/difference_in_calendar_iso_years/index.js");

    var compareAsc = __webpack_require__(
    /*! ../compare_asc/index.js */
    "./node_modules/date-fns/compare_asc/index.js");

    var subISOYears = __webpack_require__(
    /*! ../sub_iso_years/index.js */
    "./node_modules/date-fns/sub_iso_years/index.js");
    /**
     * @category ISO Week-Numbering Year Helpers
     * @summary Get the number of full ISO week-numbering years between the given dates.
     *
     * @description
     * Get the number of full ISO week-numbering years between the given dates.
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} dateLeft - the later date
     * @param {Date|String|Number} dateRight - the earlier date
     * @returns {Number} the number of full ISO week-numbering years
     *
     * @example
     * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
     * var result = differenceInISOYears(
     *   new Date(2012, 0, 1),
     *   new Date(2010, 0, 1)
     * )
     * //=> 1
     */


    function differenceInISOYears(dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse(dirtyDateLeft);
      var dateRight = parse(dirtyDateRight);
      var sign = compareAsc(dateLeft, dateRight);
      var difference = Math.abs(differenceInCalendarISOYears(dateLeft, dateRight));
      dateLeft = subISOYears(dateLeft, sign * difference); // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
      // if last calendar ISO year is not full
      // If so, result must be decreased by 1 in absolute value

      var isLastISOYearNotFull = compareAsc(dateLeft, dateRight) === -sign;
      return sign * (difference - isLastISOYearNotFull);
    }

    module.exports = differenceInISOYears;
    /***/
  },

  /***/
  "./node_modules/date-fns/difference_in_milliseconds/index.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/date-fns/difference_in_milliseconds/index.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDifference_in_millisecondsIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Millisecond Helpers
     * @summary Get the number of milliseconds between the given dates.
     *
     * @description
     * Get the number of milliseconds between the given dates.
     *
     * @param {Date|String|Number} dateLeft - the later date
     * @param {Date|String|Number} dateRight - the earlier date
     * @returns {Number} the number of milliseconds
     *
     * @example
     * // How many milliseconds are between
     * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
     * var result = differenceInMilliseconds(
     *   new Date(2014, 6, 2, 12, 30, 21, 700),
     *   new Date(2014, 6, 2, 12, 30, 20, 600)
     * )
     * //=> 1100
     */


    function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse(dirtyDateLeft);
      var dateRight = parse(dirtyDateRight);
      return dateLeft.getTime() - dateRight.getTime();
    }

    module.exports = differenceInMilliseconds;
    /***/
  },

  /***/
  "./node_modules/date-fns/difference_in_minutes/index.js":
  /*!**************************************************************!*\
    !*** ./node_modules/date-fns/difference_in_minutes/index.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDifference_in_minutesIndexJs(module, exports, __webpack_require__) {
    var differenceInMilliseconds = __webpack_require__(
    /*! ../difference_in_milliseconds/index.js */
    "./node_modules/date-fns/difference_in_milliseconds/index.js");

    var MILLISECONDS_IN_MINUTE = 60000;
    /**
     * @category Minute Helpers
     * @summary Get the number of minutes between the given dates.
     *
     * @description
     * Get the number of minutes between the given dates.
     *
     * @param {Date|String|Number} dateLeft - the later date
     * @param {Date|String|Number} dateRight - the earlier date
     * @returns {Number} the number of minutes
     *
     * @example
     * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
     * var result = differenceInMinutes(
     *   new Date(2014, 6, 2, 12, 20, 0),
     *   new Date(2014, 6, 2, 12, 7, 59)
     * )
     * //=> 12
     */

    function differenceInMinutes(dirtyDateLeft, dirtyDateRight) {
      var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE;
      return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
    }

    module.exports = differenceInMinutes;
    /***/
  },

  /***/
  "./node_modules/date-fns/difference_in_months/index.js":
  /*!*************************************************************!*\
    !*** ./node_modules/date-fns/difference_in_months/index.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDifference_in_monthsIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var differenceInCalendarMonths = __webpack_require__(
    /*! ../difference_in_calendar_months/index.js */
    "./node_modules/date-fns/difference_in_calendar_months/index.js");

    var compareAsc = __webpack_require__(
    /*! ../compare_asc/index.js */
    "./node_modules/date-fns/compare_asc/index.js");
    /**
     * @category Month Helpers
     * @summary Get the number of full months between the given dates.
     *
     * @description
     * Get the number of full months between the given dates.
     *
     * @param {Date|String|Number} dateLeft - the later date
     * @param {Date|String|Number} dateRight - the earlier date
     * @returns {Number} the number of full months
     *
     * @example
     * // How many full months are between 31 January 2014 and 1 September 2014?
     * var result = differenceInMonths(
     *   new Date(2014, 8, 1),
     *   new Date(2014, 0, 31)
     * )
     * //=> 7
     */


    function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse(dirtyDateLeft);
      var dateRight = parse(dirtyDateRight);
      var sign = compareAsc(dateLeft, dateRight);
      var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight));
      dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
      // If so, result must be decreased by 1 in absolute value

      var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign;
      return sign * (difference - isLastMonthNotFull);
    }

    module.exports = differenceInMonths;
    /***/
  },

  /***/
  "./node_modules/date-fns/difference_in_quarters/index.js":
  /*!***************************************************************!*\
    !*** ./node_modules/date-fns/difference_in_quarters/index.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDifference_in_quartersIndexJs(module, exports, __webpack_require__) {
    var differenceInMonths = __webpack_require__(
    /*! ../difference_in_months/index.js */
    "./node_modules/date-fns/difference_in_months/index.js");
    /**
     * @category Quarter Helpers
     * @summary Get the number of full quarters between the given dates.
     *
     * @description
     * Get the number of full quarters between the given dates.
     *
     * @param {Date|String|Number} dateLeft - the later date
     * @param {Date|String|Number} dateRight - the earlier date
     * @returns {Number} the number of full quarters
     *
     * @example
     * // How many full quarters are between 31 December 2013 and 2 July 2014?
     * var result = differenceInQuarters(
     *   new Date(2014, 6, 2),
     *   new Date(2013, 11, 31)
     * )
     * //=> 2
     */


    function differenceInQuarters(dirtyDateLeft, dirtyDateRight) {
      var diff = differenceInMonths(dirtyDateLeft, dirtyDateRight) / 3;
      return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
    }

    module.exports = differenceInQuarters;
    /***/
  },

  /***/
  "./node_modules/date-fns/difference_in_seconds/index.js":
  /*!**************************************************************!*\
    !*** ./node_modules/date-fns/difference_in_seconds/index.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDifference_in_secondsIndexJs(module, exports, __webpack_require__) {
    var differenceInMilliseconds = __webpack_require__(
    /*! ../difference_in_milliseconds/index.js */
    "./node_modules/date-fns/difference_in_milliseconds/index.js");
    /**
     * @category Second Helpers
     * @summary Get the number of seconds between the given dates.
     *
     * @description
     * Get the number of seconds between the given dates.
     *
     * @param {Date|String|Number} dateLeft - the later date
     * @param {Date|String|Number} dateRight - the earlier date
     * @returns {Number} the number of seconds
     *
     * @example
     * // How many seconds are between
     * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
     * var result = differenceInSeconds(
     *   new Date(2014, 6, 2, 12, 30, 20, 0),
     *   new Date(2014, 6, 2, 12, 30, 7, 999)
     * )
     * //=> 12
     */


    function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
      var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000;
      return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
    }

    module.exports = differenceInSeconds;
    /***/
  },

  /***/
  "./node_modules/date-fns/difference_in_weeks/index.js":
  /*!************************************************************!*\
    !*** ./node_modules/date-fns/difference_in_weeks/index.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDifference_in_weeksIndexJs(module, exports, __webpack_require__) {
    var differenceInDays = __webpack_require__(
    /*! ../difference_in_days/index.js */
    "./node_modules/date-fns/difference_in_days/index.js");
    /**
     * @category Week Helpers
     * @summary Get the number of full weeks between the given dates.
     *
     * @description
     * Get the number of full weeks between the given dates.
     *
     * @param {Date|String|Number} dateLeft - the later date
     * @param {Date|String|Number} dateRight - the earlier date
     * @returns {Number} the number of full weeks
     *
     * @example
     * // How many full weeks are between 5 July 2014 and 20 July 2014?
     * var result = differenceInWeeks(
     *   new Date(2014, 6, 20),
     *   new Date(2014, 6, 5)
     * )
     * //=> 2
     */


    function differenceInWeeks(dirtyDateLeft, dirtyDateRight) {
      var diff = differenceInDays(dirtyDateLeft, dirtyDateRight) / 7;
      return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
    }

    module.exports = differenceInWeeks;
    /***/
  },

  /***/
  "./node_modules/date-fns/difference_in_years/index.js":
  /*!************************************************************!*\
    !*** ./node_modules/date-fns/difference_in_years/index.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDifference_in_yearsIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var differenceInCalendarYears = __webpack_require__(
    /*! ../difference_in_calendar_years/index.js */
    "./node_modules/date-fns/difference_in_calendar_years/index.js");

    var compareAsc = __webpack_require__(
    /*! ../compare_asc/index.js */
    "./node_modules/date-fns/compare_asc/index.js");
    /**
     * @category Year Helpers
     * @summary Get the number of full years between the given dates.
     *
     * @description
     * Get the number of full years between the given dates.
     *
     * @param {Date|String|Number} dateLeft - the later date
     * @param {Date|String|Number} dateRight - the earlier date
     * @returns {Number} the number of full years
     *
     * @example
     * // How many full years are between 31 December 2013 and 11 February 2015?
     * var result = differenceInYears(
     *   new Date(2015, 1, 11),
     *   new Date(2013, 11, 31)
     * )
     * //=> 1
     */


    function differenceInYears(dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse(dirtyDateLeft);
      var dateRight = parse(dirtyDateRight);
      var sign = compareAsc(dateLeft, dateRight);
      var difference = Math.abs(differenceInCalendarYears(dateLeft, dateRight));
      dateLeft.setFullYear(dateLeft.getFullYear() - sign * difference); // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
      // If so, result must be decreased by 1 in absolute value

      var isLastYearNotFull = compareAsc(dateLeft, dateRight) === -sign;
      return sign * (difference - isLastYearNotFull);
    }

    module.exports = differenceInYears;
    /***/
  },

  /***/
  "./node_modules/date-fns/distance_in_words/index.js":
  /*!**********************************************************!*\
    !*** ./node_modules/date-fns/distance_in_words/index.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDistance_in_wordsIndexJs(module, exports, __webpack_require__) {
    var compareDesc = __webpack_require__(
    /*! ../compare_desc/index.js */
    "./node_modules/date-fns/compare_desc/index.js");

    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var differenceInSeconds = __webpack_require__(
    /*! ../difference_in_seconds/index.js */
    "./node_modules/date-fns/difference_in_seconds/index.js");

    var differenceInMonths = __webpack_require__(
    /*! ../difference_in_months/index.js */
    "./node_modules/date-fns/difference_in_months/index.js");

    var enLocale = __webpack_require__(
    /*! ../locale/en/index.js */
    "./node_modules/date-fns/locale/en/index.js");

    var MINUTES_IN_DAY = 1440;
    var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
    var MINUTES_IN_MONTH = 43200;
    var MINUTES_IN_TWO_MONTHS = 86400;
    /**
     * @category Common Helpers
     * @summary Return the distance between the given dates in words.
     *
     * @description
     * Return the distance between the given dates in words.
     *
     * | Distance between dates                                            | Result              |
     * |-------------------------------------------------------------------|---------------------|
     * | 0 ... 30 secs                                                     | less than a minute  |
     * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
     * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
     * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
     * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
     * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
     * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
     * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
     * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
     * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
     * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
     * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
     * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
     * | N yrs ... N yrs 3 months                                          | about N years       |
     * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
     * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
     *
     * With `options.includeSeconds == true`:
     * | Distance between dates | Result               |
     * |------------------------|----------------------|
     * | 0 secs ... 5 secs      | less than 5 seconds  |
     * | 5 secs ... 10 secs     | less than 10 seconds |
     * | 10 secs ... 20 secs    | less than 20 seconds |
     * | 20 secs ... 40 secs    | half a minute        |
     * | 40 secs ... 60 secs    | less than a minute   |
     * | 60 secs ... 90 secs    | 1 minute             |
     *
     * @param {Date|String|Number} dateToCompare - the date to compare with
     * @param {Date|String|Number} date - the other date
     * @param {Object} [options] - the object with options
     * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
     * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
     * @param {Object} [options.locale=enLocale] - the locale object
     * @returns {String} the distance in words
     *
     * @example
     * // What is the distance between 2 July 2014 and 1 January 2015?
     * var result = distanceInWords(
     *   new Date(2014, 6, 2),
     *   new Date(2015, 0, 1)
     * )
     * //=> '6 months'
     *
     * @example
     * // What is the distance between 1 January 2015 00:00:15
     * // and 1 January 2015 00:00:00, including seconds?
     * var result = distanceInWords(
     *   new Date(2015, 0, 1, 0, 0, 15),
     *   new Date(2015, 0, 1, 0, 0, 0),
     *   {includeSeconds: true}
     * )
     * //=> 'less than 20 seconds'
     *
     * @example
     * // What is the distance from 1 January 2016
     * // to 1 January 2015, with a suffix?
     * var result = distanceInWords(
     *   new Date(2016, 0, 1),
     *   new Date(2015, 0, 1),
     *   {addSuffix: true}
     * )
     * //=> 'about 1 year ago'
     *
     * @example
     * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
     * var eoLocale = require('date-fns/locale/eo')
     * var result = distanceInWords(
     *   new Date(2016, 7, 1),
     *   new Date(2015, 0, 1),
     *   {locale: eoLocale}
     * )
     * //=> 'pli ol 1 jaro'
     */

    function distanceInWords(dirtyDateToCompare, dirtyDate, dirtyOptions) {
      var options = dirtyOptions || {};
      var comparison = compareDesc(dirtyDateToCompare, dirtyDate);
      var locale = options.locale;
      var localize = enLocale.distanceInWords.localize;

      if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
        localize = locale.distanceInWords.localize;
      }

      var localizeOptions = {
        addSuffix: Boolean(options.addSuffix),
        comparison: comparison
      };
      var dateLeft, dateRight;

      if (comparison > 0) {
        dateLeft = parse(dirtyDateToCompare);
        dateRight = parse(dirtyDate);
      } else {
        dateLeft = parse(dirtyDate);
        dateRight = parse(dirtyDateToCompare);
      }

      var seconds = differenceInSeconds(dateRight, dateLeft);
      var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset();
      var minutes = Math.round(seconds / 60) - offset;
      var months; // 0 up to 2 mins

      if (minutes < 2) {
        if (options.includeSeconds) {
          if (seconds < 5) {
            return localize('lessThanXSeconds', 5, localizeOptions);
          } else if (seconds < 10) {
            return localize('lessThanXSeconds', 10, localizeOptions);
          } else if (seconds < 20) {
            return localize('lessThanXSeconds', 20, localizeOptions);
          } else if (seconds < 40) {
            return localize('halfAMinute', null, localizeOptions);
          } else if (seconds < 60) {
            return localize('lessThanXMinutes', 1, localizeOptions);
          } else {
            return localize('xMinutes', 1, localizeOptions);
          }
        } else {
          if (minutes === 0) {
            return localize('lessThanXMinutes', 1, localizeOptions);
          } else {
            return localize('xMinutes', minutes, localizeOptions);
          }
        } // 2 mins up to 0.75 hrs

      } else if (minutes < 45) {
        return localize('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
      } else if (minutes < 90) {
        return localize('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
      } else if (minutes < MINUTES_IN_DAY) {
        var hours = Math.round(minutes / 60);
        return localize('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
      } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
        return localize('xDays', 1, localizeOptions); // 1.75 days up to 30 days
      } else if (minutes < MINUTES_IN_MONTH) {
        var days = Math.round(minutes / MINUTES_IN_DAY);
        return localize('xDays', days, localizeOptions); // 1 month up to 2 months
      } else if (minutes < MINUTES_IN_TWO_MONTHS) {
        months = Math.round(minutes / MINUTES_IN_MONTH);
        return localize('aboutXMonths', months, localizeOptions);
      }

      months = differenceInMonths(dateRight, dateLeft); // 2 months up to 12 months

      if (months < 12) {
        var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
        return localize('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
      } else {
        var monthsSinceStartOfYear = months % 12;
        var years = Math.floor(months / 12); // N years up to 1 years 3 months

        if (monthsSinceStartOfYear < 3) {
          return localize('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
        } else if (monthsSinceStartOfYear < 9) {
          return localize('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
        } else {
          return localize('almostXYears', years + 1, localizeOptions);
        }
      }
    }

    module.exports = distanceInWords;
    /***/
  },

  /***/
  "./node_modules/date-fns/distance_in_words_strict/index.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/date-fns/distance_in_words_strict/index.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDistance_in_words_strictIndexJs(module, exports, __webpack_require__) {
    var compareDesc = __webpack_require__(
    /*! ../compare_desc/index.js */
    "./node_modules/date-fns/compare_desc/index.js");

    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var differenceInSeconds = __webpack_require__(
    /*! ../difference_in_seconds/index.js */
    "./node_modules/date-fns/difference_in_seconds/index.js");

    var enLocale = __webpack_require__(
    /*! ../locale/en/index.js */
    "./node_modules/date-fns/locale/en/index.js");

    var MINUTES_IN_DAY = 1440;
    var MINUTES_IN_MONTH = 43200;
    var MINUTES_IN_YEAR = 525600;
    /**
     * @category Common Helpers
     * @summary Return the distance between the given dates in words.
     *
     * @description
     * Return the distance between the given dates in words, using strict units.
     * This is like `distanceInWords`, but does not use helpers like 'almost', 'over',
     * 'less than' and the like.
     *
     * | Distance between dates | Result              |
     * |------------------------|---------------------|
     * | 0 ... 59 secs          | [0..59] seconds     |
     * | 1 ... 59 mins          | [1..59] minutes     |
     * | 1 ... 23 hrs           | [1..23] hours       |
     * | 1 ... 29 days          | [1..29] days        |
     * | 1 ... 11 months        | [1..11] months      |
     * | 1 ... N years          | [1..N]  years       |
     *
     * @param {Date|String|Number} dateToCompare - the date to compare with
     * @param {Date|String|Number} date - the other date
     * @param {Object} [options] - the object with options
     * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
     * @param {'s'|'m'|'h'|'d'|'M'|'Y'} [options.unit] - if specified, will force a unit
     * @param {'floor'|'ceil'|'round'} [options.partialMethod='floor'] - which way to round partial units
     * @param {Object} [options.locale=enLocale] - the locale object
     * @returns {String} the distance in words
     *
     * @example
     * // What is the distance between 2 July 2014 and 1 January 2015?
     * var result = distanceInWordsStrict(
     *   new Date(2014, 6, 2),
     *   new Date(2015, 0, 2)
     * )
     * //=> '6 months'
     *
     * @example
     * // What is the distance between 1 January 2015 00:00:15
     * // and 1 January 2015 00:00:00?
     * var result = distanceInWordsStrict(
     *   new Date(2015, 0, 1, 0, 0, 15),
     *   new Date(2015, 0, 1, 0, 0, 0),
     * )
     * //=> '15 seconds'
     *
     * @example
     * // What is the distance from 1 January 2016
     * // to 1 January 2015, with a suffix?
     * var result = distanceInWordsStrict(
     *   new Date(2016, 0, 1),
     *   new Date(2015, 0, 1),
     *   {addSuffix: true}
     * )
     * //=> '1 year ago'
     *
     * @example
     * // What is the distance from 1 January 2016
     * // to 1 January 2015, in minutes?
     * var result = distanceInWordsStrict(
     *   new Date(2016, 0, 1),
     *   new Date(2015, 0, 1),
     *   {unit: 'm'}
     * )
     * //=> '525600 minutes'
     *
     * @example
     * // What is the distance from 1 January 2016
     * // to 28 January 2015, in months, rounded up?
     * var result = distanceInWordsStrict(
     *   new Date(2015, 0, 28),
     *   new Date(2015, 0, 1),
     *   {unit: 'M', partialMethod: 'ceil'}
     * )
     * //=> '1 month'
     *
     * @example
     * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
     * var eoLocale = require('date-fns/locale/eo')
     * var result = distanceInWordsStrict(
     *   new Date(2016, 7, 1),
     *   new Date(2015, 0, 1),
     *   {locale: eoLocale}
     * )
     * //=> '1 jaro'
     */

    function distanceInWordsStrict(dirtyDateToCompare, dirtyDate, dirtyOptions) {
      var options = dirtyOptions || {};
      var comparison = compareDesc(dirtyDateToCompare, dirtyDate);
      var locale = options.locale;
      var localize = enLocale.distanceInWords.localize;

      if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
        localize = locale.distanceInWords.localize;
      }

      var localizeOptions = {
        addSuffix: Boolean(options.addSuffix),
        comparison: comparison
      };
      var dateLeft, dateRight;

      if (comparison > 0) {
        dateLeft = parse(dirtyDateToCompare);
        dateRight = parse(dirtyDate);
      } else {
        dateLeft = parse(dirtyDate);
        dateRight = parse(dirtyDateToCompare);
      }

      var unit;
      var mathPartial = Math[options.partialMethod ? String(options.partialMethod) : 'floor'];
      var seconds = differenceInSeconds(dateRight, dateLeft);
      var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset();
      var minutes = mathPartial(seconds / 60) - offset;
      var hours, days, months, years;

      if (options.unit) {
        unit = String(options.unit);
      } else {
        if (minutes < 1) {
          unit = 's';
        } else if (minutes < 60) {
          unit = 'm';
        } else if (minutes < MINUTES_IN_DAY) {
          unit = 'h';
        } else if (minutes < MINUTES_IN_MONTH) {
          unit = 'd';
        } else if (minutes < MINUTES_IN_YEAR) {
          unit = 'M';
        } else {
          unit = 'Y';
        }
      } // 0 up to 60 seconds


      if (unit === 's') {
        return localize('xSeconds', seconds, localizeOptions); // 1 up to 60 mins
      } else if (unit === 'm') {
        return localize('xMinutes', minutes, localizeOptions); // 1 up to 24 hours
      } else if (unit === 'h') {
        hours = mathPartial(minutes / 60);
        return localize('xHours', hours, localizeOptions); // 1 up to 30 days
      } else if (unit === 'd') {
        days = mathPartial(minutes / MINUTES_IN_DAY);
        return localize('xDays', days, localizeOptions); // 1 up to 12 months
      } else if (unit === 'M') {
        months = mathPartial(minutes / MINUTES_IN_MONTH);
        return localize('xMonths', months, localizeOptions); // 1 year up to max Date
      } else if (unit === 'Y') {
        years = mathPartial(minutes / MINUTES_IN_YEAR);
        return localize('xYears', years, localizeOptions);
      }

      throw new Error('Unknown unit: ' + unit);
    }

    module.exports = distanceInWordsStrict;
    /***/
  },

  /***/
  "./node_modules/date-fns/distance_in_words_to_now/index.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/date-fns/distance_in_words_to_now/index.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsDistance_in_words_to_nowIndexJs(module, exports, __webpack_require__) {
    var distanceInWords = __webpack_require__(
    /*! ../distance_in_words/index.js */
    "./node_modules/date-fns/distance_in_words/index.js");
    /**
     * @category Common Helpers
     * @summary Return the distance between the given date and now in words.
     *
     * @description
     * Return the distance between the given date and now in words.
     *
     * | Distance to now                                                   | Result              |
     * |-------------------------------------------------------------------|---------------------|
     * | 0 ... 30 secs                                                     | less than a minute  |
     * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
     * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
     * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
     * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
     * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
     * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
     * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
     * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
     * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
     * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
     * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
     * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
     * | N yrs ... N yrs 3 months                                          | about N years       |
     * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
     * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
     *
     * With `options.includeSeconds == true`:
     * | Distance to now     | Result               |
     * |---------------------|----------------------|
     * | 0 secs ... 5 secs   | less than 5 seconds  |
     * | 5 secs ... 10 secs  | less than 10 seconds |
     * | 10 secs ... 20 secs | less than 20 seconds |
     * | 20 secs ... 40 secs | half a minute        |
     * | 40 secs ... 60 secs | less than a minute   |
     * | 60 secs ... 90 secs | 1 minute             |
     *
     * @param {Date|String|Number} date - the given date
     * @param {Object} [options] - the object with options
     * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
     * @param {Boolean} [options.addSuffix=false] - result specifies if the second date is earlier or later than the first
     * @param {Object} [options.locale=enLocale] - the locale object
     * @returns {String} the distance in words
     *
     * @example
     * // If today is 1 January 2015, what is the distance to 2 July 2014?
     * var result = distanceInWordsToNow(
     *   new Date(2014, 6, 2)
     * )
     * //=> '6 months'
     *
     * @example
     * // If now is 1 January 2015 00:00:00,
     * // what is the distance to 1 January 2015 00:00:15, including seconds?
     * var result = distanceInWordsToNow(
     *   new Date(2015, 0, 1, 0, 0, 15),
     *   {includeSeconds: true}
     * )
     * //=> 'less than 20 seconds'
     *
     * @example
     * // If today is 1 January 2015,
     * // what is the distance to 1 January 2016, with a suffix?
     * var result = distanceInWordsToNow(
     *   new Date(2016, 0, 1),
     *   {addSuffix: true}
     * )
     * //=> 'in about 1 year'
     *
     * @example
     * // If today is 1 January 2015,
     * // what is the distance to 1 August 2016 in Esperanto?
     * var eoLocale = require('date-fns/locale/eo')
     * var result = distanceInWordsToNow(
     *   new Date(2016, 7, 1),
     *   {locale: eoLocale}
     * )
     * //=> 'pli ol 1 jaro'
     */


    function distanceInWordsToNow(dirtyDate, dirtyOptions) {
      return distanceInWords(Date.now(), dirtyDate, dirtyOptions);
    }

    module.exports = distanceInWordsToNow;
    /***/
  },

  /***/
  "./node_modules/date-fns/each_day/index.js":
  /*!*************************************************!*\
    !*** ./node_modules/date-fns/each_day/index.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsEach_dayIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Day Helpers
     * @summary Return the array of dates within the specified range.
     *
     * @description
     * Return the array of dates within the specified range.
     *
     * @param {Date|String|Number} startDate - the first date
     * @param {Date|String|Number} endDate - the last date
     * @param {Number} [step=1] - the step between each day
     * @returns {Date[]} the array with starts of days from the day of startDate to the day of endDate
     * @throws {Error} startDate cannot be after endDate
     *
     * @example
     * // Each day between 6 October 2014 and 10 October 2014:
     * var result = eachDay(
     *   new Date(2014, 9, 6),
     *   new Date(2014, 9, 10)
     * )
     * //=> [
     * //   Mon Oct 06 2014 00:00:00,
     * //   Tue Oct 07 2014 00:00:00,
     * //   Wed Oct 08 2014 00:00:00,
     * //   Thu Oct 09 2014 00:00:00,
     * //   Fri Oct 10 2014 00:00:00
     * // ]
     */


    function eachDay(dirtyStartDate, dirtyEndDate, dirtyStep) {
      var startDate = parse(dirtyStartDate);
      var endDate = parse(dirtyEndDate);
      var step = dirtyStep !== undefined ? dirtyStep : 1;
      var endTime = endDate.getTime();

      if (startDate.getTime() > endTime) {
        throw new Error('The first date cannot be after the second date');
      }

      var dates = [];
      var currentDate = startDate;
      currentDate.setHours(0, 0, 0, 0);

      while (currentDate.getTime() <= endTime) {
        dates.push(parse(currentDate));
        currentDate.setDate(currentDate.getDate() + step);
      }

      return dates;
    }

    module.exports = eachDay;
    /***/
  },

  /***/
  "./node_modules/date-fns/end_of_day/index.js":
  /*!***************************************************!*\
    !*** ./node_modules/date-fns/end_of_day/index.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsEnd_of_dayIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Day Helpers
     * @summary Return the end of a day for the given date.
     *
     * @description
     * Return the end of a day for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the end of a day
     *
     * @example
     * // The end of a day for 2 September 2014 11:55:00:
     * var result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Tue Sep 02 2014 23:59:59.999
     */


    function endOfDay(dirtyDate) {
      var date = parse(dirtyDate);
      date.setHours(23, 59, 59, 999);
      return date;
    }

    module.exports = endOfDay;
    /***/
  },

  /***/
  "./node_modules/date-fns/end_of_hour/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/end_of_hour/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsEnd_of_hourIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Hour Helpers
     * @summary Return the end of an hour for the given date.
     *
     * @description
     * Return the end of an hour for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the end of an hour
     *
     * @example
     * // The end of an hour for 2 September 2014 11:55:00:
     * var result = endOfHour(new Date(2014, 8, 2, 11, 55))
     * //=> Tue Sep 02 2014 11:59:59.999
     */


    function endOfHour(dirtyDate) {
      var date = parse(dirtyDate);
      date.setMinutes(59, 59, 999);
      return date;
    }

    module.exports = endOfHour;
    /***/
  },

  /***/
  "./node_modules/date-fns/end_of_iso_week/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/date-fns/end_of_iso_week/index.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsEnd_of_iso_weekIndexJs(module, exports, __webpack_require__) {
    var endOfWeek = __webpack_require__(
    /*! ../end_of_week/index.js */
    "./node_modules/date-fns/end_of_week/index.js");
    /**
     * @category ISO Week Helpers
     * @summary Return the end of an ISO week for the given date.
     *
     * @description
     * Return the end of an ISO week for the given date.
     * The result will be in the local timezone.
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the end of an ISO week
     *
     * @example
     * // The end of an ISO week for 2 September 2014 11:55:00:
     * var result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Sun Sep 07 2014 23:59:59.999
     */


    function endOfISOWeek(dirtyDate) {
      return endOfWeek(dirtyDate, {
        weekStartsOn: 1
      });
    }

    module.exports = endOfISOWeek;
    /***/
  },

  /***/
  "./node_modules/date-fns/end_of_iso_year/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/date-fns/end_of_iso_year/index.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsEnd_of_iso_yearIndexJs(module, exports, __webpack_require__) {
    var getISOYear = __webpack_require__(
    /*! ../get_iso_year/index.js */
    "./node_modules/date-fns/get_iso_year/index.js");

    var startOfISOWeek = __webpack_require__(
    /*! ../start_of_iso_week/index.js */
    "./node_modules/date-fns/start_of_iso_week/index.js");
    /**
     * @category ISO Week-Numbering Year Helpers
     * @summary Return the end of an ISO week-numbering year for the given date.
     *
     * @description
     * Return the end of an ISO week-numbering year,
     * which always starts 3 days before the year's first Thursday.
     * The result will be in the local timezone.
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the end of an ISO week-numbering year
     *
     * @example
     * // The end of an ISO week-numbering year for 2 July 2005:
     * var result = endOfISOYear(new Date(2005, 6, 2))
     * //=> Sun Jan 01 2006 23:59:59.999
     */


    function endOfISOYear(dirtyDate) {
      var year = getISOYear(dirtyDate);
      var fourthOfJanuaryOfNextYear = new Date(0);
      fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
      fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
      var date = startOfISOWeek(fourthOfJanuaryOfNextYear);
      date.setMilliseconds(date.getMilliseconds() - 1);
      return date;
    }

    module.exports = endOfISOYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/end_of_minute/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/date-fns/end_of_minute/index.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsEnd_of_minuteIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Minute Helpers
     * @summary Return the end of a minute for the given date.
     *
     * @description
     * Return the end of a minute for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the end of a minute
     *
     * @example
     * // The end of a minute for 1 December 2014 22:15:45.400:
     * var result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
     * //=> Mon Dec 01 2014 22:15:59.999
     */


    function endOfMinute(dirtyDate) {
      var date = parse(dirtyDate);
      date.setSeconds(59, 999);
      return date;
    }

    module.exports = endOfMinute;
    /***/
  },

  /***/
  "./node_modules/date-fns/end_of_month/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/end_of_month/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsEnd_of_monthIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Month Helpers
     * @summary Return the end of a month for the given date.
     *
     * @description
     * Return the end of a month for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the end of a month
     *
     * @example
     * // The end of a month for 2 September 2014 11:55:00:
     * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Tue Sep 30 2014 23:59:59.999
     */


    function endOfMonth(dirtyDate) {
      var date = parse(dirtyDate);
      var month = date.getMonth();
      date.setFullYear(date.getFullYear(), month + 1, 0);
      date.setHours(23, 59, 59, 999);
      return date;
    }

    module.exports = endOfMonth;
    /***/
  },

  /***/
  "./node_modules/date-fns/end_of_quarter/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/date-fns/end_of_quarter/index.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsEnd_of_quarterIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Quarter Helpers
     * @summary Return the end of a year quarter for the given date.
     *
     * @description
     * Return the end of a year quarter for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the end of a quarter
     *
     * @example
     * // The end of a quarter for 2 September 2014 11:55:00:
     * var result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Tue Sep 30 2014 23:59:59.999
     */


    function endOfQuarter(dirtyDate) {
      var date = parse(dirtyDate);
      var currentMonth = date.getMonth();
      var month = currentMonth - currentMonth % 3 + 3;
      date.setMonth(month, 0);
      date.setHours(23, 59, 59, 999);
      return date;
    }

    module.exports = endOfQuarter;
    /***/
  },

  /***/
  "./node_modules/date-fns/end_of_second/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/date-fns/end_of_second/index.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsEnd_of_secondIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Second Helpers
     * @summary Return the end of a second for the given date.
     *
     * @description
     * Return the end of a second for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the end of a second
     *
     * @example
     * // The end of a second for 1 December 2014 22:15:45.400:
     * var result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
     * //=> Mon Dec 01 2014 22:15:45.999
     */


    function endOfSecond(dirtyDate) {
      var date = parse(dirtyDate);
      date.setMilliseconds(999);
      return date;
    }

    module.exports = endOfSecond;
    /***/
  },

  /***/
  "./node_modules/date-fns/end_of_today/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/end_of_today/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsEnd_of_todayIndexJs(module, exports, __webpack_require__) {
    var endOfDay = __webpack_require__(
    /*! ../end_of_day/index.js */
    "./node_modules/date-fns/end_of_day/index.js");
    /**
     * @category Day Helpers
     * @summary Return the end of today.
     *
     * @description
     * Return the end of today.
     *
     * @returns {Date} the end of today
     *
     * @example
     * // If today is 6 October 2014:
     * var result = endOfToday()
     * //=> Mon Oct 6 2014 23:59:59.999
     */


    function endOfToday() {
      return endOfDay(new Date());
    }

    module.exports = endOfToday;
    /***/
  },

  /***/
  "./node_modules/date-fns/end_of_tomorrow/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/date-fns/end_of_tomorrow/index.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsEnd_of_tomorrowIndexJs(module, exports) {
    /**
     * @category Day Helpers
     * @summary Return the end of tomorrow.
     *
     * @description
     * Return the end of tomorrow.
     *
     * @returns {Date} the end of tomorrow
     *
     * @example
     * // If today is 6 October 2014:
     * var result = endOfTomorrow()
     * //=> Tue Oct 7 2014 23:59:59.999
     */
    function endOfTomorrow() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth();
      var day = now.getDate();
      var date = new Date(0);
      date.setFullYear(year, month, day + 1);
      date.setHours(23, 59, 59, 999);
      return date;
    }

    module.exports = endOfTomorrow;
    /***/
  },

  /***/
  "./node_modules/date-fns/end_of_week/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/end_of_week/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsEnd_of_weekIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Week Helpers
     * @summary Return the end of a week for the given date.
     *
     * @description
     * Return the end of a week for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @param {Object} [options] - the object with options
     * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
     * @returns {Date} the end of a week
     *
     * @example
     * // The end of a week for 2 September 2014 11:55:00:
     * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Sat Sep 06 2014 23:59:59.999
     *
     * @example
     * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
     * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
     * //=> Sun Sep 07 2014 23:59:59.999
     */


    function endOfWeek(dirtyDate, dirtyOptions) {
      var weekStartsOn = dirtyOptions ? Number(dirtyOptions.weekStartsOn) || 0 : 0;
      var date = parse(dirtyDate);
      var day = date.getDay();
      var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
      date.setDate(date.getDate() + diff);
      date.setHours(23, 59, 59, 999);
      return date;
    }

    module.exports = endOfWeek;
    /***/
  },

  /***/
  "./node_modules/date-fns/end_of_year/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/end_of_year/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsEnd_of_yearIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Year Helpers
     * @summary Return the end of a year for the given date.
     *
     * @description
     * Return the end of a year for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the end of a year
     *
     * @example
     * // The end of a year for 2 September 2014 11:55:00:
     * var result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
     * //=> Wed Dec 31 2014 23:59:59.999
     */


    function endOfYear(dirtyDate) {
      var date = parse(dirtyDate);
      var year = date.getFullYear();
      date.setFullYear(year + 1, 0, 0);
      date.setHours(23, 59, 59, 999);
      return date;
    }

    module.exports = endOfYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/end_of_yesterday/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/date-fns/end_of_yesterday/index.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsEnd_of_yesterdayIndexJs(module, exports) {
    /**
     * @category Day Helpers
     * @summary Return the end of yesterday.
     *
     * @description
     * Return the end of yesterday.
     *
     * @returns {Date} the end of yesterday
     *
     * @example
     * // If today is 6 October 2014:
     * var result = endOfYesterday()
     * //=> Sun Oct 5 2014 23:59:59.999
     */
    function endOfYesterday() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth();
      var day = now.getDate();
      var date = new Date(0);
      date.setFullYear(year, month, day - 1);
      date.setHours(23, 59, 59, 999);
      return date;
    }

    module.exports = endOfYesterday;
    /***/
  },

  /***/
  "./node_modules/date-fns/format/index.js":
  /*!***********************************************!*\
    !*** ./node_modules/date-fns/format/index.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsFormatIndexJs(module, exports, __webpack_require__) {
    var getDayOfYear = __webpack_require__(
    /*! ../get_day_of_year/index.js */
    "./node_modules/date-fns/get_day_of_year/index.js");

    var getISOWeek = __webpack_require__(
    /*! ../get_iso_week/index.js */
    "./node_modules/date-fns/get_iso_week/index.js");

    var getISOYear = __webpack_require__(
    /*! ../get_iso_year/index.js */
    "./node_modules/date-fns/get_iso_year/index.js");

    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var isValid = __webpack_require__(
    /*! ../is_valid/index.js */
    "./node_modules/date-fns/is_valid/index.js");

    var enLocale = __webpack_require__(
    /*! ../locale/en/index.js */
    "./node_modules/date-fns/locale/en/index.js");
    /**
     * @category Common Helpers
     * @summary Format the date.
     *
     * @description
     * Return the formatted date string in the given format.
     *
     * Accepted tokens:
     * | Unit                    | Token | Result examples                  |
     * |-------------------------|-------|----------------------------------|
     * | Month                   | M     | 1, 2, ..., 12                    |
     * |                         | Mo    | 1st, 2nd, ..., 12th              |
     * |                         | MM    | 01, 02, ..., 12                  |
     * |                         | MMM   | Jan, Feb, ..., Dec               |
     * |                         | MMMM  | January, February, ..., December |
     * | Quarter                 | Q     | 1, 2, 3, 4                       |
     * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
     * | Day of month            | D     | 1, 2, ..., 31                    |
     * |                         | Do    | 1st, 2nd, ..., 31st              |
     * |                         | DD    | 01, 02, ..., 31                  |
     * | Day of year             | DDD   | 1, 2, ..., 366                   |
     * |                         | DDDo  | 1st, 2nd, ..., 366th             |
     * |                         | DDDD  | 001, 002, ..., 366               |
     * | Day of week             | d     | 0, 1, ..., 6                     |
     * |                         | do    | 0th, 1st, ..., 6th               |
     * |                         | dd    | Su, Mo, ..., Sa                  |
     * |                         | ddd   | Sun, Mon, ..., Sat               |
     * |                         | dddd  | Sunday, Monday, ..., Saturday    |
     * | Day of ISO week         | E     | 1, 2, ..., 7                     |
     * | ISO week                | W     | 1, 2, ..., 53                    |
     * |                         | Wo    | 1st, 2nd, ..., 53rd              |
     * |                         | WW    | 01, 02, ..., 53                  |
     * | Year                    | YY    | 00, 01, ..., 99                  |
     * |                         | YYYY  | 1900, 1901, ..., 2099            |
     * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
     * |                         | GGGG  | 1900, 1901, ..., 2099            |
     * | AM/PM                   | A     | AM, PM                           |
     * |                         | a     | am, pm                           |
     * |                         | aa    | a.m., p.m.                       |
     * | Hour                    | H     | 0, 1, ... 23                     |
     * |                         | HH    | 00, 01, ... 23                   |
     * |                         | h     | 1, 2, ..., 12                    |
     * |                         | hh    | 01, 02, ..., 12                  |
     * | Minute                  | m     | 0, 1, ..., 59                    |
     * |                         | mm    | 00, 01, ..., 59                  |
     * | Second                  | s     | 0, 1, ..., 59                    |
     * |                         | ss    | 00, 01, ..., 59                  |
     * | 1/10 of second          | S     | 0, 1, ..., 9                     |
     * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
     * | Millisecond             | SSS   | 000, 001, ..., 999               |
     * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
     * |                         | ZZ    | -0100, +0000, ..., +1200         |
     * | Seconds timestamp       | X     | 512969520                        |
     * | Milliseconds timestamp  | x     | 512969520900                     |
     *
     * The characters wrapped in square brackets are escaped.
     *
     * The result may vary by locale.
     *
     * @param {Date|String|Number} date - the original date
     * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
     * @param {Object} [options] - the object with options
     * @param {Object} [options.locale=enLocale] - the locale object
     * @returns {String} the formatted date string
     *
     * @example
     * // Represent 11 February 2014 in middle-endian format:
     * var result = format(
     *   new Date(2014, 1, 11),
     *   'MM/DD/YYYY'
     * )
     * //=> '02/11/2014'
     *
     * @example
     * // Represent 2 July 2014 in Esperanto:
     * var eoLocale = require('date-fns/locale/eo')
     * var result = format(
     *   new Date(2014, 6, 2),
     *   'Do [de] MMMM YYYY',
     *   {locale: eoLocale}
     * )
     * //=> '2-a de julio 2014'
     */


    function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
      var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ';
      var options = dirtyOptions || {};
      var locale = options.locale;
      var localeFormatters = enLocale.format.formatters;
      var formattingTokensRegExp = enLocale.format.formattingTokensRegExp;

      if (locale && locale.format && locale.format.formatters) {
        localeFormatters = locale.format.formatters;

        if (locale.format.formattingTokensRegExp) {
          formattingTokensRegExp = locale.format.formattingTokensRegExp;
        }
      }

      var date = parse(dirtyDate);

      if (!isValid(date)) {
        return 'Invalid Date';
      }

      var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp);
      return formatFn(date);
    }

    var formatters = {
      // Month: 1, 2, ..., 12
      'M': function M(date) {
        return date.getMonth() + 1;
      },
      // Month: 01, 02, ..., 12
      'MM': function MM(date) {
        return addLeadingZeros(date.getMonth() + 1, 2);
      },
      // Quarter: 1, 2, 3, 4
      'Q': function Q(date) {
        return Math.ceil((date.getMonth() + 1) / 3);
      },
      // Day of month: 1, 2, ..., 31
      'D': function D(date) {
        return date.getDate();
      },
      // Day of month: 01, 02, ..., 31
      'DD': function DD(date) {
        return addLeadingZeros(date.getDate(), 2);
      },
      // Day of year: 1, 2, ..., 366
      'DDD': function DDD(date) {
        return getDayOfYear(date);
      },
      // Day of year: 001, 002, ..., 366
      'DDDD': function DDDD(date) {
        return addLeadingZeros(getDayOfYear(date), 3);
      },
      // Day of week: 0, 1, ..., 6
      'd': function d(date) {
        return date.getDay();
      },
      // Day of ISO week: 1, 2, ..., 7
      'E': function E(date) {
        return date.getDay() || 7;
      },
      // ISO week: 1, 2, ..., 53
      'W': function W(date) {
        return getISOWeek(date);
      },
      // ISO week: 01, 02, ..., 53
      'WW': function WW(date) {
        return addLeadingZeros(getISOWeek(date), 2);
      },
      // Year: 00, 01, ..., 99
      'YY': function YY(date) {
        return addLeadingZeros(date.getFullYear(), 4).substr(2);
      },
      // Year: 1900, 1901, ..., 2099
      'YYYY': function YYYY(date) {
        return addLeadingZeros(date.getFullYear(), 4);
      },
      // ISO week-numbering year: 00, 01, ..., 99
      'GG': function GG(date) {
        return String(getISOYear(date)).substr(2);
      },
      // ISO week-numbering year: 1900, 1901, ..., 2099
      'GGGG': function GGGG(date) {
        return getISOYear(date);
      },
      // Hour: 0, 1, ... 23
      'H': function H(date) {
        return date.getHours();
      },
      // Hour: 00, 01, ..., 23
      'HH': function HH(date) {
        return addLeadingZeros(date.getHours(), 2);
      },
      // Hour: 1, 2, ..., 12
      'h': function h(date) {
        var hours = date.getHours();

        if (hours === 0) {
          return 12;
        } else if (hours > 12) {
          return hours % 12;
        } else {
          return hours;
        }
      },
      // Hour: 01, 02, ..., 12
      'hh': function hh(date) {
        return addLeadingZeros(formatters['h'](date), 2);
      },
      // Minute: 0, 1, ..., 59
      'm': function m(date) {
        return date.getMinutes();
      },
      // Minute: 00, 01, ..., 59
      'mm': function mm(date) {
        return addLeadingZeros(date.getMinutes(), 2);
      },
      // Second: 0, 1, ..., 59
      's': function s(date) {
        return date.getSeconds();
      },
      // Second: 00, 01, ..., 59
      'ss': function ss(date) {
        return addLeadingZeros(date.getSeconds(), 2);
      },
      // 1/10 of second: 0, 1, ..., 9
      'S': function S(date) {
        return Math.floor(date.getMilliseconds() / 100);
      },
      // 1/100 of second: 00, 01, ..., 99
      'SS': function SS(date) {
        return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2);
      },
      // Millisecond: 000, 001, ..., 999
      'SSS': function SSS(date) {
        return addLeadingZeros(date.getMilliseconds(), 3);
      },
      // Timezone: -01:00, +00:00, ... +12:00
      'Z': function Z(date) {
        return formatTimezone(date.getTimezoneOffset(), ':');
      },
      // Timezone: -0100, +0000, ... +1200
      'ZZ': function ZZ(date) {
        return formatTimezone(date.getTimezoneOffset());
      },
      // Seconds timestamp: 512969520
      'X': function X(date) {
        return Math.floor(date.getTime() / 1000);
      },
      // Milliseconds timestamp: 512969520900
      'x': function x(date) {
        return date.getTime();
      }
    };

    function buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp) {
      var array = formatStr.match(formattingTokensRegExp);
      var length = array.length;
      var i;
      var formatter;

      for (i = 0; i < length; i++) {
        formatter = localeFormatters[array[i]] || formatters[array[i]];

        if (formatter) {
          array[i] = formatter;
        } else {
          array[i] = removeFormattingTokens(array[i]);
        }
      }

      return function (date) {
        var output = '';

        for (var i = 0; i < length; i++) {
          if (array[i] instanceof Function) {
            output += array[i](date, formatters);
          } else {
            output += array[i];
          }
        }

        return output;
      };
    }

    function removeFormattingTokens(input) {
      if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|]$/g, '');
      }

      return input.replace(/\\/g, '');
    }

    function formatTimezone(offset, delimeter) {
      delimeter = delimeter || '';
      var sign = offset > 0 ? '-' : '+';
      var absOffset = Math.abs(offset);
      var hours = Math.floor(absOffset / 60);
      var minutes = absOffset % 60;
      return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2);
    }

    function addLeadingZeros(number, targetLength) {
      var output = Math.abs(number).toString();

      while (output.length < targetLength) {
        output = '0' + output;
      }

      return output;
    }

    module.exports = format;
    /***/
  },

  /***/
  "./node_modules/date-fns/get_date/index.js":
  /*!*************************************************!*\
    !*** ./node_modules/date-fns/get_date/index.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsGet_dateIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Day Helpers
     * @summary Get the day of the month of the given date.
     *
     * @description
     * Get the day of the month of the given date.
     *
     * @param {Date|String|Number} date - the given date
     * @returns {Number} the day of month
     *
     * @example
     * // Which day of the month is 29 February 2012?
     * var result = getDate(new Date(2012, 1, 29))
     * //=> 29
     */


    function getDate(dirtyDate) {
      var date = parse(dirtyDate);
      var dayOfMonth = date.getDate();
      return dayOfMonth;
    }

    module.exports = getDate;
    /***/
  },

  /***/
  "./node_modules/date-fns/get_day/index.js":
  /*!************************************************!*\
    !*** ./node_modules/date-fns/get_day/index.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsGet_dayIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Weekday Helpers
     * @summary Get the day of the week of the given date.
     *
     * @description
     * Get the day of the week of the given date.
     *
     * @param {Date|String|Number} date - the given date
     * @returns {Number} the day of week
     *
     * @example
     * // Which day of the week is 29 February 2012?
     * var result = getDay(new Date(2012, 1, 29))
     * //=> 3
     */


    function getDay(dirtyDate) {
      var date = parse(dirtyDate);
      var day = date.getDay();
      return day;
    }

    module.exports = getDay;
    /***/
  },

  /***/
  "./node_modules/date-fns/get_day_of_year/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/date-fns/get_day_of_year/index.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsGet_day_of_yearIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var startOfYear = __webpack_require__(
    /*! ../start_of_year/index.js */
    "./node_modules/date-fns/start_of_year/index.js");

    var differenceInCalendarDays = __webpack_require__(
    /*! ../difference_in_calendar_days/index.js */
    "./node_modules/date-fns/difference_in_calendar_days/index.js");
    /**
     * @category Day Helpers
     * @summary Get the day of the year of the given date.
     *
     * @description
     * Get the day of the year of the given date.
     *
     * @param {Date|String|Number} date - the given date
     * @returns {Number} the day of year
     *
     * @example
     * // Which day of the year is 2 July 2014?
     * var result = getDayOfYear(new Date(2014, 6, 2))
     * //=> 183
     */


    function getDayOfYear(dirtyDate) {
      var date = parse(dirtyDate);
      var diff = differenceInCalendarDays(date, startOfYear(date));
      var dayOfYear = diff + 1;
      return dayOfYear;
    }

    module.exports = getDayOfYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/get_days_in_month/index.js":
  /*!**********************************************************!*\
    !*** ./node_modules/date-fns/get_days_in_month/index.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsGet_days_in_monthIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Month Helpers
     * @summary Get the number of days in a month of the given date.
     *
     * @description
     * Get the number of days in a month of the given date.
     *
     * @param {Date|String|Number} date - the given date
     * @returns {Number} the number of days in a month
     *
     * @example
     * // How many days are in February 2000?
     * var result = getDaysInMonth(new Date(2000, 1))
     * //=> 29
     */


    function getDaysInMonth(dirtyDate) {
      var date = parse(dirtyDate);
      var year = date.getFullYear();
      var monthIndex = date.getMonth();
      var lastDayOfMonth = new Date(0);
      lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
      lastDayOfMonth.setHours(0, 0, 0, 0);
      return lastDayOfMonth.getDate();
    }

    module.exports = getDaysInMonth;
    /***/
  },

  /***/
  "./node_modules/date-fns/get_days_in_year/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/date-fns/get_days_in_year/index.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsGet_days_in_yearIndexJs(module, exports, __webpack_require__) {
    var isLeapYear = __webpack_require__(
    /*! ../is_leap_year/index.js */
    "./node_modules/date-fns/is_leap_year/index.js");
    /**
     * @category Year Helpers
     * @summary Get the number of days in a year of the given date.
     *
     * @description
     * Get the number of days in a year of the given date.
     *
     * @param {Date|String|Number} date - the given date
     * @returns {Number} the number of days in a year
     *
     * @example
     * // How many days are in 2012?
     * var result = getDaysInYear(new Date(2012, 0, 1))
     * //=> 366
     */


    function getDaysInYear(dirtyDate) {
      return isLeapYear(dirtyDate) ? 366 : 365;
    }

    module.exports = getDaysInYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/get_hours/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/date-fns/get_hours/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsGet_hoursIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Hour Helpers
     * @summary Get the hours of the given date.
     *
     * @description
     * Get the hours of the given date.
     *
     * @param {Date|String|Number} date - the given date
     * @returns {Number} the hours
     *
     * @example
     * // Get the hours of 29 February 2012 11:45:00:
     * var result = getHours(new Date(2012, 1, 29, 11, 45))
     * //=> 11
     */


    function getHours(dirtyDate) {
      var date = parse(dirtyDate);
      var hours = date.getHours();
      return hours;
    }

    module.exports = getHours;
    /***/
  },

  /***/
  "./node_modules/date-fns/get_iso_day/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/get_iso_day/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsGet_iso_dayIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Weekday Helpers
     * @summary Get the day of the ISO week of the given date.
     *
     * @description
     * Get the day of the ISO week of the given date,
     * which is 7 for Sunday, 1 for Monday etc.
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} date - the given date
     * @returns {Number} the day of ISO week
     *
     * @example
     * // Which day of the ISO week is 26 February 2012?
     * var result = getISODay(new Date(2012, 1, 26))
     * //=> 7
     */


    function getISODay(dirtyDate) {
      var date = parse(dirtyDate);
      var day = date.getDay();

      if (day === 0) {
        day = 7;
      }

      return day;
    }

    module.exports = getISODay;
    /***/
  },

  /***/
  "./node_modules/date-fns/get_iso_week/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/get_iso_week/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsGet_iso_weekIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var startOfISOWeek = __webpack_require__(
    /*! ../start_of_iso_week/index.js */
    "./node_modules/date-fns/start_of_iso_week/index.js");

    var startOfISOYear = __webpack_require__(
    /*! ../start_of_iso_year/index.js */
    "./node_modules/date-fns/start_of_iso_year/index.js");

    var MILLISECONDS_IN_WEEK = 604800000;
    /**
     * @category ISO Week Helpers
     * @summary Get the ISO week of the given date.
     *
     * @description
     * Get the ISO week of the given date.
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} date - the given date
     * @returns {Number} the ISO week
     *
     * @example
     * // Which week of the ISO-week numbering year is 2 January 2005?
     * var result = getISOWeek(new Date(2005, 0, 2))
     * //=> 53
     */

    function getISOWeek(dirtyDate) {
      var date = parse(dirtyDate);
      var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime(); // Round the number of days to the nearest integer
      // because the number of milliseconds in a week is not constant
      // (e.g. it's different in the week of the daylight saving time clock shift)

      return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
    }

    module.exports = getISOWeek;
    /***/
  },

  /***/
  "./node_modules/date-fns/get_iso_weeks_in_year/index.js":
  /*!**************************************************************!*\
    !*** ./node_modules/date-fns/get_iso_weeks_in_year/index.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsGet_iso_weeks_in_yearIndexJs(module, exports, __webpack_require__) {
    var startOfISOYear = __webpack_require__(
    /*! ../start_of_iso_year/index.js */
    "./node_modules/date-fns/start_of_iso_year/index.js");

    var addWeeks = __webpack_require__(
    /*! ../add_weeks/index.js */
    "./node_modules/date-fns/add_weeks/index.js");

    var MILLISECONDS_IN_WEEK = 604800000;
    /**
     * @category ISO Week-Numbering Year Helpers
     * @summary Get the number of weeks in an ISO week-numbering year of the given date.
     *
     * @description
     * Get the number of weeks in an ISO week-numbering year of the given date.
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} date - the given date
     * @returns {Number} the number of ISO weeks in a year
     *
     * @example
     * // How many weeks are in ISO week-numbering year 2015?
     * var result = getISOWeeksInYear(new Date(2015, 1, 11))
     * //=> 53
     */

    function getISOWeeksInYear(dirtyDate) {
      var thisYear = startOfISOYear(dirtyDate);
      var nextYear = startOfISOYear(addWeeks(thisYear, 60));
      var diff = nextYear.valueOf() - thisYear.valueOf(); // Round the number of weeks to the nearest integer
      // because the number of milliseconds in a week is not constant
      // (e.g. it's different in the week of the daylight saving time clock shift)

      return Math.round(diff / MILLISECONDS_IN_WEEK);
    }

    module.exports = getISOWeeksInYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/get_iso_year/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/get_iso_year/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsGet_iso_yearIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var startOfISOWeek = __webpack_require__(
    /*! ../start_of_iso_week/index.js */
    "./node_modules/date-fns/start_of_iso_week/index.js");
    /**
     * @category ISO Week-Numbering Year Helpers
     * @summary Get the ISO week-numbering year of the given date.
     *
     * @description
     * Get the ISO week-numbering year of the given date,
     * which always starts 3 days before the year's first Thursday.
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} date - the given date
     * @returns {Number} the ISO week-numbering year
     *
     * @example
     * // Which ISO-week numbering year is 2 January 2005?
     * var result = getISOYear(new Date(2005, 0, 2))
     * //=> 2004
     */


    function getISOYear(dirtyDate) {
      var date = parse(dirtyDate);
      var year = date.getFullYear();
      var fourthOfJanuaryOfNextYear = new Date(0);
      fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
      fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
      var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
      var fourthOfJanuaryOfThisYear = new Date(0);
      fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
      fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
      var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);

      if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
      } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
      } else {
        return year - 1;
      }
    }

    module.exports = getISOYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/get_milliseconds/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/date-fns/get_milliseconds/index.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsGet_millisecondsIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Millisecond Helpers
     * @summary Get the milliseconds of the given date.
     *
     * @description
     * Get the milliseconds of the given date.
     *
     * @param {Date|String|Number} date - the given date
     * @returns {Number} the milliseconds
     *
     * @example
     * // Get the milliseconds of 29 February 2012 11:45:05.123:
     * var result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
     * //=> 123
     */


    function getMilliseconds(dirtyDate) {
      var date = parse(dirtyDate);
      var milliseconds = date.getMilliseconds();
      return milliseconds;
    }

    module.exports = getMilliseconds;
    /***/
  },

  /***/
  "./node_modules/date-fns/get_minutes/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/get_minutes/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsGet_minutesIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Minute Helpers
     * @summary Get the minutes of the given date.
     *
     * @description
     * Get the minutes of the given date.
     *
     * @param {Date|String|Number} date - the given date
     * @returns {Number} the minutes
     *
     * @example
     * // Get the minutes of 29 February 2012 11:45:05:
     * var result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
     * //=> 45
     */


    function getMinutes(dirtyDate) {
      var date = parse(dirtyDate);
      var minutes = date.getMinutes();
      return minutes;
    }

    module.exports = getMinutes;
    /***/
  },

  /***/
  "./node_modules/date-fns/get_month/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/date-fns/get_month/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsGet_monthIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Month Helpers
     * @summary Get the month of the given date.
     *
     * @description
     * Get the month of the given date.
     *
     * @param {Date|String|Number} date - the given date
     * @returns {Number} the month
     *
     * @example
     * // Which month is 29 February 2012?
     * var result = getMonth(new Date(2012, 1, 29))
     * //=> 1
     */


    function getMonth(dirtyDate) {
      var date = parse(dirtyDate);
      var month = date.getMonth();
      return month;
    }

    module.exports = getMonth;
    /***/
  },

  /***/
  "./node_modules/date-fns/get_overlapping_days_in_ranges/index.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/date-fns/get_overlapping_days_in_ranges/index.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsGet_overlapping_days_in_rangesIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
    /**
     * @category Range Helpers
     * @summary Get the number of days that overlap in two date ranges
     *
     * @description
     * Get the number of days that overlap in two date ranges
     *
     * @param {Date|String|Number} initialRangeStartDate - the start of the initial range
     * @param {Date|String|Number} initialRangeEndDate - the end of the initial range
     * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with
     * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with
     * @returns {Number} the number of days that overlap in two date ranges
     * @throws {Error} startDate of a date range cannot be after its endDate
     *
     * @example
     * // For overlapping date ranges adds 1 for each started overlapping day:
     * getOverlappingDaysInRanges(
     *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)
     * )
     * //=> 3
     *
     * @example
     * // For non-overlapping date ranges returns 0:
     * getOverlappingDaysInRanges(
     *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)
     * )
     * //=> 0
     */

    function getOverlappingDaysInRanges(dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {
      var initialStartTime = parse(dirtyInitialRangeStartDate).getTime();
      var initialEndTime = parse(dirtyInitialRangeEndDate).getTime();
      var comparedStartTime = parse(dirtyComparedRangeStartDate).getTime();
      var comparedEndTime = parse(dirtyComparedRangeEndDate).getTime();

      if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {
        throw new Error('The start of the range cannot be after the end of the range');
      }

      var isOverlapping = initialStartTime < comparedEndTime && comparedStartTime < initialEndTime;

      if (!isOverlapping) {
        return 0;
      }

      var overlapStartDate = comparedStartTime < initialStartTime ? initialStartTime : comparedStartTime;
      var overlapEndDate = comparedEndTime > initialEndTime ? initialEndTime : comparedEndTime;
      var differenceInMs = overlapEndDate - overlapStartDate;
      return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY);
    }

    module.exports = getOverlappingDaysInRanges;
    /***/
  },

  /***/
  "./node_modules/date-fns/get_quarter/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/get_quarter/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsGet_quarterIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Quarter Helpers
     * @summary Get the year quarter of the given date.
     *
     * @description
     * Get the year quarter of the given date.
     *
     * @param {Date|String|Number} date - the given date
     * @returns {Number} the quarter
     *
     * @example
     * // Which quarter is 2 July 2014?
     * var result = getQuarter(new Date(2014, 6, 2))
     * //=> 3
     */


    function getQuarter(dirtyDate) {
      var date = parse(dirtyDate);
      var quarter = Math.floor(date.getMonth() / 3) + 1;
      return quarter;
    }

    module.exports = getQuarter;
    /***/
  },

  /***/
  "./node_modules/date-fns/get_seconds/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/get_seconds/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsGet_secondsIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Second Helpers
     * @summary Get the seconds of the given date.
     *
     * @description
     * Get the seconds of the given date.
     *
     * @param {Date|String|Number} date - the given date
     * @returns {Number} the seconds
     *
     * @example
     * // Get the seconds of 29 February 2012 11:45:05.123:
     * var result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
     * //=> 5
     */


    function getSeconds(dirtyDate) {
      var date = parse(dirtyDate);
      var seconds = date.getSeconds();
      return seconds;
    }

    module.exports = getSeconds;
    /***/
  },

  /***/
  "./node_modules/date-fns/get_time/index.js":
  /*!*************************************************!*\
    !*** ./node_modules/date-fns/get_time/index.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsGet_timeIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Timestamp Helpers
     * @summary Get the milliseconds timestamp of the given date.
     *
     * @description
     * Get the milliseconds timestamp of the given date.
     *
     * @param {Date|String|Number} date - the given date
     * @returns {Number} the timestamp
     *
     * @example
     * // Get the timestamp of 29 February 2012 11:45:05.123:
     * var result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
     * //=> 1330515905123
     */


    function getTime(dirtyDate) {
      var date = parse(dirtyDate);
      var timestamp = date.getTime();
      return timestamp;
    }

    module.exports = getTime;
    /***/
  },

  /***/
  "./node_modules/date-fns/get_year/index.js":
  /*!*************************************************!*\
    !*** ./node_modules/date-fns/get_year/index.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsGet_yearIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Year Helpers
     * @summary Get the year of the given date.
     *
     * @description
     * Get the year of the given date.
     *
     * @param {Date|String|Number} date - the given date
     * @returns {Number} the year
     *
     * @example
     * // Which year is 2 July 2014?
     * var result = getYear(new Date(2014, 6, 2))
     * //=> 2014
     */


    function getYear(dirtyDate) {
      var date = parse(dirtyDate);
      var year = date.getFullYear();
      return year;
    }

    module.exports = getYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/index.js":
  /*!****************************************!*\
    !*** ./node_modules/date-fns/index.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIndexJs(module, exports, __webpack_require__) {
    module.exports = {
      addDays: __webpack_require__(
      /*! ./add_days/index.js */
      "./node_modules/date-fns/add_days/index.js"),
      addHours: __webpack_require__(
      /*! ./add_hours/index.js */
      "./node_modules/date-fns/add_hours/index.js"),
      addISOYears: __webpack_require__(
      /*! ./add_iso_years/index.js */
      "./node_modules/date-fns/add_iso_years/index.js"),
      addMilliseconds: __webpack_require__(
      /*! ./add_milliseconds/index.js */
      "./node_modules/date-fns/add_milliseconds/index.js"),
      addMinutes: __webpack_require__(
      /*! ./add_minutes/index.js */
      "./node_modules/date-fns/add_minutes/index.js"),
      addMonths: __webpack_require__(
      /*! ./add_months/index.js */
      "./node_modules/date-fns/add_months/index.js"),
      addQuarters: __webpack_require__(
      /*! ./add_quarters/index.js */
      "./node_modules/date-fns/add_quarters/index.js"),
      addSeconds: __webpack_require__(
      /*! ./add_seconds/index.js */
      "./node_modules/date-fns/add_seconds/index.js"),
      addWeeks: __webpack_require__(
      /*! ./add_weeks/index.js */
      "./node_modules/date-fns/add_weeks/index.js"),
      addYears: __webpack_require__(
      /*! ./add_years/index.js */
      "./node_modules/date-fns/add_years/index.js"),
      areRangesOverlapping: __webpack_require__(
      /*! ./are_ranges_overlapping/index.js */
      "./node_modules/date-fns/are_ranges_overlapping/index.js"),
      closestIndexTo: __webpack_require__(
      /*! ./closest_index_to/index.js */
      "./node_modules/date-fns/closest_index_to/index.js"),
      closestTo: __webpack_require__(
      /*! ./closest_to/index.js */
      "./node_modules/date-fns/closest_to/index.js"),
      compareAsc: __webpack_require__(
      /*! ./compare_asc/index.js */
      "./node_modules/date-fns/compare_asc/index.js"),
      compareDesc: __webpack_require__(
      /*! ./compare_desc/index.js */
      "./node_modules/date-fns/compare_desc/index.js"),
      differenceInCalendarDays: __webpack_require__(
      /*! ./difference_in_calendar_days/index.js */
      "./node_modules/date-fns/difference_in_calendar_days/index.js"),
      differenceInCalendarISOWeeks: __webpack_require__(
      /*! ./difference_in_calendar_iso_weeks/index.js */
      "./node_modules/date-fns/difference_in_calendar_iso_weeks/index.js"),
      differenceInCalendarISOYears: __webpack_require__(
      /*! ./difference_in_calendar_iso_years/index.js */
      "./node_modules/date-fns/difference_in_calendar_iso_years/index.js"),
      differenceInCalendarMonths: __webpack_require__(
      /*! ./difference_in_calendar_months/index.js */
      "./node_modules/date-fns/difference_in_calendar_months/index.js"),
      differenceInCalendarQuarters: __webpack_require__(
      /*! ./difference_in_calendar_quarters/index.js */
      "./node_modules/date-fns/difference_in_calendar_quarters/index.js"),
      differenceInCalendarWeeks: __webpack_require__(
      /*! ./difference_in_calendar_weeks/index.js */
      "./node_modules/date-fns/difference_in_calendar_weeks/index.js"),
      differenceInCalendarYears: __webpack_require__(
      /*! ./difference_in_calendar_years/index.js */
      "./node_modules/date-fns/difference_in_calendar_years/index.js"),
      differenceInDays: __webpack_require__(
      /*! ./difference_in_days/index.js */
      "./node_modules/date-fns/difference_in_days/index.js"),
      differenceInHours: __webpack_require__(
      /*! ./difference_in_hours/index.js */
      "./node_modules/date-fns/difference_in_hours/index.js"),
      differenceInISOYears: __webpack_require__(
      /*! ./difference_in_iso_years/index.js */
      "./node_modules/date-fns/difference_in_iso_years/index.js"),
      differenceInMilliseconds: __webpack_require__(
      /*! ./difference_in_milliseconds/index.js */
      "./node_modules/date-fns/difference_in_milliseconds/index.js"),
      differenceInMinutes: __webpack_require__(
      /*! ./difference_in_minutes/index.js */
      "./node_modules/date-fns/difference_in_minutes/index.js"),
      differenceInMonths: __webpack_require__(
      /*! ./difference_in_months/index.js */
      "./node_modules/date-fns/difference_in_months/index.js"),
      differenceInQuarters: __webpack_require__(
      /*! ./difference_in_quarters/index.js */
      "./node_modules/date-fns/difference_in_quarters/index.js"),
      differenceInSeconds: __webpack_require__(
      /*! ./difference_in_seconds/index.js */
      "./node_modules/date-fns/difference_in_seconds/index.js"),
      differenceInWeeks: __webpack_require__(
      /*! ./difference_in_weeks/index.js */
      "./node_modules/date-fns/difference_in_weeks/index.js"),
      differenceInYears: __webpack_require__(
      /*! ./difference_in_years/index.js */
      "./node_modules/date-fns/difference_in_years/index.js"),
      distanceInWords: __webpack_require__(
      /*! ./distance_in_words/index.js */
      "./node_modules/date-fns/distance_in_words/index.js"),
      distanceInWordsStrict: __webpack_require__(
      /*! ./distance_in_words_strict/index.js */
      "./node_modules/date-fns/distance_in_words_strict/index.js"),
      distanceInWordsToNow: __webpack_require__(
      /*! ./distance_in_words_to_now/index.js */
      "./node_modules/date-fns/distance_in_words_to_now/index.js"),
      eachDay: __webpack_require__(
      /*! ./each_day/index.js */
      "./node_modules/date-fns/each_day/index.js"),
      endOfDay: __webpack_require__(
      /*! ./end_of_day/index.js */
      "./node_modules/date-fns/end_of_day/index.js"),
      endOfHour: __webpack_require__(
      /*! ./end_of_hour/index.js */
      "./node_modules/date-fns/end_of_hour/index.js"),
      endOfISOWeek: __webpack_require__(
      /*! ./end_of_iso_week/index.js */
      "./node_modules/date-fns/end_of_iso_week/index.js"),
      endOfISOYear: __webpack_require__(
      /*! ./end_of_iso_year/index.js */
      "./node_modules/date-fns/end_of_iso_year/index.js"),
      endOfMinute: __webpack_require__(
      /*! ./end_of_minute/index.js */
      "./node_modules/date-fns/end_of_minute/index.js"),
      endOfMonth: __webpack_require__(
      /*! ./end_of_month/index.js */
      "./node_modules/date-fns/end_of_month/index.js"),
      endOfQuarter: __webpack_require__(
      /*! ./end_of_quarter/index.js */
      "./node_modules/date-fns/end_of_quarter/index.js"),
      endOfSecond: __webpack_require__(
      /*! ./end_of_second/index.js */
      "./node_modules/date-fns/end_of_second/index.js"),
      endOfToday: __webpack_require__(
      /*! ./end_of_today/index.js */
      "./node_modules/date-fns/end_of_today/index.js"),
      endOfTomorrow: __webpack_require__(
      /*! ./end_of_tomorrow/index.js */
      "./node_modules/date-fns/end_of_tomorrow/index.js"),
      endOfWeek: __webpack_require__(
      /*! ./end_of_week/index.js */
      "./node_modules/date-fns/end_of_week/index.js"),
      endOfYear: __webpack_require__(
      /*! ./end_of_year/index.js */
      "./node_modules/date-fns/end_of_year/index.js"),
      endOfYesterday: __webpack_require__(
      /*! ./end_of_yesterday/index.js */
      "./node_modules/date-fns/end_of_yesterday/index.js"),
      format: __webpack_require__(
      /*! ./format/index.js */
      "./node_modules/date-fns/format/index.js"),
      getDate: __webpack_require__(
      /*! ./get_date/index.js */
      "./node_modules/date-fns/get_date/index.js"),
      getDay: __webpack_require__(
      /*! ./get_day/index.js */
      "./node_modules/date-fns/get_day/index.js"),
      getDayOfYear: __webpack_require__(
      /*! ./get_day_of_year/index.js */
      "./node_modules/date-fns/get_day_of_year/index.js"),
      getDaysInMonth: __webpack_require__(
      /*! ./get_days_in_month/index.js */
      "./node_modules/date-fns/get_days_in_month/index.js"),
      getDaysInYear: __webpack_require__(
      /*! ./get_days_in_year/index.js */
      "./node_modules/date-fns/get_days_in_year/index.js"),
      getHours: __webpack_require__(
      /*! ./get_hours/index.js */
      "./node_modules/date-fns/get_hours/index.js"),
      getISODay: __webpack_require__(
      /*! ./get_iso_day/index.js */
      "./node_modules/date-fns/get_iso_day/index.js"),
      getISOWeek: __webpack_require__(
      /*! ./get_iso_week/index.js */
      "./node_modules/date-fns/get_iso_week/index.js"),
      getISOWeeksInYear: __webpack_require__(
      /*! ./get_iso_weeks_in_year/index.js */
      "./node_modules/date-fns/get_iso_weeks_in_year/index.js"),
      getISOYear: __webpack_require__(
      /*! ./get_iso_year/index.js */
      "./node_modules/date-fns/get_iso_year/index.js"),
      getMilliseconds: __webpack_require__(
      /*! ./get_milliseconds/index.js */
      "./node_modules/date-fns/get_milliseconds/index.js"),
      getMinutes: __webpack_require__(
      /*! ./get_minutes/index.js */
      "./node_modules/date-fns/get_minutes/index.js"),
      getMonth: __webpack_require__(
      /*! ./get_month/index.js */
      "./node_modules/date-fns/get_month/index.js"),
      getOverlappingDaysInRanges: __webpack_require__(
      /*! ./get_overlapping_days_in_ranges/index.js */
      "./node_modules/date-fns/get_overlapping_days_in_ranges/index.js"),
      getQuarter: __webpack_require__(
      /*! ./get_quarter/index.js */
      "./node_modules/date-fns/get_quarter/index.js"),
      getSeconds: __webpack_require__(
      /*! ./get_seconds/index.js */
      "./node_modules/date-fns/get_seconds/index.js"),
      getTime: __webpack_require__(
      /*! ./get_time/index.js */
      "./node_modules/date-fns/get_time/index.js"),
      getYear: __webpack_require__(
      /*! ./get_year/index.js */
      "./node_modules/date-fns/get_year/index.js"),
      isAfter: __webpack_require__(
      /*! ./is_after/index.js */
      "./node_modules/date-fns/is_after/index.js"),
      isBefore: __webpack_require__(
      /*! ./is_before/index.js */
      "./node_modules/date-fns/is_before/index.js"),
      isDate: __webpack_require__(
      /*! ./is_date/index.js */
      "./node_modules/date-fns/is_date/index.js"),
      isEqual: __webpack_require__(
      /*! ./is_equal/index.js */
      "./node_modules/date-fns/is_equal/index.js"),
      isFirstDayOfMonth: __webpack_require__(
      /*! ./is_first_day_of_month/index.js */
      "./node_modules/date-fns/is_first_day_of_month/index.js"),
      isFriday: __webpack_require__(
      /*! ./is_friday/index.js */
      "./node_modules/date-fns/is_friday/index.js"),
      isFuture: __webpack_require__(
      /*! ./is_future/index.js */
      "./node_modules/date-fns/is_future/index.js"),
      isLastDayOfMonth: __webpack_require__(
      /*! ./is_last_day_of_month/index.js */
      "./node_modules/date-fns/is_last_day_of_month/index.js"),
      isLeapYear: __webpack_require__(
      /*! ./is_leap_year/index.js */
      "./node_modules/date-fns/is_leap_year/index.js"),
      isMonday: __webpack_require__(
      /*! ./is_monday/index.js */
      "./node_modules/date-fns/is_monday/index.js"),
      isPast: __webpack_require__(
      /*! ./is_past/index.js */
      "./node_modules/date-fns/is_past/index.js"),
      isSameDay: __webpack_require__(
      /*! ./is_same_day/index.js */
      "./node_modules/date-fns/is_same_day/index.js"),
      isSameHour: __webpack_require__(
      /*! ./is_same_hour/index.js */
      "./node_modules/date-fns/is_same_hour/index.js"),
      isSameISOWeek: __webpack_require__(
      /*! ./is_same_iso_week/index.js */
      "./node_modules/date-fns/is_same_iso_week/index.js"),
      isSameISOYear: __webpack_require__(
      /*! ./is_same_iso_year/index.js */
      "./node_modules/date-fns/is_same_iso_year/index.js"),
      isSameMinute: __webpack_require__(
      /*! ./is_same_minute/index.js */
      "./node_modules/date-fns/is_same_minute/index.js"),
      isSameMonth: __webpack_require__(
      /*! ./is_same_month/index.js */
      "./node_modules/date-fns/is_same_month/index.js"),
      isSameQuarter: __webpack_require__(
      /*! ./is_same_quarter/index.js */
      "./node_modules/date-fns/is_same_quarter/index.js"),
      isSameSecond: __webpack_require__(
      /*! ./is_same_second/index.js */
      "./node_modules/date-fns/is_same_second/index.js"),
      isSameWeek: __webpack_require__(
      /*! ./is_same_week/index.js */
      "./node_modules/date-fns/is_same_week/index.js"),
      isSameYear: __webpack_require__(
      /*! ./is_same_year/index.js */
      "./node_modules/date-fns/is_same_year/index.js"),
      isSaturday: __webpack_require__(
      /*! ./is_saturday/index.js */
      "./node_modules/date-fns/is_saturday/index.js"),
      isSunday: __webpack_require__(
      /*! ./is_sunday/index.js */
      "./node_modules/date-fns/is_sunday/index.js"),
      isThisHour: __webpack_require__(
      /*! ./is_this_hour/index.js */
      "./node_modules/date-fns/is_this_hour/index.js"),
      isThisISOWeek: __webpack_require__(
      /*! ./is_this_iso_week/index.js */
      "./node_modules/date-fns/is_this_iso_week/index.js"),
      isThisISOYear: __webpack_require__(
      /*! ./is_this_iso_year/index.js */
      "./node_modules/date-fns/is_this_iso_year/index.js"),
      isThisMinute: __webpack_require__(
      /*! ./is_this_minute/index.js */
      "./node_modules/date-fns/is_this_minute/index.js"),
      isThisMonth: __webpack_require__(
      /*! ./is_this_month/index.js */
      "./node_modules/date-fns/is_this_month/index.js"),
      isThisQuarter: __webpack_require__(
      /*! ./is_this_quarter/index.js */
      "./node_modules/date-fns/is_this_quarter/index.js"),
      isThisSecond: __webpack_require__(
      /*! ./is_this_second/index.js */
      "./node_modules/date-fns/is_this_second/index.js"),
      isThisWeek: __webpack_require__(
      /*! ./is_this_week/index.js */
      "./node_modules/date-fns/is_this_week/index.js"),
      isThisYear: __webpack_require__(
      /*! ./is_this_year/index.js */
      "./node_modules/date-fns/is_this_year/index.js"),
      isThursday: __webpack_require__(
      /*! ./is_thursday/index.js */
      "./node_modules/date-fns/is_thursday/index.js"),
      isToday: __webpack_require__(
      /*! ./is_today/index.js */
      "./node_modules/date-fns/is_today/index.js"),
      isTomorrow: __webpack_require__(
      /*! ./is_tomorrow/index.js */
      "./node_modules/date-fns/is_tomorrow/index.js"),
      isTuesday: __webpack_require__(
      /*! ./is_tuesday/index.js */
      "./node_modules/date-fns/is_tuesday/index.js"),
      isValid: __webpack_require__(
      /*! ./is_valid/index.js */
      "./node_modules/date-fns/is_valid/index.js"),
      isWednesday: __webpack_require__(
      /*! ./is_wednesday/index.js */
      "./node_modules/date-fns/is_wednesday/index.js"),
      isWeekend: __webpack_require__(
      /*! ./is_weekend/index.js */
      "./node_modules/date-fns/is_weekend/index.js"),
      isWithinRange: __webpack_require__(
      /*! ./is_within_range/index.js */
      "./node_modules/date-fns/is_within_range/index.js"),
      isYesterday: __webpack_require__(
      /*! ./is_yesterday/index.js */
      "./node_modules/date-fns/is_yesterday/index.js"),
      lastDayOfISOWeek: __webpack_require__(
      /*! ./last_day_of_iso_week/index.js */
      "./node_modules/date-fns/last_day_of_iso_week/index.js"),
      lastDayOfISOYear: __webpack_require__(
      /*! ./last_day_of_iso_year/index.js */
      "./node_modules/date-fns/last_day_of_iso_year/index.js"),
      lastDayOfMonth: __webpack_require__(
      /*! ./last_day_of_month/index.js */
      "./node_modules/date-fns/last_day_of_month/index.js"),
      lastDayOfQuarter: __webpack_require__(
      /*! ./last_day_of_quarter/index.js */
      "./node_modules/date-fns/last_day_of_quarter/index.js"),
      lastDayOfWeek: __webpack_require__(
      /*! ./last_day_of_week/index.js */
      "./node_modules/date-fns/last_day_of_week/index.js"),
      lastDayOfYear: __webpack_require__(
      /*! ./last_day_of_year/index.js */
      "./node_modules/date-fns/last_day_of_year/index.js"),
      max: __webpack_require__(
      /*! ./max/index.js */
      "./node_modules/date-fns/max/index.js"),
      min: __webpack_require__(
      /*! ./min/index.js */
      "./node_modules/date-fns/min/index.js"),
      parse: __webpack_require__(
      /*! ./parse/index.js */
      "./node_modules/date-fns/parse/index.js"),
      setDate: __webpack_require__(
      /*! ./set_date/index.js */
      "./node_modules/date-fns/set_date/index.js"),
      setDay: __webpack_require__(
      /*! ./set_day/index.js */
      "./node_modules/date-fns/set_day/index.js"),
      setDayOfYear: __webpack_require__(
      /*! ./set_day_of_year/index.js */
      "./node_modules/date-fns/set_day_of_year/index.js"),
      setHours: __webpack_require__(
      /*! ./set_hours/index.js */
      "./node_modules/date-fns/set_hours/index.js"),
      setISODay: __webpack_require__(
      /*! ./set_iso_day/index.js */
      "./node_modules/date-fns/set_iso_day/index.js"),
      setISOWeek: __webpack_require__(
      /*! ./set_iso_week/index.js */
      "./node_modules/date-fns/set_iso_week/index.js"),
      setISOYear: __webpack_require__(
      /*! ./set_iso_year/index.js */
      "./node_modules/date-fns/set_iso_year/index.js"),
      setMilliseconds: __webpack_require__(
      /*! ./set_milliseconds/index.js */
      "./node_modules/date-fns/set_milliseconds/index.js"),
      setMinutes: __webpack_require__(
      /*! ./set_minutes/index.js */
      "./node_modules/date-fns/set_minutes/index.js"),
      setMonth: __webpack_require__(
      /*! ./set_month/index.js */
      "./node_modules/date-fns/set_month/index.js"),
      setQuarter: __webpack_require__(
      /*! ./set_quarter/index.js */
      "./node_modules/date-fns/set_quarter/index.js"),
      setSeconds: __webpack_require__(
      /*! ./set_seconds/index.js */
      "./node_modules/date-fns/set_seconds/index.js"),
      setYear: __webpack_require__(
      /*! ./set_year/index.js */
      "./node_modules/date-fns/set_year/index.js"),
      startOfDay: __webpack_require__(
      /*! ./start_of_day/index.js */
      "./node_modules/date-fns/start_of_day/index.js"),
      startOfHour: __webpack_require__(
      /*! ./start_of_hour/index.js */
      "./node_modules/date-fns/start_of_hour/index.js"),
      startOfISOWeek: __webpack_require__(
      /*! ./start_of_iso_week/index.js */
      "./node_modules/date-fns/start_of_iso_week/index.js"),
      startOfISOYear: __webpack_require__(
      /*! ./start_of_iso_year/index.js */
      "./node_modules/date-fns/start_of_iso_year/index.js"),
      startOfMinute: __webpack_require__(
      /*! ./start_of_minute/index.js */
      "./node_modules/date-fns/start_of_minute/index.js"),
      startOfMonth: __webpack_require__(
      /*! ./start_of_month/index.js */
      "./node_modules/date-fns/start_of_month/index.js"),
      startOfQuarter: __webpack_require__(
      /*! ./start_of_quarter/index.js */
      "./node_modules/date-fns/start_of_quarter/index.js"),
      startOfSecond: __webpack_require__(
      /*! ./start_of_second/index.js */
      "./node_modules/date-fns/start_of_second/index.js"),
      startOfToday: __webpack_require__(
      /*! ./start_of_today/index.js */
      "./node_modules/date-fns/start_of_today/index.js"),
      startOfTomorrow: __webpack_require__(
      /*! ./start_of_tomorrow/index.js */
      "./node_modules/date-fns/start_of_tomorrow/index.js"),
      startOfWeek: __webpack_require__(
      /*! ./start_of_week/index.js */
      "./node_modules/date-fns/start_of_week/index.js"),
      startOfYear: __webpack_require__(
      /*! ./start_of_year/index.js */
      "./node_modules/date-fns/start_of_year/index.js"),
      startOfYesterday: __webpack_require__(
      /*! ./start_of_yesterday/index.js */
      "./node_modules/date-fns/start_of_yesterday/index.js"),
      subDays: __webpack_require__(
      /*! ./sub_days/index.js */
      "./node_modules/date-fns/sub_days/index.js"),
      subHours: __webpack_require__(
      /*! ./sub_hours/index.js */
      "./node_modules/date-fns/sub_hours/index.js"),
      subISOYears: __webpack_require__(
      /*! ./sub_iso_years/index.js */
      "./node_modules/date-fns/sub_iso_years/index.js"),
      subMilliseconds: __webpack_require__(
      /*! ./sub_milliseconds/index.js */
      "./node_modules/date-fns/sub_milliseconds/index.js"),
      subMinutes: __webpack_require__(
      /*! ./sub_minutes/index.js */
      "./node_modules/date-fns/sub_minutes/index.js"),
      subMonths: __webpack_require__(
      /*! ./sub_months/index.js */
      "./node_modules/date-fns/sub_months/index.js"),
      subQuarters: __webpack_require__(
      /*! ./sub_quarters/index.js */
      "./node_modules/date-fns/sub_quarters/index.js"),
      subSeconds: __webpack_require__(
      /*! ./sub_seconds/index.js */
      "./node_modules/date-fns/sub_seconds/index.js"),
      subWeeks: __webpack_require__(
      /*! ./sub_weeks/index.js */
      "./node_modules/date-fns/sub_weeks/index.js"),
      subYears: __webpack_require__(
      /*! ./sub_years/index.js */
      "./node_modules/date-fns/sub_years/index.js")
    };
    /***/
  },

  /***/
  "./node_modules/date-fns/is_after/index.js":
  /*!*************************************************!*\
    !*** ./node_modules/date-fns/is_after/index.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_afterIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Common Helpers
     * @summary Is the first date after the second one?
     *
     * @description
     * Is the first date after the second one?
     *
     * @param {Date|String|Number} date - the date that should be after the other one to return true
     * @param {Date|String|Number} dateToCompare - the date to compare with
     * @returns {Boolean} the first date is after the second date
     *
     * @example
     * // Is 10 July 1989 after 11 February 1987?
     * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
     * //=> true
     */


    function isAfter(dirtyDate, dirtyDateToCompare) {
      var date = parse(dirtyDate);
      var dateToCompare = parse(dirtyDateToCompare);
      return date.getTime() > dateToCompare.getTime();
    }

    module.exports = isAfter;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_before/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/date-fns/is_before/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_beforeIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Common Helpers
     * @summary Is the first date before the second one?
     *
     * @description
     * Is the first date before the second one?
     *
     * @param {Date|String|Number} date - the date that should be before the other one to return true
     * @param {Date|String|Number} dateToCompare - the date to compare with
     * @returns {Boolean} the first date is before the second date
     *
     * @example
     * // Is 10 July 1989 before 11 February 1987?
     * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
     * //=> false
     */


    function isBefore(dirtyDate, dirtyDateToCompare) {
      var date = parse(dirtyDate);
      var dateToCompare = parse(dirtyDateToCompare);
      return date.getTime() < dateToCompare.getTime();
    }

    module.exports = isBefore;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_date/index.js":
  /*!************************************************!*\
    !*** ./node_modules/date-fns/is_date/index.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_dateIndexJs(module, exports) {
    /**
     * @category Common Helpers
     * @summary Is the given argument an instance of Date?
     *
     * @description
     * Is the given argument an instance of Date?
     *
     * @param {*} argument - the argument to check
     * @returns {Boolean} the given argument is an instance of Date
     *
     * @example
     * // Is 'mayonnaise' a Date?
     * var result = isDate('mayonnaise')
     * //=> false
     */
    function isDate(argument) {
      return argument instanceof Date;
    }

    module.exports = isDate;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_equal/index.js":
  /*!*************************************************!*\
    !*** ./node_modules/date-fns/is_equal/index.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_equalIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Common Helpers
     * @summary Are the given dates equal?
     *
     * @description
     * Are the given dates equal?
     *
     * @param {Date|String|Number} dateLeft - the first date to compare
     * @param {Date|String|Number} dateRight - the second date to compare
     * @returns {Boolean} the dates are equal
     *
     * @example
     * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
     * var result = isEqual(
     *   new Date(2014, 6, 2, 6, 30, 45, 0)
     *   new Date(2014, 6, 2, 6, 30, 45, 500)
     * )
     * //=> false
     */


    function isEqual(dirtyLeftDate, dirtyRightDate) {
      var dateLeft = parse(dirtyLeftDate);
      var dateRight = parse(dirtyRightDate);
      return dateLeft.getTime() === dateRight.getTime();
    }

    module.exports = isEqual;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_first_day_of_month/index.js":
  /*!**************************************************************!*\
    !*** ./node_modules/date-fns/is_first_day_of_month/index.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_first_day_of_monthIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Month Helpers
     * @summary Is the given date the first day of a month?
     *
     * @description
     * Is the given date the first day of a month?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is the first day of a month
     *
     * @example
     * // Is 1 September 2014 the first day of a month?
     * var result = isFirstDayOfMonth(new Date(2014, 8, 1))
     * //=> true
     */


    function isFirstDayOfMonth(dirtyDate) {
      return parse(dirtyDate).getDate() === 1;
    }

    module.exports = isFirstDayOfMonth;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_friday/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/date-fns/is_friday/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_fridayIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Weekday Helpers
     * @summary Is the given date Friday?
     *
     * @description
     * Is the given date Friday?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is Friday
     *
     * @example
     * // Is 26 September 2014 Friday?
     * var result = isFriday(new Date(2014, 8, 26))
     * //=> true
     */


    function isFriday(dirtyDate) {
      return parse(dirtyDate).getDay() === 5;
    }

    module.exports = isFriday;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_future/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/date-fns/is_future/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_futureIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Common Helpers
     * @summary Is the given date in the future?
     *
     * @description
     * Is the given date in the future?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is in the future
     *
     * @example
     * // If today is 6 October 2014, is 31 December 2014 in the future?
     * var result = isFuture(new Date(2014, 11, 31))
     * //=> true
     */


    function isFuture(dirtyDate) {
      return parse(dirtyDate).getTime() > new Date().getTime();
    }

    module.exports = isFuture;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_last_day_of_month/index.js":
  /*!*************************************************************!*\
    !*** ./node_modules/date-fns/is_last_day_of_month/index.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_last_day_of_monthIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var endOfDay = __webpack_require__(
    /*! ../end_of_day/index.js */
    "./node_modules/date-fns/end_of_day/index.js");

    var endOfMonth = __webpack_require__(
    /*! ../end_of_month/index.js */
    "./node_modules/date-fns/end_of_month/index.js");
    /**
     * @category Month Helpers
     * @summary Is the given date the last day of a month?
     *
     * @description
     * Is the given date the last day of a month?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is the last day of a month
     *
     * @example
     * // Is 28 February 2014 the last day of a month?
     * var result = isLastDayOfMonth(new Date(2014, 1, 28))
     * //=> true
     */


    function isLastDayOfMonth(dirtyDate) {
      var date = parse(dirtyDate);
      return endOfDay(date).getTime() === endOfMonth(date).getTime();
    }

    module.exports = isLastDayOfMonth;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_leap_year/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/is_leap_year/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_leap_yearIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Year Helpers
     * @summary Is the given date in the leap year?
     *
     * @description
     * Is the given date in the leap year?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is in the leap year
     *
     * @example
     * // Is 1 September 2012 in the leap year?
     * var result = isLeapYear(new Date(2012, 8, 1))
     * //=> true
     */


    function isLeapYear(dirtyDate) {
      var date = parse(dirtyDate);
      var year = date.getFullYear();
      return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
    }

    module.exports = isLeapYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_monday/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/date-fns/is_monday/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_mondayIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Weekday Helpers
     * @summary Is the given date Monday?
     *
     * @description
     * Is the given date Monday?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is Monday
     *
     * @example
     * // Is 22 September 2014 Monday?
     * var result = isMonday(new Date(2014, 8, 22))
     * //=> true
     */


    function isMonday(dirtyDate) {
      return parse(dirtyDate).getDay() === 1;
    }

    module.exports = isMonday;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_past/index.js":
  /*!************************************************!*\
    !*** ./node_modules/date-fns/is_past/index.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_pastIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Common Helpers
     * @summary Is the given date in the past?
     *
     * @description
     * Is the given date in the past?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is in the past
     *
     * @example
     * // If today is 6 October 2014, is 2 July 2014 in the past?
     * var result = isPast(new Date(2014, 6, 2))
     * //=> true
     */


    function isPast(dirtyDate) {
      return parse(dirtyDate).getTime() < new Date().getTime();
    }

    module.exports = isPast;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_same_day/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/is_same_day/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_same_dayIndexJs(module, exports, __webpack_require__) {
    var startOfDay = __webpack_require__(
    /*! ../start_of_day/index.js */
    "./node_modules/date-fns/start_of_day/index.js");
    /**
     * @category Day Helpers
     * @summary Are the given dates in the same day?
     *
     * @description
     * Are the given dates in the same day?
     *
     * @param {Date|String|Number} dateLeft - the first date to check
     * @param {Date|String|Number} dateRight - the second date to check
     * @returns {Boolean} the dates are in the same day
     *
     * @example
     * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
     * var result = isSameDay(
     *   new Date(2014, 8, 4, 6, 0),
     *   new Date(2014, 8, 4, 18, 0)
     * )
     * //=> true
     */


    function isSameDay(dirtyDateLeft, dirtyDateRight) {
      var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
      var dateRightStartOfDay = startOfDay(dirtyDateRight);
      return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
    }

    module.exports = isSameDay;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_same_hour/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/is_same_hour/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_same_hourIndexJs(module, exports, __webpack_require__) {
    var startOfHour = __webpack_require__(
    /*! ../start_of_hour/index.js */
    "./node_modules/date-fns/start_of_hour/index.js");
    /**
     * @category Hour Helpers
     * @summary Are the given dates in the same hour?
     *
     * @description
     * Are the given dates in the same hour?
     *
     * @param {Date|String|Number} dateLeft - the first date to check
     * @param {Date|String|Number} dateRight - the second date to check
     * @returns {Boolean} the dates are in the same hour
     *
     * @example
     * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
     * var result = isSameHour(
     *   new Date(2014, 8, 4, 6, 0),
     *   new Date(2014, 8, 4, 6, 30)
     * )
     * //=> true
     */


    function isSameHour(dirtyDateLeft, dirtyDateRight) {
      var dateLeftStartOfHour = startOfHour(dirtyDateLeft);
      var dateRightStartOfHour = startOfHour(dirtyDateRight);
      return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime();
    }

    module.exports = isSameHour;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_same_iso_week/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/date-fns/is_same_iso_week/index.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_same_iso_weekIndexJs(module, exports, __webpack_require__) {
    var isSameWeek = __webpack_require__(
    /*! ../is_same_week/index.js */
    "./node_modules/date-fns/is_same_week/index.js");
    /**
     * @category ISO Week Helpers
     * @summary Are the given dates in the same ISO week?
     *
     * @description
     * Are the given dates in the same ISO week?
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} dateLeft - the first date to check
     * @param {Date|String|Number} dateRight - the second date to check
     * @returns {Boolean} the dates are in the same ISO week
     *
     * @example
     * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
     * var result = isSameISOWeek(
     *   new Date(2014, 8, 1),
     *   new Date(2014, 8, 7)
     * )
     * //=> true
     */


    function isSameISOWeek(dirtyDateLeft, dirtyDateRight) {
      return isSameWeek(dirtyDateLeft, dirtyDateRight, {
        weekStartsOn: 1
      });
    }

    module.exports = isSameISOWeek;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_same_iso_year/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/date-fns/is_same_iso_year/index.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_same_iso_yearIndexJs(module, exports, __webpack_require__) {
    var startOfISOYear = __webpack_require__(
    /*! ../start_of_iso_year/index.js */
    "./node_modules/date-fns/start_of_iso_year/index.js");
    /**
     * @category ISO Week-Numbering Year Helpers
     * @summary Are the given dates in the same ISO week-numbering year?
     *
     * @description
     * Are the given dates in the same ISO week-numbering year?
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} dateLeft - the first date to check
     * @param {Date|String|Number} dateRight - the second date to check
     * @returns {Boolean} the dates are in the same ISO week-numbering year
     *
     * @example
     * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
     * var result = isSameISOYear(
     *   new Date(2003, 11, 29),
     *   new Date(2005, 0, 2)
     * )
     * //=> true
     */


    function isSameISOYear(dirtyDateLeft, dirtyDateRight) {
      var dateLeftStartOfYear = startOfISOYear(dirtyDateLeft);
      var dateRightStartOfYear = startOfISOYear(dirtyDateRight);
      return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime();
    }

    module.exports = isSameISOYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_same_minute/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/date-fns/is_same_minute/index.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_same_minuteIndexJs(module, exports, __webpack_require__) {
    var startOfMinute = __webpack_require__(
    /*! ../start_of_minute/index.js */
    "./node_modules/date-fns/start_of_minute/index.js");
    /**
     * @category Minute Helpers
     * @summary Are the given dates in the same minute?
     *
     * @description
     * Are the given dates in the same minute?
     *
     * @param {Date|String|Number} dateLeft - the first date to check
     * @param {Date|String|Number} dateRight - the second date to check
     * @returns {Boolean} the dates are in the same minute
     *
     * @example
     * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15
     * // in the same minute?
     * var result = isSameMinute(
     *   new Date(2014, 8, 4, 6, 30),
     *   new Date(2014, 8, 4, 6, 30, 15)
     * )
     * //=> true
     */


    function isSameMinute(dirtyDateLeft, dirtyDateRight) {
      var dateLeftStartOfMinute = startOfMinute(dirtyDateLeft);
      var dateRightStartOfMinute = startOfMinute(dirtyDateRight);
      return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime();
    }

    module.exports = isSameMinute;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_same_month/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/date-fns/is_same_month/index.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_same_monthIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Month Helpers
     * @summary Are the given dates in the same month?
     *
     * @description
     * Are the given dates in the same month?
     *
     * @param {Date|String|Number} dateLeft - the first date to check
     * @param {Date|String|Number} dateRight - the second date to check
     * @returns {Boolean} the dates are in the same month
     *
     * @example
     * // Are 2 September 2014 and 25 September 2014 in the same month?
     * var result = isSameMonth(
     *   new Date(2014, 8, 2),
     *   new Date(2014, 8, 25)
     * )
     * //=> true
     */


    function isSameMonth(dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse(dirtyDateLeft);
      var dateRight = parse(dirtyDateRight);
      return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
    }

    module.exports = isSameMonth;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_same_quarter/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/date-fns/is_same_quarter/index.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_same_quarterIndexJs(module, exports, __webpack_require__) {
    var startOfQuarter = __webpack_require__(
    /*! ../start_of_quarter/index.js */
    "./node_modules/date-fns/start_of_quarter/index.js");
    /**
     * @category Quarter Helpers
     * @summary Are the given dates in the same year quarter?
     *
     * @description
     * Are the given dates in the same year quarter?
     *
     * @param {Date|String|Number} dateLeft - the first date to check
     * @param {Date|String|Number} dateRight - the second date to check
     * @returns {Boolean} the dates are in the same quarter
     *
     * @example
     * // Are 1 January 2014 and 8 March 2014 in the same quarter?
     * var result = isSameQuarter(
     *   new Date(2014, 0, 1),
     *   new Date(2014, 2, 8)
     * )
     * //=> true
     */


    function isSameQuarter(dirtyDateLeft, dirtyDateRight) {
      var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft);
      var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight);
      return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime();
    }

    module.exports = isSameQuarter;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_same_second/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/date-fns/is_same_second/index.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_same_secondIndexJs(module, exports, __webpack_require__) {
    var startOfSecond = __webpack_require__(
    /*! ../start_of_second/index.js */
    "./node_modules/date-fns/start_of_second/index.js");
    /**
     * @category Second Helpers
     * @summary Are the given dates in the same second?
     *
     * @description
     * Are the given dates in the same second?
     *
     * @param {Date|String|Number} dateLeft - the first date to check
     * @param {Date|String|Number} dateRight - the second date to check
     * @returns {Boolean} the dates are in the same second
     *
     * @example
     * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
     * // in the same second?
     * var result = isSameSecond(
     *   new Date(2014, 8, 4, 6, 30, 15),
     *   new Date(2014, 8, 4, 6, 30, 15, 500)
     * )
     * //=> true
     */


    function isSameSecond(dirtyDateLeft, dirtyDateRight) {
      var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft);
      var dateRightStartOfSecond = startOfSecond(dirtyDateRight);
      return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime();
    }

    module.exports = isSameSecond;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_same_week/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/is_same_week/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_same_weekIndexJs(module, exports, __webpack_require__) {
    var startOfWeek = __webpack_require__(
    /*! ../start_of_week/index.js */
    "./node_modules/date-fns/start_of_week/index.js");
    /**
     * @category Week Helpers
     * @summary Are the given dates in the same week?
     *
     * @description
     * Are the given dates in the same week?
     *
     * @param {Date|String|Number} dateLeft - the first date to check
     * @param {Date|String|Number} dateRight - the second date to check
     * @param {Object} [options] - the object with options
     * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
     * @returns {Boolean} the dates are in the same week
     *
     * @example
     * // Are 31 August 2014 and 4 September 2014 in the same week?
     * var result = isSameWeek(
     *   new Date(2014, 7, 31),
     *   new Date(2014, 8, 4)
     * )
     * //=> true
     *
     * @example
     * // If week starts with Monday,
     * // are 31 August 2014 and 4 September 2014 in the same week?
     * var result = isSameWeek(
     *   new Date(2014, 7, 31),
     *   new Date(2014, 8, 4),
     *   {weekStartsOn: 1}
     * )
     * //=> false
     */


    function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
      var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, dirtyOptions);
      var dateRightStartOfWeek = startOfWeek(dirtyDateRight, dirtyOptions);
      return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
    }

    module.exports = isSameWeek;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_same_year/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/is_same_year/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_same_yearIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Year Helpers
     * @summary Are the given dates in the same year?
     *
     * @description
     * Are the given dates in the same year?
     *
     * @param {Date|String|Number} dateLeft - the first date to check
     * @param {Date|String|Number} dateRight - the second date to check
     * @returns {Boolean} the dates are in the same year
     *
     * @example
     * // Are 2 September 2014 and 25 September 2014 in the same year?
     * var result = isSameYear(
     *   new Date(2014, 8, 2),
     *   new Date(2014, 8, 25)
     * )
     * //=> true
     */


    function isSameYear(dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse(dirtyDateLeft);
      var dateRight = parse(dirtyDateRight);
      return dateLeft.getFullYear() === dateRight.getFullYear();
    }

    module.exports = isSameYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_saturday/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/is_saturday/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_saturdayIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Weekday Helpers
     * @summary Is the given date Saturday?
     *
     * @description
     * Is the given date Saturday?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is Saturday
     *
     * @example
     * // Is 27 September 2014 Saturday?
     * var result = isSaturday(new Date(2014, 8, 27))
     * //=> true
     */


    function isSaturday(dirtyDate) {
      return parse(dirtyDate).getDay() === 6;
    }

    module.exports = isSaturday;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_sunday/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/date-fns/is_sunday/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_sundayIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Weekday Helpers
     * @summary Is the given date Sunday?
     *
     * @description
     * Is the given date Sunday?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is Sunday
     *
     * @example
     * // Is 21 September 2014 Sunday?
     * var result = isSunday(new Date(2014, 8, 21))
     * //=> true
     */


    function isSunday(dirtyDate) {
      return parse(dirtyDate).getDay() === 0;
    }

    module.exports = isSunday;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_this_hour/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/is_this_hour/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_this_hourIndexJs(module, exports, __webpack_require__) {
    var isSameHour = __webpack_require__(
    /*! ../is_same_hour/index.js */
    "./node_modules/date-fns/is_same_hour/index.js");
    /**
     * @category Hour Helpers
     * @summary Is the given date in the same hour as the current date?
     *
     * @description
     * Is the given date in the same hour as the current date?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is in this hour
     *
     * @example
     * // If now is 25 September 2014 18:30:15.500,
     * // is 25 September 2014 18:00:00 in this hour?
     * var result = isThisHour(new Date(2014, 8, 25, 18))
     * //=> true
     */


    function isThisHour(dirtyDate) {
      return isSameHour(new Date(), dirtyDate);
    }

    module.exports = isThisHour;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_this_iso_week/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/date-fns/is_this_iso_week/index.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_this_iso_weekIndexJs(module, exports, __webpack_require__) {
    var isSameISOWeek = __webpack_require__(
    /*! ../is_same_iso_week/index.js */
    "./node_modules/date-fns/is_same_iso_week/index.js");
    /**
     * @category ISO Week Helpers
     * @summary Is the given date in the same ISO week as the current date?
     *
     * @description
     * Is the given date in the same ISO week as the current date?
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is in this ISO week
     *
     * @example
     * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
     * var result = isThisISOWeek(new Date(2014, 8, 22))
     * //=> true
     */


    function isThisISOWeek(dirtyDate) {
      return isSameISOWeek(new Date(), dirtyDate);
    }

    module.exports = isThisISOWeek;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_this_iso_year/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/date-fns/is_this_iso_year/index.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_this_iso_yearIndexJs(module, exports, __webpack_require__) {
    var isSameISOYear = __webpack_require__(
    /*! ../is_same_iso_year/index.js */
    "./node_modules/date-fns/is_same_iso_year/index.js");
    /**
     * @category ISO Week-Numbering Year Helpers
     * @summary Is the given date in the same ISO week-numbering year as the current date?
     *
     * @description
     * Is the given date in the same ISO week-numbering year as the current date?
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is in this ISO week-numbering year
     *
     * @example
     * // If today is 25 September 2014,
     * // is 30 December 2013 in this ISO week-numbering year?
     * var result = isThisISOYear(new Date(2013, 11, 30))
     * //=> true
     */


    function isThisISOYear(dirtyDate) {
      return isSameISOYear(new Date(), dirtyDate);
    }

    module.exports = isThisISOYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_this_minute/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/date-fns/is_this_minute/index.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_this_minuteIndexJs(module, exports, __webpack_require__) {
    var isSameMinute = __webpack_require__(
    /*! ../is_same_minute/index.js */
    "./node_modules/date-fns/is_same_minute/index.js");
    /**
     * @category Minute Helpers
     * @summary Is the given date in the same minute as the current date?
     *
     * @description
     * Is the given date in the same minute as the current date?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is in this minute
     *
     * @example
     * // If now is 25 September 2014 18:30:15.500,
     * // is 25 September 2014 18:30:00 in this minute?
     * var result = isThisMinute(new Date(2014, 8, 25, 18, 30))
     * //=> true
     */


    function isThisMinute(dirtyDate) {
      return isSameMinute(new Date(), dirtyDate);
    }

    module.exports = isThisMinute;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_this_month/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/date-fns/is_this_month/index.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_this_monthIndexJs(module, exports, __webpack_require__) {
    var isSameMonth = __webpack_require__(
    /*! ../is_same_month/index.js */
    "./node_modules/date-fns/is_same_month/index.js");
    /**
     * @category Month Helpers
     * @summary Is the given date in the same month as the current date?
     *
     * @description
     * Is the given date in the same month as the current date?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is in this month
     *
     * @example
     * // If today is 25 September 2014, is 15 September 2014 in this month?
     * var result = isThisMonth(new Date(2014, 8, 15))
     * //=> true
     */


    function isThisMonth(dirtyDate) {
      return isSameMonth(new Date(), dirtyDate);
    }

    module.exports = isThisMonth;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_this_quarter/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/date-fns/is_this_quarter/index.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_this_quarterIndexJs(module, exports, __webpack_require__) {
    var isSameQuarter = __webpack_require__(
    /*! ../is_same_quarter/index.js */
    "./node_modules/date-fns/is_same_quarter/index.js");
    /**
     * @category Quarter Helpers
     * @summary Is the given date in the same quarter as the current date?
     *
     * @description
     * Is the given date in the same quarter as the current date?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is in this quarter
     *
     * @example
     * // If today is 25 September 2014, is 2 July 2014 in this quarter?
     * var result = isThisQuarter(new Date(2014, 6, 2))
     * //=> true
     */


    function isThisQuarter(dirtyDate) {
      return isSameQuarter(new Date(), dirtyDate);
    }

    module.exports = isThisQuarter;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_this_second/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/date-fns/is_this_second/index.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_this_secondIndexJs(module, exports, __webpack_require__) {
    var isSameSecond = __webpack_require__(
    /*! ../is_same_second/index.js */
    "./node_modules/date-fns/is_same_second/index.js");
    /**
     * @category Second Helpers
     * @summary Is the given date in the same second as the current date?
     *
     * @description
     * Is the given date in the same second as the current date?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is in this second
     *
     * @example
     * // If now is 25 September 2014 18:30:15.500,
     * // is 25 September 2014 18:30:15.000 in this second?
     * var result = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
     * //=> true
     */


    function isThisSecond(dirtyDate) {
      return isSameSecond(new Date(), dirtyDate);
    }

    module.exports = isThisSecond;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_this_week/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/is_this_week/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_this_weekIndexJs(module, exports, __webpack_require__) {
    var isSameWeek = __webpack_require__(
    /*! ../is_same_week/index.js */
    "./node_modules/date-fns/is_same_week/index.js");
    /**
     * @category Week Helpers
     * @summary Is the given date in the same week as the current date?
     *
     * @description
     * Is the given date in the same week as the current date?
     *
     * @param {Date|String|Number} date - the date to check
     * @param {Object} [options] - the object with options
     * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
     * @returns {Boolean} the date is in this week
     *
     * @example
     * // If today is 25 September 2014, is 21 September 2014 in this week?
     * var result = isThisWeek(new Date(2014, 8, 21))
     * //=> true
     *
     * @example
     * // If today is 25 September 2014 and week starts with Monday
     * // is 21 September 2014 in this week?
     * var result = isThisWeek(new Date(2014, 8, 21), {weekStartsOn: 1})
     * //=> false
     */


    function isThisWeek(dirtyDate, dirtyOptions) {
      return isSameWeek(new Date(), dirtyDate, dirtyOptions);
    }

    module.exports = isThisWeek;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_this_year/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/is_this_year/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_this_yearIndexJs(module, exports, __webpack_require__) {
    var isSameYear = __webpack_require__(
    /*! ../is_same_year/index.js */
    "./node_modules/date-fns/is_same_year/index.js");
    /**
     * @category Year Helpers
     * @summary Is the given date in the same year as the current date?
     *
     * @description
     * Is the given date in the same year as the current date?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is in this year
     *
     * @example
     * // If today is 25 September 2014, is 2 July 2014 in this year?
     * var result = isThisYear(new Date(2014, 6, 2))
     * //=> true
     */


    function isThisYear(dirtyDate) {
      return isSameYear(new Date(), dirtyDate);
    }

    module.exports = isThisYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_thursday/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/is_thursday/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_thursdayIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Weekday Helpers
     * @summary Is the given date Thursday?
     *
     * @description
     * Is the given date Thursday?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is Thursday
     *
     * @example
     * // Is 25 September 2014 Thursday?
     * var result = isThursday(new Date(2014, 8, 25))
     * //=> true
     */


    function isThursday(dirtyDate) {
      return parse(dirtyDate).getDay() === 4;
    }

    module.exports = isThursday;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_today/index.js":
  /*!*************************************************!*\
    !*** ./node_modules/date-fns/is_today/index.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_todayIndexJs(module, exports, __webpack_require__) {
    var startOfDay = __webpack_require__(
    /*! ../start_of_day/index.js */
    "./node_modules/date-fns/start_of_day/index.js");
    /**
     * @category Day Helpers
     * @summary Is the given date today?
     *
     * @description
     * Is the given date today?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is today
     *
     * @example
     * // If today is 6 October 2014, is 6 October 14:00:00 today?
     * var result = isToday(new Date(2014, 9, 6, 14, 0))
     * //=> true
     */


    function isToday(dirtyDate) {
      return startOfDay(dirtyDate).getTime() === startOfDay(new Date()).getTime();
    }

    module.exports = isToday;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_tomorrow/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/is_tomorrow/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_tomorrowIndexJs(module, exports, __webpack_require__) {
    var startOfDay = __webpack_require__(
    /*! ../start_of_day/index.js */
    "./node_modules/date-fns/start_of_day/index.js");
    /**
     * @category Day Helpers
     * @summary Is the given date tomorrow?
     *
     * @description
     * Is the given date tomorrow?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is tomorrow
     *
     * @example
     * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
     * var result = isTomorrow(new Date(2014, 9, 7, 14, 0))
     * //=> true
     */


    function isTomorrow(dirtyDate) {
      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return startOfDay(dirtyDate).getTime() === startOfDay(tomorrow).getTime();
    }

    module.exports = isTomorrow;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_tuesday/index.js":
  /*!***************************************************!*\
    !*** ./node_modules/date-fns/is_tuesday/index.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_tuesdayIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Weekday Helpers
     * @summary Is the given date Tuesday?
     *
     * @description
     * Is the given date Tuesday?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is Tuesday
     *
     * @example
     * // Is 23 September 2014 Tuesday?
     * var result = isTuesday(new Date(2014, 8, 23))
     * //=> true
     */


    function isTuesday(dirtyDate) {
      return parse(dirtyDate).getDay() === 2;
    }

    module.exports = isTuesday;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_valid/index.js":
  /*!*************************************************!*\
    !*** ./node_modules/date-fns/is_valid/index.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_validIndexJs(module, exports, __webpack_require__) {
    var isDate = __webpack_require__(
    /*! ../is_date/index.js */
    "./node_modules/date-fns/is_date/index.js");
    /**
     * @category Common Helpers
     * @summary Is the given date valid?
     *
     * @description
     * Returns false if argument is Invalid Date and true otherwise.
     * Invalid Date is a Date, whose time value is NaN.
     *
     * Time value of Date: http://es5.github.io/#x15.9.1.1
     *
     * @param {Date} date - the date to check
     * @returns {Boolean} the date is valid
     * @throws {TypeError} argument must be an instance of Date
     *
     * @example
     * // For the valid date:
     * var result = isValid(new Date(2014, 1, 31))
     * //=> true
     *
     * @example
     * // For the invalid date:
     * var result = isValid(new Date(''))
     * //=> false
     */


    function isValid(dirtyDate) {
      if (isDate(dirtyDate)) {
        return !isNaN(dirtyDate);
      } else {
        throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date');
      }
    }

    module.exports = isValid;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_wednesday/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/is_wednesday/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_wednesdayIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Weekday Helpers
     * @summary Is the given date Wednesday?
     *
     * @description
     * Is the given date Wednesday?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is Wednesday
     *
     * @example
     * // Is 24 September 2014 Wednesday?
     * var result = isWednesday(new Date(2014, 8, 24))
     * //=> true
     */


    function isWednesday(dirtyDate) {
      return parse(dirtyDate).getDay() === 3;
    }

    module.exports = isWednesday;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_weekend/index.js":
  /*!***************************************************!*\
    !*** ./node_modules/date-fns/is_weekend/index.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_weekendIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Weekday Helpers
     * @summary Does the given date fall on a weekend?
     *
     * @description
     * Does the given date fall on a weekend?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date falls on a weekend
     *
     * @example
     * // Does 5 October 2014 fall on a weekend?
     * var result = isWeekend(new Date(2014, 9, 5))
     * //=> true
     */


    function isWeekend(dirtyDate) {
      var date = parse(dirtyDate);
      var day = date.getDay();
      return day === 0 || day === 6;
    }

    module.exports = isWeekend;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_within_range/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/date-fns/is_within_range/index.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_within_rangeIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Range Helpers
     * @summary Is the given date within the range?
     *
     * @description
     * Is the given date within the range?
     *
     * @param {Date|String|Number} date - the date to check
     * @param {Date|String|Number} startDate - the start of range
     * @param {Date|String|Number} endDate - the end of range
     * @returns {Boolean} the date is within the range
     * @throws {Error} startDate cannot be after endDate
     *
     * @example
     * // For the date within the range:
     * isWithinRange(
     *   new Date(2014, 0, 3), new Date(2014, 0, 1), new Date(2014, 0, 7)
     * )
     * //=> true
     *
     * @example
     * // For the date outside of the range:
     * isWithinRange(
     *   new Date(2014, 0, 10), new Date(2014, 0, 1), new Date(2014, 0, 7)
     * )
     * //=> false
     */


    function isWithinRange(dirtyDate, dirtyStartDate, dirtyEndDate) {
      var time = parse(dirtyDate).getTime();
      var startTime = parse(dirtyStartDate).getTime();
      var endTime = parse(dirtyEndDate).getTime();

      if (startTime > endTime) {
        throw new Error('The start of the range cannot be after the end of the range');
      }

      return time >= startTime && time <= endTime;
    }

    module.exports = isWithinRange;
    /***/
  },

  /***/
  "./node_modules/date-fns/is_yesterday/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/is_yesterday/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsIs_yesterdayIndexJs(module, exports, __webpack_require__) {
    var startOfDay = __webpack_require__(
    /*! ../start_of_day/index.js */
    "./node_modules/date-fns/start_of_day/index.js");
    /**
     * @category Day Helpers
     * @summary Is the given date yesterday?
     *
     * @description
     * Is the given date yesterday?
     *
     * @param {Date|String|Number} date - the date to check
     * @returns {Boolean} the date is yesterday
     *
     * @example
     * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
     * var result = isYesterday(new Date(2014, 9, 5, 14, 0))
     * //=> true
     */


    function isYesterday(dirtyDate) {
      var yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return startOfDay(dirtyDate).getTime() === startOfDay(yesterday).getTime();
    }

    module.exports = isYesterday;
    /***/
  },

  /***/
  "./node_modules/date-fns/last_day_of_iso_week/index.js":
  /*!*************************************************************!*\
    !*** ./node_modules/date-fns/last_day_of_iso_week/index.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsLast_day_of_iso_weekIndexJs(module, exports, __webpack_require__) {
    var lastDayOfWeek = __webpack_require__(
    /*! ../last_day_of_week/index.js */
    "./node_modules/date-fns/last_day_of_week/index.js");
    /**
     * @category ISO Week Helpers
     * @summary Return the last day of an ISO week for the given date.
     *
     * @description
     * Return the last day of an ISO week for the given date.
     * The result will be in the local timezone.
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the last day of an ISO week
     *
     * @example
     * // The last day of an ISO week for 2 September 2014 11:55:00:
     * var result = lastDayOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Sun Sep 07 2014 00:00:00
     */


    function lastDayOfISOWeek(dirtyDate) {
      return lastDayOfWeek(dirtyDate, {
        weekStartsOn: 1
      });
    }

    module.exports = lastDayOfISOWeek;
    /***/
  },

  /***/
  "./node_modules/date-fns/last_day_of_iso_year/index.js":
  /*!*************************************************************!*\
    !*** ./node_modules/date-fns/last_day_of_iso_year/index.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsLast_day_of_iso_yearIndexJs(module, exports, __webpack_require__) {
    var getISOYear = __webpack_require__(
    /*! ../get_iso_year/index.js */
    "./node_modules/date-fns/get_iso_year/index.js");

    var startOfISOWeek = __webpack_require__(
    /*! ../start_of_iso_week/index.js */
    "./node_modules/date-fns/start_of_iso_week/index.js");
    /**
     * @category ISO Week-Numbering Year Helpers
     * @summary Return the last day of an ISO week-numbering year for the given date.
     *
     * @description
     * Return the last day of an ISO week-numbering year,
     * which always starts 3 days before the year's first Thursday.
     * The result will be in the local timezone.
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the end of an ISO week-numbering year
     *
     * @example
     * // The last day of an ISO week-numbering year for 2 July 2005:
     * var result = lastDayOfISOYear(new Date(2005, 6, 2))
     * //=> Sun Jan 01 2006 00:00:00
     */


    function lastDayOfISOYear(dirtyDate) {
      var year = getISOYear(dirtyDate);
      var fourthOfJanuary = new Date(0);
      fourthOfJanuary.setFullYear(year + 1, 0, 4);
      fourthOfJanuary.setHours(0, 0, 0, 0);
      var date = startOfISOWeek(fourthOfJanuary);
      date.setDate(date.getDate() - 1);
      return date;
    }

    module.exports = lastDayOfISOYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/last_day_of_month/index.js":
  /*!**********************************************************!*\
    !*** ./node_modules/date-fns/last_day_of_month/index.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsLast_day_of_monthIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Month Helpers
     * @summary Return the last day of a month for the given date.
     *
     * @description
     * Return the last day of a month for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the last day of a month
     *
     * @example
     * // The last day of a month for 2 September 2014 11:55:00:
     * var result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Tue Sep 30 2014 00:00:00
     */


    function lastDayOfMonth(dirtyDate) {
      var date = parse(dirtyDate);
      var month = date.getMonth();
      date.setFullYear(date.getFullYear(), month + 1, 0);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    module.exports = lastDayOfMonth;
    /***/
  },

  /***/
  "./node_modules/date-fns/last_day_of_quarter/index.js":
  /*!************************************************************!*\
    !*** ./node_modules/date-fns/last_day_of_quarter/index.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsLast_day_of_quarterIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Quarter Helpers
     * @summary Return the last day of a year quarter for the given date.
     *
     * @description
     * Return the last day of a year quarter for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the last day of a quarter
     *
     * @example
     * // The last day of a quarter for 2 September 2014 11:55:00:
     * var result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Tue Sep 30 2014 00:00:00
     */


    function lastDayOfQuarter(dirtyDate) {
      var date = parse(dirtyDate);
      var currentMonth = date.getMonth();
      var month = currentMonth - currentMonth % 3 + 3;
      date.setMonth(month, 0);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    module.exports = lastDayOfQuarter;
    /***/
  },

  /***/
  "./node_modules/date-fns/last_day_of_week/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/date-fns/last_day_of_week/index.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsLast_day_of_weekIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Week Helpers
     * @summary Return the last day of a week for the given date.
     *
     * @description
     * Return the last day of a week for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @param {Object} [options] - the object with options
     * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
     * @returns {Date} the last day of a week
     *
     * @example
     * // The last day of a week for 2 September 2014 11:55:00:
     * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Sat Sep 06 2014 00:00:00
     *
     * @example
     * // If the week starts on Monday, the last day of the week for 2 September 2014 11:55:00:
     * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
     * //=> Sun Sep 07 2014 00:00:00
     */


    function lastDayOfWeek(dirtyDate, dirtyOptions) {
      var weekStartsOn = dirtyOptions ? Number(dirtyOptions.weekStartsOn) || 0 : 0;
      var date = parse(dirtyDate);
      var day = date.getDay();
      var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() + diff);
      return date;
    }

    module.exports = lastDayOfWeek;
    /***/
  },

  /***/
  "./node_modules/date-fns/last_day_of_year/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/date-fns/last_day_of_year/index.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsLast_day_of_yearIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Year Helpers
     * @summary Return the last day of a year for the given date.
     *
     * @description
     * Return the last day of a year for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the last day of a year
     *
     * @example
     * // The last day of a year for 2 September 2014 11:55:00:
     * var result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))
     * //=> Wed Dec 31 2014 00:00:00
     */


    function lastDayOfYear(dirtyDate) {
      var date = parse(dirtyDate);
      var year = date.getFullYear();
      date.setFullYear(year + 1, 0, 0);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    module.exports = lastDayOfYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js":
  /*!************************************************************************************!*\
    !*** ./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js ***!
    \************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsLocale_libBuild_formatting_tokens_reg_expIndexJs(module, exports) {
    var commonFormatterKeys = ['M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd', 'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG', 'H', 'HH', 'h', 'hh', 'm', 'mm', 's', 'ss', 'S', 'SS', 'SSS', 'Z', 'ZZ', 'X', 'x'];

    function buildFormattingTokensRegExp(formatters) {
      var formatterKeys = [];

      for (var key in formatters) {
        if (formatters.hasOwnProperty(key)) {
          formatterKeys.push(key);
        }
      }

      var formattingTokens = commonFormatterKeys.concat(formatterKeys).sort().reverse();
      var formattingTokensRegExp = new RegExp('(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g');
      return formattingTokensRegExp;
    }

    module.exports = buildFormattingTokensRegExp;
    /***/
  },

  /***/
  "./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsLocaleEnBuild_distance_in_words_localeIndexJs(module, exports) {
    function buildDistanceInWordsLocale() {
      var distanceInWordsLocale = {
        lessThanXSeconds: {
          one: 'less than a second',
          other: 'less than {{count}} seconds'
        },
        xSeconds: {
          one: '1 second',
          other: '{{count}} seconds'
        },
        halfAMinute: 'half a minute',
        lessThanXMinutes: {
          one: 'less than a minute',
          other: 'less than {{count}} minutes'
        },
        xMinutes: {
          one: '1 minute',
          other: '{{count}} minutes'
        },
        aboutXHours: {
          one: 'about 1 hour',
          other: 'about {{count}} hours'
        },
        xHours: {
          one: '1 hour',
          other: '{{count}} hours'
        },
        xDays: {
          one: '1 day',
          other: '{{count}} days'
        },
        aboutXMonths: {
          one: 'about 1 month',
          other: 'about {{count}} months'
        },
        xMonths: {
          one: '1 month',
          other: '{{count}} months'
        },
        aboutXYears: {
          one: 'about 1 year',
          other: 'about {{count}} years'
        },
        xYears: {
          one: '1 year',
          other: '{{count}} years'
        },
        overXYears: {
          one: 'over 1 year',
          other: 'over {{count}} years'
        },
        almostXYears: {
          one: 'almost 1 year',
          other: 'almost {{count}} years'
        }
      };

      function localize(token, count, options) {
        options = options || {};
        var result;

        if (typeof distanceInWordsLocale[token] === 'string') {
          result = distanceInWordsLocale[token];
        } else if (count === 1) {
          result = distanceInWordsLocale[token].one;
        } else {
          result = distanceInWordsLocale[token].other.replace('{{count}}', count);
        }

        if (options.addSuffix) {
          if (options.comparison > 0) {
            return 'in ' + result;
          } else {
            return result + ' ago';
          }
        }

        return result;
      }

      return {
        localize: localize
      };
    }

    module.exports = buildDistanceInWordsLocale;
    /***/
  },

  /***/
  "./node_modules/date-fns/locale/en/build_format_locale/index.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/date-fns/locale/en/build_format_locale/index.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsLocaleEnBuild_format_localeIndexJs(module, exports, __webpack_require__) {
    var buildFormattingTokensRegExp = __webpack_require__(
    /*! ../../_lib/build_formatting_tokens_reg_exp/index.js */
    "./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js");

    function buildFormatLocale() {
      // Note: in English, the names of days of the week and months are capitalized.
      // If you are making a new locale based on this one, check if the same is true for the language you're working on.
      // Generally, formatted dates should look like they are in the middle of a sentence,
      // e.g. in Spanish language the weekdays and months should be in the lowercase.
      var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
      var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var meridiemUppercase = ['AM', 'PM'];
      var meridiemLowercase = ['am', 'pm'];
      var meridiemFull = ['a.m.', 'p.m.'];
      var formatters = {
        // Month: Jan, Feb, ..., Dec
        'MMM': function MMM(date) {
          return months3char[date.getMonth()];
        },
        // Month: January, February, ..., December
        'MMMM': function MMMM(date) {
          return monthsFull[date.getMonth()];
        },
        // Day of week: Su, Mo, ..., Sa
        'dd': function dd(date) {
          return weekdays2char[date.getDay()];
        },
        // Day of week: Sun, Mon, ..., Sat
        'ddd': function ddd(date) {
          return weekdays3char[date.getDay()];
        },
        // Day of week: Sunday, Monday, ..., Saturday
        'dddd': function dddd(date) {
          return weekdaysFull[date.getDay()];
        },
        // AM, PM
        'A': function A(date) {
          return date.getHours() / 12 >= 1 ? meridiemUppercase[1] : meridiemUppercase[0];
        },
        // am, pm
        'a': function a(date) {
          return date.getHours() / 12 >= 1 ? meridiemLowercase[1] : meridiemLowercase[0];
        },
        // a.m., p.m.
        'aa': function aa(date) {
          return date.getHours() / 12 >= 1 ? meridiemFull[1] : meridiemFull[0];
        }
      }; // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.

      var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W'];
      ordinalFormatters.forEach(function (formatterToken) {
        formatters[formatterToken + 'o'] = function (date, formatters) {
          return ordinal(formatters[formatterToken](date));
        };
      });
      return {
        formatters: formatters,
        formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
      };
    }

    function ordinal(number) {
      var rem100 = number % 100;

      if (rem100 > 20 || rem100 < 10) {
        switch (rem100 % 10) {
          case 1:
            return number + 'st';

          case 2:
            return number + 'nd';

          case 3:
            return number + 'rd';
        }
      }

      return number + 'th';
    }

    module.exports = buildFormatLocale;
    /***/
  },

  /***/
  "./node_modules/date-fns/locale/en/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/date-fns/locale/en/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsLocaleEnIndexJs(module, exports, __webpack_require__) {
    var buildDistanceInWordsLocale = __webpack_require__(
    /*! ./build_distance_in_words_locale/index.js */
    "./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js");

    var buildFormatLocale = __webpack_require__(
    /*! ./build_format_locale/index.js */
    "./node_modules/date-fns/locale/en/build_format_locale/index.js");
    /**
     * @category Locales
     * @summary English locale.
     */


    module.exports = {
      distanceInWords: buildDistanceInWordsLocale(),
      format: buildFormatLocale()
    };
    /***/
  },

  /***/
  "./node_modules/date-fns/max/index.js":
  /*!********************************************!*\
    !*** ./node_modules/date-fns/max/index.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsMaxIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Common Helpers
     * @summary Return the latest of the given dates.
     *
     * @description
     * Return the latest of the given dates.
     *
     * @param {...(Date|String|Number)} dates - the dates to compare
     * @returns {Date} the latest of the dates
     *
     * @example
     * // Which of these dates is the latest?
     * var result = max(
     *   new Date(1989, 6, 10),
     *   new Date(1987, 1, 11),
     *   new Date(1995, 6, 2),
     *   new Date(1990, 0, 1)
     * )
     * //=> Sun Jul 02 1995 00:00:00
     */


    function max() {
      var dirtyDates = Array.prototype.slice.call(arguments);
      var dates = dirtyDates.map(function (dirtyDate) {
        return parse(dirtyDate);
      });
      var latestTimestamp = Math.max.apply(null, dates);
      return new Date(latestTimestamp);
    }

    module.exports = max;
    /***/
  },

  /***/
  "./node_modules/date-fns/min/index.js":
  /*!********************************************!*\
    !*** ./node_modules/date-fns/min/index.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsMinIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Common Helpers
     * @summary Return the earliest of the given dates.
     *
     * @description
     * Return the earliest of the given dates.
     *
     * @param {...(Date|String|Number)} dates - the dates to compare
     * @returns {Date} the earliest of the dates
     *
     * @example
     * // Which of these dates is the earliest?
     * var result = min(
     *   new Date(1989, 6, 10),
     *   new Date(1987, 1, 11),
     *   new Date(1995, 6, 2),
     *   new Date(1990, 0, 1)
     * )
     * //=> Wed Feb 11 1987 00:00:00
     */


    function min() {
      var dirtyDates = Array.prototype.slice.call(arguments);
      var dates = dirtyDates.map(function (dirtyDate) {
        return parse(dirtyDate);
      });
      var earliestTimestamp = Math.min.apply(null, dates);
      return new Date(earliestTimestamp);
    }

    module.exports = min;
    /***/
  },

  /***/
  "./node_modules/date-fns/parse/index.js":
  /*!**********************************************!*\
    !*** ./node_modules/date-fns/parse/index.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsParseIndexJs(module, exports, __webpack_require__) {
    var getTimezoneOffsetInMilliseconds = __webpack_require__(
    /*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */
    "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js");

    var isDate = __webpack_require__(
    /*! ../is_date/index.js */
    "./node_modules/date-fns/is_date/index.js");

    var MILLISECONDS_IN_HOUR = 3600000;
    var MILLISECONDS_IN_MINUTE = 60000;
    var DEFAULT_ADDITIONAL_DIGITS = 2;
    var parseTokenDateTimeDelimeter = /[T ]/;
    var parseTokenPlainTime = /:/; // year tokens

    var parseTokenYY = /^(\d{2})$/;
    var parseTokensYYY = [/^([+-]\d{2})$/, // 0 additional digits
    /^([+-]\d{3})$/, // 1 additional digit
    /^([+-]\d{4})$/ // 2 additional digits
    ];
    var parseTokenYYYY = /^(\d{4})/;
    var parseTokensYYYYY = [/^([+-]\d{4})/, // 0 additional digits
    /^([+-]\d{5})/, // 1 additional digit
    /^([+-]\d{6})/ // 2 additional digits
    ]; // date tokens

    var parseTokenMM = /^-(\d{2})$/;
    var parseTokenDDD = /^-?(\d{3})$/;
    var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/;
    var parseTokenWww = /^-?W(\d{2})$/;
    var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/; // time tokens

    var parseTokenHH = /^(\d{2}([.,]\d*)?)$/;
    var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/;
    var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/; // timezone tokens

    var parseTokenTimezone = /([Z+-].*)$/;
    var parseTokenTimezoneZ = /^(Z)$/;
    var parseTokenTimezoneHH = /^([+-])(\d{2})$/;
    var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/;
    /**
     * @category Common Helpers
     * @summary Convert the given argument to an instance of Date.
     *
     * @description
     * Convert the given argument to an instance of Date.
     *
     * If the argument is an instance of Date, the function returns its clone.
     *
     * If the argument is a number, it is treated as a timestamp.
     *
     * If an argument is a string, the function tries to parse it.
     * Function accepts complete ISO 8601 formats as well as partial implementations.
     * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
     *
     * If all above fails, the function passes the given argument to Date constructor.
     *
     * @param {Date|String|Number} argument - the value to convert
     * @param {Object} [options] - the object with options
     * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
     * @returns {Date} the parsed date in the local time zone
     *
     * @example
     * // Convert string '2014-02-11T11:30:30' to date:
     * var result = parse('2014-02-11T11:30:30')
     * //=> Tue Feb 11 2014 11:30:30
     *
     * @example
     * // Parse string '+02014101',
     * // if the additional number of digits in the extended year format is 1:
     * var result = parse('+02014101', {additionalDigits: 1})
     * //=> Fri Apr 11 2014 00:00:00
     */

    function parse(argument, dirtyOptions) {
      if (isDate(argument)) {
        // Prevent the date to lose the milliseconds when passed to new Date() in IE10
        return new Date(argument.getTime());
      } else if (typeof argument !== 'string') {
        return new Date(argument);
      }

      var options = dirtyOptions || {};
      var additionalDigits = options.additionalDigits;

      if (additionalDigits == null) {
        additionalDigits = DEFAULT_ADDITIONAL_DIGITS;
      } else {
        additionalDigits = Number(additionalDigits);
      }

      var dateStrings = splitDateString(argument);
      var parseYearResult = parseYear(dateStrings.date, additionalDigits);
      var year = parseYearResult.year;
      var restDateString = parseYearResult.restDateString;
      var date = parseDate(restDateString, year);

      if (date) {
        var timestamp = date.getTime();
        var time = 0;
        var offset;

        if (dateStrings.time) {
          time = parseTime(dateStrings.time);
        }

        if (dateStrings.timezone) {
          offset = parseTimezone(dateStrings.timezone) * MILLISECONDS_IN_MINUTE;
        } else {
          var fullTime = timestamp + time;
          var fullTimeDate = new Date(fullTime);
          offset = getTimezoneOffsetInMilliseconds(fullTimeDate); // Adjust time when it's coming from DST

          var fullTimeDateNextDay = new Date(fullTime);
          fullTimeDateNextDay.setDate(fullTimeDate.getDate() + 1);
          var offsetDiff = getTimezoneOffsetInMilliseconds(fullTimeDateNextDay) - getTimezoneOffsetInMilliseconds(fullTimeDate);

          if (offsetDiff > 0) {
            offset += offsetDiff;
          }
        }

        return new Date(timestamp + time + offset);
      } else {
        return new Date(argument);
      }
    }

    function splitDateString(dateString) {
      var dateStrings = {};
      var array = dateString.split(parseTokenDateTimeDelimeter);
      var timeString;

      if (parseTokenPlainTime.test(array[0])) {
        dateStrings.date = null;
        timeString = array[0];
      } else {
        dateStrings.date = array[0];
        timeString = array[1];
      }

      if (timeString) {
        var token = parseTokenTimezone.exec(timeString);

        if (token) {
          dateStrings.time = timeString.replace(token[1], '');
          dateStrings.timezone = token[1];
        } else {
          dateStrings.time = timeString;
        }
      }

      return dateStrings;
    }

    function parseYear(dateString, additionalDigits) {
      var parseTokenYYY = parseTokensYYY[additionalDigits];
      var parseTokenYYYYY = parseTokensYYYYY[additionalDigits];
      var token; // YYYY or ±YYYYY

      token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString);

      if (token) {
        var yearString = token[1];
        return {
          year: parseInt(yearString, 10),
          restDateString: dateString.slice(yearString.length)
        };
      } // YY or ±YYY


      token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString);

      if (token) {
        var centuryString = token[1];
        return {
          year: parseInt(centuryString, 10) * 100,
          restDateString: dateString.slice(centuryString.length)
        };
      } // Invalid ISO-formatted year


      return {
        year: null
      };
    }

    function parseDate(dateString, year) {
      // Invalid ISO-formatted year
      if (year === null) {
        return null;
      }

      var token;
      var date;
      var month;
      var week; // YYYY

      if (dateString.length === 0) {
        date = new Date(0);
        date.setUTCFullYear(year);
        return date;
      } // YYYY-MM


      token = parseTokenMM.exec(dateString);

      if (token) {
        date = new Date(0);
        month = parseInt(token[1], 10) - 1;
        date.setUTCFullYear(year, month);
        return date;
      } // YYYY-DDD or YYYYDDD


      token = parseTokenDDD.exec(dateString);

      if (token) {
        date = new Date(0);
        var dayOfYear = parseInt(token[1], 10);
        date.setUTCFullYear(year, 0, dayOfYear);
        return date;
      } // YYYY-MM-DD or YYYYMMDD


      token = parseTokenMMDD.exec(dateString);

      if (token) {
        date = new Date(0);
        month = parseInt(token[1], 10) - 1;
        var day = parseInt(token[2], 10);
        date.setUTCFullYear(year, month, day);
        return date;
      } // YYYY-Www or YYYYWww


      token = parseTokenWww.exec(dateString);

      if (token) {
        week = parseInt(token[1], 10) - 1;
        return dayOfISOYear(year, week);
      } // YYYY-Www-D or YYYYWwwD


      token = parseTokenWwwD.exec(dateString);

      if (token) {
        week = parseInt(token[1], 10) - 1;
        var dayOfWeek = parseInt(token[2], 10) - 1;
        return dayOfISOYear(year, week, dayOfWeek);
      } // Invalid ISO-formatted date


      return null;
    }

    function parseTime(timeString) {
      var token;
      var hours;
      var minutes; // hh

      token = parseTokenHH.exec(timeString);

      if (token) {
        hours = parseFloat(token[1].replace(',', '.'));
        return hours % 24 * MILLISECONDS_IN_HOUR;
      } // hh:mm or hhmm


      token = parseTokenHHMM.exec(timeString);

      if (token) {
        hours = parseInt(token[1], 10);
        minutes = parseFloat(token[2].replace(',', '.'));
        return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
      } // hh:mm:ss or hhmmss


      token = parseTokenHHMMSS.exec(timeString);

      if (token) {
        hours = parseInt(token[1], 10);
        minutes = parseInt(token[2], 10);
        var seconds = parseFloat(token[3].replace(',', '.'));
        return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
      } // Invalid ISO-formatted time


      return null;
    }

    function parseTimezone(timezoneString) {
      var token;
      var absoluteOffset; // Z

      token = parseTokenTimezoneZ.exec(timezoneString);

      if (token) {
        return 0;
      } // ±hh


      token = parseTokenTimezoneHH.exec(timezoneString);

      if (token) {
        absoluteOffset = parseInt(token[2], 10) * 60;
        return token[1] === '+' ? -absoluteOffset : absoluteOffset;
      } // ±hh:mm or ±hhmm


      token = parseTokenTimezoneHHMM.exec(timezoneString);

      if (token) {
        absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10);
        return token[1] === '+' ? -absoluteOffset : absoluteOffset;
      }

      return 0;
    }

    function dayOfISOYear(isoYear, week, day) {
      week = week || 0;
      day = day || 0;
      var date = new Date(0);
      date.setUTCFullYear(isoYear, 0, 4);
      var fourthOfJanuaryDay = date.getUTCDay() || 7;
      var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
      date.setUTCDate(date.getUTCDate() + diff);
      return date;
    }

    module.exports = parse;
    /***/
  },

  /***/
  "./node_modules/date-fns/set_date/index.js":
  /*!*************************************************!*\
    !*** ./node_modules/date-fns/set_date/index.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSet_dateIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Day Helpers
     * @summary Set the day of the month to the given date.
     *
     * @description
     * Set the day of the month to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} dayOfMonth - the day of the month of the new date
     * @returns {Date} the new date with the day of the month setted
     *
     * @example
     * // Set the 30th day of the month to 1 September 2014:
     * var result = setDate(new Date(2014, 8, 1), 30)
     * //=> Tue Sep 30 2014 00:00:00
     */


    function setDate(dirtyDate, dirtyDayOfMonth) {
      var date = parse(dirtyDate);
      var dayOfMonth = Number(dirtyDayOfMonth);
      date.setDate(dayOfMonth);
      return date;
    }

    module.exports = setDate;
    /***/
  },

  /***/
  "./node_modules/date-fns/set_day/index.js":
  /*!************************************************!*\
    !*** ./node_modules/date-fns/set_day/index.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSet_dayIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var addDays = __webpack_require__(
    /*! ../add_days/index.js */
    "./node_modules/date-fns/add_days/index.js");
    /**
     * @category Weekday Helpers
     * @summary Set the day of the week to the given date.
     *
     * @description
     * Set the day of the week to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} day - the day of the week of the new date
     * @param {Object} [options] - the object with options
     * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
     * @returns {Date} the new date with the day of the week setted
     *
     * @example
     * // Set Sunday to 1 September 2014:
     * var result = setDay(new Date(2014, 8, 1), 0)
     * //=> Sun Aug 31 2014 00:00:00
     *
     * @example
     * // If week starts with Monday, set Sunday to 1 September 2014:
     * var result = setDay(new Date(2014, 8, 1), 0, {weekStartsOn: 1})
     * //=> Sun Sep 07 2014 00:00:00
     */


    function setDay(dirtyDate, dirtyDay, dirtyOptions) {
      var weekStartsOn = dirtyOptions ? Number(dirtyOptions.weekStartsOn) || 0 : 0;
      var date = parse(dirtyDate);
      var day = Number(dirtyDay);
      var currentDay = date.getDay();
      var remainder = day % 7;
      var dayIndex = (remainder + 7) % 7;
      var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
      return addDays(date, diff);
    }

    module.exports = setDay;
    /***/
  },

  /***/
  "./node_modules/date-fns/set_day_of_year/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/date-fns/set_day_of_year/index.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSet_day_of_yearIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Day Helpers
     * @summary Set the day of the year to the given date.
     *
     * @description
     * Set the day of the year to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} dayOfYear - the day of the year of the new date
     * @returns {Date} the new date with the day of the year setted
     *
     * @example
     * // Set the 2nd day of the year to 2 July 2014:
     * var result = setDayOfYear(new Date(2014, 6, 2), 2)
     * //=> Thu Jan 02 2014 00:00:00
     */


    function setDayOfYear(dirtyDate, dirtyDayOfYear) {
      var date = parse(dirtyDate);
      var dayOfYear = Number(dirtyDayOfYear);
      date.setMonth(0);
      date.setDate(dayOfYear);
      return date;
    }

    module.exports = setDayOfYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/set_hours/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/date-fns/set_hours/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSet_hoursIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Hour Helpers
     * @summary Set the hours to the given date.
     *
     * @description
     * Set the hours to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} hours - the hours of the new date
     * @returns {Date} the new date with the hours setted
     *
     * @example
     * // Set 4 hours to 1 September 2014 11:30:00:
     * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
     * //=> Mon Sep 01 2014 04:30:00
     */


    function setHours(dirtyDate, dirtyHours) {
      var date = parse(dirtyDate);
      var hours = Number(dirtyHours);
      date.setHours(hours);
      return date;
    }

    module.exports = setHours;
    /***/
  },

  /***/
  "./node_modules/date-fns/set_iso_day/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/set_iso_day/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSet_iso_dayIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var addDays = __webpack_require__(
    /*! ../add_days/index.js */
    "./node_modules/date-fns/add_days/index.js");

    var getISODay = __webpack_require__(
    /*! ../get_iso_day/index.js */
    "./node_modules/date-fns/get_iso_day/index.js");
    /**
     * @category Weekday Helpers
     * @summary Set the day of the ISO week to the given date.
     *
     * @description
     * Set the day of the ISO week to the given date.
     * ISO week starts with Monday.
     * 7 is the index of Sunday, 1 is the index of Monday etc.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} day - the day of the ISO week of the new date
     * @returns {Date} the new date with the day of the ISO week setted
     *
     * @example
     * // Set Sunday to 1 September 2014:
     * var result = setISODay(new Date(2014, 8, 1), 7)
     * //=> Sun Sep 07 2014 00:00:00
     */


    function setISODay(dirtyDate, dirtyDay) {
      var date = parse(dirtyDate);
      var day = Number(dirtyDay);
      var currentDay = getISODay(date);
      var diff = day - currentDay;
      return addDays(date, diff);
    }

    module.exports = setISODay;
    /***/
  },

  /***/
  "./node_modules/date-fns/set_iso_week/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/set_iso_week/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSet_iso_weekIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var getISOWeek = __webpack_require__(
    /*! ../get_iso_week/index.js */
    "./node_modules/date-fns/get_iso_week/index.js");
    /**
     * @category ISO Week Helpers
     * @summary Set the ISO week to the given date.
     *
     * @description
     * Set the ISO week to the given date, saving the weekday number.
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} isoWeek - the ISO week of the new date
     * @returns {Date} the new date with the ISO week setted
     *
     * @example
     * // Set the 53rd ISO week to 7 August 2004:
     * var result = setISOWeek(new Date(2004, 7, 7), 53)
     * //=> Sat Jan 01 2005 00:00:00
     */


    function setISOWeek(dirtyDate, dirtyISOWeek) {
      var date = parse(dirtyDate);
      var isoWeek = Number(dirtyISOWeek);
      var diff = getISOWeek(date) - isoWeek;
      date.setDate(date.getDate() - diff * 7);
      return date;
    }

    module.exports = setISOWeek;
    /***/
  },

  /***/
  "./node_modules/date-fns/set_iso_year/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/set_iso_year/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSet_iso_yearIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var startOfISOYear = __webpack_require__(
    /*! ../start_of_iso_year/index.js */
    "./node_modules/date-fns/start_of_iso_year/index.js");

    var differenceInCalendarDays = __webpack_require__(
    /*! ../difference_in_calendar_days/index.js */
    "./node_modules/date-fns/difference_in_calendar_days/index.js");
    /**
     * @category ISO Week-Numbering Year Helpers
     * @summary Set the ISO week-numbering year to the given date.
     *
     * @description
     * Set the ISO week-numbering year to the given date,
     * saving the week number and the weekday number.
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} isoYear - the ISO week-numbering year of the new date
     * @returns {Date} the new date with the ISO week-numbering year setted
     *
     * @example
     * // Set ISO week-numbering year 2007 to 29 December 2008:
     * var result = setISOYear(new Date(2008, 11, 29), 2007)
     * //=> Mon Jan 01 2007 00:00:00
     */


    function setISOYear(dirtyDate, dirtyISOYear) {
      var date = parse(dirtyDate);
      var isoYear = Number(dirtyISOYear);
      var diff = differenceInCalendarDays(date, startOfISOYear(date));
      var fourthOfJanuary = new Date(0);
      fourthOfJanuary.setFullYear(isoYear, 0, 4);
      fourthOfJanuary.setHours(0, 0, 0, 0);
      date = startOfISOYear(fourthOfJanuary);
      date.setDate(date.getDate() + diff);
      return date;
    }

    module.exports = setISOYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/set_milliseconds/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/date-fns/set_milliseconds/index.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSet_millisecondsIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Millisecond Helpers
     * @summary Set the milliseconds to the given date.
     *
     * @description
     * Set the milliseconds to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} milliseconds - the milliseconds of the new date
     * @returns {Date} the new date with the milliseconds setted
     *
     * @example
     * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
     * var result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
     * //=> Mon Sep 01 2014 11:30:40.300
     */


    function setMilliseconds(dirtyDate, dirtyMilliseconds) {
      var date = parse(dirtyDate);
      var milliseconds = Number(dirtyMilliseconds);
      date.setMilliseconds(milliseconds);
      return date;
    }

    module.exports = setMilliseconds;
    /***/
  },

  /***/
  "./node_modules/date-fns/set_minutes/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/set_minutes/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSet_minutesIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Minute Helpers
     * @summary Set the minutes to the given date.
     *
     * @description
     * Set the minutes to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} minutes - the minutes of the new date
     * @returns {Date} the new date with the minutes setted
     *
     * @example
     * // Set 45 minutes to 1 September 2014 11:30:40:
     * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
     * //=> Mon Sep 01 2014 11:45:40
     */


    function setMinutes(dirtyDate, dirtyMinutes) {
      var date = parse(dirtyDate);
      var minutes = Number(dirtyMinutes);
      date.setMinutes(minutes);
      return date;
    }

    module.exports = setMinutes;
    /***/
  },

  /***/
  "./node_modules/date-fns/set_month/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/date-fns/set_month/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSet_monthIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var getDaysInMonth = __webpack_require__(
    /*! ../get_days_in_month/index.js */
    "./node_modules/date-fns/get_days_in_month/index.js");
    /**
     * @category Month Helpers
     * @summary Set the month to the given date.
     *
     * @description
     * Set the month to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} month - the month of the new date
     * @returns {Date} the new date with the month setted
     *
     * @example
     * // Set February to 1 September 2014:
     * var result = setMonth(new Date(2014, 8, 1), 1)
     * //=> Sat Feb 01 2014 00:00:00
     */


    function setMonth(dirtyDate, dirtyMonth) {
      var date = parse(dirtyDate);
      var month = Number(dirtyMonth);
      var year = date.getFullYear();
      var day = date.getDate();
      var dateWithDesiredMonth = new Date(0);
      dateWithDesiredMonth.setFullYear(year, month, 15);
      dateWithDesiredMonth.setHours(0, 0, 0, 0);
      var daysInMonth = getDaysInMonth(dateWithDesiredMonth); // Set the last day of the new month
      // if the original date was the last day of the longer month

      date.setMonth(month, Math.min(day, daysInMonth));
      return date;
    }

    module.exports = setMonth;
    /***/
  },

  /***/
  "./node_modules/date-fns/set_quarter/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/set_quarter/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSet_quarterIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");

    var setMonth = __webpack_require__(
    /*! ../set_month/index.js */
    "./node_modules/date-fns/set_month/index.js");
    /**
     * @category Quarter Helpers
     * @summary Set the year quarter to the given date.
     *
     * @description
     * Set the year quarter to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} quarter - the quarter of the new date
     * @returns {Date} the new date with the quarter setted
     *
     * @example
     * // Set the 2nd quarter to 2 July 2014:
     * var result = setQuarter(new Date(2014, 6, 2), 2)
     * //=> Wed Apr 02 2014 00:00:00
     */


    function setQuarter(dirtyDate, dirtyQuarter) {
      var date = parse(dirtyDate);
      var quarter = Number(dirtyQuarter);
      var oldQuarter = Math.floor(date.getMonth() / 3) + 1;
      var diff = quarter - oldQuarter;
      return setMonth(date, date.getMonth() + diff * 3);
    }

    module.exports = setQuarter;
    /***/
  },

  /***/
  "./node_modules/date-fns/set_seconds/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/set_seconds/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSet_secondsIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Second Helpers
     * @summary Set the seconds to the given date.
     *
     * @description
     * Set the seconds to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} seconds - the seconds of the new date
     * @returns {Date} the new date with the seconds setted
     *
     * @example
     * // Set 45 seconds to 1 September 2014 11:30:40:
     * var result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
     * //=> Mon Sep 01 2014 11:30:45
     */


    function setSeconds(dirtyDate, dirtySeconds) {
      var date = parse(dirtyDate);
      var seconds = Number(dirtySeconds);
      date.setSeconds(seconds);
      return date;
    }

    module.exports = setSeconds;
    /***/
  },

  /***/
  "./node_modules/date-fns/set_year/index.js":
  /*!*************************************************!*\
    !*** ./node_modules/date-fns/set_year/index.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSet_yearIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Year Helpers
     * @summary Set the year to the given date.
     *
     * @description
     * Set the year to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} year - the year of the new date
     * @returns {Date} the new date with the year setted
     *
     * @example
     * // Set year 2013 to 1 September 2014:
     * var result = setYear(new Date(2014, 8, 1), 2013)
     * //=> Sun Sep 01 2013 00:00:00
     */


    function setYear(dirtyDate, dirtyYear) {
      var date = parse(dirtyDate);
      var year = Number(dirtyYear);
      date.setFullYear(year);
      return date;
    }

    module.exports = setYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/start_of_day/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/start_of_day/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsStart_of_dayIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Day Helpers
     * @summary Return the start of a day for the given date.
     *
     * @description
     * Return the start of a day for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the start of a day
     *
     * @example
     * // The start of a day for 2 September 2014 11:55:00:
     * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Tue Sep 02 2014 00:00:00
     */


    function startOfDay(dirtyDate) {
      var date = parse(dirtyDate);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    module.exports = startOfDay;
    /***/
  },

  /***/
  "./node_modules/date-fns/start_of_hour/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/date-fns/start_of_hour/index.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsStart_of_hourIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Hour Helpers
     * @summary Return the start of an hour for the given date.
     *
     * @description
     * Return the start of an hour for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the start of an hour
     *
     * @example
     * // The start of an hour for 2 September 2014 11:55:00:
     * var result = startOfHour(new Date(2014, 8, 2, 11, 55))
     * //=> Tue Sep 02 2014 11:00:00
     */


    function startOfHour(dirtyDate) {
      var date = parse(dirtyDate);
      date.setMinutes(0, 0, 0);
      return date;
    }

    module.exports = startOfHour;
    /***/
  },

  /***/
  "./node_modules/date-fns/start_of_iso_week/index.js":
  /*!**********************************************************!*\
    !*** ./node_modules/date-fns/start_of_iso_week/index.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsStart_of_iso_weekIndexJs(module, exports, __webpack_require__) {
    var startOfWeek = __webpack_require__(
    /*! ../start_of_week/index.js */
    "./node_modules/date-fns/start_of_week/index.js");
    /**
     * @category ISO Week Helpers
     * @summary Return the start of an ISO week for the given date.
     *
     * @description
     * Return the start of an ISO week for the given date.
     * The result will be in the local timezone.
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the start of an ISO week
     *
     * @example
     * // The start of an ISO week for 2 September 2014 11:55:00:
     * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Mon Sep 01 2014 00:00:00
     */


    function startOfISOWeek(dirtyDate) {
      return startOfWeek(dirtyDate, {
        weekStartsOn: 1
      });
    }

    module.exports = startOfISOWeek;
    /***/
  },

  /***/
  "./node_modules/date-fns/start_of_iso_year/index.js":
  /*!**********************************************************!*\
    !*** ./node_modules/date-fns/start_of_iso_year/index.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsStart_of_iso_yearIndexJs(module, exports, __webpack_require__) {
    var getISOYear = __webpack_require__(
    /*! ../get_iso_year/index.js */
    "./node_modules/date-fns/get_iso_year/index.js");

    var startOfISOWeek = __webpack_require__(
    /*! ../start_of_iso_week/index.js */
    "./node_modules/date-fns/start_of_iso_week/index.js");
    /**
     * @category ISO Week-Numbering Year Helpers
     * @summary Return the start of an ISO week-numbering year for the given date.
     *
     * @description
     * Return the start of an ISO week-numbering year,
     * which always starts 3 days before the year's first Thursday.
     * The result will be in the local timezone.
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the start of an ISO year
     *
     * @example
     * // The start of an ISO week-numbering year for 2 July 2005:
     * var result = startOfISOYear(new Date(2005, 6, 2))
     * //=> Mon Jan 03 2005 00:00:00
     */


    function startOfISOYear(dirtyDate) {
      var year = getISOYear(dirtyDate);
      var fourthOfJanuary = new Date(0);
      fourthOfJanuary.setFullYear(year, 0, 4);
      fourthOfJanuary.setHours(0, 0, 0, 0);
      var date = startOfISOWeek(fourthOfJanuary);
      return date;
    }

    module.exports = startOfISOYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/start_of_minute/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/date-fns/start_of_minute/index.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsStart_of_minuteIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Minute Helpers
     * @summary Return the start of a minute for the given date.
     *
     * @description
     * Return the start of a minute for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the start of a minute
     *
     * @example
     * // The start of a minute for 1 December 2014 22:15:45.400:
     * var result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
     * //=> Mon Dec 01 2014 22:15:00
     */


    function startOfMinute(dirtyDate) {
      var date = parse(dirtyDate);
      date.setSeconds(0, 0);
      return date;
    }

    module.exports = startOfMinute;
    /***/
  },

  /***/
  "./node_modules/date-fns/start_of_month/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/date-fns/start_of_month/index.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsStart_of_monthIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Month Helpers
     * @summary Return the start of a month for the given date.
     *
     * @description
     * Return the start of a month for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the start of a month
     *
     * @example
     * // The start of a month for 2 September 2014 11:55:00:
     * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Mon Sep 01 2014 00:00:00
     */


    function startOfMonth(dirtyDate) {
      var date = parse(dirtyDate);
      date.setDate(1);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    module.exports = startOfMonth;
    /***/
  },

  /***/
  "./node_modules/date-fns/start_of_quarter/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/date-fns/start_of_quarter/index.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsStart_of_quarterIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Quarter Helpers
     * @summary Return the start of a year quarter for the given date.
     *
     * @description
     * Return the start of a year quarter for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the start of a quarter
     *
     * @example
     * // The start of a quarter for 2 September 2014 11:55:00:
     * var result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Tue Jul 01 2014 00:00:00
     */


    function startOfQuarter(dirtyDate) {
      var date = parse(dirtyDate);
      var currentMonth = date.getMonth();
      var month = currentMonth - currentMonth % 3;
      date.setMonth(month, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    module.exports = startOfQuarter;
    /***/
  },

  /***/
  "./node_modules/date-fns/start_of_second/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/date-fns/start_of_second/index.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsStart_of_secondIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Second Helpers
     * @summary Return the start of a second for the given date.
     *
     * @description
     * Return the start of a second for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the start of a second
     *
     * @example
     * // The start of a second for 1 December 2014 22:15:45.400:
     * var result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
     * //=> Mon Dec 01 2014 22:15:45.000
     */


    function startOfSecond(dirtyDate) {
      var date = parse(dirtyDate);
      date.setMilliseconds(0);
      return date;
    }

    module.exports = startOfSecond;
    /***/
  },

  /***/
  "./node_modules/date-fns/start_of_today/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/date-fns/start_of_today/index.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsStart_of_todayIndexJs(module, exports, __webpack_require__) {
    var startOfDay = __webpack_require__(
    /*! ../start_of_day/index.js */
    "./node_modules/date-fns/start_of_day/index.js");
    /**
     * @category Day Helpers
     * @summary Return the start of today.
     *
     * @description
     * Return the start of today.
     *
     * @returns {Date} the start of today
     *
     * @example
     * // If today is 6 October 2014:
     * var result = startOfToday()
     * //=> Mon Oct 6 2014 00:00:00
     */


    function startOfToday() {
      return startOfDay(new Date());
    }

    module.exports = startOfToday;
    /***/
  },

  /***/
  "./node_modules/date-fns/start_of_tomorrow/index.js":
  /*!**********************************************************!*\
    !*** ./node_modules/date-fns/start_of_tomorrow/index.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsStart_of_tomorrowIndexJs(module, exports) {
    /**
     * @category Day Helpers
     * @summary Return the start of tomorrow.
     *
     * @description
     * Return the start of tomorrow.
     *
     * @returns {Date} the start of tomorrow
     *
     * @example
     * // If today is 6 October 2014:
     * var result = startOfTomorrow()
     * //=> Tue Oct 7 2014 00:00:00
     */
    function startOfTomorrow() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth();
      var day = now.getDate();
      var date = new Date(0);
      date.setFullYear(year, month, day + 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    module.exports = startOfTomorrow;
    /***/
  },

  /***/
  "./node_modules/date-fns/start_of_week/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/date-fns/start_of_week/index.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsStart_of_weekIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Week Helpers
     * @summary Return the start of a week for the given date.
     *
     * @description
     * Return the start of a week for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @param {Object} [options] - the object with options
     * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
     * @returns {Date} the start of a week
     *
     * @example
     * // The start of a week for 2 September 2014 11:55:00:
     * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Sun Aug 31 2014 00:00:00
     *
     * @example
     * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
     * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
     * //=> Mon Sep 01 2014 00:00:00
     */


    function startOfWeek(dirtyDate, dirtyOptions) {
      var weekStartsOn = dirtyOptions ? Number(dirtyOptions.weekStartsOn) || 0 : 0;
      var date = parse(dirtyDate);
      var day = date.getDay();
      var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
      date.setDate(date.getDate() - diff);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    module.exports = startOfWeek;
    /***/
  },

  /***/
  "./node_modules/date-fns/start_of_year/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/date-fns/start_of_year/index.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsStart_of_yearIndexJs(module, exports, __webpack_require__) {
    var parse = __webpack_require__(
    /*! ../parse/index.js */
    "./node_modules/date-fns/parse/index.js");
    /**
     * @category Year Helpers
     * @summary Return the start of a year for the given date.
     *
     * @description
     * Return the start of a year for the given date.
     * The result will be in the local timezone.
     *
     * @param {Date|String|Number} date - the original date
     * @returns {Date} the start of a year
     *
     * @example
     * // The start of a year for 2 September 2014 11:55:00:
     * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
     * //=> Wed Jan 01 2014 00:00:00
     */


    function startOfYear(dirtyDate) {
      var cleanDate = parse(dirtyDate);
      var date = new Date(0);
      date.setFullYear(cleanDate.getFullYear(), 0, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    module.exports = startOfYear;
    /***/
  },

  /***/
  "./node_modules/date-fns/start_of_yesterday/index.js":
  /*!***********************************************************!*\
    !*** ./node_modules/date-fns/start_of_yesterday/index.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsStart_of_yesterdayIndexJs(module, exports) {
    /**
     * @category Day Helpers
     * @summary Return the start of yesterday.
     *
     * @description
     * Return the start of yesterday.
     *
     * @returns {Date} the start of yesterday
     *
     * @example
     * // If today is 6 October 2014:
     * var result = startOfYesterday()
     * //=> Sun Oct 5 2014 00:00:00
     */
    function startOfYesterday() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth();
      var day = now.getDate();
      var date = new Date(0);
      date.setFullYear(year, month, day - 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    module.exports = startOfYesterday;
    /***/
  },

  /***/
  "./node_modules/date-fns/sub_days/index.js":
  /*!*************************************************!*\
    !*** ./node_modules/date-fns/sub_days/index.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSub_daysIndexJs(module, exports, __webpack_require__) {
    var addDays = __webpack_require__(
    /*! ../add_days/index.js */
    "./node_modules/date-fns/add_days/index.js");
    /**
     * @category Day Helpers
     * @summary Subtract the specified number of days from the given date.
     *
     * @description
     * Subtract the specified number of days from the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of days to be subtracted
     * @returns {Date} the new date with the days subtracted
     *
     * @example
     * // Subtract 10 days from 1 September 2014:
     * var result = subDays(new Date(2014, 8, 1), 10)
     * //=> Fri Aug 22 2014 00:00:00
     */


    function subDays(dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return addDays(dirtyDate, -amount);
    }

    module.exports = subDays;
    /***/
  },

  /***/
  "./node_modules/date-fns/sub_hours/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/date-fns/sub_hours/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSub_hoursIndexJs(module, exports, __webpack_require__) {
    var addHours = __webpack_require__(
    /*! ../add_hours/index.js */
    "./node_modules/date-fns/add_hours/index.js");
    /**
     * @category Hour Helpers
     * @summary Subtract the specified number of hours from the given date.
     *
     * @description
     * Subtract the specified number of hours from the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of hours to be subtracted
     * @returns {Date} the new date with the hours subtracted
     *
     * @example
     * // Subtract 2 hours from 11 July 2014 01:00:00:
     * var result = subHours(new Date(2014, 6, 11, 1, 0), 2)
     * //=> Thu Jul 10 2014 23:00:00
     */


    function subHours(dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return addHours(dirtyDate, -amount);
    }

    module.exports = subHours;
    /***/
  },

  /***/
  "./node_modules/date-fns/sub_iso_years/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/date-fns/sub_iso_years/index.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSub_iso_yearsIndexJs(module, exports, __webpack_require__) {
    var addISOYears = __webpack_require__(
    /*! ../add_iso_years/index.js */
    "./node_modules/date-fns/add_iso_years/index.js");
    /**
     * @category ISO Week-Numbering Year Helpers
     * @summary Subtract the specified number of ISO week-numbering years from the given date.
     *
     * @description
     * Subtract the specified number of ISO week-numbering years from the given date.
     *
     * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of ISO week-numbering years to be subtracted
     * @returns {Date} the new date with the ISO week-numbering years subtracted
     *
     * @example
     * // Subtract 5 ISO week-numbering years from 1 September 2014:
     * var result = subISOYears(new Date(2014, 8, 1), 5)
     * //=> Mon Aug 31 2009 00:00:00
     */


    function subISOYears(dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return addISOYears(dirtyDate, -amount);
    }

    module.exports = subISOYears;
    /***/
  },

  /***/
  "./node_modules/date-fns/sub_milliseconds/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/date-fns/sub_milliseconds/index.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSub_millisecondsIndexJs(module, exports, __webpack_require__) {
    var addMilliseconds = __webpack_require__(
    /*! ../add_milliseconds/index.js */
    "./node_modules/date-fns/add_milliseconds/index.js");
    /**
     * @category Millisecond Helpers
     * @summary Subtract the specified number of milliseconds from the given date.
     *
     * @description
     * Subtract the specified number of milliseconds from the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of milliseconds to be subtracted
     * @returns {Date} the new date with the milliseconds subtracted
     *
     * @example
     * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
     * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
     * //=> Thu Jul 10 2014 12:45:29.250
     */


    function subMilliseconds(dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return addMilliseconds(dirtyDate, -amount);
    }

    module.exports = subMilliseconds;
    /***/
  },

  /***/
  "./node_modules/date-fns/sub_minutes/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/sub_minutes/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSub_minutesIndexJs(module, exports, __webpack_require__) {
    var addMinutes = __webpack_require__(
    /*! ../add_minutes/index.js */
    "./node_modules/date-fns/add_minutes/index.js");
    /**
     * @category Minute Helpers
     * @summary Subtract the specified number of minutes from the given date.
     *
     * @description
     * Subtract the specified number of minutes from the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of minutes to be subtracted
     * @returns {Date} the new date with the mintues subtracted
     *
     * @example
     * // Subtract 30 minutes from 10 July 2014 12:00:00:
     * var result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
     * //=> Thu Jul 10 2014 11:30:00
     */


    function subMinutes(dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return addMinutes(dirtyDate, -amount);
    }

    module.exports = subMinutes;
    /***/
  },

  /***/
  "./node_modules/date-fns/sub_months/index.js":
  /*!***************************************************!*\
    !*** ./node_modules/date-fns/sub_months/index.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSub_monthsIndexJs(module, exports, __webpack_require__) {
    var addMonths = __webpack_require__(
    /*! ../add_months/index.js */
    "./node_modules/date-fns/add_months/index.js");
    /**
     * @category Month Helpers
     * @summary Subtract the specified number of months from the given date.
     *
     * @description
     * Subtract the specified number of months from the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of months to be subtracted
     * @returns {Date} the new date with the months subtracted
     *
     * @example
     * // Subtract 5 months from 1 February 2015:
     * var result = subMonths(new Date(2015, 1, 1), 5)
     * //=> Mon Sep 01 2014 00:00:00
     */


    function subMonths(dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return addMonths(dirtyDate, -amount);
    }

    module.exports = subMonths;
    /***/
  },

  /***/
  "./node_modules/date-fns/sub_quarters/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/sub_quarters/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSub_quartersIndexJs(module, exports, __webpack_require__) {
    var addQuarters = __webpack_require__(
    /*! ../add_quarters/index.js */
    "./node_modules/date-fns/add_quarters/index.js");
    /**
     * @category Quarter Helpers
     * @summary Subtract the specified number of year quarters from the given date.
     *
     * @description
     * Subtract the specified number of year quarters from the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of quarters to be subtracted
     * @returns {Date} the new date with the quarters subtracted
     *
     * @example
     * // Subtract 3 quarters from 1 September 2014:
     * var result = subQuarters(new Date(2014, 8, 1), 3)
     * //=> Sun Dec 01 2013 00:00:00
     */


    function subQuarters(dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return addQuarters(dirtyDate, -amount);
    }

    module.exports = subQuarters;
    /***/
  },

  /***/
  "./node_modules/date-fns/sub_seconds/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/sub_seconds/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSub_secondsIndexJs(module, exports, __webpack_require__) {
    var addSeconds = __webpack_require__(
    /*! ../add_seconds/index.js */
    "./node_modules/date-fns/add_seconds/index.js");
    /**
     * @category Second Helpers
     * @summary Subtract the specified number of seconds from the given date.
     *
     * @description
     * Subtract the specified number of seconds from the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of seconds to be subtracted
     * @returns {Date} the new date with the seconds subtracted
     *
     * @example
     * // Subtract 30 seconds from 10 July 2014 12:45:00:
     * var result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
     * //=> Thu Jul 10 2014 12:44:30
     */


    function subSeconds(dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return addSeconds(dirtyDate, -amount);
    }

    module.exports = subSeconds;
    /***/
  },

  /***/
  "./node_modules/date-fns/sub_weeks/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/date-fns/sub_weeks/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSub_weeksIndexJs(module, exports, __webpack_require__) {
    var addWeeks = __webpack_require__(
    /*! ../add_weeks/index.js */
    "./node_modules/date-fns/add_weeks/index.js");
    /**
     * @category Week Helpers
     * @summary Subtract the specified number of weeks from the given date.
     *
     * @description
     * Subtract the specified number of weeks from the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of weeks to be subtracted
     * @returns {Date} the new date with the weeks subtracted
     *
     * @example
     * // Subtract 4 weeks from 1 September 2014:
     * var result = subWeeks(new Date(2014, 8, 1), 4)
     * //=> Mon Aug 04 2014 00:00:00
     */


    function subWeeks(dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return addWeeks(dirtyDate, -amount);
    }

    module.exports = subWeeks;
    /***/
  },

  /***/
  "./node_modules/date-fns/sub_years/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/date-fns/sub_years/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDateFnsSub_yearsIndexJs(module, exports, __webpack_require__) {
    var addYears = __webpack_require__(
    /*! ../add_years/index.js */
    "./node_modules/date-fns/add_years/index.js");
    /**
     * @category Year Helpers
     * @summary Subtract the specified number of years from the given date.
     *
     * @description
     * Subtract the specified number of years from the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of years to be subtracted
     * @returns {Date} the new date with the years subtracted
     *
     * @example
     * // Subtract 5 years from 1 September 2014:
     * var result = subYears(new Date(2014, 8, 1), 5)
     * //=> Tue Sep 01 2009 00:00:00
     */


    function subYears(dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return addYears(dirtyDate, -amount);
    }

    module.exports = subYears;
    /***/
  },

  /***/
  "./node_modules/dom-mousemove-dispatcher/dist/bundle.js":
  /*!**************************************************************!*\
    !*** ./node_modules/dom-mousemove-dispatcher/dist/bundle.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDomMousemoveDispatcherDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    var objectCreate = void 0;

    if (typeof Object.create != 'function') {
      objectCreate = function (undefined) {
        var Temp = function Temp() {};

        return function (prototype, propertiesObject) {
          if (prototype !== Object(prototype) && prototype !== null) {
            throw TypeError('Argument must be an object, or null');
          }

          Temp.prototype = prototype || {};
          var result = new Temp();
          Temp.prototype = null;

          if (propertiesObject !== undefined) {
            Object.defineProperties(result, propertiesObject);
          } // to imitate the case of Object.create(null)


          if (prototype === null) {
            result.__proto__ = null;
          }

          return result;
        };
      }();
    } else {
      objectCreate = Object.create;
    }

    var objectCreate$1 = objectCreate;
    var mouseEventProps = ['altKey', 'button', 'buttons', 'clientX', 'clientY', 'ctrlKey', 'metaKey', 'movementX', 'movementY', 'offsetX', 'offsetY', 'pageX', 'pageY', 'region', 'relatedTarget', 'screenX', 'screenY', 'shiftKey', 'which', 'x', 'y'];

    function createDispatcher(element) {
      var defaultSettings = {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
        metaKey: false,
        button: 0,
        buttons: 1,
        relatedTarget: null,
        region: null
      };

      if (element !== undefined) {
        element.addEventListener('mousemove', onMove);
      }

      function onMove(e) {
        for (var i = 0; i < mouseEventProps.length; i++) {
          defaultSettings[mouseEventProps[i]] = e[mouseEventProps[i]];
        }
      }

      var dispatch = function () {
        if (MouseEvent) {
          return function m1(element, initMove, data) {
            var evt = new MouseEvent('mousemove', createMoveInit(defaultSettings, initMove)); //evt.dispatched = 'mousemove';

            setSpecial(evt, data);
            return element.dispatchEvent(evt);
          };
        } else if (typeof document.createEvent === 'function') {
          return function m2(element, initMove, data) {
            var settings = createMoveInit(defaultSettings, initMove);
            var evt = document.createEvent('MouseEvents');
            evt.initMouseEvent("mousemove", true, //can bubble
            true, //cancelable
            window, //view
            0, //detail
            settings.screenX, //0, //screenX
            settings.screenY, //0, //screenY
            settings.clientX, //80, //clientX
            settings.clientY, //20, //clientY
            settings.ctrlKey, //false, //ctrlKey
            settings.altKey, //false, //altKey
            settings.shiftKey, //false, //shiftKey
            settings.metaKey, //false, //metaKey
            settings.button, //0, //button
            settings.relatedTarget //null //relatedTarget
            ); //evt.dispatched = 'mousemove';

            setSpecial(evt, data);
            return element.dispatchEvent(evt);
          };
        } else if (typeof document.createEventObject === 'function') {
          return function m3(element, initMove, data) {
            var evt = document.createEventObject();
            var settings = createMoveInit(defaultSettings, initMove);

            for (var name in settings) {
              evt[name] = settings[name];
            } //evt.dispatched = 'mousemove';


            setSpecial(evt, data);
            return element.dispatchEvent(evt);
          };
        }
      }();

      function destroy() {
        if (element) element.removeEventListener('mousemove', onMove, false);
        defaultSettings = null;
      }

      return {
        destroy: destroy,
        dispatch: dispatch
      };
    }

    function createMoveInit(defaultSettings, initMove) {
      initMove = initMove || {};
      var settings = objectCreate$1(defaultSettings);

      for (var i = 0; i < mouseEventProps.length; i++) {
        if (initMove[mouseEventProps[i]] !== undefined) settings[mouseEventProps[i]] = initMove[mouseEventProps[i]];
      }

      return settings;
    }

    function setSpecial(e, data) {
      console.log('data ', data);
      e.data = data || {};
      e.dispatched = 'mousemove';
    }
    /*
    http://marcgrabanski.com/simulating-mouse-click-events-in-javascript/
    */


    module.exports = createDispatcher; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/dom-plane/dist/bundle.js":
  /*!***********************************************!*\
    !*** ./node_modules/dom-plane/dist/bundle.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesDomPlaneDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var createPointCb = _interopDefault(__webpack_require__(
    /*! create-point-cb */
    "./node_modules/create-point-cb/dist/bundle.js"));

    function createWindowRect() {
      var props = {
        top: {
          value: 0,
          enumerable: true
        },
        left: {
          value: 0,
          enumerable: true
        },
        right: {
          value: window.innerWidth,
          enumerable: true
        },
        bottom: {
          value: window.innerHeight,
          enumerable: true
        },
        width: {
          value: window.innerWidth,
          enumerable: true
        },
        height: {
          value: window.innerHeight,
          enumerable: true
        },
        x: {
          value: 0,
          enumerable: true
        },
        y: {
          value: 0,
          enumerable: true
        }
      };

      if (Object.create) {
        return Object.create({}, props);
      } else {
        var rect = {};
        Object.defineProperties(rect, props);
        return rect;
      }
    }

    function getClientRect(el) {
      if (el === window) {
        return createWindowRect();
      } else {
        try {
          var rect = el.getBoundingClientRect();

          if (rect.x === undefined) {
            rect.x = rect.left;
            rect.y = rect.top;
          }

          return rect;
        } catch (e) {
          throw new TypeError("Can't call getBoundingClientRect on " + el);
        }
      }
    }

    function pointInside(point, el) {
      var rect = getClientRect(el);
      return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
    }

    exports.createPointCB = createPointCb;
    exports.getClientRect = getClientRect;
    exports.pointInside = pointInside; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/dom-set/dist/bundle.js":
  /*!*********************************************!*\
    !*** ./node_modules/dom-set/dist/bundle.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesDomSetDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var arrayFrom = _interopDefault(__webpack_require__(
    /*! array-from */
    "./node_modules/array-from/index.js"));

    var isArray = _interopDefault(__webpack_require__(
    /*! is-array */
    "./node_modules/is-array/index.js"));

    var isElement = _interopDefault(__webpack_require__(
    /*! iselement */
    "./node_modules/iselement/module/index.js"));

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    /**
     * Returns `true` if provided input is Element.
     * @name isElement
     * @param {*} [input]
     * @returns {boolean}
     */


    var isElement$1 = function isElement$1(input) {
      return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === 1 && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
    };

    function select(selector) {
      if (typeof selector === 'string') {
        try {
          return document.querySelector(selector);
        } catch (e) {
          throw e;
        }
      } else if (isElement(selector)) {
        return selector;
      }
    }

    function selectAll(selector) {
      if (typeof selector === 'string') {
        return Array.prototype.slice.apply(document.querySelectorAll(selector));
      } else if (isArray(selector)) {
        return selector.map(select);
      } else if ('length' in selector) {
        return arrayFrom(selector).map(select);
      }
    }

    function indexOfElement(elements, element) {
      element = resolveElement(element, true);

      if (!isElement$1(element)) {
        return -1;
      }

      for (var i = 0; i < elements.length; i++) {
        if (elements[i] === element) {
          return i;
        }
      }

      return -1;
    }

    function hasElement(elements, element) {
      return -1 !== indexOfElement(elements, element);
    }

    function domListOf(arr) {
      if (!arr) {
        return [];
      }

      try {
        if (typeof arr === 'string') {
          return arrayFrom(document.querySelectorAll(arr));
        } else if (isArray(arr)) {
          return arr.map(resolveElement);
        } else {
          if (typeof arr.length === 'undefined') {
            return [resolveElement(arr)];
          }

          return arrayFrom(arr, resolveElement);
        }
      } catch (e) {
        throw new Error(e);
      }
    }

    function concatElementLists() {
      var lists = [],
          len = arguments.length;

      while (len--) {
        lists[len] = arguments[len];
      }

      return lists.reduce(function (last, list) {
        return list.length ? last : last.concat(domListOf(list));
      }, []);
    }

    function pushElements(elements, toAdd) {
      for (var i = 0; i < toAdd.length; i++) {
        if (!hasElement(elements, toAdd[i])) {
          elements.push(toAdd[i]);
        }
      }

      return toAdd;
    }

    function addElements(elements) {
      var toAdd = [],
          len = arguments.length - 1;

      while (len-- > 0) {
        toAdd[len] = arguments[len + 1];
      }

      toAdd = toAdd.map(resolveElement);
      return pushElements(elements, toAdd);
    }

    function removeElements(elements) {
      var toRemove = [],
          len = arguments.length - 1;

      while (len-- > 0) {
        toRemove[len] = arguments[len + 1];
      }

      return toRemove.map(resolveElement).reduce(function (last, e) {
        var index = indexOfElement(elements, e);

        if (index !== -1) {
          return last.concat(elements.splice(index, 1));
        }

        return last;
      }, []);
    }

    function resolveElement(element, noThrow) {
      if (typeof element === 'string') {
        try {
          return document.querySelector(element);
        } catch (e) {
          throw e;
        }
      }

      if (!isElement$1(element) && !noThrow) {
        throw new TypeError(element + " is not a DOM element.");
      }

      return element;
    }

    exports.indexOfElement = indexOfElement;
    exports.hasElement = hasElement;
    exports.domListOf = domListOf;
    exports.concatElementLists = concatElementLists;
    exports.addElements = addElements;
    exports.removeElements = removeElements;
    exports.resolveElement = resolveElement;
    exports.select = select;
    exports.selectAll = selectAll; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/is-array/index.js":
  /*!****************************************!*\
    !*** ./node_modules/is-array/index.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesIsArrayIndexJs(module, exports) {
    /**
     * isArray
     */
    var isArray = Array.isArray;
    /**
     * toString
     */

    var str = Object.prototype.toString;
    /**
     * Whether or not the given `val`
     * is an array.
     *
     * example:
     *
     *        isArray([]);
     *        // > true
     *        isArray(arguments);
     *        // > false
     *        isArray('');
     *        // > false
     *
     * @param {mixed} val
     * @return {bool}
     */

    module.exports = isArray || function (val) {
      return !!val && '[object Array]' == str.call(val);
    };
    /***/

  },

  /***/
  "./node_modules/iselement/module/index.js":
  /*!************************************************!*\
    !*** ./node_modules/iselement/module/index.js ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesIselementModuleIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    /**
     * Returns `true` if provided input is Element.
     * @name isElement
     * @param {*} [input]
     * @returns {boolean}
     */

    /* harmony default export */


    __webpack_exports__["default"] = function (input) {
      return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === 1 && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
    };
    /***/

  },

  /***/
  "./node_modules/positioning/dist/entry.js":
  /*!************************************************!*\
    !*** ./node_modules/positioning/dist/entry.js ***!
    \************************************************/

  /*! exports provided: positionElements */

  /***/
  function node_modulesPositioningDistEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./positioning */
    "./node_modules/positioning/dist/positioning.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "positionElements", function () {
      return _positioning__WEBPACK_IMPORTED_MODULE_0__["positionElements"];
    }); //# sourceMappingURL=entry.js.map

    /***/

  },

  /***/
  "./node_modules/positioning/dist/positioning.js":
  /*!******************************************************!*\
    !*** ./node_modules/positioning/dist/positioning.js ***!
    \******************************************************/

  /*! exports provided: Positioning, positionElements */

  /***/
  function node_modulesPositioningDistPositioningJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Positioning", function () {
      return Positioning;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "positionElements", function () {
      return positionElements;
    }); // previous version:
    // https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js


    var Positioning =
    /** @class */
    function () {
      function Positioning() {}

      Positioning.prototype.getAllStyles = function (element) {
        return window.getComputedStyle(element);
      };

      Positioning.prototype.getStyle = function (element, prop) {
        return this.getAllStyles(element)[prop];
      };

      Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
      };

      Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;

        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
          offsetParentEl = offsetParentEl.offsetParent;
        }

        return offsetParentEl || document.documentElement;
      };

      Positioning.prototype.position = function (element, round) {
        if (round === void 0) {
          round = true;
        }

        var elPosition;
        var parentOffset = {
          width: 0,
          height: 0,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        };

        if (this.getStyle(element, 'position') === 'fixed') {
          elPosition = element.getBoundingClientRect();
          elPosition = {
            top: elPosition.top,
            bottom: elPosition.bottom,
            left: elPosition.left,
            right: elPosition.right,
            height: elPosition.height,
            width: elPosition.width
          };
        } else {
          var offsetParentEl = this.offsetParent(element);
          elPosition = this.offset(element, false);

          if (offsetParentEl !== document.documentElement) {
            parentOffset = this.offset(offsetParentEl, false);
          }

          parentOffset.top += offsetParentEl.clientTop;
          parentOffset.left += offsetParentEl.clientLeft;
        }

        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;

        if (round) {
          elPosition.top = Math.round(elPosition.top);
          elPosition.bottom = Math.round(elPosition.bottom);
          elPosition.left = Math.round(elPosition.left);
          elPosition.right = Math.round(elPosition.right);
        }

        return elPosition;
      };

      Positioning.prototype.offset = function (element, round) {
        if (round === void 0) {
          round = true;
        }

        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
          top: window.pageYOffset - document.documentElement.clientTop,
          left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
          height: elBcr.height || element.offsetHeight,
          width: elBcr.width || element.offsetWidth,
          top: elBcr.top + viewportOffset.top,
          bottom: elBcr.bottom + viewportOffset.top,
          left: elBcr.left + viewportOffset.left,
          right: elBcr.right + viewportOffset.left
        };

        if (round) {
          elOffset.height = Math.round(elOffset.height);
          elOffset.width = Math.round(elOffset.width);
          elOffset.top = Math.round(elOffset.top);
          elOffset.bottom = Math.round(elOffset.bottom);
          elOffset.left = Math.round(elOffset.left);
          elOffset.right = Math.round(elOffset.right);
        }

        return elOffset;
      };
      /*
        Return false if the element to position is outside the viewport
      */


      Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var _a = placement.split('-'),
            _b = _a[0],
            placementPrimary = _b === void 0 ? 'top' : _b,
            _c = _a[1],
            placementSecondary = _c === void 0 ? 'center' : _c;

        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var marginTop = parseFloat(targetElStyles.marginTop);
        var marginBottom = parseFloat(targetElStyles.marginBottom);
        var marginLeft = parseFloat(targetElStyles.marginLeft);
        var marginRight = parseFloat(targetElStyles.marginRight);
        var topPosition = 0;
        var leftPosition = 0;

        switch (placementPrimary) {
          case 'top':
            topPosition = hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom);
            break;

          case 'bottom':
            topPosition = hostElPosition.top + hostElPosition.height;
            break;

          case 'left':
            leftPosition = hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight);
            break;

          case 'right':
            leftPosition = hostElPosition.left + hostElPosition.width;
            break;
        }

        switch (placementSecondary) {
          case 'top':
            topPosition = hostElPosition.top;
            break;

          case 'bottom':
            topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
            break;

          case 'left':
            leftPosition = hostElPosition.left;
            break;

          case 'right':
            leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
            break;

          case 'center':
            if (placementPrimary === 'top' || placementPrimary === 'bottom') {
              leftPosition = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
            } else {
              topPosition = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
            }

            break;
        } /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
        // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;


        targetElement.style.transform = "translate(" + Math.round(leftPosition) + "px, " + Math.round(topPosition) + "px)"; // Check if the targetElement is inside the viewport

        var targetElBCR = targetElement.getBoundingClientRect();
        var html = document.documentElement;
        var windowHeight = window.innerHeight || html.clientHeight;
        var windowWidth = window.innerWidth || html.clientWidth;
        return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth && targetElBCR.bottom <= windowHeight;
      };

      return Positioning;
    }();

    var placementSeparator = /\s+/;
    var positionService = new Positioning();
    /*
     * Accept the placement array and applies the appropriate placement dependent on the viewport.
     * Returns the applied placement.
     * In case of auto placement, placements are selected in order
     *   'top', 'bottom', 'left', 'right',
     *   'top-left', 'top-right',
     *   'bottom-left', 'bottom-right',
     *   'left-top', 'left-bottom',
     *   'right-top', 'right-bottom'.
     * */

    function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
      var placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator);
      var allowedPlacements = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom', 'right-top', 'right-bottom'];
      var classList = targetElement.classList;

      var addClassesToTarget = function addClassesToTarget(targetPlacement) {
        var _a = targetPlacement.split('-'),
            primary = _a[0],
            secondary = _a[1];

        var classes = [];

        if (baseClass) {
          classes.push(baseClass + "-" + primary);

          if (secondary) {
            classes.push(baseClass + "-" + primary + "-" + secondary);
          }

          classes.forEach(function (classname) {
            classList.add(classname);
          });
        }

        return classes;
      }; // Remove old placement classes to avoid issues


      if (baseClass) {
        allowedPlacements.forEach(function (placementToRemove) {
          classList.remove(baseClass + "-" + placementToRemove);
        });
      } // replace auto placement with other placements


      var hasAuto = placementVals.findIndex(function (val) {
        return val === 'auto';
      });

      if (hasAuto >= 0) {
        allowedPlacements.forEach(function (obj) {
          if (placementVals.find(function (val) {
            return val.search('^' + obj) !== -1;
          }) == null) {
            placementVals.splice(hasAuto++, 1, obj);
          }
        });
      } // coordinates where to position
      // Required for transform:


      var style = targetElement.style;
      style.position = 'absolute';
      style.top = '0';
      style.left = '0';
      style['will-change'] = 'transform';
      var testPlacement;
      var isInViewport = false;

      for (var _i = 0, placementVals_1 = placementVals; _i < placementVals_1.length; _i++) {
        testPlacement = placementVals_1[_i];
        var addedClasses = addClassesToTarget(testPlacement);

        if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
          isInViewport = true;
          break;
        } // Remove the baseClasses for further calculation


        if (baseClass) {
          addedClasses.forEach(function (classname) {
            classList.remove(classname);
          });
        }
      }

      if (!isInViewport) {
        // If nothing match, the first placement is the default one
        testPlacement = placementVals[0];
        addClassesToTarget(testPlacement);
        positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
      }

      return testPlacement;
    } //# sourceMappingURL=positioning.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/calendar/calendar-edit/calendar-edit.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/calendar/calendar-edit/calendar-edit.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAppsCalendarCalendarEditCalendarEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 matDialogTitle>\r\n  {{ event.title }}\r\n</h3>\r\n\r\n<mat-dialog-content>\r\n  <form [formGroup]=\"form\">\r\n    <div fxLayout=\"column\">\r\n      <mat-form-field fxFlex=\"auto\">\r\n        <mat-label>Event Name</mat-label>\r\n        <input formControlName=\"title\" matInput>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex=\"auto\">\r\n        <mat-label>Start Date</mat-label>\r\n        <input [matDatepicker]=\"startDatepicker\" formControlName=\"start\" matInput>\r\n        <mat-datepicker-toggle [for]=\"startDatepicker\" matSuffix></mat-datepicker-toggle>\r\n        <mat-datepicker #startDatepicker></mat-datepicker>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex=\"auto\">\r\n        <mat-label>End Date</mat-label>\r\n        <input [matDatepicker]=\"endDatepicker\" formControlName=\"end\" matInput>\r\n        <mat-datepicker-toggle [for]=\"endDatepicker\" matSuffix></mat-datepicker-toggle>\r\n        <mat-datepicker #endDatepicker></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n  </form>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\r\n  <button mat-button mat-dialog-close>CANCEL</button>\r\n  <button (click)=\"save()\" class=\"save\" color=\"primary\" mat-raised-button>SAVE</button>\r\n</mat-dialog-actions>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/calendar/calendar.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/calendar/calendar.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAppsCalendarCalendarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"h-full flex flex-col\">\n  <div class=\"calendar-bg relative text-contrast-white flex-none\">\n    <div class=\"bg-contrast-black opacity-25 absolute top-0 left-0 right-0 bottom-0 z-0 w-full h-full\"></div>\n    <div class=\"container py-4 px-6 h-40 z-10 relative flex items-end\">\n      <div class=\"flex-auto flex flex-col sm:flex-row justify-between items-center\">\n        <div class=\"headline\">{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</div>\n\n        <div class=\"actions flex flex-col sm:flex-row justify-end items-center\">\n          <div class=\"chevrons\">\n            <button [(viewDate)]=\"viewDate\" [view]=\"view\" mat-icon-button mwlCalendarPreviousView>\n              <mat-icon [icIcon]=\"icChevronLeft\"></mat-icon>\n            </button>\n            <button [(viewDate)]=\"viewDate\" [view]=\"view\" mat-icon-button mwlCalendarNextView>\n              <mat-icon [icIcon]=\"icChevronRight\"></mat-icon>\n            </button>\n          </div>\n          <div class=\"flex\">\n            <button (click)=\"view = CalendarView.Month\" mat-button>MONTH</button>\n            <button (click)=\"view = CalendarView.Week\" mat-button>WEEK</button>\n            <button (click)=\"view = CalendarView.Day\" mat-button>DAY</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div [ngSwitch]=\"view\" class=\"container px-0 shadow flex-auto flex flex-col\">\n    <div *ngSwitchCase=\"'month'\" class=\"flex flex-col flex-1\" vexScrollbar>\n      <mwl-calendar-month-view\n        (dayClicked)=\"dayClicked($event.day)\"\n        (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n        (eventTimesChanged)=\"eventTimesChanged($event)\"\n        [activeDayIsOpen]=\"activeDayIsOpen\"\n        [events]=\"events\"\n        [refresh]=\"refresh\"\n        [viewDate]=\"viewDate\"\n        class=\"padding-horizontal padding-bottom flex-1\">\n      </mwl-calendar-month-view>\n    </div>\n    <div *ngSwitchCase=\"'week'\" class=\"flex flex-col flex-1\" vexScrollbar>\n      <mwl-calendar-week-view\n        (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n        (eventTimesChanged)=\"eventTimesChanged($event)\"\n        [events]=\"events\"\n        [refresh]=\"refresh\"\n        [viewDate]=\"viewDate\"\n        class=\"padding-horizontal padding-bottom flex-1\">\n      </mwl-calendar-week-view>\n    </div>\n    <div *ngSwitchCase=\"'day'\" class=\"flex-1 flex flex-col\" vexScrollbar>\n      <mwl-calendar-day-view\n        (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n        (eventTimesChanged)=\"eventTimesChanged($event)\"\n        [events]=\"events\"\n        [refresh]=\"refresh\"\n        [viewDate]=\"viewDate\"\n        class=\"padding-horizontal padding-bottom flex-1\">\n      </mwl-calendar-day-view>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/type-func/dist/bundle.js":
  /*!***********************************************!*\
    !*** ./node_modules/type-func/dist/bundle.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesTypeFuncDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function getDef(f, d) {
      if (typeof f === 'undefined') {
        return typeof d === 'undefined' ? f : d;
      }

      return f;
    }

    function _boolean(func, def) {
      func = getDef(func, def);

      if (typeof func === 'function') {
        return function f() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return !!func.apply(this, args);
        };
      }

      return !!func ? function () {
        return true;
      } : function () {
        return false;
      };
    }

    function integer(func, def) {
      func = getDef(func, def);

      if (typeof func === 'function') {
        return function f() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          var n = parseInt(func.apply(this, args), 10);
          return n != n ? 0 : n;
        };
      }

      func = parseInt(func, 10);
      return func != func ? function () {
        return 0;
      } : function () {
        return func;
      };
    }

    function string(func, def) {
      func = getDef(func, def);

      if (typeof func === 'function') {
        return function f() {
          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          return '' + func.apply(this, args);
        };
      }

      func = '' + func;
      return function () {
        return func;
      };
    }

    exports["boolean"] = _boolean;
    exports.integer = integer;
    exports.string = string; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./src/app/pages/apps/calendar/calendar-edit/calendar-edit.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/apps/calendar/calendar-edit/calendar-edit.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAppsCalendarCalendarEditCalendarEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvY2FsZW5kYXIvY2FsZW5kYXItZWRpdC9jYWxlbmRhci1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/apps/calendar/calendar-edit/calendar-edit.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/apps/calendar/calendar-edit/calendar-edit.component.ts ***!
    \******************************************************************************/

  /*! exports provided: CalendarEditComponent */

  /***/
  function srcAppPagesAppsCalendarCalendarEditCalendarEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEditComponent", function () {
      return CalendarEditComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var CalendarEditComponent = /*#__PURE__*/function () {
      function CalendarEditComponent(dialogRef, event, fb) {
        _classCallCheck(this, CalendarEditComponent);

        this.dialogRef = dialogRef;
        this.event = event;
        this.fb = fb;
        this.form = this.fb.group({
          title: null,
          start: null,
          end: null
        });
      }

      _createClass(CalendarEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form.patchValue(this.event);
        }
      }, {
        key: "save",
        value: function save() {
          this.dialogRef.close(Object.assign({}, this.event, this.form.value));
        }
      }]);

      return CalendarEditComponent;
    }();

    CalendarEditComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    CalendarEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-calendar-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./calendar-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/calendar/calendar-edit/calendar-edit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./calendar-edit.component.scss */
      "./src/app/pages/apps/calendar/calendar-edit/calendar-edit.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], CalendarEditComponent);
    /***/
  },

  /***/
  "./src/app/pages/apps/calendar/calendar-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/apps/calendar/calendar-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: CalendarRoutingModule */

  /***/
  function srcAppPagesAppsCalendarCalendarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarRoutingModule", function () {
      return CalendarRoutingModule;
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


    var _calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./calendar.component */
    "./src/app/pages/apps/calendar/calendar.component.ts");

    var routes = [{
      path: '',
      component: _calendar_component__WEBPACK_IMPORTED_MODULE_3__["CalendarComponent"],
      data: {
        toolbarShadowEnabled: true,
        scrollDisabled: true
      }
    }];

    var CalendarRoutingModule = function CalendarRoutingModule() {
      _classCallCheck(this, CalendarRoutingModule);
    };

    CalendarRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CalendarRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/apps/calendar/calendar.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/apps/calendar/calendar.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAppsCalendarCalendarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view .cal-days {\n  border: 1px solid;\n  border-bottom: 0; }\n\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  flex: 1; }\n\n.cal-month-view .cal-cell-row {\n  -js-display: flex;\n  display: flex; }\n\n.cal-month-view .cal-cell {\n  float: left;\n  flex: 1;\n  -js-display: flex;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch; }\n\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n\n@media all and (-ms-high-contrast: none) {\n    .cal-month-view .cal-day-cell {\n      display: block; } }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid; }\n\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n\n.cal-month-view .cal-events {\n  flex: 1;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  -js-display: flex;\n  display: flex;\n  flex-wrap: wrap; }\n\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px; }\n\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n\n.cal-month-view .cal-open-day-events {\n  padding: 15px; }\n\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n\n.cal-month-view .cal-draggable {\n  cursor: move; }\n\n.cal-month-view .cal-drag-active * {\n  pointer-events: none; }\n\n.cal-month-view .cal-event-title {\n  cursor: pointer; }\n\n.cal-month-view .cal-event-title:hover {\n    text-decoration: underline; }\n\n.cal-month-view {\n  background-color: #fff; }\n\n.cal-month-view .cal-cell-row:hover {\n    background-color: #fafafa; }\n\n.cal-month-view .cal-cell-row .cal-cell:hover,\n  .cal-month-view .cal-cell.cal-has-events.cal-open {\n    background-color: #ededed; }\n\n.cal-month-view .cal-days {\n    border-color: #e1e1e1; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n    border-right-color: #e1e1e1; }\n\n.cal-month-view .cal-days .cal-cell-row {\n    border-bottom-color: #e1e1e1; }\n\n.cal-month-view .cal-day-badge {\n    background-color: #b94a48;\n    color: #fff; }\n\n.cal-month-view .cal-event {\n    background-color: #1e90ff;\n    border-color: #d1e8ff;\n    color: #fff; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n    color: #8b0000; }\n\n.cal-month-view .cal-day-cell.cal-today {\n    background-color: #e8fde7; }\n\n.cal-month-view .cal-day-cell.cal-drag-over {\n    background-color: #e0e0e0 !important; }\n\n.cal-month-view .cal-open-day-events {\n    color: #fff;\n    background-color: #555;\n    box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-week-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n\n.cal-week-view * {\n    box-sizing: border-box; }\n\n.cal-week-view .cal-day-headers {\n    -js-display: flex;\n    display: flex;\n    padding-left: 70px;\n    border: 1px solid; }\n\n.cal-week-view .cal-day-headers .cal-header {\n    flex: 1;\n    text-align: center;\n    padding: 5px; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n      border-right: 1px solid; }\n\n.cal-week-view .cal-day-headers .cal-header:first-child {\n      border-left: 1px solid; }\n\n.cal-week-view .cal-day-headers span {\n    font-weight: 400;\n    opacity: 0.5; }\n\n.cal-week-view .cal-day-column {\n    flex-grow: 1;\n    border-left: solid 1px; }\n\n.cal-week-view .cal-event {\n    font-size: 12px;\n    border: 1px solid; }\n\n.cal-week-view .cal-time-label-column {\n    width: 70px;\n    height: 100%; }\n\n.cal-week-view .cal-all-day-events {\n    border: solid 1px;\n    border-top: 0;\n    border-bottom-width: 3px;\n    padding-top: 3px;\n    position: relative; }\n\n.cal-week-view .cal-all-day-events .cal-day-columns {\n      height: 100%;\n      width: 100%;\n      -js-display: flex;\n      display: flex;\n      position: absolute;\n      top: 0;\n      z-index: 0; }\n\n.cal-week-view .cal-all-day-events .cal-events-row {\n      position: relative;\n      height: 31px;\n      margin-left: 70px; }\n\n.cal-week-view .cal-all-day-events .cal-event-container {\n      display: inline-block;\n      position: absolute; }\n\n.cal-week-view .cal-all-day-events .cal-event-container.resize-active {\n        z-index: 1;\n        pointer-events: none; }\n\n.cal-week-view .cal-all-day-events .cal-event {\n      padding: 0 5px;\n      margin-left: 2px;\n      margin-right: 2px;\n      height: 28px;\n      line-height: 28px; }\n\n.cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event {\n      border-top-left-radius: 5px;\n      border-bottom-left-radius: 5px; }\n\n.cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event {\n      border-top-right-radius: 5px;\n      border-bottom-right-radius: 5px; }\n\n.cal-week-view .cal-all-day-events .cal-time-label-column {\n      -js-display: flex;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 14px; }\n\n.cal-week-view .cal-all-day-events .cal-resize-handle {\n      width: 6px;\n      height: 100%;\n      cursor: col-resize;\n      position: absolute;\n      top: 0; }\n\n.cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end {\n        right: 0; }\n\n.cal-week-view .cal-event,\n  .cal-week-view .cal-header {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\n.cal-week-view .cal-drag-active {\n    pointer-events: none;\n    z-index: 1; }\n\n.cal-week-view .cal-drag-active * {\n      pointer-events: none; }\n\n.cal-week-view .cal-time-events {\n    position: relative;\n    border: solid 1px;\n    border-top: 0;\n    -js-display: flex;\n    display: flex; }\n\n.cal-week-view .cal-time-events .cal-day-columns {\n      -js-display: flex;\n      display: flex;\n      flex-grow: 1; }\n\n.cal-week-view .cal-time-events .cal-day-column {\n      position: relative; }\n\n.cal-week-view .cal-time-events .cal-event-container {\n      position: absolute;\n      z-index: 1; }\n\n.cal-week-view .cal-time-events .cal-event {\n      width: calc(100% - 2px);\n      height: calc(100% - 2px);\n      margin: 1px;\n      padding: 0 5px;\n      line-height: 25px; }\n\n.cal-week-view .cal-time-events .cal-resize-handle {\n      width: 100%;\n      height: 4px;\n      cursor: row-resize;\n      position: absolute; }\n\n.cal-week-view .cal-time-events .cal-resize-handle.cal-resize-handle-after-end {\n        bottom: 0; }\n\n.cal-week-view .cal-hour-segment {\n    position: relative; }\n\n.cal-week-view .cal-hour-segment::after {\n      content: '\\00a0'; }\n\n.cal-week-view .cal-event-container:not(.cal-draggable) {\n    cursor: pointer; }\n\n.cal-week-view .cal-draggable {\n    cursor: move; }\n\n.cal-week-view mwl-calendar-week-view-hour-segment,\n  .cal-week-view .cal-hour-segment {\n    display: block; }\n\n.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom: thin dashed; }\n\n.cal-week-view .cal-time {\n    font-weight: bold;\n    padding-top: 5px;\n    width: 70px;\n    text-align: center; }\n\n.cal-week-view .cal-hour-segment.cal-after-hour-start .cal-time {\n    display: none; }\n\n.cal-week-view .cal-starts-within-day .cal-event {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n\n.cal-week-view .cal-ends-within-day .cal-event {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n\n.cal-week-view {\n  background-color: #fff; }\n\n.cal-week-view .cal-day-headers {\n    border-color: #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n    border-right-color: #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:first-child {\n    border-left-color: #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:hover,\n  .cal-week-view .cal-day-headers .cal-drag-over {\n    background-color: #ededed; }\n\n.cal-week-view .cal-day-column {\n    border-left-color: #e1e1e1; }\n\n.cal-week-view .cal-event {\n    background-color: #d1e8ff;\n    border-color: #1e90ff;\n    color: #1e90ff; }\n\n.cal-week-view .cal-all-day-events {\n    border-color: #e1e1e1; }\n\n.cal-week-view .cal-header.cal-today {\n    background-color: #e8fde7; }\n\n.cal-week-view .cal-header.cal-weekend span {\n    color: #8b0000; }\n\n.cal-week-view .cal-time-events {\n    border-color: #e1e1e1; }\n\n.cal-week-view .cal-time-events .cal-day-columns:not(.cal-resize-active) .cal-hour-segment:hover {\n      background-color: #ededed; }\n\n.cal-week-view .cal-hour-odd {\n    background-color: #fafafa; }\n\n.cal-week-view .cal-drag-over .cal-hour-segment {\n    background-color: #ededed; }\n\n.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom-color: #e1e1e1; }\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n\n.cal-day-view * {\n    box-sizing: border-box; }\n\n.cal-day-view .cal-hour-rows {\n    width: 100%;\n    border: solid 1px;\n    overflow-x: auto;\n    position: relative; }\n\n.cal-day-view mwl-calendar-day-view-hour-segment,\n  .cal-day-view .cal-hour-segment {\n    display: block; }\n\n.cal-day-view .cal-hour-segment::after {\n    content: '\\00a0'; }\n\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom: thin dashed; }\n\n.cal-day-view .cal-time {\n    font-weight: bold;\n    width: 70px;\n    height: 100%;\n    -js-display: flex;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n    display: none; }\n\n.cal-day-view .cal-drag-active .cal-hour-segment {\n    pointer-events: none; }\n\n.cal-day-view .cal-event-container {\n    position: absolute;\n    cursor: pointer; }\n\n.cal-day-view .cal-event-container.resize-active {\n      z-index: 1;\n      pointer-events: none; }\n\n.cal-day-view .cal-event {\n    padding: 5px;\n    font-size: 12px;\n    border: 1px solid;\n    box-sizing: border-box;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 100%; }\n\n.cal-day-view .cal-all-day-events > * {\n    cursor: pointer; }\n\n.cal-day-view .cal-draggable {\n    cursor: move; }\n\n.cal-day-view .cal-starts-within-day .cal-event {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n\n.cal-day-view .cal-ends-within-day .cal-event {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n\n.cal-day-view .cal-drag-active {\n    z-index: 1; }\n\n.cal-day-view .cal-drag-active * {\n      pointer-events: none; }\n\n.cal-day-view .cal-resize-handle {\n    width: 100%;\n    height: 4px;\n    cursor: row-resize;\n    position: absolute; }\n\n.cal-day-view .cal-resize-handle.cal-resize-handle-after-end {\n      bottom: 0; }\n\n.cal-day-view {\n  background-color: #fff; }\n\n.cal-day-view .cal-hour-rows {\n    border-color: #e1e1e1; }\n\n.cal-day-view .cal-hour:nth-child(odd) {\n    background-color: #fafafa; }\n\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom-color: #e1e1e1; }\n\n.cal-day-view .cal-hour-segment:hover,\n  .cal-day-view .cal-drag-over .cal-hour-segment {\n    background-color: #ededed; }\n\n.cal-day-view .cal-event {\n    background-color: #d1e8ff;\n    border-color: #1e90ff;\n    color: #1e90ff; }\n\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0; }\n\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0; }\n\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px; }\n\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px; }\n\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  text-align: center;\n  border-radius: 0.25rem; }\n\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  border-top-color: #000; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  border-right-color: #000; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  border-bottom-color: #000; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  border-left-color: #000; }\n\n.cal-tooltip-inner {\n  color: #fff;\n  background-color: #000; }\n\n.cal-month-view {\n  background: var(--background-card);\n}\n\n.cal-month-view .cal-days {\n  border-color: var(--foreground-divider);\n}\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-color: var(--foreground-divider);\n}\n\n.cal-month-view .cal-header .cal-cell {\n  font: var(--font-body-2);\n  padding-bottom: var(--padding-12);\n  padding-top: var(--padding-12);\n}\n\n.cal-month-view .cal-cell-row:hover {\n  background: var(--background-hover);\n}\n\n.cal-month-view .cal-cell-row .cal-cell:hover {\n  background: var(--background-hover);\n}\n\n.cal-month-view .cal-cell-row .cal-cell.cal-open {\n  background: var(--background-hover);\n  box-shadow: var(--elevation-z4);\n}\n\n.cal-month-view .cal-day-cell {\n  min-height: 150px;\n}\n\n.cal-month-view .cal-day-cell.cal-today {\n  background: var(--background-app-bar);\n}\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-color: var(--foreground-divider);\n}\n\n.cal-month-view .cal-open-day-events {\n  --bg-opacity: 1;\n  background-color: #5c77ff;\n  background-color: rgba(92, 119, 255, var(--bg-opacity));\n  border-bottom: 1px solid var(--foreground-divider);\n  box-shadow: inset 0 0 4px 0 var(--text-secondary);\n}\n\n.cal-month-view .cal-open-day-events > div {\n  align-content: center;\n  align-items: center;\n  background: var(--background-card);\n  box-shadow: var(--elevation-z2);\n  color: var(--text-dark);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n}\n\n.cal-month-view .cal-open-day-events > div + div {\n  margin-top: var(--padding-12);\n}\n\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-title {\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n}\n\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-title .cal-event-title {\n  color: var(--text-color);\n  flex: 1;\n  font: var(--font-body-1);\n  padding: var(--padding-12);\n}\n\n.cal-month-view .cal-open-day-events > div .cal-event-action {\n  color: var(--text-secondary);\n}\n\n.cal-month-view .cal-open-day-events > div .cal-event-action + .cal-event-action {\n  margin-left: var(--padding-12);\n}\n\n.cal-week-view, .cal-day-view {\n  background: var(--background-card);\n}\n\n.cal-week-view .cal-header, .cal-day-view .cal-header {\n  font: var(--font-body-2);\n}\n\n.cal-week-view .cal-header b, .cal-day-view .cal-header b {\n  font-weight: 500;\n}\n\n.cal-week-view .cal-header.cal-weekend span, .cal-day-view .cal-header.cal-weekend span {\n  color: var(--text-secondary);\n}\n\n.cal-week-view .cal-header.cal-today, .cal-day-view .cal-header.cal-today {\n  background: var(--background-app-bar);\n}\n\n.cal-week-view .cal-day-headers .cal-header:hover, .cal-week-view .cal-day-headers .cal-drag-over, .cal-day-view .cal-day-headers .cal-header:hover, .cal-day-view .cal-day-headers .cal-drag-over {\n  background-color: var(--background-hover);\n}\n\n.cal-week-view .cal-hour, .cal-day-view .cal-hour {\n  background: var(--background-card);\n}\n\n.cal-week-view .cal-hour:nth-child(odd), .cal-day-view .cal-hour:nth-child(odd) {\n  background: var(--background-card);\n}\n\n.cal-week-view .cal-hour-odd, .cal-day-view .cal-hour-odd {\n  background: var(--background-app-bar);\n}\n\n.cal-week-view .cal-hour-segment:hover, .cal-day-view .cal-hour-segment:hover {\n  background: var(--background-hover);\n}\n\n.cal-week-view .cal-time-events .cal-day-columns .cal-hour-segment:hover, .cal-day-view .cal-time-events .cal-day-columns .cal-hour-segment:hover {\n  background: var(--background-hover);\n}\n\n.cal-week-view .cal-event, .cal-day-view .cal-event {\n  align-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.cal-week-view .cal-event mwl-calendar-event-actions, .cal-day-view .cal-event mwl-calendar-event-actions {\n  order: 2;\n}\n\n.cal-week-view .cal-event mwl-calendar-event-title, .cal-day-view .cal-event mwl-calendar-event-title {\n  display: block;\n  flex: 1;\n  order: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.cal-week-view .cal-event mwl-calendar-event-title .cal-event-title, .cal-day-view .cal-event mwl-calendar-event-title .cal-event-title {\n  outline: none;\n}\n\n.cal-week-view .cal-event .cal-event-actions, .cal-day-view .cal-event .cal-event-actions {\n  align-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.cal-week-view .cal-event .cal-event-actions .cal-event-action, .cal-day-view .cal-event .cal-event-actions .cal-event-action {\n  color: var(--text-secondary);\n  height: auto;\n}\n\n.cal-week-view .cal-event .cal-event-actions .cal-event-action .icon, .cal-day-view .cal-event .cal-event-actions .cal-event-action .icon {\n  font-size: 18px;\n  padding: var(--padding-4);\n}\n\n.cal-event-title {\n  color: var(--text-color);\n  font: var(--font-body-1);\n  text-decoration: none;\n}\n\nvex-calendar .calendar-bg {\n  background: url(\"/assets/img/demo/landscape.jpg\") no-repeat center;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9hbmd1bGFyLWNhbGVuZGFyL2Nzcy9hbmd1bGFyLWNhbGVuZGFyLmNzcyIsIi9ob21lL21hcmNvL0Rlc2t0b3AvVGF4aS1mcm9udC9zcmMvYXBwL3BhZ2VzL2FwcHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FwcHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUU7O0FBRXZCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUViLHVCQUF1QjtFQUMxQixjQUFjO0VBQ2QsbUJBQW1CLEVBQUU7O0FBRXZCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFFOztBQUVwQjtFQUNFLGdCQUFnQjtFQUdSLE9BQU8sRUFBRTs7QUFFbkI7RUFHRSxpQkFBaUI7RUFDakIsYUFBYSxFQUFFOztBQUVqQjtFQUNFLFdBQVc7RUFHSCxPQUFPO0VBR2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFJTCxzQkFBc0I7RUFHdEIsb0JBQW9CLEVBQUU7O0FBRWhDO0VBQ0UsaUJBQWlCLEVBQUU7O0FBQ25CO0lBQ0U7TUFDRSxjQUFjLEVBQUUsRUFBRTs7QUFFeEI7RUFDRSx1QkFBdUIsRUFBRTs7QUFFM0I7RUFDRSx3QkFBd0IsRUFBRTs7QUFFNUI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFFOztBQUV2QjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQixFQUFFOztBQUV2QjtFQUdVLE9BQU87RUFHUCxxQkFBcUI7RUFDN0IsV0FBVztFQUNYLGlCQUFpQjtFQUdqQixpQkFBaUI7RUFDakIsYUFBYTtFQUVULGVBQWUsRUFBRTs7QUFFdkI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVyxFQUFFOztBQUVmO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZ0JBQWdCLEVBQUU7O0FBRXBCO0VBQ0UsYUFBYSxFQUFFOztBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRLEVBQUU7O0FBRVo7O0VBRUUsWUFBWSxFQUFFOztBQUVoQjtFQUNFLFlBQVksRUFBRTs7QUFFaEI7RUFDRSxvQkFBb0IsRUFBRTs7QUFFeEI7RUFDRSxlQUFlLEVBQUU7O0FBQ2pCO0lBQ0UsMEJBQTBCLEVBQUU7O0FBRWhDO0VBQ0Usc0JBQXNCLEVBQUU7O0FBQ3hCO0lBQ0UseUJBQXlCLEVBQUU7O0FBQzdCOztJQUVFLHlCQUF5QixFQUFFOztBQUM3QjtJQUNFLHFCQUFxQixFQUFFOztBQUN6QjtJQUNFLDJCQUEyQixFQUFFOztBQUMvQjtJQUNFLDRCQUE0QixFQUFFOztBQUNoQztJQUNFLHlCQUF5QjtJQUN6QixXQUFXLEVBQUU7O0FBQ2Y7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFdBQVcsRUFBRTs7QUFDZjtJQUNFLGNBQWMsRUFBRTs7QUFDbEI7SUFDRSx5QkFBeUIsRUFBRTs7QUFDN0I7SUFDRSxvQ0FBb0MsRUFBRTs7QUFDeEM7SUFDRSxXQUFXO0lBQ1gsc0JBQXNCO0lBRWQsK0NBQStDLEVBQUU7O0FBRTdEO0VBQ0UseURBQXlELEVBQUU7O0FBQzNEO0lBRVUsc0JBQXNCLEVBQUU7O0FBQ2xDO0lBR0UsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUU7O0FBQ3JCO0lBR1UsT0FBTztJQUNmLGtCQUFrQjtJQUNsQixZQUFZLEVBQUU7O0FBQ2Q7TUFDRSx1QkFBdUIsRUFBRTs7QUFDM0I7TUFDRSxzQkFBc0IsRUFBRTs7QUFDNUI7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWSxFQUFFOztBQUNoQjtJQUdVLFlBQVk7SUFDcEIsc0JBQXNCLEVBQUU7O0FBQzFCO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQixFQUFFOztBQUNyQjtJQUNFLFdBQVc7SUFDWCxZQUFZLEVBQUU7O0FBQ2hCO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFFOztBQUNwQjtNQUNFLFlBQVk7TUFDWixXQUFXO01BR1gsaUJBQWlCO01BQ2pCLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLFVBQVUsRUFBRTs7QUFDZDtNQUNFLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osaUJBQWlCLEVBQUU7O0FBQ3JCO01BQ0UscUJBQXFCO01BQ3JCLGtCQUFrQixFQUFFOztBQUNwQjtRQUNFLFVBQVU7UUFDVixvQkFBb0IsRUFBRTs7QUFDMUI7TUFDRSxjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osaUJBQWlCLEVBQUU7O0FBQ3JCO01BQ0UsMkJBQTJCO01BQzNCLDhCQUE4QixFQUFFOztBQUNsQztNQUNFLDRCQUE0QjtNQUM1QiwrQkFBK0IsRUFBRTs7QUFDbkM7TUFHRSxpQkFBaUI7TUFDakIsYUFBYTtNQUdMLG1CQUFtQjtNQUduQix1QkFBdUI7TUFDL0IsZUFBZSxFQUFFOztBQUNuQjtNQUNFLFVBQVU7TUFDVixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixNQUFNLEVBQUU7O0FBQ1I7UUFDRSxRQUFRLEVBQUU7O0FBQ2hCOztJQUVFLGdCQUFnQjtJQUViLHVCQUF1QjtJQUMxQixtQkFBbUIsRUFBRTs7QUFDdkI7SUFDRSxvQkFBb0I7SUFDcEIsVUFBVSxFQUFFOztBQUNaO01BQ0Usb0JBQW9CLEVBQUU7O0FBQzFCO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBR2IsaUJBQWlCO0lBQ2pCLGFBQWEsRUFBRTs7QUFDZjtNQUdFLGlCQUFpQjtNQUNqQixhQUFhO01BR0wsWUFBWSxFQUFFOztBQUN4QjtNQUNFLGtCQUFrQixFQUFFOztBQUN0QjtNQUNFLGtCQUFrQjtNQUNsQixVQUFVLEVBQUU7O0FBQ2Q7TUFDRSx1QkFBdUI7TUFDdkIsd0JBQXdCO01BQ3hCLFdBQVc7TUFDWCxjQUFjO01BQ2QsaUJBQWlCLEVBQUU7O0FBQ3JCO01BQ0UsV0FBVztNQUNYLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsa0JBQWtCLEVBQUU7O0FBQ3BCO1FBQ0UsU0FBUyxFQUFFOztBQUNqQjtJQUNFLGtCQUFrQixFQUFFOztBQUNwQjtNQUNFLGdCQUFnQixFQUFFOztBQUN0QjtJQUNFLGVBQWUsRUFBRTs7QUFDbkI7SUFDRSxZQUFZLEVBQUU7O0FBQ2hCOztJQUVFLGNBQWMsRUFBRTs7QUFDbEI7O0lBRUUsMEJBQTBCLEVBQUU7O0FBQzlCO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCLEVBQUU7O0FBQ3RCO0lBQ0UsYUFBYSxFQUFFOztBQUNqQjtJQUNFLDJCQUEyQjtJQUMzQiw0QkFBNEIsRUFBRTs7QUFDaEM7SUFDRSw4QkFBOEI7SUFDOUIsK0JBQStCLEVBQUU7O0FBRXJDO0VBQ0Usc0JBQXNCLEVBQUU7O0FBQ3hCO0lBQ0UscUJBQXFCLEVBQUU7O0FBQ3pCO0lBQ0UsMkJBQTJCLEVBQUU7O0FBQy9CO0lBQ0UsMEJBQTBCLEVBQUU7O0FBQzlCOztJQUVFLHlCQUF5QixFQUFFOztBQUM3QjtJQUNFLDBCQUEwQixFQUFFOztBQUM5QjtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsY0FBYyxFQUFFOztBQUNsQjtJQUNFLHFCQUFxQixFQUFFOztBQUN6QjtJQUNFLHlCQUF5QixFQUFFOztBQUM3QjtJQUNFLGNBQWMsRUFBRTs7QUFDbEI7SUFDRSxxQkFBcUIsRUFBRTs7QUFDdkI7TUFDRSx5QkFBeUIsRUFBRTs7QUFDL0I7SUFDRSx5QkFBeUIsRUFBRTs7QUFDN0I7SUFDRSx5QkFBeUIsRUFBRTs7QUFDN0I7O0lBRUUsNEJBQTRCLEVBQUU7O0FBRWxDO0VBQ0UseURBQXlELEVBQUU7O0FBQzNEO0lBRVUsc0JBQXNCLEVBQUU7O0FBQ2xDO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUU7O0FBQ3RCOztJQUVFLGNBQWMsRUFBRTs7QUFDbEI7SUFDRSxnQkFBZ0IsRUFBRTs7QUFDcEI7O0lBRUUsMEJBQTBCLEVBQUU7O0FBQzlCO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBR1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFHTCx1QkFBdUI7SUFHdkIsbUJBQW1CLEVBQUU7O0FBQy9CO0lBQ0UsYUFBYSxFQUFFOztBQUNqQjtJQUNFLG9CQUFvQixFQUFFOztBQUN4QjtJQUNFLGtCQUFrQjtJQUNsQixlQUFlLEVBQUU7O0FBQ2pCO01BQ0UsVUFBVTtNQUNWLG9CQUFvQixFQUFFOztBQUMxQjtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBRVQsc0JBQXNCO0lBQzlCLGdCQUFnQjtJQUViLHVCQUF1QjtJQUMxQixtQkFBbUI7SUFDbkIsWUFBWSxFQUFFOztBQUNoQjtJQUNFLGVBQWUsRUFBRTs7QUFDbkI7SUFDRSxZQUFZLEVBQUU7O0FBQ2hCO0lBQ0UsMkJBQTJCO0lBQzNCLDRCQUE0QixFQUFFOztBQUNoQztJQUNFLDhCQUE4QjtJQUM5QiwrQkFBK0IsRUFBRTs7QUFDbkM7SUFDRSxVQUFVLEVBQUU7O0FBQ1o7TUFDRSxvQkFBb0IsRUFBRTs7QUFDMUI7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBRTs7QUFDcEI7TUFDRSxTQUFTLEVBQUU7O0FBRWpCO0VBQ0Usc0JBQXNCLEVBQUU7O0FBQ3hCO0lBQ0UscUJBQXFCLEVBQUU7O0FBQ3pCO0lBQ0UseUJBQXlCLEVBQUU7O0FBQzdCOztJQUVFLDRCQUE0QixFQUFFOztBQUNoQzs7SUFFRSx5QkFBeUIsRUFBRTs7QUFDN0I7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGNBQWMsRUFBRTs7QUFFcEI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVksRUFBRTs7QUFFaEI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUU7O0FBRXBCO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsdUJBQXVCLEVBQUU7O0FBRTNCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFFOztBQUVwQjtFQUNFLFFBQVE7RUFDUixPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLDJCQUEyQixFQUFFOztBQUUvQjtFQUNFLGNBQWM7RUFDZCxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsTUFBTTtFQUNOLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsdUJBQXVCLEVBQUU7O0FBRTNCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQixFQUFFOztBQUVyQjtFQUNFLFFBQVE7RUFDUixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLDJCQUEyQixFQUFFOztBQUUvQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFFOztBQUUxQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBRTs7QUFFdkI7RUFDRSxzQkFBc0IsRUFBRTs7QUFFMUI7RUFDRSx3QkFBd0IsRUFBRTs7QUFFNUI7RUFDRSx5QkFBeUIsRUFBRTs7QUFFN0I7RUFDRSx1QkFBdUIsRUFBRTs7QUFFM0I7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCLEVBQUU7O0FDbGlCMUI7RUFDRSxrQ0FBQTtBQ0FGOztBREdBO0VBQ0UsdUNBQUE7QUNBRjs7QURHQTtFQUNFLHVDQUFBO0FDQUY7O0FER0E7RUFDRSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7QUNBRjs7QURHQTtFQUNFLG1DQUFBO0FDQUY7O0FER0E7RUFDRSxtQ0FBQTtBQ0FGOztBREdBO0VBQ0UsbUNBQUE7RUFDQSwrQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7QUNBRjs7QURHQTtFQUNFLHFDQUFBO0FDQUY7O0FER0E7RUFDRSx1Q0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsdURBQUE7RUFDQSxrREFBQTtFQUNBLGlEQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDQUY7O0FER0E7RUFDRSw2QkFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0Usd0JBQUE7RUFDQSxPQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtBQ0FGOztBREdBO0VBQ0UsNEJBQUE7QUNBRjs7QURHQTtFQUNFLDhCQUFBO0FDQUY7O0FER0E7RUFDRSxrQ0FBQTtBQ0FGOztBREdBO0VBQ0Usd0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSw0QkFBQTtBQ0FGOztBREdBO0VBQ0UscUNBQUE7QUNBRjs7QURHQTtFQUNFLHlDQUFBO0FDQUY7O0FER0E7RUFDRSxrQ0FBQTtBQ0FGOztBREdBO0VBQ0Usa0NBQUE7QUNBRjs7QURHQTtFQUNFLHFDQUFBO0FDQUY7O0FER0E7RUFDRSxtQ0FBQTtBQ0FGOztBREdBO0VBQ0UsbUNBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0FGOztBREdBO0VBQ0UsUUFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURHQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FDQUY7O0FER0E7RUFDRSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLGtFQUFBO0VBQ0Esc0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsLW1vbnRoLXZpZXcgLmNhbC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtaGVhZGVyIC5jYWwtY2VsbCB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheXMge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbTogMDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXRvcCB7XG4gIG1pbi1oZWlnaHQ6IDc4cHg7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwtcm93IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAtanMtZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC1qcy1kaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xuICAgICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwge1xuICBtaW4taGVpZ2h0OiAxMDBweDsgfVxuICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbCB7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfSB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXlzIC5jYWwtY2VsbC1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWJhZGdlIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAxMHB4O1xuICBwYWRkaW5nOiAzcHggN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnRzIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XG4gICAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgbWFyZ2luOiAzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC1qcy1kaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgICAgZmxleC13cmFwOiB3cmFwOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWV2ZW50IHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMnB4OyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC1pbi1tb250aC5jYWwtaGFzLWV2ZW50cyB7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbC5jYWwtb3V0LW1vbnRoIC5jYWwtZGF5LW51bWJlciB7XG4gIG9wYWNpdHk6IDAuMTtcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC10b2RheSAuY2FsLWRheS1udW1iZXIge1xuICBmb250LXNpemU6IDEuOWVtOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyB7XG4gIHBhZGRpbmc6IDE1cHg7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzIC5jYWwtZXZlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4OyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLW91dC1tb250aCAuY2FsLWRheS1iYWRnZSxcbi5jYWwtbW9udGgtdmlldyAuY2FsLW91dC1tb250aCAuY2FsLWV2ZW50IHtcbiAgb3BhY2l0eTogMC4zOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRyYWdnYWJsZSB7XG4gIGN1cnNvcjogbW92ZTsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kcmFnLWFjdGl2ZSAqIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnQtdGl0bGUge1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnQtdGl0bGU6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG5cbi5jYWwtbW9udGgtdmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC1yb3c6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC1yb3cgLmNhbC1jZWxsOmhvdmVyLFxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLmNhbC1oYXMtZXZlbnRzLmNhbC1vcGVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkOyB9XG4gIC5jYWwtbW9udGgtdmlldyAuY2FsLWRheXMge1xuICAgIGJvcmRlci1jb2xvcjogI2UxZTFlMTsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNlMWUxZTE7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtZGF5cyAuY2FsLWNlbGwtcm93IHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZTFlMWUxOyB9XG4gIC5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1iYWRnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I5NGE0ODtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlOTBmZjtcbiAgICBib3JkZXItY29sb3I6ICNkMWU4ZmY7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLXdlZWtlbmQgLmNhbC1kYXktbnVtYmVyIHtcbiAgICBjb2xvcjogIzhiMDAwMDsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbC5jYWwtdG9kYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGZkZTc7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLWRyYWctb3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMCAhaW1wb3J0YW50OyB9XG4gIC5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cblxuLmNhbC13ZWVrLXZpZXcge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2VsZWN0b3ItdHlwZS1uby11bmtub3duICovIH1cbiAgLmNhbC13ZWVrLXZpZXcgKiB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAtanMtZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctbGVmdDogNzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgb3BhY2l0eTogMC41OyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWNvbHVtbiB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWxhYmVsLWNvbHVtbiB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiAxMDAlOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMge1xuICAgIGJvcmRlcjogc29saWQgMXB4O1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWRheS1jb2x1bW5zIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIC1qcy1kaXNwbGF5OiBmbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHotaW5kZXg6IDA7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtZXZlbnRzLXJvdyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDMxcHg7XG4gICAgICBtYXJnaW4tbGVmdDogNzBweDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1ldmVudC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gICAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtZXZlbnQtY29udGFpbmVyLnJlc2l6ZS1hY3RpdmUge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1ldmVudCB7XG4gICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4OyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLXN0YXJ0cy13aXRoaW4td2VlayAuY2FsLWV2ZW50IHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1lbmRzLXdpdGhpbi13ZWVrIC5jYWwtZXZlbnQge1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtdGltZS1sYWJlbC1jb2x1bW4ge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIC1qcy1kaXNwbGF5OiBmbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxNHB4OyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLXJlc2l6ZS1oYW5kbGUge1xuICAgICAgd2lkdGg6IDZweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGN1cnNvcjogY29sLXJlc2l6ZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDsgfVxuICAgICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLXJlc2l6ZS1oYW5kbGUuY2FsLXJlc2l6ZS1oYW5kbGUtYWZ0ZXItZW5kIHtcbiAgICAgICAgcmlnaHQ6IDA7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCxcbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1oZWFkZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRyYWctYWN0aXZlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAxOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kcmFnLWFjdGl2ZSAqIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcbiAgICBib3JkZXItdG9wOiAwO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIC1qcy1kaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtZXZlbnRzIC5jYWwtZGF5LWNvbHVtbnMge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIC1qcy1kaXNwbGF5OiBmbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1kYXktY29sdW1uIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1ldmVudC1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1ldmVudCB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnB4KTtcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMnB4KTtcbiAgICAgIG1hcmdpbjogMXB4O1xuICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjVweDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1yZXNpemUtaGFuZGxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICBjdXJzb3I6IHJvdy1yZXNpemU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1yZXNpemUtaGFuZGxlLmNhbC1yZXNpemUtaGFuZGxlLWFmdGVyLWVuZCB7XG4gICAgICAgIGJvdHRvbTogMDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQ6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICdcXDAwYTAnOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQtY29udGFpbmVyOm5vdCguY2FsLWRyYWdnYWJsZSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRyYWdnYWJsZSB7XG4gICAgY3Vyc29yOiBtb3ZlOyB9XG4gIC5jYWwtd2Vlay12aWV3IG13bC1jYWxlbmRhci13ZWVrLXZpZXctaG91ci1zZWdtZW50LFxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQsXG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91cjpsYXN0LWNoaWxkIDpub3QoOmxhc3QtY2hpbGQpIC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBib3JkZXItYm90dG9tOiB0aGluIGRhc2hlZDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLXRpbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1zZWdtZW50LmNhbC1hZnRlci1ob3VyLXN0YXJ0IC5jYWwtdGltZSB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLXN0YXJ0cy13aXRoaW4tZGF5IC5jYWwtZXZlbnQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4OyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZW5kcy13aXRoaW4tZGF5IC5jYWwtZXZlbnQge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyB9XG5cbi5jYWwtd2Vlay12aWV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIHtcbiAgICBib3JkZXItY29sb3I6ICNlMWUxZTE7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNlMWUxZTE7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNlMWUxZTE7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpob3ZlcixcbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWRyYWctb3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1jb2x1bW4ge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZTFlMWUxOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWU4ZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjMWU5MGZmO1xuICAgIGNvbG9yOiAjMWU5MGZmOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMge1xuICAgIGJvcmRlci1jb2xvcjogI2UxZTFlMTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhlYWRlci5jYWwtdG9kYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGZkZTc7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1oZWFkZXIuY2FsLXdlZWtlbmQgc3BhbiB7XG4gICAgY29sb3I6ICM4YjAwMDA7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZTFlMWUxOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWRheS1jb2x1bW5zOm5vdCguY2FsLXJlc2l6ZS1hY3RpdmUpIC5jYWwtaG91ci1zZWdtZW50OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyLW9kZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRyYWctb3ZlciAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXI6bm90KDpsYXN0LWNoaWxkKSAuY2FsLWhvdXItc2VnbWVudCxcbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyOmxhc3QtY2hpbGQgOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlMWUxZTE7IH1cblxuLmNhbC1kYXktdmlldyB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzZWxlY3Rvci10eXBlLW5vLXVua25vd24gKi8gfVxuICAuY2FsLWRheS12aWV3ICoge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWhvdXItcm93cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLmNhbC1kYXktdmlldyBtd2wtY2FsZW5kYXItZGF5LXZpZXctaG91ci1zZWdtZW50LFxuICAuY2FsLWRheS12aWV3IC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtaG91ci1zZWdtZW50OjphZnRlciB7XG4gICAgY29udGVudDogJ1xcMDBhMCc7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWhvdXI6bm90KDpsYXN0LWNoaWxkKSAuY2FsLWhvdXItc2VnbWVudCxcbiAgLmNhbC1kYXktdmlldyAuY2FsLWhvdXI6bGFzdC1jaGlsZCA6bm90KDpsYXN0LWNoaWxkKSAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgYm9yZGVyLWJvdHRvbTogdGhpbiBkYXNoZWQ7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLXRpbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAtanMtZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWhvdXItc2VnbWVudC5jYWwtYWZ0ZXItaG91ci1zdGFydCAuY2FsLXRpbWUge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWRyYWctYWN0aXZlIC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtZXZlbnQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50LWNvbnRhaW5lci5yZXNpemUtYWN0aXZlIHtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtZXZlbnQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgaGVpZ2h0OiAxMDAlOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyA+ICoge1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtZHJhZ2dhYmxlIHtcbiAgICBjdXJzb3I6IG1vdmU7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLXN0YXJ0cy13aXRoaW4tZGF5IC5jYWwtZXZlbnQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4OyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1lbmRzLXdpdGhpbi1kYXkgLmNhbC1ldmVudCB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWRyYWctYWN0aXZlIHtcbiAgICB6LWluZGV4OiAxOyB9XG4gICAgLmNhbC1kYXktdmlldyAuY2FsLWRyYWctYWN0aXZlICoge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLXJlc2l6ZS1oYW5kbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNHB4O1xuICAgIGN1cnNvcjogcm93LXJlc2l6ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgICAuY2FsLWRheS12aWV3IC5jYWwtcmVzaXplLWhhbmRsZS5jYWwtcmVzaXplLWhhbmRsZS1hZnRlci1lbmQge1xuICAgICAgYm90dG9tOiAwOyB9XG5cbi5jYWwtZGF5LXZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyLXJvd3Mge1xuICAgIGJvcmRlci1jb2xvcjogI2UxZTFlMTsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtaG91cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtaG91cjpub3QoOmxhc3QtY2hpbGQpIC5jYWwtaG91ci1zZWdtZW50LFxuICAuY2FsLWRheS12aWV3IC5jYWwtaG91cjpsYXN0LWNoaWxkIDpub3QoOmxhc3QtY2hpbGQpIC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZTFlMWUxOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQ6aG92ZXIsXG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1kcmFnLW92ZXIgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFlOGZmO1xuICAgIGJvcmRlci1jb2xvcjogIzFlOTBmZjtcbiAgICBjb2xvcjogIzFlOTBmZjsgfVxuXG4uY2FsLXRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwNzA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGxpbmUtYnJlYWs6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG9wYWNpdHk6IDAuOTsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtdG9wIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIG1hcmdpbi10b3A6IC0zcHg7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLXRvcCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDVweCAwOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1yaWdodCB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBtYXJnaW4tbGVmdDogM3B4OyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1yaWdodCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDVweCAwOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1ib3R0b20ge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luLXRvcDogM3B4OyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1ib3R0b20gLmNhbC10b29sdGlwLWFycm93IHtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDAgNXB4IDVweDsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtbGVmdCB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBtYXJnaW4tbGVmdDogLTNweDsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtbGVmdCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDAgNXB4IDVweDsgfVxuXG4uY2FsLXRvb2x0aXAtaW5uZXIge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07IH1cblxuLmNhbC10b29sdGlwLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC10b3AgLmNhbC10b29sdGlwLWFycm93IHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtcmlnaHQgLmNhbC10b29sdGlwLWFycm93IHtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMDAwOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1ib3R0b20gLmNhbC10b29sdGlwLWFycm93IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtbGVmdCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzAwMDsgfVxuXG4uY2FsLXRvb2x0aXAtaW5uZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgfVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItY2FsZW5kYXIvY3NzL2FuZ3VsYXItY2FsZW5kYXIuY3NzJztcblxuLmNhbC1tb250aC12aWV3IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jYXJkKTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5cyAuY2FsLWNlbGwtcm93IHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1oZWFkZXIgLmNhbC1jZWxsIHtcbiAgZm9udDogdmFyKC0tZm9udC1ib2R5LTIpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZy0xMik7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWRkaW5nLTEyKTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC1yb3cgLmNhbC1jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwtcm93IC5jYWwtY2VsbC5jYWwtb3BlbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejQpO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbCB7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbC5jYWwtdG9kYXkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFwcC1iYXIpO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1vcGVuLWRheS1ldmVudHMge1xuICAtLWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Yzc3ZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTIsIDExOSwgMjU1LCB2YXIoLS1iZy1vcGFjaXR5KSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNHB4IDAgdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1vcGVuLWRheS1ldmVudHMgPiBkaXYge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi16Mik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZyk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmcpO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1vcGVuLWRheS1ldmVudHMgPiBkaXYgKyBkaXYge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nLTEyKTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzID4gZGl2IG13bC1jYWxlbmRhci1ldmVudC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyA+IGRpdiBtd2wtY2FsZW5kYXItZXZlbnQtdGl0bGUgLmNhbC1ldmVudC10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgZmxleDogMTtcbiAgZm9udDogdmFyKC0tZm9udC1ib2R5LTEpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTEyKTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzID4gZGl2IC5jYWwtZXZlbnQtYWN0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzID4gZGl2IC5jYWwtZXZlbnQtYWN0aW9uICsgLmNhbC1ldmVudC1hY3Rpb24ge1xuICBtYXJnaW4tbGVmdDogdmFyKC0tcGFkZGluZy0xMik7XG59XG5cbi5jYWwtd2Vlay12aWV3LCAuY2FsLWRheS12aWV3IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jYXJkKTtcbn1cblxuLmNhbC13ZWVrLXZpZXcgLmNhbC1oZWFkZXIsIC5jYWwtZGF5LXZpZXcgLmNhbC1oZWFkZXIge1xuICBmb250OiB2YXIoLS1mb250LWJvZHktMik7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtaGVhZGVyIGIsIC5jYWwtZGF5LXZpZXcgLmNhbC1oZWFkZXIgYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtaGVhZGVyLmNhbC13ZWVrZW5kIHNwYW4sIC5jYWwtZGF5LXZpZXcgLmNhbC1oZWFkZXIuY2FsLXdlZWtlbmQgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtaGVhZGVyLmNhbC10b2RheSwgLmNhbC1kYXktdmlldyAuY2FsLWhlYWRlci5jYWwtdG9kYXkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFwcC1iYXIpO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOmhvdmVyLCAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtZHJhZy1vdmVyLCAuY2FsLWRheS12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6aG92ZXIsIC5jYWwtZGF5LXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWRyYWctb3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWhvdXIsIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jYXJkKTtcbn1cblxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyOm50aC1jaGlsZChvZGQpLCAuY2FsLWRheS12aWV3IC5jYWwtaG91cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1vZGQsIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyLW9kZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYXBwLWJhcik7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1zZWdtZW50OmhvdmVyLCAuY2FsLWRheS12aWV3IC5jYWwtaG91ci1zZWdtZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1kYXktY29sdW1ucyAuY2FsLWhvdXItc2VnbWVudDpob3ZlciwgLmNhbC1kYXktdmlldyAuY2FsLXRpbWUtZXZlbnRzIC5jYWwtZGF5LWNvbHVtbnMgLmNhbC1ob3VyLXNlZ21lbnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCwgLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50IHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQgbXdsLWNhbGVuZGFyLWV2ZW50LWFjdGlvbnMsIC5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudCBtd2wtY2FsZW5kYXItZXZlbnQtYWN0aW9ucyB7XG4gIG9yZGVyOiAyO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IG13bC1jYWxlbmRhci1ldmVudC10aXRsZSwgLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50IG13bC1jYWxlbmRhci1ldmVudC10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4OiAxO1xuICBvcmRlcjogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQgbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlIC5jYWwtZXZlbnQtdGl0bGUsIC5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudCBtd2wtY2FsZW5kYXItZXZlbnQtdGl0bGUgLmNhbC1ldmVudC10aXRsZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQgLmNhbC1ldmVudC1hY3Rpb25zLCAuY2FsLWRheS12aWV3IC5jYWwtZXZlbnQgLmNhbC1ldmVudC1hY3Rpb25zIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IC5jYWwtZXZlbnQtYWN0aW9ucyAuY2FsLWV2ZW50LWFjdGlvbiwgLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50IC5jYWwtZXZlbnQtYWN0aW9ucyAuY2FsLWV2ZW50LWFjdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCAuY2FsLWV2ZW50LWFjdGlvbnMgLmNhbC1ldmVudC1hY3Rpb24gLmljb24sIC5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudCAuY2FsLWV2ZW50LWFjdGlvbnMgLmNhbC1ldmVudC1hY3Rpb24gLmljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctNCk7XG59XG5cbi5jYWwtZXZlbnQtdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGZvbnQ6IHZhcigtLWZvbnQtYm9keS0xKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG52ZXgtY2FsZW5kYXIgLmNhbGVuZGFyLWJnIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvZGVtby9sYW5kc2NhcGUuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItY2FsZW5kYXIvY3NzL2FuZ3VsYXItY2FsZW5kYXIuY3NzJztcbi5jYWwtbW9udGgtdmlldyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheXMge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheXMgLmNhbC1jZWxsLXJvdyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtaGVhZGVyIC5jYWwtY2VsbCB7XG4gIGZvbnQ6IHZhcigtLWZvbnQtYm9keS0yKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZGRpbmctMTIpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZy0xMik7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwtcm93IC5jYWwtY2VsbDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXJvdyAuY2FsLWNlbGwuY2FsLW9wZW4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo0KTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwge1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLXRvZGF5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHAtYmFyKTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGw6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzIHtcbiAgLS1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM3N2ZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkyLCAxMTksIDI1NSwgdmFyKC0tYmctb3BhY2l0eSkpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDRweCAwIHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzID4gZGl2IHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNhcmQpO1xuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejIpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmcpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzID4gZGl2ICsgZGl2IHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tcGFkZGluZy0xMik7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyA+IGRpdiBtd2wtY2FsZW5kYXItZXZlbnQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1vcGVuLWRheS1ldmVudHMgPiBkaXYgbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlIC5jYWwtZXZlbnQtdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGZsZXg6IDE7XG4gIGZvbnQ6IHZhcigtLWZvbnQtYm9keS0xKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xMik7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyA+IGRpdiAuY2FsLWV2ZW50LWFjdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyA+IGRpdiAuY2FsLWV2ZW50LWFjdGlvbiArIC5jYWwtZXZlbnQtYWN0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXBhZGRpbmctMTIpO1xufVxuXG4uY2FsLXdlZWstdmlldywgLmNhbC1kYXktdmlldyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtaGVhZGVyLCAuY2FsLWRheS12aWV3IC5jYWwtaGVhZGVyIHtcbiAgZm9udDogdmFyKC0tZm9udC1ib2R5LTIpO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWhlYWRlciBiLCAuY2FsLWRheS12aWV3IC5jYWwtaGVhZGVyIGIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWhlYWRlci5jYWwtd2Vla2VuZCBzcGFuLCAuY2FsLWRheS12aWV3IC5jYWwtaGVhZGVyLmNhbC13ZWVrZW5kIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWhlYWRlci5jYWwtdG9kYXksIC5jYWwtZGF5LXZpZXcgLmNhbC1oZWFkZXIuY2FsLXRvZGF5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHAtYmFyKTtcbn1cblxuLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpob3ZlciwgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWRyYWctb3ZlciwgLmNhbC1kYXktdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOmhvdmVyLCAuY2FsLWRheS12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1kcmFnLW92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyLCAuY2FsLWRheS12aWV3IC5jYWwtaG91ciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtaG91cjpudGgtY2hpbGQob2RkKSwgLmNhbC1kYXktdmlldyAuY2FsLWhvdXI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNhcmQpO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWhvdXItb2RkLCAuY2FsLWRheS12aWV3IC5jYWwtaG91ci1vZGQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFwcC1iYXIpO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWhvdXItc2VnbWVudDpob3ZlciwgLmNhbC1kYXktdmlldyAuY2FsLWhvdXItc2VnbWVudDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtZXZlbnRzIC5jYWwtZGF5LWNvbHVtbnMgLmNhbC1ob3VyLXNlZ21lbnQ6aG92ZXIsIC5jYWwtZGF5LXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWRheS1jb2x1bW5zIC5jYWwtaG91ci1zZWdtZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQsIC5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudCB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IG13bC1jYWxlbmRhci1ldmVudC1hY3Rpb25zLCAuY2FsLWRheS12aWV3IC5jYWwtZXZlbnQgbXdsLWNhbGVuZGFyLWV2ZW50LWFjdGlvbnMge1xuICBvcmRlcjogMjtcbn1cblxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCBtd2wtY2FsZW5kYXItZXZlbnQtdGl0bGUsIC5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudCBtd2wtY2FsZW5kYXItZXZlbnQtdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleDogMTtcbiAgb3JkZXI6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IG13bC1jYWxlbmRhci1ldmVudC10aXRsZSAuY2FsLWV2ZW50LXRpdGxlLCAuY2FsLWRheS12aWV3IC5jYWwtZXZlbnQgbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlIC5jYWwtZXZlbnQtdGl0bGUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IC5jYWwtZXZlbnQtYWN0aW9ucywgLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50IC5jYWwtZXZlbnQtYWN0aW9ucyB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCAuY2FsLWV2ZW50LWFjdGlvbnMgLmNhbC1ldmVudC1hY3Rpb24sIC5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudCAuY2FsLWV2ZW50LWFjdGlvbnMgLmNhbC1ldmVudC1hY3Rpb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQgLmNhbC1ldmVudC1hY3Rpb25zIC5jYWwtZXZlbnQtYWN0aW9uIC5pY29uLCAuY2FsLWRheS12aWV3IC5jYWwtZXZlbnQgLmNhbC1ldmVudC1hY3Rpb25zIC5jYWwtZXZlbnQtYWN0aW9uIC5pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTQpO1xufVxuXG4uY2FsLWV2ZW50LXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBmb250OiB2YXIoLS1mb250LWJvZHktMSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudmV4LWNhbGVuZGFyIC5jYWxlbmRhci1iZyB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2RlbW8vbGFuZHNjYXBlLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/apps/calendar/calendar.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/apps/calendar/calendar.component.ts ***!
    \***********************************************************/

  /*! exports provided: CalendarComponent */

  /***/
  function srcAppPagesAppsCalendarCalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarComponent", function () {
      return CalendarComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/index.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./calendar-edit/calendar-edit.component */
    "./src/app/pages/apps/calendar/calendar-edit/calendar-edit.component.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-chevron-left */
    "./node_modules/@iconify/icons-ic/twotone-chevron-left.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-chevron-right */
    "./node_modules/@iconify/icons-ic/twotone-chevron-right.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../@vex/utils/tailwindcss */
    "./src/@vex/utils/tailwindcss.ts");

    var colors = {
      blue: {
        primary: _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_10__["default"].colors.primary['500'],
        secondary: _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_10__["default"].textColor['primary-contrast']['500']
      },
      yellow: {
        primary: _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_10__["default"].colors.amber['500'],
        secondary: '#FDF1BA'
      },
      red: {
        primary: _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_10__["default"].colors.red['500'],
        secondary: 'white'
      }
    };

    var CalendarComponent = /*#__PURE__*/function () {
      function CalendarComponent(dialog, snackbar) {
        var _this25 = this;

        _classCallCheck(this, CalendarComponent);

        this.dialog = dialog;
        this.snackbar = snackbar;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarView"];
        this.viewDate = new Date();
        this.icChevronLeft = _iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icChevronRight = _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.actions = [{
          label: '<i class="fa fa-fw fa-pencil"></i>',
          onClick: function onClick(_ref62) {
            var event = _ref62.event;

            _this25.handleEvent('Edited', event);
          }
        }, {
          label: '<i class="fa fa-fw fa-times"></i>',
          onClick: function onClick(_ref63) {
            var event = _ref63.event;
            _this25.events = _this25.events.filter(function (iEvent) {
              return iEvent !== event;
            });

            _this25.handleEvent('Deleted', event);
          }
        }];
        this.events = [{
          start: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfDay"])(new Date()), 1),
          end: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addDays"])(new Date(), 1),
          title: 'A 3 day event',
          color: colors.primary,
          actions: this.actions,
          allDay: true,
          resizable: {
            beforeStart: true,
            afterEnd: true
          },
          draggable: true
        }, {
          start: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfDay"])(new Date()),
          title: 'An event with no end date',
          color: colors.yellow,
          actions: this.actions
        }, {
          start: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["endOfMonth"])(new Date()), 3),
          end: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["endOfMonth"])(new Date()), 3),
          title: 'A long event that spans 2 months',
          color: colors.primary,
          allDay: true
        }, {
          start: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfDay"])(new Date()), 2),
          end: new Date(),
          title: 'A draggable and resizable event',
          color: colors.red,
          actions: this.actions,
          resizable: {
            beforeStart: true,
            afterEnd: true
          },
          draggable: true
        }];
        this.activeDayIsOpen = true;
      }

      _createClass(CalendarComponent, [{
        key: "dayClicked",
        value: function dayClicked(_ref64) {
          var date = _ref64.date,
              events = _ref64.events;

          if (Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isSameMonth"])(date, this.viewDate)) {
            this.activeDayIsOpen = !(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0);
            this.viewDate = date;
          }
        }
      }, {
        key: "eventTimesChanged",
        value: function eventTimesChanged(_ref65) {
          var event = _ref65.event,
              newStart = _ref65.newStart,
              newEnd = _ref65.newEnd;
          this.events = this.events.map(function (iEvent) {
            if (iEvent === event) {
              return Object.assign({}, event, {
                start: newStart,
                end: newEnd
              });
            }

            return iEvent;
          });
          this.handleEvent('Dropped or resized', event);
        }
      }, {
        key: "handleEvent",
        value: function handleEvent(action, event) {
          var _this26 = this;

          console.log(event);
          var dialogRef = this.dialog.open(_calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_7__["CalendarEditComponent"], {
            data: event
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              event = result;

              _this26.snackbar.open('Updated Event: ' + event.title);

              _this26.refresh.next();
            }
          });
        }
      }, {
        key: "addEvent",
        value: function addEvent() {
          this.events = [].concat(_toConsumableArray(this.events), [{
            title: 'New event',
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfDay"])(new Date()),
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
              beforeStart: true,
              afterEnd: true
            }
          }]);
        }
      }, {
        key: "deleteEvent",
        value: function deleteEvent(eventToDelete) {
          this.events = this.events.filter(function (event) {
            return event !== eventToDelete;
          });
        }
      }, {
        key: "setView",
        value: function setView(view) {
          this.view = view;
        }
      }, {
        key: "closeOpenMonthViewDay",
        value: function closeOpenMonthViewDay() {
          this.activeDayIsOpen = false;
        }
      }]);

      return CalendarComponent;
    }();

    CalendarComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', {
      "static": true
    })], CalendarComponent.prototype, "modalContent", void 0);
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-calendar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./calendar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/calendar/calendar.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./calendar.component.scss */
      "./src/app/pages/apps/calendar/calendar.component.scss"))["default"]]
    })], CalendarComponent);
    /***/
  },

  /***/
  "./src/app/pages/apps/calendar/calendar.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/apps/calendar/calendar.module.ts ***!
    \********************************************************/

  /*! exports provided: CalendarModule */

  /***/
  function srcAppPagesAppsCalendarCalendarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarModule", function () {
      return CalendarModule;
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


    var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./calendar-routing.module */
    "./src/app/pages/apps/calendar/calendar-routing.module.ts");
    /* harmony import */


    var _calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./calendar.component */
    "./src/app/pages/apps/calendar/calendar.component.ts");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-calendar/date-adapters/date-fns */
    "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./calendar-edit/calendar-edit.component */
    "./src/app/pages/apps/calendar/calendar-edit/calendar-edit.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../@vex/components/scrollbar/scrollbar.module */
    "./src/@vex/components/scrollbar/scrollbar.module.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../@vex/components/page-layout/page-layout.module */
    "./src/@vex/components/page-layout/page-layout.module.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");

    var CalendarModule = function CalendarModule() {
      _classCallCheck(this, CalendarModule);
    };

    CalendarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"], _calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_7__["CalendarEditComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _calendar_routing_module__WEBPACK_IMPORTED_MODULE_3__["CalendarRoutingModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"].forRoot({
        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"],
        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__["adapterFactory"]
      }), _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_11__["ScrollbarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_16__["PageLayoutModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_18__["IconModule"]],
      entryComponents: [_calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_7__["CalendarEditComponent"]]
    })], CalendarModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-apps-calendar-calendar-module-es5.js.map