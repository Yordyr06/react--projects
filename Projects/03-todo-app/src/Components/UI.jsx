import { TaskProvider } from '../Utils/AppContext'
import { ModalPortal } from '../Utils/ModalPortal'
import { Header } from './Header/Header'
import { Main } from './Main/Main'
import { Button } from './Button/Button'
import { TaskModal } from './Button/TaskModal'

export function UI() {
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

