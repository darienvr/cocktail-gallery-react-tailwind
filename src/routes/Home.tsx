import { useState, useEffect, useCallback } from 'react'
import Input from '../components/Input'
import CocktailsList from '../components/CocktailsList'
import type { CocktailAPIInfo } from '../types'
import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'

const Home = () => {

  const [cocktail, setCocktail] = useState<CocktailAPIInfo[]>([])
  const [input, setInput] = useState('')
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

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
    <div className='dark:bg-gray-900 transition dark:text-white'>
        <div className=' mx-auto max-w-[1280px]'>
          <div className='flex justify-end pt-5'>
            <button onClick={()=>setDarkMode(!darkMode)} className=' text-4xl'>
              { !darkMode ? <MdDarkMode /> : <BsFillSunFill style={{ color: 'white' }} />}
            </button>
          </div>
          <Input onSearch={(searchValue)=>setInput(searchValue)}/>
          <CocktailsList cocktail={cocktail}/>
      </div>
    </div>
  )
}

export default Home