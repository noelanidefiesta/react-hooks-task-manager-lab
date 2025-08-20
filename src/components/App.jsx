import { useState } from "react";
import TaskForm from "./TaskForm.jsx";
import SearchBar from "./SearchBar.jsx";
import TaskList from "./TaskList.jsx";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <main style={{ fontFamily: "system-ui, Arial, sans-serif", padding: 16 }}>
      <h1>Task Manager</h1>

      <TaskForm />

      <SearchBar onSearchChange={setSearchText} />

      <TaskList searchText={searchText} />
    </main>
  );
}

export default App;
