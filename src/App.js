import "./styles.css";

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

const Note = ({ id, content, date }) => {
  return (
    <li>
      <p>{content}</p>
      <small>
        <time>{date}</time>
      </small>
    </li>
  );
};

export default function App() {
  return (
    <ol>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          content={note.content}
          date={note.date}
        />
      ))}
    </ol>
  );
}
