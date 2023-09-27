import { HiXMark } from "react-icons/hi2"

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props
  
  return(
    <div className="flex justify-between items-center mb-3 border border-black">
      <p>
        <span>09.21.2023</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  )
}

export { OrdersCard }