import React from 'react'
import { useStyles } from './home.styles.js'
import Card from '@material-ui/core/Card'

const HomePage = () => {
    const classes = useStyles()
    return(
        <div className={classes.root} >
            <img className={classes.logo} src={"https://venturebeat.com/wp-content/uploads/2016/03/Pok%C3%A9mon_Trading_Card_Game_logo.png?fit=2000%2C1026&strip=all"} />
        </div>
    )
}

export default HomePage