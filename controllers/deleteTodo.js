// import the model
const Todo = require("../models/Todo");

// define route handler

exports.deleteTodo = async(req, res) =>{
    try {
        // extract todo items basis on id
        const {id} = req.params;
        await Todo.findByIdAndDelete({_id: id})

        res.status(200).json(
            {
                success: true,
                message:`deleted succeesfully`,
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