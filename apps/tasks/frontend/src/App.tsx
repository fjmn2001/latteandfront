import "./App.css"

import TasksFooter from "./components/TasksFooter"
import TasksHeader from "./components/TasksHeader"
import TasksBody from "./components/TasksBody"
import { useEffect, useState } from "react"
import { Task } from "./types"



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState<Array<Task>>([])

  useEffect(function() {
    async function fetchTasks() {
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:FpUXJg0g/todo');
      const json = await response.json();
      setTasks(json);
      setIsLoading(false);
    }
    fetchTasks();
  }, []);

  const handleAddTask = async (task: Task) => {
    const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:FpUXJg0g/todo', {
      method: 'POST',
      body: JSON.stringify({
        task: task.task,
        completed: false,
        important: false
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (response.ok) {
      async function fetchTasks() {
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:FpUXJg0g/todo');
        const json = await response.json();
        setTasks(json);
        setIsLoading(false);
      }
      fetchTasks();
    } else {
      const text = await response.text()
      console.log(text);
    }
  }

  const handleToggleTask = async (task: Task) => {
    const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:FpUXJg0g/todo/${task.id}`, {
      method: 'POST',
      body: JSON.stringify({
        task: task.task,
        completed: !task.completed,
        important: true
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (response.ok) {
      async function fetchTasks() {
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:FpUXJg0g/todo');
        const json = await response.json();
        setTasks(json);
        setIsLoading(false);
      }
      fetchTasks();
    } else {
      const text = await response.text()
      console.log(text);
    }
  }

  const handleRemoveTask = async (taskId: string) => {
    const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:FpUXJg0g/todo/${taskId}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      async function fetchTasks() {
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:FpUXJg0g/todo');
        const json = await response.json();
        setTasks(json);
        setIsLoading(false);
      }
      fetchTasks();
    } else {
      const text = await response.text()
      console.log(text);
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
