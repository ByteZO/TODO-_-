import { useState } from "react";
import { useToDo } from "../context/";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useToDo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border rounded-l-lg px-3 outline-none duration-150 bg-[#5a5a5a]/20 py-1.5"
        value={todo}
        onChange={(e) => {
          return setTodo(e.target.value);
        }}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-[#000] border text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
