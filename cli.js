"use strict";

var _react = _interopRequireWildcard(require("react"));

var _fs = _interopRequireDefault(require("fs"));

var _ink = require("ink");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// '■' : '□'
//
const optionsTest = () => [{
  text: 'option 1 ',
  active: true
}, {
  text: 'option 2 ',
  active: true
}, {
  text: 'option 3 ',
  active: true
}, {
  text: 'option 4 ',
  active: true
}];

const init = () => {
  const projects = _fs.default.readdirSync('./src');

  return projects.map((name, index) => ({
    text: `  ${name}`,
    active: index === 0
  }));
};
/*
 * @description move the options active, direction 1 down and -1 up 
 * @params direction: number
 */


const updateOptions = (direction, options) => {
  const actualActiveIndex = options.findIndex(({
    active
  }) => active);
  console.log('actualActiveIndex', actualActiveIndex);
  const newIndex = direction + actualActiveIndex;
  console.log('newIndex', newIndex);
  options[newIndex].active = true;
  options[actualActiveIndex].active = false;
  console.log(options);
  return options;
};

const Demo = () => {
  const [options, setOptions] = (0, _react.useState)(init());
  const {
    exit
  } = (0, _ink.useApp)();
  (0, _ink.useInput)((input, key) => {
    console.log(input, key);

    if (key.upArrow) {
      console.log('here');
      const auxOptions = updateOptions(-1, options);
      console.log('auxOptions', auxOptions);
      setOptions(optionsTest);
    }

    if (key.downArrow) {
      console.log('here 3');
      const auxOptions = updateOptions(1, options);
      console.log('auxOptions', auxOptions);
      setOptions(auxOptions);
    }

    if (key.escape) {
      exit();
    }
  });
  console.log(options);
  return /*#__PURE__*/_react.default.createElement(_ink.Box, {
    flexDirection: "column"
  }, /*#__PURE__*/_react.default.createElement(_ink.Box, null, /*#__PURE__*/_react.default.createElement(_ink.Text, null, "Seleccione una de las siguientes opciones")), /*#__PURE__*/_react.default.createElement(_ink.Spacer, null), /*#__PURE__*/_react.default.createElement(_ink.Box, {
    flexDirection: "column"
  }, options.map(({
    text,
    active
  }) => /*#__PURE__*/_react.default.createElement(_ink.Text, {
    key: text
  }, active ? '■' : '□', " ", text))));
};

init();
(0, _ink.render)( /*#__PURE__*/_react.default.createElement(Demo, null));

//# sourceMappingURL=cli.js.map