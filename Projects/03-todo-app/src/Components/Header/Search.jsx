export function Search() {
  return (
    <div className="
      flex gap-2 bg-transparent justify-evenly border-2 border-sky-500 
      w-2/3 m-auto rounded-full transition ease-in-out hover:border-indigo-500
    ">
      <span className="
        bg-inherit basis-1/4 text-end
      ">o</span>
      <input className="
        bg-inherit basis-3/4 text-start
      " placeholder="What you want search?"></input>
    </div>
  )
}