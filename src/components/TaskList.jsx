import { useContext, useMemo } from "react";
import { TaskContext } from "../context/TaskContext.jsx";
import TaskItem from "./TaskItem.jsx";

function TaskList({ searchText }) {
  const { tasks } = useContext(TaskContext);

  const visible = useMemo(() => {
    const q = (searchText || "").trim().toLowerCase();
    if (!q) return tasks;
    return tasks.filter((t) => String(t.title).toLowerCase().includes(q));
  }, [tasks, searchText]);

  if (!tasks || tasks.length === 0) {
    return <p>No tasks yet.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 8 }}>
      {visible.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
