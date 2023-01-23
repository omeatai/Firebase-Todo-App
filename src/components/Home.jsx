import React, { useContext } from "react";
import Header from "./Header";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";
import Footer from "./Footer";
import Nav from "./Nav";

import AppContext from "../context/AppContext";

//Home component
const Home = () => {
  const { style, darkMode } = useContext(AppContext);
  return (
    <React.Fragment>
      <div className={darkMode ? style.bgDark : style.bg}>
        <div className={darkMode ? style.containerDark : style.container}>
          <Header />
          <Nav />
          <AddTodo />
          <ListTodo />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
