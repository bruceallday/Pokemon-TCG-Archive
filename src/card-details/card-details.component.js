import React from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = () => {
  const { name, cardID } = useParams()
  console.log('IN CARD DETAILS')
  console.log(name, cardID)

  return (
    <div>{name + cardID}</div>
  )
}

export default CardDetails
