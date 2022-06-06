import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"

const MY_AUTH_APP = "MY_AUTH_APP"

export const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
})

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem(MY_AUTH_APP) === "true"
  )

  const login = useCallback(() => {
    window.localStorage.setItem(MY_AUTH_APP, String(true))
    setIsAuthenticated(true)
  }, [])

  const logout = useCallback(() => {
    window.localStorage.removeItem(MY_AUTH_APP)
    setIsAuthenticated(false)
  }, [])

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
    }),
    [login, logout, isAuthenticated]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
