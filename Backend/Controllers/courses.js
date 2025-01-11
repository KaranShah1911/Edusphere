const Courses = require("../models/course_schema")

async function DisplayCourses(req ,res){
    try{
        const courses = await Courses.find();
        if(courses.length>0){
            return res.status(200).json({message : "courses fetched Successfully." , courses : courses});
        }else{
            return res.status(200).json({message : "No courses available." });
        }
    }catch(err){
        return res.status(500).json({error : "Error with the server."});
    }

}

module.exports = {
    DisplayCourses
}