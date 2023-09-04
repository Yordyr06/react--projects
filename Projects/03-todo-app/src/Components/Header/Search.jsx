import { useContext } from 'react'
import { TaskContext } from '../../Hooks/useContext'

export function Search() {
  const { value, setFilter } = useContext(TaskContext)

  return (
    <div className="
      flex gap-3 bg-transparent justify-evenly border-2 border-sky-500 
      w-2/3 m-auto rounded-full transition ease-in-out hover:border-slate-900
    ">
      <p className="text-end text-gray-500">
        <span className="
          bg-inherit basis-1/5 
        ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </span>
      </p>
      <input
        value={value}
        onChange={() => setFilter(event.target.value)} 
        placeholder="What you want search?"
        className="
        text-gray-500 bg-inherit basis-4/5 text-start outline-none
        "></input>
    </div>
  )
}