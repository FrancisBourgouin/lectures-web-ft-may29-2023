const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded());

const { fetchTodoById, updateTodoById, createTodo } = require("./helpers/todoHelpersArr");

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
const todoListArr = [todo1, todo2, todo3];

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.get("/todos", (req, res) => {
  // const templateVars = { todos: todoListArr };
  const templateVars = { todos: Object.values(todoListObj) };
  return res.render("todos", templateVars);
});

app.get("/todos/:todo_id", (req, res) => {
  const { todo_id } = req.params;

  const currentTodo = fetchTodoById(todo_id, todoListArr);
  console.log(currentTodo);

  const templateVars = { todo: currentTodo };
  return res.render("todo", templateVars);
});

app.get("/todos/:todo_id/edit", (req, res) => {
  const { todo_id } = req.params;

  const currentTodo = fetchTodoById(todo_id, todoListArr);
  console.log(currentTodo);

  const templateVars = { todo: currentTodo };
  return res.render("todo-edit", templateVars);
});

app.post("/todos/:todo_id", (req, res) => {
  const { todo_id } = req.params;
  const { task, description, isComplete } = req.body;

  const updatedTodo = updateTodoById(todo_id, task, description, isComplete, todoListArr);

  return res.redirect(`/todos`);
});

app.post("/todos", (req, res) => {
  const { task, description, isComplete } = req.body;

  const newTodo = createTodo(task, description, isComplete);

  return res.redirect("/todos");
});

app.listen(PORT, () => {
  return console.log(`Example app listening on port ${PORT}`);
});
