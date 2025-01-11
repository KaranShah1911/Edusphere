// Rendering the home page
function DisplayHomePage(req ,res){
    return res.status(200).json({message : "Home page is rendered successfully" , data : "Welcome to home page" });
}

module.exports = {
    DisplayHomePage,
}