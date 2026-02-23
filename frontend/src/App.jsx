import { useState, useEffect } from "react"

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("https://hello-fullstack.onrender.com/notes")
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  return (
    <div>
      <h1>Notatki</h1>
      {notes.map(note => (
        <div key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <p>Tagi: {note.tags.join(", ")}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}
export default App
