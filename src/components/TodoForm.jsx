import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const [category, setCategory] = useState("Personal");
  const [dueDate, setDueDate] = useState("");
  const { addTodo } = useTodo();

  const categories = ["Personal", "Work", "Shopping", "Health", "Other"];

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ msg: todo, completed: false, category, dueDate });

    setTodo("");
    setCategory("Personal");
    setDueDate("");
  };

  return (
    <form
      className="flex overflow-hidden border border-gray-300 rounded-lg dark:border-gray-700"
      onSubmit={add}
    >
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 px-3 text-xl text-gray-800 bg-gray-200 border-r border-gray-400 outline-none dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Write Todo..."
        className="flex-grow w-full p-2 px-3 text-xl text-black bg-white outline-none dark:bg-gray-800 dark:text-white"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <div className="flex justify-between border-t border-gray-400 sm:border-t-0 sm:border-l dark:border-gray-600">
        {/* Due Date Input */}
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-2 px-3 text-lg text-gray-600 bg-white border-r border-gray-400 outline-none dark:bg-gray-800 dark:text-gray-400 sm:w-auto dark:border-gray-600"
        />

        {/* Add Button */}
        <button
          type="submit"
          className="px-4 py-2 text-lg font-bold text-white transition duration-200 bg-purple-600 hover:bg-purple-700 whitespace-nowrap dark:bg-purple-700 dark:hover:bg-purple-800"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
