import useGetFetch from "../../shared/hooks/useGetFetch"
import { generatePath, Link, useParams } from "react-router-dom"
import { Book } from "../types"
import { BOOK_DELETE } from "../config/router/paths"

interface BookResponse extends Book {}

const BookDetailView = () => {
  const { id } = useParams()
  const [, book] = useGetFetch<BookResponse>(`books/${id}`)

  if (book === null) {
    return <h1>loading...</h1>
  }

  const imagePath = book.image ?? "https://libro.latteandfront.es/img/logo.png"

  return (
    <>
      <h1>
        {book.title}

        <div className="btn-group ms-3" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ...
          </button>
          <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <li>
              <Link
                className={"dropdown-item"}
                to={generatePath(BOOK_DELETE, { id: book.id })}
              >
                Delete
              </Link>
            </li>
          </ul>
        </div>
      </h1>
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
