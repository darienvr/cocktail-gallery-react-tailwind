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
    <div className='p-8 mt-28 w-3/6 rounded shadow-lg mx-auto dark:bg-gray-800'>
        <form action="" className=' max-w-fit flex' onSubmit={handleSubmit}>
            <input value={input} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} type="text" className=' bg-slate-100 w-96 rounded border-gray-200 border pl-1' />
            <button className=' bg-green-400 rounded px-4 py-1 text-white'>Search</button>
        </form>
    </div>
  )
}

export default Input