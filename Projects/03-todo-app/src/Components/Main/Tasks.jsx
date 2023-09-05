import { useContext } from "react"
import { AppContext } from '../../Utils/AppContext' 

export function Tasks() {
  const {
    getTasks,
    successTask,
    deleteTask
  } = useContext(AppContext)

  return (
    <ul className="
    flex flex-col m-auto px-4 justify-center gap-2
    justify-items-center place-items-center hyphens-auto
    ">
      {
        getTasks.map(task => (
          <li
            key={task.text}
            className="
            flex flex-row list-none px-3 py-2 justify-between items-center w-full h-auto bg-slate-950 rounded-full text-center gap-2 tracking-tight font-normal leading-5 border-2 border-sky-500 text-slate-100
          ">
            <span 
              onClick={() => successTask(task.text)} 
              className={`
              ${task.completed ? "text-green-700" : "text-gray-500"}
              cursor-pointer hover:text-green-700
            `}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <p className={`
              ${task.completed ? "line-through" : null }
            `}>{task.text}
            </p>
            <span
              onClick={() => deleteTask(task.text)} 
              className="
              cursor-pointer text-gray-500 hover:text-red-700  top-0
            ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </li>
        ))
      }
    </ul>  
  )
}