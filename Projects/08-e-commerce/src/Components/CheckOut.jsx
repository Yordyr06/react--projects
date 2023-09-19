import { useContext } from "react"
import { HiPlus, HiXMark } from "react-icons/hi2"
import { Global } from "../Utils/Contexts/Global"

const CheckOut = () => {
  const { isCheckOutOpen, closeCheckOut } = useContext(Global)
  
  return(
    <aside className={`
      ${ isCheckOutOpen ? null : 'hidden' }
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
    </aside>
  )
}

export { CheckOut }