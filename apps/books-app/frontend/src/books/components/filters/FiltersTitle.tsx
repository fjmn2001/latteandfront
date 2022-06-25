import { useBooksContext } from "../../contexts/BooksContext"

const FiltersTitle = () => {
  const { search } = useBooksContext()

  return (
    <div className="row ps-1 mt-4">
      <h4 className={"sub-title"}>
        {search.length === 0 ? `All books` : `Books filtered by ${search}`}
      </h4>
    </div>
  )
}

export default FiltersTitle
