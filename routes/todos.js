const express = require("express");
const router = express.Router();

// import controller
const {createTodo} = require("../controllers/createTodo")
const {getTodo,getTodoByID} = require("../controllers/getTodo")

// define Api routes
router.post('/createTodo', createTodo);
router.get('/getTodo', getTodo);
router.get('/getTodo/:id', getTodoByID);

module.exports = router;