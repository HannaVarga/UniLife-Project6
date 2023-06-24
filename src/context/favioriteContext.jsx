import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FavoriteContext = createContext();

export default function FavoriteContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [properties, setProperties] = useState([]);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  
  useEffect(() => {
    const storedFav = localStorage.getItem("favoritesItems");
    if (storedFav !== null) {
      setFavorites(JSON.parse(storedFav));
    }
  }, []);



  const addToFavorites = (item) => {
    let newFavorites = [...favorites, item];
    setFavorites(newFavorites);
    localStorage.setItem("favoritesItems", JSON.stringify(newFavorites));
  };

  const removeFromFavorites = (item) => {
    const newFavorites = favorites?.filter((newFav) => newFav?.id !== item);
    setFavorites(newFavorites);
    localStorage.setItem("favoritesItems", JSON.stringify(newFavorites));
  };

  console.log(favorites)


  const value = {
    properties,
    favorites,
    setFavorites,
    setProperties,
    addToFavorites,
    removeFromFavorites,
  };

  return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
}
