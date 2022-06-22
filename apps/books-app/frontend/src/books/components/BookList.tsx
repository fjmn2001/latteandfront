import BookItem from "./BookItem"
import { Book } from "../types"
import useGetFetch from "../../shared/hooks/useGetFetch"
import BookCard from "./BookCard"

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
    <div className={"list-books"}>
      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  )
}

export default BookList
