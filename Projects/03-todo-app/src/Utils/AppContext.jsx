import { useState, createContext } from "react";
import { useStorage } from "./AppStorage"

const AppContext = createContext();
function TaskProvider({children}) {
  const { 
    data: tasks, 
    setStorage: setTasks,
    loading,
    error 
  }  = useStorage('TASK_V1', [])
  const [ value, setFilter ] = useState('')
  const [ getModal, setModal ] = useState(false)

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

  const addTask = (text) => {
    const updateTasks = [...tasks]
    updateTasks.push({
      text,
      completed: false
    })
    setTasks(updateTasks)
  }

  return (
    <AppContext.Provider value={{
      loading,
      error,
      tasksCompleted,
      totalTasks,
      value,
      setFilter,
      tasks,
      setTasks,
      getTasks,
      successTask,
      deleteTask,
      addTask,
      getModal,
      setModal
    }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, TaskProvider }