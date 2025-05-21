import { useState, useEffect } from "react"

const UseFetch = (url) => {
  const [jsonData, setJsonData] = useState(null)

  useEffect(() => {
    fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      setJsonData(data)
    })
  }, [])

  return jsonData
}

export default UseFetch
