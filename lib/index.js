'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dent = require('./components/dent');

var _dent2 = _interopRequireDefault(_dent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createItems = function createItems(_ref) {
	var color = _ref.color,
	    dentsTotal = _ref.dentsTotal,
	    dentsStrokeWidth = _ref.dentsStrokeWidth,
	    dentsStrokeMargin = _ref.dentsStrokeMargin;

	var step = 1 / dentsTotal;

	return [].concat((0, _toConsumableArray3.default)(new Array(Number(dentsTotal)))).reduce(function (res) {
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

var getStyle = function getStyle() {
	return {
		transform: 'rotate(-0.25turn)'
	};
};

var Circle = function Circle(_ref2) {
	var color = _ref2.color,
	    arcRadius = _ref2.arcRadius,
	    arcStrokeWidth = _ref2.arcStrokeWidth;
	return _react2.default.createElement('circle', {
		cx: '0',
		cy: '0',
		r: arcRadius,
		stroke: color,
		strokeWidth: arcStrokeWidth,
		fill: 'transparent' });
};

exports.default = function (props) {
	return _react2.default.createElement(
		'div',
		{ className: 'react-svg-cog' },
		_react2.default.createElement(
			'svg',
			{
				viewBox: '-1 -1 2 2',
				style: getStyle() },
			_react2.default.createElement(Circle, props),
			createItems(props).map(function (props, i) {
				return _react2.default.createElement(_dent2.default, (0, _extends3.default)({ key: i }, props));
			})
		)
	);
};