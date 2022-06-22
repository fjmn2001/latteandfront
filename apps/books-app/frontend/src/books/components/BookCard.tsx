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
              Ver
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Editar
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Eliminar
            </a>
          </li>
        </ul>
      </div>
      <h5>YO NEGACIONISTA </h5>
      <p>
        Lorem ipsum dolor sitatede do eiusmod amete, consectetur adipiscing
        elit, sed do eiusmod temporde incididunt mut labore et dolore.
      </p>
      <a href="" className="ver-mas">
        Ver libro
      </a>
    </div>
  )
}

export default BookCard
