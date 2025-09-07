import { Trash2 } from "lucide-react";
import type { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

export function TodoSummary({ todos, deleteAllCompleted }: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium">
        {completedTodos.length}/{todos.length} completed
      </p>
      {completedTodos.length > 0 && (
        <span className=" flex items-center gap-2 justify-center pt-2">
          <button
            className="text-red-900 hover:underline text-sm font-medium flex items-center gap-2"
            onClick={deleteAllCompleted}
          >
            <Trash2 />
            <span>Delete All Completed</span>
          </button>
        </span>
      )}
    </div>
  );
}
