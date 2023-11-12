"use strict";
exports.id = 6641;
exports.ids = [6641];
exports.modules = {

/***/ 89964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42787);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13562);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const BadgeCard = ({ id, name, Icon, RemoveIconAlert, handleRemoveTag, openTagRemoveAlert, setOpenTagRemoveAlert, RemoveIconNoAlert, highLightTagId })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `flex rounded overflow-hidden shadow-md bg-neutral-200 px-1 ${highLightTagId && id === highLightTagId ? "bg-yellow-200" : ""}`,
        children: [
            Icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center",
                children: Icon
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex px-1 justify-start items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Label__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        className: "font-bold",
                        children: name
                    })
                })
            }),
            RemoveIconNoAlert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center justify-top flex-grow",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    children: RemoveIconNoAlert
                })
            }),
            RemoveIconAlert && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-top flex-grow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>setOpenTagRemoveAlert(true),
                        children: RemoveIconAlert
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Alert__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        alertTitle: "Remove Tag?",
                        alertMessage: `Are you sure you want to remove this ${name} Tag?`,
                        open: openTagRemoveAlert,
                        setOpen: setOpenTagRemoveAlert,
                        handleYes: handleRemoveTag
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadgeCard);


/***/ }),

/***/ 84055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ui_ReportModal)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.cjs.production.min.js
var formik_cjs_production_min = __webpack_require__(44952);
// EXTERNAL MODULE: ./node_modules/yup/index.js
var yup = __webpack_require__(50298);
// EXTERNAL MODULE: ./services/api.js + 1 modules
var api = __webpack_require__(95164);
// EXTERNAL MODULE: ./components/ui/PageHeader.tsx
var PageHeader = __webpack_require__(8471);
// EXTERNAL MODULE: ./components/ui/Button.tsx
var Button = __webpack_require__(96403);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var dist = __webpack_require__(91971);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(12857);
;// CONCATENATED MODULE: ./components/ui/DropdownSelect.tsx




const selectClass = (0,dist/* cva */.j)("block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer");
const DropdownSelect = /*#__PURE__*/ react_.forwardRef(({ className, children, isLoading, options, placeholderLabel, dir, ...props }, ref)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                className: (0,utils.cn)(selectClass({
                    className
                })),
                ref: ref,
                disabled: isLoading,
                ...props,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "",
                        children: placeholderLabel
                    }),
                    options.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: item.value,
                            children: item.label
                        }, item.id))
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `absolute inset-y-0 ${dir == "ltr" ? "right-0" : "left-0"} flex items-center pr-2 pointer-events-none`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "w-4 h-4 text-gray-400",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z",
                        clipRule: "evenodd"
                    })
                })
            })
        ]
    });
});
DropdownSelect.displayName = "DropdownSelect";
/* harmony default export */ const ui_DropdownSelect = (DropdownSelect);

// EXTERNAL MODULE: ./components/ui/Label.tsx
var Label = __webpack_require__(42787);
// EXTERNAL MODULE: ./components/ui/Input.tsx
var Input = __webpack_require__(41068);
// EXTERNAL MODULE: ./components/context/AuthContext.tsx + 1 modules
var AuthContext = __webpack_require__(94297);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(34751);
// EXTERNAL MODULE: ./components/utils/ErrorMessage.ts
var ErrorMessage = __webpack_require__(73296);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./components/ui/ReportModal.tsx














const ReportModal = ({ toggleModal, reportOption, discussionId, lang, dictionary, reportedUserId, dir })=>{
    const validationSchema = yup/* object */.Ry({
        reportTypeId: yup/* string */.Z_().required(dictionary["validation"].atleast_one_type),
        content: yup/* string */.Z_()
    });
    const context = (0,react_.useContext)(AuthContext["default"]);
    const router = (0,navigation.useRouter)();
    const initialValues = {
        reportTypeId: "",
        content: ""
    };
    const handleSubmit = (values, { setSubmitting })=>{
        if (!context?.jwt) {
            (0,react_toastify_esm.toast)(dictionary["notify"].sign_in_first, {
                hideProgressBar: true,
                autoClose: 2000,
                type: "info"
            });
            return router.push(`/${lang}/sign_in`);
        }
        const userId = context?.jwt?.id;
        const { content, reportTypeId } = values;
        const accessToken = context?.jwt?.accessToken;
        const data = discussionId ? {
            content,
            reportTypeId,
            userId,
            discussionId
        } : {
            content,
            reportTypeId,
            userId,
            reportedUserId
        };
        api/* default */.Z.reports.create(data, accessToken).then((res)=>{
            toggleModal();
            (0,react_toastify_esm.toast)(dictionary["notify"].report_submit_ok, {
                hideProgressBar: true,
                autoClose: 2000,
                type: "success"
            });
        }).catch((error)=>{
            console.error((0,ErrorMessage/* getErrorMessage */.e)(error));
            (0,react_toastify_esm.toast)((0,ErrorMessage/* getErrorMessage */.e)(error), {
                hideProgressBar: true,
                autoClose: 2000,
                type: "error"
            });
        });
        setSubmitting(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* Formik */.J9, {
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
        children: /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* Form */.l0, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "fixed inset-0 z-50 flex items-start justify-center mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none",
                        dir: dir,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative lg:w-[35%] md:w-[50%] w-full my-6 max-w-3xl sm:",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex items-start justify-between p-5 rounded-t",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(PageHeader/* default */.Z, {
                                            title: dictionary["main"].report_problem,
                                            size: "xs",
                                            className: "text-gray-600 "
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "relative p-6 flex-auto",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Label/* default */.Z, {
                                                htmlFor: "reportTypeId",
                                                children: dictionary["main"].report_type
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* Field */.gN, {
                                                as: ui_DropdownSelect,
                                                name: "reportTypeId",
                                                options: reportOption,
                                                placeholderLabel: dictionary["main"].select_option,
                                                dir: dir
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* ErrorMessage */.Bc, {
                                                name: "reportTypeId",
                                                component: "div",
                                                className: "text-red-500 text-xs"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "relative p-6 flex-auto",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* Field */.gN, {
                                                as: Input/* default */.Z,
                                                name: "content",
                                                placeholder: dictionary["main"].describe_wrong
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* ErrorMessage */.Bc, {
                                                name: "content",
                                                component: "div",
                                                className: "text-red-500 text-xs"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center justify-center mt-10 p-6 border-t space-x-2 border-solid border-gray-200 rounded-b",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                                                type: "submit",
                                                children: dictionary["main"].submit
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                                                onClick: toggleModal,
                                                variant: "link",
                                                children: dictionary["main"].close
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "fixed inset-0 z-40 bg-black opacity-25"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const ui_ReportModal = (ReportModal);


/***/ })

};
;