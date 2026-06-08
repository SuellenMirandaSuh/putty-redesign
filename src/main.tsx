import { createRoot } from "react-dom/client";
import { Router } from "wouter";
import App from "./App";
import "./index.css";
import { routerBase } from "./lib/paths";

const base = routerBase();

createRoot(document.getElementById("root")!).render(
  <Router base={base || undefined}>
    <App />
  </Router>
);
