import React from "react";
import { useParams } from "react-router-dom";
import {useStyles} from "@material-ui/core/styles/";

const AboutCard = () => {
  const classes = useStyles();
  const { studentname } = useParams();

  return (
      <div style={{color: 'white'}} >{studentname}</div>
  )

};

export default AboutCard;
