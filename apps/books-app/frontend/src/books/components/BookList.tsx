import { Book } from "../types"
import useGetFetch from "../../shared/hooks/useGetFetch"
import BookCard from "./BookCard"
import { useBooksContext } from "../contexts/BooksContext"

interface BooksResponse {
  data: Array<Book>
  itemsPerPage: number
  page: number
  total: number
}

const BookList = () => {
  const { search } = useBooksContext()
  const [, booksResponse] = useGetFetch<BooksResponse>("books")
  const books = booksResponse ? booksResponse.data : []
  const booksFiltered = books.filter((book) =>
    book.title.toLowerCase().includes(search)
  )

  return (
    <div className={"list-books"}>
      {booksFiltered.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  )
}

export default BookList
