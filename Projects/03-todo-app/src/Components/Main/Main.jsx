// import { EmptyBox } from './EmptyBox'
// import { Error } from './Error'
import { MainLoader } from './MainLoader'
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
        {loading && <MainLoader />}
        { /*{error && <Error />}
        {
          (!loading && getTasks.length === 0)
            && <EmptyBox />
        } */}

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

