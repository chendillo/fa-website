import React, { Component } from 'react'

import { CounterWrapper } from 'containers'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>Hello World!</h2>
        <CounterWrapper />
      </div>
    )
  }
}

export default HomePage
