import { Tasks } from './Tasks'

export function Main({
  loading,
  error,
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
        {loading && <p>Loading ...</p>}
        {error && <p>Error</p>}
        {
          (!loading && getTasks.length === 0)
            && <p>Add a new task!</p>
        }

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

