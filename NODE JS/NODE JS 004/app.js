

const yargs = require ("yargs")
const file = require("./newFile") 
const { string } = require("yargs")

yargs.command({

    command: "create",

    builder: {
        name: {
            type: string
        },
        desc: {
            type: string
        },
        date:
        {
            type: string,
            default: new date()
        }
    },
    handler: function (argv)
     
    { const data = 
    { name: argv.name,
      desc: argv.desc,
      date: argv.date  

    }

    file.createfile(data)

    }})

    yargs.argv