import React, { useState, useEffect } from "react"

import { useStyles } from './cardspage.styles.js'

import SearchForm from '../searchform/searchform.component'

import Grid from '@material-ui/core/Grid'

const CardsPage = () =>{
    const classes = useStyles()
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    // useEffect(() => {
    //   getData()
    // }, [])

    const getData = async (pokemon) => {
      setData(null)
      setLoading(true)

      const result = await fetch(
        `https://api.pokemontcg.io/v1/cards?name=${pokemon}`
      )

      const data = await result.json()

      if (data.error) {
        console.log(data.error)
        setLoading(false)

      } else {
        setData(data)
        setLoading(false)
        console.log(data)
      }
    }  
    return (
      <div className={classes.root}>
        <SearchForm getData={getData}/>
        <Grid className={classes.grid} container spacing={3} justify="center">
          {data ? (
            data.cards.map((card, i) => (
              <Grid key={i} item>
                <img className={classes.card} key={i} src={card.imageUrl} />
              </Grid>
            ))
          ) : (
            <p></p>
          )}
        </Grid>
      </div>
    );
}

export default CardsPage