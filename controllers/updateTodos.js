const todos = require("../models/todos.model.js")

exports.updateTodo = async (req, res)=>{
    try 
    { 
        const {id} = req.params
        const {title, description} = req.body
        const todo = await todos.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt: Date.now()}, 
        )
        res.status(200).json({
            success:true,
            data: todo,
            message: `Changes made to ID: ${id}`
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