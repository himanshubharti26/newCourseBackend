const mongoose = require('mongoose');


const userCourseSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    courseId:{
        type:Number,
        required:true
    },
    progress:{
        type:Number,
        required:true,
        default:0
    },
    //we can do soft unroll by creating a flag field enrolled as true/false 
    // enrolled:{
    //     type:Boolean,
    //     default:false
    // }
    
}, {timestamps:true});

const userCourseModel = mongoose.model('userCourse', userCourseSchema);