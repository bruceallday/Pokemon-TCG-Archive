import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const CardDetails = () => {
  const { name, cardID } = useParams()
  console.log('IN CARD DETAILS')
  console.log(name, cardID)

  const [data, setData] = useState(null)

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
      { data ? console.log(data) : <p />}
    </div>
  )
}

export default CardDetails
