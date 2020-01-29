import React, { useState, useEffect } from "react"

import { useStyles } from './cardspage.styles.js'

import Grid from '@material-ui/core/Grid'

const CardsPage = () =>{
        const classes = useStyles()
        const [data, setData] = useState()
        const [isLoading, setLoading] = useState(false)

        useEffect(() => {
          getData()
        }, [])

        const getData = async () => {
          setData(null)
          setLoading(true)

          const result = await fetch(
            `https://api.pokemontcg.io/v1/cards?name=charizard`
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
        <Grid container spacing={3} justify="center">
          {data ? (
            data.cards.map((card, i) =>
            <Grid item ><img key={i} src={card.imageUrl} /></Grid>)
          ) : (
            <p></p>
          )}
        </Grid>
      </div>
    );
}

export default CardsPage