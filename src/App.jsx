import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Hospitals from "./pages/Hospitals"

function App() {

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospitals" element={<Hospitals />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
