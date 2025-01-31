const Courses = require("../models/course_schema")

async function DisplayCourses(req ,res){
    try{
        const courses = await Courses.find();
        if(courses.length>0){
            return res.status(200).json({message : "courses fetched Successfully." , courses : courses});
        }else{
            return res.status(200).json({message : "No courses available." , courses : [] });
        }
    }catch(err){
        return res.status(500).json({error : "Error with the server."});
    }

}

async function UploadCourse(req , res){
    try{
        const{title , description , authorname , author_id , pricing , image_hash , video_hash} = req.body;
        if(!title || !description || !authorname || !author_id || !pricing || !image_hash || !video_hash){
            return res.status(400).json({error : "Please fill all fields."});
        }
        const course = await Courses.create({
            title : title,
            description : description,
            author_name : authorname,
            author_wallet_id : author_id,
            course_price : pricing,
            course_image : image_hash,
            course_video : video_hash
        });

        if(!course){
            return res.status(400).json({error : "Error uploading course."});
        }
        return res.status(200).json({message : "Course uploaded successfully." , course : course});
    }catch(error){
        return res.status(500).json({error : `${error}`});
    }
}


module.exports = {
    DisplayCourses,
    UploadCourse
}