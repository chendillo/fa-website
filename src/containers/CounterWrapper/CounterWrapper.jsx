import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import autobind from 'autobind-decorator'

import { counter as counterActions } from '../../actions'

@connect(
  ({ counter }) => ({ counter }),
  {
    add: counterActions.add,
    reset: counterActions.reset,
    set: counterActions.set
  }
)
@autobind
class CounterWrapper extends Component {
  constructor(props) {
    super(props)

//    _.bindAll(this, ['addCounter', 'resetCounter', 
//      'setCounter', '_inputRef']
//    )

    this.state = {
      error: ''
    }
  }

  addCounter() {
    this.props.add()
    this.setState({ error: '' })
  }

  resetCounter() {
    this.props.reset()
    this.setState({ error: '' })
  }

  setCounter() {
    const num = parseInt(this.inputCounter.value)

    if(isNaN(num)) {
      this.setState({ error: 'Invalid number' })
    } else {
      this.props.set(num)
    }
  }

  render() {
    return (
      <div>
        <span>
          Counter: {this.props.counter.get('count')}
        </span>
        <input ref={this._inputRef} />
        <button onClick={this.addCounter}>Add</button>
        <button onClick={this.resetCounter}>Reset</button>
        <button onClick={this.setCounter}>Set</button>
        <span>
          {this.state.error}
        </span>
      </div>
    )
  }

  _inputRef(e) {
    this.inputCounter = e
  }
}

export default CounterWrapper