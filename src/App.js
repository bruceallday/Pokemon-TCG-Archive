import React from 'react'

import Header from './header/header.component'
import HomePage from './homepage/home.component'
import  CardsPage from './cardspage/cardspage.component'

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"

const App = () => (
  <Router>
    <Header/>
    <Switch>

      <Route path="/" exact>
        <HomePage/>
      </Route>

      <Route path = "/cards">
        <CardsPage/>
      </Route>

      <Route path="/:pokemonName" exact>
        {/* SINGLE CARD */}
      </Route>

      <Route path="/home">
        <Redirect to="/" />
      </Route>

      <Route path="/">
        <div>PAGE NOT FOUND</div>      
      </Route>
      
    </Switch>
  </Router>
);

export default App