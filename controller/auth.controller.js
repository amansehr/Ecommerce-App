const userModel = require("../services/db.services").User
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const { generateToken } = require("./jwtToken.controller");

module.exports.signup = async (req,res) => {
    try{
        const data = await userModel.findAll({
            where : {
                [Op.or] : [
                    { username : req.body.username},
                    { password : req.body.password}
                ]
            }
        });

        if(data.length > 0){
            return res.status(409).send({
                status : "Failed",
                message : "user already exist",
            });
        }
        const passwordHash = bcrypt.hashSync(req.body.password,10);
        await userModel.create({username : req.body.username,emailId : req.body.emailId,password : passwordHash});
        return res.status(201).send({
            status : "Success",
            message : "Signedin Successfully !!!"
        })
    }
    catch(e){
        console.log("Error in auth controller",e);
        return res.status(500).send({
            status: "Failed",
            message: "Server Error"
        })
    }
}
module.exports.login = async (req,res) => {
    try{
        console.log("1")
        let data = await userModel.findOne({
            where : {
                username : req.body.username
            }
        });
        console.log(data)
        if(data.length == 0){
            return res.status(403).send({
                status : "Failed",
                message : "Please Signup !!!",
            })
        }
        if(bcrypt.compareSync(req.body.password,data.password)){
            return generateToken(data,res)
        }
        return res.status(403).send({
            status : "Failed",
            message : "Incorrect Password",
        })

    }
    catch(e){
        console.log(e)
        return res.status(500).send({
            status : "Failed",
            message : "Server Side Error"
        })
    }

}