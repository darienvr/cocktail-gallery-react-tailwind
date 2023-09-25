import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.tsx'
import Home from './routes/Home.tsx'
import About from './routes/About.tsx'
import SingleCocktail from './routes/SingleCocktail.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "cocktail/:id",
        element: <SingleCocktail />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
