import { ChangeEvent, useState } from "react"

const useForm = <T>(initialState: {}) => {
  type UseForm = [T, (e: ChangeEvent<HTMLInputElement>) => void, () => void]

  const [formValues, setFormValues] = useState(initialState)

  const reset = () => {
    setFormValues(initialState)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }))
  }

  return [formValues, handleInputChange, reset] as UseForm
}

export default useForm
