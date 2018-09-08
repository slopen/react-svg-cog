// @flow

import React from 'react';

type Props = {
	values: Object,
	onChange: (values: Object | string) => mixed
};

export default ({values, onChange}: Props) =>
	<div className="values">
		<textarea
			value={JSON.stringify (values, null, 2)}
			onChange={({target}: SyntheticInputEvent <EventTarget>) =>
				onChange (target.value)
			}/>
	</div>

