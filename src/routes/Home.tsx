import React from 'react'
import Input from '../components/Input'
import CocktailsList from '../components/CocktailsList'

const Home = () => {
  return (
    <div className=' mx-auto max-w-[1280px]'>
        <Input />
        <CocktailsList />
    </div>
  )
}

export default Home