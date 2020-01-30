import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Header from './header/header.component'
import HomePage from './homepage/home.component'
import CardsPage from './cardspage/cardspage.component'
import CardDetails from './card-details/card-details.component'

import useStyles from './app.styles.js'

const App = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/cards">
            <CardsPage />
            <Route path="/:name/:id" exact>
              <CardDetails />
            </Route>
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
  );
}

export default App