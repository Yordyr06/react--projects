import { List } from './List'
import { Task } from './Tasks'

export function Main({
  tasks,
  setTasks,
  getTasks,
  successTask
}) {
  return(
    <main className="
      w-full mt-5 
    ">
      <section>
        <List>
          {getTasks.map(task => (
            <Task 
              key={task.text}
              text={task.text}
              completed={task.completed}
              setTasks={setTasks}
              successTask={() => successTask(tasks.text)}
            />
          ))} 
        </List>
      </section>
    </main>
  )
}

