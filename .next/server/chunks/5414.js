"use strict";
exports.id = 5414;
exports.ids = [5414];
exports.modules = {

/***/ 55414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Cards_TagsCard)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./components/ui/Label.tsx
var Label = __webpack_require__(42787);
// EXTERNAL MODULE: ./components/Icons.tsx
var Icons = __webpack_require__(76830);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/ui/Paragragh.tsx
var Paragragh = __webpack_require__(11773);
// EXTERNAL MODULE: ./components/ui/Button.tsx
var Button = __webpack_require__(96403);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.cjs.production.min.js
var formik_cjs_production_min = __webpack_require__(44952);
// EXTERNAL MODULE: ./node_modules/yup/index.js
var yup = __webpack_require__(50298);
// EXTERNAL MODULE: ./components/context/AuthContext.tsx + 1 modules
var AuthContext = __webpack_require__(94297);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(34751);
// EXTERNAL MODULE: ./services/api.js + 1 modules
var api = __webpack_require__(95164);
// EXTERNAL MODULE: ./components/utils/ErrorMessage.ts
var ErrorMessage = __webpack_require__(73296);
// EXTERNAL MODULE: ./components/ui/PageHeader.tsx
var PageHeader = __webpack_require__(8471);
// EXTERNAL MODULE: ./components/ui/Input.tsx
var Input = __webpack_require__(41068);
;// CONCATENATED MODULE: ./components/ui/EditTagModel.tsx











const EditTagModel = ({ tagId, tag, lang, dictionary, toggleModal, setTags })=>{
    const validationSchema = yup/* object */.Ry({
        name: yup/* string */.Z_().required(dictionary["validation"].english_name_required),
        namePa: yup/* string */.Z_().required(dictionary["validation"].pashtu_name_required),
        nameDa: yup/* string */.Z_().required(dictionary["validation"].pashtu_name_required)
    });
    const context = (0,react_.useContext)(AuthContext["default"]);
    const initialValues = {
        name: tag.name,
        namePa: tag.namePa,
        nameDa: tag.nameDa
    };
    const handleSubmit = (values, { setSubmitting })=>{
        let { name, namePa, nameDa } = values;
        if (!context?.jwt) {
            (0,react_toastify_esm.toast)(dictionary["notify"].sign_in_first, {
                hideProgressBar: true,
                autoClose: 2000,
                type: "error"
            });
        } else {
            let accessToken = context?.jwt?.accessToken;
            let id = tagId;
            api/* default */.Z.tags.update({
                id,
                name,
                namePa,
                nameDa
            }, accessToken).then((res)=>{
                toggleModal();
                (0,react_toastify_esm.toast)(dictionary["notify"].tag_updated_ok, {
                    hideProgressBar: true,
                    autoClose: 2000,
                    type: "success"
                });
                api/* default */.Z.tags.querySearch("").then((res)=>{
                    setTags(res.data);
                });
            }).catch((error)=>{
                console.error((0,ErrorMessage/* getErrorMessage */.e)(error));
                (0,react_toastify_esm.toast)((0,ErrorMessage/* getErrorMessage */.e)(error), {
                    hideProgressBar: true,
                    autoClose: 2000,
                    type: "error"
                });
            });
        //To route to detail view of new quesition create.
        }
        setSubmitting(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* Formik */.J9, {
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
        children: /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* Form */.l0, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "modal-background",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative lg:w-[35%] md:w-[50%] w-full my-6 max-w-3xl sm:",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex items-start justify-between p-5 rounded-t",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(PageHeader/* default */.Z, {
                                        title: dictionary["main"].edit_tag,
                                        size: "xs",
                                        className: "text-gray-600 "
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "p-6 flex flex-col",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "relative p-6 flex",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex-1 flex-col",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* Field */.gN, {
                                                        as: Input/* default */.Z,
                                                        name: "name",
                                                        placeholder: dictionary["main"].name,
                                                        label: dictionary["main"].name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* ErrorMessage */.Bc, {
                                                        name: "name",
                                                        component: "div",
                                                        className: "text-red-500 text-xs"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "relative p-6 flex",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex-1 flex-col",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* Field */.gN, {
                                                        as: Input/* default */.Z,
                                                        name: "namePa",
                                                        placeholder: dictionary["main"].name_pa,
                                                        label: dictionary["main"].name_pa
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* ErrorMessage */.Bc, {
                                                        name: "namePa",
                                                        component: "div",
                                                        className: "text-red-500 text-xs"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "relative p-6 flex",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex-1 flex-col",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* Field */.gN, {
                                                        as: Input/* default */.Z,
                                                        name: "nameDa",
                                                        placeholder: dictionary["main"].name_da,
                                                        label: dictionary["main"].name_da
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* ErrorMessage */.Bc, {
                                                        name: "nameDa",
                                                        component: "div",
                                                        className: "text-red-500 text-xs"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center justify-center mt-10 p-6 border-t space-x-2 border-solid border-gray-200 rounded-b",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                                            type: "submit",
                                            children: dictionary["main"].update
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
                })
            })
        })
    });
};
/* harmony default export */ const ui_EditTagModel = (EditTagModel);

;// CONCATENATED MODULE: ./components/ui/EditReportTypeModel.tsx











