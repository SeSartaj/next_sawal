"use strict";
exports.id = 7415;
exports.ids = [7415];
exports.modules = {

/***/ 47415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25002);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79912);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45338);
/* harmony import */ var _ui_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42787);





const RelativeTime = ({ timestamp, lang, dictionary })=>{
    const getCurrentLocale = ()=>{
        switch(lang){
            case "da":
                return date_fns_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
            default:
                return date_fns_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z;
        }
    };
    const digitMap = {
        0: "۰",
        1: "۱",
        2: "۲",
        3: "۳",
        4: "۴",
        5: "۵",
        6: "۶",
        7: "۷",
        8: "۸",
        9: "۹"
    };
    const formatInAf = (formattedDate)=>{
        let result = formattedDate;
        let number = "";
        if (lang === "pa") {
            const units = {
                years: dictionary["timestamp"]["year"],
                months: dictionary["timestamp"]["month"],
                weeks: dictionary["timestamp"]["week"],
                days: dictionary["timestamp"]["day"],
                hours: dictionary["timestamp"]["hour"],
                minutes: dictionary["timestamp"]["minute"],
                seconds: dictionary["timestamp"]["second"],
                about: dictionary["timestamp"]["about"],
                over: dictionary["timestamp"]["over"]
            };
            // Replace each time unit with its Pashto translation
            for(const unit in units){
                result = result.replace(unit, units[unit]);
            }
        }
        const matches = result.match(/\d+/);
        if (matches && matches.length > 0) {
            number = matches[0];
            result = result.replace(number, "");
        }
        number = number.replace(/[0-9]/g, (match)=>digitMap[parseInt(match)] || match);
        return {
            result,
            number
        };
    };
    const formatDate = (date)=>{
        const locale = getCurrentLocale();
        return (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(date, new Date(), {
            locale
        });
    };
    const formattedDate = formatDate(timestamp * 1000); // Convert timestamp to milliseconds
    let formattedDateAf = {
        result: "",
        number: ""
    };
    //Pushto language not support by date-fns/locale.
    if (lang !== "en") {
        formattedDateAf = formatInAf(formattedDate);
    }
    return lang !== "en" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-row-reverse space-x-1",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "px-1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Label__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    children: formattedDateAf.number
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Label__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    children: formattedDateAf.result
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Label__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    children: dictionary["timestamp"]["ago"]
                })
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_Label__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: [
                formattedDate,
                " ",
                dictionary["timestamp"]["ago"]
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelativeTime);


/***/ })

};
;