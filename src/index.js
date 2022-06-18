import { createRoot } from "react-dom/client";

import App from "./App";

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

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App notes={notes} />);
