import React, { FormEvent, useState } from "react"
import { JWT_KEY } from "../../shared/const/app"
import LoginView from "./LoginView"
import apiClient from "../../shared/utils/apiClient"

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
      const response = await apiClient.post("login_check", {
        username: form.email,
        password: form.password,
      })
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
    <LoginView
      handleSubmit={handleSubmit}
      form={form}
      handleInputChange={handleInputChange}
      requestStatus={requestStatus}
    />
  )
}

export default Login
