const mongoose=require("mongoose")
const customerSchema= new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        Unique:true,
    },
    Password:{
        type:String,
        required:true,
    }
    },
    {timestamps:true},
);

module.exports = new mongoose.model("customer",customerSchema);