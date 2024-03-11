const HttpException = require("../HttpException");
const courseModel = require("../models/courseModel");

exports.createCourse=async(courseData)=>{
    if(!courseData){
        throw new HttpException(403, "Bad Request");
    }
    try{
        const course  = await courseModel.create(courseData);
        return course;
    }catch(err){
        throw new HttpException(500, "Internal server error");
    }
   
}

exports.getAllCourses = async()=>{
    try{
        const courses = await courseModel.find();
        return courses;
    }catch(err){
        throw new HttpException(500, err?.message);
    }
}

exports.searchByTitle =async (searchTerm)=>{
    try{
        const courses = await courseModel.find({"title":{"$regex":searchTerm,"$options": "i"}});
        return courses;
    }catch(err){
        throw new HttpException(500, "Error in getting courses based on title");
    }
}

exports.searchByInstructor = async (searchTerm)=>{
    try{
        const courses = await courseModel.find({"instructor":{"$regex":searchTerm,"$options": "i"}});
        return courses;
    }catch(err){
        throw new HttpException(500, "Error in getting courses based on instructor");
    }
}

exports.searchByCategory =async (searchTerm)=>{
    try{
        const courses = await courseModel.find({"category":{"$regex":searchTerm,"$options": "i"}});
        return courses;
    }catch(err){
        throw new HttpException(500, "Error in getting courses based on category");
    }
}

exports.getCourseById = async(id)=>{
    try{
        const course = await courseModel.findOne({id});
        return course;
    }catch(err){
        throw new HttpException(404,"course not found");
    }
}

exports.updateCourse = async (courseData)=>{

    try{
        const course =await this.getCourseById(courseData.id);
    if(!course){
        throw new HttpException(404,"course not found"); 
    }  
    
    
    const updatedCourse = await courseModel.findOneAndUpdate({id:courseData.id}, {"$set":courseData}, {new:true});
    
    return updatedCourse;
    }catch(err){
        throw new HttpException(500, "Internal server error");
    }
    
}