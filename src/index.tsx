import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import App from "./components/App";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
