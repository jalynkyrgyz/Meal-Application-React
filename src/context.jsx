import React, { useState, useContext, useEffect} from "react";
import axios from "axios";

const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
const randomMeal = 'www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({children}) => {

    const fetchMeals = async (url) => {    
        try {
          const response = await axios(url)
         console.log(response)       
        }
        catch (error) {
          console.log(error)
        }        
      }    
      useEffect(() => {
        fetchMeals(allMealsUrl)
      }, [])

    return <AppContext.Provider value={{name: 'John', role: 'Student'}}>
        {children}
    </AppContext.Provider>
}

    export const useGlobalContext = () => {
        return useContext(AppContext)
    }

export {AppContext, AppProvider}