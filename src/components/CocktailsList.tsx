import React, { useState, useEffect } from 'react'
import Cocktail from './Cocktail'
import type { CocktailAPIInfo } from '../types'

const CocktailsList = () => {

    const [cocktail, setCocktail] = useState<CocktailAPIInfo[]>([])

    const fetchData = async() => {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        const data = await response.json()
        setCocktail(data.drinks)
        console.log(data.drinks)
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className=' my-20 grid grid-cols-3 gap-8 px-20'>
        {
            cocktail.map((item)=>{
                return(
                    <Cocktail key={item.idDrink} {...item}/>
                )
            })
        }
    </div>
  )
}

export default CocktailsList