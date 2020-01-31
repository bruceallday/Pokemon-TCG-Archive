import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import useStyles from './card-details.styles'

const CardDetails = () => {
  const { cardID } = useParams()

  const [data, setData] = useState(null)
  const [nonPokemon, setNonPokemon] = useState(false)
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
    if (data.cards[0].supertype === 'Pokemon') {
      setNonPokemon(true)
      console.log(nonPokemon)
    }
  }

  useEffect(() => {
    getData(cardID)
  }, [])

  return (
    <div className={classes.detailsPage}>
      {data ? (
        <div className={classes.detailsContainer}>
          <img
            className={classes.cardImage}
            src={data.cards[0].imageUrlHiRes}
            alt="hi resolution"
          />
          <div className={classes.cardDetails}>
            <h2>{`#${data.cards[0].nationalPokedexNumber} ${data.cards[0].name}`}</h2>

            <p>{`Evolves from ${data.cards[0].evolvesFrom}`}</p>

            <p>{`HP: ${data.cards[0].hp}`}</p>

            { data.cards[0].types.map((item, i) => (
              <p key={i}>{`Type ${i + 1}: ${item}`}</p>
            ))}

            <p>{`Subtype: ${data.cards[0].subtype}`}</p>
            <p>{`Super type: ${data.cards[0].supertype}`}</p>

            { data.cards[0].weaknesses.map((item, i) => (
              <p key={i}>{`Weakness ${i + 1}: ${item.type} -> Value: ${item.value}`}</p>
            ))}

            { data.cards[0].attacks.map((item, i) => (
              <p key={i}>{`Attack ${i + 1}: ${item.name} -> Damage: ${item.damage} -> ${item.text}`}</p>
            ))}

            <p>{`Series: ${data.cards[0].series}`}</p>
            <p>{`Card ID: ${data.cards[0].id}`}</p>
            <p>{`Set: ${data.cards[0].set}`}</p>
            <p>{`Set Code: ${data.cards[0].setCode}`}</p>
            <p>{`Converted retreat cost: ${data.cards[0].convertedRetreatCost}`}</p>
            <p>{`Number: ${data.cards[0].number}`}</p>
            <p>{`Rarity: ${data.cards[0].rarity}`}</p>
            <p>{`Artwork by ${data.cards[0].artist}`}</p>
          </div>
        </div>
      ) : (
        <p />
      )}

      {data ? console.log(data.cards) : <p />}
    </div>
  )
}

export default CardDetails
