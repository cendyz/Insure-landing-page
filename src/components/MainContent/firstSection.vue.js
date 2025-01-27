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
var data_1 = require("@/data");
var nanoid_1 = require("nanoid"); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("text-center lg:text-left lg:flex lg:flex-wrap lg:justify-between") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: ("text-[4.3rem] font-display font-display400 mb-[1.7em] relative before:content=[''] before:absolute before:h-[2px] before:w-[50%] before:bg-darkViolet before:opacity-20 before:top-[-60%] before:left-1/2 before:-translate-x-[50%] lg:text-[7rem] lg:before:hidden lg:w-full lg:mb-[1.3em]") }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.firstSectionData)); _i < _a.length; _i++) {
        var item = _a[_i][0];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex flex-col items-center mb-[3.3em] last:mb-0 lg:w-[31%] lg:items-start") }, { key: ((__VLS_ctx.nanoid())) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((item.img)), alt: ((item.alt)) }, { class: ("w-[30%] mb-[1.5em]") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("font-display font-display400 text-[2.8rem] mb-[.6em]") }));
        (item.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-veryDarkViolet opacity-80 lg:text-[1.7rem]") }));
        (item.desc);
    }
    ['text-center', 'lg:text-left', 'lg:flex', 'lg:flex-wrap', 'lg:justify-between', 'text-[4.3rem]', 'font-display', 'font-display400', 'mb-[1.7em]', 'relative', 'before:content=[\'\']', 'before:absolute', 'before:h-[2px]', 'before:w-[50%]', 'before:bg-darkViolet', 'before:opacity-20', 'before:top-[-60%]', 'before:left-1/2', 'before:-translate-x-[50%]', 'lg:text-[7rem]', 'lg:before:hidden', 'lg:w-full', 'lg:mb-[1.3em]', 'flex', 'flex-col', 'items-center', 'mb-[3.3em]', 'last:mb-0', 'lg:w-[31%]', 'lg:items-start', 'w-[30%]', 'mb-[1.5em]', 'font-display', 'font-display400', 'text-[2.8rem]', 'mb-[.6em]', 'text-veryDarkViolet', 'opacity-80', 'lg:text-[1.7rem]',];
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
            firstSectionData: data_1.firstSectionData,
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
