import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import useStyles from './card-details.styles'

const CardDetails = () => {
  const { cardID } = useParams()

  const [data, setData] = useState(null)
  const classes = useStyles()

  const getData = async (card) => {
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

  const card = data && data.cards[0]
  const cardIsPokemon = card && card.supertype === 'Pokémon'

  return (
    <div className={classes.detailsPage}>
      {card && (
        <div className={classes.detailsContainer}>
          <img
            className={classes.cardImage}
            src={card.imageUrlHiRes}
            alt="hi resolution"
          />
          <div className={classes.cardDetails}>
            <h2>
              {cardIsPokemon && `#${card.nationalPokedexNumber} `}
              {card.name}
            </h2>

            <p>{cardIsPokemon && `Evolves from ${card.evolvesFrom}`}</p>

            <p>{cardIsPokemon && `HP: ${card.hp}`}</p>

            {cardIsPokemon && (
              card.types.map((item, i) => (
                <p key={item}>{`Type ${i + 1}: ${item}`}</p>
              ))
            )}

            <p>{`Subtype: ${card.subtype}`}</p>
            <p>{`Supertype: ${card.supertype}`}</p>

            {cardIsPokemon && (
              card.weaknesses.map((item, i) => (
                <p key={item.type}>{`Weakness ${i + 1}: ${item.type} -> Value: ${item.value}`}</p>
              ))
            )}

            {cardIsPokemon && (
              card.attacks.map((item, i) => (
                <p key={item.name}>{`Attack ${i + 1}: ${item.name} -> Damage: ${item.damage} -> ${item.text}`}</p>
              ))
            )}

            <p>{`Series: ${card.series}`}</p>
            <p>{`Card ID: ${card.id}`}</p>
            <p>{`Set: ${card.set}`}</p>
            <p>{`Set Code: ${card.setCode}`}</p>

            <p>
              {cardIsPokemon && (
                `Converted retreat cost: ${card.convertedRetreatCost}`
              )}
            </p>

            <p>{`Number: ${card.number}`}</p>
            <p>{`Rarity: ${card.rarity}`}</p>
            <p>{`Artwork by ${card.artist}`}</p>
          </div>
        </div>
      )}

      {data && console.log(data.cards)}
    </div>
  )
}

export default CardDetails
