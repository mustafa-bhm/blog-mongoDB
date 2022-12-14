const http = require("http");
const fs = require("fs");

// to create a  server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
      break;
  }

  /// *** to send html file as a response **** ///
  res.setHeader("content-type", "text/html");
  // to send html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      // res.write(data);
      // or
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
