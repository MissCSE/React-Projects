import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myarr=[1,2,3]
  let myobj={
    username:"Neha",
    age:21
  }
  return (
    <>
    <h1 className='bg-green-400 text-white rounded-xl p-4 mb-4'>Tailwind Test</h1>
    <Card username="meandprocreate" somObj={myobj} arr={myarr}/>
    <Card username="Neha Sharma" btnText="Read more"/>
    </>
  )
}

export default App
