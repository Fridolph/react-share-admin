import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Admin from './layouts/Admin'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Admin />
      </BrowserRouter>
    )
  }
}

export default App
