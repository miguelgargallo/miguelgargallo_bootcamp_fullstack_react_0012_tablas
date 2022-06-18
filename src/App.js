import "./styles.css";
import { Melo } from "./Note.js";

export default function App({ notes = [] }) {
  return (
    <div>
      <h1>Claim your name</h1>
      <ol>
        {notes.map((note) => (
          <Melo key={note.id} {...note} />
        ))}
      </ol>
    </div>
  );
}
