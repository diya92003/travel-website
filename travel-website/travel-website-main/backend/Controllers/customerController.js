const customerModel=require("../Models/customerModel.js");
const validation = require("./validator.js");
const jwt=require("jsonwebtoken");
//Post data
let createCustomer= async(req,res)=>{
    try {
        let data = req.body
        let {Name,Email, Password}=data;
        if(!validation.isValidBody(data)){
            return res.status(400).send({status: false,msg:"No data provided"});
        }
        //Name Validation
        if(!validation.isValid(Name)){
            return res.status(400).send({status: false,msg:"Please Enter your name"});
        }
        if(!validation.isValidName.test(Name)){
            return res.status(400).send({status: false,msg:"Enter Valid Name"});
        }
        //Email
        if(!validation.isValid(Email)){
            return res.status(400).send({status: false,msg:"Please Enter your Email"});
        }
        if(!validation.isValidEmail.test(Email)){
            return res.status(400).send({status: false,msg:"Enter Valid Email"});
        }
        let dupEmail = await customerModel.findOne({Email});
        if(dupEmail){
            return res.status(400).send({msg:"Email Already exists"});
        }
        //Password
        if(!validation.isValid(Password)){
            return res.status(400).send({status: false,msg:"Please Enter your Password"});
        }
        let registerCustomer = await customerModel.create(data);
        return res.status(201).send({status:true, 
                                  msg:"Customer data registered succesfully",
                                  data:registerCustomer});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};

let loginCustomer= async(req,res)=>{
    try {
        let data=req.body
        if(!validation.isValidBody(data)){
            return res.status(404).send({status:false,msg:"No data provided"});
        }
        let {Email,Password } =data;
        if(!validation.isValid(Email)){
            return res.status(404).send({status:false,msg:"Please enter your email"});
        }
        if(!validation.isValid(Password)){
            return res.status(404).send({status:false,msg:"Please enter your password"});
        }
        let matchCustomer=await customerModel.findOne({Email,Password});
        if(!matchCustomer){
            return res.status(200).send({msg:"User not registered"});
        }else{
            const token=jwt.sign(
                {
                    customerId: matchCustomer._id.toString(),
                },
                "MERN STACK",
                {
                    expiresIn:"20000sec",
                }
            );
            return res.status(200).send({msg:"User logged in Successfully",token});
        }
    } catch (error) {
        return res.status(500).send({status:false,
                                    msg:"Internal Server Error"});
    }
}
module.exports = {createCustomer,loginCustomer};