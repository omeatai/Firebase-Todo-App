import { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import AppContext from "../context/AppContext";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-[#80d0c7] p-4 my-2 capitalize`,
  liCompleteDark: `flex justify-between bg-[#373c4b] p-4 my-2 capitalize border-2 border-slate-300 rounded-lg`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  textCompleteDark: `ml-2 cursor-pointer line-through text-slate-200`,
  button: `cursor-pointer flex items-center`,
};

const Todo = ({ todo }) => {
  const { darkMode, toggleComplete, deleteTodo } = useContext(AppContext);
  return (
    <li
      className={
        todo.completed && darkMode
          ? style.liCompleteDark
          : todo.completed
          ? style.liComplete
          : style.li
      }
    >
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={
            todo.completed && darkMode
              ? style.textCompleteDark
              : todo.completed
              ? style.textComplete
              : style.text
          }
        >
          {todo.task}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}> {<FaRegTrashAlt />}</button>
    </li>
  );
};

export default Todo;
