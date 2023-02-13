
const fs = require ("fs")

const createfile = (data) => 
{
    const newData = JSON.stringify(data) 
    fs.writeFile("task.json", newData,(err) =>  {
        if(err)
        {
            console.log(err);
            return
        }
        console.log("data inserted in file");
    }
 )
   
}






















module.exports = { createfile,}