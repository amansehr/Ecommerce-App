const route = require('express').Router()
const Joi = require('joi')
const validate = require('../middlewares/validate.middleware')
const isauth = require('../middlewares/auth.middleware').auth;
const orderHistoryctrl = require('../controller/orderHistory.controller');

route.get('/orderhistory',[isauth],orderHistoryctrl.orderHistory);

module.exports = route