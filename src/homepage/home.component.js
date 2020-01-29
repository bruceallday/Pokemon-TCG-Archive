import React from 'react'
import { useStyles } from './home.styles.js'
import Card from '@material-ui/core/Card'

import img from '../../public/pokemon-logo.png'

const HomePage = () => {
    const classes = useStyles()
    return(
        <div className={classes.root} >
            <img className={classes.logo} src={img} />
        </div>
    )
}

export default HomePage