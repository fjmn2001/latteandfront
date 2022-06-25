import { Book } from "../types"

interface Props extends Book {}

const BookCard = (book: Props) => {
  const imagePath = book.image ?? "https://libro.latteandfront.es/img/logo.png"

  return (
    <div className="card-book ">
      <img src={imagePath} alt={book.title} />
      <div className="dropdown option-card-book">
        <a
          className="dropdown-toggle"
          href="#"
          id="cardBook"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src="/public/img/icon-3-points.svg" alt="" />
        </a>
        <ul className="dropdown-menu" aria-labelledby="cardBook">
          <li>
            <a className="dropdown-item" href="#">
              More details
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Delete
            </a>
          </li>
        </ul>
      </div>
      <h5>{book.title}</h5>
      <p>{book.description}</p>
      <a href="" className="ver-mas">
        More details
      </a>
    </div>
  )
}

export default BookCard
