"use strict";
exports.id = 469;
exports.ids = [469];
exports.modules = {

/***/ 70469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18663);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44952);




const MultiSelect = ({ isLoading, options, name, placeHolder, ...props })=>{
    const [field, meta, helpers] = (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .useField */ .U$)(name);
    const handleChange = (selectedOptions)=>{
        // const selectedValues = selectedOptions.map((option: any) => option.value);
        // field.onChange({
        //   target: {
        //     name: field.name,
        //     value: selectedValues,
        //   },
        // });
        helpers.setValue(selectedOptions);
    };
    const customStyles = {
        control: (provided, state)=>({
                ...provided,
                border: "none",
                borderBottom: "2px solid #ccc",
                borderRadius: 0,
                boxShadow: "none",
                "&:hover": {
                    borderBottomColor: "#999"
                }
            }),
        option: (provided, state)=>({
                ...provided,
                padding: "8px 10px"
            })
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_select__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        isMulti: true,
        name: field.name,
        options: options,
        styles: customStyles,
        classNamePrefix: "select",
        placeholder: placeHolder,
        // value={options.filter((option) => field.value.includes(option.value))}
        value: field.value,
        onChange: handleChange
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiSelect);


/***/ })

};
;