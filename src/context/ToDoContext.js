import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "yoyo",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  upDateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplet: (id) => {},
});

export const useToDo = () => {
  return useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;
