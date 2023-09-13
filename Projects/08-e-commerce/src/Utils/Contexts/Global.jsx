import { createContext, useState } from "react";

const Global = createContext()

const GlobalProvider = ({ children }) => {
  // Shopping Cart · Increment Quantity
  const [count, setCount] = useState(0)
  
  
  // Product Detail · Open/Close
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const openDetail = () => setIsDetailOpen(true)
  const closeDetail = () => setIsDetailOpen(false)
  
  // Product Detail · Show Product
  const [productToShow, setProductToShow] = useState({})

  return (
    <Global.Provider value={{
      count,
      setCount,
      isDetailOpen,
      setIsDetailOpen,
      openDetail,
      closeDetail,
      productToShow,
      setProductToShow
    }}>
      {children}
    </Global.Provider>
  )
} 

export { Global, GlobalProvider }