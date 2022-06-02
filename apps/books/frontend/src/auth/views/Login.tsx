import React, { FormEvent, useState } from "react"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    fetch("https://librarify.latteandfront.es/api/login_check", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email, password }),
    })
      .then(async (response) => {
        if (response.ok) {
          const json = await response.json()
          console.log(json)
        } else {
          console.log(response, "not ok")
        }
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className="row">
      <div className="col">
        <form onSubmit={handleSubmit}>
          <div className="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
              required={true}
              value={email}
              onChange={handleEmailChange}
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
              value={password}
              onChange={handlePasswordChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
