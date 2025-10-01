import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./tw-shim.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
