import { useContext } from "react"
import { HiPlus, HiXMark } from "react-icons/hi2"
import { Global } from "../Utils/Contexts/Global"
import { OrderCard } from "./OrderCard"

const CheckOut = () => {
  const { isCheckOutOpen, closeCheckOut, cartProducts } = useContext(Global)
  console.log(cartProducts)
  
  return(
    <aside className={`
      ${ isCheckOutOpen ? '' : 'hidden' }
      flex flex-col fixed right-0 border text-black border-black rounded-l-lg bg-white w-[360px] h-[calc(100vh-68px)]
    `}>
      <div className="flex justify-between items-center p-6">
        <h2 className=" font-medium text-xl">My Order</h2>
        <div className="cursor-pointer">
          <HiXMark 
            onClick={() => closeCheckOut()}
            className="h-6 w-6" />
        </div>
      </div>
      <div className="px-6">
      {
        cartProducts.map(product => (
          <OrderCard 
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))
      }
      </div>
    </aside>
  )
}

export { CheckOut }