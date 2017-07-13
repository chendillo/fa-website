import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Lalala extends Component {
  static propTypes = {
    match: PropTypes.object,
  }

  render() {
    return (
      <div>
        <div>
          <Link to='/' >Back</Link>
        </div>
        <h2>LALALALA! -- {this.props.match.params.id * 5 || '*'}</h2>
      </div>
    )
  }
}

export default Lalala
