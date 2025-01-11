const express = require('express')
const cookieparser = require("cookie-parser")
const  path = require("path")

const ConnectToDB = require("./connect")

const general_router = require("./Routes/general")
const user_router = require("./Routes/user")
const admin_router = require("./Routes/admin")
const course_router = require("./Routes/courses")

const {allow_login_user} = require("./Middlewares/login_user")

const app = express()
const PORT = 8000;

const url = "mongodb://127.0.0.1:27017/Edusphere"   // DataBase url
ConnectToDB(url)    // Establishing connection with the DataBase


//Setting up engine
// app.set("view engine" , "ejs")
// app.set("views" , path.resolve('./views'))

// Setting up middleware for parsing the request body
// app.use(express.urlencoded({extended:true}))
// app.use(cookieparser())
app.use(express.json())

//routes
app.use("/" , general_router)
app.use("/user" , user_router)
app.use("/admin" , admin_router)
app.use('/courses' , course_router)

app.listen(PORT , ()=>{console.log(`Sever started at port ${PORT}`)})