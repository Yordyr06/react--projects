import { useState } from "react"

export function withListener(WrappedComponent) {
  return function WrappedComponentWithListener(props) {
    const [storageChange, setStorageChange] = useState(false)

    window.addEventListener('storage', (change) => {
      if (change.key === "TASK_V1") {
        setStorageChange(true)
      }
    })

    const toggleShow = () => {
      props.syncTask()
      setStorageChange(false)
    }

    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={toggleShow}
      />
    )
  }
}