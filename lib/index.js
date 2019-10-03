"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dent = _interopRequireDefault(require("./components/dent"));

var createItems = function createItems(_ref) {
  var color = _ref.color,
      dentsTotal = _ref.dentsTotal,
      dentsStrokeWidth = _ref.dentsStrokeWidth,
      dentsStrokeMargin = _ref.dentsStrokeMargin;
  var step = 1 / dentsTotal;
  return new Array(Number(dentsTotal)).fill().reduce(function (res) {
    var start = res.length ? res[res.length - 1].end : 0;
    var end = start + step;
    res.push({
      start: start,
      end: end,
      color: color,
      strokeWidth: dentsStrokeWidth,
      strokeMargin: dentsStrokeMargin
    });
    return res;
  }, []);
};

var Circle = function Circle(_ref2) {
  var color = _ref2.color,
      arcRadius = _ref2.arcRadius,
      arcStrokeWidth = _ref2.arcStrokeWidth;
  return _react.default.createElement("circle", {
    cx: "0",
    cy: "0",
    r: arcRadius,
    stroke: color,
    strokeWidth: arcStrokeWidth,
    fill: "transparent"
  });
};

var _default = function _default(props) {
  return _react.default.createElement("div", {
    className: "react-svg-cog"
  }, _react.default.createElement("svg", {
    viewBox: "-1 -1 2 2",
    style: props.style
  }, _react.default.createElement(Circle, props), createItems(props).map(function (props, i) {
    return _react.default.createElement(_dent.default, Object.assign({
      key: i
    }, props));
  })));
};

exports.default = _default;