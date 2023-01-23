import { useContext } from "react";
import { Button, ToggleCloud, ToggleLocal } from "../atoms";
import AppContext from "../../context/AppContext";

export const SelectStorage = () => {
  const { style, isLocal, setIsLocal } = useContext(AppContext);
  return (
    <section className={style.navSection}>
      <ToggleLocal size="1.5em" />
      <button onClick={() => setIsLocal(!isLocal)}>
        <Button
          height="3em"
          width="3em"
          colorON="#48bbae"
          colorOFF="#d65d6d"
          toggle={isLocal ? "OFF" : "ON"}
        />
      </button>
      <ToggleCloud size="1.5em" />
    </section>
  );
};
