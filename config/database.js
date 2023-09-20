const mongoose = require("mongoose");

require("dotenv").config();

const ConnetDB = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log("Connected DB successfully"))
    .catch((err)=>{
        console.log("some issue");
        console.error(err);
        process.exit(1);
    })
}

module.exports = ConnetDB;