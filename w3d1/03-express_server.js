// Basic express server wo/ EJS

const express = require("express");

const app = express(); // This is equivalent to http.createServer()

app.set("view engine", "ejs"); // I want to use EJS for my templates

// CRUD / BREAD
// POST => Create
// GET => Browse / Read
// PUT => Update
// DELETE => Delete
// CRUD => Create Read Update Delete
// BREAD => Browse Read Edit Add Delete
// HTTP VERBS

// /users/1
const user1 = {
  id: 1,
  name: "Pequeno pollo de la pampa",
  email: "pock@pock.com",
  location: "Pampa",
};

// /users/2
const user2 = {
  id: 2,
  name: "Bob the Bass",
  email: "glub@glub.com",
  location: "A river near you",
};

const users = {
  1: user1,
  2: user2,
};

app.get("/", (req, res) => {
  return res.send("Request received");
});

// Wildcards!
// Placeholder

const fetchUserById = (userId) => {
  if (users[userId]) {
    return users[userId];
  }

  return "This is not a valid user id";
};

app.get("/users/:user_id", (req, res) => {
  // const user_id = req.params.user_id;
  const { user_id } = req.params;

  console.log(user_id);

  const currentUser = fetchUserById(user_id);
  return res.json(currentUser);
});

const someHTML = `  
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Super Title!</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body {
        min-height: 100vh;
        background: #bada55;
        font-family: sans-serif;
      }
    </style>
  </head>
  <body>
    <h1>CHICKEN TIME!</h1>
    <p>🐔🐔🐔🐔🐔🐔🐔</p>
  </body>
</html>
`;

app.get("/pollo", (req, res) => {
  // res.send(someHTML);
  const title = "CHICKEN TIME !";
  const content = "🐔🐔🐔🐔🐔🐔🐔🐔🐔";

  res.render("party_time", { title, content });
});

app.get("/fish", (req, res) => {
  // res.send(someHTML);
  const title = "FISH TIME !";
  const content = "🐟🐟🐟🐟🐟🐟🐟🐟";
  res.render("party_time", { title, content });
});

// app.get("/users/2", (req, res) => {
//   return res.json(user2);
// });

app.listen(3000);

const someObject = { a: 1, b: 2, c: 3, d: 4 };

// const a = someObject.a;
// const b = someObject.b;
// const c = someObject.c;
// const d = someObject.d;

const { a, b, c, d } = someObject;
