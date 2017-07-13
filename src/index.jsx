import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Root from './Root'
import store from './store'

class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

render(<Index />, document.getElementById('app'))
