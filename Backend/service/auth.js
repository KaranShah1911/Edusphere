const jwt = require('jsonwebtoken');
const key = 'edusphere';

function getuser(token){
    if(!token){
        return null;
    }
    try{
        return jwt.verify(token,key);
    } catch{
        return null;
    }
}

function setuser(user){

    // console.log(user);
    const token = jwt.sign({
        id:user._id,
        wallet_id : user.metamask_wallet_id,
        email:user.email
    },key , {expiresIn: '1h'});

    // console.log(token);
    return token;
}

module.exports = {getuser , setuser};