import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/login'
import Profile from './components/profile'

function App() {
  

  return (
    <UserContextProvider>
        <h1>react aur chai</h1>
        <Login/>
        <Profile/>
    </UserContextProvider>
  )
}

export default App
