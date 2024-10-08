import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);           // counter and setCounter is only a variable name not keyword

  const addValue = () => {
    // counter = counter + 1; 
    // setCounter(counter); or
    setCounter(counter + 1);
    // console.log("clicked", counter);
  }
  
  const minusValue = () => {
      setCounter(counter - 1);
    }
  
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={minusValue}> Decrease Value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
