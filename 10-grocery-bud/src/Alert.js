import React, { useEffect } from 'react'

const Alert = ({ type, msg, removeAlert, list }) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert(alert)
    }, 3000);
    return () => clearTimeout(timeout)
  }, [list, removeAlert])

  return (
    <div>
      <p className={`alert alert-${type}`}>{msg}</p>
    </div>
  )
}

export default Alert
