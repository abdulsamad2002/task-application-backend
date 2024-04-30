const todos = require("../models/todos.model.js")

exports.getTodo = async (req, res)=>{
    try 
    {
        const allTodos = await todos.find({})
        res.status(200)
        .json({
            success: true, 
            data: allTodos,
            message: "Collection of todos fetched."
        })
    } 
    catch (error) 
    {
        console.error(error)
        res.status(500)
        .json({
            success: false,
            error: error.message,
            message: "Server error",
        })
    }
}