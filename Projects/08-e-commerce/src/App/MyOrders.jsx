import { useContext } from "react"
import { Global } from "../Utils/Contexts/Global"
import { OrderCard } from "../Components/OrderCard"

function MyOrders() {
  const { order } = useContext(Global)
  console.log(order.slice(-1)[0])

  return (
    <div>
      MyOrders
      {
        <div className="flex flex-col mx-auto w-80">
          {
            order?.slice(-1)[0]?.products?.map(product => (
              <OrderCard  
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
              />
            ))
          }
        </div>
      }
    </div>
  )
}

export { MyOrders }