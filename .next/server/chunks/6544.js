"use strict";
exports.id = 6544;
exports.ids = [6544];
exports.modules = {

/***/ 62352:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _system = __webpack_require__(19659);
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _className = __webpack_require__(23014);
var _styles = __webpack_require__(83476);
var _identifier = _interopRequireDefault(__webpack_require__(67421));
const defaultTheme = (0, _styles.createTheme)();
const Box = (0, _system.createBox)({
  themeId: _identifier.default,
  defaultTheme,
  defaultClassName: 'MuiBox-root',
  generateClassName: _className.unstable_ClassNameGenerator.generate
});
 false ? 0 : void 0;
var _default = exports["default"] = Box;

/***/ }),

/***/ 43872:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _Box.default;
  }
}));
var _Box = _interopRequireDefault(__webpack_require__(62352));

/***/ }),

/***/ 89831:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _clsx = _interopRequireDefault(__webpack_require__(80391));
var _composeClasses = __webpack_require__(29178);
var _ButtonBase = _interopRequireDefault(__webpack_require__(19937));
var _capitalize = _interopRequireDefault(__webpack_require__(20587));
var _useThemeProps = _interopRequireDefault(__webpack_require__(54061));
var _styled = _interopRequireDefault(__webpack_require__(76276));
var _unsupportedProp = _interopRequireDefault(__webpack_require__(22701));
var _tabClasses = _interopRequireWildcard(__webpack_require__(50640));
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const useUtilityClasses = ownerState => {
  const {
    classes,
    textColor,
    fullWidth,
    wrapped,
    icon,
    label,
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ['root', icon && label && 'labelIcon', `textColor${(0, _capitalize.default)(textColor)}`, fullWidth && 'fullWidth', wrapped && 'wrapped', selected && 'selected', disabled && 'disabled'],
    iconWrapper: ['iconWrapper']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, _tabClasses.getTabUtilityClass, classes);
};
const TabRoot = (0, _styled.default)(_ButtonBase.default, {
  name: 'MuiTab',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.label && ownerState.icon && styles.labelIcon, styles[`textColor${(0, _capitalize.default)(ownerState.textColor)}`], ownerState.fullWidth && styles.fullWidth, ownerState.wrapped && styles.wrapped];
  }
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({}, theme.typography.button, {
  maxWidth: 360,
  minWidth: 90,
  position: 'relative',
  minHeight: 48,
  flexShrink: 0,
  padding: '12px 16px',
  overflow: 'hidden',
  whiteSpace: 'normal',
  textAlign: 'center'
}, ownerState.label && {
  flexDirection: ownerState.iconPosition === 'top' || ownerState.iconPosition === 'bottom' ? 'column' : 'row'
}, {
  lineHeight: 1.25
}, ownerState.icon && ownerState.label && {
  minHeight: 72,
  paddingTop: 9,
  paddingBottom: 9,
  [`& > .${_tabClasses.default.iconWrapper}`]: (0, _extends2.default)({}, ownerState.iconPosition === 'top' && {
    marginBottom: 6
  }, ownerState.iconPosition === 'bottom' && {
    marginTop: 6
  }, ownerState.iconPosition === 'start' && {
    marginRight: theme.spacing(1)
  }, ownerState.iconPosition === 'end' && {
    marginLeft: theme.spacing(1)
  })
}, ownerState.textColor === 'inherit' && {
  color: 'inherit',
  opacity: 0.6,
  // same opacity as theme.palette.text.secondary
  [`&.${_tabClasses.default.selected}`]: {
    opacity: 1
  },
  [`&.${_tabClasses.default.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  }
}, ownerState.textColor === 'primary' && {
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${_tabClasses.default.selected}`]: {
    color: (theme.vars || theme).palette.primary.main
  },
  [`&.${_tabClasses.default.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  }
}, ownerState.textColor === 'secondary' && {
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${_tabClasses.default.selected}`]: {
    color: (theme.vars || theme).palette.secondary.main
  },
  [`&.${_tabClasses.default.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  }
}, ownerState.fullWidth && {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: 0,
  maxWidth: 'none'
}, ownerState.wrapped && {
  fontSize: theme.typography.pxToRem(12)
}));
const Tab = /*#__PURE__*/React.forwardRef(function Tab(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiTab'
  });
  const {
      className,
      disabled = false,
      disableFocusRipple = false,
      // eslint-disable-next-line react/prop-types
      fullWidth,
      icon: iconProp,
      iconPosition = 'top',
      // eslint-disable-next-line react/prop-types
      indicator,
      label,
      onChange,
      onClick,
      onFocus,
      // eslint-disable-next-line react/prop-types
      selected,
      // eslint-disable-next-line react/prop-types
      selectionFollowsFocus,
      // eslint-disable-next-line react/prop-types
      textColor = 'inherit',
      value,
      wrapped = false
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = (0, _extends2.default)({}, props, {
    disabled,
    disableFocusRipple,
    selected,
    icon: !!iconProp,
    iconPosition,
    label: !!label,
    fullWidth,
    textColor,
    wrapped
  });
  const classes = useUtilityClasses(ownerState);
  const icon = iconProp && label && /*#__PURE__*/React.isValidElement(iconProp) ? /*#__PURE__*/React.cloneElement(iconProp, {
    className: (0, _clsx.default)(classes.iconWrapper, iconProp.props.className)
  }) : iconProp;
  const handleClick = event => {
    if (!selected && onChange) {
      onChange(event, value);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const handleFocus = event => {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(TabRoot, (0, _extends2.default)({
    focusRipple: !disableFocusRipple,
    className: (0, _clsx.default)(classes.root, className),
    ref: ref,
    role: "tab",
    "aria-selected": selected,
    disabled: disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    ownerState: ownerState,
    tabIndex: selected ? 0 : -1
  }, other, {
    children: [iconPosition === 'top' || iconPosition === 'start' ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
      children: [icon, label]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
      children: [label, icon]
    }), indicator]
  }));
});
 false ? 0 : void 0;
var _default = exports["default"] = Tab;

/***/ }),

/***/ 307:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  tabClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _Tab.default;
  }
}));
Object.defineProperty(exports, "tabClasses", ({
  enumerable: true,
  get: function () {
    return _tabClasses.default;
  }
}));
var _Tab = _interopRequireDefault(__webpack_require__(89831));
var _tabClasses = _interopRequireWildcard(__webpack_require__(50640));
Object.keys(_tabClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _tabClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tabClasses[key];
    }
  });
});
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }

/***/ }),

/***/ 50640:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getTabUtilityClass = getTabUtilityClass;
var _utils = __webpack_require__(44268);
var _generateUtilityClass = _interopRequireDefault(__webpack_require__(45058));
function getTabUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiTab', slot);
}
const tabClasses = (0, _utils.unstable_generateUtilityClasses)('MuiTab', ['root', 'labelIcon', 'textColorInherit', 'textColorPrimary', 'textColorSecondary', 'selected', 'disabled', 'fullWidth', 'wrapped', 'iconWrapper']);
var _default = exports["default"] = tabClasses;

/***/ }),

/***/ 67355:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

/* eslint-disable jsx-a11y/aria-role */
var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _clsx = _interopRequireDefault(__webpack_require__(80391));
var _base = __webpack_require__(93832);
var _KeyboardArrowLeft = _interopRequireDefault(__webpack_require__(92716));
var _KeyboardArrowRight = _interopRequireDefault(__webpack_require__(13473));
var _ButtonBase = _interopRequireDefault(__webpack_require__(19937));
var _useTheme = _interopRequireDefault(__webpack_require__(48650));
var _useThemeProps = _interopRequireDefault(__webpack_require__(54061));
var _styled = _interopRequireDefault(__webpack_require__(76276));
var _tabScrollButtonClasses = _interopRequireWildcard(__webpack_require__(35456));
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["className", "slots", "slotProps", "direction", "orientation", "disabled"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const useUtilityClasses = ownerState => {
  const {
    classes,
    orientation,
    disabled
  } = ownerState;
  const slots = {
    root: ['root', orientation, disabled && 'disabled']
  };
  return (0, _base.unstable_composeClasses)(slots, _tabScrollButtonClasses.getTabScrollButtonUtilityClass, classes);
};
const TabScrollButtonRoot = (0, _styled.default)(_ButtonBase.default, {
  name: 'MuiTabScrollButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.orientation && styles[ownerState.orientation]];
  }
})(({
  ownerState
}) => (0, _extends2.default)({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${_tabScrollButtonClasses.default.disabled}`]: {
    opacity: 0
  }
}, ownerState.orientation === 'vertical' && {
  width: '100%',
  height: 40,
  '& svg': {
    transform: `rotate(${ownerState.isRtl ? -90 : 90}deg)`
  }
}));
const TabScrollButton = /*#__PURE__*/React.forwardRef(function TabScrollButton(inProps, ref) {
  var _slots$StartScrollBut, _slots$EndScrollButto;
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiTabScrollButton'
  });
  const {
      className,
      slots = {},
      slotProps = {},
      direction
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const theme = (0, _useTheme.default)();
  const isRtl = theme.direction === 'rtl';
  const ownerState = (0, _extends2.default)({
    isRtl
  }, props);
  const classes = useUtilityClasses(ownerState);
  const StartButtonIcon = (_slots$StartScrollBut = slots.StartScrollButtonIcon) != null ? _slots$StartScrollBut : _KeyboardArrowLeft.default;
  const EndButtonIcon = (_slots$EndScrollButto = slots.EndScrollButtonIcon) != null ? _slots$EndScrollButto : _KeyboardArrowRight.default;
  const startButtonIconProps = (0, _base.useSlotProps)({
    elementType: StartButtonIcon,
    externalSlotProps: slotProps.startScrollButtonIcon,
    additionalProps: {
      fontSize: 'small'
    },
    ownerState
  });
  const endButtonIconProps = (0, _base.useSlotProps)({
    elementType: EndButtonIcon,
    externalSlotProps: slotProps.endScrollButtonIcon,
    additionalProps: {
      fontSize: 'small'
    },
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TabScrollButtonRoot, (0, _extends2.default)({
    component: "div",
    className: (0, _clsx.default)(classes.root, className),
    ref: ref,
    role: null,
    ownerState: ownerState,
    tabIndex: null
  }, other, {
    children: direction === 'left' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(StartButtonIcon, (0, _extends2.default)({}, startButtonIconProps)) : /*#__PURE__*/(0, _jsxRuntime.jsx)(EndButtonIcon, (0, _extends2.default)({}, endButtonIconProps))
  }));
});
 false ? 0 : void 0;
