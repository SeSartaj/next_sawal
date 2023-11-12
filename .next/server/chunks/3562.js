"use strict";
exports.id = 3562;
exports.ids = [3562];
exports.modules = {

/***/ 13562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16614);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62969);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95915);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16856);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69547);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42153);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18300);









const Transition = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function Transition(props, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Slide__WEBPACK_IMPORTED_MODULE_2__["default"], {
        direction: "up",
        ref: ref,
        ...props
    });
});
const Alert = ({ open, alertTitle, alertMessage, setOpen, handleYes })=>{
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3___default()), {
            open: open,
            TransitionComponent: Transition,
            keepMounted: true,
            onClose: handleClose,
            "aria-describedby": "alert-dialog-slide-description",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4___default()), {
                    children: alertTitle
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default()), {
                        id: "alert-dialog-slide-description",
                        children: alertMessage
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                            onClick: handleYes,
                            children: "Yes"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                            onClick: handleClose,
                            children: "No"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);


/***/ })

};
;