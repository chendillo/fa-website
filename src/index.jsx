import React, { Component } from 'react'
import { render } from 'react-dom'
import { combineReducers } from 'redux'

import Main from './Main.jsx'
import * as reducers from './reducers'

const allReducers = combineReducers(reducers)

class Index extends Component {
    render() {
      return (
        <Main />
      )
    }
}

render(<Index />, document.getElementById('app'))