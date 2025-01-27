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
var image_intro_mobile_jpg_1 = require("@/images/image-intro-mobile.jpg");
var image_intro_desktop_jpg_1 = require("@/images/image-intro-desktop.jpg");
var bg_pattern_intro_left_mobile_svg_1 = require("@/images/bg-pattern-intro-left-mobile.svg");
var bg_pattern_intro_right_mobile_svg_1 = require("@/images/bg-pattern-intro-right-mobile.svg");
var bg_pattern_intro_right_desktop_svg_1 = require("@/images/bg-pattern-intro-right-desktop.svg");
var bg_pattern_intro_left_desktop_svg_1 = require("@/images/bg-pattern-intro-left-desktop.svg"); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)(__assign({ class: ("bg-darkViolet lg:py-[4em]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.mobilePattern)), alt: ("dad, mom and two kids") }, { class: ("block w-full lg:hidden") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("py-[5em] px-[1.7em] text-veryLightGray relative flex w-[100%] lg:justify-between lg:container") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("text-center lg:w-[44%] lg:text-left") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("hidden lg:block h-[2px] rounded-2xl w-[40%] bg-veryLightGray") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("text-[4.5rem] font-display font-display400 z-10 relative lg:text-[7.3rem] lg:mt-[.8em] lg:leading-none") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("mt-[1em] leading-[1.8] z-10 relative lg:text-[1.6rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ type: ("button") }, { class: ("uppercase mt-[2em] py-[.4em] px-[1.7em] border-2 text-[1.9rem] relative lg:hover:text-black lg:hover:bg-veryLightGray transition-colors") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.picture, __VLS_intrinsicElements.picture)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.source)({
        srcset: ((__VLS_ctx.desktopPattern)),
        media: ("(min-width: 992px)"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.mobilePattern)), alt: ("dad, mom and two kids") }, { class: ("hidden w-full lg:block lg:absolute lg:right-[1.5em] lg:w-[52%] z-10 lg:max-w-[40em]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.picture, __VLS_intrinsicElements.picture)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.source)({
        srcset: ((__VLS_ctx.desktopTopLines)),
        media: ("(min-width: 992px)"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.topLeftLines)), alt: ("") }, { class: ("absolute top-0 left-0 z-0 lg:left-full lg:-translate-x-1/2 lg:top-[-10%]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.picture, __VLS_intrinsicElements.picture)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.source)({
        srcset: ((__VLS_ctx.desktopBotLines)),
        media: ("(min-width: 992px)"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.bottomRightLines)), alt: ("") }, { class: ("absolute bottom-[-38%] right-0 z-0 lg:right-[91%] lg:bottom-[-65%]") }));
    ['bg-darkViolet', 'lg:py-[4em]', 'block', 'w-full', 'lg:hidden', 'py-[5em]', 'px-[1.7em]', 'text-veryLightGray', 'relative', 'flex', 'w-[100%]', 'lg:justify-between', 'lg:container', 'text-center', 'lg:w-[44%]', 'lg:text-left', 'hidden', 'lg:block', 'h-[2px]', 'rounded-2xl', 'w-[40%]', 'bg-veryLightGray', 'text-[4.5rem]', 'font-display', 'font-display400', 'z-10', 'relative', 'lg:text-[7.3rem]', 'lg:mt-[.8em]', 'lg:leading-none', 'mt-[1em]', 'leading-[1.8]', 'z-10', 'relative', 'lg:text-[1.6rem]', 'uppercase', 'mt-[2em]', 'py-[.4em]', 'px-[1.7em]', 'border-2', 'text-[1.9rem]', 'relative', 'lg:hover:text-black', 'lg:hover:bg-veryLightGray', 'transition-colors', 'hidden', 'w-full', 'lg:block', 'lg:absolute', 'lg:right-[1.5em]', 'lg:w-[52%]', 'z-10', 'lg:max-w-[40em]', 'absolute', 'top-0', 'left-0', 'z-0', 'lg:left-full', 'lg:-translate-x-1/2', 'lg:top-[-10%]', 'absolute', 'bottom-[-38%]', 'right-0', 'z-0', 'lg:right-[91%]', 'lg:bottom-[-65%]',];
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
            mobilePattern: image_intro_mobile_jpg_1.default,
            desktopPattern: image_intro_desktop_jpg_1.default,
            topLeftLines: bg_pattern_intro_left_mobile_svg_1.default,
            bottomRightLines: bg_pattern_intro_right_mobile_svg_1.default,
            desktopTopLines: bg_pattern_intro_right_desktop_svg_1.default,
            desktopBotLines: bg_pattern_intro_left_desktop_svg_1.default,
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
