const createTodoLocalAction = (
  e,
  todos,
  setTodos,
  inputValue,
  setInputValue
) => {
  e.preventDefault();
  if (inputValue === "") {
    alert("Please enter a value");
    return;
  }

  const newTodoId = todos.length < 1 ? 1 : todos[todos.length - 1].id + 1;
  const newTodo = {
    id: newTodoId,
    completed: false,
    task: inputValue,
  };
  const newTodos = [...todos, newTodo];
  const sortedTodos = newTodos.sort((a, b) => a.id - b.id);
  setTodos(sortedTodos);
  localStorage.setItem("todos", JSON.stringify(sortedTodos));
  setInputValue("");
};

export default createTodoLocalAction;
