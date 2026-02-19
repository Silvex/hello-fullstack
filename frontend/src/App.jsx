import { useState, useEffect } from "react"

function App() {
  const [msg, setMsg] = useState("Ładowanie...")

  useEffect(() => {
    fetch("http://127.0.0.1:8000/hello")
      .then(res => res.json())
      .then(data => setMsg(data.message))
  }, [])

  return <h1>{msg}</h1>
}

export default App
