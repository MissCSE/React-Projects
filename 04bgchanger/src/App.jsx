import { useState } from "react"


function App() {
  
  const [color,setColor]=useState("olive")
  return (
    <>
    <h1 className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 text-white font-medium"
    style={{backgroundColor:"gray", fontSize:"50px"}}>BG Changer</h1>
     <div className="w-full h-screen duration-200"
     
     style={{backgroundColor:color}}>

     </div>

     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
      <button onClick={()=>setColor("red")} className="outline-none px-4 rounded-full text-white shadow-xl" style={{backgroundColor:"red"}}>Red</button>
      <button onClick={()=>setColor("green")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
      <button onClick={()=>setColor("blue")} className="outline-none px-4 rounded-full text-white shadow-xl" style={{backgroundColor:"blue"}}>Blue</button>
      <button onClick={()=>setColor("olive")} className="outline-none px-4 rounded-full text-white shadow-xl" style={{backgroundColor:"olive"}}>Olive</button>
      <button onClick={()=>setColor("yellow")} className="outline-none px-4 rounded-full shadow-xl" style={{backgroundColor:"yellow"}}>Yellow</button>
      <button onClick={()=>setColor("pink")} className="outline-none px-4 rounded-full text-white shadow-xl" style={{backgroundColor:"pink"}}>Pink</button>
      <button onClick={()=>setColor("cyan")} className="outline-none px-4 rounded-full text-white shadow-xl" style={{backgroundColor:"cyan"}}>Cyan</button>
      
      </div>
     
     </div>
    </>
  )
}

export default App
