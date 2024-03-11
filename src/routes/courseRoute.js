const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/courses',courseController.getCourses)
.post('/course', courseController.createCourse);
router.get('/courses/search/:query',courseController.findCourses);
router.get('/course/:id', courseController.getCourseById);
router.put('/course', courseController.updateCourse);

module.exports = router;