export function Button() {
  return (
    <section className="
      min-w-max flex fixed bottom-5 inset-x-1/3 justify-center z-10 bg-blue-500 p-2.5 rounded-full font-medium text-sm
      transition ease-in-out delay-150 hover:bg-slate-900 duration-300 cursor-pointer
    ">
      <span className="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>  
      </span>
      <button onClick={() => {console.log("click")}}>Add a new task</button>
    </section>
  )
}