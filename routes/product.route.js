const route = require('express').Router()
const Joi = require('joi')
const validator = require('../middlewares/validate.middleware')
const isauth = require('../middlewares/auth.middleware').auth;
const productctrl = require('../controller/product.controller');

route.get('/productdetails',[isauth],productctrl.productDetails);

module.exports = route