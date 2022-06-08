import apiClient from "../utils/apiClient"
import { useEffect, useState } from "react"

const useGetFetch = async <T>(path: string) => {
  const [requestStatus, setRequestStatus] = useState({
    isLoading: false,
    hasFailed: false,
    hasSucceeded: false,
  })
  const [json, setJson] = useState<T | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        setRequestStatus({
          isLoading: true,
          hasFailed: false,
          hasSucceeded: false,
        })
        const response = await apiClient.get(path)
        if (response.ok) {
          setRequestStatus({
            isLoading: false,
            hasFailed: false,
            hasSucceeded: true,
          })
          const json = await response.json()
          setJson(json)
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
    })()
  }, [])

  return [requestStatus, json]
}

export default useGetFetch
