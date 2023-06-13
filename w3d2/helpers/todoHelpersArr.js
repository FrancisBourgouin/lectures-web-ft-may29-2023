const fetchTodoById = (todoId, todoListArr) => {
  let currentTodo = undefined;
  for (const todo of todoListArr) {
    console.log(todo.id, todoId);
    if (todo.id === todoId) {
      currentTodo = todo;
    }
  }
  return currentTodo;
};

const fetchTodoByIdButBetter = (todoId, todoListArr) => {
  let currentTodo = todoListArr.find((todo) => todo.id === todoId);

  return currentTodo;
};

const updateTodoById = (todoId, task, description, isComplete, todoListArr) => {
  const currentTodo = fetchTodoById(todoId, todoListArr);

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

const createTodo = (task, description, isComplete, todoListArr) => {
  const newTodo = {
    task,
    description,
    id: Math.floor(Math.random() * 1000) + "a",
    isComplete: isComplete === "on",
  };

  todoListArr.push(newTodo);

  return newTodo;
};

const deleteTodoById = (todoId, todoListArr) => {
  const updatedList = [];
  for (const todo in todoListArr) {
    if (todo.id !== todoId) {
      updatedList.push(todo);
    }
  }
  todoListArr = updatedList;
};

const deleteTodoByIdButBetter = (todoId, todoListArr) => {
  const updatedList = todoListArr.filter((todo) => todo.id !== todoId);

  todoListArr = updatedList;
};

module.exports = { fetchTodoById, fetchTodoByIdButBetter, updateTodoById, createTodo };
