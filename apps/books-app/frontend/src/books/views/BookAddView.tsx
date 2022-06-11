import useForm from "../../shared/hooks/useForm"
import usePostFetch from "../../shared/hooks/usePostFetch"
import React, { FormEvent, useState } from "react"
import { Navigate } from "react-router-dom"
import base64String from "../../shared/utils/base64String"

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
  const [file, setFile] = useState<string | null>(null)
  const [base64Image, setBase64Image] = useState<string | null>(null)
  const [status, , handleRequest] = usePostFetch("books")
  const { title, description } = formValues

  if (status.hasSucceeded) {
    return (
      <Navigate to={"/user/books"} state={{ hasSucceeded: true }}></Navigate>
    )
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (title.trim().length === 0) {
      throw new Error("Title is required.")
    }

    handleRequest({
      title,
      base64Image,
    })
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return
    }
    setFile(URL.createObjectURL(e.target.files[0]))
    setBase64Image(await base64String(e.target.files[0]))
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
            <div className={"row"}>
              <div className={"col-6"}>
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
                  disabled={status.isLoading}
                >
                  Add
                </button>
              </div>
              <div className={"col-6"}>
                <input type="file" onChange={handleFileChange} />
                <img
                  className={"img-fluid " + (!file ? "visually-hidden" : "")}
                  style={{ maxHeight: "480px" }}
                  src={file ?? ""}
                  alt={"portrait"}
                  id={"portrait"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default BookAddView
