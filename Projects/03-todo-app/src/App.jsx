import React from 'react'
import { TaskProvider } from './Utils/AppContext'
import { ModalPortal } from './Utils/ModalPortal'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Button } from './Components/Button/Button'
import { TaskModal } from './Components/Button/TaskModal'


export function App() {
  return (
   <TaskProvider>
      <Header />
      <Main />
      <Button />
      <ModalPortal>
        <TaskModal />
      </ModalPortal>
    </TaskProvider>
  )
}