"use strict";
exports.id = 2210;
exports.ids = [2210];
exports.modules = {

/***/ 32210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_ReportModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84055);



const Report = ({ reportOption, dictionary, lang, reportedUserId, discussionId, dir })=>{
    const [modalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleModal = ()=>{
        if (!modalOpen) toggleMenu();
        setModalOpen(!modalOpen);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        dir: dir,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative inline-block text-left",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            className: "w-4 h-4 ml-2 cursor-pointer",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            onClick: toggleMenu,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                    x1: "8",
                                    y1: "12",
                                    x2: "16",
                                    y2: "12",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                    x1: "8",
                                    y1: "6",
                                    x2: "16",
                                    y2: "6",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                    x1: "8",
                                    y1: "18",
                                    x2: "16",
                                    y2: "18",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isMenuOpen ? "" : "hidden"} ${dir == "ltr" ? "right-0" : "left-0"}`,
                        role: "menu",
                        "aria-orientation": "vertical",
                        "aria-labelledby": "menu-button",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "py-1",
                            role: "none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "text-gray-700 block px-4 py-2 text-sm",
                                role: "menuitem",
                                id: "menu-item-0",
                                onClick: toggleModal,
                                children: dictionary["main"].report
                            })
                        })
                    })
                ]
            }),
            modalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_ReportModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    toggleModal: toggleModal,
                    reportOption: reportOption,
                    dictionary: dictionary,
                    lang: lang,
                    reportedUserId: reportedUserId || undefined,
                    discussionId: discussionId || undefined,
                    dir: dir
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Report);


/***/ })

};
;