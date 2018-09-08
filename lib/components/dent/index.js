'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
	var color = props.color,
	    start = props.start,
	    end = props.end,
	    strokeMargin = props.strokeMargin,
	    strokeWidth = props.strokeWidth;


	var margin = Number(strokeMargin) || 0;
	var startVal = start + margin;
	var endVal = end - margin;

	return _react2.default.createElement(
		'g',
		{ style: (0, _util.getStyle)(props) },
		_react2.default.createElement('path', {
			d: (0, _util.pathData)([startVal, endVal]),
			stroke: color,
			strokeWidth: 100 * strokeWidth + '%',
			strokeLinecap: 'butt',
			fill: 'transparent' })
	);
};