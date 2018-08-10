import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import * as React from 'react'

import CounterDisplay from './CounterDisplay'
import CounterControls from './CounterControls'

import './component.less'

interface IProps {
	title: string
}

@observer
class App extends React.Component<IProps> {

	@observable private _$count: number = 0

	public render(): JSX.Element {
		const count: number = this._$count

		return (
			<section id='app'>
				<h1>{this.props.title}</h1>
				<CounterDisplay count={count} />
				<CounterControls onIncrement={this._onIncrement} onDecrement={this._onDecrement} />
			</section>
		)
	}

	@action
	private _onIncrement = () => {
		this._$count++
	}

	@action
	private _onDecrement = () => {
		this._$count--
	}

}

export default App
