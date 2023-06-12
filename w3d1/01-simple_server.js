// Net package vs HTTP package

// HTTP => Hyper text transfer protocol
// Browser sends a request to a server
// Server sends a response to the browser

const http = require("http");

// The goal is to send "Hello, you asked for the url path of /chicken"

const server = http.createServer((request, response) => {
  console.log(request.url);

  // Headers
  // response.statusCode(200);
  response.writeHead(200, { "Content-Type": "text/json" });
  // Body
  // End
  const message = `Hello, you asked for the url path of ${request.url}`;
  const stringifiedMessage = JSON.stringify(message);

  response.end(stringifiedMessage);
});

server.listen(3000);

// Status messages from server:

// 10x : Connection
// 20x : OK (Good job, all good)
// 30x : Redirection (301, 302) (Temporary or Permanent)
// 40x : 404 Page not Found, 403 Unauthorized (You fudged up)
// 50x : 500 Server crash (Server fudged up)

// JSON :
