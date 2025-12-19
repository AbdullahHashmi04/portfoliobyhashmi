import { Outlet } from "react-router-dom"
import Home from "./Home"
import Navbar from "./MobileNav"
function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
   </>
  )
}

export default App
