const updateTodoAction = async (todo, updateDoc, doc, db) => {
  await updateDoc(doc(db, "todos", todo.id), {
    completed: !todo.completed,
  });
};

export default updateTodoAction;
