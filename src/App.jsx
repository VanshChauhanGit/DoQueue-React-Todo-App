import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./contexts/theme";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
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

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <Navbar />
        <div className="fixed -z-10 h-full w-full">
          <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>
        <div className="min-h-screen py-28 font-mono">
          <div className="w-full max-w-2xl mx-auto rounded-lg px-4 py-6 text-white bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-10 backdrop-blur-lg border border-gray-600 border-opacity-50 ">
            <h1 className="text-2xl font-bold text-center hover:text-white hover:bg-[#351a7b] bg-transparent rounded-lg py-2 text-purple-700 hover:cursor-default duration-300 mb-8 mt-2 border-2 border-[#351a7b] flex justify-center items-center">
              <span className="mr-3">
                <i class="fa-solid fa-list-check fa-beat-fade"></i>
              </span>
              Manage Your Todos
            </h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </TodoProvider>
  );
}

export default App;
