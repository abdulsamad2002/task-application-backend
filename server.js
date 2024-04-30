const express = require ('express')
const app = express ()
require('dotenv').config()

//server instance
app.use(express.json())
const todoRoutes = require('./routes/todo.routes.js')
app.use("/api/data", todoRoutes)

//start server
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server is up and listening at ${process.env.PORT}`)
})

//database connection
const connection = require('./config/database.js')
connection( )


//default route
app.get("/", (req,res)=>
{
    res.send("<h1>You have landed on the homepage</h1>")
})