"use strict";
exports.id = 5314;
exports.ids = [5314];
exports.modules = {

/***/ 5314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62947);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78668);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85839);




const headingVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("text-gray-800 text-center lg:text-left leading-tight tracking-tighter", {
    variants: {
        size: {
            default: "text-4xl md:text-5xl lg:text-6xl",
            lg: "text-5xl md:text-6xl lg:text-7xl",
            sm: "text-2xl md:text-3xl lg:text-4xl",
            xs: "text-1xl md:text-1xl lg:text-2xl",
            xxs: "text-sm md:text-sm lg:text-sm"
        }
    },
    defaultVariants: {
        size: "default"
    }
});
const PageHeader = ({ title, numberCount, children, className, size, ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "items-baseline flex",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                ...props,
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(headingVariants({
                    size,
                    className
                })),
                children: title
            }),
            numberCount ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-gray-500 text-2xl px-4",
                children: numberCount
            }) : null
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);


/***/ })

};
;