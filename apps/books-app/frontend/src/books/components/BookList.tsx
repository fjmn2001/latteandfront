import BookItem from "./BookItem"
import { useState } from "react"
import { Book } from "../types"

const BookList = () => {
  const [books, setBooks] = useState<Array<Book>>([])

  return (
    <div className={"row row-cols-1 row-cols-md-3 g-3"}>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  )
}

export default BookList
