import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"

interface Value {
  search: string
  onSearch: (value: string) => void
}

const initialValue = {
  search: "",
  onSearch: (_: string) => {},
}

export const BooksContext = createContext<Value>(initialValue)

interface Props {
  children: React.ReactNode
}

export const BooksContextProvider = ({ children }: Props) => {
  const [search, setSearch] = useState("")

  const onSearch = useCallback((value: string) => {
    setSearch(value)
  }, [])

  const value = useMemo(
    () => ({
      search,
      onSearch,
    }),
    [search]
  )

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
}

export const useBooksContext = () => {
  return useContext(BooksContext)
}
