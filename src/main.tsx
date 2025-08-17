import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./pages/App.tsx";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
