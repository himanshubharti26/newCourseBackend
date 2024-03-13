
const courseService = require('../services/courseService');

exports.createCourse = async(req,res)=>{
    try{
        const courseData = req.body;
        const course = await courseService.createCourse(courseData);
        res.status(201).send(course);
    }catch(err){
        return err;
    }
    
    
}

exports.getCourses  = async(req, res) =>{
    try{
        const courses = await courseService.getAllCourses();
        res.status(200).send(courses);

    }catch(err){
        return err;
    }
}

exports.findCourses = async(req, res)=>{
    try{
        const searchTerm = req.params.searchterm;
        const fetchedByName = await courseService.searchByTitle(searchTerm);
        const fetchByInstructor = await courseService.searchByInstructor(searchTerm);
        const fetchByCategory = await courseService.searchByCategory(searchTerm);
        res.status(200).send([...fetchedByName, ...fetchByInstructor, ...fetchByInstructor]);
    }catch(err){
        return err;
    }
}

exports.updateCourse = async(req, res) =>{
    try{
        const updateData = req.body;
        const updatedCourse = await courseService.updateCourse(updateData);
        res.status(200).send(updatedCourse);
    }catch(err){
        return err;
    }
}

exports.getCourseById = async(req, res)=>{
    try{
        console.log("received param in getCourseById", req.params.id);
        const courseId = req.params.id;
        const course = await courseService.getCourseById(courseId);
        res.status(200).send(course);
    }catch(err){
        return err;
    }

}