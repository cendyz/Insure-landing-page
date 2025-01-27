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
Object.defineProperty(exports, "__esModule", { value: true });
var logo_svg_1 = require("@/images/logo.svg");
var bg_pattern_footer_mobile_svg_1 = require("@/images/bg-pattern-footer-mobile.svg");
var bg_pattern_footer_desktop_svg_1 = require("@/images/bg-pattern-footer-desktop.svg");
var data_1 = require("@/data");
var data_2 = require("@/data");
var nanoid_1 = require("nanoid"); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)(__assign({ class: ("bg-gray-100 py-[4em] px-[1.5em] relative") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex flex-col items-center z-30 relative pb-[4.5em] border-b-[2px] lg:flex-row lg:container lg:justify-between lg:pb-[2em]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.logo)), alt: ("insure logo") }, { class: ("lg:w-[13%]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex gap-x-[1em] mt-[2em]") }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.footerIconsData)); _i < _a.length; _i++) {
        var item = _a[_i][0];
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((item.icon)), alt: ((item.alt)), key: ((__VLS_ctx.nanoid())) }, { class: ("icon") }));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("py-[2.7em] text-center lg:columns-4 lg:container") }));
    for (var _b = 0, _c = __VLS_getVForSourceType((__VLS_ctx.footerLinksData)); _b < _c.length; _b++) {
        var item = _c[_b][0];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex flex-col gap-y-[.5em] mb-[2.3em] last:mb-0 lg:items-start") }, { key: ((__VLS_ctx.nanoid())) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)(__assign({ class: ("mb-[2em] uppercase font-karla700 text-darkGrayishViolet lg:mb-[1.5em]") }));
        (item.title);
        for (var _d = 0, _e = __VLS_getVForSourceType((item.links)); _d < _e.length; _d++) {
            var link = _e[_d][0];
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: ("#"), key: ((__VLS_ctx.nanoid())) }, { class: ("uppercase text-veryDarkViolet font-karla700 hover:underline underline-offset-2 inline-block") }));
            (link);
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.picture, __VLS_intrinsicElements.picture)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.source)({
        srcset: ((__VLS_ctx.desktopLines)),
        media: ("(min-width: 992px)"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.lines)), alt: ("") }, { class: ("absolute top-0 left-0") }));
    ['bg-gray-100', 'py-[4em]', 'px-[1.5em]', 'relative', 'flex', 'flex-col', 'items-center', 'z-30', 'relative', 'pb-[4.5em]', 'border-b-[2px]', 'lg:flex-row', 'lg:container', 'lg:justify-between', 'lg:pb-[2em]', 'lg:w-[13%]', 'flex', 'gap-x-[1em]', 'mt-[2em]', 'icon', 'py-[2.7em]', 'text-center', 'lg:columns-4', 'lg:container', 'flex', 'flex-col', 'gap-y-[.5em]', 'mb-[2.3em]', 'last:mb-0', 'lg:items-start', 'mb-[2em]', 'uppercase', 'font-karla700', 'text-darkGrayishViolet', 'lg:mb-[1.5em]', 'uppercase', 'text-veryDarkViolet', 'font-karla700', 'hover:underline', 'underline-offset-2', 'inline-block', 'absolute', 'top-0', 'left-0',];
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
            logo: logo_svg_1.default,
            lines: bg_pattern_footer_mobile_svg_1.default,
            desktopLines: bg_pattern_footer_desktop_svg_1.default,
            footerIconsData: data_1.footerIconsData,
            footerLinksData: data_2.footerLinksData,
            nanoid: nanoid_1.nanoid,
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
