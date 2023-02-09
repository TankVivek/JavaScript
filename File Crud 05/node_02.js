

// const { ALL } = require("dns");
const fs = require("fs")
// const 
const createFile = (add) => {
    
    // alldata.push(add)
    // const data1 = JSON.stringify(alldata)
    fs.writeFile('data.JSON',JSON.stringify(add) , (err) => {
        if(err){
            console.log(err);
        } else{
            console.log('Done');
        }
    })
    // console.log("folder a a a");

    // console.log(add);

}
module.exports = { createFile }
