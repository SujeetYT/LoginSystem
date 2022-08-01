const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    hashPassword : {
        type : String,
        required : true
    }
});

// const loginSchema = new mongoose.Schema({
//     email : {
//         type : String,
//         required : true
//     },
//     password : {
//         type : String,
//         required : true
//     }
// });

// const loginModel = mongoose.model("loginModel", loginSchema);
const signUpModel = mongoose.model("signUpModel", signUpSchema);

module.exports = signUpModel;