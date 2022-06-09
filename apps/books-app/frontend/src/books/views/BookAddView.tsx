import useForm from "../../shared/hooks/useForm"
import usePostFetch from "../../shared/hooks/usePostFetch"
import React, { FormEvent } from "react"

export interface Book {
  id: string
  title: string
  description: string | null
}

const BookAddView = () => {
  const [formValues, handleInputChange] = useForm<Book>({
    id: "",
    title: "",
    description: "",
  })
  const [status, , handleRequest] = usePostFetch("books")
  const { title, description } = formValues

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    handleRequest({
      title,
    })
    console.log("handleSubmit", status)
  }

  return (
    <>
      <h1>Add book</h1>
      <hr />
      <div className={"row"}>
        <div className={"col-12"}>
          <h4>Add book</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={"Title"}
              className={"form-control"}
              name={"title"}
              autoComplete={"off"}
              onChange={handleInputChange}
              value={title}
            />
            <input
              type="text"
              placeholder={"Description"}
              className={"form-control mt-1"}
              name={"description"}
              autoComplete={"off"}
              onChange={handleInputChange}
              value={description ?? ""}
            />
            <button
              type={"submit"}
              className={"btn btn-outline-primary mt-1 w-100"}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default BookAddView
