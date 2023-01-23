const createTodoAction = async (
  e,
  inputValue,
  setInputValue,
  addDoc,
  collection,
  db
) => {
  e.preventDefault();
  if (inputValue === "") {
    alert("Please enter a value");
    return;
  }
  await addDoc(collection(db, "todos"), {
    task: inputValue,
    completed: false,
  });
  setInputValue("");
};

export default createTodoAction;
