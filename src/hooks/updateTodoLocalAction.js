const updateTodoLocalAction = (todo, todos, setTodos) => {
  const todoId = todo.id;
  const unalteredTodos = todos.filter((todo) => todo.id !== todoId);
  const newTodos = [
    ...unalteredTodos,
    {
      id: todoId,
      completed: !todo.completed,
      task: todo.task,
    },
  ];
  const sortedTodos = newTodos.sort((a, b) => a.id - b.id);
  setTodos(sortedTodos);
  localStorage.setItem("todos", JSON.stringify(sortedTodos));
};

export default updateTodoLocalAction;
