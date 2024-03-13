const mongoose = require('mongoose');
const Logger = require('logger')

const connectDB = async()=>{
    try{
        const url = "mongodb+srv://himanshubharti9626:mongopassword9626@cluster1.grhhtjg.mongodb.net/trusity"
        const conn = await mongoose.connect(url);
        console.log("MongoDB connected Successfully")
    }catch(err){
        console.error(
            "Error in connecting mongoDB", err
        )
    }
}

module.exports = connectDB;