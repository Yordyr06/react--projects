import { List } from './List'
import { Task } from './Tasks'

const defaultTodo = [
  {text: 'Dominar React', completed:false},
  {text: 'Dominar TypeScript', completed:false},
  {text: 'Dominar Tailwind', completed:true},
  {text: 'Dominar Angular', completed:false},
  {text: 'Toy probando la anchura deto', completed:false},
]

export function Main() {
  return(
    <main className="
      w-full mt-5 
    ">
      <section>
        <List>
          {defaultTodo.map(todo => (
            <Task 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </List>
      </section>
    </main>
  )
}

