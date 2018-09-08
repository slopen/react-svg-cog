// @flow

import React, {Component} from 'react';


import '../../../../lib/styles.css';
import SVGCog from '../../../../lib';

import CogControls from './controls';
import CogValues from './values';

type Props = {};
type State = Object;


const defaults = {
	color: '#000',
	arcRadius: 0.6,
	arcStrokeWidth: 0.4,
	dentsTotal: 7,
	dentsStrokeWidth: 0.4,
	dentsStrokeMargin: 0.007
};


export default class CogExample extends Component <Props, State> {

	onChange: Function;

	constructor (props: Props) {
		super (props)
		this.state = {...defaults};

		this.onChange = this.onChange.bind (this);
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

	render () {
		return (
			<div className="cog-example">

				<SVGCog {...this.state}/>

				<div className="controls">
					<CogControls
						onChange={this.onChange}/>

					<CogValues
						values={this.state}
						onChange={this.onChange}/>
				</div>
			</div>
		);
	}
}
