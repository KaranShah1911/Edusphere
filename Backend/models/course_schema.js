const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    course_name:
    {
        type: String,
        required:true,
    } , 
    
    course_description:
    {
        type: String,
        required:true
    },
    
    author_name:
    {
        type: String,
        required:true
    },
    
    course_points:
    {
        type: Number,
        required:true
    },
    
    course_price:
    {
        type: Number,
        required:true
    },
    
    buy_count:
    {
        type: Number,
        default:0
    }
} , {
    timestamps: true
});

const Courses = mongoose.model("Courses", CourseSchema);

module.exports = Courses;