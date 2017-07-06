import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Main from './Main'
import Lalala from './Lalala'

function Root(props: Object): ReactElement {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Main} />
      <Route path="/lalala" component={Lalala} />
    </Router>
  )
}