import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import useStyles from './searchform.styles'

const SearchForm = (props) => {
  const [pokemon, handlePokemon] = useState('')
  const { getData } = props

  const classes = useStyles()

  const handleChange = (event) => {
    handlePokemon(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div>
      <div className={classes.searchForm}>
        <TextField
          id="filled-basic"
          label="Search Pokemon by name"
          variant="outlined"
          className={classes.textField}
          onChange={handleChange}
          color="primary"
        />
        <Button
          onClick={() => getData(pokemon)}
          className={classes.searchButton}
          variant="contained"
        >
            Search
        </Button>
      </div>
    </div>
  )
}

export default SearchForm
