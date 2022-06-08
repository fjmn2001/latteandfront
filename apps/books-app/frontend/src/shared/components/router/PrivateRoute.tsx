import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../../../auth/contexts/authContext"
import { LOGIN } from "../../../auth/config/routes/paths"
import Navbar from "../ui/Navbar"

const PrivateRoute = () => {
  const { isLoggedIn } = useAuthContext()

  if (!isLoggedIn) {
    return <Navigate to={LOGIN} />
  }

  return (
    <>
      <Navbar />
      <div className={"container"}>
        <Outlet />
      </div>
    </>
  )
}

export default PrivateRoute
