import { useState, useEffect } from "react"
import { API_URL } from "../Utils/Api"
import { Card } from "../Components/Card"
import { Detail } from "../Components/Detail"
import { CheckOut } from "../Components/CheckOut"

function Home() {
  const [ products, setProducts ] = useState(null)
  
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