var _default = exports["default"] = TabScrollButton;

/***/ }),

/***/ 62751:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  tabScrollButtonClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _TabScrollButton.default;
  }
}));
Object.defineProperty(exports, "tabScrollButtonClasses", ({
  enumerable: true,
  get: function () {
    return _tabScrollButtonClasses.default;
  }
}));
var _TabScrollButton = _interopRequireDefault(__webpack_require__(67355));
var _tabScrollButtonClasses = _interopRequireWildcard(__webpack_require__(35456));
Object.keys(_tabScrollButtonClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _tabScrollButtonClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tabScrollButtonClasses[key];
    }
  });
});
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }

/***/ }),

/***/ 35456:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getTabScrollButtonUtilityClass = getTabScrollButtonUtilityClass;
var _utils = __webpack_require__(44268);
var _generateUtilityClass = _interopRequireDefault(__webpack_require__(45058));
function getTabScrollButtonUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiTabScrollButton', slot);
}
const tabScrollButtonClasses = (0, _utils.unstable_generateUtilityClasses)('MuiTabScrollButton', ['root', 'vertical', 'horizontal', 'disabled']);
var _default = exports["default"] = tabScrollButtonClasses;

/***/ }),

/***/ 34891:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ScrollbarSize;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _debounce = _interopRequireDefault(__webpack_require__(16681));
var _utils = __webpack_require__(29207);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["onChange"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const styles = {
  width: 99,
  height: 99,
  position: 'absolute',
  top: -9999,
  overflow: 'scroll'
};

/**
 * @ignore - internal component.
 * The component originates from https://github.com/STORIS/react-scrollbar-size.
 * It has been moved into the core in order to minimize the bundle size.
 */
function ScrollbarSize(props) {
  const {
      onChange
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const scrollbarHeight = React.useRef();
  const nodeRef = React.useRef(null);
  const setMeasurements = () => {
    scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
  };
  (0, _utils.unstable_useEnhancedEffect)(() => {
    const handleResize = (0, _debounce.default)(() => {
      const prevHeight = scrollbarHeight.current;
      setMeasurements();
      if (prevHeight !== scrollbarHeight.current) {
        onChange(scrollbarHeight.current);
      }
    });
    const containerWindow = (0, _utils.ownerWindow)(nodeRef.current);
    containerWindow.addEventListener('resize', handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener('resize', handleResize);
    };
  }, [onChange]);
  React.useEffect(() => {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2.default)({
    style: styles,
    ref: nodeRef
  }, other));
}
 false ? 0 : void 0;

/***/ }),

