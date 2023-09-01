import { Header } from './Header/Header'
import { Main } from './Main/Main'
import { Button } from './Button/Button'

export function UI({
  tasksCompleted,
  totalTasks,
  value,
  setFilter,
  tasks,
  setTasks,
  getTasks,
  successTask,
  deleteTask
}) {
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

