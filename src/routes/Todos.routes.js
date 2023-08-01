const express = require("express");
const { todoController } = require("../controllers");
const validate = require("../middlewares/validate");
const { todoValidations } = require("../validations");
const router = express.Router();

router
    .route("/")
    .get(todoController.getAllTodo)
    .post(validate(todoValidations.createTodo), todoController.createTodo);

router
    .route("/:_id")
    .get(validate(todoValidations.getTodo), todoController.getTodo)
    .patch(validate(todoValidations.updateTodo), todoController.updateTodo)
    .delete(validate(todoValidations.deleteTodo), todoController.deleteTodo);

module.exports = router;
