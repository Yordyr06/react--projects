import { TaskProvider } from '../Hooks/useContext'
import { Header } from './Header/Header'
import { Main } from './Main/Main'
import { Button } from './Button/Button'

export function UI() {
  return (
    <TaskProvider>
      <Header />
      <Main />
      <Button />
    </TaskProvider>
  )
}

