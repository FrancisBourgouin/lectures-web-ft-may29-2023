const fetchTodoById = (todoId, todoListObj) => todoListObj[todoId];

const updateTodoById = (todoId, task, description, isComplete, todoListObj) => {
  const currentTodo = todoListObj[todoId];

  if (!task && !description && !isComplete) {
    currentTodo.isComplete = !currentTodo.isComplete;

    return currentTodo;
  }

  currentTodo.task = task;
  currentTodo.description = description;
  // if (isComplete === "on") {
  //   currentTodo.isComplete = true;
  // } else {
  //   currentTodo.isComplete = false;
  // }
  currentTodo.isComplete = isComplete === "on";

  return currentTodo;
};

const createTodo = (task, description, isComplete, todoListObj) => {
  const id = Math.floor(Math.random() * 1000) + "a";
  const newTodo = {
    task,
    description,
    id,
    isComplete: isComplete === "on",
  };

  todoListObj[id] = newTodo;

  return newTodo;
};

const deleteTodoById = (todoId, todoListObj) => {
  delete todoListObj[todoId];
};

module.exports = { fetchTodoById, fetchTodoByIdButBetter, updateTodoById, createTodo };
