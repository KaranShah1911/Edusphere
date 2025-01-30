const  Users = require('../models/user_schema');
const Courses = require("../models/course_schema");
const Transactions = require("../models/transaction_history")
const {get_token} = require('../service/auth');

// function DisplayUserLoginPage(req , res){
//     res.render('user_login');
// }

// function DisplayUserHomePage(req , res){
//     return res.status(200).json({message : "User home page rendered successfully."})
// }

async function VerifyUser(req ,res){
    try{
        const {wallet_id} = req.body;

        if(!wallet_id){
            return res.status(400).json({error : 'Metamask Wallet Id is required'})
        }

        const user = await Users.findOne({metamask_wallet_id : wallet_id});

        if(!user){
            return res.status(404).json({error : "No User Found. Verify Wallet Id."});
        }

        const token = get_token(user);

        return res.status(200).json({
            message : "Student Logged in successfully",
            data : {
                id : user._id,
                name : user.user_name,
                wallet_id : user.wallet_id,
                courses : user.courses_created,
            },
            token : token
        });
    }
    catch(error){
        return res.status(500).json({error : "Error with the server"})
    } 

    // if(!user){
    //     res.redirect("/user/login");
    // }
    // const token = setuser(user);
    // res.cookie("uid",token);
    // res.redirect('/user');

}

// function DisplayUserSignupPage(req , res){
//     res.render('user_signup');
// }

async function CreateUser(req , res){
    try{
        const {username , wallet_id} = req.body;

        if(!username || !wallet_id){
            return res.status(400).json({error : 'All fields are required.'})
        }
        
        const user = await Users.create({user_name : username , metamask_wallet_id : wallet_id});

        if(!user){
            return res.status(400).json({error : "Error in adding details of Student."});
        }

        const token = get_token(user);

        return res.status(200).json({
            message : "Student Signed up successfully",
            data:{
                id : user._id,
                name : user.user_name,
                wallet_id : user.metamask_wallet_id,
            },
            token : token
        });
    
        // res.redirect('/user');
    }catch(error){
        return res.status(500).json({error : "Error with the server"})
    }
}

async function DisplayMyLearning(req , res){
    try{
        if(!req.user){
            return res.status(400).json({error : "User is not logged in or Signed up."});
        }
        
        const id = req.user._id;
    
        const user = await Users.findById(id).populate("courses_enrolled").populate("courses_completed");
    
        // const courses_enrolled = user.course_enrolled.map(course => Courses.findById(course));
        // const courses_completed = user.course_completed.map(course => Courses.findById(course));
    
        
        return res.status(200).json({
            courses_enrolled : user.courses_enrolled ,
            courses_completed : user.courses_completed
        });
        
        // res.render('courses' , {
        //     courses_purchased: courses_enrolled ,
        //     courses_completed : courses_completed}
        // );
    }catch(error){
        return res.status(500).json({error : "Error with the server"})
    }
}

async function DisplayTransactionHistory(req , res){
    try{
        if(!req.user){
            return res.status(400).json({error : "User is not logged in or Signed up"});   
        }

        const id = req.user._id;

        try{
            const user_transactions = await Transactions.findById(id).populate("course_purchased");
            if(!user_transactions){
                return res.status(201).json({error : "No Transaction done yet"});
            }else{
                return res.status(200).json({message : "Transactions history fetched successfully", transaction_history : user_transactions});
            }
        }catch(error){
            return res.status(500).json({error : "Error fetching Transaction history"})
        }

    }catch(error){
        return res.status(500).json({error : "Error with the server"})
    }
}

async function PurchaseCourse(req , res){
    try{
        if(!req.user){
            return res.status(400).json({error : "User is not logged in or Signed up"});   
        }
        const course_id = req.params.id;
        const course = await Courses.findById(course_id);
        if(!course){
            return res.status(404).json({error : "Course not found."});
        }
        const purchased_courses = req.user.course_enrolled;
        if(purchased_courses.includes(course_id)){
            return res.status(200).json({message : "Course already purchased."});
        }
        purchased_courses.push(course_id);
        req.user.course_enrolled = purchased_courses;
        await req.user.save();
        
        const {transaction_id} = req.body;
        const new_transaction = await Transactions.create({user_id : req.user._id , transaction_address : transaction_id , course_purchased : course_id});
        return res.status(200).json({message : "Course purchased successfully." , transaction_id : new_transaction._id});
        
    }catch(error){
        return res.status(500).json({error : "Error with the server"})
    }
}

module.exports = {
    VerifyUser,
    CreateUser,
    DisplayMyLearning,
    DisplayTransactionHistory,
    PurchaseCourse
    // DisplayUserHomePage,
    // DisplayUserLoginPage,
    // DisplayUserSignupPage,
    // DisplayCourses
};