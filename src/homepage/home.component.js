import React, { useState, useEffect } from 'react'

const HomePage = () => {

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
        );

        const data = await result.json()

        if(data.error){
            console.log(data.error)
            setLoading(false)
        }else{
            setData(data)
            setLoading(false)
            console.log(data)
            
        }
    }  
    return(

        <div>
            <h1>HOME PAGE, LOTS OF POKEMON HERE</h1>
        </div>
    )
}

export default HomePage