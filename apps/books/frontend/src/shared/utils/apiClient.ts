const API_URL = "https://librarify.latteandfront.es/api"

const apiClient = {
  post: async (path: string, data: object) => {
    return await fetch(`${API_URL}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  },
}

export default apiClient
