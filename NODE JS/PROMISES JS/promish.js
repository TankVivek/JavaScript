


 const square = (a) => {
    return new Promise(function (resolve, reject) {
        return resolve(a * a)
        //return reject("error")
    })
}

const cube = (b) => {
    return new Promise(function (resolve, reject) {
        return resolve(b * b * b)
        //return reject("error")
    })
}

const mul = (a) => {
    return new Promise(function (resolve, reject) {
        // return resolve(a * 10)
        return reject("mul error")
    })
}


// square(10).then(result => {
//     console.log(result);
//     return cube(result)
// }).then(data => {
//     console.log(data);
//     return mul(data)
// }).then(mul => {
//     console.log(mul);
// }).catch(err => {
//     console.log(err);
// })


// const call = async () => {

//     try {
//         const sq = await square(10)
//         console.log(sq);
//         const c = await cube(sq)
//         console.log(c);
//         const m = await mul(c)
//         console.log(m);
//     } catch (error) {
//         console.log(error);
//     }
// }

// call();

