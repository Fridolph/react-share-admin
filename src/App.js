import React, { Component } from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Admin from './layouts/Admin'
import Login from './views/Login'
import Home from './views/Home'
import Buttons from './views/UI/Buttons'
import Modals from './views/UI/Modals'
import Steps from './views/UI/Steps'
import NotMatch from './views/NotMatch'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={() => (
            <Admin>
              <Switch>
                <Route path="/admin/home" component={Home} />
                <Route path="/admin/ui/buttons" component={Buttons} />
                <Route path="/admin/ui/modals" component={Modals} />
                <Route path="/admin/ui/steps" component={Steps} />
              </Switch>
            </Admin>
          )} />
          <Route component={NotMatch} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
