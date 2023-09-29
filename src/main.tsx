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
import { AppProvider } from './context.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: '/cocktail/:id',
    element: (
      <>
        <Navbar />
        <SingleCocktail />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
    <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
)
