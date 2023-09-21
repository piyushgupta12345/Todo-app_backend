// import the model
const Todo = require("../models/Todo");

// define route handler

exports.updateTodo = async(req, res) =>{
    try {
        // fetch data from req body
        const {title, description} = req.body;
        // extract todo items basis on id
        const {id} = req.params;
        await Todo.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt: Date.now()}
        );

        res.status(200).json(
            {
                success: true,
                // data: todo,
                message:`updated succeesfully`,
            }
        )
    } 
    catch (err) {
        console.error(err);
        res.status(500).json(
            {
                success: false,
                error: err.message,
                message:"server error",
            }
        )
    }
}