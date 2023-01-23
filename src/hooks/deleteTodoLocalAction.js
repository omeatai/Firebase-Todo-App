const deleteTodoLocalAction = (id, todos, setTodos) => {
  const unalteredTodos = todos.filter((todo) => todo.id !== id);
  const sortedTodos = unalteredTodos.sort((a, b) => a.id - b.id);
  setTodos(sortedTodos);
  localStorage.setItem("todos", JSON.stringify(sortedTodos));
};

export default deleteTodoLocalAction;
