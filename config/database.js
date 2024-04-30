const mongoose = require("mongoose")
require('dotenv').config()
const dbConnnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        // useNewUrlParser: true,              //deprecated
        // userUnifiedTopology: true
    })
    .then(()=>{
        console.log("Database connection established.")
    })
    .catch((error)=>{
        console.log("Error encountered ", error)
        // process.exit(1)
    })
}

module.exports = dbConnnect