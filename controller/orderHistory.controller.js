const placeOrderModel = require('../services/db.services').placeOrder

module.exports.orderHistory = async (req,res) => {
    try{
        let data = await placeOrderModel.findAll({
            where : {
                status : 1,
                userId : req.user.id
            }
        });

        return res.status(200).send({
            status : "Success",
            message : "order history of user",
            data : data
        })
    }
    catch(e){
        return res.status(500).send({
            status : "Failed",
            message : "Server Side Error",
        })
    }
}