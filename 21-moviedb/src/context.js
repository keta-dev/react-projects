import React, { useState, useContext } from 'react';
import useFetch from './useFetch';

// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_ACCESS_KEY}`
console.log(API_ENDPOINT)
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('avengers');
  const {isLoading, error, data: movies} = useFetch(`&s=${query}`)

  return (
    <AppContext.Provider value={{isLoading,movies,query,error,setQuery}}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
