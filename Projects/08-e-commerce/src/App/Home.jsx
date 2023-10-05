import { useContext } from "react"
import { Global } from "../Utils/Contexts/Global"
import { Card } from "../Components/Card"
import { Detail } from "../Components/Detail"
import { CheckOut } from "../Components/CheckOut"

function Home() {
  const { products, filteredProducts, searchValue } = useContext(Global)
  
  const renderView = () => {
    const productsToRender = searchValue?.length > 0
    ? filteredProducts
    : products

    if (productsToRender?.length > 0) {
      return productsToRender && productsToRender?.map((product) => (
        <Card 
          key={product.id}
          data={product} 
        />
      ))
    } else {
      return <p>Product not found</p>
    }
  }

  
  return (
    <>
      { renderView() }

      <Detail />
      <CheckOut />
    </>
  )
}

export { Home }