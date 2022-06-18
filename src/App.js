import "./styles.css";

const notes = [
  {
    id: 13,
    content: "HTML not easy",
    date: "2022-02-01T01:10:01.001Z",
    important: true
  },
  {
    id: 15,
    content: "HTML not easy",
    date: "2022-02-01T01:10:01.001Z",
    important: true
  },
  {
    id: 23,
    content: "HTML equals easy",
    date: "2022-03-01T01:10:01.001Z",
    important: true
  }
];

const Note = ({ note }) => {
  console.log(note);

  return (
    <li key={note.id}>
      <p>{note.content}</p>
      <small>
        <time>{note.date}</time>
      </small>
    </li>
  );
};

export default function App() {
  return (
    <ol>
      {notes.map((note) => (
        <Note note={note} />
      ))}
    </ol>
  );
}
