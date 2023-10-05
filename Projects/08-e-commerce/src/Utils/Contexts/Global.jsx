import { createContext, useState, useEffect } from "react";
import { API_URL } from "../Api"

const Global = createContext()

const GlobalProvider = ({ children }) => {
  // Get Products
  const [ products, setProducts ] = useState(null)
  const [ filteredProducts, setFilteredProducts ] = useState(null)

  // Search Input
  const [searchValue, setSearchValue] = useState('')
  const [searchByCategory, setSearchByCategory] = useState(null)

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


  
  // Filter Products
  const filterFn = (products, searchValue) => {
    return products?.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
  }

  // Filter by Category
  const filterByCategory = (products, searchByCategory) => {
    return products?.filter(product => product.category.toLowerCase().includes(searchByCategory.toLowerCase()))
  }


  useEffect(() => {
    if (searchValue) setFilteredProducts(filterFn(products, searchValue))
    if (searchByCategory) setSearchByCategory(filterByCategory(products, searchByCategory))
  }, [products, searchValue])

  return (
    <Global.Provider value={{
      products,
      setProducts,
      filteredProducts,
      setFilteredProducts,

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
      setSearchValue,
      filterFn,
      searchByCategory,
      setSearchByCategory
    }}>
      {children}
    </Global.Provider>
  )
} 

export { Global, GlobalProvider }