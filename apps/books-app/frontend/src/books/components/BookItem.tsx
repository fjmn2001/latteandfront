import { Book } from "../types"
import { Link } from "react-router-dom"

interface Props extends Book {}

const BookItem = (book: Props) => {
  const imagePath = book.image ?? "https://libro.latteandfront.es/img/logo.png"

  return (
    <div className={"col"}>
      <div className={"card"}>
        <div className={"row g-0"}>
          <div className={"col-md-4"}>
            <img
              className={"img-fluid rounded-start"}
              src={imagePath}
              alt={book.title}
            />
          </div>
          <div className={"col-md-8"}>
            <div className={"card-body"}>
              <h5 className={"card-title"}>{book.title}</h5>
              <p className={"card-text"}>{book.description}</p>
              <Link to={`books/${book.id}`}>More...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookItem
