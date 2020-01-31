import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

import SearchForm from '../searchform/searchform.component'

import useStyles from './cardspage.styles'

const CardsPage = () => {
  const [data, setData] = useState(null)
  const classes = useStyles()

  const onSubmit = async (pokemon) => {
    setData(null)

    const result = await fetch(
      `https://api.pokemontcg.io/v1/cards?name=${pokemon}`,
    )

    const formattedData = await result.json()

    if (formattedData.error) {
      console.log(formattedData.error)
    } else {
      setData(formattedData)
      console.log(data)
    }
  }

  return (
    <div className={classes.root}>

      <SearchForm onSubmit={onSubmit} />

      <Grid className={classes.grid} container spacing={3} justify="center">
        {data ? (
          data.cards.map((card) => (
            <Grid key={card.id} item>
              <Link to={`/cards/${card.name}/${card.id}/`}>
                <img className={classes.card} src={card.imageUrl} alt={card.name} />
              </Link>
            </Grid>
          ))
        ) : (
          <p />
        )}
      </Grid>

    </div>
  )
}

export default CardsPage
