const API_URL = "https://librarify.latteandfront.es/api"

const apiClient = {
  get: async (path: string, headers: object = {}) => {
    const response = await fetch(`${API_URL}/${path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    })

    if (response.ok) {
      return response.status === 204 ? null : await response.json()
    } else {
      const json = await response.json()
      throw new Error(JSON.parse(json))
    }
  },
  post: async (path: string, data: object, headers: object = {}) => {
    const response = await fetch(`${API_URL}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      return response.status === 204 ? null : await response.json()
    } else {
      const json = await response.json()
      throw new Error(JSON.parse(json))
    }
  },
}

export default apiClient
