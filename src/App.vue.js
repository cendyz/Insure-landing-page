"use strict";
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
var Nav_vue_1 = require("./components/Nav.vue");
var Header_vue_1 = require("./components/Header.vue");
var Main_vue_1 = require("./components/Main.vue");
var Footer_vue_1 = require("./components/Footer.vue"); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    // @ts-ignore
    /** @type { [typeof Nav, ] } */ ;
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(Nav_vue_1.default, new Nav_vue_1.default({}));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_0), false));
    // @ts-ignore
    /** @type { [typeof Header, ] } */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(Header_vue_1.default, new Header_vue_1.default({}));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_5), false));
    // @ts-ignore
    /** @type { [typeof Main, ] } */ ;
    // @ts-ignore
    var __VLS_10 = __VLS_asFunctionalComponent(Main_vue_1.default, new Main_vue_1.default({}));
    var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_10), false));
    // @ts-ignore
    /** @type { [typeof Footer, ] } */ ;
    // @ts-ignore
    var __VLS_15 = __VLS_asFunctionalComponent(Footer_vue_1.default, new Footer_vue_1.default({}));
    var __VLS_16 = __VLS_15.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_15), false));
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
            Nav: Nav_vue_1.default,
            Header: Header_vue_1.default,
            Main: Main_vue_1.default,
            Footer: Footer_vue_1.default,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
