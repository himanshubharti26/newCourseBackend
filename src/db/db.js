const mongoose = require('mongoose');
const Logger = require('logger')

const connectDB = async()=>{
    try{
        const url = "mongodb://0.0.0.0:27017/trusity"
        const conn = await mongoose.connect(url);
        console.log("MongoDB connected Successfully")
    }catch(err){
        console.error(
            "Error in connecting mongoDB", err
        )
    }
}

module.exports = connectDB;