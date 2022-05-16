import "./App.css"

import TasksFooter from "./components/TasksFooter"
import TasksHeader from "./components/TasksHeader"
import TasksBody from "./components/TasksBody"
import useTasks from "./hooks/useTasks"

function App() {
  const {
    isLoading,
    tasks,
    handleAddTask,
    handleToggleTask,
    handleRemoveTask,
  } = useTasks()

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
