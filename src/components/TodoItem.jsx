import { useTodo } from "../contexts";
import { useState } from "react";

// Helper function to format the date string
const formatDueDate = (dateString) => {
  if (!dateString) return null;
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return dateString;
  }
};

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [msg, setMsg] = useState(todo.msg);
  const [category, setCategory] = useState(todo.category || "Personal");
  const [dueDate, setDueDate] = useState(todo.dueDate || "");

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const categories = ["Personal", "Work", "Shopping", "Health", "Other"];

  const isOverdue =
    !todo.completed && todo.dueDate && new Date(todo.dueDate) < new Date();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, msg, category, dueDate });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-2 gap-x-3 shadow-sm font-semibold duration-500 text-lg text-gray-900 
                  ${
                    isOverdue
                      ? " text-red-600 bg-gray-100 dark:bg-gray-800" // Overdue Style
                      : todo.completed
                      ? "bg-[#c6e9a7] dark:bg-green-800 dark:text-gray-300"
                      : "bg-gray-100 dark:bg-gray-800 dark:text-gray-100"
                  }
                  dark:border-white/10`}
    >
      <div className="flex transform scale-150">
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
      </div>

      {isTodoEditable && (
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-2 mr-2 text-base border rounded-lg outline-none bg-white/50 dark:bg-gray-700 dark:text-white"
          disabled={todo.completed}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      )}

      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg 
                    ${
                      isTodoEditable
                        ? "border-black/20 px-2 dark:border-white/30"
                        : "border-transparent"
                    } 
                    ${todo.completed ? "line-through" : ""}`}
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Due Date Display/Edit */}
      {isTodoEditable ? (
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="px-2 text-sm border rounded-lg outline-none bg-white/70 dark:bg-gray-700 dark:text-white max-w-[150px]"
          disabled={todo.completed}
        />
      ) : (
        todo.dueDate && (
          <span
            className={`px-1 py-0.5 text-xs rounded-lg font-semibold whitespace-nowrap border flex items-center 
                              ${
                                isOverdue
                                  ? "text-white border-white bg-red-700"
                                  : "text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-600"
                              }`}
          >
            {isOverdue ? "OVERDUE" : formatDueDate(todo.dueDate)}
          </span>
        )
      )}

      <button
        className="inline-flex items-center justify-center w-8 h-8 text-sm bg-gray-200 border rounded-lg border-black/10 hover:bg-gray-300 shrink-0 disabled:opacity-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:border-white/10"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else {
            setMsg(todo.msg);
            setCategory(todo.category);
            setDueDate(todo.dueDate || "");
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      <button
        className="inline-flex items-center justify-center w-8 h-8 text-sm bg-gray-200 border rounded-lg border-black/10 hover:bg-gray-300 shrink-0 dark:bg-gray-600 dark:hover:bg-gray-500 dark:border-white/10"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
