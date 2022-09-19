

const mongoose = require('mongoose');

const Users = new mongoose.Schema({

    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String
    },
    phone: {
        type: String,
    },
    password: {
        type: String,
    },
});

module.exports = mongoose.model('Users', Users)


// const mongoose = require('mongoose');

// const userschema = new mongoose.Schema({
//     firstName:{
//         type:String,
//         required:true
//     },
//     lastName:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true
//     },
//     phone:{
//         type: String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// });
//  const users = new mongoose.model('Users', userschema);
//  module.exports = users;