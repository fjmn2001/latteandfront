import useGetFetch from "../../shared/hooks/useGetFetch"
import Alert from "../../shared/components/ui/Alert"

type CategoriesResponse = Array<string>

const Categories = () => {
  const [, categories] = useGetFetch<CategoriesResponse>("categories")

  if (categories === null) {
    return <Alert type={"info"}>loading...</Alert>
  }

  return (
    <div className="mb-3 col-3">
      <label className="form-label">Categories</label>
      <select className="form-select">
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Categories
