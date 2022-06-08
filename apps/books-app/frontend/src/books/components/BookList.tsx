import BookItem from "./BookItem"
import { Book } from "../types"
import useGetFetch from "../../shared/hooks/useGetFetch"

interface BooksResponse {
  data: Array<Book>
  itemsPerPage: number
  page: number
  total: number
}

const BookList = () => {
  const [, booksResponse] = useGetFetch<BooksResponse>("books")
  const books = booksResponse ? booksResponse.data : []

  return (
    <div className={"row row-cols-1 row-cols-md-3 g-3"}>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  )
}

export default BookList
