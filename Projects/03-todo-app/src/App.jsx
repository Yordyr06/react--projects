import React from 'react'
import { useTask } from './Utils/useTask'
import { ModalPortal } from './Utils/ModalPortal'

import { Header } from './Components/Header/Header'
import { Counter } from './Components/Header/Counter'
import { Search } from './Components/Header/Search'

import { Main } from './Components/Main/Main'
import { MainLoader } from './Components/Main/MainLoader'
import { Error } from './Components/Main/Error'
import { EmptyBox } from './Components/Main/EmptyBox'
import { Tasks } from './Components/Main/Tasks'


import { Button } from './Components/Button/Button'
import { TaskModal } from './Components/Button/TaskModal'

export function App() {
  const { 
    tasksCompleted, 
    totalTasks, 
    value, 
    setFilter, 
    loading,
    error,
    getTasks,
    successTask,
    deleteTask,
    addTask,
    getModal,
    setModal,
  } = useTask()

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

      <Main
        error={ error }
        loading={ loading }
        getTasks={ getTasks }
        onError={ <Error /> }
        onLoading={ <MainLoader /> }
        onEmpty={ <EmptyBox /> }
        render={
          <Tasks 
            getTasks={getTasks}
            successTask={successTask}
            deleteTask={deleteTask}
          />
        }
      />

      <Button setModal={setModal} />
      <ModalPortal>
        <TaskModal 
          addTask={addTask}
          getModal={getModal}
          setModal={setModal}
        />
      </ModalPortal>
    </>
  )
}