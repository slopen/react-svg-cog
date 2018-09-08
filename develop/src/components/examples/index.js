// @flow

import React, {Component} from 'react';


import '../../../../lib/styles.css';
import SVGCog from '../../../../lib';

import CogControls from './controls';

type Props = {};
type State = Object;


const defaults = {
	color: '#000',
	arcRadius: 0.6,
	arcStrokeWidth: 0.4,
	dentsTotal: 3,
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

	onChange (values: Object) {
		this.setState (values);
	}

	render () {
		return (
			<div className="cog-example">
				<SVGCog {...this.state}/>
				<CogControls onChange={this.onChange}/>
			</div>
		);
	}
}
