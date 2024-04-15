import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Pizza from "./Components/pizza";
import pizzaData from "./data";

function App() {
  return (
    <div>
      <h1>Menu</h1>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
