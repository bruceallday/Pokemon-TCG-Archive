import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './header/header.component'
import HomePage from './homepage/home.component'
import CardsPage from './cardspage/cardspage.component'
import CardDetails from './card-details/card-details.component'

import { useStyles } from './app.styles'


const App = () => {
  const classes = useStyles()
  return (
    <div>
      <CssBaseline />
      <div className={classes.root}>
        <Router>
          <Header />

          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/cards/:name/:cardID" exact>
              <CardDetails />
            </Route>

            <Route path="/cards">
              <CardsPage />
            </Route>

            <Route path="/home">
              <Redirect to="/" />
            </Route>

            <Route path="/">
              <div>PAGE NOT FOUND</div>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
