const route = require('express').Router()
const Joi = require('joi')
const validator = require('../middlewares/validate.middleware')
const isauth = require('../middlewares/auth.middleware').auth;
const cartctrl = require('../controller/cart.controller');

const addtocartschema = Joi.object().keys({
    productid : Joi.number().min(1).required(),
    quantity : Joi.number().min(1).required()    
})
route.post('/addtocart',[isauth,validator(addtocartschema)],cartctrl.addToCart);

module.exports = route