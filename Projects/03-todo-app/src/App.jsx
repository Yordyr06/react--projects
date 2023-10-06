import React from 'react'
import { useTask } from './Utils/useTask'

import { Header } from './Components/Header/Header'
import { Counter } from './Components/Header/Counter'
import { Search } from './Components/Header/Search'

import { ModalPortal } from './Utils/ModalPortal'
import { Main } from './Components/Main/Main'
import { Button } from './Components/Button/Button'
import { TaskModal } from './Components/Button/TaskModal'


export function App() {
  const { tasksCompleted, totalTasks, value, setFilter } = useTask()

  return (
   <>
      <Header>
        <Counter 
          tasksCompleted={tasksCompleted}
          totalTasks={totalTasks}
        />

        <Search 
          value={value}
          setFilter={setFilter}
        />

      </Header>

      <Main />
      <Button />
      <ModalPortal>
        <TaskModal />
      </ModalPortal>
    </>
  )
}