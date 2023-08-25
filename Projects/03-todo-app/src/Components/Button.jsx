export function Button() {
  return (
    <section className="
      w-full flex justify-center fixed bottom-5 z-10 
    ">
      <button className="
        bg-blue-500 p-2.5 rounded-full font-medium text-sm w-1/2
        transition ease-in-out delay-150 hover:bg-indigo-500 duration-300
      "><span className="mr-4">+</span>Add a new task</button>
    </section>
  )
}