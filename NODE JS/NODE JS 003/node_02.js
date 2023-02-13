
const fs = require("fs");
const path = require("path");
const { command } = require("yargs");
const yargs = require("yargs")




yargs.command({

    command: "remove",
    builder: {
        remove: {

            type:fs.rmdirSync("New a Folder"),
            
        }
    },
    handler: function (argv) {
        
        console.log("remove a New Folder Successfully");
        process.exit(1);

    }})
