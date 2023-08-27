export function List({ children }) {
  return (
    <ul className="
      flex flex-col m-auto px-4 justify-center gap-2
      justify-items-center place-items-center hyphens-auto
    ">
      {children}
    </ul>
  )
}