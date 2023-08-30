import { Tasks } from './Tasks'

export function Main({
  tasks,
  setTasks,
  getTasks,
  successTask,
  deleteTask
}) {
  return(
    <main className="
      w-full mt-5 
    ">
      <section>
        <Tasks
          key={tasks.text}
          text={tasks.text}
          completed={tasks.completed}
          getTasks={getTasks}
          setTasks={setTasks}
          successTask={successTask}
          deleteTask={deleteTask}
        />
      </section>
    </main>
  )
}

