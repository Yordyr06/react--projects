import { SearchInput } from "./SearchInput"

const Layout = ({ children }) => {
  return (
    <>
      <div className="
        flex flex-none items-center justify-center relative w-80 mx-auto mt-20
      ">
        <h1 className="font-medium text-xl">Products</h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-4">
        <SearchInput />
        <div className="
          flex flex-row flex-wrap justify-center gap-4 pb-4 w-9/12 mx-auto
        ">
          
          { children }
        </div>
      </div>
    </> 
  )
}

export { Layout }