import './index.css'
import Login from "./Login"
import Register from "./Register"
import PageSelector from "./PageSelector"
import { Routes, Route } from "react-router-dom"
import NavBar from "./NavBar"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<PageSelector />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register className="register" />} />

      </Routes>
    </>
  )
}

export default App
