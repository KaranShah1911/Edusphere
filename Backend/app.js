const express = require('express')
const cors = require('cors')

require('dotenv').config();

const ConnectToDB = require("./connect")

const user_router = require("./Routes/user")
const admin_router = require("./Routes/admin")
const course_router = require("./Routes/courses")

const app = express()

ConnectToDB()    // Establishing connection with the DataBase

// Setting up middleware for parsing the request body and allowing the client to make the request
app.use(cors({
    origin: "http://localhost:5173",  // Allowing the specific frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Optional: specify allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'],  // Optional: specify allowed headers
  }));
app.use(express.json())


//routes
app.use("/user" , user_router)
app.use("/admin" , admin_router)
app.use('/courses' , course_router)

app.listen(process.env.PORT , ()=>{console.log(`Sever started at port ${process.env.PORT}`)})