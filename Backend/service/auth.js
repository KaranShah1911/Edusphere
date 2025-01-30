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

function get_token(user){
    
    const token = jwt.sign({
        id:user._id,
        wallet_id : user.metamask_wallet_id
    },key , {expiresIn: '30d'});

    return token;
}

module.exports = {getuser , get_token};