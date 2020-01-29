import React from "react"
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import { useStyles } from "./header.styles.js"

const Header = () => {
    const classes = useStyles()
  return (
    <div>
      <AppBar className={classes.appBar} position="static">

        <Toolbar className={classes.root}>
          <Link className={classes.links} to="/">
            <img className={classes.logo} src={"https://venturebeat.com/wp-content/uploads/2016/03/Pok%C3%A9mon_Trading_Card_Game_logo.png?fit=2000%2C1026&strip=all"}/>
          </Link>
          {"  "}
          <Link className={classes.links} to="/cards">
            Cards
          </Link>
          {/*<Link to="/about/bruce">Hey bruce</Link>*/}
        </Toolbar>
        
      </AppBar>
    </div>
  );
}


export default Header;
