import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/////not supported anymore
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
