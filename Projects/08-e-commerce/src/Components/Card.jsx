import { useContext } from "react"
import { HiPlus } from "react-icons/hi2"
import { Global } from "../Utils/Contexts/Global"

const Card = ({ data }) => {
  const { 
    count, setCount, 
    openDetail, closeDetail, setProductToShow, 
    cartProducts, setCartProducts,
    openCheckOut, closeCheckOut,
  } = useContext(Global)

  const showProduct = (product) => {
    closeCheckOut()
    setProductToShow(product)
    openDetail()
  }

  const addProducts = (product) => {
    closeDetail()
    setCartProducts([...cartProducts, product])
    openCheckOut()
  }

  return (
    <div 
      onClick={(event) => {
        event.stopPropagation()  
        showProduct(data)
      }}
      className="
      bg-white cursor-pointer w-56 h-60 rounded-lg
    ">
      <figure className="
        relative mb-2 w-full h-4/5 
      ">
        <span className="
          absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5
        "> {data.category} </span>
        <img className="
          w-full h-full object-cover rounded-lg
        " src={data.image} alt="" />
        <button 
          onClick={(event) => {
            event.stopPropagation()
            setCount(count + 1)
            addProducts(data)
          }}
          className="
          absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1
        "><HiPlus className="h-6 w-6 text-black"></HiPlus></button>
      </figure>
      <p className="
        flex justify-between text-black mx-2 gap-4
      ">
        <span className="
          text-sm font-light truncate 
        ">{data.title}</span>
        <span className="
          text-lg font-medium
        ">${data.price}</span>
      </p>
    </div>
  )
}

export { Card }