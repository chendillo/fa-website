import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'

import { counter as counterActions } from '../../actions'
import styles from './CounterWrapper.scss'

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
    console.log(styles)
    return (
      <div className={styles['counter-wrapper']} >
        <span className={styles['counter-text']} >
          Counter: {this.props.counter.get('count')}
        </span>
        <input className={styles['counter-input']} ref={this._inputRef} />
        <button className={styles['button']} onClick={this.addCounter}>Add</button>
        <button className={styles['button']} onClick={this.resetCounter}>Reset</button>
        <button className={styles['button']} onClick={this.setCounter}>Set</button>
        <span className={styles['error-message']}>
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