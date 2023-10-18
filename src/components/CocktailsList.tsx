import { useContext } from 'react'
import { AppContext } from '../context'
import Cocktail from './Cocktail'
import { ContextType } from '../types'

const CocktailsList = () => {
 
  const { cocktail } = useContext(AppContext) as ContextType

  if(cocktail.length === 0) {
    return(
      <div className='text-center text-6xl font-bold pt-10'>Cargando...</div>
    )
  }

  return (
    <div className='px-5 py-20 grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
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