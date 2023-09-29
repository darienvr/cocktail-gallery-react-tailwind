export interface CocktailAPIInfo {
    idDrink: string;
    strDrink: string;
    strAlcoholic: string;
    strGlass: string;
    strDrinkThumb: string;
    strCategory: string;
    strInstructions: string;
}

export type ContextType = {
    cocktail: CocktailAPIInfo[];
    input: string;
    setInput: (e:string)=>void;
    handleInput: (e:React.ChangeEvent<HTMLInputElement>)=>void;
    setSearching: (e:boolean)=>void;
    setDarkMode: (e:boolean)=>void;
    darkMode: boolean;
    handleSearch: ()=>void;
}