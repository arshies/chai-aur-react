import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] =  useState(15)

  function addCount(){
    if(counter < 20){
      setCounter(counter + 1)
      console.log("added " , counter)
    }
    else{
      alert("cannot go above 20")

    }
  }

  function removeCount(){
    if(counter >0){
      setCounter(counter - 1)
      console.log("removed " , counter)
    }
    else{
      alert("cannot go below 0")

    }
  }

  return (
    <div>
        <h1>chai aur project</h1>
      <h3>counter : {counter}</h3>
      <br />
      <button onClick={addCount}>add value</button>
      <br /><br />
      <button onClick={removeCount}>decrease value</button>
    </div>
  )
}

export default App
