import { useContext } from "react";
import Todo from "./Todo";
import AppContext from "../context/AppContext";

const ListTodo = () => {
  const { todos } = useContext(AppContext);
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </ul>
  );
};

export default ListTodo;
