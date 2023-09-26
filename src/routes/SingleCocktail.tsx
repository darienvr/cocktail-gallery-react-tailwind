import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import type { CocktailAPIInfo } from '../types';
import { Link } from 'react-router-dom';

const SingleCocktail = () => {

    const { id } = useParams();

    const [ cocktail, setCocktail ] = useState<CocktailAPIInfo>();

    const fetchSingleCocktail = async() => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json()
        setCocktail(data.drinks[0])
    }

    useEffect(()=>{
        fetchSingleCocktail()
    },[])


    if(!cocktail){
        return <h2 className='text-center'>Cargando...</h2>
    }else{
        const {
            strDrinkThumb,
            strDrink,
            strAlcoholic,
            strGlass,
            strCategory,
            strInstructions
        } = cocktail;

        return (
        <article className=' max-w-[1280px] mx-auto px-10'>
            <h1 className=' font-semibold text-4xl text-center py-10'>{strDrink}</h1>
            <div className='flex justify-center gap-10'>
                <img className=' w-96 rounded-md' src={strDrinkThumb} alt="" />
                <div className='font-semibold text-md py-10 px-3 w-6/12'>
                    <p className=' py-3'><span className=' text-green-900 font-bold bg-green-300 py-1 px-2 rounded-md mr-3'>Name:</span>{strDrink}</p>
                    <p className=' py-3'><span className=' text-green-900 font-bold bg-green-300 py-1 px-2 rounded-md mr-3'>Category:</span>{strCategory}</p>
                    <p className=' py-3'><span className=' text-green-900 font-bold bg-green-300 py-1 px-2 rounded-md mr-3'>Info:</span>{strAlcoholic}</p>
                    <p className=' py-3'><span className=' text-green-900 font-bold bg-green-300 py-1 px-2 rounded-md mr-3'>Glass:</span>{strGlass}</p>
                    <p className=' py-3'><span className=' text-green-900 font-bold bg-green-300 py-1 px-2 rounded-md mr-3'>Instructions:</span>{strInstructions}</p>
                </div>
            </div>
            <Link to='/' className=' bg-green-600 text-white px-2 py-1 rounded-md mx-auto flex mt-5 w-fit
                 hover:bg-green-800 transition-colors'>
                Back Home
            </Link>
        </article>
        )
    }
}

export default SingleCocktail