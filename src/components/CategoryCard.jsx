import React from "react";
import { TodoItem } from "./index";

const getCategoryColor = (category) => {
  switch (category) {
    case "Work":
      return "bg-red-600/90";
    case "Personal":
      return "bg-blue-600/90";
    case "Shopping":
      return "bg-green-600/90";
    case "Health":
      return "bg-yellow-600/90";
    default:
      return "bg-purple-600/90";
  }
};

const CategoryCard = ({ categoryName, todos }) => {
  const headerColor = getCategoryColor(categoryName);
  const totalCount = todos.length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="flex flex-col h-full overflow-hidden transition duration-300 bg-white border border-gray-300 shadow-lg dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:shadow-xl dark:hover:shadow-purple-500/50">
      <div
        className={`p-4 ${headerColor} text-white font-bold text-2xl flex justify-between items-center`}
      >
        <h3 className="truncate">{categoryName}</h3>
        <span className="px-3 py-1 ml-2 text-sm font-semibold rounded-full bg-black/30">
          {completedCount} / {totalCount}
        </span>
      </div>

      <div className="flex-grow p-4 space-y-3 overflow-y-auto">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <TodoItem todo={todo} />
            </div>
          ))
        ) : (
          <p className="py-4 italic text-center text-gray-500 dark:text-gray-400">
            No tasks in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
