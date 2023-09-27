import { useContext } from "react"
import { Link } from "react-router-dom"
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2"
import { Global } from "../Utils/Contexts/Global"
import { OrderCard } from "../Components/OrderCard"

// HiArrowTopRightOnSquare
// HiMiniArrowTopRightOnSquare
// HiOutlineArrowTopRightOnSquare

function MyOrder() {
  const { order } = useContext(Global)

  return (
    <div>
      <div className="
        flex items-center justify-center relative w-80 mb-6
      ">
        <Link to="/my-orders" className="absolute right-0">
          <HiMiniArrowTopRightOnSquare className="
            h-6 w-6 cursor-pointer hover:text-black
          "/>
        </Link>
        <h1>My Order</h1>
      </div>
      
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
    </div>
  )
}

export { MyOrder }