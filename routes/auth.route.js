const route = require('express').Router()
const authCtrl = require('../controller/auth.controller')
const Joi = require('joi')
const validator = require('../middlewares/validate.middleware')

const signupschema = Joi.object().keys({
    username : Joi.string().required(),
    emailId : Joi.string().email().required(),
    password : Joi.string().min(6).required()
})
const loginschema = Joi.object().keys({
    username : Joi.string().required(),
    password : Joi.string().min(6).required()
})

route.post("/signup",[validator(signupschema)],authCtrl.signup);
route.post("/login",[validator(loginschema)],authCtrl.login);

module.exports = route