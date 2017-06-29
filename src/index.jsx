import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Main from './Main.jsx'
import store from './store'

class Index extends Component {
    render() {
      return (
        <Provider store={store}>
          <Main />
        </Provider>
      )
    }
}

render(<Index />, document.getElementById('app'))