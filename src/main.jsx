import { createRoot } from "react-dom/client";
import "./index.css";
import { Theme } from "./scenes/assets/CreateApi.jsx";
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(

  <Theme>
    <App />

  </Theme>
);
