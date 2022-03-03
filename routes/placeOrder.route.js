const route = require('express').Router()
const Joi = require('joi')
const validator = require('../middlewares/validate.middleware')
const isauth = require('../middlewares/auth.middleware').auth;
const placeOrderctrl = require('../controller/placeOrder.controller');

const placeOrderSchema = Joi.object().keys({
    productId : Joi.array().items(Joi.number().min(1).required()).unique().required()    
});

route.post('/placeorder',[isauth,validator(placeOrderSchema)],placeOrderctrl.placeOrder);

module.exports = route