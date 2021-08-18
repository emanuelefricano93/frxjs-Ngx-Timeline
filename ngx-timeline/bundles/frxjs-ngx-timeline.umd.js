(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common'), require('@angular/common/locales/it'), require('@angular/common/locales/fr'), require('@angular/common/locales/de'), require('@angular/common/locales/es')) :
    typeof define === 'function' && define.amd ? define('@frxjs/ngx-timeline', ['exports', '@angular/core', 'rxjs', '@angular/common', '@angular/common/locales/it', '@angular/common/locales/fr', '@angular/common/locales/de', '@angular/common/locales/es'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.frxjs = global.frxjs || {}, global.frxjs['ngx-timeline'] = {}), global.ng.core, global.rxjs, global.ng.common, global.ng.common.locales.it, global.ng.common.locales.fr, global.ng.common.locales.de, global.ng.common.locales.es));
}(this, (function (exports, i0, rxjs, i1, localeIt, localeFr, localeDe, localeEs) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
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

    function NgxTimelineEventComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "div", 6);
        }
    }
    function NgxTimelineEventComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    function NgxTimelineEventComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "div", 7);
        }
    }
    function NgxTimelineEventComponent_ng_template_5_div_11_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 16);
            i0__namespace.ɵɵelementStart(1, "div");
            i0__namespace.ɵɵelementStart(2, "p");
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "div");
            i0__namespace.ɵɵelementStart(5, "p", 17);
            i0__namespace.ɵɵtext(6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "div");
            i0__namespace.ɵɵelementStart(8, "p");
            i0__namespace.ɵɵtext(9);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var dateObj_r7 = ctx.ngIf;
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(dateObj_r7 == null ? null : dateObj_r7.month);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(dateObj_r7 == null ? null : dateObj_r7.day);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(dateObj_r7 == null ? null : dateObj_r7.year);
        }
    }
    var _c0$1 = function (a0) { return { "reverse": a0 }; };
    function NgxTimelineEventComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 8);
            i0__namespace.ɵɵelementStart(1, "div", 9);
            i0__namespace.ɵɵelementStart(2, "div", 10);
            i0__namespace.ɵɵelementStart(3, "div", 11);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵpipe(5, "titlecase");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(6, "div", 12);
            i0__namespace.ɵɵelementStart(7, "p", 13);
            i0__namespace.ɵɵtext(8);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(9, "div", 14);
            i0__namespace.ɵɵelement(10, "hr");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(11, NgxTimelineEventComponent_ng_template_5_div_11_Template, 10, 3, "div", 15);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var event_r5 = ctx.event;
            var ctx_r4 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(6, _c0$1, ctx_r4.colSidePosition === ctx_r4.ngxTimelineItemPosition.ON_LEFT));
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(5, 4, event_r5 == null ? null : event_r5.eventInfo == null ? null : event_r5.eventInfo.title));
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵtextInterpolate(event_r5 == null ? null : event_r5.eventInfo == null ? null : event_r5.eventInfo.description);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngIf", ctx_r4.getDateObj());
        }
    }
    var _c1$1 = function (a0) { return { "enableAnimation": a0 }; };
    var _c2$1 = function (a0) { return { event: a0 }; };
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
                month = new i1.DatePipe(langCode).transform(timestamp, this.monthAbbr);
                day = new i1.DatePipe(langCode).transform(timestamp, this.dayFormat);
                year = timestamp.getFullYear();
            }
            return { day: day, month: month, year: year };
        };
        NgxTimelineEventComponent.prototype.getLangCode = function () {
            return this.langCode && supportedLanguageCodes.includes(this.langCode) ? this.langCode : supportedLanguageCodes[0];
        };
        return NgxTimelineEventComponent;
    }());
    NgxTimelineEventComponent.ɵfac = function NgxTimelineEventComponent_Factory(t) { return new (t || NgxTimelineEventComponent)(); };
    NgxTimelineEventComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: NgxTimelineEventComponent, selectors: [["ngx-timeline-event"]], inputs: { event: "event", colSidePosition: "colSidePosition", langCode: "langCode", innerEventCustomTemplate: "innerEventCustomTemplate", enableAnimation: "enableAnimation" }, outputs: { clickEmitter: "clickEmitter" }, decls: 7, vars: 9, consts: [[1, "event-wrapper-container", 3, "click"], ["class", "arrow left", 4, "ngIf"], [1, "event", 3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "arrow right", 4, "ngIf"], ["innerEventContainer", ""], [1, "arrow", "left"], [1, "arrow", "right"], [1, "event-container", 3, "ngClass"], [1, "event-info-container"], [1, "event-info-header"], [1, "title-container"], [1, "event-info-body"], [1, "event-info-description"], [1, "event-divider-container"], ["class", "event-date-container", 4, "ngIf"], [1, "event-date-container"], [1, "day"]], template: function NgxTimelineEventComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵlistener("click", function NgxTimelineEventComponent_Template_div_click_0_listener() { return ctx.clickEmitter.next(ctx.event); });
                i0__namespace.ɵɵtemplate(1, NgxTimelineEventComponent_div_1_Template, 1, 0, "div", 1);
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵtemplate(3, NgxTimelineEventComponent_ng_container_3_Template, 1, 0, "ng-container", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(4, NgxTimelineEventComponent_div_4_Template, 1, 0, "div", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(5, NgxTimelineEventComponent_ng_template_5_Template, 12, 8, "ng-template", null, 5, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r3 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.colSidePosition === ctx.ngxTimelineItemPosition.ON_RIGHT);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(5, _c1$1, ctx.enableAnimation));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx.innerEventCustomTemplate || _r3)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction1(7, _c2$1, ctx.event));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.colSidePosition === ctx.ngxTimelineItemPosition.ON_LEFT);
            }
        }, directives: [i1__namespace.NgIf, i1__namespace.NgClass, i1__namespace.NgTemplateOutlet], pipes: [i1__namespace.TitleCasePipe], styles: [".event-wrapper-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;cursor:pointer}.arrow[_ngcontent-%COMP%]{width:0;height:0;border-top:.5rem solid transparent;border-bottom:.5rem solid transparent;border-radius:6px;z-index:10}.arrow.right[_ngcontent-%COMP%]{filter:drop-shadow(2px 0 0 #244a6e22);border-left:.5rem solid #fff}.arrow.left[_ngcontent-%COMP%]{filter:drop-shadow(-1px 0 0 #244a6e22);border-right:.5rem solid #fff}.event[_ngcontent-%COMP%]{background:#fff;border-radius:.8rem;padding:1rem;width:100%;margin:1rem 0}.event.enableAnimation[_ngcontent-%COMP%]:hover{padding:2rem;transition:all .5s ease-in-out}.event.enableAnimation[_ngcontent-%COMP%]:not(:hover){padding:1rem;transition:all .5s ease-in-out}.event[_ngcontent-%COMP%]:not(.hour){background:#fff 0 0 no-repeat padding-box;box-shadow:0 3px 6px rgba(36,74,110,.3215686274509804)}.event.hour[_ngcontent-%COMP%]{padding:.5rem;background:none;display:flex;justify-content:center;align-items:center}.event.hour.right[_ngcontent-%COMP%]{justify-content:flex-start}.event.hour.left[_ngcontent-%COMP%]{justify-content:flex-end}.event[_ngcontent-%COMP%]   .hour-inner-container[_ngcontent-%COMP%]{margin:0}.event-container[_ngcontent-%COMP%]{display:flex}.event-container.reverse[_ngcontent-%COMP%]{flex-direction:row-reverse}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;padding:.1rem;flex:88 88 0}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-header[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{margin-right:.3rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-header[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{color:orange;width:1.5rem;height:1.5rem;margin-bottom:.1rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-header[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{font-weight:700;font-size:15px}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]{padding:.5rem 0;display:flex;flex-direction:column;justify-content:flex-start;overflow-wrap:anywhere}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .event-info-description[_ngcontent-%COMP%]{margin-bottom:.5rem;font-size:13px}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]{display:flex;font-size:13px;justify-content:flex-start;align-items:center}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;margin:0}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   .category-label[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   .expiration-label[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   .category-label[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   .expiration-label[_ngcontent-%COMP%]{margin-right:.5rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   .category-value[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   .expiration-value[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   .category-value[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   .expiration-value[_ngcontent-%COMP%]{font-weight:700}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-footer[_ngcontent-%COMP%]{font-size:15px;cursor:pointer;padding-top:1rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-footer[_ngcontent-%COMP%]   .footer-inner-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:flex-end}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-footer[_ngcontent-%COMP%]   .footer-inner-container[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{color:#006cb4;width:1rem;height:1rem;margin-bottom:.1rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#006cb4}.event-container[_ngcontent-%COMP%]   .event-divider-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:.1rem;flex:5 5 0}.event-container[_ngcontent-%COMP%]   .event-divider-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{height:100%;width:1px;background:#e9e9e9}.event-container[_ngcontent-%COMP%]   .event-date-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:.1rem;flex:15 15 0}.event-container[_ngcontent-%COMP%]   .event-date-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center}.event-container[_ngcontent-%COMP%]   .event-date-container[_ngcontent-%COMP%]   p.day[_ngcontent-%COMP%]{font-size:32px;font-weight:700;padding:.5rem 0}"] });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(NgxTimelineEventComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-timeline-event',
                        templateUrl: './ngx-timeline-event.component.html',
                        styleUrls: ['./ngx-timeline-event.component.scss']
                    }]
            }], function () { return []; }, { event: [{
                    type: i0.Input
                }], colSidePosition: [{
                    type: i0.Input
                }], langCode: [{
                    type: i0.Input
                }], innerEventCustomTemplate: [{
                    type: i0.Input
                }], enableAnimation: [{
                    type: i0.Input
                }], clickEmitter: [{
                    type: i0.Output
                }] });
    })();

    var NgxDatePipe = /** @class */ (function () {
        function NgxDatePipe() {
        }
        NgxDatePipe.prototype.transform = function (date, dateFormat, langCode) {
            var transformedDate = null;
            if (date) {
                var objDate = this.getDateConfig(langCode);
                transformedDate = new i1.DatePipe(objDate.code).transform(new Date(date), this.dateFormat(dateFormat, objDate));
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
    NgxDatePipe.ɵfac = function NgxDatePipe_Factory(t) { return new (t || NgxDatePipe)(); };
    NgxDatePipe.ɵpipe = i0__namespace.ɵɵdefinePipe({ name: "ngxdate", type: NgxDatePipe, pure: false });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(NgxDatePipe, [{
                type: i0.Pipe,
                args: [{ name: 'ngxdate', pure: false }]
            }], function () { return []; }, null);
    })();

    function NgxTimelineComponent_div_2_div_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    var _c0 = function (a0, a1) { return { event: a0, colSidePosition: a1 }; };
    function NgxTimelineComponent_div_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 20);
            i0__namespace.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_2_ng_container_1_Template, 1, 0, "ng-container", 21);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r11 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r13 = i0__namespace.ɵɵnextContext();
            var _r9 = i0__namespace.ɵɵreference(12);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx_r13.eventCustomTemplate || _r9)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction2(2, _c0, item_r11, ctx_r13.ngxTimelineItemPosition.ON_LEFT));
        }
    }
    function NgxTimelineComponent_div_2_div_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    var _c1 = function (a0) { return { item: a0 }; };
    function NgxTimelineComponent_div_2_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 22);
            i0__namespace.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_3_ng_container_1_Template, 1, 0, "ng-container", 21);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r11 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r14 = i0__namespace.ɵɵnextContext();
            var _r5 = i0__namespace.ɵɵreference(8);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx_r14.dateInstantCustomTemplate || _r5)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction1(2, _c1, item_r11.eventInfo));
        }
    }
    function NgxTimelineComponent_div_2_div_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    var _c2 = function (a0, a1) { return { period: a0, index: a1 }; };
    function NgxTimelineComponent_div_2_div_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 23);
            i0__namespace.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_5_ng_container_1_Template, 1, 0, "ng-container", 21);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r28 = i0__namespace.ɵɵnextContext();
            var item_r11 = ctx_r28.$implicit;
            var index_r12 = ctx_r28.index;
            var ctx_r15 = i0__namespace.ɵɵnextContext();
            var _r7 = i0__namespace.ɵɵreference(10);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx_r15.periodCustomTemplate || _r7)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction2(2, _c2, item_r11.periodInfo, index_r12));
        }
    }
    function NgxTimelineComponent_div_2_div_6_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    var _c3 = function (a0) { return { index: a0 }; };
    function NgxTimelineComponent_div_2_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 24);
            i0__namespace.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_6_ng_container_1_Template, 1, 0, "ng-container", 21);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var index_r12 = i0__namespace.ɵɵnextContext().index;
            i0__namespace.ɵɵnextContext();
            var _r1 = i0__namespace.ɵɵreference(4);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction1(2, _c3, index_r12));
        }
    }
    function NgxTimelineComponent_div_2_div_8_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    function NgxTimelineComponent_div_2_div_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 20);
            i0__namespace.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_8_ng_container_1_Template, 1, 0, "ng-container", 21);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r11 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r17 = i0__namespace.ɵɵnextContext();
            var _r9 = i0__namespace.ɵɵreference(12);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx_r17.eventCustomTemplate || _r9)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction2(2, _c0, item_r11, ctx_r17.ngxTimelineItemPosition.ON_RIGHT));
        }
    }
    function NgxTimelineComponent_div_2_div_9_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    function NgxTimelineComponent_div_2_div_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 25);
            i0__namespace.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_9_ng_container_1_Template, 1, 0, "ng-container", 21);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r11 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r18 = i0__namespace.ɵɵnextContext();
            var _r5 = i0__namespace.ɵɵreference(8);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx_r18.dateInstantCustomTemplate || _r5)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction1(2, _c1, item_r11.eventInfo));
        }
    }
    function NgxTimelineComponent_div_2_div_11_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    function NgxTimelineComponent_div_2_div_11_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 22);
            i0__namespace.ɵɵelementStart(1, "div", 26);
            i0__namespace.ɵɵtemplate(2, NgxTimelineComponent_div_2_div_11_ng_container_2_Template, 1, 0, "ng-container", 21);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r11 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r19 = i0__namespace.ɵɵnextContext();
            var _r5 = i0__namespace.ɵɵreference(8);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx_r19.dateInstantCustomTemplate || _r5)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction1(2, _c1, item_r11.eventInfo));
        }
    }
    function NgxTimelineComponent_div_2_div_13_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    function NgxTimelineComponent_div_2_div_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 23);
            i0__namespace.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_13_ng_container_1_Template, 1, 0, "ng-container", 21);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r38 = i0__namespace.ɵɵnextContext();
            var item_r11 = ctx_r38.$implicit;
            var index_r12 = ctx_r38.index;
            var ctx_r20 = i0__namespace.ɵɵnextContext();
            var _r7 = i0__namespace.ɵɵreference(10);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx_r20.periodCustomTemplate || _r7)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction2(2, _c2, item_r11.periodInfo, index_r12));
        }
    }
    function NgxTimelineComponent_div_2_div_14_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    function NgxTimelineComponent_div_2_div_14_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 24);
            i0__namespace.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_14_ng_container_1_Template, 1, 0, "ng-container", 21);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var index_r12 = i0__namespace.ɵɵnextContext().index;
            i0__namespace.ɵɵnextContext();
            var _r1 = i0__namespace.ɵɵreference(4);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction1(2, _c3, index_r12));
        }
    }
    function NgxTimelineComponent_div_2_div_16_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    function NgxTimelineComponent_div_2_div_16_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 20);
            i0__namespace.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_16_ng_container_1_Template, 1, 0, "ng-container", 21);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r11 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r22 = i0__namespace.ɵɵnextContext();
            var _r9 = i0__namespace.ɵɵreference(12);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx_r22.eventCustomTemplate || _r9)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction2(2, _c0, item_r11, ctx_r22.ngxTimelineItemPosition.ON_RIGHT));
        }
    }
    function NgxTimelineComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 8);
            i0__namespace.ɵɵelementStart(1, "div", 9);
            i0__namespace.ɵɵtemplate(2, NgxTimelineComponent_div_2_div_2_Template, 2, 5, "div", 10);
            i0__namespace.ɵɵtemplate(3, NgxTimelineComponent_div_2_div_3_Template, 2, 4, "div", 11);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "div", 12);
            i0__namespace.ɵɵtemplate(5, NgxTimelineComponent_div_2_div_5_Template, 2, 5, "div", 13);
            i0__namespace.ɵɵtemplate(6, NgxTimelineComponent_div_2_div_6_Template, 2, 4, "div", 14);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "div", 15);
            i0__namespace.ɵɵtemplate(8, NgxTimelineComponent_div_2_div_8_Template, 2, 5, "div", 10);
            i0__namespace.ɵɵtemplate(9, NgxTimelineComponent_div_2_div_9_Template, 2, 4, "div", 16);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(10, "div", 17);
            i0__namespace.ɵɵtemplate(11, NgxTimelineComponent_div_2_div_11_Template, 3, 4, "div", 11);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(12, "div", 18);
            i0__namespace.ɵɵtemplate(13, NgxTimelineComponent_div_2_div_13_Template, 2, 5, "div", 13);
            i0__namespace.ɵɵtemplate(14, NgxTimelineComponent_div_2_div_14_Template, 2, 4, "div", 14);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(15, "div", 19);
            i0__namespace.ɵɵtemplate(16, NgxTimelineComponent_div_2_div_16_Template, 2, 5, "div", 10);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r11 = ctx.$implicit;
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", item_r11.eventInfo && item_r11.position === ctx_r0.ngxTimelineItemPosition.ON_LEFT);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", item_r11.eventInfo && item_r11.position === ctx_r0.ngxTimelineItemPosition.ON_RIGHT);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", item_r11.periodInfo);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !item_r11.periodInfo);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", item_r11.eventInfo && item_r11.position === ctx_r0.ngxTimelineItemPosition.ON_RIGHT);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", item_r11.eventInfo && item_r11.position === ctx_r0.ngxTimelineItemPosition.ON_LEFT);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", item_r11.eventInfo);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", item_r11.periodInfo);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !item_r11.periodInfo);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", item_r11.eventInfo);
        }
    }
    function NgxTimelineComponent_ng_template_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    var _c4 = function (a0) { return { "transparent last-line": a0 }; };
    function NgxTimelineComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "div", 27);
            i0__namespace.ɵɵtemplate(1, NgxTimelineComponent_ng_template_3_ng_container_1_Template, 1, 0, "ng-container", 28);
            i0__namespace.ɵɵelement(2, "div", 29);
        }
        if (rf & 2) {
            var index_r43 = ctx.index;
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            var _r3 = i0__namespace.ɵɵreference(6);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx_r2.centerIconCustomTemplate || _r3);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(2, _c4, index_r43 === ctx_r2.items.length - 1));
        }
    }
    function NgxTimelineComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 30);
            i0__namespace.ɵɵelement(1, "div", 31);
            i0__namespace.ɵɵelementEnd();
        }
    }
    function NgxTimelineComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "ngxdate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r45 = ctx.item;
            var ctx_r6 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind3(2, 1, item_r45 == null ? null : item_r45.timestamp, ctx_r6.ngxDateFormat.HOURS_MINUTES, ctx_r6.langCode), " ");
        }
    }
    var _c5 = function (a0) { return { "transparent first-line": a0 }; };
    function NgxTimelineComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "div", 29);
            i0__namespace.ɵɵelementStart(1, "div", 32);
            i0__namespace.ɵɵelementStart(2, "div", 33);
            i0__namespace.ɵɵelementStart(3, "span");
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵpipe(5, "ngxdate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(6, "div", 27);
        }
        if (rf & 2) {
            var period_r46 = ctx.period;
            var index_r47 = ctx.index;
            var ctx_r8 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(6, _c5, !index_r47));
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind3(5, 2, period_r46 == null ? null : period_r46.firstDate, ctx_r8.getPeriodKeyDateFormat(), ctx_r8.langCode));
        }
    }
    function NgxTimelineComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r51_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "ngx-timeline-event", 34);
            i0__namespace.ɵɵlistener("clickEmitter", function NgxTimelineComponent_ng_template_11_Template_ngx_timeline_event_clickEmitter_0_listener($event) { i0__namespace.ɵɵrestoreView(_r51_1); var ctx_r50 = i0__namespace.ɵɵnextContext(); return ctx_r50.clickEmitter.next($event); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var event_r48 = ctx.event;
            var colSidePosition_r49 = ctx.colSidePosition;
            var ctx_r10 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("event", event_r48)("langCode", ctx_r10.langCode)("enableAnimation", ctx_r10.enableAnimation)("innerEventCustomTemplate", ctx_r10.innerEventCustomTemplate)("colSidePosition", colSidePosition_r49);
        }
    }
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
    NgxTimelineComponent.ɵfac = function NgxTimelineComponent_Factory(t) { return new (t || NgxTimelineComponent)(); };
    NgxTimelineComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: NgxTimelineComponent, selectors: [["ngx-timeline"]], inputs: { events: "events", langCode: "langCode", enableAnimation: "enableAnimation", groupEvent: "groupEvent", changeSideInGroup: "changeSideInGroup", periodCustomTemplate: "periodCustomTemplate", eventCustomTemplate: "eventCustomTemplate", centerIconCustomTemplate: "centerIconCustomTemplate", dateInstantCustomTemplate: "dateInstantCustomTemplate", innerEventCustomTemplate: "innerEventCustomTemplate" }, outputs: { clickEmitter: "clickEmitter" }, features: [i0__namespace.ɵɵNgOnChangesFeature], decls: 13, vars: 1, consts: [[1, "main-container"], [1, "items-container"], ["class", "row", 4, "ngFor", "ngForOf"], ["centerLinesIconTemplate", ""], ["centerIconTemplate", ""], ["dateInstantTemplate", ""], ["periodTemplate", ""], ["eventTemplate", ""], [1, "row"], [1, "col", "col-left", "desktop", 3, "ngClass"], ["class", "event-outer-container", 4, "ngIf"], ["class", "hour left", 4, "ngIf"], [1, "col", "col-center", "desktop", 3, "ngClass"], ["class", "center-inner", 4, "ngIf"], ["class", "center-inner no-period-key", 4, "ngIf"], [1, "col", "col-right", "desktop", 3, "ngClass"], ["class", "hour right", 4, "ngIf"], [1, "col", "col-left", "mobile", 3, "ngClass"], [1, "col", "col-center", "mobile", 3, "ngClass"], [1, "col", "col-right", "mobile", 3, "ngClass"], [1, "event-outer-container"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "hour", "left"], [1, "center-inner"], [1, "center-inner", "no-period-key"], [1, "hour", "right"], [1, "hour-inner-container"], [1, "line"], [4, "ngTemplateOutlet"], [1, "line", 3, "ngClass"], [1, "center-icon-container"], [1, "icon"], [1, "period-container"], [1, "period-inner-container"], [3, "event", "langCode", "enableAnimation", "innerEventCustomTemplate", "colSidePosition", "clickEmitter"]], template: function NgxTimelineComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵtemplate(2, NgxTimelineComponent_div_2_Template, 17, 16, "div", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(3, NgxTimelineComponent_ng_template_3_Template, 3, 4, "ng-template", null, 3, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵtemplate(5, NgxTimelineComponent_ng_template_5_Template, 2, 0, "ng-template", null, 4, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵtemplate(7, NgxTimelineComponent_ng_template_7_Template, 3, 5, "ng-template", null, 5, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵtemplate(9, NgxTimelineComponent_ng_template_9_Template, 7, 8, "ng-template", null, 6, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵtemplate(11, NgxTimelineComponent_ng_template_11_Template, 1, 5, "ng-template", null, 7, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngForOf", ctx.items);
            }
        }, directives: [i1__namespace.NgForOf, i1__namespace.NgClass, i1__namespace.NgIf, i1__namespace.NgTemplateOutlet, NgxTimelineEventComponent], pipes: [NgxDatePipe], styles: [".main-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}.items-container[_ngcontent-%COMP%]{padding:1rem 0;min-width:max(20rem,100%)}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.row[_ngcontent-%COMP%] > [class*=col-][_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.col-left[_ngcontent-%COMP%]{align-items:flex-end}.col-left[_ngcontent-%COMP%], .col-right[_ngcontent-%COMP%]{padding:0;flex:49 49 0}.col-right[_ngcontent-%COMP%]{align-items:flex-start}.col-center[_ngcontent-%COMP%]{min-height:6rem;padding:0;flex:2 2 0}.center-inner[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.center-inner[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{min-height:50%;max-height:50%;height:50%;background:#464646;width:.1rem}.center-inner[_ngcontent-%COMP%]   .line.transparent[_ngcontent-%COMP%]{background:transparent}.period-container[_ngcontent-%COMP%]{background:orange;color:#fff;margin:0;padding:.2rem .5rem}.period-container[_ngcontent-%COMP%]   .period-inner-container[_ngcontent-%COMP%]{width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:.2rem .5rem;z-index:10}.center-icon-container[_ngcontent-%COMP%]{padding:.8rem 0;display:flex;justify-content:center;align-items:center;position:absolute;height:10px;width:10px;background:#fff}.center-icon-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:1rem;width:1rem;border-radius:50%;background:orange;margin:0;position:absolute}.event-outer-container[_ngcontent-%COMP%]{margin:0 .5rem;width:100%}.hour[_ngcontent-%COMP%]{padding:.5rem;background:none;display:flex;justify-content:center;align-items:center}.hour.right[_ngcontent-%COMP%]{justify-content:flex-start}.hour.left[_ngcontent-%COMP%]{justify-content:flex-end}.hour[_ngcontent-%COMP%]   .hour-inner-container[_ngcontent-%COMP%]{margin:0}.desktop[_ngcontent-%COMP%]{display:flex!important}.mobile[_ngcontent-%COMP%]{display:none!important}@media (max-width:900px){.desktop[_ngcontent-%COMP%]{display:none!important}.mobile[_ngcontent-%COMP%]{display:flex!important}.event-outer-container[_ngcontent-%COMP%]{margin:.5rem .3rem}.col-left[_ngcontent-%COMP%]{align-items:flex-start}.col-left[_ngcontent-%COMP%]   .hour[_ngcontent-%COMP%]{font-size:12px;padding:0;margin-right:.3rem}.col-left.col-period[_ngcontent-%COMP%]{flex:18 18 0}.col-left.col-event[_ngcontent-%COMP%]{flex:18 18 0;padding:0;align-items:flex-end}.col-right[_ngcontent-%COMP%]{align-items:flex-start}.col-right.col-period[_ngcontent-%COMP%]{flex:77 77 0}.col-right.col-event[_ngcontent-%COMP%]{flex:77 77 0;padding:0}.col-center[_ngcontent-%COMP%]{min-height:6rem;justify-content:center;margin:0}.col-center.col-period[_ngcontent-%COMP%]{flex:5 5 0;min-height:3rem}.col-center.col-event[_ngcontent-%COMP%]{flex:5 5 0}.center-inner[_ngcontent-%COMP%], .period-container[_ngcontent-%COMP%]{align-items:center}.period-container[_ngcontent-%COMP%]{min-height:20%;height:20%;max-height:20%;background:transparent;display:flex;justify-content:center;border-radius:6px}.period-container[_ngcontent-%COMP%]   .period-inner-container[_ngcontent-%COMP%]{position:absolute;background:orange;color:#fff;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:.2rem .5rem;z-index:10}.center-icon-container[_ngcontent-%COMP%]{align-items:center;justify-content:center}.center-icon-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:1rem;width:1rem;position:absolute}}"] });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(NgxTimelineComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-timeline',
                        templateUrl: './ngx-timeline.component.html',
                        styleUrls: ['./ngx-timeline.scss'],
                    }]
            }], function () { return []; }, { events: [{
                    type: i0.Input
                }], langCode: [{
                    type: i0.Input
                }], enableAnimation: [{
                    type: i0.Input
                }], groupEvent: [{
                    type: i0.Input
                }], changeSideInGroup: [{
                    type: i0.Input
                }], periodCustomTemplate: [{
                    type: i0.Input
                }], eventCustomTemplate: [{
                    type: i0.Input
                }], centerIconCustomTemplate: [{
                    type: i0.Input
                }], dateInstantCustomTemplate: [{
                    type: i0.Input
                }], innerEventCustomTemplate: [{
                    type: i0.Input
                }], clickEmitter: [{
                    type: i0.Output
                }] });
    })();

    i1.registerLocaleData(localeIt__default['default']);
    i1.registerLocaleData(localeFr__default['default']);
    i1.registerLocaleData(localeDe__default['default']);
    i1.registerLocaleData(localeEs__default['default']);
    var NgxTimelineModule = /** @class */ (function () {
        function NgxTimelineModule() {
        }
        return NgxTimelineModule;
    }());
    NgxTimelineModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: NgxTimelineModule });
    NgxTimelineModule.ɵinj = i0__namespace.ɵɵdefineInjector({ factory: function NgxTimelineModule_Factory(t) { return new (t || NgxTimelineModule)(); }, imports: [[i1.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(NgxTimelineModule, { declarations: [NgxTimelineComponent, NgxTimelineEventComponent, NgxDatePipe], imports: [i1.CommonModule], exports: [NgxTimelineComponent, NgxDatePipe] }); })();
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(NgxTimelineModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [NgxTimelineComponent, NgxTimelineEventComponent, NgxDatePipe],
                        imports: [i1.CommonModule],
                        exports: [NgxTimelineComponent, NgxDatePipe]
                    }]
            }], null, null);
    })();

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

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=frxjs-ngx-timeline.umd.js.map
