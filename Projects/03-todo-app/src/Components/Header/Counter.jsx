import { useContext } from 'react'
import { AppContext } from '../../Utils/AppContext'

export function Counter() {
  const {
    completed,
    totalTasks
  } = useContext(AppContext)
  
  return (
    <h2 className="
      text-lg
    ">
      You have completed <span className="font-bold">{completed}</span> of <span className="font-bold">{totalTasks}</span> Task
    </h2>
  )
}