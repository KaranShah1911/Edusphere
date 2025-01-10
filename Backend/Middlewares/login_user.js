const {getuser} = require('../service/auth');

// allowing only the loggin user to see the courses
async function allow_login_user(req , res , next){
    const id = req.cookies?.uid;
    console.log(id);
    if(!id){
        // if user is not logged in
        // return res.redirect('/login');
        return res.redirect('/user/login');
    }
    
    const user = getuser(id);
    
    if(!user){
        // if user is not logged in
        return res.render('error_page');
        // return res.redirect('/login');
    }

    req.user = user;
    next();
}

module.exports = {allow_login_user};