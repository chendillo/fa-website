import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  browserHistory,
} from 'react-router-dom'

import { HomePage, Lalala } from 'pages'
import { Header, Footer } from 'containers'

export default function Root() {
  return (
    <Router history={browserHistory}>
      <div>
        <Header />
        <section>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/lalala/:id?" component={Lalala} />
          </Switch>
        </section>
        <Footer />
      </div>
    </Router>
  )
}
