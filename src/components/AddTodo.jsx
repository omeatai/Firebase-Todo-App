import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AppContext from "../context/AppContext";

const AddTodo = () => {
  const { style, darkMode, createTodo, inputValue, setInputValue } =
    useContext(AppContext);
  return (
    <form onSubmit={createTodo} className={style.form}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Add Todo"
      />
      <button className={darkMode ? style.buttonDark : style.button}>
        <AiOutlinePlus size={30} />
      </button>
    </form>
  );
};

export default AddTodo;
