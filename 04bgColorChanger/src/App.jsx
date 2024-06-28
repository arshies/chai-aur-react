import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ColorChange from  './colorChange'

function App() {
  let [color,setColor] = useState("olive")

  function changeColor(change)
{
  setColor(color = change );

}



  return (
    <>
      <div className='w-screen h-screen duration-200 p-0 ' style={{background : color}} >


        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='bg-white flex flex-wrap rounded-3xl shadow-lg gap-3'>
            <button className='px-4 py-1 rounded-full m-3 ' style={{background : "red"}} onClick={() => setColor("red")}>red</button>
            <button className='px-4 py-1 rounded-full m-3' style={{background : "green"}} onClick={() => setColor("green")} >green</button>
            <button className='px-4 py-1 rounded-full m-3' style={{background : "blue"}} onClick={() => setColor("blue")} >blue</button>
            <button className='px-4 py-1 rounded-full m-3' style={{background : "purple"}} onClick={() => setColor("purple")} >purple</button>
            <button className='px-4 py-1 rounded-full m-3  text-black border-black' style={{background : "white"}} onClick={() => setColor("white")} >white</button>
            <button className='px-4 py-1 rounded-full m-3' style={{background : "black"}} onClick={() => setColor("black")} >black</button>
            <button className='px-4 py-1 rounded-full m-3 text-black' style={{background : "yellow"}} onClick={() => setColor("yellow")} >yellow</button>
            
          </div>

        </div>
        

      </div>
    </>
  )
}

export default App
