import { useState } from "react"

export function useStorage(storage, initialStorage) {
  let dataList 
  const getStorage = localStorage.getItem(storage)

  if(getStorage) {
    dataList = JSON.parse(getStorage)
  } else {
    localStorage.setItem(getStorage, JSON.stringify(initialStorage)),
    dataList = initialStorage
  }

  const [data, setData] = useState(dataList)

  const setStorage = (newStorage) => {
    localStorage.setItem(getStorage, JSON.stringify(newStorage))
    setData(newStorage)
  }

  return [ data, setStorage ]
}