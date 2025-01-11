const {getuser} = require('../service/auth');

// allowing only the loggin user to see the courses
async function allow_login_user(req , res , next){
    try{
        const id = req.cookies?.uid;
        console.log(id);
        if(!id){
            // if user is not logged in
            // return res.redirect('/login');
            // return res.redirect('/user/login');
            return res.status(400).json({error : "User is not logged in."})
        }
        
        const user = getuser(id);
        
        if(!user){
            // if user is not logged in
            // return res.render('error_page');
            // return res.redirect('/login');
            return res.status(400).json({error : "No user found."})
        }
    
        req.user = user;
        next();
    }catch(error){
        return res.status(500).json({error : "Error with the server"});
    }
    
}

module.exports = {allow_login_user};