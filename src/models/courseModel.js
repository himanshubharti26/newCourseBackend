const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseId:{
       type:Number, 
       required:true,
       unique:true
    },
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,

    },
    instructor:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        default:0
    },
    category:{
        type:String
    },
    price:{
        type:Number
    }
},{timestamps:true});

const courseModel = new mongoose.model("course", courseSchema);

module.exports = courseModel;