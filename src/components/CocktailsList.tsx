import Cocktail from './Cocktail'
import type { CocktailAPIInfo } from '../types'

interface Props {
    cocktail: CocktailAPIInfo[]
}

const CocktailsList = ({cocktail}: Props) => {

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