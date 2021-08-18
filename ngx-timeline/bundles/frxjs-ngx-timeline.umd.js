(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common'), require('@angular/common/locales/it'), require('@angular/common/locales/fr'), require('@angular/common/locales/de'), require('@angular/common/locales/es')) :
    typeof define === 'function' && define.amd ? define('@frxjs/ngx-timeline', ['exports', '@angular/core', 'rxjs', '@angular/common', '@angular/common/locales/it', '@angular/common/locales/fr', '@angular/common/locales/de', '@angular/common/locales/es'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.frxjs = global.frxjs || {}, global.frxjs['ngx-timeline'] = {}), global.ng.core, global.rxjs, global.ng.common, global.ng.common.locales.it, global.ng.common.locales.fr, global.ng.common.locales.de, global.ng.common.locales.es));
}(this, (function (exports, core, rxjs, common, localeIt, localeFr, localeDe, localeEs) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var localeIt__default = /*#__PURE__*/_interopDefaultLegacy(localeIt);
    var localeFr__default = /*#__PURE__*/_interopDefaultLegacy(localeFr);
    var localeDe__default = /*#__PURE__*/_interopDefaultLegacy(localeDe);
    var localeEs__default = /*#__PURE__*/_interopDefaultLegacy(localeEs);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var supportedLanguageCodes = ['en', 'it', 'fr', 'de', 'es'];
    var dateConfigMap = {
        en: {
            code: 'en-US',
            fullDate: 'MM/dd/yyyy h:mm a',
            dayMonthYear: 'dd MMMM yyyy',
            monthYear: 'MMMM yyyy',
            year: 'yyyy',
            hoursMinutes: 'hh:mm a'
        },
        it: {
            code: 'it-IT',
            fullDate: 'dd/MM/yyyy H:mm',
            dayMonthYear: 'dd MMMM yyyy',
            monthYear: 'MMMM yyyy',
            year: 'yyyy',
            hoursMinutes: 'HH:mm'
        },
        fr: {
            code: 'fr-FR',
            fullDate: 'dd/MM/yyyy H:mm',
            dayMonthYear: 'dd MMMM yyyy',
            monthYear: 'MMMM yyyy',
            year: 'yyyy',
            hoursMinutes: 'HH:mm'
        },
        de: {
            code: 'de',
            fullDate: 'dd/MM/yyyy H:mm',
            dayMonthYear: 'dd MMMM yyyy',
            monthYear: 'MMMM yyyy',
            year: 'yyyy',
            hoursMinutes: 'HH:mm'
        },
        es: {
            code: 'es',
            fullDate: 'dd/MM/yyyy H:mm',
            dayMonthYear: 'dd MMMM yyyy',
            monthYear: 'MMMM yyyy',
            year: 'yyyy',
            hoursMinutes: 'HH:mm'
        }
    };
    exports.NgxDateFormat = void 0;
    (function (NgxDateFormat) {
        NgxDateFormat["DAY_MONTH_YEAR"] = "DAY_MONTH_YEAR";
        NgxDateFormat["FULL_DATE"] = "FULL_DATE";
        NgxDateFormat["MONTH_YEAR"] = "MONTH_YEAR";
        NgxDateFormat["HOURS_MINUTES"] = "HOURS_MINUTES";
        NgxDateFormat["YEAR"] = "YEAR";
    })(exports.NgxDateFormat || (exports.NgxDateFormat = {}));
    var fieldConfigDate = {
        MONTH_YEAR: 'monthYear',
        YEAR: 'year',
        HOURS_MINUTES: 'hoursMinutes',
        FULL_DATE: 'fullDate',
        DAY_MONTH_YEAR: 'dayMonthYear'
    };
    /**
     * Enum used to set the group event logic
     */
    exports.NgxTimelineEventGroup = void 0;
    (function (NgxTimelineEventGroup) {
        NgxTimelineEventGroup["YEAR"] = "YEAR";
        NgxTimelineEventGroup["MONTH_YEAR"] = "MONTH_YEAR";
        NgxTimelineEventGroup["DAY_MONTH_YEAR"] = "DAY_MONTH_YEAR";
    })(exports.NgxTimelineEventGroup || (exports.NgxTimelineEventGroup = {}));
    var fieldsToAddEventGroup = {
        YEAR: ['getFullYear'],
        MONTH_YEAR: ['getFullYear', 'getMonth'],
        DAY_MONTH_YEAR: ['getFullYear', 'getMonth', 'getDate']
    };
    var periodKeyDateFormat = {
        YEAR: exports.NgxDateFormat.YEAR,
        MONTH_YEAR: exports.NgxDateFormat.MONTH_YEAR,
        DAY_MONTH_YEAR: exports.NgxDateFormat.DAY_MONTH_YEAR,
    };
    /**
     * Enum used to set the change side event logic
     */
    exports.NgxTimelineEventChangeSideInGroup = void 0;
    (function (NgxTimelineEventChangeSideInGroup) {
        NgxTimelineEventChangeSideInGroup["ALL"] = "ALL";
        NgxTimelineEventChangeSideInGroup["ON_DIFFERENT_HMS"] = "ON_DIFFERENT_HMS";
        NgxTimelineEventChangeSideInGroup["ON_DIFFERENT_DAY"] = "ON_DIFFERENT_DAY";
        NgxTimelineEventChangeSideInGroup["ON_DIFFERENT_MONTH"] = "ON_DIFFERENT_MONTH";
    })(exports.NgxTimelineEventChangeSideInGroup || (exports.NgxTimelineEventChangeSideInGroup = {}));
    var fieldsToCheckEventChangeSideInGroup = {
        ON_DIFFERENT_MONTH: ['getFullYear', 'getMonth'],
        ON_DIFFERENT_DAY: ['getFullYear', 'getMonth', 'getDate'],
        ON_DIFFERENT_HMS: ['getFullYear', 'getMonth', 'getDate', 'getHours', 'getMinutes', 'getSeconds']
    };

    exports.NgxTimelineItemPosition = void 0;
    (function (NgxTimelineItemPosition) {
        NgxTimelineItemPosition["ON_LEFT"] = "ON_LEFT";
        NgxTimelineItemPosition["ON_RIGHT"] = "ON_RIGHT";
    })(exports.NgxTimelineItemPosition || (exports.NgxTimelineItemPosition = {}));

    var NgxTimelineComponent = /** @class */ (function () {
        function NgxTimelineComponent() {
            /**
             * Boolean used to enable or disable the animations
             */
            this.enableAnimation = true;
            /**
             * Logic to be applied in order to group events
             */
            this.groupEvent = exports.NgxTimelineEventGroup.MONTH_YEAR;
            /**
             * Logic to be applied in order to put evetns on LEFT or RIGHT
             */
            this.changeSideInGroup = exports.NgxTimelineEventChangeSideInGroup.ON_DIFFERENT_DAY;
            /**
             * Output click event emitter
             */
            this.clickEmitter = new rxjs.BehaviorSubject(null);
            this.groups = {};
            this.periods = [];
            this.items = [];
            this.ngxTimelineItemPosition = exports.NgxTimelineItemPosition;
            this.ngxDateFormat = exports.NgxDateFormat;
            this.separator = '/';
        }
        NgxTimelineComponent.prototype.ngOnInit = function () {
            this.groupEvents(this.events);
        };
        NgxTimelineComponent.prototype.ngOnChanges = function (changes) {
            this.groupEvents(this.events);
        };
        NgxTimelineComponent.prototype.getPeriodKeyDateFormat = function () {
            return periodKeyDateFormat[this.groupEvent];
        };
        NgxTimelineComponent.prototype.clear = function () {
            this.groups = {};
            this.periods = [];
            this.items = [];
        };
        NgxTimelineComponent.prototype.groupEvents = function (events) {
            if (events) {
                this.clear();
                this.sortEvents(events);
                this.setGroups(events);
                this.setPeriods();
                this.setItems();
            }
        };
        NgxTimelineComponent.prototype.sortEvents = function (events) {
            events.sort(function (a, b) { return a.timestamp.getTime() - b.timestamp.getTime(); });
        };
        NgxTimelineComponent.prototype.setGroups = function (events) {
            var _this = this;
            events.forEach(function (event) {
                // conversion from string to actual Date
                event.timestamp = new Date(event.timestamp);
                var periodKey = _this.getPeriodKeyFromEvent(event);
                if (!_this.groups[periodKey]) {
                    _this.groups[periodKey] = [];
                }
                _this.groups[periodKey].push(event);
            });
        };
        NgxTimelineComponent.prototype.setItems = function () {
            var _this = this;
            this.periods.forEach(function (p) {
                // insert first the period
                _this.items.push(p);
                // in each period putting items on left
                var onLeft = true;
                var periodInfo = p.periodInfo;
                // insert then all the events in this period
                _this.addPeriodEvents(periodInfo, onLeft);
                // onLeft = this.addEventItemsAndGetIfOnLeft(periodInfo, onLeft);
            });
        };
        NgxTimelineComponent.prototype.addPeriodEvents = function (periodInfo, onLeft) {
            var _this = this;
            this.groups[periodInfo.periodKey].forEach(function (event, index) {
                var prevEvent = _this.groups[periodInfo.periodKey][index - 1];
                if (index > 0 && _this.compareEvents(prevEvent, event)) {
                    onLeft = !onLeft;
                }
                _this.pushEventOnItems(event, onLeft);
            });
            // return onLeft;
        };
        NgxTimelineComponent.prototype.pushEventOnItems = function (event, onLeft) {
            this.items.push({
                eventInfo: Object.assign({}, event),
                position: onLeft ?
                    this.ngxTimelineItemPosition.ON_LEFT : this.ngxTimelineItemPosition.ON_RIGHT
            });
        };
        /**
         * Compare the events inside the same group
         */
        NgxTimelineComponent.prototype.compareEvents = function (prevEvent, event) {
            return this.changeSideInGroup === exports.NgxTimelineEventChangeSideInGroup.ALL || this.compareEventsField.apply(this, __spread([prevEvent, event], fieldsToCheckEventChangeSideInGroup[this.changeSideInGroup]));
        };
        NgxTimelineComponent.prototype.compareEventsField = function (prevEvent, event) {
            var fields = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                fields[_i - 2] = arguments[_i];
            }
            return fields.reduce(function (res, field) { return res = res || prevEvent.timestamp[field]() !== event.timestamp[field](); }, !!false);
        };
        NgxTimelineComponent.prototype.setPeriods = function () {
            var _this = this;
            this.periods = Object.keys(this.groups).map(function (periodKey) {
                var split = periodKey.split(_this.separator);
                return _this.getPeriodInfo(split, periodKey);
            });
        };
        NgxTimelineComponent.prototype.getPeriodInfo = function (split, periodKey) {
            return {
                periodInfo: {
                    year: Number(split[0]),
                    month: Number(split[1]),
                    day: Number(split[2]),
                    periodKey: periodKey,
                    firstDate: this.groups[periodKey][0].timestamp,
                },
            };
        };
        NgxTimelineComponent.prototype.getPeriodKeyFromEvent = function (event) {
            return fieldsToAddEventGroup[this.groupEvent].map(function (field) { return event.timestamp[field](); }).join(this.separator);
        };
        return NgxTimelineComponent;
    }());
    NgxTimelineComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-timeline',
                    template: "<div class=\"main-container\">\r\n  <div class=\"items-container\">\r\n    <div *ngFor=\"let item of items; let index = index;\" class=\"row\">\r\n      <!-- DESKTOP -->\r\n      <div class=\"col col-left desktop\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"event-outer-container\" *ngIf=\"item.eventInfo && item.position === ngxTimelineItemPosition.ON_LEFT\">\r\n          <ng-container *ngTemplateOutlet=\"eventCustomTemplate || eventTemplate; context: {event: item, colSidePosition: ngxTimelineItemPosition.ON_LEFT}\"></ng-container>\r\n        </div>\r\n        <div class=\"hour left\" *ngIf=\"item.eventInfo && item.position === ngxTimelineItemPosition.ON_RIGHT\">\r\n          <ng-container *ngTemplateOutlet=\"dateInstantCustomTemplate || dateInstantTemplate; context: {item: item.eventInfo}\" ></ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col col-center desktop\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"center-inner\" *ngIf=\"item.periodInfo\">\r\n          <ng-container *ngTemplateOutlet=\"periodCustomTemplate || periodTemplate; context: {period: item.periodInfo, index: index}\"></ng-container>\r\n        </div>\r\n        <div class=\"center-inner no-period-key\" *ngIf=\"!item.periodInfo\">\r\n          <ng-container *ngTemplateOutlet=\"centerLinesIconTemplate; context: {index: index}\"></ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col col-right desktop\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"event-outer-container\" *ngIf=\"item.eventInfo && item.position === ngxTimelineItemPosition.ON_RIGHT\">\r\n          <ng-container *ngTemplateOutlet=\"eventCustomTemplate || eventTemplate; context: {event: item, colSidePosition: ngxTimelineItemPosition.ON_RIGHT}\"></ng-container>\r\n        </div>\r\n        <div class=\"hour right\" *ngIf=\"item.eventInfo && item.position === ngxTimelineItemPosition.ON_LEFT\">\r\n          <ng-container *ngTemplateOutlet=\"dateInstantCustomTemplate || dateInstantTemplate; context: {item: item.eventInfo}\" ></ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- MOBILE -->\r\n      <div class=\"col col-left mobile\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"hour left\" *ngIf=\"item.eventInfo\">\r\n          <div class=\"hour-inner-container\">\r\n            <ng-container *ngTemplateOutlet=\"dateInstantCustomTemplate || dateInstantTemplate; context: {item: item.eventInfo}\" ></ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col col-center mobile\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"center-inner\" *ngIf=\"item.periodInfo;\">\r\n            <ng-container *ngTemplateOutlet=\"periodCustomTemplate || periodTemplate; context: {period: item.periodInfo, index: index}\"></ng-container>\r\n        </div>\r\n        <div class=\"center-inner no-period-key\" *ngIf=\"!item.periodInfo;\">\r\n          <ng-container *ngTemplateOutlet=\"centerLinesIconTemplate;context: {index: index}\"></ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col col-right mobile\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"event-outer-container\" *ngIf=\"item.eventInfo\">\r\n          <ng-container *ngTemplateOutlet=\"eventCustomTemplate || eventTemplate; context: {event: item, colSidePosition: ngxTimelineItemPosition.ON_RIGHT}\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #centerLinesIconTemplate let-index=index>\r\n  <div class=\"line\"></div>\r\n  <ng-container *ngTemplateOutlet=\"centerIconCustomTemplate || centerIconTemplate\"></ng-container>\r\n  <div [ngClass]=\"{'transparent last-line': index === items.length - 1}\" class=\"line\"></div>\r\n</ng-template>\r\n\r\n<ng-template #centerIconTemplate>\r\n  <div class=\"center-icon-container\">\r\n    <div class=\"icon\"></div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #dateInstantTemplate let-item=item>\r\n  <span>\r\n    {{item?.timestamp | ngxdate : ngxDateFormat.HOURS_MINUTES : langCode}}\r\n  </span>\r\n</ng-template>\r\n\r\n<ng-template #periodTemplate let-period=period let-index=index>\r\n  <div [ngClass]=\"{'transparent first-line': !index}\" class=\"line\"></div>\r\n  <div class=\"period-container\">\r\n    <div class=\"period-inner-container\">\r\n      <span>{{period?.firstDate | ngxdate : getPeriodKeyDateFormat() : langCode}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"line\"></div>\r\n</ng-template>\r\n\r\n<ng-template #eventTemplate let-event=event let-colSidePosition=colSidePosition>\r\n  <ngx-timeline-event\r\n    [event]=\"event\"\r\n    [langCode]=\"langCode\"\r\n    [enableAnimation]=\"enableAnimation\"\r\n    [innerEventCustomTemplate]=\"innerEventCustomTemplate\"\r\n    [colSidePosition]=\"colSidePosition\"\r\n    (clickEmitter)=\"clickEmitter.next($event)\">\r\n  </ngx-timeline-event>\r\n</ng-template>\r\n\r\n",
                    styles: [".main-container{display:flex;justify-content:center;width:100%}.items-container{padding:1rem 0;min-width:max(20rem,100%)}.row{display:flex;flex-wrap:wrap}.row>[class*=col-]{display:flex;flex-direction:column;justify-content:center}.col-left{align-items:flex-end}.col-left,.col-right{padding:0;flex:49 49 0}.col-right{align-items:flex-start}.col-center{min-height:6rem;padding:0;flex:2 2 0}.center-inner{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.center-inner .line{min-height:50%;max-height:50%;height:50%;background:#464646;width:.1rem}.center-inner .line.transparent{background:transparent}.period-container{background:orange;color:#fff;margin:0;padding:.2rem .5rem}.period-container .period-inner-container{width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:.2rem .5rem;z-index:10}.center-icon-container{padding:.8rem 0;display:flex;justify-content:center;align-items:center;position:absolute;height:10px;width:10px;background:#fff}.center-icon-container .icon{height:1rem;width:1rem;border-radius:50%;background:orange;margin:0;position:absolute}.event-outer-container{margin:0 .5rem;width:100%}.hour{padding:.5rem;background:none;display:flex;justify-content:center;align-items:center}.hour.right{justify-content:flex-start}.hour.left{justify-content:flex-end}.hour .hour-inner-container{margin:0}.desktop{display:flex!important}.mobile{display:none!important}@media (max-width:900px){.desktop{display:none!important}.mobile{display:flex!important}.event-outer-container{margin:.5rem .3rem}.col-left{align-items:flex-start}.col-left .hour{font-size:12px;padding:0;margin-right:.3rem}.col-left.col-period{flex:18 18 0}.col-left.col-event{flex:18 18 0;padding:0;align-items:flex-end}.col-right{align-items:flex-start}.col-right.col-period{flex:77 77 0}.col-right.col-event{flex:77 77 0;padding:0}.col-center{min-height:6rem;justify-content:center;margin:0}.col-center.col-period{flex:5 5 0;min-height:3rem}.col-center.col-event{flex:5 5 0}.center-inner,.period-container{align-items:center}.period-container{min-height:20%;height:20%;max-height:20%;background:transparent;display:flex;justify-content:center;border-radius:6px}.period-container .period-inner-container{position:absolute;background:orange;color:#fff;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:.2rem .5rem;z-index:10}.center-icon-container{align-items:center;justify-content:center}.center-icon-container .icon{height:1rem;width:1rem;position:absolute}}"]
                },] }
    ];
    NgxTimelineComponent.ctorParameters = function () { return []; };
    NgxTimelineComponent.propDecorators = {
        events: [{ type: core.Input }],
        langCode: [{ type: core.Input }],
        enableAnimation: [{ type: core.Input }],
        groupEvent: [{ type: core.Input }],
        changeSideInGroup: [{ type: core.Input }],
        periodCustomTemplate: [{ type: core.Input }],
        eventCustomTemplate: [{ type: core.Input }],
        centerIconCustomTemplate: [{ type: core.Input }],
        dateInstantCustomTemplate: [{ type: core.Input }],
        innerEventCustomTemplate: [{ type: core.Input }],
        clickEmitter: [{ type: core.Output }]
    };

    var NgxTimelineEventComponent = /** @class */ (function () {
        function NgxTimelineEventComponent() {
            /**
             * Boolean used to enable or disable the animations
             */
            this.enableAnimation = true;
            /**
             * Output click event emitter
             */
            this.clickEmitter = new rxjs.BehaviorSubject(null);
            this.ngxTimelineItemPosition = exports.NgxTimelineItemPosition;
            this.monthAbbr = 'MMM';
            this.dayFormat = 'dd';
        }
        NgxTimelineEventComponent.prototype.getDateObj = function () {
            var _a;
            var day;
            var month;
            var year;
            var dateTimestamp = (_a = this.event.eventInfo) === null || _a === void 0 ? void 0 : _a.timestamp;
            if (dateTimestamp) {
                var timestamp = new Date(dateTimestamp);
                var langCode = this.getLangCode();
                month = new common.DatePipe(langCode).transform(timestamp, this.monthAbbr);
                day = new common.DatePipe(langCode).transform(timestamp, this.dayFormat);
                year = timestamp.getFullYear();
            }
            return { day: day, month: month, year: year };
        };
        NgxTimelineEventComponent.prototype.getLangCode = function () {
            return this.langCode && supportedLanguageCodes.includes(this.langCode) ? this.langCode : supportedLanguageCodes[0];
        };
        return NgxTimelineEventComponent;
    }());
    NgxTimelineEventComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-timeline-event',
                    template: "<div class=\"event-wrapper-container\" (click)=\"clickEmitter.next(event)\">\n  <div *ngIf=\"colSidePosition===ngxTimelineItemPosition.ON_RIGHT\" class=\"arrow left\"></div>\n  <div class=\"event\" [ngClass]=\"{'enableAnimation': enableAnimation}\">\n    <ng-container *ngTemplateOutlet=\"innerEventCustomTemplate || innerEventContainer; context: {event: event}\">\n    </ng-container>\n  </div>\n  <div *ngIf=\"colSidePosition===ngxTimelineItemPosition.ON_LEFT\" class=\"arrow right\"></div>\n</div>\n\n<ng-template #innerEventContainer let-event=event>\n  <div class=\"event-container\" [ngClass]=\"{'reverse': colSidePosition === ngxTimelineItemPosition.ON_LEFT}\">\n    <div class=\"event-info-container\">\n      <div class=\"event-info-header\">\n        <div class=\"title-container\">{{event?.eventInfo?.title | titlecase}}</div>\n      </div>\n      <div class=\"event-info-body\">\n        <p class=\"event-info-description\">{{event?.eventInfo?.description}}</p>\n      </div>\n    </div>\n\n    <div class=\"event-divider-container\">\n      <hr/>\n    </div>\n\n    <div class=\"event-date-container\" *ngIf=\"getDateObj() as dateObj\">\n      <div>\n        <p>{{dateObj?.month}}</p>\n      </div>\n      <div>\n        <p class=\"day\">{{dateObj?.day}}</p>\n      </div>\n      <div>\n        <p>{{dateObj?.year}}</p>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
                    styles: [".event-wrapper-container{display:flex;justify-content:center;align-items:center;cursor:pointer}.arrow{width:0;height:0;border-top:.5rem solid transparent;border-bottom:.5rem solid transparent;border-radius:6px;z-index:10}.arrow.right{filter:drop-shadow(2px 0 0 #244a6e22);border-left:.5rem solid #fff}.arrow.left{filter:drop-shadow(-1px 0 0 #244a6e22);border-right:.5rem solid #fff}.event{background:#fff;border-radius:.8rem;padding:1rem;width:100%;margin:1rem 0}.event.enableAnimation:hover{padding:2rem;transition:all .5s ease-in-out}.event.enableAnimation:not(:hover){padding:1rem;transition:all .5s ease-in-out}.event:not(.hour){background:#fff 0 0 no-repeat padding-box;box-shadow:0 3px 6px rgba(36,74,110,.3215686274509804)}.event.hour{padding:.5rem;background:none;display:flex;justify-content:center;align-items:center}.event.hour.right{justify-content:flex-start}.event.hour.left{justify-content:flex-end}.event .hour-inner-container{margin:0}.event-container{display:flex}.event-container.reverse{flex-direction:row-reverse}.event-container .event-info-container{display:flex;flex-direction:column;align-items:flex-start;padding:.1rem;flex:88 88 0}.event-container .event-info-container .event-info-header{display:flex;align-items:center;width:100%}.event-container .event-info-container .event-info-header .icon-container{margin-right:.3rem}.event-container .event-info-container .event-info-header .icon-container nb-icon{color:orange;width:1.5rem;height:1.5rem;margin-bottom:.1rem}.event-container .event-info-container .event-info-header .title-container{font-weight:700;font-size:15px}.event-container .event-info-container .event-info-body{padding:.5rem 0;display:flex;flex-direction:column;justify-content:flex-start;overflow-wrap:anywhere}.event-container .event-info-container .event-info-body .event-info-description{margin-bottom:.5rem;font-size:13px}.event-container .event-info-container .event-info-body .category-container,.event-container .event-info-container .event-info-body .expiration-container{display:flex;font-size:13px;justify-content:flex-start;align-items:center}.event-container .event-info-container .event-info-body .category-container p,.event-container .event-info-container .event-info-body .expiration-container p{font-size:13px;margin:0}.event-container .event-info-container .event-info-body .category-container .category-label,.event-container .event-info-container .event-info-body .category-container .expiration-label,.event-container .event-info-container .event-info-body .expiration-container .category-label,.event-container .event-info-container .event-info-body .expiration-container .expiration-label{margin-right:.5rem}.event-container .event-info-container .event-info-body .category-container .category-value,.event-container .event-info-container .event-info-body .category-container .expiration-value,.event-container .event-info-container .event-info-body .expiration-container .category-value,.event-container .event-info-container .event-info-body .expiration-container .expiration-value{font-weight:700}.event-container .event-info-container .event-info-footer{font-size:15px;cursor:pointer;padding-top:1rem}.event-container .event-info-container .event-info-footer .footer-inner-container{display:flex;justify-content:flex-start;align-items:flex-end}.event-container .event-info-container .event-info-footer .footer-inner-container nb-icon{color:#006cb4;width:1rem;height:1rem;margin-bottom:.1rem}.event-container .event-info-container .event-info-footer p{margin:0;color:#006cb4}.event-container .event-divider-container{display:flex;justify-content:center;align-items:center;padding:.1rem;flex:5 5 0}.event-container .event-divider-container hr{height:100%;width:1px;background:#e9e9e9}.event-container .event-date-container{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:.1rem;flex:15 15 0}.event-container .event-date-container p{margin:0;text-align:center}.event-container .event-date-container p.day{font-size:32px;font-weight:700;padding:.5rem 0}"]
                },] }
    ];
    NgxTimelineEventComponent.ctorParameters = function () { return []; };
    NgxTimelineEventComponent.propDecorators = {
        event: [{ type: core.Input }],
        colSidePosition: [{ type: core.Input }],
        langCode: [{ type: core.Input }],
        innerEventCustomTemplate: [{ type: core.Input }],
        enableAnimation: [{ type: core.Input }],
        clickEmitter: [{ type: core.Output }]
    };

    var NgxDatePipe = /** @class */ (function () {
        function NgxDatePipe() {
        }
        NgxDatePipe.prototype.transform = function (date, dateFormat, langCode) {
            var transformedDate = null;
            if (date) {
                var objDate = this.getDateConfig(langCode);
                transformedDate = new common.DatePipe(objDate.code).transform(new Date(date), this.dateFormat(dateFormat, objDate));
            }
            return transformedDate;
        };
        NgxDatePipe.prototype.dateFormat = function (dateFormat, configDate) {
            return configDate[fieldConfigDate[dateFormat]];
        };
        NgxDatePipe.prototype.getDateConfig = function (langCode) {
            var code = langCode || supportedLanguageCodes[0];
            var configDate = dateConfigMap[code] || dateConfigMap[supportedLanguageCodes[0]];
            return configDate;
        };
        return NgxDatePipe;
    }());
    NgxDatePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'ngxdate', pure: false },] }
    ];
    NgxDatePipe.ctorParameters = function () { return []; };

    common.registerLocaleData(localeIt__default['default']);
    common.registerLocaleData(localeFr__default['default']);
    common.registerLocaleData(localeDe__default['default']);
    common.registerLocaleData(localeEs__default['default']);
    var NgxTimelineModule = /** @class */ (function () {
        function NgxTimelineModule() {
        }
        return NgxTimelineModule;
    }());
    NgxTimelineModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NgxTimelineComponent, NgxTimelineEventComponent, NgxDatePipe],
                    imports: [common.CommonModule],
                    exports: [NgxTimelineComponent, NgxDatePipe]
                },] }
    ];

    /*
     * Public API Surface of ngx-timeline
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgxDatePipe = NgxDatePipe;
    exports.NgxTimelineComponent = NgxTimelineComponent;
    exports.NgxTimelineEventComponent = NgxTimelineEventComponent;
    exports.NgxTimelineModule = NgxTimelineModule;
    exports.dateConfigMap = dateConfigMap;
    exports.fieldConfigDate = fieldConfigDate;
    exports.fieldsToAddEventGroup = fieldsToAddEventGroup;
    exports.fieldsToCheckEventChangeSideInGroup = fieldsToCheckEventChangeSideInGroup;
    exports.periodKeyDateFormat = periodKeyDateFormat;
    exports.supportedLanguageCodes = supportedLanguageCodes;
    exports.ɵa = NgxTimelineComponent;
    exports.ɵb = NgxTimelineEventComponent;
    exports.ɵc = NgxDatePipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=frxjs-ngx-timeline.umd.js.map
