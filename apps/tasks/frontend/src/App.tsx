import "./App.css"

import TasksFooter from "./components/TasksFooter"
import TasksHeader from "./components/TasksHeader"
import TasksBody from "./components/TasksBody"
import { useState } from "react"
import { Task } from "./types"

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([])

  const handleAddTask = (task: Task) => {
    setTasks((prev) => [task, ...prev])
  }

  const handleToggleTask = (taskId: string) => {
    setTasks((prev) => prev.map((task: Task) => {
      if (taskId === task.id) {
        return { ...task, done: !task.done }
      }

      return task
    }))
  }

  const handleRemoveTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task: Task) => {
      return taskId !== task.id
    }))
  }

  return (
    <div className="d-flex justify-content-center container">
      <div className="col-md-8">
        <div className="card-hover-shadow-2x mb-3 card">
          <TasksHeader addTask={ handleAddTask } />
          <TasksBody tasks={ tasks } toggleTask={ handleToggleTask } removeTask={handleRemoveTask} />
          <TasksFooter />
        </div>
      </div>
    </div>
  )
}

export default App
