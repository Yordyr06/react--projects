import { useState } from 'react'
import { useStorage } from './Hooks/useStorage'
import { UI } from './Components/UI'

export function App() {
  const [ tasks, setTasks ] = useStorage('TASK_V1', [])
  const [ value, setFilter ] = useState('')

  const tasksCompleted = tasks.filter(
    task => !!task.completed 
  ).length
  const totalTasks = tasks.length

  const getTasks = tasks.filter(
    task => ( 
      task.text.toLowerCase()
      .includes(value.toLowerCase())
    )
  )
  
  const successTask = (text) => {
    const updateTasks = [...tasks]
    const index = updateTasks.findIndex(
      (task) => task.text === text
    )

    if (index !== -1) {
      updateTasks[index].completed = true
      setTasks(updateTasks)
    } else {
      console.error(`Task with text "${text} not found"`)
    }
  }

  const deleteTask = (text) => {
    const updateTasks = [...tasks]
    const index = updateTasks.findIndex(
      (task) => task.text == text
    )
    
    if (index !== -1) {
      updateTasks.splice(index, 1)
      setTasks(updateTasks)
    } else {
      console.error(`Task with text "${text} not found"`)
    }
  }

  return (
    <UI 
      tasksCompleted={tasksCompleted}
      totalTasks={totalTasks}
      value={value}
      setFilter={setFilter}
      tasks={tasks}
      setTasks={setTasks}
      getTasks={getTasks}
      successTask={successTask}
      deleteTask={deleteTask}
    />
  )
}