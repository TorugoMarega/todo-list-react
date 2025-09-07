import { useState } from "react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    onSubmit(input);
    setInput("");
  }

  return (
    <form action="" className="flex" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Adicione uma nova tarefa"
        className="rouded-s-md grow border border-gray-400 p-2"
      />
      <button
        className="w-16 rounded-e-md bg-slate-900 text-white hover:bg=slate-800 hover:cursor-pointer"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
