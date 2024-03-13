const enrollmentService = require('../services/userCourseService');

exports.enrollCourse = async(req, res)=>{
    const {userId, courseId} = req.body;
    try{
        const enrolled = await enrollmentService.enrollCourse(userId, courseId);
        res.status(201).send(enrolled);
    }catch(err){
        throw err;
    }

}
 
exports.unrollCourse = async(req, res)=>{
    const {userId, courseId} = req.body;
    try{
        const unrolled =  await enrollmentService.unrollCourse(userId, courseId); 
        res.status(200).send(unrolled);
    }catch(err){
        throw err;
    }
}

exports.getUserCourses = async(req, res)=>{
    try{
        const userId = req.params.userId;
        console.log("extracted user id",userId);
        const courses = await enrollmentService.getEnrolledCourses(userId);
        res.status(200).send(courses);
    }catch(err){
        throw err;
    }
}