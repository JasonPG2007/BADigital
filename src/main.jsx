import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Header from "./assets/css/components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header></Header>
    <App />
  </StrictMode>
);
