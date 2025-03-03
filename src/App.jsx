import {  Route, Routes } from "react-router"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import WhoisDetail from "./pages/WhoisDetail"
import Whois from "./components/Whois"

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="whois" element={<Whois />} />
          <Route path="whois/:domain" element={<WhoisDetail />} />
        </Route>
      </Routes>
    
  )
}

export default App
