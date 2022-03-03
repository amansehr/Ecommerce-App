module.exports = (sequelize,Sequelize) =>{
    const productDetails = sequelize.define('productDetails',{
        name : Sequelize.STRING(500),
        category : Sequelize.STRING(50),
        price : Sequelize.INTEGER,
        description : Sequelize.STRING(10000),
    });

    return productDetails;
}