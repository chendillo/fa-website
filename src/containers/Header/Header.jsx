import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.styles'

class Header extends Component {
  render() {
    return (
      <header className={styles.wrapper} >
        <span>Header!!!</span>
        <nav>
          <Link to='/lalala' >Lalala</Link>
        </nav>
      </header>
    )
  }
}

export default Header
