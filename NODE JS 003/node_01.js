
// var k = process.argv[0]
// var y = process.argv[1]
// var a = process.argv[2]
// var b = process.argv[3]

// console.log(k);
// console.log(y);
// console.log(a + " " + b);

const fs = require("fs");
const path = require("path");
const { command } = require("yargs");
const yargs = require("yargs")

   
    yargs.command({

    command: "add",

    builder: {
        add: {
                 type:fs.mkdirSync("New a Folder")
         },
    },
    handler: function (argv) {
        console.log("Create a New Folder Successfully");
        process.exit(1);
    
    }})


yargs.argv


