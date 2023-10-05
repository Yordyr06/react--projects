import { useContext } from "react"
import { Global } from "../Utils/Contexts/Global"

const SearchInput = () => {
  const { setSearchValue } = useContext(Global)
  
  return(
    <input 
      type="text" 
      placeholder="Search a Product" 
      onChange={(event) => setSearchValue(event.target.value)}
      className="
        rounded-lg border border-slate-50 w-80 p-4 mb-4 mx-auto focus:outline-none
      "/>
  )
}

export { SearchInput }