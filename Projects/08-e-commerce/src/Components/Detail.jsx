import { HiPlus, HiXMark } from "react-icons/hi2"

const Detail = () => {
  return(
    <aside className="
      flex flex-col fixed right-0 border text-black border-black rounded-l-lg bg-white w-[360px] h-[calc(100vh-68px)]
    ">
      <div className="flex justify-between items-center p-6">
        <h2 className=" font-medium text-xl">Detail</h2>
        <div className="cursor-pointer">
          <HiXMark className="h-6 w-6"></HiXMark>
        </div>
      </div> 

    </aside>
  )
}

export { Detail }