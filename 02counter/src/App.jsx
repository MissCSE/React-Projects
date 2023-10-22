import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]= useState(10)
//  let counter = 15
  const addValue=()=>{
    
    counter+=1
    setCounter(counter)
    console.log("value addded",counter);
  }

  const removeValue=()=>{
    
    counter-=1;
    setCounter(counter)
    console.log("value removed",counter);
  }

  if(counter<=0){
    counter=0;
  }
  if(counter>=20){
    counter=20
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
