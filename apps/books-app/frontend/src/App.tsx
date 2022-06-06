import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LOGIN } from "./auth/config/routes/paths"
import Login from "./auth/views/Login"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN} element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
