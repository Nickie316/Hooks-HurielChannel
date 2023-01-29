import { useContext } from "react"
import { CounterContext } from "../contexts/CounterContext"

/*export default function HandleCounter({ counter, setCounter }: Props) { // Sem o Context
   const increaseCounter = () => { 
      setCounter(counter + 1)
   }

   return(
      <div>
         <h1>Counter: { counter } </h1>
         <button onClick={ increaseCounter }>Aumentar o Counter</button>
      </div>
   )
}*/


export default function HandleCounter() {
   const { counter, increaseCounter } = useContext(CounterContext)

   return(
      <div>
         <h1>Counter: { counter } </h1>
         <button onClick={ increaseCounter }>Aumentar o Counter</button>
      </div>
   )
}