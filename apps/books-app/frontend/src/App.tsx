import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LOGIN } from "./auth/config/routes/paths"
import Login from "./auth/views/Login"
import { AuthContextProvider } from "./auth/contexts/authContext"
import PublicRoute from "./shared/components/router/PublicRoute"
import PrivateRoute from "./shared/components/router/PrivateRoute"

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN} element={<PublicRoute />}>
            <Route index element={<Login />}></Route>
          </Route>
          <Route path={"/private"} element={<PrivateRoute />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
