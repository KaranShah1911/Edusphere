const express = require("express")
const {DisplayCourses , UploadCourse} = require("../Controllers/courses");
const { allow_login_user } = require("../Middlewares/login_user");

const course_router = express.Router();

course_router.get("/" ,allow_login_user, DisplayCourses);
// course_router.post("/" ,allow_login_user, UploadCourse);
course_router.post("/" ,allow_login_user, UploadCourse);


module.exports = course_router;
