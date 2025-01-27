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
var bg_pattern_how_we_work_mobile_svg_1 = require("@/images/bg-pattern-how-we-work-mobile.svg");
var bg_pattern_how_we_work_desktop_svg_1 = require("@/images/bg-pattern-how-we-work-desktop.svg"); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("p-[3em] bg-darkViolet text-veryLightGray text-center relative lg:flex lg:justify-between lg:items-center lg:overflow-hidden lg:p-[5em]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: ("font-display font-display400 text-[3.6rem] relative z-30 leading-[1.2] lg:text-[6.5rem] lg:w-[570px] lg:text-left") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ type: ("button") }, { class: ("uppercase mt-[2em] py-[.4em] px-[1.7em] border-2 text-[1.9rem] relative lg:my-auto lg:ml-auto z-30 lg:hover:text-black lg:hover:bg-veryLightGray transition-colors") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.picture, __VLS_intrinsicElements.picture)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({
        srcset: ((__VLS_ctx.desktopLines)),
        media: ("(min-width:992px)"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.bottomRightLines)), alt: ("") }, { class: ("absolute top-0 right-0 z-0 w-[45%] lg:w-[47%]") }));
    ['p-[3em]', 'bg-darkViolet', 'text-veryLightGray', 'text-center', 'relative', 'lg:flex', 'lg:justify-between', 'lg:items-center', 'lg:overflow-hidden', 'lg:p-[5em]', 'font-display', 'font-display400', 'text-[3.6rem]', 'relative', 'z-30', 'leading-[1.2]', 'lg:text-[6.5rem]', 'lg:w-[570px]', 'lg:text-left', 'uppercase', 'mt-[2em]', 'py-[.4em]', 'px-[1.7em]', 'border-2', 'text-[1.9rem]', 'relative', 'lg:my-auto', 'lg:ml-auto', 'z-30', 'lg:hover:text-black', 'lg:hover:bg-veryLightGray', 'transition-colors', 'absolute', 'top-0', 'right-0', 'z-0', 'w-[45%]', 'lg:w-[47%]',];
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
            bottomRightLines: bg_pattern_how_we_work_mobile_svg_1.default,
            desktopLines: bg_pattern_how_we_work_desktop_svg_1.default,
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
