import { Task } from "../types"
import React from "react"

interface Props {
  task: Task
  toggleTask: (taskId: string) => void
  removeTask: (taskId: string) => void
}

const TaskItem = ({ task, toggleTask, removeTask }: Props) => {
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    toggleTask(task.id)
  }

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault()
    removeTask(task.id)
  }

  return (
    <li className="list-group-item">
      <div className="widget-content p-0">
        <div className="widget-content-wrapper">
          <div
            className="widget-content-left"
            style={task.done ? { textDecoration: "line-through" } : {}}
          >
            <div className="widget-heading">{task.description}</div>
          </div>
          <div className="widget-content-right">
            {!task.done && (
              <button
                className="border-0 btn-transition btn btn-outline-success"
                onClick={handleToggle}
              >
                <i className="fa fa-toggle-on"></i>
              </button>
            )}

            {task.done && (
              <button
                className="border-0 btn-transition btn btn-outline-danger"
                onClick={handleToggle}
              >
                <i className="fa fa-toggle-off"></i>
              </button>
            )}

            <button
              className="border-0 btn-transition btn btn-outline-danger"
              onClick={handleRemove}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default TaskItem
