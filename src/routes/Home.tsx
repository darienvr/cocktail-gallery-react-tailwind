import { useContext } from 'react'
import Input from '../components/Input'
import CocktailsList from '../components/CocktailsList'
import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'
import { AppContext } from '../context'
import { ContextType } from '../types'

const Home = () => {

  const { darkMode, setDarkMode } = useContext(AppContext) as ContextType

  return (
    <div className='dark:bg-gray-900 transition dark:text-white min-h-screen'>
        <div className=' mx-auto max-w-[1280px]'>
          <div className='flex justify-end pt-5'>
            <button onClick={()=>setDarkMode(!darkMode)} className=' text-4xl hover:scale-110 transition-transform'>
              { !darkMode ? <MdDarkMode /> : <BsFillSunFill style={{ color: 'white' }} />}
            </button>
          </div>
          <Input />
          <CocktailsList />
      </div>
    </div>
  )
}

export default Home