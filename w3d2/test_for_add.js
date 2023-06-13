const todo1 = {
  id: "dqokdqk",
  task: "Do the laundry",
  description: "Don't forget to separate the whites",
  isComplete: false,
  date: "2023-06-13",
};
const todo2 = {
  id: "2",
  task: "Make lunch",
  description: "No tomatoes please",
  isComplete: true,
  date: "2023-06-12",
};
const todo3 = {
  id: "3",
  task: "LHL Homework",
  description: "You'll be done when you'll be done, which is in probably 12 weeks",
  isComplete: false,
  date: "2023-05-29",
};

const todoListObj = { dqokdqk: todo1, 2: todo2, 3: todo3 };

console.log(todoListObj);

const createTodo = (task, description, isComplete) => {
  const id = Math.floor(Math.random() * 1000) + "a";
  const newTodo = {
    id,
    task,
    description,
    isComplete,
  };

  todoListObj[id] = newTodo;

  return newTodo;
};

const result = createTodo("Bob", "bobrokeokgkeg", false);

console.log(result);
console.log(todoListObj);
