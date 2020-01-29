import React, { useState } from 'react'

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useStyles } from "./searchform.styles.js";

const SearchForm = (props) => {

    const [pokemon, handlePokemon] = useState("");

    const { getData } = props

    const classes = useStyles()

    const handleChange = event => {
      handlePokemon(event.target.value);
      console.log(event.target.value);
    };

    return (
      <div>
        <div className={classes.searchForm}>
          <TextField
            id="filled-basic"
            label="Search Pokemon by name"
            variant="filled"
            className={classes.textField}
            onChange={handleChange}
          />
          <Button
            onClick={() => getData(pokemon)}
            className={classes.searchButton}
            variant="contained"
            color="secondary"
          >
            Search
          </Button>
        </div>
      </div>
    );
}

export default SearchForm