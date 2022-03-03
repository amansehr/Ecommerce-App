module.exports = (sequelize,Sequelize) =>{
    const cart = sequelize.define('cart',{
        userId : Sequelize.INTEGER,
        productId : Sequelize.INTEGER,
        quantity: Sequelize.INTEGER
    });

    return cart;
}