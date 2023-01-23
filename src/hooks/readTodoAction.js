const readTodoAction = async (setTodos, query, collection, db, onSnapshot) => {
  const q = await query(collection(db, "todos"));
  const unsubscribe = await onSnapshot(q, (querySnapshot) => {
    let todosArr = [];
    querySnapshot.forEach((doc) => {
      todosArr.push({ ...doc.data(), id: doc.id });
    });
    setTodos(todosArr);
  });
  return () => unsubscribe();
};

export default readTodoAction;
