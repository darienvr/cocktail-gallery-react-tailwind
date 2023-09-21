import Navbar from './Navbar';
import {fireEvent, render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('Navbar', ()=>{

    beforeEach(()=>{
        render(<Navbar />, {wrapper: BrowserRouter})
    })

    test('Se muestra el titulo de la aplicacion dentro del Navbar', ()=>{
        expect(screen.getByText('CocktailsDB')).toBeDefined()
    });

    test('Se muestran los enlaces del componente', ()=>{
        expect(screen.getByText(/Home/i)).toBeDefined()
        expect(screen.getByText('About')).toBeDefined()
    })

    test('El enlace about te dirige a: /about', ()=>{
        const button = screen.getByText('About');
        fireEvent.click(button);
        expect(window.location.pathname).toBe('/about')
    })

    test('El enlace home te dirige a: /', ()=>{
        const button = screen.getByText('Home');
        fireEvent.click(button);
        expect(window.location.pathname).toBe('/')
    })
})