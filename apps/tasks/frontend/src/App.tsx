import "./App.css"

import TasksFooter from "./components/TasksFooter"
import TasksHeader from "./components/TasksHeader"
import TasksBody from "./components/TasksBody"
import { useState } from "react"
import { Task } from "./types"

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([])

  const handleAddTask = (task: Task) => setTasks((prev) => [task, ...prev])

  return (
    <div className="d-flex justify-content-center container">
      <div className="col-md-8">
        <div className="card-hover-shadow-2x mb-3 card">
          <TasksHeader addTask={ handleAddTask } />
          <TasksBody tasks={ tasks } />
          <TasksFooter />
        </div>
      </div>
    </div>
  )
}

export default App
