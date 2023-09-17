
const Navbar = () => {
  return (
    <nav className="bg-gray-50 w-full">
        <div className=" container mx-auto max-w-screen-xl flex items-center justify-between h-24 p-5 shadow-sm">
            <h1 className=" text-4xl font-bold flex-1">CocktailsDB</h1>
            <div className="text-right">
                <ul className="flex gap-8">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar