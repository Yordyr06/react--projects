import { createContext, useState } from "react";

const Global = createContext()

const GlobalProvider = ({ children }) => {
  // Product Detail · Open/Close
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const openDetail = () => setIsDetailOpen(true)
  const closeDetail = () => setIsDetailOpen(false)
  
  // CheckOut · Open/Close
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false)
  const openCheckOut = () => setIsCheckOutOpen(true)
  const closeCheckOut = () => setIsCheckOutOpen(false)
  
  // Product Detail · Show Product
  const [productToShow, setProductToShow] = useState({})

  // Shopping Cart · Add products to cart
  const [cartProducts, setCartProducts] = useState([])


  return (
    <Global.Provider value={{
      isDetailOpen,
      setIsDetailOpen,
      openDetail,
      closeDetail,

      isCheckOutOpen,
      setIsCheckOutOpen,
      openCheckOut,
      closeCheckOut,
      
      productToShow,
      setProductToShow,
      
      cartProducts, 
      setCartProducts,
    }}>
      {children}
    </Global.Provider>
  )
} 

export { Global, GlobalProvider }