const reviewModel=require("../Models/reviewModel.js");
const validation = require("./validator.js");
//Post data
let createReview= async(req,res)=>{
    try {
        let data = req.body
        if(!validation.isValidBody(data)){
            return res.status(400).send({status: false,msg:"No data provided"});
        }
        let registerreview = await reviewModel.create(data);
        return res.status(201).send({status:true, 
                                  msg:"review submitted succesfully",
                                  data:registerreview});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};
//Get all data
let readreview=async(req,res)=>{
    try {
        let reviewData = await reviewModel.find()
        return res.status(201).send({status:true, 
                                  msg:"Data read succesfully",
                                  data:reviewData});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};
//Get data by id
let readreviewbyid=async(req,res)=>{
    try {
        let data = req.params.id
        let reviewbyid = await reviewModel.findById(data)
        return res.status(201).send({status:true, 
                                  msg:" data by id read succesfully",
                                  data:reviewbyid});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};
//Update using id
let updatereview= async(req,res)=>{
    try {
        let data = req.body
        let viewRec = await reviewModel.findById(req.params.id)
        if(!viewRec)
        return res.status(404).send({msg:" record not found"});
        let {review}=data;
        let updatedData = await reviewModel.findByIdAndUpdate(req.params.id, data, {new:true});
        return res.status(201).send({status:true, 
                                  msg:"data updated succesfully",
                                  data:updatedData});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};
//Delete using ID
let deletereview=async(req,res)=>{
    try {
        let data = req.params.id
        let deletereview= await reviewModel.findByIdAndDelete(data);
        return res.status(201).send({status:true, 
                                  msg:"data deleted succesfully",
                                  data:deletereview});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};

module.exports = {createReview,readreview,readreviewbyid,updatereview,deletereview};