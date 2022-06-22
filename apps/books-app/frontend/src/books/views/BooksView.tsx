import BookList from "../components/BookList"
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
      {hasSucceeded && <Alert type={"success"}>Book added!</Alert>}
      <div id="div-main-filters" className="div-shadow">
        <div className="div-title">
          <h1 className="title">Libros</h1>
          <div className="div-filter-seach">
            <div className="input-group seach-group">
              <input
                type="text"
                className="form-control seach"
                placeholder="Buscar"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary btn-seach"
                type="button"
                id="button-addon2"
              >
                <img src="/public/img/icon-seach.svg" alt="" />
              </button>
            </div>
            <button
              id="btn-filter"
              className="btn btn-outline-secondary btn-filter"
              type="button"
            >
              Filtros <img src="/public/img/icon-filter.svg" alt="" />
            </button>
            <button
              className="btn btn-outline-secondary btn-filter justify-content-center"
              type="button"
            >
              Crear
            </button>
          </div>
        </div>
        <div id="filters" className="filters s-show">
          <div className="row mb-4 mt-4">
            <div className="col-md-3">
              <label>Buscar </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <label>Buscar </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <label>Buscar </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <label>Buscar </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row mb-4">
            <div className="offset-8 col-md-4 d-flex justify-content-end">
              <button className="btn btn-secondary" type="button">
                Buscar
              </button>
              <button className="btn btn-outline-secondary ms-3" type="button">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row ps-1 mt-4">
        <h4 className=" sub-title">Todos los libros</h4>
      </div>
      <BookList />
    </>
  )
}

export default BooksView
