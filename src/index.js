import { createRoot } from "react-dom/client";

import App from "./App";

const notes = [
  {
    id: 1,
    content: "visit.teide",
    date: "2022-06-19 04:58:57",
    important: true,
    categories: ["HNS", "SOL", "CANAR"]
  },
  {
    id: 2,
    content: "pen.cil",
    date: "2022-06-19 05:59:03",
    important: true
  },
  {
    id: 3,
    content: "vamos.tío",
    date: "2022-06-19 06:00:14",
    important: true
  }
];

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App notes={notes} />);
