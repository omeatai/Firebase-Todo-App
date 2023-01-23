import { useContext } from "react";
import AppContext from "../context/AppContext";

const Footer = () => {
  const { style, darkMode, todos } = useContext(AppContext);
  return todos.length < 1 ? null : (
    <footer>
      <p className={darkMode ? style.countDark : style.count}>
        You have {todos.length} todos
      </p>
    </footer>
  );
};

export default Footer;
