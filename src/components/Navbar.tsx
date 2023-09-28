import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-50 w-full shadow-sm border "> 
        <div className=" container mx-auto max-w-screen-xl flex items-center justify-between h-24 p-5 ">
            <h1 className=" text-4xl font-bold flex-1">CocktailsDB</h1>
            <div className="text-right">
                <ul className="flex gap-8">
                    <li className="hover:scale-110 transition-all">
                      <Link to="/">
                        Home
                      </Link>
                    </li>
                    <li className="hover:scale-110 transition-all">
                      <Link to="/about">
                        About
                      </Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar