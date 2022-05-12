import { Task } from "../types"

interface Props {
  task: Task
}

const TaskItem = ({ task }: Props) => {
  return (
    <li className="list-group-item">
      <div className="widget-content p-0">
        <div className="widget-content-wrapper">
          <div className="widget-content-left">
            <div className="widget-heading">{ task.description }</div>
          </div>
          <div className="widget-content-right">
            <button className="border-0 btn-transition btn btn-outline-success">
              <i className="fa fa-check"></i></button>
            <button className="border-0 btn-transition btn btn-outline-danger">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default TaskItem
