const placeOrderModel = require('../services/db.services').placeOrder
const cartModel = require('../services/db.services').cart

module.exports.placeOrder = async (req,res) => {
    try{
        let data = await cartModel.findAll({
            where : {
                userId : req.user.id,
                productId : req.body.productId
            },
            attributes : ['userId','productId','quantity']
        });
        let sepProductId = [];
        d = [];
        data.forEach((val) => {
            d.push({ "userId" : val.userId, "productId": val.productId, "quantity": val.quantity });
            sepProductId.push(val.productId);
        })
        for(let i = 0;i < req.body.productId.length;i++){
            if(!sepProductId.includes(req.body.productId[i])){
                return res.status(422).send({
                    status : "Failed",
                    message : "Incorrect data"
                })
            }
        }
        console.log(d)
        await placeOrderModel.bulkCreate(d)
        await cartModel.destroy({
            where : { 
                productId : sepProductId,
                userId : req.user.id
            }
        })
        return res.status(200).send({
            status : "Success",
            message : "Order Placed"
        })

    }
    catch(e){
        console.log("Error in placeOrder Controller",e)
        return res.status(500).send({
            status : "Failed",
            message : "Server Side Error"
        })
    }
}