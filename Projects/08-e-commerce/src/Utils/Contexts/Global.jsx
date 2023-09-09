import { createContext, useState } from "react";

const Global = createContext()

const GlobalProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  return (
    <Global.Provider value={{
      count,
      setCount
    }}>
      {children}
    </Global.Provider>
  )
} 

export { Global, GlobalProvider }