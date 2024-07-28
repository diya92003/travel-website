const mongoose=require("mongoose")
const bookingSchema= new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    from:{
        type:Date,
        required:true
    },
    to:{
        type:Date,
        required:true,
    },
    groupSize:{
        type:String,
        required:true,
    }
    },
    {timestamps:true},
);

module.exports = new mongoose.model("booking",bookingSchema);