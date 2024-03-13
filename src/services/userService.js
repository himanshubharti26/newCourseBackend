const HttpException = require("../HttpException");
const userModel = require("../models/userModel")
const bcrypt = require('bcrypt');
const { v4 } = require('uuid');

exports.createUser = async(userData)=>{
    try{
        console.log("User Data before ==>",userData);
        const hashedPass = await bcrypt.hash(userData.password, 10);
        console.log("User Data after ==>",userData);
        userData.password = hashedPass;
        userData.userId = v4();
        console.log("User Data ==>",userData);
        const user = await userModel.create(userData);
        return user;
    }catch(err){
        throw new HttpException(500, `Error creating user: ${err}`);
    }
}


exports.updateUser = async(updateData)=>{
    try{
        const user   =  await this.getUserById(updateData.userId);

        if(!user){
            throw new HttpException(404, "user not found");
        }

        const updatedUser = await userModel.findOneAndUpdate({userId:updateData.userId}, {"$set":updateData}, {new:true});
        return updatedUser;
        
    }catch(err){
       if(err.name === "HttpException"){
        throw err;
       }else{
        throw new HttpException(500, "Internal server error");
       }
    }
}

exports.getUserById = async(userId) =>{
    try{
        const user   =  await userModel.findOne({userId});
        if(!user){
            throw new HttpException(404, "User not found");
        }
        return user;
    }catch(err){
        throw err;
    }
}