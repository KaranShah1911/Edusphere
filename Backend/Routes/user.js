const express = require('express')
const {DisplayUserLoginPage , VerifyUser , DisplayUserHomePage , DisplayUserSignupPage , CreateUser , DisplayCourses} = require('../Controllers/user')
const {allow_login_user} = require("../Middlewares/login_user")

const user_router = express.Router()

user_router.get('/',DisplayUserHomePage)
user_router.get('/login' , DisplayUserLoginPage)
user_router.post('/login' , VerifyUser)
user_router.get('/signup' , DisplayUserSignupPage)
user_router.post('/signup' , CreateUser)
user_router.get("/my-learning" , allow_login_user , DisplayCourses)

module.exports = user_router;