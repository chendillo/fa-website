import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'

class Lalala extends Component {
    render(): ReactElement {
      return (
        <div>
          <div>
            <Link to='/' >Back</Link>
          </div>
          <h2>LALALALA! -- {this.props.match.params.id || '*'}</h2>
        </div>
      )
    }
}

export default Lalala