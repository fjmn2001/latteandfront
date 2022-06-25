import BookList from "../components/BookList"
import Alert from "../../shared/components/ui/Alert"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import Filters from "../components/filters/Filters"
import { BooksContextProvider } from "../contexts/BooksContext"
import FiltersTitle from "../components/filters/FiltersTitle"

const BooksView = () => {
  const { state } = useLocation()
  const [hasSucceeded, setHasSucceeded] = useState(
    (state as { hasSucceeded: boolean })?.hasSucceeded ?? false
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasSucceeded(() => false)
    }, 3000)

    return () => window.clearTimeout(timer)
  }, [hasSucceeded])

  return (
    <BooksContextProvider>
      {hasSucceeded && <Alert type={"success"}>Book added!</Alert>}
      <Filters />
      <FiltersTitle />
      <BookList />
    </BooksContextProvider>
  )
}

export default BooksView
