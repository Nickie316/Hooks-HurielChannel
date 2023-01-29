import { createContext, useState, useEffect } from "react"

export const CounterContext = createContext()

// Caso o State ainda esteja no App
/*export function CounterContextProvider({children, value}) {
   return(
      <CounterContext.Provider value={value}>
         { children }
      </CounterContext.Provider>
   )
}*/

export function CounterContextProvider({children}) {
   const [counter, setCounter] = useState(0)
   const [doubleCounter, setDoubleCounter] = useState(0)

   useEffect(() => {
      setDoubleCounter(counter * 2)
   }, [counter])

   const increaseCounter = () => { 
      setCounter(counter + 1)
   }

   return(
      <CounterContext.Provider value={{counter, setCounter, doubleCounter, increaseCounter}}>
         { children }
      </CounterContext.Provider>
   )
}