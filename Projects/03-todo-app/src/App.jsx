import { useState } from 'react'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Button } from './Components/Button'
import './App.css'

const defaultTasks = [
  {text: 'Dominar React', completed:false},
  {text: 'Dominar TypeScript', completed:false},
  {text: 'Dominar Tailwind', completed:true},
  {text: 'Dominar Angular', completed:false},
  {text: 'Toy probando la anchura deto', completed:false},
]

function App() {
  const [tasks, setTasks] = useState(defaultTasks)
  const [value, setFilter] = useState('')

  const tasksCompleted = tasks.filter(
    task => !!task.completed 
  ).length
  const totalTasks = tasks.length

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
      />

      <Button />
    </>
  )
}

export default App
