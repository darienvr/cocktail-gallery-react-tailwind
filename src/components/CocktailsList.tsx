import { useContext } from 'react'
import { AppContext } from '../context'
import Cocktail from './Cocktail'
import { ContextType } from '../types'

const CocktailsList = () => {
 
  const { cocktail } = useContext(AppContext) as ContextType

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