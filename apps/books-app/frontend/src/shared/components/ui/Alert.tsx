import React from "react"

interface Props {
  type: "info" | "danger" | "success" | "warning"
  children: React.ReactElement | string
}

const Alert = ({ type, children }: Props) => {
  return (
    <div className={"alert alert-" + type} role="alert">
      {children}
    </div>
  )
}

export default Alert
