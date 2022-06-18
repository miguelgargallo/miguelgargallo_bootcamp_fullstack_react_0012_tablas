import "./styles.css";
import Melo from "./Note.js";

const notes = [
  {
    id: 13,
    content: "Viva la pela",
    date: "2022-02-01T01:10:01.001Z",
    important: true
  },
  {
    id: 15,
    content: "Viva la constitucion",
    date: "2022-02-02T01:10:01.001Z",
    important: true
  },
  {
    id: 23,
    content: "Viva las palmeras",
    date: "2022-03-03T01:10:01.001Z",
    important: true
  }
];

export default function App() {
  return (
    <ol>
      {notes.map((note) => (
        <Melo key={note.id} {...note} />
      ))}
    </ol>
  );
}
