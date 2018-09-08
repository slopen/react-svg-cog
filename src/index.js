// @flow

import React from 'react';
import DentComponent from 'components/dent';


import type {Props as DentProps} from 'components/dent';


type ArcParams = {
	arcRadius: number,
	arcStrokeWidth: number
};

type DentsParams = {
	dentsTotal: number,
	dentsStrokeWidth: number,
	dentsStrokeMargin: number
}

type Props = {
	color: string,
} & ArcParams & DentsParams;

const createItems = ({
	color,
	dentsTotal,
	dentsStrokeWidth,
	dentsStrokeMargin
}: Props): Array <DentProps> => {
	const step = 1 / dentsTotal;

	return [...new Array (Number (dentsTotal))].reduce ((res) => {
		const start = res.length ? res [res.length - 1].end : 0;
		const end = start + step;

		res.push ({
			start,
			end,
			color,
			strokeWidth: dentsStrokeWidth,
			strokeMargin: dentsStrokeMargin
		});

		return res;
	}, []);
}


const getStyle = () => ({
	transform: 'rotate(-0.25turn)'
});

const Circle = ({
	color,
	arcRadius,
	arcStrokeWidth
}: Props) =>
	<circle
		cx="0"
		cy="0"
		r={arcRadius}
		stroke={color}
		strokeWidth={arcStrokeWidth}
		fill="transparent"/>


export default (props: Props) =>
	<div className="react-svg-cog">
		<svg
			viewBox="-1 -1 2 2"
			style={getStyle ()}>

			<Circle {...props}/>

			{createItems (props)
				.map ((props, i) =>
					<DentComponent key={i} {...props}/>
			)}
		</svg>
	</div>