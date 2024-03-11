const enrollRouter = require('express').Router();

const enrollController = require('../controllers/enrollCourseController');

enrollRouter.get("/course/:userId", enrollController.getUserCourses)
.post("/course", enrollController.enrollCourse)
.post('/unroll/course', enrollController.unrollCourse)

module.exports = enrollRouter;