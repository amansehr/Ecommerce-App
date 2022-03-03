module.exports = (sequelize,Sequelize) =>{
    const placeOrder = sequelize.define('placeOrder',{
        userId : Sequelize.INTEGER,
        productId : Sequelize.INTEGER,
        quantity: Sequelize.INTEGER,
        status : {
            type : Sequelize.INTEGER,
            defaultValue : 0
        }
    });

    return placeOrder;
}