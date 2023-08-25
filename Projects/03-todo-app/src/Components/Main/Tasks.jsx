export function Task(props) {
  return (
    <li className="
      flex flex-row px-3 py-2 justify-around items-center max-w-[90%] h-auto
      bg-gray-300 rounded-xl text-center gap-2 tracking-tight
      leading-5 border-2 border-sky-500 text-black
    ">
      <span>x</span>
      <p>{props.text}</p>
      <span>x</span>
    </li>
  )
}