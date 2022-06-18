import "./styles.css";
import { Melo } from "./Note.js";

const notes = [
  {
    id: 124975,
    content: "f2pool",
    date: "2022-06-18 12:18:11",
    important: true
  },
  {
    id: 124974,
    content: "Poolin",
    date: "2022-06-18 12:14:48",
    important: true
  },
  {
    id: 124973,
    content: "f2pool",
    date: "2022-06-18 12:07:01",
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
