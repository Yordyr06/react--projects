export function Counter({ completed, total}) {
  return (
    <h2 className="
      text-lg
    ">
      You have completed <span className="font-bold">{completed}</span> of <span className="font-bold">{total}</span> Task
    </h2>
  )
}