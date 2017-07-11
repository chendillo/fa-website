import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'

import { CounterWrapper } from 'containers'

class HomePage extends Component {
    render(): ReactElement {
      return (
        <div>
          <div>
           <Link to='/lalala' >Lalala</Link>
          </div>
          <h2>Hello World!</h2>
          <CounterWrapper />
        </div>
      )
    }
}

export default HomePage