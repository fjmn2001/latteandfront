import { Task } from "../types"

export const createTask = (task: Task): Promise<Task> => {
  return fetch("https://x8ki-letl-twmt.n7.xano.io/api:FpUXJg0g/todo", {
    method: "POST",
    body: JSON.stringify({
      task: task.task,
      completed: false,
      important: false,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("not ok")
    }
    return response.json()
  })
}

export const updateTask = (task: Task): Promise<Task> => {
  return fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:FpUXJg0g/todo/${task.id}`,
    {
      method: "POST",
      body: JSON.stringify({
        task: task.task,
        completed: !task.completed,
        important: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  ).then((response) => {
    if (!response.ok) {
      throw new Error("not ok")
    }
    return response.json()
  })
}

export const getAllTasks = (): Promise<Array<Task>> => {
  return fetch("https://x8ki-letl-twmt.n7.xano.io/api:FpUXJg0g/todo", {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("not ok")
    }
    return response.json()
  })
}

export const deleteTask = (taskId: string): Promise<null> => {
  return fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:FpUXJg0g/todo/${taskId}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  ).then((response) => {
    if (!response.ok) {
      throw new Error("not ok")
    }
    return response.json()
  })
}
