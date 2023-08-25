export function List({ children }) {
  return (
    <ul className="
      grid m-auto px-4 grid-cols-2 auto-rows-fr justify-center gap-3
      justify-items-center place-items-center hyphens-auto
    ">
      {children}
    </ul>
  )
}