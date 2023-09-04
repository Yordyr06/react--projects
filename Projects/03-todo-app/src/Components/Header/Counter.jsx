import { useContext } from 'react'
import { TaskContext } from '../../Hooks/useContext'

export function Counter() {
  const {
    completed,
    totalTasks
  } = useContext(TaskContext)
  
  return (
    <h2 className="
      text-lg
    ">
      You have completed <span className="font-bold">{completed}</span> of <span className="font-bold">{totalTasks}</span> Task
    </h2>
  )
}