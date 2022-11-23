import { Flex, chakra } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { useState, useEffect, createElement, Fragment } from 'react';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var _excluded = ["children"];
/**
 *
 * @example
 * <LogoSpinner duration={1500}>
 *    <div>Hello, World!</div>
 * </LogoSpinner>
 */
function LogoSpinner(_ref) {
  var logo = _ref.logo,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 1000 : _ref$duration,
    partProps = _ref.partProps,
    children = _ref.children;
  var _React$useState = useState(true),
    loading = _React$useState[0],
    setLoading = _React$useState[1];
  useEffect(function () {
    setTimeout(function () {
      setLoading(false);
    }, duration != null ? duration : 100);
  }, [duration]);
  if (!loading) return createElement(Fragment, null, children);
  return createElement(Container, Object.assign({}, partProps == null ? void 0 : partProps.container), createElement(Flex, Object.assign({
    position: "relative",
    w: "200px",
    h: "200px",
    align: "center",
    justify: "center"
  }, partProps == null ? void 0 : partProps.wrapper), createElement(BoxMotion, Object.assign({
    width: "125px",
    height: "125px",
    position: "absolute",
    border: "2px solid",
    borderColor: "#32CAB1",
    animate: {
      rotate: [0, 360],
      scale: [1, 1.25, 1],
      opacity: [0, 1, 0]
    },
    initial: {
      opacity: 0
    },
    // @ts-ignore "Bug"
    transition: {
      duration: 4,
      repeat: Infinity
    }
  }, partProps == null ? void 0 : partProps.square1)), createElement(BoxMotion, Object.assign({
    width: "100px",
    height: "100px",
    position: "absolute",
    border: "2px solid",
    borderColor: "#7070DD",
    animate: {
      rotate: [360, 0],
      scale: [1, 1.25, 1],
      opacity: [0, 1, 0]
    },
    initial: {
      opacity: 0
    },
    // @ts-ignore "Bug"
    transition: {
      duration: 3,
      repeat: Infinity
    }
  }, partProps == null ? void 0 : partProps.square2)), !logo ? createElement(DefaultLogo, Object.assign({}, partProps == null ? void 0 : partProps.logo)) : createElement(Fragment, null, logo)));
}
var Container = function Container(_ref2) {
  var children = _ref2.children,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded);
  return createElement(Flex, Object.assign({
    top: 0,
    left: 0,
    align: "center",
    justify: "center",
    width: "100vw",
    height: "100vh",
    zIndex: 1000000,
    position: "fixed",
    bgColor: "rgba(15,15,15,1)"
  }, props), children);
};
function DefaultLogo(props) {
  return createElement(motion.svg, Object.assign({
    animate: {
      scale: [1, 1.5, 1.5, 1],
      opacity: [0.5, 1, 1, 0.5]
    },
    initial: {
      opacity: 0
    },
    // @ts-ignore "Bug"
    transition: {
      duration: 3,
      repeat: Infinity
    },
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), createElement("path", {
    d: "M0 32L3.55556 28.4444V32H0ZM14.2222 32V26.6667L10.6667 30.2222V32H7.11111V24.8889L10.6667 21.3333V24.8889V26.6667L14.2222 23.1111V17.7778L17.7778 14.2222V17.7778V24.8889V32H14.2222ZM28.4444 17.7778V10.6667V7.11111L24.8889 10.6667V17.7778V28.4444H28.4444V17.7778ZM28.4444 32H24.8889H21.3333V17.7778V10.6667L24.8889 7.11111L28.4444 3.55556L32 0V3.55556V10.6667V17.7778V32H28.4444Z",
    fill: "#4d4d4d"
  }));
}
var BoxMotion = /*#__PURE__*/chakra(motion.div, {
  shouldForwardProp: function shouldForwardProp(prop) {
    return isValidMotionProp(prop) || prop === 'children';
  }
});

export { LogoSpinner };
//# sourceMappingURL=hds-spinner.esm.js.map
