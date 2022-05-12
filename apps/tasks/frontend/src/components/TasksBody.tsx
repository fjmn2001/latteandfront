import TaskItem from "./TaskItem"
import { Task } from "../types"

interface Props {
  tasks: Array<Task>
  toggleTask: (taskId: string) => void
  removeTask: (taskId: string) => void
}

const TasksBody = ({ tasks, toggleTask, removeTask }: Props) => {
  return (
    <div className="scroll-area-sm">
      <div style={{ position: "static" }} className="ps ps--active-y">
        <div className="ps-content">
          <ul className=" list-group list-group-flush">
            {tasks.map((task) => (
              <TaskItem
                task={task}
                key={task.id}
                toggleTask={toggleTask}
                removeTask={removeTask}
              />
            ))}
            {tasks.length === 0 && (
              <li className="list-group-item">
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left">
                      <div className="widget-heading">
                        No tienes tareas creadas 😭
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TasksBody
