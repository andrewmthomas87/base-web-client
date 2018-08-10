import * as React from 'react'

import './component.less'

interface IProps {
	count: number
}

const CounterDisplay: React.StatelessComponent<IProps> = (props: IProps): JSX.Element => (
	<div className='counter-display'>
		<h3>The current count is <span>{props.count}</span>.</h3>
	</div>
)

export default CounterDisplay
