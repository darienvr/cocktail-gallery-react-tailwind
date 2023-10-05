import { useContext } from 'react'
import { AppContext } from '../context'
import { ContextType } from '../types'

const Input = () => {

  const { input, setInput, handleSearch} = useContext(AppContext) as ContextType

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(); 
  };

  return (
    <div className='p-8 w-5/12 rounded shadow-lg mx-auto dark:bg-gray-800'>
        <form action="" className='flex' onSubmit={handleSubmit}>
            <input 
              value={input}
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} 
              type="text" 
              className=' bg-slate-100 w-[90%]  rounded-l-md border-gray-200 border pl-1 dark:text-black' 
            />
            <button className='bg-green-400 rounded-r-md px-4 py-1 text-white hover:bg-green-500 transition-all hover:font-semibold'>Search</button>
        </form>
    </div>
  )
}

export default Input