/***/ 18947:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _reactIs = __webpack_require__(60129);
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _clsx = _interopRequireDefault(__webpack_require__(80391));
var _utils = __webpack_require__(44268);
var _base = __webpack_require__(93832);
var _styled = _interopRequireDefault(__webpack_require__(76276));
var _useThemeProps = _interopRequireDefault(__webpack_require__(54061));
var _useTheme = _interopRequireDefault(__webpack_require__(48650));
var _debounce = _interopRequireDefault(__webpack_require__(16681));
var _scrollLeft = __webpack_require__(39487);
var _animate = _interopRequireDefault(__webpack_require__(7783));
var _ScrollbarSize = _interopRequireDefault(__webpack_require__(34891));
var _TabScrollButton = _interopRequireDefault(__webpack_require__(62751));
var _useEventCallback = _interopRequireDefault(__webpack_require__(96328));
var _tabsClasses = _interopRequireWildcard(__webpack_require__(95862));
var _ownerDocument = _interopRequireDefault(__webpack_require__(95932));
var _ownerWindow = _interopRequireDefault(__webpack_require__(48924));
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const nextItem = (list, item) => {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return list.firstChild;
};
const previousItem = (list, item) => {
  if (list === item) {
    return list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return list.lastChild;
};
const moveFocus = (list, currentFocus, traversalFunction) => {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus);
  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }
      wrappedOnce = true;
    }

    // Same logic as useAutocomplete.js
    const nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';
    if (!nextFocus.hasAttribute('tabindex') || nextFocusDisabled) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus);
    } else {
      nextFocus.focus();
      return;
    }
  }
};
const useUtilityClasses = ownerState => {
  const {
    vertical,
    fixed,
    hideScrollbar,
    scrollableX,
    scrollableY,
    centered,
    scrollButtonsHideMobile,
    classes
  } = ownerState;
  const slots = {
    root: ['root', vertical && 'vertical'],
    scroller: ['scroller', fixed && 'fixed', hideScrollbar && 'hideScrollbar', scrollableX && 'scrollableX', scrollableY && 'scrollableY'],
    flexContainer: ['flexContainer', vertical && 'flexContainerVertical', centered && 'centered'],
    indicator: ['indicator'],
    scrollButtons: ['scrollButtons', scrollButtonsHideMobile && 'scrollButtonsHideMobile'],
    scrollableX: [scrollableX && 'scrollableX'],
    hideScrollbar: [hideScrollbar && 'hideScrollbar']
  };
  return (0, _base.unstable_composeClasses)(slots, _tabsClasses.getTabsUtilityClass, classes);
};
const TabsRoot = (0, _styled.default)('div', {
  name: 'MuiTabs',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${_tabsClasses.default.scrollButtons}`]: styles.scrollButtons
    }, {
      [`& .${_tabsClasses.default.scrollButtons}`]: ownerState.scrollButtonsHideMobile && styles.scrollButtonsHideMobile
    }, styles.root, ownerState.vertical && styles.vertical];
  }
})(({
  ownerState,
  theme
}) => (0, _extends2.default)({
  overflow: 'hidden',
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: 'touch',
  display: 'flex'
}, ownerState.vertical && {
  flexDirection: 'column'
}, ownerState.scrollButtonsHideMobile && {
  [`& .${_tabsClasses.default.scrollButtons}`]: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));
const TabsScroller = (0, _styled.default)('div', {
  name: 'MuiTabs',
  slot: 'Scroller',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.scroller, ownerState.fixed && styles.fixed, ownerState.hideScrollbar && styles.hideScrollbar, ownerState.scrollableX && styles.scrollableX, ownerState.scrollableY && styles.scrollableY];
  }
})(({
  ownerState
}) => (0, _extends2.default)({
  position: 'relative',
  display: 'inline-block',
  flex: '1 1 auto',
  whiteSpace: 'nowrap'
}, ownerState.fixed && {
  overflowX: 'hidden',
  width: '100%'
}, ownerState.hideScrollbar && {
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: 'none',
  // Firefox
  '&::-webkit-scrollbar': {
    display: 'none' // Safari + Chrome
  }
}, ownerState.scrollableX && {
  overflowX: 'auto',
  overflowY: 'hidden'
}, ownerState.scrollableY && {
  overflowY: 'auto',
  overflowX: 'hidden'
}));
const FlexContainer = (0, _styled.default)('div', {
  name: 'MuiTabs',
  slot: 'FlexContainer',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.flexContainer, ownerState.vertical && styles.flexContainerVertical, ownerState.centered && styles.centered];
  }
})(({
  ownerState
}) => (0, _extends2.default)({
  display: 'flex'
}, ownerState.vertical && {
  flexDirection: 'column'
}, ownerState.centered && {
  justifyContent: 'center'
}));
const TabsIndicator = (0, _styled.default)('span', {
  name: 'MuiTabs',
  slot: 'Indicator',
  overridesResolver: (props, styles) => styles.indicator
})(({
  ownerState,
  theme
}) => (0, _extends2.default)({
  position: 'absolute',
  height: 2,
  bottom: 0,
  width: '100%',
  transition: theme.transitions.create()
}, ownerState.indicatorColor === 'primary' && {
  backgroundColor: (theme.vars || theme).palette.primary.main
}, ownerState.indicatorColor === 'secondary' && {
  backgroundColor: (theme.vars || theme).palette.secondary.main
}, ownerState.vertical && {
  height: '100%',
  width: 2,
  right: 0
}));
const TabsScrollbarSize = (0, _styled.default)(_ScrollbarSize.default)({
  overflowX: 'auto',
  overflowY: 'hidden',
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: 'none',
  // Firefox
  '&::-webkit-scrollbar': {
    display: 'none' // Safari + Chrome
  }
});

const defaultIndicatorStyle = {};
let warnedOnceTabPresent = false;
const Tabs = /*#__PURE__*/React.forwardRef(function Tabs(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiTabs'
  });
  const theme = (0, _useTheme.default)();
  const isRtl = theme.direction === 'rtl';
  const {
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      action,
      centered = false,
      children: childrenProp,
      className,
      component = 'div',
      allowScrollButtonsMobile = false,
      indicatorColor = 'primary',
      onChange,
      orientation = 'horizontal',
      ScrollButtonComponent = _TabScrollButton.default,
      scrollButtons = 'auto',
      selectionFollowsFocus,
      slots = {},
      slotProps = {},
      TabIndicatorProps = {},
      TabScrollButtonProps = {},
      textColor = 'primary',
      value,
      variant = 'standard',
      visibleScrollbar = false
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const scrollable = variant === 'scrollable';
  const vertical = orientation === 'vertical';
  const scrollStart = vertical ? 'scrollTop' : 'scrollLeft';
  const start = vertical ? 'top' : 'left';
  const end = vertical ? 'bottom' : 'right';
  const clientSize = vertical ? 'clientHeight' : 'clientWidth';
  const size = vertical ? 'height' : 'width';
  const ownerState = (0, _extends2.default)({}, props, {
    component,
    allowScrollButtonsMobile,
    indicatorColor,
    orientation,
    vertical,
    scrollButtons,
    textColor,
    variant,
    visibleScrollbar,
    fixed: !scrollable,
    hideScrollbar: scrollable && !visibleScrollbar,
    scrollableX: scrollable && !vertical,
    scrollableY: scrollable && vertical,
    centered: centered && !scrollable,
    scrollButtonsHideMobile: !allowScrollButtonsMobile
  });
  const classes = useUtilityClasses(ownerState);
  const startScrollButtonIconProps = (0, _base.useSlotProps)({
    elementType: slots.StartScrollButtonIcon,
    externalSlotProps: slotProps.startScrollButtonIcon,
    ownerState
  });
  const endScrollButtonIconProps = (0, _base.useSlotProps)({
    elementType: slots.EndScrollButtonIcon,
    externalSlotProps: slotProps.endScrollButtonIcon,
    ownerState
  });
  if (false) {}
  const [mounted, setMounted] = React.useState(false);
  const [indicatorStyle, setIndicatorStyle] = React.useState(defaultIndicatorStyle);
  const [displayStartScroll, setDisplayStartScroll] = React.useState(false);
  const [displayEndScroll, setDisplayEndScroll] = React.useState(false);
  const [updateScrollObserver, setUpdateScrollObserver] = React.useState(false);
  const [scrollerStyle, setScrollerStyle] = React.useState({
    overflow: 'hidden',
    scrollbarWidth: 0
  });
  const valueToIndex = new Map();
  const tabsRef = React.useRef(null);
  const tabListRef = React.useRef(null);
  const getTabsMeta = () => {
    const tabsNode = tabsRef.current;
    let tabsMeta;
    if (tabsNode) {
      const rect = tabsNode.getBoundingClientRect();
      // create a new object with ClientRect class props + scrollLeft
      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollLeftNormalized: (0, _scrollLeft.getNormalizedScrollLeft)(tabsNode, theme.direction),
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right
      };
    }
    let tabMeta;
    if (tabsNode && value !== false) {
      const children = tabListRef.current.children;
      if (children.length > 0) {
        const tab = children[valueToIndex.get(value)];
        if (false) {}
        tabMeta = tab ? tab.getBoundingClientRect() : null;
        if (false) {}
      }
    }
    return {
      tabsMeta,
      tabMeta
    };
  };
  const updateIndicatorState = (0, _useEventCallback.default)(() => {
    const {
      tabsMeta,
      tabMeta
    } = getTabsMeta();
    let startValue = 0;
    let startIndicator;
    if (vertical) {
      startIndicator = 'top';
      if (tabMeta && tabsMeta) {
        startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
      }
    } else {
      startIndicator = isRtl ? 'right' : 'left';
      if (tabMeta && tabsMeta) {
        const correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
        startValue = (isRtl ? -1 : 1) * (tabMeta[startIndicator] - tabsMeta[startIndicator] + correction);
      }
    }
    const newIndicatorStyle = {
      [startIndicator]: startValue,
      // May be wrong until the font is loaded.
      [size]: tabMeta ? tabMeta[size] : 0
    };

    // IE11 support, replace with Number.isNaN
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(indicatorStyle[startIndicator]) || isNaN(indicatorStyle[size])) {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      const dStart = Math.abs(indicatorStyle[startIndicator] - newIndicatorStyle[startIndicator]);
      const dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);
      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });
  const scroll = (scrollValue, {
    animation = true
  } = {}) => {
    if (animation) {
      (0, _animate.default)(scrollStart, tabsRef.current, scrollValue, {
        duration: theme.transitions.duration.standard
      });
    } else {
      tabsRef.current[scrollStart] = scrollValue;
    }
  };
  const moveTabsScroll = delta => {
    let scrollValue = tabsRef.current[scrollStart];
    if (vertical) {
      scrollValue += delta;
    } else {
      scrollValue += delta * (isRtl ? -1 : 1);
      // Fix for Edge
      scrollValue *= isRtl && (0, _scrollLeft.detectScrollType)() === 'reverse' ? -1 : 1;
    }
    scroll(scrollValue);
  };
  const getScrollSize = () => {
    const containerSize = tabsRef.current[clientSize];
    let totalSize = 0;
    const children = Array.from(tabListRef.current.children);
    for (let i = 0; i < children.length; i += 1) {
      const tab = children[i];
      if (totalSize + tab[clientSize] > containerSize) {
        // If the first item is longer than the container size, then only scroll
        // by the container size.
        if (i === 0) {
          totalSize = containerSize;
        }
        break;
      }
      totalSize += tab[clientSize];
    }
    return totalSize;
  };
  const handleStartScrollClick = () => {
    moveTabsScroll(-1 * getScrollSize());
  };
  const handleEndScrollClick = () => {
    moveTabsScroll(getScrollSize());
  };

  // TODO Remove <ScrollbarSize /> as browser support for hiding the scrollbar
  // with CSS improves.
  const handleScrollbarSizeChange = React.useCallback(scrollbarWidth => {
    setScrollerStyle({
      overflow: null,
      scrollbarWidth
    });
  }, []);
  const getConditionalElements = () => {
    const conditionalElements = {};
    conditionalElements.scrollbarSizeListener = scrollable ? /*#__PURE__*/(0, _jsxRuntime.jsx)(TabsScrollbarSize, {
      onChange: handleScrollbarSizeChange,
      className: (0, _clsx.default)(classes.scrollableX, classes.hideScrollbar)
    }) : null;
    const scrollButtonsActive = displayStartScroll || displayEndScroll;
    const showScrollButtons = scrollable && (scrollButtons === 'auto' && scrollButtonsActive || scrollButtons === true);
    conditionalElements.scrollButtonStart = showScrollButtons ? /*#__PURE__*/(0, _jsxRuntime.jsx)(ScrollButtonComponent, (0, _extends2.default)({
      slots: {
        StartScrollButtonIcon: slots.StartScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: startScrollButtonIconProps
      },
      orientation: orientation,
      direction: isRtl ? 'right' : 'left',
      onClick: handleStartScrollClick,
      disabled: !displayStartScroll
    }, TabScrollButtonProps, {
      className: (0, _clsx.default)(classes.scrollButtons, TabScrollButtonProps.className)
    })) : null;
    conditionalElements.scrollButtonEnd = showScrollButtons ? /*#__PURE__*/(0, _jsxRuntime.jsx)(ScrollButtonComponent, (0, _extends2.default)({
      slots: {
        EndScrollButtonIcon: slots.EndScrollButtonIcon
      },
      slotProps: {
        endScrollButtonIcon: endScrollButtonIconProps
      },
      orientation: orientation,
      direction: isRtl ? 'left' : 'right',
      onClick: handleEndScrollClick,
      disabled: !displayEndScroll
    }, TabScrollButtonProps, {
      className: (0, _clsx.default)(classes.scrollButtons, TabScrollButtonProps.className)
    })) : null;
    return conditionalElements;
  };
  const scrollSelectedIntoView = (0, _useEventCallback.default)(animation => {
    const {
      tabsMeta,
      tabMeta
    } = getTabsMeta();
    if (!tabMeta || !tabsMeta) {
      return;
    }
    if (tabMeta[start] < tabsMeta[start]) {
      // left side of button is out of view
      const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
      scroll(nextScrollStart, {
        animation
      });
    } else if (tabMeta[end] > tabsMeta[end]) {
      // right side of button is out of view
      const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
      scroll(nextScrollStart, {
        animation
      });
    }
  });
  const updateScrollButtonState = (0, _useEventCallback.default)(() => {
    if (scrollable && scrollButtons !== false) {
      setUpdateScrollObserver(!updateScrollObserver);
    }
  });
  React.useEffect(() => {
    const handleResize = (0, _debounce.default)(() => {
      // If the Tabs component is replaced by Suspense with a fallback, the last
      // ResizeObserver's handler that runs because of the change in the layout is trying to
      // access a dom node that is no longer there (as the fallback component is being shown instead).
      // See https://github.com/mui/material-ui/issues/33276
      // TODO: Add tests that will ensure the component is not failing when
      // replaced by Suspense with a fallback, once React is updated to version 18
      if (tabsRef.current) {
        updateIndicatorState();
      }
    });
    let resizeObserver;

    /**
     * @type {MutationCallback}
     */
    const handleMutation = records => {
      records.forEach(record => {
        record.removedNodes.forEach(item => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.unobserve(item);
        });
        record.addedNodes.forEach(item => {
          var _resizeObserver2;
          (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.observe(item);
        });
      });
      handleResize();
      updateScrollButtonState();
    };
    const win = (0, _ownerWindow.default)(tabsRef.current);
    win.addEventListener('resize', handleResize);
    let mutationObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(handleResize);
      Array.from(tabListRef.current.children).forEach(child => {
        resizeObserver.observe(child);
      });
    }
    if (typeof MutationObserver !== 'undefined') {
      mutationObserver = new MutationObserver(handleMutation);
      mutationObserver.observe(tabListRef.current, {
        childList: true
      });
    }
    return () => {
      var _mutationObserver, _resizeObserver3;
      handleResize.clear();
      win.removeEventListener('resize', handleResize);
      (_mutationObserver = mutationObserver) == null || _mutationObserver.disconnect();
      (_resizeObserver3 = resizeObserver) == null || _resizeObserver3.disconnect();
    };
  }, [updateIndicatorState, updateScrollButtonState]);

  /**
   * Toggle visibility of start and end scroll buttons
   * Using IntersectionObserver on first and last Tabs.
   */
  React.useEffect(() => {
    const tabListChildren = Array.from(tabListRef.current.children);
    const length = tabListChildren.length;
    if (typeof IntersectionObserver !== 'undefined' && length > 0 && scrollable && scrollButtons !== false) {
      const firstTab = tabListChildren[0];
      const lastTab = tabListChildren[length - 1];
      const observerOptions = {
        root: tabsRef.current,
        threshold: 0.99
      };
      const handleScrollButtonStart = entries => {
        setDisplayStartScroll(!entries[0].isIntersecting);
      };
      const firstObserver = new IntersectionObserver(handleScrollButtonStart, observerOptions);
      firstObserver.observe(firstTab);
      const handleScrollButtonEnd = entries => {
        setDisplayEndScroll(!entries[0].isIntersecting);
      };
      const lastObserver = new IntersectionObserver(handleScrollButtonEnd, observerOptions);
      lastObserver.observe(lastTab);
      return () => {
        firstObserver.disconnect();
        lastObserver.disconnect();
      };
    }
    return undefined;
  }, [scrollable, scrollButtons, updateScrollObserver, childrenProp == null ? void 0 : childrenProp.length]);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  React.useEffect(() => {
    updateIndicatorState();
  });
  React.useEffect(() => {
    // Don't animate on the first render.
    scrollSelectedIntoView(defaultIndicatorStyle !== indicatorStyle);
  }, [scrollSelectedIntoView, indicatorStyle]);
  React.useImperativeHandle(action, () => ({
    updateIndicator: updateIndicatorState,
    updateScrollButtons: updateScrollButtonState
  }), [updateIndicatorState, updateScrollButtonState]);
  const indicator = /*#__PURE__*/(0, _jsxRuntime.jsx)(TabsIndicator, (0, _extends2.default)({}, TabIndicatorProps, {
    className: (0, _clsx.default)(classes.indicator, TabIndicatorProps.className),
    ownerState: ownerState,
    style: (0, _extends2.default)({}, indicatorStyle, TabIndicatorProps.style)
  }));
  let childIndex = 0;
  const children = React.Children.map(childrenProp, child => {
    if (! /*#__PURE__*/React.isValidElement(child)) {
      return null;
    }
    if (false) {}
    const childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    const selected = childValue === value;
    childIndex += 1;
    return /*#__PURE__*/React.cloneElement(child, (0, _extends2.default)({
      fullWidth: variant === 'fullWidth',
      indicator: selected && !mounted && indicator,
      selected,
      selectionFollowsFocus,
      onChange,
      textColor,
      value: childValue
    }, childIndex === 1 && value === false && !child.props.tabIndex ? {
      tabIndex: 0
    } : {}));
  });
  const handleKeyDown = event => {
    const list = tabListRef.current;
    const currentFocus = (0, _ownerDocument.default)(list).activeElement;
    // Keyboard navigation assumes that [role="tab"] are siblings
    // though we might warn in the future about nested, interactive elements
    // as a a11y violation
    const role = currentFocus.getAttribute('role');
    if (role !== 'tab') {
      return;
    }
    let previousItemKey = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
    let nextItemKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';
    if (orientation === 'horizontal' && isRtl) {
      // swap previousItemKey with nextItemKey
      previousItemKey = 'ArrowRight';
      nextItemKey = 'ArrowLeft';
    }
    switch (event.key) {
      case previousItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, previousItem);
        break;
      case nextItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, nextItem);
        break;
      case 'Home':
        event.preventDefault();
        moveFocus(list, null, nextItem);
        break;
      case 'End':
        event.preventDefault();
        moveFocus(list, null, previousItem);
        break;
      default:
        break;
    }
  };
  const conditionalElements = getConditionalElements();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(TabsRoot, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState,
    ref: ref,
    as: component
  }, other, {
    children: [conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, /*#__PURE__*/(0, _jsxRuntime.jsxs)(TabsScroller, {
      className: classes.scroller,
      ownerState: ownerState,
      style: {
        overflow: scrollerStyle.overflow,
        [vertical ? `margin${isRtl ? 'Left' : 'Right'}` : 'marginBottom']: visibleScrollbar ? undefined : -scrollerStyle.scrollbarWidth
      },
      ref: tabsRef,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(FlexContainer, {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-orientation": orientation === 'vertical' ? 'vertical' : null,
        className: classes.flexContainer,
        ownerState: ownerState,
        onKeyDown: handleKeyDown,
        ref: tabListRef,
        role: "tablist",
        children: children
      }), mounted && indicator]
    }), conditionalElements.scrollButtonEnd]
  }));
});
 false ? 0 : void 0;
var _default = exports["default"] = Tabs;

/***/ }),

/***/ 87726:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  tabsClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _Tabs.default;
  }
}));
Object.defineProperty(exports, "tabsClasses", ({
  enumerable: true,
  get: function () {
    return _tabsClasses.default;
  }
}));
var _Tabs = _interopRequireDefault(__webpack_require__(18947));
var _tabsClasses = _interopRequireWildcard(__webpack_require__(95862));
Object.keys(_tabsClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _tabsClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tabsClasses[key];
    }
  });
});
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }

/***/ }),

/***/ 95862:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getTabsUtilityClass = getTabsUtilityClass;
var _utils = __webpack_require__(44268);
var _generateUtilityClass = _interopRequireDefault(__webpack_require__(45058));
function getTabsUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiTabs', slot);
}
const tabsClasses = (0, _utils.unstable_generateUtilityClasses)('MuiTabs', ['root', 'vertical', 'flexContainer', 'flexContainerVertical', 'centered', 'scroller', 'fixed', 'scrollableX', 'scrollableY', 'hideScrollbar', 'scrollButtons', 'scrollButtonsHideMobile', 'indicator']);
var _default = exports["default"] = tabsClasses;

/***/ }),

/***/ 23014:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "unstable_ClassNameGenerator", ({
  enumerable: true,
  get: function () {
    return _utils.unstable_ClassNameGenerator;
  }
}));
var _utils = __webpack_require__(44268);

/***/ }),

/***/ 83654:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _utils.unstable_generateUtilityClasses;
  }
}));
var _utils = __webpack_require__(44268);

/***/ }),

/***/ 7783:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = animate;
function easeInOutSin(time) {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}
function animate(property, element, to, options = {}, cb = () => {}) {
  const {
    ease = easeInOutSin,
    duration = 300 // standard
  } = options;
  let start = null;
  const from = element[property];
  let cancelled = false;
  const cancel = () => {
    cancelled = true;
  };
  const step = timestamp => {
    if (cancelled) {
      cb(new Error('Animation cancelled'));
      return;
    }
    if (start === null) {
      start = timestamp;
    }
    const time = Math.min(1, (timestamp - start) / duration);
    element[property] = ease(time) * (to - from) + from;
    if (time >= 1) {
      requestAnimationFrame(() => {
        cb(null);
      });
      return;
    }
    requestAnimationFrame(step);
  };
  if (from === to) {
    cb(new Error('Element already at target position'));
    return cancel;
  }
  requestAnimationFrame(step);
  return cancel;
}

/***/ }),

/***/ 92716:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _createSvgIcon = _interopRequireDefault(__webpack_require__(39537));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * @ignore - internal component.
 */
var _default = exports["default"] = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), 'KeyboardArrowLeft');

/***/ }),

/***/ 13473:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _createSvgIcon = _interopRequireDefault(__webpack_require__(39537));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * @ignore - internal component.
 */
var _default = exports["default"] = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), 'KeyboardArrowRight');

/***/ }),

/***/ 85013:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useColorScheme = exports.getInitColorSchemeScript = exports.Experimental_CssVarsProvider = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _system = __webpack_require__(19659);
var _experimental_extendTheme = _interopRequireDefault(__webpack_require__(12732));
var _createTypography = _interopRequireDefault(__webpack_require__(44371));
var _excludeVariablesFromRoot = _interopRequireDefault(__webpack_require__(85570));
var _identifier = _interopRequireDefault(__webpack_require__(67421));
const defaultTheme = (0, _experimental_extendTheme.default)();
const {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript
} = (0, _system.unstable_createCssVarsProvider)({
  themeId: _identifier.default,
  theme: defaultTheme,
  attribute: 'data-mui-color-scheme',
  modeStorageKey: 'mui-mode',
  colorSchemeStorageKey: 'mui-color-scheme',
  defaultColorScheme: {
    light: 'light',
    dark: 'dark'
  },
  resolveTheme: theme => {
    const newTheme = (0, _extends2.default)({}, theme, {
      typography: (0, _createTypography.default)(theme.palette, theme.typography)
    });
    newTheme.unstable_sx = function sx(props) {
      return (0, _system.unstable_styleFunctionSx)({
        sx: props,
        theme: this
      });
    };
    return newTheme;
  },
  excludeVariablesFromRoot: _excludeVariablesFromRoot.default
});
exports.getInitColorSchemeScript = getInitColorSchemeScript;
exports.useColorScheme = useColorScheme;
exports.Experimental_CssVarsProvider = CssVarsProvider;

/***/ }),

/***/ 98708:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ThemeProvider;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _system = __webpack_require__(19659);
var _identifier = _interopRequireDefault(__webpack_require__(67421));
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["theme"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ThemeProvider(_ref) {
  let {
      theme: themeInput
    } = _ref,
    props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  const scopedTheme = themeInput[_identifier.default];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_system.ThemeProvider, (0, _extends2.default)({}, props, {
    themeId: scopedTheme ? _identifier.default : undefined,
    theme: scopedTheme || themeInput
  }));
}
 false ? 0 : void 0;

/***/ }),

/***/ 26250:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = adaptV4Theme;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _system = __webpack_require__(19659);
const _excluded = ["defaultProps", "mixins", "overrides", "palette", "props", "styleOverrides"],
  _excluded2 = ["type", "mode"];
function adaptV4Theme(inputTheme) {
  if (false) {}
  const {
      defaultProps = {},
      mixins = {},
      overrides = {},
      palette = {},
      props = {},
      styleOverrides = {}
    } = inputTheme,
    other = (0, _objectWithoutPropertiesLoose2.default)(inputTheme, _excluded);
  const theme = (0, _extends2.default)({}, other, {
    components: {}
  });

  // default props
  Object.keys(defaultProps).forEach(component => {
    const componentValue = theme.components[component] || {};
    componentValue.defaultProps = defaultProps[component];
    theme.components[component] = componentValue;
  });
  Object.keys(props).forEach(component => {
    const componentValue = theme.components[component] || {};
    componentValue.defaultProps = props[component];
    theme.components[component] = componentValue;
  });

  // CSS overrides
  Object.keys(styleOverrides).forEach(component => {
    const componentValue = theme.components[component] || {};
    componentValue.styleOverrides = styleOverrides[component];
    theme.components[component] = componentValue;
  });
  Object.keys(overrides).forEach(component => {
    const componentValue = theme.components[component] || {};
    componentValue.styleOverrides = overrides[component];
    theme.components[component] = componentValue;
  });

  // theme.spacing
  theme.spacing = (0, _system.createSpacing)(inputTheme.spacing);

  // theme.mixins.gutters
  const breakpoints = (0, _system.createBreakpoints)(inputTheme.breakpoints || {});
  const spacing = theme.spacing;
  theme.mixins = (0, _extends2.default)({
    gutters: (styles = {}) => {
      return (0, _extends2.default)({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, {
        [breakpoints.up('sm')]: (0, _extends2.default)({
          paddingLeft: spacing(3),
          paddingRight: spacing(3)
        }, styles[breakpoints.up('sm')])
      });
    }
  }, mixins);
  const {
      type: typeInput,
      mode: modeInput
    } = palette,
    paletteRest = (0, _objectWithoutPropertiesLoose2.default)(palette, _excluded2);
  const finalMode = modeInput || typeInput || 'light';
  theme.palette = (0, _extends2.default)({
    // theme.palette.text.hint
    text: {
      hint: finalMode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.38)'
    },
    mode: finalMode,
    type: finalMode
  }, paletteRest);
  return theme;
}

/***/ }),

/***/ 79035:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = createMuiStrictModeTheme;
var _utils = __webpack_require__(44268);
var _createTheme = _interopRequireDefault(__webpack_require__(9634));
function createMuiStrictModeTheme(options, ...args) {
  return (0, _createTheme.default)((0, _utils.deepmerge)({
    unstable_strictMode: true
  }, options), ...args);
}

/***/ }),

/***/ 12956:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = createStyles;
let warnedOnce = false;

// To remove in v6
function createStyles(styles) {
  if (!warnedOnce) {
    console.warn(['MUI: createStyles from @mui/material/styles is deprecated.', 'Please use @mui/styles/createStyles'].join('\n'));
    warnedOnce = true;
  }
  return styles;
}

/***/ }),

/***/ 40553:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.alignProperty = alignProperty;
exports.convertLength = convertLength;
exports.fontGrid = fontGrid;
exports.getUnit = getUnit;
exports.isUnitless = isUnitless;
exports.responsiveProperty = responsiveProperty;
exports.toUnitless = toUnitless;
function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
}

// Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"
function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
}

// Emulate the sass function "unitless"
function toUnitless(length) {
  return parseFloat(length);
}

// Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length
function convertLength(baseFontSize) {
  return (length, toUnit) => {
    const fromUnit = getUnit(length);

    // Optimize for cases where `from` and `to` units are accidentally the same.
    if (fromUnit === toUnit) {
      return length;
    }

    // Convert input length to pixels.
    let pxLength = toUnitless(length);
    if (fromUnit !== 'px') {
      if (fromUnit === 'em') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === 'rem') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      }
    }

    // Convert length in pixels to the output unit
    let outputLength = pxLength;
    if (toUnit !== 'px') {
      if (toUnit === 'em') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === 'rem') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }
    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty({
  size,
  grid
}) {
  const sizeBelow = size - size % grid;
  const sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
}

// fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height
function fontGrid({
  lineHeight,
  pixels,
  htmlFontSize
}) {
  return pixels / (lineHeight * htmlFontSize);
}

/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */
function responsiveProperty({
  cssProperty,
  min,
  max,
  unit = 'rem',
  breakpoints = [600, 900, 1200],
  transform = null
}) {
  const output = {
    [cssProperty]: `${min}${unit}`
  };
  const factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(breakpoint => {
    let value = min + factor * breakpoint;
    if (transform !== null) {
      value = transform(value);
    }
    output[`@media (min-width:${breakpoint}px)`] = {
      [cssProperty]: `${Math.round(value * 10000) / 10000}${unit}`
    };
  });
  return output;
}

/***/ }),

/***/ 85570:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/**
 * @internal These variables should not appear in the :root stylesheet when the `defaultMode="dark"`
 */
const excludeVariablesFromRoot = cssVarPrefix => [...[...Array(24)].map((_, index) => `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}overlays-${index + 1}`), `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}palette-AppBar-darkBg`, `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}palette-AppBar-darkColor`];
var _default = exports["default"] = excludeVariablesFromRoot;

/***/ }),

/***/ 12732:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createGetCssVar = void 0;
exports["default"] = extendTheme;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _utils = __webpack_require__(44268);
var _system = __webpack_require__(19659);
var _shouldSkipGeneratingVar = _interopRequireDefault(__webpack_require__(51351));
var _createTheme = _interopRequireDefault(__webpack_require__(9634));
var _getOverlayAlpha = _interopRequireDefault(__webpack_require__(26181));
const _excluded = ["colorSchemes", "cssVarPrefix", "shouldSkipGeneratingVar"],
  _excluded2 = ["palette"];
const defaultDarkOverlays = [...Array(25)].map((_, index) => {
  if (index === 0) {
    return undefined;
  }
  const overlay = (0, _getOverlayAlpha.default)(index);
  return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
});
function assignNode(obj, keys) {
  keys.forEach(k => {
    if (!obj[k]) {
      obj[k] = {};
    }
  });
}
function setColor(obj, key, defaultValue) {
  if (!obj[key] && defaultValue) {
    obj[key] = defaultValue;
  }
}
function setColorChannel(obj, key) {
  if (!(`${key}Channel` in obj)) {
    // custom channel token is not provided, generate one.
    // if channel token can't be generated, show a warning.
    obj[`${key}Channel`] = (0, _system.private_safeColorChannel)(obj[key], `MUI: Can't create \`palette.${key}Channel\` because \`palette.${key}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` + '\n' + `To suppress this warning, you need to explicitly provide the \`palette.${key}Channel\` as a string (in rgb format, e.g. "12 12 12") or undefined if you want to remove the channel token.`);
  }
}
const silent = fn => {
  try {
    return fn();
  } catch (error) {
    // ignore error
  }
  return undefined;
};
const createGetCssVar = (cssVarPrefix = 'mui') => (0, _system.unstable_createGetCssVar)(cssVarPrefix);
exports.createGetCssVar = createGetCssVar;
function extendTheme(options = {}, ...args) {
  var _colorSchemesInput$li, _colorSchemesInput$da, _colorSchemesInput$li2, _colorSchemesInput$li3, _colorSchemesInput$da2, _colorSchemesInput$da3;
  const {
      colorSchemes: colorSchemesInput = {},
      cssVarPrefix = 'mui',
      shouldSkipGeneratingVar = _shouldSkipGeneratingVar.default
    } = options,
    input = (0, _objectWithoutPropertiesLoose2.default)(options, _excluded);
  const getCssVar = createGetCssVar(cssVarPrefix);
  const _createThemeWithoutVa = (0, _createTheme.default)((0, _extends2.default)({}, input, colorSchemesInput.light && {
      palette: (_colorSchemesInput$li = colorSchemesInput.light) == null ? void 0 : _colorSchemesInput$li.palette
    })),
    {
      palette: lightPalette
    } = _createThemeWithoutVa,
    muiTheme = (0, _objectWithoutPropertiesLoose2.default)(_createThemeWithoutVa, _excluded2);
  const {
    palette: darkPalette
  } = (0, _createTheme.default)({
    palette: (0, _extends2.default)({
      mode: 'dark'
    }, (_colorSchemesInput$da = colorSchemesInput.dark) == null ? void 0 : _colorSchemesInput$da.palette)
  });
  let theme = (0, _extends2.default)({}, muiTheme, {
    cssVarPrefix,
    getCssVar,
    colorSchemes: (0, _extends2.default)({}, colorSchemesInput, {
      light: (0, _extends2.default)({}, colorSchemesInput.light, {
        palette: lightPalette,
        opacity: (0, _extends2.default)({
          inputPlaceholder: 0.42,
          inputUnderline: 0.42,
          switchTrackDisabled: 0.12,
          switchTrack: 0.38
        }, (_colorSchemesInput$li2 = colorSchemesInput.light) == null ? void 0 : _colorSchemesInput$li2.opacity),
        overlays: ((_colorSchemesInput$li3 = colorSchemesInput.light) == null ? void 0 : _colorSchemesInput$li3.overlays) || []
      }),
      dark: (0, _extends2.default)({}, colorSchemesInput.dark, {
        palette: darkPalette,
        opacity: (0, _extends2.default)({
          inputPlaceholder: 0.5,
          inputUnderline: 0.7,
          switchTrackDisabled: 0.2,
          switchTrack: 0.3
        }, (_colorSchemesInput$da2 = colorSchemesInput.dark) == null ? void 0 : _colorSchemesInput$da2.opacity),
        overlays: ((_colorSchemesInput$da3 = colorSchemesInput.dark) == null ? void 0 : _colorSchemesInput$da3.overlays) || defaultDarkOverlays
      })
    })
  });
  Object.keys(theme.colorSchemes).forEach(key => {
    const palette = theme.colorSchemes[key].palette;
    const setCssVarColor = cssVar => {
      const tokens = cssVar.split('-');
      const color = tokens[1];
      const colorToken = tokens[2];
      return getCssVar(cssVar, palette[color][colorToken]);
    };

    // attach black & white channels to common node
    if (key === 'light') {
      setColor(palette.common, 'background', '#fff');
      setColor(palette.common, 'onBackground', '#000');
    } else {
      setColor(palette.common, 'background', '#000');
      setColor(palette.common, 'onBackground', '#fff');
    }

    // assign component variables
    assignNode(palette, ['Alert', 'AppBar', 'Avatar', 'Button', 'Chip', 'FilledInput', 'LinearProgress', 'Skeleton', 'Slider', 'SnackbarContent', 'SpeedDialAction', 'StepConnector', 'StepContent', 'Switch', 'TableCell', 'Tooltip']);
    if (key === 'light') {
      setColor(palette.Alert, 'errorColor', (0, _system.private_safeDarken)(palette.error.light, 0.6));
      setColor(palette.Alert, 'infoColor', (0, _system.private_safeDarken)(palette.info.light, 0.6));
      setColor(palette.Alert, 'successColor', (0, _system.private_safeDarken)(palette.success.light, 0.6));
      setColor(palette.Alert, 'warningColor', (0, _system.private_safeDarken)(palette.warning.light, 0.6));
      setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-main'));
      setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-main'));
      setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-main'));
      setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-main'));
      setColor(palette.Alert, 'errorFilledColor', silent(() => lightPalette.getContrastText(palette.error.main)));
      setColor(palette.Alert, 'infoFilledColor', silent(() => lightPalette.getContrastText(palette.info.main)));
      setColor(palette.Alert, 'successFilledColor', silent(() => lightPalette.getContrastText(palette.success.main)));
      setColor(palette.Alert, 'warningFilledColor', silent(() => lightPalette.getContrastText(palette.warning.main)));
      setColor(palette.Alert, 'errorStandardBg', (0, _system.private_safeLighten)(palette.error.light, 0.9));
      setColor(palette.Alert, 'infoStandardBg', (0, _system.private_safeLighten)(palette.info.light, 0.9));
      setColor(palette.Alert, 'successStandardBg', (0, _system.private_safeLighten)(palette.success.light, 0.9));
      setColor(palette.Alert, 'warningStandardBg', (0, _system.private_safeLighten)(palette.warning.light, 0.9));
      setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
      setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
      setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
      setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
      setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-100'));
      setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-400'));
      setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-300'));
      setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-A100'));
      setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-400'));
      setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-700'));
      setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-700'));
      setColor(palette.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)');
      setColor(palette.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)');
      setColor(palette.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)');
      setColor(palette.LinearProgress, 'primaryBg', (0, _system.private_safeLighten)(palette.primary.main, 0.62));
      setColor(palette.LinearProgress, 'secondaryBg', (0, _system.private_safeLighten)(palette.secondary.main, 0.62));
      setColor(palette.LinearProgress, 'errorBg', (0, _system.private_safeLighten)(palette.error.main, 0.62));
      setColor(palette.LinearProgress, 'infoBg', (0, _system.private_safeLighten)(palette.info.main, 0.62));
      setColor(palette.LinearProgress, 'successBg', (0, _system.private_safeLighten)(palette.success.main, 0.62));
      setColor(palette.LinearProgress, 'warningBg', (0, _system.private_safeLighten)(palette.warning.main, 0.62));
      setColor(palette.Skeleton, 'bg', `rgba(${setCssVarColor('palette-text-primaryChannel')} / 0.11)`);
      setColor(palette.Slider, 'primaryTrack', (0, _system.private_safeLighten)(palette.primary.main, 0.62));
      setColor(palette.Slider, 'secondaryTrack', (0, _system.private_safeLighten)(palette.secondary.main, 0.62));
      setColor(palette.Slider, 'errorTrack', (0, _system.private_safeLighten)(palette.error.main, 0.62));
      setColor(palette.Slider, 'infoTrack', (0, _system.private_safeLighten)(palette.info.main, 0.62));
      setColor(palette.Slider, 'successTrack', (0, _system.private_safeLighten)(palette.success.main, 0.62));
      setColor(palette.Slider, 'warningTrack', (0, _system.private_safeLighten)(palette.warning.main, 0.62));
      const snackbarContentBackground = (0, _system.private_safeEmphasize)(palette.background.default, 0.8);
      setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
      setColor(palette.SnackbarContent, 'color', silent(() => lightPalette.getContrastText(snackbarContentBackground)));
      setColor(palette.SpeedDialAction, 'fabHoverBg', (0, _system.private_safeEmphasize)(palette.background.paper, 0.15));
      setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-400'));
      setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-400'));
      setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-common-white'));
      setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-100'));
      setColor(palette.Switch, 'primaryDisabledColor', (0, _system.private_safeLighten)(palette.primary.main, 0.62));
      setColor(palette.Switch, 'secondaryDisabledColor', (0, _system.private_safeLighten)(palette.secondary.main, 0.62));
      setColor(palette.Switch, 'errorDisabledColor', (0, _system.private_safeLighten)(palette.error.main, 0.62));
      setColor(palette.Switch, 'infoDisabledColor', (0, _system.private_safeLighten)(palette.info.main, 0.62));
      setColor(palette.Switch, 'successDisabledColor', (0, _system.private_safeLighten)(palette.success.main, 0.62));
      setColor(palette.Switch, 'warningDisabledColor', (0, _system.private_safeLighten)(palette.warning.main, 0.62));
      setColor(palette.TableCell, 'border', (0, _system.private_safeLighten)((0, _system.private_safeAlpha)(palette.divider, 1), 0.88));
      setColor(palette.Tooltip, 'bg', (0, _system.private_safeAlpha)(palette.grey[700], 0.92));
    } else {
      setColor(palette.Alert, 'errorColor', (0, _system.private_safeLighten)(palette.error.light, 0.6));
      setColor(palette.Alert, 'infoColor', (0, _system.private_safeLighten)(palette.info.light, 0.6));
      setColor(palette.Alert, 'successColor', (0, _system.private_safeLighten)(palette.success.light, 0.6));
      setColor(palette.Alert, 'warningColor', (0, _system.private_safeLighten)(palette.warning.light, 0.6));
      setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-dark'));
      setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-dark'));
      setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-dark'));
      setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-dark'));
      setColor(palette.Alert, 'errorFilledColor', silent(() => darkPalette.getContrastText(palette.error.dark)));
      setColor(palette.Alert, 'infoFilledColor', silent(() => darkPalette.getContrastText(palette.info.dark)));
      setColor(palette.Alert, 'successFilledColor', silent(() => darkPalette.getContrastText(palette.success.dark)));
      setColor(palette.Alert, 'warningFilledColor', silent(() => darkPalette.getContrastText(palette.warning.dark)));
      setColor(palette.Alert, 'errorStandardBg', (0, _system.private_safeDarken)(palette.error.light, 0.9));
      setColor(palette.Alert, 'infoStandardBg', (0, _system.private_safeDarken)(palette.info.light, 0.9));
      setColor(palette.Alert, 'successStandardBg', (0, _system.private_safeDarken)(palette.success.light, 0.9));
      setColor(palette.Alert, 'warningStandardBg', (0, _system.private_safeDarken)(palette.warning.light, 0.9));
      setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
      setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
      setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
      setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
      setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-900'));
      setColor(palette.AppBar, 'darkBg', setCssVarColor('palette-background-paper')); // specific for dark mode
      setColor(palette.AppBar, 'darkColor', setCssVarColor('palette-text-primary')); // specific for dark mode
      setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-600'));
      setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-800'));
      setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-700'));
      setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-700'));
      setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-300'));
      setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-300'));
      setColor(palette.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)');
      setColor(palette.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)');
      setColor(palette.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)');
      setColor(palette.LinearProgress, 'primaryBg', (0, _system.private_safeDarken)(palette.primary.main, 0.5));
      setColor(palette.LinearProgress, 'secondaryBg', (0, _system.private_safeDarken)(palette.secondary.main, 0.5));
      setColor(palette.LinearProgress, 'errorBg', (0, _system.private_safeDarken)(palette.error.main, 0.5));
      setColor(palette.LinearProgress, 'infoBg', (0, _system.private_safeDarken)(palette.info.main, 0.5));
      setColor(palette.LinearProgress, 'successBg', (0, _system.private_safeDarken)(palette.success.main, 0.5));
      setColor(palette.LinearProgress, 'warningBg', (0, _system.private_safeDarken)(palette.warning.main, 0.5));
      setColor(palette.Skeleton, 'bg', `rgba(${setCssVarColor('palette-text-primaryChannel')} / 0.13)`);
      setColor(palette.Slider, 'primaryTrack', (0, _system.private_safeDarken)(palette.primary.main, 0.5));
      setColor(palette.Slider, 'secondaryTrack', (0, _system.private_safeDarken)(palette.secondary.main, 0.5));
      setColor(palette.Slider, 'errorTrack', (0, _system.private_safeDarken)(palette.error.main, 0.5));
      setColor(palette.Slider, 'infoTrack', (0, _system.private_safeDarken)(palette.info.main, 0.5));
      setColor(palette.Slider, 'successTrack', (0, _system.private_safeDarken)(palette.success.main, 0.5));
      setColor(palette.Slider, 'warningTrack', (0, _system.private_safeDarken)(palette.warning.main, 0.5));
      const snackbarContentBackground = (0, _system.private_safeEmphasize)(palette.background.default, 0.98);
      setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
      setColor(palette.SnackbarContent, 'color', silent(() => darkPalette.getContrastText(snackbarContentBackground)));
      setColor(palette.SpeedDialAction, 'fabHoverBg', (0, _system.private_safeEmphasize)(palette.background.paper, 0.15));
      setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-600'));
      setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-600'));
      setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-grey-300'));
      setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-600'));
      setColor(palette.Switch, 'primaryDisabledColor', (0, _system.private_safeDarken)(palette.primary.main, 0.55));
      setColor(palette.Switch, 'secondaryDisabledColor', (0, _system.private_safeDarken)(palette.secondary.main, 0.55));
      setColor(palette.Switch, 'errorDisabledColor', (0, _system.private_safeDarken)(palette.error.main, 0.55));
      setColor(palette.Switch, 'infoDisabledColor', (0, _system.private_safeDarken)(palette.info.main, 0.55));
      setColor(palette.Switch, 'successDisabledColor', (0, _system.private_safeDarken)(palette.success.main, 0.55));
      setColor(palette.Switch, 'warningDisabledColor', (0, _system.private_safeDarken)(palette.warning.main, 0.55));
      setColor(palette.TableCell, 'border', (0, _system.private_safeDarken)((0, _system.private_safeAlpha)(palette.divider, 1), 0.68));
      setColor(palette.Tooltip, 'bg', (0, _system.private_safeAlpha)(palette.grey[700], 0.92));
    }

    // MUI X - DataGrid needs this token.
    setColorChannel(palette.background, 'default');
    setColorChannel(palette.common, 'background');
    setColorChannel(palette.common, 'onBackground');
    setColorChannel(palette, 'divider');
    Object.keys(palette).forEach(color => {
      const colors = palette[color];

      // The default palettes (primary, secondary, error, info, success, and warning) errors are handled by the above `createTheme(...)`.

      if (colors && typeof colors === 'object') {
        // Silent the error for custom palettes.
        if (colors.main) {
          setColor(palette[color], 'mainChannel', (0, _system.private_safeColorChannel)(colors.main));
        }
        if (colors.light) {
          setColor(palette[color], 'lightChannel', (0, _system.private_safeColorChannel)(colors.light));
        }
        if (colors.dark) {
          setColor(palette[color], 'darkChannel', (0, _system.private_safeColorChannel)(colors.dark));
        }
        if (colors.contrastText) {
          setColor(palette[color], 'contrastTextChannel', (0, _system.private_safeColorChannel)(colors.contrastText));
        }
        if (color === 'text') {
          // Text colors: text.primary, text.secondary
          setColorChannel(palette[color], 'primary');
          setColorChannel(palette[color], 'secondary');
        }
        if (color === 'action') {
          // Action colors: action.active, action.selected
          if (colors.active) {
            setColorChannel(palette[color], 'active');
          }
          if (colors.selected) {
            setColorChannel(palette[color], 'selected');
          }
        }
      }
    });
  });
  theme = args.reduce((acc, argument) => (0, _utils.deepmerge)(acc, argument), theme);
  const parserConfig = {
    prefix: cssVarPrefix,
    shouldSkipGeneratingVar
  };
  const {
    vars: themeVars,
    generateCssVars
  } = (0, _system.unstable_prepareCssVars)(theme, parserConfig);
  theme.vars = themeVars;
  theme.generateCssVars = generateCssVars;
  theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar;
  theme.unstable_sxConfig = (0, _extends2.default)({}, _system.unstable_defaultSxConfig, input == null ? void 0 : input.unstable_sxConfig);
  theme.unstable_sx = function sx(props) {
    return (0, _system.unstable_styleFunctionSx)({
      sx: props,
      theme: this
    });
  };
  return theme;
}

