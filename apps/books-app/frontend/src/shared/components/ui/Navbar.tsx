import { useAuthContext } from "../../../auth/contexts/authContext"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  const { logout } = useAuthContext()

  const handleLogout = () => {
    logout()
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/user/books">
        Latte and front - Books
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link " + (isActive ? "active" : "")
            }
            to="/user/books"
          >
            Books
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className={"nav-item nav-link text-info"}>Francisco</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
