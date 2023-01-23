import { useContext } from "react";
import { Button, ToggleMoon, ToggleSun } from "../atoms";
import AppContext from "../../context/AppContext";

export const SelectMode = () => {
  const { style, darkMode, setDarkMode } = useContext(AppContext);

  return (
    <section className={style.navSection}>
      <ToggleSun size="1.5em" color="black" />
      <button onClick={() => setDarkMode(!darkMode)}>
        <Button
          height="3em"
          width="3em"
          colorON="#6a85b6"
          colorOFF="gray"
          toggle={darkMode ? "ON" : "OFF"}
        />
      </button>
      <ToggleMoon size="1.5em" color="black" />
    </section>
  );
};
