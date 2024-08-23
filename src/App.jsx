import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("olive")

  return (
   <div className="w-full h-screen "
   style={{backgroundColor:color}}
   >
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-4 rounded-3xl'>
        <button 
        onClick={()=> setColor("red")}
         className='outline-none px-4 py-1 rounded-full text-white '
        style={{backgroundColor:"red"}}
        >Red</button>

         <button
         onClick={()=> setColor("royalblue")}
          className='outline-none px-4 py-1 rounded-full text-white '
        style={{backgroundColor:"royalblue"}}
        >Royalblue</button>

         <button 
         onClick={()=> setColor("crimson")}
         className='outline-none px-4 py-1 rounded-full text-white '
        style={{backgroundColor:"crimson"}}
        >Crimson</button>
         <button 
         onClick={()=> setColor("black")}
         className='outline-none px-4 py-1 rounded-full text-white '
        style={{backgroundColor:"black"}}
        >black</button>
      </div>
    </div>
   </div>
  )
}

export default App
