import { Task } from "../types"
import { ChangeEvent, FormEvent, useState } from "react"
import { uuid } from "../utils"

interface Props {
  addTask: (task: Task) => void
}

const TasksHeader = ({ addTask }: Props) => {
  const [description, setDescription] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    addTask({
      id: uuid(),
      done: false,
      description,
    })
    setDescription("")
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="card-header-tab card-header">
        <div className="widget-content p-0" style={{ width: "100%" }}>
          <div className="widget-content-wrapper">
            <div className="widget-content-left" style={{ width: "100%" }}>
              <input
                type="text"
                className={"form-control"}
                value={description}
                onChange={handleChange}
              />
            </div>
            <div className="widget-content-right">
              <button
                type={"submit"}
                disabled={description.length === 0}
                className="border-0 btn-transition btn btn-outline-success"
              >
                <i className="fa fa-send"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default TasksHeader
