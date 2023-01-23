//import React dependencies
import { useState, useEffect, createContext } from "react";

//import Firebase dependencies
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

//import Firebase configuration
import { db } from "../config/firebase";

//import Firebase CRUD Hooks (Actions)
import createTodoAction from "../hooks/createTodoAction";
import readTodoAction from "../hooks/readTodoAction";
import updateTodoAction from "../hooks/updateTodoAction";
import deleteTodoAction from "../hooks/deleteTodoAction";
import readTodoLocalAction from "../hooks/readTodoLocalAction";
import createTodoLocalAction from "../hooks/createTodoLocalAction";
import updateTodoLocalAction from "../hooks/updateTodoLocalAction";
import deleteTodoLocalAction from "../hooks/deleteTodoLocalAction";

//Tailwindcss (for styling)
const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#6a85b6] to-[#80d0c7]`,
  bgDark: `h-screen w-screen p-4 bg-[#000000]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  containerDark: `bg-[#353a49] max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  headingDark: `text-3xl font-bold text-center text-gray-100 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-[#6a85b6] text-slate-100`,
  buttonDark: `border p-4 ml-2 bg-[#555d75] text-slate-100`,
  count: `text-center p-2`,
  countDark: `text-center p-2 text-white`,
  nav: `flex flex-row items-center justify-end child:ml-4`,
  navDark: `flex flex-row items-center justify-end child:ml-4 bg-gray-300 mb-2`,
  navSection: `flex flex-row items-center child:mx-1`,
  hr: `w-full h-1 bg-gray-200 border-0 rounded`,
  hrDark: `w-full h-1 bg-gray-500 border-0 rounded dark:bg-gray-500`,
};

//Create App Context API
const AppContext = createContext({});

//Create App Parent Provider to store context
export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLocal, setIsLocal] = useState(false);
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Create todo in firebase
  const createTodo = (e) => {
    isLocal
      ? createTodoLocalAction(e, todos, setTodos, inputValue, setInputValue)
      : createTodoAction(e, inputValue, setInputValue, addDoc, collection, db);
  };

  // Read todo from firebase
  useEffect(() => {
    isLocal
      ? readTodoLocalAction(setTodos)
      : readTodoAction(setTodos, query, collection, db, onSnapshot);
  }, [isLocal]);

  // Update todo in firebase
  const toggleComplete = (todo) => {
    isLocal
      ? updateTodoLocalAction(todo, todos, setTodos)
      : updateTodoAction(todo, updateDoc, doc, db);
  };

  // Delete todo in firebase
  const deleteTodo = (id) => {
    isLocal
      ? deleteTodoLocalAction(id, todos, setTodos)
      : deleteTodoAction(id, deleteDoc, doc, db);
  };

  return (
    <AppContext.Provider
      value={{
        style,
        darkMode,
        setDarkMode,
        isLocal,
        setIsLocal,
        todos,
        setTodos,
        inputValue,
        setInputValue,
        createTodo,
        toggleComplete,
        deleteTodo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
