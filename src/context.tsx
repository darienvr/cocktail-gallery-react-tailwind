import { useState, useEffect, useContext, createContext, ReactNode, useCallback} from "react";
import type { CocktailAPIInfo } from './types'

interface Props {
    children: ReactNode;
}

const AppContext = createContext({});

const AppProvider = ({children}: Props) => {

    const [cocktail, setCocktail] = useState<CocktailAPIInfo[]>([]);
    const [input, setInput] = useState('');
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        return storedDarkMode === 'true';
    });

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode.toString());
    }, [darkMode]);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`);
            const data = await response.json();
            setCocktail(data.drinks);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [input]);

    useEffect(() => {
        fetchData();
    }, []);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const handleSearch = () => {
        fetchData();
    }

    return(
        <AppContext.Provider value={{
            cocktail, 
            input,
            handleInput,
            setDarkMode,
            darkMode,
            setInput,
            handleSearch
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider}

