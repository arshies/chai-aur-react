import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import GitHub from './components/GitHub/GitHub.jsx'
import User from './components/User/User.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        path : '',
        element : <Home />
      },
      {
        path : '/about',
        element : <About />
      },
      {
        path : '/contact',
        element : <Contact />
      },
      {
        path : '/github',
        element : <GitHub />
      },
      {
        path : '/user/:id',
        element : <User />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
