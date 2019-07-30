import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import ButtonAppBar from './header/ButtonAppBar'
import Home from './home/Home'
import { SnackbarProvider } from 'notistack'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render () {
    // const { user } = this.state

    return (
      <SnackbarProvider maxSnack={3}>
        <ButtonAppBar />
        <main className="container">
          <Route path='/' render={() => (
            <Home />
          )} />
          <p>This is supposed to be underneath the h1 tag</p>
        </main>
      </SnackbarProvider>
    )
  }
}

export default App
