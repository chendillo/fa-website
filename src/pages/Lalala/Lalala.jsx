import React, { Component } from 'react'
import { render } from 'react-dom'

class Lalala extends Component {
    render(): ReactElement {
      console.log(this.props.match)
      return (
        <div>
          <h2>LALALALA!</h2>
        </div>
      )
    }
}

export default Lalala