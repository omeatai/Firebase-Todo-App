import { useContext } from "react";
import { SelectMode, SelectStorage } from "./molecules";
import AppContext from "../context/AppContext";

const Nav = () => {
  const { style, darkMode } = useContext(AppContext);
  return (
    <nav className={darkMode ? style.navDark : style.nav}>
      <SelectStorage />
      <SelectMode />
    </nav>
  );
};

export default Nav;
