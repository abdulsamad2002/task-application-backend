const todos = require("../models/todos.model.js")

exports.listById = async (req, res)=>{
    try 
    {
        //Extract Todo item on the basis of ID
        const id = req.params.id
        const todo = await todos.findById({_id: id})

        if(!todo) 
        {
            return res.status(404).json({
                success:false,
                message: "No data found with given ID"
            })
        }
        res.status(200).json({
            success: true,
            data: todo,
            message: `Data found with ID: ${id}`
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