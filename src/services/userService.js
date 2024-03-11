const HttpException = require("../HttpException");
const userModel = require("../models/userModel")
const bcrypt = require('bcrypt');


exports.createUser = async(userData)=>{
    try{
        const hashedPass = bcrypt.hash(userData.password, 10);
        userData.password = hashedPass;
        const user = await userModel.create(userData);
        return user;
    }catch(err){
        throw new HttpException(500, "Error creating user");
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