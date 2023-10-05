import { useContext } from "react"
import { HiPlus, HiXMark } from "react-icons/hi2"
import { Global } from "../Utils/Contexts/Global"


const Detail = () => {
  const { isDetailOpen, closeDetail, productToShow } = useContext(Global)
  
  return(
    <aside className={`
      ${ isDetailOpen ? '' : 'hidden' }
      flex flex-col fixed right-0 border text-black border-black rounded-l-lg bg-white w-[360px] h-[calc(100vh-68px)]
    `}>
      <div className="flex justify-between items-center p-6">
        <h2 className=" font-medium text-xl">Detail</h2>
        <div className="cursor-pointer">
          <HiXMark 
            onClick={() => closeDetail()}
            className="h-6 w-6"
          />
        </div>
      </div> 

      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg" 
          src={productToShow.image} alt={productToShow.title} />
      </figure>

      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${productToShow.price}</span>
        <span className="font-medium text-md">{productToShow.title}</span>
        <span className="font-light text-sm">{productToShow.description}</span>
      </p>
    </aside>
  )
}

export { Detail }