const express = require('express')
const {DisplayAdminLoginPage , VerifyAdmin , DisplayAdminPage} = require('../Controllers/admin')

const admin_router = express.Router()

admin_router.get('/' , DisplayAdminPage)
admin_router.get('/login' , DisplayAdminLoginPage)
admin_router.post('/login' , VerifyAdmin)

module.exports = admin_router;