import React from "react"
import ReactDOM from "react-dom/client"
import Login from "./auth/views/Login"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="container">
      <Login />
    </div>
  </React.StrictMode>
)
