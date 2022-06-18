import "./styles.css";
import { Melo, getNumber } from "./Note.js";

getNumber();
const notes = [
  {
    id: 124975,
    content: "f2pool",
    date: "2022-06-18 12:18:11",
    txamount: "20",
    fee: "0.7522",
    important: true
  },
  {
    id: 124974,
    content: "Poolin",
    date: "2022-06-18 12:14:48",
    txamount: "59",
    fee: "1.9943",
    important: true
  },
  {
    id: 124973,
    content: "f2pool",
    date: "2022-06-18 12:07:01",
    txamount: "20",
    fee: "1.2369",
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
