const http = require("http");
const fs = require("fs");

// to create a  server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // **** to send text content ***** //
  // //set headre content type
  // res.setHeader("content-type", "text/html");

  // // set the content of resonse
  // res.write("<h1>hello, world</h1>");
  // res.write("<h2>hello, again</h2>");

  // // ending the response to send it to te browser
  // res.end();

  /// *** to send html file as a response **** ///
  res.setHeader("content-type", "text/html");
  // to send html file
  fs.readFile("./views/index.html", (err, data) => {
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
