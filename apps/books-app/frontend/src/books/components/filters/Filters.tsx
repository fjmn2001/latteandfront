import { ChangeEvent } from "react"
import { useBooksContext } from "../../contexts/BooksContext"

const Filters = () => {
  const { search, onSearch } = useBooksContext()

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value)
  }

  return (
    <div id="div-main-filters" className="div-shadow">
      <div className="div-title">
        <h1 className="title">Books</h1>
        <div className="div-filter-search">
          <div className="input-group search-group">
            <input
              type="text"
              className="form-control search"
              placeholder="Search"
              value={search}
              onChange={handleSearch}
            />
            <button
              className="btn btn-outline-secondary btn-search"
              type="button"
              id="button-addon2"
            >
              <img src="/public/img/icon-search.svg" alt="" />
            </button>
          </div>
          <button
            id="btn-filter"
            className="btn btn-outline-secondary btn-filter"
            type="button"
          >
            Filters <img src="/public/img/icon-filter.svg" alt="" />
          </button>
          <button
            className="btn btn-outline-secondary btn-filter justify-content-center"
            type="button"
          >
            Create
          </button>
        </div>
      </div>
      <div id="filters" className="filters s-show">
        <div className="row mb-4 mt-4">
          <div className="col-md-3">
            <label>Search </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-3">
            <label>Search </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-3">
            <label>Search </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-3">
            <label>Search </label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row mb-4">
          <div className="offset-8 col-md-4 d-flex justify-content-end">
            <button className="btn btn-secondary" type="button">
              Search
            </button>
            <button className="btn btn-outline-secondary ms-3" type="button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filters
