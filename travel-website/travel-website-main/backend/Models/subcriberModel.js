const mongoose=require("mongoose")
const subcriberSchema= new mongoose.Schema({
    Email:{
        type:String,
        required:true,
        Unique:true,
    }
    },
    {timestamps:true},
);

module.exports = new mongoose.model("subcriber",subcriberSchema);