/***/ }),

/***/ 83476:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  experimental_sx: true,
  THEME_ID: true,
  adaptV4Theme: true,
  hexToRgb: true,
  rgbToHex: true,
  hslToRgb: true,
  decomposeColor: true,
  recomposeColor: true,
  getContrastRatio: true,
  getLuminance: true,
  emphasize: true,
  alpha: true,
  darken: true,
  lighten: true,
  css: true,
  keyframes: true,
  StyledEngineProvider: true,
  createTheme: true,
  createMuiTheme: true,
  unstable_createMuiStrictModeTheme: true,
  createStyles: true,
  unstable_getUnit: true,
  unstable_toUnitless: true,
  responsiveFontSizes: true,
  duration: true,
  easing: true,
  useTheme: true,
  useThemeProps: true,
  styled: true,
  experimentalStyled: true,
  ThemeProvider: true,
  makeStyles: true,
  withStyles: true,
  withTheme: true,
  experimental_extendTheme: true,
  getOverlayAlpha: true,
  shouldSkipGeneratingVar: true,
  private_createTypography: true,
  private_excludeVariablesFromRoot: true
};
Object.defineProperty(exports, "StyledEngineProvider", ({
  enumerable: true,
  get: function () {
    return _system.StyledEngineProvider;
  }
}));
Object.defineProperty(exports, "THEME_ID", ({
  enumerable: true,
  get: function () {
    return _identifier.default;
  }
}));
Object.defineProperty(exports, "ThemeProvider", ({
  enumerable: true,
  get: function () {
    return _ThemeProvider.default;
  }
}));
Object.defineProperty(exports, "adaptV4Theme", ({
  enumerable: true,
  get: function () {
    return _adaptV4Theme.default;
  }
}));
Object.defineProperty(exports, "alpha", ({
  enumerable: true,
  get: function () {
    return _system.alpha;
  }
}));
Object.defineProperty(exports, "createMuiTheme", ({
  enumerable: true,
  get: function () {
    return _createTheme.createMuiTheme;
  }
}));
Object.defineProperty(exports, "createStyles", ({
  enumerable: true,
  get: function () {
    return _createStyles.default;
  }
}));
Object.defineProperty(exports, "createTheme", ({
  enumerable: true,
  get: function () {
    return _createTheme.default;
  }
}));
Object.defineProperty(exports, "css", ({
  enumerable: true,
  get: function () {
    return _system.css;
  }
}));
Object.defineProperty(exports, "darken", ({
  enumerable: true,
  get: function () {
    return _system.darken;
  }
}));
Object.defineProperty(exports, "decomposeColor", ({
  enumerable: true,
  get: function () {
    return _system.decomposeColor;
  }
}));
Object.defineProperty(exports, "duration", ({
  enumerable: true,
  get: function () {
    return _createTransitions.duration;
  }
}));
Object.defineProperty(exports, "easing", ({
  enumerable: true,
  get: function () {
    return _createTransitions.easing;
  }
}));
Object.defineProperty(exports, "emphasize", ({
  enumerable: true,
  get: function () {
    return _system.emphasize;
  }
}));
Object.defineProperty(exports, "experimentalStyled", ({
  enumerable: true,
  get: function () {
    return _styled.default;
  }
}));
Object.defineProperty(exports, "experimental_extendTheme", ({
  enumerable: true,
  get: function () {
    return _experimental_extendTheme.default;
  }
}));
exports.experimental_sx = experimental_sx;
Object.defineProperty(exports, "getContrastRatio", ({
  enumerable: true,
  get: function () {
    return _system.getContrastRatio;
  }
}));
Object.defineProperty(exports, "getLuminance", ({
  enumerable: true,
  get: function () {
    return _system.getLuminance;
  }
}));
Object.defineProperty(exports, "getOverlayAlpha", ({
  enumerable: true,
  get: function () {
    return _getOverlayAlpha.default;
  }
}));
Object.defineProperty(exports, "hexToRgb", ({
  enumerable: true,
  get: function () {
    return _system.hexToRgb;
  }
}));
Object.defineProperty(exports, "hslToRgb", ({
  enumerable: true,
  get: function () {
    return _system.hslToRgb;
  }
}));
Object.defineProperty(exports, "keyframes", ({
  enumerable: true,
  get: function () {
    return _system.keyframes;
  }
}));
Object.defineProperty(exports, "lighten", ({
  enumerable: true,
  get: function () {
    return _system.lighten;
  }
}));
Object.defineProperty(exports, "makeStyles", ({
  enumerable: true,
  get: function () {
    return _makeStyles.default;
  }
}));
Object.defineProperty(exports, "private_createTypography", ({
  enumerable: true,
  get: function () {
    return _createTypography.default;
  }
}));
Object.defineProperty(exports, "private_excludeVariablesFromRoot", ({
  enumerable: true,
  get: function () {
    return _excludeVariablesFromRoot.default;
  }
}));
Object.defineProperty(exports, "recomposeColor", ({
  enumerable: true,
  get: function () {
    return _system.recomposeColor;
  }
}));
Object.defineProperty(exports, "responsiveFontSizes", ({
  enumerable: true,
  get: function () {
    return _responsiveFontSizes.default;
  }
}));
Object.defineProperty(exports, "rgbToHex", ({
  enumerable: true,
  get: function () {
    return _system.rgbToHex;
  }
}));
Object.defineProperty(exports, "shouldSkipGeneratingVar", ({
  enumerable: true,
  get: function () {
    return _shouldSkipGeneratingVar.default;
  }
}));
Object.defineProperty(exports, "styled", ({
  enumerable: true,
  get: function () {
    return _styled.default;
  }
}));
Object.defineProperty(exports, "unstable_createMuiStrictModeTheme", ({
  enumerable: true,
  get: function () {
    return _createMuiStrictModeTheme.default;
  }
}));
Object.defineProperty(exports, "unstable_getUnit", ({
  enumerable: true,
  get: function () {
    return _cssUtils.getUnit;
  }
}));
Object.defineProperty(exports, "unstable_toUnitless", ({
  enumerable: true,
  get: function () {
    return _cssUtils.toUnitless;
  }
}));
Object.defineProperty(exports, "useTheme", ({
  enumerable: true,
  get: function () {
    return _useTheme.default;
  }
}));
Object.defineProperty(exports, "useThemeProps", ({
  enumerable: true,
  get: function () {
    return _useThemeProps.default;
  }
}));
Object.defineProperty(exports, "withStyles", ({
  enumerable: true,
  get: function () {
    return _withStyles.default;
  }
}));
Object.defineProperty(exports, "withTheme", ({
  enumerable: true,
  get: function () {
    return _withTheme.default;
  }
}));
var _utils = __webpack_require__(44268);
var _identifier = _interopRequireDefault(__webpack_require__(67421));
var _adaptV4Theme = _interopRequireDefault(__webpack_require__(26250));
var _system = __webpack_require__(19659);
var _createTheme = _interopRequireWildcard(__webpack_require__(9634));
var _createMuiStrictModeTheme = _interopRequireDefault(__webpack_require__(79035));
var _createStyles = _interopRequireDefault(__webpack_require__(12956));
var _cssUtils = __webpack_require__(40553);
var _responsiveFontSizes = _interopRequireDefault(__webpack_require__(79646));
var _createTransitions = __webpack_require__(25457);
var _useTheme = _interopRequireDefault(__webpack_require__(48650));
var _useThemeProps = _interopRequireDefault(__webpack_require__(54061));
var _styled = _interopRequireDefault(__webpack_require__(76276));
var _ThemeProvider = _interopRequireDefault(__webpack_require__(98708));
var _makeStyles = _interopRequireDefault(__webpack_require__(20742));
var _withStyles = _interopRequireDefault(__webpack_require__(10337));
var _withTheme = _interopRequireDefault(__webpack_require__(78830));
var _CssVarsProvider = __webpack_require__(85013);
Object.keys(_CssVarsProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CssVarsProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CssVarsProvider[key];
    }
  });
});
var _experimental_extendTheme = _interopRequireDefault(__webpack_require__(12732));
var _getOverlayAlpha = _interopRequireDefault(__webpack_require__(26181));
var _shouldSkipGeneratingVar = _interopRequireDefault(__webpack_require__(51351));
var _createTypography = _interopRequireDefault(__webpack_require__(44371));
var _excludeVariablesFromRoot = _interopRequireDefault(__webpack_require__(85570));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// TODO: Remove this function in v6.
// eslint-disable-next-line @typescript-eslint/naming-convention
function experimental_sx() {
  throw new Error( false ? 0 : (0, _utils.formatMuiErrorMessage)(20));
}

