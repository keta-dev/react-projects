import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [results, setResults] = useState('')
  const [loading, setLoading] = useState(false)
  const [cocktails, setCocktail] = useState([])

  const fetchDrinks = useCallback(async () => {
    // setLoading(true)
    try {
      const response = await fetch(`${url}${results}`)
      const json = await response.json()
      const { drinks } = json
      if (drinks){
        const newDrink = drinks.map((drink) => {
          const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = drink
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktail(newDrink)
      } else {
        setCocktail([])
      }
      setLoading(false)
    } catch (err) {
      console.log(err.response)
      setLoading(false)
    }
  }, [results])

  useEffect(() => {
    fetchDrinks()
  }, [results, fetchDrinks])

  return (
    <AppContext.Provider
      value={{
        loading,
        results,
        cocktails,
        setResults,
      }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
