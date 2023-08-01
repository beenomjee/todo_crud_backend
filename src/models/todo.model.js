const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        required: true,
    },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
