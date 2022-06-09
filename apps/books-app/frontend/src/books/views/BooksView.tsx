import BookList from "../components/BookList"
import Categories from "../components/Categories"
import Alert from "../../shared/components/ui/Alert"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

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
    <>
      <h1>Books - </h1>
      <hr />
      {hasSucceeded && <Alert type={"success"}>Book added!</Alert>}
      <Categories />
      <BookList />
    </>
  )
}

export default BooksView
