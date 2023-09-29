
const About = () => {
  return (
    <div className=' dark:bg-gray-900 dark:text-white min-h-screen '>
      <section className='grid grid-cols-2 pt-20 mx-auto w-[1100px]'>
        <div className=' w-[80%] h-[400px] mx-auto'>
            <img className=' min-h-full object-cover rounded' src="https://tiendaparatodos.com/wp-content/uploads/2022/08/coctel.jpeg" alt="Tienda de Cócteles" />
        </div>
        <div className=' pr-10'>
            <h3 className=' font-semibold text-3xl mb-8'>About Us</h3>
            <p>Introducing "MixMaster," the ultimate party sidekick app that fetches cocktails from the hilarious Cocktails DB API.
                 With a flick of your finger, you'll unlock a treasure trove of enchanting drink recipes that'll make your taste 
                 buds dance and your friends jump with joy. Get ready to shake up your mixology game, one fantastical mocktail at a 
                 time, and let the laughter and giggles flow!
            </p>
        </div>
    </section>
    </div>
  )
}

export default About