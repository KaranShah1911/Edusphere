const Admins = require('../models/admin_schema');

function DisplayAdminLoginPage(req , res){
    res.render('admin_login');
}

function DisplayAdminPage(req , res){
    res.render('admin_page');
}

async function VerifyAdmin(req ,res){
    const wallet_id = req.body;

    const admin = await Admins.findOne({metamask_wallet_id : wallet_id});

    if(!admin){
        return res.redirect("/admin/login");
    }

    const token = setadmin(admin);

    res.cookie('admin_id',token);

    res.redirect('/');

}

module.exports = {
    DisplayAdminLoginPage,
    VerifyAdmin,
    DisplayAdminPage
};