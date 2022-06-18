import "./styles.css";

const notes = [
  {
    id: 2,
    content: "HTML not easy",
    date: "2022-02-01T01:10:01.001Z",
    important: true
  },
  {
    id: 2,
    content: "HTML not easy",
    date: "2022-02-01T01:10:01.001Z",
    important: true
  },
  {
    id: 3,
    content: "HTML equals easy",
    date: "2022-03-01T01:10:01.001Z",
    important: true
  }
];

export default function App() {
  return (
    <div>
      {notes.map((note) => {
        return (
          <div>
            <p>{note.content}</p>
            <small>
              <time>{note.date}</time>
            </small>
          </div>
        );
      })}
    </div>
  );
}
