import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../../../auth/contexts/authContext"
import { LOGIN } from "../../../auth/config/routes/paths"

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthContext()

  if (!isAuthenticated) {
    return <Navigate to={LOGIN} />
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default PrivateRoute
