import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import ButtonAppBar from './header/ButtonAppBar'
// import Home from './home/components/Home'
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
            <div>
              <h1>hi</h1>
              <span className="mdi mdi-github-circle"></span>
            </div>
          )} />
        </main>
      </SnackbarProvider>
    )
  }
}

export default App
