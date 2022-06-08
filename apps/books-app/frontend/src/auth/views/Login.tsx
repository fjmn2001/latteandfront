import React, { FormEvent, useState } from "react"
import LoginView from "./LoginView"
import apiClient from "../../shared/utils/apiClient"
import { useAuthContext } from "../contexts/authContext"

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
  const { login } = useAuthContext()

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
      const json = await apiClient.post("login_check", {
        username: form.email,
        password: form.password,
      })
      setRequestStatus({
        isLoading: false,
        hasFailed: false,
        hasSucceeded: true,
      })
      login(json.data)
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
