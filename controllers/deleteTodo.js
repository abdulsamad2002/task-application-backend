const todo = require('../models/todos.model.js')

exports.deleteTodo = async(req, res) =>{
    try {
        const {id} = req.params
        await todo.findByIdAndDelete(
            {_id: id}
        )
        res.status(200).json({
            success:200,
            data: res,
            message: `${id} deleted successfully.`
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

exports.deleteAll = async (req, res)=>{
    try {
        await todo.deleteMany({})
        res.status(200).json({
            success: true,
            data: res,
            message: res.message,
        })
    } 
    catch (error) {
        res.status(500)
        .json({
            success: false,
            message: error.message,
        })
    }
}