import { createContext, useState, useEffect } from "react";
import { API_URL } from "../Api"

const Global = createContext()

const GlobalProvider = ({ children }) => {
  // Get Products
  const [ products, setProducts ] = useState(null)

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

  // Shopping Cart · Orders list
  const [order, setOrder] = useState([])

  // Search Input
  const [searchValue, setSearchValue] = useState(null)
  console.log('setSearchValue: ', searchValue)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}`)
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error(`Something was wrong: ${error}`)
      }
    }

    fetchData()
  }, [])

  return (
    <Global.Provider value={{
      products,
      setProducts,

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

      order,
      setOrder,

      searchValue,
      setSearchValue
    }}>
      {children}
    </Global.Provider>
  )
} 

export { Global, GlobalProvider }