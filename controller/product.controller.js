const ProductDetailsModel = require('../services/db.services').ProductDetails

module.exports.productDetails = async (req,res) => {
    try{
        let data = await ProductDetailsModel.findAll()
        
        return res.status(200).send({
            status : "Success",
            message : data
        })
    }
    catch(e){
        return res.status(500).send({
            status : "Failed",
            message : "Server Side Error"
        })
    }
}