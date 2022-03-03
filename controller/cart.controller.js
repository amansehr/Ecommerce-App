const cartModel = require('../services/db.services').cart

module.exports.addToCart = async (req,res) => {
    try{
        const data = await cartModel.findOne({
            where : {
                userId : req.user.id,
                productId : req.body.productid
            }
        })
        
        if(data === null){
            await cartModel.create({userId : req.user.id,productId : req.body.productid,quantity : req.body.quantity});
        }
        else{
            await cartModel.update({quantity : data.quantity + req.body.quantity},{
                where : {
                    userId : req.user.id,
                    productId : req.body.productid
                }
            });
        }

        return res.status(201).send({
            status : "Success",
            message : "Added To Cart"
        })
    }
    catch(e){
        console.log(e)
        return res.status(500).send({
            status : "Failed",
            message : "Server Error"
        })
    }
}