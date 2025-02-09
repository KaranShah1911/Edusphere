const mongoose = require('mongoose')
require('dotenv').config();

async function ConnectToDB(){
    try{
        await mongoose.connect(process.env.mongo_url ,  {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected Successfully")
    }
    catch{
        console.log("Error connecting to database")
    }
}

module.exports = ConnectToDB;