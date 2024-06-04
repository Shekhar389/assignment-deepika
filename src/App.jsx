import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ContactUs } from "./components/ContactUs"
import Home from "./components/Home"
import { Toggle } from "./components/Toggle"
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/toggle" element={<Toggle/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
