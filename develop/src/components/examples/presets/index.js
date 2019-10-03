// @flow

import React from 'react';

import data from './data';
import SVGCog from '../../../../../lib';

import type {Values} from '../';

type Props = {
	onClick: (Values) => void;
};

export default ({onClick}: Props) =>
	<div className="presets">
		{data.map ((item, i) =>
			<div key={i} onClick={(e: Event) => {
					onClick (item);
					e.preventDefault ();
				}}>
				<SVGCog {...item}/>
			</div>
		)}
	</div>