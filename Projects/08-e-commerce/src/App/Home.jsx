import { useContext } from "react"
import { Global } from "../Utils/Contexts/Global"
import { Card } from "../Components/Card"
import { Detail } from "../Components/Detail"
import { CheckOut } from "../Components/CheckOut"

function Home() {
  const { products } = useContext(Global)
  
  
  return (
    <>
      {
        products && products?.map((product) => (
          <Card 
            key={product.id}
            data={product} 
          />
        ))
      }

      <Detail />
      <CheckOut />
    </>
  )
}

export { Home }