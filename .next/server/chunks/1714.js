"use strict";
exports.id = 1714;
exports.ids = [1714];
exports.modules = {

/***/ 93423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91971);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12857);




const textareaClass = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-b-gray-800 peer");
const Textarea = ({ className, children, value, onChange, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(textareaClass({
            className
        })),
        ref: ref,
        value: value,
        onChange: onChange,
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(Textarea));


/***/ }),

/***/ 86196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ detectLanguage)
/* harmony export */ });
const detectLanguage = (text)=>{
    const englishRegex = /[a-zA-Z\s]/;
    const pashtoRegex = /[\u0600-\u06FF\s]/; // Pashto Unicode range
    const dariRegex = /[\uFB50-\uFDFF\s]/; // Dari Unicode range
    const firstCharacter = text.charAt(0);
    if (englishRegex.test(firstCharacter)) {
        return "en";
    } else if (pashtoRegex.test(firstCharacter)) {
        return "pa"; // Pashto
    } else if (dariRegex.test(firstCharacter)) {
        return "da"; // Dari
    } else {
        return "pa";
    }
};


/***/ })

};
;