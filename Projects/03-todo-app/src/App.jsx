import { useState } from 'react'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Button } from './Components/Button'
import './App.css'

const useStorage = (storage, initialStorage) => {
  let dataList 
  const getStorage = localStorage.getItem(storage)

  if(getStorage) {
    dataList = JSON.parse(getStorage)
  } else {
    localStorage.setItem(getStorage, JSON.stringify(initialStorage)),
    dataList = initialStorage
  }

  const [data, setData] = useState(dataList)

  const setStorage = (newStorage) => {
    localStorage.setItem(getStorage, JSON.stringify(newStorage))
    setData(newStorage)
  }

  return [ data, setStorage ]
}

function App() {
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
