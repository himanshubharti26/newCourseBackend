
const userService = require("../services/userService");
exports.createUser = async(req, res)=>{
    try{
        const userData = req.body;
        console.log("User Data controller==>",userData);
        const  user = await userService.createUser(userData);
        res.status(201).send(user);
    }catch(err){
        return err;
    }
}

exports.getUserById = async(req, res)=>{
    try{
        const userId = req.params.id;
        const user = await userService.getUserById(userId);
        res.status(200).send(user);
    }catch(err){
        return err;
    }
}

exports.updateUser = async(req, res)=>{
    try{
        const updateData = req.body;
        const updatedUser = await userService.updateUser(updateData);
        res.status(200).send(updatedUser);
    }catch(err){
        return err;
    }
}