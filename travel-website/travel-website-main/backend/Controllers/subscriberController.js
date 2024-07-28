const subcriberModel=require("../Models/subcriberModel.js")
const validation = require("./validator.js");
let createSubcriber= async(req,res)=>{
    try {
        let data = req.body;
        let {Email}=data;
        if(!validation.isValidBody(data)){
            return res.status(400).send({status:false,msg:"No data provided"});
        }
        //Email
        if(!validation.isValid(Email)){
            return res.status(400).send({status: false,msg:"Please Enter your Email"});
        }
        if(!validation.isValidEmail.test(Email)){
            return res.status(400).send({status: false,msg:"Enter Valid Email"});
        }
        let dupEmail = await subcriberModel.findOne({Email});
        if(dupEmail){
            return res.status(400).send({msg:"Email Already exists"});
        }
        let registersubcriber = await subcriberModel.create(data);
        return res.status(201).send({status:true, 
                                  msg:"Email registered succesfully",
                                  data:registersubcriber});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};
module.exports={createSubcriber};