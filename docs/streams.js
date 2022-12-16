const fs = require("fs");

// file where we are getting data from
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf-8",
});

// file where the data is being streamed to
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// adding eventListenner to read (.on) and write (.write)
readStream.on("data", (chunk) => {
  console.log("-----new chunk ---");
  console.log(chunk);
  writeStream.write("\n New Chunk\n");
  writeStream.write(chunk);
});

// piping ( similar function to the above one to read and write data from one file to another)
// readStream.pipe(writeStream);
