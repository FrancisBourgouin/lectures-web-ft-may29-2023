# TODO LIST - THE PLAN !

## Functionality

- View all todos
- View a todo
- Add a todo
- Remove a todo
- Edit/Update a todo (completion / text)

## Data structure

### Todo Item

Task / Description / Status / Date

```jsx
const todo = {
  id: "",
  task: "",
  description: "",
  isComplete: false,
  date: "",
};
```

### Todo List

```jsx
const todos = [todo, todo];
const todos = { 1: todo, 2: todo };
```

## Seed

```jsx
const todo1 = {
  id: 1,
  task: "Do the laundry",
  description: "Don't forget to separate the whites",
  isComplete: false,
  date: "2023-06-13",
};
const todo2 = {
  id: 2,
  task: "Make lunch",
  description: "No tomatoes please",
  isComplete: true,
  date: "2023-06-12",
};
const todo3 = {
  id: 3,
  task: "LHL Homework",
  description: "You'll be done when you'll be done, which is in probably 12 weeks",
  isComplete: false,
  date: "2023-05-29",
};

const todoListObj = { 1: todo1, 2: todo2, 3: todo3 };
const todoListArr = [todo1, todo2, todo3];
```

## Actions

- See all the todos
- See a specific todo
- Add a todo
- Edit a todo
- Mark todo as complete
- Delete a todo

## Events CRUD (GET POST PUT DELETE ...)

## Routes & Events

- See all the todos - /todos
- See a specific todo - /todos/id
- Add a todo - /todos/new
- Edit a todo - /todos/id/edit
- Mark todo as complete - /todos/id/edit
- Delete a todo - /todos/id/delete

GET / POST

### See all the todos

/todos (GET)

### See a specific todo

/todos/id (GET)

### Add a todo

/todos/new (GET) Where the form to build the new todo will be
/todos (POST)

### Edit a todo

### Mark todo as complete (duplicate)

/todos/id/edit (GET) Where the form to edit the new todo will be
/todos/id (POST)

### Delete a todo

/todos/id/delete (POST)

## Packages

- Express (https://expressjs.com/)
- UUID (https://www.npmjs.com/package/uuid)
- EJS (https://www.npmjs.com/package/ejs)
- Nodemon (https://www.npmjs.com/package/nodemon)
