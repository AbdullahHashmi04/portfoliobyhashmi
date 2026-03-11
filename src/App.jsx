import { Outlet } from "react-router-dom";
import Navbar from "./MobileNav";

function App() {
  return (
    <div className="bg-[#0a0a1a] min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
