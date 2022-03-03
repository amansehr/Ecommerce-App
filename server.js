const express = require('express')
const app = express()
require("dotenv").config()
const bodyParser = require('body-parser')
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const db = require('./services/db.services')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan('tiny'))
app.use(cookieParser())

db.sequelize.sync();
//db.sequelize.sync({force : true});

const auth = require('./routes/auth.route');
app.use('/',auth);

const productDetails = require('./routes/product.route');
app.use('/',productDetails);

const addtocart = require('./routes/cart.route');
app.use('/',addtocart);

const placeOrder = require('./routes/placeOrder.route');
app.use('/',placeOrder);

const orderHistory = require('./routes/orderHistory.route');
app.use('/',orderHistory);


app.listen(process.env.PORT,(req,res) => {
    console.log(`server started at ${process.env.PORT}`)
})