import "./styles.css";
import { useState } from "react";
import { Note } from "./Note.js";

export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleClick = (event) => {
    console.log("crear nota");
    const noteToAddToState = {
      id: notes.lenght + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    };
    console.log(noteToAddToState);

    /*
    {
      id: 3,
      content: "f2pool",
      date: "2022-06-18 12:07:01",
      important: true
    }
    */
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
        <input type="text" onChange={handleChange} value={newNote} />
        <button onClick={handleClick}>Crear nota</button>
      </div>
    </div>
  );
}
