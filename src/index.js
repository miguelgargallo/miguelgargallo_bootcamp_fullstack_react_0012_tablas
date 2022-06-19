import { createRoot } from "react-dom/client";

import App from "./App";

const notes = [
  {
    id: 1,
    content: "f2pool",
    date: "2022-06-18 12:18:11",
    important: true,
    categories: ["HNS", "SOL", "CANAR"]
  },
  {
    id: 2,
    content: "Poolin",
    date: "2022-06-18 12:14:48",
    important: true
  },
  {
    id: 3,
    content: "f2pool",
    date: "2022-06-18 12:07:01",
    important: true
  }
];

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App notes={notes} />);
