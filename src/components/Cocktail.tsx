import React from 'react'

interface Props {
    strDrink: string;
    strGlass: string;
    strAlcoholic: string;
    strDrinkThumb: string
}

const Cocktail = ({strDrinkThumb, strDrink, strGlass, strAlcoholic}: Props) => {
  return (
    <div className=' w-full shadow-lg rounded-md'>
        <img className=' h-60 w-full object-cover rounded-t-md' src={strDrinkThumb} alt="" />
        <div className=' p-3 pb-6'>
            <h3 className=' font-bold text-3xl '>{strDrink}</h3>
            <h6 className=' text-2xl'>{strGlass}</h6>
            <p className=' text-md text-gray-500'>{strAlcoholic}</p>
            <button className=' bg-green-600 py-1 px-4 text-white font-semibold rounded mt-2'>Details</button>
        </div>
    </div>
  )
}

export default Cocktail