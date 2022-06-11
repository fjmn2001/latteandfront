const base64String = (file: Blob): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onloadend = function () {
      resolve(reader.result as string)
    }
    reader.readAsDataURL(file)
  })
}

export default base64String
