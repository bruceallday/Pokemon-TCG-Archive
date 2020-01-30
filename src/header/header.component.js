import React from "react"
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import { useStyles } from "./header.styles.js"
import img from '../../public/pokemon-logo.png'

const Header = () => {
    const classes = useStyles()
  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.root}>
          <Link className={classes.links} to="/">
            <img className={classes.logo} src={img}/>
          </Link>
          {"  "}
          <Link className={classes.links} to="/cards">
            Search Cards
          </Link>
          {/*<Link to="/about/bruce">Hey bruce</Link>*/}
        </Toolbar>
        
      </AppBar>
    </div>
  );
}


export default Header;
