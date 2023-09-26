import {useState} from 'react'

interface Props {
  onSearch: (e:string)=>void
}

const Input = ({onSearch}:Props) => {

  const [textInput, SetTextInput] = useState('')

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(textInput);
  }

  return (
    <div className='p-8 mt-28 w-3/6 rounded shadow-lg mx-auto'>
        <form action="" className=' max-w-fit flex' onSubmit={handleSubmit}>
            <input value={textInput} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>SetTextInput(e.target.value)} type="text" className=' bg-slate-100 w-96 rounded border-gray-200 border pl-1' />
            <button className=' bg-green-400 rounded px-4 py-1 text-white'>Search</button>
        </form>
    </div>
  )
}

export default Input