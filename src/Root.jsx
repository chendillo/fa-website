import React from 'react'
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom'
import { HomePage, Lalala } from 'pages'

export default function Root(props: Object): ReactElement {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/lalala/:id" component={Lalala} />
      </Switch>
    </BrowserRouter>
  )
}