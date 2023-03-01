import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
function refresher() {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

setInterval(refresher, 1000);
