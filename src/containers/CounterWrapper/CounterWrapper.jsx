import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

import { counter as counterActions } from '../../actions'

@connect(
  ({ counter }) => ({ counter }),
  {
    add: counterActions.add,
    reset: counterActions.reset,
    set: counterActions.set
  }
)
class CounterWrapper extends Component {
    render() {
      return (
        <div>Hello World! {this.props.counter.get('count')}</div>
      )
    }
}

export default CounterWrapper