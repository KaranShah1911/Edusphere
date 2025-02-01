const Courses = require("../models/course_schema")
const Admins = require("../models/admin_schema")

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
        if(!req.user){
            return res.status(401).json({error : "Unauthorized Access"});
        }
        const{title , description , price , category , image_hash , video_hash} = req.body;
        if(!title || !description || !price || !image_hash || !video_hash){
            return res.status(400).json({error : "Please fill all fields."});
        }
        const admin = await Admins.findById(req.user._id);
        const course = await Courses.create({
            title : title,
            description : description,
            category : category,
            author_name : admin.admin_name,
            author_wallet_id : admin.metamask_wallet_id,
            course_price : price,
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