// The legacy utilities from @mui/styles
// These are just empty functions that throws when invoked
// Private methods for creating parts of the theme

/***/ }),

/***/ 20742:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = makeStyles;
var _utils = __webpack_require__(44268);
function makeStyles() {
  throw new Error( false ? 0 : (0, _utils.formatMuiErrorMessage)(14));
}

/***/ }),

/***/ 79646:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = responsiveFontSizes;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _utils = __webpack_require__(44268);
var _cssUtils = __webpack_require__(40553);
function responsiveFontSizes(themeInput, options = {}) {
  const {
    breakpoints = ['sm', 'md', 'lg'],
    disableAlign = false,
    factor = 2,
    variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline']
  } = options;
  const theme = (0, _extends2.default)({}, themeInput);
  theme.typography = (0, _extends2.default)({}, theme.typography);
  const typography = theme.typography;

  // Convert between CSS lengths e.g. em->px or px->rem
  // Set the baseFontSize for your project. Defaults to 16px (also the browser default).
  const convert = (0, _cssUtils.convertLength)(typography.htmlFontSize);
  const breakpointValues = breakpoints.map(x => theme.breakpoints.values[x]);
  variants.forEach(variant => {
    const style = typography[variant];
    const remFontSize = parseFloat(convert(style.fontSize, 'rem'));
    if (remFontSize <= 1) {
      return;
    }
    const maxFontSize = remFontSize;
    const minFontSize = 1 + (maxFontSize - 1) / factor;
    let {
      lineHeight
    } = style;
    if (!(0, _cssUtils.isUnitless)(lineHeight) && !disableAlign) {
      throw new Error( false ? 0 : (0, _utils.formatMuiErrorMessage)(6));
    }
    if (!(0, _cssUtils.isUnitless)(lineHeight)) {
      // make it unitless
      lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
    }
    let transform = null;
    if (!disableAlign) {
      transform = value => (0, _cssUtils.alignProperty)({
        size: value,
        grid: (0, _cssUtils.fontGrid)({
          pixels: 4,
          lineHeight,
          htmlFontSize: typography.htmlFontSize
        })
      });
    }
    typography[variant] = (0, _extends2.default)({}, style, (0, _cssUtils.responsiveProperty)({
      cssProperty: 'fontSize',
      min: minFontSize,
      max: maxFontSize,
      unit: 'rem',
      breakpoints: breakpointValues,
      transform
    }));
  });
  return theme;
}

