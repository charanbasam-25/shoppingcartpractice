import { createRoot } from "react-dom/client";
import "./index.css"; // Ensure Tailwind CSS is imported here
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCart } from "./StateManagement/Context.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShoppingCart>
      <App />
    </ShoppingCart>
  </BrowserRouter>
);
