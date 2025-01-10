const mongoose = require('mongoose')

async function ConnectToDB(url){
    try{
        await mongoose.connect(url)
        console.log("Database connected Successfully")
    }
    catch{
        console.log("Error connecting to database")
    }
}

module.exports = ConnectToDB;