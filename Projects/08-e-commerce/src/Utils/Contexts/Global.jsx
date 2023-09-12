import { createContext, useState } from "react";

const Global = createContext()

const GlobalProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const toggleDetail = (event) => {
    event.stopPropagation()
    setIsDetailOpen(!isDetailOpen)
  }

  return (
    <Global.Provider value={{
      count,
      setCount,
      isDetailOpen,
      setIsDetailOpen,
      toggleDetail
    }}>
      {children}
    </Global.Provider>
  )
} 

export { Global, GlobalProvider }