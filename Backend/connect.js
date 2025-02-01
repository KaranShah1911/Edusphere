const mongoose = require('mongoose')

async function ConnectToDB(mongo_url){
    try{
        await mongoose.connect(mongo_url , {
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