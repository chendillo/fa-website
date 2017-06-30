import React, { Component } from 'react'
import { render } from 'react-dom'

import { CounterWrapper } from './containers'

class Main extends Component {
    render() {
      return (
        <div>
          <h2>Hello World!</h2>
          <CounterWrapper />
        </div>
      )
    }
}

export default Main