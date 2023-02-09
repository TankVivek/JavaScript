
const file = require("./node_02.js")

const { string } = require("yargs")
const yargs = require("yargs")


yargs.command({

    command:"create",

    builder: {

        name: {
            type: string
        },
        email:
        {
            type: string
        }
    } ,
    handler: function (argv)
    {
        const add = {
            name: argv.name,
            email: argv.email
        }
     file.createFile(add);
    }
})

yargs.argv
