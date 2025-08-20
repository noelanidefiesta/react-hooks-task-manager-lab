import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

function TaskItem({ task }) {
    const { toggleComplete } = useContext(TaskContext);

    return (
        <li
            style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: 8,
                border: "1px solid #ddd",
                borderRadius: 8,
            }}
        >
            <span
                aria-label={task.completed ? "completed" : "active"}
                style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    flex: 1,
                }}
            >
                {task.title}
            </span>

            <button
                data-testid={String(task.id)}          
                onClick={() => toggleComplete(task.id, task.completed)}
            >
                {task.completed ? "Undo Complete" : "Mark Complete"}
            </button>
        </li>
    );
}

export default TaskItem;
