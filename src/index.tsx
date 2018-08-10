import 'babel-polyfill'

import { configure } from 'mobx'
configure({ enforceActions: true })

import * as React from 'react'
import { render } from 'react-dom'

import App from './components/App'

import 'less/app.less'

render(<App title='Counter app' />, document.querySelector('div#root'))
