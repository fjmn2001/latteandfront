import React, { FormEvent, useState } from "react"
import { JWT_KEY } from "../../shared/const/app"

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  })
  const [requestStatus, setRequestStatus] = useState({
    isLoading: false,
    hasFailed: false,
    hasSucceeded: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((currentForm) => ({
      ...currentForm,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      setRequestStatus({
        isLoading: true,
        hasFailed: false,
        hasSucceeded: false,
      })
      const response = await fetch(
        "https://librarify.latteandfront.es/api/login_check",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: form.email,
            password: form.password,
          }),
        }
      )
      if (response.ok) {
        setRequestStatus({
          isLoading: false,
          hasFailed: false,
          hasSucceeded: true,
        })
        const json = await response.json()
        localStorage.setItem(JWT_KEY, JSON.stringify(json.data))
      } else {
        setRequestStatus({
          isLoading: false,
          hasFailed: true,
          hasSucceeded: false,
        })
      }
    } catch (e) {
      setRequestStatus({
        isLoading: false,
        hasFailed: true,
        hasSucceeded: false,
      })
    }
  }

  return (
    <div className="row">
      <div className="col">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
              required={true}
              name={"email"}
              value={form.email}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingEmail">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              required={true}
              name={"password"}
              value={form.password}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          {requestStatus.isLoading && (
            <div className="alert alert-info mt-3" role="alert">
              Loading...
            </div>
          )}
          {requestStatus.hasFailed && (
            <div className="alert alert-danger mt-3" role="alert">
              Invalid credentials
            </div>
          )}
          {requestStatus.hasSucceeded && (
            <div className="alert alert-success mt-3" role="alert">
              Welcome!
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
