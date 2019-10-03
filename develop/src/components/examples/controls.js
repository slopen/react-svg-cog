// @flow

import React, {Component} from 'react';

import type {Values} from './';

type Props = {
	values: Values,
	onChange: (values: Values) => mixed
};

type State = {
	values: Values
};


export default class ComponentControls extends Component <Props, State> {

	onInputChange: (SyntheticInputEvent <EventTarget>) => void;

	constructor (props: Props) {
		super (props);

		this.state = {
			values: {}
		};

		this.onInputChange = this.onInputChange.bind (this);
	}

	onInputChange (e: SyntheticInputEvent <EventTarget>) {
		const {values = {}} = this.state;
		const {name, value} = e.target;
		const data: Values = {...values, [name]: value}

		this.setState ({values: data});

		if (typeof this.props.onChange === 'function') {
			this.props.onChange (data);
		}
	}

	static getDerivedStateFromProps (props: Props) {
		return props;
	}

	render () {
		const {values} = this.state;

		return (
			<div className="component-controls">

				<hr/>

				<p>
					<label>
						<span>arcRadius</span>
						<input
							type="range"
							name="arcRadius"
							min="0"
							max="1"
							step="0.001"
							value={values.arcRadius || '0.1'}
							onChange={this.onInputChange}/>
					</label>
				</p>

				<p>
					<label>
						<span>arcStrokeWidth</span>
						<input
							type="range"
							name="arcStrokeWidth"
							min="0"
							max="1"
							step="0.001"
							value={values.arcStrokeWidth || '0.1'}
							onChange={this.onInputChange}/>
					</label>
				</p>

				<hr/>

				<p>
					<label>
						<span>dentsTotal</span>
						<input
							type="range"
							name="dentsTotal"
							min="3"
							max="100"
							step="1"
							value={values.dentsTotal || '3'}
							onChange={this.onInputChange}/>
					</label>
				</p>
				<p>
					<label>
						<span>dentsStrokeWidth</span>
						<input
							type="range"
							name="dentsStrokeWidth"
							min="0.001"
							max="1"
							step="0.01"
							value={values.dentsStrokeWidth || '0.01'}
							onChange={this.onInputChange}/>
					</label>
				</p>
				<p>
					<label>
						<span>dentsStrokeMargin</span>
						<input
							type="range"
							name="dentsStrokeMargin"
							min="0.001"
							max="1"
							step="0.01"
							value={values.dentsStrokeMargin || '0.01'}
							onChange={this.onInputChange}/>
					</label>
				</p>

			</div>
		);
	}

}