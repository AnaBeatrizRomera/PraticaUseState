import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import APP from "./components/APP/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <APP />
  </StrictMode>
);
