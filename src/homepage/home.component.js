import React from 'react'
import { useStyles } from './home.styles'

import img from '../../public/pokemon-logo.png'

const HomePage = () => {
  const classes = useStyles()
  return (

    <div className={classes.root}>
      <img className={classes.logo} src={img} alt="Background" />
    </div>
  )
}

export default HomePage
