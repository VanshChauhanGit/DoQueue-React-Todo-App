import { useEffect, useState, useMemo } from "react";
import { TodoForm, TodoItem } from "../components";
import CategoryCard from "../components/CategoryCard";
import { TodoProvider } from "../contexts";

function Dashboard() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, newTodo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? newTodo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  const categorizedTodos = useMemo(() => {
    return todos.reduce((acc, todo) => {
      const category = todo.category || "Uncategorized";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(todo);
      return acc;
    }, {});
  }, [todos]);

  const categories = useMemo(() => {
    return Object.keys(categorizedTodos).sort();
  }, [categorizedTodos]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      const sanitizedTodos = storedTodos.map((todo) => ({
        ...todo,
        category: todo.category || "Personal",
      }));
      setTodos(sanitizedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="min-h-screen p-4 font-mono text-gray-900 transition-colors duration-300 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
        <div className="w-full max-w-4xl mx-auto mb-8">
          <div className="my-4">
            <TodoForm />
          </div>
        </div>

        <div className="w-full max-w-full p-4 mx-auto">
          <h2 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Your Task Categories
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
            {categories.map((category) => (
              <CategoryCard
                key={category}
                categoryName={category}
                todos={categorizedTodos[category]}
              />
            ))}
          </div>

          {todos.length === 0 && (
            <p className="mt-12 text-xl text-center text-gray-500 dark:text-gray-500">
              Get started by adding your first task!
            </p>
          )}
        </div>
      </div>
    </TodoProvider>
  );
}

export default Dashboard;
