


const fs = require("fs")

// fs.mkdirSync("files")

// fs.writeFileSync("files/note.txt", " is my first file added new content");

const data = fs.readFileSync("files/note.txt", "utf-8")
console.log(data);
console.log("file called using sync way");

fs.readFile("files/note.txt", (err, data) => {
    console.log(data.toString());
})
console.log("file called using async way");
