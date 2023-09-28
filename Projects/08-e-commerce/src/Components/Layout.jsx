const Layout = ({ children }) => {
  return (
    <div className="
      flex flex-row flex-wrap justify-center py-16 mt-1 gap-4
    ">
      { children }
    </div>
  )
}

export { Layout }