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
var firstSection_vue_1 = require("./MainContent/firstSection.vue");
var secondSection_vue_1 = require("./MainContent/secondSection.vue"); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)(__assign({ class: ("px-[1.6em] py-[12em] grid gap-y-[8em] lg:py-[25em] lg:px-0 lg:pb-[11em] lg:container") }));
    // @ts-ignore
    /** @type { [typeof firstSection, ] } */ ;
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(firstSection_vue_1.default, new firstSection_vue_1.default({}));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_0), false));
    // @ts-ignore
    /** @type { [typeof secondSection, ] } */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(secondSection_vue_1.default, new secondSection_vue_1.default({}));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_5), false));
    ['px-[1.6em]', 'py-[12em]', 'grid', 'gap-y-[8em]', 'lg:py-[25em]', 'lg:px-0', 'lg:pb-[11em]', 'lg:container',];
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
            firstSection: firstSection_vue_1.default,
            secondSection: secondSection_vue_1.default,
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
