import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const refreshApp = () => {
  root.render(<App />);
};

setInterval(refreshApp, 1000);
