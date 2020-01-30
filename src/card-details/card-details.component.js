import React from "react";
import { useParams,  } from "react-router-dom";

const CardDetails = () => {
  console.log("IN CARD DETAILS")
  const { name, id } = useParams();
  console.log(name, id)
  
  return (
      <div>DETAILS PAGE {name, id}</div>
  )
};

export default CardDetails; 
