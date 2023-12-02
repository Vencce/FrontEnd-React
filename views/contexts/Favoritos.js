import { createContext, useState } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = "myFavorites"

export default function FavoritesProvider({ children}) {
    const [ favorite, setFavorite ] = useState([])

    return (
        <FavoritesContext.Provider
            value={{ favorite, setFavorite }}
        >
            { children }
        </FavoritesContext.Provider>
    );
}