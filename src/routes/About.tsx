
const About = () => {
  return (
    <div className=' dark:bg-gray-900 dark:text-white min-h-screen '>
      <section className='grid md:grid-cols-2 py-20 mx-auto max-w-[1180px] grid-cols-1 px-10 md:gap-10 gap-5'>
        <div className=' min-h-[400px] mx-auto'>
            <img className='min-h-full object-cover rounded-md' src="https://tiendaparatodos.com/wp-content/uploads/2022/08/coctel.jpeg" alt="Tienda de Cócteles" />
        </div>
        <div>
            <h3 className=' font-semibold text-3xl mb-8'>About Us</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
              took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
               but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
               1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
               publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    </section>
    </div>
  )
}

export default About