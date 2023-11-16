import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='dark:bg-gray-900 h-[90vh] dark:text-white pb-5'>
        <div className='mx-auto w-fit pt-40 text-center'>
            <h1 className=' text-8xl'>404</h1>
            <h4 className=' text-2xl pb-5'>Sorry, the page you tried cannot be found</h4>
            <Link to='/' className=' bg-green-600 p-2 rounded-md hover:bg-green-500 transition-colors text-white font-semibold w-fit'>
                Back Home
            </Link>
        </div>
    </div>
  )
}

export default NotFound