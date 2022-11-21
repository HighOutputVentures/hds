'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('@chakra-ui/react');
var React = _interopDefault(require('react'));
var icons = require('@chakra-ui/icons');

var HovIcon = function HovIcon(props) {
  return React.createElement(react.Icon, Object.assign({
    width: "32px",
    height: "32px",
    viewBox: "0 0 32 32",
    fill: "none"
  }, props), React.createElement("path", {
    d: "M0 32L3.55556 28.4444V32H0ZM14.2222 32V26.6667L10.6667 30.2222V32H7.11111V24.8889L10.6667 21.3333V24.8889V26.6667L14.2222 23.1111V17.7778L17.7778 14.2222V17.7778V24.8889V32H14.2222ZM28.4444 17.7778V10.6667V7.11111L24.8889 10.6667V17.7778V28.4444H28.4444V17.7778ZM28.4444 32H24.8889H21.3333V17.7778V10.6667L24.8889 7.11111L28.4444 3.55556L32 0V3.55556V10.6667V17.7778V32H28.4444Z",
    fill: "currentColor"
  }));
};

var ChevronLeftIcon = function ChevronLeftIcon(props) {
  return React.createElement(react.Icon, Object.assign({
    width: "32px",
    height: "32px",
    viewBox: "0 0 32 32",
    fill: "none"
  }, props), React.createElement("path", {
    d: "M12.5 15L7.5 10L12.5 5",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var ChevronRightIcon = function ChevronRightIcon(props) {
  return React.createElement(react.Icon, Object.assign({
    width: "32px",
    height: "32px",
    viewBox: "0 0 32 32",
    fill: "none"
  }, props), React.createElement("path", {
    d: "M7.5 15L12.5 10L7.5 5",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var AppleIcon = function AppleIcon(props) {
  var isDisabled = props.isDisabled,
    variant = props.variant;
  return React.createElement(react.Icon, {
    width: "24px",
    height: "24px",
    verticalAlign: 'center',
    viewBox: "0 0 24 24",
    fill: "none"
  }, React.createElement("path", {
    d: "M20.8426 17.1449C20.5099 17.9135 20.1161 18.6211 19.6598 19.2715C19.0378 20.1583 18.5286 20.7721 18.1361 21.113C17.5277 21.6724 16.8759 21.959 16.1779 21.9753C15.6768 21.9753 15.0725 21.8327 14.3691 21.5434C13.6633 21.2555 13.0148 21.113 12.4217 21.113C11.7998 21.113 11.1327 21.2555 10.4193 21.5434C9.70469 21.8327 9.12904 21.9834 8.68892 21.9984C8.01957 22.0269 7.35239 21.7322 6.68644 21.113C6.26139 20.7422 5.72974 20.1067 5.09285 19.2063C4.40951 18.2449 3.84772 17.13 3.4076 15.8589C2.93624 14.486 2.69995 13.1565 2.69995 11.8694C2.69995 10.3951 3.01853 9.12345 3.65665 8.05784C4.15815 7.20191 4.82533 6.52672 5.66035 6.03105C6.49537 5.53539 7.39761 5.2828 8.36925 5.26664C8.9009 5.26664 9.59809 5.43109 10.4645 5.75429C11.3284 6.07858 11.8832 6.24303 12.1264 6.24303C12.3082 6.24303 12.9245 6.05074 13.9692 5.66738C14.9571 5.31186 15.7909 5.16466 16.474 5.22264C18.3249 5.37202 19.7155 6.10167 20.6402 7.41619C18.9849 8.4192 18.166 9.82403 18.1823 11.6262C18.1972 13.03 18.7065 14.1981 19.7073 15.1256C20.1609 15.5561 20.6674 15.8888 21.231 16.1251C21.1087 16.4795 20.9797 16.819 20.8426 17.1449ZM16.5975 0.440369C16.5975 1.54062 16.1956 2.56792 15.3944 3.51878C14.4275 4.64917 13.258 5.30236 11.9898 5.19929C11.9736 5.06729 11.9642 4.92837 11.9642 4.78239C11.9642 3.72615 12.424 2.59576 13.2406 1.67152C13.6483 1.20356 14.1667 0.814453 14.7955 0.504058C15.4229 0.198295 16.0163 0.0292007 16.5744 0.000244141C16.5907 0.147331 16.5975 0.294426 16.5975 0.440355V0.440369Z",
    fill: isDisabled ? '#98A2B3' : variant === 'outline' ? 'black' : 'white'
  }));
};

var DribbleIcon = function DribbleIcon(props) {
  var isDisabled = props.isDisabled,
    variant = props.variant;
  return React.createElement(react.Icon, {
    width: "24px",
    height: "24px",
    verticalAlign: 'center',
    viewBox: "0 0 24 24",
    fill: "none"
  }, React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 0C5.37527 0 0 5.37527 0 12C0 18.6248 5.37527 24 12 24C18.6117 24 24 18.6248 24 12C24 5.37527 18.6117 0 12 0ZM19.9262 5.53145C21.3579 7.27549 22.217 9.50107 22.243 11.9089C21.9046 11.8439 18.5206 11.154 15.1106 11.5835C15.0325 11.4143 14.9675 11.2321 14.8894 11.0499C14.6811 10.5554 14.4469 10.0477 14.2126 9.56618C17.9869 8.0304 19.705 5.81779 19.9262 5.53145ZM12 1.77007C14.603 1.77007 16.9848 2.74621 18.7939 4.34707C18.6117 4.60738 17.0629 6.67679 13.4186 8.04338C11.7397 4.95878 9.87855 2.43384 9.5922 2.04338C10.3601 1.86117 11.1671 1.77007 12 1.77007ZM7.63995 2.73319C7.91325 3.09761 9.73538 5.63558 11.4404 8.65508C6.65076 9.9306 2.42083 9.90458 1.96529 9.90458C2.62907 6.72885 4.77657 4.08676 7.63995 2.73319ZM1.74404 12.0131C1.74404 11.9089 1.74404 11.8048 1.74404 11.7007C2.18655 11.7136 7.15835 11.7787 12.2733 10.243C12.5727 10.8156 12.846 11.4013 13.1063 11.9869C12.9761 12.026 12.8329 12.0651 12.7028 12.1041C7.41865 13.8091 4.60738 18.4685 4.3731 18.859C2.7462 17.0499 1.74404 14.6421 1.74404 12.0131ZM12 22.256C9.6312 22.256 7.44469 21.449 5.71367 20.0954C5.89588 19.718 7.97827 15.7094 13.757 13.692C13.783 13.679 13.7961 13.679 13.8221 13.666C15.2668 17.4013 15.8525 20.5379 16.0087 21.436C14.7722 21.9696 13.4186 22.256 12 22.256ZM17.7136 20.4989C17.6096 19.8742 17.0629 16.8807 15.7223 13.1974C18.9371 12.6898 21.7484 13.5228 22.0998 13.6399C21.6573 16.4902 20.0173 18.9501 17.7136 20.4989Z",
    fill: isDisabled ? '#98A2B3' : variant === 'outline' ? '#C32361' : 'white'
  }));
};

var FacebookIcon = function FacebookIcon(props) {
  var isDisabled = props.isDisabled,
    variant = props.variant;
  return React.createElement(icons.Icon, {
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    verticalAlign: 'center',
    fill: "none"
  }, React.createElement("path", {
    d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z",
    fill: isDisabled ? '#98A2B3' : variant === 'outline' ? '#1877F2' : 'white'
  }), React.createElement("path", {
    d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z",
    fill: variant === 'outline' ? 'white' : 'transparent'
  }));
};

var FigmaIcon = function FigmaIcon(props) {
  var isDisabled = props.isDisabled;
  return React.createElement(react.Icon, {
    width: "24px",
    height: "24px",
    verticalAlign: 'center',
    viewBox: "0 0 24 24",
    fill: "none"
  }, React.createElement("path", {
    d: "M8.00006 24.0001C10.2081 24.0001 12.0001 22.208 12.0001 20V16H8.00006C5.79205 16 4 17.792 4 20C4 22.208 5.79205 24.0001 8.00006 24.0001Z",
    fill: isDisabled ? '#98A2B3' : '#0ACF83'
  }), React.createElement("path", {
    d: "M4 12C4 9.79203 5.79205 8 8.00006 8H12.0001V16H8.00006C5.79205 16.0001 4 14.208 4 12Z",
    fill: isDisabled ? '#98A2B3' : '#A259FF'
  }), React.createElement("path", {
    d: "M4 4.00003C4 1.79203 5.79205 0 8.00006 0H12.0001V7.99997H8.00006C5.79205 7.99997 4 6.20803 4 4.00003Z",
    fill: isDisabled ? '#98A2B3' : '#F24E1E'
  }), React.createElement("path", {
    d: "M12 0H16.0001C18.2081 0 20.0001 1.79203 20.0001 4.00003C20.0001 6.20803 18.2081 7.99997 16.0001 7.99997H12V0Z",
    fill: isDisabled ? '#98A2B3' : '#FF7262'
  }), React.createElement("path", {
    d: "M20.0001 12C20.0001 14.208 18.2081 16.0001 16.0001 16.0001C13.792 16.0001 12 14.208 12 12C12 9.79203 13.792 8 16.0001 8C18.2081 8 20.0001 9.79203 20.0001 12Z",
    fill: isDisabled ? '#98A2B3' : '#1ABCFE'
  }));
};

var GoogleIcon = function GoogleIcon(props) {
  var isDisabled = props.isDisabled;
  return React.createElement(react.Icon, {
    width: "24px",
    height: "24px",
    verticalAlign: 'center',
    viewBox: "0 0 24 24",
    fill: "none"
  }, React.createElement("path", {
    d: "M23.7663 12.2764C23.7663 11.4607 23.7001 10.6406 23.559 9.83807H12.2402V14.4591H18.722C18.453 15.9494 17.5888 17.2678 16.3233 18.1056V21.1039H20.1903C22.4611 19.0139 23.7663 15.9274 23.7663 12.2764Z",
    fill: isDisabled ? '#98A2B3' : '#4285F4'
  }), React.createElement("path", {
    d: "M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z",
    fill: isDisabled ? '#98A2B3' : '#34A853'
  }), React.createElement("path", {
    d: "M5.50277 14.3003C5.00011 12.8099 5.00011 11.1961 5.50277 9.70575V6.61481H1.51674C-0.185266 10.0056 -0.185266 14.0004 1.51674 17.3912L5.50277 14.3003Z",
    fill: isDisabled ? '#98A2B3' : '#FBBC04'
  }), React.createElement("path", {
    d: "M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z",
    fill: isDisabled ? '#98A2B3' : '#EA4335'
  }));
};

var TwitterIcon = function TwitterIcon(props) {
  var isDisabled = props.isDisabled,
    variant = props.variant;
  return React.createElement(react.Icon, {
    width: "24px",
    verticalAlign: 'center',
    viewBox: "0 0 25 20",
    fill: "none"
  }, React.createElement("path", {
    d: "M7.55016 19.75C16.6045 19.75 21.5583 12.2467 21.5583 5.74186C21.5583 5.53092 21.5536 5.3153 21.5442 5.10436C22.5079 4.40746 23.3395 3.54425 24 2.5553C23.1025 2.9546 22.1496 3.21538 21.1739 3.32874C22.2013 2.71291 22.9705 1.74547 23.3391 0.605767C22.3726 1.17856 21.3156 1.58261 20.2134 1.80061C19.4708 1.01156 18.489 0.489116 17.4197 0.314051C16.3504 0.138986 15.2532 0.32105 14.2977 0.832096C13.3423 1.34314 12.5818 2.15471 12.1338 3.14131C11.6859 4.12792 11.5754 5.23462 11.8195 6.2903C9.86249 6.19209 7.94794 5.6837 6.19998 4.7981C4.45203 3.91249 2.90969 2.66944 1.67297 1.14952C1.0444 2.23324 0.852057 3.51565 1.13503 4.73609C1.418 5.95654 2.15506 7.02345 3.19641 7.71999C2.41463 7.69517 1.64998 7.48468 0.965625 7.10592V7.16686C0.964925 8.30415 1.3581 9.40659 2.07831 10.2868C2.79852 11.167 3.80132 11.7706 4.91625 11.995C4.19206 12.1931 3.43198 12.222 2.69484 12.0794C3.00945 13.0574 3.62157 13.9129 4.44577 14.5263C5.26997 15.1398 6.26512 15.4806 7.29234 15.5012C5.54842 16.8711 3.39417 17.6141 1.17656 17.6106C0.783287 17.61 0.390399 17.5859 0 17.5384C2.25286 18.9837 4.87353 19.7514 7.55016 19.75Z",
    fill: isDisabled ? '#98A2B3' : variant === 'outline' ? '#1DA1F2' : 'white'
  }));
};

exports.AppleIcon = AppleIcon;
exports.ChevronLeftIcon = ChevronLeftIcon;
exports.ChevronRightIcon = ChevronRightIcon;
exports.DribbleIcon = DribbleIcon;
exports.FacebookIcon = FacebookIcon;
exports.FigmaIcon = FigmaIcon;
exports.GoogleIcon = GoogleIcon;
exports.HovIcon = HovIcon;
exports.TwitterIcon = TwitterIcon;
//# sourceMappingURL=hds-icons.cjs.development.js.map
