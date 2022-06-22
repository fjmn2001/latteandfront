import apiClient from "../utils/apiClient"
import { useEffect, useState } from "react"
import { useAuthContext } from "../../auth/contexts/authContext"

interface RequestStatus {
  isLoading: boolean
  hasFailed: boolean
  hasSucceeded: boolean
}

const useGetFetch = <T>(path: string): [RequestStatus, T | null] => {
  const [requestStatus, setRequestStatus] = useState({
    isLoading: true,
    hasFailed: false,
    hasSucceeded: false,
  })
  const [json, setJson] = useState<T | null>(null)
  const { authTokens } = useAuthContext()

  useEffect(() => {
    ;(async () => {
      try {
        setRequestStatus({
          isLoading: true,
          hasFailed: false,
          hasSucceeded: false,
        })
        const json = await apiClient.get(path, {
          Authorization: `Bearer ${authTokens.token}`,
        })

        setRequestStatus({
          isLoading: false,
          hasFailed: false,
          hasSucceeded: true,
        })

        setJson(json)
      } catch (e) {
        setRequestStatus({
          isLoading: false,
          hasFailed: true,
          hasSucceeded: false,
        })
      }
    })()
  }, [path])

  return [requestStatus, json]
}

export default useGetFetch
