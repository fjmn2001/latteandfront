import "./App.css"

import TasksFooter from "./components/TasksFooter"
import TasksHeader from "./components/TasksHeader"
import TasksBody from "./components/TasksBody"
import { useEffect, useState } from "react"
import { Task } from "./types"
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "./repositories/fetchTaskRepository"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tasks, setTasks] = useState<Array<Task>>([])

  useEffect(function () {
    getAllTasks().then((tasks) => {
      setTasks(tasks)
      setIsLoading(false)
    })
  }, [])

  const handleAddTask = async (task: Task) => {
    try {
      await createTask(task)
    } catch (e) {
      console.log(e, "handleAddTask")
    }
  }

  const handleToggleTask = async (task: Task) => {
    try {
      await updateTask(task)
    } catch (e) {
      console.log(e, "handleToggleTask")
    }
  }

  const handleRemoveTask = async (taskId: string) => {
    try {
      await deleteTask(taskId)
    } catch (e) {
      console.log(e, "handleRemoveTask")
    }
  }

  if (isLoading) {
    return <div>Cargando lista de tareas...</div>
  }

  return (
    <div className="d-flex justify-content-center container">
      <div className="col-md-8">
        <div className="card-hover-shadow-2x mb-3 card">
          <TasksHeader addTask={handleAddTask} />
          <TasksBody
            tasks={tasks}
            toggleTask={handleToggleTask}
            removeTask={handleRemoveTask}
          />
          <TasksFooter />
        </div>
      </div>
    </div>
  )
}

export default App
