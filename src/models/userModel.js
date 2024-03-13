const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true

    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

}, {timestamps:true});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;