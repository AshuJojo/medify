import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Hospitals from "./pages/Hospitals";
import MyBookings from "./pages/MyBookings";

function App() {

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/myb0okings" element={<MyBookings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
