const express = require('express')
const router = express.Router()

//Importing functions
const {createTodo} = require ('../controllers/createTodos.js')
const {getTodo} = require ('../controllers/listTodos.js')
const {listById} = require ('../controllers/listTodoById.js')
const {updateTodo} = require ('../controllers/updateTodos.js')
const {deleteTodo, deleteAll} = require ('../controllers/deleteTodo.js')


//Defining the API route
router.post("/createTodo", createTodo)
router.get("/listTodo", getTodo)
router.get("/listTodoById:id", listById)
router.put("/updateTodo:id", updateTodo)
router.delete("/deleteTodo:id", deleteTodo)
router.delete("/deleteAll", deleteAll)

module.exports = router