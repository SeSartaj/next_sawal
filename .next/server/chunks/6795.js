"use strict";
exports.id = 6795;
exports.ids = [6795];
exports.modules = {

/***/ 46795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Paragragh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11773);
/* harmony import */ var _utils_RelativeTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47415);
/* harmony import */ var _BadgeCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89964);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76830);
/* harmony import */ var _public_default_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67521);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Report__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32210);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const QuestionsCard = ({ discussion, lang, dictionary, reportOption, highLightTagId, dir })=>{
    const { id, title, content, user, viewCount, answerCount, createdAt, tag } = discussion;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex rounded overflow-hidden shadow-md",
        dir: dir,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col md:flex-row lg:flex-row w-[75%]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row lg:flex-col md:flex-col space-x-2 lg:space-y-2 md:space-y-2 px-6 py-2 justify-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex bg-yellow-100 shadow-sm overflow-hidden rounded px-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Paragragh__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            size: "sm",
                                            className: "text-xs px-1",
                                            children: answerCount
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Paragragh__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                size: "sm",
                                                className: "text-xs",
                                                children: dictionary["main"].answers
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex border shadow-sm overflow-hidden rounded px-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Paragragh__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            size: "sm",
                                            className: "text-xs px-1",
                                            children: viewCount
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Paragragh__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            size: "sm",
                                            className: "text-xs",
                                            children: dictionary["main"].views
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "py-3 w-[100%] md:w-[75%] lg:w-[80%] space-y-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-xl text-blue-500 mb-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    href: `/${lang}/question/${discussion.id}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Paragragh__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        className: "text-left text-blue-500",
                                        children: title
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Paragragh__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                className: "text-left",
                                size: "sm",
                                children: content
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "flex",
                                children: discussion.tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex px-1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BadgeCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            id: tag.id,
                                            name: lang === "pa" ? tag.namePa : lang === "da" ? tag.nameDa : tag.name,
                                            highLightTagId: highLightTagId
                                        }, tag.id)
                                    }, tag.id))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-[25%] flex-col lg:px-6 md:px-6 justify-around",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col-reverse md:flex-row lg:flex-row w-full justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-end md:justify-start lg:justify-start",
                                children: user?.file ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: `${"https://online.tveta.gov.af:8080/api"}/files/${user.file.fileName}`,
                                    className: "w-11 h-11 rounded-md",
                                    alt: "Logo"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    src: _public_default_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                    alt: dictionary["main"].author_picture,
                                    className: "w-11 h-11 rounded-md"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex-col w-[65%] justify-start truncate hidden md:hidden lg:block",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            user?.firstName,
                                            " ",
                                            user?.lastName
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex h-7",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BadgeCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            name: user?.isModerator ? dictionary["main"].moderator : user?.isAdmin ? dictionary["main"].administrator : dictionary["main"].member,
                                            Icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.Star, {
                                                fill: "yellow",
                                                color: "yellow",
                                                size: 12
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Report__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    reportOption: reportOption,
                                    dictionary: dictionary,
                                    lang: lang,
                                    discussionId: id,
                                    dir: dir
                                }, id)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center",
                        children: createdAt && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_RelativeTime__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            timestamp: createdAt,
                            lang: lang,
                            dictionary: dictionary
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionsCard);


/***/ })

};
;