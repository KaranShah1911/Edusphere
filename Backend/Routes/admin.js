const express = require('express')
const {CreateAdmin , VerifyAdmin , GetCourses , DeleteCourse , AddCourse} = require('../Controllers/admin');
const { allow_login_user } = require('../Middlewares/login_user');

const admin_router = express.Router()

// admin_router.get('/' , DisplayAdminPage)
// admin_router.get('/login' , DisplayAdminLoginPage)
admin_router.post("/add-details" , CreateAdmin);
admin_router.post('/login' , VerifyAdmin);
admin_router.get("/get-courses/:id" ,allow_login_user, GetCourses);
admin_router.delete("/delete-course/:id" ,allow_login_user, DeleteCourse);
admin_router.post("/add-course/:id" ,allow_login_user, AddCourse);

module.exports = admin_router;