import { useContext } from "react"
import { HiPlus, HiXMark } from "react-icons/hi2"
import { Global } from "../Utils/Contexts/Global"
import { getTotal } from "../Utils/getTotal"
import { OrderCard } from "./OrderCard"

const CheckOut = () => {
  const { isCheckOutOpen, closeCheckOut, cartProducts, setCartProducts } = useContext(Global)

  const removeProduct = (id) => {
    const filterProduct = cartProducts.filter(product => product.id != id)
    setCartProducts(filterProduct)
  }

  return(
    <aside className={`
      ${ isCheckOutOpen ? '' : 'hidden' }
      flex flex-col fixed right-0 border text-black border-black rounded-l-lg bg-white w-[360px] h-[calc(100vh-68px)]
    `}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div className="flex justify-between items-center gap-2">
          <HiXMark 
            onClick={() => closeCheckOut()}
            className="cursor-pointer h-6 w-6" />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll">
      {
        cartProducts.map(product => (
          <OrderCard 
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            removeProduct={removeProduct}
          />
        ))
      }
      </div>

      <div className="px-6">
        <p className="flex justify-between items-center">
          <span>Total:</span>
          <span className="font-medium text-xl">{`$${getTotal(cartProducts)}`}</span>
        </p>
      </div>
    </aside>
  )
}

export { CheckOut }