"use strict";

exports.__esModule = true;
exports.getStyle = exports.pathData = exports.getCoordinatesForPercent = void 0;

var getCoordinatesForPercent = function getCoordinatesForPercent(percent) {
  return [Math.cos(2 * Math.PI * percent), Math.sin(2 * Math.PI * percent)];
};

exports.getCoordinatesForPercent = getCoordinatesForPercent;

var pathData = function pathData(_ref) {
  var start = _ref[0],
      end = _ref[1];

  var _getCoordinatesForPer = getCoordinatesForPercent(start),
      startX = _getCoordinatesForPer[0],
      startY = _getCoordinatesForPer[1];

  var _getCoordinatesForPer2 = getCoordinatesForPercent(end),
      endX = _getCoordinatesForPer2[0],
      endY = _getCoordinatesForPer2[1];

  var largeArcFlag = end - start > 0.5 ? 1 : 0;
  return "M " + startX + " " + startY + " A 1 1 0 " + largeArcFlag + " 1 " + endX + " " + endY;
};

exports.pathData = pathData;

var getStyle = function getStyle(_ref2) {
  var strokeWidth = _ref2.strokeWidth;
  return {
    transform: "scale(" + 1 / (1 + Number(strokeWidth)) + ")"
  };
};

exports.getStyle = getStyle;