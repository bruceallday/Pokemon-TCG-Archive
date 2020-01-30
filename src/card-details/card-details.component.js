import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useStyles from './card-details.styles'

const CardDetails = () => {
  const { name, cardID } = useParams()

  console.log(name, cardID)

  const [data, setData] = useState(null)
  const classes = useStyles()

  const getData = async (card) => {
    setData(null)

    const result = await fetch(`https://api.pokemontcg.io/v1/cards?id=${card}`)

    const formattedData = await result.json()

    if (formattedData.error) {
      console.log(formattedData.error)
    } else {
      setData(formattedData)
      console.log(data)
    }
  }

  useEffect(() => {
    getData(cardID)
  }, [])

  return (
    <div>
      {data ? (
        <div className={classes.detailsContainer}>
          <img
            className={classes.cardImage}
            src={data.cards[0].imageUrlHiRes}
            alt="hi resolution"
          />
          <div className={classes.cardDetails}>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
          </div>
        </div>
      ) : (
        <p />
      )}

      {data ? console.log(data.cards) : <p />}
    </div>
  );
}

export default CardDetails
