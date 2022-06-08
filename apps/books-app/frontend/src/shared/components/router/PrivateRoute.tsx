import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../../../auth/contexts/authContext"
import { LOGIN } from "../../../auth/config/routes/paths"

const PrivateRoute = () => {
  const { isLoggedIn } = useAuthContext()

  if (!isLoggedIn) {
    return <Navigate to={LOGIN} />
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default PrivateRoute
