import Input from '../components/Input'
import CocktailsList from '../components/CocktailsList'

const Home = () => {

  return (
    <div className='dark:bg-gray-900 dark:text-white min-h-screen transition-all'>
        <div className=' mx-auto max-w-[1280px] pt-20'>
          <Input />
          <CocktailsList />
      </div>
    </div>
  )
}

export default Home