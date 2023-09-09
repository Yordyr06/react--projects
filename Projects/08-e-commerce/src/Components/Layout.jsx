const Layout = ({ children }) => {
  return (
    <div className="
      grid grid-cols-4 row-auto content-center justify-items-center mt-20 gap-4 
    ">
      { children }
    </div>
  )
}

export { Layout }