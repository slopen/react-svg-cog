// @flow

import React, {Component} from 'react';


import '../../../../lib/styles.css';
import SVGCog from '../../../../lib';

import CogControls from './controls';
import CogValues from './values';
import Presets from './presets';


export type Values = {
	[key: string]: string | number
};

type Props = {};
type State = Values;


const defaults = {
	color: '#000',
	arcRadius: 0.6,
	arcStrokeWidth: 0.4,
	dentsTotal: 7,
	dentsStrokeWidth: 0.4,
	dentsStrokeMargin: 0.007
};



const getStyle = () => ({
	transform: 'rotate(-0.25turn)'
});


export default class CogExample extends Component <Props, State> {

	onChange: (input: Object | string) => void;
	onPresetClick: (Values) => void;

	constructor (props: Props) {
		super (props)
		this.state = {...defaults};

		this.onChange = this.onChange.bind (this);
		this.onPresetClick = this.onPresetClick.bind (this);
	}

	onChange (input: Object | string) {
		let values = {};

		if (typeof input === 'string') {
			try {
				values = JSON.parse (input);
			} catch (e) {
				console.error (e);
			}
		} else {
			values = input;
		}

		this.setState (values);
	}

	onPresetClick (data: Values) {
		this.setState (data);
	}

	render () {
		return (
			<div className="cog-example">

				<SVGCog {...this.state} style={getStyle ()}/>

				<div className="controls">
					<CogControls
						values={{...this.state}}
						onChange={this.onChange}/>

					<CogValues
						values={this.state}
						onChange={this.onChange}/>

					<Presets onClick={this.onPresetClick}/>
				</div>
			</div>
		);
	}
}
