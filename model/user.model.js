module.exports = (sequelize,Sequelize) =>{
    const User = sequelize.define('User',{
        emailId : Sequelize.STRING(50),
        password : Sequelize.STRING(200),
        username : Sequelize.STRING(200),
        gender : Sequelize.STRING(50),
        dateOfBirth : Sequelize.DATE,
        phoneNo : Sequelize.INTEGER,
        role : {
            type : Sequelize.STRING(50),
            default : "user"
        }
    });

    return User;
}