import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form className="flex border-2 border-green-600 rounded-lg" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full px-3 text-xl outline-none rounded-l-lg bg-transparent dark:text-white text-black p-2"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <div className="bg-green-600">
        <button
          type="submit"
          className="rounded-r-lg text-xl px-4 py-2 bg-green-600 hover:bg-green-800 text-white font-bold"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
