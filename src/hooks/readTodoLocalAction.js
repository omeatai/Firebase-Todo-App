const readTodoLocalAction = (setTodos) => {
  const localData = JSON.parse(localStorage.getItem("todos"));
  localData ? setTodos(localData) : setTodos([]);
};

export default readTodoLocalAction;
