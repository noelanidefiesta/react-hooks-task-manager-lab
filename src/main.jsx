import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { TaskProvider } from "./context/TaskContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap the app so all children can use task context */}
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
);
