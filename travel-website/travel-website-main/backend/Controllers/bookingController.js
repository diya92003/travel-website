const bookingModel=require("../Models/bookingModel.js");
const validation = require("./validator.js");
const jwt=require("jsonwebtoken");
//Post data
let createBooking= async(req,res)=>{
    try {
        let data = req.body
        let {Name,groupSize}=data;
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
        //Password
        if(!validation.isValid(groupSize)){
            return res.status(400).send({status: false,msg:"Please Enter groupsize"});
        }
        let registerBooking = await bookingModel.create(data);
        return res.status(201).send({status:true, 
                                  msg:"Booking done succesfully!",
                                  data:registerBooking});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};
module.exports={createBooking}