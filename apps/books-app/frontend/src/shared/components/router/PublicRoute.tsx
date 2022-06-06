import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../../../auth/contexts/authContext"

const PublicRoute = () => {
  const { isAuthenticated } = useAuthContext()

  if (isAuthenticated) {
    return <Navigate to={"/private"} />
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default PublicRoute