const EditReportTypeModel = ({ reportTypeId, reportType, lang, dictionary, toggleModal, setReportTypes })=>{
    const validationSchema = yup/* object */.Ry({
        name: yup/* string */.Z_().required(dictionary["validation"].english_name_required),
        namePa: yup/* string */.Z_().required(dictionary["validation"].pashtu_name_required),
        nameDa: yup/* string */.Z_().required(dictionary["validation"].pashtu_name_required)
    });
    const context = (0,react_.useContext)(AuthContext["default"]);
    const initialValues = {
        name: reportType.name,
        namePa: reportType.namePa,
        nameDa: reportType.nameDa
    };
    const handleSubmit = (values, { setSubmitting })=>{
        let { name, namePa, nameDa } = values;
        if (!context?.jwt) {
            (0,react_toastify_esm.toast)(dictionary["notify"].sign_in_first, {
                hideProgressBar: true,
                autoClose: 2000,
                type: "error"
            });
        } else {
            let accessToken = context?.jwt?.accessToken;
            let id = reportTypeId;
            api/* default */.Z.reportTypes.update({
                id,
                name,
                namePa,
                nameDa
            }, accessToken).then((res)=>{
                toggleModal();
                (0,react_toastify_esm.toast)(dictionary["notify"].report_type_updated_ok, {
                    hideProgressBar: true,
                    autoClose: 2000,
                    type: "success"
                });
                api/* default */.Z.reportTypes.querySearch("").then((res)=>{
                    setReportTypes(res.data);
                });
            }).catch((error)=>{
                console.error((0,ErrorMessage/* getErrorMessage */.e)(error));
                (0,react_toastify_esm.toast)((0,ErrorMessage/* getErrorMessage */.e)(error), {
                    hideProgressBar: true,
                    autoClose: 2000,
                    type: "error"
                });
            });
        //To route to detail view of new quesition create.
        }
        setSubmitting(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* Formik */.J9, {
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
        children: /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* Form */.l0, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "modal-background",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative lg:w-[35%] md:w-[50%] w-full my-6 max-w-3xl sm:",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex items-start justify-between p-5 rounded-t",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(PageHeader/* default */.Z, {
                                        title: dictionary["main"].edit_tag,
                                        size: "xs",
                                        className: "text-gray-600 "
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "p-6 flex flex-col",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "relative p-6 flex",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex-1 flex-col",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* Field */.gN, {
                                                        as: Input/* default */.Z,
                                                        name: "name",
                                                        placeholder: dictionary["main"].name,
                                                        label: dictionary["main"].name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* ErrorMessage */.Bc, {
                                                        name: "name",
                                                        component: "div",
                                                        className: "text-red-500 text-xs"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "relative p-6 flex",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex-1 flex-col",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* Field */.gN, {
                                                        as: Input/* default */.Z,
                                                        name: "namePa",
                                                        placeholder: dictionary["main"].name_pa,
                                                        label: dictionary["main"].name_pa
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* ErrorMessage */.Bc, {
                                                        name: "namePa",
                                                        component: "div",
                                                        className: "text-red-500 text-xs"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "relative p-6 flex",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex-1 flex-col",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* Field */.gN, {
                                                        as: Input/* default */.Z,
                                                        name: "nameDa",
                                                        placeholder: dictionary["main"].name_da,
                                                        label: dictionary["main"].name_da
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(formik_cjs_production_min/* ErrorMessage */.Bc, {
                                                        name: "nameDa",
                                                        component: "div",
                                                        className: "text-red-500 text-xs"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center justify-center mt-10 p-6 border-t space-x-2 border-solid border-gray-200 rounded-b",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                                            type: "submit",
                                            children: dictionary["main"].update
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
                })
            })
        })
    });
};
/* harmony default export */ const ui_EditReportTypeModel = (EditReportTypeModel);

;// CONCATENATED MODULE: ./components/Cards/TagsCard.tsx









const TagsCard = ({ id, name, isTag, lang, discussionsCount, dictionary, isAdmin, setTags, setReportTypes, tag, reportType })=>{
    const [editTagModalOpen, setEditTagModalOpen] = (0,react_.useState)(false);
    const [editReportTypeModalOpen, setEditReportTypeModalOpen] = (0,react_.useState)(false);
    const toggleEditTagModal = ()=>{
        setEditTagModalOpen(!editTagModalOpen);
    };
    const toggleEditReportTypeModal = ()=>{
        setEditReportTypeModalOpen(!editReportTypeModalOpen);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex rounded overflow-hidden shadow-md",
        children: [
            isTag && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center justify-center flex-grow",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* default */.Z.Tag, {
                    className: "w-6 h-6"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex w-[65%] py-1 px-1 justify-start items-center",
                children: isTag ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-xl text-blue-500 mb-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/${lang}/questions/tag/${id}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Paragragh/* default */.Z, {
                            className: "text-left text-blue-500",
                            children: name
                        })
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Label/* default */.Z, {
                        children: name
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center justify-center flex-grow",
                children: isTag ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        isAdmin && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex justify-end",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                                variant: "ghost",
                                onClick: toggleEditTagModal,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* default */.Z.FileEdit, {
                                    size: 15
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Icons/* default */.Z.X, {
                                    size: 15
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Label/* default */.Z, {
                                    className: "px-1 font-bold text-lg",
                                    children: discussionsCount || 0
                                })
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-end",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                        variant: "ghost",
                        onClick: toggleEditReportTypeModal,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* default */.Z.FileEdit, {
                            size: 15
                        })
                    })
                })
            }),
            editTagModalOpen && /*#__PURE__*/ jsx_runtime_.jsx(ui_EditTagModel, {
                dictionary: dictionary,
                lang: lang,
                tagId: id,
                tag: tag,
                toggleModal: toggleEditTagModal,
                setTags: setTags
            }),
            editReportTypeModalOpen && /*#__PURE__*/ jsx_runtime_.jsx(ui_EditReportTypeModel, {
                dictionary: dictionary,
                lang: lang,
                reportTypeId: id,
                reportType: reportType,
                toggleModal: toggleEditReportTypeModal,
                setReportTypes: setReportTypes
            })
        ]
    });
};
/* harmony default export */ const Cards_TagsCard = (TagsCard);


/***/ })

};
;