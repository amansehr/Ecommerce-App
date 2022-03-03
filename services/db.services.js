const dbConfig = require('../config/db.config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect : dbConfig.dialect
})

const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize

db.User = require('../model/user.model')(sequelize,Sequelize);
db.ProductDetails = require('../model/productDetails.model')(sequelize,Sequelize);
db.placeOrder = require('../model/placeOrder.model')(sequelize,Sequelize);
db.cart = require('../model/cart.model')(sequelize,Sequelize);

module.exports = db;