import { useContext } from 'react'
import { Link } from "react-router-dom";
import { AppContext } from '../context'
import { ContextType } from '../types'
import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'

const Navbar = () => {

  const { darkMode, setDarkMode } = useContext(AppContext) as ContextType

  return (
    <>
      <nav className="bg-gray-50 w-full shadow-md dark:bg-gray-800 dark:text-white transition-all"> 
        <div className=" container mx-auto max-w-screen-xl flex items-center justify-between h-24 p-5 ">
            <h1 className=" text-4xl font-bold flex-1">CocktailsDB</h1>
            <div className="flex items-center text-right">
                <ul className="flex gap-8 text-lg mr-20">
                    <li className="hover:scale-110 transition-all">
                      <Link to="/">
                        Home
                      </Link>
                    </li>
                    <li className="hover:scale-110 transition-all">
                      <Link to="/about">
                        About
                      </Link>
                    </li>
                </ul>
                <div className='flex'>
                  <button onClick={()=>setDarkMode(!darkMode)} className=' text-4xl hover:scale-110 transition-all'>
                    { !darkMode ? <MdDarkMode /> : <BsFillSunFill style={{ color: 'white' }} />}
                  </button>
                </div>
            </div>
        </div>
      </nav>
      
    </>
  )
}

export default Navbar