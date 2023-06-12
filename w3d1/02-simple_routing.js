// HTTP Server w/ Routing

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

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url; // Expect url to be either /users/1 or /users/2

  if (url === "/users/1") {
    const message = JSON.stringify(user1);

    return res.end(message);
  }

  if (url === "/users/2") {
    const message = JSON.stringify(user2);

    return res.end(message);
  }

  return res.end("NOT A VALID REQUEST");
});

server.listen(3000);
