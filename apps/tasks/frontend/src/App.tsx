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
  const [history, setHistory] = useState<Array<Array<Task>>>([])
  const [tasks, setTasks] = useState<Array<Task>>([])

  useEffect(function () {
    getAllTasks().then((tasks) => {
      setTasks(tasks)
      setHistory((prev) => [...prev, tasks])
      setIsLoading(false)
    })
  }, [])

  const handleAddTask = async (task: Task) => {
    try {
      const localId = task.id
      setTasks((prev) => [task, ...prev])
      const newTask = await createTask(task)
      // thor mode 🤦 => only the server know the new id
      setTasks((prev) =>
        prev.map((task: Task) => {
          if (localId === task.id) {
            return { ...task, id: newTask.id }
          }

          return task
        })
      )
      setHistory((prev) => [...prev, tasks])
    } catch (e) {
      undo()
    }
  }

  const handleToggleTask = async (task: Task) => {
    try {
      const taskId = task.id
      setTasks((prev) =>
        prev.map((task: Task) => {
          if (taskId === task.id) {
            return { ...task, completed: !task.completed }
          }

          return task
        })
      )
      setHistory((prev) => [...prev, tasks])
      await updateTask(task)
    } catch (e) {
      console.error(e)
      undo()
    }
  }

  const handleRemoveTask = async (taskId: string) => {
    try {
      setTasks((prev) =>
        prev.filter((task: Task) => {
          return taskId !== task.id
        })
      )
      setHistory((prev) => [...prev, tasks])
      await deleteTask(taskId)
    } catch (e) {
      console.error(e)
      undo()
    }
  }

  const undo = () => {
    const lastTasks = history[history.length - 1]
    const newHistory = history.slice(0, history.length - 1)
    setTasks(lastTasks)
    setHistory(newHistory)
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
