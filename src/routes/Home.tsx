import { useState, useEffect, useCallback } from 'react'
import Input from '../components/Input'
import CocktailsList from '../components/CocktailsList'
import type { CocktailAPIInfo } from '../types'

const Home = () => {

  const [cocktail, setCocktail] = useState<CocktailAPIInfo[]>([])
  const [input, setInput] = useState('')

  const fetchData = useCallback(async() => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`);
      const data = await response.json();
      setCocktail(data.drinks);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [input]);

  useEffect(()=>{
      fetchData()
  },[input])


  return (
    <div className=' mx-auto max-w-[1280px]'>
        <Input onSearch={(searchValue)=>setInput(searchValue)}/>
        <CocktailsList cocktail={cocktail}/>
    </div>
  )
}

export default Home