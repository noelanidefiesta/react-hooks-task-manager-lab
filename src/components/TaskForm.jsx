import { useContext, useState } from "react";
import { useId } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const titleId = useId();

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    addTask(trimmed);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: "16px 0" }}>
      <h2>Add a Task</h2>
      <div style={{ display: "grid", gap: 8, maxWidth: 420 }}>
        <label htmlFor={titleId}>Title</label>
        <input
          id={titleId}
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."  
          /* exact placeholder for tests */
        />
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
}

export default TaskForm;
