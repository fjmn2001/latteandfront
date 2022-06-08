import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"

interface AuthTokens {
  token: string
  refresh_token: string
}

const MY_AUTH_APP = "MY_AUTH_APP"

export const AuthContext = createContext({
  login: (authTokens: AuthTokens) => {
    console.log(authTokens)
  },
  logout: () => {},
  authTokens: { token: "", refresh_token: "" },
  isLoggedIn: false,
})

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const authTokensInLocalStorage = window.localStorage.getItem(MY_AUTH_APP)
  const [authTokens, setAuthTokens] = useState(
    authTokensInLocalStorage === null
      ? null
      : JSON.parse(authTokensInLocalStorage)
  )

  const login = useCallback((authTokens: AuthTokens) => {
    window.localStorage.setItem(MY_AUTH_APP, JSON.stringify(authTokens))
    setAuthTokens(authTokens)
  }, [])

  const logout = useCallback(() => {
    window.localStorage.removeItem(MY_AUTH_APP)
    setAuthTokens(null)
  }, [])

  const value = useMemo(
    () => ({
      login,
      logout,
      authTokens,
      isLoggedIn: authTokens !== null,
    }),
    [authTokens, login, logout]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
