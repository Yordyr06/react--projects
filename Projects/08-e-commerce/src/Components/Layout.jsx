const Layout = ({ children }) => {
  return (
    <div className="
      grid grid-cols-4 row-auto content-center justify-items-center py-16 mt-1 gap-4
    ">
      { children }
    </div>
  )
}

export { Layout }