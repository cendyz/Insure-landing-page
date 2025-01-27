"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var nanoid_1 = require("nanoid");
var vue_1 = require("vue");
var data_1 = require("@/data");
var logo_svg_1 = require("@/images/logo.svg");
var icon_hamburger_svg_1 = require("@/images/icon-hamburger.svg");
var icon_close_svg_1 = require("@/images/icon-close.svg");
var bg_pattern_mobile_nav_svg_1 = require("@/images/bg-pattern-mobile-nav.svg");
var isOpenNavMenu = (0, vue_1.ref)(false);
(0, vue_1.watchEffect)(function () {
    if (isOpenNavMenu.value) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = 'visible';
    }
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)(__assign({ class: ("fixed top-0 left-0 w-full flex justify-between p-[1.5em] items-center bg-veryLightGray z-[100] lg:static lg:container") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.logo)), alt: ("logo workit") }, { class: ("block") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.isOpenNavMenu = !__VLS_ctx.isOpenNavMenu;
        } }, { class: ("lg:hidden") }));
    if (!__VLS_ctx.isOpenNavMenu) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((__VLS_ctx.burgerOpen)),
            alt: ("menu open icon"),
        });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((__VLS_ctx.burgerClose)),
            alt: ("menu close icon"),
        });
    }
    var __VLS_0 = {}.Transition;
    /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.Transition, ] } */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        name: ("navMenu"),
    }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
            name: ("navMenu"),
        }], __VLS_functionalComponentArgsRest(__VLS_1), false));
    if (__VLS_ctx.isOpenNavMenu) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("fixed w-full top-[5em] left-0 h-[calc(100%-5em)] bg-veryDarkViolet flex flex-col items-center px-[1.3em] py-[2.2em] gap-y-[.8em] lg:hidden") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.navPattern)), alt: ("") }, { class: ("absolute bottom-0 w-full") }));
        for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.mobileMenuLinks)); _i < _a.length; _i++) {
            var item = _a[_i][0];
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign(__assign(__assign({ onClick: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!((__VLS_ctx.isOpenNavMenu)))
                        return;
                    __VLS_ctx.isOpenNavMenu = false;
                } }, { href: ("#") }), { class: ("text-veryLightGray uppercase text-[2rem] last:border py-[.5em] last:w-full last:text-center z-10") }), { key: ((__VLS_ctx.nanoid())) }));
            (item.link);
        }
    }
    __VLS_5.slots.default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("space-x-[2em] hidden lg:flex") }));
    for (var _b = 0, _c = __VLS_getVForSourceType((__VLS_ctx.mobileMenuLinks)); _b < _c.length; _b++) {
        var item = _c[_b][0];
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.isOpenNavMenu = false;
            } }, { href: ("#") }), { class: ("text-veryGrayishViolet uppercase text-[2rem] text-gray-500 lg:hover:text-veryDarkViolet last:border-2 py-[.5em] last:text-center last:px-[1.5em] last:border-veryDarkViolet lg:last:hover:text-veryLightGray lg:last:hover:bg-veryDarkViolet transition-colors") }), { key: ((__VLS_ctx.nanoid())) }));
        (item.link);
    }
    ['fixed', 'top-0', 'left-0', 'w-full', 'flex', 'justify-between', 'p-[1.5em]', 'items-center', 'bg-veryLightGray', 'z-[100]', 'lg:static', 'lg:container', 'block', 'lg:hidden', 'fixed', 'w-full', 'top-[5em]', 'left-0', 'h-[calc(100%-5em)]', 'bg-veryDarkViolet', 'flex', 'flex-col', 'items-center', 'px-[1.3em]', 'py-[2.2em]', 'gap-y-[.8em]', 'lg:hidden', 'absolute', 'bottom-0', 'w-full', 'text-veryLightGray', 'uppercase', 'text-[2rem]', 'last:border', 'py-[.5em]', 'last:w-full', 'last:text-center', 'z-10', 'space-x-[2em]', 'hidden', 'lg:flex', 'text-veryGrayishViolet', 'uppercase', 'text-[2rem]', 'text-gray-500', 'lg:hover:text-veryDarkViolet', 'last:border-2', 'py-[.5em]', 'last:text-center', 'last:px-[1.5em]', 'last:border-veryDarkViolet', 'lg:last:hover:text-veryLightGray', 'lg:last:hover:bg-veryDarkViolet', 'transition-colors',];
    var __VLS_slots;
    var $slots;
    var __VLS_inheritedAttrs;
    var $attrs;
    var __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            nanoid: nanoid_1.nanoid,
            mobileMenuLinks: data_1.mobileMenuLinks,
            logo: logo_svg_1.default,
            burgerOpen: icon_hamburger_svg_1.default,
            burgerClose: icon_close_svg_1.default,
            navPattern: bg_pattern_mobile_nav_svg_1.default,
            isOpenNavMenu: isOpenNavMenu,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
