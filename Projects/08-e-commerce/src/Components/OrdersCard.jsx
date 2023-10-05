import { HiChevronRight } from "react-icons/hi2"
import { HiCalendarDays } from "react-icons/hi2"
import { HiShoppingBag } from "react-icons/hi2"


const OrdersCard = props => {
  const { totalProducts, totalPrice } = props

  return(
    <div className="
      flex justify-between items-center my-4 border border-slate-50 rounded-lg
      p-4 w-80 shadow-lg
    ">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="flex font-light items-center gap-2"><HiCalendarDays className="h-4 w-4"/>09.21.2023</span>
          <span className="flex font-light items-center gap-2"><HiShoppingBag className="h-4 w-4"/>{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2 truncate">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <HiChevronRight className="h-6 w-6"/>
        </p>
      </div>
    </div>
  )
}

export { OrdersCard }