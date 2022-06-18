import "./styles.css";
import { Melo } from "./Note.js";

const notes = [
  {
    id: 1,
    wallet: "a",
    domain: "visit.teide",
    important: true,
    currencies: ["HNS", "CANAR", "SOL"]
  },
  {
    id: 2,
    wallet: "b",
    domain: "quetal.tío",
    important: true
  },
  {
    id: 3,
    wallet: "c",
    domain: "pen.cil",
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
