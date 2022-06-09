import apiClient from "../utils/apiClient"
import { useState } from "react"
import { useAuthContext } from "../../auth/contexts/authContext"

interface RequestStatus {
  isLoading: boolean
  hasFailed: boolean
  hasSucceeded: boolean
}

const usePostFetch = <T>(
  path: string
): [RequestStatus, T | null, (data: object) => void] => {
  const [requestStatus, setRequestStatus] = useState({
    isLoading: false,
    hasFailed: false,
    hasSucceeded: false,
  })
  const [json, setJson] = useState<T | null>(null)
  const { authTokens } = useAuthContext()

  const handleRequest = async (data: object) => {
    try {
      setRequestStatus({
        isLoading: true,
        hasFailed: false,
        hasSucceeded: false,
      })
      const json = await apiClient.post(path, data, {
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
  }

  return [requestStatus, json, handleRequest]
}

export default usePostFetch
