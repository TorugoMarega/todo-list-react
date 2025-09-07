import { useEffect, useState } from "react";
import type { Todo } from "../types/todo";
import { dummyData } from "../data/todos";

export default function useTodos(){
    const [todos, setTodos] = useState(() => {
        const savedTodos: Todo[] = JSON.parse(
          localStorage.getItem("todos") || "[]"
        );
        return savedTodos.length > 0 ? savedTodos : dummyData;
      });
    
      function setTodoCompleted(id: number, completed: boolean) {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
        );
      }
    
      function addTodo(title: string) {
        setTodos((prevTodos) => [
          {
            id: prevTodos.length + 1,
            title,
            completed: false,
          },
          ...prevTodos,
        ]);
      }
    
      function deleteTodo(id: number) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      }
    
      function deleteAllCompletedTodos() {
        setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
      }
    
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);
    
      return {
        todos,
        setTodoCompleted, 
        addTodo, 
        deleteAllCompletedTodos,
        deleteTodo
      }
}