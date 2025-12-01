// react imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// css imports
import "./index.css";

// components
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
