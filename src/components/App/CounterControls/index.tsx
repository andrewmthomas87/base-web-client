import * as React from 'react'

import './component.less'

interface IProps {
	onIncrement(): void
	onDecrement(): void
}

const CounterControls: React.StatelessComponent<IProps> = (props: IProps): JSX.Element => (
	<div className='counter-controls'>
		<button onClick={props.onDecrement}>-</button>
		<button onClick={props.onIncrement}>+</button>
	</div>
)

export default CounterControls
