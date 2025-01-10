const express = require('express')
const {DisplayHomePage} = require("../controllers/general")

const general_router = express.Router()

// request for the home page
general_router.get("/" , DisplayHomePage)
// general_router.get("/login" , DisplayLoginPage)

module.exports = general_router;
