import { useState } from 'react'
import { Counter } from './Counter'
import { Search } from './Search'
import { List } from './List'
import { Items } from './Items'
import { Button } from './Button'
import './App.css'

const defaultTodo = [
  {text: 'Dominar React', completed: false},
  {text: 'Dominar TypeScript', completed: false},
  {text: 'Dominar Tailwind', completed: true},
  {text: 'Dominar Angular', completed: false}
]

function App() {
  return (
    <>
      <Counter completed={1} total={4}/>
      <Search />

      <List>
        {defaultTodo.map(todo => (
          <Items 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </List>
      
      <Button />
    </>
  )
}

export default App
