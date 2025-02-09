const express = require("express")
const {DisplayCourses , UploadCourse} = require("../Controllers/courses");
const {allow_login_user, allow_login_admin } = require("../Middlewares/login_user");

const course_router = express.Router();

course_router.get("/", DisplayCourses);
course_router.post("/" , allow_login_admin , UploadCourse);


module.exports = course_router;
