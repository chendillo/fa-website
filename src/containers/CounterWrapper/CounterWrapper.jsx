import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import PropTypes from 'prop-types'

import { counter as counterActions } from '../../actions'
import styles from './CounterWrapper.scss'

@connect(
  ({ counter }: Object): Object => ({ counter }),
  {
    add: counterActions.add,
    reset: counterActions.reset,
    set: counterActions.set
  }
)
@autobind
class CounterWrapper extends Component {
  state = {
      error: ''
    }

  static propTypes = {
    add: PropTypes.func,
    counter: PropTypes.object,
    reset: PropTypes.func,
    set: PropTypes.func
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

  render(): ReactElement {
    return (
      <div className={styles.counterWrapper} >
        <span className={styles.counterText} >
          Counter: {this.props.counter.get('count')}
        </span>
        <input className={styles.counterInput} ref={this._inputRef} />
        <button className={styles.button} onClick={this.addCounter}>Add</button>
        <button className={styles.button} onClick={this.resetCounter}>Reset</button>
        <button className={styles.button} onClick={this.setCounter}>Set</button>
        <span className={styles.errorMessage}>
          {this.state.error}
        </span>
      </div>
    )
  }

  _inputRef = (e) => {
    this.inputCounter = e
  }
}

export default CounterWrapper