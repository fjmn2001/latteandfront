import React, { FormEvent, ChangeEvent } from "react"

interface Props {
  handleSubmit: (e: FormEvent) => void
  form: { email: string; password: string }
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  requestStatus: {
    isLoading: boolean
    hasFailed: boolean
    hasSucceeded: boolean
  }
}

const LoginView = ({
  handleSubmit,
  form,
  handleInputChange,
  requestStatus,
}: Props) => {
  return (
    <div className="container">
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

export default LoginView
