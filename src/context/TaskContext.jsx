import { createContext, useEffect, useState } from "react";

const API_BASE = "http://localhost:6001";
const TASKS_URL = `${API_BASE}/tasks`;

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function load() {
            try {
                const res = await fetch(TASKS_URL);
                if (!res.ok) throw new Error("Failed to fetch tasks");
                const data = await res.json();
                setTasks(data);
            } catch (err) {
                console.error(err);
            }
        }
        load();
    }, []);

    async function addTask(title) {
        const newTask = { title, completed: false };
        try {
            const res = await fetch(TASKS_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newTask),
            });
            if (!res.ok) throw new Error("Failed to create task");
            const created = await res.json();
            setTasks((prev) => [...prev, created]);
        } catch (err) {
            console.error(err);
        }
    }

    async function toggleComplete(id, completed) {
        try {
            const res = await fetch(`${TASKS_URL}/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ completed: !completed }),
            });
            if (!res.ok) throw new Error("Failed to toggle task");
            const updated = await res.json();
            setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
        } catch (err) {
            console.error(err);
        }
    }

    const value = { tasks, addTask, toggleComplete };
    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
