import { useContext } from "react";
import AppContext from "../context/AppContext";

const Header = () => {
  const { style, darkMode } = useContext(AppContext);
  return (
    <header>
      <h3 className={darkMode ? style.headingDark : style.heading}>
        Firebase Todo App
      </h3>
      <hr className={darkMode ? style.hrDark : style.hr} />
    </header>
  );
};

export default Header;
