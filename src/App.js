import React from 'react'
// import AboutPage from './about.js'

import HomePage from './homepage/home.component'
import  CardsPage from './cardspage/cardspage.component'

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"

const App = () => (
  <Router>

    <div>
      <Link to="/">Home</Link>
      {"  "}
      <Link to="/cards">Cards</Link>
      {/*<Link to="/about/bruce">Hey bruce</Link>*/}
    </div>

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