import useGetFetch from "../../shared/hooks/useGetFetch"
import { useParams } from "react-router-dom"
import { Book } from "../types"

interface BookResponse extends Book {}

const BookDetailView = () => {
  const { id } = useParams()
  const [, book] = useGetFetch<BookResponse>(`books/${id}`)

  if (book === null) {
    return "loading..."
  }

  const imagePath = book.image ?? "https://libro.latteandfront.es/img/logo.png"

  return (
    <>
      <h1>{book.title}</h1>
      <hr />
      <div className={"col"}>
        <div className={"card"}>
          <div className={"row g-0"}>
            <div className={"col-md-8"}>
              <div className={"card-body"}>
                <h5 className={"card-title"}>{book.title}</h5>
                <p className={"card-text"}>{book.description}</p>
              </div>
            </div>
            <div className={"col-md-4"}>
              <img
                className={"img-fluid rounded-start"}
                src={imagePath}
                alt={book.title}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookDetailView
