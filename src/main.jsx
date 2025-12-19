import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import Projects from './Projects.jsx'

const router = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children :[{
    index : true,
    element : <Home/>
  },{
    path : "/Projects",
    element : <Projects/>
  }]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
