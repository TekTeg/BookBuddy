import { Link } from "react-router-dom"
import './index.css'
const NavBar = () => {
  return (<>
    <div class="nav-bar">
      <Link to={'/'} class="nav-bar-link">Books</Link>
      <Link to={'/login'} class="nav-bar-link">Login</Link>
      <Link to={'/register'} class="nav-bar-link">Register</Link>
    </div>
  </>
  )

}

export default NavBar