/***/ }),

/***/ 51351:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = shouldSkipGeneratingVar;
function shouldSkipGeneratingVar(keys) {
  var _keys$;
  return !!keys[0].match(/(cssVarPrefix|typography|mixins|breakpoints|direction|transitions)/) || !!keys[0].match(/sxConfig$/) ||
  // ends with sxConfig
  keys[0] === 'palette' && !!((_keys$ = keys[1]) != null && _keys$.match(/(mode|contrastThreshold|tonalOffset)/));
}

/***/ }),

/***/ 10337:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = withStyles;
var _utils = __webpack_require__(44268);
function withStyles() {
  throw new Error( false ? 0 : (0, _utils.formatMuiErrorMessage)(15));
}

/***/ }),

/***/ 78830:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = withTheme;
var _utils = __webpack_require__(44268);
function withTheme() {
  throw new Error( false ? 0 : (0, _utils.formatMuiErrorMessage)(16));
}

/***/ }),

/***/ 39487:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "detectScrollType", ({
  enumerable: true,
  get: function () {
    return _utils.unstable_detectScrollType;
  }
}));
Object.defineProperty(exports, "getNormalizedScrollLeft", ({
  enumerable: true,
  get: function () {
    return _utils.unstable_getNormalizedScrollLeft;
  }
}));
var _utils = __webpack_require__(44268);

/***/ }),

/***/ 4062:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}exports.ContextConsumer=h;exports.ContextProvider=g;exports.Element=b;exports.ForwardRef=l;exports.Fragment=d;exports.Lazy=q;exports.Memo=p;exports.Portal=c;exports.Profiler=f;exports.StrictMode=e;exports.Suspense=m;
exports.SuspenseList=n;exports.isAsyncMode=function(){return!1};exports.isConcurrentMode=function(){return!1};exports.isContextConsumer=function(a){return v(a)===h};exports.isContextProvider=function(a){return v(a)===g};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};exports.isForwardRef=function(a){return v(a)===l};exports.isFragment=function(a){return v(a)===d};exports.isLazy=function(a){return v(a)===q};exports.isMemo=function(a){return v(a)===p};
exports.isPortal=function(a){return v(a)===c};exports.isProfiler=function(a){return v(a)===f};exports.isStrictMode=function(a){return v(a)===e};exports.isSuspense=function(a){return v(a)===m};exports.isSuspenseList=function(a){return v(a)===n};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};exports.typeOf=v;


/***/ }),

/***/ 60129:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(4062);
} else {}


/***/ })

};
;