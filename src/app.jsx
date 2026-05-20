import { HashRouter as Router, Routes, Route } from "react-router-dom"
import "./styles/app.css"

import Home from "./pages/home"
import About from "./pages/about"

import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
