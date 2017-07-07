import React from 'react'
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom'
import Main from './Main.jsx'
import Lalala from './Lalala.jsx'
import HomePage from 'pages'

export default function Root(props: Object): ReactElement {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/lalala" component={Lalala} />
      </Switch>
    </BrowserRouter>
  )
}