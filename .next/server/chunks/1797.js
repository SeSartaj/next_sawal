"use strict";
exports.id = 1797;
exports.ids = [1797];
exports.modules = {

/***/ 31797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44952);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50298);
/* harmony import */ var _ui_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41068);
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96403);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76830);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95164);
/* __next_internal_client_entry_do_not_use__ default auto */ 







const validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__/* .object */ .Ry({
    content: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_()
});
const SearchForm = ({ setState, model, lang, dictionary })=>{
    const [showSearchInput, setShowSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const initialValues = {
        content: ""
    };
    const handleSearch = (search)=>{
        if (model === "discussions") {
            _services_api__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.discussions.querySearch(`title=${search}`).then((res)=>{
                setState(res.data);
            });
        } else if (model === "moderators") {
            _services_api__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.users.querySearchModerators(`name=${search}`).then((res)=>{
                setState(res.data);
            });
        } else if (model === "members") {
            _services_api__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.users.querySearchMembers(`name=${search}`).then((res)=>{
                setState(res.data);
            });
        } else if (model === "tags") {
            _services_api__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.tags.querySearch(`name=${search}`).then((res)=>{
                setState(res.data);
            });
        } else if (model === "reportTypes") {
            _services_api__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.reportTypes.querySearch(`name=${search}`).then((res)=>{
                setState(res.data);
            });
        } else if (model === "reports") {
            _services_api__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.reports.querySearch(`content=${search}`).then((res)=>{
                setState(res.data);
            });
        }
    };
    const handleSubmit = (values, { setSubmitting })=>{
        handleSearch(`${values.content}`);
    };
    const handleClear = (resetForm)=>{
        resetForm();
        setShowSearchInput(false);
        handleSearch("");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__/* .Formik */ .J9, {
            initialValues: initialValues,
            validationSchema: validationSchema,
            onSubmit: handleSubmit,
            children: ({ resetForm })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_7__/* .Form */ .l0, {
                    className: "flex w-full justify-end",
                    children: [
                        showSearchInput && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-3 flex-col w-full px-3 mt-3",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "relative flex-auto",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__/* .Field */ .gN, {
                                                as: _ui_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                                                name: "content",
                                                placeholder: dictionary["main"].search_here,
                                                clearIcon: true,
                                                cleanStateToggle: ()=>handleClear(resetForm),
                                                lang: lang
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__/* .ErrorMessage */ .Bc, {
                                                name: "content",
                                                component: "div",
                                                className: "text-red-500 text-xs"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex p-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex items-center justify-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                                            type: "submit",
                                            className: "bg-blue-600",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.Search, {})
                                        })
                                    })
                                })
                            ]
                        }),
                        !showSearchInput && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex p-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center justify-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                                    type: "submit",
                                    variant: "ghost",
                                    onClick: ()=>setShowSearchInput(true),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.Search, {})
                                })
                            })
                        })
                    ]
                })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchForm);


/***/ })

};
;