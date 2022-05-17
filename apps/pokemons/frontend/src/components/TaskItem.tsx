import { Task } from "../types"
import React from "react"

interface Props {
  task: Task
  toggleTask: (task: Task) => void
  removeTask: (taskId: string) => void
}

const TaskItem = ({ task, toggleTask, removeTask }: Props) => {
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    toggleTask(task)
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
            style={task.completed ? { textDecoration: "line-through" } : {}}
          >
            <div className="widget-heading">{task.task}</div>
          </div>
          <div className="widget-content-right">
            {!task.completed && (
              <button
                className="border-0 btn-transition btn btn-outline-success"
                onClick={handleToggle}
              >
                <i className="fa fa-toggle-on"></i>
              </button>
            )}

            {task.completed && (
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
