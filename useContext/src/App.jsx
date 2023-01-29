import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HandleCounter from './components/HandleCounter'
import { DoubleCounter } from './components/DoubleCounter'
import { CounterContext, CounterContextProvider } from './contexts/CounterContext'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    /*<div> // sem o Context
      <HandleCounter counter={ counter } setCounter={ setCounter } />
      <DoubleCounter counter={ counter } />
    </div>*/

    /*<CounterContext.Provider value={{counter, setCounter}}>
      <div>
        <HandleCounter/>
        <DoubleCounter />
      </div>
    </CounterContext.Provider>*/

    <CounterContextProvider>
      <div>
        <HandleCounter/>
        <DoubleCounter />
      </div>
    </CounterContextProvider>
  )
}

export default App
