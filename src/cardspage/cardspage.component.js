import React, { useState, useEffect } from "react"
import './cardspage.styles.js'

const CardsPage = () =>{
        const [data, setData] = useState()

        const [isLoading, setLoading] = useState(false)

        useEffect(() => {
          getData()
        }, [])

        const getData = async () => {
          setData(null)
          setLoading(true)

          const result = await fetch(
            `https://api.pokemontcg.io/v1/cards?name=blastoise`
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
      <div>
        {data ? (
          data.cards.map((card, i) => (
            <img key={i} src={card.imageUrl} />
          ))
        ) : (
          <p></p>
        )}
        )))}
      </div>
    );
}

export default CardsPage