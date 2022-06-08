import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../../../auth/contexts/authContext"

const PublicRoute = () => {
  const { isLoggedIn } = useAuthContext()

  if (isLoggedIn) {
    return <Navigate to={"/user/books"} />
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default PublicRoute
