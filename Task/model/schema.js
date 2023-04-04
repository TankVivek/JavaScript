const mongoose = require("mongoose");
const validator = require("validator");
const dburl = "mongodb+srv://vivektank:vivektank@cluster0.pqvunzi.mongodb.net/newValidator?retryWrites=true&w=majority";

mongoose.connect(dburl).then(result => {
    console.log("db connected");
});

const userSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw Error("Enter valid name");
            }
        }
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Enter valid email");
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const UserList = mongoose.model("User", userSchema);

module.exports = UserList;



// //////////////////////////////////////////////////////
// const mongoose = require("mongoose")
// const validator = require("validator")
// const dburl = "mongodb+srv://vivektank:vivektank@cluster0.pqvunzi.mongodb.net/newValidator?retryWrites=true&w=majority"


// mongoose.connect(dburl).then(result => {
//     console.log("db connected");

// })

// const userScheema = new mongoose.Schema({

//     UserName: {
//         type: String,
//         require: true,
//         validate(value) {
//             if (!validator.isAlpha(value)) {

//                 throw Error("Enter valid name")

//             }
//         }

//     },
//     email: {
//         type: String,
//         require: true,
//         // unique: true,
//         validate(value) {
//             if
//                 (!validator.isEmail(value)) {
//                 throw new Error("Enter valid email")

//             }
//         }

//     },
//     password: {
//         type: String,
//         require: true
//     },
//     date: {
//         type: Date,
//         default: Date.now()
//     }

// })

// const UserList = mongoose.model("User", userScheema)

// module.exports.UserList