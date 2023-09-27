import { useContext } from "react"
import { Link } from "react-router-dom"
import { Global } from "../Utils/Contexts/Global" 
import { OrdersCard } from "../Components/OrdersCard"

function MyOrders() {
  const { order } = useContext(Global)

  return (
    <div>
      <div className="
        flex items-center justify-center relative w-80
      ">
        <h1>My Orders</h1>
      </div>

      {
        order?.map?.((order, index) => (
          <Link key={index} to={`/my-orders/${order.id}`}>
            <OrdersCard 
              totalProducts={order.totalProducts}
              totalPrice={order.totalPrice}
            />
          </Link>
        ))
      }
    </div>
  )
}

export { MyOrders }