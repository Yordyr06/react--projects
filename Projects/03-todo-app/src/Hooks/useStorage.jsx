import { useEffect, useState } from "react"

export function useStorage(storage, initialStorage) {
  const [data, setData] = useState(initialStorage)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      try {
        let dataList 
        const getStorage = localStorage.getItem(storage)
    
        if(getStorage) {
          dataList = JSON.parse(getStorage)
          setData(dataList )
        } else {
          localStorage.setItem(getStorage, JSON.stringify(initialStorage)),
          dataList = initialStorage
        }
  
        setLoading(false)
  
      } catch(error) {
        setLoading(false)
        setError(true)
      }
    }, 2000)
  }, [])

  const setStorage = (newStorage) => {
    localStorage.setItem(getStorage, JSON.stringify(newStorage))
    setData(newStorage)
  }

  return { data, setStorage, loading, error }
}