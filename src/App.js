import "./styles.css";
import { useState } from "react";
import { Note } from "./Note.js";

export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Añadir dominio");
    const noteToAddToState = {
      id: notes.lenght + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    };

    setNotes(notes.concat(noteToAddToState));
    setNewNote("");
  };

  return (
    <div>
      <h1>Domains</h1>
      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Add Domain</button>
      </form>
    </div>
  );
}
