import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DispCard from './card.jsx'

function App() {

  let photo = "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"

  return (
    <>
     
      <h1 className='bg-green-400 p-4 text-black rounded-xl mb-4'  >tailwind Test</h1>

      <DispCard imgURL="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" 
       name = "delba"
       btntext = "click me"
      />
      <DispCard imgURL="https://i.pinimg.com/564x/b8/6c/45/b86c4516be31199f34e7dfbb837081ba.jpg" 
       name = "itachi"
       btntext = "visit me"
      />

    </>
  )
}

export default App
