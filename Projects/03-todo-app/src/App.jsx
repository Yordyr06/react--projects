import { useState } from 'react'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Button } from './Components/Button'
import './App.css'

// const defaultTasks = [
//   {text: 'Dominar React', completed:false},
//   {text: 'Dominar TypeScript', completed:false},
//   {text: 'Dominar Tailwind', completed:true},
//   {text: 'Dominar Angular', completed:false},
//   {text: 'Toy probando la anchura deto', completed:true},
// ]

function App() {
  let taskList 
  const storage = localStorage.getItem('TASK_V1')

  if(storage) {
    taskList = JSON.parse(storage)
  } else {
    localStorage.setItem('TASK_V1', JSON.stringify([])),
    taskList = []
  }
  
  const [tasks, setTasks] = useState(taskList)
  const [value, setFilter] = useState('')

  const tasksCompleted = tasks.filter(
    task => !!task.completed 
  ).length
  const totalTasks = tasks.length

  const getTasks = tasks.filter(
    task => ( 
      task.text.toLowerCase()
      .includes(value.toLowerCase())
    ))

  const setStorage = (newStorage) => {
    localStorage.setItem('TASK_V1', JSON.stringify(newStorage))
    setTasks(newStorage)
  }
  
  const successTask = (text) => {
    const updateTasks = [...tasks]
    const index = updateTasks.findIndex(
      (task) => task.text === text)

    if (index !== -1) {
      updateTasks[index].completed = true
      setStorage(updateTasks)
    } else {
      console.error(`Task with text "${text} not found"`)
    }
  }

  const deleteTask = (text) => {
    const updateTasks = [...tasks]
    const index = updateTasks.findIndex(
      (task) => task.text == text)
    
    if (index !== -1) {
      updateTasks.splice(index, 1)
      setStorage(updateTasks)
    } else {
      console.error(`Task with text "${text} not found"`)
    }
  }

  return (
    <>
      <Header
        completed={tasksCompleted}
        totalTasks={totalTasks}
        value={value}
        setFilter={setFilter}
      />

      <Main
        tasks={tasks}
        setTasks={setTasks}
        getTasks={getTasks}
        successTask={successTask}
        deleteTask={deleteTask}
      />

      <Button />
    </>
  )
}

export default App
