// @flow

import React from 'react';
import {pathData, getStyle} from './util';


export type Props = {
	start: number,
	end: number,
	color: string,
	strokeWidth: number,
	strokeMargin: number
};


export default (props: Props) => {
	const {
		color,
		start,
		end,
		strokeMargin,
		strokeWidth
	} = props;

	const margin = Number (strokeMargin) || 0;
	const startVal = start + margin;
	const endVal = end - margin;

	return (
		<g style={getStyle (props)}>
			<path
				d={pathData ([startVal, endVal])}
				stroke={color}
				strokeWidth={(100 * strokeWidth) + '%'}
				strokeLinecap="butt"
				fill="transparent"/>
		</g>
	);
}