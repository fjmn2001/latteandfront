import { useAuthContext } from "../../../auth/contexts/authContext"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  const { logout } = useAuthContext()

  const handleLogout = () => {
    logout()
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light px-4">
      <div className={"container-fluid"}>
        <Link className="navbar-brand" to="/user/books">
          <img src="/public/img/logo.svg" alt="30" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive ? "active" : "")
                }
                to="/user/books"
              >
                Books
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Francisco
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
