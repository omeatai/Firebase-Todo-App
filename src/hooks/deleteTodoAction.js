const deleteTodoAction = async (id, deleteDoc, doc, db) => {
  await deleteDoc(doc(db, "todos", id));
};

export default deleteTodoAction;
