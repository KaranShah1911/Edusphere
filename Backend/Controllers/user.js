const  Users = require('../models/user_schema');
const Courses = require("../models/course_schema");
const {setuser} = require('../service/auth');

function DisplayUserLoginPage(req , res){
    res.render('user_login');
}

function DisplayUserHomePage(req , res){
    res.render('user_page');
}

async function VerifyUser(req ,res){
    const {wallet_id} = req.body;

    const user = await Users.findOne({metamask_wallet_id : wallet_id});

    if(!user){
        res.redirect("/user/login");
    }

    const token = setuser(user);

    res.cookie("uid",token);

    res.redirect('/user');

}

function DisplayUserSignupPage(req , res){
    res.render('user_signup');
}

async function CreateUser(req , res){
    const {username  , email , wallet_id} = req.body;

    await Users.create({user_name : username , email_id : email , metamask_wallet_id : wallet_id});

    res.redirect('/user');
}

async function DisplayCourses(req , res){
    if(!req.user){
        return res.redirect('/login');
    }
    
    const id = req.user._id;

    const user = await Users.findById(id);

    const courses_enrolled = user.course_enrolled.map(course => Courses.findById(course));
    const courses_completed = user.course_completed.map(course => Courses.findById(course));

    res.render('courses' , {
        courses_purchased: courses_enrolled ,
        courses_completed : courses_completed}
    );
}

module.exports = {
    DisplayUserLoginPage,
    VerifyUser,
    DisplayUserHomePage,
    DisplayUserSignupPage,
    CreateUser, 
    DisplayCourses
};