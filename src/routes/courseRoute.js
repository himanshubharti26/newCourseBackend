const express = require('express');
const courseRouter = express.Router();
const courseController = require('../controllers/courseController');

courseRouter.get('/',courseController.getCourses)
.post('/', courseController.createCourse);
courseRouter.get('/search/:query',courseController.findCourses);
courseRouter.get('/:id', courseController.getCourseById);
courseRouter.put('/', courseController.updateCourse);

module.exports = courseRouter;