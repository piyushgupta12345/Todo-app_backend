const express = require("express");
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 3000

// middleware to parse json request body
app.use(express.json());

// import routes for TODO API
const todoRoutes = require("./routes/todos");

// mount the todo API routes
app.use("/api/v1", todoRoutes)

// start server
app.listen(PORT,()=>{
    console.log(`server is started at the port ${PORT}`)
})

// db Connection
const ConnetDB = require("./config/database")
ConnetDB();

app.get("/",(req, res)=>{
    res.send(`<h1>Hello I am piyush</h1>`)
})