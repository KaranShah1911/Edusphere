const  Users = require('../models/user_schema');
const Courses = require("../models/course_schema");
const Transactions = require("../models/transaction_history")
const {get_token} = require('../service/auth');

// function DisplayUserLoginPage(req , res){
//     res.render('user_login');
// }

function DisplayUserHomePage(req , res){
    return res.status(200).json({message : "User home page rendered successfully."})
}

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

        const token = get_token(admin);

        return res.status(200).json({
            message : "Student Logged in successfully",
            id : admin._id,
            name : admin.admin_name,
            wallet_id : admin.wallet_id,
            courses : admin.courses_created,
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
        const {username  , email , wallet_id} = req.body;

        if(!username || !email || !wallet_id){
            return res.status(400).json({error : 'All fields are required.'})
        }
        
        const user = await Users.create({user_name : username , email_id : email , metamask_wallet_id : wallet_id});

        if(!user){
            return res.status(400).json({error : "Error signing up the student"});
        }

        const token = get_token(user);

        return res.status(200).json({
            message : "Student Signed up successfully",
            id : user._id,
            name : user.user_name,
            wallet_id : user.metamask_wallet_id,
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
    
        const user = await Users.findById(id);
    
        const courses_enrolled = user.course_enrolled.map(course => Courses.findById(course));
        const courses_completed = user.course_completed.map(course => Courses.findById(course));
    
        
        return res.status(200).json({
            courses_enrolled : courses_enrolled ,
            courses_completed : courses_completed
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
            const transaction_history = await Transactions.findById(id);
            if(transaction_history.length<=0){
                return res.status(200).json({error : "No Transaction done yet"});
            }else{
                return res.status(200).json({message : "Transactions history fetched successfully", transaction_history : transaction_history});
            }
        }catch(error){
            return res.status(500).json({error : "Error fetching Transaction history"})
        }

    }catch(error){
        return res.status(500).json({error : "Error with the server"})
    }
}

// async function DisplayCourses(req ,res){
//     try{
//         const courses = await Courses.find();
//         if(courses.length>0){
//             res.render("courses" , {allcourses : courses})
//         }else{
//             throw "No courses available"
//         }
//     }catch(err){
//         res.json({error : `${err}`})
//     }

// }

// async function DisplayStore(req ,res){
            
// }

module.exports = {
    DisplayUserHomePage,
    VerifyUser,
    CreateUser,
    DisplayMyLearning,
    DisplayTransactionHistory 
    // DisplayUserLoginPage,
    // DisplayUserSignupPage,
    // DisplayCourses
};