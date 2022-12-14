const fs = require("fs");

// readng files /// *****
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// writing files /// *****
//  /=> with existing file
fs.writeFile("./docs/blog1.txt", "hello world 2", () => {});
//=> with a non-existing file, this func will create a new file
fs.writeFile("./docs/blog2.txt", "hello world 2", () => {});

// directories (create and delete) /// *****

// this func will only run if the file we want to create does not exist
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  //=> if folder exist the func will delete it
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

// deleting files /// *****

if (fs.existsSync("./docs/delete.txt")) {
  fs.unlink("./docs/delete.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
