
const HttpException = require("../HttpException");
const courseModel = require("../models/courseModel");
const userCourseModel = require("../models/userCourseModel");
const userModel = require("../models/userModel");

exports.enrollCourse = async(userId, courseId)=>{
    try{
        const alreadyEnrolled = await userCourseModel.findOne({userId, courseId})

        if(alreadyEnrolled){
            throw new HttpException(403, "User already enrolled");
        }else{
            const enrollUser = await userCourseModel.create({userId, courseId});
            return enrollUser;
        }
    }catch(err){
        if (err.name === 'HttpException') {
            throw err;
        } else {
            throw new HttpException(500, "Internal Server Error");
        }
    }
}

exports.getEnrolledCourses = async(userId)=>{
    try{
        const user = await userModel.findOne({userId});
        if(!user){
            throw new HttpException(404, "user not found");
        }

        let enrolledCourses = await userCourseModel.find({userId}).populate('courseId');


    //    const enrolledCourses =  courseIds.map(async(course)=>{
    //         let courseDetails = await courseModel.findOne({courseId:course.courseId});
    //         courseDetails.progress = course.progress;
    //         return courseDetails;
    //    });

     return  enrolledCourses.map(course=>({
        courseId:course.courseId.courseId,
        title:course.courseId.title,
        description:course.courseId.description,
        instructor:course.courseId.instructor,
        progress:course.progress,
        rating: course.courseId.rating
    }));


    }catch(err){
        throw new HttpException(500, "Internal Server error");
    }
}   

exports.unrollCourse = async(userId, courseId)=>{

    try{
        const enrollmentExists = await userCourseModel.findOne({userId, courseId});
        if(!enrollmentExists){
            throw new HttpException(403, "User is not enrolled in this couser");
        }
        const unrolled = await userCourseModel.deleteOne({userId, courseId});
        if (unrolled.deletedCount === 1) {
            return { message: "User unenrolled from the course successfully" };
        } else {
            throw new HttpException(500, "Error occurred while unenrolling user from the course");
        }
    }catch(err){
        if (err.name === 'HttpException') {
            throw err;
        } else {
            throw new HttpException(500, "Internal Server Error");
        }
    }
}