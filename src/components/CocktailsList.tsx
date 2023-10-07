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
    <div className='py-20 grid grid-cols-3 gap-8 px-20 '>
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