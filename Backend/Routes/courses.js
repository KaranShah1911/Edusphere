const express = require("express")
const {DisplayCourses} = require("../Controllers/courses")

const course_router = express.Router();

course_router.get("/" , DisplayCourses);

module.exports = course_router;
