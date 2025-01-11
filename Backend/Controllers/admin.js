const Admins = require('../models/admin_schema');
const { get_token } = require('../service/auth');

async function CreateAdmin(req , res){
    try{
        const {name , wallet_id} = req.body;

        if(!name || !wallet_id){
            return res.status(400).json({message : "Please fill all fields" })
        }

        const admin = await Admins.create({
            admin_name : name,
            wallet_id : wallet_id
        });

        if(!admin){
            return res.status(400).json({message : "Error Signing up the admin"});
        }

        const token = get_token(admin)

        return res.status(200).json({
            message : "Admin created successfully",
            id : admin._id,
            name : admin.admin_name,
            wallet_id : admin.wallet_id,
            courses : admin.courses_created,
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

}

module.exports = {
    CreateAdmin,
    VerifyAdmin
};