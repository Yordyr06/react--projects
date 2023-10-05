import { useContext } from "react"
import { Link } from "react-router-dom"
import { HiChevronRight } from "react-icons/hi2"
import { Global } from "../Utils/Contexts/Global"
import { OrderCard } from "../Components/OrderCard"

function MyOrder() {
  const { order } = useContext(Global)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.indexOf('s') + 2)
  if (index === 'last') index = order?.length - 1

  return (
    <div>
      <div className="
        flex items-center justify-center relative w-80 my-4
      ">
        <Link to="/my-orders" className="absolute right-0">
          <HiChevronRight className="
            h-6 w-6 cursor-pointer
          "/>
        </Link>
        <h1 className="font-medium text-xl">My Order</h1>
      </div>
      
      <div className="
        flex flex-col mx-auto border border-slate-50 rounded-lg
        p-4 w-80 shadow-lg
        ">
        {
          order?.[index]?.products?.map(product => (
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
    </div>
  )
}

export { MyOrder }