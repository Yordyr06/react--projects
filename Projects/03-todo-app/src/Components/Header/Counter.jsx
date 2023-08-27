export function Counter({ completed, totalTasks}) {
  return (
    <h2 className="
      text-lg
    ">
      You have completed <span className="font-bold">{completed}</span> of <span className="font-bold">{totalTasks}</span> Task
    </h2>
  )
}