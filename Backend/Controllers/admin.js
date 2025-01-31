const Admins = require('../models/admin_schema');
const Courses = require('../models/course_schema');
const { get_token } = require('../service/auth');

async function CreateAdmin(req , res){
    try{
        const {username , wallet_id} = req.body;

        if(!username || !wallet_id){
            return res.status(400).json({message : "Please fill all fields" })
        }

        const admin = await Admins.create({
            admin_name : username,
            metamask_wallet_id : wallet_id
        });

        if(!admin){
            return res.status(400).json({error : "Error Signing up the admin"});
        }

        const token = get_token(admin)

        return res.status(200).json({
            message : "Admin created successfully",
            data : {
                id : admin._id,
                name : admin.admin_name,
                wallet_id : admin.metamask_wallet_id
            },
            token : token
        });

    }catch(error){
        return res.status(500).json({error : `${error}`})
    }
}
async function VerifyAdmin(req ,res){
    try{
        const {wallet_id} = req.body;

        if(!wallet_id){
            return res.status(400).json({error : 'Metamask Wallet Id is required'})
        }

        const admin = await Admins.findOne({metamask_wallet_id : wallet_id});

        if(!admin){
            return res.status(404).json({error : "No Admin Found. Verify Wallet Id."});
        }

        const token = get_token(admin);

        return res.status(200).json({
            message : "Admin Logged in successfully",
            data : {
                id : admin._id,
                name : admin.admin_name,
                wallet_id : admin.wallet_id,
                courses : admin.courses_created,
            },
            token : token
        });
    }
    catch(error){
        return res.status(500).json({error : "Error with the server"})
    } 

}

async function AddCourse(req,res){
    try{
        if(!req.user){
            return res.status(401).json({error : "Unauthorized Access"})
        }
        const {course_id} = req.body;
        req.user.courses_created.push(course_id);
        await req.user.save();
        return res.status(200).json({message : "Course added Successfully"});
    }catch(error){
        return res.status(500).json({error : "Error with the server"})
    }
}

async function GetCourses(req,res){
    try{
        if(!req.user){
            return res.status(401).json({error : "Unauthorized Access"})
        }
        const id = req.params.id;
        const admin = await Admins.findById(id).populate('courses_created');
        if(!admin){
            return res.status(404).json({error : "No Admin Found."})
        }
        return res.status(200).json({message : "Courses fetched Successfully" , courses : admin.courses_created});
    }catch(error){
        return res.status(500).json({error : "Error with the server"});
    }
}

async function DeleteCourse(req,res){
    try{
        if(!req.user){
            return res.status(401).json({error : "Unauthorized Access"})
        }
        const id = req.params.id;
        const admin = await Admins.findById(req.user._id);
        if(!admin){
            return res.status(404).json({error : "No Admin Found."})
        }
        const courses = admin.courses_created;
        const new_courses = courses.filter(course_id => course_id!=id);
        admin.courses_created = new_courses;
        await admin.save();
        const updated_courses = new_courses.map(course_id => Courses.findById(course_id))
        return res.status(200).json({message : "Course Deleted Successfully" , courses : updated_courses});
    }catch(error){
        return res.status(500).json({error : "Error with the server"});
    }
}

module.exports = {
    CreateAdmin,
    VerifyAdmin,
    GetCourses,
    DeleteCourse,
    AddCourse
};