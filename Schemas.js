const Joi = require("joi");

module.exports.productSchema = Joi.object({
    name:Joi.string().required(),
    img:Joi.string().required(),
    price:Joi.number().min(0).required(),
    desc:Joi.string().required(0)
});

module.exports.reviewSchema = Joi.object({
    rating:Joi.string().min(1).max(5).required(),
    comment:Joi.string().required()
});