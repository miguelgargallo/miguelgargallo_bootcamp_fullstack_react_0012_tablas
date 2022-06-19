import "./styles.css";
import { useState } from "react";
import { Note } from "./Note.js";

export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  //const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    const newNote = event.target.value;
    console.log(newNote);
  };

  const handleClick = (event) => {
    console.log("crear nota");
  };

  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Crear nota</button>
      </div>
    </div>
  );
}
