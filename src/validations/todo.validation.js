const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createTodo = {
    body: Joi.object().keys({
        description: Joi.string().required(),
    }),
};

const getTodo = {
    params: Joi.object().keys({
        _id: Joi.required().custom(objectId),
    }),
};

const updateTodo = {
    params: Joi.object().keys({
        _id: Joi.required().custom(objectId),
    }),
    body: Joi.object().keys({
        description: Joi.string().optional(),
        isCompleted: Joi.boolean().optional(),
    }),
};

const deleteTodo = {
    params: Joi.object().keys({
        _id: Joi.required().custom(objectId),
    }),
};

module.exports = {
    createTodo,
    getTodo,
    updateTodo,
    deleteTodo,
};
