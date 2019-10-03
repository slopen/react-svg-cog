"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _util = require("./util");

var _default = function _default(props) {
  var color = props.color,
      start = props.start,
      end = props.end,
      strokeMargin = props.strokeMargin,
      strokeWidth = props.strokeWidth;
  var margin = Number(strokeMargin) || 0;
  var startVal = start + margin;
  var endVal = end - margin;
  return _react.default.createElement("g", {
    style: (0, _util.getStyle)(props)
  }, _react.default.createElement("path", {
    d: (0, _util.pathData)([startVal, endVal]),
    stroke: color,
    strokeWidth: 100 * strokeWidth + '%',
    strokeLinecap: "butt",
    fill: "transparent"
  }));
};

exports.default = _default;