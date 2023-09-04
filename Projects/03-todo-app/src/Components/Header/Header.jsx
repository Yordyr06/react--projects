import { Counter } from './Counter'
import { Search } from './Search'

export function Header() {
  return (
    <header className="
      w-full flex flex-col text-center justify-center gap-4 my-8 
    ">
      <h1 className="
        text-3xl font-bold 
      ">To Do App</h1>

      <Counter />

      <Search />
    </header>
  )
}